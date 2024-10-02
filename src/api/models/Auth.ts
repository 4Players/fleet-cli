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

import { HttpFile } from "../http/http.ts";

export class Auth {
  /**
   * The authentication token
   */
  "token": string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<
    { name: string; baseName: string; type: string; format: string }
  > = [
    {
      "name": "token",
      "baseName": "token",
      "type": "string",
      "format": "",
    },
  ];

  static getAttributeTypeMap() {
    return Auth.attributeTypeMap;
  }

  public constructor() {
  }
}
