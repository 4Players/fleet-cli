# .AppApi

All URIs are relative to *https://fleet.4players.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApp**](AppApi.md#createApp) | **POST** /v1/apps | Create an app
[**createAppLocationSetting**](AppApi.md#createAppLocationSetting) | **POST** /v1/apps/{app}/location-settings | Create a new location setting
[**createBackup**](AppApi.md#createBackup) | **POST** /v1/services/{dockerService}/backup | Create service backup
[**createBinary**](AppApi.md#createBinary) | **POST** /v1/apps/{app}/binaries | Create a binary and the related entity
[**createDockerRegistry**](AppApi.md#createDockerRegistry) | **POST** /v1/docker-registries | Create a new docker registry
[**createServerConfig**](AppApi.md#createServerConfig) | **POST** /v1/apps/{app}/configs | Create a new server config
[**deleteApp**](AppApi.md#deleteApp) | **DELETE** /v1/apps/{app} | Delete a specific app
[**deleteAppLocationSetting**](AppApi.md#deleteAppLocationSetting) | **DELETE** /v1/app-location-settings/{appLocationSetting} | Delete a location setting
[**deleteBinary**](AppApi.md#deleteBinary) | **DELETE** /v1/binaries/{binary} | Delete a specified binary
[**deleteDockerRegistry**](AppApi.md#deleteDockerRegistry) | **DELETE** /v1/docker-registries/{dockerRegistry} | Delete a specific docker registry
[**deleteServerConfig**](AppApi.md#deleteServerConfig) | **DELETE** /v1/server-configs/{serverConfig} | Delete a specific server config
[**dockerServicesMetadataDeleteAll**](AppApi.md#dockerServicesMetadataDeleteAll) | **DELETE** /v1/services/{dockerService}/metadata | Delete all service metadata
[**dockerServicesMetadataDeleteKeys**](AppApi.md#dockerServicesMetadataDeleteKeys) | **DELETE** /v1/services/{dockerService}/metadata/keys | Delete service metadata keys
[**dockerServicesMetadataSet**](AppApi.md#dockerServicesMetadataSet) | **PUT** /v1/services/{dockerService}/metadata | Set service metadata
[**dockerServicesMetadataUpdate**](AppApi.md#dockerServicesMetadataUpdate) | **PATCH** /v1/services/{dockerService}/metadata | Update service metadata
[**downloadServerLogs**](AppApi.md#downloadServerLogs) | **GET** /v1/services/{dockerService}/logs/download | Download service logs
[**getAppById**](AppApi.md#getAppById) | **GET** /v1/apps/{app} | Show a specific app
[**getAppLocationSettingById**](AppApi.md#getAppLocationSettingById) | **GET** /v1/app-location-settings/{appLocationSetting} | Show a specific app location setting
[**getAppLocationSettings**](AppApi.md#getAppLocationSettings) | **GET** /v1/apps/{app}/location-settings | Show all location settings
[**getApps**](AppApi.md#getApps) | **GET** /v1/apps | Show all apps
[**getAuthToken**](AppApi.md#getAuthToken) | **POST** /v1/auth/token | Get token
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
[**refreshAuthToken**](AppApi.md#refreshAuthToken) | **PUT** /v1/auth/token | Refresh token
[**refreshBinary**](AppApi.md#refreshBinary) | **PUT** /v1/binaries/{binary}/refresh | Refresh a binary and the related entity
[**refreshTaggedImages**](AppApi.md#refreshTaggedImages) | **GET** /v1/docker-registries/{dockerRegistry}/tagged-images/refresh | Refresh the cache for all available tagged images
[**restartServer**](AppApi.md#restartServer) | **POST** /v1/services/{dockerService}/restart | Restart service
[**restoreBackup**](AppApi.md#restoreBackup) | **POST** /v1/services/{dockerService}/restore | Restore latest service backup
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
[**templateAppMinecraftStore**](AppApi.md#templateAppMinecraftStore) | **POST** /v1/templates/apps/minecraft | Create a Minecraft template app
[**templateAppPalworldStore**](AppApi.md#templateAppPalworldStore) | **POST** /v1/templates/apps/palworld | Create a Palworld template app
[**updateAppById**](AppApi.md#updateAppById) | **PUT** /v1/apps/{app} | Update a specific app
[**updateAppLocationSetting**](AppApi.md#updateAppLocationSetting) | **PUT** /v1/app-location-settings/{appLocationSetting} | Update a location setting
[**updateBinary**](AppApi.md#updateBinary) | **PUT** /v1/binaries/{binary} | Update a binary and the related entity
[**updateDockerRegistry**](AppApi.md#updateDockerRegistry) | **PUT** /v1/docker-registries/{dockerRegistry} | Update a specific docker registry
[**updateServerConfig**](AppApi.md#updateServerConfig) | **PUT** /v1/server-configs/{serverConfig} | Update a server config


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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createAppLocationSetting**
> AppLocationSetting createAppLocationSetting(storeAppLocationSettingRequest)


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

**AppLocationSetting**

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
**403** | Authorization error |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |

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
    args: "/usr/local/etc/enshrouded/bootstrap",
    command: "command_example",
    notes: "notes_example",
    binaryId: 1,
    resourcePackageSlug: "resourcePackageSlug_example",
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
    resources: {
      limits: {
        cpu: 1,
        memory: 1,
      },
      reservations: {
        cpu: 1,
        memory: 1,
      },
    },
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
**204** | No content |  -  |
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
    "metadata_example",
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
> AppLocationSetting getAppLocationSettingById()


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

**AppLocationSetting**

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
    "sort[]_example",
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
 **sort** | **Array&lt;string&gt;** | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | (optional) defaults to undefined
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
    "sort[]_example",
  ],
    // Filter by id. (optional)
  filterId: 1,
    // Filter by name. (optional)
  filterName: "filter[name]_example",
    // Filter by name using partial matching. For example, \"ann\" matches \"Joanna\" or \"Annie\". (optional)
  filterNamePartial: "filter[namePartial]_example",
    // Filter by in use flag. (optional)
  filterInUse: true,
};

const data = await apiInstance.getApps(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | [**number**] | The number of items to be shown per page. | (optional) defaults to undefined
 **page** | [**number**] | Specifies the page number to retrieve in the paginated results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | (optional) defaults to undefined
 **filterId** | [**number**] | Filter by id. | (optional) defaults to undefined
 **filterName** | [**string**] | Filter by name. | (optional) defaults to undefined
 **filterNamePartial** | [**string**] | Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | (optional) defaults to undefined
 **filterInUse** | [**boolean**] | Filter by in use flag. | (optional) defaults to undefined


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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAuthToken**
> Auth getAuthToken(authRequest)

Authenticates the user based on the user\'s email, password, and session ID. If the user is authenticated successfully, it returns the user\'s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.+

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
    sid: "1234567890ABCDEFG",
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
    "sort[]_example",
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
 **sort** | **Array&lt;string&gt;** | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** For example, to sort by name in ascending order or by archiveName in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;name sort[]&#x3D;-archiveName &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;name&amp;sort[]&#x3D;-archiveName &#x60;&#x60;&#x60; | (optional) defaults to undefined
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
    "sort[]_example",
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
 **sort** | **Array&lt;string&gt;** | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | (optional) defaults to undefined
 **filterName** | [**string**] | Filter by name. | (optional) defaults to undefined
 **filterNamePartial** | [**string**] | Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | (optional) defaults to undefined
 **filterVersion** | [**string**] | Filter by version. | (optional) defaults to undefined
 **filterType** | [**string**] | Filter by type. | (optional) defaults to undefined
 **filterOs** | [**string**] | Filter by operating system. | (optional) defaults to undefined
 **filterMaintenance** | [**boolean**] | Filter by maintenance status. | (optional) defaults to undefined
 **filterStatus** | [**string**] | Filter by status. | (optional) defaults to undefined
 **filterInUse** | [**boolean**] | Filter by in use flag. | (optional) defaults to undefined


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
    "sort[]_example",
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
};

const data = await apiInstance.getDockerRegistries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | [**number**] | The number of items to be shown per page. | (optional) defaults to undefined
 **page** | [**number**] | Specifies the page number to retrieve in the paginated results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | (optional) defaults to undefined
 **filterId** | [**number**] | Filter by id. | (optional) defaults to undefined
 **filterType** | [**string**] | Filter by type. | (optional) defaults to undefined
 **filterName** | [**string**] | Filter by name. | (optional) defaults to undefined
 **filterNamePartial** | [**string**] | Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | (optional) defaults to undefined
 **filterUrl** | [**string**] | Filter by url. | (optional) defaults to undefined
 **filterOrganization** | [**string**] | Filter by organization. | (optional) defaults to undefined


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
**200** | Paginated set of &#x60;Location&#x60; |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |

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
    "sort[]_example",
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
    // Filter by CPU reservation. Maps to the `cpu_reservation` column. (optional)
  filterCpuReservation: 1,
    // Filter by memory limit in MiB. Maps to the `memory_limit_mebibytes` column. (optional)
  filterMemoryLimitMiB: 1,
    // Filter by memory reservation in MiB. Maps to the `memory_reservation_mebibytes` column. (optional)
  filterMemoryReservationMiB: 1,
};

const data = await apiInstance.getResourcePackages(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **perPage** | [**number**] | The number of items to be shown per page. | (optional) defaults to undefined
 **page** | [**number**] | Specifies the page number to retrieve in the paginated results. | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | (optional) defaults to undefined
 **filterId** | [**number**] | Filter by id. | (optional) defaults to undefined
 **filterName** | [**string**] | Filter by name. | (optional) defaults to undefined
 **filterNamePartial** | [**string**] | Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | (optional) defaults to undefined
 **filterSlug** | [**string**] | Filter by slug. | (optional) defaults to undefined
 **filterType** | [**string**] | Filter by type. | (optional) defaults to undefined
 **filterCpuLimit** | [**number**] | Filter by CPU limit. Maps to the &#x60;cpu_limit&#x60; column. | (optional) defaults to undefined
 **filterCpuReservation** | [**number**] | Filter by CPU reservation. Maps to the &#x60;cpu_reservation&#x60; column. | (optional) defaults to undefined
 **filterMemoryLimitMiB** | [**number**] | Filter by memory limit in MiB. Maps to the &#x60;memory_limit_mebibytes&#x60; column. | (optional) defaults to undefined
 **filterMemoryReservationMiB** | [**number**] | Filter by memory reservation in MiB. Maps to the &#x60;memory_reservation_mebibytes&#x60; column. | (optional) defaults to undefined


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
> ServerConfig getServerConfigById()


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

**ServerConfig**

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
    "sort[]_example",
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
 **sort** | **Array&lt;string&gt;** | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by name in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-name &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-name &#x60;&#x60;&#x60; | (optional) defaults to undefined
 **filterId** | [**number**] | Filter by id. | (optional) defaults to undefined
 **filterBinaryId** | [**number**] | Filter by binary id. | (optional) defaults to undefined
 **filterName** | [**string**] | Filter by name. | (optional) defaults to undefined
 **filterNamePartial** | [**string**] | Filter by name using partial matching. For example, \&quot;ann\&quot; matches \&quot;Joanna\&quot; or \&quot;Annie\&quot;. | (optional) defaults to undefined
 **filterCommand** | [**string**] | Filter by command. | (optional) defaults to undefined
 **filterArgs** | [**string**] | Filter by arguments. | (optional) defaults to undefined
 **filterNotes** | [**string**] | Filter by notes. | (optional) defaults to undefined
 **filterStatus** | [**string**] | Filter by status. | (optional) defaults to undefined
 **filterMaintenance** | [**boolean**] | Filter by maintenance status. | (optional) defaults to undefined
 **filterResourcePackageSlug** | [**string**] | Filter by resource package slug. | (optional) defaults to undefined
 **filterInUse** | [**boolean**] | Filter by in use flag. | (optional) defaults to undefined
 **filterBinaryName** | [**string**] | Filter by binary name. | (optional) defaults to undefined
 **filterBinaryVersion** | [**string**] | Filter by binary version. | (optional) defaults to undefined
 **filterBinaryType** | [**string**] | Filter by binary type. | (optional) defaults to undefined
 **filterBinaryOs** | [**string**] | Filter by binary operating system. | (optional) defaults to undefined


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
    // Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where `idle` is false (boolean): ``` filter[metadata]=idle=false ```  To filter where `string` is exactly \"a\": ``` filter[metadata]=string=\"a\" ```  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where `score` is null: ``` filter[metadata]=score=null ```  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where `difficulty` within `gameSettings.survival` is exactly \"hardcore\": ``` filter[metadata]=gameSettings.survival.difficulty=\"hardcore\" ```  To filter for a nested field with a native `null` value, leave the null unquoted: ``` filter[metadata]=gameSettings.stats.score=null ```  **Multiple Filters:** Combine multiple filters by separating them with commas: ``` filter[metadata]=idle=false,max_players=20,gameSettings.survival.difficulty=\"hardcore\" ``` (optional)
  filterMetadata: "filter[metadata]_example",
    // Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by instance in descending order:  ``` sort[]=id sort[]=-instance ```  **Multiple Sorts:** Combine multiple sorts by separating them with commas: ``` sort[]=id&sort[]=-instance ``` (optional)
  sort: [
    "sort[]_example",
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
 **filterMetadata** | [**string**] | Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60; | (optional) defaults to undefined
 **sort** | **Array&lt;string&gt;** | Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by instance in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-instance &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-instance &#x60;&#x60;&#x60; | (optional) defaults to undefined


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
**200** | &#x60;TaggedImageCollection&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |

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
**200** | &#x60;ServerCollection&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
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
**200** | &#x60;TaggedImageCollection&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |

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
**200** | &#x60;SteamBranchCollection&#x60; |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |

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
**200** | &#x60;SteamLauncherCollection&#x60; |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |

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
**403** | Authorization error |  -  |
**401** | Unauthenticated |  -  |

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
**403** | Authorization error |  -  |
**401** | Unauthenticated |  -  |

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
**403** | Authorization error |  -  |
**401** | Unauthenticated |  -  |

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
**403** | Authorization error |  -  |
**401** | Unauthenticated |  -  |

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
**403** | Authorization error |  -  |
**401** | Unauthenticated |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **templateAppMinecraftStore**
> App templateAppMinecraftStore()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiTemplateAppMinecraftStoreRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiTemplateAppMinecraftStoreRequest = {
  
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

const data = await apiInstance.templateAppMinecraftStore(request);
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **templateAppPalworldStore**
> App templateAppPalworldStore()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiTemplateAppPalworldStoreRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiTemplateAppPalworldStoreRequest = {
  
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

const data = await apiInstance.templateAppPalworldStore(request);
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
> AppLocationSetting updateAppLocationSetting(updateAppLocationSettingRequest)


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

**AppLocationSetting**

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
**403** | Authorization error |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |

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
    args: "/usr/local/etc/enshrouded/bootstrap",
    command: "command_example",
    notes: "notes_example",
    binaryId: 1,
    resourcePackageSlug: "resourcePackageSlug_example",
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
    resources: {
      limits: {
        cpu: 1,
        memory: 1,
      },
      reservations: {
        cpu: 1,
        memory: 1,
      },
    },
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


