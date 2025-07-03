import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration} from '../configuration.ts'

import { App } from '../models/App.ts';
import { AppBillingState } from '../models/AppBillingState.ts';
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
     * Create an app
     * @param storeAppRequest
     */
    public createAppWithHttpInfo(storeAppRequest: StoreAppRequest, _options?: Configuration): Promise<HttpInfo<App>> {
        const result = this.api.createAppWithHttpInfo(storeAppRequest, _options);
        return result.toPromise();
    }

    /**
     * Create an app
     * @param storeAppRequest
     */
    public createApp(storeAppRequest: StoreAppRequest, _options?: Configuration): Promise<App> {
        const result = this.api.createApp(storeAppRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new location setting
     * @param app The app ID
     * @param storeAppLocationSettingRequest
     */
    public createAppLocationSettingWithHttpInfo(app: number, storeAppLocationSettingRequest: StoreAppLocationSettingRequest, _options?: Configuration): Promise<HttpInfo<AppLocationSetting>> {
        const result = this.api.createAppLocationSettingWithHttpInfo(app, storeAppLocationSettingRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new location setting
     * @param app The app ID
     * @param storeAppLocationSettingRequest
     */
    public createAppLocationSetting(app: number, storeAppLocationSettingRequest: StoreAppLocationSettingRequest, _options?: Configuration): Promise<AppLocationSetting> {
        const result = this.api.createAppLocationSetting(app, storeAppLocationSettingRequest, _options);
        return result.toPromise();
    }

    /**
     * Create service backup
     * @param dockerService The docker service ID
     * @param createBackupDockerServiceRequest
     */
    public createBackupWithHttpInfo(dockerService: number, createBackupDockerServiceRequest: CreateBackupDockerServiceRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createBackupWithHttpInfo(dockerService, createBackupDockerServiceRequest, _options);
        return result.toPromise();
    }

    /**
     * Create service backup
     * @param dockerService The docker service ID
     * @param createBackupDockerServiceRequest
     */
    public createBackup(dockerService: number, createBackupDockerServiceRequest: CreateBackupDockerServiceRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createBackup(dockerService, createBackupDockerServiceRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a binary and the related entity
     * @param app The app ID
     * @param storeBinaryRequest
     */
    public createBinaryWithHttpInfo(app: number, storeBinaryRequest: StoreBinaryRequest, _options?: Configuration): Promise<HttpInfo<Binary>> {
        const result = this.api.createBinaryWithHttpInfo(app, storeBinaryRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a binary and the related entity
     * @param app The app ID
     * @param storeBinaryRequest
     */
    public createBinary(app: number, storeBinaryRequest: StoreBinaryRequest, _options?: Configuration): Promise<Binary> {
        const result = this.api.createBinary(app, storeBinaryRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new docker registry
     * @param storeDockerRegistryRequest
     */
    public createDockerRegistryWithHttpInfo(storeDockerRegistryRequest: StoreDockerRegistryRequest, _options?: Configuration): Promise<HttpInfo<DockerRegistry>> {
        const result = this.api.createDockerRegistryWithHttpInfo(storeDockerRegistryRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new docker registry
     * @param storeDockerRegistryRequest
     */
    public createDockerRegistry(storeDockerRegistryRequest: StoreDockerRegistryRequest, _options?: Configuration): Promise<DockerRegistry> {
        const result = this.api.createDockerRegistry(storeDockerRegistryRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new server config
     * @param app The app ID
     * @param storeServerConfigRequest
     */
    public createServerConfigWithHttpInfo(app: number, storeServerConfigRequest: StoreServerConfigRequest, _options?: Configuration): Promise<HttpInfo<ServerConfig>> {
        const result = this.api.createServerConfigWithHttpInfo(app, storeServerConfigRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new server config
     * @param app The app ID
     * @param storeServerConfigRequest
     */
    public createServerConfig(app: number, storeServerConfigRequest: StoreServerConfigRequest, _options?: Configuration): Promise<ServerConfig> {
        const result = this.api.createServerConfig(app, storeServerConfigRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a specific app
     * @param app The app ID
     */
    public deleteAppWithHttpInfo(app: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteAppWithHttpInfo(app, _options);
        return result.toPromise();
    }

    /**
     * Delete a specific app
     * @param app The app ID
     */
    public deleteApp(app: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteApp(app, _options);
        return result.toPromise();
    }

    /**
     * Delete a location setting
     * @param appLocationSetting The app location setting ID
     */
    public deleteAppLocationSettingWithHttpInfo(appLocationSetting: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteAppLocationSettingWithHttpInfo(appLocationSetting, _options);
        return result.toPromise();
    }

    /**
     * Delete a location setting
     * @param appLocationSetting The app location setting ID
     */
    public deleteAppLocationSetting(appLocationSetting: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteAppLocationSetting(appLocationSetting, _options);
        return result.toPromise();
    }

    /**
     * Delete a specified binary
     * @param binary The binary ID
     */
    public deleteBinaryWithHttpInfo(binary: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteBinaryWithHttpInfo(binary, _options);
        return result.toPromise();
    }

    /**
     * Delete a specified binary
     * @param binary The binary ID
     */
    public deleteBinary(binary: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteBinary(binary, _options);
        return result.toPromise();
    }

    /**
     * Delete a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public deleteDockerRegistryWithHttpInfo(dockerRegistry: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteDockerRegistryWithHttpInfo(dockerRegistry, _options);
        return result.toPromise();
    }

    /**
     * Delete a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public deleteDockerRegistry(dockerRegistry: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteDockerRegistry(dockerRegistry, _options);
        return result.toPromise();
    }

    /**
     * Delete a specific server config
     * @param serverConfig The server config ID
     */
    public deleteServerConfigWithHttpInfo(serverConfig: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteServerConfigWithHttpInfo(serverConfig, _options);
        return result.toPromise();
    }

    /**
     * Delete a specific server config
     * @param serverConfig The server config ID
     */
    public deleteServerConfig(serverConfig: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteServerConfig(serverConfig, _options);
        return result.toPromise();
    }

    /**
     * Delete all service metadata
     * @param dockerService The docker service ID
     */
    public dockerServicesMetadataDeleteAllWithHttpInfo(dockerService: number, _options?: Configuration): Promise<HttpInfo<Server>> {
        const result = this.api.dockerServicesMetadataDeleteAllWithHttpInfo(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Delete all service metadata
     * @param dockerService The docker service ID
     */
    public dockerServicesMetadataDeleteAll(dockerService: number, _options?: Configuration): Promise<Server> {
        const result = this.api.dockerServicesMetadataDeleteAll(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Delete service metadata keys
     * @param dockerService The docker service ID
     * @param metadata
     */
    public dockerServicesMetadataDeleteKeysWithHttpInfo(dockerService: number, metadata: Array<string>, _options?: Configuration): Promise<HttpInfo<Server>> {
        const result = this.api.dockerServicesMetadataDeleteKeysWithHttpInfo(dockerService, metadata, _options);
        return result.toPromise();
    }

    /**
     * Delete service metadata keys
     * @param dockerService The docker service ID
     * @param metadata
     */
    public dockerServicesMetadataDeleteKeys(dockerService: number, metadata: Array<string>, _options?: Configuration): Promise<Server> {
        const result = this.api.dockerServicesMetadataDeleteKeys(dockerService, metadata, _options);
        return result.toPromise();
    }

    /**
     * Replaces the entire metadata set with only the values provided in the request.
     * Set service metadata
     * @param dockerService The docker service ID
     * @param [setMetadataRequest]
     */
    public dockerServicesMetadataSetWithHttpInfo(dockerService: number, setMetadataRequest?: SetMetadataRequest, _options?: Configuration): Promise<HttpInfo<Server>> {
        const result = this.api.dockerServicesMetadataSetWithHttpInfo(dockerService, setMetadataRequest, _options);
        return result.toPromise();
    }

    /**
     * Replaces the entire metadata set with only the values provided in the request.
     * Set service metadata
     * @param dockerService The docker service ID
     * @param [setMetadataRequest]
     */
    public dockerServicesMetadataSet(dockerService: number, setMetadataRequest?: SetMetadataRequest, _options?: Configuration): Promise<Server> {
        const result = this.api.dockerServicesMetadataSet(dockerService, setMetadataRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting metadata that is not mentioned.
     * Update service metadata
     * @param dockerService The docker service ID
     * @param [patchMetadataRequest]
     */
    public dockerServicesMetadataUpdateWithHttpInfo(dockerService: number, patchMetadataRequest?: PatchMetadataRequest, _options?: Configuration): Promise<HttpInfo<Server>> {
        const result = this.api.dockerServicesMetadataUpdateWithHttpInfo(dockerService, patchMetadataRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting metadata that is not mentioned.
     * Update service metadata
     * @param dockerService The docker service ID
     * @param [patchMetadataRequest]
     */
    public dockerServicesMetadataUpdate(dockerService: number, patchMetadataRequest?: PatchMetadataRequest, _options?: Configuration): Promise<Server> {
        const result = this.api.dockerServicesMetadataUpdate(dockerService, patchMetadataRequest, _options);
        return result.toPromise();
    }

    /**
     * Download service logs
     * @param dockerService The docker service ID
     * @param [streamSource] Only return logs filtered by stream source like stdout or stderr.
     */
    public downloadServerLogsWithHttpInfo(dockerService: number, streamSource?: 'stdout' | 'stderr', _options?: Configuration): Promise<HttpInfo<ServiceLogs>> {
        const result = this.api.downloadServerLogsWithHttpInfo(dockerService, streamSource, _options);
        return result.toPromise();
    }

    /**
     * Download service logs
     * @param dockerService The docker service ID
     * @param [streamSource] Only return logs filtered by stream source like stdout or stderr.
     */
    public downloadServerLogs(dockerService: number, streamSource?: 'stdout' | 'stderr', _options?: Configuration): Promise<ServiceLogs> {
        const result = this.api.downloadServerLogs(dockerService, streamSource, _options);
        return result.toPromise();
    }

    /**
     * Show a specific app
     * @param app The app ID
     */
    public getAppByIdWithHttpInfo(app: number, _options?: Configuration): Promise<HttpInfo<App>> {
        const result = this.api.getAppByIdWithHttpInfo(app, _options);
        return result.toPromise();
    }

    /**
     * Show a specific app
     * @param app The app ID
     */
    public getAppById(app: number, _options?: Configuration): Promise<App> {
        const result = this.api.getAppById(app, _options);
        return result.toPromise();
    }

    /**
     * Show a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public getAppLocationSettingByIdWithHttpInfo(appLocationSetting: number, _options?: Configuration): Promise<HttpInfo<AppLocationSetting>> {
        const result = this.api.getAppLocationSettingByIdWithHttpInfo(appLocationSetting, _options);
        return result.toPromise();
    }

    /**
     * Show a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public getAppLocationSettingById(appLocationSetting: number, _options?: Configuration): Promise<AppLocationSetting> {
        const result = this.api.getAppLocationSettingById(appLocationSetting, _options);
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
    public getAppLocationSettingsWithHttpInfo(app: number, perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterName?: string, filterNamePartial?: string, filterServerConfigId?: number, filterNumInstances?: number, filterStatus?: string, filterMaintenance?: boolean, filterLocationCity?: string, filterLocationCityDisplay?: string, filterLocationContinent?: string, filterLocationCountry?: string, filterServerConfigName?: string, filterServerConfigCommand?: string, filterServerConfigArgs?: string, filterServerConfigNotes?: string, filterServerConfigStatus?: string, filterServerConfigMaintenance?: boolean, filterServerConfigResourcePackageSlug?: string, _options?: Configuration): Promise<HttpInfo<GetAppLocationSettings200Response>> {
        const result = this.api.getAppLocationSettingsWithHttpInfo(app, perPage, page, sort, filterId, filterName, filterNamePartial, filterServerConfigId, filterNumInstances, filterStatus, filterMaintenance, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterServerConfigName, filterServerConfigCommand, filterServerConfigArgs, filterServerConfigNotes, filterServerConfigStatus, filterServerConfigMaintenance, filterServerConfigResourcePackageSlug, _options);
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
    public getAppLocationSettings(app: number, perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterName?: string, filterNamePartial?: string, filterServerConfigId?: number, filterNumInstances?: number, filterStatus?: string, filterMaintenance?: boolean, filterLocationCity?: string, filterLocationCityDisplay?: string, filterLocationContinent?: string, filterLocationCountry?: string, filterServerConfigName?: string, filterServerConfigCommand?: string, filterServerConfigArgs?: string, filterServerConfigNotes?: string, filterServerConfigStatus?: string, filterServerConfigMaintenance?: boolean, filterServerConfigResourcePackageSlug?: string, _options?: Configuration): Promise<GetAppLocationSettings200Response> {
        const result = this.api.getAppLocationSettings(app, perPage, page, sort, filterId, filterName, filterNamePartial, filterServerConfigId, filterNumInstances, filterStatus, filterMaintenance, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterServerConfigName, filterServerConfigCommand, filterServerConfigArgs, filterServerConfigNotes, filterServerConfigStatus, filterServerConfigMaintenance, filterServerConfigResourcePackageSlug, _options);
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
    public getAppsWithHttpInfo(perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterName?: string, filterNamePartial?: string, filterInUse?: boolean, _options?: Configuration): Promise<HttpInfo<GetApps200Response>> {
        const result = this.api.getAppsWithHttpInfo(perPage, page, sort, filterId, filterName, filterNamePartial, filterInUse, _options);
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
    public getApps(perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterName?: string, filterNamePartial?: string, filterInUse?: boolean, _options?: Configuration): Promise<GetApps200Response> {
        const result = this.api.getApps(perPage, page, sort, filterId, filterName, filterNamePartial, filterInUse, _options);
        return result.toPromise();
    }

    /**
     * Authenticates the user based on the user\'s email, password, and session ID. If the user is authenticated successfully, it returns the user\'s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.+
     * Get token
     * @param authRequest
     */
    public getAuthTokenWithHttpInfo(authRequest: AuthRequest, _options?: Configuration): Promise<HttpInfo<Auth>> {
        const result = this.api.getAuthTokenWithHttpInfo(authRequest, _options);
        return result.toPromise();
    }

    /**
     * Authenticates the user based on the user\'s email, password, and session ID. If the user is authenticated successfully, it returns the user\'s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.+
     * Get token
     * @param authRequest
     */
    public getAuthToken(authRequest: AuthRequest, _options?: Configuration): Promise<Auth> {
        const result = this.api.getAuthToken(authRequest, _options);
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
    public getBackupsWithHttpInfo(dockerService: number, perPage?: number, page?: number, sort?: Array<string>, filterName?: string, filterArchiveName?: string, _options?: Configuration): Promise<HttpInfo<GetBackups200Response>> {
        const result = this.api.getBackupsWithHttpInfo(dockerService, perPage, page, sort, filterName, filterArchiveName, _options);
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
    public getBackups(dockerService: number, perPage?: number, page?: number, sort?: Array<string>, filterName?: string, filterArchiveName?: string, _options?: Configuration): Promise<GetBackups200Response> {
        const result = this.api.getBackups(dockerService, perPage, page, sort, filterName, filterArchiveName, _options);
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
    public getBinariesWithHttpInfo(app: number, perPage?: number, page?: number, sort?: Array<string>, filterName?: string, filterNamePartial?: string, filterVersion?: string, filterType?: string, filterOs?: string, filterMaintenance?: boolean, filterStatus?: string, filterInUse?: boolean, _options?: Configuration): Promise<HttpInfo<GetBinaries200Response>> {
        const result = this.api.getBinariesWithHttpInfo(app, perPage, page, sort, filterName, filterNamePartial, filterVersion, filterType, filterOs, filterMaintenance, filterStatus, filterInUse, _options);
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
    public getBinaries(app: number, perPage?: number, page?: number, sort?: Array<string>, filterName?: string, filterNamePartial?: string, filterVersion?: string, filterType?: string, filterOs?: string, filterMaintenance?: boolean, filterStatus?: string, filterInUse?: boolean, _options?: Configuration): Promise<GetBinaries200Response> {
        const result = this.api.getBinaries(app, perPage, page, sort, filterName, filterNamePartial, filterVersion, filterType, filterOs, filterMaintenance, filterStatus, filterInUse, _options);
        return result.toPromise();
    }

    /**
     * Show a specific binary
     * @param binary The binary ID
     */
    public getBinaryByIdWithHttpInfo(binary: number, _options?: Configuration): Promise<HttpInfo<Binary>> {
        const result = this.api.getBinaryByIdWithHttpInfo(binary, _options);
        return result.toPromise();
    }

    /**
     * Show a specific binary
     * @param binary The binary ID
     */
    public getBinaryById(binary: number, _options?: Configuration): Promise<Binary> {
        const result = this.api.getBinaryById(binary, _options);
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
    public getDockerRegistriesWithHttpInfo(perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterType?: string, filterName?: string, filterNamePartial?: string, filterUrl?: string, filterOrganization?: string, _options?: Configuration): Promise<HttpInfo<GetDockerRegistries200Response>> {
        const result = this.api.getDockerRegistriesWithHttpInfo(perPage, page, sort, filterId, filterType, filterName, filterNamePartial, filterUrl, filterOrganization, _options);
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
    public getDockerRegistries(perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterType?: string, filterName?: string, filterNamePartial?: string, filterUrl?: string, filterOrganization?: string, _options?: Configuration): Promise<GetDockerRegistries200Response> {
        const result = this.api.getDockerRegistries(perPage, page, sort, filterId, filterType, filterName, filterNamePartial, filterUrl, filterOrganization, _options);
        return result.toPromise();
    }

    /**
     * Display a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public getDockerRegistryByIdWithHttpInfo(dockerRegistry: number, _options?: Configuration): Promise<HttpInfo<DockerRegistry>> {
        const result = this.api.getDockerRegistryByIdWithHttpInfo(dockerRegistry, _options);
        return result.toPromise();
    }

    /**
     * Display a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public getDockerRegistryById(dockerRegistry: number, _options?: Configuration): Promise<DockerRegistry> {
        const result = this.api.getDockerRegistryById(dockerRegistry, _options);
        return result.toPromise();
    }

    /**
     * Get latest service backup
     * @param dockerService The docker service ID
     */
    public getLatestBackupWithHttpInfo(dockerService: number, _options?: Configuration): Promise<HttpInfo<Backup>> {
        const result = this.api.getLatestBackupWithHttpInfo(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Get latest service backup
     * @param dockerService The docker service ID
     */
    public getLatestBackup(dockerService: number, _options?: Configuration): Promise<Backup> {
        const result = this.api.getLatestBackup(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Show a unique listing of locations based on active and ready worker nodes
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     */
    public getLocationsWithHttpInfo(perPage?: number, page?: number, _options?: Configuration): Promise<HttpInfo<GetLocations200Response>> {
        const result = this.api.getLocationsWithHttpInfo(perPage, page, _options);
        return result.toPromise();
    }

    /**
     * Show a unique listing of locations based on active and ready worker nodes
     * @param [perPage] The number of items to be shown per page.
     * @param [page] Specifies the page number to retrieve in the paginated results.
     */
    public getLocations(perPage?: number, page?: number, _options?: Configuration): Promise<GetLocations200Response> {
        const result = this.api.getLocations(perPage, page, _options);
        return result.toPromise();
    }

    /**
     * Show a specified resource package
     * @param resourcePackage The resource package ID
     */
    public getResourcePackageByIdWithHttpInfo(resourcePackage: number, _options?: Configuration): Promise<HttpInfo<ResourcePackage>> {
        const result = this.api.getResourcePackageByIdWithHttpInfo(resourcePackage, _options);
        return result.toPromise();
    }

    /**
     * Show a specified resource package
     * @param resourcePackage The resource package ID
     */
    public getResourcePackageById(resourcePackage: number, _options?: Configuration): Promise<ResourcePackage> {
        const result = this.api.getResourcePackageById(resourcePackage, _options);
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
     * @param [filterCpuReservation] Filter by CPU reservation. Maps to the &#x60;cpu_reservation&#x60; column.
     * @param [filterMemoryLimitMiB] Filter by memory limit in MiB. Maps to the &#x60;memory_limit_mebibytes&#x60; column.
     * @param [filterMemoryReservationMiB] Filter by memory reservation in MiB. Maps to the &#x60;memory_reservation_mebibytes&#x60; column.
     */
    public getResourcePackagesWithHttpInfo(perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterName?: string, filterNamePartial?: string, filterSlug?: string, filterType?: string, filterCpuLimit?: number, filterCpuReservation?: number, filterMemoryLimitMiB?: number, filterMemoryReservationMiB?: number, _options?: Configuration): Promise<HttpInfo<GetResourcePackages200Response>> {
        const result = this.api.getResourcePackagesWithHttpInfo(perPage, page, sort, filterId, filterName, filterNamePartial, filterSlug, filterType, filterCpuLimit, filterCpuReservation, filterMemoryLimitMiB, filterMemoryReservationMiB, _options);
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
     * @param [filterCpuReservation] Filter by CPU reservation. Maps to the &#x60;cpu_reservation&#x60; column.
     * @param [filterMemoryLimitMiB] Filter by memory limit in MiB. Maps to the &#x60;memory_limit_mebibytes&#x60; column.
     * @param [filterMemoryReservationMiB] Filter by memory reservation in MiB. Maps to the &#x60;memory_reservation_mebibytes&#x60; column.
     */
    public getResourcePackages(perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterName?: string, filterNamePartial?: string, filterSlug?: string, filterType?: string, filterCpuLimit?: number, filterCpuReservation?: number, filterMemoryLimitMiB?: number, filterMemoryReservationMiB?: number, _options?: Configuration): Promise<GetResourcePackages200Response> {
        const result = this.api.getResourcePackages(perPage, page, sort, filterId, filterName, filterNamePartial, filterSlug, filterType, filterCpuLimit, filterCpuReservation, filterMemoryLimitMiB, filterMemoryReservationMiB, _options);
        return result.toPromise();
    }

    /**
     * Get service backup download URL
     * @param dockerService The docker service ID
     */
    public getServerBackupDownloadUrlWithHttpInfo(dockerService: number, _options?: Configuration): Promise<HttpInfo<BackupDownload>> {
        const result = this.api.getServerBackupDownloadUrlWithHttpInfo(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Get service backup download URL
     * @param dockerService The docker service ID
     */
    public getServerBackupDownloadUrl(dockerService: number, _options?: Configuration): Promise<BackupDownload> {
        const result = this.api.getServerBackupDownloadUrl(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Display a specific service
     * @param app The app ID
     * @param dockerService The docker service ID
     */
    public getServerByIdWithHttpInfo(app: number, dockerService: number, _options?: Configuration): Promise<HttpInfo<Server>> {
        const result = this.api.getServerByIdWithHttpInfo(app, dockerService, _options);
        return result.toPromise();
    }

    /**
     * Display a specific service
     * @param app The app ID
     * @param dockerService The docker service ID
     */
    public getServerById(app: number, dockerService: number, _options?: Configuration): Promise<Server> {
        const result = this.api.getServerById(app, dockerService, _options);
        return result.toPromise();
    }

    /**
     * Show a specific server config
     * @param serverConfig The server config ID
     */
    public getServerConfigByIdWithHttpInfo(serverConfig: number, _options?: Configuration): Promise<HttpInfo<ServerConfig>> {
        const result = this.api.getServerConfigByIdWithHttpInfo(serverConfig, _options);
        return result.toPromise();
    }

    /**
     * Show a specific server config
     * @param serverConfig The server config ID
     */
    public getServerConfigById(serverConfig: number, _options?: Configuration): Promise<ServerConfig> {
        const result = this.api.getServerConfigById(serverConfig, _options);
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
     * @param [filterResourcePackageSlug] Filter by resource package slug.
     * @param [filterInUse] Filter by in use flag.
     * @param [filterBinaryName] Filter by binary name.
     * @param [filterBinaryVersion] Filter by binary version.
     * @param [filterBinaryType] Filter by binary type.
     * @param [filterBinaryOs] Filter by binary operating system.
     */
    public getServerConfigsWithHttpInfo(app: number, perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterBinaryId?: number, filterName?: string, filterNamePartial?: string, filterCommand?: string, filterArgs?: string, filterNotes?: string, filterStatus?: string, filterMaintenance?: boolean, filterResourcePackageSlug?: string, filterInUse?: boolean, filterBinaryName?: string, filterBinaryVersion?: string, filterBinaryType?: string, filterBinaryOs?: string, _options?: Configuration): Promise<HttpInfo<GetServerConfigs200Response>> {
        const result = this.api.getServerConfigsWithHttpInfo(app, perPage, page, sort, filterId, filterBinaryId, filterName, filterNamePartial, filterCommand, filterArgs, filterNotes, filterStatus, filterMaintenance, filterResourcePackageSlug, filterInUse, filterBinaryName, filterBinaryVersion, filterBinaryType, filterBinaryOs, _options);
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
     * @param [filterResourcePackageSlug] Filter by resource package slug.
     * @param [filterInUse] Filter by in use flag.
     * @param [filterBinaryName] Filter by binary name.
     * @param [filterBinaryVersion] Filter by binary version.
     * @param [filterBinaryType] Filter by binary type.
     * @param [filterBinaryOs] Filter by binary operating system.
     */
    public getServerConfigs(app: number, perPage?: number, page?: number, sort?: Array<string>, filterId?: number, filterBinaryId?: number, filterName?: string, filterNamePartial?: string, filterCommand?: string, filterArgs?: string, filterNotes?: string, filterStatus?: string, filterMaintenance?: boolean, filterResourcePackageSlug?: string, filterInUse?: boolean, filterBinaryName?: string, filterBinaryVersion?: string, filterBinaryType?: string, filterBinaryOs?: string, _options?: Configuration): Promise<GetServerConfigs200Response> {
        const result = this.api.getServerConfigs(app, perPage, page, sort, filterId, filterBinaryId, filterName, filterNamePartial, filterCommand, filterArgs, filterNotes, filterStatus, filterMaintenance, filterResourcePackageSlug, filterInUse, filterBinaryName, filterBinaryVersion, filterBinaryType, filterBinaryOs, _options);
        return result.toPromise();
    }

    /**
     * Get service logs
     * @param dockerService The docker service ID
     * @param [limit] The max number of entries to return. Default: 100
     * @param [direction] Determines the sort order of logs. Supported values are forward or backward. Default: forward
     * @param [streamSource] Only return logs filtered by stream source like stdout or stderr. Default: null
     */
    public getServerLogsWithHttpInfo(dockerService: number, limit?: number, direction?: string, streamSource?: 'stdout' | 'stderr', _options?: Configuration): Promise<HttpInfo<ServiceLogs>> {
        const result = this.api.getServerLogsWithHttpInfo(dockerService, limit, direction, streamSource, _options);
        return result.toPromise();
    }

    /**
     * Get service logs
     * @param dockerService The docker service ID
     * @param [limit] The max number of entries to return. Default: 100
     * @param [direction] Determines the sort order of logs. Supported values are forward or backward. Default: forward
     * @param [streamSource] Only return logs filtered by stream source like stdout or stderr. Default: null
     */
    public getServerLogs(dockerService: number, limit?: number, direction?: string, streamSource?: 'stdout' | 'stderr', _options?: Configuration): Promise<ServiceLogs> {
        const result = this.api.getServerLogs(dockerService, limit, direction, streamSource, _options);
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
     * @param [filterMetadata] Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by instance in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-instance &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-instance &#x60;&#x60;&#x60;
     */
    public getServersWithHttpInfo(app: number, perPage?: number, page?: number, filterStatus?: string, filterAppLocationSettingId?: number, filterServerConfigId?: number, filterServerConfigName?: string, filterServerConfigNamePartial?: string, filterLocationCity?: string, filterLocationCityDisplay?: string, filterLocationContinent?: string, filterLocationCountry?: string, filterIsBackupable?: boolean, filterIsRestorable?: boolean, filterIsPending?: boolean, filterIsNotFound?: boolean, filterIsHealthy?: boolean, filterBinaryId?: number, filterIsStopped?: boolean, filterMetadata?: string, sort?: Array<string>, _options?: Configuration): Promise<HttpInfo<GetServers200Response>> {
        const result = this.api.getServersWithHttpInfo(app, perPage, page, filterStatus, filterAppLocationSettingId, filterServerConfigId, filterServerConfigName, filterServerConfigNamePartial, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterIsBackupable, filterIsRestorable, filterIsPending, filterIsNotFound, filterIsHealthy, filterBinaryId, filterIsStopped, filterMetadata, sort, _options);
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
     * @param [filterMetadata] Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;
     * @param [sort] Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by instance in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-instance &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-instance &#x60;&#x60;&#x60;
     */
    public getServers(app: number, perPage?: number, page?: number, filterStatus?: string, filterAppLocationSettingId?: number, filterServerConfigId?: number, filterServerConfigName?: string, filterServerConfigNamePartial?: string, filterLocationCity?: string, filterLocationCityDisplay?: string, filterLocationContinent?: string, filterLocationCountry?: string, filterIsBackupable?: boolean, filterIsRestorable?: boolean, filterIsPending?: boolean, filterIsNotFound?: boolean, filterIsHealthy?: boolean, filterBinaryId?: number, filterIsStopped?: boolean, filterMetadata?: string, sort?: Array<string>, _options?: Configuration): Promise<GetServers200Response> {
        const result = this.api.getServers(app, perPage, page, filterStatus, filterAppLocationSettingId, filterServerConfigId, filterServerConfigName, filterServerConfigNamePartial, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterIsBackupable, filterIsRestorable, filterIsPending, filterIsNotFound, filterIsHealthy, filterBinaryId, filterIsStopped, filterMetadata, sort, _options);
        return result.toPromise();
    }

    /**
     * List all available tagged images
     * @param dockerRegistry The docker registry ID
     */
    public getTaggedImagesWithHttpInfo(dockerRegistry: number, _options?: Configuration): Promise<HttpInfo<GetTaggedImages200Response>> {
        const result = this.api.getTaggedImagesWithHttpInfo(dockerRegistry, _options);
        return result.toPromise();
    }

    /**
     * List all available tagged images
     * @param dockerRegistry The docker registry ID
     */
    public getTaggedImages(dockerRegistry: number, _options?: Configuration): Promise<GetTaggedImages200Response> {
        const result = this.api.getTaggedImages(dockerRegistry, _options);
        return result.toPromise();
    }

    /**
     * Show all services for a specific app location setting within a given app
     * @param app The app ID
     * @param appLocationSetting The app location setting ID
     */
    public listServicesForAppLocationSettingWithHttpInfo(app: number, appLocationSetting: number, _options?: Configuration): Promise<HttpInfo<Array<Server>>> {
        const result = this.api.listServicesForAppLocationSettingWithHttpInfo(app, appLocationSetting, _options);
        return result.toPromise();
    }

    /**
     * Show all services for a specific app location setting within a given app
     * @param app The app ID
     * @param appLocationSetting The app location setting ID
     */
    public listServicesForAppLocationSetting(app: number, appLocationSetting: number, _options?: Configuration): Promise<Array<Server>> {
        const result = this.api.listServicesForAppLocationSetting(app, appLocationSetting, _options);
        return result.toPromise();
    }

    /**
     * Refresh token
     */
    public refreshAuthTokenWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Auth>> {
        const result = this.api.refreshAuthTokenWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Refresh token
     */
    public refreshAuthToken(_options?: Configuration): Promise<Auth> {
        const result = this.api.refreshAuthToken(_options);
        return result.toPromise();
    }

    /**
     * Refresh a binary and the related entity
     * @param binary The binary ID
     */
    public refreshBinaryWithHttpInfo(binary: number, _options?: Configuration): Promise<HttpInfo<Binary>> {
        const result = this.api.refreshBinaryWithHttpInfo(binary, _options);
        return result.toPromise();
    }

    /**
     * Refresh a binary and the related entity
     * @param binary The binary ID
     */
    public refreshBinary(binary: number, _options?: Configuration): Promise<Binary> {
        const result = this.api.refreshBinary(binary, _options);
        return result.toPromise();
    }

    /**
     * Refresh the cache for all available tagged images
     * @param dockerRegistry The docker registry ID
     */
    public refreshTaggedImagesWithHttpInfo(dockerRegistry: number, _options?: Configuration): Promise<HttpInfo<GetTaggedImages200Response>> {
        const result = this.api.refreshTaggedImagesWithHttpInfo(dockerRegistry, _options);
        return result.toPromise();
    }

    /**
     * Refresh the cache for all available tagged images
     * @param dockerRegistry The docker registry ID
     */
    public refreshTaggedImages(dockerRegistry: number, _options?: Configuration): Promise<GetTaggedImages200Response> {
        const result = this.api.refreshTaggedImages(dockerRegistry, _options);
        return result.toPromise();
    }

    /**
     * Restart service
     * @param dockerService The docker service ID
     */
    public restartServerWithHttpInfo(dockerService: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.restartServerWithHttpInfo(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Restart service
     * @param dockerService The docker service ID
     */
    public restartServer(dockerService: number, _options?: Configuration): Promise<void> {
        const result = this.api.restartServer(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Restore latest service backup
     * @param dockerService The docker service ID
     */
    public restoreBackupWithHttpInfo(dockerService: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.restoreBackupWithHttpInfo(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Restore latest service backup
     * @param dockerService The docker service ID
     */
    public restoreBackup(dockerService: number, _options?: Configuration): Promise<void> {
        const result = this.api.restoreBackup(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Start service
     * @param dockerService The docker service ID
     */
    public startServerWithHttpInfo(dockerService: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.startServerWithHttpInfo(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Start service
     * @param dockerService The docker service ID
     */
    public startServer(dockerService: number, _options?: Configuration): Promise<void> {
        const result = this.api.startServer(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Start all services related to a specific app
     * @param app The app ID
     */
    public startServersForAppWithHttpInfo(app: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.startServersForAppWithHttpInfo(app, _options);
        return result.toPromise();
    }

    /**
     * Start all services related to a specific app
     * @param app The app ID
     */
    public startServersForApp(app: number, _options?: Configuration): Promise<void> {
        const result = this.api.startServersForApp(app, _options);
        return result.toPromise();
    }

    /**
     * Start all services related to a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public startServersForAppLocationSettingWithHttpInfo(appLocationSetting: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.startServersForAppLocationSettingWithHttpInfo(appLocationSetting, _options);
        return result.toPromise();
    }

    /**
     * Start all services related to a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public startServersForAppLocationSetting(appLocationSetting: number, _options?: Configuration): Promise<void> {
        const result = this.api.startServersForAppLocationSetting(appLocationSetting, _options);
        return result.toPromise();
    }

    /**
     * Start all services related to a specific binary
     * @param binary The binary ID
     */
    public startServersForBinaryWithHttpInfo(binary: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.startServersForBinaryWithHttpInfo(binary, _options);
        return result.toPromise();
    }

    /**
     * Start all services related to a specific binary
     * @param binary The binary ID
     */
    public startServersForBinary(binary: number, _options?: Configuration): Promise<void> {
        const result = this.api.startServersForBinary(binary, _options);
        return result.toPromise();
    }

    /**
     * Start all services related to a specific server config
     * @param serverConfig The server config ID
     */
    public startServersForServerConfigWithHttpInfo(serverConfig: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.startServersForServerConfigWithHttpInfo(serverConfig, _options);
        return result.toPromise();
    }

    /**
     * Start all services related to a specific server config
     * @param serverConfig The server config ID
     */
    public startServersForServerConfig(serverConfig: number, _options?: Configuration): Promise<void> {
        const result = this.api.startServersForServerConfig(serverConfig, _options);
        return result.toPromise();
    }

    /**
     * Get branches for a specific steamworks app ID
     * @param appId The steamworks app id
     */
    public steamGetBranchesWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<Array<SteamBranch>>> {
        const result = this.api.steamGetBranchesWithHttpInfo(appId, _options);
        return result.toPromise();
    }

    /**
     * Get branches for a specific steamworks app ID
     * @param appId The steamworks app id
     */
    public steamGetBranches(appId: number, _options?: Configuration): Promise<Array<SteamBranch>> {
        const result = this.api.steamGetBranches(appId, _options);
        return result.toPromise();
    }

    /**
     * Get launchers for a specific steamworks app ID, optionally filtered by OS
     * @param appId The steamworks app id
     * @param [os] The operating system of the binary
     */
    public steamGetLauncherWithHttpInfo(appId: number, os?: OperatingSystem, _options?: Configuration): Promise<HttpInfo<Array<SteamLauncher>>> {
        const result = this.api.steamGetLauncherWithHttpInfo(appId, os, _options);
        return result.toPromise();
    }

    /**
     * Get launchers for a specific steamworks app ID, optionally filtered by OS
     * @param appId The steamworks app id
     * @param [os] The operating system of the binary
     */
    public steamGetLauncher(appId: number, os?: OperatingSystem, _options?: Configuration): Promise<Array<SteamLauncher>> {
        const result = this.api.steamGetLauncher(appId, os, _options);
        return result.toPromise();
    }

    /**
     * Stop service
     * @param dockerService The docker service ID
     */
    public stopServerWithHttpInfo(dockerService: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.stopServerWithHttpInfo(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Stop service
     * @param dockerService The docker service ID
     */
    public stopServer(dockerService: number, _options?: Configuration): Promise<void> {
        const result = this.api.stopServer(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Stop all services related to a specific app
     * @param app The app ID
     */
    public stopServersForAppWithHttpInfo(app: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.stopServersForAppWithHttpInfo(app, _options);
        return result.toPromise();
    }

    /**
     * Stop all services related to a specific app
     * @param app The app ID
     */
    public stopServersForApp(app: number, _options?: Configuration): Promise<void> {
        const result = this.api.stopServersForApp(app, _options);
        return result.toPromise();
    }

    /**
     * Stop all services related to a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public stopServersForAppLocationSettingWithHttpInfo(appLocationSetting: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.stopServersForAppLocationSettingWithHttpInfo(appLocationSetting, _options);
        return result.toPromise();
    }

    /**
     * Stop all services related to a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public stopServersForAppLocationSetting(appLocationSetting: number, _options?: Configuration): Promise<void> {
        const result = this.api.stopServersForAppLocationSetting(appLocationSetting, _options);
        return result.toPromise();
    }

    /**
     * Stop all services related to a specific binary
     * @param binary The binary ID
     */
    public stopServersForBinaryWithHttpInfo(binary: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.stopServersForBinaryWithHttpInfo(binary, _options);
        return result.toPromise();
    }

    /**
     * Stop all services related to a specific binary
     * @param binary The binary ID
     */
    public stopServersForBinary(binary: number, _options?: Configuration): Promise<void> {
        const result = this.api.stopServersForBinary(binary, _options);
        return result.toPromise();
    }

    /**
     * Stop all services related to a specific server config
     * @param serverConfig The server config ID
     */
    public stopServersForServerConfigWithHttpInfo(serverConfig: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.stopServersForServerConfigWithHttpInfo(serverConfig, _options);
        return result.toPromise();
    }

    /**
     * Stop all services related to a specific server config
     * @param serverConfig The server config ID
     */
    public stopServersForServerConfig(serverConfig: number, _options?: Configuration): Promise<void> {
        const result = this.api.stopServersForServerConfig(serverConfig, _options);
        return result.toPromise();
    }

    /**
     * Create a Minecraft template app
     * @param [storeMinecraftTemplateRequest]
     */
    public templateAppMinecraftStoreWithHttpInfo(storeMinecraftTemplateRequest?: StoreMinecraftTemplateRequest, _options?: Configuration): Promise<HttpInfo<App>> {
        const result = this.api.templateAppMinecraftStoreWithHttpInfo(storeMinecraftTemplateRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a Minecraft template app
     * @param [storeMinecraftTemplateRequest]
     */
    public templateAppMinecraftStore(storeMinecraftTemplateRequest?: StoreMinecraftTemplateRequest, _options?: Configuration): Promise<App> {
        const result = this.api.templateAppMinecraftStore(storeMinecraftTemplateRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a Palworld template app
     * @param [storePalworldTemplateRequest]
     */
    public templateAppPalworldStoreWithHttpInfo(storePalworldTemplateRequest?: StorePalworldTemplateRequest, _options?: Configuration): Promise<HttpInfo<App>> {
        const result = this.api.templateAppPalworldStoreWithHttpInfo(storePalworldTemplateRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a Palworld template app
     * @param [storePalworldTemplateRequest]
     */
    public templateAppPalworldStore(storePalworldTemplateRequest?: StorePalworldTemplateRequest, _options?: Configuration): Promise<App> {
        const result = this.api.templateAppPalworldStore(storePalworldTemplateRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a specific app
     * @param app The app ID
     * @param updateAppRequest
     */
    public updateAppByIdWithHttpInfo(app: number, updateAppRequest: UpdateAppRequest, _options?: Configuration): Promise<HttpInfo<App>> {
        const result = this.api.updateAppByIdWithHttpInfo(app, updateAppRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a specific app
     * @param app The app ID
     * @param updateAppRequest
     */
    public updateAppById(app: number, updateAppRequest: UpdateAppRequest, _options?: Configuration): Promise<App> {
        const result = this.api.updateAppById(app, updateAppRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a location setting
     * @param appLocationSetting The app location setting ID
     * @param updateAppLocationSettingRequest
     */
    public updateAppLocationSettingWithHttpInfo(appLocationSetting: number, updateAppLocationSettingRequest: UpdateAppLocationSettingRequest, _options?: Configuration): Promise<HttpInfo<AppLocationSetting>> {
        const result = this.api.updateAppLocationSettingWithHttpInfo(appLocationSetting, updateAppLocationSettingRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a location setting
     * @param appLocationSetting The app location setting ID
     * @param updateAppLocationSettingRequest
     */
    public updateAppLocationSetting(appLocationSetting: number, updateAppLocationSettingRequest: UpdateAppLocationSettingRequest, _options?: Configuration): Promise<AppLocationSetting> {
        const result = this.api.updateAppLocationSetting(appLocationSetting, updateAppLocationSettingRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a binary and the related entity
     * @param binary The binary ID
     * @param updateBinaryRequest
     */
    public updateBinaryWithHttpInfo(binary: number, updateBinaryRequest: UpdateBinaryRequest, _options?: Configuration): Promise<HttpInfo<Binary>> {
        const result = this.api.updateBinaryWithHttpInfo(binary, updateBinaryRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a binary and the related entity
     * @param binary The binary ID
     * @param updateBinaryRequest
     */
    public updateBinary(binary: number, updateBinaryRequest: UpdateBinaryRequest, _options?: Configuration): Promise<Binary> {
        const result = this.api.updateBinary(binary, updateBinaryRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a specific docker registry
     * @param dockerRegistry The docker registry ID
     * @param updateDockerRegistryRequest
     */
    public updateDockerRegistryWithHttpInfo(dockerRegistry: number, updateDockerRegistryRequest: UpdateDockerRegistryRequest, _options?: Configuration): Promise<HttpInfo<DockerRegistry>> {
        const result = this.api.updateDockerRegistryWithHttpInfo(dockerRegistry, updateDockerRegistryRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a specific docker registry
     * @param dockerRegistry The docker registry ID
     * @param updateDockerRegistryRequest
     */
    public updateDockerRegistry(dockerRegistry: number, updateDockerRegistryRequest: UpdateDockerRegistryRequest, _options?: Configuration): Promise<DockerRegistry> {
        const result = this.api.updateDockerRegistry(dockerRegistry, updateDockerRegistryRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a server config
     * @param serverConfig The server config ID
     * @param updateServerConfigRequest
     */
    public updateServerConfigWithHttpInfo(serverConfig: number, updateServerConfigRequest: UpdateServerConfigRequest, _options?: Configuration): Promise<HttpInfo<ServerConfig>> {
        const result = this.api.updateServerConfigWithHttpInfo(serverConfig, updateServerConfigRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a server config
     * @param serverConfig The server config ID
     * @param updateServerConfigRequest
     */
    public updateServerConfig(serverConfig: number, updateServerConfigRequest: UpdateServerConfigRequest, _options?: Configuration): Promise<ServerConfig> {
        const result = this.api.updateServerConfig(serverConfig, updateServerConfigRequest, _options);
        return result.toPromise();
    }


}



