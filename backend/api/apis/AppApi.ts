// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { App } from '../models/App.ts';
import { AppLocationSetting } from '../models/AppLocationSetting.ts';
import { Auth } from '../models/Auth.ts';
import { AuthRequest } from '../models/AuthRequest.ts';
import { Backup } from '../models/Backup.ts';
import { BackupDownload } from '../models/BackupDownload.ts';
import { Binary } from '../models/Binary.ts';
import { CreateBackupDockerServiceRequest } from '../models/CreateBackupDockerServiceRequest.ts';
import { DockerRegistry } from '../models/DockerRegistry.ts';
import { GetServers200Response } from '../models/GetServers200Response.ts';
import { GetTaggedImages200Response } from '../models/GetTaggedImages200Response.ts';
import { InlineObject } from '../models/InlineObject.ts';
import { InlineObject1 } from '../models/InlineObject1.ts';
import { Location } from '../models/Location.ts';
import { OperatingSystem } from '../models/OperatingSystem.ts';
import { PatchMetadataRequest } from '../models/PatchMetadataRequest.ts';
import { ResourcePackage } from '../models/ResourcePackage.ts';
import { Server } from '../models/Server.ts';
import { ServerConfig } from '../models/ServerConfig.ts';
import { ServiceLogs } from '../models/ServiceLogs.ts';
import { SetMetadataRequest } from '../models/SetMetadataRequest.ts';
import { SteamBranch } from '../models/SteamBranch.ts';
import { SteamLauncher } from '../models/SteamLauncher.ts';
import { StoreAppLocationSettingRequest } from '../models/StoreAppLocationSettingRequest.ts';
import { StoreAppRequest } from '../models/StoreAppRequest.ts';
import { StoreBinaryRequest } from '../models/StoreBinaryRequest.ts';
import { StoreDockerRegistryRequest } from '../models/StoreDockerRegistryRequest.ts';
import { StoreMinecraftTemplateRequest } from '../models/StoreMinecraftTemplateRequest.ts';
import { StorePalworldTemplateRequest } from '../models/StorePalworldTemplateRequest.ts';
import { StoreServerConfigRequest } from '../models/StoreServerConfigRequest.ts';
import { UpdateAppLocationSettingRequest } from '../models/UpdateAppLocationSettingRequest.ts';
import { UpdateAppRequest } from '../models/UpdateAppRequest.ts';
import { UpdateBinaryRequest } from '../models/UpdateBinaryRequest.ts';
import { UpdateDockerRegistryRequest } from '../models/UpdateDockerRegistryRequest.ts';
import { UpdateServerConfigRequest } from '../models/UpdateServerConfigRequest.ts';

/**
 * no description
 */
