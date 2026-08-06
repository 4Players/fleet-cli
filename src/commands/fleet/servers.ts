import { Command, CommandOptions } from "@cliffy/command";
import { getSelectedAppOrExit } from "../apps.ts";
import {
  CreateBackupDockerServiceRequest,
  Server,
} from "../../../backend/api/index.ts";
import { apiClient } from "../../client.ts";
import {
  confirm,
  ensureApiException,
  getAllPaginated,
  inform,
  logError,
  logErrorAndExit,
  stdout,
} from "../../utils.ts";
import { filterArray } from "../../filter.ts";
import { createMetadataCommand } from "../metadata.ts";
import { Input, Select } from "@cliffy/prompt";
import { Table } from "@cliffy/table";

const serverList = new Command()
  .name("list")
  .description("List all servers started for your app.")
  .option(
    "--filter <filter:string>",
    "Filter result based on a filter expression",
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let servers: Server[] = [];
    try {
      servers = await getAllPaginated((
        page: number,
      ) => (apiClient.getServers(app.id, 50, page)));
      if (servers.length === 0) {
        console.log(
          "No servers found. Create a deployment with `fleet deployments create` to start a server.",
        );
        return;
      }
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to load servers. Error: ",
        error.body.message,
        error.code,
      );
    }

    // Filter array if filter option is provided
    if (options.filter) {
      try {
        servers = await filterArray(servers, options.filter);
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit("Failed to filter servers. Error: " + error.message);
      }
    }

    stdout(
      servers,
      options,
      "table(id, location.continent, location.city, serverConfigName, node.address, ports, createdAt, status, metadata)",
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
      const servers = await getAllPaginated((
        page: number,
      ) => (apiClient.getServers(app.id, 50, page)));
      if (servers.length === 0) {
        console.log(
          "No servers found. Create a deployment with `fleet deployments create` to start a server.",
        );
        return;
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server: Server) => {
          return {
            name: `${server.id} - ${
              server.location!.city
            } - ${server.serverConfigName} - ${server.node?.address}`,
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
      table.push([
        server.id,
        `${server.node?.address}:${port.publishedPort}`,
        portName,
      ]);
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
        servers = await getAllPaginated((
          page: number,
        ) => (apiClient.getServers(app.id, 50, page)));
        if (servers.length === 0) {
          inform(
            options,
            "No servers found. Create a deployment with `fleet deployments create` to start a server.",
          );
          return;
        }
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load servers. Error: ",
          error.body.message,
          error.code,
        );
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => {
          return {
            name: `${server.id} - ${
              server.location!.city
            } - ${server.serverConfigName} - ${server.node?.address}`,
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
        "table(id, location.continent, location.city, serverConfigName, node.address, ports.*.name, ports.*.publishedPort,createdAt,status,metadata)",
      );
      if (!server) {
        logError("Server not found.");
        return;
      }
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to load server. Error: ",
        error.body.message,
        error.code,
      );
    }
  });

const showServerLogs = new Command()
  .name("logs")
  .description("Show logs for a server.")
  .option("--server-id=<serverId:string>", "Server ID.")
  .option("--stdout <stdout:boolean>", "Show stdout logs.", { default: true })
  .option("--stderr <stderr:boolean>", "Show stderr logs.", { default: true })
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let serverId = options.serverId;
    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = await getAllPaginated((
          page: number,
        ) => (apiClient.getServers(app.id, 50, page)));
        if (servers.length === 0) {
          inform(
            options,
            "No servers found. Create a deployment with `fleet deployments create` to start a server.",
          );
          return;
        }
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load servers. Error: ",
          error.body.message,
          error.code,
        );
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => {
          return {
            name: `${server.id} - ${
              server.location!.city
            } - ${server.serverConfigName} - ${server.node?.address}`,
            value: server.id,
          };
        }),
      });
    }

    try {
      const data = await apiClient.downloadServerLogs(
        serverId,
        options.stderr && !options.stdout
          ? "stderr"
          : options.stdout && !options.stderr
          ? "stdout"
          : undefined,
      );
      for (const log of data.logs) {
        console.log(log);
      }
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit("Failed to get logs. Error: ", error.message);
    }
  });

