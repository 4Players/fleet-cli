import { Command, CommandOptions } from "@cliffy/command";
import { Input, Number } from "@cliffy/prompt";

import { LocationIndex } from "../../../backend/api/index.ts";

import {
  confirm,
  ensureApiException,
  getAllPaginated,
  inform,
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
  .option(
    "--with-load",
    "Also show how loaded a location currently is and whether it is password protected.",
  )
  .action(async (options: CommandOptions) => {
    // Select Location
    let locations: LocationIndex[] = [];
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

    await stdout(
      locations,
      options,
      options.withLoad
        ? "table(continent,country,city,load,isProtected)"
        : "table(continent,country,city)",
    );
  });

const requestLocation = new Command()
  .name("request")
  .description(
    "Request capacity in a location that is currently occupied or not offered yet.",
  )
  .option("--location <location:string>", "The location you need capacity in.")
  .option(
    "--num-instances <numInstances:number>",
    "Number of instances you need in that location.",
  )
  .option("--project-name <projectName:string>", "The name of your project.")
  .option("--company <company:string>", "The company you are working for.")
  .option(
    "--message <message:string>",
    "Additional information about your request.",
  )
  .action(async (options: CommandOptions) => {
    const location = options.location ?? await Input.prompt({
      message: "Which location do you need capacity in?",
    });

    const numInstances = options.numInstances ?? await Number.prompt({
      message: "How many instances do you need in that location?",
      min: 1,
    });

    const projectName = options.projectName ?? await Input.prompt({
      message: "What's the name of your project?",
    });

    const payload = {
      location,
      numInstances,
      projectName,
      company: options.company,
      message: options.message,
    };

    const confirmed = await confirm(
      options,
      `Do you want to request ${numInstances} instance(s) in ${location}?`,
    );

    if (!confirmed) {
      inform(options, "Location request aborted.");
      return;
    }

    try {
      await apiClient.requestLocation(payload);
      inform(
        options,
        "Location requested successfully, our team will get back to you.",
      );
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to request the location. Error: " + error.body.message,
        error.code,
      );
    }
  });

export const locations = new Command()
  .name("locations")
  .description("Manage the ODIN Fleet locations your servers can run in.")
  .action(() => {
    locations.showHelp();
  })
  .command("list", locationsList)
  .command("request", requestLocation);
