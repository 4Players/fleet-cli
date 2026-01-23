import { Command, CommandOptions } from "@cliffy/command";
import { Select } from "@cliffy/prompt";
import { Table } from "@cliffy/table";

import { Server } from "../../../backend/api/index.ts";

import { apiClient } from "../../client.ts";
import { getSelectedAppOrExit } from "../apps.ts";
import {
  ensureApiException,
  getAllPaginated,
  inform,
  logErrorAndExit,
  stdout,
} from "../../utils.ts";

// App-level metrics commands

const appCpuInstant = new Command()
  .name("cpu-instant")
  .description("Get instant CPU seconds for the selected app.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    try {
      const metrics = await apiClient.metricsAppCpuSecondsInstant(app.id);
      if (options.format === "json") {
        await stdout(metrics, options, "json");
      } else {
        const result = metrics.data.result[0];
        if (result) {
          const table = new Table();
          table.header(["Metric", "Value", "Timestamp"]);
          table.push([
            "CPU Seconds",
            result.value[1],
            new Date(result.value[0] * 1000).toISOString(),
          ]);
          table.render();
        } else {
          inform(options, "No CPU metrics available.");
        }
      }
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to fetch CPU metrics. Error: " + error.body.message,
        error.code,
      );
    }
  });

const appCpuUsage = new Command()
  .name("cpu-usage")
  .description("Get CPU usage over time for the selected app.")
  .option(
    "--start <start:number>",
    "Start time (Unix timestamp in seconds).",
    { required: true },
  )
  .option(
    "--end <end:number>",
    "End time (Unix timestamp in seconds).",
    { required: true },
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    try {
      const metrics = await apiClient.metricsAppCpuUsage(
        app.id,
        options.start,
        options.end,
      );

      if (options.format === "json") {
        await stdout(metrics, options, "json");
      } else {
        const table = new Table();
        table.header(["Timestamp", "CPU Usage"]);

        for (const result of metrics.data.result) {
          if (result.values) {
            for (const value of result.values) {
              table.push([
                new Date(value[0] * 1000).toISOString(),
                value[1],
              ]);
            }
          }
        }

        if (table.length > 1) {
          table.render();
        } else {
          inform(options, "No CPU usage data available for the specified range.");
        }
      }
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to fetch CPU usage. Error: " + error.body.message,
        error.code,
      );
    }
  });

const appCpuUsagePerDay = new Command()
  .name("cpu-usage-per-day")
  .description("Get daily CPU usage for the selected app.")
  .option(
    "--start <start:number>",
    "Start time (Unix timestamp in seconds).",
    { required: true },
  )
  .option(
    "--end <end:number>",
    "End time (Unix timestamp in seconds).",
    { required: true },
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    try {
      const metrics = await apiClient.metricsAppCpuUsagePerDay(
        app.id,
        options.start,
        options.end,
      );

      if (options.format === "json") {
        await stdout(metrics, options, "json");
      } else {
        const table = new Table();
        table.header(["Date", "CPU Usage (Seconds)"]);

        for (const result of metrics.data.result) {
          if (result.values) {
            for (const value of result.values) {
              table.push([
                new Date(value[0] * 1000).toISOString().split("T")[0],
                value[1],
              ]);
            }
          }
        }

        if (table.length > 1) {
          table.render();
        } else {
          inform(
            options,
            "No daily CPU usage data available for the specified range.",
          );
        }
      }
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to fetch daily CPU usage. Error: " + error.body.message,
        error.code,
      );
    }
  });

const appInstancesRunning = new Command()
  .name("instances-running")
  .description("Get running instances over time for the selected app.")
  .option(
    "--start <start:number>",
    "Start time (Unix timestamp in seconds).",
    { required: true },
  )
  .option(
    "--end <end:number>",
    "End time (Unix timestamp in seconds).",
    { required: true },
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    try {
      const metrics = await apiClient.metricsAppInstancesRunning(
        app.id,
        options.start,
        options.end,
      );

      if (options.format === "json") {
        await stdout(metrics, options, "json");
      } else {
        const table = new Table();
        table.header(["Timestamp", "Running Instances"]);

        for (const result of metrics.data.result) {
          if (result.values) {
            for (const value of result.values) {
              table.push([
                new Date(value[0] * 1000).toISOString(),
                value[1],
              ]);
            }
          }
        }

        if (table.length > 1) {
          table.render();
        } else {
          inform(
            options,
            "No running instances data available for the specified range.",
          );
        }
      }
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to fetch running instances. Error: " + error.body.message,
        error.code,
      );
    }
  });

