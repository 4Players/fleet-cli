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

import { ObservableAppApi } from "./ObservableAPI.ts";
import { AppApiRequestFactory, AppApiResponseProcessor} from "../apis/AppApi.ts";

export interface AppApiCreateAppRequest {
    /**
     * 
     * @type StoreAppRequest
     * @memberof AppApicreateApp
     */
    storeAppRequest: StoreAppRequest
}

export interface AppApiCreateAppLocationSettingRequest {
    /**
     * The app ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApicreateAppLocationSetting
     */
    app: number
    /**
     * 
     * @type StoreAppLocationSettingRequest
     * @memberof AppApicreateAppLocationSetting
     */
    storeAppLocationSettingRequest: StoreAppLocationSettingRequest
}

export interface AppApiCreateBackupRequest {
    /**
     * The docker service ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApicreateBackup
     */
    dockerService: number
    /**
     * 
     * @type CreateBackupDockerServiceRequest
     * @memberof AppApicreateBackup
     */
    createBackupDockerServiceRequest: CreateBackupDockerServiceRequest
}

export interface AppApiCreateBinaryRequest {
    /**
     * The app ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApicreateBinary
     */
    app: number
    /**
     * 
     * @type StoreBinaryRequest
     * @memberof AppApicreateBinary
     */
    storeBinaryRequest: StoreBinaryRequest
}

export interface AppApiCreateDockerRegistryRequest {
    /**
     * 
     * @type StoreDockerRegistryRequest
     * @memberof AppApicreateDockerRegistry
     */
    storeDockerRegistryRequest: StoreDockerRegistryRequest
}

export interface AppApiCreateServerConfigRequest {
    /**
     * The app ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApicreateServerConfig
     */
    app: number
    /**
     * 
     * @type StoreServerConfigRequest
     * @memberof AppApicreateServerConfig
     */
    storeServerConfigRequest: StoreServerConfigRequest
}

export interface AppApiDeleteAppRequest {
    /**
     * The app ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApideleteApp
     */
    app: number
}

export interface AppApiDeleteAppLocationSettingRequest {
    /**
     * The app location setting ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApideleteAppLocationSetting
     */
    appLocationSetting: number
}

export interface AppApiDeleteBinaryRequest {
    /**
     * The binary ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApideleteBinary
     */
    binary: number
}

export interface AppApiDeleteDockerRegistryRequest {
    /**
     * The docker registry ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApideleteDockerRegistry
     */
    dockerRegistry: number
}

export interface AppApiDeleteServerConfigRequest {
    /**
     * The server config ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApideleteServerConfig
     */
    serverConfig: number
}

export interface AppApiDockerServicesMetadataDeleteAllRequest {
    /**
     * The docker service ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApidockerServicesMetadataDeleteAll
     */
    dockerService: number
}

export interface AppApiDockerServicesMetadataDeleteKeysRequest {
    /**
     * The docker service ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApidockerServicesMetadataDeleteKeys
     */
    dockerService: number
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AppApidockerServicesMetadataDeleteKeys
     */
    metadata: Array<string>
}

export interface AppApiDockerServicesMetadataSetRequest {
    /**
     * The docker service ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApidockerServicesMetadataSet
     */
    dockerService: number
    /**
     * 
     * @type SetMetadataRequest
     * @memberof AppApidockerServicesMetadataSet
     */
    setMetadataRequest?: SetMetadataRequest
}

export interface AppApiDockerServicesMetadataUpdateRequest {
    /**
     * The docker service ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApidockerServicesMetadataUpdate
     */
    dockerService: number
    /**
     * 
     * @type PatchMetadataRequest
     * @memberof AppApidockerServicesMetadataUpdate
     */
    patchMetadataRequest?: PatchMetadataRequest
}

export interface AppApiGetAppByIdRequest {
    /**
     * The app ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetAppById
     */
    app: number
}

export interface AppApiGetAppLocationSettingByIdRequest {
    /**
     * The app location setting ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetAppLocationSettingById
     */
    appLocationSetting: number
}

export interface AppApiGetAppLocationSettingsRequest {
    /**
     * The app ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetAppLocationSettings
     */
    app: number
    /**
     * The number of items to be shown per page.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetAppLocationSettings
     */
    perPage?: number
    /**
     * Specifies the page number to retrieve in the paginated results.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetAppLocationSettings
     */
    page?: number
    /**
     * Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60;
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AppApigetAppLocationSettings
     */
    sort?: Array<string>
    /**
     * Filter by id.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetAppLocationSettings
     */
    filterId?: number
    /**
     * Filter by name.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetAppLocationSettings
     */
    filterName?: string
    /**
     * Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetAppLocationSettings
     */
    filterNamePartial?: string
    /**
     * Filter by ServerConfig ID.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetAppLocationSettings
     */
    filterServerConfigId?: number
    /**
     * Filter by number of instances.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetAppLocationSettings
     */
    filterNumInstances?: number
    /**
     * Filter by status.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetAppLocationSettings
     */
    filterStatus?: string
    /**
     * Filter by maintenance.
     * Defaults to: undefined
     * @type boolean
     * @memberof AppApigetAppLocationSettings
     */
    filterMaintenance?: boolean
    /**
     * Filter by location city.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetAppLocationSettings
     */
    filterLocationCity?: string
    /**
     * Filter by location city display name.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetAppLocationSettings
     */
    filterLocationCityDisplay?: string
    /**
     * Filter by location continent.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetAppLocationSettings
     */
    filterLocationContinent?: string
    /**
     * Filter by location country.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetAppLocationSettings
     */
    filterLocationCountry?: string
    /**
     * Filter by ServerConfig name.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetAppLocationSettings
     */
    filterServerConfigName?: string
    /**
     * Filter by ServerConfig command.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetAppLocationSettings
     */
    filterServerConfigCommand?: string
    /**
     * Filter by ServerConfig arguments.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetAppLocationSettings
     */
    filterServerConfigArgs?: string
    /**
     * Filter by ServerConfig notes.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetAppLocationSettings
     */
    filterServerConfigNotes?: string
    /**
     * Filter by ServerConfig status.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetAppLocationSettings
     */
    filterServerConfigStatus?: string
    /**
     * Filter by ServerConfig maintenance.
     * Defaults to: undefined
     * @type boolean
     * @memberof AppApigetAppLocationSettings
     */
    filterServerConfigMaintenance?: boolean
    /**
     * Filter by ServerConfig resource package slug.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetAppLocationSettings
     */
    filterServerConfigResourcePackageSlug?: string
}

