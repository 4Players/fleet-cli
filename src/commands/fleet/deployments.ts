import { Command, CommandOptions } from "@cliffy/command";
import { Input, Number, Select } from "@cliffy/prompt";

import {
  AppLocationSetting,
  Location,
  Placement,
  ServerConfig,
  StoreAppLocationSettingRequest,
  UpdateAppLocationSettingRequest,
} from "../../../backend/api/index.ts";

import { apiClient } from "../../client.ts";
import { getSelectedAppOrExit } from "../apps.ts";
import { filterArray } from "../../filter.ts";
import {
  confirm,
  ensureApiException,
  getAllPaginated,
  inform,
  logError,
  logErrorAndExit,
  stdout,
  validateAtLeastOneOptionAvailable,
  validateRequiredOptions,
} from "../../utils.ts";

const deploymentsList = new Command()
  .name("list")
  .description("List all server deployments for the selected app.")
  .option(
    "--filter <filter:string>",
    "Filter result based on a filter expression",
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let deployments: AppLocationSetting[] = [];
    try {
      deployments = await getAllPaginated((page) =>
        apiClient.getAppLocationSettings(app.id, 50, page)
      );
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to load deployments. Error: " + error.body.message,
        error.code,
      );
    }

    if (deployments.length === 0) {
      inform(options, "No server deployments found.");
      return;
    }

    // Filter array if filter option is provided
    if (options.filter) {
      try {
        deployments = await filterArray(deployments, options.filter);
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit("Failed to filter servers. Error: " + error.message);
      }
    }

    stdout(
      deployments,
      options,
      "table(id,name,serverConfig.name,placement.constraints.city,placement.constraints.country,numInstances)",
    );
  });

export const getDeploymentDetails = new Command()
  .name("get")
  .description("Get data for a specified deployment.")
  .option("--deployment-id <deploymentId:number>", "Deployment ID.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let deploymentId = options.deploymentId;
    if (!deploymentId) {
      let deployments: AppLocationSetting[] = [];
      try {
        deployments = await getAllPaginated((page) =>
          apiClient.getAppLocationSettings(app.id, 50, page)
        );
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load deployments. Error: ",
          error.body.message,
          error.code,
        );
      }

      deploymentId = await Select.prompt({
        message:
          "Select the deployment that should be shown or provide the --deployment-id=<deploymentId> flag",
        options: deployments.map((deployment) => {
          return { name: deployment.name, value: deployment.id };
        }),
      });
    }

    try {
      const deployment = await apiClient.getAppLocationSettingById(
        deploymentId,
      );

      stdout(
        deployment,
        options,
        "table(id,name,serverConfig.name,placement.constraints.city,placement.constraints.country,numInstances)",
      );
    } catch (_error) {
      logErrorAndExit(
        `Deployment ${deploymentId} does not exist (or not in the app ${app.name}, id: ${app.id})`,
      );
    }
  });

