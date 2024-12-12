/**
 * ODIN Fleet API
 * API to access Odin Fleet, empowering developers to deploy gameservers all around the world in just a few lines of code.  To authenticate, users must send their email, password, and session ID to the **[`/api/auth`](/operations/getAuthToken)** endpoint. Upon successful authentication, an API token will be provided. This token should be included in the `Authorization` header as a Bearer token for all subsequent requests.      Alternatively, you can copy your API key directly from our **[`console`](https://console.4players.io)** by opening any app, and then going to **Settings -> API Keys**.
 *
 * OpenAPI spec version: 0.8.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EnvironmentVariableType } from '../models/EnvironmentVariableType.ts';
import { HttpFile } from '../http/http.ts';

export class EnvironmentVariableDefinition {
    /**
    * The type of the environment variable
    */
    'type': EnvironmentVariableType;
    /**
    * The key of the variable
    */
    'key': string;
    /**
    * The value of the variable
    */
    'value'?: string;
    /**
    * The variable definition of the environment variable
    */
    'variable'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "EnvironmentVariableType",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "variable",
            "baseName": "variable",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EnvironmentVariableDefinition.attributeTypeMap;
    }

    public constructor() {
    }
}

