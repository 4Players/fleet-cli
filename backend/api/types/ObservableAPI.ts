import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration.ts'
import type { Middleware } from '../middleware.ts';
import { Observable, of, from } from '../rxjsStub.ts';
import {mergeMap, map} from  '../rxjsStub.ts';
import { AllocateAppLocationSettingAutoscalingRequest } from '../models/AllocateAppLocationSettingAutoscalingRequest.ts';
import { AllocateAppLocationSettingAutoscalingRequestFilter } from '../models/AllocateAppLocationSettingAutoscalingRequestFilter.ts';
import { App } from '../models/App.ts';
import { AppBillingState } from '../models/AppBillingState.ts';
import { AppLocationSetting } from '../models/AppLocationSetting.ts';
import { AppLocationSettingAutoscaling } from '../models/AppLocationSettingAutoscaling.ts';
import { AppLocationSettingCapacity } from '../models/AppLocationSettingCapacity.ts';
import { AppLocationSettingStatus } from '../models/AppLocationSettingStatus.ts';
import { AppStatus } from '../models/AppStatus.ts';
import { Architecture } from '../models/Architecture.ts';
import { Auth } from '../models/Auth.ts';
import { AuthFsidRequest } from '../models/AuthFsidRequest.ts';
import { AuthRequest } from '../models/AuthRequest.ts';
import { Backup } from '../models/Backup.ts';
import { BackupDownload } from '../models/BackupDownload.ts';
import { BinariesMetadataSet200Response } from '../models/BinariesMetadataSet200Response.ts';
import { Binary } from '../models/Binary.ts';
import { BinaryStatus } from '../models/BinaryStatus.ts';
import { BinaryType } from '../models/BinaryType.ts';
import { CheckCapacityAppLocationSettingRequest } from '../models/CheckCapacityAppLocationSettingRequest.ts';
import { CheckCapacityAppLocationSettingRequestPlacement } from '../models/CheckCapacityAppLocationSettingRequestPlacement.ts';
import { CheckCapacityAppLocationSettingRequestPlacementConstraints } from '../models/CheckCapacityAppLocationSettingRequestPlacementConstraints.ts';
import { ConfigFile } from '../models/ConfigFile.ts';
import { CreateBackupDockerServiceRequest } from '../models/CreateBackupDockerServiceRequest.ts';
import { CreateUpdateAutoscaling } from '../models/CreateUpdateAutoscaling.ts';
import { CreateUpdateDockerImage } from '../models/CreateUpdateDockerImage.ts';
import { CreateUpdatePlacement } from '../models/CreateUpdatePlacement.ts';
import { CreateUpdateSteam } from '../models/CreateUpdateSteam.ts';
import { DnsMode } from '../models/DnsMode.ts';
import { DockerImage } from '../models/DockerImage.ts';
import { DockerRegistry } from '../models/DockerRegistry.ts';
import { DockerRegistryType } from '../models/DockerRegistryType.ts';
import { DockerServiceAutoscaling } from '../models/DockerServiceAutoscaling.ts';
import { DockerServiceAutoscalingStatus } from '../models/DockerServiceAutoscalingStatus.ts';
import { DockerServiceDnsReachable } from '../models/DockerServiceDnsReachable.ts';
import { EnvironmentVariable } from '../models/EnvironmentVariable.ts';
import { EnvironmentVariableDefinition } from '../models/EnvironmentVariableDefinition.ts';
import { EnvironmentVariableType } from '../models/EnvironmentVariableType.ts';
import { GetAppLocationSettingById200Response } from '../models/GetAppLocationSettingById200Response.ts';
import { GetAppLocationSettings200Response } from '../models/GetAppLocationSettings200Response.ts';
import { GetAppLocationSettings200ResponseLinks } from '../models/GetAppLocationSettings200ResponseLinks.ts';
import { GetAppLocationSettings200ResponseMeta } from '../models/GetAppLocationSettings200ResponseMeta.ts';
import { GetAppLocationSettings200ResponseMetaLinksInner } from '../models/GetAppLocationSettings200ResponseMetaLinksInner.ts';
import { GetAppWallets200Response } from '../models/GetAppWallets200Response.ts';
import { GetApps200Response } from '../models/GetApps200Response.ts';
import { GetAuthTokenViaFsid403Response } from '../models/GetAuthTokenViaFsid403Response.ts';
import { GetBackups200Response } from '../models/GetBackups200Response.ts';
import { GetBinaries200Response } from '../models/GetBinaries200Response.ts';
import { GetDockerRegistries200Response } from '../models/GetDockerRegistries200Response.ts';
import { GetLocations200Response } from '../models/GetLocations200Response.ts';
import { GetResourcePackages200Response } from '../models/GetResourcePackages200Response.ts';
import { GetServerConfigById200Response } from '../models/GetServerConfigById200Response.ts';
import { GetServerConfigs200Response } from '../models/GetServerConfigs200Response.ts';
import { GetServers200Response } from '../models/GetServers200Response.ts';
import { GetTaggedImages200Response } from '../models/GetTaggedImages200Response.ts';
import { InlineObject } from '../models/InlineObject.ts';
import { Location } from '../models/Location.ts';
import { LocationIndex } from '../models/LocationIndex.ts';
import { LocationLoad } from '../models/LocationLoad.ts';
import { MetricData } from '../models/MetricData.ts';
import { MetricInstantData } from '../models/MetricInstantData.ts';
import { MetricInstantResponse } from '../models/MetricInstantResponse.ts';
import { MetricInstantResult } from '../models/MetricInstantResult.ts';
import { MetricRangeResponse } from '../models/MetricRangeResponse.ts';
import { MetricTimeResult } from '../models/MetricTimeResult.ts';
import { Mount } from '../models/Mount.ts';
import { Node } from '../models/Node.ts';
import { OccupiedLocationRequest } from '../models/OccupiedLocationRequest.ts';
import { OperatingSystem } from '../models/OperatingSystem.ts';
import { PatchAppLocationSettingMetadataRequest } from '../models/PatchAppLocationSettingMetadataRequest.ts';
import { PatchAppMetadataRequest } from '../models/PatchAppMetadataRequest.ts';
import { PatchBinaryMetadataRequest } from '../models/PatchBinaryMetadataRequest.ts';
import { PatchDockerRegistryMetadataRequest } from '../models/PatchDockerRegistryMetadataRequest.ts';
import { PatchMetadataRequest } from '../models/PatchMetadataRequest.ts';
import { PatchServerConfigMetadataRequest } from '../models/PatchServerConfigMetadataRequest.ts';
import { Placement } from '../models/Placement.ts';
import { Port } from '../models/Port.ts';
import { PortDefinition } from '../models/PortDefinition.ts';
import { PortDefinitionRequest } from '../models/PortDefinitionRequest.ts';
import { Protocol } from '../models/Protocol.ts';
import { ResourcePackage } from '../models/ResourcePackage.ts';
import { ResourcePackageType } from '../models/ResourcePackageType.ts';
import { RestartPolicy } from '../models/RestartPolicy.ts';
import { RestartPolicyCondition } from '../models/RestartPolicyCondition.ts';
import { SecretFile } from '../models/SecretFile.ts';
import { Server } from '../models/Server.ts';
import { ServerConfig } from '../models/ServerConfig.ts';
import { ServerConfigStatus } from '../models/ServerConfigStatus.ts';
import { ServiceLogs } from '../models/ServiceLogs.ts';
import { SetAppLocationSettingMetadataRequest } from '../models/SetAppLocationSettingMetadataRequest.ts';
import { SetAppMetadataRequest } from '../models/SetAppMetadataRequest.ts';
import { SetBinaryMetadataRequest } from '../models/SetBinaryMetadataRequest.ts';
import { SetDockerRegistryMetadataRequest } from '../models/SetDockerRegistryMetadataRequest.ts';
import { SetMetadataRequest } from '../models/SetMetadataRequest.ts';
import { SetServerConfigMetadataRequest } from '../models/SetServerConfigMetadataRequest.ts';
import { Steam } from '../models/Steam.ts';
import { SteamBranch } from '../models/SteamBranch.ts';
import { SteamLauncher } from '../models/SteamLauncher.ts';
import { SteamRuntime } from '../models/SteamRuntime.ts';
import { StoreAppLocationSettingRequest } from '../models/StoreAppLocationSettingRequest.ts';
import { StoreAppRequest } from '../models/StoreAppRequest.ts';
import { StoreBinaryRequest } from '../models/StoreBinaryRequest.ts';
import { StoreDockerRegistryRequest } from '../models/StoreDockerRegistryRequest.ts';
import { StoreMinecraftTemplateRequest } from '../models/StoreMinecraftTemplateRequest.ts';
import { StoreOpenClawTemplateRequest } from '../models/StoreOpenClawTemplateRequest.ts';
import { StoreOpenClawTemplateRequestApp } from '../models/StoreOpenClawTemplateRequestApp.ts';
import { StoreOpenClawTemplateRequestAppLocationSetting } from '../models/StoreOpenClawTemplateRequestAppLocationSetting.ts';
import { StoreOpenClawTemplateRequestPayment } from '../models/StoreOpenClawTemplateRequestPayment.ts';
import { StoreOpenClawTemplateRequestServerConfig } from '../models/StoreOpenClawTemplateRequestServerConfig.ts';
import { StorePalworldTemplateRequest } from '../models/StorePalworldTemplateRequest.ts';
import { StoreServerConfigRequest } from '../models/StoreServerConfigRequest.ts';
import { TaggedImage } from '../models/TaggedImage.ts';
import { TaggedImageMetaData } from '../models/TaggedImageMetaData.ts';
import { TemplateApp } from '../models/TemplateApp.ts';
import { TemplateAppLocationSetting } from '../models/TemplateAppLocationSetting.ts';
import { TemplateAppResult } from '../models/TemplateAppResult.ts';
import { TemplateBinary } from '../models/TemplateBinary.ts';
import { TemplateServerConfig } from '../models/TemplateServerConfig.ts';
import { UpdateAppLocationSetting402Response } from '../models/UpdateAppLocationSetting402Response.ts';
import { UpdateAppLocationSettingRequest } from '../models/UpdateAppLocationSettingRequest.ts';
import { UpdateAppRequest } from '../models/UpdateAppRequest.ts';
import { UpdateBinaryRequest } from '../models/UpdateBinaryRequest.ts';
import { UpdateDockerRegistryRequest } from '../models/UpdateDockerRegistryRequest.ts';
import { UpdateServerConfigRequest } from '../models/UpdateServerConfigRequest.ts';
import { Wallet } from '../models/Wallet.ts';
import { WalletCurrency } from '../models/WalletCurrency.ts';
import { WalletCurrencyCode } from '../models/WalletCurrencyCode.ts';
import { WalletScope } from '../models/WalletScope.ts';

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
     * Allocate a ready autoscaling instance
     * @param appLocationSetting The app location setting ID
     * @param [allocateAppLocationSettingAutoscalingRequest]
     */
    public appLocationSettingsAutoscalingAllocateWithHttpInfo(appLocationSetting: number, allocateAppLocationSettingAutoscalingRequest?: AllocateAppLocationSettingAutoscalingRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Server>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.appLocationSettingsAutoscalingAllocate(appLocationSetting, allocateAppLocationSettingAutoscalingRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appLocationSettingsAutoscalingAllocateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Allocate a ready autoscaling instance
     * @param appLocationSetting The app location setting ID
     * @param [allocateAppLocationSettingAutoscalingRequest]
     */
    public appLocationSettingsAutoscalingAllocate(appLocationSetting: number, allocateAppLocationSettingAutoscalingRequest?: AllocateAppLocationSettingAutoscalingRequest, _options?: ConfigurationOptions): Observable<Server> {
        return this.appLocationSettingsAutoscalingAllocateWithHttpInfo(appLocationSetting, allocateAppLocationSettingAutoscalingRequest, _options).pipe(map((apiResponse: HttpInfo<Server>) => apiResponse.data));
    }

    /**
     * Delete all metadata
     * @param appLocationSetting The app location setting ID
     */
    public appLocationSettingsMetadataDeleteAllWithHttpInfo(appLocationSetting: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetAppLocationSettingById200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.appLocationSettingsMetadataDeleteAll(appLocationSetting, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appLocationSettingsMetadataDeleteAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete all metadata
     * @param appLocationSetting The app location setting ID
     */
    public appLocationSettingsMetadataDeleteAll(appLocationSetting: number, _options?: ConfigurationOptions): Observable<GetAppLocationSettingById200Response> {
        return this.appLocationSettingsMetadataDeleteAllWithHttpInfo(appLocationSetting, _options).pipe(map((apiResponse: HttpInfo<GetAppLocationSettingById200Response>) => apiResponse.data));
    }

    /**
     * Delete metadata keys
     * @param appLocationSetting The app location setting ID
     * @param metadata
     */
    public appLocationSettingsMetadataDeleteKeysWithHttpInfo(appLocationSetting: number, metadata: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<GetAppLocationSettingById200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.appLocationSettingsMetadataDeleteKeys(appLocationSetting, metadata, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appLocationSettingsMetadataDeleteKeysWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete metadata keys
     * @param appLocationSetting The app location setting ID
     * @param metadata
     */
    public appLocationSettingsMetadataDeleteKeys(appLocationSetting: number, metadata: Array<string>, _options?: ConfigurationOptions): Observable<GetAppLocationSettingById200Response> {
        return this.appLocationSettingsMetadataDeleteKeysWithHttpInfo(appLocationSetting, metadata, _options).pipe(map((apiResponse: HttpInfo<GetAppLocationSettingById200Response>) => apiResponse.data));
    }

    /**
     * Replaces the entire metadata.
     * Set metadata
     * @param appLocationSetting The app location setting ID
     * @param [setAppLocationSettingMetadataRequest]
     */
    public appLocationSettingsMetadataSetWithHttpInfo(appLocationSetting: number, setAppLocationSettingMetadataRequest?: SetAppLocationSettingMetadataRequest, _options?: ConfigurationOptions): Observable<HttpInfo<GetAppLocationSettingById200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.appLocationSettingsMetadataSet(appLocationSetting, setAppLocationSettingMetadataRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appLocationSettingsMetadataSetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replaces the entire metadata.
     * Set metadata
     * @param appLocationSetting The app location setting ID
     * @param [setAppLocationSettingMetadataRequest]
     */
    public appLocationSettingsMetadataSet(appLocationSetting: number, setAppLocationSettingMetadataRequest?: SetAppLocationSettingMetadataRequest, _options?: ConfigurationOptions): Observable<GetAppLocationSettingById200Response> {
        return this.appLocationSettingsMetadataSetWithHttpInfo(appLocationSetting, setAppLocationSettingMetadataRequest, _options).pipe(map((apiResponse: HttpInfo<GetAppLocationSettingById200Response>) => apiResponse.data));
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting other metadata.
     * Update metadata
     * @param appLocationSetting The app location setting ID
     * @param [patchAppLocationSettingMetadataRequest]
     */
    public appLocationSettingsMetadataUpdateWithHttpInfo(appLocationSetting: number, patchAppLocationSettingMetadataRequest?: PatchAppLocationSettingMetadataRequest, _options?: ConfigurationOptions): Observable<HttpInfo<GetAppLocationSettingById200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.appLocationSettingsMetadataUpdate(appLocationSetting, patchAppLocationSettingMetadataRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appLocationSettingsMetadataUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting other metadata.
     * Update metadata
     * @param appLocationSetting The app location setting ID
     * @param [patchAppLocationSettingMetadataRequest]
     */
    public appLocationSettingsMetadataUpdate(appLocationSetting: number, patchAppLocationSettingMetadataRequest?: PatchAppLocationSettingMetadataRequest, _options?: ConfigurationOptions): Observable<GetAppLocationSettingById200Response> {
        return this.appLocationSettingsMetadataUpdateWithHttpInfo(appLocationSetting, patchAppLocationSettingMetadataRequest, _options).pipe(map((apiResponse: HttpInfo<GetAppLocationSettingById200Response>) => apiResponse.data));
    }

    /**
     * Delete all metadata
     * @param app The app ID
     */
    public appsMetadataDeleteAllWithHttpInfo(app: number, _options?: ConfigurationOptions): Observable<HttpInfo<App>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.appsMetadataDeleteAll(app, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appsMetadataDeleteAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete all metadata
     * @param app The app ID
     */
    public appsMetadataDeleteAll(app: number, _options?: ConfigurationOptions): Observable<App> {
        return this.appsMetadataDeleteAllWithHttpInfo(app, _options).pipe(map((apiResponse: HttpInfo<App>) => apiResponse.data));
    }

    /**
     * Delete metadata keys
     * @param app The app ID
     * @param metadata
     */
    public appsMetadataDeleteKeysWithHttpInfo(app: number, metadata: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<App>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.appsMetadataDeleteKeys(app, metadata, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appsMetadataDeleteKeysWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete metadata keys
     * @param app The app ID
     * @param metadata
     */
    public appsMetadataDeleteKeys(app: number, metadata: Array<string>, _options?: ConfigurationOptions): Observable<App> {
        return this.appsMetadataDeleteKeysWithHttpInfo(app, metadata, _options).pipe(map((apiResponse: HttpInfo<App>) => apiResponse.data));
    }

    /**
     * Replaces the entire metadata.
     * Set metadata
     * @param app The app ID
     * @param [setAppMetadataRequest]
     */
    public appsMetadataSetWithHttpInfo(app: number, setAppMetadataRequest?: SetAppMetadataRequest, _options?: ConfigurationOptions): Observable<HttpInfo<App>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.appsMetadataSet(app, setAppMetadataRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appsMetadataSetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replaces the entire metadata.
     * Set metadata
     * @param app The app ID
     * @param [setAppMetadataRequest]
     */
    public appsMetadataSet(app: number, setAppMetadataRequest?: SetAppMetadataRequest, _options?: ConfigurationOptions): Observable<App> {
        return this.appsMetadataSetWithHttpInfo(app, setAppMetadataRequest, _options).pipe(map((apiResponse: HttpInfo<App>) => apiResponse.data));
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting other metadata.
     * Update metadata
     * @param app The app ID
     * @param [patchAppMetadataRequest]
     */
    public appsMetadataUpdateWithHttpInfo(app: number, patchAppMetadataRequest?: PatchAppMetadataRequest, _options?: ConfigurationOptions): Observable<HttpInfo<App>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.appsMetadataUpdate(app, patchAppMetadataRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appsMetadataUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting other metadata.
     * Update metadata
     * @param app The app ID
     * @param [patchAppMetadataRequest]
     */
    public appsMetadataUpdate(app: number, patchAppMetadataRequest?: PatchAppMetadataRequest, _options?: ConfigurationOptions): Observable<App> {
        return this.appsMetadataUpdateWithHttpInfo(app, patchAppMetadataRequest, _options).pipe(map((apiResponse: HttpInfo<App>) => apiResponse.data));
    }

    /**
     * Delete all metadata
     * @param binary The binary ID
     */
    public binariesMetadataDeleteAllWithHttpInfo(binary: number, _options?: ConfigurationOptions): Observable<HttpInfo<BinariesMetadataSet200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.binariesMetadataDeleteAll(binary, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.binariesMetadataDeleteAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete all metadata
     * @param binary The binary ID
     */
    public binariesMetadataDeleteAll(binary: number, _options?: ConfigurationOptions): Observable<BinariesMetadataSet200Response> {
        return this.binariesMetadataDeleteAllWithHttpInfo(binary, _options).pipe(map((apiResponse: HttpInfo<BinariesMetadataSet200Response>) => apiResponse.data));
    }

    /**
     * Delete metadata keys
     * @param binary The binary ID
     * @param metadata
     */
    public binariesMetadataDeleteKeysWithHttpInfo(binary: number, metadata: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<BinariesMetadataSet200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.binariesMetadataDeleteKeys(binary, metadata, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.binariesMetadataDeleteKeysWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete metadata keys
     * @param binary The binary ID
     * @param metadata
     */
    public binariesMetadataDeleteKeys(binary: number, metadata: Array<string>, _options?: ConfigurationOptions): Observable<BinariesMetadataSet200Response> {
        return this.binariesMetadataDeleteKeysWithHttpInfo(binary, metadata, _options).pipe(map((apiResponse: HttpInfo<BinariesMetadataSet200Response>) => apiResponse.data));
    }

    /**
     * Replaces the entire metadata.
     * Set metadata
     * @param binary The binary ID
     * @param [setBinaryMetadataRequest]
     */
    public binariesMetadataSetWithHttpInfo(binary: number, setBinaryMetadataRequest?: SetBinaryMetadataRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BinariesMetadataSet200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.binariesMetadataSet(binary, setBinaryMetadataRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.binariesMetadataSetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replaces the entire metadata.
     * Set metadata
     * @param binary The binary ID
     * @param [setBinaryMetadataRequest]
     */
    public binariesMetadataSet(binary: number, setBinaryMetadataRequest?: SetBinaryMetadataRequest, _options?: ConfigurationOptions): Observable<BinariesMetadataSet200Response> {
        return this.binariesMetadataSetWithHttpInfo(binary, setBinaryMetadataRequest, _options).pipe(map((apiResponse: HttpInfo<BinariesMetadataSet200Response>) => apiResponse.data));
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting other metadata.
     * Update metadata
     * @param binary The binary ID
     * @param [patchBinaryMetadataRequest]
     */
    public binariesMetadataUpdateWithHttpInfo(binary: number, patchBinaryMetadataRequest?: PatchBinaryMetadataRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BinariesMetadataSet200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.binariesMetadataUpdate(binary, patchBinaryMetadataRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.binariesMetadataUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting other metadata.
     * Update metadata
     * @param binary The binary ID
     * @param [patchBinaryMetadataRequest]
     */
    public binariesMetadataUpdate(binary: number, patchBinaryMetadataRequest?: PatchBinaryMetadataRequest, _options?: ConfigurationOptions): Observable<BinariesMetadataSet200Response> {
        return this.binariesMetadataUpdateWithHttpInfo(binary, patchBinaryMetadataRequest, _options).pipe(map((apiResponse: HttpInfo<BinariesMetadataSet200Response>) => apiResponse.data));
    }

    /**
     * Estimate the available capacity in a location based on a ServerConfig
     * @param app The app ID
     * @param checkCapacityAppLocationSettingRequest
     */
    public checkCapacityWithHttpInfo(app: number, checkCapacityAppLocationSettingRequest: CheckCapacityAppLocationSettingRequest, _options?: ConfigurationOptions): Observable<HttpInfo<AppLocationSettingCapacity>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.checkCapacity(app, checkCapacityAppLocationSettingRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkCapacityWithHttpInfo(rsp)));
            }));
    }

    /**
     * Estimate the available capacity in a location based on a ServerConfig
     * @param app The app ID
     * @param checkCapacityAppLocationSettingRequest
     */
    public checkCapacity(app: number, checkCapacityAppLocationSettingRequest: CheckCapacityAppLocationSettingRequest, _options?: ConfigurationOptions): Observable<AppLocationSettingCapacity> {
        return this.checkCapacityWithHttpInfo(app, checkCapacityAppLocationSettingRequest, _options).pipe(map((apiResponse: HttpInfo<AppLocationSettingCapacity>) => apiResponse.data));
    }

    /**
     * Check URL reachability for service DNS URLs
     * @param app The app ID
     * @param dockerService The docker service ID
     */
    public checkServerDnsWithHttpInfo(app: number, dockerService: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<DockerServiceDnsReachable>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.checkServerDns(app, dockerService, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkServerDnsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check URL reachability for service DNS URLs
     * @param app The app ID
     * @param dockerService The docker service ID
     */
    public checkServerDns(app: number, dockerService: number, _options?: ConfigurationOptions): Observable<Array<DockerServiceDnsReachable>> {
        return this.checkServerDnsWithHttpInfo(app, dockerService, _options).pipe(map((apiResponse: HttpInfo<Array<DockerServiceDnsReachable>>) => apiResponse.data));
    }

    /**
     * Create an app
     * @param storeAppRequest
     */
    public createAppWithHttpInfo(storeAppRequest: StoreAppRequest, _options?: ConfigurationOptions): Observable<HttpInfo<App>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createApp(storeAppRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAppWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create an app
     * @param storeAppRequest
     */
    public createApp(storeAppRequest: StoreAppRequest, _options?: ConfigurationOptions): Observable<App> {
        return this.createAppWithHttpInfo(storeAppRequest, _options).pipe(map((apiResponse: HttpInfo<App>) => apiResponse.data));
    }

    /**
     * Create a new location setting
     * @param app The app ID
     * @param storeAppLocationSettingRequest
     */
    public createAppLocationSettingWithHttpInfo(app: number, storeAppLocationSettingRequest: StoreAppLocationSettingRequest, _options?: ConfigurationOptions): Observable<HttpInfo<GetAppLocationSettingById200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createAppLocationSetting(app, storeAppLocationSettingRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
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
    public createAppLocationSetting(app: number, storeAppLocationSettingRequest: StoreAppLocationSettingRequest, _options?: ConfigurationOptions): Observable<GetAppLocationSettingById200Response> {
        return this.createAppLocationSettingWithHttpInfo(app, storeAppLocationSettingRequest, _options).pipe(map((apiResponse: HttpInfo<GetAppLocationSettingById200Response>) => apiResponse.data));
    }

    /**
     * Create service backup
     * @param dockerService The docker service ID
     * @param createBackupDockerServiceRequest
     */
    public createBackupWithHttpInfo(dockerService: number, createBackupDockerServiceRequest: CreateBackupDockerServiceRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createBackup(dockerService, createBackupDockerServiceRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBackupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create service backup
     * @param dockerService The docker service ID
     * @param createBackupDockerServiceRequest
     */
    public createBackup(dockerService: number, createBackupDockerServiceRequest: CreateBackupDockerServiceRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.createBackupWithHttpInfo(dockerService, createBackupDockerServiceRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create a binary and the related entity
     * @param app The app ID
     * @param storeBinaryRequest
     */
    public createBinaryWithHttpInfo(app: number, storeBinaryRequest: StoreBinaryRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Binary>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createBinary(app, storeBinaryRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
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
    public createBinary(app: number, storeBinaryRequest: StoreBinaryRequest, _options?: ConfigurationOptions): Observable<Binary> {
        return this.createBinaryWithHttpInfo(app, storeBinaryRequest, _options).pipe(map((apiResponse: HttpInfo<Binary>) => apiResponse.data));
    }

    /**
     * Create a new docker registry
     * @param storeDockerRegistryRequest
     */
    public createDockerRegistryWithHttpInfo(storeDockerRegistryRequest: StoreDockerRegistryRequest, _options?: ConfigurationOptions): Observable<HttpInfo<DockerRegistry>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createDockerRegistry(storeDockerRegistryRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDockerRegistryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new docker registry
     * @param storeDockerRegistryRequest
     */
    public createDockerRegistry(storeDockerRegistryRequest: StoreDockerRegistryRequest, _options?: ConfigurationOptions): Observable<DockerRegistry> {
        return this.createDockerRegistryWithHttpInfo(storeDockerRegistryRequest, _options).pipe(map((apiResponse: HttpInfo<DockerRegistry>) => apiResponse.data));
    }

    /**
     * Create a Minecraft template app
     * @param [storeMinecraftTemplateRequest]
     */
    public createMinecraftTemplateWithHttpInfo(storeMinecraftTemplateRequest?: StoreMinecraftTemplateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<App>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createMinecraftTemplate(storeMinecraftTemplateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createMinecraftTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a Minecraft template app
     * @param [storeMinecraftTemplateRequest]
     */
    public createMinecraftTemplate(storeMinecraftTemplateRequest?: StoreMinecraftTemplateRequest, _options?: ConfigurationOptions): Observable<App> {
        return this.createMinecraftTemplateWithHttpInfo(storeMinecraftTemplateRequest, _options).pipe(map((apiResponse: HttpInfo<App>) => apiResponse.data));
    }

    /**
     * Create an OpenClaw template app
     * @param [storeOpenClawTemplateRequest]
     */
    public createOpenClawTemplateWithHttpInfo(storeOpenClawTemplateRequest?: StoreOpenClawTemplateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<TemplateAppResult>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createOpenClawTemplate(storeOpenClawTemplateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOpenClawTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create an OpenClaw template app
     * @param [storeOpenClawTemplateRequest]
     */
    public createOpenClawTemplate(storeOpenClawTemplateRequest?: StoreOpenClawTemplateRequest, _options?: ConfigurationOptions): Observable<TemplateAppResult> {
        return this.createOpenClawTemplateWithHttpInfo(storeOpenClawTemplateRequest, _options).pipe(map((apiResponse: HttpInfo<TemplateAppResult>) => apiResponse.data));
    }

    /**
     * Create a Palworld template app
     * @param [storePalworldTemplateRequest]
     */
    public createPalworldTemplateWithHttpInfo(storePalworldTemplateRequest?: StorePalworldTemplateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<App>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createPalworldTemplate(storePalworldTemplateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPalworldTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a Palworld template app
     * @param [storePalworldTemplateRequest]
     */
    public createPalworldTemplate(storePalworldTemplateRequest?: StorePalworldTemplateRequest, _options?: ConfigurationOptions): Observable<App> {
        return this.createPalworldTemplateWithHttpInfo(storePalworldTemplateRequest, _options).pipe(map((apiResponse: HttpInfo<App>) => apiResponse.data));
    }

    /**
     * Create a new server config
     * @param app The app ID
     * @param storeServerConfigRequest
     */
    public createServerConfigWithHttpInfo(app: number, storeServerConfigRequest: StoreServerConfigRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ServerConfig>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.createServerConfig(app, storeServerConfigRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
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
    public createServerConfig(app: number, storeServerConfigRequest: StoreServerConfigRequest, _options?: ConfigurationOptions): Observable<ServerConfig> {
        return this.createServerConfigWithHttpInfo(app, storeServerConfigRequest, _options).pipe(map((apiResponse: HttpInfo<ServerConfig>) => apiResponse.data));
    }

    /**
     * Delete a specific app
     * @param app The app ID
     */
    public deleteAppWithHttpInfo(app: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteApp(app, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAppWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a specific app
     * @param app The app ID
     */
    public deleteApp(app: number, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteAppWithHttpInfo(app, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a location setting
     * @param appLocationSetting The app location setting ID
     */
    public deleteAppLocationSettingWithHttpInfo(appLocationSetting: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteAppLocationSetting(appLocationSetting, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAppLocationSettingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a location setting
     * @param appLocationSetting The app location setting ID
     */
    public deleteAppLocationSetting(appLocationSetting: number, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteAppLocationSettingWithHttpInfo(appLocationSetting, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a specified binary
     * @param binary The binary ID
     */
    public deleteBinaryWithHttpInfo(binary: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteBinary(binary, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteBinaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a specified binary
     * @param binary The binary ID
     */
    public deleteBinary(binary: number, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteBinaryWithHttpInfo(binary, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public deleteDockerRegistryWithHttpInfo(dockerRegistry: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteDockerRegistry(dockerRegistry, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDockerRegistryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public deleteDockerRegistry(dockerRegistry: number, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteDockerRegistryWithHttpInfo(dockerRegistry, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a specific server config
     * @param serverConfig The server config ID
     */
    public deleteServerConfigWithHttpInfo(serverConfig: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteServerConfig(serverConfig, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteServerConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a specific server config
     * @param serverConfig The server config ID
     */
    public deleteServerConfig(serverConfig: number, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteServerConfigWithHttpInfo(serverConfig, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete all unused apps
     */
    public deleteUnusedAppsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteUnusedApps(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteUnusedAppsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete all unused apps
     */
    public deleteUnusedApps(_options?: ConfigurationOptions): Observable<void> {
        return this.deleteUnusedAppsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete all unused binaries
     * @param app The app ID
     */
    public deleteUnusedBinariesWithHttpInfo(app: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteUnusedBinaries(app, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteUnusedBinariesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete all unused binaries
     * @param app The app ID
     */
    public deleteUnusedBinaries(app: number, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteUnusedBinariesWithHttpInfo(app, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete all unused server configs
     * @param app The app ID
     */
    public deleteUnusedServerConfigsWithHttpInfo(app: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteUnusedServerConfigs(app, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteUnusedServerConfigsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete all unused server configs
     * @param app The app ID
     */
    public deleteUnusedServerConfigs(app: number, _options?: ConfigurationOptions): Observable<void> {
        return this.deleteUnusedServerConfigsWithHttpInfo(app, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete all metadata
     * @param dockerRegistry The docker registry ID
     */
    public dockerRegistriesMetadataDeleteAllWithHttpInfo(dockerRegistry: number, _options?: ConfigurationOptions): Observable<HttpInfo<DockerRegistry>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.dockerRegistriesMetadataDeleteAll(dockerRegistry, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dockerRegistriesMetadataDeleteAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete all metadata
     * @param dockerRegistry The docker registry ID
     */
    public dockerRegistriesMetadataDeleteAll(dockerRegistry: number, _options?: ConfigurationOptions): Observable<DockerRegistry> {
        return this.dockerRegistriesMetadataDeleteAllWithHttpInfo(dockerRegistry, _options).pipe(map((apiResponse: HttpInfo<DockerRegistry>) => apiResponse.data));
    }

    /**
     * Delete metadata keys
     * @param dockerRegistry The docker registry ID
     * @param metadata
     */
    public dockerRegistriesMetadataDeleteKeysWithHttpInfo(dockerRegistry: number, metadata: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<DockerRegistry>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.dockerRegistriesMetadataDeleteKeys(dockerRegistry, metadata, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dockerRegistriesMetadataDeleteKeysWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete metadata keys
     * @param dockerRegistry The docker registry ID
     * @param metadata
     */
    public dockerRegistriesMetadataDeleteKeys(dockerRegistry: number, metadata: Array<string>, _options?: ConfigurationOptions): Observable<DockerRegistry> {
        return this.dockerRegistriesMetadataDeleteKeysWithHttpInfo(dockerRegistry, metadata, _options).pipe(map((apiResponse: HttpInfo<DockerRegistry>) => apiResponse.data));
    }

    /**
     * Replaces the entire metadata.
     * Set metadata
     * @param dockerRegistry The docker registry ID
     * @param [setDockerRegistryMetadataRequest]
     */
    public dockerRegistriesMetadataSetWithHttpInfo(dockerRegistry: number, setDockerRegistryMetadataRequest?: SetDockerRegistryMetadataRequest, _options?: ConfigurationOptions): Observable<HttpInfo<DockerRegistry>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.dockerRegistriesMetadataSet(dockerRegistry, setDockerRegistryMetadataRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dockerRegistriesMetadataSetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replaces the entire metadata.
     * Set metadata
     * @param dockerRegistry The docker registry ID
     * @param [setDockerRegistryMetadataRequest]
     */
    public dockerRegistriesMetadataSet(dockerRegistry: number, setDockerRegistryMetadataRequest?: SetDockerRegistryMetadataRequest, _options?: ConfigurationOptions): Observable<DockerRegistry> {
        return this.dockerRegistriesMetadataSetWithHttpInfo(dockerRegistry, setDockerRegistryMetadataRequest, _options).pipe(map((apiResponse: HttpInfo<DockerRegistry>) => apiResponse.data));
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting other metadata.
     * Update metadata
     * @param dockerRegistry The docker registry ID
     * @param [patchDockerRegistryMetadataRequest]
     */
    public dockerRegistriesMetadataUpdateWithHttpInfo(dockerRegistry: number, patchDockerRegistryMetadataRequest?: PatchDockerRegistryMetadataRequest, _options?: ConfigurationOptions): Observable<HttpInfo<DockerRegistry>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.dockerRegistriesMetadataUpdate(dockerRegistry, patchDockerRegistryMetadataRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dockerRegistriesMetadataUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting other metadata.
     * Update metadata
     * @param dockerRegistry The docker registry ID
     * @param [patchDockerRegistryMetadataRequest]
     */
    public dockerRegistriesMetadataUpdate(dockerRegistry: number, patchDockerRegistryMetadataRequest?: PatchDockerRegistryMetadataRequest, _options?: ConfigurationOptions): Observable<DockerRegistry> {
        return this.dockerRegistriesMetadataUpdateWithHttpInfo(dockerRegistry, patchDockerRegistryMetadataRequest, _options).pipe(map((apiResponse: HttpInfo<DockerRegistry>) => apiResponse.data));
    }

    /**
     * Set autoscaling status to allocated
     * @param dockerService The docker service ID
     */
    public dockerServicesAutoscalingAllocateWithHttpInfo(dockerService: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.dockerServicesAutoscalingAllocate(dockerService, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dockerServicesAutoscalingAllocateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set autoscaling status to allocated
     * @param dockerService The docker service ID
     */
    public dockerServicesAutoscalingAllocate(dockerService: number, _options?: ConfigurationOptions): Observable<void> {
        return this.dockerServicesAutoscalingAllocateWithHttpInfo(dockerService, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Record an autoscaling heartbeat
     * @param dockerService The docker service ID
     */
    public dockerServicesAutoscalingHealthWithHttpInfo(dockerService: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.dockerServicesAutoscalingHealth(dockerService, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dockerServicesAutoscalingHealthWithHttpInfo(rsp)));
            }));
    }

    /**
     * Record an autoscaling heartbeat
     * @param dockerService The docker service ID
     */
    public dockerServicesAutoscalingHealth(dockerService: number, _options?: ConfigurationOptions): Observable<void> {
        return this.dockerServicesAutoscalingHealthWithHttpInfo(dockerService, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Set autoscaling status to ready
     * @param dockerService The docker service ID
     */
    public dockerServicesAutoscalingReadyWithHttpInfo(dockerService: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.dockerServicesAutoscalingReady(dockerService, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dockerServicesAutoscalingReadyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set autoscaling status to ready
     * @param dockerService The docker service ID
     */
    public dockerServicesAutoscalingReady(dockerService: number, _options?: ConfigurationOptions): Observable<void> {
        return this.dockerServicesAutoscalingReadyWithHttpInfo(dockerService, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Set autoscaling status to shutdown
     * @param dockerService The docker service ID
     */
    public dockerServicesAutoscalingShutdownWithHttpInfo(dockerService: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.dockerServicesAutoscalingShutdown(dockerService, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dockerServicesAutoscalingShutdownWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set autoscaling status to shutdown
     * @param dockerService The docker service ID
     */
    public dockerServicesAutoscalingShutdown(dockerService: number, _options?: ConfigurationOptions): Observable<void> {
        return this.dockerServicesAutoscalingShutdownWithHttpInfo(dockerService, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete all service metadata
     * @param dockerService The docker service ID
     */
    public dockerServicesMetadataDeleteAllWithHttpInfo(dockerService: number, _options?: ConfigurationOptions): Observable<HttpInfo<Server>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.dockerServicesMetadataDeleteAll(dockerService, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dockerServicesMetadataDeleteAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete all service metadata
     * @param dockerService The docker service ID
     */
    public dockerServicesMetadataDeleteAll(dockerService: number, _options?: ConfigurationOptions): Observable<Server> {
        return this.dockerServicesMetadataDeleteAllWithHttpInfo(dockerService, _options).pipe(map((apiResponse: HttpInfo<Server>) => apiResponse.data));
    }

    /**
     * Delete service metadata keys
     * @param dockerService The docker service ID
     * @param metadata
     */
    public dockerServicesMetadataDeleteKeysWithHttpInfo(dockerService: number, metadata: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<Server>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.dockerServicesMetadataDeleteKeys(dockerService, metadata, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dockerServicesMetadataDeleteKeysWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete service metadata keys
     * @param dockerService The docker service ID
     * @param metadata
     */
    public dockerServicesMetadataDeleteKeys(dockerService: number, metadata: Array<string>, _options?: ConfigurationOptions): Observable<Server> {
        return this.dockerServicesMetadataDeleteKeysWithHttpInfo(dockerService, metadata, _options).pipe(map((apiResponse: HttpInfo<Server>) => apiResponse.data));
    }

    /**
     * Replaces the entire metadata set with only the values provided in the request.
     * Set service metadata
     * @param dockerService The docker service ID
     * @param [setMetadataRequest]
     */
    public dockerServicesMetadataSetWithHttpInfo(dockerService: number, setMetadataRequest?: SetMetadataRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Server>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.dockerServicesMetadataSet(dockerService, setMetadataRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dockerServicesMetadataSetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replaces the entire metadata set with only the values provided in the request.
     * Set service metadata
     * @param dockerService The docker service ID
     * @param [setMetadataRequest]
     */
    public dockerServicesMetadataSet(dockerService: number, setMetadataRequest?: SetMetadataRequest, _options?: ConfigurationOptions): Observable<Server> {
        return this.dockerServicesMetadataSetWithHttpInfo(dockerService, setMetadataRequest, _options).pipe(map((apiResponse: HttpInfo<Server>) => apiResponse.data));
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting metadata that is not mentioned.
     * Update service metadata
     * @param dockerService The docker service ID
     * @param [patchMetadataRequest]
     */
    public dockerServicesMetadataUpdateWithHttpInfo(dockerService: number, patchMetadataRequest?: PatchMetadataRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Server>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.dockerServicesMetadataUpdate(dockerService, patchMetadataRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dockerServicesMetadataUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting metadata that is not mentioned.
     * Update service metadata
     * @param dockerService The docker service ID
     * @param [patchMetadataRequest]
     */
    public dockerServicesMetadataUpdate(dockerService: number, patchMetadataRequest?: PatchMetadataRequest, _options?: ConfigurationOptions): Observable<Server> {
        return this.dockerServicesMetadataUpdateWithHttpInfo(dockerService, patchMetadataRequest, _options).pipe(map((apiResponse: HttpInfo<Server>) => apiResponse.data));
    }

    /**
     * Download service logs
     * @param dockerService The docker service ID
     * @param [streamSource] Only return logs filtered by stream source like stdout or stderr.
     */
    public downloadServerLogsWithHttpInfo(dockerService: number, streamSource?: 'stdout' | 'stderr', _options?: ConfigurationOptions): Observable<HttpInfo<ServiceLogs>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.downloadServerLogs(dockerService, streamSource, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadServerLogsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Download service logs
     * @param dockerService The docker service ID
     * @param [streamSource] Only return logs filtered by stream source like stdout or stderr.
     */
    public downloadServerLogs(dockerService: number, streamSource?: 'stdout' | 'stderr', _options?: ConfigurationOptions): Observable<ServiceLogs> {
        return this.downloadServerLogsWithHttpInfo(dockerService, streamSource, _options).pipe(map((apiResponse: HttpInfo<ServiceLogs>) => apiResponse.data));
    }

    /**
     * Show a specific app
     * @param app The app ID
     */
    public getAppByIdWithHttpInfo(app: number, _options?: ConfigurationOptions): Observable<HttpInfo<App>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAppById(app, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show a specific app
     * @param app The app ID
     */
    public getAppById(app: number, _options?: ConfigurationOptions): Observable<App> {
        return this.getAppByIdWithHttpInfo(app, _options).pipe(map((apiResponse: HttpInfo<App>) => apiResponse.data));
    }

    /**
     * Show a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public getAppLocationSettingByIdWithHttpInfo(appLocationSetting: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetAppLocationSettingById200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAppLocationSettingById(appLocationSetting, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppLocationSettingByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public getAppLocationSettingById(appLocationSetting: number, _options?: ConfigurationOptions): Observable<GetAppLocationSettingById200Response> {
        return this.getAppLocationSettingByIdWithHttpInfo(appLocationSetting, _options).pipe(map((apiResponse: HttpInfo<GetAppLocationSettingById200Response>) => apiResponse.data));
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
     * @param [filterMetadata] Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;
     */
    public getAppLocationSettingsWithHttpInfo(app: number, perPage?: number, page?: number, sort?: Array<'-id' | 'id' | '-name' | 'name' | '-serverConfigId' | 'serverConfigId' | '-numInstances' | 'numInstances' | '-status' | 'status' | '-statusMessage' | 'statusMessage' | '-maintenance' | 'maintenance' | '-locationCity' | 'locationCity' | '-locationCityDisplay' | 'locationCityDisplay' | '-locationContinent' | 'locationContinent' | '-locationCountry' | 'locationCountry' | '-serverConfigId' | 'serverConfigId' | '-serverConfigName' | 'serverConfigName' | '-serverConfigCommand' | 'serverConfigCommand' | '-serverConfigArgs' | 'serverConfigArgs' | '-serverConfigNotes' | 'serverConfigNotes' | '-serverConfigStatus' | 'serverConfigStatus' | '-serverConfigMaintenance' | 'serverConfigMaintenance' | '-serverConfigResourcePackageSlug' | 'serverConfigResourcePackageSlug'>, filterId?: number, filterName?: string, filterNamePartial?: string, filterServerConfigId?: number, filterNumInstances?: number, filterStatus?: string, filterMaintenance?: boolean, filterLocationCity?: string, filterLocationCityDisplay?: string, filterLocationContinent?: string, filterLocationCountry?: string, filterServerConfigName?: string, filterServerConfigCommand?: string, filterServerConfigArgs?: string, filterServerConfigNotes?: string, filterServerConfigStatus?: string, filterServerConfigMaintenance?: boolean, filterServerConfigResourcePackageSlug?: string, filterMetadata?: string, _options?: ConfigurationOptions): Observable<HttpInfo<GetAppLocationSettings200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAppLocationSettings(app, perPage, page, sort, filterId, filterName, filterNamePartial, filterServerConfigId, filterNumInstances, filterStatus, filterMaintenance, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterServerConfigName, filterServerConfigCommand, filterServerConfigArgs, filterServerConfigNotes, filterServerConfigStatus, filterServerConfigMaintenance, filterServerConfigResourcePackageSlug, filterMetadata, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
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
     * @param [filterMetadata] Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;
     */
    public getAppLocationSettings(app: number, perPage?: number, page?: number, sort?: Array<'-id' | 'id' | '-name' | 'name' | '-serverConfigId' | 'serverConfigId' | '-numInstances' | 'numInstances' | '-status' | 'status' | '-statusMessage' | 'statusMessage' | '-maintenance' | 'maintenance' | '-locationCity' | 'locationCity' | '-locationCityDisplay' | 'locationCityDisplay' | '-locationContinent' | 'locationContinent' | '-locationCountry' | 'locationCountry' | '-serverConfigId' | 'serverConfigId' | '-serverConfigName' | 'serverConfigName' | '-serverConfigCommand' | 'serverConfigCommand' | '-serverConfigArgs' | 'serverConfigArgs' | '-serverConfigNotes' | 'serverConfigNotes' | '-serverConfigStatus' | 'serverConfigStatus' | '-serverConfigMaintenance' | 'serverConfigMaintenance' | '-serverConfigResourcePackageSlug' | 'serverConfigResourcePackageSlug'>, filterId?: number, filterName?: string, filterNamePartial?: string, filterServerConfigId?: number, filterNumInstances?: number, filterStatus?: string, filterMaintenance?: boolean, filterLocationCity?: string, filterLocationCityDisplay?: string, filterLocationContinent?: string, filterLocationCountry?: string, filterServerConfigName?: string, filterServerConfigCommand?: string, filterServerConfigArgs?: string, filterServerConfigNotes?: string, filterServerConfigStatus?: string, filterServerConfigMaintenance?: boolean, filterServerConfigResourcePackageSlug?: string, filterMetadata?: string, _options?: ConfigurationOptions): Observable<GetAppLocationSettings200Response> {
        return this.getAppLocationSettingsWithHttpInfo(app, perPage, page, sort, filterId, filterName, filterNamePartial, filterServerConfigId, filterNumInstances, filterStatus, filterMaintenance, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterServerConfigName, filterServerConfigCommand, filterServerConfigArgs, filterServerConfigNotes, filterServerConfigStatus, filterServerConfigMaintenance, filterServerConfigResourcePackageSlug, filterMetadata, _options).pipe(map((apiResponse: HttpInfo<GetAppLocationSettings200Response>) => apiResponse.data));
    }

    /**
     * Show all wallets for a specific app
     * @param app The app ID
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60;
     * @param [filterId] Filter by id.
     * @param [filterBalance] Filter by balance.
     */
    public getAppWalletsWithHttpInfo(app: number, perPage?: number, page?: number, sort?: Array<'-id' | 'id' | '-balance' | 'balance'>, filterId?: number, filterBalance?: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetAppWallets200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAppWallets(app, perPage, page, sort, filterId, filterBalance, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppWalletsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show all wallets for a specific app
     * @param app The app ID
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60;
     * @param [filterId] Filter by id.
     * @param [filterBalance] Filter by balance.
     */
    public getAppWallets(app: number, perPage?: number, page?: number, sort?: Array<'-id' | 'id' | '-balance' | 'balance'>, filterId?: number, filterBalance?: number, _options?: ConfigurationOptions): Observable<GetAppWallets200Response> {
        return this.getAppWalletsWithHttpInfo(app, perPage, page, sort, filterId, filterBalance, _options).pipe(map((apiResponse: HttpInfo<GetAppWallets200Response>) => apiResponse.data));
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
     * @param [filterMetadata] Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;
     */
    public getAppsWithHttpInfo(perPage?: number, page?: number, sort?: Array<'-id' | 'id' | '-name' | 'name' | '-inUse' | 'inUse'>, filterId?: number, filterName?: string, filterNamePartial?: string, filterInUse?: boolean, filterMetadata?: string, _options?: ConfigurationOptions): Observable<HttpInfo<GetApps200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getApps(perPage, page, sort, filterId, filterName, filterNamePartial, filterInUse, filterMetadata, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
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
     * @param [filterMetadata] Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;
     */
    public getApps(perPage?: number, page?: number, sort?: Array<'-id' | 'id' | '-name' | 'name' | '-inUse' | 'inUse'>, filterId?: number, filterName?: string, filterNamePartial?: string, filterInUse?: boolean, filterMetadata?: string, _options?: ConfigurationOptions): Observable<GetApps200Response> {
        return this.getAppsWithHttpInfo(perPage, page, sort, filterId, filterName, filterNamePartial, filterInUse, filterMetadata, _options).pipe(map((apiResponse: HttpInfo<GetApps200Response>) => apiResponse.data));
    }

    /**
     * Authenticates the user based on the user\'s email, password, and session ID. If the user is authenticated successfully, it returns the user\'s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.
     * Get token
     * @param authRequest
     */
    public getAuthTokenWithHttpInfo(authRequest: AuthRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Auth>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAuthToken(authRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
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
    public getAuthToken(authRequest: AuthRequest, _options?: ConfigurationOptions): Observable<Auth> {
        return this.getAuthTokenWithHttpInfo(authRequest, _options).pipe(map((apiResponse: HttpInfo<Auth>) => apiResponse.data));
    }

    /**
     * Authenticates the user based on the Fusion Session ID (fsid). If the user is authenticated successfully, it returns the user\'s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.
     * Get token via fsid
     * @param authFsidRequest
     */
    public getAuthTokenViaFsidWithHttpInfo(authFsidRequest: AuthFsidRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Auth>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAuthTokenViaFsid(authFsidRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAuthTokenViaFsidWithHttpInfo(rsp)));
            }));
    }

    /**
     * Authenticates the user based on the Fusion Session ID (fsid). If the user is authenticated successfully, it returns the user\'s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.
     * Get token via fsid
     * @param authFsidRequest
     */
    public getAuthTokenViaFsid(authFsidRequest: AuthFsidRequest, _options?: ConfigurationOptions): Observable<Auth> {
        return this.getAuthTokenViaFsidWithHttpInfo(authFsidRequest, _options).pipe(map((apiResponse: HttpInfo<Auth>) => apiResponse.data));
    }

    /**
     * List service backups
     * @param dockerService The docker service ID
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** For example, to sort by name in ascending order or by archiveName in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;name sort[]&#x3D;-archiveName &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;name&amp;sort[]&#x3D;-archiveName &#x60;&#x60;&#x60;
     * @param [filterName] Filter by name.
     * @param [filterArchiveName] Filter by archive name.
     */
    public getBackupsWithHttpInfo(dockerService: number, perPage?: number, page?: number, sort?: Array<'-name' | 'name' | '-archiveName' | 'archiveName' | '-createdAt' | 'createdAt' | '-restoredAt' | 'restoredAt'>, filterName?: string, filterArchiveName?: string, _options?: ConfigurationOptions): Observable<HttpInfo<GetBackups200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBackups(dockerService, perPage, page, sort, filterName, filterArchiveName, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBackupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List service backups
     * @param dockerService The docker service ID
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** For example, to sort by name in ascending order or by archiveName in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;name sort[]&#x3D;-archiveName &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;name&amp;sort[]&#x3D;-archiveName &#x60;&#x60;&#x60;
     * @param [filterName] Filter by name.
     * @param [filterArchiveName] Filter by archive name.
     */
    public getBackups(dockerService: number, perPage?: number, page?: number, sort?: Array<'-name' | 'name' | '-archiveName' | 'archiveName' | '-createdAt' | 'createdAt' | '-restoredAt' | 'restoredAt'>, filterName?: string, filterArchiveName?: string, _options?: ConfigurationOptions): Observable<GetBackups200Response> {
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
     * @param [filterMetadata] Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;
     */
    public getBinariesWithHttpInfo(app: number, perPage?: number, page?: number, sort?: Array<'-id' | 'id' | '-name' | 'name' | '-version' | 'version' | '-type' | 'type' | '-os' | 'os' | '-status' | 'status' | '-statusMessage' | 'statusMessage' | '-progress' | 'progress' | '-progressMessage' | 'progressMessage' | '-inUse' | 'inUse'>, filterName?: string, filterNamePartial?: string, filterVersion?: string, filterType?: string, filterOs?: string, filterMaintenance?: boolean, filterStatus?: string, filterInUse?: boolean, filterMetadata?: string, _options?: ConfigurationOptions): Observable<HttpInfo<GetBinaries200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBinaries(app, perPage, page, sort, filterName, filterNamePartial, filterVersion, filterType, filterOs, filterMaintenance, filterStatus, filterInUse, filterMetadata, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
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
     * @param [filterMetadata] Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;
     */
    public getBinaries(app: number, perPage?: number, page?: number, sort?: Array<'-id' | 'id' | '-name' | 'name' | '-version' | 'version' | '-type' | 'type' | '-os' | 'os' | '-status' | 'status' | '-statusMessage' | 'statusMessage' | '-progress' | 'progress' | '-progressMessage' | 'progressMessage' | '-inUse' | 'inUse'>, filterName?: string, filterNamePartial?: string, filterVersion?: string, filterType?: string, filterOs?: string, filterMaintenance?: boolean, filterStatus?: string, filterInUse?: boolean, filterMetadata?: string, _options?: ConfigurationOptions): Observable<GetBinaries200Response> {
        return this.getBinariesWithHttpInfo(app, perPage, page, sort, filterName, filterNamePartial, filterVersion, filterType, filterOs, filterMaintenance, filterStatus, filterInUse, filterMetadata, _options).pipe(map((apiResponse: HttpInfo<GetBinaries200Response>) => apiResponse.data));
    }

    /**
     * Show a specific binary
     * @param binary The binary ID
     */
    public getBinaryByIdWithHttpInfo(binary: number, _options?: ConfigurationOptions): Observable<HttpInfo<Binary>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBinaryById(binary, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBinaryByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show a specific binary
     * @param binary The binary ID
     */
    public getBinaryById(binary: number, _options?: ConfigurationOptions): Observable<Binary> {
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
     * @param [filterMetadata] Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;
     */
    public getDockerRegistriesWithHttpInfo(perPage?: number, page?: number, sort?: Array<'-id' | 'id' | '-type' | 'type' | '-name' | 'name' | '-url' | 'url' | '-organization' | 'organization'>, filterId?: number, filterType?: string, filterName?: string, filterNamePartial?: string, filterUrl?: string, filterOrganization?: string, filterMetadata?: string, _options?: ConfigurationOptions): Observable<HttpInfo<GetDockerRegistries200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getDockerRegistries(perPage, page, sort, filterId, filterType, filterName, filterNamePartial, filterUrl, filterOrganization, filterMetadata, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
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
     * @param [filterMetadata] Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;
     */
    public getDockerRegistries(perPage?: number, page?: number, sort?: Array<'-id' | 'id' | '-type' | 'type' | '-name' | 'name' | '-url' | 'url' | '-organization' | 'organization'>, filterId?: number, filterType?: string, filterName?: string, filterNamePartial?: string, filterUrl?: string, filterOrganization?: string, filterMetadata?: string, _options?: ConfigurationOptions): Observable<GetDockerRegistries200Response> {
        return this.getDockerRegistriesWithHttpInfo(perPage, page, sort, filterId, filterType, filterName, filterNamePartial, filterUrl, filterOrganization, filterMetadata, _options).pipe(map((apiResponse: HttpInfo<GetDockerRegistries200Response>) => apiResponse.data));
    }

    /**
     * Display a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public getDockerRegistryByIdWithHttpInfo(dockerRegistry: number, _options?: ConfigurationOptions): Observable<HttpInfo<DockerRegistry>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getDockerRegistryById(dockerRegistry, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDockerRegistryByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Display a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public getDockerRegistryById(dockerRegistry: number, _options?: ConfigurationOptions): Observable<DockerRegistry> {
        return this.getDockerRegistryByIdWithHttpInfo(dockerRegistry, _options).pipe(map((apiResponse: HttpInfo<DockerRegistry>) => apiResponse.data));
    }

    /**
     * Get latest service backup
     * @param dockerService The docker service ID
     */
    public getLatestBackupWithHttpInfo(dockerService: number, _options?: ConfigurationOptions): Observable<HttpInfo<Backup>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getLatestBackup(dockerService, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLatestBackupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get latest service backup
     * @param dockerService The docker service ID
     */
    public getLatestBackup(dockerService: number, _options?: ConfigurationOptions): Observable<Backup> {
        return this.getLatestBackupWithHttpInfo(dockerService, _options).pipe(map((apiResponse: HttpInfo<Backup>) => apiResponse.data));
    }

    /**
     * Show a unique listing of locations based on active and ready worker nodes
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     */
    public getLocationsWithHttpInfo(perPage?: number, page?: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetLocations200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getLocations(perPage, page, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
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
    public getLocations(perPage?: number, page?: number, _options?: ConfigurationOptions): Observable<GetLocations200Response> {
        return this.getLocationsWithHttpInfo(perPage, page, _options).pipe(map((apiResponse: HttpInfo<GetLocations200Response>) => apiResponse.data));
    }

    /**
     * Show a specified resource package
     * @param resourcePackage The resource package ID
     */
    public getResourcePackageByIdWithHttpInfo(resourcePackage: number, _options?: ConfigurationOptions): Observable<HttpInfo<ResourcePackage>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getResourcePackageById(resourcePackage, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getResourcePackageByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show a specified resource package
     * @param resourcePackage The resource package ID
     */
    public getResourcePackageById(resourcePackage: number, _options?: ConfigurationOptions): Observable<ResourcePackage> {
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
     * @param [filterMemoryLimitMiB] Filter by memory limit in MiB. Maps to the &#x60;memory_limit_mebibytes&#x60; column.
     */
    public getResourcePackagesWithHttpInfo(perPage?: number, page?: number, sort?: Array<'-id' | 'id' | '-name' | 'name' | '-slug' | 'slug' | '-type' | 'type' | '-cpuLimit' | 'cpuLimit' | '-memoryLimitMiB' | 'memoryLimitMiB'>, filterId?: number, filterName?: string, filterNamePartial?: string, filterSlug?: string, filterType?: string, filterCpuLimit?: number, filterMemoryLimitMiB?: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetResourcePackages200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getResourcePackages(perPage, page, sort, filterId, filterName, filterNamePartial, filterSlug, filterType, filterCpuLimit, filterMemoryLimitMiB, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
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
     * @param [filterMemoryLimitMiB] Filter by memory limit in MiB. Maps to the &#x60;memory_limit_mebibytes&#x60; column.
     */
    public getResourcePackages(perPage?: number, page?: number, sort?: Array<'-id' | 'id' | '-name' | 'name' | '-slug' | 'slug' | '-type' | 'type' | '-cpuLimit' | 'cpuLimit' | '-memoryLimitMiB' | 'memoryLimitMiB'>, filterId?: number, filterName?: string, filterNamePartial?: string, filterSlug?: string, filterType?: string, filterCpuLimit?: number, filterMemoryLimitMiB?: number, _options?: ConfigurationOptions): Observable<GetResourcePackages200Response> {
        return this.getResourcePackagesWithHttpInfo(perPage, page, sort, filterId, filterName, filterNamePartial, filterSlug, filterType, filterCpuLimit, filterMemoryLimitMiB, _options).pipe(map((apiResponse: HttpInfo<GetResourcePackages200Response>) => apiResponse.data));
    }

    /**
     * Get service backup download URL
     * @param dockerService The docker service ID
     */
    public getServerBackupDownloadUrlWithHttpInfo(dockerService: number, _options?: ConfigurationOptions): Observable<HttpInfo<BackupDownload>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getServerBackupDownloadUrl(dockerService, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServerBackupDownloadUrlWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get service backup download URL
     * @param dockerService The docker service ID
     */
    public getServerBackupDownloadUrl(dockerService: number, _options?: ConfigurationOptions): Observable<BackupDownload> {
        return this.getServerBackupDownloadUrlWithHttpInfo(dockerService, _options).pipe(map((apiResponse: HttpInfo<BackupDownload>) => apiResponse.data));
    }

    /**
     * Display a specific service
     * @param app The app ID
     * @param dockerService The docker service ID
     */
    public getServerByIdWithHttpInfo(app: number, dockerService: number, _options?: ConfigurationOptions): Observable<HttpInfo<Server>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getServerById(app, dockerService, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
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
    public getServerById(app: number, dockerService: number, _options?: ConfigurationOptions): Observable<Server> {
        return this.getServerByIdWithHttpInfo(app, dockerService, _options).pipe(map((apiResponse: HttpInfo<Server>) => apiResponse.data));
    }

    /**
     * Show a specific server config
     * @param serverConfig The server config ID
     */
    public getServerConfigByIdWithHttpInfo(serverConfig: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetServerConfigById200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getServerConfigById(serverConfig, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServerConfigByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Show a specific server config
     * @param serverConfig The server config ID
     */
    public getServerConfigById(serverConfig: number, _options?: ConfigurationOptions): Observable<GetServerConfigById200Response> {
        return this.getServerConfigByIdWithHttpInfo(serverConfig, _options).pipe(map((apiResponse: HttpInfo<GetServerConfigById200Response>) => apiResponse.data));
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
     * @param [filterDnsServiceEnabled] Filter by service-level DNS flag.
     * @param [filterResourcePackageSlug] Filter by resource package slug.
     * @param [filterInUse] Filter by in use flag.
     * @param [filterBinaryName] Filter by binary name.
     * @param [filterBinaryVersion] Filter by binary version.
     * @param [filterBinaryType] Filter by binary type.
     * @param [filterBinaryOs] Filter by binary operating system.
     * @param [filterMetadata] Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;
     */
    public getServerConfigsWithHttpInfo(app: number, perPage?: number, page?: number, sort?: Array<'-id' | 'id' | '-binaryId' | 'binaryId' | '-name' | 'name' | '-command' | 'command' | '-args' | 'args' | '-notes' | 'notes' | '-status' | 'status' | '-statusMessage' | 'statusMessage' | '-maintenance' | 'maintenance' | '-dnsServiceEnabled' | 'dnsServiceEnabled' | '-resourcePackageSlug' | 'resourcePackageSlug' | '-inUse' | 'inUse' | 'binaryId' | '-binaryId' | 'binaryName' | '-binaryName' | 'binaryVersion' | '-binaryVersion' | 'binaryType' | '-binaryType' | 'binaryOs' | '-binaryOs'>, filterId?: number, filterBinaryId?: number, filterName?: string, filterNamePartial?: string, filterCommand?: string, filterArgs?: string, filterNotes?: string, filterStatus?: string, filterMaintenance?: boolean, filterDnsServiceEnabled?: boolean, filterResourcePackageSlug?: string, filterInUse?: boolean, filterBinaryName?: string, filterBinaryVersion?: string, filterBinaryType?: string, filterBinaryOs?: string, filterMetadata?: string, _options?: ConfigurationOptions): Observable<HttpInfo<GetServerConfigs200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getServerConfigs(app, perPage, page, sort, filterId, filterBinaryId, filterName, filterNamePartial, filterCommand, filterArgs, filterNotes, filterStatus, filterMaintenance, filterDnsServiceEnabled, filterResourcePackageSlug, filterInUse, filterBinaryName, filterBinaryVersion, filterBinaryType, filterBinaryOs, filterMetadata, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
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
     * @param [filterDnsServiceEnabled] Filter by service-level DNS flag.
     * @param [filterResourcePackageSlug] Filter by resource package slug.
     * @param [filterInUse] Filter by in use flag.
     * @param [filterBinaryName] Filter by binary name.
     * @param [filterBinaryVersion] Filter by binary version.
     * @param [filterBinaryType] Filter by binary type.
     * @param [filterBinaryOs] Filter by binary operating system.
     * @param [filterMetadata] Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;
     */
    public getServerConfigs(app: number, perPage?: number, page?: number, sort?: Array<'-id' | 'id' | '-binaryId' | 'binaryId' | '-name' | 'name' | '-command' | 'command' | '-args' | 'args' | '-notes' | 'notes' | '-status' | 'status' | '-statusMessage' | 'statusMessage' | '-maintenance' | 'maintenance' | '-dnsServiceEnabled' | 'dnsServiceEnabled' | '-resourcePackageSlug' | 'resourcePackageSlug' | '-inUse' | 'inUse' | 'binaryId' | '-binaryId' | 'binaryName' | '-binaryName' | 'binaryVersion' | '-binaryVersion' | 'binaryType' | '-binaryType' | 'binaryOs' | '-binaryOs'>, filterId?: number, filterBinaryId?: number, filterName?: string, filterNamePartial?: string, filterCommand?: string, filterArgs?: string, filterNotes?: string, filterStatus?: string, filterMaintenance?: boolean, filterDnsServiceEnabled?: boolean, filterResourcePackageSlug?: string, filterInUse?: boolean, filterBinaryName?: string, filterBinaryVersion?: string, filterBinaryType?: string, filterBinaryOs?: string, filterMetadata?: string, _options?: ConfigurationOptions): Observable<GetServerConfigs200Response> {
        return this.getServerConfigsWithHttpInfo(app, perPage, page, sort, filterId, filterBinaryId, filterName, filterNamePartial, filterCommand, filterArgs, filterNotes, filterStatus, filterMaintenance, filterDnsServiceEnabled, filterResourcePackageSlug, filterInUse, filterBinaryName, filterBinaryVersion, filterBinaryType, filterBinaryOs, filterMetadata, _options).pipe(map((apiResponse: HttpInfo<GetServerConfigs200Response>) => apiResponse.data));
    }

    /**
     * Get service logs
     * @param dockerService The docker service ID
     * @param [limit] The max number of entries to return. Default: 100
     * @param [direction] Determines the sort order of logs. Supported values are forward or backward. Default: forward
     * @param [streamSource] Only return logs filtered by stream source like stdout or stderr. Default: null
     */
    public getServerLogsWithHttpInfo(dockerService: number, limit?: number, direction?: string, streamSource?: 'stdout' | 'stderr', _options?: ConfigurationOptions): Observable<HttpInfo<ServiceLogs>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getServerLogs(dockerService, limit, direction, streamSource, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServerLogsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get service logs
     * @param dockerService The docker service ID
     * @param [limit] The max number of entries to return. Default: 100
     * @param [direction] Determines the sort order of logs. Supported values are forward or backward. Default: forward
     * @param [streamSource] Only return logs filtered by stream source like stdout or stderr. Default: null
     */
    public getServerLogs(dockerService: number, limit?: number, direction?: string, streamSource?: 'stdout' | 'stderr', _options?: ConfigurationOptions): Observable<ServiceLogs> {
        return this.getServerLogsWithHttpInfo(dockerService, limit, direction, streamSource, _options).pipe(map((apiResponse: HttpInfo<ServiceLogs>) => apiResponse.data));
    }

    /**
     * List services
     * @param app The app ID
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [filterStatus] Filter by status.
     * @param [filterAppLocationSettingId] Filter by AppLocationSetting ID.
     * @param [filterAutoscalingEnabled] Filter by whether the service belongs to an autoscaled AppLocationSetting.
     * @param [filterServerConfigId] Filter by ServerConfig ID.
     * @param [filterServerConfigName] Filter by ServerConfig name.
     * @param [filterServerConfigNamePartial] Filter by ServerConfig name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;.
     * @param [filterLocationCity] Filter by location city.
     * @param [filterLocationCityDisplay] Filter by location city display name.
     * @param [filterLocationContinent] Filter by location continent.
     * @param [filterLocationCountry] Filter by location country.
     * @param [filterIsBackupable] Filter by whether the service can be backed up.
     * @param [filterIsRestorable] Filter by whether the service can be restored.
     * @param [filterIsPending] Filter by whether the service is pending (not running) due to insufficient resources on the node.
     * @param [filterIsNotFound] Filter by whether the service is not found/missing in the cluster.
     * @param [filterIsHealthy] Filter by whether the service is currently in an overall healthy state.
     * @param [filterBinaryId] Filter by Binary ID.
     * @param [filterIsStopped] Filter by whether the service is currenctly stopped.
     * @param [filterMetadata] Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by instance in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-instance &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-instance &#x60;&#x60;&#x60;
     */
    public getServersWithHttpInfo(app: number, perPage?: number, page?: number, filterStatus?: string, filterAppLocationSettingId?: number, filterAutoscalingEnabled?: boolean, filterServerConfigId?: number, filterServerConfigName?: string, filterServerConfigNamePartial?: string, filterLocationCity?: string, filterLocationCityDisplay?: string, filterLocationContinent?: string, filterLocationCountry?: string, filterIsBackupable?: boolean, filterIsRestorable?: boolean, filterIsPending?: boolean, filterIsNotFound?: boolean, filterIsHealthy?: boolean, filterBinaryId?: number, filterIsStopped?: boolean, filterMetadata?: string, sort?: Array<'-id' | 'id' | '-instance' | 'instance' | '-status' | 'status' | '-status_message' | 'status_message' | '-serverConfigId' | 'serverConfigId' | '-serverConfigName' | 'serverConfigName' | '-appLocationSettingId' | 'appLocationSettingId' | '-name' | 'name' | '-locationCity' | 'locationCity' | '-locationCityDisplay' | 'locationCityDisplay' | '-locationContinent' | 'locationContinent' | '-locationCountry' | 'locationCountry' | 'isBackupable' | '-isBackupable' | 'isRestorable' | '-isRestorable' | 'isPending' | '-isPending' | 'isNotFound' | '-isNotFound' | 'isHealthy' | '-isHealthy' | 'isStopped' | '-isStopped' | '-createdAt' | 'createdAt' | '-updatedAt' | 'updatedAt'>, _options?: ConfigurationOptions): Observable<HttpInfo<GetServers200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getServers(app, perPage, page, filterStatus, filterAppLocationSettingId, filterAutoscalingEnabled, filterServerConfigId, filterServerConfigName, filterServerConfigNamePartial, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterIsBackupable, filterIsRestorable, filterIsPending, filterIsNotFound, filterIsHealthy, filterBinaryId, filterIsStopped, filterMetadata, sort, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServersWithHttpInfo(rsp)));
            }));
    }

    /**
     * List services
     * @param app The app ID
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [filterStatus] Filter by status.
     * @param [filterAppLocationSettingId] Filter by AppLocationSetting ID.
     * @param [filterAutoscalingEnabled] Filter by whether the service belongs to an autoscaled AppLocationSetting.
     * @param [filterServerConfigId] Filter by ServerConfig ID.
     * @param [filterServerConfigName] Filter by ServerConfig name.
     * @param [filterServerConfigNamePartial] Filter by ServerConfig name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;.
     * @param [filterLocationCity] Filter by location city.
     * @param [filterLocationCityDisplay] Filter by location city display name.
     * @param [filterLocationContinent] Filter by location continent.
     * @param [filterLocationCountry] Filter by location country.
     * @param [filterIsBackupable] Filter by whether the service can be backed up.
     * @param [filterIsRestorable] Filter by whether the service can be restored.
     * @param [filterIsPending] Filter by whether the service is pending (not running) due to insufficient resources on the node.
     * @param [filterIsNotFound] Filter by whether the service is not found/missing in the cluster.
     * @param [filterIsHealthy] Filter by whether the service is currently in an overall healthy state.
     * @param [filterBinaryId] Filter by Binary ID.
     * @param [filterIsStopped] Filter by whether the service is currenctly stopped.
     * @param [filterMetadata] Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by instance in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-instance &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-instance &#x60;&#x60;&#x60;
     */
    public getServers(app: number, perPage?: number, page?: number, filterStatus?: string, filterAppLocationSettingId?: number, filterAutoscalingEnabled?: boolean, filterServerConfigId?: number, filterServerConfigName?: string, filterServerConfigNamePartial?: string, filterLocationCity?: string, filterLocationCityDisplay?: string, filterLocationContinent?: string, filterLocationCountry?: string, filterIsBackupable?: boolean, filterIsRestorable?: boolean, filterIsPending?: boolean, filterIsNotFound?: boolean, filterIsHealthy?: boolean, filterBinaryId?: number, filterIsStopped?: boolean, filterMetadata?: string, sort?: Array<'-id' | 'id' | '-instance' | 'instance' | '-status' | 'status' | '-status_message' | 'status_message' | '-serverConfigId' | 'serverConfigId' | '-serverConfigName' | 'serverConfigName' | '-appLocationSettingId' | 'appLocationSettingId' | '-name' | 'name' | '-locationCity' | 'locationCity' | '-locationCityDisplay' | 'locationCityDisplay' | '-locationContinent' | 'locationContinent' | '-locationCountry' | 'locationCountry' | 'isBackupable' | '-isBackupable' | 'isRestorable' | '-isRestorable' | 'isPending' | '-isPending' | 'isNotFound' | '-isNotFound' | 'isHealthy' | '-isHealthy' | 'isStopped' | '-isStopped' | '-createdAt' | 'createdAt' | '-updatedAt' | 'updatedAt'>, _options?: ConfigurationOptions): Observable<GetServers200Response> {
        return this.getServersWithHttpInfo(app, perPage, page, filterStatus, filterAppLocationSettingId, filterAutoscalingEnabled, filterServerConfigId, filterServerConfigName, filterServerConfigNamePartial, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterIsBackupable, filterIsRestorable, filterIsPending, filterIsNotFound, filterIsHealthy, filterBinaryId, filterIsStopped, filterMetadata, sort, _options).pipe(map((apiResponse: HttpInfo<GetServers200Response>) => apiResponse.data));
    }

    /**
     * List all available tagged images
     * @param dockerRegistry The docker registry ID
     */
    public getTaggedImagesWithHttpInfo(dockerRegistry: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetTaggedImages200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTaggedImages(dockerRegistry, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTaggedImagesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all available tagged images
     * @param dockerRegistry The docker registry ID
     */
    public getTaggedImages(dockerRegistry: number, _options?: ConfigurationOptions): Observable<GetTaggedImages200Response> {
        return this.getTaggedImagesWithHttpInfo(dockerRegistry, _options).pipe(map((apiResponse: HttpInfo<GetTaggedImages200Response>) => apiResponse.data));
    }

    /**
     * Show all services for a specific app location setting within a given app
     * @param app The app ID
     * @param appLocationSetting The app location setting ID
     */
    public listServicesForAppLocationSettingWithHttpInfo(app: number, appLocationSetting: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<Server>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.listServicesForAppLocationSetting(app, appLocationSetting, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
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
    public listServicesForAppLocationSetting(app: number, appLocationSetting: number, _options?: ConfigurationOptions): Observable<Array<Server>> {
        return this.listServicesForAppLocationSettingWithHttpInfo(app, appLocationSetting, _options).pipe(map((apiResponse: HttpInfo<Array<Server>>) => apiResponse.data));
    }

    /**
     * Get the total CPU seconds for the given app
     * @param app The app ID
     */
    public metricsAppCpuSecondsInstantWithHttpInfo(app: number, _options?: ConfigurationOptions): Observable<HttpInfo<MetricInstantResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.metricsAppCpuSecondsInstant(app, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.metricsAppCpuSecondsInstantWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the total CPU seconds for the given app
     * @param app The app ID
     */
    public metricsAppCpuSecondsInstant(app: number, _options?: ConfigurationOptions): Observable<MetricInstantResponse> {
        return this.metricsAppCpuSecondsInstantWithHttpInfo(app, _options).pipe(map((apiResponse: HttpInfo<MetricInstantResponse>) => apiResponse.data));
    }

    /**
     * Get CPU cores used for the given app
     * @param app The app ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsAppCpuUsageWithHttpInfo(app: number, start: number, end: number, _options?: ConfigurationOptions): Observable<HttpInfo<MetricRangeResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.metricsAppCpuUsage(app, start, end, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.metricsAppCpuUsageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get CPU cores used for the given app
     * @param app The app ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsAppCpuUsage(app: number, start: number, end: number, _options?: ConfigurationOptions): Observable<MetricRangeResponse> {
        return this.metricsAppCpuUsageWithHttpInfo(app, start, end, _options).pipe(map((apiResponse: HttpInfo<MetricRangeResponse>) => apiResponse.data));
    }

    /**
     * Get the daily peak CPU cores used for the given app
     * @param app The app ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsAppCpuUsagePerDayWithHttpInfo(app: number, start: number, end: number, _options?: ConfigurationOptions): Observable<HttpInfo<MetricRangeResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.metricsAppCpuUsagePerDay(app, start, end, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.metricsAppCpuUsagePerDayWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the daily peak CPU cores used for the given app
     * @param app The app ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsAppCpuUsagePerDay(app: number, start: number, end: number, _options?: ConfigurationOptions): Observable<MetricRangeResponse> {
        return this.metricsAppCpuUsagePerDayWithHttpInfo(app, start, end, _options).pipe(map((apiResponse: HttpInfo<MetricRangeResponse>) => apiResponse.data));
    }

    /**
     * Get the peak number of running instances for the given app
     * @param app The app ID
     */
    public metricsAppInstancesPeakInstantWithHttpInfo(app: number, _options?: ConfigurationOptions): Observable<HttpInfo<MetricInstantResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.metricsAppInstancesPeakInstant(app, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.metricsAppInstancesPeakInstantWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the peak number of running instances for the given app
     * @param app The app ID
     */
    public metricsAppInstancesPeakInstant(app: number, _options?: ConfigurationOptions): Observable<MetricInstantResponse> {
        return this.metricsAppInstancesPeakInstantWithHttpInfo(app, _options).pipe(map((apiResponse: HttpInfo<MetricInstantResponse>) => apiResponse.data));
    }

    /**
     * Get the running server instances for the given app
     * @param app The app ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsAppInstancesRunningWithHttpInfo(app: number, start: number, end: number, _options?: ConfigurationOptions): Observable<HttpInfo<MetricRangeResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.metricsAppInstancesRunning(app, start, end, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.metricsAppInstancesRunningWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the running server instances for the given app
     * @param app The app ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsAppInstancesRunning(app: number, start: number, end: number, _options?: ConfigurationOptions): Observable<MetricRangeResponse> {
        return this.metricsAppInstancesRunningWithHttpInfo(app, start, end, _options).pipe(map((apiResponse: HttpInfo<MetricRangeResponse>) => apiResponse.data));
    }

    /**
     * Get the current number of running instances for the given app
     * @param app The app ID
     */
    public metricsAppInstancesRunningInstantWithHttpInfo(app: number, _options?: ConfigurationOptions): Observable<HttpInfo<MetricInstantResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.metricsAppInstancesRunningInstant(app, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.metricsAppInstancesRunningInstantWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the current number of running instances for the given app
     * @param app The app ID
     */
    public metricsAppInstancesRunningInstant(app: number, _options?: ConfigurationOptions): Observable<MetricInstantResponse> {
        return this.metricsAppInstancesRunningInstantWithHttpInfo(app, _options).pipe(map((apiResponse: HttpInfo<MetricInstantResponse>) => apiResponse.data));
    }

    /**
     * Get the CPU usage by the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceCpuUsageWithHttpInfo(dockerService: number, start: number, end: number, _options?: ConfigurationOptions): Observable<HttpInfo<MetricRangeResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.metricsDockerServiceCpuUsage(dockerService, start, end, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.metricsDockerServiceCpuUsageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the CPU usage by the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceCpuUsage(dockerService: number, start: number, end: number, _options?: ConfigurationOptions): Observable<MetricRangeResponse> {
        return this.metricsDockerServiceCpuUsageWithHttpInfo(dockerService, start, end, _options).pipe(map((apiResponse: HttpInfo<MetricRangeResponse>) => apiResponse.data));
    }

    /**
     * Get the disk read throughput for the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceDiskReadWithHttpInfo(dockerService: number, start: number, end: number, _options?: ConfigurationOptions): Observable<HttpInfo<MetricRangeResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.metricsDockerServiceDiskRead(dockerService, start, end, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.metricsDockerServiceDiskReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the disk read throughput for the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceDiskRead(dockerService: number, start: number, end: number, _options?: ConfigurationOptions): Observable<MetricRangeResponse> {
        return this.metricsDockerServiceDiskReadWithHttpInfo(dockerService, start, end, _options).pipe(map((apiResponse: HttpInfo<MetricRangeResponse>) => apiResponse.data));
    }

    /**
     * Get disk write throughput for the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceDiskWriteWithHttpInfo(dockerService: number, start: number, end: number, _options?: ConfigurationOptions): Observable<HttpInfo<MetricRangeResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.metricsDockerServiceDiskWrite(dockerService, start, end, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.metricsDockerServiceDiskWriteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get disk write throughput for the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceDiskWrite(dockerService: number, start: number, end: number, _options?: ConfigurationOptions): Observable<MetricRangeResponse> {
        return this.metricsDockerServiceDiskWriteWithHttpInfo(dockerService, start, end, _options).pipe(map((apiResponse: HttpInfo<MetricRangeResponse>) => apiResponse.data));
    }

    /**
     * Get the memory usage by the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceMemoryUsageWithHttpInfo(dockerService: number, start: number, end: number, _options?: ConfigurationOptions): Observable<HttpInfo<MetricRangeResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.metricsDockerServiceMemoryUsage(dockerService, start, end, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.metricsDockerServiceMemoryUsageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the memory usage by the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceMemoryUsage(dockerService: number, start: number, end: number, _options?: ConfigurationOptions): Observable<MetricRangeResponse> {
        return this.metricsDockerServiceMemoryUsageWithHttpInfo(dockerService, start, end, _options).pipe(map((apiResponse: HttpInfo<MetricRangeResponse>) => apiResponse.data));
    }

    /**
     * Get the network egress for the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceNetworkEgressWithHttpInfo(dockerService: number, start: number, end: number, _options?: ConfigurationOptions): Observable<HttpInfo<MetricRangeResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.metricsDockerServiceNetworkEgress(dockerService, start, end, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.metricsDockerServiceNetworkEgressWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the network egress for the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceNetworkEgress(dockerService: number, start: number, end: number, _options?: ConfigurationOptions): Observable<MetricRangeResponse> {
        return this.metricsDockerServiceNetworkEgressWithHttpInfo(dockerService, start, end, _options).pipe(map((apiResponse: HttpInfo<MetricRangeResponse>) => apiResponse.data));
    }

    /**
     * Get the network ingress for the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceNetworkIngressWithHttpInfo(dockerService: number, start: number, end: number, _options?: ConfigurationOptions): Observable<HttpInfo<MetricRangeResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.metricsDockerServiceNetworkIngress(dockerService, start, end, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.metricsDockerServiceNetworkIngressWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the network ingress for the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceNetworkIngress(dockerService: number, start: number, end: number, _options?: ConfigurationOptions): Observable<MetricRangeResponse> {
        return this.metricsDockerServiceNetworkIngressWithHttpInfo(dockerService, start, end, _options).pipe(map((apiResponse: HttpInfo<MetricRangeResponse>) => apiResponse.data));
    }

    /**
     * Refresh token
     */
    public refreshAuthTokenWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Auth>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.refreshAuthToken(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.refreshAuthTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Refresh token
     */
    public refreshAuthToken(_options?: ConfigurationOptions): Observable<Auth> {
        return this.refreshAuthTokenWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Auth>) => apiResponse.data));
    }

    /**
     * Refresh a binary and the related entity
     * @param binary The binary ID
     */
    public refreshBinaryWithHttpInfo(binary: number, _options?: ConfigurationOptions): Observable<HttpInfo<Binary>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.refreshBinary(binary, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.refreshBinaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Refresh a binary and the related entity
     * @param binary The binary ID
     */
    public refreshBinary(binary: number, _options?: ConfigurationOptions): Observable<Binary> {
        return this.refreshBinaryWithHttpInfo(binary, _options).pipe(map((apiResponse: HttpInfo<Binary>) => apiResponse.data));
    }

    /**
     * Refresh the cache for all available tagged images
     * @param dockerRegistry The docker registry ID
     */
    public refreshTaggedImagesWithHttpInfo(dockerRegistry: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetTaggedImages200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.refreshTaggedImages(dockerRegistry, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.refreshTaggedImagesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Refresh the cache for all available tagged images
     * @param dockerRegistry The docker registry ID
     */
    public refreshTaggedImages(dockerRegistry: number, _options?: ConfigurationOptions): Observable<GetTaggedImages200Response> {
        return this.refreshTaggedImagesWithHttpInfo(dockerRegistry, _options).pipe(map((apiResponse: HttpInfo<GetTaggedImages200Response>) => apiResponse.data));
    }

    /**
     * Submit a new location request
     * @param occupiedLocationRequest
     */
    public requestLocationWithHttpInfo(occupiedLocationRequest: OccupiedLocationRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.requestLocation(occupiedLocationRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.requestLocationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Submit a new location request
     * @param occupiedLocationRequest
     */
    public requestLocation(occupiedLocationRequest: OccupiedLocationRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.requestLocationWithHttpInfo(occupiedLocationRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Restart service
     * @param dockerService The docker service ID
     */
    public restartServerWithHttpInfo(dockerService: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.restartServer(dockerService, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restartServerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Restart service
     * @param dockerService The docker service ID
     */
    public restartServer(dockerService: number, _options?: ConfigurationOptions): Observable<void> {
        return this.restartServerWithHttpInfo(dockerService, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Restore latest service backup
     * @param dockerService The docker service ID
     */
    public restoreBackupWithHttpInfo(dockerService: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.restoreBackup(dockerService, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restoreBackupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Restore latest service backup
     * @param dockerService The docker service ID
     */
    public restoreBackup(dockerService: number, _options?: ConfigurationOptions): Observable<void> {
        return this.restoreBackupWithHttpInfo(dockerService, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete all metadata
     * @param serverConfig The server config ID
     */
    public serverConfigsMetadataDeleteAllWithHttpInfo(serverConfig: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetServerConfigById200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.serverConfigsMetadataDeleteAll(serverConfig, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.serverConfigsMetadataDeleteAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete all metadata
     * @param serverConfig The server config ID
     */
    public serverConfigsMetadataDeleteAll(serverConfig: number, _options?: ConfigurationOptions): Observable<GetServerConfigById200Response> {
        return this.serverConfigsMetadataDeleteAllWithHttpInfo(serverConfig, _options).pipe(map((apiResponse: HttpInfo<GetServerConfigById200Response>) => apiResponse.data));
    }

    /**
     * Delete metadata keys
     * @param serverConfig The server config ID
     * @param metadata
     */
    public serverConfigsMetadataDeleteKeysWithHttpInfo(serverConfig: number, metadata: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<GetServerConfigById200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.serverConfigsMetadataDeleteKeys(serverConfig, metadata, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.serverConfigsMetadataDeleteKeysWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete metadata keys
     * @param serverConfig The server config ID
     * @param metadata
     */
    public serverConfigsMetadataDeleteKeys(serverConfig: number, metadata: Array<string>, _options?: ConfigurationOptions): Observable<GetServerConfigById200Response> {
        return this.serverConfigsMetadataDeleteKeysWithHttpInfo(serverConfig, metadata, _options).pipe(map((apiResponse: HttpInfo<GetServerConfigById200Response>) => apiResponse.data));
    }

    /**
     * Replaces the entire metadata.
     * Set metadata
     * @param serverConfig The server config ID
     * @param [setServerConfigMetadataRequest]
     */
    public serverConfigsMetadataSetWithHttpInfo(serverConfig: number, setServerConfigMetadataRequest?: SetServerConfigMetadataRequest, _options?: ConfigurationOptions): Observable<HttpInfo<GetServerConfigById200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.serverConfigsMetadataSet(serverConfig, setServerConfigMetadataRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.serverConfigsMetadataSetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replaces the entire metadata.
     * Set metadata
     * @param serverConfig The server config ID
     * @param [setServerConfigMetadataRequest]
     */
    public serverConfigsMetadataSet(serverConfig: number, setServerConfigMetadataRequest?: SetServerConfigMetadataRequest, _options?: ConfigurationOptions): Observable<GetServerConfigById200Response> {
        return this.serverConfigsMetadataSetWithHttpInfo(serverConfig, setServerConfigMetadataRequest, _options).pipe(map((apiResponse: HttpInfo<GetServerConfigById200Response>) => apiResponse.data));
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting other metadata.
     * Update metadata
     * @param serverConfig The server config ID
     * @param [patchServerConfigMetadataRequest]
     */
    public serverConfigsMetadataUpdateWithHttpInfo(serverConfig: number, patchServerConfigMetadataRequest?: PatchServerConfigMetadataRequest, _options?: ConfigurationOptions): Observable<HttpInfo<GetServerConfigById200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.serverConfigsMetadataUpdate(serverConfig, patchServerConfigMetadataRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.serverConfigsMetadataUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting other metadata.
     * Update metadata
     * @param serverConfig The server config ID
     * @param [patchServerConfigMetadataRequest]
     */
    public serverConfigsMetadataUpdate(serverConfig: number, patchServerConfigMetadataRequest?: PatchServerConfigMetadataRequest, _options?: ConfigurationOptions): Observable<GetServerConfigById200Response> {
        return this.serverConfigsMetadataUpdateWithHttpInfo(serverConfig, patchServerConfigMetadataRequest, _options).pipe(map((apiResponse: HttpInfo<GetServerConfigById200Response>) => apiResponse.data));
    }

    /**
     * Start service
     * @param dockerService The docker service ID
     */
    public startServerWithHttpInfo(dockerService: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.startServer(dockerService, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.startServerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Start service
     * @param dockerService The docker service ID
     */
    public startServer(dockerService: number, _options?: ConfigurationOptions): Observable<void> {
        return this.startServerWithHttpInfo(dockerService, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Start all services related to a specific app
     * @param app The app ID
     */
    public startServersForAppWithHttpInfo(app: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.startServersForApp(app, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.startServersForAppWithHttpInfo(rsp)));
            }));
    }

    /**
     * Start all services related to a specific app
     * @param app The app ID
     */
    public startServersForApp(app: number, _options?: ConfigurationOptions): Observable<void> {
        return this.startServersForAppWithHttpInfo(app, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Start all services related to a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public startServersForAppLocationSettingWithHttpInfo(appLocationSetting: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.startServersForAppLocationSetting(appLocationSetting, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.startServersForAppLocationSettingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Start all services related to a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public startServersForAppLocationSetting(appLocationSetting: number, _options?: ConfigurationOptions): Observable<void> {
        return this.startServersForAppLocationSettingWithHttpInfo(appLocationSetting, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Start all services related to a specific binary
     * @param binary The binary ID
     */
    public startServersForBinaryWithHttpInfo(binary: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.startServersForBinary(binary, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.startServersForBinaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Start all services related to a specific binary
     * @param binary The binary ID
     */
    public startServersForBinary(binary: number, _options?: ConfigurationOptions): Observable<void> {
        return this.startServersForBinaryWithHttpInfo(binary, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Start all services related to a specific server config
     * @param serverConfig The server config ID
     */
    public startServersForServerConfigWithHttpInfo(serverConfig: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.startServersForServerConfig(serverConfig, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.startServersForServerConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Start all services related to a specific server config
     * @param serverConfig The server config ID
     */
    public startServersForServerConfig(serverConfig: number, _options?: ConfigurationOptions): Observable<void> {
        return this.startServersForServerConfigWithHttpInfo(serverConfig, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get branches for a specific steamworks app ID
     * @param appId The steamworks app id
     */
    public steamGetBranchesWithHttpInfo(appId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<SteamBranch>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.steamGetBranches(appId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.steamGetBranchesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get branches for a specific steamworks app ID
     * @param appId The steamworks app id
     */
    public steamGetBranches(appId: number, _options?: ConfigurationOptions): Observable<Array<SteamBranch>> {
        return this.steamGetBranchesWithHttpInfo(appId, _options).pipe(map((apiResponse: HttpInfo<Array<SteamBranch>>) => apiResponse.data));
    }

    /**
     * Get launchers for a specific steamworks app ID, optionally filtered by OS
     * @param appId The steamworks app id
     * @param [os] The operating system of the binary
     */
    public steamGetLauncherWithHttpInfo(appId: number, os?: OperatingSystem, _options?: ConfigurationOptions): Observable<HttpInfo<Array<SteamLauncher>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.steamGetLauncher(appId, os, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
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
    public steamGetLauncher(appId: number, os?: OperatingSystem, _options?: ConfigurationOptions): Observable<Array<SteamLauncher>> {
        return this.steamGetLauncherWithHttpInfo(appId, os, _options).pipe(map((apiResponse: HttpInfo<Array<SteamLauncher>>) => apiResponse.data));
    }

    /**
     * Stop service
     * @param dockerService The docker service ID
     */
    public stopServerWithHttpInfo(dockerService: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.stopServer(dockerService, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stopServerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stop service
     * @param dockerService The docker service ID
     */
    public stopServer(dockerService: number, _options?: ConfigurationOptions): Observable<void> {
        return this.stopServerWithHttpInfo(dockerService, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Stop all services related to a specific app
     * @param app The app ID
     */
    public stopServersForAppWithHttpInfo(app: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.stopServersForApp(app, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stopServersForAppWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stop all services related to a specific app
     * @param app The app ID
     */
    public stopServersForApp(app: number, _options?: ConfigurationOptions): Observable<void> {
        return this.stopServersForAppWithHttpInfo(app, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Stop all services related to a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public stopServersForAppLocationSettingWithHttpInfo(appLocationSetting: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.stopServersForAppLocationSetting(appLocationSetting, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stopServersForAppLocationSettingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stop all services related to a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public stopServersForAppLocationSetting(appLocationSetting: number, _options?: ConfigurationOptions): Observable<void> {
        return this.stopServersForAppLocationSettingWithHttpInfo(appLocationSetting, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Stop all services related to a specific binary
     * @param binary The binary ID
     */
    public stopServersForBinaryWithHttpInfo(binary: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.stopServersForBinary(binary, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stopServersForBinaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stop all services related to a specific binary
     * @param binary The binary ID
     */
    public stopServersForBinary(binary: number, _options?: ConfigurationOptions): Observable<void> {
        return this.stopServersForBinaryWithHttpInfo(binary, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Stop all services related to a specific server config
     * @param serverConfig The server config ID
     */
    public stopServersForServerConfigWithHttpInfo(serverConfig: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.stopServersForServerConfig(serverConfig, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stopServersForServerConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stop all services related to a specific server config
     * @param serverConfig The server config ID
     */
    public stopServersForServerConfig(serverConfig: number, _options?: ConfigurationOptions): Observable<void> {
        return this.stopServersForServerConfigWithHttpInfo(serverConfig, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update a specific app
     * @param app The app ID
     * @param updateAppRequest
     */
    public updateAppByIdWithHttpInfo(app: number, updateAppRequest: UpdateAppRequest, _options?: ConfigurationOptions): Observable<HttpInfo<App>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateAppById(app, updateAppRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
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
    public updateAppById(app: number, updateAppRequest: UpdateAppRequest, _options?: ConfigurationOptions): Observable<App> {
        return this.updateAppByIdWithHttpInfo(app, updateAppRequest, _options).pipe(map((apiResponse: HttpInfo<App>) => apiResponse.data));
    }

    /**
     * Update a location setting
     * @param appLocationSetting The app location setting ID
     * @param updateAppLocationSettingRequest
     */
    public updateAppLocationSettingWithHttpInfo(appLocationSetting: number, updateAppLocationSettingRequest: UpdateAppLocationSettingRequest, _options?: ConfigurationOptions): Observable<HttpInfo<GetAppLocationSettingById200Response>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateAppLocationSetting(appLocationSetting, updateAppLocationSettingRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
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
    public updateAppLocationSetting(appLocationSetting: number, updateAppLocationSettingRequest: UpdateAppLocationSettingRequest, _options?: ConfigurationOptions): Observable<GetAppLocationSettingById200Response> {
        return this.updateAppLocationSettingWithHttpInfo(appLocationSetting, updateAppLocationSettingRequest, _options).pipe(map((apiResponse: HttpInfo<GetAppLocationSettingById200Response>) => apiResponse.data));
    }

    /**
     * Update a binary and the related entity
     * @param binary The binary ID
     * @param updateBinaryRequest
     */
    public updateBinaryWithHttpInfo(binary: number, updateBinaryRequest: UpdateBinaryRequest, _options?: ConfigurationOptions): Observable<HttpInfo<Binary>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateBinary(binary, updateBinaryRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
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
    public updateBinary(binary: number, updateBinaryRequest: UpdateBinaryRequest, _options?: ConfigurationOptions): Observable<Binary> {
        return this.updateBinaryWithHttpInfo(binary, updateBinaryRequest, _options).pipe(map((apiResponse: HttpInfo<Binary>) => apiResponse.data));
    }

    /**
     * Update a specific docker registry
     * @param dockerRegistry The docker registry ID
     * @param updateDockerRegistryRequest
     */
    public updateDockerRegistryWithHttpInfo(dockerRegistry: number, updateDockerRegistryRequest: UpdateDockerRegistryRequest, _options?: ConfigurationOptions): Observable<HttpInfo<DockerRegistry>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateDockerRegistry(dockerRegistry, updateDockerRegistryRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
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
    public updateDockerRegistry(dockerRegistry: number, updateDockerRegistryRequest: UpdateDockerRegistryRequest, _options?: ConfigurationOptions): Observable<DockerRegistry> {
        return this.updateDockerRegistryWithHttpInfo(dockerRegistry, updateDockerRegistryRequest, _options).pipe(map((apiResponse: HttpInfo<DockerRegistry>) => apiResponse.data));
    }

    /**
     * Update a server config
     * @param serverConfig The server config ID
     * @param updateServerConfigRequest
     */
    public updateServerConfigWithHttpInfo(serverConfig: number, updateServerConfigRequest: UpdateServerConfigRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ServerConfig>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateServerConfig(serverConfig, updateServerConfigRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
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
    public updateServerConfig(serverConfig: number, updateServerConfigRequest: UpdateServerConfigRequest, _options?: ConfigurationOptions): Observable<ServerConfig> {
        return this.updateServerConfigWithHttpInfo(serverConfig, updateServerConfigRequest, _options).pipe(map((apiResponse: HttpInfo<ServerConfig>) => apiResponse.data));
    }

}
