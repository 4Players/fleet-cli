import {
  AppApi,
  createConfiguration,
  RequestContext,
  ResponseBody,
} from "./api/index.ts";

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

export function createApiClient(token: string): AppApi {
  return new AppApi(configuration("https://fleet.4players.io/api", token));
}
