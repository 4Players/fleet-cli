import { Command, CommandOptions } from "@cliffy/command";
import { Confirm, Input, Number, prompt, Select } from "@cliffy/prompt";

import {
  Binary,
  BinaryType,
  DockerRegistry,
  OperatingSystem,
  SteamRuntime,
  StoreBinaryRequest,
} from "../../../backend/api/index.ts";

import {
  confirm,
  ensureApiException,
  getAllPaginated,
  inform,
  logErrorAndExit,
  stdout,
  validateRequiredOptions,
} from "../../utils.ts";
import { getSelectedAppOrExit } from "../apps.ts";
import { apiClient } from "../../client.ts";
import { filterArray } from "../../filter.ts";

export const imageList = new Command()
  .name("list")
  .description("List all images.")
  .option("--unused", "List only unused images (i.e. not in a configuration).")
  .option(
    "--filter <filter:string>",
    "Filter result based on a filter expression",
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let binaries: Binary[] = [];
    try {
      binaries = await getAllPaginated((
        page: number,
      ) => (apiClient.getBinaries(app.id, 50, page)));

      if (options.unused) {
        // Load all deployments and filter out the used configs
        const configs = await getAllPaginated((
          page: number,
        ) => (apiClient.getServerConfigs(app.id, 50, page)));
        const usedImages = configs.map((config) => config.binaryId);
        binaries = binaries.filter((binary) => !usedImages.includes(binary.id));
      }

      if (options.filter) {
        try {
          binaries = await filterArray(binaries, options.filter);
        } catch (error) {
          ensureApiException(error);
          logErrorAndExit("Failed to filter images. Error: " + error.message);
        }
      }

      if (binaries.length === 0) {
        console.log("No images have been created for the selected app.");
        return;
      }
    } catch (error) {
      logErrorAndExit("Failed to list images. Error: " + error);
    }

    await stdout(
      binaries,
      options,
      "table(id,name,version,type,os,ready,status,statusMessage)",
    );
  });

export const getImageDetails = new Command()
  .name("get")
  .description("Get the status of an image.")
  .option("--image-id <imageId:number>", "Image ID.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    let imageId = options.imageId;
    if (!imageId) {
      let images: Binary[] = [];
      try {
        images = await getAllPaginated((
          page: number,
        ) => (apiClient.getBinaries(app.id, 50, page)));
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load images. Error: ",
          error.body.message,
          error.code,
        );
      }

      imageId = await Select.prompt({
        message:
          "Select the image to get the status for or provide the --image-id=<imageId> flag",
        options: images.map((image) => {
          return { name: image.name, value: image.id };
        }),
      });
    }

    try {
      const image = await apiClient.getBinaryById(imageId);

      await stdout(
        image,
        options,
        "table(id,name,version,type,os,ready,status,statusMessage)",
      );
    } catch (_) {
      logErrorAndExit(
        `Image ${imageId} does not exist (or not in the app ${app.name}, id: ${app.id})`,
      );
    }
  });

