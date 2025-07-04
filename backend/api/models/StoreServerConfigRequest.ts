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

import { ConfigFile } from '../models/ConfigFile.ts';
import { EnvironmentVariableDefinition } from '../models/EnvironmentVariableDefinition.ts';
import { Mount } from '../models/Mount.ts';
import { PortDefinition } from '../models/PortDefinition.ts';
import { ResourceAllocations } from '../models/ResourceAllocations.ts';
import { RestartPolicy } from '../models/RestartPolicy.ts';
import { SecretFile } from '../models/SecretFile.ts';
import { HttpFile } from '../http/http.ts';

export class StoreServerConfigRequest {
    /**
    * The name of the server configuration
    */
    'name': string;
    /**
    * The arguments to pass to the command (overrides CMD of the Dockerfile)
    */
    'args'?: string | null;
    /**
    * The command to run in the container (overrides ENTRYPOINT of the Dockerfile)
    */
    'command'?: string | null;
    /**
    * The notes of the server config - to keep track of things and to inform colleagues
    */
    'notes'?: string | null;
    /**
    * The binary id of the server configuration
    */
    'binaryId': number;
    /**
    * The slug of the resource package
    */
    'resourcePackageSlug': string;
    /**
    * The config files used in this server configuration
    */
    'configFiles'?: Array<ConfigFile>;
    /**
    * The secret files used in this server configuration
    */
    'secretFiles'?: Array<SecretFile>;
    /**
    * The resources used in this server configuration
    */
    'resources'?: ResourceAllocations;
    /**
    * The restart policy of the server configuration
    */
    'restartPolicy'?: RestartPolicy;
    /**
    * The environment variables used in this server configuration
    */
    'env'?: Array<EnvironmentVariableDefinition>;
    /**
    * The mounts used in this server configuration
    */
    'mounts'?: Array<Mount>;
    /**
    * The port definitions
    */
    'ports'?: Array<PortDefinition>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "args",
            "baseName": "args",
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
            "name": "notes",
            "baseName": "notes",
            "type": "string",
            "format": ""
        },
        {
            "name": "binaryId",
            "baseName": "binaryId",
            "type": "number",
            "format": ""
        },
        {
            "name": "resourcePackageSlug",
            "baseName": "resourcePackageSlug",
            "type": "string",
            "format": ""
        },
        {
            "name": "configFiles",
            "baseName": "configFiles",
            "type": "Array<ConfigFile>",
            "format": ""
        },
        {
            "name": "secretFiles",
            "baseName": "secretFiles",
            "type": "Array<SecretFile>",
            "format": ""
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "ResourceAllocations",
            "format": ""
        },
        {
            "name": "restartPolicy",
            "baseName": "restartPolicy",
            "type": "RestartPolicy",
            "format": ""
        },
        {
            "name": "env",
            "baseName": "env",
            "type": "Array<EnvironmentVariableDefinition>",
            "format": ""
        },
        {
            "name": "mounts",
            "baseName": "mounts",
            "type": "Array<Mount>",
            "format": ""
        },
        {
            "name": "ports",
            "baseName": "ports",
            "type": "Array<PortDefinition>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StoreServerConfigRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
