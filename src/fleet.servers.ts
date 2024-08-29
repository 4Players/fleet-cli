import { Command } from "$cliffy/command/command.ts";
import { CommandOptions } from "$cliffy/command/types.ts";
import {getSelectedAppOrExit} from "./apps.ts";
import { apiClient } from "./main.ts";
import { Table } from "$cliffy/table/table.ts";
import { Input, Select } from "$cliffy/prompt/mod.ts";
import { logError, logSuccess } from "./utils.ts";
import { CreateBackupDockerServiceRequest, Server } from "./api/index.ts";
import { colors } from "https://deno.land/x/cliffy@v1.0.0-rc.3/ansi/colors.ts";

const serverList = new Command()
  .name("list")
  .description("List all servers started for your app.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let servers: Server[] = [];
    try {
      servers = await apiClient.getServers(app.id);
      if (servers.length === 0) {
        console.log("No servers found. Create a deployment with `fleet deployments create` to start a server.");
        return;
      }
    } catch(error) {
      logError("Failed to load servers. Error: ", error.body.message, error.code);
      Deno.exit(1);
    }

    const table: Table = new Table();
    table.header(["ID", "Region", "City", "Server Config", "Address", "Ports", "Created", "Status"]);
    servers.forEach((server) => {
      // List ports
      const ports = Object.entries(server.ports!)
        .map(([portName, port]) => {
          return `${portName}: ${port.publishedPort!}`;
        })
        .join(", ");
      table.push([
        server.id,
        server.location!.continent,
        server.location!.city,
        server.serverConfig!.name,
        server.addr!,
        ports,
        server.createdAt!.toLocaleDateString(),
        server.status!.state,
      ]);
    });
    table.render();

    console.log(
      colors.cyan("Please note: Servers in intermediate states (e.g. starting, stopping) are not shown here."),
    );
  });

const serverAddress = new Command()
  .name("address")
  .description("Show the address of a server.")
  .option("--serverId=<serverId:string>", "Server ID.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let serverId = options.serverId;
    if (!serverId) {
      const servers = await apiClient.getServers(app.id);
      if (servers.length === 0) {
        console.log("No servers found. Create a deployment with `fleet deployments create` to start a server.");
        return;
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server: Server) => {
          return {
            name: `${server.id} - ${server.location!.city} - ${server.serverConfig!.name} - ${server.addr}`,
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
  .option("--serverId=<serverId:string>", "Server ID.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let serverId = options.serverId;
    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = await apiClient.getServers(app.id);
        if (servers.length === 0) {
          console.log("No servers found. Create a deployment with `fleet deployments create` to start a server.");
          return;
        }
      } catch(error) {
        logError("Failed to load servers. Error: ", error.body.message, error.code);
        Deno.exit(1);
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => {
          return {
            name: `${server.id} - ${server.location!.city} - ${server.serverConfig!.name} - ${server.addr}`,
            value: server.id,
          };
        }),
      });
    }

    let server: Server;
    try {
      server = await apiClient.getServerById(app.id, serverId);
      if (!server) {
        logError("Server not found.");
        return;
      }
    } catch(error) {
      logError("Failed to load server. Error: ", error.body.message, error.code);
      Deno.exit(1);
    }

    console.log("Server information:");
    console.log(colors.cyan("ID:"), server.id);
    console.log(colors.cyan("Location:"), `${server.location!.city}, ${server.location!.continent}`);
    console.log(colors.cyan("Server Config:"), server.serverConfig!.name);
    console.log(colors.cyan("Address:"), server.addr);
    console.log(colors.cyan("Ports:"));
    Object.entries(server.ports!).forEach(([portName, port]) => {
      console.log(`  ${portName}: ${port.publishedPort}`);
    });
    console.log(colors.cyan("Created:"), server.createdAt!.toLocaleString());
    console.log(colors.cyan("Status:"), server.status!.state);
    console.log(colors.cyan("Backup:"), server.backup ? "Yes" : "No");
  });

const showServerLogs = new Command()
  .name("logs")
  .description("Show logs for a server.")
  .option("--serverId=<serverId:string>", "Server ID.")
  .option("--details", "Show detailed logs.", { default: false })
  .option("--follow", "Follow logs.", { default: false })
  .option("--stdout", "Show stdout logs.", { default: true })
  .option("--stderr", "Show stderr logs.", { default: true })
  .option("--since=<since:string>", "Only return logs newer than a relative duration like 5s, 2m, or 3h", {
    default: undefined,
  })
  .option("--timestamps", "Show timestamps.", { default: false })
  .option("--tail=<tail:string>", "Number of lines to show from the end of the logs. Use `all` to show all logs.", {
    default: 100,
  })
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let serverId = options.serverId;
    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = await apiClient.getServers(app.id);
        if (servers.length === 0) {
          console.log("No servers found. Create a deployment with `fleet deployments create` to start a server.");
          return;
        }
      } catch(error) {
        logError("Failed to load servers. Error: ", error.body.message, error.code);
        Deno.exit(1);
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => {
          return {
            name: `${server.id} - ${server.location!.city} - ${server.serverConfig!.name} - ${server.addr}`,
            value: server.id,
          };
        }),
      });
    }

    const data = await apiClient.getServerLogs(
      serverId,
      options.details,
      options.follow,
      options.stdout,
      options.stderr,
      options.since,
      options.timestamps,
      options.tail,
    );
    console.log(data.logs);
  });