export interface AppApiGetAppsRequest {
    /**
     * The number of items to be shown per page.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetApps
     */
    perPage?: number
    /**
     * Specifies the page number to retrieve in the paginated results.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetApps
     */
    page?: number
    /**
     * Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60;
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AppApigetApps
     */
    sort?: Array<string>
    /**
     * Filter by id.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetApps
     */
    filterId?: number
    /**
     * Filter by name.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetApps
     */
    filterName?: string
    /**
     * Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetApps
     */
    filterNamePartial?: string
    /**
     * Filter by in use flag.
     * Defaults to: undefined
     * @type boolean
     * @memberof AppApigetApps
     */
    filterInUse?: boolean
}

export interface AppApiGetAuthTokenRequest {
    /**
     * 
     * @type AuthRequest
     * @memberof AppApigetAuthToken
     */
    authRequest: AuthRequest
}

export interface AppApiGetBackupsRequest {
    /**
     * The docker service ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetBackups
     */
    dockerService: number
    /**
     * The number of items to be shown per page.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetBackups
     */
    perPage?: number
    /**
     * Specifies the page number to retrieve in the paginated results.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetBackups
     */
    page?: number
    /**
     * Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** For example, to sort by name in ascending order or by archiveName in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;name sort[]&#x3D;-archiveName &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;name&amp;sort[]&#x3D;-archiveName &#x60;&#x60;&#x60;
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AppApigetBackups
     */
    sort?: Array<string>
    /**
     * Filter by name.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetBackups
     */
    filterName?: string
    /**
     * Filter by archive name.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetBackups
     */
    filterArchiveName?: string
}

export interface AppApiGetBinariesRequest {
    /**
     * The app ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetBinaries
     */
    app: number
    /**
     * The number of items to be shown per page.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetBinaries
     */
    perPage?: number
    /**
     * Specifies the page number to retrieve in the paginated results.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetBinaries
     */
    page?: number
    /**
     * Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60;
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AppApigetBinaries
     */
    sort?: Array<string>
    /**
     * Filter by name.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetBinaries
     */
    filterName?: string
    /**
     * Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetBinaries
     */
    filterNamePartial?: string
    /**
     * Filter by version.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetBinaries
     */
    filterVersion?: string
    /**
     * Filter by type.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetBinaries
     */
    filterType?: string
    /**
     * Filter by operating system.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetBinaries
     */
    filterOs?: string
    /**
     * Filter by maintenance status.
     * Defaults to: undefined
     * @type boolean
     * @memberof AppApigetBinaries
     */
    filterMaintenance?: boolean
    /**
     * Filter by status.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetBinaries
     */
    filterStatus?: string
    /**
     * Filter by in use flag.
     * Defaults to: undefined
     * @type boolean
     * @memberof AppApigetBinaries
     */
    filterInUse?: boolean
}

export interface AppApiGetBinaryByIdRequest {
    /**
     * The binary ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetBinaryById
     */
    binary: number
}

export interface AppApiGetDockerRegistriesRequest {
    /**
     * The number of items to be shown per page.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetDockerRegistries
     */
    perPage?: number
    /**
     * Specifies the page number to retrieve in the paginated results.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetDockerRegistries
     */
    page?: number
    /**
     * Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60;
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AppApigetDockerRegistries
     */
    sort?: Array<string>
    /**
     * Filter by id.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetDockerRegistries
     */
    filterId?: number
    /**
     * Filter by type.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetDockerRegistries
     */
    filterType?: string
    /**
     * Filter by name.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetDockerRegistries
     */
    filterName?: string
    /**
     * Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetDockerRegistries
     */
    filterNamePartial?: string
    /**
     * Filter by url.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetDockerRegistries
     */
    filterUrl?: string
    /**
     * Filter by organization.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetDockerRegistries
     */
    filterOrganization?: string
}

export interface AppApiGetDockerRegistryByIdRequest {
    /**
     * The docker registry ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetDockerRegistryById
     */
    dockerRegistry: number
}

export interface AppApiGetLatestBackupRequest {
    /**
     * The docker service ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetLatestBackup
     */
    dockerService: number
}

export interface AppApiGetLocationsRequest {
    /**
     * The number of items to be shown per page.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetLocations
     */
    perPage?: number
    /**
     * Specifies the page number to retrieve in the paginated results.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetLocations
     */
    page?: number
}

export interface AppApiGetResourcePackageByIdRequest {
    /**
     * The resource package ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetResourcePackageById
     */
    resourcePackage: number
}

export interface AppApiGetResourcePackagesRequest {
    /**
     * The number of items to be shown per page.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetResourcePackages
     */
    perPage?: number
    /**
     * Specifies the page number to retrieve in the paginated results.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetResourcePackages
     */
    page?: number
    /**
     * Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60;
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AppApigetResourcePackages
     */
    sort?: Array<string>
    /**
     * Filter by id.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetResourcePackages
     */
    filterId?: number
    /**
     * Filter by name.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetResourcePackages
     */
    filterName?: string
    /**
     * Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetResourcePackages
     */
    filterNamePartial?: string
    /**
     * Filter by slug.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetResourcePackages
     */
    filterSlug?: string
    /**
     * Filter by type.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetResourcePackages
     */
    filterType?: string
    /**
     * Filter by CPU limit. Maps to the &#x60;cpu_limit&#x60; column.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetResourcePackages
     */
    filterCpuLimit?: number
    /**
     * Filter by CPU reservation. Maps to the &#x60;cpu_reservation&#x60; column.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetResourcePackages
     */
    filterCpuReservation?: number
    /**
     * Filter by memory limit in MiB. Maps to the &#x60;memory_limit_mebibytes&#x60; column.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetResourcePackages
     */
    filterMemoryLimitMiB?: number
    /**
     * Filter by memory reservation in MiB. Maps to the &#x60;memory_reservation_mebibytes&#x60; column.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetResourcePackages
     */
    filterMemoryReservationMiB?: number
}

export interface AppApiGetServerBackupDownloadUrlRequest {
    /**
     * The docker service ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetServerBackupDownloadUrl
     */
    dockerService: number
}

export interface AppApiGetServerByIdRequest {
    /**
     * The app ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetServerById
     */
    app: number
    /**
     * The docker service ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetServerById
     */
    dockerService: number
}

