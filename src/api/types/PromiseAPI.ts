import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration} from '../configuration.ts'

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
import { SecretFile } from '../models/SecretFile.ts';
import { Server } from '../models/Server.ts';
import { ServerConfig } from '../models/ServerConfig.ts';
import { ServiceLogs } from '../models/ServiceLogs.ts';
import { Steam } from '../models/Steam.ts';
import { StoreUpdateSteam } from '../models/StoreUpdateSteam.ts';
import { UpdateAppLocationSettingRequest } from '../models/UpdateAppLocationSettingRequest.ts';
import { UpdateDockerRegistryRequest } from '../models/UpdateDockerRegistryRequest.ts';
import { ZipFile } from '../models/ZipFile.ts';
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
     * @param createAppRequest 
     */
    public createAppWithHttpInfo(createAppRequest?: CreateAppRequest, _options?: Configuration): Promise<HttpInfo<App>> {
        const result = this.api.createAppWithHttpInfo(createAppRequest, _options);
        return result.toPromise();
    }

    /**
     * Create an app
     * @param createAppRequest 
     */
    public createApp(createAppRequest?: CreateAppRequest, _options?: Configuration): Promise<App> {
        const result = this.api.createApp(createAppRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new location setting
     * @param app The app ID
     * @param createAppLocationSettingRequest 
     */
    public createAppLocationSettingWithHttpInfo(app: number, createAppLocationSettingRequest?: CreateAppLocationSettingRequest, _options?: Configuration): Promise<HttpInfo<AppLocationSetting>> {
        const result = this.api.createAppLocationSettingWithHttpInfo(app, createAppLocationSettingRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new location setting
     * @param app The app ID
     * @param createAppLocationSettingRequest 
     */
    public createAppLocationSetting(app: number, createAppLocationSettingRequest?: CreateAppLocationSettingRequest, _options?: Configuration): Promise<AppLocationSetting> {
        const result = this.api.createAppLocationSetting(app, createAppLocationSettingRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a backup of the service
     * @param service The service ID
     * @param createBackupRequest 
     */
    public createBackupWithHttpInfo(service: number, createBackupRequest?: CreateBackupRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.createBackupWithHttpInfo(service, createBackupRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a backup of the service
     * @param service The service ID
     * @param createBackupRequest 
     */
    public createBackup(service: number, createBackupRequest?: CreateBackupRequest, _options?: Configuration): Promise<any> {
        const result = this.api.createBackup(service, createBackupRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a binary and the related file
     * @param app The app ID
     * @param createBinaryRequest 
     */
    public createBinaryWithHttpInfo(app: number, createBinaryRequest?: CreateBinaryRequest, _options?: Configuration): Promise<HttpInfo<Binary>> {
        const result = this.api.createBinaryWithHttpInfo(app, createBinaryRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a binary and the related file
     * @param app The app ID
     * @param createBinaryRequest 
     */
    public createBinary(app: number, createBinaryRequest?: CreateBinaryRequest, _options?: Configuration): Promise<Binary> {
        const result = this.api.createBinary(app, createBinaryRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new docker registry
     * @param createDockerRegistryRequest 
     */
    public createDockerRegistryWithHttpInfo(createDockerRegistryRequest?: CreateDockerRegistryRequest, _options?: Configuration): Promise<HttpInfo<DockerRegistry>> {
        const result = this.api.createDockerRegistryWithHttpInfo(createDockerRegistryRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new docker registry
     * @param createDockerRegistryRequest 
     */
    public createDockerRegistry(createDockerRegistryRequest?: CreateDockerRegistryRequest, _options?: Configuration): Promise<DockerRegistry> {
        const result = this.api.createDockerRegistry(createDockerRegistryRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new server config
     * @param app The app ID
     * @param createServerConfigRequest 
     */
    public createServerConfigWithHttpInfo(app: number, createServerConfigRequest?: CreateServerConfigRequest, _options?: Configuration): Promise<HttpInfo<ServerConfig>> {
        const result = this.api.createServerConfigWithHttpInfo(app, createServerConfigRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new server config
     * @param app The app ID
     * @param createServerConfigRequest 
     */
    public createServerConfig(app: number, createServerConfigRequest?: CreateServerConfigRequest, _options?: Configuration): Promise<ServerConfig> {
        const result = this.api.createServerConfig(app, createServerConfigRequest, _options);
        return result.toPromise();
    }

    /**
     * This method is responsible for deleting an App record from the database. It locates the App instance using the provided ID, and if found, proceeds to delete it. Upon successful deletion, an HTTP 204 No Content response is returned, indicating that the action was successful.
     * Delete a specific app
     * @param app The app ID
     */
    public deleteAppWithHttpInfo(app: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deleteAppWithHttpInfo(app, _options);
        return result.toPromise();
    }

    /**
     * This method is responsible for deleting an App record from the database. It locates the App instance using the provided ID, and if found, proceeds to delete it. Upon successful deletion, an HTTP 204 No Content response is returned, indicating that the action was successful.
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
     * Handles the deletion of a user\'s authentication tokens
     * @param sid The session id of the user
     */
    public deleteAuthTokenWithHttpInfo(sid: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deleteAuthTokenWithHttpInfo(sid, _options);
        return result.toPromise();
    }

    /**
     * Handles the deletion of a user\'s authentication tokens
     * @param sid The session id of the user
     */
    public deleteAuthToken(sid: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteAuthToken(sid, _options);
        return result.toPromise();
    }

    /**
     * It first finds the Binary instance by its ID. If the instance is found, it is deleted. The method then returns an HTTP 204 No Content response to indicate successful deletion.
     * Delete a specified binary
     * @param binary The binary ID
     */
    public deleteBinaryWithHttpInfo(binary: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deleteBinaryWithHttpInfo(binary, _options);
        return result.toPromise();
    }

    /**
     * It first finds the Binary instance by its ID. If the instance is found, it is deleted. The method then returns an HTTP 204 No Content response to indicate successful deletion.
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
     * This method handles the deletion of a ServerConfig record from the database. It first finds the ServerConfig instance by its ID, and if found, deletes it. Returns an HTTP 204 No Content response upon successful deletion.
     * Delete a specific server config
     * @param serverConfig The server config ID
     */
    public deleteServerConfigWithHttpInfo(serverConfig: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deleteServerConfigWithHttpInfo(serverConfig, _options);
        return result.toPromise();
    }

    /**
     * This method handles the deletion of a ServerConfig record from the database. It first finds the ServerConfig instance by its ID, and if found, deletes it. Returns an HTTP 204 No Content response upon successful deletion.
     * Delete a specific server config
     * @param serverConfig The server config ID
     */
    public deleteServerConfig(serverConfig: number, _options?: Configuration): Promise<any> {
        const result = this.api.deleteServerConfig(serverConfig, _options);
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
     * Validates the incoming request and attempts to authenticate the user based on the provided session ID. If the user is authenticated successfully, it returns an AuthResource containing the user\'s bearer token.
     * Handles user authentication
     * @param getAuthTokenRequest 
     */
    public getAuthTokenWithHttpInfo(getAuthTokenRequest?: GetAuthTokenRequest, _options?: Configuration): Promise<HttpInfo<Auth>> {
        const result = this.api.getAuthTokenWithHttpInfo(getAuthTokenRequest, _options);
        return result.toPromise();
    }

    /**
     * Validates the incoming request and attempts to authenticate the user based on the provided session ID. If the user is authenticated successfully, it returns an AuthResource containing the user\'s bearer token.
     * Handles user authentication
     * @param getAuthTokenRequest 
     */
    public getAuthToken(getAuthTokenRequest?: GetAuthTokenRequest, _options?: Configuration): Promise<Auth> {
        const result = this.api.getAuthToken(getAuthTokenRequest, _options);
        return result.toPromise();
    }

    /**
     * List all backups for the specified Docker service
     * @param service The service ID
     */
    public getBackupsWithHttpInfo(service: number, _options?: Configuration): Promise<HttpInfo<Array<Backup>>> {
        const result = this.api.getBackupsWithHttpInfo(service, _options);
        return result.toPromise();
    }

    /**
     * List all backups for the specified Docker service
     * @param service The service ID
     */
    public getBackups(service: number, _options?: Configuration): Promise<Array<Backup>> {
        const result = this.api.getBackups(service, _options);
        return result.toPromise();
    }

    /**
     * Eager load file types and config templates to reduce the number of queries.
     * Show all binaries
     * @param app The app ID
     */
    public getBinariesWithHttpInfo(app: number, _options?: Configuration): Promise<HttpInfo<Array<Binary>>> {
        const result = this.api.getBinariesWithHttpInfo(app, _options);
        return result.toPromise();
    }

    /**
     * Eager load file types and config templates to reduce the number of queries.
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
     * Synchronizes the local database with the state of Docker nodes, then filters for active, ready worker nodes to create a unique listing of their location labels. These nodes are suitable for deployment.
     * Show a unique listing of locations based on active and ready worker nodes
     */
    public getLocationsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Location>>> {
        const result = this.api.getLocationsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Synchronizes the local database with the state of Docker nodes, then filters for active, ready worker nodes to create a unique listing of their location labels. These nodes are suitable for deployment.
     * Show a unique listing of locations based on active and ready worker nodes
     */
    public getLocations(_options?: Configuration): Promise<Array<Location>> {
        const result = this.api.getLocations(_options);
        return result.toPromise();
    }

    /**
     * Display the most recent backup for the specified Docker service
     * @param service The service ID
     */
    public getMostRecentBackupWithHttpInfo(service: number, _options?: Configuration): Promise<HttpInfo<Backup>> {
        const result = this.api.getMostRecentBackupWithHttpInfo(service, _options);
        return result.toPromise();
    }

    /**
     * Display the most recent backup for the specified Docker service
     * @param service The service ID
     */
    public getMostRecentBackup(service: number, _options?: Configuration): Promise<Backup> {
        const result = this.api.getMostRecentBackup(service, _options);
        return result.toPromise();
    }

    /**
     * Generates a presigned URL for downloading a backup from AWS S3 if the backup method is \'archive\'
     * @param service The service ID
     */
    public getServerBackupDownloadUrlWithHttpInfo(service: number, _options?: Configuration): Promise<HttpInfo<BackupDownload>> {
        const result = this.api.getServerBackupDownloadUrlWithHttpInfo(service, _options);
        return result.toPromise();
    }

    /**
     * Generates a presigned URL for downloading a backup from AWS S3 if the backup method is \'archive\'
     * @param service The service ID
     */
    public getServerBackupDownloadUrl(service: number, _options?: Configuration): Promise<BackupDownload> {
        const result = this.api.getServerBackupDownloadUrl(service, _options);
        return result.toPromise();
    }

    /**
     * Display a specific DockerService associated with the given App
     * @param app The app ID
     * @param service The service ID
     */
    public getServerByIdWithHttpInfo(app: number, service: number, _options?: Configuration): Promise<HttpInfo<Server>> {
        const result = this.api.getServerByIdWithHttpInfo(app, service, _options);
        return result.toPromise();
    }

    /**
     * Display a specific DockerService associated with the given App
     * @param app The app ID
     * @param service The service ID
     */
    public getServerById(app: number, service: number, _options?: Configuration): Promise<Server> {
        const result = this.api.getServerById(app, service, _options);
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
    public getServerLogsWithHttpInfo(service: number, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, _options?: Configuration): Promise<HttpInfo<ServiceLogs>> {
        const result = this.api.getServerLogsWithHttpInfo(service, details, follow, stdout, stderr, since, timestamps, tail, _options);
        return result.toPromise();
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
    public getServerLogs(service: number, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, _options?: Configuration): Promise<ServiceLogs> {
        const result = this.api.getServerLogs(service, details, follow, stdout, stderr, since, timestamps, tail, _options);
        return result.toPromise();
    }

    /**
     * Show all services for a given app
     * @param app Instance of the app to filter services by.
     */
    public getServersWithHttpInfo(app: number, _options?: Configuration): Promise<HttpInfo<Array<Server>>> {
        const result = this.api.getServersWithHttpInfo(app, _options);
        return result.toPromise();
    }

    /**
     * Show all services for a given app
     * @param app Instance of the app to filter services by.
     */
    public getServers(app: number, _options?: Configuration): Promise<Array<Server>> {
        const result = this.api.getServers(app, _options);
        return result.toPromise();
    }

    /**
     * Restarts a specific Docker service
     * @param service The service ID
     * @param body 
     */
    public restartServerWithHttpInfo(service: number, body?: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.restartServerWithHttpInfo(service, body, _options);
        return result.toPromise();
    }

    /**
     * Restarts a specific Docker service
     * @param service The service ID
     * @param body 
     */
    public restartServer(service: number, body?: any, _options?: Configuration): Promise<any> {
        const result = this.api.restartServer(service, body, _options);
        return result.toPromise();
    }

    /**
     * Restore a backup for a specified Docker service
     * @param service The service ID
     * @param body 
     */
    public restoreBackupWithHttpInfo(service: number, body?: any, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.restoreBackupWithHttpInfo(service, body, _options);
        return result.toPromise();
    }

    /**
     * Restore a backup for a specified Docker service
     * @param service The service ID
     * @param body 
     */
    public restoreBackup(service: number, body?: any, _options?: Configuration): Promise<any> {
        const result = this.api.restoreBackup(service, body, _options);
        return result.toPromise();
    }

    /**
     * Update a location setting
     * @param appLocationSetting The app location setting ID
     * @param updateAppLocationSettingRequest 
     */
    public updateAppLocationSettingWithHttpInfo(appLocationSetting: number, updateAppLocationSettingRequest?: UpdateAppLocationSettingRequest, _options?: Configuration): Promise<HttpInfo<AppLocationSetting>> {
        const result = this.api.updateAppLocationSettingWithHttpInfo(appLocationSetting, updateAppLocationSettingRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a location setting
     * @param appLocationSetting The app location setting ID
     * @param updateAppLocationSettingRequest 
     */
    public updateAppLocationSetting(appLocationSetting: number, updateAppLocationSettingRequest?: UpdateAppLocationSettingRequest, _options?: Configuration): Promise<AppLocationSetting> {
        const result = this.api.updateAppLocationSetting(appLocationSetting, updateAppLocationSettingRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a binary and the related file
     * @param binary The binary ID
     * @param createBinaryRequest 
     */
    public updateBinaryWithHttpInfo(binary: number, createBinaryRequest?: CreateBinaryRequest, _options?: Configuration): Promise<HttpInfo<Binary>> {
        const result = this.api.updateBinaryWithHttpInfo(binary, createBinaryRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a binary and the related file
     * @param binary The binary ID
     * @param createBinaryRequest 
     */
    public updateBinary(binary: number, createBinaryRequest?: CreateBinaryRequest, _options?: Configuration): Promise<Binary> {
        const result = this.api.updateBinary(binary, createBinaryRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a specific docker registry
     * @param dockerRegistry The docker registry ID
     * @param updateDockerRegistryRequest 
     */
    public updateDockerRegistryWithHttpInfo(dockerRegistry: number, updateDockerRegistryRequest?: UpdateDockerRegistryRequest, _options?: Configuration): Promise<HttpInfo<DockerRegistry>> {
        const result = this.api.updateDockerRegistryWithHttpInfo(dockerRegistry, updateDockerRegistryRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a specific docker registry
     * @param dockerRegistry The docker registry ID
     * @param updateDockerRegistryRequest 
     */
    public updateDockerRegistry(dockerRegistry: number, updateDockerRegistryRequest?: UpdateDockerRegistryRequest, _options?: Configuration): Promise<DockerRegistry> {
        const result = this.api.updateDockerRegistry(dockerRegistry, updateDockerRegistryRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a server config
     * @param serverConfig The server config ID
     * @param createServerConfigRequest 
     */
    public updateServerConfigWithHttpInfo(serverConfig: number, createServerConfigRequest?: CreateServerConfigRequest, _options?: Configuration): Promise<HttpInfo<ServerConfig>> {
        const result = this.api.updateServerConfigWithHttpInfo(serverConfig, createServerConfigRequest, _options);
        return result.toPromise();
    }

    /**
     * Update a server config
     * @param serverConfig The server config ID
     * @param createServerConfigRequest 
     */
    public updateServerConfig(serverConfig: number, createServerConfigRequest?: CreateServerConfigRequest, _options?: Configuration): Promise<ServerConfig> {
        const result = this.api.updateServerConfig(serverConfig, createServerConfigRequest, _options);
        return result.toPromise();
    }


}



