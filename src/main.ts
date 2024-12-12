import { Command } from "@cliffy/command";

import { createApiClient, ensureLoginSession } from "./client.ts";

import { apps } from "./commands/apps.ts";
import { fleet } from "./commands/fleet.ts";
import { voice } from "./commands/voice.ts";
import { login } from "./commands/login.ts";

import module from "./mod.json" with { type: "json" };

await new Command()
  // Main command.
  .name("odin")
  .version(module.version)
  .description("Command line tools for ODIN by 4Players.")
  .globalOption("-d, --debug", "Enable debug output.")
  .globalOption(
    "-f, --force",
    "Disable confirmation prompts (use with caution).",
  )
  .globalOption(
    "-q, --quiet",
    "Disable additional (informative) messages (will be set automatically if --format is set).",
  )
  .globalOption(
    "--api-key <apiKey:string>",
    "Your API-Key for the ODIN backend. You can also use `odin login` to authenticate.",
  )
  .globalOption(
    "--format <format:string>",
    "Output format (json, table, default, value).",
    { default: "default" },
  )
  .globalOption(
    "--app-id <appId:number>",
    "The ID of the app (overwrites selected app)",
  )
  .globalAction(async (options) => {
    const accessToken = await ensureLoginSession(options.apiKey);
    createApiClient(accessToken);
  })
  .action((_options, ..._args) => {
    console.log(
      "Please provide a subcommand. Use `odin --help` for more information.",
    );
  })
  .command("login", login)
  .command("apps", apps)
  .command("fleet", fleet)
  .command("voice", voice)
  .parse(Deno.args);