export interface AppApiGetServerConfigByIdRequest {
    /**
     * The server config ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetServerConfigById
     */
    serverConfig: number
}

export interface AppApiGetServerConfigsRequest {
    /**
     * The app ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetServerConfigs
     */
    app: number
    /**
     * The number of items to be shown per page.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetServerConfigs
     */
    perPage?: number
    /**
     * Specifies the page number to retrieve in the paginated results.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetServerConfigs
     */
    page?: number
    /**
     * Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60;
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AppApigetServerConfigs
     */
    sort?: Array<string>
    /**
     * Filter by id.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetServerConfigs
     */
    filterId?: number
    /**
     * Filter by binary id.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetServerConfigs
     */
    filterBinaryId?: number
    /**
     * Filter by name.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetServerConfigs
     */
    filterName?: string
    /**
     * Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetServerConfigs
     */
    filterNamePartial?: string
    /**
     * Filter by command.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetServerConfigs
     */
    filterCommand?: string
    /**
     * Filter by arguments.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetServerConfigs
     */
    filterArgs?: string
    /**
     * Filter by notes.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetServerConfigs
     */
    filterNotes?: string
    /**
     * Filter by status.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetServerConfigs
     */
    filterStatus?: string
    /**
     * Filter by maintenance status.
     * Defaults to: undefined
     * @type boolean
     * @memberof AppApigetServerConfigs
     */
    filterMaintenance?: boolean
    /**
     * Filter by resource package slug.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetServerConfigs
     */
    filterResourcePackageSlug?: string
    /**
     * Filter by in use flag.
     * Defaults to: undefined
     * @type boolean
     * @memberof AppApigetServerConfigs
     */
    filterInUse?: boolean
    /**
     * Filter by binary name.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetServerConfigs
     */
    filterBinaryName?: string
    /**
     * Filter by binary version.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetServerConfigs
     */
    filterBinaryVersion?: string
    /**
     * Filter by binary type.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetServerConfigs
     */
    filterBinaryType?: string
    /**
     * Filter by binary operating system.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetServerConfigs
     */
    filterBinaryOs?: string
}

export interface AppApiGetServerLogsRequest {
    /**
     * The docker service ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetServerLogs
     */
    dockerService: number
    /**
     * A duration used to calculate start relative to end. If end is in the future, start is calculated as this duration before now. Any value specified for start supersedes this parameter. Default: 7d
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetServerLogs
     */
    since?: string
    /**
     * The max number of entries to return. Default: 100
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetServerLogs
     */
    limit?: number
    /**
     * Determines the sort order of logs. Supported values are forward or backward. Default: forward
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetServerLogs
     */
    direction?: string
    /**
     * Only return logs filtered by stream source like stdout or stderr. Default: null
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetServerLogs
     */
    streamSource?: string
}

export interface AppApiGetServersRequest {
    /**
     * The app ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetServers
     */
    app: number
    /**
     * The number of items to be shown per page.
     * Minimum: 1
     * Maximum: 100
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetServers
     */
    perPage?: number
    /**
     * Specifies the page number to retrieve in the paginated results.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetServers
     */
    page?: number
    /**
     * Filter by status.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetServers
     */
    filterStatus?: string
    /**
     * Filter by AppLocationSetting ID.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetServers
     */
    filterAppLocationSettingId?: number
    /**
     * Filter by ServerConfig ID.
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetServers
     */
    filterServerConfigId?: number
    /**
     * Filter by location city.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetServers
     */
    filterLocationCity?: string
    /**
     * Filter by location city display name.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetServers
     */
    filterLocationCityDisplay?: string
    /**
     * Filter by location continent.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetServers
     */
    filterLocationContinent?: string
    /**
     * Filter by location country.
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetServers
     */
    filterLocationCountry?: string
    /**
     * Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;
     * Defaults to: undefined
     * @type string
     * @memberof AppApigetServers
     */
    filterMetadata?: string
    /**
     * Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by instance in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-instance &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-instance &#x60;&#x60;&#x60;
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof AppApigetServers
     */
    sort?: Array<string>
}

export interface AppApiGetTaggedImagesRequest {
    /**
     * The docker registry ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApigetTaggedImages
     */
    dockerRegistry: number
}

export interface AppApiListServicesForAppLocationSettingRequest {
    /**
     * The app ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApilistServicesForAppLocationSetting
     */
    app: number
    /**
     * The app location setting ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApilistServicesForAppLocationSetting
     */
    appLocationSetting: number
}

export interface AppApiRefreshAuthTokenRequest {
}

export interface AppApiRefreshBinaryRequest {
    /**
     * The binary ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApirefreshBinary
     */
    binary: number
}

export interface AppApiRefreshTaggedImagesRequest {
    /**
     * The docker registry ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApirefreshTaggedImages
     */
    dockerRegistry: number
}

export interface AppApiRestartServerRequest {
    /**
     * The docker service ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApirestartServer
     */
    dockerService: number
}

export interface AppApiRestoreBackupRequest {
    /**
     * The docker service ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApirestoreBackup
     */
    dockerService: number
}

export interface AppApiSteamGetBranchesRequest {
    /**
     * The steamworks app id
     * Defaults to: undefined
     * @type number
     * @memberof AppApisteamGetBranches
     */
    appId: number
}

export interface AppApiSteamGetLauncherRequest {
    /**
     * The steamworks app id
     * Defaults to: undefined
     * @type number
     * @memberof AppApisteamGetLauncher
     */
    appId: number
    /**
     * The operating system of the binary
     * Defaults to: undefined
     * @type OperatingSystem
     * @memberof AppApisteamGetLauncher
     */
    os?: OperatingSystem
}

export interface AppApiTemplateAppMinecraftStoreRequest {
    /**
     * 
     * @type StoreMinecraftTemplateRequest
     * @memberof AppApitemplateAppMinecraftStore
     */
    storeMinecraftTemplateRequest?: StoreMinecraftTemplateRequest
}

export interface AppApiTemplateAppPalworldStoreRequest {
    /**
     * 
     * @type StorePalworldTemplateRequest
     * @memberof AppApitemplateAppPalworldStore
     */
    storePalworldTemplateRequest?: StorePalworldTemplateRequest
}

export interface AppApiUpdateAppByIdRequest {
    /**
     * The app ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApiupdateAppById
     */
    app: number
    /**
     * 
     * @type UpdateAppRequest
     * @memberof AppApiupdateAppById
     */
    updateAppRequest: UpdateAppRequest
}

