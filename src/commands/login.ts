import { Command, CommandOptions } from "@cliffy/command";
import { Input } from "@cliffy/prompt";

import { getConfig, saveAccessToken, saveConfig } from "../config.ts";
import { ensureApiException, logErrorAndExit } from "../utils.ts";
import { apiClient } from "../client.ts";

export const login = new Command()
  .name("login")
  .description("Log into ODIN with your credentials or access token.")
  .action(async (options: CommandOptions) => {
    console.log(
      "You can find your ODIN API key in the dashboard of ODIN in the apps settings section (see https://console.4players.io/settings/api-keys)",
    );
    const apiKey: string = options.apiKey ||
      await Input.prompt("Your API key: ");
    if (!apiKey || apiKey.length === 0) {
      console.error("You need to provide an API key.");
      return;
    } else {
      await saveAccessToken(apiKey);
      console.log("API key stored, you can now proceed with other commands.");
    }

    if (options.appId) {
      try {
        const app = await apiClient.getAppById(options.appId);
        const config = await getConfig() || { accessKey: apiKey };

        await saveConfig({ ...config, selectedAppId: app.id });
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load app. Error: " + error.body.message,
          error.code,
        );
      }
    }
  });
