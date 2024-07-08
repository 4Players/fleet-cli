import { Command } from "$cliffy/command/command.ts";
import { CommandOptions } from "$cliffy/command/types.ts";
import { getSelectedApp } from "./apps.ts";
import { apiClient } from "./client.ts";
import { Table } from "$cliffy/table/table.ts";
import {Binary, BinaryType, CreateBinaryRequest, DockerRegistry, OperatingSystem} from "./api/index.ts";
import { prompt } from "$cliffy/prompt/prompt.ts";
import { Input } from "$cliffy/prompt/input.ts";
import { Select } from "$cliffy/prompt/select.ts";
import { Number } from "$cliffy/prompt/number.ts";
import { confirm, logError, logSuccess } from "./utils.ts";

export const imageList = new Command()
  .name("list")
  .description("List all images.")
  .action(async (options: CommandOptions) => {
    const selectedApp = await getSelectedApp(options);
    let binaries: Binary[] = [];
    try {
      binaries = await apiClient.getBinaries(selectedApp.id);
      if (binaries.length === 0) {
        console.log("No images have been created for the selected app.");
        return;
      }
    } catch (error) {
      logError("Failed to list images. Error: " + error);
      Deno.exit(1);
    }

    const table: Table = new Table();
    table.header(["ID", "Name", "Version", "Type", "OS"]);
    binaries.forEach((binary) => {
      table.push([binary.id, binary.name, binary.version, binary.type, binary.os]);
    });
    table.render();
  });

export const createImage = new Command()
  .name("create")
  .description("Create a new image.")
  .option("--payload <payload:string>", "Payload as JSON string.")
  .option("--dry-run", "Dry run mode, does not create the deployment, but prints the payload.")
  .action(async (options: CommandOptions) => {
    const selectedApp = await getSelectedApp(options);

    let payload: CreateBinaryRequest | null = null;

    if (options.payload && options.payload.length > 0) {
      try {
        payload = JSON.parse(options.payload) as CreateBinaryRequest;
      } catch (error) {
        logError("Invalid payload. Please provide a valid JSON string.", error);
        return;
      }
    } else {
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
        os: result.os as OperatingSystem
      };

      if (result.type === "dockerImage") {
        console.log("Please wait, loading docker registries...");
        let dockerRegistries: DockerRegistry[] = [];
        try {
          dockerRegistries = await apiClient.getDockerRegistries();
        } catch (e) {
          logError("Failed to load docker registries. Error: " + e);
          Deno.exit(1);
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
        ]);

        payload.steam = {
          steamAppId: steam.steamAppId!,
          branch: steam.branch!,
          password: steam.password!,
        };
      }
    }

    if (!payload) {
      logError("Something went wrong, invalid payload.");
      return;
    }

    if (options.dryRun) {
      console.log("Dry run mode, payload:");
      console.log(JSON.stringify(payload));
    } else {
      const confirmed = await confirm(options, "Do you want to create the image?");

      if (confirmed) {
        try {
          const binary = await apiClient.createBinary(selectedApp.id, payload!);
          logSuccess("Image created successfully, ID: ", binary.id, binary);
        } catch (error) {
          logError("Failed to create image. Error: ", error.body.message, error.code, JSON.stringify(payload));
          Deno.exit(1);
        }
      } else {
        logError("Image creation aborted.");
        console.log("This payload would have been used, you can use the --payload flag to provide it: ");
        console.log(JSON.stringify(payload));
      }
    }
  });

export const deleteImage = new Command()
  .name("delete")
  .description("Delete an image.")
  .option("--imageId <imageId:number>", "Image ID.")
  .action(async (options: CommandOptions) => {
    const selectedApp = await getSelectedApp(options);
    let imageId = options.imageId;
    if (!imageId) {
      let images: Binary[] = [];
      try {
        images = await apiClient.getBinaries(selectedApp.id);
      } catch (error) {
        logError("Failed to load images. Error: ", error.body.message, error.code);
        Deno.exit(1);
      }

      imageId = await Select.prompt({
        message: "Select the image that should be deleted or provide the --imageId=<imageId> flag",
        options: images.map((image) => {
          return { name: image.name, value: image.id };
        }),
      });
    }

    let image: Binary;
    try {
      image = await apiClient.getBinaryById(imageId);
    } catch (error) {
      const app = await getSelectedApp(options);
      logError(`Image ${imageId} does not exist (or not in the app ${app.name}, id: ${app.id})`);
      Deno.exit(1);
    }

    const confirmed = await confirm(options, `Do you want to delete the image ${image!.name}?`);

    if (confirmed) {
      try {
        await apiClient.deleteBinary(imageId);
        logSuccess("Image deleted successfully.");
      } catch (error) {
        logError("Failed to delete image. Error: " + error.body.message, error.code);
      }
    }
  });

export const images = new Command()
  .name("images")
  .description("Manage ODIN Fleet images that are the base of your deployments.")
  .action(() => {
    images.showHelp();
  })
  .command("list", imageList)
  .command("create", createImage)
  .command("delete", deleteImage);
