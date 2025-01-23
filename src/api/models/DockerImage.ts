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

import { HttpFile } from '../http/http.ts';

export class DockerImage {
    /**
    * The name of the docker image
    */
    'imageName': string;
    /**
    * The id of the registry to load the image
    */
    'registryId': number;
    /**
    * Indicates whether the docker image is currently in use
    */
    'inUse': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "imageName",
            "baseName": "imageName",
            "type": "string",
            "format": ""
        },
        {
            "name": "registryId",
            "baseName": "registryId",
            "type": "number",
            "format": ""
        },
        {
            "name": "inUse",
            "baseName": "inUse",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DockerImage.attributeTypeMap;
    }

    public constructor() {
    }
}
