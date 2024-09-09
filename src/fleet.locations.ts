import { Command } from "$cliffy/command/command.ts";
import { Table } from "$cliffy/table/table.ts";
import { Location } from "./api/index.ts";
import { apiClient } from "./main.ts";
import { logError, stdout } from "./utils.ts";
import { filterArray } from "./filter.ts";

const locationsList = new Command()
  .name("list")
  .description("List all locations available in ODIN Fleet.")
  .option(
    "--filter <filter:string>",
    "Filter result based on a filter expression",
  )
  .action(async (options) => {
    // Select Location
    let locations: Location[] = [];
    try {
      locations = await apiClient.getLocations();
      if (locations.length === 0) {
        console.log("No locations found.");
        return;
      }
    } catch (error) {
      logError(
        "Failed to load locations. Error: " + error.body.message,
        error.code,
      );
      Deno.exit(1);
    }

    // Filter array if filter option is provided
    if (options.filter) {
      try {
        locations = await filterArray(locations, options.filter);
      } catch (error) {
        logError("Failed to filter locations. Error: " + error.message);
        Deno.exit(1);
      }
    }

    await stdout(locations, options, "table(continent,country,city)");
  });

export const locations = new Command()
  .name("servers")
  .description(
    "Manage ODIN Fleet servers have been deployment for the selected app.",
  )
  .action(() => {
    locations.showHelp();
  })
  .command("list", locationsList);
