import { Command } from "$cliffy/command/command.ts";
import { CommandOptions } from "$cliffy/command/types.ts";
import { getSelectedAppOrExit } from "./apps.ts";
import { apiClient } from "./main.ts";
import { Table } from "$cliffy/table/table.ts";
import { Input, Select } from "$cliffy/prompt/mod.ts";
import { inform, logError, stdout } from "./utils.ts";
import { CreateBackupDockerServiceRequest, Server } from "./api/index.ts";
import { filterArray } from "./filter.ts";

const serverList = new Command()
  .name("list")
  .description("List all servers started for your app.")
  .option(
    "--filter <filter:string>",
    "Filter result based on a filter expression"
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let servers: Server[] = [];
    try {
      servers = (await apiClient.getServers(app.id, -1, 1)).data;
      if (servers.length === 0) {
        console.log(
          "No servers found. Create a deployment with `fleet deployments create` to start a server."
        );
        return;
      }
    } catch (error) {
      logError(
        "Failed to load servers. Error: ",
        error.body.message,
        error.code
      );
      Deno.exit(1);
    }

    // Filter array if filter option is provided
    if (options.filter) {
      try {
        servers = await filterArray(servers, options.filter);
      } catch (error) {
        logError("Failed to filter servers. Error: " + error.message);
        Deno.exit(1);
      }
    }

    stdout(
      servers,
      options,
      "table(id, location.continent, location.city, serverConfig.name, addr, ports, createdAt, status.state)"
    );
  });

const serverAddress = new Command()
  .name("address")
  .description("Show the address of a server.")
  .option("--server-id=<serverId:string>", "Server ID.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let serverId = options.serverId;
    if (!serverId) {
      const servers = (await apiClient.getServers(app.id, -1, 1)).data;
      if (servers.length === 0) {
        console.log(
          "No servers found. Create a deployment with `fleet deployments create` to start a server."
        );
        return;
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server: Server) => {
          return {
            name: `${server.id} - ${server.location!.city} - ${
              server.serverConfig!.name
            } - ${server.addr}`,
            value: server.id,
          };
        }),
      });
    }

    const server = await apiClient.getServerById(app.id, serverId);
    if (!server) {
      logError("Server not found.");
      return;
    }

    const table: Table = new Table();
    table.header(["ID", "Address/Port", "Port Name"]);
    Object.entries(server.ports!).forEach(([portName, port]) => {
      table.push([server.id, `${server.addr}:${port.publishedPort}`, portName]);
    });
    table.render();
  });

const showServerInfo = new Command()
  .name("info")
  .description("Show detailed information about a server.")
  .option("--server-id=<serverId:string>", "Server ID.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let serverId = options.serverId;
    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = (await apiClient.getServers(app.id, -1, 1)).data;
        if (servers.length === 0) {
          inform(
            options,
            "No servers found. Create a deployment with `fleet deployments create` to start a server."
          );
          return;
        }
      } catch (error) {
        logError(
          "Failed to load servers. Error: ",
          error.body.message,
          error.code
        );
        Deno.exit(1);
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => {
          return {
            name: `${server.id} - ${server.location!.city} - ${
              server.serverConfig!.name
            } - ${server.addr}`,
            value: server.id,
          };
        }),
      });
    }

    let server: Server;
    try {
      server = await apiClient.getServerById(app.id, serverId);
      await stdout(
        server,
        options,
        "table(id, location.continent, location.city, serverConfig.name, addr, ports.*.name, ports.*.publishedPort,createdAt,status.state)"
      );
      if (!server) {
        logError("Server not found.");
        return;
      }
    } catch (error) {
      logError(
        "Failed to load server. Error: ",
        error.body.message,
        error.code
      );
      Deno.exit(1);
    }
  });

