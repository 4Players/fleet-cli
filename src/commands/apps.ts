import { colors } from "@cliffy/ansi/colors";
import { Command, CommandOptions } from "@cliffy/command";
import { Input, prompt, Select } from "@cliffy/prompt";

import { App, StoreAppRequest } from "../../backend/api/index.ts";

import { apiClient } from "../client.ts";
import { filterArray } from "../filter.ts";
import { getConfig, saveConfig } from "../config.ts";
import {
  ensureApiException,
  getAllPaginated,
  inform,
  logError,
  logErrorAndExit,
  stdout,
} from "../utils.ts";

const getAppId = async (options: CommandOptions): Promise<number> => {
  if (options.appId) {
    return options.appId;
  }

  const config = await getConfig();
  if (config && config.selectedAppId) {
    return config.selectedAppId;
  }

  return 0;
};

export const getSelectedApp = async (
  options: CommandOptions,
): Promise<App | null> => {
  const appId = await getAppId(options);
  if (appId <= 0) {
    return null;
  } else {
    try {
      const app = await apiClient.getAppById(appId);
      return app;
    } catch (error) {
      ensureApiException(error);
      if (error.code === 403) {
        logErrorAndExit(
          "You don't have access to the selected app. Please select another app. If you provide the `--appId` parameter, make sure it's correct.",
        );
      } else {
        logErrorAndExit(
          "Failed to load the selected app. Error: " + error.body.message,
          error.code,
        );
      }
      return null;
    }
  }
};

export const getSelectedAppOrExit = async (
  options: CommandOptions,
): Promise<App> => {
  const app = await getSelectedApp(options);
  if (!app) {
    logErrorAndExit(
      "No app selected. Please select an app first. Use `odin apps select` or provide the `--appId` parameter.",
    );
  }
  return app!;
};

export const getApp = async (options: CommandOptions): Promise<App> => {
  let appId = options.appId;
  if (!appId) {
    let apps: App[] = [];
    try {
      apps = await getAllPaginated((
        page: number,
      ) => (apiClient.getApps(50, page)));
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to load apps. Error: " + error.body.message,
        error.code,
      );
    }

    appId = await Select.prompt<number>({
      message: "Select the app",
      options: apps.map((app) => {
        return { name: app.name, value: app.id };
      }),
    });
  }

  let app: App;
  try {
    app = await apiClient.getAppById(appId);
    return app;
  } catch (error) {
    ensureApiException(error);
    logError("Failed to load app. Error: " + error.body.message, error.code);
    Deno.exit(1);
  }
};

const getAppDetails = new Command()
  .name("get")
  .description("Get App Details.")
  .action(async (options: CommandOptions) => {
    const app = await getApp(options);
    await stdout(app, options, "table(id,name)");
  });

const appList = new Command()
  .name("list")
  .description("List all apps.")
  .option(
    "--filter <filter:string>",
    "Filter result based on a filter expression",
  )
  .action(async (options: CommandOptions) => {
    let apps: App[] = [];
    try {
      apps = await getAllPaginated((
        page: number,
      ) => (apiClient.getApps(50, page)));
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to load apps. Error: ",
        error.body.message,
        error.code,
      );
    }
    const selectedApp = await getSelectedApp(options);
    if (apps.length === 0) {
      console.log("No apps found. Use the create command to create a new app.");
      return;
    }

    // Filter array if filter option is provided
    if (options.filter) {
      try {
        apps = await filterArray(apps, options.filter);
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit("Failed to filter apps. Error: " + error.message);
      }
    }

    if (!options.format || options.format === "default") {
      const data: App[] = [];
      apps.forEach((app) => {
        data.push({
          id: app.id,
          name: app.name +
            colors.rgb24(
              app.id === selectedApp?.id ? " (selected)" : "",
              0x1bebda,
            ),
          inUse: app.inUse,
        });
      });

      await stdout(data, options, "table(id,name,inUse)");
    } else {
      await stdout(apps, options, "table(id,name,inUse)");
    }
  });

const selectApp = new Command()
  .name("select")
  .description("Select an app.")
  .action(async (options: CommandOptions) => {
    const app = await getApp(options);
    const config = await getConfig() || { accessKey: "" };

    await saveConfig({ ...config, selectedAppId: app.id });

    inform(
      options,
      `Selected app: ${colors.rgb24(app.name, 0x1bebda)} (${
        colors.rgb24(
          app.id.toString(),
          0x1bebda,
        )
      })`,
    );
    inform(
      options,
      "This app will be used for subsequent commands, use the 'odin apps select' command to change the selected app or provide the --appId=<appId> flag to any command.",
    );

    if (options.format && options.format !== "default") {
      await stdout(app, options, "table(id,name)");
    }
  });

const create = new Command()
  .name("create")
  .description("Create a new App.")
  .option("--name <name:string>", "The name of the app.")
  .action(async (options: CommandOptions) => {
    let payload = null;
    if (options.name) {
      payload = { name: options.name };
    } else {
      payload = await prompt([
        {
          name: "name",
          message: "Enter the name of the app",
          type: Input,
        },
      ]);
    }

    try {
      const app = await apiClient.createApp(payload as StoreAppRequest);
      await stdout(app, options, "table(id,name)");
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to create app. Error: ",
        error.body.message,
        error.code,
      );
    }
  });

export const apps = new Command()
  .name("apps")
  .description("Manage ODIN apps.")
  .action(() => {
    apps.showHelp();
  })
  .command("create", create)
  .command("list", appList)
  .command("get", getAppDetails)
  .command("select", selectApp);
