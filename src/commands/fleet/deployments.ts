import { Command, CommandOptions } from "@cliffy/command";
import { Confirm, Input, Number, Select } from "@cliffy/prompt";

import {
  AppLocationSetting,
  AppLocationSettingAutoscaling,
  CreateUpdateAutoscaling,
  Location,
  Placement,
  Server,
  ServerConfig,
  StoreAppLocationSettingRequest,
  UpdateAppLocationSettingRequest,
} from "../../../backend/api/index.ts";

import { apiClient } from "../../client.ts";
import { getSelectedAppOrExit } from "../apps.ts";
import { filterArray } from "../../filter.ts";
import { createMetadataCommand } from "../metadata.ts";
import {
  confirm,
  ensureApiException,
  getAllPaginated,
  inform,
  logError,
  logErrorAndExit,
  stdout,
  validateAtLeastOneOptionAvailable,
  validateRequiredOptions,
} from "../../utils.ts";

/**
 * Autoscaling has to be sent as a complete object, so flags that were not
 * provided fall back to the value the deployment already has and, for a
 * deployment that is autoscaled for the first time, to these defaults.
 */
const AUTOSCALING_DEFAULTS = {
  healthEnabled: false,
  healthInitialDelaySeconds: 60,
  healthPeriodSeconds: 30,
  healthFailureThreshold: 3,
  bufferSize: 1,
} as const;

/** The option keys that make up the autoscaling configuration. */
const AUTOSCALING_OPTIONS = [
  "autoscaling",
  "autoscalingMinInstances",
  "autoscalingMaxInstances",
  "autoscalingBufferSize",
  "autoscalingHealth",
  "autoscalingHealthInitialDelay",
  "autoscalingHealthPeriod",
  "autoscalingHealthFailureThreshold",
];

/** Adds the autoscaling flags to a create or update command. */
// deno-lint-ignore no-explicit-any
const withAutoscalingOptions = (command: any) =>
  command
    .group("Autoscaling Options")
    .option(
      "--autoscaling [enabled:boolean]",
      "Enable autoscaling. While enabled --num-instances is ignored.",
    )
    .option(
      "--autoscaling-min-instances <minInstances:number>",
      "Minimum number of autoscaled instances.",
    )
    .option(
      "--autoscaling-max-instances <maxInstances:number>",
      "Maximum number of autoscaled instances.",
    )
    .option(
      "--autoscaling-buffer-size <bufferSize:number>",
      "Number of ready instances kept above the allocated ones.",
    )
    .option(
      "--autoscaling-health [enabled:boolean]",
      "Enable autoscaling health checks.",
    )
    .option(
      "--autoscaling-health-initial-delay <seconds:number>",
      "Grace period in seconds before failed health pings are counted.",
    )
    .option(
      "--autoscaling-health-period <seconds:number>",
      "Seconds between expected health pings.",
    )
    .option(
      "--autoscaling-health-failure-threshold <count:number>",
      "Number of failed health pings before an instance is considered unhealthy.",
    );

/** True when the user provided at least one autoscaling flag. */
const hasAutoscalingOptions = (options: CommandOptions) =>
  AUTOSCALING_OPTIONS.some((option) => options[option] !== undefined);

/**
 * Merges the autoscaling flags onto the current state of the deployment. The
 * API expects a complete object, partial updates are not supported.
 */