const appInstancesRunningInstant = new Command()
  .name("instances-instant")
  .description("Get instant count of running instances for the selected app.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    try {
      const metrics = await apiClient.metricsAppInstancesRunningInstant(app.id);

      if (options.format === "json") {
        await stdout(metrics, options, "json");
      } else {
        const result = metrics.data.result[0];
        if (result) {
          const table = new Table();
          table.header(["Metric", "Value", "Timestamp"]);
          table.push([
            "Running Instances",
            result.value[1],
            new Date(result.value[0] * 1000).toISOString(),
          ]);
          table.render();
        } else {
          inform(options, "No running instances data available.");
        }
      }
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to fetch running instances. Error: " + error.body.message,
        error.code,
      );
    }
  });

const appInstancesPeak = new Command()
  .name("instances-peak")
  .description("Get peak instance count for the selected app.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    try {
      const metrics = await apiClient.metricsAppInstancesPeakInstant(app.id);

      if (options.format === "json") {
        await stdout(metrics, options, "json");
      } else {
        const result = metrics.data.result[0];
        if (result) {
          const table = new Table();
          table.header(["Metric", "Value", "Timestamp"]);
          table.push([
            "Peak Instances",
            result.value[1],
            new Date(result.value[0] * 1000).toISOString(),
          ]);
          table.render();
        } else {
          inform(options, "No peak instances data available.");
        }
      }
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to fetch peak instances. Error: " + error.body.message,
        error.code,
      );
    }
  });

const appMetrics = new Command()
  .name("app")
  .description("Get metrics for the selected app.")
  .action(() => {
    appMetrics.showHelp();
  })
  .command("cpu-instant", appCpuInstant)
  .command("cpu-usage", appCpuUsage)
  .command("cpu-usage-per-day", appCpuUsagePerDay)
  .command("instances-running", appInstancesRunning)
  .command("instances-instant", appInstancesRunningInstant)
  .command("instances-peak", appInstancesPeak);

// Server-level metrics commands

const serverCpuUsage = new Command()
  .name("cpu")
  .description("Get CPU usage for a specific server.")
  .option("--server-id <serverId:number>", "Server ID.")
  .option(
    "--start <start:number>",
    "Start time (Unix timestamp in seconds).",
    { required: true },
  )
  .option(
    "--end <end:number>",
    "End time (Unix timestamp in seconds).",
    { required: true },
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let serverId = options.serverId;

    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = await getAllPaginated((page: number) =>
          apiClient.getServers(app.id, 50, page)
        );
        if (servers.length === 0) {
          inform(
            options,
            "No servers found. Create a deployment to start a server.",
          );
          return;
        }
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load servers. Error: " + error.body.message,
          error.code,
        );
      }

      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => ({
          name: `${server.id} - ${server.location!.city} - ${server.serverConfigName}`,
          value: server.id,
        })),
      });
    }

    try {
      const metrics = await apiClient.metricsDockerServiceCpuUsage(
        serverId,
        options.start,
        options.end,
      );

      if (options.format === "json") {
        await stdout(metrics, options, "json");
      } else {
        const table = new Table();
        table.header(["Timestamp", "CPU Usage (%)"]);

        for (const result of metrics.data.result) {
          if (result.values) {
            for (const value of result.values) {
              table.push([
                new Date(value[0] * 1000).toISOString(),
                (parseFloat(value[1]) * 100).toFixed(2),
              ]);
            }
          }
        }

        if (table.length > 1) {
          table.render();
        } else {
          inform(options, "No CPU usage data available for the specified range.");
        }
      }
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to fetch server CPU usage. Error: " + error.body.message,
        error.code,
      );
    }
  });

