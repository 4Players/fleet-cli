import { Command } from "$cliffy/command/command.ts";
import { Table } from "$cliffy/table/table.ts";
import {Location} from "./api/index.ts";
import {apiClient} from "./main.ts";
import {logError} from "./utils.ts";

const locationsList = new Command()
  .name("list")
  .description("List all locations available in ODIN Fleet.")
  .action(async () => {
    // Select Location
    let locations: Location[] = [];
    try {
      locations = await apiClient.getLocations();
      if (locations.length === 0) {
        console.log("No locations found.");
        return;
      }
    } catch (error) {
      logError("Failed to load locations. Error: " + error.body.message, error.code);
      Deno.exit(1);
    }

    const table: Table = new Table();
    table.header(["Continent", "Region", "City"]);
    locations.forEach((location) => {
      table.push([
        location.continent,
        location.country,
        location.city
      ]);
    });
    table.render();
  });

export const locations = new Command()
  .name("servers")
  .description("Manage ODIN Fleet servers have been deployment for the selected app.")
  .action(() => {
    locations.showHelp();
  })
  .command("list", locationsList)
