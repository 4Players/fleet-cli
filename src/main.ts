import { Command } from "$cliffy/command/mod.ts";
import { apps } from "./apps.ts";
import { fleet } from "./fleet.ts";
import { voice } from "./voice.ts";
import { login } from "./login.ts";

await new Command()
  // Main command.
  .name("odin")
  .version("0.1.0")
  .description("Command line tools for ODIN by 4Players.")
  .globalOption("-d, --debug", "Enable debug output.")
  .globalOption("-f, --force", "Disable confirmation prompts (use with caution).")
  .globalOption("--api-key", "Your API-Key for the ODIN backend. You can also use `odin login` to authenticate.")
  .globalAction(async (options, ...args) => {})
  .action((options, ...args) => {
    console.log("Please provide a subcommand. Use `odin --help` for more information.");
  })
  .command("login", login)
  .command("apps", apps)
  .command("fleet", fleet)
  .command("voice", voice)
  .parse(Deno.args);
