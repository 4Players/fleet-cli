import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration} from '../configuration.ts'
import { Observable, of, from } from '../rxjsStub.ts';
import {mergeMap, map} from  '../rxjsStub.ts';
import { App } from '../models/App.ts';
import { AppLocationSetting } from '../models/AppLocationSetting.ts';
import { Auth } from '../models/Auth.ts';
import { Backup } from '../models/Backup.ts';
import { BackupDownload } from '../models/BackupDownload.ts';
import { BackupType } from '../models/BackupType.ts';
import { Binary } from '../models/Binary.ts';
import { BinaryType } from '../models/BinaryType.ts';
import { ConfigFile } from '../models/ConfigFile.ts';
import { ConfigTemplate } from '../models/ConfigTemplate.ts';
import { Constraints } from '../models/Constraints.ts';
import { CreateAppLocationSettingRequest } from '../models/CreateAppLocationSettingRequest.ts';
import { CreateAppRequest } from '../models/CreateAppRequest.ts';
import { CreateBackupRequest } from '../models/CreateBackupRequest.ts';
import { CreateBinaryRequest } from '../models/CreateBinaryRequest.ts';
import { CreateDockerRegistryRequest } from '../models/CreateDockerRegistryRequest.ts';
import { CreateServerConfigRequest } from '../models/CreateServerConfigRequest.ts';
import { DockerCompose } from '../models/DockerCompose.ts';
import { DockerImage } from '../models/DockerImage.ts';
import { DockerRegistry } from '../models/DockerRegistry.ts';
import { DockerRegistryType } from '../models/DockerRegistryType.ts';
import { DockerTaskStatus } from '../models/DockerTaskStatus.ts';
import { EnvironmentVariable } from '../models/EnvironmentVariable.ts';
import { EnvironmentVariableDefinition } from '../models/EnvironmentVariableDefinition.ts';
import { EnvironmentVariableType } from '../models/EnvironmentVariableType.ts';
import { GetAuthTokenRequest } from '../models/GetAuthTokenRequest.ts';
import { Location } from '../models/Location.ts';
import { Mount } from '../models/Mount.ts';
import { OperatingSystem } from '../models/OperatingSystem.ts';
import { Placement } from '../models/Placement.ts';
import { Port } from '../models/Port.ts';
import { PortDefinition } from '../models/PortDefinition.ts';
import { Protocol } from '../models/Protocol.ts';
import { PublishMode } from '../models/PublishMode.ts';
import { ResourceAllocations } from '../models/ResourceAllocations.ts';
import { Resources } from '../models/Resources.ts';
import { RestartPolicy } from '../models/RestartPolicy.ts';
import { RestartPolicyCondition } from '../models/RestartPolicyCondition.ts';
import { Server } from '../models/Server.ts';
import { ServerConfig } from '../models/ServerConfig.ts';
import { ServiceLogs } from '../models/ServiceLogs.ts';
import { SteamWorks } from '../models/SteamWorks.ts';
import { UpdateAppLocationSettingRequest } from '../models/UpdateAppLocationSettingRequest.ts';
import { UpdateDockerRegistryRequest } from '../models/UpdateDockerRegistryRequest.ts';
import { ZipFile } from '../models/ZipFile.ts';

