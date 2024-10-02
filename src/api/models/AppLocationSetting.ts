/**
 * ODIN Fleet API
 * API to access Odin Fleet, empowering developers to deploy gameservers all around the world in just a few lines of code.
 *
 * OpenAPI spec version: 0.8.1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AppLocationSettingStatus } from "../models/AppLocationSettingStatus.ts";
import { Placement } from "../models/Placement.ts";
import { ServerConfig } from "../models/ServerConfig.ts";
import { HttpFile } from "../http/http.ts";

export class AppLocationSetting {
  /**
   * The id of the app location setting
   */
  "id": number;
  /**
   * The name of the app location setting
   */
  "name": string;
  /**
   * The app id of the app location setting
   */
  "appId": number;
  /**
   * The server config id of the app location setting
   */
  "serverConfigId": number;
  /**
   * The number of instances that should run at the specific location
   */
  "numInstances": number;
  /**
   * Whether the auto scaler is enabled
   */
  "autoScalerEnabled": boolean;
  /**
   * The minimum number of instances that should run at the specific location
   */
  "autoScalerMin"?: number;
  /**
   * The maximum number of instances that should run at the specific location
   */
  "autoScalerMax"?: number;
  /**
   * The current status
   */
  "status": AppLocationSettingStatus;
  /**
   * An optional message
   */
  "statusMessage": string | null;
  /**
   * Indicates if the app location setting is under maintenance
   */
  "maintenance": boolean;
  /**
   * The placement to use
   */
  "placement": Placement;
  /**
   * The server config to use
   */
  "serverConfig"?: ServerConfig;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "id",
      "baseName": "id",
      "type": "number",
      "format": "",
    },
    {
      "name": "name",
      "baseName": "name",
      "type": "string",
      "format": "",
    },
    {
      "name": "appId",
      "baseName": "appId",
      "type": "number",
      "format": "",
    },
    {
      "name": "serverConfigId",
      "baseName": "serverConfigId",
      "type": "number",
      "format": "",
    },
    {
      "name": "numInstances",
      "baseName": "numInstances",
      "type": "number",
      "format": "",
    },
    {
      "name": "autoScalerEnabled",
      "baseName": "autoScalerEnabled",
      "type": "boolean",
      "format": "",
    },
    {
      "name": "autoScalerMin",
      "baseName": "autoScalerMin",
      "type": "number",
      "format": "",
    },
    {
      "name": "autoScalerMax",
      "baseName": "autoScalerMax",
      "type": "number",
      "format": "",
    },
    {
      "name": "status",
      "baseName": "status",
      "type": "AppLocationSettingStatus",
      "format": "",
    },
    {
      "name": "statusMessage",
      "baseName": "statusMessage",
      "type": "string",
      "format": "",
    },
    {
      "name": "maintenance",
      "baseName": "maintenance",
      "type": "boolean",
      "format": "",
    },
    {
      "name": "placement",
      "baseName": "placement",
      "type": "Placement",
      "format": "",
    },
    {
      "name": "serverConfig",
      "baseName": "serverConfig",
      "type": "ServerConfig",
      "format": "",
    },
  ];

  static getAttributeTypeMap() {
    return AppLocationSetting.attributeTypeMap;
  }

  public constructor() {
  }
}