export class AppApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create an app
     * @param storeAppRequest 
     */
    public async createApp(storeAppRequest: StoreAppRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'storeAppRequest' is not null or undefined
        if (storeAppRequest === null || storeAppRequest === undefined) {
            throw new RequiredError("AppApi", "createApp", "storeAppRequest");
        }


        // Path Params
        const localVarPath = '/v1/apps';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(storeAppRequest, "StoreAppRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a new location setting
     * @param app The app ID
     * @param storeAppLocationSettingRequest 
     */
    public async createAppLocationSetting(app: number, storeAppLocationSettingRequest: StoreAppLocationSettingRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app' is not null or undefined
        if (app === null || app === undefined) {
            throw new RequiredError("AppApi", "createAppLocationSetting", "app");
        }


        // verify required parameter 'storeAppLocationSettingRequest' is not null or undefined
        if (storeAppLocationSettingRequest === null || storeAppLocationSettingRequest === undefined) {
            throw new RequiredError("AppApi", "createAppLocationSetting", "storeAppLocationSettingRequest");
        }


        // Path Params
        const localVarPath = '/v1/apps/{app}/location-settings'
            .replace('{' + 'app' + '}', encodeURIComponent(String(app)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(storeAppLocationSettingRequest, "StoreAppLocationSettingRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates a backup
     * @param dockerService The docker service ID
     * @param createBackupDockerServiceRequest 
     */
    public async createBackup(dockerService: number, createBackupDockerServiceRequest: CreateBackupDockerServiceRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dockerService' is not null or undefined
        if (dockerService === null || dockerService === undefined) {
            throw new RequiredError("AppApi", "createBackup", "dockerService");
        }


        // verify required parameter 'createBackupDockerServiceRequest' is not null or undefined
        if (createBackupDockerServiceRequest === null || createBackupDockerServiceRequest === undefined) {
            throw new RequiredError("AppApi", "createBackup", "createBackupDockerServiceRequest");
        }


        // Path Params
        const localVarPath = '/v1/services/{dockerService}/backup'
            .replace('{' + 'dockerService' + '}', encodeURIComponent(String(dockerService)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createBackupDockerServiceRequest, "CreateBackupDockerServiceRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a binary and the related entity
     * @param app The app ID
     * @param storeBinaryRequest 
     */
    public async createBinary(app: number, storeBinaryRequest: StoreBinaryRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app' is not null or undefined
        if (app === null || app === undefined) {
            throw new RequiredError("AppApi", "createBinary", "app");
        }


        // verify required parameter 'storeBinaryRequest' is not null or undefined
        if (storeBinaryRequest === null || storeBinaryRequest === undefined) {
            throw new RequiredError("AppApi", "createBinary", "storeBinaryRequest");
        }


        // Path Params
        const localVarPath = '/v1/apps/{app}/binaries'
            .replace('{' + 'app' + '}', encodeURIComponent(String(app)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(storeBinaryRequest, "StoreBinaryRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a new docker registry
     * @param storeDockerRegistryRequest 
     */
    public async createDockerRegistry(storeDockerRegistryRequest: StoreDockerRegistryRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'storeDockerRegistryRequest' is not null or undefined
        if (storeDockerRegistryRequest === null || storeDockerRegistryRequest === undefined) {
            throw new RequiredError("AppApi", "createDockerRegistry", "storeDockerRegistryRequest");
        }


        // Path Params
        const localVarPath = '/v1/docker-registries';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(storeDockerRegistryRequest, "StoreDockerRegistryRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a new server config
     * @param app The app ID
     * @param storeServerConfigRequest 
     */
    public async createServerConfig(app: number, storeServerConfigRequest: StoreServerConfigRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app' is not null or undefined
        if (app === null || app === undefined) {
            throw new RequiredError("AppApi", "createServerConfig", "app");
        }


        // verify required parameter 'storeServerConfigRequest' is not null or undefined
        if (storeServerConfigRequest === null || storeServerConfigRequest === undefined) {
            throw new RequiredError("AppApi", "createServerConfig", "storeServerConfigRequest");
        }


        // Path Params
        const localVarPath = '/v1/apps/{app}/configs'
            .replace('{' + 'app' + '}', encodeURIComponent(String(app)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(storeServerConfigRequest, "StoreServerConfigRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete a specific app
     * @param app The app ID
     */
    public async deleteApp(app: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app' is not null or undefined
        if (app === null || app === undefined) {
            throw new RequiredError("AppApi", "deleteApp", "app");
        }


        // Path Params
        const localVarPath = '/v1/apps/{app}'
            .replace('{' + 'app' + '}', encodeURIComponent(String(app)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete a location setting
     * @param appLocationSetting The app location setting ID
     */
    public async deleteAppLocationSetting(appLocationSetting: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appLocationSetting' is not null or undefined
        if (appLocationSetting === null || appLocationSetting === undefined) {
            throw new RequiredError("AppApi", "deleteAppLocationSetting", "appLocationSetting");
        }


        // Path Params
        const localVarPath = '/v1/app-location-settings/{appLocationSetting}'
            .replace('{' + 'appLocationSetting' + '}', encodeURIComponent(String(appLocationSetting)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete a specified binary
     * @param binary The binary ID
     */
    public async deleteBinary(binary: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'binary' is not null or undefined
        if (binary === null || binary === undefined) {
            throw new RequiredError("AppApi", "deleteBinary", "binary");
        }


        // Path Params
        const localVarPath = '/v1/binaries/{binary}'
            .replace('{' + 'binary' + '}', encodeURIComponent(String(binary)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public async deleteDockerRegistry(dockerRegistry: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dockerRegistry' is not null or undefined
        if (dockerRegistry === null || dockerRegistry === undefined) {
            throw new RequiredError("AppApi", "deleteDockerRegistry", "dockerRegistry");
        }


        // Path Params
        const localVarPath = '/v1/docker-registries/{dockerRegistry}'
            .replace('{' + 'dockerRegistry' + '}', encodeURIComponent(String(dockerRegistry)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete a specific server config
     * @param serverConfig The server config ID
     */
    public async deleteServerConfig(serverConfig: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'serverConfig' is not null or undefined
        if (serverConfig === null || serverConfig === undefined) {
            throw new RequiredError("AppApi", "deleteServerConfig", "serverConfig");
        }


        // Path Params
        const localVarPath = '/v1/server-configs/{serverConfig}'
            .replace('{' + 'serverConfig' + '}', encodeURIComponent(String(serverConfig)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete all metadata from the service
     * @param dockerService The docker service ID
     */
    public async dockerServicesMetadataDeleteAll(dockerService: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dockerService' is not null or undefined
        if (dockerService === null || dockerService === undefined) {
            throw new RequiredError("AppApi", "dockerServicesMetadataDeleteAll", "dockerService");
        }


        // Path Params
        const localVarPath = '/v1/services/{dockerService}/metadata'
            .replace('{' + 'dockerService' + '}', encodeURIComponent(String(dockerService)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete specific metadata keys from the service
     * @param dockerService The docker service ID
     * @param metadata 
     */
    public async dockerServicesMetadataDeleteKeys(dockerService: number, metadata: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dockerService' is not null or undefined
        if (dockerService === null || dockerService === undefined) {
            throw new RequiredError("AppApi", "dockerServicesMetadataDeleteKeys", "dockerService");
        }


        // verify required parameter 'metadata' is not null or undefined
        if (metadata === null || metadata === undefined) {
            throw new RequiredError("AppApi", "dockerServicesMetadataDeleteKeys", "metadata");
        }


        // Path Params
        const localVarPath = '/v1/services/{dockerService}/metadata/keys'
            .replace('{' + 'dockerService' + '}', encodeURIComponent(String(dockerService)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (metadata !== undefined) {
            const serializedParams = ObjectSerializer.serialize(metadata, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("metadata", serializedParam);
            }
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Replaces the entire metadata set with only the values provided in the request.
     * Set metadata for the service
     * @param dockerService The docker service ID
     * @param setMetadataRequest 
     */
    public async dockerServicesMetadataSet(dockerService: number, setMetadataRequest?: SetMetadataRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dockerService' is not null or undefined
        if (dockerService === null || dockerService === undefined) {
            throw new RequiredError("AppApi", "dockerServicesMetadataSet", "dockerService");
        }



        // Path Params
        const localVarPath = '/v1/services/{dockerService}/metadata'
            .replace('{' + 'dockerService' + '}', encodeURIComponent(String(dockerService)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(setMetadataRequest, "SetMetadataRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates existing metadata keys or adds new keys without deleting metadata that is not mentioned.
     * Update metadata for the service
     * @param dockerService The docker service ID
     * @param patchMetadataRequest 
     */
    public async dockerServicesMetadataUpdate(dockerService: number, patchMetadataRequest?: PatchMetadataRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dockerService' is not null or undefined
        if (dockerService === null || dockerService === undefined) {
            throw new RequiredError("AppApi", "dockerServicesMetadataUpdate", "dockerService");
        }



        // Path Params
        const localVarPath = '/v1/services/{dockerService}/metadata'
            .replace('{' + 'dockerService' + '}', encodeURIComponent(String(dockerService)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(patchMetadataRequest, "PatchMetadataRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Show a specific app
     * @param app The app ID
     */
    public async getAppById(app: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app' is not null or undefined
        if (app === null || app === undefined) {
            throw new RequiredError("AppApi", "getAppById", "app");
        }


        // Path Params
        const localVarPath = '/v1/apps/{app}'
            .replace('{' + 'app' + '}', encodeURIComponent(String(app)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Show a specific app location setting
     * @param appLocationSetting The app location setting ID
     */
    public async getAppLocationSettingById(appLocationSetting: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appLocationSetting' is not null or undefined
        if (appLocationSetting === null || appLocationSetting === undefined) {
            throw new RequiredError("AppApi", "getAppLocationSettingById", "appLocationSetting");
        }


        // Path Params
        const localVarPath = '/v1/app-location-settings/{appLocationSetting}'
            .replace('{' + 'appLocationSetting' + '}', encodeURIComponent(String(appLocationSetting)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Show all location settings
     * @param app The app ID
     */
    public async getAppLocationSettings(app: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app' is not null or undefined
        if (app === null || app === undefined) {
            throw new RequiredError("AppApi", "getAppLocationSettings", "app");
        }


        // Path Params
        const localVarPath = '/v1/apps/{app}/location-settings'
            .replace('{' + 'app' + '}', encodeURIComponent(String(app)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Show all apps
     */
    public async getApps(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/apps';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Authenticates the user based on the user\'s email, password, and session ID. If the user is authenticated successfully, it returns the user\'s token.  The token is non-expiring and must be used as a Bearer token in subsequent requests.+
     * Get token
     * @param authRequest 
     */
    public async getAuthToken(authRequest: AuthRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authRequest' is not null or undefined
        if (authRequest === null || authRequest === undefined) {
            throw new RequiredError("AppApi", "getAuthToken", "authRequest");
        }


        // Path Params
        const localVarPath = '/v1/auth/token';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(authRequest, "AuthRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List all backups
     * @param dockerService The docker service ID
     */
    public async getBackups(dockerService: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dockerService' is not null or undefined
        if (dockerService === null || dockerService === undefined) {
            throw new RequiredError("AppApi", "getBackups", "dockerService");
        }


        // Path Params
        const localVarPath = '/v1/services/{dockerService}/backups'
            .replace('{' + 'dockerService' + '}', encodeURIComponent(String(dockerService)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Show all binaries
     * @param app The app ID
     */
    public async getBinaries(app: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app' is not null or undefined
        if (app === null || app === undefined) {
            throw new RequiredError("AppApi", "getBinaries", "app");
        }


        // Path Params
        const localVarPath = '/v1/apps/{app}/binaries'
            .replace('{' + 'app' + '}', encodeURIComponent(String(app)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Show a specific binary
     * @param binary The binary ID
     */
    public async getBinaryById(binary: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'binary' is not null or undefined
        if (binary === null || binary === undefined) {
            throw new RequiredError("AppApi", "getBinaryById", "binary");
        }


        // Path Params
        const localVarPath = '/v1/binaries/{binary}'
            .replace('{' + 'binary' + '}', encodeURIComponent(String(binary)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Show all docker registries
     */
    public async getDockerRegistries(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/docker-registries';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Display a specific docker registry
     * @param dockerRegistry The docker registry ID
     */
    public async getDockerRegistryById(dockerRegistry: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dockerRegistry' is not null or undefined
        if (dockerRegistry === null || dockerRegistry === undefined) {
            throw new RequiredError("AppApi", "getDockerRegistryById", "dockerRegistry");
        }


        // Path Params
        const localVarPath = '/v1/docker-registries/{dockerRegistry}'
            .replace('{' + 'dockerRegistry' + '}', encodeURIComponent(String(dockerRegistry)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Display the latest backup
     * @param dockerService The docker service ID
     */
    public async getLatestBackup(dockerService: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dockerService' is not null or undefined
        if (dockerService === null || dockerService === undefined) {
            throw new RequiredError("AppApi", "getLatestBackup", "dockerService");
        }


        // Path Params
        const localVarPath = '/v1/services/{dockerService}/backup'
            .replace('{' + 'dockerService' + '}', encodeURIComponent(String(dockerService)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Show a unique listing of locations based on active and ready worker nodes
     */
    public async getLocations(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/nodes/locations';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Show a specified resource package
     * @param resourcePackage The resource package ID
     */
    public async getResourcePackageById(resourcePackage: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'resourcePackage' is not null or undefined
        if (resourcePackage === null || resourcePackage === undefined) {
            throw new RequiredError("AppApi", "getResourcePackageById", "resourcePackage");
        }


        // Path Params
        const localVarPath = '/v1/resource-packages/{resourcePackage}'
            .replace('{' + 'resourcePackage' + '}', encodeURIComponent(String(resourcePackage)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Show all available resource packages
     */
    public async getResourcePackages(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/resource-packages';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Generate a presigned URL for downloading the latest backup from AWS S3
     * @param dockerService The docker service ID
     */
    public async getServerBackupDownloadUrl(dockerService: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dockerService' is not null or undefined
        if (dockerService === null || dockerService === undefined) {
            throw new RequiredError("AppApi", "getServerBackupDownloadUrl", "dockerService");
        }


        // Path Params
        const localVarPath = '/v1/services/{dockerService}/backup/download'
            .replace('{' + 'dockerService' + '}', encodeURIComponent(String(dockerService)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Display a specific service
     * @param app The app ID
     * @param dockerService The docker service ID
     */
    public async getServerById(app: number, dockerService: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app' is not null or undefined
        if (app === null || app === undefined) {
            throw new RequiredError("AppApi", "getServerById", "app");
        }


        // verify required parameter 'dockerService' is not null or undefined
        if (dockerService === null || dockerService === undefined) {
            throw new RequiredError("AppApi", "getServerById", "dockerService");
        }


        // Path Params
        const localVarPath = '/v1/apps/{app}/services/{dockerService}'
            .replace('{' + 'app' + '}', encodeURIComponent(String(app)))
            .replace('{' + 'dockerService' + '}', encodeURIComponent(String(dockerService)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Show a specific server config
     * @param serverConfig The server config ID
     */
    public async getServerConfigById(serverConfig: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'serverConfig' is not null or undefined
        if (serverConfig === null || serverConfig === undefined) {
            throw new RequiredError("AppApi", "getServerConfigById", "serverConfig");
        }


        // Path Params
        const localVarPath = '/v1/server-configs/{serverConfig}'
            .replace('{' + 'serverConfig' + '}', encodeURIComponent(String(serverConfig)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Show all server configs
     * @param app The app ID
     */
    public async getServerConfigs(app: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app' is not null or undefined
        if (app === null || app === undefined) {
            throw new RequiredError("AppApi", "getServerConfigs", "app");
        }


        // Path Params
        const localVarPath = '/v1/apps/{app}/configs'
            .replace('{' + 'app' + '}', encodeURIComponent(String(app)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get stdout and stderr logs from the latest gameserver task
     * @param dockerService The docker service ID
     * @param since A duration used to calculate start relative to end. If end is in the future, start is calculated as this duration before now. Any value specified for start supersedes this parameter. Default: 7d
     * @param limit The max number of entries to return. Default: 100
     * @param direction Determines the sort order of logs. Supported values are forward or backward. Default: forward
     * @param streamSource Only return logs filtered by stream source like stdout or stderr. Default: null
     */
    public async getServerLogs(dockerService: number, since?: string, limit?: number, direction?: string, streamSource?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dockerService' is not null or undefined
        if (dockerService === null || dockerService === undefined) {
            throw new RequiredError("AppApi", "getServerLogs", "dockerService");
        }






        // Path Params
        const localVarPath = '/v1/services/{dockerService}/logs'
            .replace('{' + 'dockerService' + '}', encodeURIComponent(String(dockerService)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (direction !== undefined) {
            requestContext.setQueryParam("direction", ObjectSerializer.serialize(direction, "string", ""));
        }

        // Query Params
        if (streamSource !== undefined) {
            requestContext.setQueryParam("streamSource", ObjectSerializer.serialize(streamSource, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Show all services
     * @param app The app ID
     * @param perPage The number of items to be shown per page. Use &#x60;-1&#x60; to display all results on a single page. Default: &#x60;10&#x60;
     * @param page Specifies the page number to retrieve in the paginated results.
     * @param filterStatus Filter by status.
     * @param filterAppLocationSettingId Filter by AppLocationSetting ID.
     * @param filterServerConfigId Filter by ServerConfig ID.
     * @param filterLocationCity Filter by location city.
     * @param filterLocationCityDisplay Filter by location city display name.
     * @param filterLocationContinent Filter by location continent.
     * @param filterLocationCountry Filter by location country.
     * @param filterMetadata Filter by metadata. Allows filtering based on metadata key-value pairs, supporting both simple and nested metadata fields using dot notation.  **Simple Filters:** To filter where &#x60;idle&#x60; is false (boolean): &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false &#x60;&#x60;&#x60;  To filter where &#x60;string&#x60; is exactly \&quot;a\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;string&#x3D;\&quot;a\&quot; &#x60;&#x60;&#x60;  **Filtering for Null Values:** To filter for a native null value, use unquoted null. For example, to filter where &#x60;score&#x60; is null: &#x60;&#x60;&#x60; filter[metadata]&#x3D;score&#x3D;null &#x60;&#x60;&#x60;  **Nested Filters:** For nested metadata fields use dot notation. For example, to filter where &#x60;difficulty&#x60; within &#x60;gameSettings.survival&#x60; is exactly \&quot;hardcore\&quot;: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;  To filter for a nested field with a native &#x60;null&#x60; value, leave the null unquoted: &#x60;&#x60;&#x60; filter[metadata]&#x3D;gameSettings.stats.score&#x3D;null &#x60;&#x60;&#x60;  **Multiple Filters:** Combine multiple filters by separating them with commas: &#x60;&#x60;&#x60; filter[metadata]&#x3D;idle&#x3D;false,max_players&#x3D;20,gameSettings.survival.difficulty&#x3D;\&quot;hardcore\&quot; &#x60;&#x60;&#x60;
     * @param sort Allows sorting of results. By default, sorting is in ascending order. To reverse the order, prepend the sort key with a hyphen (-).  **Simple Sort:** To sort by id in ascending order or by instance in descending order:  &#x60;&#x60;&#x60; sort[]&#x3D;id sort[]&#x3D;-instance &#x60;&#x60;&#x60;  **Multiple Sorts:** Combine multiple sorts by separating them with commas: &#x60;&#x60;&#x60; sort[]&#x3D;id&amp;sort[]&#x3D;-instance &#x60;&#x60;&#x60;
     */
    public async getServers(app: number, perPage?: number, page?: number, filterStatus?: string, filterAppLocationSettingId?: number, filterServerConfigId?: number, filterLocationCity?: string, filterLocationCityDisplay?: string, filterLocationContinent?: string, filterLocationCountry?: string, filterMetadata?: string, sort?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app' is not null or undefined
        if (app === null || app === undefined) {
            throw new RequiredError("AppApi", "getServers", "app");
        }













        // Path Params
        const localVarPath = '/v1/apps/{app}/services'
            .replace('{' + 'app' + '}', encodeURIComponent(String(app)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("perPage", ObjectSerializer.serialize(perPage, "number", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (filterStatus !== undefined) {
            requestContext.setQueryParam("filter[status]", ObjectSerializer.serialize(filterStatus, "string", ""));
        }

        // Query Params
        if (filterAppLocationSettingId !== undefined) {
            requestContext.setQueryParam("filter[appLocationSettingId]", ObjectSerializer.serialize(filterAppLocationSettingId, "number", ""));
        }

        // Query Params
        if (filterServerConfigId !== undefined) {
            requestContext.setQueryParam("filter[serverConfigId]", ObjectSerializer.serialize(filterServerConfigId, "number", ""));
        }

        // Query Params
        if (filterLocationCity !== undefined) {
            requestContext.setQueryParam("filter[locationCity]", ObjectSerializer.serialize(filterLocationCity, "string", ""));
        }

        // Query Params
        if (filterLocationCityDisplay !== undefined) {
            requestContext.setQueryParam("filter[locationCityDisplay]", ObjectSerializer.serialize(filterLocationCityDisplay, "string", ""));
        }

        // Query Params
        if (filterLocationContinent !== undefined) {
            requestContext.setQueryParam("filter[locationContinent]", ObjectSerializer.serialize(filterLocationContinent, "string", ""));
        }

        // Query Params
        if (filterLocationCountry !== undefined) {
            requestContext.setQueryParam("filter[locationCountry]", ObjectSerializer.serialize(filterLocationCountry, "string", ""));
        }

        // Query Params
        if (filterMetadata !== undefined) {
            requestContext.setQueryParam("filter[metadata]", ObjectSerializer.serialize(filterMetadata, "string", ""));
        }

        // Query Params
        if (sort !== undefined) {
            const serializedParams = ObjectSerializer.serialize(sort, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("sort[]", serializedParam);
            }
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List all available tagged images
     * @param dockerRegistry The docker registry ID
     */
    public async getTaggedImages(dockerRegistry: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dockerRegistry' is not null or undefined
        if (dockerRegistry === null || dockerRegistry === undefined) {
            throw new RequiredError("AppApi", "getTaggedImages", "dockerRegistry");
        }


        // Path Params
        const localVarPath = '/v1/docker-registries/{dockerRegistry}/tagged-images'
            .replace('{' + 'dockerRegistry' + '}', encodeURIComponent(String(dockerRegistry)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Show all services for a specific app location setting within a given app
     * @param app The app ID
     * @param appLocationSetting The app location setting ID
     */
    public async listServicesForAppLocationSetting(app: number, appLocationSetting: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app' is not null or undefined
        if (app === null || app === undefined) {
            throw new RequiredError("AppApi", "listServicesForAppLocationSetting", "app");
        }


        // verify required parameter 'appLocationSetting' is not null or undefined
        if (appLocationSetting === null || appLocationSetting === undefined) {
            throw new RequiredError("AppApi", "listServicesForAppLocationSetting", "appLocationSetting");
        }


        // Path Params
        const localVarPath = '/v1/apps/{app}/location-settings/{appLocationSetting}/services'
            .replace('{' + 'app' + '}', encodeURIComponent(String(app)))
            .replace('{' + 'appLocationSetting' + '}', encodeURIComponent(String(appLocationSetting)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Refresh token
     */
    public async refreshAuthToken(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/auth/token';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Refresh a binary and the related entity
     * @param binary The binary ID
     */
    public async refreshBinary(binary: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'binary' is not null or undefined
        if (binary === null || binary === undefined) {
            throw new RequiredError("AppApi", "refreshBinary", "binary");
        }


        // Path Params
        const localVarPath = '/v1/binaries/{binary}/refresh'
            .replace('{' + 'binary' + '}', encodeURIComponent(String(binary)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Refresh the cache for all available tagged images
     * @param dockerRegistry The docker registry ID
     */
    public async refreshTaggedImages(dockerRegistry: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dockerRegistry' is not null or undefined
        if (dockerRegistry === null || dockerRegistry === undefined) {
            throw new RequiredError("AppApi", "refreshTaggedImages", "dockerRegistry");
        }


        // Path Params
        const localVarPath = '/v1/docker-registries/{dockerRegistry}/tagged-images/refresh'
            .replace('{' + 'dockerRegistry' + '}', encodeURIComponent(String(dockerRegistry)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Restart the service
     * @param dockerService The docker service ID
     */
    public async restartServer(dockerService: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dockerService' is not null or undefined
        if (dockerService === null || dockerService === undefined) {
            throw new RequiredError("AppApi", "restartServer", "dockerService");
        }


        // Path Params
        const localVarPath = '/v1/services/{dockerService}/restart'
            .replace('{' + 'dockerService' + '}', encodeURIComponent(String(dockerService)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Restore the latest backup
     * @param dockerService The docker service ID
     */
    public async restoreBackup(dockerService: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dockerService' is not null or undefined
        if (dockerService === null || dockerService === undefined) {
            throw new RequiredError("AppApi", "restoreBackup", "dockerService");
        }


        // Path Params
        const localVarPath = '/v1/services/{dockerService}/restore'
            .replace('{' + 'dockerService' + '}', encodeURIComponent(String(dockerService)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get branches for a specific steamworks app ID
     * @param appId The steamworks app id
     */
    public async steamGetBranches(appId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("AppApi", "steamGetBranches", "appId");
        }


        // Path Params
        const localVarPath = '/v1/binaries/steam/branches';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (appId !== undefined) {
            requestContext.setQueryParam("appId", ObjectSerializer.serialize(appId, "number", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get launchers for a specific steamworks app ID, optionally filtered by OS
     * @param appId The steamworks app id
     * @param os The operating system of the binary
     */
    public async steamGetLauncher(appId: number, os?: OperatingSystem, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("AppApi", "steamGetLauncher", "appId");
        }



        // Path Params
        const localVarPath = '/v1/binaries/steam/launchers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (appId !== undefined) {
            requestContext.setQueryParam("appId", ObjectSerializer.serialize(appId, "number", ""));
        }

        // Query Params
        if (os !== undefined) {
            const serializedParams = ObjectSerializer.serialize(os, "OperatingSystem", "");
            for (const key of Object.keys(serializedParams)) {
                requestContext.setQueryParam(key, serializedParams[key]);
            }
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a Minecraft template app
     * @param storeMinecraftTemplateRequest 
     */
    public async templateAppMinecraftStore(storeMinecraftTemplateRequest?: StoreMinecraftTemplateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v1/templates/apps/minecraft';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(storeMinecraftTemplateRequest, "StoreMinecraftTemplateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a Palworld template app
     * @param storePalworldTemplateRequest 
     */
    public async templateAppPalworldStore(storePalworldTemplateRequest?: StorePalworldTemplateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v1/templates/apps/palworld';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(storePalworldTemplateRequest, "StorePalworldTemplateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update a specific app
     * @param app The app ID
     * @param updateAppRequest 
     */
    public async updateAppById(app: number, updateAppRequest: UpdateAppRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'app' is not null or undefined
        if (app === null || app === undefined) {
            throw new RequiredError("AppApi", "updateAppById", "app");
        }


        // verify required parameter 'updateAppRequest' is not null or undefined
        if (updateAppRequest === null || updateAppRequest === undefined) {
            throw new RequiredError("AppApi", "updateAppById", "updateAppRequest");
        }


        // Path Params
        const localVarPath = '/v1/apps/{app}'
            .replace('{' + 'app' + '}', encodeURIComponent(String(app)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateAppRequest, "UpdateAppRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update a location setting
     * @param appLocationSetting The app location setting ID
     * @param updateAppLocationSettingRequest 
     */
    public async updateAppLocationSetting(appLocationSetting: number, updateAppLocationSettingRequest: UpdateAppLocationSettingRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appLocationSetting' is not null or undefined
        if (appLocationSetting === null || appLocationSetting === undefined) {
            throw new RequiredError("AppApi", "updateAppLocationSetting", "appLocationSetting");
        }


        // verify required parameter 'updateAppLocationSettingRequest' is not null or undefined
        if (updateAppLocationSettingRequest === null || updateAppLocationSettingRequest === undefined) {
            throw new RequiredError("AppApi", "updateAppLocationSetting", "updateAppLocationSettingRequest");
        }


        // Path Params
        const localVarPath = '/v1/app-location-settings/{appLocationSetting}'
            .replace('{' + 'appLocationSetting' + '}', encodeURIComponent(String(appLocationSetting)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateAppLocationSettingRequest, "UpdateAppLocationSettingRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update a binary and the related entity
     * @param binary The binary ID
     * @param updateBinaryRequest 
     */
    public async updateBinary(binary: number, updateBinaryRequest: UpdateBinaryRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'binary' is not null or undefined
        if (binary === null || binary === undefined) {
            throw new RequiredError("AppApi", "updateBinary", "binary");
        }


        // verify required parameter 'updateBinaryRequest' is not null or undefined
        if (updateBinaryRequest === null || updateBinaryRequest === undefined) {
            throw new RequiredError("AppApi", "updateBinary", "updateBinaryRequest");
        }


        // Path Params
        const localVarPath = '/v1/binaries/{binary}'
            .replace('{' + 'binary' + '}', encodeURIComponent(String(binary)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateBinaryRequest, "UpdateBinaryRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update a specific docker registry
     * @param dockerRegistry The docker registry ID
     * @param updateDockerRegistryRequest 
     */
    public async updateDockerRegistry(dockerRegistry: number, updateDockerRegistryRequest: UpdateDockerRegistryRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dockerRegistry' is not null or undefined
        if (dockerRegistry === null || dockerRegistry === undefined) {
            throw new RequiredError("AppApi", "updateDockerRegistry", "dockerRegistry");
        }


        // verify required parameter 'updateDockerRegistryRequest' is not null or undefined
        if (updateDockerRegistryRequest === null || updateDockerRegistryRequest === undefined) {
            throw new RequiredError("AppApi", "updateDockerRegistry", "updateDockerRegistryRequest");
        }


        // Path Params
        const localVarPath = '/v1/docker-registries/{dockerRegistry}'
            .replace('{' + 'dockerRegistry' + '}', encodeURIComponent(String(dockerRegistry)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateDockerRegistryRequest, "UpdateDockerRegistryRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update a server config
     * @param serverConfig The server config ID
     * @param updateServerConfigRequest 
     */
    public async updateServerConfig(serverConfig: number, updateServerConfigRequest: UpdateServerConfigRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'serverConfig' is not null or undefined
        if (serverConfig === null || serverConfig === undefined) {
            throw new RequiredError("AppApi", "updateServerConfig", "serverConfig");
        }


        // verify required parameter 'updateServerConfigRequest' is not null or undefined
        if (updateServerConfigRequest === null || updateServerConfigRequest === undefined) {
            throw new RequiredError("AppApi", "updateServerConfig", "updateServerConfigRequest");
        }


        // Path Params
        const localVarPath = '/v1/server-configs/{serverConfig}'
            .replace('{' + 'serverConfig' + '}', encodeURIComponent(String(serverConfig)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateServerConfigRequest, "UpdateServerConfigRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AppApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createApp
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createAppWithHttpInfo(response: ResponseContext): Promise<HttpInfo<App >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: App = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "App", ""
            ) as App;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: App = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "App", ""
            ) as App;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAppLocationSetting
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createAppLocationSettingWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppLocationSetting >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AppLocationSetting = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppLocationSetting", ""
            ) as AppLocationSetting;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppLocationSetting = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppLocationSetting", ""
            ) as AppLocationSetting;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBackup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBackupWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBinary
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBinaryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Binary >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Binary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Binary", ""
            ) as Binary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Binary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Binary", ""
            ) as Binary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDockerRegistry
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDockerRegistryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DockerRegistry >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DockerRegistry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DockerRegistry", ""
            ) as DockerRegistry;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DockerRegistry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DockerRegistry", ""
            ) as DockerRegistry;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createServerConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createServerConfigWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ServerConfig >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ServerConfig = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServerConfig", ""
            ) as ServerConfig;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ServerConfig = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServerConfig", ""
            ) as ServerConfig;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApp
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAppWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAppLocationSetting
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAppLocationSettingWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteBinary
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteBinaryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDockerRegistry
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteDockerRegistryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteServerConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteServerConfigWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to dockerServicesMetadataDeleteAll
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dockerServicesMetadataDeleteAllWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Server >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Server = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Server", ""
            ) as Server;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Server = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Server", ""
            ) as Server;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to dockerServicesMetadataDeleteKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dockerServicesMetadataDeleteKeysWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Server >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Server = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Server", ""
            ) as Server;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Server = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Server", ""
            ) as Server;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to dockerServicesMetadataSet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dockerServicesMetadataSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Server >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Server = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Server", ""
            ) as Server;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Server = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Server", ""
            ) as Server;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to dockerServicesMetadataUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dockerServicesMetadataUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Server >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Server = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Server", ""
            ) as Server;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Server = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Server", ""
            ) as Server;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAppById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAppByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<App >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: App = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "App", ""
            ) as App;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: App = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "App", ""
            ) as App;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAppLocationSettingById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAppLocationSettingByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppLocationSetting >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AppLocationSetting = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppLocationSetting", ""
            ) as AppLocationSetting;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppLocationSetting = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppLocationSetting", ""
            ) as AppLocationSetting;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAppLocationSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAppLocationSettingsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<AppLocationSetting> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<AppLocationSetting> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AppLocationSetting>", ""
            ) as Array<AppLocationSetting>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<AppLocationSetting> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AppLocationSetting>", ""
            ) as Array<AppLocationSetting>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApps
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAppsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<App> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<App> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<App>", ""
            ) as Array<App>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<App> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<App>", ""
            ) as Array<App>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAuthToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAuthTokenWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Auth >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Auth = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Auth", ""
            ) as Auth;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Auth = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Auth", ""
            ) as Auth;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBackups
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBackupsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Backup> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Backup> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Backup>", ""
            ) as Array<Backup>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Backup> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Backup>", ""
            ) as Array<Backup>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBinaries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBinariesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Binary> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Binary> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Binary>", ""
            ) as Array<Binary>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Binary> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Binary>", ""
            ) as Array<Binary>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBinaryById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBinaryByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Binary >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Binary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Binary", ""
            ) as Binary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Binary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Binary", ""
            ) as Binary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDockerRegistries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDockerRegistriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<DockerRegistry> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<DockerRegistry> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DockerRegistry>", ""
            ) as Array<DockerRegistry>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<DockerRegistry> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DockerRegistry>", ""
            ) as Array<DockerRegistry>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDockerRegistryById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDockerRegistryByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DockerRegistry >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DockerRegistry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DockerRegistry", ""
            ) as DockerRegistry;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DockerRegistry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DockerRegistry", ""
            ) as DockerRegistry;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLatestBackup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getLatestBackupWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Backup >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Backup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Backup", ""
            ) as Backup;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Backup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Backup", ""
            ) as Backup;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLocations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getLocationsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Location> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Location> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Location>", ""
            ) as Array<Location>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Location> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Location>", ""
            ) as Array<Location>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getResourcePackageById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getResourcePackageByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ResourcePackage >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ResourcePackage = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResourcePackage", ""
            ) as ResourcePackage;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ResourcePackage = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResourcePackage", ""
            ) as ResourcePackage;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getResourcePackages
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getResourcePackagesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<ResourcePackage> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ResourcePackage> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ResourcePackage>", ""
            ) as Array<ResourcePackage>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ResourcePackage> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ResourcePackage>", ""
            ) as Array<ResourcePackage>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getServerBackupDownloadUrl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServerBackupDownloadUrlWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BackupDownload >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BackupDownload = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BackupDownload", ""
            ) as BackupDownload;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BackupDownload = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BackupDownload", ""
            ) as BackupDownload;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getServerById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServerByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Server >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Server = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Server", ""
            ) as Server;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Server = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Server", ""
            ) as Server;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getServerConfigById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServerConfigByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ServerConfig >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ServerConfig = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServerConfig", ""
            ) as ServerConfig;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ServerConfig = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServerConfig", ""
            ) as ServerConfig;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getServerConfigs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServerConfigsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<ServerConfig> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ServerConfig> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ServerConfig>", ""
            ) as Array<ServerConfig>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<ServerConfig> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ServerConfig>", ""
            ) as Array<ServerConfig>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getServerLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServerLogsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ServiceLogs >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ServiceLogs = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServiceLogs", ""
            ) as ServiceLogs;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ServiceLogs = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServiceLogs", ""
            ) as ServiceLogs;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getServers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServersWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetServers200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetServers200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetServers200Response", ""
            ) as GetServers200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetServers200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetServers200Response", ""
            ) as GetServers200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTaggedImages
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTaggedImagesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetTaggedImages200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetTaggedImages200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetTaggedImages200Response", ""
            ) as GetTaggedImages200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetTaggedImages200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetTaggedImages200Response", ""
            ) as GetTaggedImages200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listServicesForAppLocationSetting
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listServicesForAppLocationSettingWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<Server> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Server> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Server>", ""
            ) as Array<Server>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Server> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Server>", ""
            ) as Array<Server>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to refreshAuthToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async refreshAuthTokenWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Auth >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Auth = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Auth", ""
            ) as Auth;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Auth = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Auth", ""
            ) as Auth;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to refreshBinary
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async refreshBinaryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Binary >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: Binary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Binary", ""
            ) as Binary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Binary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Binary", ""
            ) as Binary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to refreshTaggedImages
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async refreshTaggedImagesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetTaggedImages200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetTaggedImages200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetTaggedImages200Response", ""
            ) as GetTaggedImages200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetTaggedImages200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetTaggedImages200Response", ""
            ) as GetTaggedImages200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to restartServer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async restartServerWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to restoreBackup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async restoreBackupWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to steamGetBranches
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async steamGetBranchesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<SteamBranch> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<SteamBranch> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SteamBranch>", ""
            ) as Array<SteamBranch>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<SteamBranch> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SteamBranch>", ""
            ) as Array<SteamBranch>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to steamGetLauncher
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async steamGetLauncherWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<SteamLauncher> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<SteamLauncher> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SteamLauncher>", ""
            ) as Array<SteamLauncher>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<SteamLauncher> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SteamLauncher>", ""
            ) as Array<SteamLauncher>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to templateAppMinecraftStore
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async templateAppMinecraftStoreWithHttpInfo(response: ResponseContext): Promise<HttpInfo<App >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: App = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "App", ""
            ) as App;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: App = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "App", ""
            ) as App;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to templateAppPalworldStore
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async templateAppPalworldStoreWithHttpInfo(response: ResponseContext): Promise<HttpInfo<App >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: App = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "App", ""
            ) as App;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: App = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "App", ""
            ) as App;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAppById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateAppByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<App >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: App = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "App", ""
            ) as App;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: App = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "App", ""
            ) as App;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAppLocationSetting
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateAppLocationSettingWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AppLocationSetting >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AppLocationSetting = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppLocationSetting", ""
            ) as AppLocationSetting;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AppLocationSetting = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AppLocationSetting", ""
            ) as AppLocationSetting;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateBinary
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateBinaryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Binary >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Binary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Binary", ""
            ) as Binary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Binary = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Binary", ""
            ) as Binary;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDockerRegistry
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateDockerRegistryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DockerRegistry >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DockerRegistry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DockerRegistry", ""
            ) as DockerRegistry;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DockerRegistry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DockerRegistry", ""
            ) as DockerRegistry;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateServerConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateServerConfigWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ServerConfig >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ServerConfig = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServerConfig", ""
            ) as ServerConfig;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Not found", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Unauthenticated", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: InlineObject1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject1", ""
            ) as InlineObject1;
            throw new ApiException<InlineObject1>(response.httpStatusCode, "Validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineObject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineObject", ""
            ) as InlineObject;
            throw new ApiException<InlineObject>(response.httpStatusCode, "Authorization error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ServerConfig = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServerConfig", ""
            ) as ServerConfig;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
