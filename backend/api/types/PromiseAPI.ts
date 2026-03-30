import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration.ts'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware.ts';

import { App } from '../models/App.ts';
import { AppBillingState } from '../models/AppBillingState.ts';
import { AppLocationSetting } from '../models/AppLocationSetting.ts';
import { AppLocationSettingStatus } from '../models/AppLocationSettingStatus.ts';
import { AppStatus } from '../models/AppStatus.ts';
import { Architecture } from '../models/Architecture.ts';
import { Auth } from '../models/Auth.ts';
import { AuthFsidRequest } from '../models/AuthFsidRequest.ts';
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
import { DnsMode } from '../models/DnsMode.ts';
import { DockerImage } from '../models/DockerImage.ts';
import { DockerRegistry } from '../models/DockerRegistry.ts';
import { DockerRegistryType } from '../models/DockerRegistryType.ts';
import { DockerServiceDnsReachable } from '../models/DockerServiceDnsReachable.ts';
import { EnvironmentVariable } from '../models/EnvironmentVariable.ts';
import { EnvironmentVariableDefinition } from '../models/EnvironmentVariableDefinition.ts';
import { EnvironmentVariableType } from '../models/EnvironmentVariableType.ts';
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
import { GetServerConfigs200Response } from '../models/GetServerConfigs200Response.ts';
import { GetServers200Response } from '../models/GetServers200Response.ts';
import { GetTaggedImages200Response } from '../models/GetTaggedImages200Response.ts';
import { InlineObject } from '../models/InlineObject.ts';
import { InlineObject1 } from '../models/InlineObject1.ts';
import { Location } from '../models/Location.ts';
import { MetricData } from '../models/MetricData.ts';
import { MetricInstantData } from '../models/MetricInstantData.ts';
import { MetricInstantResponse } from '../models/MetricInstantResponse.ts';
import { MetricInstantResult } from '../models/MetricInstantResult.ts';
import { MetricRangeResponse } from '../models/MetricRangeResponse.ts';
import { MetricTimeResult } from '../models/MetricTimeResult.ts';
import { Mount } from '../models/Mount.ts';
import { Node } from '../models/Node.ts';
import { OperatingSystem } from '../models/OperatingSystem.ts';
import { PatchMetadataRequest } from '../models/PatchMetadataRequest.ts';
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
import { ObservableAppApi } from './ObservableAPI.ts';