const createBackup = new Command()
  .name("backup")
  .description("Create a backup of a server.")
  .option("--server-id=<serverId:string>", "Server ID.")
  .option("--payload <payload:string>", "Payload as JSON string.")
  .option(
    "--dry-run",
    "Dry run mode, does not create the deployment, but prints the payload.",
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
            "No servers found. Create a deployment with `fleet deployments create` to start a server.",
          );
          return;
        }
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load servers. Error: ",
          error.body.message,
          error.code,
        );
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => {
          return {
            name: `${server.id} - ${
              server.location!.city
            } - ${server.serverConfigName} - ${server.node?.address}`,
            value: server.id,
          };
        }),
      });
    }

    let payload: CreateBackupDockerServiceRequest | null = null;
    if (options.payload && options.payload.length > 0) {
      try {
        payload = JSON.parse(
          options.payload,
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
        "The server will be stopped for a few seconds to create a backup and will then be restarted.",
      );
      const confirmation = await confirm(
        options,
        "Are you sure you want to create a backup of this server?",
      );
      if (!confirmation) {
        return;
      }

      try {
        await apiClient.createBackup(serverId, payload!);
        inform(
          options,
          `Backup created successfully. Server will start again soon.`,
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
        servers = await getAllPaginated((
          page: number,
        ) => (apiClient.getServers(app.id, 50, page)));
        if (servers.length === 0) {
          inform(
            options,
            "No servers found. Create a deployment with `fleet deployments create` to start a server.",
          );
          return;
        }
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load servers. Error: ",
          error.body.message,
          error.code,
        );
        Deno.exit(1);
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => {
          return {
            name: `${server.id} - ${
              server.location!.city
            } - ${server.serverConfigName} - ${server.node?.address}`,
            value: server.id,
          };
        }),
      });
    }

    const server = await apiClient.getServerById(app.id, serverId);
    if (!server) {
      logErrorAndExit("Server not found.");
    }

    if (!server.backups) {
      logErrorAndExit(
        "No backup found for this server. Use the `server backup` command to create a backup.",
      );
    }

    try {
      const downloadUrl = await apiClient.getServerBackupDownloadUrl(serverId);
      await stdout(downloadUrl, options, "text");
    } catch (error) {
      logErrorAndExit("Failed to get download URL. Error: ", error);
    }
  });

export const restoreBackup = new Command()
  .name("backup-restore")
  .description("Restore a backup to a server.")
  .option("--server-id=<serverId:string>", "Server ID.")
  .option(
    "--dry-run",
    "Dry run mode, does not create the deployment, but prints the payload.",
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    let serverId = options.serverId;
    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = await getAllPaginated((
          page: number,
        ) => (apiClient.getServers(app.id, 50, page)));
        if (servers.length === 0) {
          inform(
            options,
            "No servers found. Create a deployment with `fleet deployments create` to start a server.",
          );
          return;
        }
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load servers. Error: ",
          error.body.message,
          error.code,
        );
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => {
          return {
            name: `${server.id} - ${
              server.location!.city
            } - ${server.serverConfigName} - ${server.node?.address}`,
            value: server.id,
          };
        }),
      });
    }

    const server = await apiClient.getServerById(app.id, serverId);
    if (!server) {
      logErrorAndExit("Server not found.");
    }

    if (!server.backups) {
      logErrorAndExit(
        "No backup found for this server. Use the `server backup` command to create a backup.",
      );
    }

    inform(
      options,
      "The server will be stopped for a few seconds to restore the backup and will then be restarted.",
    );
    const confirmation = await confirm(
      options,
      "Are you sure you want to restore the backup to this server?",
    );
    if (!confirmation) {
      return;
    }

    try {
      await apiClient.restoreBackup(serverId);
      inform(options, "Backup is being restored");
    } catch (error) {
      logErrorAndExit("Failed to get download URL. Error: ", error);
    }
  });