export const createImage = new Command()
  .name("create")
  .description("Create a new image.")
  .option("--payload <payload:string>", "Payload as JSON string.")
  .group("Update Values")
  .option("--name <name:string>", "Name of the image.")
  .option("--version <version:string>", "Version of the image.")
  .option("--os <os:string>", "Operating system of the image.")
  .option("--type <type:string>", "Type of the image")
  .option("--docker-image <dockerImage:string>", "Docker image name.")
  .option("--registry-id <registryId:number>", "Docker registry ID.")
  .option("--steam-app-id <steamAppId:number>", "Steam App ID.")
  .option("--branch <branch:string>", "Steam branch.")
  .option("--password <password:string>", "Steam password.")
  .option("--command <command:string>", "Steam command.")
  .option(
    "--steamcmd-username <steamcmdUsername:string>",
    "Steam CMD username.",
  )
  .option(
    "--steamcmd-password <steamcmdPassword:string>",
    "Steam CMD password.",
  )
  .option("--runtime <runtime:string>", "Steam runtime.")
  .option("--headful", "Steam headful.")
  .option("--request-license", "Steam request license.")
  .option("--unpublished", "Steam unpublished.")
  .option(
    "--additional-packages <additionalPackages:string>",
    "Additional packages to be installed in the Docker image.",
  )
  .group("Other Options")
  .option(
    "--dry-run",
    "Dry run mode, does not create the deployment, but prints the payload.",
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    let payload: StoreBinaryRequest | null = null;

    if (options.payload && options.payload.length > 0) {
      try {
        payload = JSON.parse(options.payload) as StoreBinaryRequest;
      } catch (error) {
        logErrorAndExit(
          "Invalid payload. Please provide a valid JSON string.",
          error,
        );
      }
    } else if (!options.name) {
      const result = await prompt([
        {
          name: "name",
          message: "What's the name of your image?",
          type: Input,
        },
        {
          name: "version",
          message: "What's the version of your image?",
          type: Input,
        },
        {
          name: "os",
          message: "Select operating system",
          type: Select,
          options: [
            { name: "Linux", value: "linux" },
            { name: "Windows", value: "windows" },
          ],
        },
        {
          name: "type",
          message: "Choose the type of the image",
          type: Select,
          options: [
            { name: "Docker Image", value: "dockerImage" },
            { name: "Steam", value: "steam" },
          ],
        },
      ]);

      payload = {
        name: result.name!,
        version: result.version!,
        type: result.type as BinaryType,
        os: result.os as OperatingSystem,
      };

      if (result.type === "dockerImage") {
        console.log("Please wait, loading docker registries...");
        let dockerRegistries: DockerRegistry[] = [];
        try {
          dockerRegistries = await getAllPaginated((
            page: number,
          ) => (apiClient.getDockerRegistries(50, page)));
        } catch (e) {
          logErrorAndExit("Failed to load docker registries. Error: " + e);
        }

        const registries = dockerRegistries.map((registry) => {
          return {
            name: registry.name,
            value: registry.id,
          };
        });
        const dockerImage = await prompt([
          {
            name: "registryId",
            message: "Select the docker registry",
            type: Select,
            options: registries,
          },
          {
            name: "imageName",
            message: "Enter the image name",
            type: Input,
          },
        ]);

        payload.dockerImage = {
          imageName: dockerImage.imageName!,
          registryId: parseInt(dockerImage.registryId!) || 0,
        };
      } else if (result.type === "steam") {
        const steam = await prompt([
          {
            name: "steamAppId",
            message: "What's the id of your Steamworks app?",
            type: Number,
          },
          {
            name: "branch",
            message: "Which branch should be used?",
            type: Input,
          },
          {
            name: "password",
            message: "Enter the password (if required)",
            type: Input,
          },
          {
            name: "command",
            message: "Enter the command to start the server",
            type: Input,
          },
          {
            name: "additionalPackages",
            message:
              "Does your server require additional packages to the Steam Runtime?",
            type: Input,
          },
        ]);

        let steamUsername = null;
        let steamPassword = null;

        if (
          await Confirm.prompt(
            "Does your gameserver need to access to Steam CMD?",
          )
        ) {
          console.log(
            "Please enter your Steam CMD credentials. We don't support 2FA yet, so either create a new account or disable 2FA for your account.",
          );
          steamUsername = await Input.prompt("Enter your Steam username:");
          steamPassword = await Input.prompt("Enter your Steam password:");
        }

        const runtime = await Select.prompt({
          message: "Select the Steam runtime, if unsure choose Sniper",
          options: [
            { name: "Scout (oldest)", value: "scout" },
            { name: "Soldier", value: "soldier" },
            { name: "Sniper (latest - if unsure use this)", value: "sniper" },
          ],
        });

        const headful = await Confirm.prompt(
          "Does your gameserver need a graphical interface?",
        );

        const requestLicense = await Confirm.prompt(
          "Does your gameserver need to request a license agreement?",
        );

        const unpublished = await Confirm.prompt(
          "Is your Steamworks app unpublished?",
        );

        payload.steam = {
          steamAppId: steam.steamAppId!,
          branch: steam.branch!,
          password: steam.password!,
          command: steam.command!,
          steamcmdUsername: steamUsername,
          steamcmdPassword: steamPassword,
          runtime: runtime as SteamRuntime,
          headful: headful,
          requestLicense: requestLicense,
          unpublished: unpublished,
          additionalPackages: steam.additionalPackages ?? null,
        };
      }
    } else {
      validateRequiredOptions(options, ["name", "version", "os", "type"]);
      if (options.type === "dockerImage") {
        validateRequiredOptions(options, ["dockerImage", "registryId"]);
      } else if (options.type === "steam") {
        validateRequiredOptions(options, [
          "steamAppId",
          "branch",
          "password",
          "command",
        ]);
      }

      if (options.type !== "dockerImage" && options.type !== "steam") {
        logErrorAndExit(
          "Invalid image type. Please select either dockerImage or steam.",
        );
      }

      if (options.os !== "linux" && options.os !== "windows") {
        logErrorAndExit(
          "Invalid operating system. Please select either linux or windows.",
        );
      }

      payload = {
        name: options.name,
        version: options.version,
        type: options.type as BinaryType,
        os: options.os as OperatingSystem,
      };

      if (options.type === "dockerImage") {
        payload.dockerImage = {
          imageName: options.dockerImage,
          registryId: options.registryId,
        };
      } else if (options.type === "steam") {
        payload.steam = {
          steamAppId: options.steamAppId,
          branch: options.branch,
          password: options.password,
          command: options.command,
          steamcmdUsername: options.steamcmdUsername,
          steamcmdPassword: options.steamcmdPassword,
          runtime: options.runtime as SteamRuntime,
          headful: options.headful ?? false,
          requestLicense: options.requestLicense ?? false,
          unpublished: options.unpublished ?? false,
          additionalPackages: options.additionalPackages ?? null,
        };
      }
    }

    if (!payload) {
      logErrorAndExit("Something went wrong, invalid payload.");
    }

    if (options.dryRun) {
      inform(options, "Dry run mode, payload:");
      await stdout(payload, options, "json");
    } else {
      const confirmed = await confirm(
        options,
        "Do you want to create the image?",
      );

      if (confirmed) {
        try {
          const binary = await apiClient.createBinary(app.id, payload!);
          await stdout(
            binary,
            options,
            "table(id,name,version,type,os,ready,status,statusMessage)",
          );
        } catch (error) {
          ensureApiException(error);
          logErrorAndExit(
            "Failed to create image. Error: ",
            error.body.message,
            error.code,
            JSON.stringify(payload),
          );
        }
      } else {
        inform(options, "Image creation aborted.");
        inform(
          options,
          "This payload would have been used, you can use the --payload flag to provide it: ",
        );
        await stdout(payload, options, "json");
      }
    }
  });