const showServerLogs = new Command()
  .name("logs")
  .description("Show logs for a server.")
  .option("--server-id=<serverId:string>", "Server ID.")
  .option("--stdout <stdout:boolean>", "Show stdout logs.", { default: true })
  .option("--stderr <stderr:boolean>", "Show stderr logs.", { default: true })
  .option(
    "--since=<since:number>",
    "Only return logs newer (now - since) where since is a duration either as a number in seconds or with a time unit postfix (s, m, or h). e.g. 7d",
    {
      default: "7d",
    }
  )
  .option("--timestamps", "Show timestamps.", { default: false })
  .option(
    "--tail=<tail:string>",
    "Number of lines to show from the end of the logs.",
    {
      default: 100,
    }
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let serverId = options.serverId;
    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = (await apiClient.getServers(app.id, -1, 1)).data;
        if (servers.length === 0) {
          inform(
            options,
            "No servers found. Create a deployment with `fleet deployments create` to start a server."
          );
          return;
        }
      } catch (error) {
        logError(
          "Failed to load servers. Error: ",
          error.body.message,
          error.code
        );
        Deno.exit(1);
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => {
          return {
            name: `${server.id} - ${server.location!.city} - ${
              server.serverConfig!.name
            } - ${server.addr}`,
            value: server.id,
          };
        }),
      });
    }

    try {
      const data = await apiClient.getServerLogs(
        serverId,
        options.since,
        options.tail,
        "backward",
        options.stderr && !options.stdout
          ? "stderr"
          : options.stdout && !options.stderr
          ? "stdout"
          : undefined
      );
      console.log(data.logs);
    } catch (error) {
      logError("Failed to get logs. Error: ", error.message);
      Deno.exit(1);
    }
  });

const createBackup = new Command()
  .name("backup")
  .description("Create a backup of a server.")
  .option("--server-id=<serverId:string>", "Server ID.")
  .option("--payload <payload:string>", "Payload as JSON string.")
  .option(
    "--dry-run",
    "Dry run mode, does not create the deployment, but prints the payload."
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let serverId = options.serverId;
    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = (await apiClient.getServers(app.id)).data;
        if (servers.length === 0) {
          inform(
            options,
            "No servers found. Create a deployment with `fleet deployments create` to start a server."
          );
          return;
        }
      } catch (error) {
        logError(
          "Failed to load servers. Error: ",
          error.body.message,
          error.code
        );
        Deno.exit(1);
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => {
          return {
            name: `${server.id} - ${server.location!.city} - ${
              server.serverConfig!.name
            } - ${server.addr}`,
            value: server.id,
          };
        }),
      });
    }

    let payload: CreateBackupDockerServiceRequest | null = null;
    if (options.payload && options.payload.length > 0) {
      try {
        payload = JSON.parse(
          options.payload
        ) as CreateBackupDockerServiceRequest;
      } catch (_error) {
        logError("Invalid payload. Please provide a valid JSON string.");
        Deno.exit(1);
      }
    } else {
      const name = await Input.prompt({
        message: "Please enter a name for the backup:",
        default: `Backup-${new Date().toISOString()}`,
      });

      payload = {
        name,
      };
    }

    if (options.dryRun) {
      inform(options, "Dry run mode, payload:");
      await stdout(payload, options, "json");
    } else {
      inform(
        options,
        "The server will be stopped for a few seconds to create a backup and will then be restarted."
      );
      const confirmation = await confirm(
        "Are you sure you want to create a backup of this server?"
      );
      if (!confirmation) {
        return;
      }

      try {
        await apiClient.createBackup(serverId, payload!);
        inform(
          options,
          `Backup created successfully. Server will start again soon.`
        );
      } catch (error) {
        logError("Failed to create backup. Error: ", error);
        Deno.exit(1);
      }
    }
  });