export const createDeployment = new Command()
  .name("create")
  .description("Create a new deployment.")
  .option("--payload <payload:string>", "Payload as JSON string.")
  .option(
    "--dry-run",
    "Dry run mode, does not create the deployment, but prints the payload.",
  )
  .group("Update Values")
  .option("--name <name:string>", "Name of the image.")
  .option("--config-id <configId:number>", "The server config ID.")
  .option(
    "--num-instances <numInstances:number>",
    "Number of instances to deploy.",
  )
  .option("--country <country:string>", "The country to deploy to.")
  .option("--city <city:string>", "The location to deploy to.")
  .option(
    "--password <password:string>",
    "Optional password for protected locations.",
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    let payload: StoreAppLocationSettingRequest | null = null;

    if (options.payload && options.payload.length > 0) {
      try {
        payload = JSON.parse(options.payload) as StoreAppLocationSettingRequest;
      } catch (error) {
        logError("Invalid payload. Please provide a valid JSON string.", error);
        return;
      }
    } else if (!options.name) {
      // Prompt for name
      const name = await Input.prompt({
        message: "What's the name of your deployment?",
      });

      // Select Location
      let locations: Location[] = [];
      try {
        locations = await getAllPaginated((page) =>
          apiClient.getLocations(50, page)
        );
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load locations. Error: " + error.body.message,
          error.code,
        );
      }

      const placement = await Select.prompt<Placement>({
        message: "Select location to deploy:",
        options: locations.map((location) => {
          return {
            name: `${location.city}, ${location.country} ${
              location.isProtected ? "[Protected]" : ""
            }`,
            value: {
              constraints: location,
            },
          };
        }),
      }); // Need to hack the type system as there seems to be a bug in the Select prompt definition

      let locationPassword: string | undefined;
      if (placement.constraints.isProtected) {
        locationPassword = await Input.prompt({
          message: "Enter the password to deploy in this protected location:",
        });
      }

      let configs: ServerConfig[] = [];
      try {
        configs = await getAllPaginated((page) =>
          apiClient.getServerConfigs(app.id, 50, page)
        );
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load server configs. Error: " + error.body.message,
          error.code,
        );
      }
      const serverConfigId = await Select.prompt<number>({
        message: "Choose the server config to deploy:",
        options: configs.map((config) => {
          return {
            name: config.name,
            value: config.id,
          };
        }),
      });

      const numInstances = await Number.prompt({
        message: "Enter the number of instances to deploy:",
        validate(value) {
          if (parseInt(value) < 1) {
            return "Number of instances must be greater than 0.";
          }
          return true;
        },
      });

      payload = {
        name: name,
        serverConfigId: serverConfigId,
        placement: placement,
        numInstances: numInstances,
        password: locationPassword,
      };
    } else {
      validateRequiredOptions(options, ["name", "configId", "numInstances"]);

      if (!options.country || !options.city) {
        logError(
          "You need to provide the country and city for the placement. Use the `odin fleet locations` command to get a list of available locations.",
        );
        Deno.exit(1);
      }

      // Try to find the correct location using the specified options (--city, --country and --password)
      let locations: Location[] = [];
      try {
        locations = await getAllPaginated((page) =>
          apiClient.getLocations(50, page)
        );
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load locations. Error: " + error.body.message,
          error.code,
        );
      }
      const constraints = locations.find((location) =>
        location.city === options.city &&
        location.country === options.country &&
        location.isProtected === (!!options.password?.length)
      );

      if (!constraints) {
        logError("Unable to find a location matching the specified arguments.");
        Deno.exit(1);
      }

      payload = {
        name: options.name,
        serverConfigId: options.configId,
        placement: {
          constraints,
        },
        numInstances: options.numInstances,
        password: options.password,
      };
    }

    if (!payload) {
      console.error("Something went wrong, invalid payload.");
      return;
    }

    if (options.dryRun) {
      inform(options, "Dry run mode, payload:");
      stdout(payload, options, "json");
    } else {
      const confirmed = await confirm(
        options,
        "Do you want to create this deployment?",
      );

      if (confirmed) {
        try {
          const deployment = await apiClient.createAppLocationSetting(
            app.id,
            payload,
          );
          stdout(
            deployment,
            options,
            "table(id,name,binary.name,binary.version)",
          );
        } catch (error) {
          ensureApiException(error);
          logErrorAndExit(
            "Failed to create deployment. Error: ",
            error.body.message,
            error.code,
            JSON.stringify(payload),
          );
        }
      } else {
        inform(options, "Deployment creation aborted.");
        inform(
          options,
          "This payload would have been used, you can use the --payload flag to provide it: ",
        );
        stdout(payload, options, "json");
      }
    }
  });

