import { colors } from "https://deno.land/x/cliffy@v1.0.0-rc.3/ansi/colors.ts";
import { Confirm } from "$cliffy/prompt/mod.ts";
import { CommandOptions } from "$cliffy/command/types.ts";

export const logErrorAndExit = (message: string, ...optionalParams: unknown[]) => {
  logError(message, ...optionalParams);
  Deno.exit(1);
}

export const logError = (message: string, ...optionalParams: unknown[]) => {
  console.error(`${colors.red("Error")}: ${message}`, ...optionalParams);
};
export const logSuccess = (message: string, ...optionalParams: unknown[]) => {
  console.log(`${colors.green("Success")}: ${message}`, ...optionalParams);
};

export const confirm = async (options: CommandOptions, message: string) => {
  if (options.force) {
    return true;
  }
  return await Confirm.prompt(message);
};
