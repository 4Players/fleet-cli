// deno-lint-ignore-file no-explicit-any

import { Command, CommandOptions } from "@cliffy/command";

import {
  confirm,
  ensureApiException,
  inform,
  logErrorAndExit,
  stdout,
} from "../utils.ts";

export type Metadata = { [key: string]: any };

/** Every resource that supports metadata exposes it under the same key. */
type WithMetadata = { metadata: Metadata };

/**
 * The API calls backing the metadata command group. `Target` is whatever the
 * resource needs to be addressed - usually just its id, but servers for
 * example additionally need the id of the app they belong to.
 */
export interface MetadataApi<Target> {
  /** Reads the resource so its current metadata can be printed. */
  get: (target: Target) => Promise<WithMetadata>;
  /** Replaces the complete metadata object. */
  set: (target: Target, metadata: Metadata) => Promise<WithMetadata>;
  /** Merges the given keys into the existing metadata object. */
  update: (target: Target, metadata: Metadata) => Promise<WithMetadata>;
  /** Removes the complete metadata object. */
  deleteAll: (target: Target) => Promise<WithMetadata>;
  /** Removes the given top level keys from the metadata object. */
  deleteKeys: (target: Target, keys: string[]) => Promise<WithMetadata>;
}

export interface MetadataCommandConfig<Target> {
  /** Singular, human readable name of the resource, e.g. `image`. */
  resourceName: string;
  /**
   * Cliffy flag spec addressing the resource, e.g. `--image-id <imageId:number>`.
   * Registered as a global option so every sub command accepts it. Left out for
   * resources that are already addressable through an existing global option.
   */
  idOption?: string;
  /** Description of the id flag shown in the help output. */
  idDescription?: string;
  /**
   * Resolves the resource the command operates on. Implementations are
   * expected to fall back to an interactive selection when the id was not
   * passed as an option.
   */
  resolveTarget: (options: CommandOptions) => Promise<Target>;
  api: MetadataApi<Target>;
}

/**
 * Parses and validates a metadata argument. Metadata is always a JSON object,
 * anything else (a bare value, an array, invalid JSON) is rejected.
 */
export const parseMetadata = (raw: string): Metadata => {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return logErrorAndExit("Metadata is not a valid JSON object.");
  }

  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    return logErrorAndExit("Metadata needs to be a JSON object.");
  }

  return parsed as Metadata;
};

const handleApiError = (action: string, error: unknown): never => {
  ensureApiException(error);
  return logErrorAndExit(
    `Failed to ${action} metadata. Error: ` + error.body.message,
    error.code,
  );
};

/**
 * Builds the `metadata` command group shared by all resources that support
 * metadata (apps, images, configs, deployments and servers).
 */
export const createMetadataCommand = <Target>(
  config: MetadataCommandConfig<Target>,
): Command => {
  const { resourceName, idOption, idDescription, resolveTarget, api } = config;

  const getMetadata = new Command()
    .name("get")
    .description(`Get the current metadata for a ${resourceName}.`)
    .action(async (options: CommandOptions) => {
      const target = await resolveTarget(options);

      let resource: WithMetadata;
      try {
        resource = await api.get(target);
      } catch (error) {
        return handleApiError("load", error);
      }

      await stdout(resource.metadata, options, "text");
    });

  const setMetadata = new Command()
    .name("set")
    .description(`Replace the complete metadata object of a ${resourceName}.`)
    .arguments("<metadata>")
    .action(async (options: CommandOptions, metadata: string) => {
      const parsed = parseMetadata(metadata);
      const target = await resolveTarget(options);

      let resource: WithMetadata;
      try {
        resource = await api.set(target, parsed);
      } catch (error) {
        return handleApiError("set", error);
      }

      await stdout(resource.metadata, options, "text");
    });

  const updateMetadata = new Command()
    .name("update")
    .description(
      `Merge the given keys into the metadata of a ${resourceName}, leaving all other keys untouched.`,
    )
    .arguments("<metadata>")
    .action(async (options: CommandOptions, metadata: string) => {
      const parsed = parseMetadata(metadata);
      const target = await resolveTarget(options);

      let resource: WithMetadata;
      try {
        resource = await api.update(target, parsed);
      } catch (error) {
        return handleApiError("update", error);
      }

      await stdout(resource.metadata, options, "text");
    });

  const deleteMetadata = new Command()
    .name("delete")
    .description(
      `Delete metadata keys of a ${resourceName}. Without any key the complete metadata object is removed.`,
    )
    .arguments("[keys...:string]")
    .action(async (options: CommandOptions, ...keys: string[]) => {
      const target = await resolveTarget(options);

      if (keys.length === 0) {
        const confirmed = await confirm(
          options,
          `Do you want to delete the complete metadata of this ${resourceName}?`,
        );
        if (!confirmed) {
          inform(options, "Metadata deletion aborted.");
          return;
        }
      }

      let resource: WithMetadata;
      try {
        resource = keys.length === 0
          ? await api.deleteAll(target)
          : await api.deleteKeys(target, keys);
      } catch (error) {
        return handleApiError("delete", error);
      }

      await stdout(resource.metadata, options, "text");
    });

  // The id flag is registered as a global option so it does not have to be
  // repeated on every sub command. Cliffy types the builder by the flags it
  // has seen, which a conditional flag cannot express, hence the loose type.
  const metadata: any = new Command()
    .name("metadata")
    .description(`Manage metadata for individual ${resourceName}s.`);

  if (idOption) {
    metadata.globalOption(idOption, idDescription ?? "");
  }

  return metadata
    .action(() => {
      metadata.showHelp();
    })
    .command("get", getMetadata)
    .command("set", setMetadata)
    .command("update", updateMetadata)
    .command("delete", deleteMetadata);
};