const buildAutoscaling = (
  options: CommandOptions,
  current?: AppLocationSettingAutoscaling,
): CreateUpdateAutoscaling => {
  const enabled = options.autoscaling ?? current?.enabled ?? false;

  const minInstances = options.autoscalingMinInstances ??
    current?.minInstances ?? null;
  const maxInstances = options.autoscalingMaxInstances ??
    current?.maxInstances ?? null;

  if (enabled && (minInstances === null || maxInstances === null)) {
    logErrorAndExit(
      "Autoscaling requires --autoscaling-min-instances and --autoscaling-max-instances.",
    );
  }

  return {
    enabled,
    minInstances: minInstances ?? 0,
    maxInstances: maxInstances ?? 0,
    bufferSize: options.autoscalingBufferSize ?? current?.bufferSize ??
      AUTOSCALING_DEFAULTS.bufferSize,
    healthEnabled: options.autoscalingHealth ?? current?.healthEnabled ??
      AUTOSCALING_DEFAULTS.healthEnabled,
    healthInitialDelaySeconds: options.autoscalingHealthInitialDelay ??
      current?.healthInitialDelaySeconds ??
      AUTOSCALING_DEFAULTS.healthInitialDelaySeconds,
    healthPeriodSeconds: options.autoscalingHealthPeriod ??
      current?.healthPeriodSeconds ?? AUTOSCALING_DEFAULTS.healthPeriodSeconds,
    healthFailureThreshold: options.autoscalingHealthFailureThreshold ??
      current?.healthFailureThreshold ??
      AUTOSCALING_DEFAULTS.healthFailureThreshold,
  };
};

/** Interactively asks for the autoscaling configuration of a new deployment. */
const promptAutoscaling = async (): Promise<
  CreateUpdateAutoscaling | undefined
> => {
  const enabled = await Confirm.prompt({
    message: "Do you want to enable autoscaling for this deployment?",
    default: false,
  });

  if (!enabled) {
    return undefined;
  }

  const minInstances = await Number.prompt({
    message: "Minimum number of autoscaled instances:",
    min: 0,
  });

  const maxInstances = await Number.prompt({
    message: "Maximum number of autoscaled instances:",
    min: minInstances,
  });

  const bufferSize = await Number.prompt({
    message: "Number of ready instances kept above the allocated ones:",
    min: 0,
    default: AUTOSCALING_DEFAULTS.bufferSize,
  });

  const healthEnabled = await Confirm.prompt({
    message: "Do you want to enable autoscaling health checks?",
    default: AUTOSCALING_DEFAULTS.healthEnabled,
  });

  if (!healthEnabled) {
    return {
      ...AUTOSCALING_DEFAULTS,
      enabled,
      minInstances,
      maxInstances,
      bufferSize,
      healthEnabled,
    };
  }

  return {
    enabled,
    minInstances,
    maxInstances,
    bufferSize,
    healthEnabled,
    healthInitialDelaySeconds: await Number.prompt({
      message:
        "Grace period in seconds before failed health pings are counted:",
      min: 0,
      default: AUTOSCALING_DEFAULTS.healthInitialDelaySeconds,
    }),
    healthPeriodSeconds: await Number.prompt({
      message: "Seconds between expected health pings:",
      min: 1,
      default: AUTOSCALING_DEFAULTS.healthPeriodSeconds,
    }),
    healthFailureThreshold: await Number.prompt({
      message:
        "Number of failed health pings before an instance is considered unhealthy:",
      min: 1,
      default: AUTOSCALING_DEFAULTS.healthFailureThreshold,
    }),
  };
};

const deploymentsList = new Command()
  .name("list")
  .description("List all server deployments for the selected app.")
  .option(
    "--filter <filter:string>",
    "Filter result based on a filter expression",
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let deployments: AppLocationSetting[] = [];
    try {
      deployments = await getAllPaginated((page) =>
        apiClient.getAppLocationSettings(app.id, 50, page)
      );
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to load deployments. Error: " + error.body.message,
        error.code,
      );
    }

    if (deployments.length === 0) {
      inform(options, "No server deployments found.");
      return;
    }

    // Filter array if filter option is provided
    if (options.filter) {
      try {
        deployments = await filterArray(deployments, options.filter);
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit("Failed to filter servers. Error: " + error.message);
      }
    }

    stdout(
      deployments,
      options,
      "table(id,name,serverConfig.name,placement.constraints.city,placement.constraints.country,numInstances)",
    );
  });