export interface AppApiUpdateAppLocationSettingRequest {
    /**
     * The app location setting ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApiupdateAppLocationSetting
     */
    appLocationSetting: number
    /**
     * 
     * @type UpdateAppLocationSettingRequest
     * @memberof AppApiupdateAppLocationSetting
     */
    updateAppLocationSettingRequest: UpdateAppLocationSettingRequest
}

export interface AppApiUpdateBinaryRequest {
    /**
     * The binary ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApiupdateBinary
     */
    binary: number
    /**
     * 
     * @type UpdateBinaryRequest
     * @memberof AppApiupdateBinary
     */
    updateBinaryRequest: UpdateBinaryRequest
}

export interface AppApiUpdateDockerRegistryRequest {
    /**
     * The docker registry ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApiupdateDockerRegistry
     */
    dockerRegistry: number
    /**
     * 
     * @type UpdateDockerRegistryRequest
     * @memberof AppApiupdateDockerRegistry
     */
    updateDockerRegistryRequest: UpdateDockerRegistryRequest
}

export interface AppApiUpdateServerConfigRequest {
    /**
     * The server config ID
     * Defaults to: undefined
     * @type number
     * @memberof AppApiupdateServerConfig
     */
    serverConfig: number
    /**
     * 
     * @type UpdateServerConfigRequest
     * @memberof AppApiupdateServerConfig
     */
    updateServerConfigRequest: UpdateServerConfigRequest
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
    public createAppWithHttpInfo(param: AppApiCreateAppRequest, options?: Configuration): Promise<HttpInfo<App>> {
        return this.api.createAppWithHttpInfo(param.storeAppRequest,  options).toPromise();
    }

    /**
     * Create an app
     * @param param the request object
     */
    public createApp(param: AppApiCreateAppRequest, options?: Configuration): Promise<App> {
        return this.api.createApp(param.storeAppRequest,  options).toPromise();
    }

    /**
     * Create a new location setting
     * @param param the request object
     */
    public createAppLocationSettingWithHttpInfo(param: AppApiCreateAppLocationSettingRequest, options?: Configuration): Promise<HttpInfo<AppLocationSetting>> {
        return this.api.createAppLocationSettingWithHttpInfo(param.app, param.storeAppLocationSettingRequest,  options).toPromise();
    }

    /**
     * Create a new location setting
     * @param param the request object
     */
    public createAppLocationSetting(param: AppApiCreateAppLocationSettingRequest, options?: Configuration): Promise<AppLocationSetting> {
        return this.api.createAppLocationSetting(param.app, param.storeAppLocationSettingRequest,  options).toPromise();
    }

    /**
     * Creates a backup
     * @param param the request object
     */
    public createBackupWithHttpInfo(param: AppApiCreateBackupRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.createBackupWithHttpInfo(param.dockerService, param.createBackupDockerServiceRequest,  options).toPromise();
    }

    /**
     * Creates a backup
     * @param param the request object
     */
    public createBackup(param: AppApiCreateBackupRequest, options?: Configuration): Promise<any> {
        return this.api.createBackup(param.dockerService, param.createBackupDockerServiceRequest,  options).toPromise();
    }

    /**
     * Create a binary and the related entity
     * @param param the request object
     */
    public createBinaryWithHttpInfo(param: AppApiCreateBinaryRequest, options?: Configuration): Promise<HttpInfo<Binary>> {
        return this.api.createBinaryWithHttpInfo(param.app, param.storeBinaryRequest,  options).toPromise();
    }

    /**
     * Create a binary and the related entity
     * @param param the request object
     */
    public createBinary(param: AppApiCreateBinaryRequest, options?: Configuration): Promise<Binary> {
        return this.api.createBinary(param.app, param.storeBinaryRequest,  options).toPromise();
    }

    /**
     * Create a new docker registry
     * @param param the request object
     */
    public createDockerRegistryWithHttpInfo(param: AppApiCreateDockerRegistryRequest, options?: Configuration): Promise<HttpInfo<DockerRegistry>> {
        return this.api.createDockerRegistryWithHttpInfo(param.storeDockerRegistryRequest,  options).toPromise();
    }

    /**
     * Create a new docker registry
     * @param param the request object
     */
    public createDockerRegistry(param: AppApiCreateDockerRegistryRequest, options?: Configuration): Promise<DockerRegistry> {
        return this.api.createDockerRegistry(param.storeDockerRegistryRequest,  options).toPromise();
    }

    /**
     * Create a new server config
     * @param param the request object
     */
    public createServerConfigWithHttpInfo(param: AppApiCreateServerConfigRequest, options?: Configuration): Promise<HttpInfo<ServerConfig>> {
        return this.api.createServerConfigWithHttpInfo(param.app, param.storeServerConfigRequest,  options).toPromise();
    }

    /**
     * Create a new server config
     * @param param the request object
     */
    public createServerConfig(param: AppApiCreateServerConfigRequest, options?: Configuration): Promise<ServerConfig> {
        return this.api.createServerConfig(param.app, param.storeServerConfigRequest,  options).toPromise();
    }

    /**
     * Delete a specific app
     * @param param the request object
     */
    public deleteAppWithHttpInfo(param: AppApiDeleteAppRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteAppWithHttpInfo(param.app,  options).toPromise();
    }

    /**
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
     * Delete a specified binary
     * @param param the request object
     */
    public deleteBinaryWithHttpInfo(param: AppApiDeleteBinaryRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteBinaryWithHttpInfo(param.binary,  options).toPromise();
    }

    /**
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
     * Delete a specific server config
     * @param param the request object
     */
    public deleteServerConfigWithHttpInfo(param: AppApiDeleteServerConfigRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteServerConfigWithHttpInfo(param.serverConfig,  options).toPromise();
    }

    /**
     * Delete a specific server config
     * @param param the request object
     */
    public deleteServerConfig(param: AppApiDeleteServerConfigRequest, options?: Configuration): Promise<any> {
        return this.api.deleteServerConfig(param.serverConfig,  options).toPromise();
    }

    /**
     * Delete all metadata from the service
     * @param param the request object
     */
    public dockerServicesMetadataDeleteAllWithHttpInfo(param: AppApiDockerServicesMetadataDeleteAllRequest, options?: Configuration): Promise<HttpInfo<Server>> {
        return this.api.dockerServicesMetadataDeleteAllWithHttpInfo(param.dockerService,  options).toPromise();
    }

