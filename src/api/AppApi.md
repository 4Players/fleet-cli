# .AppApi

All URIs are relative to *https://fleet.4players.io/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApp**](AppApi.md#createApp) | **POST** /v1/apps | Create an app
[**createAppLocationSetting**](AppApi.md#createAppLocationSetting) | **POST** /v1/apps/{app}/location-settings | Create a new location setting
[**createBackup**](AppApi.md#createBackup) | **POST** /v1/services/{service}/backup | Creates a backup of the service
[**createBinary**](AppApi.md#createBinary) | **POST** /v1/apps/{app}/binaries | Create a binary and the related file
[**createDockerRegistry**](AppApi.md#createDockerRegistry) | **POST** /v1/docker-registries | Create a new docker registry
[**createServerConfig**](AppApi.md#createServerConfig) | **POST** /v1/apps/{app}/configs | Create a new server config
[**deleteApp**](AppApi.md#deleteApp) | **DELETE** /v1/apps/{app} | Delete a specific app
[**deleteAppLocationSetting**](AppApi.md#deleteAppLocationSetting) | **DELETE** /v1/app-location-settings/{appLocationSetting} | Delete a location setting
[**deleteAuthToken**](AppApi.md#deleteAuthToken) | **DELETE** /v1/auth/token | Handles the deletion of a user\&#39;s authentication tokens
[**deleteBinary**](AppApi.md#deleteBinary) | **DELETE** /v1/binaries/{binary} | Delete a specified binary
[**deleteDockerRegistry**](AppApi.md#deleteDockerRegistry) | **DELETE** /v1/docker-registries/{dockerRegistry} | Delete a specific docker registry
[**deleteServerConfig**](AppApi.md#deleteServerConfig) | **DELETE** /v1/server-configs/{serverConfig} | Delete a specific server config
[**getAppById**](AppApi.md#getAppById) | **GET** /v1/apps/{app} | Show a specific app
[**getAppLocationSettings**](AppApi.md#getAppLocationSettings) | **GET** /v1/apps/{app}/location-settings | Show all location settings
[**getApps**](AppApi.md#getApps) | **GET** /v1/apps | Show all apps
[**getAuthToken**](AppApi.md#getAuthToken) | **POST** /v1/auth/token | Handles user authentication
[**getBackups**](AppApi.md#getBackups) | **GET** /v1/services/{service}/backups | List all backups for the specified Docker service
[**getBinaries**](AppApi.md#getBinaries) | **GET** /v1/apps/{app}/binaries | Show all binaries
[**getBinaryById**](AppApi.md#getBinaryById) | **GET** /v1/binaries/{binary} | Show a specific binary
[**getDockerRegistries**](AppApi.md#getDockerRegistries) | **GET** /v1/docker-registries | Show all docker registries
[**getDockerRegistryById**](AppApi.md#getDockerRegistryById) | **GET** /v1/docker-registries/{dockerRegistry} | Display a specific docker registry
[**getLocations**](AppApi.md#getLocations) | **GET** /v1/nodes/locations | Show a unique listing of locations based on active and ready worker nodes
[**getMostRecentBackup**](AppApi.md#getMostRecentBackup) | **GET** /v1/services/{service}/backup | Display the most recent backup for the specified Docker service
[**getServerBackupDownloadUrl**](AppApi.md#getServerBackupDownloadUrl) | **GET** /v1/services/{service}/backup/download | Generates a presigned URL for downloading a backup from AWS S3 if the backup method is \&#39;archive\&#39;
[**getServerById**](AppApi.md#getServerById) | **GET** /v1/apps/{app}/services/{service} | Display a specific DockerService associated with the given App
[**getServerConfigById**](AppApi.md#getServerConfigById) | **GET** /v1/server-configs/{serverConfig} | Show a specific server config
[**getServerConfigs**](AppApi.md#getServerConfigs) | **GET** /v1/apps/{app}/configs | Show all server configs
[**getServerLogs**](AppApi.md#getServerLogs) | **GET** /v1/services/{service}/logs | Get stdout and stderr logs from a service or task
[**getServers**](AppApi.md#getServers) | **GET** /v1/apps/{app}/services | Show all services for a given app
[**restartServer**](AppApi.md#restartServer) | **POST** /v1/services/{service}/restart | Restarts a specific Docker service
[**restoreBackup**](AppApi.md#restoreBackup) | **POST** /v1/services/{service}/restore | Restore a backup for a specified Docker service
[**updateAppLocationSetting**](AppApi.md#updateAppLocationSetting) | **PUT** /v1/app-location-settings/{appLocationSetting} | Update a location setting
[**updateBinary**](AppApi.md#updateBinary) | **PUT** /v1/binaries/{binary} | Update a binary and the related file
[**updateDockerRegistry**](AppApi.md#updateDockerRegistry) | **PUT** /v1/docker-registries/{dockerRegistry} | Update a specific docker registry
[**updateServerConfig**](AppApi.md#updateServerConfig) | **PUT** /v1/server-configs/{serverConfig} | Update a server config


# **createApp**
> App createApp()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiCreateAppRequest = {
  // CreateAppRequest (optional)
  createAppRequest: null,
};

apiInstance.createApp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAppRequest** | **CreateAppRequest**|  |


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
> AppLocationSetting createAppLocationSetting()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiCreateAppLocationSettingRequest = {
  // number | The app ID
  app: 1,
  // CreateAppLocationSettingRequest (optional)
  createAppLocationSettingRequest: null,
};

apiInstance.createAppLocationSetting(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAppLocationSettingRequest** | **CreateAppLocationSettingRequest**|  |
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
> any createBackup()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiCreateBackupRequest = {
  // number | The service ID
  service: 1,
  // CreateBackupRequest (optional)
  createBackupRequest: null,
};

apiInstance.createBackup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBackupRequest** | **CreateBackupRequest**|  |
 **service** | [**number**] | The service ID | defaults to undefined


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
> Binary createBinary()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiCreateBinaryRequest = {
  // number | The app ID
  app: 1,
  // CreateBinaryRequest (optional)
  createBinaryRequest: null,
};

apiInstance.createBinary(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBinaryRequest** | **CreateBinaryRequest**|  |
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
> DockerRegistry createDockerRegistry()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiCreateDockerRegistryRequest = {
  // CreateDockerRegistryRequest (optional)
  createDockerRegistryRequest: null,
};

apiInstance.createDockerRegistry(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDockerRegistryRequest** | **CreateDockerRegistryRequest**|  |


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
> ServerConfig createServerConfig()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiCreateServerConfigRequest = {
  // number | The app ID
  app: 1,
  // CreateServerConfigRequest (optional)
  createServerConfigRequest: null,
};

apiInstance.createServerConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createServerConfigRequest** | **CreateServerConfigRequest**|  |
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

This method is responsible for deleting an App record from the database. It locates the App instance using the provided ID, and if found, proceeds to delete it. Upon successful deletion, an HTTP 204 No Content response is returned, indicating that the action was successful.

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

# **deleteAuthToken**
> any deleteAuthToken()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiDeleteAuthTokenRequest = {
  // string | The session id of the user
  sid: "1234567890ABCDEFG",
};

apiInstance.deleteAuthToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sid** | [**string**] | The session id of the user | defaults to undefined


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
**422** |  |  -  |
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteBinary**
> any deleteBinary()

It first finds the Binary instance by its ID. If the instance is found, it is deleted. The method then returns an HTTP 204 No Content response to indicate successful deletion.

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

This method handles the deletion of a ServerConfig record from the database. It first finds the ServerConfig instance by its ID, and if found, deletes it. Returns an HTTP 204 No Content response upon successful deletion.

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
> Auth getAuthToken()

Validates the incoming request and attempts to authenticate the user based on the provided session ID. If the user is authenticated successfully, it returns an AuthResource containing the user\'s bearer token.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetAuthTokenRequest = {
  // GetAuthTokenRequest (optional)
  getAuthTokenRequest: null,
};

apiInstance.getAuthToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getAuthTokenRequest** | **GetAuthTokenRequest**|  |


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
  // number | The service ID
  service: 1,
};

apiInstance.getBackups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**number**] | The service ID | defaults to undefined


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

Eager load file types and config templates to reduce the number of queries.

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

# **getLocations**
> Array<Location> getLocations()

Synchronizes the local database with the state of Docker nodes, then filters for active, ready worker nodes to create a unique listing of their location labels. These nodes are suitable for deployment.

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

# **getMostRecentBackup**
> Backup getMostRecentBackup()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetMostRecentBackupRequest = {
  // number | The service ID
  service: 1,
};

apiInstance.getMostRecentBackup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**number**] | The service ID | defaults to undefined


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

# **getServerBackupDownloadUrl**
> BackupDownload getServerBackupDownloadUrl()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetServerBackupDownloadUrlRequest = {
  // number | The service ID
  service: 1,
};

apiInstance.getServerBackupDownloadUrl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**number**] | The service ID | defaults to undefined


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
  // number | The service ID
  service: 1,
};

apiInstance.getServerById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | The app ID | defaults to undefined
 **service** | [**number**] | The service ID | defaults to undefined


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
  // number | The service ID
  service: 1,
  // boolean | details Flag (optional)
  details: true,
  // boolean | follow Flag (optional)
  follow: true,
  // boolean | stdout Flag (optional)
  stdout: true,
  // boolean | stderr Flag (optional)
  stderr: true,
  // number | since Flag (optional)
  since: 0,
  // boolean | timestamps Flag (optional)
  timestamps: true,
  // string | tail options (optional)
  tail: "tail_example",
};

apiInstance.getServerLogs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**number**] | The service ID | defaults to undefined
 **details** | [**boolean**] | details Flag | (optional) defaults to undefined
 **follow** | [**boolean**] | follow Flag | (optional) defaults to undefined
 **stdout** | [**boolean**] | stdout Flag | (optional) defaults to undefined
 **stderr** | [**boolean**] | stderr Flag | (optional) defaults to undefined
 **since** | [**number**] | since Flag | (optional) defaults to undefined
 **timestamps** | [**boolean**] | timestamps Flag | (optional) defaults to undefined
 **tail** | [**string**] | tail options | (optional) defaults to undefined


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
> Array<Server> getServers()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiGetServersRequest = {
  // number | Instance of the app to filter services by.
  app: 1,
};

apiInstance.getServers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**number**] | Instance of the app to filter services by. | defaults to undefined


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
  // number | The service ID
  service: 1,
  // any (optional)
  body: {},
};

apiInstance.restartServer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **service** | [**number**] | The service ID | defaults to undefined


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
  // number | The service ID
  service: 1,
  // any (optional)
  body: {},
};

apiInstance.restoreBackup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **service** | [**number**] | The service ID | defaults to undefined


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
**403** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAppLocationSetting**
> AppLocationSetting updateAppLocationSetting()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiUpdateAppLocationSettingRequest = {
  // number | The app location setting ID
  appLocationSetting: 1,
  // UpdateAppLocationSettingRequest (optional)
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
> Binary updateBinary()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiUpdateBinaryRequest = {
  // number | The binary ID
  binary: 1,
  // CreateBinaryRequest (optional)
  createBinaryRequest: null,
};

apiInstance.updateBinary(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBinaryRequest** | **CreateBinaryRequest**|  |
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
> DockerRegistry updateDockerRegistry()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiUpdateDockerRegistryRequest = {
  // number | The docker registry ID
  dockerRegistry: 1,
  // UpdateDockerRegistryRequest (optional)
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
> ServerConfig updateServerConfig()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppApi(configuration);

let body:.AppApiUpdateServerConfigRequest = {
  // number | The server config ID
  serverConfig: 1,
  // CreateServerConfigRequest (optional)
  createServerConfigRequest: null,
};

apiInstance.updateServerConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createServerConfigRequest** | **CreateServerConfigRequest**|  |
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


