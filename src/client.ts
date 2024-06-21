import { ensureLoginSession, getConfig } from './login.ts';
import {
  AppApi,
  createConfiguration,
  RequestContext,
  ResponseBody,
  ResponseContext,
  SelfDecodingBody,
} from './api/index.ts';
import { PromiseMiddleware } from './api/middleware.ts';

const accessToken = await ensureLoginSession();

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
        const context: RequestContext = new RequestContext(host + endpoint, httpMethod);
        if (token) context.setHeaderParam('Authorization', `Bearer ${token}`);
        return context;
      },
    }
  });
};

const apiClient = new AppApi(configuration('https://fleet.4players.io/api', accessToken));

export { apiClient };
