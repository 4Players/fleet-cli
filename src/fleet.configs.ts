import {Command} from "$cliffy/command/command.ts";
import {CommandOptions} from "$cliffy/command/types.ts";
import {getSelectedApp} from "./apps.ts";
import {apiClient} from "./client.ts";
import {Table} from "$cliffy/table/table.ts";
import {Confirm, Input, Number, prompt, Select} from "$cliffy/prompt/mod.ts";
import {
  Binary, ConfigFile,
  CreateServerConfigRequest, EnvironmentVariableType,
  Mount,
  PortDefinition,
  Protocol,
  PublishMode,
  ResourceAllocations,
  RestartPolicy,
  RestartPolicyCondition,
  ServerConfig,
} from "./api/index.ts";
import {confirm, logError, logSuccess} from "./utils.ts";
import {Tier} from "./types/tier.ts";

const configsList = new Command()
  .name("list")
  .description("List all server configurations for the selected app.")
  .action(async (options: CommandOptions) => {
    const selectedApp = await getSelectedApp(options);

    let configs: ServerConfig[] = [];
    try {
      configs = await apiClient.getServerConfigs(selectedApp.id);
      if (configs.length === 0) {
        console.log("No server configurations found.");
        return;
      }
    } catch (error) {
      console.log("Failed to list configs. Error: ", error.body.message, error.code);
      Deno.exit(1);
    }

    const table: Table = new Table();
    table.header(["ID", "Name", "Image"]);
    configs.forEach((config) => {
      table.push([config.id, config.name, config.binary!.name]);
    });
    table.render();
  });

