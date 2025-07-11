/**
 * ODIN Fleet API
 * API to access Odin Fleet, empowering developers to deploy gameservers all around the world in just a few lines of code.  To authenticate, users must send their email, password, and session ID to the **[`/api/auth`](/operations/getAuthToken)** endpoint. Upon successful authentication, an API token will be provided. This token should be included in the `Authorization` header as a Bearer token for all subsequent requests.      Alternatively, you can copy your API key directly from our **[`console`](https://console.4players.io)** by opening any app, and then going to **Settings -> API Keys**.
 *
 * OpenAPI spec version: 0.9.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DockerRegistryType } from '../models/DockerRegistryType.ts';
import { HttpFile } from '../http/http.ts';

export class StoreDockerRegistryRequest {
    /**
    * The type of the docker registry
    */
    'type': DockerRegistryType;
    /**
    * The name of the docker registry
    */
    'name': string;
    /**
    * The URL of the docker registry
    */
    'url'?: string | null;
    /**
    * The specific instance URL of the docker registry
    */
    'instanceUrl'?: string | null;
    /**
    * The username to use for authentication
    */
    'username'?: string | null;
    /**
    * The access token to use for authentication
    */
    'accessToken'?: string | null;
    /**
    * The password to use for authentication
    */
    'password'?: string | null;
    /**
    * Whether or not the registry is user-owned or organization-owned
    */
    'organization'?: boolean;
    /**
    * The AWS access key to use for authentication
    */
    'awsAccessKey'?: string | null;
    /**
    * The AWS secret access key to use for authentication
    */
    'awsSecretAccessKey'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "DockerRegistryType",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "instanceUrl",
            "baseName": "instanceUrl",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "accessToken",
            "baseName": "accessToken",
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
            "name": "organization",
            "baseName": "organization",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "awsAccessKey",
            "baseName": "awsAccessKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "awsSecretAccessKey",
            "baseName": "awsSecretAccessKey",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StoreDockerRegistryRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