export const getDeploymentDetails = new Command()
  .name("get")
  .description("Get data for a specified deployment.")
  .option("--deployment-id <deploymentId:number>", "Deployment ID.")
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);
    let deploymentId = options.deploymentId;
    if (!deploymentId) {
      let deployments: AppLocationSetting[] = [];
      try {
        deployments = await getAllPaginated((page) =>
          apiClient.getAppLocationSettings(app.id, 50, page)
        );
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load deployments. Error: ",
          error.body.message,
          error.code,
        );
      }

      deploymentId = await Select.prompt({
        message:
          "Select the deployment that should be shown or provide the --deployment-id=<deploymentId> flag",
        options: deployments.map((deployment) => {
          return { name: deployment.name, value: deployment.id };
        }),
      });
    }

    try {
      const deployment = await apiClient.getAppLocationSettingById(
        deploymentId,
      );

      stdout(
        deployment,
        options,
        "table(id,name,serverConfig.name,placement.constraints.city,placement.constraints.country,numInstances)",
      );
    } catch (_error) {
      logErrorAndExit(
        `Deployment ${deploymentId} does not exist (or not in the app ${app.name}, id: ${app.id})`,
      );
    }
  });

export const createDeployment = withAutoscalingOptions(
  new Command()
    .name("create")
    .description("Create a new deployment.")
    .option("--payload <payload:string>", "Payload as JSON string.")
    .option(
      "--dry-run",
      "Dry run mode, does not create the deployment, but prints the payload.",
    )
    .group("Update Values")
    .option("--name <name:string>", "Name of the image.")
    .option("--config-id <configId:number>", "The server config ID.")
    .option(
      "--num-instances <numInstances:number>",
      "Number of instances to deploy.",
    )
    .option("--country <country:string>", "The country to deploy to.")
    .option("--city <city:string>", "The location to deploy to.")
    .option(
      "--password <password:string>",
      "Optional password for protected locations.",
    ),
)
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    let payload: StoreAppLocationSettingRequest | null = null;

    if (options.payload && options.payload.length > 0) {
      try {
        payload = JSON.parse(options.payload) as StoreAppLocationSettingRequest;
      } catch (error) {
        logError("Invalid payload. Please provide a valid JSON string.", error);
        return;
      }
    } else if (!options.name) {
      // Prompt for name
      const name = await Input.prompt({
        message: "What's the name of your deployment?",
      });

      // Select Location
      let locations: Location[] = [];
      try {
        locations = await getAllPaginated((page) =>
          apiClient.getLocations(50, page)
        );
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load locations. Error: " + error.body.message,
          error.code,
        );
      }

      const placement = await Select.prompt<Placement>({
        message: "Select location to deploy:",
        options: locations.map((location) => {
          return {
            name: `${location.city}, ${location.country} ${
              location.isProtected ? "[Protected]" : ""
            }`,
            value: {
              constraints: location,
            },
          };
        }),
      }); // Need to hack the type system as there seems to be a bug in the Select prompt definition

      let locationPassword: string | undefined;
      if (placement.constraints.isProtected) {
        locationPassword = await Input.prompt({
          message: "Enter the password to deploy in this protected location:",
        });
      }

      let configs: ServerConfig[] = [];
      try {
        configs = await getAllPaginated((page) =>
          apiClient.getServerConfigs(app.id, 50, page)
        );
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load server configs. Error: " + error.body.message,
          error.code,
        );
      }
      const serverConfigId = await Select.prompt<number>({
        message: "Choose the server config to deploy:",
        options: configs.map((config) => {
          return {
            name: config.name,
            value: config.id,
          };
        }),
      });

      const numInstances = await Number.prompt({
        message: "Enter the number of instances to deploy:",
        validate(value) {
          if (parseInt(value) < 1) {
            return "Number of instances must be greater than 0.";
          }
          return true;
        },
      });

      payload = {
        name: name,
        serverConfigId: serverConfigId,
        placement: placement,
        numInstances: numInstances,
        password: locationPassword,
        autoscaling: await promptAutoscaling(),
      };
    } else {
      validateRequiredOptions(options, ["name", "configId", "numInstances"]);

      if (!options.country || !options.city) {
        logError(
          "You need to provide the country and city for the placement. Use the `odin fleet locations` command to get a list of available locations.",
        );
        Deno.exit(1);
      }

      // Try to find the correct location using the specified options (--city, --country and --password)
      let locations: Location[] = [];
      try {
        locations = await getAllPaginated((page) =>
          apiClient.getLocations(50, page)
        );
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load locations. Error: " + error.body.message,
          error.code,
        );
      }
      const constraints = locations.find((location) =>
        location.city === options.city &&
        location.country === options.country &&
        location.isProtected === (!!options.password?.length)
      );

      if (!constraints) {
        logError("Unable to find a location matching the specified arguments.");
        Deno.exit(1);
      }

      payload = {
        name: options.name,
        serverConfigId: options.configId,
        placement: {
          constraints,
        },
        numInstances: options.numInstances,
        password: options.password,
        autoscaling: hasAutoscalingOptions(options)
          ? buildAutoscaling(options)
          : undefined,
      };
    }

    if (!payload) {
      console.error("Something went wrong, invalid payload.");
      return;
    }

    if (options.dryRun) {
      inform(options, "Dry run mode, payload:");
      stdout(payload, options, "json");
    } else {
      const confirmed = await confirm(
        options,
        "Do you want to create this deployment?",
      );

      if (confirmed) {
        try {
          const deployment = await apiClient.createAppLocationSetting(
            app.id,
            payload,
          );
          stdout(
            deployment,
            options,
            "table(id,name,binary.name,binary.version)",
          );
        } catch (error) {
          ensureApiException(error);
          logErrorAndExit(
            "Failed to create deployment. Error: ",
            error.body.message,
            error.code,
            JSON.stringify(payload),
          );
        }
      } else {
        inform(options, "Deployment creation aborted.");
        inform(
          options,
          "This payload would have been used, you can use the --payload flag to provide it: ",
        );
        stdout(payload, options, "json");
      }
    }
  });

