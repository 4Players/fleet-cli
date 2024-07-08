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
import { UpdateAppLocationSettingRequest } from '../models/UpdateAppLocationSettingRequest.ts';
import { UpdateDockerRegistryRequest } from '../models/UpdateDockerRegistryRequest.ts';
import { ZipFile } from '../models/ZipFile.ts';

import { ObservableAppApi } from "./ObservableAPI.ts";
import { AppApiRequestFactory, AppApiResponseProcessor} from "../apis/AppApi.ts";

export interface AppApiCreateAppRequest {
    /**
     * 
     * @type CreateAppRequest
     * @memberof AppApicreateApp
     */
    createAppRequest?: CreateAppRequest
}

export interface AppApiCreateAppLocationSettingRequest {
    /**
     * The app ID
     * @type number
     * @memberof AppApicreateAppLocationSetting
     */
    app: number
    /**
     * 
     * @type CreateAppLocationSettingRequest
     * @memberof AppApicreateAppLocationSetting
     */
    createAppLocationSettingRequest?: CreateAppLocationSettingRequest
}

export interface AppApiCreateBackupRequest {
    /**
     * The service ID
     * @type number
     * @memberof AppApicreateBackup
     */
    service: number
    /**
     * 
     * @type CreateBackupRequest
     * @memberof AppApicreateBackup
     */
    createBackupRequest?: CreateBackupRequest
}

export interface AppApiCreateBinaryRequest {
    /**
     * The app ID
     * @type number
     * @memberof AppApicreateBinary
     */
    app: number
    /**
     * 
     * @type CreateBinaryRequest
     * @memberof AppApicreateBinary
     */
    createBinaryRequest?: CreateBinaryRequest
}

export interface AppApiCreateDockerRegistryRequest {
    /**
     * 
     * @type CreateDockerRegistryRequest
     * @memberof AppApicreateDockerRegistry
     */
    createDockerRegistryRequest?: CreateDockerRegistryRequest
}

export interface AppApiCreateServerConfigRequest {
    /**
     * The app ID
     * @type number
     * @memberof AppApicreateServerConfig
     */
    app: number
    /**
     * 
     * @type CreateServerConfigRequest
     * @memberof AppApicreateServerConfig
     */
    createServerConfigRequest?: CreateServerConfigRequest
}

export interface AppApiDeleteAppRequest {
    /**
     * The app ID
     * @type number
     * @memberof AppApideleteApp
     */
    app: number
}

export interface AppApiDeleteAppLocationSettingRequest {
    /**
     * The app location setting ID
     * @type number
     * @memberof AppApideleteAppLocationSetting
     */
    appLocationSetting: number
}

export interface AppApiDeleteAuthTokenRequest {
    /**
     * The session id of the user
     * @type string
     * @memberof AppApideleteAuthToken
     */
    sid: string
}

export interface AppApiDeleteBinaryRequest {
    /**
     * The binary ID
     * @type number
     * @memberof AppApideleteBinary
     */
    binary: number
}

export interface AppApiDeleteDockerRegistryRequest {
    /**
     * The docker registry ID
     * @type number
     * @memberof AppApideleteDockerRegistry
     */
    dockerRegistry: number
}

export interface AppApiDeleteServerConfigRequest {
    /**
     * The server config ID
     * @type number
     * @memberof AppApideleteServerConfig
     */
    serverConfig: number
}

export interface AppApiGetAppByIdRequest {
    /**
     * The app ID
     * @type number
     * @memberof AppApigetAppById
     */
    app: number
}

export interface AppApiGetAppLocationSettingsRequest {
    /**
     * The app ID
     * @type number
     * @memberof AppApigetAppLocationSettings
     */
    app: number
}

export interface AppApiGetAppsRequest {
}

export interface AppApiGetAuthTokenRequest {
    /**
     * 
     * @type GetAuthTokenRequest
     * @memberof AppApigetAuthToken
     */
    getAuthTokenRequest?: GetAuthTokenRequest
}

