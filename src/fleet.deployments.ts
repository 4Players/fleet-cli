import { Command } from "$cliffy/command/command.ts";
import { CommandOptions } from "$cliffy/command/types.ts";
import {getSelectedAppOrExit} from "./apps.ts";
import { apiClient } from "./main.ts";
import { Table } from "$cliffy/table/table.ts";
import {
  AppLocationSetting,
  StoreAppLocationSettingRequest,
  Placement,
  Location,
  ServerConfig,
  UpdateAppLocationSettingRequest,
} from "./api/index.ts";
import { Input, Number, Select } from "$cliffy/prompt/mod.ts";
import {confirm, deepMerge, inform, logError, logSuccess, stdout} from "./utils.ts";

const deploymentsList = new Command()
  .name("list")
  .description("List all server deployments for the selected app.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let deployments: AppLocationSetting[] = [];
    try {
      deployments = await apiClient.getAppLocationSettings(app.id);
    } catch (error) {
      logError("Failed to load deployments. Error: " + error.body.message, error.code);
      Deno.exit(1);
    }

    if (deployments.length === 0) {
      inform(options,"No server deployments found.");
      return;
    }

    stdout(deployments, options, "table(id,name,serverConfig.name,placement.constraints.city,placement.constraints.country,numInstances)");
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
        deployments = await apiClient.getAppLocationSettings(app.id);
      } catch (error) {
        console.log("Failed to load deployments. Error: ", error.body.message, error.code);
        Deno.exit(1);
      }

      deploymentId = await Select.prompt({
        message: "Select the deployment that should be shown or provide the --deployment-id=<deploymentId> flag",
        options: deployments.map((deployment) => {
          return {name: deployment.name, value: deployment.id};
        }),
      });
    }

    let deployment: AppLocationSetting;
    try {
      deployment = await apiClient.getAppLocationSettingById(deploymentId);
    } catch (error) {
      logError(`Deployment ${deploymentId} does not exist (or not in the app ${app.name}, id: ${app.id})`);
      Deno.exit(1);
    }

    stdout(deployment, options, "table(id,name,serverConfig.name,placement.constraints.city,placement.constraints.country,numInstances)");
  });

export const createDeployment = new Command()
  .name("create")
  .description("Create a new deployment.")
  .option("--payload <payload:string>", "Payload as JSON string.")
  .option("--dry-run", "Dry run mode, does not create the deployment, but prints the payload.")
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
    } else {
      // Prompt for name
      const name = await Input.prompt({
        message: "What's the name of your deployment?",
      });

      // Select Location
      let locations: Location[] = [];
      try {
        locations = await apiClient.getLocations();
      } catch (error) {
        logError("Failed to load locations. Error: " + error.body.message, error.code);
        Deno.exit(1);
      }

      const placement = await Select.prompt<Placement>({
        message: "Select location to deploy:",
        options: locations.map((location) => {
          return {
            name: `${location.city}, ${location.country}`,
            value: {
              constraints: {
                country: location.country,
                city: location.city,
              },
            },
          };
        }),
      }); // Need to hack the type system as there seems to be a bug in the Select prompt definition

      let configs: ServerConfig[] = [];
      try {
        configs = await apiClient.getServerConfigs(app.id);
      } catch (error) {
        logError("Failed to load server configs. Error: " + error.body.message, error.code);
        Deno.exit(1);
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
        autoScalerEnabled: false,
        numInstances: numInstances,
      };
    }

    if (!payload) {
      console.error("Something went wrong, invalid payload.");
      return;
    }

    if (options.dryRun) {
      inform(options,"Dry run mode, payload:");
      stdout(payload, options, "json");
    } else {
      const confirmed = await confirm(options, "Do you want to create this deployment?");

      if (confirmed) {
        try {
          const deployment = await apiClient.createAppLocationSetting(app.id, payload);
          stdout(deployment, options, "table(id,name,binary.name,binary.version)");
        } catch(error) {
          logError("Failed to create deployment. Error: ", error.body.message, error.code, JSON.stringify(payload));
          Deno.exit(1);
        }
      } else {
        inform(options,"Deployment creation aborted.");
        inform(options,"This payload would have been used, you can use the --payload flag to provide it: ");
        stdout(payload, options, "json");
      }
    }
  });

const updateDeployment = new Command()
  .name("update")
  .description("Update a deployment.")
  .option("--deployment-id <deploymentId:number>", "Deployment ID.")
  .option("--payload <payload:string>", "Payload as JSON string.", {required: true})
  .option("--dry-run", "Dry run mode, does not update the config, but prints the payload.")
  .action(async (options: CommandOptions) => {
    const selectedApp = await getSelectedAppOrExit(options);
    let deploymentId = options.deploymentId;
    let deployments: AppLocationSetting[] = [];
    try {
      deployments = await apiClient.getAppLocationSettings(selectedApp.id);
    } catch (error) {
      logError("Failed to load deployments. Error: " + error.body.message, error.code);
      Deno.exit(1);
    }

    if (!deploymentId) {
      deploymentId = await Select.prompt<number>({
        message: "Select the deployment that should be deleted or provide the --deployment-id=<deploymentId> flag",
        options: deployments.map((deployment) => {
          return { name: deployment.name, value: deployment.id };
        }),
      });
    }

    let deployment: AppLocationSetting;
    try {
      deployment = deployments.find((d) => d.id === deploymentId)!;
    } catch (error) {
      logError(`Image ${deploymentId} does not exist (or not in the app ${selectedApp.name}, id: ${selectedApp.id})`);
      Deno.exit(1);
    }

    let payload: UpdateAppLocationSettingRequest | null = null;
    try {
      payload = JSON.parse(options.payload) as UpdateAppLocationSettingRequest;
    } catch (error) {
      logError("Invalid payload. Please provide a valid JSON string.", error);
      return;
    }

    // Merge the payload with the existing config
    payload = deepMerge(deployment, payload);

    if (options.dryRun) {
      inform(options, "Dry run mode, payload:");
      stdout(payload, options, "json");
    } else {
      const confirmed = await confirm(options, `Do you really want to update the deployment?`);

      if (confirmed) {
        try {
          await apiClient.updateAppLocationSetting(deploymentId, payload!);
          inform(options,"Deployment updated successfully.");
        } catch (error) {
          logError("Failed to update config. Error: " + error.body.message, error.code);
          Deno.exit(1);
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
      deployments = await apiClient.getAppLocationSettings(selectedApp.id);
    } catch (error) {
      logError("Failed to load deployments. Error: " + error.body.message, error.code);
      Deno.exit(1);
    }

    if (!deploymentId) {
      deploymentId = await Select.prompt<number>({
        message: "Select the deployment that should be deleted or provide the --deployment-id=<deploymentId> flag",
        options: deployments.map((deployment) => {
          return { name: deployment.name, value: deployment.id };
        }),
      });
    }

    let deployment: AppLocationSetting;
    try {
      deployment = deployments.find((d) => d.id === deploymentId)!;
    } catch (error) {
      logError(`Image ${deploymentId} does not exist (or not in the app ${selectedApp.name}, id: ${selectedApp.id})`);
      Deno.exit(1);
    }

    const confirmed = await confirm(options, `Do you want to delete the deployment ${deployment!.name}?`);

    if (confirmed) {
      try {
        await apiClient.deleteAppLocationSetting(deploymentId);
        inform(options,"Deployment deleted successfully, all servers will be stopped immediately.");
      } catch (error) {
        logError("Failed to delete deployment. Error: " + error);
        Deno.exit(1);
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