const updateDeployment = withAutoscalingOptions(
  new Command()
    .name("update")
    .description("Update a deployment.")
    .option("--deployment-id <deploymentId:number>", "Deployment ID.")
    .group("Update options:")
    .option("--payload <payload:string>", "Payload as JSON string.")
    .option("--name <name:string>", "New name for the deployment.")
    .option(
      "--num-instances <numInstances:number>",
      "Number of instances to deploy.",
    )
    .option("--config-id <configId:number>", "Server config ID.")
    .group("Other options:")
    .option(
      "--dry-run",
      "Dry run mode, does not update the config, but prints the payload.",
    ),
)
  .action(async (options: CommandOptions) => {
    validateAtLeastOneOptionAvailable(options, [
      "name",
      "numInstances",
      "configId",
      "payload",
      ...AUTOSCALING_OPTIONS,
    ]);
    const selectedApp = await getSelectedAppOrExit(options);
    let deploymentId = options.deploymentId;
    let deployments: AppLocationSetting[] = [];
    try {
      deployments = await getAllPaginated((page) =>
        apiClient.getAppLocationSettings(selectedApp.id, 50, page)
      );
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to load deployments. Error: " + error.body.message,
        error.code,
      );
    }

    if (!deploymentId) {
      deploymentId = await Select.prompt<number>({
        message:
          "Select the deployment that should be deleted or provide the --deployment-id=<deploymentId> flag",
        options: deployments.map((deployment) => {
          return { name: deployment.name, value: deployment.id };
        }),
      });
    }

    let deployment: AppLocationSetting;
    try {
      deployment = deployments.find((d) => d.id === deploymentId)!;
    } catch (_) {
      logError(
        `Image ${deploymentId} does not exist (or not in the app ${selectedApp.name}, id: ${selectedApp.id})`,
      );
      Deno.exit(1);
    }

    let payload: UpdateAppLocationSettingRequest | null = null;
    if (options.payload && options.payload.length > 0) {
      try {
        const rawPayload = JSON.parse(options.payload);
        delete rawPayload.placement?.constraints.cityDisplay;
        payload = rawPayload;
      } catch (error) {
        logError("Invalid payload. Please provide a valid JSON string.", error);
        Deno.exit(1);
      }
    } else {
      payload = {
        name: options.name ?? deployment.name,
        numInstances: options.numInstances ?? deployment.numInstances,
        // Only sent when the user actually touched autoscaling, so an update
        // of unrelated fields never rewrites the autoscaling configuration.
        autoscaling: hasAutoscalingOptions(options)
          ? buildAutoscaling(options, deployment.autoscaling)
          : undefined,
      };
    }

    if (options.dryRun) {
      inform(options, "Dry run mode, payload:");
      stdout(payload, options, "json");
    } else {
      const confirmed = await confirm(
        options,
        `Do you really want to update the deployment?`,
      );

      if (confirmed) {
        try {
          await apiClient.updateAppLocationSetting(deploymentId, payload!);
          inform(options, "Deployment updated successfully.");
        } catch (error) {
          ensureApiException(error);
          logErrorAndExit(
            "Failed to update config. Error: " + error.body.message,
            error.code,
          );
        }
      }
    }
  });

