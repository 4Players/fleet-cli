import { Input } from "$cliffy/prompt/mod.ts";
import { Command } from "$cliffy/command/command.ts";
import { ensureDir } from "$std/fs/mod.ts";

const configDir = `${Deno.env.get("HOME")}/.odin`;
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

export async function ensureLoginSession(): Promise<string> {
  const accessKey = await getAccessToken();
  if (!accessKey) {
    console.error("You need to login first. Use the `odin login` command.");
    Deno.exit(1);
  }
  return accessKey;
}

export async function saveAccessToken(key: string) {
  const config = { accessKey: key };
  await saveConfig(config);
}

export async function getAccessToken(): Promise<string | null> {
  const config = await getConfig();
  return config ? config.accessKey : null;
}

export const login = new Command()
  .name("login")
  .description("Log into ODIN with your credentials or access token.")
  .action(async () => {
    console.log("You can find your ODIN API key in the dashboard of ODIN in the apps settings section.");
    const apiKey: string = await Input.prompt("Your API key: ");
    if (!apiKey || apiKey.length === 0) {
      console.error("You need to provide an API key.");
      return;
    } else {
      await saveAccessToken(apiKey);
      console.log("API key stored, you can now proceed with other commands.");
    }
  });
