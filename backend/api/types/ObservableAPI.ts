import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration} from '../configuration.ts'
import { Observable, of, from } from '../rxjsStub.ts';
import {mergeMap, map} from  '../rxjsStub.ts';
import { App } from '../models/App.ts';
import { AppLocationSetting } from '../models/AppLocationSetting.ts';
import { AppLocationSettingStatus } from '../models/AppLocationSettingStatus.ts';
import { Architecture } from '../models/Architecture.ts';
import { Auth } from '../models/Auth.ts';
import { AuthRequest } from '../models/AuthRequest.ts';
import { Backup } from '../models/Backup.ts';
import { BackupDownload } from '../models/BackupDownload.ts';
import { Binary } from '../models/Binary.ts';
import { BinaryStatus } from '../models/BinaryStatus.ts';
import { BinaryType } from '../models/BinaryType.ts';
import { ConfigFile } from '../models/ConfigFile.ts';
import { CreateBackupDockerServiceRequest } from '../models/CreateBackupDockerServiceRequest.ts';
import { CreateUpdateDockerImage } from '../models/CreateUpdateDockerImage.ts';
import { CreateUpdatePlacement } from '../models/CreateUpdatePlacement.ts';
import { CreateUpdateSteam } from '../models/CreateUpdateSteam.ts';
import { DockerImage } from '../models/DockerImage.ts';
import { DockerRegistry } from '../models/DockerRegistry.ts';
import { DockerRegistryType } from '../models/DockerRegistryType.ts';
import { EnvironmentVariable } from '../models/EnvironmentVariable.ts';
import { EnvironmentVariableDefinition } from '../models/EnvironmentVariableDefinition.ts';
import { EnvironmentVariableType } from '../models/EnvironmentVariableType.ts';
import { GetAppLocationSettings200Response } from '../models/GetAppLocationSettings200Response.ts';
import { GetAppLocationSettings200ResponseLinks } from '../models/GetAppLocationSettings200ResponseLinks.ts';
import { GetAppLocationSettings200ResponseMeta } from '../models/GetAppLocationSettings200ResponseMeta.ts';
import { GetAppLocationSettings200ResponseMetaLinksInner } from '../models/GetAppLocationSettings200ResponseMetaLinksInner.ts';
import { GetApps200Response } from '../models/GetApps200Response.ts';
import { GetBackups200Response } from '../models/GetBackups200Response.ts';
import { GetBinaries200Response } from '../models/GetBinaries200Response.ts';
import { GetDockerRegistries200Response } from '../models/GetDockerRegistries200Response.ts';
import { GetLocations200Response } from '../models/GetLocations200Response.ts';
import { GetResourcePackages200Response } from '../models/GetResourcePackages200Response.ts';
import { GetServerConfigs200Response } from '../models/GetServerConfigs200Response.ts';
import { GetServers200Response } from '../models/GetServers200Response.ts';
import { GetTaggedImages200Response } from '../models/GetTaggedImages200Response.ts';
import { InlineObject } from '../models/InlineObject.ts';
import { InlineObject1 } from '../models/InlineObject1.ts';
import { Location } from '../models/Location.ts';
import { Mount } from '../models/Mount.ts';
import { Node } from '../models/Node.ts';
import { OperatingSystem } from '../models/OperatingSystem.ts';
import { PatchMetadataRequest } from '../models/PatchMetadataRequest.ts';
import { Placement } from '../models/Placement.ts';
import { Port } from '../models/Port.ts';
import { PortDefinition } from '../models/PortDefinition.ts';
import { Protocol } from '../models/Protocol.ts';
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
import { SetMetadataRequest } from '../models/SetMetadataRequest.ts';
import { Steam } from '../models/Steam.ts';
import { SteamBranch } from '../models/SteamBranch.ts';
import { SteamLauncher } from '../models/SteamLauncher.ts';
import { SteamRuntime } from '../models/SteamRuntime.ts';
import { StoreAppLocationSettingRequest } from '../models/StoreAppLocationSettingRequest.ts';
import { StoreAppRequest } from '../models/StoreAppRequest.ts';
import { StoreBinaryRequest } from '../models/StoreBinaryRequest.ts';
import { StoreDockerRegistryRequest } from '../models/StoreDockerRegistryRequest.ts';
import { StoreMinecraftTemplateRequest } from '../models/StoreMinecraftTemplateRequest.ts';
import { StorePalworldTemplateRequest } from '../models/StorePalworldTemplateRequest.ts';
import { StoreServerConfigRequest } from '../models/StoreServerConfigRequest.ts';
import { TaggedImage } from '../models/TaggedImage.ts';
import { TaggedImageMetaData } from '../models/TaggedImageMetaData.ts';
import { UpdateAppLocationSettingRequest } from '../models/UpdateAppLocationSettingRequest.ts';
import { UpdateAppRequest } from '../models/UpdateAppRequest.ts';
import { UpdateBinaryRequest } from '../models/UpdateBinaryRequest.ts';
import { UpdateDockerRegistryRequest } from '../models/UpdateDockerRegistryRequest.ts';
import { UpdateServerConfigRequest } from '../models/UpdateServerConfigRequest.ts';

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
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
     * Creates a backup
     * @param dockerService The docker service ID
     * @param createBackupDockerServiceRequest
     */
    public createBackupWithHttpInfo(dockerService: number, createBackupDockerServiceRequest: CreateBackupDockerServiceRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.createBackup(dockerService, createBackupDockerServiceRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBackupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a backup
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
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
     * Delete all metadata from the service
     * @param dockerService The docker service ID
     */
    public dockerServicesMetadataDeleteAllWithHttpInfo(dockerService: number, _options?: Configuration): Observable<HttpInfo<Server>> {
        const requestContextPromise = this.requestFactory.dockerServicesMetadataDeleteAll(dockerService, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dockerServicesMetadataDeleteAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete all metadata from the service
     * @param dockerService The docker service ID
     */
    public dockerServicesMetadataDeleteAll(dockerService: number, _options?: Configuration): Observable<Server> {
        return this.dockerServicesMetadataDeleteAllWithHttpInfo(dockerService, _options).pipe(map((apiResponse: HttpInfo<Server>) => apiResponse.data));
    }

    /**
     * Delete specific metadata keys from the service
     * @param dockerService The docker service ID
     * @param metadata
     */
    public dockerServicesMetadataDeleteKeysWithHttpInfo(dockerService: number, metadata: Array<string>, _options?: Configuration): Observable<HttpInfo<Server>> {
        const requestContextPromise = this.requestFactory.dockerServicesMetadataDeleteKeys(dockerService, metadata, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dockerServicesMetadataDeleteKeysWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete specific metadata keys from the service
     * @param dockerService The docker service ID
     * @param metadata
     */
    public dockerServicesMetadataDeleteKeys(dockerService: number, metadata: Array<string>, _options?: Configuration): Observable<Server> {
        return this.dockerServicesMetadataDeleteKeysWithHttpInfo(dockerService, metadata, _options).pipe(map((apiResponse: HttpInfo<Server>) => apiResponse.data));
    }

    /**
     * Replaces the entire metadata set with only the values provided in the request.
     * Set metadata for the service
     * @param dockerService The docker service ID
     * @param [setMetadataRequest]
     */
    public dockerServicesMetadataSetWithHttpInfo(dockerService: number, setMetadataRequest?: SetMetadataRequest, _options?: Configuration): Observable<HttpInfo<Server>> {
        const requestContextPromise = this.requestFactory.dockerServicesMetadataSet(dockerService, setMetadataRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dockerServicesMetadataSetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replaces the entire metadata set with only the values provided in the request.
     * Set metadata for the service
     * @param dockerService The docker service ID
     * @param [setMetadataRequest]
     */
    public dockerServicesMetadataSet(dockerService: number, setMetadataRequest?: SetMetadataRequest, _options?: Configuration): Observable<Server> {
        return this.dockerServicesMetadataSetWithHttpInfo(dockerService, setMetadataRequest, _options).pipe(map((apiResponse: HttpInfo<Server>) => apiResponse.data));
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting metadata that is not mentioned.
     * Update metadata for the service
     * @param dockerService The docker service ID
     * @param [patchMetadataRequest]
     */
    public dockerServicesMetadataUpdateWithHttpInfo(dockerService: number, patchMetadataRequest?: PatchMetadataRequest, _options?: Configuration): Observable<HttpInfo<Server>> {
        const requestContextPromise = this.requestFactory.dockerServicesMetadataUpdate(dockerService, patchMetadataRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dockerServicesMetadataUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting metadata that is not mentioned.
     * Update metadata for the service
     * @param dockerService The docker service ID
     * @param [patchMetadataRequest]
     */
    public dockerServicesMetadataUpdate(dockerService: number, patchMetadataRequest?: PatchMetadataRequest, _options?: Configuration): Observable<Server> {
        return this.dockerServicesMetadataUpdateWithHttpInfo(dockerService, patchMetadataRequest, _options).pipe(map((apiResponse: HttpInfo<Server>) => apiResponse.data));
    }

    /**
     * Show a specific app
     * @param app The app ID
     */
    public getAppByIdWithHttpInfo(app: number, _options?: Configuration): Observable<HttpInfo<App>> {
        const requestContextPromise = this.requestFactory.getAppById(app, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60;
     * @param [filterId] Filter by id.
     * @param [filterName] Filter by name.
     * @param [filterNamePartial] Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;.
     * @param [filterServerConfigId] Filter by ServerConfig ID.
     * @param [filterNumInstances] Filter by number of instances.
     * @param [filterStatus] Filter by status.
     * @param [filterMaintenance] Filter by maintenance.
     * @param [filterLocationCity] Filter by location city.
     * @param [filterLocationCityDisplay] Filter by location city display name.
     * @param [filterLocationContinent] Filter by location continent.
     * @param [filterLocationCountry] Filter by location country.
     * @param [filterServerConfigName] Filter by ServerConfig name.
     * @param [filterServerConfigCommand] Filter by ServerConfig command.
     * @param [filterServerConfigArgs] Filter by ServerConfig arguments.
     * @param [filterServerConfigNotes] Filter by ServerConfig notes.
     * @param [filterServerConfigStatus] Filter by ServerConfig status.
     * @param [filterServerConfigMaintenance] Filter by ServerConfig maintenance.
     * @param [filterServerConfigResourcePackageSlug] Filter by ServerConfig resource package slug.
     */
    public getAppLocationSettingsWithHttpInfo(app: number, perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterName?: string, filterNamePartial?: string, filterServerConfigId?: number, filterNumInstances?: number, filterStatus?: string, filterMaintenance?: boolean, filterLocationCity?: string, filterLocationCityDisplay?: string, filterLocationContinent?: string, filterLocationCountry?: string, filterServerConfigName?: string, filterServerConfigCommand?: string, filterServerConfigArgs?: string, filterServerConfigNotes?: string, filterServerConfigStatus?: string, filterServerConfigMaintenance?: boolean, filterServerConfigResourcePackageSlug?: string, _options?: Configuration): Observable<HttpInfo<GetAppLocationSettings200Response>> {
        const requestContextPromise = this.requestFactory.getAppLocationSettings(app, perPage, page, sort, filterId, filterName, filterNamePartial, filterServerConfigId, filterNumInstances, filterStatus, filterMaintenance, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterServerConfigName, filterServerConfigCommand, filterServerConfigArgs, filterServerConfigNotes, filterServerConfigStatus, filterServerConfigMaintenance, filterServerConfigResourcePackageSlug, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppLocationSettingsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show all location settings
     * @param app The app ID
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60;
     * @param [filterId] Filter by id.
     * @param [filterName] Filter by name.
     * @param [filterNamePartial] Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;.
     * @param [filterServerConfigId] Filter by ServerConfig ID.
     * @param [filterNumInstances] Filter by number of instances.
     * @param [filterStatus] Filter by status.
     * @param [filterMaintenance] Filter by maintenance.
     * @param [filterLocationCity] Filter by location city.
     * @param [filterLocationCityDisplay] Filter by location city display name.
     * @param [filterLocationContinent] Filter by location continent.
     * @param [filterLocationCountry] Filter by location country.
     * @param [filterServerConfigName] Filter by ServerConfig name.
     * @param [filterServerConfigCommand] Filter by ServerConfig command.
     * @param [filterServerConfigArgs] Filter by ServerConfig arguments.
     * @param [filterServerConfigNotes] Filter by ServerConfig notes.
     * @param [filterServerConfigStatus] Filter by ServerConfig status.
     * @param [filterServerConfigMaintenance] Filter by ServerConfig maintenance.
     * @param [filterServerConfigResourcePackageSlug] Filter by ServerConfig resource package slug.
     */
    public getAppLocationSettings(app: number, perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterName?: string, filterNamePartial?: string, filterServerConfigId?: number, filterNumInstances?: number, filterStatus?: string, filterMaintenance?: boolean, filterLocationCity?: string, filterLocationCityDisplay?: string, filterLocationContinent?: string, filterLocationCountry?: string, filterServerConfigName?: string, filterServerConfigCommand?: string, filterServerConfigArgs?: string, filterServerConfigNotes?: string, filterServerConfigStatus?: string, filterServerConfigMaintenance?: boolean, filterServerConfigResourcePackageSlug?: string, _options?: Configuration): Observable<GetAppLocationSettings200Response> {
        return this.getAppLocationSettingsWithHttpInfo(app, perPage, page, sort, filterId, filterName, filterNamePartial, filterServerConfigId, filterNumInstances, filterStatus, filterMaintenance, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterServerConfigName, filterServerConfigCommand, filterServerConfigArgs, filterServerConfigNotes, filterServerConfigStatus, filterServerConfigMaintenance, filterServerConfigResourcePackageSlug, _options).pipe(map((apiResponse: HttpInfo<GetAppLocationSettings200Response>) => apiResponse.data));
    }

    /**
     * Show all apps
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60;
     * @param [filterId] Filter by id.
     * @param [filterName] Filter by name.
     * @param [filterNamePartial] Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;.
     * @param [filterInUse] Filter by in use flag.
     */
    public getAppsWithHttpInfo(perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterName?: string, filterNamePartial?: string, filterInUse?: boolean, _options?: Configuration): Observable<HttpInfo<GetApps200Response>> {
        const requestContextPromise = this.requestFactory.getApps(perPage, page, sort, filterId, filterName, filterNamePartial, filterInUse, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show all apps
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60;
     * @param [filterId] Filter by id.
     * @param [filterName] Filter by name.
     * @param [filterNamePartial] Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;.
     * @param [filterInUse] Filter by in use flag.
     */
    public getApps(perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterName?: string, filterNamePartial?: string, filterInUse?: boolean, _options?: Configuration): Observable<GetApps200Response> {
        return this.getAppsWithHttpInfo(perPage, page, sort, filterId, filterName, filterNamePartial, filterInUse, _options).pipe(map((apiResponse: HttpInfo<GetApps200Response>) => apiResponse.data));
    }

    /**
     * Authenticates the user based on the user\'s email, password, and session ID. If the user is authenticated successfully, it returns the user\'s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.+
     * Get token
     * @param authRequest
     */
    public getAuthTokenWithHttpInfo(authRequest: AuthRequest, _options?: Configuration): Observable<HttpInfo<Auth>> {
        const requestContextPromise = this.requestFactory.getAuthToken(authRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAuthTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Authenticates the user based on the user\'s email, password, and session ID. If the user is authenticated successfully, it returns the user\'s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.+
     * Get token
     * @param authRequest
     */
    public getAuthToken(authRequest: AuthRequest, _options?: Configuration): Observable<Auth> {
        return this.getAuthTokenWithHttpInfo(authRequest, _options).pipe(map((apiResponse: HttpInfo<Auth>) => apiResponse.data));
    }

    /**
     * List all backups
     * @param dockerService The docker service ID
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** For example, to sort by name in ascending order or by archiveName in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;name sort[]&#x3D;-archiveName &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;name&amp;sort[]&#x3D;-archiveName &#x60;&#x60;&#x60;
     * @param [filterName] Filter by name.
     * @param [filterArchiveName] Filter by archive name.
     */
    public getBackupsWithHttpInfo(dockerService: number, perPage?: number, page?: number, sort?: Array<string>, filterName?: string, filterArchiveName?: string, _options?: Configuration): Observable<HttpInfo<GetBackups200Response>> {
        const requestContextPromise = this.requestFactory.getBackups(dockerService, perPage, page, sort, filterName, filterArchiveName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBackupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all backups
     * @param dockerService The docker service ID
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** For example, to sort by name in ascending order or by archiveName in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;name sort[]&#x3D;-archiveName &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;name&amp;sort[]&#x3D;-archiveName &#x60;&#x60;&#x60;
     * @param [filterName] Filter by name.
     * @param [filterArchiveName] Filter by archive name.
     */
    public getBackups(dockerService: number, perPage?: number, page?: number, sort?: Array<string>, filterName?: string, filterArchiveName?: string, _options?: Configuration): Observable<GetBackups200Response> {
        return this.getBackupsWithHttpInfo(dockerService, perPage, page, sort, filterName, filterArchiveName, _options).pipe(map((apiResponse: HttpInfo<GetBackups200Response>) => apiResponse.data));
    }

    /**
     * Show all binaries
     * @param app The app ID
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60;
     * @param [filterName] Filter by name.
     * @param [filterNamePartial] Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;.
     * @param [filterVersion] Filter by version.
     * @param [filterType] Filter by type.
     * @param [filterOs] Filter by operating system.
     * @param [filterMaintenance] Filter by maintenance status.
     * @param [filterStatus] Filter by status.
     * @param [filterInUse] Filter by in use flag.
     */
    public getBinariesWithHttpInfo(app: number, perPage?: number, page?: number, sort?: Array<string>, filterName?: string, filterNamePartial?: string, filterVersion?: string, filterType?: string, filterOs?: string, filterMaintenance?: boolean, filterStatus?: string, filterInUse?: boolean, _options?: Configuration): Observable<HttpInfo<GetBinaries200Response>> {
        const requestContextPromise = this.requestFactory.getBinaries(app, perPage, page, sort, filterName, filterNamePartial, filterVersion, filterType, filterOs, filterMaintenance, filterStatus, filterInUse, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBinariesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show all binaries
     * @param app The app ID
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60;
     * @param [filterName] Filter by name.
     * @param [filterNamePartial] Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;.
     * @param [filterVersion] Filter by version.
     * @param [filterType] Filter by type.
     * @param [filterOs] Filter by operating system.
     * @param [filterMaintenance] Filter by maintenance status.
     * @param [filterStatus] Filter by status.
     * @param [filterInUse] Filter by in use flag.
     */
    public getBinaries(app: number, perPage?: number, page?: number, sort?: Array<string>, filterName?: string, filterNamePartial?: string, filterVersion?: string, filterType?: string, filterOs?: string, filterMaintenance?: boolean, filterStatus?: string, filterInUse?: boolean, _options?: Configuration): Observable<GetBinaries200Response> {
        return this.getBinariesWithHttpInfo(app, perPage, page, sort, filterName, filterNamePartial, filterVersion, filterType, filterOs, filterMaintenance, filterStatus, filterInUse, _options).pipe(map((apiResponse: HttpInfo<GetBinaries200Response>) => apiResponse.data));
    }

    /**
     * Show a specific binary
     * @param binary The binary ID
     */
    public getBinaryByIdWithHttpInfo(binary: number, _options?: Configuration): Observable<HttpInfo<Binary>> {
        const requestContextPromise = this.requestFactory.getBinaryById(binary, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60;
     * @param [filterId] Filter by id.
     * @param [filterType] Filter by type.
     * @param [filterName] Filter by name.
     * @param [filterNamePartial] Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;.
     * @param [filterUrl] Filter by url.
     * @param [filterOrganization] Filter by organization.
     */
    public getDockerRegistriesWithHttpInfo(perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterType?: string, filterName?: string, filterNamePartial?: string, filterUrl?: string, filterOrganization?: string, _options?: Configuration): Observable<HttpInfo<GetDockerRegistries200Response>> {
        const requestContextPromise = this.requestFactory.getDockerRegistries(perPage, page, sort, filterId, filterType, filterName, filterNamePartial, filterUrl, filterOrganization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDockerRegistriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show all docker registries
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60;
     * @param [filterId] Filter by id.
     * @param [filterType] Filter by type.
     * @param [filterName] Filter by name.
     * @param [filterNamePartial] Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;.
     * @param [filterUrl] Filter by url.
     * @param [filterOrganization] Filter by organization.
     */
    public getDockerRegistries(perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterType?: string, filterName?: string, filterNamePartial?: string, filterUrl?: string, filterOrganization?: string, _options?: Configuration): Observable<GetDockerRegistries200Response> {
        return this.getDockerRegistriesWithHttpInfo(perPage, page, sort, filterId, filterType, filterName, filterNamePartial, filterUrl, filterOrganization, _options).pipe(map((apiResponse: HttpInfo<GetDockerRegistries200Response>) => apiResponse.data));
    }

    /**
     * Display a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public getDockerRegistryByIdWithHttpInfo(dockerRegistry: number, _options?: Configuration): Observable<HttpInfo<DockerRegistry>> {
        const requestContextPromise = this.requestFactory.getDockerRegistryById(dockerRegistry, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
     * Display the latest backup
     * @param dockerService The docker service ID
     */
    public getLatestBackupWithHttpInfo(dockerService: number, _options?: Configuration): Observable<HttpInfo<Backup>> {
        const requestContextPromise = this.requestFactory.getLatestBackup(dockerService, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLatestBackupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Display the latest backup
     * @param dockerService The docker service ID
     */
    public getLatestBackup(dockerService: number, _options?: Configuration): Observable<Backup> {
        return this.getLatestBackupWithHttpInfo(dockerService, _options).pipe(map((apiResponse: HttpInfo<Backup>) => apiResponse.data));
    }

    /**
     * Show a unique listing of locations based on active and ready worker nodes
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     */
    public getLocationsWithHttpInfo(perPage?: number, page?: number, _options?: Configuration): Observable<HttpInfo<GetLocations200Response>> {
        const requestContextPromise = this.requestFactory.getLocations(perPage, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLocationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show a unique listing of locations based on active and ready worker nodes
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     */
    public getLocations(perPage?: number, page?: number, _options?: Configuration): Observable<GetLocations200Response> {
        return this.getLocationsWithHttpInfo(perPage, page, _options).pipe(map((apiResponse: HttpInfo<GetLocations200Response>) => apiResponse.data));
    }

    /**
     * Show a specified resource package
     * @param resourcePackage The resource package ID
     */
    public getResourcePackageByIdWithHttpInfo(resourcePackage: number, _options?: Configuration): Observable<HttpInfo<ResourcePackage>> {
        const requestContextPromise = this.requestFactory.getResourcePackageById(resourcePackage, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60;
     * @param [filterId] Filter by id.
     * @param [filterName] Filter by name.
     * @param [filterNamePartial] Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;.
     * @param [filterSlug] Filter by slug.
     * @param [filterType] Filter by type.
     * @param [filterCpuLimit] Filter by CPU limit. Maps to the &#x60;cpu_limit&#x60; column.
     * @param [filterCpuReservation] Filter by CPU reservation. Maps to the &#x60;cpu_reservation&#x60; column.
     * @param [filterMemoryLimitMiB] Filter by memory limit in MiB. Maps to the &#x60;memory_limit_mebibytes&#x60; column.
     * @param [filterMemoryReservationMiB] Filter by memory reservation in MiB. Maps to the &#x60;memory_reservation_mebibytes&#x60; column.
     */
    public getResourcePackagesWithHttpInfo(perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterName?: string, filterNamePartial?: string, filterSlug?: string, filterType?: string, filterCpuLimit?: number, filterCpuReservation?: number, filterMemoryLimitMiB?: number, filterMemoryReservationMiB?: number, _options?: Configuration): Observable<HttpInfo<GetResourcePackages200Response>> {
        const requestContextPromise = this.requestFactory.getResourcePackages(perPage, page, sort, filterId, filterName, filterNamePartial, filterSlug, filterType, filterCpuLimit, filterCpuReservation, filterMemoryLimitMiB, filterMemoryReservationMiB, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getResourcePackagesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show all available resource packages
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60;
     * @param [filterId] Filter by id.
     * @param [filterName] Filter by name.
     * @param [filterNamePartial] Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;.
     * @param [filterSlug] Filter by slug.
     * @param [filterType] Filter by type.
     * @param [filterCpuLimit] Filter by CPU limit. Maps to the &#x60;cpu_limit&#x60; column.
     * @param [filterCpuReservation] Filter by CPU reservation. Maps to the &#x60;cpu_reservation&#x60; column.
     * @param [filterMemoryLimitMiB] Filter by memory limit in MiB. Maps to the &#x60;memory_limit_mebibytes&#x60; column.
     * @param [filterMemoryReservationMiB] Filter by memory reservation in MiB. Maps to the &#x60;memory_reservation_mebibytes&#x60; column.
     */
    public getResourcePackages(perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterName?: string, filterNamePartial?: string, filterSlug?: string, filterType?: string, filterCpuLimit?: number, filterCpuReservation?: number, filterMemoryLimitMiB?: number, filterMemoryReservationMiB?: number, _options?: Configuration): Observable<GetResourcePackages200Response> {
        return this.getResourcePackagesWithHttpInfo(perPage, page, sort, filterId, filterName, filterNamePartial, filterSlug, filterType, filterCpuLimit, filterCpuReservation, filterMemoryLimitMiB, filterMemoryReservationMiB, _options).pipe(map((apiResponse: HttpInfo<GetResourcePackages200Response>) => apiResponse.data));
    }

    /**
     * Generate a presigned URL for downloading the latest backup from AWS S3
     * @param dockerService The docker service ID
     */
    public getServerBackupDownloadUrlWithHttpInfo(dockerService: number, _options?: Configuration): Observable<HttpInfo<BackupDownload>> {
        const requestContextPromise = this.requestFactory.getServerBackupDownloadUrl(dockerService, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServerBackupDownloadUrlWithHttpInfo(rsp)));
            }));
    }

    /**
     * Generate a presigned URL for downloading the latest backup from AWS S3
     * @param dockerService The docker service ID
     */
    public getServerBackupDownloadUrl(dockerService: number, _options?: Configuration): Observable<BackupDownload> {
        return this.getServerBackupDownloadUrlWithHttpInfo(dockerService, _options).pipe(map((apiResponse: HttpInfo<BackupDownload>) => apiResponse.data));
    }

    /**
     * Display a specific service
     * @param app The app ID
     * @param dockerService The docker service ID
     */
    public getServerByIdWithHttpInfo(app: number, dockerService: number, _options?: Configuration): Observable<HttpInfo<Server>> {
        const requestContextPromise = this.requestFactory.getServerById(app, dockerService, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServerByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Display a specific service
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
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60;
     * @param [filterId] Filter by id.
     * @param [filterBinaryId] Filter by binary id.
     * @param [filterName] Filter by name.
     * @param [filterNamePartial] Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;.
     * @param [filterCommand] Filter by command.
     * @param [filterArgs] Filter by arguments.
     * @param [filterNotes] Filter by notes.
     * @param [filterStatus] Filter by status.
     * @param [filterMaintenance] Filter by maintenance status.
     * @param [filterResourcePackageSlug] Filter by resource package slug.
     * @param [filterInUse] Filter by in use flag.
     * @param [filterBinaryName] Filter by binary name.
     * @param [filterBinaryVersion] Filter by binary version.
     * @param [filterBinaryType] Filter by binary type.
     * @param [filterBinaryOs] Filter by binary operating system.
     */
    public getServerConfigsWithHttpInfo(app: number, perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterBinaryId?: number, filterName?: string, filterNamePartial?: string, filterCommand?: string, filterArgs?: string, filterNotes?: string, filterStatus?: string, filterMaintenance?: boolean, filterResourcePackageSlug?: string, filterInUse?: boolean, filterBinaryName?: string, filterBinaryVersion?: string, filterBinaryType?: string, filterBinaryOs?: string, _options?: Configuration): Observable<HttpInfo<GetServerConfigs200Response>> {
        const requestContextPromise = this.requestFactory.getServerConfigs(app, perPage, page, sort, filterId, filterBinaryId, filterName, filterNamePartial, filterCommand, filterArgs, filterNotes, filterStatus, filterMaintenance, filterResourcePackageSlug, filterInUse, filterBinaryName, filterBinaryVersion, filterBinaryType, filterBinaryOs, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServerConfigsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show all server configs
     * @param app The app ID
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60;
     * @param [filterId] Filter by id.
     * @param [filterBinaryId] Filter by binary id.
     * @param [filterName] Filter by name.
     * @param [filterNamePartial] Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;.
     * @param [filterCommand] Filter by command.
     * @param [filterArgs] Filter by arguments.
     * @param [filterNotes] Filter by notes.
     * @param [filterStatus] Filter by status.
     * @param [filterMaintenance] Filter by maintenance status.
     * @param [filterResourcePackageSlug] Filter by resource package slug.
     * @param [filterInUse] Filter by in use flag.
     * @param [filterBinaryName] Filter by binary name.
     * @param [filterBinaryVersion] Filter by binary version.
     * @param [filterBinaryType] Filter by binary type.
     * @param [filterBinaryOs] Filter by binary operating system.
     */
    public getServerConfigs(app: number, perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterBinaryId?: number, filterName?: string, filterNamePartial?: string, filterCommand?: string, filterArgs?: string, filterNotes?: string, filterStatus?: string, filterMaintenance?: boolean, filterResourcePackageSlug?: string, filterInUse?: boolean, filterBinaryName?: string, filterBinaryVersion?: string, filterBinaryType?: string, filterBinaryOs?: string, _options?: Configuration): Observable<GetServerConfigs200Response> {
        return this.getServerConfigsWithHttpInfo(app, perPage, page, sort, filterId, filterBinaryId, filterName, filterNamePartial, filterCommand, filterArgs, filterNotes, filterStatus, filterMaintenance, filterResourcePackageSlug, filterInUse, filterBinaryName, filterBinaryVersion, filterBinaryType, filterBinaryOs, _options).pipe(map((apiResponse: HttpInfo<GetServerConfigs200Response>) => apiResponse.data));
    }

    /**
     * Get stdout and stderr logs from the latest gameserver task
     * @param dockerService The docker service ID
     * @param [since] A duration used to calculate start relative to end. If end is in the future, start is calculated as this duration before now. Any value specified for start supersedes this parameter. Default: 7d
     * @param [limit] The max number of entries to return. Default: 100
     * @param [direction] Determines the sort order of logs. Supported values are forward or backward. Default: forward
     * @param [streamSource] Only return logs filtered by stream source like stdout or stderr. Default: null
     */
    public getServerLogsWithHttpInfo(dockerService: number, since?: string, limit?: number, direction?: string, streamSource?: string, _options?: Configuration): Observable<HttpInfo<ServiceLogs>> {
        const requestContextPromise = this.requestFactory.getServerLogs(dockerService, since, limit, direction, streamSource, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServerLogsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get stdout and stderr logs from the latest gameserver task
     * @param dockerService The docker service ID
     * @param [since] A duration used to calculate start relative to end. If end is in the future, start is calculated as this duration before now. Any value specified for start supersedes this parameter. Default: 7d
     * @param [limit] The max number of entries to return. Default: 100
     * @param [direction] Determines the sort order of logs. Supported values are forward or backward. Default: forward
     * @param [streamSource] Only return logs filtered by stream source like stdout or stderr. Default: null
     */
    public getServerLogs(dockerService: number, since?: string, limit?: number, direction?: string, streamSource?: string, _options?: Configuration): Observable<ServiceLogs> {
        return this.getServerLogsWithHttpInfo(dockerService, since, limit, direction, streamSource, _options).pipe(map((apiResponse: HttpInfo<ServiceLogs>) => apiResponse.data));
    }

    /**
     * Show all services
     * @param app The app ID
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [filterStatus] Filter by status.
     * @param [filterAppLocationSettingId] Filter by AppLocationSetting ID.
     * @param [filterServerConfigId] Filter by ServerConfig ID.
     * @param [filterLocationCity] Filter by location city.
     * @param [filterLocationCityDisplay] Filter by location city display name.
     * @param [filterLocationContinent] Filter by location continent.
     * @param [filterLocationCountry] Filter by location country.
     * @param [filterMetadata] Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by instance in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-instance &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-instance &#x60;&#x60;&#x60;
     */
    public getServersWithHttpInfo(app: number, perPage?: number, page?: number, filterStatus?: string, filterAppLocationSettingId?: number, filterServerConfigId?: number, filterLocationCity?: string, filterLocationCityDisplay?: string, filterLocationContinent?: string, filterLocationCountry?: string, filterMetadata?: string, sort?: Array<string>, _options?: Configuration): Observable<HttpInfo<GetServers200Response>> {
        const requestContextPromise = this.requestFactory.getServers(app, perPage, page, filterStatus, filterAppLocationSettingId, filterServerConfigId, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterMetadata, sort, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show all services
     * @param app The app ID
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [filterStatus] Filter by status.
     * @param [filterAppLocationSettingId] Filter by AppLocationSetting ID.
     * @param [filterServerConfigId] Filter by ServerConfig ID.
     * @param [filterLocationCity] Filter by location city.
     * @param [filterLocationCityDisplay] Filter by location city display name.
     * @param [filterLocationContinent] Filter by location continent.
     * @param [filterLocationCountry] Filter by location country.
     * @param [filterMetadata] Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by instance in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-instance &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-instance &#x60;&#x60;&#x60;
     */
    public getServers(app: number, perPage?: number, page?: number, filterStatus?: string, filterAppLocationSettingId?: number, filterServerConfigId?: number, filterLocationCity?: string, filterLocationCityDisplay?: string, filterLocationContinent?: string, filterLocationCountry?: string, filterMetadata?: string, sort?: Array<string>, _options?: Configuration): Observable<GetServers200Response> {
        return this.getServersWithHttpInfo(app, perPage, page, filterStatus, filterAppLocationSettingId, filterServerConfigId, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterMetadata, sort, _options).pipe(map((apiResponse: HttpInfo<GetServers200Response>) => apiResponse.data));
    }

    /**
     * List all available tagged images
     * @param dockerRegistry The docker registry ID
     */
    public getTaggedImagesWithHttpInfo(dockerRegistry: number, _options?: Configuration): Observable<HttpInfo<GetTaggedImages200Response>> {
        const requestContextPromise = this.requestFactory.getTaggedImages(dockerRegistry, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
     * Refresh token
     */
    public refreshAuthTokenWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Auth>> {
        const requestContextPromise = this.requestFactory.refreshAuthToken(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.refreshAuthTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Refresh token
     */
    public refreshAuthToken(_options?: Configuration): Observable<Auth> {
        return this.refreshAuthTokenWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Auth>) => apiResponse.data));
    }

    /**
     * Refresh a binary and the related entity
     * @param binary The binary ID
     */
    public refreshBinaryWithHttpInfo(binary: number, _options?: Configuration): Observable<HttpInfo<Binary>> {
        const requestContextPromise = this.requestFactory.refreshBinary(binary, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
     * Restart the service
     * @param dockerService The docker service ID
     */
    public restartServerWithHttpInfo(dockerService: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.restartServer(dockerService, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restartServerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Restart the service
     * @param dockerService The docker service ID
     */
    public restartServer(dockerService: number, _options?: Configuration): Observable<any> {
        return this.restartServerWithHttpInfo(dockerService, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Restore the latest backup
     * @param dockerService The docker service ID
     */
    public restoreBackupWithHttpInfo(dockerService: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.restoreBackup(dockerService, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restoreBackupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Restore the latest backup
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
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
     * @param [os] The operating system of the binary
     */
    public steamGetLauncherWithHttpInfo(appId: number, os?: OperatingSystem, _options?: Configuration): Observable<HttpInfo<Array<SteamLauncher>>> {
        const requestContextPromise = this.requestFactory.steamGetLauncher(appId, os, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.steamGetLauncherWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get launchers for a specific steamworks app ID, optionally filtered by OS
     * @param appId The steamworks app id
     * @param [os] The operating system of the binary
     */
    public steamGetLauncher(appId: number, os?: OperatingSystem, _options?: Configuration): Observable<Array<SteamLauncher>> {
        return this.steamGetLauncherWithHttpInfo(appId, os, _options).pipe(map((apiResponse: HttpInfo<Array<SteamLauncher>>) => apiResponse.data));
    }

    /**
     * Create a Minecraft template app
     * @param [storeMinecraftTemplateRequest]
     */
    public templateAppMinecraftStoreWithHttpInfo(storeMinecraftTemplateRequest?: StoreMinecraftTemplateRequest, _options?: Configuration): Observable<HttpInfo<App>> {
        const requestContextPromise = this.requestFactory.templateAppMinecraftStore(storeMinecraftTemplateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.templateAppMinecraftStoreWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a Minecraft template app
     * @param [storeMinecraftTemplateRequest]
     */
    public templateAppMinecraftStore(storeMinecraftTemplateRequest?: StoreMinecraftTemplateRequest, _options?: Configuration): Observable<App> {
        return this.templateAppMinecraftStoreWithHttpInfo(storeMinecraftTemplateRequest, _options).pipe(map((apiResponse: HttpInfo<App>) => apiResponse.data));
    }

    /**
     * Create a Palworld template app
     * @param [storePalworldTemplateRequest]
     */
    public templateAppPalworldStoreWithHttpInfo(storePalworldTemplateRequest?: StorePalworldTemplateRequest, _options?: Configuration): Observable<HttpInfo<App>> {
        const requestContextPromise = this.requestFactory.templateAppPalworldStore(storePalworldTemplateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.templateAppPalworldStoreWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a Palworld template app
     * @param [storePalworldTemplateRequest]
     */
    public templateAppPalworldStore(storePalworldTemplateRequest?: StorePalworldTemplateRequest, _options?: Configuration): Observable<App> {
        return this.templateAppPalworldStoreWithHttpInfo(storePalworldTemplateRequest, _options).pipe(map((apiResponse: HttpInfo<App>) => apiResponse.data));
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
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
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