    /**
     * Delete all metadata from the service
     * @param param the request object
     */
    public dockerServicesMetadataDeleteAll(param: AppApiDockerServicesMetadataDeleteAllRequest, options?: Configuration): Promise<Server> {
        return this.api.dockerServicesMetadataDeleteAll(param.dockerService,  options).toPromise();
    }

    /**
     * Delete specific metadata keys from the service
     * @param param the request object
     */
    public dockerServicesMetadataDeleteKeysWithHttpInfo(param: AppApiDockerServicesMetadataDeleteKeysRequest, options?: Configuration): Promise<HttpInfo<Server>> {
        return this.api.dockerServicesMetadataDeleteKeysWithHttpInfo(param.dockerService, param.metadata,  options).toPromise();
    }

    /**
     * Delete specific metadata keys from the service
     * @param param the request object
     */
    public dockerServicesMetadataDeleteKeys(param: AppApiDockerServicesMetadataDeleteKeysRequest, options?: Configuration): Promise<Server> {
        return this.api.dockerServicesMetadataDeleteKeys(param.dockerService, param.metadata,  options).toPromise();
    }

    /**
     * Replaces the entire metadata set with only the values provided in the request.
     * Set metadata for the service
     * @param param the request object
     */
    public dockerServicesMetadataSetWithHttpInfo(param: AppApiDockerServicesMetadataSetRequest, options?: Configuration): Promise<HttpInfo<Server>> {
        return this.api.dockerServicesMetadataSetWithHttpInfo(param.dockerService, param.setMetadataRequest,  options).toPromise();
    }

