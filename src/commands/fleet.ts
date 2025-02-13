import { Command } from "@cliffy/command";

import { images } from "./fleet/images.ts";
import { configs } from "./fleet/configs.ts";
import { deployments } from "./fleet/deployments.ts";
import { servers } from "./fleet/servers.ts";
import { locations } from "./fleet/locations.ts";

export const fleet = new Command()
  .name("fleet")
  .description(
    "Manage ODIN Fleet resources and deploy docker images with ease.",
  )
  .action(() => {
    fleet.showHelp();
  })
  .command("images", images)
  .command("configs", configs)
  .command("deployments", deployments)
  .command("servers", servers)
  .command("locations", locations);
