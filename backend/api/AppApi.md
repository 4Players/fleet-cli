# .AppApi

All URIs are relative to *https://fleet.4players.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appLocationSettingsAutoscalingAllocate**](AppApi.md#appLocationSettingsAutoscalingAllocate) | **POST** /v1/app-location-settings/{appLocationSetting}/autoscaling/allocate | Allocate a ready autoscaling instance
[**appLocationSettingsMetadataDeleteAll**](AppApi.md#appLocationSettingsMetadataDeleteAll) | **DELETE** /v1/app-location-settings/{appLocationSetting}/metadata | Delete all metadata
[**appLocationSettingsMetadataDeleteKeys**](AppApi.md#appLocationSettingsMetadataDeleteKeys) | **DELETE** /v1/app-location-settings/{appLocationSetting}/metadata/keys | Delete metadata keys
[**appLocationSettingsMetadataSet**](AppApi.md#appLocationSettingsMetadataSet) | **PUT** /v1/app-location-settings/{appLocationSetting}/metadata | Set metadata
[**appLocationSettingsMetadataUpdate**](AppApi.md#appLocationSettingsMetadataUpdate) | **PATCH** /v1/app-location-settings/{appLocationSetting}/metadata | Update metadata
[**appsMetadataDeleteAll**](AppApi.md#appsMetadataDeleteAll) | **DELETE** /v1/apps/{app}/metadata | Delete all metadata
[**appsMetadataDeleteKeys**](AppApi.md#appsMetadataDeleteKeys) | **DELETE** /v1/apps/{app}/metadata/keys | Delete metadata keys
[**appsMetadataSet**](AppApi.md#appsMetadataSet) | **PUT** /v1/apps/{app}/metadata | Set metadata
[**appsMetadataUpdate**](AppApi.md#appsMetadataUpdate) | **PATCH** /v1/apps/{app}/metadata | Update metadata
[**binariesMetadataDeleteAll**](AppApi.md#binariesMetadataDeleteAll) | **DELETE** /v1/binaries/{binary}/metadata | Delete all metadata
[**binariesMetadataDeleteKeys**](AppApi.md#binariesMetadataDeleteKeys) | **DELETE** /v1/binaries/{binary}/metadata/keys | Delete metadata keys
[**binariesMetadataSet**](AppApi.md#binariesMetadataSet) | **PUT** /v1/binaries/{binary}/metadata | Set metadata
[**binariesMetadataUpdate**](AppApi.md#binariesMetadataUpdate) | **PATCH** /v1/binaries/{binary}/metadata | Update metadata
[**checkCapacity**](AppApi.md#checkCapacity) | **POST** /v1/apps/{app}/location-settings/capacity | Estimate the available capacity in a location based on a ServerConfig
[**checkServerDns**](AppApi.md#checkServerDns) | **GET** /v1/apps/{app}/services/{dockerService}/dns | Check URL reachability for service DNS URLs
[**createApp**](AppApi.md#createApp) | **POST** /v1/apps | Create an app
[**createAppLocationSetting**](AppApi.md#createAppLocationSetting) | **POST** /v1/apps/{app}/location-settings | Create a new location setting
[**createBackup**](AppApi.md#createBackup) | **POST** /v1/services/{dockerService}/backup | Create service backup
[**createBinary**](AppApi.md#createBinary) | **POST** /v1/apps/{app}/binaries | Create a binary and the related entity
[**createDockerRegistry**](AppApi.md#createDockerRegistry) | **POST** /v1/docker-registries | Create a new docker registry
[**createMinecraftTemplate**](AppApi.md#createMinecraftTemplate) | **POST** /v1/templates/apps/minecraft | Create a Minecraft template app
[**createOpenClawTemplate**](AppApi.md#createOpenClawTemplate) | **POST** /v1/templates/apps/openclaw | Create an OpenClaw template app
[**createPalworldTemplate**](AppApi.md#createPalworldTemplate) | **POST** /v1/templates/apps/palworld | Create a Palworld template app
[**createServerConfig**](AppApi.md#createServerConfig) | **POST** /v1/apps/{app}/configs | Create a new server config
[**deleteApp**](AppApi.md#deleteApp) | **DELETE** /v1/apps/{app} | Delete a specific app
[**deleteAppLocationSetting**](AppApi.md#deleteAppLocationSetting) | **DELETE** /v1/app-location-settings/{appLocationSetting} | Delete a location setting
[**deleteBinary**](AppApi.md#deleteBinary) | **DELETE** /v1/binaries/{binary} | Delete a specified binary
[**deleteDockerRegistry**](AppApi.md#deleteDockerRegistry) | **DELETE** /v1/docker-registries/{dockerRegistry} | Delete a specific docker registry
[**deleteServerConfig**](AppApi.md#deleteServerConfig) | **DELETE** /v1/server-configs/{serverConfig} | Delete a specific server config
[**deleteUnusedApps**](AppApi.md#deleteUnusedApps) | **DELETE** /v1/apps/unused | Delete all unused apps
[**deleteUnusedBinaries**](AppApi.md#deleteUnusedBinaries) | **DELETE** /v1/apps/{app}/binaries/unused | Delete all unused binaries
[**deleteUnusedServerConfigs**](AppApi.md#deleteUnusedServerConfigs) | **DELETE** /v1/apps/{app}/configs/unused | Delete all unused server configs
[**dockerRegistriesMetadataDeleteAll**](AppApi.md#dockerRegistriesMetadataDeleteAll) | **DELETE** /v1/docker-registries/{dockerRegistry}/metadata | Delete all metadata
[**dockerRegistriesMetadataDeleteKeys**](AppApi.md#dockerRegistriesMetadataDeleteKeys) | **DELETE** /v1/docker-registries/{dockerRegistry}/metadata/keys | Delete metadata keys
[**dockerRegistriesMetadataSet**](AppApi.md#dockerRegistriesMetadataSet) | **PUT** /v1/docker-registries/{dockerRegistry}/metadata | Set metadata
[**dockerRegistriesMetadataUpdate**](AppApi.md#dockerRegistriesMetadataUpdate) | **PATCH** /v1/docker-registries/{dockerRegistry}/metadata | Update metadata
[**dockerServicesAutoscalingAllocate**](AppApi.md#dockerServicesAutoscalingAllocate) | **POST** /v1/services/{dockerService}/autoscaling/allocate | Set autoscaling status to allocated
[**dockerServicesAutoscalingHealth**](AppApi.md#dockerServicesAutoscalingHealth) | **POST** /v1/services/{dockerService}/autoscaling/health | Record an autoscaling heartbeat
[**dockerServicesAutoscalingReady**](AppApi.md#dockerServicesAutoscalingReady) | **POST** /v1/services/{dockerService}/autoscaling/ready | Set autoscaling status to ready
[**dockerServicesAutoscalingShutdown**](AppApi.md#dockerServicesAutoscalingShutdown) | **POST** /v1/services/{dockerService}/autoscaling/shutdown | Set autoscaling status to shutdown
[**dockerServicesMetadataDeleteAll**](AppApi.md#dockerServicesMetadataDeleteAll) | **DELETE** /v1/services/{dockerService}/metadata | Delete all service metadata
[**dockerServicesMetadataDeleteKeys**](AppApi.md#dockerServicesMetadataDeleteKeys) | **DELETE** /v1/services/{dockerService}/metadata/keys | Delete service metadata keys
[**dockerServicesMetadataSet**](AppApi.md#dockerServicesMetadataSet) | **PUT** /v1/services/{dockerService}/metadata | Set service metadata
[**dockerServicesMetadataUpdate**](AppApi.md#dockerServicesMetadataUpdate) | **PATCH** /v1/services/{dockerService}/metadata | Update service metadata
[**downloadServerLogs**](AppApi.md#downloadServerLogs) | **GET** /v1/services/{dockerService}/logs/download | Download service logs
[**getAppById**](AppApi.md#getAppById) | **GET** /v1/apps/{app} | Show a specific app
[**getAppLocationSettingById**](AppApi.md#getAppLocationSettingById) | **GET** /v1/app-location-settings/{appLocationSetting} | Show a specific app location setting
[**getAppLocationSettings**](AppApi.md#getAppLocationSettings) | **GET** /v1/apps/{app}/location-settings | Show all location settings
[**getAppWallets**](AppApi.md#getAppWallets) | **GET** /v1/apps/{app}/wallets | Show all wallets for a specific app
[**getApps**](AppApi.md#getApps) | **GET** /v1/apps | Show all apps
[**getAuthToken**](AppApi.md#getAuthToken) | **POST** /v1/auth/token | Get token
[**getAuthTokenViaFsid**](AppApi.md#getAuthTokenViaFsid) | **POST** /v1/auth/token/fsid | Get token via fsid
[**getBackups**](AppApi.md#getBackups) | **GET** /v1/services/{dockerService}/backups | List service backups
[**getBinaries**](AppApi.md#getBinaries) | **GET** /v1/apps/{app}/binaries | Show all binaries
[**getBinaryById**](AppApi.md#getBinaryById) | **GET** /v1/binaries/{binary} | Show a specific binary
[**getDockerRegistries**](AppApi.md#getDockerRegistries) | **GET** /v1/docker-registries | Show all docker registries
[**getDockerRegistryById**](AppApi.md#getDockerRegistryById) | **GET** /v1/docker-registries/{dockerRegistry} | Display a specific docker registry
[**getLatestBackup**](AppApi.md#getLatestBackup) | **GET** /v1/services/{dockerService}/backup | Get latest service backup
[**getLocations**](AppApi.md#getLocations) | **GET** /v1/nodes/locations | Show a unique listing of locations based on active and ready worker nodes
[**getResourcePackageById**](AppApi.md#getResourcePackageById) | **GET** /v1/resource-packages/{resourcePackage} | Show a specified resource package
[**getResourcePackages**](AppApi.md#getResourcePackages) | **GET** /v1/resource-packages | Show all available resource packages
[**getServerBackupDownloadUrl**](AppApi.md#getServerBackupDownloadUrl) | **GET** /v1/services/{dockerService}/backup/download | Get service backup download URL
[**getServerById**](AppApi.md#getServerById) | **GET** /v1/apps/{app}/services/{dockerService} | Display a specific service
[**getServerConfigById**](AppApi.md#getServerConfigById) | **GET** /v1/server-configs/{serverConfig} | Show a specific server config
[**getServerConfigs**](AppApi.md#getServerConfigs) | **GET** /v1/apps/{app}/configs | Show all server configs
[**getServerLogs**](AppApi.md#getServerLogs) | **GET** /v1/services/{dockerService}/logs | Get service logs
[**getServers**](AppApi.md#getServers) | **GET** /v1/apps/{app}/services | List services
[**getTaggedImages**](AppApi.md#getTaggedImages) | **GET** /v1/docker-registries/{dockerRegistry}/tagged-images | List all available tagged images
[**listServicesForAppLocationSetting**](AppApi.md#listServicesForAppLocationSetting) | **GET** /v1/apps/{app}/location-settings/{appLocationSetting}/services | Show all services for a specific app location setting within a given app
[**metricsAppCpuSecondsInstant**](AppApi.md#metricsAppCpuSecondsInstant) | **GET** /v1/metrics/app/{app}/cpu/seconds/instant | Get the total CPU seconds for the given app
[**metricsAppCpuUsage**](AppApi.md#metricsAppCpuUsage) | **GET** /v1/metrics/app/{app}/cpu/usage | Get CPU cores used for the given app
[**metricsAppCpuUsagePerDay**](AppApi.md#metricsAppCpuUsagePerDay) | **GET** /v1/metrics/app/{app}/cpu/usagePerDay | Get the daily peak CPU cores used for the given app
[**metricsAppInstancesPeakInstant**](AppApi.md#metricsAppInstancesPeakInstant) | **GET** /v1/metrics/app/{app}/instances/peak/instant | Get the peak number of running instances for the given app
[**metricsAppInstancesRunning**](AppApi.md#metricsAppInstancesRunning) | **GET** /v1/metrics/app/{app}/instances/running | Get the running server instances for the given app
[**metricsAppInstancesRunningInstant**](AppApi.md#metricsAppInstancesRunningInstant) | **GET** /v1/metrics/app/{app}/instances/running/instant | Get the current number of running instances for the given app
[**metricsDockerServiceCpuUsage**](AppApi.md#metricsDockerServiceCpuUsage) | **GET** /v1/metrics/service/{dockerService}/cpu/usage | Get the CPU usage by the given service
[**metricsDockerServiceDiskRead**](AppApi.md#metricsDockerServiceDiskRead) | **GET** /v1/metrics/service/{dockerService}/disk/read | Get the disk read throughput for the given service
[**metricsDockerServiceDiskWrite**](AppApi.md#metricsDockerServiceDiskWrite) | **GET** /v1/metrics/service/{dockerService}/disk/write | Get disk write throughput for the given service
[**metricsDockerServiceMemoryUsage**](AppApi.md#metricsDockerServiceMemoryUsage) | **GET** /v1/metrics/service/{dockerService}/memory/usage | Get the memory usage by the given service
[**metricsDockerServiceNetworkEgress**](AppApi.md#metricsDockerServiceNetworkEgress) | **GET** /v1/metrics/service/{dockerService}/network/egress | Get the network egress for the given service
[**metricsDockerServiceNetworkIngress**](AppApi.md#metricsDockerServiceNetworkIngress) | **GET** /v1/metrics/service/{dockerService}/network/ingress | Get the network ingress for the given service
[**refreshAuthToken**](AppApi.md#refreshAuthToken) | **PUT** /v1/auth/token | Refresh token
[**refreshBinary**](AppApi.md#refreshBinary) | **PUT** /v1/binaries/{binary}/refresh | Refresh a binary and the related entity
[**refreshTaggedImages**](AppApi.md#refreshTaggedImages) | **GET** /v1/docker-registries/{dockerRegistry}/tagged-images/refresh | Refresh the cache for all available tagged images
[**requestLocation**](AppApi.md#requestLocation) | **POST** /v1/nodes/locations/request | Submit a new location request
[**restartServer**](AppApi.md#restartServer) | **POST** /v1/services/{dockerService}/restart | Restart service
[**restoreBackup**](AppApi.md#restoreBackup) | **POST** /v1/services/{dockerService}/restore | Restore latest service backup
[**serverConfigsMetadataDeleteAll**](AppApi.md#serverConfigsMetadataDeleteAll) | **DELETE** /v1/server-configs/{serverConfig}/metadata | Delete all metadata
[**serverConfigsMetadataDeleteKeys**](AppApi.md#serverConfigsMetadataDeleteKeys) | **DELETE** /v1/server-configs/{serverConfig}/metadata/keys | Delete metadata keys
[**serverConfigsMetadataSet**](AppApi.md#serverConfigsMetadataSet) | **PUT** /v1/server-configs/{serverConfig}/metadata | Set metadata
[**serverConfigsMetadataUpdate**](AppApi.md#serverConfigsMetadataUpdate) | **PATCH** /v1/server-configs/{serverConfig}/metadata | Update metadata
[**startServer**](AppApi.md#startServer) | **POST** /v1/services/{dockerService}/start | Start service
[**startServersForApp**](AppApi.md#startServersForApp) | **POST** /v1/apps/{app}/services/start | Start all services related to a specific app
[**startServersForAppLocationSetting**](AppApi.md#startServersForAppLocationSetting) | **POST** /v1/app-location-settings/{appLocationSetting}/services/start | Start all services related to a specific app location setting
[**startServersForBinary**](AppApi.md#startServersForBinary) | **POST** /v1/binaries/{binary}/services/start | Start all services related to a specific binary
[**startServersForServerConfig**](AppApi.md#startServersForServerConfig) | **POST** /v1/server-configs/{serverConfig}/services/start | Start all services related to a specific server config
[**steamGetBranches**](AppApi.md#steamGetBranches) | **GET** /v1/binaries/steam/branches | Get branches for a specific steamworks app ID
[**steamGetLauncher**](AppApi.md#steamGetLauncher) | **GET** /v1/binaries/steam/launchers | Get launchers for a specific steamworks app ID, optionally filtered by OS
[**stopServer**](AppApi.md#stopServer) | **POST** /v1/services/{dockerService}/stop | Stop service
[**stopServersForApp**](AppApi.md#stopServersForApp) | **POST** /v1/apps/{app}/services/stop | Stop all services related to a specific app
[**stopServersForAppLocationSetting**](AppApi.md#stopServersForAppLocationSetting) | **POST** /v1/app-location-settings/{appLocationSetting}/services/stop | Stop all services related to a specific app location setting
[**stopServersForBinary**](AppApi.md#stopServersForBinary) | **POST** /v1/binaries/{binary}/services/stop | Stop all services related to a specific binary
[**stopServersForServerConfig**](AppApi.md#stopServersForServerConfig) | **POST** /v1/server-configs/{serverConfig}/services/stop | Stop all services related to a specific server config
[**updateAppById**](AppApi.md#updateAppById) | **PUT** /v1/apps/{app} | Update a specific app
[**updateAppLocationSetting**](AppApi.md#updateAppLocationSetting) | **PUT** /v1/app-location-settings/{appLocationSetting} | Update a location setting
[**updateBinary**](AppApi.md#updateBinary) | **PUT** /v1/binaries/{binary} | Update a binary and the related entity
[**updateDockerRegistry**](AppApi.md#updateDockerRegistry) | **PUT** /v1/docker-registries/{dockerRegistry} | Update a specific docker registry
[**updateServerConfig**](AppApi.md#updateServerConfig) | **PUT** /v1/server-configs/{serverConfig} | Update a server config


# **appLocationSettingsAutoscalingAllocate**
> Server appLocationSettingsAutoscalingAllocate()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiAppLocationSettingsAutoscalingAllocateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiAppLocationSettingsAutoscalingAllocateRequest = {
    // The app location setting ID
  appLocationSetting: 1,
  
  allocateAppLocationSettingAutoscalingRequest: {
    filter: {
      metadata: "metadata_example",
    },
  },
};

const data = await apiInstance.appLocationSettingsAutoscalingAllocate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allocateAppLocationSettingAutoscalingRequest** | **AllocateAppLocationSettingAutoscalingRequest**|  |
 **appLocationSetting** | [**number**] | The app location setting ID | defaults to undefined


### Return type

**Server**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;Server&#x60; |  -  |
**404** | Not found |  -  |
**403** | Authorization error |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**409** | Could not find an allocatable instance. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appLocationSettingsMetadataDeleteAll**
> GetAppLocationSettingById200Response appLocationSettingsMetadataDeleteAll()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiAppLocationSettingsMetadataDeleteAllRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiAppLocationSettingsMetadataDeleteAllRequest = {
    // The app location setting ID
  appLocationSetting: 1,
};

const data = await apiInstance.appLocationSettingsMetadataDeleteAll(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appLocationSetting** | [**number**] | The app location setting ID | defaults to undefined


### Return type

**GetAppLocationSettingById200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;AppLocationSetting&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appLocationSettingsMetadataDeleteKeys**
> GetAppLocationSettingById200Response appLocationSettingsMetadataDeleteKeys()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiAppLocationSettingsMetadataDeleteKeysRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiAppLocationSettingsMetadataDeleteKeysRequest = {
    // The app location setting ID
  appLocationSetting: 1,
  
  metadata: [
    "metadata[]_example",
  ],
};

const data = await apiInstance.appLocationSettingsMetadataDeleteKeys(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appLocationSetting** | [**number**] | The app location setting ID | defaults to undefined
 **metadata** | **Array&lt;string&gt;** |  | defaults to undefined


### Return type

**GetAppLocationSettingById200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;AppLocationSetting&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appLocationSettingsMetadataSet**
> GetAppLocationSettingById200Response appLocationSettingsMetadataSet()

Replaces the entire metadata.

### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiAppLocationSettingsMetadataSetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiAppLocationSettingsMetadataSetRequest = {
    // The app location setting ID
  appLocationSetting: 1,
  
  setAppLocationSettingMetadataRequest: {
    metadata: {
      "key": null,
    },
  },
};

const data = await apiInstance.appLocationSettingsMetadataSet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setAppLocationSettingMetadataRequest** | **SetAppLocationSettingMetadataRequest**|  |
 **appLocationSetting** | [**number**] | The app location setting ID | defaults to undefined


### Return type

**GetAppLocationSettingById200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;AppLocationSetting&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appLocationSettingsMetadataUpdate**
> GetAppLocationSettingById200Response appLocationSettingsMetadataUpdate()

Updates existing metadata keys or adds new keys without deleting other metadata.

### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiAppLocationSettingsMetadataUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiAppLocationSettingsMetadataUpdateRequest = {
    // The app location setting ID
  appLocationSetting: 1,
  
  patchAppLocationSettingMetadataRequest: {
    metadata: {
      "key": null,
    },
  },
};

const data = await apiInstance.appLocationSettingsMetadataUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchAppLocationSettingMetadataRequest** | **PatchAppLocationSettingMetadataRequest**|  |
 **appLocationSetting** | [**number**] | The app location setting ID | defaults to undefined


### Return type

**GetAppLocationSettingById200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;AppLocationSetting&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appsMetadataDeleteAll**
> App appsMetadataDeleteAll()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiAppsMetadataDeleteAllRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiAppsMetadataDeleteAllRequest = {
    // The app ID
  app: 1,
};

const data = await apiInstance.appsMetadataDeleteAll(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined


### Return type

**App**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;App&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appsMetadataDeleteKeys**
> App appsMetadataDeleteKeys()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiAppsMetadataDeleteKeysRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiAppsMetadataDeleteKeysRequest = {
    // The app ID
  app: 1,
  
  metadata: [
    "metadata[]_example",
  ],
};

const data = await apiInstance.appsMetadataDeleteKeys(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined
 **metadata** | **Array&lt;string&gt;** |  | defaults to undefined


### Return type

**App**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;App&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appsMetadataSet**
> App appsMetadataSet()

Replaces the entire metadata.

### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiAppsMetadataSetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiAppsMetadataSetRequest = {
    // The app ID
  app: 1,
  
  setAppMetadataRequest: {
    metadata: {
      "key": null,
    },
  },
};

const data = await apiInstance.appsMetadataSet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setAppMetadataRequest** | **SetAppMetadataRequest**|  |
 **app** | [**number**] | The app ID | defaults to undefined


### Return type

**App**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;App&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **appsMetadataUpdate**
> App appsMetadataUpdate()

Updates existing metadata keys or adds new keys without deleting other metadata.

### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiAppsMetadataUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiAppsMetadataUpdateRequest = {
    // The app ID
  app: 1,
  
  patchAppMetadataRequest: {
    metadata: {
      "key": null,
    },
  },
};

const data = await apiInstance.appsMetadataUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchAppMetadataRequest** | **PatchAppMetadataRequest**|  |
 **app** | [**number**] | The app ID | defaults to undefined


### Return type

**App**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;App&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **binariesMetadataDeleteAll**
> BinariesMetadataSet200Response binariesMetadataDeleteAll()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiBinariesMetadataDeleteAllRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiBinariesMetadataDeleteAllRequest = {
    // The binary ID
  binary: 1,
};

const data = await apiInstance.binariesMetadataDeleteAll(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binary** | [**number**] | The binary ID | defaults to undefined


### Return type

**BinariesMetadataSet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;Binary&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **binariesMetadataDeleteKeys**
> BinariesMetadataSet200Response binariesMetadataDeleteKeys()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiBinariesMetadataDeleteKeysRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiBinariesMetadataDeleteKeysRequest = {
    // The binary ID
  binary: 1,
  
  metadata: [
    "metadata[]_example",
  ],
};

const data = await apiInstance.binariesMetadataDeleteKeys(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binary** | [**number**] | The binary ID | defaults to undefined
 **metadata** | **Array&lt;string&gt;** |  | defaults to undefined


### Return type

**BinariesMetadataSet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;Binary&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **binariesMetadataSet**
> BinariesMetadataSet200Response binariesMetadataSet()

Replaces the entire metadata.

### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiBinariesMetadataSetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiBinariesMetadataSetRequest = {
    // The binary ID
  binary: 1,
  
  setBinaryMetadataRequest: {
    metadata: {
      "key": null,
    },
  },
};

const data = await apiInstance.binariesMetadataSet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setBinaryMetadataRequest** | **SetBinaryMetadataRequest**|  |
 **binary** | [**number**] | The binary ID | defaults to undefined


### Return type

**BinariesMetadataSet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;Binary&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **binariesMetadataUpdate**
> BinariesMetadataSet200Response binariesMetadataUpdate()

Updates existing metadata keys or adds new keys without deleting other metadata.

### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiBinariesMetadataUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiBinariesMetadataUpdateRequest = {
    // The binary ID
  binary: 1,
  
  patchBinaryMetadataRequest: {
    metadata: {
      "key": null,
    },
  },
};

const data = await apiInstance.binariesMetadataUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchBinaryMetadataRequest** | **PatchBinaryMetadataRequest**|  |
 **binary** | [**number**] | The binary ID | defaults to undefined


### Return type

**BinariesMetadataSet200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;Binary&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **checkCapacity**
> AppLocationSettingCapacity checkCapacity(checkCapacityAppLocationSettingRequest)


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiCheckCapacityRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiCheckCapacityRequest = {
    // The app ID
  app: 1,
  
  checkCapacityAppLocationSettingRequest: {
    serverConfigId: 1,
    placement: {
      constraints: {
        city: "city_example",
        cityDisplay: "cityDisplay_example",
        continent: "continent_example",
        country: "country_example",
      },
    },
    password: "password_example",
  },
};

const data = await apiInstance.checkCapacity(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkCapacityAppLocationSettingRequest** | **CheckCapacityAppLocationSettingRequest**|  |
 **app** | [**number**] | The app ID | defaults to undefined


### Return type

**AppLocationSettingCapacity**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;AppLocationSettingCapacity&#x60; |  -  |
**403** | Authorization error |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **checkServerDns**
> Array<DockerServiceDnsReachable> checkServerDns()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiCheckServerDnsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiCheckServerDnsRequest = {
    // The app ID
  app: 1,
    // The docker service ID
  dockerService: 1,
};

const data = await apiInstance.checkServerDns(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined
 **dockerService** | [**number**] | The docker service ID | defaults to undefined


### Return type

**Array<DockerServiceDnsReachable>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of &#x60;DockerServiceDnsReachable&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createApp**
> App createApp(storeAppRequest)


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiCreateAppRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiCreateAppRequest = {
  
  storeAppRequest: {
    name: "name_example",
  },
};

const data = await apiInstance.createApp(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeAppRequest** | **StoreAppRequest**|  |


### Return type

**App**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;App&#x60; |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createAppLocationSetting**
> GetAppLocationSettingById200Response createAppLocationSetting(storeAppLocationSettingRequest)


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiCreateAppLocationSettingRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiCreateAppLocationSettingRequest = {
    // The app ID
  app: 1,
  
  storeAppLocationSettingRequest: {
    name: "name_example",
    serverConfigId: 1,
    numInstances: 1,
    placement: {
      constraints: {
        city: "city_example",
        cityDisplay: "cityDisplay_example",
        continent: "continent_example",
        country: "country_example",
        isProtected: true,
      },
    },
    password: "password_example",
    autoscaling: {
      enabled: true,
      healthEnabled: true,
      healthInitialDelaySeconds: 1,
      healthPeriodSeconds: 1,
      healthFailureThreshold: 1,
      minInstances: 1,
      maxInstances: 1,
      bufferSize: 1,
    },
  },
};

const data = await apiInstance.createAppLocationSetting(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeAppLocationSettingRequest** | **StoreAppLocationSettingRequest**|  |
 **app** | [**number**] | The app ID | defaults to undefined


### Return type

**GetAppLocationSettingById200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;AppLocationSetting&#x60; |  -  |
**403** | Authorization error |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**402** | Payment required |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createBackup**
> void createBackup(createBackupDockerServiceRequest)


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiCreateBackupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiCreateBackupRequest = {
    // The docker service ID
  dockerService: 1,
  
  createBackupDockerServiceRequest: {
    name: "name_example",
  },
};

const data = await apiInstance.createBackup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBackupDockerServiceRequest** | **CreateBackupDockerServiceRequest**|  |
 **dockerService** | [**number**] | The docker service ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**404** | Not found |  -  |
**403** | Authorization error |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**402** | Payment required |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createBinary**
> Binary createBinary(storeBinaryRequest)


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiCreateBinaryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiCreateBinaryRequest = {
    // The app ID
  app: 1,
  
  storeBinaryRequest: {
    name: "name_example",
    version: "version_example",
    type: "dockerImage",
    os: "windows",
    steam: {
      steamAppId: 1,
      branch: "branch_example",
      password: "password_example",
      command: "command_example",
      steamcmdUsername: "steamcmdUsername_example",
      steamcmdPassword: "steamcmdPassword_example",
      headful: true,
      requestLicense: true,
      runtime: "scout",
      additionalPackages: "additionalPackages_example",
      unpublished: true,
    },
    dockerImage: {
      imageName: "imageName_example",
      registryId: 1,
    },
  },
};

const data = await apiInstance.createBinary(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeBinaryRequest** | **StoreBinaryRequest**|  |
 **app** | [**number**] | The app ID | defaults to undefined


### Return type

**Binary**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;Binary&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createDockerRegistry**
> DockerRegistry createDockerRegistry(storeDockerRegistryRequest)


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiCreateDockerRegistryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiCreateDockerRegistryRequest = {
  
  storeDockerRegistryRequest: {
    type: "default",
    name: "name_example",
    url: "url_example",
    instanceUrl: "instanceUrl_example",
    username: "username_example",
    accessToken: "accessToken_example",
    password: "password_example",
    organization: true,
    awsAccessKey: "awsAccessKey_example",
    awsSecretAccessKey: "awsSecretAccessKey_example",
  },
};

const data = await apiInstance.createDockerRegistry(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeDockerRegistryRequest** | **StoreDockerRegistryRequest**|  |


### Return type

**DockerRegistry**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;DockerRegistry&#x60; |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createMinecraftTemplate**
> App createMinecraftTemplate()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiCreateMinecraftTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiCreateMinecraftTemplateRequest = {
  
  storeMinecraftTemplateRequest: {
    appName: "appName_example",
    resourcePackageSlug: "resourcePackageSlug_example",
    placement: {
      constraints: {
        city: "city_example",
        cityDisplay: "cityDisplay_example",
        continent: "continent_example",
        country: "country_example",
        isProtected: true,
      },
    },
    password: "password_example",
  },
};

const data = await apiInstance.createMinecraftTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeMinecraftTemplateRequest** | **StoreMinecraftTemplateRequest**|  |


### Return type

**App**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;App&#x60; |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createOpenClawTemplate**
> TemplateAppResult createOpenClawTemplate()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiCreateOpenClawTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiCreateOpenClawTemplateRequest = {
  
  storeOpenClawTemplateRequest: {
    app: {
      name: "name_example",
    },
    serverConfig: {
      resourcePackageSlug: "resourcePackageSlug_example",
      env: [
        {
          type: "static",
          key: "key_example",
          value: "value_example",
          variable: "variable_example",
        },
      ],
    },
    appLocationSetting: {
      placement: {
        constraints: {
          city: "city_example",
          cityDisplay: "cityDisplay_example",
          continent: "continent_example",
          country: "country_example",
          isProtected: true,
        },
      },
      password: "password_example",
    },
    payment: {
      projectId: "projectId_example",
    },
  },
};

const data = await apiInstance.createOpenClawTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeOpenClawTemplateRequest** | **StoreOpenClawTemplateRequest**|  |


### Return type

**TemplateAppResult**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;TemplateAppResult&#x60; |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |
**404** | Payment project not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPalworldTemplate**
> App createPalworldTemplate()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiCreatePalworldTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiCreatePalworldTemplateRequest = {
  
  storePalworldTemplateRequest: {
    appName: "appName_example",
    resourcePackageSlug: "resourcePackageSlug_example",
    placement: {
      constraints: {
        city: "city_example",
        cityDisplay: "cityDisplay_example",
        continent: "continent_example",
        country: "country_example",
        isProtected: true,
      },
    },
    password: "password_example",
  },
};

const data = await apiInstance.createPalworldTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storePalworldTemplateRequest** | **StorePalworldTemplateRequest**|  |


### Return type

**App**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;App&#x60; |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createServerConfig**
> ServerConfig createServerConfig(storeServerConfigRequest)


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiCreateServerConfigRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiCreateServerConfigRequest = {
    // The app ID
  app: 1,
  
  storeServerConfigRequest: {
    name: "name_example",
    args: "args_example",
    command: "command_example",
    notes: "notes_example",
    binaryId: 1,
    resourcePackageSlug: "resourcePackageSlug_example",
    dnsServiceEnabled: true,
    configFiles: [
      {
        target: "target_example",
        content: "content_example",
      },
    ],
    secretFiles: [
      {
        target: "target_example",
        content: "content_example",
      },
    ],
    restartPolicy: {
      condition: "none",
    },
    env: [
      {
        type: "static",
        key: "key_example",
        value: "value_example",
        variable: "variable_example",
      },
    ],
    mounts: [
      {
        target: "target_example",
        readOnly: true,
      },
    ],
    ports: [
      {
        name: "name_example",
        protocols: [
          "tcp",
        ],
        targetPort: 1,
        dnsMode: "dns",
        dnsPrivate: true,
      },
    ],
  },
};

const data = await apiInstance.createServerConfig(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeServerConfigRequest** | **StoreServerConfigRequest**|  |
 **app** | [**number**] | The app ID | defaults to undefined


### Return type

**ServerConfig**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;ServerConfig&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteApp**
> void deleteApp()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiDeleteAppRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiDeleteAppRequest = {
    // The app ID
  app: 1,
};

const data = await apiInstance.deleteApp(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAppLocationSetting**
> void deleteAppLocationSetting()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiDeleteAppLocationSettingRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiDeleteAppLocationSettingRequest = {
    // The app location setting ID
  appLocationSetting: 1,
};

const data = await apiInstance.deleteAppLocationSetting(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appLocationSetting** | [**number**] | The app location setting ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteBinary**
> void deleteBinary()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiDeleteBinaryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiDeleteBinaryRequest = {
    // The binary ID
  binary: 1,
};

const data = await apiInstance.deleteBinary(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binary** | [**number**] | The binary ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDockerRegistry**
> void deleteDockerRegistry()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiDeleteDockerRegistryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiDeleteDockerRegistryRequest = {
    // The docker registry ID
  dockerRegistry: 1,
};

const data = await apiInstance.deleteDockerRegistry(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerRegistry** | [**number**] | The docker registry ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteServerConfig**
> void deleteServerConfig()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiDeleteServerConfigRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiDeleteServerConfigRequest = {
    // The server config ID
  serverConfig: 1,
};

const data = await apiInstance.deleteServerConfig(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverConfig** | [**number**] | The server config ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteUnusedApps**
> void deleteUnusedApps()


### Example


```typescript
import { createConfiguration, AppApi } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request = {};

const data = await apiInstance.deleteUnusedApps(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteUnusedBinaries**
> void deleteUnusedBinaries()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiDeleteUnusedBinariesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiDeleteUnusedBinariesRequest = {
    // The app ID
  app: 1,
};

const data = await apiInstance.deleteUnusedBinaries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteUnusedServerConfigs**
> void deleteUnusedServerConfigs()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiDeleteUnusedServerConfigsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiDeleteUnusedServerConfigsRequest = {
    // The app ID
  app: 1,
};

const data = await apiInstance.deleteUnusedServerConfigs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dockerRegistriesMetadataDeleteAll**
> DockerRegistry dockerRegistriesMetadataDeleteAll()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiDockerRegistriesMetadataDeleteAllRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiDockerRegistriesMetadataDeleteAllRequest = {
    // The docker registry ID
  dockerRegistry: 1,
};

const data = await apiInstance.dockerRegistriesMetadataDeleteAll(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerRegistry** | [**number**] | The docker registry ID | defaults to undefined


### Return type

**DockerRegistry**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;DockerRegistry&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dockerRegistriesMetadataDeleteKeys**
> DockerRegistry dockerRegistriesMetadataDeleteKeys()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiDockerRegistriesMetadataDeleteKeysRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiDockerRegistriesMetadataDeleteKeysRequest = {
    // The docker registry ID
  dockerRegistry: 1,
  
  metadata: [
    "metadata[]_example",
  ],
};

const data = await apiInstance.dockerRegistriesMetadataDeleteKeys(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerRegistry** | [**number**] | The docker registry ID | defaults to undefined
 **metadata** | **Array&lt;string&gt;** |  | defaults to undefined


### Return type

**DockerRegistry**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;DockerRegistry&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dockerRegistriesMetadataSet**
> DockerRegistry dockerRegistriesMetadataSet()

Replaces the entire metadata.

### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiDockerRegistriesMetadataSetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiDockerRegistriesMetadataSetRequest = {
    // The docker registry ID
  dockerRegistry: 1,
  
  setDockerRegistryMetadataRequest: {
    metadata: {
      "key": null,
    },
  },
};

const data = await apiInstance.dockerRegistriesMetadataSet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setDockerRegistryMetadataRequest** | **SetDockerRegistryMetadataRequest**|  |
 **dockerRegistry** | [**number**] | The docker registry ID | defaults to undefined


### Return type

**DockerRegistry**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;DockerRegistry&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dockerRegistriesMetadataUpdate**
> DockerRegistry dockerRegistriesMetadataUpdate()

Updates existing metadata keys or adds new keys without deleting other metadata.

### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiDockerRegistriesMetadataUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiDockerRegistriesMetadataUpdateRequest = {
    // The docker registry ID
  dockerRegistry: 1,
  
  patchDockerRegistryMetadataRequest: {
    metadata: {
      "key": null,
    },
  },
};

const data = await apiInstance.dockerRegistriesMetadataUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchDockerRegistryMetadataRequest** | **PatchDockerRegistryMetadataRequest**|  |
 **dockerRegistry** | [**number**] | The docker registry ID | defaults to undefined


### Return type

**DockerRegistry**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;DockerRegistry&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dockerServicesAutoscalingAllocate**
> void dockerServicesAutoscalingAllocate()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiDockerServicesAutoscalingAllocateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiDockerServicesAutoscalingAllocateRequest = {
    // The docker service ID
  dockerService: 1,
};

const data = await apiInstance.dockerServicesAutoscalingAllocate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |
**409** | Autoscaling is not enabled for this service. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dockerServicesAutoscalingHealth**
> void dockerServicesAutoscalingHealth()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiDockerServicesAutoscalingHealthRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiDockerServicesAutoscalingHealthRequest = {
    // The docker service ID
  dockerService: 1,
};

const data = await apiInstance.dockerServicesAutoscalingHealth(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |
**409** | Autoscaling is not enabled for this service. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dockerServicesAutoscalingReady**
> void dockerServicesAutoscalingReady()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiDockerServicesAutoscalingReadyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiDockerServicesAutoscalingReadyRequest = {
    // The docker service ID
  dockerService: 1,
};

const data = await apiInstance.dockerServicesAutoscalingReady(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |
**409** | Autoscaling is not enabled for this service. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dockerServicesAutoscalingShutdown**
> void dockerServicesAutoscalingShutdown()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiDockerServicesAutoscalingShutdownRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiDockerServicesAutoscalingShutdownRequest = {
    // The docker service ID
  dockerService: 1,
};

const data = await apiInstance.dockerServicesAutoscalingShutdown(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |
**409** | Autoscaling is not enabled for this service. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dockerServicesMetadataDeleteAll**
> Server dockerServicesMetadataDeleteAll()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiDockerServicesMetadataDeleteAllRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiDockerServicesMetadataDeleteAllRequest = {
    // The docker service ID
  dockerService: 1,
};

const data = await apiInstance.dockerServicesMetadataDeleteAll(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined


### Return type

**Server**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;Server&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dockerServicesMetadataDeleteKeys**
> Server dockerServicesMetadataDeleteKeys()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiDockerServicesMetadataDeleteKeysRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiDockerServicesMetadataDeleteKeysRequest = {
    // The docker service ID
  dockerService: 1,
  
  metadata: [
    "metadata[]_example",
  ],
};

const data = await apiInstance.dockerServicesMetadataDeleteKeys(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined
 **metadata** | **Array&lt;string&gt;** |  | defaults to undefined


### Return type

**Server**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;Server&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dockerServicesMetadataSet**
> Server dockerServicesMetadataSet()

Replaces the entire metadata set with only the values provided in the request.

### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiDockerServicesMetadataSetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiDockerServicesMetadataSetRequest = {
    // The docker service ID
  dockerService: 1,
  
  setMetadataRequest: {
    metadata: {
      "key": null,
    },
  },
};

const data = await apiInstance.dockerServicesMetadataSet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setMetadataRequest** | **SetMetadataRequest**|  |
 **dockerService** | [**number**] | The docker service ID | defaults to undefined


### Return type

**Server**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;Server&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dockerServicesMetadataUpdate**
> Server dockerServicesMetadataUpdate()

Updates existing metadata keys or adds new keys without deleting metadata that is not mentioned.

### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiDockerServicesMetadataUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiDockerServicesMetadataUpdateRequest = {
    // The docker service ID
  dockerService: 1,
  
  patchMetadataRequest: {
    metadata: {
      "key": null,
    },
  },
};

const data = await apiInstance.dockerServicesMetadataUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchMetadataRequest** | **PatchMetadataRequest**|  |
 **dockerService** | [**number**] | The docker service ID | defaults to undefined


### Return type

**Server**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;Server&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **downloadServerLogs**
> ServiceLogs downloadServerLogs()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiDownloadServerLogsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiDownloadServerLogsRequest = {
    // The docker service ID
  dockerService: 1,
    // Only return logs filtered by stream source like stdout or stderr. (optional)
  streamSource: "stdout",
};

const data = await apiInstance.downloadServerLogs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined
 **streamSource** | [**&#39;stdout&#39; | &#39;stderr&#39;**]**Array<&#39;stdout&#39; &#124; &#39;stderr&#39;>** | Only return logs filtered by stream source like stdout or stderr. | (optional) defaults to undefined


### Return type

**ServiceLogs**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;ServiceLogs&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAppById**
> App getAppById()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetAppByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetAppByIdRequest = {
    // The app ID
  app: 1,
};

const data = await apiInstance.getAppById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined


### Return type

**App**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;App&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAppLocationSettingById**
> GetAppLocationSettingById200Response getAppLocationSettingById()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetAppLocationSettingByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetAppLocationSettingByIdRequest = {
    // The app location setting ID
  appLocationSetting: 1,
};

const data = await apiInstance.getAppLocationSettingById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appLocationSetting** | [**number**] | The app location setting ID | defaults to undefined


### Return type

**GetAppLocationSettingById200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;AppLocationSetting&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAppLocationSettings**
> GetAppLocationSettings200Response getAppLocationSettings()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetAppLocationSettingsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetAppLocationSettingsRequest = {
    // The app ID
  app: 1,
    // The number of items to be shown per page. (optional)
  perPage: 1,
    // Specifies the page number to retrieve in the paginated results. (optional)
  page: 1,
    // Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  ``` sort[]=id sort[]=-name ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=id&sort[]=-name ``` (optional)
  sort: [
    "-id",
  ],
    // Filter by id. (optional)
  filterId: 1,
    // Filter by name. (optional)
  filterName: "filter[name]_example",
    // Filter by name using partial matching. For example, \"ann\" matches \"Joanna\" or \"Annie\". (optional)
  filterNamePartial: "filter[namePartial]_example",
    // Filter by ServerConfig ID. (optional)
  filterServerConfigId: 1,
    // Filter by number of instances. (optional)
  filterNumInstances: 1,
    // Filter by status. (optional)
  filterStatus: "filter[status]_example",
    // Filter by maintenance. (optional)
  filterMaintenance: true,
    // Filter by location city. (optional)
  filterLocationCity: "filter[locationCity]_example",
    // Filter by location city display name. (optional)
  filterLocationCityDisplay: "filter[locationCityDisplay]_example",
    // Filter by location continent. (optional)
  filterLocationContinent: "filter[locationContinent]_example",
    // Filter by location country. (optional)
  filterLocationCountry: "filter[locationCountry]_example",
    // Filter by ServerConfig name. (optional)
  filterServerConfigName: "filter[serverConfigName]_example",
    // Filter by ServerConfig command. (optional)
  filterServerConfigCommand: "filter[serverConfigCommand]_example",
    // Filter by ServerConfig arguments. (optional)
  filterServerConfigArgs: "filter[serverConfigArgs]_example",
    // Filter by ServerConfig notes. (optional)
  filterServerConfigNotes: "filter[serverConfigNotes]_example",
    // Filter by ServerConfig status. (optional)
  filterServerConfigStatus: "filter[serverConfigStatus]_example",
    // Filter by ServerConfig maintenance. (optional)
  filterServerConfigMaintenance: true,
    // Filter by ServerConfig resource package slug. (optional)
  filterServerConfigResourcePackageSlug: "filter[serverConfigResourcePackageSlug]_example",
    // Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where `idle` is false (boolean): ``` filter[metadata]=idle=false ```  To filter where `string` is exactly \"a\": ``` filter[metadata]=string=\"a\" ```  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where `score` is null: ``` filter[metadata]=score=null ```  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where `difficulty` within `gameSettings.survival` is exactly \"hardcore\": ``` filter[metadata]=gameSettings.survival.difficulty=\"hardcore\" ```  To filter for a nested field with a native `null` value, leave the null unquoted: ``` filter[metadata]=gameSettings.stats.score=null ```  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): ``` filter[metadata]=players=\"foobar\" filter[metadata]=player_ids=37 filter[metadata]=array=true filter[metadata]=array=null ```  Works for nested arrays as well: ``` filter[metadata]=gameData.players=\"foobar\" ```  **Multiple Filters:** Combine multiple filters by separating them with commas: ``` filter[metadata]=idle=false,max_players=20,gameSettings.survival.difficulty=\"hardcore\" ``` (optional)
  filterMetadata: "filter[metadata]_example",
};

const data = await apiInstance.getAppLocationSettings(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined
 **perPage** | [**number**] | The number of items to be shown per page. | (optional) defaults to undefined
 **page** | [**number**] | Specifies the page number to retrieve in the paginated results. | (optional) defaults to undefined
 **sort** | **Array<&#39;-id&#39; &#124; &#39;id&#39; &#124; &#39;-name&#39; &#124; &#39;name&#39; &#124; &#39;-serverConfigId&#39; &#124; &#39;serverConfigId&#39; &#124; &#39;-numInstances&#39; &#124; &#39;numInstances&#39; &#124; &#39;-status&#39; &#124; &#39;status&#39; &#124; &#39;-statusMessage&#39; &#124; &#39;statusMessage&#39; &#124; &#39;-maintenance&#39; &#124; &#39;maintenance&#39; &#124; &#39;-locationCity&#39; &#124; &#39;locationCity&#39; &#124; &#39;-locationCityDisplay&#39; &#124; &#39;locationCityDisplay&#39; &#124; &#39;-locationContinent&#39; &#124; &#39;locationContinent&#39; &#124; &#39;-locationCountry&#39; &#124; &#39;locationCountry&#39; &#124; &#39;-serverConfigId&#39; &#124; &#39;serverConfigId&#39; &#124; &#39;-serverConfigName&#39; &#124; &#39;serverConfigName&#39; &#124; &#39;-serverConfigCommand&#39; &#124; &#39;serverConfigCommand&#39; &#124; &#39;-serverConfigArgs&#39; &#124; &#39;serverConfigArgs&#39; &#124; &#39;-serverConfigNotes&#39; &#124; &#39;serverConfigNotes&#39; &#124; &#39;-serverConfigStatus&#39; &#124; &#39;serverConfigStatus&#39; &#124; &#39;-serverConfigMaintenance&#39; &#124; &#39;serverConfigMaintenance&#39; &#124; &#39;-serverConfigResourcePackageSlug&#39; &#124; &#39;serverConfigResourcePackageSlug&#39;>** | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | (optional) defaults to undefined
 **filterId** | [**number**] | Filter by id. | (optional) defaults to undefined
 **filterName** | [**string**] | Filter by name. | (optional) defaults to undefined
 **filterNamePartial** | [**string**] | Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | (optional) defaults to undefined
 **filterServerConfigId** | [**number**] | Filter by ServerConfig ID. | (optional) defaults to undefined
 **filterNumInstances** | [**number**] | Filter by number of instances. | (optional) defaults to undefined
 **filterStatus** | [**string**] | Filter by status. | (optional) defaults to undefined
 **filterMaintenance** | [**boolean**] | Filter by maintenance. | (optional) defaults to undefined
 **filterLocationCity** | [**string**] | Filter by location city. | (optional) defaults to undefined
 **filterLocationCityDisplay** | [**string**] | Filter by location city display name. | (optional) defaults to undefined
 **filterLocationContinent** | [**string**] | Filter by location continent. | (optional) defaults to undefined
 **filterLocationCountry** | [**string**] | Filter by location country. | (optional) defaults to undefined
 **filterServerConfigName** | [**string**] | Filter by ServerConfig name. | (optional) defaults to undefined
 **filterServerConfigCommand** | [**string**] | Filter by ServerConfig command. | (optional) defaults to undefined
 **filterServerConfigArgs** | [**string**] | Filter by ServerConfig arguments. | (optional) defaults to undefined
 **filterServerConfigNotes** | [**string**] | Filter by ServerConfig notes. | (optional) defaults to undefined
 **filterServerConfigStatus** | [**string**] | Filter by ServerConfig status. | (optional) defaults to undefined
 **filterServerConfigMaintenance** | [**boolean**] | Filter by ServerConfig maintenance. | (optional) defaults to undefined
 **filterServerConfigResourcePackageSlug** | [**string**] | Filter by ServerConfig resource package slug. | (optional) defaults to undefined
 **filterMetadata** | [**string**] | Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60; | (optional) defaults to undefined


### Return type

**GetAppLocationSettings200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated set of &#x60;AppLocationSetting&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAppWallets**
> GetAppWallets200Response getAppWallets()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetAppWalletsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetAppWalletsRequest = {
    // The app ID
  app: 1,
    // The number of items to be shown per page. (optional)
  perPage: 1,
    // Specifies the page number to retrieve in the paginated results. (optional)
  page: 1,
    // Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  ``` sort[]=id sort[]=-name ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=id&sort[]=-name ``` (optional)
  sort: [
    "-id",
  ],
    // Filter by id. (optional)
  filterId: 1,
    // Filter by balance. (optional)
  filterBalance: 3.14,
};

const data = await apiInstance.getAppWallets(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined
 **perPage** | [**number**] | The number of items to be shown per page. | (optional) defaults to undefined
 **page** | [**number**] | Specifies the page number to retrieve in the paginated results. | (optional) defaults to undefined
 **sort** | **Array<&#39;-id&#39; &#124; &#39;id&#39; &#124; &#39;-balance&#39; &#124; &#39;balance&#39;>** | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | (optional) defaults to undefined
 **filterId** | [**number**] | Filter by id. | (optional) defaults to undefined
 **filterBalance** | [**number**] | Filter by balance. | (optional) defaults to undefined


### Return type

**GetAppWallets200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated set of &#x60;Wallet&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApps**
> GetApps200Response getApps()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetAppsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetAppsRequest = {
    // The number of items to be shown per page. (optional)
  perPage: 1,
    // Specifies the page number to retrieve in the paginated results. (optional)
  page: 1,
    // Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  ``` sort[]=id sort[]=-name ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=id&sort[]=-name ``` (optional)
  sort: [
    "-id",
  ],
    // Filter by id. (optional)
  filterId: 1,
    // Filter by name. (optional)
  filterName: "filter[name]_example",
    // Filter by name using partial matching. For example, \"ann\" matches \"Joanna\" or \"Annie\". (optional)
  filterNamePartial: "filter[namePartial]_example",
    // Filter by in use flag. (optional)
  filterInUse: true,
    // Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where `idle` is false (boolean): ``` filter[metadata]=idle=false ```  To filter where `string` is exactly \"a\": ``` filter[metadata]=string=\"a\" ```  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where `score` is null: ``` filter[metadata]=score=null ```  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where `difficulty` within `gameSettings.survival` is exactly \"hardcore\": ``` filter[metadata]=gameSettings.survival.difficulty=\"hardcore\" ```  To filter for a nested field with a native `null` value, leave the null unquoted: ``` filter[metadata]=gameSettings.stats.score=null ```  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): ``` filter[metadata]=players=\"foobar\" filter[metadata]=player_ids=37 filter[metadata]=array=true filter[metadata]=array=null ```  Works for nested arrays as well: ``` filter[metadata]=gameData.players=\"foobar\" ```  **Multiple Filters:** Combine multiple filters by separating them with commas: ``` filter[metadata]=idle=false,max_players=20,gameSettings.survival.difficulty=\"hardcore\" ``` (optional)
  filterMetadata: "filter[metadata]_example",
};

const data = await apiInstance.getApps(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | [**number**] | The number of items to be shown per page. | (optional) defaults to undefined
 **page** | [**number**] | Specifies the page number to retrieve in the paginated results. | (optional) defaults to undefined
 **sort** | **Array<&#39;-id&#39; &#124; &#39;id&#39; &#124; &#39;-name&#39; &#124; &#39;name&#39; &#124; &#39;-inUse&#39; &#124; &#39;inUse&#39;>** | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | (optional) defaults to undefined
 **filterId** | [**number**] | Filter by id. | (optional) defaults to undefined
 **filterName** | [**string**] | Filter by name. | (optional) defaults to undefined
 **filterNamePartial** | [**string**] | Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | (optional) defaults to undefined
 **filterInUse** | [**boolean**] | Filter by in use flag. | (optional) defaults to undefined
 **filterMetadata** | [**string**] | Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60; | (optional) defaults to undefined


### Return type

**GetApps200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated set of &#x60;App&#x60; |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAuthToken**
> Auth getAuthToken(authRequest)

Authenticates the user based on the user\'s email, password, and session ID. If the user is authenticated successfully, it returns the user\'s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.

### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetAuthTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetAuthTokenRequest = {
  
  authRequest: {
    email: "email_example",
    password: "password_example",
    sid: "sid_example",
  },
};

const data = await apiInstance.getAuthToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authRequest** | **AuthRequest**|  |


### Return type

**Auth**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;Auth&#x60; |  -  |
**404** | Not found |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAuthTokenViaFsid**
> Auth getAuthTokenViaFsid(authFsidRequest)

Authenticates the user based on the Fusion Session ID (fsid). If the user is authenticated successfully, it returns the user\'s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.

### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetAuthTokenViaFsidRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetAuthTokenViaFsidRequest = {
  
  authFsidRequest: {
    fsid: "fsid_example",
  },
};

const data = await apiInstance.getAuthTokenViaFsid(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authFsidRequest** | **AuthFsidRequest**|  |


### Return type

**Auth**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;Auth&#x60; |  -  |
**403** | An error |  -  |
**422** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBackups**
> GetBackups200Response getBackups()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetBackupsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetBackupsRequest = {
    // The docker service ID
  dockerService: 1,
    // The number of items to be shown per page. (optional)
  perPage: 1,
    // Specifies the page number to retrieve in the paginated results. (optional)
  page: 1,
    // Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** For example, to sort by name in ascending order or by archiveName in descending order:  ``` sort[]=name sort[]=-archiveName ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=name&sort[]=-archiveName ``` (optional)
  sort: [
    "-name",
  ],
    // Filter by name. (optional)
  filterName: "filter[name]_example",
    // Filter by archive name. (optional)
  filterArchiveName: "filter[archiveName]_example",
};

const data = await apiInstance.getBackups(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined
 **perPage** | [**number**] | The number of items to be shown per page. | (optional) defaults to undefined
 **page** | [**number**] | Specifies the page number to retrieve in the paginated results. | (optional) defaults to undefined
 **sort** | **Array<&#39;-name&#39; &#124; &#39;name&#39; &#124; &#39;-archiveName&#39; &#124; &#39;archiveName&#39; &#124; &#39;-createdAt&#39; &#124; &#39;createdAt&#39; &#124; &#39;-restoredAt&#39; &#124; &#39;restoredAt&#39;>** | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** For example, to sort by name in ascending order or by archiveName in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;name sort[]&#x3D;-archiveName &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;name&amp;sort[]&#x3D;-archiveName &#x60;&#x60;&#x60; | (optional) defaults to undefined
 **filterName** | [**string**] | Filter by name. | (optional) defaults to undefined
 **filterArchiveName** | [**string**] | Filter by archive name. | (optional) defaults to undefined


### Return type

**GetBackups200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated set of &#x60;DockerBackup&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBinaries**
> GetBinaries200Response getBinaries()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetBinariesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetBinariesRequest = {
    // The app ID
  app: 1,
    // The number of items to be shown per page. (optional)
  perPage: 1,
    // Specifies the page number to retrieve in the paginated results. (optional)
  page: 1,
    // Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  ``` sort[]=id sort[]=-name ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=id&sort[]=-name ``` (optional)
  sort: [
    "-id",
  ],
    // Filter by name. (optional)
  filterName: "filter[name]_example",
    // Filter by name using partial matching. For example, \"ann\" matches \"Joanna\" or \"Annie\". (optional)
  filterNamePartial: "filter[namePartial]_example",
    // Filter by version. (optional)
  filterVersion: "filter[version]_example",
    // Filter by type. (optional)
  filterType: "filter[type]_example",
    // Filter by operating system. (optional)
  filterOs: "filter[os]_example",
    // Filter by maintenance status. (optional)
  filterMaintenance: true,
    // Filter by status. (optional)
  filterStatus: "filter[status]_example",
    // Filter by in use flag. (optional)
  filterInUse: true,
    // Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where `idle` is false (boolean): ``` filter[metadata]=idle=false ```  To filter where `string` is exactly \"a\": ``` filter[metadata]=string=\"a\" ```  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where `score` is null: ``` filter[metadata]=score=null ```  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where `difficulty` within `gameSettings.survival` is exactly \"hardcore\": ``` filter[metadata]=gameSettings.survival.difficulty=\"hardcore\" ```  To filter for a nested field with a native `null` value, leave the null unquoted: ``` filter[metadata]=gameSettings.stats.score=null ```  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): ``` filter[metadata]=players=\"foobar\" filter[metadata]=player_ids=37 filter[metadata]=array=true filter[metadata]=array=null ```  Works for nested arrays as well: ``` filter[metadata]=gameData.players=\"foobar\" ```  **Multiple Filters:** Combine multiple filters by separating them with commas: ``` filter[metadata]=idle=false,max_players=20,gameSettings.survival.difficulty=\"hardcore\" ``` (optional)
  filterMetadata: "filter[metadata]_example",
};

const data = await apiInstance.getBinaries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined
 **perPage** | [**number**] | The number of items to be shown per page. | (optional) defaults to undefined
 **page** | [**number**] | Specifies the page number to retrieve in the paginated results. | (optional) defaults to undefined
 **sort** | **Array<&#39;-id&#39; &#124; &#39;id&#39; &#124; &#39;-name&#39; &#124; &#39;name&#39; &#124; &#39;-version&#39; &#124; &#39;version&#39; &#124; &#39;-type&#39; &#124; &#39;type&#39; &#124; &#39;-os&#39; &#124; &#39;os&#39; &#124; &#39;-status&#39; &#124; &#39;status&#39; &#124; &#39;-statusMessage&#39; &#124; &#39;statusMessage&#39; &#124; &#39;-progress&#39; &#124; &#39;progress&#39; &#124; &#39;-progressMessage&#39; &#124; &#39;progressMessage&#39; &#124; &#39;-inUse&#39; &#124; &#39;inUse&#39;>** | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | (optional) defaults to undefined
 **filterName** | [**string**] | Filter by name. | (optional) defaults to undefined
 **filterNamePartial** | [**string**] | Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | (optional) defaults to undefined
 **filterVersion** | [**string**] | Filter by version. | (optional) defaults to undefined
 **filterType** | [**string**] | Filter by type. | (optional) defaults to undefined
 **filterOs** | [**string**] | Filter by operating system. | (optional) defaults to undefined
 **filterMaintenance** | [**boolean**] | Filter by maintenance status. | (optional) defaults to undefined
 **filterStatus** | [**string**] | Filter by status. | (optional) defaults to undefined
 **filterInUse** | [**boolean**] | Filter by in use flag. | (optional) defaults to undefined
 **filterMetadata** | [**string**] | Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60; | (optional) defaults to undefined


### Return type

**GetBinaries200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated set of &#x60;Binary&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBinaryById**
> Binary getBinaryById()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetBinaryByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetBinaryByIdRequest = {
    // The binary ID
  binary: 1,
};

const data = await apiInstance.getBinaryById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binary** | [**number**] | The binary ID | defaults to undefined


### Return type

**Binary**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;Binary&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDockerRegistries**
> GetDockerRegistries200Response getDockerRegistries()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetDockerRegistriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetDockerRegistriesRequest = {
    // The number of items to be shown per page. (optional)
  perPage: 1,
    // Specifies the page number to retrieve in the paginated results. (optional)
  page: 1,
    // Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  ``` sort[]=id sort[]=-name ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=id&sort[]=-name ``` (optional)
  sort: [
    "-id",
  ],
    // Filter by id. (optional)
  filterId: 1,
    // Filter by type. (optional)
  filterType: "filter[type]_example",
    // Filter by name. (optional)
  filterName: "filter[name]_example",
    // Filter by name using partial matching. For example, \"ann\" matches \"Joanna\" or \"Annie\". (optional)
  filterNamePartial: "filter[namePartial]_example",
    // Filter by url. (optional)
  filterUrl: "filter[url]_example",
    // Filter by organization. (optional)
  filterOrganization: "filter[organization]_example",
    // Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where `idle` is false (boolean): ``` filter[metadata]=idle=false ```  To filter where `string` is exactly \"a\": ``` filter[metadata]=string=\"a\" ```  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where `score` is null: ``` filter[metadata]=score=null ```  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where `difficulty` within `gameSettings.survival` is exactly \"hardcore\": ``` filter[metadata]=gameSettings.survival.difficulty=\"hardcore\" ```  To filter for a nested field with a native `null` value, leave the null unquoted: ``` filter[metadata]=gameSettings.stats.score=null ```  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): ``` filter[metadata]=players=\"foobar\" filter[metadata]=player_ids=37 filter[metadata]=array=true filter[metadata]=array=null ```  Works for nested arrays as well: ``` filter[metadata]=gameData.players=\"foobar\" ```  **Multiple Filters:** Combine multiple filters by separating them with commas: ``` filter[metadata]=idle=false,max_players=20,gameSettings.survival.difficulty=\"hardcore\" ``` (optional)
  filterMetadata: "filter[metadata]_example",
};

const data = await apiInstance.getDockerRegistries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | [**number**] | The number of items to be shown per page. | (optional) defaults to undefined
 **page** | [**number**] | Specifies the page number to retrieve in the paginated results. | (optional) defaults to undefined
 **sort** | **Array<&#39;-id&#39; &#124; &#39;id&#39; &#124; &#39;-type&#39; &#124; &#39;type&#39; &#124; &#39;-name&#39; &#124; &#39;name&#39; &#124; &#39;-url&#39; &#124; &#39;url&#39; &#124; &#39;-organization&#39; &#124; &#39;organization&#39;>** | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | (optional) defaults to undefined
 **filterId** | [**number**] | Filter by id. | (optional) defaults to undefined
 **filterType** | [**string**] | Filter by type. | (optional) defaults to undefined
 **filterName** | [**string**] | Filter by name. | (optional) defaults to undefined
 **filterNamePartial** | [**string**] | Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | (optional) defaults to undefined
 **filterUrl** | [**string**] | Filter by url. | (optional) defaults to undefined
 **filterOrganization** | [**string**] | Filter by organization. | (optional) defaults to undefined
 **filterMetadata** | [**string**] | Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60; | (optional) defaults to undefined


### Return type

**GetDockerRegistries200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated set of &#x60;DockerRegistry&#x60; |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDockerRegistryById**
> DockerRegistry getDockerRegistryById()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetDockerRegistryByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetDockerRegistryByIdRequest = {
    // The docker registry ID
  dockerRegistry: 1,
};

const data = await apiInstance.getDockerRegistryById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerRegistry** | [**number**] | The docker registry ID | defaults to undefined


### Return type

**DockerRegistry**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;DockerRegistry&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLatestBackup**
> Backup getLatestBackup()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetLatestBackupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetLatestBackupRequest = {
    // The docker service ID
  dockerService: 1,
};

const data = await apiInstance.getLatestBackup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined


### Return type

**Backup**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;Backup&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLocations**
> GetLocations200Response getLocations()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetLocationsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetLocationsRequest = {
    // The number of items to be shown per page. (optional)
  perPage: 1,
    // Specifies the page number to retrieve in the paginated results. (optional)
  page: 1,
};

const data = await apiInstance.getLocations(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | [**number**] | The number of items to be shown per page. | (optional) defaults to undefined
 **page** | [**number**] | Specifies the page number to retrieve in the paginated results. | (optional) defaults to undefined


### Return type

**GetLocations200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated set of &#x60;LocationIndex&#x60; |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getResourcePackageById**
> ResourcePackage getResourcePackageById()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetResourcePackageByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetResourcePackageByIdRequest = {
    // The resource package ID
  resourcePackage: 1,
};

const data = await apiInstance.getResourcePackageById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourcePackage** | [**number**] | The resource package ID | defaults to undefined


### Return type

**ResourcePackage**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;Package&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getResourcePackages**
> GetResourcePackages200Response getResourcePackages()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetResourcePackagesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetResourcePackagesRequest = {
    // The number of items to be shown per page. (optional)
  perPage: 1,
    // Specifies the page number to retrieve in the paginated results. (optional)
  page: 1,
    // Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  ``` sort[]=id sort[]=-name ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=id&sort[]=-name ``` (optional)
  sort: [
    "-id",
  ],
    // Filter by id. (optional)
  filterId: 1,
    // Filter by name. (optional)
  filterName: "filter[name]_example",
    // Filter by name using partial matching. For example, \"ann\" matches \"Joanna\" or \"Annie\". (optional)
  filterNamePartial: "filter[namePartial]_example",
    // Filter by slug. (optional)
  filterSlug: "filter[slug]_example",
    // Filter by type. (optional)
  filterType: "filter[type]_example",
    // Filter by CPU limit. Maps to the `cpu_limit` column. (optional)
  filterCpuLimit: 1,
    // Filter by memory limit in MiB. Maps to the `memory_limit_mebibytes` column. (optional)
  filterMemoryLimitMiB: 1,
};

const data = await apiInstance.getResourcePackages(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | [**number**] | The number of items to be shown per page. | (optional) defaults to undefined
 **page** | [**number**] | Specifies the page number to retrieve in the paginated results. | (optional) defaults to undefined
 **sort** | **Array<&#39;-id&#39; &#124; &#39;id&#39; &#124; &#39;-name&#39; &#124; &#39;name&#39; &#124; &#39;-slug&#39; &#124; &#39;slug&#39; &#124; &#39;-type&#39; &#124; &#39;type&#39; &#124; &#39;-cpuLimit&#39; &#124; &#39;cpuLimit&#39; &#124; &#39;-memoryLimitMiB&#39; &#124; &#39;memoryLimitMiB&#39;>** | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | (optional) defaults to undefined
 **filterId** | [**number**] | Filter by id. | (optional) defaults to undefined
 **filterName** | [**string**] | Filter by name. | (optional) defaults to undefined
 **filterNamePartial** | [**string**] | Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | (optional) defaults to undefined
 **filterSlug** | [**string**] | Filter by slug. | (optional) defaults to undefined
 **filterType** | [**string**] | Filter by type. | (optional) defaults to undefined
 **filterCpuLimit** | [**number**] | Filter by CPU limit. Maps to the &#x60;cpu_limit&#x60; column. | (optional) defaults to undefined
 **filterMemoryLimitMiB** | [**number**] | Filter by memory limit in MiB. Maps to the &#x60;memory_limit_mebibytes&#x60; column. | (optional) defaults to undefined


### Return type

**GetResourcePackages200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated set of &#x60;Package&#x60; |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getServerBackupDownloadUrl**
> BackupDownload getServerBackupDownloadUrl()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetServerBackupDownloadUrlRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetServerBackupDownloadUrlRequest = {
    // The docker service ID
  dockerService: 1,
};

const data = await apiInstance.getServerBackupDownloadUrl(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined


### Return type

**BackupDownload**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;BackupDownload&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getServerById**
> Server getServerById()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetServerByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetServerByIdRequest = {
    // The app ID
  app: 1,
    // The docker service ID
  dockerService: 1,
};

const data = await apiInstance.getServerById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined
 **dockerService** | [**number**] | The docker service ID | defaults to undefined


### Return type

**Server**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;Server&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getServerConfigById**
> GetServerConfigById200Response getServerConfigById()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetServerConfigByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetServerConfigByIdRequest = {
    // The server config ID
  serverConfig: 1,
};

const data = await apiInstance.getServerConfigById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverConfig** | [**number**] | The server config ID | defaults to undefined


### Return type

**GetServerConfigById200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;ServerConfig&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getServerConfigs**
> GetServerConfigs200Response getServerConfigs()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetServerConfigsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetServerConfigsRequest = {
    // The app ID
  app: 1,
    // The number of items to be shown per page. (optional)
  perPage: 1,
    // Specifies the page number to retrieve in the paginated results. (optional)
  page: 1,
    // Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  ``` sort[]=id sort[]=-name ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=id&sort[]=-name ``` (optional)
  sort: [
    "-id",
  ],
    // Filter by id. (optional)
  filterId: 1,
    // Filter by binary id. (optional)
  filterBinaryId: 1,
    // Filter by name. (optional)
  filterName: "filter[name]_example",
    // Filter by name using partial matching. For example, \"ann\" matches \"Joanna\" or \"Annie\". (optional)
  filterNamePartial: "filter[namePartial]_example",
    // Filter by command. (optional)
  filterCommand: "filter[command]_example",
    // Filter by arguments. (optional)
  filterArgs: "filter[args]_example",
    // Filter by notes. (optional)
  filterNotes: "filter[notes]_example",
    // Filter by status. (optional)
  filterStatus: "filter[status]_example",
    // Filter by maintenance status. (optional)
  filterMaintenance: true,
    // Filter by service-level DNS flag. (optional)
  filterDnsServiceEnabled: true,
    // Filter by resource package slug. (optional)
  filterResourcePackageSlug: "filter[resourcePackageSlug]_example",
    // Filter by in use flag. (optional)
  filterInUse: true,
    // Filter by binary name. (optional)
  filterBinaryName: "filter[binaryName]_example",
    // Filter by binary version. (optional)
  filterBinaryVersion: "filter[binaryVersion]_example",
    // Filter by binary type. (optional)
  filterBinaryType: "filter[binaryType]_example",
    // Filter by binary operating system. (optional)
  filterBinaryOs: "filter[binaryOs]_example",
    // Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where `idle` is false (boolean): ``` filter[metadata]=idle=false ```  To filter where `string` is exactly \"a\": ``` filter[metadata]=string=\"a\" ```  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where `score` is null: ``` filter[metadata]=score=null ```  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where `difficulty` within `gameSettings.survival` is exactly \"hardcore\": ``` filter[metadata]=gameSettings.survival.difficulty=\"hardcore\" ```  To filter for a nested field with a native `null` value, leave the null unquoted: ``` filter[metadata]=gameSettings.stats.score=null ```  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): ``` filter[metadata]=players=\"foobar\" filter[metadata]=player_ids=37 filter[metadata]=array=true filter[metadata]=array=null ```  Works for nested arrays as well: ``` filter[metadata]=gameData.players=\"foobar\" ```  **Multiple Filters:** Combine multiple filters by separating them with commas: ``` filter[metadata]=idle=false,max_players=20,gameSettings.survival.difficulty=\"hardcore\" ``` (optional)
  filterMetadata: "filter[metadata]_example",
};

const data = await apiInstance.getServerConfigs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined
 **perPage** | [**number**] | The number of items to be shown per page. | (optional) defaults to undefined
 **page** | [**number**] | Specifies the page number to retrieve in the paginated results. | (optional) defaults to undefined
 **sort** | **Array<&#39;-id&#39; &#124; &#39;id&#39; &#124; &#39;-binaryId&#39; &#124; &#39;binaryId&#39; &#124; &#39;-name&#39; &#124; &#39;name&#39; &#124; &#39;-command&#39; &#124; &#39;command&#39; &#124; &#39;-args&#39; &#124; &#39;args&#39; &#124; &#39;-notes&#39; &#124; &#39;notes&#39; &#124; &#39;-status&#39; &#124; &#39;status&#39; &#124; &#39;-statusMessage&#39; &#124; &#39;statusMessage&#39; &#124; &#39;-maintenance&#39; &#124; &#39;maintenance&#39; &#124; &#39;-dnsServiceEnabled&#39; &#124; &#39;dnsServiceEnabled&#39; &#124; &#39;-resourcePackageSlug&#39; &#124; &#39;resourcePackageSlug&#39; &#124; &#39;-inUse&#39; &#124; &#39;inUse&#39; &#124; &#39;binaryId&#39; &#124; &#39;-binaryId&#39; &#124; &#39;binaryName&#39; &#124; &#39;-binaryName&#39; &#124; &#39;binaryVersion&#39; &#124; &#39;-binaryVersion&#39; &#124; &#39;binaryType&#39; &#124; &#39;-binaryType&#39; &#124; &#39;binaryOs&#39; &#124; &#39;-binaryOs&#39;>** | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | (optional) defaults to undefined
 **filterId** | [**number**] | Filter by id. | (optional) defaults to undefined
 **filterBinaryId** | [**number**] | Filter by binary id. | (optional) defaults to undefined
 **filterName** | [**string**] | Filter by name. | (optional) defaults to undefined
 **filterNamePartial** | [**string**] | Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | (optional) defaults to undefined
 **filterCommand** | [**string**] | Filter by command. | (optional) defaults to undefined
 **filterArgs** | [**string**] | Filter by arguments. | (optional) defaults to undefined
 **filterNotes** | [**string**] | Filter by notes. | (optional) defaults to undefined
 **filterStatus** | [**string**] | Filter by status. | (optional) defaults to undefined
 **filterMaintenance** | [**boolean**] | Filter by maintenance status. | (optional) defaults to undefined
 **filterDnsServiceEnabled** | [**boolean**] | Filter by service-level DNS flag. | (optional) defaults to undefined
 **filterResourcePackageSlug** | [**string**] | Filter by resource package slug. | (optional) defaults to undefined
 **filterInUse** | [**boolean**] | Filter by in use flag. | (optional) defaults to undefined
 **filterBinaryName** | [**string**] | Filter by binary name. | (optional) defaults to undefined
 **filterBinaryVersion** | [**string**] | Filter by binary version. | (optional) defaults to undefined
 **filterBinaryType** | [**string**] | Filter by binary type. | (optional) defaults to undefined
 **filterBinaryOs** | [**string**] | Filter by binary operating system. | (optional) defaults to undefined
 **filterMetadata** | [**string**] | Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60; | (optional) defaults to undefined


### Return type

**GetServerConfigs200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated set of &#x60;ServerConfig&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getServerLogs**
> ServiceLogs getServerLogs()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetServerLogsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetServerLogsRequest = {
    // The docker service ID
  dockerService: 1,
    // The max number of entries to return. Default: 100 (optional)
  limit: 1,
    // Determines the sort order of logs. Supported values are forward or backward. Default: forward (optional)
  direction: "direction_example",
    // Only return logs filtered by stream source like stdout or stderr. Default: null (optional)
  streamSource: "stdout",
};

const data = await apiInstance.getServerLogs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined
 **limit** | [**number**] | The max number of entries to return. Default: 100 | (optional) defaults to undefined
 **direction** | [**string**] | Determines the sort order of logs. Supported values are forward or backward. Default: forward | (optional) defaults to undefined
 **streamSource** | [**&#39;stdout&#39; | &#39;stderr&#39;**]**Array<&#39;stdout&#39; &#124; &#39;stderr&#39;>** | Only return logs filtered by stream source like stdout or stderr. Default: null | (optional) defaults to undefined


### Return type

**ServiceLogs**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;ServiceLogs&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getServers**
> GetServers200Response getServers()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetServersRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetServersRequest = {
    // The app ID
  app: 1,
    // The number of items to be shown per page. (optional)
  perPage: 1,
    // Specifies the page number to retrieve in the paginated results. (optional)
  page: 1,
    // Filter by status. (optional)
  filterStatus: "filter[status]_example",
    // Filter by AppLocationSetting ID. (optional)
  filterAppLocationSettingId: 1,
    // Filter by whether the service belongs to an autoscaled AppLocationSetting. (optional)
  filterAutoscalingEnabled: true,
    // Filter by ServerConfig ID. (optional)
  filterServerConfigId: 1,
    // Filter by ServerConfig name. (optional)
  filterServerConfigName: "filter[serverConfigName]_example",
    // Filter by ServerConfig name using partial matching. For example, \"ann\" matches \"Joanna\" or \"Annie\". (optional)
  filterServerConfigNamePartial: "filter[serverConfigNamePartial]_example",
    // Filter by location city. (optional)
  filterLocationCity: "filter[locationCity]_example",
    // Filter by location city display name. (optional)
  filterLocationCityDisplay: "filter[locationCityDisplay]_example",
    // Filter by location continent. (optional)
  filterLocationContinent: "filter[locationContinent]_example",
    // Filter by location country. (optional)
  filterLocationCountry: "filter[locationCountry]_example",
    // Filter by whether the service can be backed up. (optional)
  filterIsBackupable: true,
    // Filter by whether the service can be restored. (optional)
  filterIsRestorable: true,
    // Filter by whether the service is pending (not running) due to insufficient resources on the node. (optional)
  filterIsPending: true,
    // Filter by whether the service is not found/missing in the cluster. (optional)
  filterIsNotFound: true,
    // Filter by whether the service is currently in an overall healthy state. (optional)
  filterIsHealthy: true,
    // Filter by Binary ID. (optional)
  filterBinaryId: 1,
    // Filter by whether the service is currenctly stopped. (optional)
  filterIsStopped: true,
    // Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where `idle` is false (boolean): ``` filter[metadata]=idle=false ```  To filter where `string` is exactly \"a\": ``` filter[metadata]=string=\"a\" ```  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where `score` is null: ``` filter[metadata]=score=null ```  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where `difficulty` within `gameSettings.survival` is exactly \"hardcore\": ``` filter[metadata]=gameSettings.survival.difficulty=\"hardcore\" ```  To filter for a nested field with a native `null` value, leave the null unquoted: ``` filter[metadata]=gameSettings.stats.score=null ```  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): ``` filter[metadata]=players=\"foobar\" filter[metadata]=player_ids=37 filter[metadata]=array=true filter[metadata]=array=null ```  Works for nested arrays as well: ``` filter[metadata]=gameData.players=\"foobar\" ```  **Multiple Filters:** Combine multiple filters by separating them with commas: ``` filter[metadata]=idle=false,max_players=20,gameSettings.survival.difficulty=\"hardcore\" ``` (optional)
  filterMetadata: "filter[metadata]_example",
    // Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by instance in descending order:  ``` sort[]=id sort[]=-instance ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=id&sort[]=-instance ``` (optional)
  sort: [
    "-id",
  ],
};

const data = await apiInstance.getServers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined
 **perPage** | [**number**] | The number of items to be shown per page. | (optional) defaults to undefined
 **page** | [**number**] | Specifies the page number to retrieve in the paginated results. | (optional) defaults to undefined
 **filterStatus** | [**string**] | Filter by status. | (optional) defaults to undefined
 **filterAppLocationSettingId** | [**number**] | Filter by AppLocationSetting ID. | (optional) defaults to undefined
 **filterAutoscalingEnabled** | [**boolean**] | Filter by whether the service belongs to an autoscaled AppLocationSetting. | (optional) defaults to undefined
 **filterServerConfigId** | [**number**] | Filter by ServerConfig ID. | (optional) defaults to undefined
 **filterServerConfigName** | [**string**] | Filter by ServerConfig name. | (optional) defaults to undefined
 **filterServerConfigNamePartial** | [**string**] | Filter by ServerConfig name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | (optional) defaults to undefined
 **filterLocationCity** | [**string**] | Filter by location city. | (optional) defaults to undefined
 **filterLocationCityDisplay** | [**string**] | Filter by location city display name. | (optional) defaults to undefined
 **filterLocationContinent** | [**string**] | Filter by location continent. | (optional) defaults to undefined
 **filterLocationCountry** | [**string**] | Filter by location country. | (optional) defaults to undefined
 **filterIsBackupable** | [**boolean**] | Filter by whether the service can be backed up. | (optional) defaults to undefined
 **filterIsRestorable** | [**boolean**] | Filter by whether the service can be restored. | (optional) defaults to undefined
 **filterIsPending** | [**boolean**] | Filter by whether the service is pending (not running) due to insufficient resources on the node. | (optional) defaults to undefined
 **filterIsNotFound** | [**boolean**] | Filter by whether the service is not found/missing in the cluster. | (optional) defaults to undefined
 **filterIsHealthy** | [**boolean**] | Filter by whether the service is currently in an overall healthy state. | (optional) defaults to undefined
 **filterBinaryId** | [**number**] | Filter by Binary ID. | (optional) defaults to undefined
 **filterIsStopped** | [**boolean**] | Filter by whether the service is currenctly stopped. | (optional) defaults to undefined
 **filterMetadata** | [**string**] | Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Array Contains Filter:** To filter where an array contains a given value (string, number, boolean or null): &#x60;&#x60;&#x60; filter[metadata]&#x3D;players&#x3D;\&quot;foobar\&quot; filter[metadata]&#x3D;player_ids&#x3D;37 filter[metadata]&#x3D;array&#x3D;true filter[metadata]&#x3D;array&#x3D;null &#x60;&#x60;&#x60;  Works for nested arrays as well: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameData.players&#x3D;\&quot;foobar\&quot; &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60; | (optional) defaults to undefined
 **sort** | **Array<&#39;-id&#39; &#124; &#39;id&#39; &#124; &#39;-instance&#39; &#124; &#39;instance&#39; &#124; &#39;-status&#39; &#124; &#39;status&#39; &#124; &#39;-status_message&#39; &#124; &#39;status_message&#39; &#124; &#39;-serverConfigId&#39; &#124; &#39;serverConfigId&#39; &#124; &#39;-serverConfigName&#39; &#124; &#39;serverConfigName&#39; &#124; &#39;-appLocationSettingId&#39; &#124; &#39;appLocationSettingId&#39; &#124; &#39;-name&#39; &#124; &#39;name&#39; &#124; &#39;-locationCity&#39; &#124; &#39;locationCity&#39; &#124; &#39;-locationCityDisplay&#39; &#124; &#39;locationCityDisplay&#39; &#124; &#39;-locationContinent&#39; &#124; &#39;locationContinent&#39; &#124; &#39;-locationCountry&#39; &#124; &#39;locationCountry&#39; &#124; &#39;isBackupable&#39; &#124; &#39;-isBackupable&#39; &#124; &#39;isRestorable&#39; &#124; &#39;-isRestorable&#39; &#124; &#39;isPending&#39; &#124; &#39;-isPending&#39; &#124; &#39;isNotFound&#39; &#124; &#39;-isNotFound&#39; &#124; &#39;isHealthy&#39; &#124; &#39;-isHealthy&#39; &#124; &#39;isStopped&#39; &#124; &#39;-isStopped&#39; &#124; &#39;-createdAt&#39; &#124; &#39;createdAt&#39; &#124; &#39;-updatedAt&#39; &#124; &#39;updatedAt&#39;>** | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by instance in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-instance &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-instance &#x60;&#x60;&#x60; | (optional) defaults to undefined


### Return type

**GetServers200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated set of &#x60;CustomDockerService&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTaggedImages**
> GetTaggedImages200Response getTaggedImages()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetTaggedImagesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetTaggedImagesRequest = {
    // The docker registry ID
  dockerRegistry: 1,
};

const data = await apiInstance.getTaggedImages(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerRegistry** | [**number**] | The docker registry ID | defaults to undefined


### Return type

**GetTaggedImages200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listServicesForAppLocationSetting**
> Array<Server> listServicesForAppLocationSetting()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiListServicesForAppLocationSettingRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiListServicesForAppLocationSettingRequest = {
    // The app ID
  app: 1,
    // The app location setting ID
  appLocationSetting: 1,
};

const data = await apiInstance.listServicesForAppLocationSetting(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined
 **appLocationSetting** | [**number**] | The app location setting ID | defaults to undefined


### Return type

**Array<Server>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of &#x60;CustomDockerService&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metricsAppCpuSecondsInstant**
> MetricInstantResponse metricsAppCpuSecondsInstant()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiMetricsAppCpuSecondsInstantRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiMetricsAppCpuSecondsInstantRequest = {
    // The app ID
  app: 1,
};

const data = await apiInstance.metricsAppCpuSecondsInstant(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined


### Return type

**MetricInstantResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;MetricInstantResponse&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metricsAppCpuUsage**
> MetricRangeResponse metricsAppCpuUsage()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiMetricsAppCpuUsageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiMetricsAppCpuUsageRequest = {
    // The app ID
  app: 1,
    // Start of the time range as a Unix timestamp in seconds.
  start: 1761215622,
    // End of the time range as a Unix timestamp in seconds. Must be greater than `start`.
  end: 1761300174,
};

const data = await apiInstance.metricsAppCpuUsage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined
 **start** | [**number**] | Start of the time range as a Unix timestamp in seconds. | defaults to undefined
 **end** | [**number**] | End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;. | defaults to undefined


### Return type

**MetricRangeResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;MetricRangeResponse&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metricsAppCpuUsagePerDay**
> MetricRangeResponse metricsAppCpuUsagePerDay()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiMetricsAppCpuUsagePerDayRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiMetricsAppCpuUsagePerDayRequest = {
    // The app ID
  app: 1,
    // Start of the time range as a Unix timestamp in seconds.
  start: 1761215622,
    // End of the time range as a Unix timestamp in seconds. Must be greater than `start`.
  end: 1761300174,
};

const data = await apiInstance.metricsAppCpuUsagePerDay(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined
 **start** | [**number**] | Start of the time range as a Unix timestamp in seconds. | defaults to undefined
 **end** | [**number**] | End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;. | defaults to undefined


### Return type

**MetricRangeResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;MetricRangeResponse&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metricsAppInstancesPeakInstant**
> MetricInstantResponse metricsAppInstancesPeakInstant()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiMetricsAppInstancesPeakInstantRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiMetricsAppInstancesPeakInstantRequest = {
    // The app ID
  app: 1,
};

const data = await apiInstance.metricsAppInstancesPeakInstant(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined


### Return type

**MetricInstantResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;MetricInstantResponse&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metricsAppInstancesRunning**
> MetricRangeResponse metricsAppInstancesRunning()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiMetricsAppInstancesRunningRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiMetricsAppInstancesRunningRequest = {
    // The app ID
  app: 1,
    // Start of the time range as a Unix timestamp in seconds.
  start: 1761215622,
    // End of the time range as a Unix timestamp in seconds. Must be greater than `start`.
  end: 1761300174,
};

const data = await apiInstance.metricsAppInstancesRunning(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined
 **start** | [**number**] | Start of the time range as a Unix timestamp in seconds. | defaults to undefined
 **end** | [**number**] | End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;. | defaults to undefined


### Return type

**MetricRangeResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;MetricRangeResponse&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metricsAppInstancesRunningInstant**
> MetricInstantResponse metricsAppInstancesRunningInstant()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiMetricsAppInstancesRunningInstantRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiMetricsAppInstancesRunningInstantRequest = {
    // The app ID
  app: 1,
};

const data = await apiInstance.metricsAppInstancesRunningInstant(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined


### Return type

**MetricInstantResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;MetricInstantResponse&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metricsDockerServiceCpuUsage**
> MetricRangeResponse metricsDockerServiceCpuUsage()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiMetricsDockerServiceCpuUsageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiMetricsDockerServiceCpuUsageRequest = {
    // The docker service ID
  dockerService: 1,
    // Start of the time range as a Unix timestamp in seconds.
  start: 1761215622,
    // End of the time range as a Unix timestamp in seconds. Must be greater than `start`.
  end: 1761300174,
};

const data = await apiInstance.metricsDockerServiceCpuUsage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined
 **start** | [**number**] | Start of the time range as a Unix timestamp in seconds. | defaults to undefined
 **end** | [**number**] | End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;. | defaults to undefined


### Return type

**MetricRangeResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;MetricRangeResponse&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metricsDockerServiceDiskRead**
> MetricRangeResponse metricsDockerServiceDiskRead()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiMetricsDockerServiceDiskReadRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiMetricsDockerServiceDiskReadRequest = {
    // The docker service ID
  dockerService: 1,
    // Start of the time range as a Unix timestamp in seconds.
  start: 1761215622,
    // End of the time range as a Unix timestamp in seconds. Must be greater than `start`.
  end: 1761300174,
};

const data = await apiInstance.metricsDockerServiceDiskRead(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined
 **start** | [**number**] | Start of the time range as a Unix timestamp in seconds. | defaults to undefined
 **end** | [**number**] | End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;. | defaults to undefined


### Return type

**MetricRangeResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;MetricRangeResponse&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metricsDockerServiceDiskWrite**
> MetricRangeResponse metricsDockerServiceDiskWrite()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiMetricsDockerServiceDiskWriteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiMetricsDockerServiceDiskWriteRequest = {
    // The docker service ID
  dockerService: 1,
    // Start of the time range as a Unix timestamp in seconds.
  start: 1761215622,
    // End of the time range as a Unix timestamp in seconds. Must be greater than `start`.
  end: 1761300174,
};

const data = await apiInstance.metricsDockerServiceDiskWrite(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined
 **start** | [**number**] | Start of the time range as a Unix timestamp in seconds. | defaults to undefined
 **end** | [**number**] | End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;. | defaults to undefined


### Return type

**MetricRangeResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;MetricRangeResponse&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metricsDockerServiceMemoryUsage**
> MetricRangeResponse metricsDockerServiceMemoryUsage()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiMetricsDockerServiceMemoryUsageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiMetricsDockerServiceMemoryUsageRequest = {
    // The docker service ID
  dockerService: 1,
    // Start of the time range as a Unix timestamp in seconds.
  start: 1761215622,
    // End of the time range as a Unix timestamp in seconds. Must be greater than `start`.
  end: 1761300174,
};

const data = await apiInstance.metricsDockerServiceMemoryUsage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined
 **start** | [**number**] | Start of the time range as a Unix timestamp in seconds. | defaults to undefined
 **end** | [**number**] | End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;. | defaults to undefined


### Return type

**MetricRangeResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;MetricRangeResponse&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metricsDockerServiceNetworkEgress**
> MetricRangeResponse metricsDockerServiceNetworkEgress()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiMetricsDockerServiceNetworkEgressRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiMetricsDockerServiceNetworkEgressRequest = {
    // The docker service ID
  dockerService: 1,
    // Start of the time range as a Unix timestamp in seconds.
  start: 1761215622,
    // End of the time range as a Unix timestamp in seconds. Must be greater than `start`.
  end: 1761300174,
};

const data = await apiInstance.metricsDockerServiceNetworkEgress(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined
 **start** | [**number**] | Start of the time range as a Unix timestamp in seconds. | defaults to undefined
 **end** | [**number**] | End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;. | defaults to undefined


### Return type

**MetricRangeResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;MetricRangeResponse&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **metricsDockerServiceNetworkIngress**
> MetricRangeResponse metricsDockerServiceNetworkIngress()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiMetricsDockerServiceNetworkIngressRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiMetricsDockerServiceNetworkIngressRequest = {
    // The docker service ID
  dockerService: 1,
    // Start of the time range as a Unix timestamp in seconds.
  start: 1761215622,
    // End of the time range as a Unix timestamp in seconds. Must be greater than `start`.
  end: 1761300174,
};

const data = await apiInstance.metricsDockerServiceNetworkIngress(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined
 **start** | [**number**] | Start of the time range as a Unix timestamp in seconds. | defaults to undefined
 **end** | [**number**] | End of the time range as a Unix timestamp in seconds. Must be greater than &#x60;start&#x60;. | defaults to undefined


### Return type

**MetricRangeResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;MetricRangeResponse&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **refreshAuthToken**
> Auth refreshAuthToken()


### Example


```typescript
import { createConfiguration, AppApi } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request = {};

const data = await apiInstance.refreshAuthToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Auth**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;Auth&#x60; |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **refreshBinary**
> Binary refreshBinary()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiRefreshBinaryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiRefreshBinaryRequest = {
    // The binary ID
  binary: 1,
};

const data = await apiInstance.refreshBinary(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binary** | [**number**] | The binary ID | defaults to undefined


### Return type

**Binary**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | &#x60;Binary&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **refreshTaggedImages**
> GetTaggedImages200Response refreshTaggedImages()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiRefreshTaggedImagesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiRefreshTaggedImagesRequest = {
    // The docker registry ID
  dockerRegistry: 1,
};

const data = await apiInstance.refreshTaggedImages(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerRegistry** | [**number**] | The docker registry ID | defaults to undefined


### Return type

**GetTaggedImages200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **requestLocation**
> void requestLocation(occupiedLocationRequest)


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiRequestLocationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiRequestLocationRequest = {
  
  occupiedLocationRequest: {
    location: "location_example",
    numInstances: 1,
    projectName: "projectName_example",
    company: "company_example",
    message: "message_example",
  },
};

const data = await apiInstance.requestLocation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **occupiedLocationRequest** | **OccupiedLocationRequest**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**422** | Validation error |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **restartServer**
> void restartServer()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiRestartServerRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiRestartServerRequest = {
    // The docker service ID
  dockerService: 1,
};

const data = await apiInstance.restartServer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**404** | Not found |  -  |
**403** | Authorization error |  -  |
**401** | Unauthenticated |  -  |
**402** | Payment required |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **restoreBackup**
> void restoreBackup()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiRestoreBackupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiRestoreBackupRequest = {
    // The docker service ID
  dockerService: 1,
};

const data = await apiInstance.restoreBackup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**404** | Not found |  -  |
**403** | Authorization error |  -  |
**401** | Unauthenticated |  -  |
**402** | Payment required |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **serverConfigsMetadataDeleteAll**
> GetServerConfigById200Response serverConfigsMetadataDeleteAll()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiServerConfigsMetadataDeleteAllRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiServerConfigsMetadataDeleteAllRequest = {
    // The server config ID
  serverConfig: 1,
};

const data = await apiInstance.serverConfigsMetadataDeleteAll(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverConfig** | [**number**] | The server config ID | defaults to undefined


### Return type

**GetServerConfigById200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;ServerConfig&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **serverConfigsMetadataDeleteKeys**
> GetServerConfigById200Response serverConfigsMetadataDeleteKeys()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiServerConfigsMetadataDeleteKeysRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiServerConfigsMetadataDeleteKeysRequest = {
    // The server config ID
  serverConfig: 1,
  
  metadata: [
    "metadata[]_example",
  ],
};

const data = await apiInstance.serverConfigsMetadataDeleteKeys(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverConfig** | [**number**] | The server config ID | defaults to undefined
 **metadata** | **Array&lt;string&gt;** |  | defaults to undefined


### Return type

**GetServerConfigById200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;ServerConfig&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **serverConfigsMetadataSet**
> GetServerConfigById200Response serverConfigsMetadataSet()

Replaces the entire metadata.

### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiServerConfigsMetadataSetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiServerConfigsMetadataSetRequest = {
    // The server config ID
  serverConfig: 1,
  
  setServerConfigMetadataRequest: {
    metadata: {
      "key": null,
    },
  },
};

const data = await apiInstance.serverConfigsMetadataSet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setServerConfigMetadataRequest** | **SetServerConfigMetadataRequest**|  |
 **serverConfig** | [**number**] | The server config ID | defaults to undefined


### Return type

**GetServerConfigById200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;ServerConfig&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **serverConfigsMetadataUpdate**
> GetServerConfigById200Response serverConfigsMetadataUpdate()

Updates existing metadata keys or adds new keys without deleting other metadata.

### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiServerConfigsMetadataUpdateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiServerConfigsMetadataUpdateRequest = {
    // The server config ID
  serverConfig: 1,
  
  patchServerConfigMetadataRequest: {
    metadata: {
      "key": null,
    },
  },
};

const data = await apiInstance.serverConfigsMetadataUpdate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchServerConfigMetadataRequest** | **PatchServerConfigMetadataRequest**|  |
 **serverConfig** | [**number**] | The server config ID | defaults to undefined


### Return type

**GetServerConfigById200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;ServerConfig&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **startServer**
> void startServer()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiStartServerRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiStartServerRequest = {
    // The docker service ID
  dockerService: 1,
};

const data = await apiInstance.startServer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**404** | Not found |  -  |
**403** | Authorization error |  -  |
**401** | Unauthenticated |  -  |
**402** | Payment required |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **startServersForApp**
> void startServersForApp()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiStartServersForAppRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiStartServersForAppRequest = {
    // The app ID
  app: 1,
};

const data = await apiInstance.startServersForApp(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**404** | Not found |  -  |
**403** | Authorization error |  -  |
**401** | Unauthenticated |  -  |
**402** | Payment required |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **startServersForAppLocationSetting**
> void startServersForAppLocationSetting()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiStartServersForAppLocationSettingRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiStartServersForAppLocationSettingRequest = {
    // The app location setting ID
  appLocationSetting: 1,
};

const data = await apiInstance.startServersForAppLocationSetting(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appLocationSetting** | [**number**] | The app location setting ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**404** | Not found |  -  |
**403** | Authorization error |  -  |
**401** | Unauthenticated |  -  |
**402** | Payment required |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **startServersForBinary**
> void startServersForBinary()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiStartServersForBinaryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiStartServersForBinaryRequest = {
    // The binary ID
  binary: 1,
};

const data = await apiInstance.startServersForBinary(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binary** | [**number**] | The binary ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**404** | Not found |  -  |
**403** | Authorization error |  -  |
**401** | Unauthenticated |  -  |
**402** | Payment required |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **startServersForServerConfig**
> void startServersForServerConfig()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiStartServersForServerConfigRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiStartServersForServerConfigRequest = {
    // The server config ID
  serverConfig: 1,
};

const data = await apiInstance.startServersForServerConfig(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverConfig** | [**number**] | The server config ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**404** | Not found |  -  |
**403** | Authorization error |  -  |
**401** | Unauthenticated |  -  |
**402** | Payment required |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **steamGetBranches**
> Array<SteamBranch> steamGetBranches()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiSteamGetBranchesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiSteamGetBranchesRequest = {
    // The steamworks app id
  appId: 1,
};

const data = await apiInstance.steamGetBranches(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**number**] | The steamworks app id | defaults to undefined


### Return type

**Array<SteamBranch>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of &#x60;SteamBranch&#x60; |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **steamGetLauncher**
> Array<SteamLauncher> steamGetLauncher()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiSteamGetLauncherRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiSteamGetLauncherRequest = {
    // The steamworks app id
  appId: 1,
    // The operating system of the binary (optional)
  os: "windows",
};

const data = await apiInstance.steamGetLauncher(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**number**] | The steamworks app id | defaults to undefined
 **os** | **OperatingSystem** | The operating system of the binary | (optional) defaults to undefined


### Return type

**Array<SteamLauncher>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of &#x60;SteamLauncher&#x60; |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **stopServer**
> void stopServer()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiStopServerRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiStopServerRequest = {
    // The docker service ID
  dockerService: 1,
};

const data = await apiInstance.stopServer(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **stopServersForApp**
> void stopServersForApp()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiStopServersForAppRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiStopServersForAppRequest = {
    // The app ID
  app: 1,
};

const data = await apiInstance.stopServersForApp(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **stopServersForAppLocationSetting**
> void stopServersForAppLocationSetting()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiStopServersForAppLocationSettingRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiStopServersForAppLocationSettingRequest = {
    // The app location setting ID
  appLocationSetting: 1,
};

const data = await apiInstance.stopServersForAppLocationSetting(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appLocationSetting** | [**number**] | The app location setting ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **stopServersForBinary**
> void stopServersForBinary()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiStopServersForBinaryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiStopServersForBinaryRequest = {
    // The binary ID
  binary: 1,
};

const data = await apiInstance.stopServersForBinary(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **binary** | [**number**] | The binary ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **stopServersForServerConfig**
> void stopServersForServerConfig()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiStopServersForServerConfigRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiStopServersForServerConfigRequest = {
    // The server config ID
  serverConfig: 1,
};

const data = await apiInstance.stopServersForServerConfig(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverConfig** | [**number**] | The server config ID | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAppById**
> App updateAppById(updateAppRequest)


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiUpdateAppByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiUpdateAppByIdRequest = {
    // The app ID
  app: 1,
  
  updateAppRequest: {
    name: "name_example",
  },
};

const data = await apiInstance.updateAppById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAppRequest** | **UpdateAppRequest**|  |
 **app** | [**number**] | The app ID | defaults to undefined


### Return type

**App**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;App&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAppLocationSetting**
> GetAppLocationSettingById200Response updateAppLocationSetting(updateAppLocationSettingRequest)


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiUpdateAppLocationSettingRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiUpdateAppLocationSettingRequest = {
    // The app location setting ID
  appLocationSetting: 1,
  
  updateAppLocationSettingRequest: {
    name: "name_example",
    numInstances: 1,
    autoscaling: {
      enabled: true,
      healthEnabled: true,
      healthInitialDelaySeconds: 1,
      healthPeriodSeconds: 1,
      healthFailureThreshold: 1,
      minInstances: 1,
      maxInstances: 1,
      bufferSize: 1,
    },
  },
};

const data = await apiInstance.updateAppLocationSetting(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAppLocationSettingRequest** | **UpdateAppLocationSettingRequest**|  |
 **appLocationSetting** | [**number**] | The app location setting ID | defaults to undefined


### Return type

**GetAppLocationSettingById200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;AppLocationSetting&#x60; |  -  |
**403** | Authorization error |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**402** | Payment required |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateBinary**
> Binary updateBinary(updateBinaryRequest)


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiUpdateBinaryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiUpdateBinaryRequest = {
    // The binary ID
  binary: 1,
  
  updateBinaryRequest: {
    name: "name_example",
    version: "version_example",
    type: "dockerImage",
    os: "windows",
    steam: {
      steamAppId: 1,
      branch: "branch_example",
      password: "password_example",
      command: "command_example",
      steamcmdUsername: "steamcmdUsername_example",
      steamcmdPassword: "steamcmdPassword_example",
      headful: true,
      requestLicense: true,
      runtime: "scout",
      additionalPackages: "additionalPackages_example",
      unpublished: true,
    },
    dockerImage: {
      imageName: "imageName_example",
      registryId: 1,
    },
  },
};

const data = await apiInstance.updateBinary(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateBinaryRequest** | **UpdateBinaryRequest**|  |
 **binary** | [**number**] | The binary ID | defaults to undefined


### Return type

**Binary**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;Binary&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDockerRegistry**
> DockerRegistry updateDockerRegistry(updateDockerRegistryRequest)


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiUpdateDockerRegistryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiUpdateDockerRegistryRequest = {
    // The docker registry ID
  dockerRegistry: 1,
  
  updateDockerRegistryRequest: {
    type: "default",
    name: "name_example",
    url: "url_example",
    instanceUrl: "instanceUrl_example",
    username: "username_example",
    accessToken: "accessToken_example",
    password: "password_example",
    organization: true,
    awsAccessKey: "awsAccessKey_example",
    awsSecretAccessKey: "awsSecretAccessKey_example",
  },
};

const data = await apiInstance.updateDockerRegistry(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateDockerRegistryRequest** | **UpdateDockerRegistryRequest**|  |
 **dockerRegistry** | [**number**] | The docker registry ID | defaults to undefined


### Return type

**DockerRegistry**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;DockerRegistry&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateServerConfig**
> ServerConfig updateServerConfig(updateServerConfigRequest)


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiUpdateServerConfigRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiUpdateServerConfigRequest = {
    // The server config ID
  serverConfig: 1,
  
  updateServerConfigRequest: {
    name: "name_example",
    args: "args_example",
    command: "command_example",
    notes: "notes_example",
    binaryId: 1,
    resourcePackageSlug: "resourcePackageSlug_example",
    dnsServiceEnabled: true,
    configFiles: [
      {
        target: "target_example",
        content: "content_example",
      },
    ],
    secretFiles: [
      {
        target: "target_example",
        content: "content_example",
      },
    ],
    restartPolicy: {
      condition: "none",
    },
    env: [
      {
        type: "static",
        key: "key_example",
        value: "value_example",
        variable: "variable_example",
      },
    ],
    mounts: [
      {
        target: "target_example",
        readOnly: true,
      },
    ],
    ports: [
      {
        name: "name_example",
        protocols: [
          "tcp",
        ],
        targetPort: 1,
        dnsMode: "dns",
        dnsPrivate: true,
      },
    ],
  },
};

const data = await apiInstance.updateServerConfig(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateServerConfigRequest** | **UpdateServerConfigRequest**|  |
 **serverConfig** | [**number**] | The server config ID | defaults to undefined


### Return type

**ServerConfig**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;ServerConfig&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