export interface AppApiGetBackupsRequest {
    /**
     * The service ID
     * @type number
     * @memberof AppApigetBackups
     */
    service: number
}

export interface AppApiGetBinariesRequest {
    /**
     * The app ID
     * @type number
     * @memberof AppApigetBinaries
     */
    app: number
}

export interface AppApiGetBinaryByIdRequest {
    /**
     * The binary ID
     * @type number
     * @memberof AppApigetBinaryById
     */
    binary: number
}

export interface AppApiGetDockerRegistriesRequest {
}

export interface AppApiGetDockerRegistryByIdRequest {
    /**
     * The docker registry ID
     * @type number
     * @memberof AppApigetDockerRegistryById
     */
    dockerRegistry: number
}

export interface AppApiGetLocationsRequest {
}

export interface AppApiGetMostRecentBackupRequest {
    /**
     * The service ID
     * @type number
     * @memberof AppApigetMostRecentBackup
     */
    service: number
}

export interface AppApiGetServerBackupDownloadUrlRequest {
    /**
     * The service ID
     * @type number
     * @memberof AppApigetServerBackupDownloadUrl
     */
    service: number
}

export interface AppApiGetServerByIdRequest {
    /**
     * The app ID
     * @type number
     * @memberof AppApigetServerById
     */
    app: number
    /**
     * The service ID
     * @type number
     * @memberof AppApigetServerById
     */
    service: number
}

export interface AppApiGetServerConfigByIdRequest {
    /**
     * The server config ID
     * @type number
     * @memberof AppApigetServerConfigById
     */
    serverConfig: number
}

export interface AppApiGetServerConfigsRequest {
    /**
     * The app ID
     * @type number
     * @memberof AppApigetServerConfigs
     */
    app: number
}

export interface AppApiGetServerLogsRequest {
    /**
     * The service ID
     * @type number
     * @memberof AppApigetServerLogs
     */
    service: number
    /**
     * details Flag
     * @type boolean
     * @memberof AppApigetServerLogs
     */
    details?: boolean
    /**
     * follow Flag
     * @type boolean
     * @memberof AppApigetServerLogs
     */
    follow?: boolean
    /**
     * stdout Flag
     * @type boolean
     * @memberof AppApigetServerLogs
     */
    stdout?: boolean
    /**
     * stderr Flag
     * @type boolean
     * @memberof AppApigetServerLogs
     */
    stderr?: boolean
    /**
     * since Flag
     * @type number
     * @memberof AppApigetServerLogs
     */
    since?: number
    /**
     * timestamps Flag
     * @type boolean
     * @memberof AppApigetServerLogs
     */
    timestamps?: boolean
    /**
     * tail options
     * @type string
     * @memberof AppApigetServerLogs
     */
    tail?: string
}

export interface AppApiGetServersRequest {
    /**
     * Instance of the app to filter services by.
     * @type number
     * @memberof AppApigetServers
     */
    app: number
}

export interface AppApiRestartServerRequest {
    /**
     * The service ID
     * @type number
     * @memberof AppApirestartServer
     */
    service: number
    /**
     * 
     * @type any
     * @memberof AppApirestartServer
     */
    body?: any
}

export interface AppApiRestoreBackupRequest {
    /**
     * The service ID
     * @type number
     * @memberof AppApirestoreBackup
     */
    service: number
    /**
     * 
     * @type any
     * @memberof AppApirestoreBackup
     */
    body?: any
}

export interface AppApiUpdateAppLocationSettingRequest {
    /**
     * The app location setting ID
     * @type number
     * @memberof AppApiupdateAppLocationSetting
     */
    appLocationSetting: number
    /**
     * 
     * @type UpdateAppLocationSettingRequest
     * @memberof AppApiupdateAppLocationSetting
     */
    updateAppLocationSettingRequest?: UpdateAppLocationSettingRequest
}

export interface AppApiUpdateBinaryRequest {
    /**
     * The binary ID
     * @type number
     * @memberof AppApiupdateBinary
     */
    binary: number
    /**
     * 
     * @type CreateBinaryRequest
     * @memberof AppApiupdateBinary
     */
    createBinaryRequest?: CreateBinaryRequest
}

