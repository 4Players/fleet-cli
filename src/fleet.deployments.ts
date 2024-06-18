import { Command } from "$cliffy/command/command.ts";
import { CommandOptions } from "$cliffy/command/types.ts";
import { getSelectedApp } from "./apps.ts";
import { apiClient } from "./client.ts";
import { Table } from "$cliffy/table/table.ts";
import {AppLocationSetting, CreateAppLocationSettingRequest, Placement, Location, ServerConfig} from "./api/index.ts";
import { Input, Number, Select } from "$cliffy/prompt/mod.ts";
import { confirm, logError, logSuccess } from "./utils.ts";

const deploymentsList = new Command()
  .name("list")
  .description("List all server deployments for the selected app.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedApp(options);
    let deployments: AppLocationSetting[] = [];
    try {
      deployments = await apiClient.getAppLocationSettings(app.id);
    } catch (error) {
      logError("Failed to load deployments. Error: " + error.body.message, error.code);
      Deno.exit(1);
    }

    if (deployments.length === 0) {
      console.log("No server deployments found.");
      return;
    }
    const table: Table = new Table();
    table.header(["ID", "Name", "Server-Config", "Location", "Num Instances"]);
    deployments.forEach((config) => {
      table.push([
        config.id,
        config.name,
        config.serverConfig?.name,
        `${config.placement.constraints.city} (${config.placement.constraints.country})`,
        config.numInstances,
      ]);
    });
    table.render();
  });

export const createDeployment = new Command()
  .name("create")
  .description("Create a new deployment.")
  .option("--payload <payload:string>", "Payload as JSON string.")
  .option("--dry-run", "Dry run mode, does not create the deployment, but prints the payload.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedApp(options);

    let payload: CreateAppLocationSettingRequest | null = null;

    if (options.payload && options.payload.length > 0) {
      try {
        payload = JSON.parse(options.payload) as CreateAppLocationSettingRequest;
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
      console.log("Dry run mode, payload:");
      console.log(JSON.stringify(payload));
    } else {
      const confirmed = await confirm(options, "Do you want to create this deployment?");

      if (confirmed) {
        try {
          const deployment = await apiClient.createAppLocationSetting(app.id, payload);
          logSuccess("Deployment created successfully, ID: " + deployment.id);
        } catch(error) {
          logError("Failed to create deployment. Error: ", error.body.message, error.code, JSON.stringify(payload));
          Deno.exit(1);
        }
      } else {
        logError("Deployment creation aborted.");
        console.log("This payload would have been used, you can use the --payload flag to provide it: ");
        console.log(JSON.stringify(payload));
      }
    }
  });

const deleteDeployment = new Command()
  .name("delete")
  .description("Delete a deployment.")
  .option("--deploymentId <deploymentId:number>", "Deployment ID.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedApp(options);
    let deploymentId = options.deploymentId;
    let deployments: AppLocationSetting[] = [];
    try {
      deployments = await apiClient.getAppLocationSettings(app.id);
    } catch (error) {
      logError("Failed to load deployments. Error: " + error.body.message, error.code);
      Deno.exit(1);
    }

    if (!deploymentId) {
      deploymentId = await Select.prompt<number>({
        message: "Select the deployment that should be deleted or provide the --deploymentId=<deploymentId> flag",
        options: deployments.map((deployment) => {
          return { name: deployment.name, value: deployment.id };
        }),
      });
    }

    let deployment: AppLocationSetting;
    try {
      deployment = deployments.find((d) => d.id === deploymentId)!;
    } catch (error) {
      logError(`Image ${deploymentId} does not exist (or not in the app ${app.name}, id: ${app.id})`);
      Deno.exit(1);
    }

    const confirmed = await confirm(options, `Do you want to delete the deployment ${deployment!.name}?`);

    if (confirmed) {
      try {
        await apiClient.deleteAppLocationSetting(deploymentId);
        logSuccess("Deployment deleted successfully, all servers will be stopped immediately.");
      } catch (error) {
        logError("Failed to delete deployment. Error: " + error);
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
  .command("create", createDeployment)
  .command("delete", deleteDeployment);
