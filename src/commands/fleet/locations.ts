import { Command, CommandOptions } from "@cliffy/command";

import {
  ensureApiException,
  getAllPaginated,
  logErrorAndExit,
  stdout,
} from "../../utils.ts";
import { apiClient } from "../../client.ts";
import { filterArray } from "../../filter.ts";

const locationsList = new Command()
  .name("list")
  .description("List all locations available in ODIN Fleet.")
  .option(
    "--filter <filter:string>",
    "Filter result based on a filter expression",
  )
  .action(async (options: CommandOptions) => {
    // Select Location
    let locations;
    try {
      locations = await getAllPaginated((
        page: number,
      ) => (apiClient.getLocations(50, page)));
      if (locations.length === 0) {
        console.log("No locations found.");
        return;
      }
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
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
        ensureApiException(error);
        logErrorAndExit("Failed to filter locations. Error: " + error.message);
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
