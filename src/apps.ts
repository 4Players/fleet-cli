import { Command } from "$cliffy/command/command.ts";
import { Config, getConfig, saveConfig } from "./login.ts";
import { apiClient } from "./client.ts";
import { Table } from "$cliffy/table/table.ts";
import { Input, Select, prompt } from "$cliffy/prompt/mod.ts";
import { CommandOptions } from "$cliffy/command/types.ts";
import { colors } from "https://deno.land/x/cliffy@v1.0.0-rc.3/ansi/colors.ts";
import { App, CreateAppRequest } from "./api/index.ts";

const getAppId = async (options: CommandOptions) => {
  if (options.appId) {
    return options.appId;
  }

  const config = await getConfig();
  if (config && config.selectedAppId) {
    return config.selectedAppId;
  }

  console.log("No app selected. Please select an app first. Use `odin apps select`.");
  Deno.exit(1);
};

export const getSelectedApp = async (options: CommandOptions): Promise<App> => {
  const appId = await getAppId(options);
  const app = await apiClient.getAppById(appId);
  return app;
};

const appList = new Command()
  .name("list")
  .description("List all apps.")
  .action(async (options: CommandOptions) => {
    let apps: App[] = [];
    try {
      apps = await apiClient.getApps();
    }
    catch(error) {
      console.log("Failed to load apps. Error: ", error.body.message, error.code);
      Deno.exit(1);
    }
    const selectedApp = await getSelectedApp(options);
    if (apps.length === 0) {
      console.log("No apps found. Use the create command to create a new app.");
      return;
    }
    const table: Table = new Table();
    table.header(["ID", "Name"]);
    apps.forEach((app) => {
      table.push([app.id, app.name + colors.rgb24(app.id === selectedApp.id ? " (selected)" : "", 0x1bebda)]);
    });
    table.render();
  });

const selectApp = new Command()
  .name("select")
  .description("Select an app.")
  .action(async (options: CommandOptions) => {
    console.log("Please wait, loading apps...");

    let apps: App[] = [];
    try {
      apps = await apiClient.getApps();
    }
    catch(error) {
      console.log("Failed to load apps. Error: ", error.body.message, error.code);
      Deno.exit(1);
    }

    const appId = await Select.prompt<number>({
      message: "Select the app",
      options: apps.map((app) => {
        return { name: app.name, value: app.id };
      }),
    });

    const config: Config = (await getConfig()) || { accessKey: "" };
    config.selectedAppId = appId;
    await saveConfig(config);

    console.log("Selected app id: ", appId);
    console.log(
      "This app will be used for subsequent commands, use the 'odin apps select' command to change the selected app or provide the --appId=<appId> flag to any command.",
    );
  });

const create = new Command()
  .name("create")
  .description("Create a new App.")
  .action(async (options) => {
    const payload = await prompt([
      {
        name: "name",
        message: "Enter the name of the app",
        type: Input,
      },
    ]);

    console.log("Creating app...");
    try {
      const app = await apiClient.createApp(payload as CreateAppRequest);
      console.log("App created with id", app.id);
    } catch (error) {
      console.log("Failed to create app. Error: ", error.body.message, error.code);
      Deno.exit(1);
    }
  });

export const apps = new Command()
  .name("apps")
  .description("Manage ODIN apps.")
  .command("create", create)
  .command("list", appList)
  .command("select", selectApp);