    /**
     * Replaces the entire metadata set with only the values provided in the request.
     * Set metadata for the service
     * @param param the request object
     */
    public dockerServicesMetadataSet(param: AppApiDockerServicesMetadataSetRequest, options?: Configuration): Promise<Server> {
        return this.api.dockerServicesMetadataSet(param.dockerService, param.setMetadataRequest,  options).toPromise();
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting metadata that is not mentioned.
     * Update metadata for the service
     * @param param the request object
     */
    public dockerServicesMetadataUpdateWithHttpInfo(param: AppApiDockerServicesMetadataUpdateRequest, options?: Configuration): Promise<HttpInfo<Server>> {
        return this.api.dockerServicesMetadataUpdateWithHttpInfo(param.dockerService, param.patchMetadataRequest,  options).toPromise();
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting metadata that is not mentioned.
     * Update metadata for the service
     * @param param the request object
     */
    public dockerServicesMetadataUpdate(param: AppApiDockerServicesMetadataUpdateRequest, options?: Configuration): Promise<Server> {
        return this.api.dockerServicesMetadataUpdate(param.dockerService, param.patchMetadataRequest,  options).toPromise();
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
     * Show a specific app location setting
     * @param param the request object
     */
    public getAppLocationSettingByIdWithHttpInfo(param: AppApiGetAppLocationSettingByIdRequest, options?: Configuration): Promise<HttpInfo<AppLocationSetting>> {
        return this.api.getAppLocationSettingByIdWithHttpInfo(param.appLocationSetting,  options).toPromise();
    }

    /**
     * Show a specific app location setting
     * @param param the request object
     */
    public getAppLocationSettingById(param: AppApiGetAppLocationSettingByIdRequest, options?: Configuration): Promise<AppLocationSetting> {
        return this.api.getAppLocationSettingById(param.appLocationSetting,  options).toPromise();
    }

    /**
     * Show all location settings
     * @param param the request object
     */
    public getAppLocationSettingsWithHttpInfo(param: AppApiGetAppLocationSettingsRequest, options?: Configuration): Promise<HttpInfo<GetAppLocationSettings200Response>> {
        return this.api.getAppLocationSettingsWithHttpInfo(param.app, param.perPage, param.page, param.sort, param.filterId, param.filterName, param.filterNamePartial, param.filterServerConfigId, param.filterNumInstances, param.filterStatus, param.filterMaintenance, param.filterLocationCity, param.filterLocationCityDisplay, param.filterLocationContinent, param.filterLocationCountry, param.filterServerConfigName, param.filterServerConfigCommand, param.filterServerConfigArgs, param.filterServerConfigNotes, param.filterServerConfigStatus, param.filterServerConfigMaintenance, param.filterServerConfigResourcePackageSlug,  options).toPromise();
    }

    /**
     * Show all location settings
     * @param param the request object
     */
    public getAppLocationSettings(param: AppApiGetAppLocationSettingsRequest, options?: Configuration): Promise<GetAppLocationSettings200Response> {
        return this.api.getAppLocationSettings(param.app, param.perPage, param.page, param.sort, param.filterId, param.filterName, param.filterNamePartial, param.filterServerConfigId, param.filterNumInstances, param.filterStatus, param.filterMaintenance, param.filterLocationCity, param.filterLocationCityDisplay, param.filterLocationContinent, param.filterLocationCountry, param.filterServerConfigName, param.filterServerConfigCommand, param.filterServerConfigArgs, param.filterServerConfigNotes, param.filterServerConfigStatus, param.filterServerConfigMaintenance, param.filterServerConfigResourcePackageSlug,  options).toPromise();
    }

    /**
     * Show all apps
     * @param param the request object
     */
    public getAppsWithHttpInfo(param: AppApiGetAppsRequest = {}, options?: Configuration): Promise<HttpInfo<GetApps200Response>> {
        return this.api.getAppsWithHttpInfo(param.perPage, param.page, param.sort, param.filterId, param.filterName, param.filterNamePartial, param.filterInUse,  options).toPromise();
    }

    /**
     * Show all apps
     * @param param the request object
     */
    public getApps(param: AppApiGetAppsRequest = {}, options?: Configuration): Promise<GetApps200Response> {
        return this.api.getApps(param.perPage, param.page, param.sort, param.filterId, param.filterName, param.filterNamePartial, param.filterInUse,  options).toPromise();
    }

    /**
     * Authenticates the user based on the user\'s email, password, and session ID. If the user is authenticated successfully, it returns the user\'s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.+
     * Get token
     * @param param the request object
     */
    public getAuthTokenWithHttpInfo(param: AppApiGetAuthTokenRequest, options?: Configuration): Promise<HttpInfo<Auth>> {
        return this.api.getAuthTokenWithHttpInfo(param.authRequest,  options).toPromise();
    }

    /**
     * Authenticates the user based on the user\'s email, password, and session ID. If the user is authenticated successfully, it returns the user\'s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.+
     * Get token
     * @param param the request object
     */
    public getAuthToken(param: AppApiGetAuthTokenRequest, options?: Configuration): Promise<Auth> {
        return this.api.getAuthToken(param.authRequest,  options).toPromise();
    }

    /**
     * List all backups
     * @param param the request object
     */
    public getBackupsWithHttpInfo(param: AppApiGetBackupsRequest, options?: Configuration): Promise<HttpInfo<GetBackups200Response>> {
        return this.api.getBackupsWithHttpInfo(param.dockerService, param.perPage, param.page, param.sort, param.filterName, param.filterArchiveName,  options).toPromise();
    }

    /**
     * List all backups
     * @param param the request object
     */
    public getBackups(param: AppApiGetBackupsRequest, options?: Configuration): Promise<GetBackups200Response> {
        return this.api.getBackups(param.dockerService, param.perPage, param.page, param.sort, param.filterName, param.filterArchiveName,  options).toPromise();
    }

    /**
     * Show all binaries
     * @param param the request object
     */
    public getBinariesWithHttpInfo(param: AppApiGetBinariesRequest, options?: Configuration): Promise<HttpInfo<GetBinaries200Response>> {
        return this.api.getBinariesWithHttpInfo(param.app, param.perPage, param.page, param.sort, param.filterName, param.filterNamePartial, param.filterVersion, param.filterType, param.filterOs, param.filterMaintenance, param.filterStatus, param.filterInUse,  options).toPromise();
    }

    /**
     * Show all binaries
     * @param param the request object
     */
    public getBinaries(param: AppApiGetBinariesRequest, options?: Configuration): Promise<GetBinaries200Response> {
        return this.api.getBinaries(param.app, param.perPage, param.page, param.sort, param.filterName, param.filterNamePartial, param.filterVersion, param.filterType, param.filterOs, param.filterMaintenance, param.filterStatus, param.filterInUse,  options).toPromise();
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
    public getDockerRegistriesWithHttpInfo(param: AppApiGetDockerRegistriesRequest = {}, options?: Configuration): Promise<HttpInfo<GetDockerRegistries200Response>> {
        return this.api.getDockerRegistriesWithHttpInfo(param.perPage, param.page, param.sort, param.filterId, param.filterType, param.filterName, param.filterNamePartial, param.filterUrl, param.filterOrganization,  options).toPromise();
    }

    /**
     * Show all docker registries
     * @param param the request object
     */
    public getDockerRegistries(param: AppApiGetDockerRegistriesRequest = {}, options?: Configuration): Promise<GetDockerRegistries200Response> {
        return this.api.getDockerRegistries(param.perPage, param.page, param.sort, param.filterId, param.filterType, param.filterName, param.filterNamePartial, param.filterUrl, param.filterOrganization,  options).toPromise();
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
     * Display the latest backup
     * @param param the request object
     */
    public getLatestBackupWithHttpInfo(param: AppApiGetLatestBackupRequest, options?: Configuration): Promise<HttpInfo<Backup>> {
        return this.api.getLatestBackupWithHttpInfo(param.dockerService,  options).toPromise();
    }

    /**
     * Display the latest backup
     * @param param the request object
     */
    public getLatestBackup(param: AppApiGetLatestBackupRequest, options?: Configuration): Promise<Backup> {
        return this.api.getLatestBackup(param.dockerService,  options).toPromise();
    }

    /**
     * Show a unique listing of locations based on active and ready worker nodes
     * @param param the request object
     */
    public getLocationsWithHttpInfo(param: AppApiGetLocationsRequest = {}, options?: Configuration): Promise<HttpInfo<GetLocations200Response>> {
        return this.api.getLocationsWithHttpInfo(param.perPage, param.page,  options).toPromise();
    }

    /**
     * Show a unique listing of locations based on active and ready worker nodes
     * @param param the request object
     */
    public getLocations(param: AppApiGetLocationsRequest = {}, options?: Configuration): Promise<GetLocations200Response> {
        return this.api.getLocations(param.perPage, param.page,  options).toPromise();
    }

    /**
     * Show a specified resource package
     * @param param the request object
     */
    public getResourcePackageByIdWithHttpInfo(param: AppApiGetResourcePackageByIdRequest, options?: Configuration): Promise<HttpInfo<ResourcePackage>> {
        return this.api.getResourcePackageByIdWithHttpInfo(param.resourcePackage,  options).toPromise();
    }

    /**
     * Show a specified resource package
     * @param param the request object
     */
    public getResourcePackageById(param: AppApiGetResourcePackageByIdRequest, options?: Configuration): Promise<ResourcePackage> {
        return this.api.getResourcePackageById(param.resourcePackage,  options).toPromise();
    }

    /**
     * Show all available resource packages
     * @param param the request object
     */
    public getResourcePackagesWithHttpInfo(param: AppApiGetResourcePackagesRequest = {}, options?: Configuration): Promise<HttpInfo<GetResourcePackages200Response>> {
        return this.api.getResourcePackagesWithHttpInfo(param.perPage, param.page, param.sort, param.filterId, param.filterName, param.filterNamePartial, param.filterSlug, param.filterType, param.filterCpuLimit, param.filterCpuReservation, param.filterMemoryLimitMiB, param.filterMemoryReservationMiB,  options).toPromise();
    }

    /**
     * Show all available resource packages
     * @param param the request object
     */
    public getResourcePackages(param: AppApiGetResourcePackagesRequest = {}, options?: Configuration): Promise<GetResourcePackages200Response> {
        return this.api.getResourcePackages(param.perPage, param.page, param.sort, param.filterId, param.filterName, param.filterNamePartial, param.filterSlug, param.filterType, param.filterCpuLimit, param.filterCpuReservation, param.filterMemoryLimitMiB, param.filterMemoryReservationMiB,  options).toPromise();
    }

    /**
     * Generate a presigned URL for downloading the latest backup from AWS S3
     * @param param the request object
     */
    public getServerBackupDownloadUrlWithHttpInfo(param: AppApiGetServerBackupDownloadUrlRequest, options?: Configuration): Promise<HttpInfo<BackupDownload>> {
        return this.api.getServerBackupDownloadUrlWithHttpInfo(param.dockerService,  options).toPromise();
    }

    /**
     * Generate a presigned URL for downloading the latest backup from AWS S3
     * @param param the request object
     */
    public getServerBackupDownloadUrl(param: AppApiGetServerBackupDownloadUrlRequest, options?: Configuration): Promise<BackupDownload> {
        return this.api.getServerBackupDownloadUrl(param.dockerService,  options).toPromise();
    }

    /**
     * Display a specific service
     * @param param the request object
     */
    public getServerByIdWithHttpInfo(param: AppApiGetServerByIdRequest, options?: Configuration): Promise<HttpInfo<Server>> {
        return this.api.getServerByIdWithHttpInfo(param.app, param.dockerService,  options).toPromise();
    }

    /**
     * Display a specific service
     * @param param the request object
     */
    public getServerById(param: AppApiGetServerByIdRequest, options?: Configuration): Promise<Server> {
        return this.api.getServerById(param.app, param.dockerService,  options).toPromise();
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
    public getServerConfigsWithHttpInfo(param: AppApiGetServerConfigsRequest, options?: Configuration): Promise<HttpInfo<GetServerConfigs200Response>> {
        return this.api.getServerConfigsWithHttpInfo(param.app, param.perPage, param.page, param.sort, param.filterId, param.filterBinaryId, param.filterName, param.filterNamePartial, param.filterCommand, param.filterArgs, param.filterNotes, param.filterStatus, param.filterMaintenance, param.filterResourcePackageSlug, param.filterInUse, param.filterBinaryName, param.filterBinaryVersion, param.filterBinaryType, param.filterBinaryOs,  options).toPromise();
    }

    /**
     * Show all server configs
     * @param param the request object
     */
    public getServerConfigs(param: AppApiGetServerConfigsRequest, options?: Configuration): Promise<GetServerConfigs200Response> {
        return this.api.getServerConfigs(param.app, param.perPage, param.page, param.sort, param.filterId, param.filterBinaryId, param.filterName, param.filterNamePartial, param.filterCommand, param.filterArgs, param.filterNotes, param.filterStatus, param.filterMaintenance, param.filterResourcePackageSlug, param.filterInUse, param.filterBinaryName, param.filterBinaryVersion, param.filterBinaryType, param.filterBinaryOs,  options).toPromise();
    }

    /**
     * Get stdout and stderr logs from the latest gameserver task
     * @param param the request object
     */
    public getServerLogsWithHttpInfo(param: AppApiGetServerLogsRequest, options?: Configuration): Promise<HttpInfo<ServiceLogs>> {
        return this.api.getServerLogsWithHttpInfo(param.dockerService, param.since, param.limit, param.direction, param.streamSource,  options).toPromise();
    }

    /**
     * Get stdout and stderr logs from the latest gameserver task
     * @param param the request object
     */
    public getServerLogs(param: AppApiGetServerLogsRequest, options?: Configuration): Promise<ServiceLogs> {
        return this.api.getServerLogs(param.dockerService, param.since, param.limit, param.direction, param.streamSource,  options).toPromise();
    }

    /**
     * Show all services
     * @param param the request object
     */
    public getServersWithHttpInfo(param: AppApiGetServersRequest, options?: Configuration): Promise<HttpInfo<GetServers200Response>> {
        return this.api.getServersWithHttpInfo(param.app, param.perPage, param.page, param.filterStatus, param.filterAppLocationSettingId, param.filterServerConfigId, param.filterLocationCity, param.filterLocationCityDisplay, param.filterLocationContinent, param.filterLocationCountry, param.filterMetadata, param.sort,  options).toPromise();
    }

    /**
     * Show all services
     * @param param the request object
     */
    public getServers(param: AppApiGetServersRequest, options?: Configuration): Promise<GetServers200Response> {
        return this.api.getServers(param.app, param.perPage, param.page, param.filterStatus, param.filterAppLocationSettingId, param.filterServerConfigId, param.filterLocationCity, param.filterLocationCityDisplay, param.filterLocationContinent, param.filterLocationCountry, param.filterMetadata, param.sort,  options).toPromise();
    }

    /**
     * List all available tagged images
     * @param param the request object
     */
    public getTaggedImagesWithHttpInfo(param: AppApiGetTaggedImagesRequest, options?: Configuration): Promise<HttpInfo<GetTaggedImages200Response>> {
        return this.api.getTaggedImagesWithHttpInfo(param.dockerRegistry,  options).toPromise();
    }

    /**
     * List all available tagged images
     * @param param the request object
     */
    public getTaggedImages(param: AppApiGetTaggedImagesRequest, options?: Configuration): Promise<GetTaggedImages200Response> {
        return this.api.getTaggedImages(param.dockerRegistry,  options).toPromise();
    }

    /**
     * Show all services for a specific app location setting within a given app
     * @param param the request object
     */
    public listServicesForAppLocationSettingWithHttpInfo(param: AppApiListServicesForAppLocationSettingRequest, options?: Configuration): Promise<HttpInfo<Array<Server>>> {
        return this.api.listServicesForAppLocationSettingWithHttpInfo(param.app, param.appLocationSetting,  options).toPromise();
    }

    /**
     * Show all services for a specific app location setting within a given app
     * @param param the request object
     */
    public listServicesForAppLocationSetting(param: AppApiListServicesForAppLocationSettingRequest, options?: Configuration): Promise<Array<Server>> {
        return this.api.listServicesForAppLocationSetting(param.app, param.appLocationSetting,  options).toPromise();
    }

    /**
     * Refresh token
     * @param param the request object
     */
    public refreshAuthTokenWithHttpInfo(param: AppApiRefreshAuthTokenRequest = {}, options?: Configuration): Promise<HttpInfo<Auth>> {
        return this.api.refreshAuthTokenWithHttpInfo( options).toPromise();
    }

    /**
     * Refresh token
     * @param param the request object
     */
    public refreshAuthToken(param: AppApiRefreshAuthTokenRequest = {}, options?: Configuration): Promise<Auth> {
        return this.api.refreshAuthToken( options).toPromise();
    }

    /**
     * Refresh a binary and the related entity
     * @param param the request object
     */
    public refreshBinaryWithHttpInfo(param: AppApiRefreshBinaryRequest, options?: Configuration): Promise<HttpInfo<Binary>> {
        return this.api.refreshBinaryWithHttpInfo(param.binary,  options).toPromise();
    }

    /**
     * Refresh a binary and the related entity
     * @param param the request object
     */
    public refreshBinary(param: AppApiRefreshBinaryRequest, options?: Configuration): Promise<Binary> {
        return this.api.refreshBinary(param.binary,  options).toPromise();
    }

    /**
     * Refresh the cache for all available tagged images
     * @param param the request object
     */
    public refreshTaggedImagesWithHttpInfo(param: AppApiRefreshTaggedImagesRequest, options?: Configuration): Promise<HttpInfo<GetTaggedImages200Response>> {
        return this.api.refreshTaggedImagesWithHttpInfo(param.dockerRegistry,  options).toPromise();
    }

    /**
     * Refresh the cache for all available tagged images
     * @param param the request object
     */
    public refreshTaggedImages(param: AppApiRefreshTaggedImagesRequest, options?: Configuration): Promise<GetTaggedImages200Response> {
        return this.api.refreshTaggedImages(param.dockerRegistry,  options).toPromise();
    }

    /**
     * Restart the service
     * @param param the request object
     */
    public restartServerWithHttpInfo(param: AppApiRestartServerRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.restartServerWithHttpInfo(param.dockerService,  options).toPromise();
    }

    /**
     * Restart the service
     * @param param the request object
     */
    public restartServer(param: AppApiRestartServerRequest, options?: Configuration): Promise<any> {
        return this.api.restartServer(param.dockerService,  options).toPromise();
    }

    /**
     * Restore the latest backup
     * @param param the request object
     */
    public restoreBackupWithHttpInfo(param: AppApiRestoreBackupRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.restoreBackupWithHttpInfo(param.dockerService,  options).toPromise();
    }

    /**
     * Restore the latest backup
     * @param param the request object
     */
    public restoreBackup(param: AppApiRestoreBackupRequest, options?: Configuration): Promise<any> {
        return this.api.restoreBackup(param.dockerService,  options).toPromise();
    }

    /**
     * Get branches for a specific steamworks app ID
     * @param param the request object
     */
    public steamGetBranchesWithHttpInfo(param: AppApiSteamGetBranchesRequest, options?: Configuration): Promise<HttpInfo<Array<SteamBranch>>> {
        return this.api.steamGetBranchesWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Get branches for a specific steamworks app ID
     * @param param the request object
     */
    public steamGetBranches(param: AppApiSteamGetBranchesRequest, options?: Configuration): Promise<Array<SteamBranch>> {
        return this.api.steamGetBranches(param.appId,  options).toPromise();
    }

    /**
     * Get launchers for a specific steamworks app ID, optionally filtered by OS
     * @param param the request object
     */
    public steamGetLauncherWithHttpInfo(param: AppApiSteamGetLauncherRequest, options?: Configuration): Promise<HttpInfo<Array<SteamLauncher>>> {
        return this.api.steamGetLauncherWithHttpInfo(param.appId, param.os,  options).toPromise();
    }

    /**
     * Get launchers for a specific steamworks app ID, optionally filtered by OS
     * @param param the request object
     */
    public steamGetLauncher(param: AppApiSteamGetLauncherRequest, options?: Configuration): Promise<Array<SteamLauncher>> {
        return this.api.steamGetLauncher(param.appId, param.os,  options).toPromise();
    }

    /**
     * Create a Minecraft template app
     * @param param the request object
     */
    public templateAppMinecraftStoreWithHttpInfo(param: AppApiTemplateAppMinecraftStoreRequest = {}, options?: Configuration): Promise<HttpInfo<App>> {
        return this.api.templateAppMinecraftStoreWithHttpInfo(param.storeMinecraftTemplateRequest,  options).toPromise();
    }

    /**
     * Create a Minecraft template app
     * @param param the request object
     */
    public templateAppMinecraftStore(param: AppApiTemplateAppMinecraftStoreRequest = {}, options?: Configuration): Promise<App> {
        return this.api.templateAppMinecraftStore(param.storeMinecraftTemplateRequest,  options).toPromise();
    }

    /**
     * Create a Palworld template app
     * @param param the request object
     */
    public templateAppPalworldStoreWithHttpInfo(param: AppApiTemplateAppPalworldStoreRequest = {}, options?: Configuration): Promise<HttpInfo<App>> {
        return this.api.templateAppPalworldStoreWithHttpInfo(param.storePalworldTemplateRequest,  options).toPromise();
    }

    /**
     * Create a Palworld template app
     * @param param the request object
     */
    public templateAppPalworldStore(param: AppApiTemplateAppPalworldStoreRequest = {}, options?: Configuration): Promise<App> {
        return this.api.templateAppPalworldStore(param.storePalworldTemplateRequest,  options).toPromise();
    }

    /**
     * Update a specific app
     * @param param the request object
     */
    public updateAppByIdWithHttpInfo(param: AppApiUpdateAppByIdRequest, options?: Configuration): Promise<HttpInfo<App>> {
        return this.api.updateAppByIdWithHttpInfo(param.app, param.updateAppRequest,  options).toPromise();
    }

    /**
     * Update a specific app
     * @param param the request object
     */
    public updateAppById(param: AppApiUpdateAppByIdRequest, options?: Configuration): Promise<App> {
        return this.api.updateAppById(param.app, param.updateAppRequest,  options).toPromise();
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
     * Update a binary and the related entity
     * @param param the request object
     */
    public updateBinaryWithHttpInfo(param: AppApiUpdateBinaryRequest, options?: Configuration): Promise<HttpInfo<Binary>> {
        return this.api.updateBinaryWithHttpInfo(param.binary, param.updateBinaryRequest,  options).toPromise();
    }

    /**
     * Update a binary and the related entity
     * @param param the request object
     */
    public updateBinary(param: AppApiUpdateBinaryRequest, options?: Configuration): Promise<Binary> {
        return this.api.updateBinary(param.binary, param.updateBinaryRequest,  options).toPromise();
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
        return this.api.updateServerConfigWithHttpInfo(param.serverConfig, param.updateServerConfigRequest,  options).toPromise();
    }

    /**
     * Update a server config
     * @param param the request object
     */
    public updateServerConfig(param: AppApiUpdateServerConfigRequest, options?: Configuration): Promise<ServerConfig> {
        return this.api.updateServerConfig(param.serverConfig, param.updateServerConfigRequest,  options).toPromise();
    }

}
