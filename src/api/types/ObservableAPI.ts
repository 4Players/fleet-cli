import {
  HttpFile,
  HttpInfo,
  RequestContext,
  ResponseContext,
} from "../http/http.ts";
import { Configuration } from "../configuration.ts";
import { from, Observable, of } from "../rxjsStub.ts";
import { map, mergeMap } from "../rxjsStub.ts";
import { App } from "../models/App.ts";
import { AppLocationSetting } from "../models/AppLocationSetting.ts";
import { AppLocationSettingStatus } from "../models/AppLocationSettingStatus.ts";
import { Auth } from "../models/Auth.ts";
import { AuthRequest } from "../models/AuthRequest.ts";
import { Backup } from "../models/Backup.ts";
import { BackupDownload } from "../models/BackupDownload.ts";
import { BackupType } from "../models/BackupType.ts";
import { Binary } from "../models/Binary.ts";
import { BinaryStatus } from "../models/BinaryStatus.ts";
import { BinaryType } from "../models/BinaryType.ts";
import { ConfigFile } from "../models/ConfigFile.ts";
import { ConfigTemplate } from "../models/ConfigTemplate.ts";
import { Constraints } from "../models/Constraints.ts";
import { CreateBackupDockerServiceRequest } from "../models/CreateBackupDockerServiceRequest.ts";
import { DockerCompose } from "../models/DockerCompose.ts";
import { DockerImage } from "../models/DockerImage.ts";
import { DockerRegistry } from "../models/DockerRegistry.ts";
import { DockerRegistryType } from "../models/DockerRegistryType.ts";
import { DockerTaskStatus } from "../models/DockerTaskStatus.ts";
import { EnvironmentVariable } from "../models/EnvironmentVariable.ts";
import { EnvironmentVariableDefinition } from "../models/EnvironmentVariableDefinition.ts";
import { EnvironmentVariableType } from "../models/EnvironmentVariableType.ts";
import { GetTaggedImages200Response } from "../models/GetTaggedImages200Response.ts";
import { Location } from "../models/Location.ts";
import { Mount } from "../models/Mount.ts";
import { OperatingSystem } from "../models/OperatingSystem.ts";
import { Placement } from "../models/Placement.ts";
import { Port } from "../models/Port.ts";
import { PortDefinition } from "../models/PortDefinition.ts";
import { Protocol } from "../models/Protocol.ts";
import { PublishMode } from "../models/PublishMode.ts";
import { ResourceAllocations } from "../models/ResourceAllocations.ts";
import { Resources } from "../models/Resources.ts";
import { RestartPolicy } from "../models/RestartPolicy.ts";
import { RestartPolicyCondition } from "../models/RestartPolicyCondition.ts";
import { SecretFile } from "../models/SecretFile.ts";
import { Server } from "../models/Server.ts";
import { ServerConfig } from "../models/ServerConfig.ts";
import { ServerConfigStatus } from "../models/ServerConfigStatus.ts";
import { ServiceLogs } from "../models/ServiceLogs.ts";
import { Steam } from "../models/Steam.ts";
import { SteamBranch } from "../models/SteamBranch.ts";
import { SteamLauncher } from "../models/SteamLauncher.ts";
import { SteamRuntime } from "../models/SteamRuntime.ts";
import { StoreAppLocationSettingRequest } from "../models/StoreAppLocationSettingRequest.ts";
import { StoreAppRequest } from "../models/StoreAppRequest.ts";
import { StoreBinaryRequest } from "../models/StoreBinaryRequest.ts";
import { StoreDockerRegistryRequest } from "../models/StoreDockerRegistryRequest.ts";
import { StoreServerConfigRequest } from "../models/StoreServerConfigRequest.ts";
import { TaggedImage } from "../models/TaggedImage.ts";
import { TaggedImageMetaData } from "../models/TaggedImageMetaData.ts";
import { UpdateAppLocationSettingRequest } from "../models/UpdateAppLocationSettingRequest.ts";
import { UpdateBinaryRequest } from "../models/UpdateBinaryRequest.ts";
import { UpdateDockerRegistryRequest } from "../models/UpdateDockerRegistryRequest.ts";
import { UpdateServerConfigRequest } from "../models/UpdateServerConfigRequest.ts";
import { ZipFile } from "../models/ZipFile.ts";