import { AppApiRequestFactory, AppApiResponseProcessor} from "../apis/AppApi.ts";
export class PromiseAppApi {
    private api: ObservableAppApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AppApiRequestFactory,
        responseProcessor?: AppApiResponseProcessor
    ) {
        this.api = new ObservableAppApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check URL reachability for service DNS URLs
     * @param app The app ID
     * @param dockerService The docker service ID
     */
    public checkServerDnsWithHttpInfo(app: number, dockerService: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<DockerServiceDnsReachable>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.checkServerDnsWithHttpInfo(app, dockerService, observableOptions);
        return result.toPromise();
    }

    /**
     * Check URL reachability for service DNS URLs
     * @param app The app ID
     * @param dockerService The docker service ID
     */
    public checkServerDns(app: number, dockerService: number, _options?: PromiseConfigurationOptions): Promise<Array<DockerServiceDnsReachable>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.checkServerDns(app, dockerService, observableOptions);
        return result.toPromise();
    }

    /**
     * Create an app
     * @param storeAppRequest
     */
    public createAppWithHttpInfo(storeAppRequest: StoreAppRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<App>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAppWithHttpInfo(storeAppRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create an app
     * @param storeAppRequest
     */
    public createApp(storeAppRequest: StoreAppRequest, _options?: PromiseConfigurationOptions): Promise<App> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createApp(storeAppRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new location setting
     * @param app The app ID
     * @param storeAppLocationSettingRequest
     */
    public createAppLocationSettingWithHttpInfo(app: number, storeAppLocationSettingRequest: StoreAppLocationSettingRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AppLocationSetting>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAppLocationSettingWithHttpInfo(app, storeAppLocationSettingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new location setting
     * @param app The app ID
     * @param storeAppLocationSettingRequest
     */
    public createAppLocationSetting(app: number, storeAppLocationSettingRequest: StoreAppLocationSettingRequest, _options?: PromiseConfigurationOptions): Promise<AppLocationSetting> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createAppLocationSetting(app, storeAppLocationSettingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create service backup
     * @param dockerService The docker service ID
     * @param createBackupDockerServiceRequest
     */
    public createBackupWithHttpInfo(dockerService: number, createBackupDockerServiceRequest: CreateBackupDockerServiceRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBackupWithHttpInfo(dockerService, createBackupDockerServiceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create service backup
     * @param dockerService The docker service ID
     * @param createBackupDockerServiceRequest
     */
    public createBackup(dockerService: number, createBackupDockerServiceRequest: CreateBackupDockerServiceRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBackup(dockerService, createBackupDockerServiceRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a binary and the related entity
     * @param app The app ID
     * @param storeBinaryRequest
     */
    public createBinaryWithHttpInfo(app: number, storeBinaryRequest: StoreBinaryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Binary>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBinaryWithHttpInfo(app, storeBinaryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a binary and the related entity
     * @param app The app ID
     * @param storeBinaryRequest
     */
    public createBinary(app: number, storeBinaryRequest: StoreBinaryRequest, _options?: PromiseConfigurationOptions): Promise<Binary> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createBinary(app, storeBinaryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new docker registry
     * @param storeDockerRegistryRequest
     */
    public createDockerRegistryWithHttpInfo(storeDockerRegistryRequest: StoreDockerRegistryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DockerRegistry>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDockerRegistryWithHttpInfo(storeDockerRegistryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new docker registry
     * @param storeDockerRegistryRequest
     */
    public createDockerRegistry(storeDockerRegistryRequest: StoreDockerRegistryRequest, _options?: PromiseConfigurationOptions): Promise<DockerRegistry> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createDockerRegistry(storeDockerRegistryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a Minecraft template app
     * @param [storeMinecraftTemplateRequest]
     */
    public createMinecraftTemplateWithHttpInfo(storeMinecraftTemplateRequest?: StoreMinecraftTemplateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<App>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createMinecraftTemplateWithHttpInfo(storeMinecraftTemplateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a Minecraft template app
     * @param [storeMinecraftTemplateRequest]
     */
    public createMinecraftTemplate(storeMinecraftTemplateRequest?: StoreMinecraftTemplateRequest, _options?: PromiseConfigurationOptions): Promise<App> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createMinecraftTemplate(storeMinecraftTemplateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create an OpenClaw template app
     * @param [storeOpenClawTemplateRequest]
     */
    public createOpenClawTemplateWithHttpInfo(storeOpenClawTemplateRequest?: StoreOpenClawTemplateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TemplateAppResult>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOpenClawTemplateWithHttpInfo(storeOpenClawTemplateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create an OpenClaw template app
     * @param [storeOpenClawTemplateRequest]
     */
    public createOpenClawTemplate(storeOpenClawTemplateRequest?: StoreOpenClawTemplateRequest, _options?: PromiseConfigurationOptions): Promise<TemplateAppResult> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createOpenClawTemplate(storeOpenClawTemplateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a Palworld template app
     * @param [storePalworldTemplateRequest]
     */
    public createPalworldTemplateWithHttpInfo(storePalworldTemplateRequest?: StorePalworldTemplateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<App>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPalworldTemplateWithHttpInfo(storePalworldTemplateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a Palworld template app
     * @param [storePalworldTemplateRequest]
     */
    public createPalworldTemplate(storePalworldTemplateRequest?: StorePalworldTemplateRequest, _options?: PromiseConfigurationOptions): Promise<App> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createPalworldTemplate(storePalworldTemplateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new server config
     * @param app The app ID
     * @param storeServerConfigRequest
     */
    public createServerConfigWithHttpInfo(app: number, storeServerConfigRequest: StoreServerConfigRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ServerConfig>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createServerConfigWithHttpInfo(app, storeServerConfigRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new server config
     * @param app The app ID
     * @param storeServerConfigRequest
     */
    public createServerConfig(app: number, storeServerConfigRequest: StoreServerConfigRequest, _options?: PromiseConfigurationOptions): Promise<ServerConfig> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.createServerConfig(app, storeServerConfigRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific app
     * @param app The app ID
     */
    public deleteAppWithHttpInfo(app: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAppWithHttpInfo(app, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific app
     * @param app The app ID
     */
    public deleteApp(app: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteApp(app, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a location setting
     * @param appLocationSetting The app location setting ID
     */
    public deleteAppLocationSettingWithHttpInfo(appLocationSetting: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAppLocationSettingWithHttpInfo(appLocationSetting, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a location setting
     * @param appLocationSetting The app location setting ID
     */
    public deleteAppLocationSetting(appLocationSetting: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteAppLocationSetting(appLocationSetting, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specified binary
     * @param binary The binary ID
     */
    public deleteBinaryWithHttpInfo(binary: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteBinaryWithHttpInfo(binary, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specified binary
     * @param binary The binary ID
     */
    public deleteBinary(binary: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteBinary(binary, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public deleteDockerRegistryWithHttpInfo(dockerRegistry: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDockerRegistryWithHttpInfo(dockerRegistry, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public deleteDockerRegistry(dockerRegistry: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteDockerRegistry(dockerRegistry, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific server config
     * @param serverConfig The server config ID
     */
    public deleteServerConfigWithHttpInfo(serverConfig: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteServerConfigWithHttpInfo(serverConfig, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a specific server config
     * @param serverConfig The server config ID
     */
    public deleteServerConfig(serverConfig: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteServerConfig(serverConfig, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete all unused apps
     */
    public deleteUnusedAppsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteUnusedAppsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Delete all unused apps
     */
    public deleteUnusedApps(_options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteUnusedApps(observableOptions);
        return result.toPromise();
    }

    /**
     * Delete all unused binaries
     * @param app The app ID
     */
    public deleteUnusedBinariesWithHttpInfo(app: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteUnusedBinariesWithHttpInfo(app, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete all unused binaries
     * @param app The app ID
     */
    public deleteUnusedBinaries(app: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteUnusedBinaries(app, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete all unused server configs
     * @param app The app ID
     */
    public deleteUnusedServerConfigsWithHttpInfo(app: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteUnusedServerConfigsWithHttpInfo(app, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete all unused server configs
     * @param app The app ID
     */
    public deleteUnusedServerConfigs(app: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteUnusedServerConfigs(app, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete all service metadata
     * @param dockerService The docker service ID
     */
    public dockerServicesMetadataDeleteAllWithHttpInfo(dockerService: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Server>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.dockerServicesMetadataDeleteAllWithHttpInfo(dockerService, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete all service metadata
     * @param dockerService The docker service ID
     */
    public dockerServicesMetadataDeleteAll(dockerService: number, _options?: PromiseConfigurationOptions): Promise<Server> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.dockerServicesMetadataDeleteAll(dockerService, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete service metadata keys
     * @param dockerService The docker service ID
     * @param metadata
     */
    public dockerServicesMetadataDeleteKeysWithHttpInfo(dockerService: number, metadata: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Server>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.dockerServicesMetadataDeleteKeysWithHttpInfo(dockerService, metadata, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete service metadata keys
     * @param dockerService The docker service ID
     * @param metadata
     */
    public dockerServicesMetadataDeleteKeys(dockerService: number, metadata: Array<string>, _options?: PromiseConfigurationOptions): Promise<Server> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.dockerServicesMetadataDeleteKeys(dockerService, metadata, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces the entire metadata set with only the values provided in the request.
     * Set service metadata
     * @param dockerService The docker service ID
     * @param [setMetadataRequest]
     */
    public dockerServicesMetadataSetWithHttpInfo(dockerService: number, setMetadataRequest?: SetMetadataRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Server>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.dockerServicesMetadataSetWithHttpInfo(dockerService, setMetadataRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces the entire metadata set with only the values provided in the request.
     * Set service metadata
     * @param dockerService The docker service ID
     * @param [setMetadataRequest]
     */
    public dockerServicesMetadataSet(dockerService: number, setMetadataRequest?: SetMetadataRequest, _options?: PromiseConfigurationOptions): Promise<Server> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.dockerServicesMetadataSet(dockerService, setMetadataRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting metadata that is not mentioned.
     * Update service metadata
     * @param dockerService The docker service ID
     * @param [patchMetadataRequest]
     */
    public dockerServicesMetadataUpdateWithHttpInfo(dockerService: number, patchMetadataRequest?: PatchMetadataRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Server>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.dockerServicesMetadataUpdateWithHttpInfo(dockerService, patchMetadataRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting metadata that is not mentioned.
     * Update service metadata
     * @param dockerService The docker service ID
     * @param [patchMetadataRequest]
     */
    public dockerServicesMetadataUpdate(dockerService: number, patchMetadataRequest?: PatchMetadataRequest, _options?: PromiseConfigurationOptions): Promise<Server> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.dockerServicesMetadataUpdate(dockerService, patchMetadataRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Download service logs
     * @param dockerService The docker service ID
     * @param [streamSource] Only return logs filtered by stream source like stdout or stderr.
     */
    public downloadServerLogsWithHttpInfo(dockerService: number, streamSource?: 'stdout' | 'stderr', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ServiceLogs>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.downloadServerLogsWithHttpInfo(dockerService, streamSource, observableOptions);
        return result.toPromise();
    }

    /**
     * Download service logs
     * @param dockerService The docker service ID
     * @param [streamSource] Only return logs filtered by stream source like stdout or stderr.
     */
    public downloadServerLogs(dockerService: number, streamSource?: 'stdout' | 'stderr', _options?: PromiseConfigurationOptions): Promise<ServiceLogs> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.downloadServerLogs(dockerService, streamSource, observableOptions);
        return result.toPromise();
    }

    /**
     * Show a specific app
     * @param app The app ID
     */
    public getAppByIdWithHttpInfo(app: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<App>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAppByIdWithHttpInfo(app, observableOptions);
        return result.toPromise();
    }

    /**
     * Show a specific app
     * @param app The app ID
     */
    public getAppById(app: number, _options?: PromiseConfigurationOptions): Promise<App> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAppById(app, observableOptions);
        return result.toPromise();
    }

    /**
     * Show a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public getAppLocationSettingByIdWithHttpInfo(appLocationSetting: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AppLocationSetting>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAppLocationSettingByIdWithHttpInfo(appLocationSetting, observableOptions);
        return result.toPromise();
    }

    /**
     * Show a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public getAppLocationSettingById(appLocationSetting: number, _options?: PromiseConfigurationOptions): Promise<AppLocationSetting> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAppLocationSettingById(appLocationSetting, observableOptions);
        return result.toPromise();
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
    public getAppLocationSettingsWithHttpInfo(app: number, perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterName?: string, filterNamePartial?: string, filterServerConfigId?: number, filterNumInstances?: number, filterStatus?: string, filterMaintenance?: boolean, filterLocationCity?: string, filterLocationCityDisplay?: string, filterLocationContinent?: string, filterLocationCountry?: string, filterServerConfigName?: string, filterServerConfigCommand?: string, filterServerConfigArgs?: string, filterServerConfigNotes?: string, filterServerConfigStatus?: string, filterServerConfigMaintenance?: boolean, filterServerConfigResourcePackageSlug?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetAppLocationSettings200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAppLocationSettingsWithHttpInfo(app, perPage, page, sort, filterId, filterName, filterNamePartial, filterServerConfigId, filterNumInstances, filterStatus, filterMaintenance, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterServerConfigName, filterServerConfigCommand, filterServerConfigArgs, filterServerConfigNotes, filterServerConfigStatus, filterServerConfigMaintenance, filterServerConfigResourcePackageSlug, observableOptions);
        return result.toPromise();
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
    public getAppLocationSettings(app: number, perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterName?: string, filterNamePartial?: string, filterServerConfigId?: number, filterNumInstances?: number, filterStatus?: string, filterMaintenance?: boolean, filterLocationCity?: string, filterLocationCityDisplay?: string, filterLocationContinent?: string, filterLocationCountry?: string, filterServerConfigName?: string, filterServerConfigCommand?: string, filterServerConfigArgs?: string, filterServerConfigNotes?: string, filterServerConfigStatus?: string, filterServerConfigMaintenance?: boolean, filterServerConfigResourcePackageSlug?: string, _options?: PromiseConfigurationOptions): Promise<GetAppLocationSettings200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAppLocationSettings(app, perPage, page, sort, filterId, filterName, filterNamePartial, filterServerConfigId, filterNumInstances, filterStatus, filterMaintenance, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterServerConfigName, filterServerConfigCommand, filterServerConfigArgs, filterServerConfigNotes, filterServerConfigStatus, filterServerConfigMaintenance, filterServerConfigResourcePackageSlug, observableOptions);
        return result.toPromise();
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
    public getAppWalletsWithHttpInfo(app: number, perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterBalance?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetAppWallets200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAppWalletsWithHttpInfo(app, perPage, page, sort, filterId, filterBalance, observableOptions);
        return result.toPromise();
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
    public getAppWallets(app: number, perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterBalance?: number, _options?: PromiseConfigurationOptions): Promise<GetAppWallets200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAppWallets(app, perPage, page, sort, filterId, filterBalance, observableOptions);
        return result.toPromise();
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
    public getAppsWithHttpInfo(perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterName?: string, filterNamePartial?: string, filterInUse?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetApps200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAppsWithHttpInfo(perPage, page, sort, filterId, filterName, filterNamePartial, filterInUse, observableOptions);
        return result.toPromise();
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
    public getApps(perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterName?: string, filterNamePartial?: string, filterInUse?: boolean, _options?: PromiseConfigurationOptions): Promise<GetApps200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getApps(perPage, page, sort, filterId, filterName, filterNamePartial, filterInUse, observableOptions);
        return result.toPromise();
    }

    /**
     * Authenticates the user based on the user\'s email, password, and session ID. If the user is authenticated successfully, it returns the user\'s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.
     * Get token
     * @param authRequest
     */
    public getAuthTokenWithHttpInfo(authRequest: AuthRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Auth>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAuthTokenWithHttpInfo(authRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Authenticates the user based on the user\'s email, password, and session ID. If the user is authenticated successfully, it returns the user\'s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.
     * Get token
     * @param authRequest
     */
    public getAuthToken(authRequest: AuthRequest, _options?: PromiseConfigurationOptions): Promise<Auth> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAuthToken(authRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Authenticates the user based on the Fusion Session ID (fsid). If the user is authenticated successfully, it returns the user\'s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.
     * Get token via fsid
     * @param authFsidRequest
     */
    public getAuthTokenViaFsidWithHttpInfo(authFsidRequest: AuthFsidRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Auth>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAuthTokenViaFsidWithHttpInfo(authFsidRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Authenticates the user based on the Fusion Session ID (fsid). If the user is authenticated successfully, it returns the user\'s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.
     * Get token via fsid
     * @param authFsidRequest
     */
    public getAuthTokenViaFsid(authFsidRequest: AuthFsidRequest, _options?: PromiseConfigurationOptions): Promise<Auth> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAuthTokenViaFsid(authFsidRequest, observableOptions);
        return result.toPromise();
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
    public getBackupsWithHttpInfo(dockerService: number, perPage?: number, page?: number, sort?: Array<string>, filterName?: string, filterArchiveName?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetBackups200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBackupsWithHttpInfo(dockerService, perPage, page, sort, filterName, filterArchiveName, observableOptions);
        return result.toPromise();
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
    public getBackups(dockerService: number, perPage?: number, page?: number, sort?: Array<string>, filterName?: string, filterArchiveName?: string, _options?: PromiseConfigurationOptions): Promise<GetBackups200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBackups(dockerService, perPage, page, sort, filterName, filterArchiveName, observableOptions);
        return result.toPromise();
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
    public getBinariesWithHttpInfo(app: number, perPage?: number, page?: number, sort?: Array<string>, filterName?: string, filterNamePartial?: string, filterVersion?: string, filterType?: string, filterOs?: string, filterMaintenance?: boolean, filterStatus?: string, filterInUse?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetBinaries200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinariesWithHttpInfo(app, perPage, page, sort, filterName, filterNamePartial, filterVersion, filterType, filterOs, filterMaintenance, filterStatus, filterInUse, observableOptions);
        return result.toPromise();
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
    public getBinaries(app: number, perPage?: number, page?: number, sort?: Array<string>, filterName?: string, filterNamePartial?: string, filterVersion?: string, filterType?: string, filterOs?: string, filterMaintenance?: boolean, filterStatus?: string, filterInUse?: boolean, _options?: PromiseConfigurationOptions): Promise<GetBinaries200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaries(app, perPage, page, sort, filterName, filterNamePartial, filterVersion, filterType, filterOs, filterMaintenance, filterStatus, filterInUse, observableOptions);
        return result.toPromise();
    }

    /**
     * Show a specific binary
     * @param binary The binary ID
     */
    public getBinaryByIdWithHttpInfo(binary: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Binary>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryByIdWithHttpInfo(binary, observableOptions);
        return result.toPromise();
    }

    /**
     * Show a specific binary
     * @param binary The binary ID
     */
    public getBinaryById(binary: number, _options?: PromiseConfigurationOptions): Promise<Binary> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBinaryById(binary, observableOptions);
        return result.toPromise();
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
    public getDockerRegistriesWithHttpInfo(perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterType?: string, filterName?: string, filterNamePartial?: string, filterUrl?: string, filterOrganization?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetDockerRegistries200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDockerRegistriesWithHttpInfo(perPage, page, sort, filterId, filterType, filterName, filterNamePartial, filterUrl, filterOrganization, observableOptions);
        return result.toPromise();
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
    public getDockerRegistries(perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterType?: string, filterName?: string, filterNamePartial?: string, filterUrl?: string, filterOrganization?: string, _options?: PromiseConfigurationOptions): Promise<GetDockerRegistries200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDockerRegistries(perPage, page, sort, filterId, filterType, filterName, filterNamePartial, filterUrl, filterOrganization, observableOptions);
        return result.toPromise();
    }

    /**
     * Display a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public getDockerRegistryByIdWithHttpInfo(dockerRegistry: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DockerRegistry>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDockerRegistryByIdWithHttpInfo(dockerRegistry, observableOptions);
        return result.toPromise();
    }

    /**
     * Display a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public getDockerRegistryById(dockerRegistry: number, _options?: PromiseConfigurationOptions): Promise<DockerRegistry> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getDockerRegistryById(dockerRegistry, observableOptions);
        return result.toPromise();
    }

    /**
     * Get latest service backup
     * @param dockerService The docker service ID
     */
    public getLatestBackupWithHttpInfo(dockerService: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Backup>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLatestBackupWithHttpInfo(dockerService, observableOptions);
        return result.toPromise();
    }

    /**
     * Get latest service backup
     * @param dockerService The docker service ID
     */
    public getLatestBackup(dockerService: number, _options?: PromiseConfigurationOptions): Promise<Backup> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLatestBackup(dockerService, observableOptions);
        return result.toPromise();
    }

    /**
     * Show a unique listing of locations based on active and ready worker nodes
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     */
    public getLocationsWithHttpInfo(perPage?: number, page?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetLocations200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLocationsWithHttpInfo(perPage, page, observableOptions);
        return result.toPromise();
    }

    /**
     * Show a unique listing of locations based on active and ready worker nodes
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     */
    public getLocations(perPage?: number, page?: number, _options?: PromiseConfigurationOptions): Promise<GetLocations200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getLocations(perPage, page, observableOptions);
        return result.toPromise();
    }

    /**
     * Show a specified resource package
     * @param resourcePackage The resource package ID
     */
    public getResourcePackageByIdWithHttpInfo(resourcePackage: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ResourcePackage>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getResourcePackageByIdWithHttpInfo(resourcePackage, observableOptions);
        return result.toPromise();
    }

    /**
     * Show a specified resource package
     * @param resourcePackage The resource package ID
     */
    public getResourcePackageById(resourcePackage: number, _options?: PromiseConfigurationOptions): Promise<ResourcePackage> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getResourcePackageById(resourcePackage, observableOptions);
        return result.toPromise();
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
    public getResourcePackagesWithHttpInfo(perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterName?: string, filterNamePartial?: string, filterSlug?: string, filterType?: string, filterCpuLimit?: number, filterMemoryLimitMiB?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetResourcePackages200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getResourcePackagesWithHttpInfo(perPage, page, sort, filterId, filterName, filterNamePartial, filterSlug, filterType, filterCpuLimit, filterMemoryLimitMiB, observableOptions);
        return result.toPromise();
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
    public getResourcePackages(perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterName?: string, filterNamePartial?: string, filterSlug?: string, filterType?: string, filterCpuLimit?: number, filterMemoryLimitMiB?: number, _options?: PromiseConfigurationOptions): Promise<GetResourcePackages200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getResourcePackages(perPage, page, sort, filterId, filterName, filterNamePartial, filterSlug, filterType, filterCpuLimit, filterMemoryLimitMiB, observableOptions);
        return result.toPromise();
    }

    /**
     * Get service backup download URL
     * @param dockerService The docker service ID
     */
    public getServerBackupDownloadUrlWithHttpInfo(dockerService: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BackupDownload>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getServerBackupDownloadUrlWithHttpInfo(dockerService, observableOptions);
        return result.toPromise();
    }

    /**
     * Get service backup download URL
     * @param dockerService The docker service ID
     */
    public getServerBackupDownloadUrl(dockerService: number, _options?: PromiseConfigurationOptions): Promise<BackupDownload> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getServerBackupDownloadUrl(dockerService, observableOptions);
        return result.toPromise();
    }

    /**
     * Display a specific service
     * @param app The app ID
     * @param dockerService The docker service ID
     */
    public getServerByIdWithHttpInfo(app: number, dockerService: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Server>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getServerByIdWithHttpInfo(app, dockerService, observableOptions);
        return result.toPromise();
    }

    /**
     * Display a specific service
     * @param app The app ID
     * @param dockerService The docker service ID
     */
    public getServerById(app: number, dockerService: number, _options?: PromiseConfigurationOptions): Promise<Server> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getServerById(app, dockerService, observableOptions);
        return result.toPromise();
    }

    /**
     * Show a specific server config
     * @param serverConfig The server config ID
     */
    public getServerConfigByIdWithHttpInfo(serverConfig: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ServerConfig>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getServerConfigByIdWithHttpInfo(serverConfig, observableOptions);
        return result.toPromise();
    }

    /**
     * Show a specific server config
     * @param serverConfig The server config ID
     */
    public getServerConfigById(serverConfig: number, _options?: PromiseConfigurationOptions): Promise<ServerConfig> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getServerConfigById(serverConfig, observableOptions);
        return result.toPromise();
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
     */
    public getServerConfigsWithHttpInfo(app: number, perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterBinaryId?: number, filterName?: string, filterNamePartial?: string, filterCommand?: string, filterArgs?: string, filterNotes?: string, filterStatus?: string, filterMaintenance?: boolean, filterDnsServiceEnabled?: boolean, filterResourcePackageSlug?: string, filterInUse?: boolean, filterBinaryName?: string, filterBinaryVersion?: string, filterBinaryType?: string, filterBinaryOs?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetServerConfigs200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getServerConfigsWithHttpInfo(app, perPage, page, sort, filterId, filterBinaryId, filterName, filterNamePartial, filterCommand, filterArgs, filterNotes, filterStatus, filterMaintenance, filterDnsServiceEnabled, filterResourcePackageSlug, filterInUse, filterBinaryName, filterBinaryVersion, filterBinaryType, filterBinaryOs, observableOptions);
        return result.toPromise();
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
     */
    public getServerConfigs(app: number, perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterBinaryId?: number, filterName?: string, filterNamePartial?: string, filterCommand?: string, filterArgs?: string, filterNotes?: string, filterStatus?: string, filterMaintenance?: boolean, filterDnsServiceEnabled?: boolean, filterResourcePackageSlug?: string, filterInUse?: boolean, filterBinaryName?: string, filterBinaryVersion?: string, filterBinaryType?: string, filterBinaryOs?: string, _options?: PromiseConfigurationOptions): Promise<GetServerConfigs200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getServerConfigs(app, perPage, page, sort, filterId, filterBinaryId, filterName, filterNamePartial, filterCommand, filterArgs, filterNotes, filterStatus, filterMaintenance, filterDnsServiceEnabled, filterResourcePackageSlug, filterInUse, filterBinaryName, filterBinaryVersion, filterBinaryType, filterBinaryOs, observableOptions);
        return result.toPromise();
    }

    /**
     * Get service logs
     * @param dockerService The docker service ID
     * @param [limit] The max number of entries to return. Default: 100
     * @param [direction] Determines the sort order of logs. Supported values are forward or backward. Default: forward
     * @param [streamSource] Only return logs filtered by stream source like stdout or stderr. Default: null
     */
    public getServerLogsWithHttpInfo(dockerService: number, limit?: number, direction?: string, streamSource?: 'stdout' | 'stderr', _options?: PromiseConfigurationOptions): Promise<HttpInfo<ServiceLogs>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getServerLogsWithHttpInfo(dockerService, limit, direction, streamSource, observableOptions);
        return result.toPromise();
    }

    /**
     * Get service logs
     * @param dockerService The docker service ID
     * @param [limit] The max number of entries to return. Default: 100
     * @param [direction] Determines the sort order of logs. Supported values are forward or backward. Default: forward
     * @param [streamSource] Only return logs filtered by stream source like stdout or stderr. Default: null
     */
    public getServerLogs(dockerService: number, limit?: number, direction?: string, streamSource?: 'stdout' | 'stderr', _options?: PromiseConfigurationOptions): Promise<ServiceLogs> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getServerLogs(dockerService, limit, direction, streamSource, observableOptions);
        return result.toPromise();
    }

    /**
     * List services
     * @param app The app ID
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [filterStatus] Filter by status.
     * @param [filterAppLocationSettingId] Filter by AppLocationSetting ID.
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
    public getServersWithHttpInfo(app: number, perPage?: number, page?: number, filterStatus?: string, filterAppLocationSettingId?: number, filterServerConfigId?: number, filterServerConfigName?: string, filterServerConfigNamePartial?: string, filterLocationCity?: string, filterLocationCityDisplay?: string, filterLocationContinent?: string, filterLocationCountry?: string, filterIsBackupable?: boolean, filterIsRestorable?: boolean, filterIsPending?: boolean, filterIsNotFound?: boolean, filterIsHealthy?: boolean, filterBinaryId?: number, filterIsStopped?: boolean, filterMetadata?: string, sort?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetServers200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getServersWithHttpInfo(app, perPage, page, filterStatus, filterAppLocationSettingId, filterServerConfigId, filterServerConfigName, filterServerConfigNamePartial, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterIsBackupable, filterIsRestorable, filterIsPending, filterIsNotFound, filterIsHealthy, filterBinaryId, filterIsStopped, filterMetadata, sort, observableOptions);
        return result.toPromise();
    }

    /**
     * List services
     * @param app The app ID
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     * @param [filterStatus] Filter by status.
     * @param [filterAppLocationSettingId] Filter by AppLocationSetting ID.
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
    public getServers(app: number, perPage?: number, page?: number, filterStatus?: string, filterAppLocationSettingId?: number, filterServerConfigId?: number, filterServerConfigName?: string, filterServerConfigNamePartial?: string, filterLocationCity?: string, filterLocationCityDisplay?: string, filterLocationContinent?: string, filterLocationCountry?: string, filterIsBackupable?: boolean, filterIsRestorable?: boolean, filterIsPending?: boolean, filterIsNotFound?: boolean, filterIsHealthy?: boolean, filterBinaryId?: number, filterIsStopped?: boolean, filterMetadata?: string, sort?: Array<string>, _options?: PromiseConfigurationOptions): Promise<GetServers200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getServers(app, perPage, page, filterStatus, filterAppLocationSettingId, filterServerConfigId, filterServerConfigName, filterServerConfigNamePartial, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterIsBackupable, filterIsRestorable, filterIsPending, filterIsNotFound, filterIsHealthy, filterBinaryId, filterIsStopped, filterMetadata, sort, observableOptions);
        return result.toPromise();
    }

    /**
     * List all available tagged images
     * @param dockerRegistry The docker registry ID
     */
    public getTaggedImagesWithHttpInfo(dockerRegistry: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetTaggedImages200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTaggedImagesWithHttpInfo(dockerRegistry, observableOptions);
        return result.toPromise();
    }

    /**
     * List all available tagged images
     * @param dockerRegistry The docker registry ID
     */
    public getTaggedImages(dockerRegistry: number, _options?: PromiseConfigurationOptions): Promise<GetTaggedImages200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTaggedImages(dockerRegistry, observableOptions);
        return result.toPromise();
    }

    /**
     * Show all services for a specific app location setting within a given app
     * @param app The app ID
     * @param appLocationSetting The app location setting ID
     */
    public listServicesForAppLocationSettingWithHttpInfo(app: number, appLocationSetting: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<Server>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listServicesForAppLocationSettingWithHttpInfo(app, appLocationSetting, observableOptions);
        return result.toPromise();
    }

    /**
     * Show all services for a specific app location setting within a given app
     * @param app The app ID
     * @param appLocationSetting The app location setting ID
     */
    public listServicesForAppLocationSetting(app: number, appLocationSetting: number, _options?: PromiseConfigurationOptions): Promise<Array<Server>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.listServicesForAppLocationSetting(app, appLocationSetting, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the total CPU seconds for the given app
     * @param app The app ID
     */
    public metricsAppCpuSecondsInstantWithHttpInfo(app: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MetricInstantResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsAppCpuSecondsInstantWithHttpInfo(app, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the total CPU seconds for the given app
     * @param app The app ID
     */
    public metricsAppCpuSecondsInstant(app: number, _options?: PromiseConfigurationOptions): Promise<MetricInstantResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsAppCpuSecondsInstant(app, observableOptions);
        return result.toPromise();
    }

    /**
     * Get CPU cores used for the given app
     * @param app The app ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsAppCpuUsageWithHttpInfo(app: number, start: number, end: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MetricRangeResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsAppCpuUsageWithHttpInfo(app, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get CPU cores used for the given app
     * @param app The app ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsAppCpuUsage(app: number, start: number, end: number, _options?: PromiseConfigurationOptions): Promise<MetricRangeResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsAppCpuUsage(app, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the daily peak CPU cores used for the given app
     * @param app The app ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsAppCpuUsagePerDayWithHttpInfo(app: number, start: number, end: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MetricRangeResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsAppCpuUsagePerDayWithHttpInfo(app, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the daily peak CPU cores used for the given app
     * @param app The app ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsAppCpuUsagePerDay(app: number, start: number, end: number, _options?: PromiseConfigurationOptions): Promise<MetricRangeResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsAppCpuUsagePerDay(app, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the peak number of running instances for the given app
     * @param app The app ID
     */
    public metricsAppInstancesPeakInstantWithHttpInfo(app: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MetricInstantResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsAppInstancesPeakInstantWithHttpInfo(app, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the peak number of running instances for the given app
     * @param app The app ID
     */
    public metricsAppInstancesPeakInstant(app: number, _options?: PromiseConfigurationOptions): Promise<MetricInstantResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsAppInstancesPeakInstant(app, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the running server instances for the given app
     * @param app The app ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsAppInstancesRunningWithHttpInfo(app: number, start: number, end: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MetricRangeResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsAppInstancesRunningWithHttpInfo(app, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the running server instances for the given app
     * @param app The app ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsAppInstancesRunning(app: number, start: number, end: number, _options?: PromiseConfigurationOptions): Promise<MetricRangeResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsAppInstancesRunning(app, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the current number of running instances for the given app
     * @param app The app ID
     */
    public metricsAppInstancesRunningInstantWithHttpInfo(app: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MetricInstantResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsAppInstancesRunningInstantWithHttpInfo(app, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the current number of running instances for the given app
     * @param app The app ID
     */
    public metricsAppInstancesRunningInstant(app: number, _options?: PromiseConfigurationOptions): Promise<MetricInstantResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsAppInstancesRunningInstant(app, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the CPU usage by the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceCpuUsageWithHttpInfo(dockerService: number, start: number, end: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MetricRangeResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsDockerServiceCpuUsageWithHttpInfo(dockerService, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the CPU usage by the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceCpuUsage(dockerService: number, start: number, end: number, _options?: PromiseConfigurationOptions): Promise<MetricRangeResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsDockerServiceCpuUsage(dockerService, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the disk read throughput for the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceDiskReadWithHttpInfo(dockerService: number, start: number, end: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MetricRangeResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsDockerServiceDiskReadWithHttpInfo(dockerService, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the disk read throughput for the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceDiskRead(dockerService: number, start: number, end: number, _options?: PromiseConfigurationOptions): Promise<MetricRangeResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsDockerServiceDiskRead(dockerService, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get disk write throughput for the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceDiskWriteWithHttpInfo(dockerService: number, start: number, end: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MetricRangeResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsDockerServiceDiskWriteWithHttpInfo(dockerService, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get disk write throughput for the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceDiskWrite(dockerService: number, start: number, end: number, _options?: PromiseConfigurationOptions): Promise<MetricRangeResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsDockerServiceDiskWrite(dockerService, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the memory usage by the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceMemoryUsageWithHttpInfo(dockerService: number, start: number, end: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MetricRangeResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsDockerServiceMemoryUsageWithHttpInfo(dockerService, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the memory usage by the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceMemoryUsage(dockerService: number, start: number, end: number, _options?: PromiseConfigurationOptions): Promise<MetricRangeResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsDockerServiceMemoryUsage(dockerService, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the network egress for the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceNetworkEgressWithHttpInfo(dockerService: number, start: number, end: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MetricRangeResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsDockerServiceNetworkEgressWithHttpInfo(dockerService, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the network egress for the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceNetworkEgress(dockerService: number, start: number, end: number, _options?: PromiseConfigurationOptions): Promise<MetricRangeResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsDockerServiceNetworkEgress(dockerService, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the network ingress for the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceNetworkIngressWithHttpInfo(dockerService: number, start: number, end: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MetricRangeResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsDockerServiceNetworkIngressWithHttpInfo(dockerService, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the network ingress for the given service
     * @param dockerService The docker service ID
     * @param start Start of the time range as a Unix timestamp in seconds.
     * @param end End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;.
     */
    public metricsDockerServiceNetworkIngress(dockerService: number, start: number, end: number, _options?: PromiseConfigurationOptions): Promise<MetricRangeResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.metricsDockerServiceNetworkIngress(dockerService, start, end, observableOptions);
        return result.toPromise();
    }

    /**
     * Refresh token
     */
    public refreshAuthTokenWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Auth>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.refreshAuthTokenWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Refresh token
     */
    public refreshAuthToken(_options?: PromiseConfigurationOptions): Promise<Auth> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.refreshAuthToken(observableOptions);
        return result.toPromise();
    }

    /**
     * Refresh a binary and the related entity
     * @param binary The binary ID
     */
    public refreshBinaryWithHttpInfo(binary: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Binary>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.refreshBinaryWithHttpInfo(binary, observableOptions);
        return result.toPromise();
    }

    /**
     * Refresh a binary and the related entity
     * @param binary The binary ID
     */
    public refreshBinary(binary: number, _options?: PromiseConfigurationOptions): Promise<Binary> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.refreshBinary(binary, observableOptions);
        return result.toPromise();
    }

    /**
     * Refresh the cache for all available tagged images
     * @param dockerRegistry The docker registry ID
     */
    public refreshTaggedImagesWithHttpInfo(dockerRegistry: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetTaggedImages200Response>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.refreshTaggedImagesWithHttpInfo(dockerRegistry, observableOptions);
        return result.toPromise();
    }

    /**
     * Refresh the cache for all available tagged images
     * @param dockerRegistry The docker registry ID
     */
    public refreshTaggedImages(dockerRegistry: number, _options?: PromiseConfigurationOptions): Promise<GetTaggedImages200Response> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.refreshTaggedImages(dockerRegistry, observableOptions);
        return result.toPromise();
    }

    /**
     * Restart service
     * @param dockerService The docker service ID
     */
    public restartServerWithHttpInfo(dockerService: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.restartServerWithHttpInfo(dockerService, observableOptions);
        return result.toPromise();
    }

    /**
     * Restart service
     * @param dockerService The docker service ID
     */
    public restartServer(dockerService: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.restartServer(dockerService, observableOptions);
        return result.toPromise();
    }

    /**
     * Restore latest service backup
     * @param dockerService The docker service ID
     */
    public restoreBackupWithHttpInfo(dockerService: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.restoreBackupWithHttpInfo(dockerService, observableOptions);
        return result.toPromise();
    }

    /**
     * Restore latest service backup
     * @param dockerService The docker service ID
     */
    public restoreBackup(dockerService: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.restoreBackup(dockerService, observableOptions);
        return result.toPromise();
    }

    /**
     * Start service
     * @param dockerService The docker service ID
     */
    public startServerWithHttpInfo(dockerService: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.startServerWithHttpInfo(dockerService, observableOptions);
        return result.toPromise();
    }

    /**
     * Start service
     * @param dockerService The docker service ID
     */
    public startServer(dockerService: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.startServer(dockerService, observableOptions);
        return result.toPromise();
    }

    /**
     * Start all services related to a specific app
     * @param app The app ID
     */
    public startServersForAppWithHttpInfo(app: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.startServersForAppWithHttpInfo(app, observableOptions);
        return result.toPromise();
    }

    /**
     * Start all services related to a specific app
     * @param app The app ID
     */
    public startServersForApp(app: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.startServersForApp(app, observableOptions);
        return result.toPromise();
    }

    /**
     * Start all services related to a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public startServersForAppLocationSettingWithHttpInfo(appLocationSetting: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.startServersForAppLocationSettingWithHttpInfo(appLocationSetting, observableOptions);
        return result.toPromise();
    }

    /**
     * Start all services related to a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public startServersForAppLocationSetting(appLocationSetting: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.startServersForAppLocationSetting(appLocationSetting, observableOptions);
        return result.toPromise();
    }

    /**
     * Start all services related to a specific binary
     * @param binary The binary ID
     */
    public startServersForBinaryWithHttpInfo(binary: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.startServersForBinaryWithHttpInfo(binary, observableOptions);
        return result.toPromise();
    }

    /**
     * Start all services related to a specific binary
     * @param binary The binary ID
     */
    public startServersForBinary(binary: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.startServersForBinary(binary, observableOptions);
        return result.toPromise();
    }

    /**
     * Start all services related to a specific server config
     * @param serverConfig The server config ID
     */
    public startServersForServerConfigWithHttpInfo(serverConfig: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.startServersForServerConfigWithHttpInfo(serverConfig, observableOptions);
        return result.toPromise();
    }

    /**
     * Start all services related to a specific server config
     * @param serverConfig The server config ID
     */
    public startServersForServerConfig(serverConfig: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.startServersForServerConfig(serverConfig, observableOptions);
        return result.toPromise();
    }

    /**
     * Get branches for a specific steamworks app ID
     * @param appId The steamworks app id
     */
    public steamGetBranchesWithHttpInfo(appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<SteamBranch>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.steamGetBranchesWithHttpInfo(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get branches for a specific steamworks app ID
     * @param appId The steamworks app id
     */
    public steamGetBranches(appId: number, _options?: PromiseConfigurationOptions): Promise<Array<SteamBranch>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.steamGetBranches(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get launchers for a specific steamworks app ID, optionally filtered by OS
     * @param appId The steamworks app id
     * @param [os] The operating system of the binary
     */
    public steamGetLauncherWithHttpInfo(appId: number, os?: OperatingSystem, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<SteamLauncher>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.steamGetLauncherWithHttpInfo(appId, os, observableOptions);
        return result.toPromise();
    }

    /**
     * Get launchers for a specific steamworks app ID, optionally filtered by OS
     * @param appId The steamworks app id
     * @param [os] The operating system of the binary
     */
    public steamGetLauncher(appId: number, os?: OperatingSystem, _options?: PromiseConfigurationOptions): Promise<Array<SteamLauncher>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.steamGetLauncher(appId, os, observableOptions);
        return result.toPromise();
    }

    /**
     * Stop service
     * @param dockerService The docker service ID
     */
    public stopServerWithHttpInfo(dockerService: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.stopServerWithHttpInfo(dockerService, observableOptions);
        return result.toPromise();
    }

    /**
     * Stop service
     * @param dockerService The docker service ID
     */
    public stopServer(dockerService: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.stopServer(dockerService, observableOptions);
        return result.toPromise();
    }

    /**
     * Stop all services related to a specific app
     * @param app The app ID
     */
    public stopServersForAppWithHttpInfo(app: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.stopServersForAppWithHttpInfo(app, observableOptions);
        return result.toPromise();
    }

    /**
     * Stop all services related to a specific app
     * @param app The app ID
     */
    public stopServersForApp(app: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.stopServersForApp(app, observableOptions);
        return result.toPromise();
    }

    /**
     * Stop all services related to a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public stopServersForAppLocationSettingWithHttpInfo(appLocationSetting: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.stopServersForAppLocationSettingWithHttpInfo(appLocationSetting, observableOptions);
        return result.toPromise();
    }

    /**
     * Stop all services related to a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public stopServersForAppLocationSetting(appLocationSetting: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.stopServersForAppLocationSetting(appLocationSetting, observableOptions);
        return result.toPromise();
    }

    /**
     * Stop all services related to a specific binary
     * @param binary The binary ID
     */
    public stopServersForBinaryWithHttpInfo(binary: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.stopServersForBinaryWithHttpInfo(binary, observableOptions);
        return result.toPromise();
    }

    /**
     * Stop all services related to a specific binary
     * @param binary The binary ID
     */
    public stopServersForBinary(binary: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.stopServersForBinary(binary, observableOptions);
        return result.toPromise();
    }

    /**
     * Stop all services related to a specific server config
     * @param serverConfig The server config ID
     */
    public stopServersForServerConfigWithHttpInfo(serverConfig: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.stopServersForServerConfigWithHttpInfo(serverConfig, observableOptions);
        return result.toPromise();
    }

    /**
     * Stop all services related to a specific server config
     * @param serverConfig The server config ID
     */
    public stopServersForServerConfig(serverConfig: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.stopServersForServerConfig(serverConfig, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a specific app
     * @param app The app ID
     * @param updateAppRequest
     */
    public updateAppByIdWithHttpInfo(app: number, updateAppRequest: UpdateAppRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<App>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAppByIdWithHttpInfo(app, updateAppRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a specific app
     * @param app The app ID
     * @param updateAppRequest
     */
    public updateAppById(app: number, updateAppRequest: UpdateAppRequest, _options?: PromiseConfigurationOptions): Promise<App> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAppById(app, updateAppRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a location setting
     * @param appLocationSetting The app location setting ID
     * @param updateAppLocationSettingRequest
     */
    public updateAppLocationSettingWithHttpInfo(appLocationSetting: number, updateAppLocationSettingRequest: UpdateAppLocationSettingRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AppLocationSetting>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAppLocationSettingWithHttpInfo(appLocationSetting, updateAppLocationSettingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a location setting
     * @param appLocationSetting The app location setting ID
     * @param updateAppLocationSettingRequest
     */
    public updateAppLocationSetting(appLocationSetting: number, updateAppLocationSettingRequest: UpdateAppLocationSettingRequest, _options?: PromiseConfigurationOptions): Promise<AppLocationSetting> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateAppLocationSetting(appLocationSetting, updateAppLocationSettingRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a binary and the related entity
     * @param binary The binary ID
     * @param updateBinaryRequest
     */
    public updateBinaryWithHttpInfo(binary: number, updateBinaryRequest: UpdateBinaryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Binary>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateBinaryWithHttpInfo(binary, updateBinaryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a binary and the related entity
     * @param binary The binary ID
     * @param updateBinaryRequest
     */
    public updateBinary(binary: number, updateBinaryRequest: UpdateBinaryRequest, _options?: PromiseConfigurationOptions): Promise<Binary> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateBinary(binary, updateBinaryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a specific docker registry
     * @param dockerRegistry The docker registry ID
     * @param updateDockerRegistryRequest
     */
    public updateDockerRegistryWithHttpInfo(dockerRegistry: number, updateDockerRegistryRequest: UpdateDockerRegistryRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DockerRegistry>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDockerRegistryWithHttpInfo(dockerRegistry, updateDockerRegistryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a specific docker registry
     * @param dockerRegistry The docker registry ID
     * @param updateDockerRegistryRequest
     */
    public updateDockerRegistry(dockerRegistry: number, updateDockerRegistryRequest: UpdateDockerRegistryRequest, _options?: PromiseConfigurationOptions): Promise<DockerRegistry> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateDockerRegistry(dockerRegistry, updateDockerRegistryRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a server config
     * @param serverConfig The server config ID
     * @param updateServerConfigRequest
     */
    public updateServerConfigWithHttpInfo(serverConfig: number, updateServerConfigRequest: UpdateServerConfigRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ServerConfig>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateServerConfigWithHttpInfo(serverConfig, updateServerConfigRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a server config
     * @param serverConfig The server config ID
     * @param updateServerConfigRequest
     */
    public updateServerConfig(serverConfig: number, updateServerConfigRequest: UpdateServerConfigRequest, _options?: PromiseConfigurationOptions): Promise<ServerConfig> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateServerConfig(serverConfig, updateServerConfigRequest, observableOptions);
        return result.toPromise();
    }


}



