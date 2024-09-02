import { Command } from "$cliffy/command/mod.ts";
import { apps } from "./apps.ts";
import { fleet } from "./fleet.ts";
import { voice } from "./voice.ts";
import {ensureLoginSession, login} from "./login.ts";
import { createApiClient } from "./client.ts";
import {AppApi} from "./api/index.ts";

export let apiClient: AppApi;

await new Command()
  // Main command.
  .name("odin")
  .version("0.1.0")
  .description("Command line tools for ODIN by 4Players.")
  .globalOption("-d, --debug", "Enable debug output.")
  .globalOption("-f, --force", "Disable confirmation prompts (use with caution).")
  .globalOption("--api-key <apiKey:string>", "Your API-Key for the ODIN backend. You can also use `odin login` to authenticate.")
  .globalOption("--format <format:string>", "Output format (json, table, default, value).", { default: "default" })
  .globalAction(async (options, ...args) => {
    const accessToken = await ensureLoginSession(options.apiKey);
    apiClient = createApiClient(accessToken);
  })
  .action((options, ...args) => {
    console.log("Please provide a subcommand. Use `odin --help` for more information.");
  })
  .command("login", login)
  .command("apps", apps)
  .command("fleet", fleet)
  .command("voice", voice)
  .parse(Deno.args);
