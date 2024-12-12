import { Command } from "@cliffy/command";

const accessKeysList = new Command()
  .name("list")
  .description("List all ODIN Voice access keys.")
  .action(() => {
    console.log("Not implemented yet. Please check back later.");
  });

const accessKeys = new Command()
  .name("access-keys")
  .description("Manage ODIN Voice access keys.")
  .action(() => {
    accessKeys.showHelp();
  })
  .command("list", accessKeysList);

export const voice = new Command()
  .name("voice")
  .description("Manage ODIN Voice access keys.")
  .action(() => {
    voice.showHelp();
  })
  .command("access-keys", accessKeys);
