import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration} from '../configuration.ts'

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
import { GetServers200Response } from '../models/GetServers200Response.ts';
import { GetServers200ResponseLinks } from '../models/GetServers200ResponseLinks.ts';
import { GetServers200ResponseMeta } from '../models/GetServers200ResponseMeta.ts';
import { GetServers200ResponseMetaLinksInner } from '../models/GetServers200ResponseMetaLinksInner.ts';
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
     * Creates a backup
     * @param dockerService The docker service ID
     * @param createBackupDockerServiceRequest
     */
    public createBackupWithHttpInfo(dockerService: number, createBackupDockerServiceRequest: CreateBackupDockerServiceRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.createBackupWithHttpInfo(dockerService, createBackupDockerServiceRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a backup
     * @param dockerService The docker service ID
     * @param createBackupDockerServiceRequest
     */
    public createBackup(dockerService: number, createBackupDockerServiceRequest: CreateBackupDockerServiceRequest, _options?: Configuration): Promise<any> {
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
    public deleteAppWithHttpInfo(app: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deleteAppWithHttpInfo(app, _options);
        return result.toPromise();
    }

    /**
     * Delete a specific app
     * @param app The app ID
     */
    public deleteApp(app: number, _options?: Configuration): Promise<any> {
        const result = this.api.deleteApp(app, _options);
        return result.toPromise();
    }

    /**
     * Delete a location setting
     * @param appLocationSetting The app location setting ID
     */
    public deleteAppLocationSettingWithHttpInfo(appLocationSetting: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deleteAppLocationSettingWithHttpInfo(appLocationSetting, _options);
        return result.toPromise();
    }

    /**
     * Delete a location setting
     * @param appLocationSetting The app location setting ID
     */
    public deleteAppLocationSetting(appLocationSetting: number, _options?: Configuration): Promise<any> {
        const result = this.api.deleteAppLocationSetting(appLocationSetting, _options);
        return result.toPromise();
    }

    /**
     * Delete a specified binary
     * @param binary The binary ID
     */
    public deleteBinaryWithHttpInfo(binary: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deleteBinaryWithHttpInfo(binary, _options);
        return result.toPromise();
    }

    /**
     * Delete a specified binary
     * @param binary The binary ID
     */
    public deleteBinary(binary: number, _options?: Configuration): Promise<any> {
        const result = this.api.deleteBinary(binary, _options);
        return result.toPromise();
    }

    /**
     * Delete a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public deleteDockerRegistryWithHttpInfo(dockerRegistry: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deleteDockerRegistryWithHttpInfo(dockerRegistry, _options);
        return result.toPromise();
    }

    /**
     * Delete a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public deleteDockerRegistry(dockerRegistry: number, _options?: Configuration): Promise<any> {
        const result = this.api.deleteDockerRegistry(dockerRegistry, _options);
        return result.toPromise();
    }

    /**
     * Delete a specific server config
     * @param serverConfig The server config ID
     */
    public deleteServerConfigWithHttpInfo(serverConfig: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deleteServerConfigWithHttpInfo(serverConfig, _options);
        return result.toPromise();
    }

    /**
     * Delete a specific server config
     * @param serverConfig The server config ID
     */
    public deleteServerConfig(serverConfig: number, _options?: Configuration): Promise<any> {
        const result = this.api.deleteServerConfig(serverConfig, _options);
        return result.toPromise();
    }

    /**
     * Delete all metadata from the service
     * @param dockerService The docker service ID
     */
    public dockerServicesMetadataDeleteAllWithHttpInfo(dockerService: number, _options?: Configuration): Promise<HttpInfo<Server>> {
        const result = this.api.dockerServicesMetadataDeleteAllWithHttpInfo(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Delete all metadata from the service
     * @param dockerService The docker service ID
     */
    public dockerServicesMetadataDeleteAll(dockerService: number, _options?: Configuration): Promise<Server> {
        const result = this.api.dockerServicesMetadataDeleteAll(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Delete specific metadata keys from the service
     * @param dockerService The docker service ID
     * @param metadata
     */
    public dockerServicesMetadataDeleteKeysWithHttpInfo(dockerService: number, metadata: Array<string>, _options?: Configuration): Promise<HttpInfo<Server>> {
        const result = this.api.dockerServicesMetadataDeleteKeysWithHttpInfo(dockerService, metadata, _options);
        return result.toPromise();
    }

    /**
     * Delete specific metadata keys from the service
     * @param dockerService The docker service ID
     * @param metadata
     */
    public dockerServicesMetadataDeleteKeys(dockerService: number, metadata: Array<string>, _options?: Configuration): Promise<Server> {
        const result = this.api.dockerServicesMetadataDeleteKeys(dockerService, metadata, _options);
        return result.toPromise();
    }

    /**
     * Replaces the entire metadata set with only the values provided in the request.
     * Set metadata for the service
     * @param dockerService The docker service ID
     * @param [setMetadataRequest]
     */
    public dockerServicesMetadataSetWithHttpInfo(dockerService: number, setMetadataRequest?: SetMetadataRequest, _options?: Configuration): Promise<HttpInfo<Server>> {
        const result = this.api.dockerServicesMetadataSetWithHttpInfo(dockerService, setMetadataRequest, _options);
        return result.toPromise();
    }

    /**
     * Replaces the entire metadata set with only the values provided in the request.
     * Set metadata for the service
     * @param dockerService The docker service ID
     * @param [setMetadataRequest]
     */
    public dockerServicesMetadataSet(dockerService: number, setMetadataRequest?: SetMetadataRequest, _options?: Configuration): Promise<Server> {
        const result = this.api.dockerServicesMetadataSet(dockerService, setMetadataRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting metadata that is not mentioned.
     * Update metadata for the service
     * @param dockerService The docker service ID
     * @param [patchMetadataRequest]
     */
    public dockerServicesMetadataUpdateWithHttpInfo(dockerService: number, patchMetadataRequest?: PatchMetadataRequest, _options?: Configuration): Promise<HttpInfo<Server>> {
        const result = this.api.dockerServicesMetadataUpdateWithHttpInfo(dockerService, patchMetadataRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting metadata that is not mentioned.
     * Update metadata for the service
     * @param dockerService The docker service ID
     * @param [patchMetadataRequest]
     */
    public dockerServicesMetadataUpdate(dockerService: number, patchMetadataRequest?: PatchMetadataRequest, _options?: Configuration): Promise<Server> {
        const result = this.api.dockerServicesMetadataUpdate(dockerService, patchMetadataRequest, _options);
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
     */
    public getAppLocationSettingsWithHttpInfo(app: number, _options?: Configuration): Promise<HttpInfo<Array<AppLocationSetting>>> {
        const result = this.api.getAppLocationSettingsWithHttpInfo(app, _options);
        return result.toPromise();
    }

    /**
     * Show all location settings
     * @param app The app ID
     */
    public getAppLocationSettings(app: number, _options?: Configuration): Promise<Array<AppLocationSetting>> {
        const result = this.api.getAppLocationSettings(app, _options);
        return result.toPromise();
    }

    /**
     * Show all apps
     */
    public getAppsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<App>>> {
        const result = this.api.getAppsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Show all apps
     */
    public getApps(_options?: Configuration): Promise<Array<App>> {
        const result = this.api.getApps(_options);
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
     * List all backups
     * @param dockerService The docker service ID
     */
    public getBackupsWithHttpInfo(dockerService: number, _options?: Configuration): Promise<HttpInfo<Array<Backup>>> {
        const result = this.api.getBackupsWithHttpInfo(dockerService, _options);
        return result.toPromise();
    }

    /**
     * List all backups
     * @param dockerService The docker service ID
     */
    public getBackups(dockerService: number, _options?: Configuration): Promise<Array<Backup>> {
        const result = this.api.getBackups(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Show all binaries
     * @param app The app ID
     */
    public getBinariesWithHttpInfo(app: number, _options?: Configuration): Promise<HttpInfo<Array<Binary>>> {
        const result = this.api.getBinariesWithHttpInfo(app, _options);
        return result.toPromise();
    }

    /**
     * Show all binaries
     * @param app The app ID
     */
    public getBinaries(app: number, _options?: Configuration): Promise<Array<Binary>> {
        const result = this.api.getBinaries(app, _options);
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
     */
    public getDockerRegistriesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<DockerRegistry>>> {
        const result = this.api.getDockerRegistriesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Show all docker registries
     */
    public getDockerRegistries(_options?: Configuration): Promise<Array<DockerRegistry>> {
        const result = this.api.getDockerRegistries(_options);
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
     * Display the latest backup
     * @param dockerService The docker service ID
     */
    public getLatestBackupWithHttpInfo(dockerService: number, _options?: Configuration): Promise<HttpInfo<Backup>> {
        const result = this.api.getLatestBackupWithHttpInfo(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Display the latest backup
     * @param dockerService The docker service ID
     */
    public getLatestBackup(dockerService: number, _options?: Configuration): Promise<Backup> {
        const result = this.api.getLatestBackup(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Show a unique listing of locations based on active and ready worker nodes
     */
    public getLocationsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Location>>> {
        const result = this.api.getLocationsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Show a unique listing of locations based on active and ready worker nodes
     */
    public getLocations(_options?: Configuration): Promise<Array<Location>> {
        const result = this.api.getLocations(_options);
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
     */
    public getResourcePackagesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<ResourcePackage>>> {
        const result = this.api.getResourcePackagesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Show all available resource packages
     */
    public getResourcePackages(_options?: Configuration): Promise<Array<ResourcePackage>> {
        const result = this.api.getResourcePackages(_options);
        return result.toPromise();
    }

    /**
     * Generate a presigned URL for downloading the latest backup from AWS S3
     * @param dockerService The docker service ID
     */
    public getServerBackupDownloadUrlWithHttpInfo(dockerService: number, _options?: Configuration): Promise<HttpInfo<BackupDownload>> {
        const result = this.api.getServerBackupDownloadUrlWithHttpInfo(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Generate a presigned URL for downloading the latest backup from AWS S3
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
     */
    public getServerConfigsWithHttpInfo(app: number, _options?: Configuration): Promise<HttpInfo<Array<ServerConfig>>> {
        const result = this.api.getServerConfigsWithHttpInfo(app, _options);
        return result.toPromise();
    }

    /**
     * Show all server configs
     * @param app The app ID
     */
    public getServerConfigs(app: number, _options?: Configuration): Promise<Array<ServerConfig>> {
        const result = this.api.getServerConfigs(app, _options);
        return result.toPromise();
    }

    /**
     * Get stdout and stderr logs from the latest gameserver task
     * @param dockerService The docker service ID
     * @param [since] A duration used to calculate start relative to end. If end is in the future, start is calculated as this duration before now. Any value specified for start supersedes this parameter. Default: 7d
     * @param [limit] The max number of entries to return. Default: 100
     * @param [direction] Determines the sort order of logs. Supported values are forward or backward. Default: forward
     * @param [streamSource] Only return logs filtered by stream source like stdout or stderr. Default: null
     */
    public getServerLogsWithHttpInfo(dockerService: number, since?: string, limit?: number, direction?: string, streamSource?: string, _options?: Configuration): Promise<HttpInfo<ServiceLogs>> {
        const result = this.api.getServerLogsWithHttpInfo(dockerService, since, limit, direction, streamSource, _options);
        return result.toPromise();
    }

    /**
     * Get stdout and stderr logs from the latest gameserver task
     * @param dockerService The docker service ID
     * @param [since] A duration used to calculate start relative to end. If end is in the future, start is calculated as this duration before now. Any value specified for start supersedes this parameter. Default: 7d
     * @param [limit] The max number of entries to return. Default: 100
     * @param [direction] Determines the sort order of logs. Supported values are forward or backward. Default: forward
     * @param [streamSource] Only return logs filtered by stream source like stdout or stderr. Default: null
     */
    public getServerLogs(dockerService: number, since?: string, limit?: number, direction?: string, streamSource?: string, _options?: Configuration): Promise<ServiceLogs> {
        const result = this.api.getServerLogs(dockerService, since, limit, direction, streamSource, _options);
        return result.toPromise();
    }

    /**
     * Show all services
     * @param app The app ID
     * @param [perPage] The number of items to be shown per page. Use &#x60;-1&#x60; to display all results on a single page. Default: &#x60;10&#x60;
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
    public getServersWithHttpInfo(app: number, perPage?: number, page?: number, filterStatus?: string, filterAppLocationSettingId?: number, filterServerConfigId?: number, filterLocationCity?: string, filterLocationCityDisplay?: string, filterLocationContinent?: string, filterLocationCountry?: string, filterMetadata?: string, sort?: Array<string>, _options?: Configuration): Promise<HttpInfo<GetServers200Response>> {
        const result = this.api.getServersWithHttpInfo(app, perPage, page, filterStatus, filterAppLocationSettingId, filterServerConfigId, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterMetadata, sort, _options);
        return result.toPromise();
    }

    /**
     * Show all services
     * @param app The app ID
     * @param [perPage] The number of items to be shown per page. Use &#x60;-1&#x60; to display all results on a single page. Default: &#x60;10&#x60;
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
    public getServers(app: number, perPage?: number, page?: number, filterStatus?: string, filterAppLocationSettingId?: number, filterServerConfigId?: number, filterLocationCity?: string, filterLocationCityDisplay?: string, filterLocationContinent?: string, filterLocationCountry?: string, filterMetadata?: string, sort?: Array<string>, _options?: Configuration): Promise<GetServers200Response> {
        const result = this.api.getServers(app, perPage, page, filterStatus, filterAppLocationSettingId, filterServerConfigId, filterLocationCity, filterLocationCityDisplay, filterLocationContinent, filterLocationCountry, filterMetadata, sort, _options);
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
     * Restart the service
     * @param dockerService The docker service ID
     */
    public restartServerWithHttpInfo(dockerService: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.restartServerWithHttpInfo(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Restart the service
     * @param dockerService The docker service ID
     */
    public restartServer(dockerService: number, _options?: Configuration): Promise<any> {
        const result = this.api.restartServer(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Restore the latest backup
     * @param dockerService The docker service ID
     */
    public restoreBackupWithHttpInfo(dockerService: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.restoreBackupWithHttpInfo(dockerService, _options);
        return result.toPromise();
    }

    /**
     * Restore the latest backup
     * @param dockerService The docker service ID
     */
    public restoreBackup(dockerService: number, _options?: Configuration): Promise<any> {
        const result = this.api.restoreBackup(dockerService, _options);
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