const deleteDeployment = new Command()
  .name("delete")
  .description("Delete a deployment.")
  .option("--deploymentId <deploymentId:number>", "Deployment ID.")
  .action(async (options: CommandOptions) => {
    const selectedApp = await getSelectedAppOrExit(options);
    let deploymentId = options.deploymentId;
    let deployments: AppLocationSetting[] = [];
    try {
      deployments = await getAllPaginated((page) =>
        apiClient.getAppLocationSettings(selectedApp.id, 50, page)
      );
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to load deployments. Error: " + error.body.message,
        error.code,
      );
    }

    if (!deploymentId) {
      deploymentId = await Select.prompt<number>({
        message:
          "Select the deployment that should be deleted or provide the --deployment-id=<deploymentId> flag",
        options: deployments.map((deployment) => {
          return { name: deployment.name, value: deployment.id };
        }),
      });
    }

    let deployment: AppLocationSetting;
    try {
      deployment = deployments.find((d) => d.id === deploymentId)!;
    } catch (_) {
      logErrorAndExit(
        `Image ${deploymentId} does not exist (or not in the app ${selectedApp.name}, id: ${selectedApp.id})`,
      );
    }

    const confirmed = await confirm(
      options,
      `Do you want to delete the deployment ${deployment!.name}?`,
    );

    if (confirmed) {
      try {
        await apiClient.deleteAppLocationSetting(deploymentId);
        inform(
          options,
          "Deployment deleted successfully, all servers will be stopped immediately.",
        );
      } catch (error) {
        logErrorAndExit("Failed to delete deployment. Error: " + error);
      }
    }
  });

const startDeployment = new Command()
  .name("start")
  .description("Start all servers for a deployment.")
  .option("--deployment-id <deploymentId:number>", "Deployment ID.")
  .action(async (options: CommandOptions) => {
    const selectedApp = await getSelectedAppOrExit(options);
    let deploymentId = options.deploymentId;
    let deployments: AppLocationSetting[] = [];
    try {
      deployments = await getAllPaginated((page) =>
        apiClient.getAppLocationSettings(selectedApp.id, 50, page)
      );
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to load deployments. Error: " + error.body.message,
        error.code,
      );
    }

    if (!deploymentId) {
      deploymentId = await Select.prompt<number>({
        message:
          "Select the deployment to start or provide the --deployment-id=<deploymentId> flag",
        options: deployments.map((deployment) => {
          return { name: deployment.name, value: deployment.id };
        }),
      });
    }

    const deployment = deployments.find((d) => d.id === deploymentId);
    if (!deployment) {
      logErrorAndExit(
        `Deployment ${deploymentId} does not exist (or not in the app ${selectedApp.name}, id: ${selectedApp.id})`,
      );
    }

    const confirmed = await confirm(
      options,
      `Do you want to start all servers for deployment "${deployment!.name}"?`,
    );

    if (confirmed) {
      try {
        await apiClient.startServersForAppLocationSetting(deploymentId);
        inform(options, "All servers for the deployment are starting.");
      } catch (error) {
        logErrorAndExit("Failed to start deployment servers. Error: " + error);
      }
    }
  });

