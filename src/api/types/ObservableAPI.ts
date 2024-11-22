import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration} from '../configuration.ts'
import { Observable, of, from } from '../rxjsStub.ts';
import {mergeMap, map} from  '../rxjsStub.ts';
import { App } from '../models/App.ts';
import { AppLocationSetting } from '../models/AppLocationSetting.ts';
import { AppLocationSettingStatus } from '../models/AppLocationSettingStatus.ts';
import { Auth } from '../models/Auth.ts';
import { AuthRequest } from '../models/AuthRequest.ts';
import { Backup } from '../models/Backup.ts';
import { BackupDownload } from '../models/BackupDownload.ts';
import { BackupType } from '../models/BackupType.ts';
import { Binary } from '../models/Binary.ts';
import { BinaryStatus } from '../models/BinaryStatus.ts';
import { BinaryType } from '../models/BinaryType.ts';
import { ConfigFile } from '../models/ConfigFile.ts';
import { Constraints } from '../models/Constraints.ts';
import { CreateBackupDockerServiceRequest } from '../models/CreateBackupDockerServiceRequest.ts';
import { CreateUpdateConstraints } from '../models/CreateUpdateConstraints.ts';
import { CreateUpdateDockerImage } from '../models/CreateUpdateDockerImage.ts';
import { CreateUpdatePlacement } from '../models/CreateUpdatePlacement.ts';
import { CreateUpdateSteam } from '../models/CreateUpdateSteam.ts';
import { DockerCompose } from '../models/DockerCompose.ts';
import { DockerImage } from '../models/DockerImage.ts';
import { DockerRegistry } from '../models/DockerRegistry.ts';
import { DockerRegistryType } from '../models/DockerRegistryType.ts';
import { DockerTaskStatus } from '../models/DockerTaskStatus.ts';
import { EnvironmentVariable } from '../models/EnvironmentVariable.ts';
import { EnvironmentVariableDefinition } from '../models/EnvironmentVariableDefinition.ts';
import { EnvironmentVariableType } from '../models/EnvironmentVariableType.ts';
import { GetTaggedImages200Response } from '../models/GetTaggedImages200Response.ts';
import { Location } from '../models/Location.ts';
import { Mount } from '../models/Mount.ts';
import { OperatingSystem } from '../models/OperatingSystem.ts';
import { Placement } from '../models/Placement.ts';
import { Port } from '../models/Port.ts';
import { PortDefinition } from '../models/PortDefinition.ts';
import { Protocol } from '../models/Protocol.ts';
import { PublishMode } from '../models/PublishMode.ts';
import { ResourceAllocations } from '../models/ResourceAllocations.ts';
import { ResourcePackage } from '../models/ResourcePackage.ts';
import { ResourcePackageType } from '../models/ResourcePackageType.ts';
import { Resources } from '../models/Resources.ts';
import { RestartPolicy } from '../models/RestartPolicy.ts';
import { RestartPolicyCondition } from '../models/RestartPolicyCondition.ts';
import { SecretFile } from '../models/SecretFile.ts';
import { Server } from '../models/Server.ts';
import { ServerConfig } from '../models/ServerConfig.ts';
import { ServerConfigStatus } from '../models/ServerConfigStatus.ts';
import { ServiceLogs } from '../models/ServiceLogs.ts';
import { Steam } from '../models/Steam.ts';
import { SteamBranch } from '../models/SteamBranch.ts';
import { SteamLauncher } from '../models/SteamLauncher.ts';
import { SteamRuntime } from '../models/SteamRuntime.ts';
import { StoreAppLocationSettingRequest } from '../models/StoreAppLocationSettingRequest.ts';
import { StoreAppRequest } from '../models/StoreAppRequest.ts';
import { StoreBinaryRequest } from '../models/StoreBinaryRequest.ts';
import { StoreDockerRegistryRequest } from '../models/StoreDockerRegistryRequest.ts';
import { StoreServerConfigRequest } from '../models/StoreServerConfigRequest.ts';
import { TaggedImage } from '../models/TaggedImage.ts';
import { TaggedImageMetaData } from '../models/TaggedImageMetaData.ts';
import { UpdateAppLocationSettingRequest } from '../models/UpdateAppLocationSettingRequest.ts';
import { UpdateAppRequest } from '../models/UpdateAppRequest.ts';
import { UpdateBinaryRequest } from '../models/UpdateBinaryRequest.ts';
import { UpdateDockerRegistryRequest } from '../models/UpdateDockerRegistryRequest.ts';
import { UpdateServerConfigRequest } from '../models/UpdateServerConfigRequest.ts';
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
     * @param storeAppRequest 
     */
    public createAppWithHttpInfo(storeAppRequest: StoreAppRequest, _options?: Configuration): Observable<HttpInfo<App>> {
        const requestContextPromise = this.requestFactory.createApp(storeAppRequest, _options);

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
     * @param storeAppRequest 
     */
    public createApp(storeAppRequest: StoreAppRequest, _options?: Configuration): Observable<App> {
        return this.createAppWithHttpInfo(storeAppRequest, _options).pipe(map((apiResponse: HttpInfo<App>) => apiResponse.data));
    }

    /**
     * Create a new location setting
     * @param app The app ID
     * @param storeAppLocationSettingRequest 
     */
    public createAppLocationSettingWithHttpInfo(app: number, storeAppLocationSettingRequest: StoreAppLocationSettingRequest, _options?: Configuration): Observable<HttpInfo<AppLocationSetting>> {
        const requestContextPromise = this.requestFactory.createAppLocationSetting(app, storeAppLocationSettingRequest, _options);

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
     * @param storeAppLocationSettingRequest 
     */
    public createAppLocationSetting(app: number, storeAppLocationSettingRequest: StoreAppLocationSettingRequest, _options?: Configuration): Observable<AppLocationSetting> {
        return this.createAppLocationSettingWithHttpInfo(app, storeAppLocationSettingRequest, _options).pipe(map((apiResponse: HttpInfo<AppLocationSetting>) => apiResponse.data));
    }

    /**
     * Creates a backup of the service
     * @param dockerService The docker service ID
     * @param createBackupDockerServiceRequest 
     */
    public createBackupWithHttpInfo(dockerService: number, createBackupDockerServiceRequest: CreateBackupDockerServiceRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.createBackup(dockerService, createBackupDockerServiceRequest, _options);

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
     * @param dockerService The docker service ID
     * @param createBackupDockerServiceRequest 
     */
    public createBackup(dockerService: number, createBackupDockerServiceRequest: CreateBackupDockerServiceRequest, _options?: Configuration): Observable<any> {
        return this.createBackupWithHttpInfo(dockerService, createBackupDockerServiceRequest, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Create a binary and the related entity
     * @param app The app ID
     * @param storeBinaryRequest 
     */
    public createBinaryWithHttpInfo(app: number, storeBinaryRequest: StoreBinaryRequest, _options?: Configuration): Observable<HttpInfo<Binary>> {
        const requestContextPromise = this.requestFactory.createBinary(app, storeBinaryRequest, _options);

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
     * Create a binary and the related entity
     * @param app The app ID
     * @param storeBinaryRequest 
     */
    public createBinary(app: number, storeBinaryRequest: StoreBinaryRequest, _options?: Configuration): Observable<Binary> {
        return this.createBinaryWithHttpInfo(app, storeBinaryRequest, _options).pipe(map((apiResponse: HttpInfo<Binary>) => apiResponse.data));
    }

    /**
     * Create a new docker registry
     * @param storeDockerRegistryRequest 
     */
    public createDockerRegistryWithHttpInfo(storeDockerRegistryRequest: StoreDockerRegistryRequest, _options?: Configuration): Observable<HttpInfo<DockerRegistry>> {
        const requestContextPromise = this.requestFactory.createDockerRegistry(storeDockerRegistryRequest, _options);

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
     * @param storeDockerRegistryRequest 
     */
    public createDockerRegistry(storeDockerRegistryRequest: StoreDockerRegistryRequest, _options?: Configuration): Observable<DockerRegistry> {
        return this.createDockerRegistryWithHttpInfo(storeDockerRegistryRequest, _options).pipe(map((apiResponse: HttpInfo<DockerRegistry>) => apiResponse.data));
    }

    /**
     * Create a new server config
     * @param app The app ID
     * @param storeServerConfigRequest 
     */
    public createServerConfigWithHttpInfo(app: number, storeServerConfigRequest: StoreServerConfigRequest, _options?: Configuration): Observable<HttpInfo<ServerConfig>> {
        const requestContextPromise = this.requestFactory.createServerConfig(app, storeServerConfigRequest, _options);

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
     * @param storeServerConfigRequest 
     */
    public createServerConfig(app: number, storeServerConfigRequest: StoreServerConfigRequest, _options?: Configuration): Observable<ServerConfig> {
        return this.createServerConfigWithHttpInfo(app, storeServerConfigRequest, _options).pipe(map((apiResponse: HttpInfo<ServerConfig>) => apiResponse.data));
    }

    /**
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
     * Show a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public getAppLocationSettingByIdWithHttpInfo(appLocationSetting: number, _options?: Configuration): Observable<HttpInfo<AppLocationSetting>> {
        const requestContextPromise = this.requestFactory.getAppLocationSettingById(appLocationSetting, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppLocationSettingByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public getAppLocationSettingById(appLocationSetting: number, _options?: Configuration): Observable<AppLocationSetting> {
        return this.getAppLocationSettingByIdWithHttpInfo(appLocationSetting, _options).pipe(map((apiResponse: HttpInfo<AppLocationSetting>) => apiResponse.data));
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
     * Authenticates the user based on the user\'s email, password, and session ID. If the user is authenticated successfully, it returns the user\'s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.
     * Get token
     * @param authRequest 
     */
    public getAuthTokenWithHttpInfo(authRequest: AuthRequest, _options?: Configuration): Observable<HttpInfo<Auth>> {
        const requestContextPromise = this.requestFactory.getAuthToken(authRequest, _options);

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
     * Authenticates the user based on the user\'s email, password, and session ID. If the user is authenticated successfully, it returns the user\'s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.
     * Get token
     * @param authRequest 
     */
    public getAuthToken(authRequest: AuthRequest, _options?: Configuration): Observable<Auth> {
        return this.getAuthTokenWithHttpInfo(authRequest, _options).pipe(map((apiResponse: HttpInfo<Auth>) => apiResponse.data));
    }

    /**
     * List all backups for the specified Docker service
     * @param dockerService The docker service ID
     */
    public getBackupsWithHttpInfo(dockerService: number, _options?: Configuration): Observable<HttpInfo<Array<Backup>>> {
        const requestContextPromise = this.requestFactory.getBackups(dockerService, _options);

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
     * @param dockerService The docker service ID
     */
    public getBackups(dockerService: number, _options?: Configuration): Observable<Array<Backup>> {
        return this.getBackupsWithHttpInfo(dockerService, _options).pipe(map((apiResponse: HttpInfo<Array<Backup>>) => apiResponse.data));
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
     * Display the latest backup for the specified Docker service
     * @param dockerService The docker service ID
     */
    public getLatestBackupWithHttpInfo(dockerService: number, _options?: Configuration): Observable<HttpInfo<Backup>> {
        const requestContextPromise = this.requestFactory.getLatestBackup(dockerService, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLatestBackupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Display the latest backup for the specified Docker service
     * @param dockerService The docker service ID
     */
    public getLatestBackup(dockerService: number, _options?: Configuration): Observable<Backup> {
        return this.getLatestBackupWithHttpInfo(dockerService, _options).pipe(map((apiResponse: HttpInfo<Backup>) => apiResponse.data));
    }

    /**
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
     * Show a unique listing of locations based on active and ready worker nodes
     */
    public getLocations(_options?: Configuration): Observable<Array<Location>> {
        return this.getLocationsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Location>>) => apiResponse.data));
    }

    /**
     * Show a specified resource package
     * @param resourcePackage The resource package ID
     */
    public getResourcePackageByIdWithHttpInfo(resourcePackage: number, _options?: Configuration): Observable<HttpInfo<ResourcePackage>> {
        const requestContextPromise = this.requestFactory.getResourcePackageById(resourcePackage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getResourcePackageByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show a specified resource package
     * @param resourcePackage The resource package ID
     */
    public getResourcePackageById(resourcePackage: number, _options?: Configuration): Observable<ResourcePackage> {
        return this.getResourcePackageByIdWithHttpInfo(resourcePackage, _options).pipe(map((apiResponse: HttpInfo<ResourcePackage>) => apiResponse.data));
    }

    /**
     * Show all available resource packages
     */
    public getResourcePackagesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<ResourcePackage>>> {
        const requestContextPromise = this.requestFactory.getResourcePackages(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getResourcePackagesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show all available resource packages
     */
    public getResourcePackages(_options?: Configuration): Observable<Array<ResourcePackage>> {
        return this.getResourcePackagesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<ResourcePackage>>) => apiResponse.data));
    }

    /**
     * Generates a presigned URL for downloading a backup from AWS S3 if the backup method is \'archive\'
     * @param dockerService The docker service ID
     */
    public getServerBackupDownloadUrlWithHttpInfo(dockerService: number, _options?: Configuration): Observable<HttpInfo<BackupDownload>> {
        const requestContextPromise = this.requestFactory.getServerBackupDownloadUrl(dockerService, _options);

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
     * @param dockerService The docker service ID
     */
    public getServerBackupDownloadUrl(dockerService: number, _options?: Configuration): Observable<BackupDownload> {
        return this.getServerBackupDownloadUrlWithHttpInfo(dockerService, _options).pipe(map((apiResponse: HttpInfo<BackupDownload>) => apiResponse.data));
    }

    /**
     * Display a specific DockerService associated with the given App
     * @param app The app ID
     * @param dockerService The docker service ID
     */
    public getServerByIdWithHttpInfo(app: number, dockerService: number, _options?: Configuration): Observable<HttpInfo<Server>> {
        const requestContextPromise = this.requestFactory.getServerById(app, dockerService, _options);

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
     * @param dockerService The docker service ID
     */
    public getServerById(app: number, dockerService: number, _options?: Configuration): Observable<Server> {
        return this.getServerByIdWithHttpInfo(app, dockerService, _options).pipe(map((apiResponse: HttpInfo<Server>) => apiResponse.data));
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
     * @param dockerService The docker service ID
     * @param details Show extra details provided to logs. Default: false
     * @param stdout Return logs from stdout. Default: true
     * @param stderr Return logs from stderr. Default: true
     * @param since Only return logs since this time, as a UNIX timestamp. Default: 0
     * @param timestamps Add timestamps to every log line. Default: false
     * @param tail Only return this number of log lines from the end of the logs. Specify as an integer or all to output all log lines. Default: \&quot;all\&quot;
     */
    public getServerLogsWithHttpInfo(dockerService: number, details?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, _options?: Configuration): Observable<HttpInfo<ServiceLogs>> {
        const requestContextPromise = this.requestFactory.getServerLogs(dockerService, details, stdout, stderr, since, timestamps, tail, _options);

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
     * @param dockerService The docker service ID
     * @param details Show extra details provided to logs. Default: false
     * @param stdout Return logs from stdout. Default: true
     * @param stderr Return logs from stderr. Default: true
     * @param since Only return logs since this time, as a UNIX timestamp. Default: 0
     * @param timestamps Add timestamps to every log line. Default: false
     * @param tail Only return this number of log lines from the end of the logs. Specify as an integer or all to output all log lines. Default: \&quot;all\&quot;
     */
    public getServerLogs(dockerService: number, details?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, _options?: Configuration): Observable<ServiceLogs> {
        return this.getServerLogsWithHttpInfo(dockerService, details, stdout, stderr, since, timestamps, tail, _options).pipe(map((apiResponse: HttpInfo<ServiceLogs>) => apiResponse.data));
    }

    /**
     * Show all services for a given app
     * @param app The app ID
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
     * @param app The app ID
     */
    public getServers(app: number, _options?: Configuration): Observable<Array<Server>> {
        return this.getServersWithHttpInfo(app, _options).pipe(map((apiResponse: HttpInfo<Array<Server>>) => apiResponse.data));
    }

    /**
     * List all available tagged images
     * @param dockerRegistry The docker registry ID
     */
    public getTaggedImagesWithHttpInfo(dockerRegistry: number, _options?: Configuration): Observable<HttpInfo<GetTaggedImages200Response>> {
        const requestContextPromise = this.requestFactory.getTaggedImages(dockerRegistry, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTaggedImagesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all available tagged images
     * @param dockerRegistry The docker registry ID
     */
    public getTaggedImages(dockerRegistry: number, _options?: Configuration): Observable<GetTaggedImages200Response> {
        return this.getTaggedImagesWithHttpInfo(dockerRegistry, _options).pipe(map((apiResponse: HttpInfo<GetTaggedImages200Response>) => apiResponse.data));
    }

    /**
     * Show all services for a specific app location setting within a given app
     * @param app The app ID
     * @param appLocationSetting The app location setting ID
     */
    public listServicesForAppLocationSettingWithHttpInfo(app: number, appLocationSetting: number, _options?: Configuration): Observable<HttpInfo<Array<Server>>> {
        const requestContextPromise = this.requestFactory.listServicesForAppLocationSetting(app, appLocationSetting, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listServicesForAppLocationSettingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show all services for a specific app location setting within a given app
     * @param app The app ID
     * @param appLocationSetting The app location setting ID
     */
    public listServicesForAppLocationSetting(app: number, appLocationSetting: number, _options?: Configuration): Observable<Array<Server>> {
        return this.listServicesForAppLocationSettingWithHttpInfo(app, appLocationSetting, _options).pipe(map((apiResponse: HttpInfo<Array<Server>>) => apiResponse.data));
    }

    /**
     * Refresh a binary and the related entity
     * @param binary The binary ID
     */
    public refreshBinaryWithHttpInfo(binary: number, _options?: Configuration): Observable<HttpInfo<Binary>> {
        const requestContextPromise = this.requestFactory.refreshBinary(binary, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.refreshBinaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Refresh a binary and the related entity
     * @param binary The binary ID
     */
    public refreshBinary(binary: number, _options?: Configuration): Observable<Binary> {
        return this.refreshBinaryWithHttpInfo(binary, _options).pipe(map((apiResponse: HttpInfo<Binary>) => apiResponse.data));
    }

    /**
     * Refresh the cache for all available tagged images
     * @param dockerRegistry The docker registry ID
     */
    public refreshTaggedImagesWithHttpInfo(dockerRegistry: number, _options?: Configuration): Observable<HttpInfo<GetTaggedImages200Response>> {
        const requestContextPromise = this.requestFactory.refreshTaggedImages(dockerRegistry, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.refreshTaggedImagesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Refresh the cache for all available tagged images
     * @param dockerRegistry The docker registry ID
     */
    public refreshTaggedImages(dockerRegistry: number, _options?: Configuration): Observable<GetTaggedImages200Response> {
        return this.refreshTaggedImagesWithHttpInfo(dockerRegistry, _options).pipe(map((apiResponse: HttpInfo<GetTaggedImages200Response>) => apiResponse.data));
    }

    /**
     * Restarts a specific Docker service
     * @param dockerService The docker service ID
     */
    public restartServerWithHttpInfo(dockerService: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.restartServer(dockerService, _options);

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
     * @param dockerService The docker service ID
     */
    public restartServer(dockerService: number, _options?: Configuration): Observable<any> {
        return this.restartServerWithHttpInfo(dockerService, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Restore a backup for a specified Docker service
     * @param dockerService The docker service ID
     */
    public restoreBackupWithHttpInfo(dockerService: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.restoreBackup(dockerService, _options);

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
     * @param dockerService The docker service ID
     */
    public restoreBackup(dockerService: number, _options?: Configuration): Observable<any> {
        return this.restoreBackupWithHttpInfo(dockerService, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Get branches for a specific steamworks app ID
     * @param appId The steamworks app id
     */
    public steamGetBranchesWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<Array<SteamBranch>>> {
        const requestContextPromise = this.requestFactory.steamGetBranches(appId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.steamGetBranchesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get branches for a specific steamworks app ID
     * @param appId The steamworks app id
     */
    public steamGetBranches(appId: number, _options?: Configuration): Observable<Array<SteamBranch>> {
        return this.steamGetBranchesWithHttpInfo(appId, _options).pipe(map((apiResponse: HttpInfo<Array<SteamBranch>>) => apiResponse.data));
    }

    /**
     * Get launchers for a specific steamworks app ID, optionally filtered by OS
     * @param appId The steamworks app id
     * @param os The operating system of the binary
     */
    public steamGetLauncherWithHttpInfo(appId: number, os?: OperatingSystem, _options?: Configuration): Observable<HttpInfo<Array<SteamLauncher>>> {
        const requestContextPromise = this.requestFactory.steamGetLauncher(appId, os, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.steamGetLauncherWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get launchers for a specific steamworks app ID, optionally filtered by OS
     * @param appId The steamworks app id
     * @param os The operating system of the binary
     */
    public steamGetLauncher(appId: number, os?: OperatingSystem, _options?: Configuration): Observable<Array<SteamLauncher>> {
        return this.steamGetLauncherWithHttpInfo(appId, os, _options).pipe(map((apiResponse: HttpInfo<Array<SteamLauncher>>) => apiResponse.data));
    }

    /**
     * Update a specific app
     * @param app The app ID
     * @param updateAppRequest 
     */
    public updateAppByIdWithHttpInfo(app: number, updateAppRequest: UpdateAppRequest, _options?: Configuration): Observable<HttpInfo<App>> {
        const requestContextPromise = this.requestFactory.updateAppById(app, updateAppRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAppByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a specific app
     * @param app The app ID
     * @param updateAppRequest 
     */
    public updateAppById(app: number, updateAppRequest: UpdateAppRequest, _options?: Configuration): Observable<App> {
        return this.updateAppByIdWithHttpInfo(app, updateAppRequest, _options).pipe(map((apiResponse: HttpInfo<App>) => apiResponse.data));
    }

    /**
     * Update a location setting
     * @param appLocationSetting The app location setting ID
     * @param updateAppLocationSettingRequest 
     */
    public updateAppLocationSettingWithHttpInfo(appLocationSetting: number, updateAppLocationSettingRequest: UpdateAppLocationSettingRequest, _options?: Configuration): Observable<HttpInfo<AppLocationSetting>> {
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
    public updateAppLocationSetting(appLocationSetting: number, updateAppLocationSettingRequest: UpdateAppLocationSettingRequest, _options?: Configuration): Observable<AppLocationSetting> {
        return this.updateAppLocationSettingWithHttpInfo(appLocationSetting, updateAppLocationSettingRequest, _options).pipe(map((apiResponse: HttpInfo<AppLocationSetting>) => apiResponse.data));
    }

    /**
     * Update a binary and the related entity
     * @param binary The binary ID
     * @param updateBinaryRequest 
     */
    public updateBinaryWithHttpInfo(binary: number, updateBinaryRequest: UpdateBinaryRequest, _options?: Configuration): Observable<HttpInfo<Binary>> {
        const requestContextPromise = this.requestFactory.updateBinary(binary, updateBinaryRequest, _options);

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
     * Update a binary and the related entity
     * @param binary The binary ID
     * @param updateBinaryRequest 
     */
    public updateBinary(binary: number, updateBinaryRequest: UpdateBinaryRequest, _options?: Configuration): Observable<Binary> {
        return this.updateBinaryWithHttpInfo(binary, updateBinaryRequest, _options).pipe(map((apiResponse: HttpInfo<Binary>) => apiResponse.data));
    }

    /**
     * Update a specific docker registry
     * @param dockerRegistry The docker registry ID
     * @param updateDockerRegistryRequest 
     */
    public updateDockerRegistryWithHttpInfo(dockerRegistry: number, updateDockerRegistryRequest: UpdateDockerRegistryRequest, _options?: Configuration): Observable<HttpInfo<DockerRegistry>> {
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
    public updateDockerRegistry(dockerRegistry: number, updateDockerRegistryRequest: UpdateDockerRegistryRequest, _options?: Configuration): Observable<DockerRegistry> {
        return this.updateDockerRegistryWithHttpInfo(dockerRegistry, updateDockerRegistryRequest, _options).pipe(map((apiResponse: HttpInfo<DockerRegistry>) => apiResponse.data));
    }

    /**
     * Update a server config
     * @param serverConfig The server config ID
     * @param updateServerConfigRequest 
     */
    public updateServerConfigWithHttpInfo(serverConfig: number, updateServerConfigRequest: UpdateServerConfigRequest, _options?: Configuration): Observable<HttpInfo<ServerConfig>> {
        const requestContextPromise = this.requestFactory.updateServerConfig(serverConfig, updateServerConfigRequest, _options);

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
     * @param updateServerConfigRequest 
     */
    public updateServerConfig(serverConfig: number, updateServerConfigRequest: UpdateServerConfigRequest, _options?: Configuration): Observable<ServerConfig> {
        return this.updateServerConfigWithHttpInfo(serverConfig, updateServerConfigRequest, _options).pipe(map((apiResponse: HttpInfo<ServerConfig>) => apiResponse.data));
    }

}