const getBackupDownloadUrl = new Command()
  .name("backup-download-url")
  .description("Get download URL for a backup.")
  .option("--server-id=<serverId:string>", "Server ID.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    let serverId = options.serverId;
    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = (await apiClient.getServers(app.id, -1, 1)).data;
        if (servers.length === 0) {
          inform(
            options,
            "No servers found. Create a deployment with `fleet deployments create` to start a server."
          );
          return;
        }
      } catch (error) {
        logError(
          "Failed to load servers. Error: ",
          error.body.message,
          error.code
        );
        Deno.exit(1);
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => {
          return {
            name: `${server.id} - ${server.location!.city} - ${
              server.serverConfig!.name
            } - ${server.addr}`,
            value: server.id,
          };
        }),
      });
    }

    const server = await apiClient.getServerById(app.id, serverId);
    if (!server) {
      logError("Server not found.");
      Deno.exit(1);
      return;
    }

    if (!server.backup) {
      logError(
        "No backup found for this server. Use the `server backup` command to create a backup."
      );
      Deno.exit(1);
      return;
    }

    try {
      const downloadUrl = await apiClient.getServerBackupDownloadUrl(serverId);
      await stdout(downloadUrl, options, "text");
    } catch (error) {
      logError("Failed to get download URL. Error: ", error);
      Deno.exit(1);
    }
  });

export const restoreBackup = new Command()
  .name("backup-restore")
  .description("Restore a backup to a server.")
  .option("--server-id=<serverId:string>", "Server ID.")
  .option(
    "--dry-run",
    "Dry run mode, does not create the deployment, but prints the payload."
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    let serverId = options.serverId;
    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = (await apiClient.getServers(app.id, -1, 1)).data;
        if (servers.length === 0) {
          inform(
            options,
            "No servers found. Create a deployment with `fleet deployments create` to start a server."
          );
          return;
        }
      } catch (error) {
        logError(
          "Failed to load servers. Error: ",
          error.body.message,
          error.code
        );
        Deno.exit(1);
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => {
          return {
            name: `${server.id} - ${server.location!.city} - ${
              server.serverConfig!.name
            } - ${server.addr}`,
            value: server.id,
          };
        }),
      });
    }

    const server = await apiClient.getServerById(app.id, serverId);
    if (!server) {
      logError("Server not found.");
      Deno.exit(1);
    }

    if (!server.backup) {
      logError(
        "No backup found for this server. Use the `server backup` command to create a backup."
      );
      Deno.exit(1);
    }

    inform(
      options,
      "The server will be stopped for a few seconds to restore the backup and will then be restarted."
    );
    const confirmation = await confirm(
      "Are you sure you want to restore the backup to this server?"
    );
    if (!confirmation) {
      return;
    }

    try {
      await apiClient.restoreBackup(serverId);
      inform(options, "Backup is being restored");
    } catch (error) {
      logError("Failed to get download URL. Error: ", error);
      Deno.exit(1);
    }
  });

const restartServer = new Command()
  .name("restart")
  .description("Restart a server.")
  .option("--server-id=<serverId:string>", "Server ID.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    let serverId = options.serverId;
    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = (await apiClient.getServers(app.id, -1, 1)).data;
        if (servers.length === 0) {
          inform(
            options,
            "No servers found. Create a deployment with `fleet deployments create` to start a server."
          );
          return;
        }
      } catch (error) {
        logError(
          "Failed to load servers. Error: ",
          error.body.message,
          error.code
        );
        Deno.exit(1);
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => {
          return {
            name: `${server.id} - ${server.location!.city} - ${
              server.serverConfig!.name
            } - ${server.addr}`,
            value: server.id,
          };
        }),
      });
    }

    inform(
      options,
      "The server will be stopped for a few seconds and then started again."
    );
    const confirmation = await confirm(
      "Are you sure you want to restart this server?"
    );
    if (!confirmation) {
      return;
    }

    try {
      await apiClient.restartServer(serverId);
      inform(options, "Server is restarting");
    } catch (error) {
      logError("Failed to restart server. Error: ", error);
      Deno.exit(1);
    }
  });

const backup = new Command()
  .name("backup")
  .description("Manage backups for your servers.")
  .action(() => {
    backup.showHelp();
  })
  .command("create", createBackup)
  .command("download-url", getBackupDownloadUrl)
  .command("restore", restoreBackup);

export const servers = new Command()
  .name("servers")
  .description(
    "Manage ODIN Fleet servers have been deployment for the selected app."
  )
  .action(() => {
    servers.showHelp();
  })
  .command("list", serverList)
  .command("logs", showServerLogs)
  .command("backup", backup)
  .command("restart", restartServer)
  .command("get", showServerInfo)
  .command("address", serverAddress);
