import { Command, CommandOptions } from "@cliffy/command";
import { Confirm, Input, Number, prompt, Select } from "@cliffy/prompt";

import {
  Binary,
  ConfigFile,
  EnvironmentVariableType,
  Mount,
  PortDefinition,
  Protocol,
  PublishMode,
  RestartPolicy,
  RestartPolicyCondition,
  ServerConfig,
  StoreServerConfigRequest,
  UpdateServerConfigRequest,
} from "../../../backend/api/index.ts";

import { getSelectedAppOrExit } from "../apps.ts";
import { apiClient } from "../../client.ts";
import {
  confirm,
  ensureApiException,
  inform,
  logError,
  logErrorAndExit,
  stdout,
  validateAtLeastOneOptionAvailable,
} from "../../utils.ts";

const configsList = new Command()
  .name("list")
  .description("List all server configurations for the selected app.")
  .option("--unused", "List only unused server configurations.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    let configs: ServerConfig[] = [];
    try {
      configs = await apiClient.getServerConfigs(app.id);

      if (options.unused) {
        // Load all deployments and filter out the used configs
        const deployments = await apiClient.getAppLocationSettings(app.id);
        const usedConfigs = deployments.map(
          (deployment) => deployment.serverConfig?.id,
        );
        configs = configs.filter((config) => !usedConfigs.includes(config.id));
      }

      if (configs.length === 0) {
        inform(options, "No server configurations found.");
        if (options.format === "default") {
          return;
        }
      }
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to list configs. Error: ",
        error.body.message,
        error.code,
      );
    }

    stdout(configs, options, "table(id,name,binary.name,binary.version)");
  });

export const getConfigDetails = new Command()
  .name("get")
  .description("Get the status of an image.")
  .option("--config-id <configId:number>", "Config ID.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let configId = options.configId;
    if (!configId) {
      let configs: ServerConfig[] = [];
      try {
        configs = await apiClient.getServerConfigs(app.id);
      } catch (error) {
        ensureApiException(error);
        console.log(
          "Failed to load configs. Error: ",
          error.body.message,
          error.code,
        );
        Deno.exit(1);
      }

      configId = await Select.prompt({
        message:
          "Select the config that should be shown or provide the --config-id=<configId> flag",
        options: configs.map((config) => {
          return { name: config.name, value: config.id };
        }),
      });
    }

    try {
      const config = await apiClient.getServerConfigById(configId);
      stdout(
        config,
        options,
        "table(id,name,binary.name,binary.version,restartPolicy.condition,resources.limits.memory,resources.limits.cpu)",
      );
    } catch (_) {
      logErrorAndExit(
        `Image ${configId} does not exist (or not in the app ${app.name}, id: ${app.id})`,
      );
    }
  });