const updateDeployment = new Command()
  .name("update")
  .description("Update a deployment.")
  .option("--deployment-id <deploymentId:number>", "Deployment ID.")
  .group("Update options:")
  .option("--payload <payload:string>", "Payload as JSON string.")
  .option("--name <name:string>", "New name for the deployment.")
  .option(
    "--num-instances <numInstances:number>",
    "Number of instances to deploy.",
  )
  .option("--config-id <configId:number>", "Server config ID.")
  .group("Other options:")
  .option(
    "--dry-run",
    "Dry run mode, does not update the config, but prints the payload.",
  )
  .action(async (options: CommandOptions) => {
    validateAtLeastOneOptionAvailable(options, [
      "name",
      "numInstances",
      "configId",
      "payload",
    ]);
    const selectedApp = await getSelectedAppOrExit(options);
    let deploymentId = options.deploymentId;
    let deployments: AppLocationSetting[] = [];
    try {
      deployments = await getAllPaginated((page) =>
        apiClient.getAppLocationSettings(selectedApp.id, 50, page)
      );
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to load deployments. Error: " + error.body.message,
        error.code,
      );
    }

    if (!deploymentId) {
      deploymentId = await Select.prompt<number>({
        message:
          "Select the deployment that should be deleted or provide the --deployment-id=<deploymentId> flag",
        options: deployments.map((deployment) => {
          return { name: deployment.name, value: deployment.id };
        }),
      });
    }

    let deployment: AppLocationSetting;
    try {
      deployment = deployments.find((d) => d.id === deploymentId)!;
    } catch (_) {
      logError(
        `Image ${deploymentId} does not exist (or not in the app ${selectedApp.name}, id: ${selectedApp.id})`,
      );
      Deno.exit(1);
    }

    let payload: UpdateAppLocationSettingRequest | null = null;
    if (options.payload && options.payload.length > 0) {
      try {
        const rawPayload = JSON.parse(options.payload);
        delete rawPayload.placement?.constraints.cityDisplay;
        payload = rawPayload;
      } catch (error) {
        logError("Invalid payload. Please provide a valid JSON string.", error);
        Deno.exit(1);
      }
    } else {
      payload = {
        name: options.name ?? deployment.name,
        numInstances: options.numInstances ?? deployment.numInstances,
      };
    }

    if (options.dryRun) {
      inform(options, "Dry run mode, payload:");
      stdout(payload, options, "json");
    } else {
      const confirmed = await confirm(
        options,
        `Do you really want to update the deployment?`,
      );

      if (confirmed) {
        try {
          await apiClient.updateAppLocationSetting(deploymentId, payload!);
          inform(options, "Deployment updated successfully.");
        } catch (error) {
          ensureApiException(error);
          logErrorAndExit(
            "Failed to update config. Error: " + error.body.message,
            error.code,
          );
        }
      }
    }
  });

const deleteDeployment = new Command()
  .name("delete")
  .description("Delete a deployment.")
  .option("--deploymentId <deploymentId:number>", "Deployment ID.")
  .action(async (options: CommandOptions) => {
    const selectedApp = await getSelectedAppOrExit(options);
    let deploymentId = options.deploymentId;
    let deployments: AppLocationSetting[] = [];
    try {
      deployments = await getAllPaginated((page) =>
        apiClient.getAppLocationSettings(selectedApp.id, 50, page)
      );
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to load deployments. Error: " + error.body.message,
        error.code,
      );
    }

    if (!deploymentId) {
      deploymentId = await Select.prompt<number>({
        message:
          "Select the deployment that should be deleted or provide the --deployment-id=<deploymentId> flag",
        options: deployments.map((deployment) => {
          return { name: deployment.name, value: deployment.id };
        }),
      });
    }

    let deployment: AppLocationSetting;
    try {
      deployment = deployments.find((d) => d.id === deploymentId)!;
    } catch (_) {
      logErrorAndExit(
        `Image ${deploymentId} does not exist (or not in the app ${selectedApp.name}, id: ${selectedApp.id})`,
      );
    }

    const confirmed = await confirm(
      options,
      `Do you want to delete the deployment ${deployment!.name}?`,
    );

    if (confirmed) {
      try {
        await apiClient.deleteAppLocationSetting(deploymentId);
        inform(
          options,
          "Deployment deleted successfully, all servers will be stopped immediately.",
        );
      } catch (error) {
        logErrorAndExit("Failed to delete deployment. Error: " + error);
      }
    }
  });

export const deployments = new Command()
  .name("deployments")
  .description("Manage ODIN Fleet server deployments.")
  .action(() => {
    deployments.showHelp();
  })
  .command("list", deploymentsList)
  .command("get", getDeploymentDetails)
  .command("update", updateDeployment)
  .command("create", createDeployment)
  .command("delete", deleteDeployment);