// Create a new server config
const createConfig = new Command()
  .name("create")
  .description("Create a new server configuration.")
  .option("--payload <payload:string>", "Payload as JSON string.")
  .option("--dry-run", "Dry run mode, does not create the deployment, but prints the payload.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedApp(options);
    if (!app) {
      logError("No app selected. Please select an app first (use `apps select`).");
      return;
    }

    let payload: CreateServerConfigRequest | null = null;

    if (options.payload && options.payload.length > 0) {
      try {
        payload = JSON.parse(options.payload) as CreateServerConfigRequest;
      } catch (error) {
        logError("Invalid payload. Please provide a valid JSON string.", error);
        return;
      }
    } else {
      let binaries: Binary[] = [];
      try {
        binaries = await apiClient.getBinaries(app.id);
        if (binaries.length === 0) {
          logError(
            `No images have been created for the selected app (${app.name}) yet. Use 'fleet images create' to create an image`,
          );
          return;
        }
      } catch (error) {
        console.log("Failed to load images. Error: ", error.body.message, error.code);
        Deno.exit(1);
      }

      const name = await Input.prompt("Name of Config:");

      // Select binary
      const binaryId = await Select.prompt<number>({
        message: "Select Binary:",
        options: binaries.map((binary) => ({
          name: `${binary.name} (${binary.version})`,
          value: binary.id,
        })),
      }); // Need to hack the type system as there seems to be a bug in the Select prompt definition

      const command = await Input.prompt("Command (overwrite ENTRYPOINT): (optional)");
      const args = await Input.prompt("Arguments (overwrite CMD): (optional)");
      const notes = await Input.prompt("Add notes (something to remember later): (optional)");

      // Restart policy
      const restartPolicyCondition = await Select.prompt({
        message: "Select Restart Policy:",
        options: [
          {
            name: "Always",
            value: "any",
          },
          {
            name: "On Failure",
            value: "on-failure",
          },
          {
            name: "Never",
            value: "none",
          },
        ],
      });

      //Download tiers
      const tiersUrl = "https://b2b-dashboard-fw5pmdbggq-lm.a.run.app/assets/data/tiers.json";
      const tiers = await fetch(tiersUrl).then((res) => res.json() as unknown as Tier[]);
      const tier = await Select.prompt<ResourceAllocations>({
        message: "Select Tier:",
        options: tiers.map((tier) => ({
          name: `${tier.name!} (${tier.resources!.limits.memory}GB RAM, ${tier.resources!.limits.cpu} CPU cores)`,
          value: tier.resources!,
        })),
      });

      // Ports
      console.log(
        "You need to define the ports that your server will use (i.e. 7777 for a game server). These ports will be made available to the public internet during the deployment. You can define multiple ports.",
      );
      const ports: Array<PortDefinition> = [];
      while (await Confirm.prompt("Add a port?")) {
        const portDefinition = await prompt([
          {
            name: "name",
            message: "Name of port (anything you like that helps you remember it, i.e. Game Port or RCON Port):",
            type: Input,
          },
          {
            name: "targetPort",
            message: "Target Port:",
            type: Number,
            validate: (value: string) => {
              const port = parseInt(value);
              if (port < 1024 || port > 65535) {
                return "Please enter a valid port number (1024-65535).";
              }
              return true;
            },
          },
          {
            name: "protocol",
            message: "Protocol used on this port:",
            type: Select,
            options: [
              {
                name: "TCP",
                value: "tcp",
              },
              {
                name: "UDP",
                value: "udp",
              },
            ],
          },
        ]);

        ports.push({
          name: portDefinition.name!,
          targetPort: portDefinition.targetPort!,
          publishMode: PublishMode.Ingress, // We default to Ingress for now
          protocols: [portDefinition.protocol] as Protocol[],
        });
      }

      // Environment variables
      console.log(
        "We support different types of environment variables. A `static` value is a fixed value that doesn't change and you enter the value directly. A `port` is a port number that is dynamically assigned and linked to the container ports that you defined earlier. A `system` variable is a variable that is set by the system at runtime.",
      );
      const env = [];
      while (
        await Confirm.prompt(env.length === 0 ? "Add an environment variable?" : "Add another environment variable?")
        ) {
        const key = await Input.prompt("The name (key) of the Variable (i.e. SERVER_NAME):");
        const type = (await Select.prompt<EnvironmentVariableType>({
          message: "The type of the environment variable:",
          options: [
            {
              name: "Static Value",
              value: EnvironmentVariableType.Static,
            },
            {
              name: "Port (from port definition)",
              value: EnvironmentVariableType.Port,
            },
            {
              name: "System Variable",
              value: EnvironmentVariableType.System,
            },
          ],
        })) as EnvironmentVariableType;

        if (type === "port") {
          const port = await Select.prompt<string>({
            message: "Select Port that will be assigned to this variable:",
            options: ports.map((port) => ({
              name: port.name,
              value: port.name,
            })),
          });
          env.push({key, variable: port, type});
        } else if (type === "system") {
          const systemVar = await Select.prompt<string>({
            message: "Select System Variable:",
            options: [
              {
                name: "Server IP",
                value: "_ip-address",
              },
            ],
          });
          env.push({key, value: systemVar, type});
        } else if (type === "static") {
          const value = await Input.prompt("Value:");
          env.push({key, value, type});
        }
      }

      // Mounts
      const mounts: Array<Mount> = [];
      while (
        await Confirm.prompt(
          mounts.length === 0
            ? "Add a persistent folder that will be made persistent (i.e. where your server stores files)?"
            : "Add another persistent folder?",
        )
        ) {
        const target = await Input.prompt("Path inside container (i.e. /path/in/container):");
        const mount: Mount = {
          target,
          readOnly: false,
        };
        mounts.push(mount);
      }

      console.log("Config files are snippets of configuration that you can provide to the container and adjust without updating the docker image. They will be made available at the path you specify inside the container.");
      console.log("You need to have the content of the config file on your local disk to provide it. You can always provide the config file later by updating the server config.");
      const configFiles: Array<ConfigFile> = [];
      while (
        await Confirm.prompt(
          configFiles.length === 0
            ? "Add a config file that will be made available to the container?"
            : "Add another config file?",
        )
        ) {
        const target = await Input.prompt("File Path inside container (i.e. /path/to/config/file.ini):");
        const localFile = await Input.prompt("Local file path to config-file (i.e. /Users/xyz/config/file.ini):");
        var content = '';
        try {
          content = await Deno.readTextFile(localFile);
        } catch (e) {
          logError("Failed to read file. Error: ", e);
          console.log("Please provide the content of the file manually (via Dashboard or CLI) at a later time. We'll use an empty file in the meantime.");
        }

        const configFile: ConfigFile = {
          target,
          content,
        };
        configFiles.push(configFile);
      }

      payload = {
        binaryId: binaryId,
        name,
        command: command || null,
        args: args || null,
        notes: notes || null,
        restartPolicy: {
          condition: restartPolicyCondition as RestartPolicyCondition,
        } as RestartPolicy,
        resources: tier,
        env,
        mounts,
        ports,
        configFiles: configFiles,
      };
    }

    if (options.dryRun) {
      console.log("Dry run mode, payload:");
      console.log(JSON.stringify(payload));
    } else {
      const confirmed = await confirm(options, "Do you want to create the server config?");

      if (confirmed) {
        try {
          const createdConfig = await apiClient.createServerConfig(app.id, payload);
          logSuccess("Server Configuration Created with ID:" + createdConfig.id);
        } catch (error) {
          console.log("Failed to create server config. Error: ", error.body.message, error.code, JSON.stringify(payload));
          Deno.exit(1);
        }

      } else {
        logError("Server configuration creation aborted.");
        console.log("This payload would have been used, you can use the --payload flag to provide it: ");
        console.log(JSON.stringify(payload));
      }
    }
  });

const deleteConfig = new Command()
  .name("delete")
  .description("Delete a config.")
  .option("--configId <configId:number>", "Config ID.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedApp(options);
    let configId = options.configId;
    if (!configId) {
      let configs: ServerConfig[] = [];
      try {
        configs = await apiClient.getServerConfigs(app.id);
      } catch (error) {
        console.log("Failed to load configs. Error: ", error.body.message, error.code);
        Deno.exit(1);
      }

      configId = await Select.prompt({
        message: "Select the config that should be deleted or provide the --configId=<configId> flag",
        options: configs.map((config) => {
          return {name: config.name, value: config.id};
        }),
      });
    }

    let config: ServerConfig;
    try {
      config = await apiClient.getServerConfigById(configId);
    } catch (error) {
      logError(`Image ${configId} does not exist (or not in the app ${app.name}, id: ${app.id})`);
      Deno.exit(1);
    }

    const confirmed = await confirm(options, `Do you want to delete the config ${config!.name}?`);

    if (confirmed) {
      try {
        await apiClient.deleteBinary(configId);
        logSuccess("Config deleted successfully.");
      } catch (error) {
        logError("Failed to delete image. Error: " + error);
      }
    }
  });

export const configs = new Command()
  .name("configs")
  .description("Manage ODIN Fleet server configurations")
  .action(() => {
    configs.showHelp();
  })
  .command("list", configsList)
  .command("create", createConfig)
  .command("delete", deleteConfig);