import {
  AppApiRequestFactory,
  AppApiResponseProcessor,
} from "../apis/AppApi.ts";
export class ObservableAppApi {
  private requestFactory: AppApiRequestFactory;
  private responseProcessor: AppApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: AppApiRequestFactory,
    responseProcessor?: AppApiResponseProcessor,
  ) {
    this.configuration = configuration;
    this.requestFactory = requestFactory ||
      new AppApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new AppApiResponseProcessor();
  }

  /**
   * Create an app
   * @param storeAppRequest
   */
  public createAppWithHttpInfo(
    storeAppRequest?: StoreAppRequest,
    _options?: Configuration,
  ): Observable<HttpInfo<App>> {
    const requestContextPromise = this.requestFactory.createApp(
      storeAppRequest,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.createAppWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Create an app
   * @param storeAppRequest
   */
  public createApp(
    storeAppRequest?: StoreAppRequest,
    _options?: Configuration,
  ): Observable<App> {
    return this.createAppWithHttpInfo(storeAppRequest, _options).pipe(
      map((apiResponse: HttpInfo<App>) => apiResponse.data),
    );
  }

  /**
   * Create a new location setting
   * @param app The app ID
   * @param storeAppLocationSettingRequest
   */
  public createAppLocationSettingWithHttpInfo(
    app: number,
    storeAppLocationSettingRequest?: StoreAppLocationSettingRequest,
    _options?: Configuration,
  ): Observable<HttpInfo<AppLocationSetting>> {
    const requestContextPromise = this.requestFactory.createAppLocationSetting(
      app,
      storeAppLocationSettingRequest,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.createAppLocationSettingWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Create a new location setting
   * @param app The app ID
   * @param storeAppLocationSettingRequest
   */
  public createAppLocationSetting(
    app: number,
    storeAppLocationSettingRequest?: StoreAppLocationSettingRequest,
    _options?: Configuration,
  ): Observable<AppLocationSetting> {
    return this.createAppLocationSettingWithHttpInfo(
      app,
      storeAppLocationSettingRequest,
      _options,
    ).pipe(
      map((apiResponse: HttpInfo<AppLocationSetting>) => apiResponse.data),
    );
  }

  /**
   * Creates a backup of the service
   * @param service The service ID
   * @param createBackupDockerServiceRequest
   */
  public createBackupWithHttpInfo(
    service: number,
    createBackupDockerServiceRequest?: CreateBackupDockerServiceRequest,
    _options?: Configuration,
  ): Observable<HttpInfo<any>> {
    const requestContextPromise = this.requestFactory.createBackup(
      service,
      createBackupDockerServiceRequest,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.createBackupWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Creates a backup of the service
   * @param service The service ID
   * @param createBackupDockerServiceRequest
   */
  public createBackup(
    service: number,
    createBackupDockerServiceRequest?: CreateBackupDockerServiceRequest,
    _options?: Configuration,
  ): Observable<any> {
    return this.createBackupWithHttpInfo(
      service,
      createBackupDockerServiceRequest,
      _options,
    ).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
  }

  /**
   * Create a binary and the related file
   * @param app The app ID
   * @param storeBinaryRequest
   */
  public createBinaryWithHttpInfo(
    app: number,
    storeBinaryRequest?: StoreBinaryRequest,
    _options?: Configuration,
  ): Observable<HttpInfo<Binary>> {
    const requestContextPromise = this.requestFactory.createBinary(
      app,
      storeBinaryRequest,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.createBinaryWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Create a binary and the related file
   * @param app The app ID
   * @param storeBinaryRequest
   */
  public createBinary(
    app: number,
    storeBinaryRequest?: StoreBinaryRequest,
    _options?: Configuration,
  ): Observable<Binary> {
    return this.createBinaryWithHttpInfo(app, storeBinaryRequest, _options)
      .pipe(map((apiResponse: HttpInfo<Binary>) => apiResponse.data));
  }

  /**
   * Create a new docker registry
   * @param storeDockerRegistryRequest
   */
  public createDockerRegistryWithHttpInfo(
    storeDockerRegistryRequest?: StoreDockerRegistryRequest,
    _options?: Configuration,
  ): Observable<HttpInfo<DockerRegistry>> {
    const requestContextPromise = this.requestFactory.createDockerRegistry(
      storeDockerRegistryRequest,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.createDockerRegistryWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Create a new docker registry
   * @param storeDockerRegistryRequest
   */
  public createDockerRegistry(
    storeDockerRegistryRequest?: StoreDockerRegistryRequest,
    _options?: Configuration,
  ): Observable<DockerRegistry> {
    return this.createDockerRegistryWithHttpInfo(
      storeDockerRegistryRequest,
      _options,
    ).pipe(map((apiResponse: HttpInfo<DockerRegistry>) => apiResponse.data));
  }

  /**
   * Create a new server config
   * @param app The app ID
   * @param storeServerConfigRequest
   */
  public createServerConfigWithHttpInfo(
    app: number,
    storeServerConfigRequest?: StoreServerConfigRequest,
    _options?: Configuration,
  ): Observable<HttpInfo<ServerConfig>> {
    const requestContextPromise = this.requestFactory.createServerConfig(
      app,
      storeServerConfigRequest,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.createServerConfigWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Create a new server config
   * @param app The app ID
   * @param storeServerConfigRequest
   */
  public createServerConfig(
    app: number,
    storeServerConfigRequest?: StoreServerConfigRequest,
    _options?: Configuration,
  ): Observable<ServerConfig> {
    return this.createServerConfigWithHttpInfo(
      app,
      storeServerConfigRequest,
      _options,
    ).pipe(map((apiResponse: HttpInfo<ServerConfig>) => apiResponse.data));
  }

  /**
   * This method is responsible for deleting an App record from the database. It locates the App instance using the provided ID, and if found, proceeds to delete it. Upon successful deletion, an HTTP 204 No Content response is returned, indicating that the action was successful.
   * Delete a specific app
   * @param app The app ID
   */
  public deleteAppWithHttpInfo(
    app: number,
    _options?: Configuration,
  ): Observable<HttpInfo<any>> {
    const requestContextPromise = this.requestFactory.deleteApp(app, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.deleteAppWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * This method is responsible for deleting an App record from the database. It locates the App instance using the provided ID, and if found, proceeds to delete it. Upon successful deletion, an HTTP 204 No Content response is returned, indicating that the action was successful.
   * Delete a specific app
   * @param app The app ID
   */
  public deleteApp(app: number, _options?: Configuration): Observable<any> {
    return this.deleteAppWithHttpInfo(app, _options).pipe(
      map((apiResponse: HttpInfo<any>) => apiResponse.data),
    );
  }

  /**
   * Delete a location setting
   * @param appLocationSetting The app location setting ID
   */
  public deleteAppLocationSettingWithHttpInfo(
    appLocationSetting: number,
    _options?: Configuration,
  ): Observable<HttpInfo<any>> {
    const requestContextPromise = this.requestFactory.deleteAppLocationSetting(
      appLocationSetting,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.deleteAppLocationSettingWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Delete a location setting
   * @param appLocationSetting The app location setting ID
   */
  public deleteAppLocationSetting(
    appLocationSetting: number,
    _options?: Configuration,
  ): Observable<any> {
    return this.deleteAppLocationSettingWithHttpInfo(
      appLocationSetting,
      _options,
    ).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
  }

  /**
   * Handles the deletion of a user\'s authentication tokens
   * @param sid The session id of the user
   */
  public deleteAuthTokenWithHttpInfo(
    sid: string,
    _options?: Configuration,
  ): Observable<HttpInfo<any>> {
    const requestContextPromise = this.requestFactory.deleteAuthToken(
      sid,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.deleteAuthTokenWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Handles the deletion of a user\'s authentication tokens
   * @param sid The session id of the user
   */
  public deleteAuthToken(
    sid: string,
    _options?: Configuration,
  ): Observable<any> {
    return this.deleteAuthTokenWithHttpInfo(sid, _options).pipe(
      map((apiResponse: HttpInfo<any>) => apiResponse.data),
    );
  }

  /**
   * Delete a specified binary
   * @param binary The binary ID
   */
  public deleteBinaryWithHttpInfo(
    binary: number,
    _options?: Configuration,
  ): Observable<HttpInfo<any>> {
    const requestContextPromise = this.requestFactory.deleteBinary(
      binary,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.deleteBinaryWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Delete a specified binary
   * @param binary The binary ID
   */
  public deleteBinary(
    binary: number,
    _options?: Configuration,
  ): Observable<any> {
    return this.deleteBinaryWithHttpInfo(binary, _options).pipe(
      map((apiResponse: HttpInfo<any>) => apiResponse.data),
    );
  }

  /**
   * Delete a specific docker registry
   * @param dockerRegistry The docker registry ID
   */
  public deleteDockerRegistryWithHttpInfo(
    dockerRegistry: number,
    _options?: Configuration,
  ): Observable<HttpInfo<any>> {
    const requestContextPromise = this.requestFactory.deleteDockerRegistry(
      dockerRegistry,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.deleteDockerRegistryWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Delete a specific docker registry
   * @param dockerRegistry The docker registry ID
   */
  public deleteDockerRegistry(
    dockerRegistry: number,
    _options?: Configuration,
  ): Observable<any> {
    return this.deleteDockerRegistryWithHttpInfo(dockerRegistry, _options).pipe(
      map((apiResponse: HttpInfo<any>) => apiResponse.data),
    );
  }

  /**
   * Delete a specific server config
   * @param serverConfig The server config ID
   */
  public deleteServerConfigWithHttpInfo(
    serverConfig: number,
    _options?: Configuration,
  ): Observable<HttpInfo<any>> {
    const requestContextPromise = this.requestFactory.deleteServerConfig(
      serverConfig,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.deleteServerConfigWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Delete a specific server config
   * @param serverConfig The server config ID
   */
  public deleteServerConfig(
    serverConfig: number,
    _options?: Configuration,
  ): Observable<any> {
    return this.deleteServerConfigWithHttpInfo(serverConfig, _options).pipe(
      map((apiResponse: HttpInfo<any>) => apiResponse.data),
    );
  }

  /**
   * Show a specific app
   * @param app The app ID
   */
  public getAppByIdWithHttpInfo(
    app: number,
    _options?: Configuration,
  ): Observable<HttpInfo<App>> {
    const requestContextPromise = this.requestFactory.getAppById(app, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.getAppByIdWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Show a specific app
   * @param app The app ID
   */
  public getAppById(app: number, _options?: Configuration): Observable<App> {
    return this.getAppByIdWithHttpInfo(app, _options).pipe(
      map((apiResponse: HttpInfo<App>) => apiResponse.data),
    );
  }

  /**
   * Show a specific app location setting
   * @param appLocationSetting The app location setting ID
   */
  public getAppLocationSettingByIdWithHttpInfo(
    appLocationSetting: number,
    _options?: Configuration,
  ): Observable<HttpInfo<AppLocationSetting>> {
    const requestContextPromise = this.requestFactory.getAppLocationSettingById(
      appLocationSetting,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.getAppLocationSettingByIdWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Show a specific app location setting
   * @param appLocationSetting The app location setting ID
   */
  public getAppLocationSettingById(
    appLocationSetting: number,
    _options?: Configuration,
  ): Observable<AppLocationSetting> {
    return this.getAppLocationSettingByIdWithHttpInfo(
      appLocationSetting,
      _options,
    ).pipe(
      map((apiResponse: HttpInfo<AppLocationSetting>) => apiResponse.data),
    );
  }

  /**
   * Show all location settings
   * @param app The app ID
   */
  public getAppLocationSettingsWithHttpInfo(
    app: number,
    _options?: Configuration,
  ): Observable<HttpInfo<Array<AppLocationSetting>>> {
    const requestContextPromise = this.requestFactory.getAppLocationSettings(
      app,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.getAppLocationSettingsWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Show all location settings
   * @param app The app ID
   */
  public getAppLocationSettings(
    app: number,
    _options?: Configuration,
  ): Observable<Array<AppLocationSetting>> {
    return this.getAppLocationSettingsWithHttpInfo(app, _options).pipe(
      map((apiResponse: HttpInfo<Array<AppLocationSetting>>) =>
        apiResponse.data
      ),
    );
  }

  /**
   * Show all apps
   */
  public getAppsWithHttpInfo(
    _options?: Configuration,
  ): Observable<HttpInfo<Array<App>>> {
    const requestContextPromise = this.requestFactory.getApps(_options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.getAppsWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Show all apps
   */
  public getApps(_options?: Configuration): Observable<Array<App>> {
    return this.getAppsWithHttpInfo(_options).pipe(
      map((apiResponse: HttpInfo<Array<App>>) => apiResponse.data),
    );
  }

  /**
   * Validates the incoming request and attempts to authenticate the user based on the provided session ID. If the user is authenticated successfully, it returns an AuthResource containing the user\'s bearer token.
   * Handles user authentication
   * @param authRequest
   */
  public getAuthTokenWithHttpInfo(
    authRequest?: AuthRequest,
    _options?: Configuration,
  ): Observable<HttpInfo<Auth>> {
    const requestContextPromise = this.requestFactory.getAuthToken(
      authRequest,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.getAuthTokenWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Validates the incoming request and attempts to authenticate the user based on the provided session ID. If the user is authenticated successfully, it returns an AuthResource containing the user\'s bearer token.
   * Handles user authentication
   * @param authRequest
   */
  public getAuthToken(
    authRequest?: AuthRequest,
    _options?: Configuration,
  ): Observable<Auth> {
    return this.getAuthTokenWithHttpInfo(authRequest, _options).pipe(
      map((apiResponse: HttpInfo<Auth>) => apiResponse.data),
    );
  }

  /**
   * List all backups for the specified Docker service
   * @param service The service ID
   */
  public getBackupsWithHttpInfo(
    service: number,
    _options?: Configuration,
  ): Observable<HttpInfo<Array<Backup>>> {
    const requestContextPromise = this.requestFactory.getBackups(
      service,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.getBackupsWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * List all backups for the specified Docker service
   * @param service The service ID
   */
  public getBackups(
    service: number,
    _options?: Configuration,
  ): Observable<Array<Backup>> {
    return this.getBackupsWithHttpInfo(service, _options).pipe(
      map((apiResponse: HttpInfo<Array<Backup>>) => apiResponse.data),
    );
  }

  /**
   * Show all binaries
   * @param app The app ID
   */
  public getBinariesWithHttpInfo(
    app: number,
    _options?: Configuration,
  ): Observable<HttpInfo<Array<Binary>>> {
    const requestContextPromise = this.requestFactory.getBinaries(
      app,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.getBinariesWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Show all binaries
   * @param app The app ID
   */
  public getBinaries(
    app: number,
    _options?: Configuration,
  ): Observable<Array<Binary>> {
    return this.getBinariesWithHttpInfo(app, _options).pipe(
      map((apiResponse: HttpInfo<Array<Binary>>) => apiResponse.data),
    );
  }

  /**
   * Show a specific binary
   * @param binary The binary ID
   */
  public getBinaryByIdWithHttpInfo(
    binary: number,
    _options?: Configuration,
  ): Observable<HttpInfo<Binary>> {
    const requestContextPromise = this.requestFactory.getBinaryById(
      binary,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.getBinaryByIdWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Show a specific binary
   * @param binary The binary ID
   */
  public getBinaryById(
    binary: number,
    _options?: Configuration,
  ): Observable<Binary> {
    return this.getBinaryByIdWithHttpInfo(binary, _options).pipe(
      map((apiResponse: HttpInfo<Binary>) => apiResponse.data),
    );
  }

  /**
   * Show all docker registries
   */
  public getDockerRegistriesWithHttpInfo(
    _options?: Configuration,
  ): Observable<HttpInfo<Array<DockerRegistry>>> {
    const requestContextPromise = this.requestFactory.getDockerRegistries(
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.getDockerRegistriesWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Show all docker registries
   */
  public getDockerRegistries(
    _options?: Configuration,
  ): Observable<Array<DockerRegistry>> {
    return this.getDockerRegistriesWithHttpInfo(_options).pipe(
      map((apiResponse: HttpInfo<Array<DockerRegistry>>) => apiResponse.data),
    );
  }

  /**
   * Display a specific docker registry
   * @param dockerRegistry The docker registry ID
   */
  public getDockerRegistryByIdWithHttpInfo(
    dockerRegistry: number,
    _options?: Configuration,
  ): Observable<HttpInfo<DockerRegistry>> {
    const requestContextPromise = this.requestFactory.getDockerRegistryById(
      dockerRegistry,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.getDockerRegistryByIdWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Display a specific docker registry
   * @param dockerRegistry The docker registry ID
   */
  public getDockerRegistryById(
    dockerRegistry: number,
    _options?: Configuration,
  ): Observable<DockerRegistry> {
    return this.getDockerRegistryByIdWithHttpInfo(dockerRegistry, _options)
      .pipe(map((apiResponse: HttpInfo<DockerRegistry>) => apiResponse.data));
  }

  /**
   * Synchronizes the local database with the state of Docker nodes, then filters for active, ready worker nodes to create a unique listing of their location labels. These nodes are suitable for deployment.
   * Show a unique listing of locations based on active and ready worker nodes
   */
  public getLocationsWithHttpInfo(
    _options?: Configuration,
  ): Observable<HttpInfo<Array<Location>>> {
    const requestContextPromise = this.requestFactory.getLocations(_options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.getLocationsWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Synchronizes the local database with the state of Docker nodes, then filters for active, ready worker nodes to create a unique listing of their location labels. These nodes are suitable for deployment.
   * Show a unique listing of locations based on active and ready worker nodes
   */
  public getLocations(_options?: Configuration): Observable<Array<Location>> {
    return this.getLocationsWithHttpInfo(_options).pipe(
      map((apiResponse: HttpInfo<Array<Location>>) => apiResponse.data),
    );
  }

  /**
   * Display the most recent backup for the specified Docker service
   * @param service The service ID
   */
  public getMostRecentBackupWithHttpInfo(
    service: number,
    _options?: Configuration,
  ): Observable<HttpInfo<Backup>> {
    const requestContextPromise = this.requestFactory.getMostRecentBackup(
      service,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.getMostRecentBackupWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Display the most recent backup for the specified Docker service
   * @param service The service ID
   */
  public getMostRecentBackup(
    service: number,
    _options?: Configuration,
  ): Observable<Backup> {
    return this.getMostRecentBackupWithHttpInfo(service, _options).pipe(
      map((apiResponse: HttpInfo<Backup>) => apiResponse.data),
    );
  }

  /**
   * Generates a presigned URL for downloading a backup from AWS S3 if the backup method is \'archive\'
   * @param service The service ID
   */
  public getServerBackupDownloadUrlWithHttpInfo(
    service: number,
    _options?: Configuration,
  ): Observable<HttpInfo<BackupDownload>> {
    const requestContextPromise = this.requestFactory
      .getServerBackupDownloadUrl(service, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.getServerBackupDownloadUrlWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Generates a presigned URL for downloading a backup from AWS S3 if the backup method is \'archive\'
   * @param service The service ID
   */
  public getServerBackupDownloadUrl(
    service: number,
    _options?: Configuration,
  ): Observable<BackupDownload> {
    return this.getServerBackupDownloadUrlWithHttpInfo(service, _options).pipe(
      map((apiResponse: HttpInfo<BackupDownload>) => apiResponse.data),
    );
  }

  /**
   * Display a specific DockerService associated with the given App
   * @param app The app ID
   * @param service The service ID
   */
  public getServerByIdWithHttpInfo(
    app: number,
    service: number,
    _options?: Configuration,
  ): Observable<HttpInfo<Server>> {
    const requestContextPromise = this.requestFactory.getServerById(
      app,
      service,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.getServerByIdWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Display a specific DockerService associated with the given App
   * @param app The app ID
   * @param service The service ID
   */
  public getServerById(
    app: number,
    service: number,
    _options?: Configuration,
  ): Observable<Server> {
    return this.getServerByIdWithHttpInfo(app, service, _options).pipe(
      map((apiResponse: HttpInfo<Server>) => apiResponse.data),
    );
  }

  /**
   * Show a specific server config
   * @param serverConfig The server config ID
   */
  public getServerConfigByIdWithHttpInfo(
    serverConfig: number,
    _options?: Configuration,
  ): Observable<HttpInfo<ServerConfig>> {
    const requestContextPromise = this.requestFactory.getServerConfigById(
      serverConfig,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.getServerConfigByIdWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Show a specific server config
   * @param serverConfig The server config ID
   */
  public getServerConfigById(
    serverConfig: number,
    _options?: Configuration,
  ): Observable<ServerConfig> {
    return this.getServerConfigByIdWithHttpInfo(serverConfig, _options).pipe(
      map((apiResponse: HttpInfo<ServerConfig>) => apiResponse.data),
    );
  }

  /**
   * Show all server configs
   * @param app The app ID
   */
  public getServerConfigsWithHttpInfo(
    app: number,
    _options?: Configuration,
  ): Observable<HttpInfo<Array<ServerConfig>>> {
    const requestContextPromise = this.requestFactory.getServerConfigs(
      app,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.getServerConfigsWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Show all server configs
   * @param app The app ID
   */
  public getServerConfigs(
    app: number,
    _options?: Configuration,
  ): Observable<Array<ServerConfig>> {
    return this.getServerConfigsWithHttpInfo(app, _options).pipe(
      map((apiResponse: HttpInfo<Array<ServerConfig>>) => apiResponse.data),
    );
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
  public getServerLogsWithHttpInfo(
    service: number,
    details?: boolean,
    follow?: boolean,
    stdout?: boolean,
    stderr?: boolean,
    since?: number,
    timestamps?: boolean,
    tail?: string,
    _options?: Configuration,
  ): Observable<HttpInfo<ServiceLogs>> {
    const requestContextPromise = this.requestFactory.getServerLogs(
      service,
      details,
      follow,
      stdout,
      stderr,
      since,
      timestamps,
      tail,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.getServerLogsWithHttpInfo(rsp)
          ),
        );
      }));
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
  public getServerLogs(
    service: number,
    details?: boolean,
    follow?: boolean,
    stdout?: boolean,
    stderr?: boolean,
    since?: number,
    timestamps?: boolean,
    tail?: string,
    _options?: Configuration,
  ): Observable<ServiceLogs> {
    return this.getServerLogsWithHttpInfo(
      service,
      details,
      follow,
      stdout,
      stderr,
      since,
      timestamps,
      tail,
      _options,
    ).pipe(map((apiResponse: HttpInfo<ServiceLogs>) => apiResponse.data));
  }

  /**
   * Show all services for a given app
   * @param app Instance of the app to filter services by.
   */
  public getServersWithHttpInfo(
    app: number,
    _options?: Configuration,
  ): Observable<HttpInfo<Array<Server>>> {
    const requestContextPromise = this.requestFactory.getServers(app, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.getServersWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Show all services for a given app
   * @param app Instance of the app to filter services by.
   */
  public getServers(
    app: number,
    _options?: Configuration,
  ): Observable<Array<Server>> {
    return this.getServersWithHttpInfo(app, _options).pipe(
      map((apiResponse: HttpInfo<Array<Server>>) => apiResponse.data),
    );
  }

  /**
   * List all available tagged images
   * @param dockerRegistry The docker registry ID
   */
  public getTaggedImagesWithHttpInfo(
    dockerRegistry: number,
    _options?: Configuration,
  ): Observable<HttpInfo<GetTaggedImages200Response>> {
    const requestContextPromise = this.requestFactory.getTaggedImages(
      dockerRegistry,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.getTaggedImagesWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * List all available tagged images
   * @param dockerRegistry The docker registry ID
   */
  public getTaggedImages(
    dockerRegistry: number,
    _options?: Configuration,
  ): Observable<GetTaggedImages200Response> {
    return this.getTaggedImagesWithHttpInfo(dockerRegistry, _options).pipe(
      map((apiResponse: HttpInfo<GetTaggedImages200Response>) =>
        apiResponse.data
      ),
    );
  }

  /**
   * Refresh the cache for all available tagged images
   * @param dockerRegistry The docker registry ID
   */
  public refreshTaggedImagesWithHttpInfo(
    dockerRegistry: number,
    _options?: Configuration,
  ): Observable<HttpInfo<GetTaggedImages200Response>> {
    const requestContextPromise = this.requestFactory.refreshTaggedImages(
      dockerRegistry,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.refreshTaggedImagesWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Refresh the cache for all available tagged images
   * @param dockerRegistry The docker registry ID
   */
  public refreshTaggedImages(
    dockerRegistry: number,
    _options?: Configuration,
  ): Observable<GetTaggedImages200Response> {
    return this.refreshTaggedImagesWithHttpInfo(dockerRegistry, _options).pipe(
      map((apiResponse: HttpInfo<GetTaggedImages200Response>) =>
        apiResponse.data
      ),
    );
  }

  /**
   * Restarts a specific Docker service
   * @param service The service ID
   * @param body
   */
  public restartServerWithHttpInfo(
    service: number,
    body?: any,
    _options?: Configuration,
  ): Observable<HttpInfo<any>> {
    const requestContextPromise = this.requestFactory.restartServer(
      service,
      body,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.restartServerWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Restarts a specific Docker service
   * @param service The service ID
   * @param body
   */
  public restartServer(
    service: number,
    body?: any,
    _options?: Configuration,
  ): Observable<any> {
    return this.restartServerWithHttpInfo(service, body, _options).pipe(
      map((apiResponse: HttpInfo<any>) => apiResponse.data),
    );
  }

  /**
   * Restore a backup for a specified Docker service
   * @param service The service ID
   * @param body
   */
  public restoreBackupWithHttpInfo(
    service: number,
    body?: any,
    _options?: Configuration,
  ): Observable<HttpInfo<any>> {
    const requestContextPromise = this.requestFactory.restoreBackup(
      service,
      body,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.restoreBackupWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Restore a backup for a specified Docker service
   * @param service The service ID
   * @param body
   */
  public restoreBackup(
    service: number,
    body?: any,
    _options?: Configuration,
  ): Observable<any> {
    return this.restoreBackupWithHttpInfo(service, body, _options).pipe(
      map((apiResponse: HttpInfo<any>) => apiResponse.data),
    );
  }

  /**
   * Get branches for a specific steamworks app ID
   * @param appId The steamworks app id
   */
  public steamGetBranchesWithHttpInfo(
    appId: number,
    _options?: Configuration,
  ): Observable<HttpInfo<Array<SteamBranch>>> {
    const requestContextPromise = this.requestFactory.steamGetBranches(
      appId,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.steamGetBranchesWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Get branches for a specific steamworks app ID
   * @param appId The steamworks app id
   */
  public steamGetBranches(
    appId: number,
    _options?: Configuration,
  ): Observable<Array<SteamBranch>> {
    return this.steamGetBranchesWithHttpInfo(appId, _options).pipe(
      map((apiResponse: HttpInfo<Array<SteamBranch>>) => apiResponse.data),
    );
  }

  /**
   * Get launchers for a specific steamworks app ID, optionally filtered by OS
   * @param appId The steamworks app id
   * @param os The operating system of the binary
   */
  public steamGetLauncherWithHttpInfo(
    appId: number,
    os?: OperatingSystem,
    _options?: Configuration,
  ): Observable<HttpInfo<Array<SteamLauncher>>> {
    const requestContextPromise = this.requestFactory.steamGetLauncher(
      appId,
      os,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.steamGetLauncherWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Get launchers for a specific steamworks app ID, optionally filtered by OS
   * @param appId The steamworks app id
   * @param os The operating system of the binary
   */
  public steamGetLauncher(
    appId: number,
    os?: OperatingSystem,
    _options?: Configuration,
  ): Observable<Array<SteamLauncher>> {
    return this.steamGetLauncherWithHttpInfo(appId, os, _options).pipe(
      map((apiResponse: HttpInfo<Array<SteamLauncher>>) => apiResponse.data),
    );
  }

  /**
   * Update a location setting
   * @param appLocationSetting The app location setting ID
   * @param updateAppLocationSettingRequest
   */
  public updateAppLocationSettingWithHttpInfo(
    appLocationSetting: number,
    updateAppLocationSettingRequest?: UpdateAppLocationSettingRequest,
    _options?: Configuration,
  ): Observable<HttpInfo<AppLocationSetting>> {
    const requestContextPromise = this.requestFactory.updateAppLocationSetting(
      appLocationSetting,
      updateAppLocationSettingRequest,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.updateAppLocationSettingWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Update a location setting
   * @param appLocationSetting The app location setting ID
   * @param updateAppLocationSettingRequest
   */
  public updateAppLocationSetting(
    appLocationSetting: number,
    updateAppLocationSettingRequest?: UpdateAppLocationSettingRequest,
    _options?: Configuration,
  ): Observable<AppLocationSetting> {
    return this.updateAppLocationSettingWithHttpInfo(
      appLocationSetting,
      updateAppLocationSettingRequest,
      _options,
    ).pipe(
      map((apiResponse: HttpInfo<AppLocationSetting>) => apiResponse.data),
    );
  }

  /**
   * Update a binary and the related file
   * @param binary The binary ID
   * @param updateBinaryRequest
   */
  public updateBinaryWithHttpInfo(
    binary: number,
    updateBinaryRequest?: UpdateBinaryRequest,
    _options?: Configuration,
  ): Observable<HttpInfo<Binary>> {
    const requestContextPromise = this.requestFactory.updateBinary(
      binary,
      updateBinaryRequest,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.updateBinaryWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Update a binary and the related file
   * @param binary The binary ID
   * @param updateBinaryRequest
   */
  public updateBinary(
    binary: number,
    updateBinaryRequest?: UpdateBinaryRequest,
    _options?: Configuration,
  ): Observable<Binary> {
    return this.updateBinaryWithHttpInfo(binary, updateBinaryRequest, _options)
      .pipe(map((apiResponse: HttpInfo<Binary>) => apiResponse.data));
  }

  /**
   * Update a specific docker registry
   * @param dockerRegistry The docker registry ID
   * @param updateDockerRegistryRequest
   */
  public updateDockerRegistryWithHttpInfo(
    dockerRegistry: number,
    updateDockerRegistryRequest?: UpdateDockerRegistryRequest,
    _options?: Configuration,
  ): Observable<HttpInfo<DockerRegistry>> {
    const requestContextPromise = this.requestFactory.updateDockerRegistry(
      dockerRegistry,
      updateDockerRegistryRequest,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.updateDockerRegistryWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Update a specific docker registry
   * @param dockerRegistry The docker registry ID
   * @param updateDockerRegistryRequest
   */
  public updateDockerRegistry(
    dockerRegistry: number,
    updateDockerRegistryRequest?: UpdateDockerRegistryRequest,
    _options?: Configuration,
  ): Observable<DockerRegistry> {
    return this.updateDockerRegistryWithHttpInfo(
      dockerRegistry,
      updateDockerRegistryRequest,
      _options,
    ).pipe(map((apiResponse: HttpInfo<DockerRegistry>) => apiResponse.data));
  }

  /**
   * Update a server config
   * @param serverConfig The server config ID
   * @param updateServerConfigRequest
   */
  public updateServerConfigWithHttpInfo(
    serverConfig: number,
    updateServerConfigRequest?: UpdateServerConfigRequest,
    _options?: Configuration,
  ): Observable<HttpInfo<ServerConfig>> {
    const requestContextPromise = this.requestFactory.updateServerConfig(
      serverConfig,
      updateServerConfigRequest,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (let middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable.pipe(
      mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
    )
      .pipe(mergeMap((response: ResponseContext) => {
        let middlewarePostObservable = of(response);
        for (let middleware of this.configuration.middleware) {
          middlewarePostObservable = middlewarePostObservable.pipe(
            mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
          );
        }
        return middlewarePostObservable.pipe(
          map((rsp: ResponseContext) =>
            this.responseProcessor.updateServerConfigWithHttpInfo(rsp)
          ),
        );
      }));
  }

  /**
   * Update a server config
   * @param serverConfig The server config ID
   * @param updateServerConfigRequest
   */
  public updateServerConfig(
    serverConfig: number,
    updateServerConfigRequest?: UpdateServerConfigRequest,
    _options?: Configuration,
  ): Observable<ServerConfig> {
    return this.updateServerConfigWithHttpInfo(
      serverConfig,
      updateServerConfigRequest,
      _options,
    ).pipe(map((apiResponse: HttpInfo<ServerConfig>) => apiResponse.data));
  }
}
