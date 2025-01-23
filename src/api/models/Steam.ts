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

import { SteamRuntime } from '../models/SteamRuntime.ts';
import { HttpFile } from '../http/http.ts';

export class Steam {
    /**
    * The Steam App ID
    */
    'steamAppId': number;
    /**
    * The branch to use
    */
    'branch': string;
    /**
    * The password to use
    */
    'password': string | null;
    /**
    * The command to execute
    */
    'command': string;
    /**
    * The steam account username
    */
    'steamcmdUsername': string | null;
    /**
    * The steam account password
    */
    'steamcmdPassword': string | null;
    /**
    * Whether or not the binary needs a graphical interface
    */
    'headful': boolean;
    /**
    * Whether or not the the license agreement needs to be requested
    */
    'requestLicense': boolean;
    /**
    * The steam runtime the server depends on
    */
    'runtime': SteamRuntime;
    /**
    * A space-separated list of additional packages to install
    */
    'additionalPackages': string | null;
    /**
    * Whether or not the steamworks app is unpublished or published
    */
    'unpublished': boolean;
    /**
    * Indicates whether the steam binary is currently in use
    */
    'inUse': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "steamAppId",
            "baseName": "steamAppId",
            "type": "number",
            "format": ""
        },
        {
            "name": "branch",
            "baseName": "branch",
            "type": "string",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        },
        {
            "name": "command",
            "baseName": "command",
            "type": "string",
            "format": ""
        },
        {
            "name": "steamcmdUsername",
            "baseName": "steamcmdUsername",
            "type": "string",
            "format": ""
        },
        {
            "name": "steamcmdPassword",
            "baseName": "steamcmdPassword",
            "type": "string",
            "format": ""
        },
        {
            "name": "headful",
            "baseName": "headful",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "requestLicense",
            "baseName": "requestLicense",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "runtime",
            "baseName": "runtime",
            "type": "SteamRuntime",
            "format": ""
        },
        {
            "name": "additionalPackages",
            "baseName": "additionalPackages",
            "type": "string",
            "format": ""
        },
        {
            "name": "unpublished",
            "baseName": "unpublished",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "inUse",
            "baseName": "inUse",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Steam.attributeTypeMap;
    }

    public constructor() {
    }
}


