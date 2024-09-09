import { Command } from "$cliffy/command/command.ts";
import { Config, getConfig, saveConfig } from "./login.ts";
import { apiClient } from "./main.ts";
import { Input, prompt, Select } from "$cliffy/prompt/mod.ts";
import { CommandOptions } from "$cliffy/command/types.ts";
import { colors } from "https://deno.land/x/cliffy@v1.0.0-rc.3/ansi/colors.ts";
import { App, StoreAppRequest } from "./api/index.ts";
import { inform, logError, logErrorAndExit, stdout } from "./utils.ts";

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
    } catch (response) {
      if (response.code === 403) {
        logErrorAndExit(
          "You don't have access to the selected app. Please select another app. If you provide the `--appId` parameter, make sure it's correct.",
        );
      } else {
        logErrorAndExit(
          "Failed to load the selected app. Error: " + response.body.message,
          response.code,
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
      apps = await apiClient.getApps();
    } catch (error) {
      logError("Failed to load apps. Error: " + error.body.message, error.code);
      Deno.exit(1);
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
  .action(async (options: CommandOptions) => {
    let apps: App[] = [];
    try {
      apps = await apiClient.getApps();
    } catch (error) {
      console.log(
        "Failed to load apps. Error: ",
        error.body.message,
        error.code,
      );
      Deno.exit(1);
    }
    const selectedApp = await getSelectedApp(options);
    if (apps.length === 0) {
      console.log("No apps found. Use the create command to create a new app.");
      return;
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
        });
      });

      await stdout(data, options, "table(id,name)");
    } else {
      await stdout(apps, options, "table(id,name)");
    }
  });

const selectApp = new Command()
  .name("select")
  .description("Select an app.")
  .action(async (options: CommandOptions) => {
    const app = await getApp(options);

    const config: Config = (await getConfig()) || { accessKey: "" };
    config.selectedAppId = app.id;
    await saveConfig(config);

    inform(
      options,
      `Selected app: ${colors.rgb24(app.name, 0x1bebda)} (${
        colors.rgb24(app.id.toString(), 0x1bebda)
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
      logError("Failed to create app. Error: ", error.body.message, error.code);
      Deno.exit(1);
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