const stopDeployment = new Command()
  .name("stop")
  .description("Stop all servers for a deployment.")
  .option("--deployment-id <deploymentId:number>", "Deployment ID.")
  .action(async (options: CommandOptions) => {
    const selectedApp = await getSelectedAppOrExit(options);
    let deploymentId = options.deploymentId;
    let deployments: AppLocationSetting[] = [];
    try {
      deployments = await getAllPaginated((page) =>
        apiClient.getAppLocationSettings(selectedApp.id, 50, page)
      );
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to load deployments. Error: " + error.body.message,
        error.code,
      );
    }

    if (!deploymentId) {
      deploymentId = await Select.prompt<number>({
        message:
          "Select the deployment to stop or provide the --deployment-id=<deploymentId> flag",
        options: deployments.map((deployment) => {
          return { name: deployment.name, value: deployment.id };
        }),
      });
    }

    const deployment = deployments.find((d) => d.id === deploymentId);
    if (!deployment) {
      logErrorAndExit(
        `Deployment ${deploymentId} does not exist (or not in the app ${selectedApp.name}, id: ${selectedApp.id})`,
      );
    }

    const confirmed = await confirm(
      options,
      `Do you want to stop all servers for deployment "${deployment!.name}"?`,
    );

    if (confirmed) {
      try {
        await apiClient.stopServersForAppLocationSetting(deploymentId);
        inform(options, "All servers for the deployment are stopping.");
      } catch (error) {
        logErrorAndExit("Failed to stop deployment servers. Error: " + error);
      }
    }
  });

/**
 * Resolves the deployment the command should operate on, falling back to an
 * interactive selection when `--deployment-id` was not provided.
 */
const resolveDeploymentId = async (
  options: CommandOptions,
): Promise<number> => {
  if (options.deploymentId) {
    return options.deploymentId;
  }

  const app = await getSelectedAppOrExit(options);

  let deployments: AppLocationSetting[] = [];
  try {
    deployments = await getAllPaginated((page) =>
      apiClient.getAppLocationSettings(app.id, 50, page)
    );
  } catch (error) {
    ensureApiException(error);
    logErrorAndExit(
      "Failed to load deployments. Error: " + error.body.message,
      error.code,
    );
  }

  if (deployments.length === 0) {
    logErrorAndExit(
      "No deployments found. Use `odin fleet deployments create` to create one.",
    );
  }

  return await Select.prompt<number>({
    message:
      "Select the deployment or provide the --deployment-id=<deploymentId> flag",
    options: deployments.map((deployment) => {
      return { name: deployment.name, value: deployment.id };
    }),
  });
};

const autoscalingStatus = new Command()
  .name("status")
  .description("Show the autoscaling configuration and state of a deployment.")
  .option("--deployment-id <deploymentId:number>", "Deployment ID.")
  .action(async (options: CommandOptions) => {
    const deploymentId = await resolveDeploymentId(options);

    let deployment;
    try {
      deployment = await apiClient.getAppLocationSettingById(deploymentId);
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to load deployment. Error: " + error.body.message,
        error.code,
      );
    }

    await stdout(
      deployment!.autoscaling,
      options,
      "table(enabled,minInstances,maxInstances,bufferSize,currentInstances,healthEnabled)",
    );
  });

const allocateServer = new Command()
  .name("allocate")
  .description(
    "Allocate one of the ready servers of an autoscaled deployment and mark it as taken.",
  )
  .option("--deployment-id <deploymentId:number>", "Deployment ID.")
  .option(
    "--metadata-filter <metadataFilter:string>",
    'Only allocate servers matching this metadata filter, e.g. `idle=true,gameSettings.mode="ffa"`.',
  )
  .action(async (options: CommandOptions) => {
    const deploymentId = await resolveDeploymentId(options);

    let server: Server;
    try {
      server = await apiClient.appLocationSettingsAutoscalingAllocate(
        deploymentId,
        options.metadataFilter
          ? { filter: { metadata: options.metadataFilter } }
          : undefined,
      );
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to allocate a server. Error: " + error.body.message,
        error.code,
      );
    }

    await stdout(
      server!,
      options,
      "table(id,location.city,serverConfigName,node.address,status)",
    );
  });

