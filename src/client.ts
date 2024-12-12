import { Input } from "@cliffy/prompt";

import {
  AppApi,
  createConfiguration,
  RequestContext,
  ResponseBody,
} from "../backend/api/index.ts";

import { getConfig, saveAccessToken } from "./config.ts";

export let apiClient: AppApi;

export class CustomizedResponse implements ResponseBody {
  constructor(private body: string) {}

  binary(): Promise<Blob> {
    return Promise.resolve(new Blob([this.body]));
  }

  text(): Promise<string> {
    return Promise.resolve(this.body);
  }
}

const configuration = (host: string, token?: string) => {
  return createConfiguration({
    baseServer: {
      makeRequestContext: (endpoint, httpMethod) => {
        const context: RequestContext = new RequestContext(
          host + endpoint,
          httpMethod,
        );
        if (token) context.setHeaderParam("Authorization", `Bearer ${token}`);
        return context;
      },
    },
  });
};

export function createApiClient(token: string) {
  apiClient = new AppApi(configuration("https://fleet.4players.io/api", token));
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