// Create a new server config
const createConfig = new Command()
  .name("create")
  .description("Create a new server configuration.")
  .option("--payload <payload:string>", "Payload as JSON string.")
  .option(
    "--dry-run",
    "Dry run mode, does not create the deployment, but prints the payload.",
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    let payload: StoreServerConfigRequest | null = null;

    if (options.payload && options.payload.length > 0) {
      try {
        payload = JSON.parse(options.payload) as StoreServerConfigRequest;
      } catch (error) {
        logErrorAndExit(
          "Invalid payload. Please provide a valid JSON string.",
          error,
        );
      }
    } else {
      let binaries: Binary[] = [];
      try {
        binaries = await apiClient.getBinaries(app.id);
        if (binaries.length === 0) {
          logErrorAndExit(
            options,
            `No images have been created for the selected app (${app.name}) yet. Use 'fleet images create' to create an image`,
          );
        }
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load images. Error: ",
          error.body.message,
          error.code,
        );
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

      const command = await Input.prompt(
        "Command (overwrite ENTRYPOINT): (optional)",
      );
      const args = await Input.prompt("Arguments (overwrite CMD): (optional)");
      const notes = await Input.prompt(
        "Add notes (something to remember later): (optional)",
      );

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

      // Resource packages
      const resourcePackages = await apiClient.getResourcePackages();
      const resourcePackageSlug = await Select.prompt<string>({
        message: "Select Resource Package:",
        options: resourcePackages.map((resourcePackage) => ({
          name: `${resourcePackage
            .name!} (${resourcePackage.cpuLimit} MB RAM, ${resourcePackage.memoryLimitMb} CPU cores)`,
          value: resourcePackage.slug,
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
            message:
              "Name of port (anything you like that helps you remember it, i.e. Game Port or RCON Port):",
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
        await Confirm.prompt(
          env.length === 0
            ? "Add an environment variable?"
            : "Add another environment variable?",
        )
      ) {
        const key = await Input.prompt(
          "The name (key) of the Variable (i.e. SERVER_NAME):",
        );
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
          env.push({ key, variable: port, type });
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
          env.push({ key, value: systemVar, type });
        } else if (type === "static") {
          const value = await Input.prompt("Value:");
          env.push({ key, value, type });
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
        const target = await Input.prompt(
          "Path inside container (i.e. /path/in/container):",
        );
        const mount: Mount = {
          target,
          readOnly: false,
        };
        mounts.push(mount);
      }

      console.log(
        "Config files are snippets of configuration that you can provide to the container and adjust without updating the docker image. They will be made available at the path you specify inside the container.",
      );
      console.log(
        "You need to have the content of the config file on your local disk to provide it. You can always provide the config file later by updating the server config.",
      );
      const configFiles: Array<ConfigFile> = [];
      while (
        await Confirm.prompt(
          configFiles.length === 0
            ? "Add a config file that will be made available to the container?"
            : "Add another config file?",
        )
      ) {
        const target = await Input.prompt(
          "File Path inside container (i.e. /path/to/config/file.ini):",
        );
        const localFile = await Input.prompt(
          "Local file path to config-file (i.e. /Users/xyz/config/file.ini):",
        );
        let content = "";
        try {
          content = await Deno.readTextFile(localFile);
        } catch (e) {
          logError("Failed to read file. Error: ", e);
          console.log(
            "Please provide the content of the file manually (via Dashboard or CLI) at a later time. We'll use an empty file in the meantime.",
          );
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
        resourcePackageSlug,
        env,
        mounts,
        ports,
        configFiles: configFiles,
      };
    }

    if (options.dryRun) {
      inform(options, "Dry run mode, payload:");
      stdout(payload, options, "json");
    } else {
      const confirmed = await confirm(
        options,
        "Do you want to create the server config?",
      );

      if (confirmed && payload) {
        try {
          const createdConfig = await apiClient.createServerConfig(
            app.id,
            payload,
          );
          stdout(
            createdConfig,
            options,
            "table(id,name,binary.name,binary.version)",
          );
        } catch (error) {
          ensureApiException(error);
          logErrorAndExit(
            "Failed to create server config. Error: ",
            error.body.message,
            error.code,
            JSON.stringify(payload),
          );
        }
      } else {
        inform(options, "Server configuration creation aborted.");
        inform(
          options,
          "This payload would have been used, you can use the --payload flag to provide it: ",
        );
        stdout(payload, options, "json");
      }
    }
  });

const updateConfig = new Command()
  .name("update")
  .description("Update a server configuration.")
  .option("--config-id <configId:number>", "Config ID.")
  .group("Update Options")
  .option("--payload <payload:string>", "Payload as JSON string.")
  .option("--name <name:string>", "Name of the config.")
  .option("--command <command:string>", "Command to run in the container.")
  .option("--args <args:string>", "Arguments to pass to the command.")
  .option("--binary-id <binaryId:number>", "Binary ID.")
  .option("--restart-policy <restartPolicy:string>", "Restart policy.")
  .option("--memory <memory:number>", "Memory limit.")
  .option("--cpu <cpu:number>", "CPU limit.")
  .group("Other Options")
  .option(
    "--dry-run",
    "Dry run mode, does not update the config, but prints the payload.",
  )
  .action(async (options: CommandOptions) => {
    validateAtLeastOneOptionAvailable(options, [
      "payload",
      "name",
      "command",
      "args",
      "binaryId",
      "restartPolicy",
      "memory",
      "cpu",
    ]);
    const app = await getSelectedAppOrExit(options);
    let configId = options.configId;
    if (!configId) {
      let configs: ServerConfig[] = [];
      try {
        configs = await apiClient.getServerConfigs(app.id);
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load configs. Error: ",
          error.body.message,
          error.code,
        );
      }

      configId = await Select.prompt({
        message:
          "Select the config that should be updated or provide the --config-id=<configId> flag",
        options: configs.map((config) => {
          return { name: config.name, value: config.id };
        }),
      });
    }

    let config: ServerConfig;
    try {
      config = await apiClient.getServerConfigById(configId);
    } catch (_error) {
      logError(
        `Config ${configId} does not exist (or not in the app ${app.name}, id: ${app.id})`,
      );
      Deno.exit(1);
    }

    let payload: UpdateServerConfigRequest | null = null;
    if (options.payload && options.payload.length > 0) {
      try {
        payload = JSON.parse(options.payload) as UpdateServerConfigRequest;
      } catch (error) {
        logError("Invalid payload. Please provide a valid JSON string.", error);
        return;
      }
    } else {
      payload = {
        name: options.name || config.name,
        command: options.command || config.command,
        args: options.args || config.args,
        binaryId: options.binaryId || config.binaryId,
        restartPolicy: {
          condition: options.restartPolicy || config.restartPolicy.condition,
        },
        resourcePackageSlug: config.resourcePackageSlug || "medium-shared", // TODO: maybe pick another default
        configFiles: config.configFiles,
        secretFiles: config.secretFiles,
        env: config.env,
        mounts: config.mounts,
        ports: config.ports,
      };
    }

    if (options.dryRun) {
      inform(options, "Dry run mode, payload:");
      stdout(payload, options, "json");
    } else {
      const confirmed = await confirm(
        options,
        `Do you really want to update the config?`,
      );

      if (confirmed) {
        try {
          await apiClient.updateServerConfig(configId, payload!);
          inform(options, "Config updated successfully.");
        } catch (error) {
          ensureApiException(error);
          logErrorAndExit(
            "Failed to update config. Error: " + error.body.message,
            error.code,
          );
          Deno.exit(1);
        }
      }
    }
  });

const deleteConfig = new Command()
  .name("delete")
  .description("Delete a config.")
  .option("--config-id <configId:number>", "Config ID.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let configId = options.configId;
    if (!configId) {
      let configs: ServerConfig[] = [];
      try {
        configs = await apiClient.getServerConfigs(app.id);
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load configs. Error: ",
          error.body.message,
          error.code,
        );
      }

      configId = await Select.prompt({
        message:
          "Select the config that should be deleted or provide the --config-id=<configId> flag",
        options: configs.map((config) => {
          return { name: config.name, value: config.id };
        }),
      });
    }

    let config: ServerConfig;
    try {
      config = await apiClient.getServerConfigById(configId);
    } catch (_error) {
      logErrorAndExit(
        `Config ${configId} does not exist (or not in the app ${app.name}, id: ${app.id})`,
      );
    }

    const confirmed = await confirm(
      options,
      `Do you want to delete the config ${config!.name}?`,
    );

    if (confirmed) {
      try {
        await apiClient.deleteBinary(configId);
        inform(options, "Config deleted successfully.");
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to delete config. Error: " + error.body.message,
          error.code,
        );
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
  .command("update", updateConfig)
  .command("get", getConfigDetails)
  .command("create", createConfig)
  .command("delete", deleteConfig);