const autoscaling = new Command()
  .name("autoscaling")
  .description("Inspect and use the autoscaling of a deployment.")
  .action(() => {
    autoscaling.showHelp();
  })
  .command("status", autoscalingStatus)
  .command("allocate", allocateServer);

const checkCapacity = new Command()
  .name("capacity")
  .description(
    "Estimate how many servers of a given config still fit into a location.",
  )
  .option("--config-id <configId:number>", "The server config ID.")
  .option("--country <country:string>", "The country to check.")
  .option("--city <city:string>", "The city to check.")
  .option(
    "--password <password:string>",
    "Optional password for protected locations.",
  )
  .action(async (options: CommandOptions) => {
    const app = await getSelectedAppOrExit(options);

    let locations: Location[] = [];
    try {
      locations = await getAllPaginated((page) =>
        apiClient.getLocations(50, page)
      );
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to load locations. Error: " + error.body.message,
        error.code,
      );
    }

    let constraints: Location | undefined;
    if (options.country && options.city) {
      constraints = locations.find((location) =>
        location.city === options.city && location.country === options.country
      );

      if (!constraints) {
        logErrorAndExit(
          "Unable to find a location matching the specified arguments.",
        );
      }
    } else {
      constraints = await Select.prompt<Location>({
        message: "Select the location to check:",
        options: locations.map((location) => {
          return {
            name: `${location.city}, ${location.country} ${
              location.isProtected ? "[Protected]" : ""
            }`,
            value: location,
          };
        }),
      });
    }

    let password = options.password;
    if (constraints!.isProtected && !password) {
      password = await Input.prompt({
        message: "Enter the password of this protected location:",
      });
    }

    let serverConfigId = options.configId;
    if (!serverConfigId) {
      let configs: ServerConfig[] = [];
      try {
        configs = await getAllPaginated((page) =>
          apiClient.getServerConfigs(app.id, 50, page)
        );
      } catch (error) {
        ensureApiException(error);
        logErrorAndExit(
          "Failed to load server configs. Error: " + error.body.message,
          error.code,
        );
      }

      serverConfigId = await Select.prompt<number>({
        message: "Choose the server config to check against:",
        options: configs.map((config) => {
          return { name: config.name, value: config.id };
        }),
      });
    }

    try {
      const capacity = await apiClient.checkCapacity(app.id, {
        serverConfigId,
        placement: {
          constraints: {
            city: constraints!.city,
            cityDisplay: constraints!.cityDisplay,
            continent: constraints!.continent,
            country: constraints!.country,
          },
        },
        password,
      });

      await stdout(capacity, options, "value(capacity)");
    } catch (error) {
      ensureApiException(error);
      logErrorAndExit(
        "Failed to check the capacity. Error: " + error.body.message,
        error.code,
      );
    }
  });

const metadata = createMetadataCommand({
  resourceName: "deployment",
  idOption: "--deployment-id <deploymentId:number>",
  idDescription: "Deployment ID.",
  resolveTarget: resolveDeploymentId,
  api: {
    get: (id) => apiClient.getAppLocationSettingById(id),
    set: (id, metadata) =>
      apiClient.appLocationSettingsMetadataSet(id, { metadata }),
    update: (id, metadata) =>
      apiClient.appLocationSettingsMetadataUpdate(id, { metadata }),
    deleteAll: (id) => apiClient.appLocationSettingsMetadataDeleteAll(id),
    deleteKeys: (id, keys) =>
      apiClient.appLocationSettingsMetadataDeleteKeys(id, keys),
  },
});

export const deployments = new Command()
  .name("deployments")
  .description("Manage ODIN Fleet server deployments.")
  .action(() => {
    deployments.showHelp();
  })
  .command("list", deploymentsList)
  .command("get", getDeploymentDetails)
  .command("create", createDeployment)
  .command("update", updateDeployment)
  .command("delete", deleteDeployment)
  .command("start", startDeployment)
  .command("stop", stopDeployment)
  .command("capacity", checkCapacity)
  .command("autoscaling", autoscaling)
  .command("metadata", metadata);