const startServer = new Command()
  .name("start")
  .description("Start a server.")
  .option("--server-id=<serverId:string>", "Server ID.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    let serverId = options.serverId;
    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = await getAllPaginated((
          page: number,
        ) => (apiClient.getServers(app.id, 50, page)));
        if (servers.length === 0) {
          inform(
            options,
            "No servers found. Create a deployment with `fleet deployments create` to start a server.",
          );
          return;
        }
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load servers. Error: ",
          error.body.message,
          error.code,
        );
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => {
          return {
            name: `${server.id} - ${
              server.location!.city
            } - ${server.serverConfigName} - ${server.node?.address}`,
            value: server.id,
          };
        }),
      });
    }

    const confirmation = await confirm(
      options,
      "Are you sure you want to start this server?",
    );
    if (!confirmation) {
      return;
    }

    try {
      await apiClient.startServer(serverId);
      inform(options, "Server is starting");
    } catch (error) {
      logError("Failed to start server. Error: ", error);
      Deno.exit(1);
    }
  });

const stopServer = new Command()
  .name("stop")
  .description("Stop a server.")
  .option("--server-id=<serverId:string>", "Server ID.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    let serverId = options.serverId;
    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = await getAllPaginated((
          page: number,
        ) => (apiClient.getServers(app.id, 50, page)));
        if (servers.length === 0) {
          inform(
            options,
            "No servers found. Create a deployment with `fleet deployments create` to start a server.",
          );
          return;
        }
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load servers. Error: ",
          error.body.message,
          error.code,
        );
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => {
          return {
            name: `${server.id} - ${
              server.location!.city
            } - ${server.serverConfigName} - ${server.node?.address}`,
            value: server.id,
          };
        }),
      });
    }

    const confirmation = await confirm(
      options,
      "Are you sure you want to stop this server?",
    );
    if (!confirmation) {
      return;
    }

    try {
      await apiClient.stopServer(serverId);
      inform(options, "Server is stopping");
    } catch (error) {
      logError("Failed to stop server. Error: ", error);
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
        servers = await getAllPaginated((
          page: number,
        ) => (apiClient.getServers(app.id, 50, page)));
        if (servers.length === 0) {
          inform(
            options,
            "No servers found. Create a deployment with `fleet deployments create` to start a server.",
          );
          return;
        }
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load servers. Error: ",
          error.body.message,
          error.code,
        );
      }
      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => {
          return {
            name: `${server.id} - ${
              server.location!.city
            } - ${server.serverConfigName} - ${server.node?.address}`,
            value: server.id,
          };
        }),
      });
    }

    inform(
      options,
      "The server will be stopped for a few seconds and then started again.",
    );
    const confirmation = await confirm(
      options,
      "Are you sure you want to restart this server?",
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

const startAllServers = new Command()
  .name("start-all")
  .description("Start all servers for the selected app.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    const confirmation = await confirm(
      options,
      `Are you sure you want to start all servers for app "${app.name}"?`,
    );
    if (!confirmation) {
      return;
    }

    try {
      await apiClient.startServersForApp(app.id);
      inform(options, "All servers are starting");
    } catch (error) {
      logError("Failed to start servers. Error: ", error);
      Deno.exit(1);
    }
  });

