# .AppApi

All URIs are relative to *https://fleet.4players.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApp**](AppApi.md#createApp) | **POST** /v1/apps | Create an app
[**createAppLocationSetting**](AppApi.md#createAppLocationSetting) | **POST** /v1/apps/{app}/location-settings | Create a new location setting
[**createBackup**](AppApi.md#createBackup) | **POST** /v1/services/{dockerService}/backup | Creates a backup
[**createBinary**](AppApi.md#createBinary) | **POST** /v1/apps/{app}/binaries | Create a binary and the related entity
[**createDockerRegistry**](AppApi.md#createDockerRegistry) | **POST** /v1/docker-registries | Create a new docker registry
[**createServerConfig**](AppApi.md#createServerConfig) | **POST** /v1/apps/{app}/configs | Create a new server config
[**deleteApp**](AppApi.md#deleteApp) | **DELETE** /v1/apps/{app} | Delete a specific app
[**deleteAppLocationSetting**](AppApi.md#deleteAppLocationSetting) | **DELETE** /v1/app-location-settings/{appLocationSetting} | Delete a location setting
[**deleteBinary**](AppApi.md#deleteBinary) | **DELETE** /v1/binaries/{binary} | Delete a specified binary
[**deleteDockerRegistry**](AppApi.md#deleteDockerRegistry) | **DELETE** /v1/docker-registries/{dockerRegistry} | Delete a specific docker registry
[**deleteServerConfig**](AppApi.md#deleteServerConfig) | **DELETE** /v1/server-configs/{serverConfig} | Delete a specific server config
[**getAppById**](AppApi.md#getAppById) | **GET** /v1/apps/{app} | Show a specific app
[**getAppLocationSettingById**](AppApi.md#getAppLocationSettingById) | **GET** /v1/app-location-settings/{appLocationSetting} | Show a specific app location setting
[**getAppLocationSettings**](AppApi.md#getAppLocationSettings) | **GET** /v1/apps/{app}/location-settings | Show all location settings
[**getApps**](AppApi.md#getApps) | **GET** /v1/apps | Show all apps
[**getAuthToken**](AppApi.md#getAuthToken) | **POST** /v1/auth/token | Get token
[**getBackups**](AppApi.md#getBackups) | **GET** /v1/services/{dockerService}/backups | List all backups
[**getBinaries**](AppApi.md#getBinaries) | **GET** /v1/apps/{app}/binaries | Show all binaries
[**getBinaryById**](AppApi.md#getBinaryById) | **GET** /v1/binaries/{binary} | Show a specific binary
[**getDockerRegistries**](AppApi.md#getDockerRegistries) | **GET** /v1/docker-registries | Show all docker registries
[**getDockerRegistryById**](AppApi.md#getDockerRegistryById) | **GET** /v1/docker-registries/{dockerRegistry} | Display a specific docker registry
[**getLatestBackup**](AppApi.md#getLatestBackup) | **GET** /v1/services/{dockerService}/backup | Display the latest backup
[**getLocations**](AppApi.md#getLocations) | **GET** /v1/nodes/locations | Show a unique listing of locations based on active and ready worker nodes
[**getResourcePackageById**](AppApi.md#getResourcePackageById) | **GET** /v1/resource-packages/{resourcePackage} | Show a specified resource package
[**getResourcePackages**](AppApi.md#getResourcePackages) | **GET** /v1/resource-packages | Show all available resource packages
[**getServerBackupDownloadUrl**](AppApi.md#getServerBackupDownloadUrl) | **GET** /v1/services/{dockerService}/backup/download | Generate a presigned URL for downloading the latest backup from AWS S3
[**getServerById**](AppApi.md#getServerById) | **GET** /v1/apps/{app}/services/{dockerService} | Display a specific service
[**getServerConfigById**](AppApi.md#getServerConfigById) | **GET** /v1/server-configs/{serverConfig} | Show a specific server config
[**getServerConfigs**](AppApi.md#getServerConfigs) | **GET** /v1/apps/{app}/configs | Show all server configs
[**getServerLogs**](AppApi.md#getServerLogs) | **GET** /v1/services/{dockerService}/logs | Get stdout and stderr logs from the latest gameserver task
[**getServers**](AppApi.md#getServers) | **GET** /v1/apps/{app}/services | Show all services
[**getTaggedImages**](AppApi.md#getTaggedImages) | **GET** /v1/docker-registries/{dockerRegistry}/tagged-images | List all available tagged images
[**listServicesForAppLocationSetting**](AppApi.md#listServicesForAppLocationSetting) | **GET** /v1/apps/{app}/location-settings/{appLocationSetting}/services | Show all services for a specific app location setting within a given app
[**refreshBinary**](AppApi.md#refreshBinary) | **PUT** /v1/binaries/{binary}/refresh | Refresh a binary and the related entity
[**refreshTaggedImages**](AppApi.md#refreshTaggedImages) | **GET** /v1/docker-registries/{dockerRegistry}/tagged-images/refresh | Refresh the cache for all available tagged images
[**restartServer**](AppApi.md#restartServer) | **POST** /v1/services/{dockerService}/restart | Restart the service
[**restoreBackup**](AppApi.md#restoreBackup) | **POST** /v1/services/{dockerService}/restore | Restore the latest backup
[**steamGetBranches**](AppApi.md#steamGetBranches) | **GET** /v1/binaries/steam/branches | Get branches for a specific steamworks app ID
[**steamGetLauncher**](AppApi.md#steamGetLauncher) | **GET** /v1/binaries/steam/launchers | Get launchers for a specific steamworks app ID, optionally filtered by OS
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
**403** | Authorization error |  -  |

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
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createBackup**
> any createBackup(createBackupDockerServiceRequest)


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

**any**

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
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

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
    type: "zipFile",
    os: "windows",
    dockerCompose: {
      composeFile: "composeFile_example",
    },
    zipFile: {
      zipFileUrl: "zipFileUrl_example",
      commandLine: "commandLine_example",
    },
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
        publishMode: "host",
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
> any deleteApp()


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

**any**

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
> any deleteAppLocationSetting()


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

**any**

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
> any deleteBinary()


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

**any**

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
> any deleteDockerRegistry()


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

**any**

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
> any deleteServerConfig()


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

**any**

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
> Array<AppLocationSetting> getAppLocationSettings()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetAppLocationSettingsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetAppLocationSettingsRequest = {
    // The app ID
  app: 1,
};

const data = await apiInstance.getAppLocationSettings(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined


### Return type

**Array<AppLocationSetting>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;AppLocationSettingCollection&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApps**
> Array<App> getApps()


### Example


```typescript
import { createConfiguration, AppApi } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request = {};

const data = await apiInstance.getApps(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<App>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;AppCollection&#x60; |  -  |
**401** | Unauthenticated |  -  |

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
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBackups**
> Array<Backup> getBackups()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetBackupsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetBackupsRequest = {
    // The docker service ID
  dockerService: 1,
};

const data = await apiInstance.getBackups(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined


### Return type

**Array<Backup>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;DockerBackupCollection&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBinaries**
> Array<Binary> getBinaries()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetBinariesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetBinariesRequest = {
    // The app ID
  app: 1,
};

const data = await apiInstance.getBinaries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined


### Return type

**Array<Binary>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;BinaryCollection&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
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
> Array<DockerRegistry> getDockerRegistries()


### Example


```typescript
import { createConfiguration, AppApi } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request = {};

const data = await apiInstance.getDockerRegistries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<DockerRegistry>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;DockerRegistryCollection&#x60; |  -  |
**401** | Unauthenticated |  -  |

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
> Array<Location> getLocations()


### Example


```typescript
import { createConfiguration, AppApi } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request = {};

const data = await apiInstance.getLocations(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Location>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;LocationCollection&#x60; |  -  |
**401** | Unauthenticated |  -  |

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
**200** | &#x60;ResourcePackage&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
**403** | Authorization error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getResourcePackages**
> Array<ResourcePackage> getResourcePackages()


### Example


```typescript
import { createConfiguration, AppApi } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request = {};

const data = await apiInstance.getResourcePackages(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ResourcePackage>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;ResourcePackageCollection&#x60; |  -  |
**401** | Unauthenticated |  -  |
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
> Array<ServerConfig> getServerConfigs()


### Example


```typescript
import { createConfiguration, AppApi } from '';
import type { AppApiGetServerConfigsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AppApi(configuration);

const request: AppApiGetServerConfigsRequest = {
    // The app ID
  app: 1,
};

const data = await apiInstance.getServerConfigs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined


### Return type

**Array<ServerConfig>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;ServerConfigCollection&#x60; |  -  |
**404** | Not found |  -  |
**401** | Unauthenticated |  -  |
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
    // A duration used to calculate start relative to end. If end is in the future, start is calculated as this duration before now. Any value specified for start supersedes this parameter. Default: 7d (optional)
  since: "since_example",
    // The max number of entries to return. Default: 100 (optional)
  limit: 1,
    // Determines the sort order of logs. Supported values are forward or backward. Default: forward (optional)
  direction: "direction_example",
    // Only return logs filtered by stream source like stdout or stderr. Default: null (optional)
  streamSource: "streamSource_example",
};

const data = await apiInstance.getServerLogs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dockerService** | [**number**] | The docker service ID | defaults to undefined
 **since** | [**string**] | A duration used to calculate start relative to end. If end is in the future, start is calculated as this duration before now. Any value specified for start supersedes this parameter. Default: 7d | (optional) defaults to undefined
 **limit** | [**number**] | The max number of entries to return. Default: 100 | (optional) defaults to undefined
 **direction** | [**string**] | Determines the sort order of logs. Supported values are forward or backward. Default: forward | (optional) defaults to undefined
 **streamSource** | [**string**] | Only return logs filtered by stream source like stdout or stderr. Default: null | (optional) defaults to undefined


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
    // The number of items to be shown per page. Use `-1` to display all results on a single page. Default: `10` (optional)
  perPage: 1,
    // Specifies the page number to retrieve in the paginated results. (optional)
  page: 1,
};

const data = await apiInstance.getServers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined
 **perPage** | [**number**] | The number of items to be shown per page. Use &#x60;-1&#x60; to display all results on a single page. Default: &#x60;10&#x60; | (optional) defaults to undefined
 **page** | [**number**] | Specifies the page number to retrieve in the paginated results. | (optional) defaults to undefined


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
**200** | Paginated set of &#x60;CustomDockerServiceResource&#x60; |  -  |
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
**202** | &#x60;BinaryResource&#x60; |  -  |
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
> any restartServer()


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

**any**

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

# **restoreBackup**
> any restoreBackup()


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

**any**

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
**200** | &#x60;SteamLauncherCollection&#x60; |  -  |
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
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
**401** | Unauthenticated |  -  |
**422** | Validation error |  -  |
**403** | Authorization error |  -  |

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
    type: "zipFile",
    os: "windows",
    dockerCompose: {
      composeFile: "composeFile_example",
    },
    zipFile: {
      zipFileUrl: "zipFileUrl_example",
      commandLine: "commandLine_example",
    },
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
        publishMode: "host",
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