export const deleteImage = new Command()
  .name("delete")
  .description("Delete an image.")
  .option("--image-id <imageId:number>", "Image ID.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let imageId = options.imageId;
    if (!imageId) {
      let images: Binary[] = [];
      try {
        images = await getAllPaginated((
          page: number,
        ) => (apiClient.getBinaries(app.id, 50, page)));
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load images. Error: ",
          error.body.message,
          error.code,
        );
      }

      imageId = await Select.prompt({
        message:
          "Select the image that should be deleted or provide the --image-id=<imageId> flag",
        options: images.map((image) => {
          return { name: image.name, value: image.id };
        }),
      });
    }

    let image: Binary;
    try {
      image = await apiClient.getBinaryById(imageId);
    } catch (_error) {
      const app = await getSelectedAppOrExit(options);
      logErrorAndExit(
        `Image ${imageId} does not exist (or not in the app ${app.name}, id: ${app.id})`,
      );
    }

    const confirmed = await confirm(
      options,
      `Do you want to delete the image ${image!.name}?`,
    );

    if (confirmed) {
      try {
        await apiClient.deleteBinary(imageId);
        inform(options, "Image deleted successfully.");
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to delete image. Error: " + error.body.message,
          error.code,
        );
      }
    }
  });

export const images = new Command()
  .name("images")
  .description(
    "Manage ODIN Fleet images that are the base of your deployments.",
  )
  .action(() => {
    images.showHelp();
  })
  .command("list", imageList)
  .command("get", getImageDetails)
  .command("create", createImage)
  .command("delete", deleteImage);