export interface AppApiUpdateDockerRegistryRequest {
    /**
     * The docker registry ID
     * @type number
     * @memberof AppApiupdateDockerRegistry
     */
    dockerRegistry: number
    /**
     * 
     * @type UpdateDockerRegistryRequest
     * @memberof AppApiupdateDockerRegistry
     */
    updateDockerRegistryRequest?: UpdateDockerRegistryRequest
}

export interface AppApiUpdateServerConfigRequest {
    /**
     * The server config ID
     * @type number
     * @memberof AppApiupdateServerConfig
     */
    serverConfig: number
    /**
     * 
     * @type CreateServerConfigRequest
     * @memberof AppApiupdateServerConfig
     */
    createServerConfigRequest?: CreateServerConfigRequest
}

export class ObjectAppApi {
    private api: ObservableAppApi

    public constructor(configuration: Configuration, requestFactory?: AppApiRequestFactory, responseProcessor?: AppApiResponseProcessor) {
        this.api = new ObservableAppApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an app
     * @param param the request object
     */
    public createAppWithHttpInfo(param: AppApiCreateAppRequest = {}, options?: Configuration): Promise<HttpInfo<App>> {
        return this.api.createAppWithHttpInfo(param.createAppRequest,  options).toPromise();
    }

    /**
     * Create an app
     * @param param the request object
     */
    public createApp(param: AppApiCreateAppRequest = {}, options?: Configuration): Promise<App> {
        return this.api.createApp(param.createAppRequest,  options).toPromise();
    }

    /**
     * Create a new location setting
     * @param param the request object
     */
    public createAppLocationSettingWithHttpInfo(param: AppApiCreateAppLocationSettingRequest, options?: Configuration): Promise<HttpInfo<AppLocationSetting>> {
        return this.api.createAppLocationSettingWithHttpInfo(param.app, param.createAppLocationSettingRequest,  options).toPromise();
    }

    /**
     * Create a new location setting
     * @param param the request object
     */
    public createAppLocationSetting(param: AppApiCreateAppLocationSettingRequest, options?: Configuration): Promise<AppLocationSetting> {
        return this.api.createAppLocationSetting(param.app, param.createAppLocationSettingRequest,  options).toPromise();
    }

    /**
     * Creates a backup of the service
     * @param param the request object
     */
    public createBackupWithHttpInfo(param: AppApiCreateBackupRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.createBackupWithHttpInfo(param.service, param.createBackupRequest,  options).toPromise();
    }

    /**
     * Creates a backup of the service
     * @param param the request object
     */
    public createBackup(param: AppApiCreateBackupRequest, options?: Configuration): Promise<any> {
        return this.api.createBackup(param.service, param.createBackupRequest,  options).toPromise();
    }

    /**
     * Create a binary and the related file
     * @param param the request object
     */
    public createBinaryWithHttpInfo(param: AppApiCreateBinaryRequest, options?: Configuration): Promise<HttpInfo<Binary>> {
        return this.api.createBinaryWithHttpInfo(param.app, param.createBinaryRequest,  options).toPromise();
    }

    /**
     * Create a binary and the related file
     * @param param the request object
     */
    public createBinary(param: AppApiCreateBinaryRequest, options?: Configuration): Promise<Binary> {
        return this.api.createBinary(param.app, param.createBinaryRequest,  options).toPromise();
    }

    /**
     * Create a new docker registry
     * @param param the request object
     */
    public createDockerRegistryWithHttpInfo(param: AppApiCreateDockerRegistryRequest = {}, options?: Configuration): Promise<HttpInfo<DockerRegistry>> {
        return this.api.createDockerRegistryWithHttpInfo(param.createDockerRegistryRequest,  options).toPromise();
    }

    /**
     * Create a new docker registry
     * @param param the request object
     */
    public createDockerRegistry(param: AppApiCreateDockerRegistryRequest = {}, options?: Configuration): Promise<DockerRegistry> {
        return this.api.createDockerRegistry(param.createDockerRegistryRequest,  options).toPromise();
    }

    /**
     * Create a new server config
     * @param param the request object
     */
    public createServerConfigWithHttpInfo(param: AppApiCreateServerConfigRequest, options?: Configuration): Promise<HttpInfo<ServerConfig>> {
        return this.api.createServerConfigWithHttpInfo(param.app, param.createServerConfigRequest,  options).toPromise();
    }

    /**
     * Create a new server config
     * @param param the request object
     */
    public createServerConfig(param: AppApiCreateServerConfigRequest, options?: Configuration): Promise<ServerConfig> {
        return this.api.createServerConfig(param.app, param.createServerConfigRequest,  options).toPromise();
    }

    /**
     * This method is responsible for deleting an App record from the database. It locates the App instance using the provided ID, and if found, proceeds to delete it. Upon successful deletion, an HTTP 204 No Content response is returned, indicating that the action was successful.
     * Delete a specific app
     * @param param the request object
     */
    public deleteAppWithHttpInfo(param: AppApiDeleteAppRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteAppWithHttpInfo(param.app,  options).toPromise();
    }

    /**
     * This method is responsible for deleting an App record from the database. It locates the App instance using the provided ID, and if found, proceeds to delete it. Upon successful deletion, an HTTP 204 No Content response is returned, indicating that the action was successful.
     * Delete a specific app
     * @param param the request object
     */
    public deleteApp(param: AppApiDeleteAppRequest, options?: Configuration): Promise<any> {
        return this.api.deleteApp(param.app,  options).toPromise();
    }

    /**
     * Delete a location setting
     * @param param the request object
     */
    public deleteAppLocationSettingWithHttpInfo(param: AppApiDeleteAppLocationSettingRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteAppLocationSettingWithHttpInfo(param.appLocationSetting,  options).toPromise();
    }

    /**
     * Delete a location setting
     * @param param the request object
     */
    public deleteAppLocationSetting(param: AppApiDeleteAppLocationSettingRequest, options?: Configuration): Promise<any> {
        return this.api.deleteAppLocationSetting(param.appLocationSetting,  options).toPromise();
    }

    /**
     * Handles the deletion of a user\'s authentication tokens
     * @param param the request object
     */
    public deleteAuthTokenWithHttpInfo(param: AppApiDeleteAuthTokenRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteAuthTokenWithHttpInfo(param.sid,  options).toPromise();
    }

    /**
     * Handles the deletion of a user\'s authentication tokens
     * @param param the request object
     */
    public deleteAuthToken(param: AppApiDeleteAuthTokenRequest, options?: Configuration): Promise<any> {
        return this.api.deleteAuthToken(param.sid,  options).toPromise();
    }

    /**
     * It first finds the Binary instance by its ID. If the instance is found, it is deleted. The method then returns an HTTP 204 No Content response to indicate successful deletion.
     * Delete a specified binary
     * @param param the request object
     */
    public deleteBinaryWithHttpInfo(param: AppApiDeleteBinaryRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteBinaryWithHttpInfo(param.binary,  options).toPromise();
    }

    /**
     * It first finds the Binary instance by its ID. If the instance is found, it is deleted. The method then returns an HTTP 204 No Content response to indicate successful deletion.
     * Delete a specified binary
     * @param param the request object
     */
    public deleteBinary(param: AppApiDeleteBinaryRequest, options?: Configuration): Promise<any> {
        return this.api.deleteBinary(param.binary,  options).toPromise();
    }

    /**
     * Delete a specific docker registry
     * @param param the request object
     */
    public deleteDockerRegistryWithHttpInfo(param: AppApiDeleteDockerRegistryRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteDockerRegistryWithHttpInfo(param.dockerRegistry,  options).toPromise();
    }

    /**
     * Delete a specific docker registry
     * @param param the request object
     */
    public deleteDockerRegistry(param: AppApiDeleteDockerRegistryRequest, options?: Configuration): Promise<any> {
        return this.api.deleteDockerRegistry(param.dockerRegistry,  options).toPromise();
    }

    /**
     * This method handles the deletion of a ServerConfig record from the database. It first finds the ServerConfig instance by its ID, and if found, deletes it. Returns an HTTP 204 No Content response upon successful deletion.
     * Delete a specific server config
     * @param param the request object
     */
    public deleteServerConfigWithHttpInfo(param: AppApiDeleteServerConfigRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteServerConfigWithHttpInfo(param.serverConfig,  options).toPromise();
    }

    /**
     * This method handles the deletion of a ServerConfig record from the database. It first finds the ServerConfig instance by its ID, and if found, deletes it. Returns an HTTP 204 No Content response upon successful deletion.
     * Delete a specific server config
     * @param param the request object
     */
    public deleteServerConfig(param: AppApiDeleteServerConfigRequest, options?: Configuration): Promise<any> {
        return this.api.deleteServerConfig(param.serverConfig,  options).toPromise();
    }

    /**
     * Show a specific app
     * @param param the request object
     */
    public getAppByIdWithHttpInfo(param: AppApiGetAppByIdRequest, options?: Configuration): Promise<HttpInfo<App>> {
        return this.api.getAppByIdWithHttpInfo(param.app,  options).toPromise();
    }

    /**
     * Show a specific app
     * @param param the request object
     */
    public getAppById(param: AppApiGetAppByIdRequest, options?: Configuration): Promise<App> {
        return this.api.getAppById(param.app,  options).toPromise();
    }

    /**
     * Show all location settings
     * @param param the request object
     */
    public getAppLocationSettingsWithHttpInfo(param: AppApiGetAppLocationSettingsRequest, options?: Configuration): Promise<HttpInfo<Array<AppLocationSetting>>> {
        return this.api.getAppLocationSettingsWithHttpInfo(param.app,  options).toPromise();
    }

    /**
     * Show all location settings
     * @param param the request object
     */
    public getAppLocationSettings(param: AppApiGetAppLocationSettingsRequest, options?: Configuration): Promise<Array<AppLocationSetting>> {
        return this.api.getAppLocationSettings(param.app,  options).toPromise();
    }

    /**
     * Show all apps
     * @param param the request object
     */
    public getAppsWithHttpInfo(param: AppApiGetAppsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<App>>> {
        return this.api.getAppsWithHttpInfo( options).toPromise();
    }

    /**
     * Show all apps
     * @param param the request object
     */
    public getApps(param: AppApiGetAppsRequest = {}, options?: Configuration): Promise<Array<App>> {
        return this.api.getApps( options).toPromise();
    }

    /**
     * Validates the incoming request and attempts to authenticate the user based on the provided session ID. If the user is authenticated successfully, it returns an AuthResource containing the user\'s bearer token.
     * Handles user authentication
     * @param param the request object
     */
    public getAuthTokenWithHttpInfo(param: AppApiGetAuthTokenRequest = {}, options?: Configuration): Promise<HttpInfo<Auth>> {
        return this.api.getAuthTokenWithHttpInfo(param.getAuthTokenRequest,  options).toPromise();
    }

    /**
     * Validates the incoming request and attempts to authenticate the user based on the provided session ID. If the user is authenticated successfully, it returns an AuthResource containing the user\'s bearer token.
     * Handles user authentication
     * @param param the request object
     */
    public getAuthToken(param: AppApiGetAuthTokenRequest = {}, options?: Configuration): Promise<Auth> {
        return this.api.getAuthToken(param.getAuthTokenRequest,  options).toPromise();
    }

    /**
     * List all backups for the specified Docker service
     * @param param the request object
     */
    public getBackupsWithHttpInfo(param: AppApiGetBackupsRequest, options?: Configuration): Promise<HttpInfo<Array<Backup>>> {
        return this.api.getBackupsWithHttpInfo(param.service,  options).toPromise();
    }

    /**
     * List all backups for the specified Docker service
     * @param param the request object
     */
    public getBackups(param: AppApiGetBackupsRequest, options?: Configuration): Promise<Array<Backup>> {
        return this.api.getBackups(param.service,  options).toPromise();
    }

    /**
     * Eager load file types and config templates to reduce the number of queries.
     * Show all binaries
     * @param param the request object
     */
    public getBinariesWithHttpInfo(param: AppApiGetBinariesRequest, options?: Configuration): Promise<HttpInfo<Array<Binary>>> {
        return this.api.getBinariesWithHttpInfo(param.app,  options).toPromise();
    }

    /**
     * Eager load file types and config templates to reduce the number of queries.
     * Show all binaries
     * @param param the request object
     */
    public getBinaries(param: AppApiGetBinariesRequest, options?: Configuration): Promise<Array<Binary>> {
        return this.api.getBinaries(param.app,  options).toPromise();
    }

    /**
     * Show a specific binary
     * @param param the request object
     */
    public getBinaryByIdWithHttpInfo(param: AppApiGetBinaryByIdRequest, options?: Configuration): Promise<HttpInfo<Binary>> {
        return this.api.getBinaryByIdWithHttpInfo(param.binary,  options).toPromise();
    }

    /**
     * Show a specific binary
     * @param param the request object
     */
    public getBinaryById(param: AppApiGetBinaryByIdRequest, options?: Configuration): Promise<Binary> {
        return this.api.getBinaryById(param.binary,  options).toPromise();
    }

    /**
     * Show all docker registries
     * @param param the request object
     */
    public getDockerRegistriesWithHttpInfo(param: AppApiGetDockerRegistriesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<DockerRegistry>>> {
        return this.api.getDockerRegistriesWithHttpInfo( options).toPromise();
    }

    /**
     * Show all docker registries
     * @param param the request object
     */
    public getDockerRegistries(param: AppApiGetDockerRegistriesRequest = {}, options?: Configuration): Promise<Array<DockerRegistry>> {
        return this.api.getDockerRegistries( options).toPromise();
    }

    /**
     * Display a specific docker registry
     * @param param the request object
     */
    public getDockerRegistryByIdWithHttpInfo(param: AppApiGetDockerRegistryByIdRequest, options?: Configuration): Promise<HttpInfo<DockerRegistry>> {
        return this.api.getDockerRegistryByIdWithHttpInfo(param.dockerRegistry,  options).toPromise();
    }

    /**
     * Display a specific docker registry
     * @param param the request object
     */
    public getDockerRegistryById(param: AppApiGetDockerRegistryByIdRequest, options?: Configuration): Promise<DockerRegistry> {
        return this.api.getDockerRegistryById(param.dockerRegistry,  options).toPromise();
    }

    /**
     * Synchronizes the local database with the state of Docker nodes, then filters for active, ready worker nodes to create a unique listing of their location labels. These nodes are suitable for deployment.
     * Show a unique listing of locations based on active and ready worker nodes
     * @param param the request object
     */
    public getLocationsWithHttpInfo(param: AppApiGetLocationsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Location>>> {
        return this.api.getLocationsWithHttpInfo( options).toPromise();
    }

    /**
     * Synchronizes the local database with the state of Docker nodes, then filters for active, ready worker nodes to create a unique listing of their location labels. These nodes are suitable for deployment.
     * Show a unique listing of locations based on active and ready worker nodes
     * @param param the request object
     */
    public getLocations(param: AppApiGetLocationsRequest = {}, options?: Configuration): Promise<Array<Location>> {
        return this.api.getLocations( options).toPromise();
    }

    /**
     * Display the most recent backup for the specified Docker service
     * @param param the request object
     */
    public getMostRecentBackupWithHttpInfo(param: AppApiGetMostRecentBackupRequest, options?: Configuration): Promise<HttpInfo<Backup>> {
        return this.api.getMostRecentBackupWithHttpInfo(param.service,  options).toPromise();
    }

    /**
     * Display the most recent backup for the specified Docker service
     * @param param the request object
     */
    public getMostRecentBackup(param: AppApiGetMostRecentBackupRequest, options?: Configuration): Promise<Backup> {
        return this.api.getMostRecentBackup(param.service,  options).toPromise();
    }

    /**
     * Generates a presigned URL for downloading a backup from AWS S3 if the backup method is \'archive\'
     * @param param the request object
     */
    public getServerBackupDownloadUrlWithHttpInfo(param: AppApiGetServerBackupDownloadUrlRequest, options?: Configuration): Promise<HttpInfo<BackupDownload>> {
        return this.api.getServerBackupDownloadUrlWithHttpInfo(param.service,  options).toPromise();
    }

    /**
     * Generates a presigned URL for downloading a backup from AWS S3 if the backup method is \'archive\'
     * @param param the request object
     */
    public getServerBackupDownloadUrl(param: AppApiGetServerBackupDownloadUrlRequest, options?: Configuration): Promise<BackupDownload> {
        return this.api.getServerBackupDownloadUrl(param.service,  options).toPromise();
    }

    /**
     * Display a specific DockerService associated with the given App
     * @param param the request object
     */
    public getServerByIdWithHttpInfo(param: AppApiGetServerByIdRequest, options?: Configuration): Promise<HttpInfo<Server>> {
        return this.api.getServerByIdWithHttpInfo(param.app, param.service,  options).toPromise();
    }

    /**
     * Display a specific DockerService associated with the given App
     * @param param the request object
     */
    public getServerById(param: AppApiGetServerByIdRequest, options?: Configuration): Promise<Server> {
        return this.api.getServerById(param.app, param.service,  options).toPromise();
    }

    /**
     * Show a specific server config
     * @param param the request object
     */
    public getServerConfigByIdWithHttpInfo(param: AppApiGetServerConfigByIdRequest, options?: Configuration): Promise<HttpInfo<ServerConfig>> {
        return this.api.getServerConfigByIdWithHttpInfo(param.serverConfig,  options).toPromise();
    }

    /**
     * Show a specific server config
     * @param param the request object
     */
    public getServerConfigById(param: AppApiGetServerConfigByIdRequest, options?: Configuration): Promise<ServerConfig> {
        return this.api.getServerConfigById(param.serverConfig,  options).toPromise();
    }

    /**
     * Show all server configs
     * @param param the request object
     */
    public getServerConfigsWithHttpInfo(param: AppApiGetServerConfigsRequest, options?: Configuration): Promise<HttpInfo<Array<ServerConfig>>> {
        return this.api.getServerConfigsWithHttpInfo(param.app,  options).toPromise();
    }

    /**
     * Show all server configs
     * @param param the request object
     */
    public getServerConfigs(param: AppApiGetServerConfigsRequest, options?: Configuration): Promise<Array<ServerConfig>> {
        return this.api.getServerConfigs(param.app,  options).toPromise();
    }

    /**
     * Get stdout and stderr logs from a service or task
     * @param param the request object
     */
    public getServerLogsWithHttpInfo(param: AppApiGetServerLogsRequest, options?: Configuration): Promise<HttpInfo<ServiceLogs>> {
        return this.api.getServerLogsWithHttpInfo(param.service, param.details, param.follow, param.stdout, param.stderr, param.since, param.timestamps, param.tail,  options).toPromise();
    }

    /**
     * Get stdout and stderr logs from a service or task
     * @param param the request object
     */
    public getServerLogs(param: AppApiGetServerLogsRequest, options?: Configuration): Promise<ServiceLogs> {
        return this.api.getServerLogs(param.service, param.details, param.follow, param.stdout, param.stderr, param.since, param.timestamps, param.tail,  options).toPromise();
    }

    /**
     * Show all services for a given app
     * @param param the request object
     */
    public getServersWithHttpInfo(param: AppApiGetServersRequest, options?: Configuration): Promise<HttpInfo<Array<Server>>> {
        return this.api.getServersWithHttpInfo(param.app,  options).toPromise();
    }

    /**
     * Show all services for a given app
     * @param param the request object
     */
    public getServers(param: AppApiGetServersRequest, options?: Configuration): Promise<Array<Server>> {
        return this.api.getServers(param.app,  options).toPromise();
    }

    /**
     * Restarts a specific Docker service
     * @param param the request object
     */
    public restartServerWithHttpInfo(param: AppApiRestartServerRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.restartServerWithHttpInfo(param.service, param.body,  options).toPromise();
    }

    /**
     * Restarts a specific Docker service
     * @param param the request object
     */
    public restartServer(param: AppApiRestartServerRequest, options?: Configuration): Promise<any> {
        return this.api.restartServer(param.service, param.body,  options).toPromise();
    }

    /**
     * Restore a backup for a specified Docker service
     * @param param the request object
     */
    public restoreBackupWithHttpInfo(param: AppApiRestoreBackupRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.restoreBackupWithHttpInfo(param.service, param.body,  options).toPromise();
    }

    /**
     * Restore a backup for a specified Docker service
     * @param param the request object
     */
    public restoreBackup(param: AppApiRestoreBackupRequest, options?: Configuration): Promise<any> {
        return this.api.restoreBackup(param.service, param.body,  options).toPromise();
    }

    /**
     * Update a location setting
     * @param param the request object
     */
    public updateAppLocationSettingWithHttpInfo(param: AppApiUpdateAppLocationSettingRequest, options?: Configuration): Promise<HttpInfo<AppLocationSetting>> {
        return this.api.updateAppLocationSettingWithHttpInfo(param.appLocationSetting, param.updateAppLocationSettingRequest,  options).toPromise();
    }

    /**
     * Update a location setting
     * @param param the request object
     */
    public updateAppLocationSetting(param: AppApiUpdateAppLocationSettingRequest, options?: Configuration): Promise<AppLocationSetting> {
        return this.api.updateAppLocationSetting(param.appLocationSetting, param.updateAppLocationSettingRequest,  options).toPromise();
    }

    /**
     * Update a binary and the related file
     * @param param the request object
     */
    public updateBinaryWithHttpInfo(param: AppApiUpdateBinaryRequest, options?: Configuration): Promise<HttpInfo<Binary>> {
        return this.api.updateBinaryWithHttpInfo(param.binary, param.createBinaryRequest,  options).toPromise();
    }

    /**
     * Update a binary and the related file
     * @param param the request object
     */
    public updateBinary(param: AppApiUpdateBinaryRequest, options?: Configuration): Promise<Binary> {
        return this.api.updateBinary(param.binary, param.createBinaryRequest,  options).toPromise();
    }

    /**
     * Update a specific docker registry
     * @param param the request object
     */
    public updateDockerRegistryWithHttpInfo(param: AppApiUpdateDockerRegistryRequest, options?: Configuration): Promise<HttpInfo<DockerRegistry>> {
        return this.api.updateDockerRegistryWithHttpInfo(param.dockerRegistry, param.updateDockerRegistryRequest,  options).toPromise();
    }

    /**
     * Update a specific docker registry
     * @param param the request object
     */
    public updateDockerRegistry(param: AppApiUpdateDockerRegistryRequest, options?: Configuration): Promise<DockerRegistry> {
        return this.api.updateDockerRegistry(param.dockerRegistry, param.updateDockerRegistryRequest,  options).toPromise();
    }

    /**
     * Update a server config
     * @param param the request object
     */
    public updateServerConfigWithHttpInfo(param: AppApiUpdateServerConfigRequest, options?: Configuration): Promise<HttpInfo<ServerConfig>> {
        return this.api.updateServerConfigWithHttpInfo(param.serverConfig, param.createServerConfigRequest,  options).toPromise();
    }

    /**
     * Update a server config
     * @param param the request object
     */
    public updateServerConfig(param: AppApiUpdateServerConfigRequest, options?: Configuration): Promise<ServerConfig> {
        return this.api.updateServerConfig(param.serverConfig, param.createServerConfigRequest,  options).toPromise();
    }

}