const createBackup = new Command()
  .name("backup")
  .description("Create a backup of a server.")
  .option("--serverId=<serverId:string>", "Server ID.")
  .option("--payload <payload:string>", "Payload as JSON string.")
  .option("--dry-run", "Dry run mode, does not create the deployment, but prints the payload.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let serverId = options.serverId;
    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = await apiClient.getServers(app.id);
        if (servers.length === 0) {
          console.log("No servers found. Create a deployment with `fleet deployments create` to start a server.");
          return;
        }
      } catch(error) {
        logError("Failed to load servers. Error: ", error.body.message, error.code);
        Deno.exit(1);
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => {
          return {
            name: `${server.id} - ${server.location!.city} - ${server.serverConfig!.name} - ${server.addr}`,
            value: server.id,
          };
        }),
      });
    }

    let payload: CreateBackupDockerServiceRequest | null = null;
    if (options.payload && options.payload.length > 0) {
      try {
        payload = JSON.parse(options.payload) as CreateBackupDockerServiceRequest;
      } catch (error) {
        console.error("Invalid payload. Please provide a valid JSON string.");
        return;
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
      console.log("Dry run mode, payload:");
      console.log(JSON.stringify(payload));
    } else {
      console.log("The server will be stopped for a few seconds to create a backup and will then be restarted.");
      const confirmation = await confirm("Are you sure you want to create a backup of this server?");
      if (!confirmation) {
        return;
      }

      try {
        await apiClient.createBackup(serverId, payload!);
        logSuccess(`Backup created successfully. Server will start again soon.`);
      } catch (error) {
        logError("Failed to create backup. Error: ", error);
      }
    }
  });

const getBackupDownloadUrl = new Command()
  .name("backup-download-url")
  .description("Get download URL for a backup.")
  .option("--serverId=<serverId:string>", "Server ID.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    let serverId = options.serverId;
    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = await apiClient.getServers(app.id);
        if (servers.length === 0) {
          console.log("No servers found. Create a deployment with `fleet deployments create` to start a server.");
          return;
        }
      } catch(error) {
        logError("Failed to load servers. Error: ", error.body.message, error.code);
        Deno.exit(1);
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => {
          return {
            name: `${server.id} - ${server.location!.city} - ${server.serverConfig!.name} - ${server.addr}`,
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

    if (!server.backup) {
      logError("No backup found for this server. Use the `server backup` command to create a backup.");
      return;
    }

    try {
      const downloadUrl = await apiClient.getServerBackupDownloadUrl(serverId);
      console.log(downloadUrl.url);
    } catch (error) {
      logError("Failed to get download URL. Error: ", error);
    }
  });

export const restoreBackup = new Command()
  .name("backup-restore")
  .description("Restore a backup to a server.")
  .option("--serverId=<serverId:string>", "Server ID.")
  .option("--payload <payload:string>", "Payload as JSON string.")
  .option("--dry-run", "Dry run mode, does not create the deployment, but prints the payload.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    let serverId = options.serverId;
    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = await apiClient.getServers(app.id);
        if (servers.length === 0) {
          console.log("No servers found. Create a deployment with `fleet deployments create` to start a server.");
          return;
        }
      } catch(error) {
        logError("Failed to load servers. Error: ", error.body.message, error.code);
        Deno.exit(1);
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => {
          return {
            name: `${server.id} - ${server.location!.city} - ${server.serverConfig!.name} - ${server.addr}`,
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

    if (!server.backup) {
      logError("No backup found for this server. Use the `server backup` command to create a backup.");
      return;
    }

    console.log("The server will be stopped for a few seconds to restore the backup and will then be restarted.");
    const confirmation = await confirm("Are you sure you want to restore the backup to this server?");
    if (!confirmation) {
      return;
    }

    try {
      await apiClient.restoreBackup(serverId);
      logSuccess("Backup is being restored");
    } catch (error) {
      logError("Failed to get download URL. Error: ", error);
    }
  });

const restartServer = new Command()
  .name("restart")
  .description("Restart a server.")
  .option("--serverId=<serverId:string>", "Server ID.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    let serverId = options.serverId;
    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = await apiClient.getServers(app.id);
        if (servers.length === 0) {
          console.log("No servers found. Create a deployment with `fleet deployments create` to start a server.");
          return;
        }
      } catch(error) {
        logError("Failed to load servers. Error: ", error.body.message, error.code);
        Deno.exit(1);
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => {
          return {
            name: `${server.id} - ${server.location!.city} - ${server.serverConfig!.name} - ${server.addr}`,
            value: server.id,
          };
        }),
      });
    }

    console.log("The server will be stopped for a few seconds and then started again.");
    const confirmation = await confirm("Are you sure you want to restart this server?");
    if (!confirmation) {
      return;
    }

    try {
      await apiClient.restartServer(serverId);
      logSuccess("Server is restarting");
    } catch (error) {
      logError("Failed to restart server. Error: ", error);
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
  .description("Manage ODIN Fleet servers have been deployment for the selected app.")
  .action(() => {
    servers.showHelp();
  })
  .command("list", serverList)
  .command("logs", showServerLogs)
  .command("backup", backup)
  .command("restart", restartServer)
  .command("info", showServerInfo)
  .command("address", serverAddress);