const stopAllServers = new Command()
  .name("stop-all")
  .description("Stop all servers for the selected app.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    const confirmation = await confirm(
      options,
      `Are you sure you want to stop all servers for app "${app.name}"?`,
    );
    if (!confirmation) {
      return;
    }

    try {
      await apiClient.stopServersForApp(app.id);
      inform(options, "All servers are stopping");
    } catch (error) {
      logError("Failed to stop servers. Error: ", error);
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

/**
 * Resolves the server the command should operate on, falling back to an
 * interactive selection when `--server-id` was not provided.
 */
const resolveServer = async (
  options: CommandOptions,
): Promise<{ appId: number; serverId: number }> => {
  const app = await getSelectedAppOrExit(options);

  if (options.serverId) {
    return { appId: app.id, serverId: Number(options.serverId) };
  }

  let servers: Server[] = [];
  try {
    servers = await getAllPaginated((
      page: number,
    ) => (apiClient.getServers(app.id, 50, page)));
  } catch (error) {
    ensureApiException(error);
    logErrorAndExit(
      "Failed to load servers. Error: ",
      error.body.message,
      error.code,
    );
  }

  if (servers.length === 0) {
    // Having no servers at all is not treated as an error, matching how the
    // other server commands report an empty fleet.
    inform(
      options,
      "No servers found. Create a deployment with `fleet deployments create` to start a server.",
    );
    Deno.exit(0);
  }

  const serverId = await Select.prompt<number>({
    message: "Select server:",
    options: servers.map((server) => {
      return {
        name: `${server.id} - ${
          server.location!.city
        } - ${server.serverConfigName} - ${server.node?.address}`,
        value: server.id,
      };
    }),
  });

  return { appId: app.id, serverId };
};

const metadata = createMetadataCommand({
  resourceName: "server",
  idOption: "--server-id=<serverId:string>",
  idDescription: "Server ID.",
  resolveTarget: resolveServer,
  api: {
    get: ({ appId, serverId }) => apiClient.getServerById(appId, serverId),
    set: ({ serverId }, metadata) =>
      apiClient.dockerServicesMetadataSet(serverId, { metadata }),
    update: ({ serverId }, metadata) =>
      apiClient.dockerServicesMetadataUpdate(serverId, { metadata }),
    deleteAll: ({ serverId }) =>
      apiClient.dockerServicesMetadataDeleteAll(serverId),
    deleteKeys: ({ serverId }, keys) =>
      apiClient.dockerServicesMetadataDeleteKeys(serverId, keys),
  },
});

const autoscalingStatus = new Command()
  .name("status")
  .description("Show the autoscaling state of a server.")
  .option("--server-id=<serverId:string>", "Server ID.")
  .action(async (options: CommandOptions) => {
    const { appId, serverId } = await resolveServer(options);

    let server: Server;
    try {
      server = await apiClient.getServerById(appId, serverId);
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to load server. Error: " + error.body.message,
        error.code,
      );
    }

    await stdout(
      server!.autoscaling,
      options,
      "table(enabled,healthEnabled,status,lastReadyAt,lastAllocatedAt,lastHealthAt)",
    );
  });

/**
 * The autoscaling lifecycle endpoints are meant to be called by the game
 * server itself. They are exposed here so the transitions can be triggered
 * manually while integrating or debugging an autoscaled deployment.
 */
const createAutoscalingSignal = (
  name: string,
  description: string,
  signal: (serverId: number) => Promise<void>,
  success: string,
) =>
  new Command()
    .name(name)
    .description(description)
    .option("--server-id=<serverId:string>", "Server ID.")
    .action(async (options: CommandOptions) => {
      const { serverId } = await resolveServer(options);

      try {
        await signal(serverId);
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          `Failed to flag the server as ${name}. Error: ` + error.body.message,
          error.code,
        );
      }

      inform(options, success);
    });

const autoscaling = new Command()
  .name("autoscaling")
  .description("Inspect and drive the autoscaling lifecycle of a server.")
  .action(() => {
    autoscaling.showHelp();
  })
  .command("status", autoscalingStatus)
  .command(
    "ready",
    createAutoscalingSignal(
      "ready",
      "Flag the server as ready to accept players.",
      (serverId) => apiClient.dockerServicesAutoscalingReady(serverId),
      "Server flagged as ready.",
    ),
  )
  .command(
    "allocate",
    createAutoscalingSignal(
      "allocate",
      "Flag the server as allocated so the autoscaler stops handing it out.",
      (serverId) => apiClient.dockerServicesAutoscalingAllocate(serverId),
      "Server flagged as allocated.",
    ),
  )
  .command(
    "health",
    createAutoscalingSignal(
      "health",
      "Send a health ping for the server.",
      (serverId) => apiClient.dockerServicesAutoscalingHealth(serverId),
      "Health ping sent.",
    ),
  )
  .command(
    "shutdown",
    createAutoscalingSignal(
      "shutdown",
      "Flag the server as shutting down so the autoscaler replaces it.",
      (serverId) => apiClient.dockerServicesAutoscalingShutdown(serverId),
      "Server flagged as shutting down.",
    ),
  );

export const servers = new Command()
  .name("servers")
  .description(
    "Manage ODIN Fleet servers have been deployment for the selected app.",
  )
  .action(() => {
    servers.showHelp();
  })
  .command("list", serverList)
  .command("logs", showServerLogs)
  .command("start", startServer)
  .command("stop", stopServer)
  .command("restart", restartServer)
  .command("start-all", startAllServers)
  .command("stop-all", stopAllServers)
  .command("backup", backup)
  .command("get", showServerInfo)
  .command("address", serverAddress)
  .command("metadata", metadata)
  .command("autoscaling", autoscaling);