const serverMemoryUsage = new Command()
  .name("memory")
  .description("Get memory usage for a specific server.")
  .option("--server-id <serverId:number>", "Server ID.")
  .option(
    "--start <start:number>",
    "Start time (Unix timestamp in seconds).",
    { required: true },
  )
  .option(
    "--end <end:number>",
    "End time (Unix timestamp in seconds).",
    { required: true },
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let serverId = options.serverId;

    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = await getAllPaginated((page: number) =>
          apiClient.getServers(app.id, 50, page)
        );
        if (servers.length === 0) {
          inform(
            options,
            "No servers found. Create a deployment to start a server.",
          );
          return;
        }
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load servers. Error: " + error.body.message,
          error.code,
        );
      }

      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => ({
          name: `${server.id} - ${server.location!.city} - ${server.serverConfigName}`,
          value: server.id,
        })),
      });
    }

    try {
      const metrics = await apiClient.metricsDockerServiceMemoryUsage(
        serverId,
        options.start,
        options.end,
      );

      if (options.format === "json") {
        await stdout(metrics, options, "json");
      } else {
        const table = new Table();
        table.header(["Timestamp", "Memory Usage (MB)"]);

        for (const result of metrics.data.result) {
          if (result.values) {
            for (const value of result.values) {
              const memoryMB = (parseFloat(value[1]) / 1024 / 1024).toFixed(2);
              table.push([
                new Date(value[0] * 1000).toISOString(),
                memoryMB,
              ]);
            }
          }
        }

        if (table.length > 1) {
          table.render();
        } else {
          inform(
            options,
            "No memory usage data available for the specified range.",
          );
        }
      }
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to fetch server memory usage. Error: " + error.body.message,
        error.code,
      );
    }
  });

const serverDiskRead = new Command()
  .name("disk-read")
  .description("Get disk read metrics for a specific server.")
  .option("--server-id <serverId:number>", "Server ID.")
  .option(
    "--start <start:number>",
    "Start time (Unix timestamp in seconds).",
    { required: true },
  )
  .option(
    "--end <end:number>",
    "End time (Unix timestamp in seconds).",
    { required: true },
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let serverId = options.serverId;

    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = await getAllPaginated((page: number) =>
          apiClient.getServers(app.id, 50, page)
        );
        if (servers.length === 0) {
          inform(
            options,
            "No servers found. Create a deployment to start a server.",
          );
          return;
        }
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load servers. Error: " + error.body.message,
          error.code,
        );
      }

      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => ({
          name: `${server.id} - ${server.location!.city} - ${server.serverConfigName}`,
          value: server.id,
        })),
      });
    }

    try {
      const metrics = await apiClient.metricsDockerServiceDiskRead(
        serverId,
        options.start,
        options.end,
      );

      if (options.format === "json") {
        await stdout(metrics, options, "json");
      } else {
        const table = new Table();
        table.header(["Timestamp", "Disk Read (MB)"]);

        for (const result of metrics.data.result) {
          if (result.values) {
            for (const value of result.values) {
              const diskMB = (parseFloat(value[1]) / 1024 / 1024).toFixed(2);
              table.push([
                new Date(value[0] * 1000).toISOString(),
                diskMB,
              ]);
            }
          }
        }

        if (table.length > 1) {
          table.render();
        } else {
          inform(
            options,
            "No disk read data available for the specified range.",
          );
        }
      }
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to fetch server disk read metrics. Error: " + error.body.message,
        error.code,
      );
    }
  });

const serverDiskWrite = new Command()
  .name("disk-write")
  .description("Get disk write metrics for a specific server.")
  .option("--server-id <serverId:number>", "Server ID.")
  .option(
    "--start <start:number>",
    "Start time (Unix timestamp in seconds).",
    { required: true },
  )
  .option(
    "--end <end:number>",
    "End time (Unix timestamp in seconds).",
    { required: true },
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let serverId = options.serverId;

    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = await getAllPaginated((page: number) =>
          apiClient.getServers(app.id, 50, page)
        );
        if (servers.length === 0) {
          inform(
            options,
            "No servers found. Create a deployment to start a server.",
          );
          return;
        }
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load servers. Error: " + error.body.message,
          error.code,
        );
      }

      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => ({
          name: `${server.id} - ${server.location!.city} - ${server.serverConfigName}`,
          value: server.id,
        })),
      });
    }

    try {
      const metrics = await apiClient.metricsDockerServiceDiskWrite(
        serverId,
        options.start,
        options.end,
      );

      if (options.format === "json") {
        await stdout(metrics, options, "json");
      } else {
        const table = new Table();
        table.header(["Timestamp", "Disk Write (MB)"]);

        for (const result of metrics.data.result) {
          if (result.values) {
            for (const value of result.values) {
              const diskMB = (parseFloat(value[1]) / 1024 / 1024).toFixed(2);
              table.push([
                new Date(value[0] * 1000).toISOString(),
                diskMB,
              ]);
            }
          }
        }

        if (table.length > 1) {
          table.render();
        } else {
          inform(
            options,
            "No disk write data available for the specified range.",
          );
        }
      }
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to fetch server disk write metrics. Error: " + error.body.message,
        error.code,
      );
    }
  });

