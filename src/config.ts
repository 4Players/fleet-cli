import { Input } from "@cliffy/prompt";
import { ensureDir } from "@std/fs";

// Get the home directory based on the OS
const homeDir = Deno.env.get("HOME") || Deno.env.get("USERPROFILE");

if (!homeDir) {
  console.error("Could not determine the home directory.");
  Deno.exit(1);
}

const configDir = `${homeDir}/.odin`;
const configFile = `${configDir}/config.json`;

export interface Config {
  accessKey: string;
  selectedAppId?: number;
}

export async function saveConfig(config: Config) {
  await ensureDir(configDir);
  await Deno.writeTextFile(configFile, JSON.stringify(config));
}

export async function getConfig(): Promise<Config | null> {
  try {
    const configContent = await Deno.readTextFile(configFile);
    const config: Config = JSON.parse(configContent);
    return config;
  } catch {
    return null;
  }
}

export async function ensureLoginSession(
  apiKeyOption?: string,
): Promise<string> {
  if (apiKeyOption) {
    return apiKeyOption; // Prioritize the apiKeyOption
  }

  const config = await getConfig();
  if (config?.accessKey) {
    return config.accessKey;
  }

  console.error(
    "You need to login first. Provide the `--api-key` option or enter the API key below.",
  );
  console.log(
    "You can find your ODIN API key in the dashboard of ODIN in the apps settings section (see https://console.4players.io/settings/api-keys)",
  );
  const apiKey: string = await Input.prompt("Your API key: ");
  if (!apiKey || apiKey.length === 0) {
    console.error("You need to provide an API key.");
    Deno.exit(1);
  } else {
    await saveAccessToken(apiKey);
    console.log("API key stored, you can now proceed with other commands.");
  }

  return apiKey;
}

export async function saveAccessToken(key: string) {
  const config = { accessKey: key };
  await saveConfig(config);
}

export async function getAccessToken(): Promise<string | null> {
  const config = await getConfig();
  return config ? config.accessKey : null;
}