import { AppApiRequestFactory, AppApiResponseProcessor} from "../apis/AppApi.ts";
export class ObservableAppApi {
    private requestFactory: AppApiRequestFactory;
    private responseProcessor: AppApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AppApiRequestFactory,
        responseProcessor?: AppApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AppApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AppApiResponseProcessor();
    }

    /**
     * Create an app
     * @param createAppRequest 
     */
    public createAppWithHttpInfo(createAppRequest?: CreateAppRequest, _options?: Configuration): Observable<HttpInfo<App>> {
        const requestContextPromise = this.requestFactory.createApp(createAppRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAppWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create an app
     * @param createAppRequest 
     */
    public createApp(createAppRequest?: CreateAppRequest, _options?: Configuration): Observable<App> {
        return this.createAppWithHttpInfo(createAppRequest, _options).pipe(map((apiResponse: HttpInfo<App>) => apiResponse.data));
    }

    /**
     * Create a new location setting
     * @param app The app ID
     * @param createAppLocationSettingRequest 
     */
    public createAppLocationSettingWithHttpInfo(app: number, createAppLocationSettingRequest?: CreateAppLocationSettingRequest, _options?: Configuration): Observable<HttpInfo<AppLocationSetting>> {
        const requestContextPromise = this.requestFactory.createAppLocationSetting(app, createAppLocationSettingRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAppLocationSettingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new location setting
     * @param app The app ID
     * @param createAppLocationSettingRequest 
     */
    public createAppLocationSetting(app: number, createAppLocationSettingRequest?: CreateAppLocationSettingRequest, _options?: Configuration): Observable<AppLocationSetting> {
        return this.createAppLocationSettingWithHttpInfo(app, createAppLocationSettingRequest, _options).pipe(map((apiResponse: HttpInfo<AppLocationSetting>) => apiResponse.data));
    }

    /**
     * Creates a backup of the service
     * @param service The service ID
     * @param createBackupRequest 
     */
    public createBackupWithHttpInfo(service: number, createBackupRequest?: CreateBackupRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.createBackup(service, createBackupRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBackupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a backup of the service
     * @param service The service ID
     * @param createBackupRequest 
     */
    public createBackup(service: number, createBackupRequest?: CreateBackupRequest, _options?: Configuration): Observable<any> {
        return this.createBackupWithHttpInfo(service, createBackupRequest, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Create a binary and the related file
     * @param app The app ID
     * @param createBinaryRequest 
     */
    public createBinaryWithHttpInfo(app: number, createBinaryRequest?: CreateBinaryRequest, _options?: Configuration): Observable<HttpInfo<Binary>> {
        const requestContextPromise = this.requestFactory.createBinary(app, createBinaryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBinaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a binary and the related file
     * @param app The app ID
     * @param createBinaryRequest 
     */
    public createBinary(app: number, createBinaryRequest?: CreateBinaryRequest, _options?: Configuration): Observable<Binary> {
        return this.createBinaryWithHttpInfo(app, createBinaryRequest, _options).pipe(map((apiResponse: HttpInfo<Binary>) => apiResponse.data));
    }

    /**
     * Create a new docker registry
     * @param createDockerRegistryRequest 
     */
    public createDockerRegistryWithHttpInfo(createDockerRegistryRequest?: CreateDockerRegistryRequest, _options?: Configuration): Observable<HttpInfo<DockerRegistry>> {
        const requestContextPromise = this.requestFactory.createDockerRegistry(createDockerRegistryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDockerRegistryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new docker registry
     * @param createDockerRegistryRequest 
     */
    public createDockerRegistry(createDockerRegistryRequest?: CreateDockerRegistryRequest, _options?: Configuration): Observable<DockerRegistry> {
        return this.createDockerRegistryWithHttpInfo(createDockerRegistryRequest, _options).pipe(map((apiResponse: HttpInfo<DockerRegistry>) => apiResponse.data));
    }

    /**
     * Create a new server config
     * @param app The app ID
     * @param createServerConfigRequest 
     */
    public createServerConfigWithHttpInfo(app: number, createServerConfigRequest?: CreateServerConfigRequest, _options?: Configuration): Observable<HttpInfo<ServerConfig>> {
        const requestContextPromise = this.requestFactory.createServerConfig(app, createServerConfigRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createServerConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new server config
     * @param app The app ID
     * @param createServerConfigRequest 
     */
    public createServerConfig(app: number, createServerConfigRequest?: CreateServerConfigRequest, _options?: Configuration): Observable<ServerConfig> {
        return this.createServerConfigWithHttpInfo(app, createServerConfigRequest, _options).pipe(map((apiResponse: HttpInfo<ServerConfig>) => apiResponse.data));
    }

    /**
     * This method is responsible for deleting an App record from the database. It locates the App instance using the provided ID, and if found, proceeds to delete it. Upon successful deletion, an HTTP 204 No Content response is returned, indicating that the action was successful.
     * Delete a specific app
     * @param app The app ID
     */
    public deleteAppWithHttpInfo(app: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deleteApp(app, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAppWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method is responsible for deleting an App record from the database. It locates the App instance using the provided ID, and if found, proceeds to delete it. Upon successful deletion, an HTTP 204 No Content response is returned, indicating that the action was successful.
     * Delete a specific app
     * @param app The app ID
     */
    public deleteApp(app: number, _options?: Configuration): Observable<any> {
        return this.deleteAppWithHttpInfo(app, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Delete a location setting
     * @param appLocationSetting The app location setting ID
     */
    public deleteAppLocationSettingWithHttpInfo(appLocationSetting: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deleteAppLocationSetting(appLocationSetting, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAppLocationSettingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a location setting
     * @param appLocationSetting The app location setting ID
     */
    public deleteAppLocationSetting(appLocationSetting: number, _options?: Configuration): Observable<any> {
        return this.deleteAppLocationSettingWithHttpInfo(appLocationSetting, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Handles the deletion of a user\'s authentication tokens
     * @param sid The session id of the user
     */
    public deleteAuthTokenWithHttpInfo(sid: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deleteAuthToken(sid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAuthTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Handles the deletion of a user\'s authentication tokens
     * @param sid The session id of the user
     */
    public deleteAuthToken(sid: string, _options?: Configuration): Observable<any> {
        return this.deleteAuthTokenWithHttpInfo(sid, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * It first finds the Binary instance by its ID. If the instance is found, it is deleted. The method then returns an HTTP 204 No Content response to indicate successful deletion.
     * Delete a specified binary
     * @param binary The binary ID
     */
    public deleteBinaryWithHttpInfo(binary: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deleteBinary(binary, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBinaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * It first finds the Binary instance by its ID. If the instance is found, it is deleted. The method then returns an HTTP 204 No Content response to indicate successful deletion.
     * Delete a specified binary
     * @param binary The binary ID
     */
    public deleteBinary(binary: number, _options?: Configuration): Observable<any> {
        return this.deleteBinaryWithHttpInfo(binary, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Delete a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public deleteDockerRegistryWithHttpInfo(dockerRegistry: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deleteDockerRegistry(dockerRegistry, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDockerRegistryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public deleteDockerRegistry(dockerRegistry: number, _options?: Configuration): Observable<any> {
        return this.deleteDockerRegistryWithHttpInfo(dockerRegistry, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * This method handles the deletion of a ServerConfig record from the database. It first finds the ServerConfig instance by its ID, and if found, deletes it. Returns an HTTP 204 No Content response upon successful deletion.
     * Delete a specific server config
     * @param serverConfig The server config ID
     */
    public deleteServerConfigWithHttpInfo(serverConfig: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deleteServerConfig(serverConfig, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteServerConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * This method handles the deletion of a ServerConfig record from the database. It first finds the ServerConfig instance by its ID, and if found, deletes it. Returns an HTTP 204 No Content response upon successful deletion.
     * Delete a specific server config
     * @param serverConfig The server config ID
     */
    public deleteServerConfig(serverConfig: number, _options?: Configuration): Observable<any> {
        return this.deleteServerConfigWithHttpInfo(serverConfig, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Show a specific app
     * @param app The app ID
     */
    public getAppByIdWithHttpInfo(app: number, _options?: Configuration): Observable<HttpInfo<App>> {
        const requestContextPromise = this.requestFactory.getAppById(app, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show a specific app
     * @param app The app ID
     */
    public getAppById(app: number, _options?: Configuration): Observable<App> {
        return this.getAppByIdWithHttpInfo(app, _options).pipe(map((apiResponse: HttpInfo<App>) => apiResponse.data));
    }

    /**
     * Show all location settings
     * @param app The app ID
     */
    public getAppLocationSettingsWithHttpInfo(app: number, _options?: Configuration): Observable<HttpInfo<Array<AppLocationSetting>>> {
        const requestContextPromise = this.requestFactory.getAppLocationSettings(app, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppLocationSettingsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show all location settings
     * @param app The app ID
     */
    public getAppLocationSettings(app: number, _options?: Configuration): Observable<Array<AppLocationSetting>> {
        return this.getAppLocationSettingsWithHttpInfo(app, _options).pipe(map((apiResponse: HttpInfo<Array<AppLocationSetting>>) => apiResponse.data));
    }

    /**
     * Show all apps
     */
    public getAppsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<App>>> {
        const requestContextPromise = this.requestFactory.getApps(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show all apps
     */
    public getApps(_options?: Configuration): Observable<Array<App>> {
        return this.getAppsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<App>>) => apiResponse.data));
    }

    /**
     * Validates the incoming request and attempts to authenticate the user based on the provided session ID. If the user is authenticated successfully, it returns an AuthResource containing the user\'s bearer token.
     * Handles user authentication
     * @param getAuthTokenRequest 
     */
    public getAuthTokenWithHttpInfo(getAuthTokenRequest?: GetAuthTokenRequest, _options?: Configuration): Observable<HttpInfo<Auth>> {
        const requestContextPromise = this.requestFactory.getAuthToken(getAuthTokenRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAuthTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Validates the incoming request and attempts to authenticate the user based on the provided session ID. If the user is authenticated successfully, it returns an AuthResource containing the user\'s bearer token.
     * Handles user authentication
     * @param getAuthTokenRequest 
     */
    public getAuthToken(getAuthTokenRequest?: GetAuthTokenRequest, _options?: Configuration): Observable<Auth> {
        return this.getAuthTokenWithHttpInfo(getAuthTokenRequest, _options).pipe(map((apiResponse: HttpInfo<Auth>) => apiResponse.data));
    }

    /**
     * List all backups for the specified Docker service
     * @param service The service ID
     */
    public getBackupsWithHttpInfo(service: number, _options?: Configuration): Observable<HttpInfo<Array<Backup>>> {
        const requestContextPromise = this.requestFactory.getBackups(service, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBackupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all backups for the specified Docker service
     * @param service The service ID
     */
    public getBackups(service: number, _options?: Configuration): Observable<Array<Backup>> {
        return this.getBackupsWithHttpInfo(service, _options).pipe(map((apiResponse: HttpInfo<Array<Backup>>) => apiResponse.data));
    }

    /**
     * Show all binaries
     * @param app The app ID
     */
    public getBinariesWithHttpInfo(app: number, _options?: Configuration): Observable<HttpInfo<Array<Binary>>> {
        const requestContextPromise = this.requestFactory.getBinaries(app, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBinariesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show all binaries
     * @param app The app ID
     */
    public getBinaries(app: number, _options?: Configuration): Observable<Array<Binary>> {
        return this.getBinariesWithHttpInfo(app, _options).pipe(map((apiResponse: HttpInfo<Array<Binary>>) => apiResponse.data));
    }

    /**
     * Show a specific binary
     * @param binary The binary ID
     */
    public getBinaryByIdWithHttpInfo(binary: number, _options?: Configuration): Observable<HttpInfo<Binary>> {
        const requestContextPromise = this.requestFactory.getBinaryById(binary, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBinaryByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show a specific binary
     * @param binary The binary ID
     */
    public getBinaryById(binary: number, _options?: Configuration): Observable<Binary> {
        return this.getBinaryByIdWithHttpInfo(binary, _options).pipe(map((apiResponse: HttpInfo<Binary>) => apiResponse.data));
    }

    /**
     * Show all docker registries
     */
    public getDockerRegistriesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<DockerRegistry>>> {
        const requestContextPromise = this.requestFactory.getDockerRegistries(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDockerRegistriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show all docker registries
     */
    public getDockerRegistries(_options?: Configuration): Observable<Array<DockerRegistry>> {
        return this.getDockerRegistriesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<DockerRegistry>>) => apiResponse.data));
    }

    /**
     * Display a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public getDockerRegistryByIdWithHttpInfo(dockerRegistry: number, _options?: Configuration): Observable<HttpInfo<DockerRegistry>> {
        const requestContextPromise = this.requestFactory.getDockerRegistryById(dockerRegistry, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDockerRegistryByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Display a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public getDockerRegistryById(dockerRegistry: number, _options?: Configuration): Observable<DockerRegistry> {
        return this.getDockerRegistryByIdWithHttpInfo(dockerRegistry, _options).pipe(map((apiResponse: HttpInfo<DockerRegistry>) => apiResponse.data));
    }

    /**
     * Synchronizes the local database with the state of Docker nodes, then filters for active, ready worker nodes to create a unique listing of their location labels. These nodes are suitable for deployment.
     * Show a unique listing of locations based on active and ready worker nodes
     */
    public getLocationsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Location>>> {
        const requestContextPromise = this.requestFactory.getLocations(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLocationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Synchronizes the local database with the state of Docker nodes, then filters for active, ready worker nodes to create a unique listing of their location labels. These nodes are suitable for deployment.
     * Show a unique listing of locations based on active and ready worker nodes
     */
    public getLocations(_options?: Configuration): Observable<Array<Location>> {
        return this.getLocationsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Location>>) => apiResponse.data));
    }

    /**
     * Display the most recent backup for the specified Docker service
     * @param service The service ID
     */
    public getMostRecentBackupWithHttpInfo(service: number, _options?: Configuration): Observable<HttpInfo<Backup>> {
        const requestContextPromise = this.requestFactory.getMostRecentBackup(service, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMostRecentBackupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Display the most recent backup for the specified Docker service
     * @param service The service ID
     */
    public getMostRecentBackup(service: number, _options?: Configuration): Observable<Backup> {
        return this.getMostRecentBackupWithHttpInfo(service, _options).pipe(map((apiResponse: HttpInfo<Backup>) => apiResponse.data));
    }

    /**
     * Generates a presigned URL for downloading a backup from AWS S3 if the backup method is \'archive\'
     * @param service The service ID
     */
    public getServerBackupDownloadUrlWithHttpInfo(service: number, _options?: Configuration): Observable<HttpInfo<BackupDownload>> {
        const requestContextPromise = this.requestFactory.getServerBackupDownloadUrl(service, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServerBackupDownloadUrlWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generates a presigned URL for downloading a backup from AWS S3 if the backup method is \'archive\'
     * @param service The service ID
     */
    public getServerBackupDownloadUrl(service: number, _options?: Configuration): Observable<BackupDownload> {
        return this.getServerBackupDownloadUrlWithHttpInfo(service, _options).pipe(map((apiResponse: HttpInfo<BackupDownload>) => apiResponse.data));
    }

    /**
     * Display a specific DockerService associated with the given App
     * @param app The app ID
     * @param service The service ID
     */
    public getServerByIdWithHttpInfo(app: number, service: number, _options?: Configuration): Observable<HttpInfo<Server>> {
        const requestContextPromise = this.requestFactory.getServerById(app, service, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServerByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Display a specific DockerService associated with the given App
     * @param app The app ID
     * @param service The service ID
     */
    public getServerById(app: number, service: number, _options?: Configuration): Observable<Server> {
        return this.getServerByIdWithHttpInfo(app, service, _options).pipe(map((apiResponse: HttpInfo<Server>) => apiResponse.data));
    }

    /**
     * Show a specific server config
     * @param serverConfig The server config ID
     */
    public getServerConfigByIdWithHttpInfo(serverConfig: number, _options?: Configuration): Observable<HttpInfo<ServerConfig>> {
        const requestContextPromise = this.requestFactory.getServerConfigById(serverConfig, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServerConfigByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show a specific server config
     * @param serverConfig The server config ID
     */
    public getServerConfigById(serverConfig: number, _options?: Configuration): Observable<ServerConfig> {
        return this.getServerConfigByIdWithHttpInfo(serverConfig, _options).pipe(map((apiResponse: HttpInfo<ServerConfig>) => apiResponse.data));
    }

    /**
     * Show all server configs
     * @param app The app ID
     */
    public getServerConfigsWithHttpInfo(app: number, _options?: Configuration): Observable<HttpInfo<Array<ServerConfig>>> {
        const requestContextPromise = this.requestFactory.getServerConfigs(app, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServerConfigsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show all server configs
     * @param app The app ID
     */
    public getServerConfigs(app: number, _options?: Configuration): Observable<Array<ServerConfig>> {
        return this.getServerConfigsWithHttpInfo(app, _options).pipe(map((apiResponse: HttpInfo<Array<ServerConfig>>) => apiResponse.data));
    }

    /**
     * Get stdout and stderr logs from a service or task
     * @param service The service ID
     * @param details details Flag
     * @param follow follow Flag
     * @param stdout stdout Flag
     * @param stderr stderr Flag
     * @param since since Flag
     * @param timestamps timestamps Flag
     * @param tail tail options
     */
    public getServerLogsWithHttpInfo(service: number, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, _options?: Configuration): Observable<HttpInfo<ServiceLogs>> {
        const requestContextPromise = this.requestFactory.getServerLogs(service, details, follow, stdout, stderr, since, timestamps, tail, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServerLogsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get stdout and stderr logs from a service or task
     * @param service The service ID
     * @param details details Flag
     * @param follow follow Flag
     * @param stdout stdout Flag
     * @param stderr stderr Flag
     * @param since since Flag
     * @param timestamps timestamps Flag
     * @param tail tail options
     */
    public getServerLogs(service: number, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, _options?: Configuration): Observable<ServiceLogs> {
        return this.getServerLogsWithHttpInfo(service, details, follow, stdout, stderr, since, timestamps, tail, _options).pipe(map((apiResponse: HttpInfo<ServiceLogs>) => apiResponse.data));
    }

    /**
     * Show all services for a given app
     * @param app Instance of the app to filter services by.
     */
    public getServersWithHttpInfo(app: number, _options?: Configuration): Observable<HttpInfo<Array<Server>>> {
        const requestContextPromise = this.requestFactory.getServers(app, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show all services for a given app
     * @param app Instance of the app to filter services by.
     */
    public getServers(app: number, _options?: Configuration): Observable<Array<Server>> {
        return this.getServersWithHttpInfo(app, _options).pipe(map((apiResponse: HttpInfo<Array<Server>>) => apiResponse.data));
    }

    /**
     * Restarts a specific Docker service
     * @param service The service ID
     * @param body 
     */
    public restartServerWithHttpInfo(service: number, body?: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.restartServer(service, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restartServerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Restarts a specific Docker service
     * @param service The service ID
     * @param body 
     */
    public restartServer(service: number, body?: any, _options?: Configuration): Observable<any> {
        return this.restartServerWithHttpInfo(service, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Restore a backup for a specified Docker service
     * @param service The service ID
     * @param body 
     */
    public restoreBackupWithHttpInfo(service: number, body?: any, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.restoreBackup(service, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restoreBackupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Restore a backup for a specified Docker service
     * @param service The service ID
     * @param body 
     */
    public restoreBackup(service: number, body?: any, _options?: Configuration): Observable<any> {
        return this.restoreBackupWithHttpInfo(service, body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Update a location setting
     * @param appLocationSetting The app location setting ID
     * @param updateAppLocationSettingRequest 
     */
    public updateAppLocationSettingWithHttpInfo(appLocationSetting: number, updateAppLocationSettingRequest?: UpdateAppLocationSettingRequest, _options?: Configuration): Observable<HttpInfo<AppLocationSetting>> {
        const requestContextPromise = this.requestFactory.updateAppLocationSetting(appLocationSetting, updateAppLocationSettingRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAppLocationSettingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a location setting
     * @param appLocationSetting The app location setting ID
     * @param updateAppLocationSettingRequest 
     */
    public updateAppLocationSetting(appLocationSetting: number, updateAppLocationSettingRequest?: UpdateAppLocationSettingRequest, _options?: Configuration): Observable<AppLocationSetting> {
        return this.updateAppLocationSettingWithHttpInfo(appLocationSetting, updateAppLocationSettingRequest, _options).pipe(map((apiResponse: HttpInfo<AppLocationSetting>) => apiResponse.data));
    }

    /**
     * Update a binary and the related file
     * @param binary The binary ID
     * @param createBinaryRequest 
     */
    public updateBinaryWithHttpInfo(binary: number, createBinaryRequest?: CreateBinaryRequest, _options?: Configuration): Observable<HttpInfo<Binary>> {
        const requestContextPromise = this.requestFactory.updateBinary(binary, createBinaryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBinaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a binary and the related file
     * @param binary The binary ID
     * @param createBinaryRequest 
     */
    public updateBinary(binary: number, createBinaryRequest?: CreateBinaryRequest, _options?: Configuration): Observable<Binary> {
        return this.updateBinaryWithHttpInfo(binary, createBinaryRequest, _options).pipe(map((apiResponse: HttpInfo<Binary>) => apiResponse.data));
    }

    /**
     * Update a specific docker registry
     * @param dockerRegistry The docker registry ID
     * @param updateDockerRegistryRequest 
     */
    public updateDockerRegistryWithHttpInfo(dockerRegistry: number, updateDockerRegistryRequest?: UpdateDockerRegistryRequest, _options?: Configuration): Observable<HttpInfo<DockerRegistry>> {
        const requestContextPromise = this.requestFactory.updateDockerRegistry(dockerRegistry, updateDockerRegistryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDockerRegistryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a specific docker registry
     * @param dockerRegistry The docker registry ID
     * @param updateDockerRegistryRequest 
     */
    public updateDockerRegistry(dockerRegistry: number, updateDockerRegistryRequest?: UpdateDockerRegistryRequest, _options?: Configuration): Observable<DockerRegistry> {
        return this.updateDockerRegistryWithHttpInfo(dockerRegistry, updateDockerRegistryRequest, _options).pipe(map((apiResponse: HttpInfo<DockerRegistry>) => apiResponse.data));
    }

    /**
     * Update a server config
     * @param serverConfig The server config ID
     * @param createServerConfigRequest 
     */
    public updateServerConfigWithHttpInfo(serverConfig: number, createServerConfigRequest?: CreateServerConfigRequest, _options?: Configuration): Observable<HttpInfo<ServerConfig>> {
        const requestContextPromise = this.requestFactory.updateServerConfig(serverConfig, createServerConfigRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateServerConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a server config
     * @param serverConfig The server config ID
     * @param createServerConfigRequest 
     */
    public updateServerConfig(serverConfig: number, createServerConfigRequest?: CreateServerConfigRequest, _options?: Configuration): Observable<ServerConfig> {
        return this.updateServerConfigWithHttpInfo(serverConfig, createServerConfigRequest, _options).pipe(map((apiResponse: HttpInfo<ServerConfig>) => apiResponse.data));
    }

}
