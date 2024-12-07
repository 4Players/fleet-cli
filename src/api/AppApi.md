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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiCreateAppRequest = {
  // StoreAppRequest
  storeAppRequest: null,
};

apiInstance.createApp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**401** |  |  -  |
**422** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createAppLocationSetting**
> AppLocationSetting createAppLocationSetting(storeAppLocationSettingRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiCreateAppLocationSettingRequest = {
  // number | The app ID
  app: 1,
  // StoreAppLocationSettingRequest
  storeAppLocationSettingRequest: null,
};

apiInstance.createAppLocationSetting(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**422** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createBackup**
> any createBackup(createBackupDockerServiceRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiCreateBackupRequest = {
  // number | The docker service ID
  dockerService: 1,
  // CreateBackupDockerServiceRequest
  createBackupDockerServiceRequest: null,
};

apiInstance.createBackup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**422** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createBinary**
> Binary createBinary(storeBinaryRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiCreateBinaryRequest = {
  // number | The app ID
  app: 1,
  // StoreBinaryRequest
  storeBinaryRequest: null,
};

apiInstance.createBinary(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**422** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createDockerRegistry**
> DockerRegistry createDockerRegistry(storeDockerRegistryRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiCreateDockerRegistryRequest = {
  // StoreDockerRegistryRequest
  storeDockerRegistryRequest: null,
};

apiInstance.createDockerRegistry(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**401** |  |  -  |
**422** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createServerConfig**
> ServerConfig createServerConfig(storeServerConfigRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiCreateServerConfigRequest = {
  // number | The app ID
  app: 1,
  // StoreServerConfigRequest
  storeServerConfigRequest: null,
};

apiInstance.createServerConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**422** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteApp**
> any deleteApp()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiDeleteAppRequest = {
  // number | The app ID
  app: 1,
};

apiInstance.deleteApp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAppLocationSetting**
> any deleteAppLocationSetting()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiDeleteAppLocationSettingRequest = {
  // number | The app location setting ID
  appLocationSetting: 1,
};

apiInstance.deleteAppLocationSetting(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteBinary**
> any deleteBinary()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiDeleteBinaryRequest = {
  // number | The binary ID
  binary: 1,
};

apiInstance.deleteBinary(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDockerRegistry**
> any deleteDockerRegistry()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiDeleteDockerRegistryRequest = {
  // number | The docker registry ID
  dockerRegistry: 1,
};

apiInstance.deleteDockerRegistry(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteServerConfig**
> any deleteServerConfig()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiDeleteServerConfigRequest = {
  // number | The server config ID
  serverConfig: 1,
};

apiInstance.deleteServerConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAppById**
> App getAppById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetAppByIdRequest = {
  // number | The app ID
  app: 1,
};

apiInstance.getAppById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAppLocationSettingById**
> AppLocationSetting getAppLocationSettingById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetAppLocationSettingByIdRequest = {
  // number | The app location setting ID
  appLocationSetting: 1,
};

apiInstance.getAppLocationSettingById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAppLocationSettings**
> Array<AppLocationSetting> getAppLocationSettings()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetAppLocationSettingsRequest = {
  // number | The app ID
  app: 1,
};

apiInstance.getAppLocationSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApps**
> Array<App> getApps()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:any = {};

apiInstance.getApps(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAuthToken**
> Auth getAuthToken(authRequest)

Authenticates the user based on the user\'s email, password, and session ID. If the user is authenticated successfully, it returns the user\'s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetAuthTokenRequest = {
  // AuthRequest
  authRequest: null,
};

apiInstance.getAuthToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**422** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBackups**
> Array<Backup> getBackups()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetBackupsRequest = {
  // number | The docker service ID
  dockerService: 1,
};

apiInstance.getBackups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBinaries**
> Array<Binary> getBinaries()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetBinariesRequest = {
  // number | The app ID
  app: 1,
};

apiInstance.getBinaries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBinaryById**
> Binary getBinaryById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetBinaryByIdRequest = {
  // number | The binary ID
  binary: 1,
};

apiInstance.getBinaryById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDockerRegistries**
> Array<DockerRegistry> getDockerRegistries()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:any = {};

apiInstance.getDockerRegistries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDockerRegistryById**
> DockerRegistry getDockerRegistryById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetDockerRegistryByIdRequest = {
  // number | The docker registry ID
  dockerRegistry: 1,
};

apiInstance.getDockerRegistryById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLatestBackup**
> Backup getLatestBackup()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetLatestBackupRequest = {
  // number | The docker service ID
  dockerService: 1,
};

apiInstance.getLatestBackup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLocations**
> Array<Location> getLocations()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:any = {};

apiInstance.getLocations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getResourcePackageById**
> ResourcePackage getResourcePackageById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetResourcePackageByIdRequest = {
  // number | The resource package ID
  resourcePackage: 1,
};

apiInstance.getResourcePackageById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getResourcePackages**
> Array<ResourcePackage> getResourcePackages()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:any = {};

apiInstance.getResourcePackages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getServerBackupDownloadUrl**
> BackupDownload getServerBackupDownloadUrl()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetServerBackupDownloadUrlRequest = {
  // number | The docker service ID
  dockerService: 1,
};

apiInstance.getServerBackupDownloadUrl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getServerById**
> Server getServerById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetServerByIdRequest = {
  // number | The app ID
  app: 1,
  // number | The docker service ID
  dockerService: 1,
};

apiInstance.getServerById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getServerConfigById**
> ServerConfig getServerConfigById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetServerConfigByIdRequest = {
  // number | The server config ID
  serverConfig: 1,
};

apiInstance.getServerConfigById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getServerConfigs**
> Array<ServerConfig> getServerConfigs()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetServerConfigsRequest = {
  // number | The app ID
  app: 1,
};

apiInstance.getServerConfigs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getServerLogs**
> ServiceLogs getServerLogs()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetServerLogsRequest = {
  // number | The docker service ID
  dockerService: 1,
  // string | A duration used to calculate start relative to end. If end is in the future, start is calculated as this duration before now. Any value specified for start supersedes this parameter. Default: 7d (optional)
  since: "since_example",
  // number | The max number of entries to return. Default: 100 (optional)
  limit: 1,
  // string | Determines the sort order of logs. Supported values are forward or backward. Default: forward (optional)
  direction: "direction_example",
  // string | Only return logs filtered by stream source like stdout or stderr. Default: null (optional)
  streamSource: "streamSource_example",
};

apiInstance.getServerLogs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**422** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getServers**
> GetServers200Response getServers()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetServersRequest = {
  // number | The app ID
  app: 1,
  // number | The number of items to be shown per page. Use `-1` to display all results on a single page. Default: `10` (optional)
  perPage: 1,
  // number | Specifies the page number to retrieve in the paginated results. (optional)
  page: 1,
};

apiInstance.getServers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**422** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTaggedImages**
> GetTaggedImages200Response getTaggedImages()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetTaggedImagesRequest = {
  // number | The docker registry ID
  dockerRegistry: 1,
};

apiInstance.getTaggedImages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listServicesForAppLocationSetting**
> Array<Server> listServicesForAppLocationSetting()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiListServicesForAppLocationSettingRequest = {
  // number | The app ID
  app: 1,
  // number | The app location setting ID
  appLocationSetting: 1,
};

apiInstance.listServicesForAppLocationSetting(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **refreshBinary**
> Binary refreshBinary()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiRefreshBinaryRequest = {
  // number | The binary ID
  binary: 1,
};

apiInstance.refreshBinary(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**202** |  |  -  |
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **refreshTaggedImages**
> GetTaggedImages200Response refreshTaggedImages()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiRefreshTaggedImagesRequest = {
  // number | The docker registry ID
  dockerRegistry: 1,
};

apiInstance.refreshTaggedImages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **restartServer**
> any restartServer()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiRestartServerRequest = {
  // number | The docker service ID
  dockerService: 1,
};

apiInstance.restartServer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **restoreBackup**
> any restoreBackup()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiRestoreBackupRequest = {
  // number | The docker service ID
  dockerService: 1,
};

apiInstance.restoreBackup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **steamGetBranches**
> Array<SteamBranch> steamGetBranches()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiSteamGetBranchesRequest = {
  // number | The steamworks app id
  appId: 1,
};

apiInstance.steamGetBranches(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**401** |  |  -  |
**422** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **steamGetLauncher**
> Array<SteamLauncher> steamGetLauncher()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiSteamGetLauncherRequest = {
  // number | The steamworks app id
  appId: 1,
  // OperatingSystem | The operating system of the binary (optional)
  os: "windows",
};

apiInstance.steamGetLauncher(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**401** |  |  -  |
**422** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAppById**
> App updateAppById(updateAppRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiUpdateAppByIdRequest = {
  // number | The app ID
  app: 1,
  // UpdateAppRequest
  updateAppRequest: null,
};

apiInstance.updateAppById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**422** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAppLocationSetting**
> AppLocationSetting updateAppLocationSetting(updateAppLocationSettingRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiUpdateAppLocationSettingRequest = {
  // number | The app location setting ID
  appLocationSetting: 1,
  // UpdateAppLocationSettingRequest
  updateAppLocationSettingRequest: null,
};

apiInstance.updateAppLocationSetting(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**422** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateBinary**
> Binary updateBinary(updateBinaryRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiUpdateBinaryRequest = {
  // number | The binary ID
  binary: 1,
  // UpdateBinaryRequest
  updateBinaryRequest: null,
};

apiInstance.updateBinary(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**422** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDockerRegistry**
> DockerRegistry updateDockerRegistry(updateDockerRegistryRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiUpdateDockerRegistryRequest = {
  // number | The docker registry ID
  dockerRegistry: 1,
  // UpdateDockerRegistryRequest
  updateDockerRegistryRequest: null,
};

apiInstance.updateDockerRegistry(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**422** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateServerConfig**
> ServerConfig updateServerConfig(updateServerConfigRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiUpdateServerConfigRequest = {
  // number | The server config ID
  serverConfig: 1,
  // UpdateServerConfigRequest
  updateServerConfigRequest: null,
};

apiInstance.updateServerConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
**404** |  |  -  |
**401** |  |  -  |
**422** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