const serverNetworkIngress = new Command()
  .name("network-ingress")
  .description("Get network ingress metrics for a specific server.")
  .option("--server-id <serverId:number>", "Server ID.")
  .option(
    "--start <start:number>",
    "Start time (Unix timestamp in seconds).",
    { required: true },
  )
  .option(
    "--end <end:number>",
    "End time (Unix timestamp in seconds).",
    { required: true },
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let serverId = options.serverId;

    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = await getAllPaginated((page: number) =>
          apiClient.getServers(app.id, 50, page)
        );
        if (servers.length === 0) {
          inform(
            options,
            "No servers found. Create a deployment to start a server.",
          );
          return;
        }
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load servers. Error: " + error.body.message,
          error.code,
        );
      }

      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => ({
          name: `${server.id} - ${server.location!.city} - ${server.serverConfigName}`,
          value: server.id,
        })),
      });
    }

    try {
      const metrics = await apiClient.metricsDockerServiceNetworkIngress(
        serverId,
        options.start,
        options.end,
      );

      if (options.format === "json") {
        await stdout(metrics, options, "json");
      } else {
        const table = new Table();
        table.header(["Timestamp", "Network Ingress (MB)"]);

        for (const result of metrics.data.result) {
          if (result.values) {
            for (const value of result.values) {
              const networkMB = (parseFloat(value[1]) / 1024 / 1024).toFixed(2);
              table.push([
                new Date(value[0] * 1000).toISOString(),
                networkMB,
              ]);
            }
          }
        }

        if (table.length > 1) {
          table.render();
        } else {
          inform(
            options,
            "No network ingress data available for the specified range.",
          );
        }
      }
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to fetch server network ingress metrics. Error: " +
          error.body.message,
        error.code,
      );
    }
  });

const serverNetworkEgress = new Command()
  .name("network-egress")
  .description("Get network egress metrics for a specific server.")
  .option("--server-id <serverId:number>", "Server ID.")
  .option(
    "--start <start:number>",
    "Start time (Unix timestamp in seconds).",
    { required: true },
  )
  .option(
    "--end <end:number>",
    "End time (Unix timestamp in seconds).",
    { required: true },
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let serverId = options.serverId;

    if (!serverId) {
      let servers: Server[] = [];
      try {
        servers = await getAllPaginated((page: number) =>
          apiClient.getServers(app.id, 50, page)
        );
        if (servers.length === 0) {
          inform(
            options,
            "No servers found. Create a deployment to start a server.",
          );
          return;
        }
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load servers. Error: " + error.body.message,
          error.code,
        );
      }

      serverId = await Select.prompt<number>({
        message: "Select server:",
        options: servers.map((server) => ({
          name: `${server.id} - ${server.location!.city} - ${server.serverConfigName}`,
          value: server.id,
        })),
      });
    }

    try {
      const metrics = await apiClient.metricsDockerServiceNetworkEgress(
        serverId,
        options.start,
        options.end,
      );

      if (options.format === "json") {
        await stdout(metrics, options, "json");
      } else {
        const table = new Table();
        table.header(["Timestamp", "Network Egress (MB)"]);

        for (const result of metrics.data.result) {
          if (result.values) {
            for (const value of result.values) {
              const networkMB = (parseFloat(value[1]) / 1024 / 1024).toFixed(2);
              table.push([
                new Date(value[0] * 1000).toISOString(),
                networkMB,
              ]);
            }
          }
        }

        if (table.length > 1) {
          table.render();
        } else {
          inform(
            options,
            "No network egress data available for the specified range.",
          );
        }
      }
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to fetch server network egress metrics. Error: " +
          error.body.message,
        error.code,
      );
    }
  });

const serverMetrics = new Command()
  .name("server")
  .description("Get metrics for a specific server.")
  .action(() => {
    serverMetrics.showHelp();
  })
  .command("cpu", serverCpuUsage)
  .command("memory", serverMemoryUsage)
  .command("disk-read", serverDiskRead)
  .command("disk-write", serverDiskWrite)
  .command("network-ingress", serverNetworkIngress)
  .command("network-egress", serverNetworkEgress);

// Main metrics command

export const metrics = new Command()
  .name("metrics")
  .description("View monitoring metrics for apps and servers.")
  .action(() => {
    metrics.showHelp();
  })
  .command("app", appMetrics)
  .command("server", serverMetrics);
