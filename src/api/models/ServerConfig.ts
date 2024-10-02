/**
 * ODIN Fleet API
 * API to access Odin Fleet, empowering developers to deploy gameservers all around the world in just a few lines of code.
 *
 * OpenAPI spec version: 0.8.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Binary } from '../models/Binary.ts';
import { ConfigFile } from '../models/ConfigFile.ts';
import { EnvironmentVariableDefinition } from '../models/EnvironmentVariableDefinition.ts';
import { Mount } from '../models/Mount.ts';
import { PortDefinition } from '../models/PortDefinition.ts';
import { RestartPolicy } from '../models/RestartPolicy.ts';
import { SecretFile } from '../models/SecretFile.ts';
import { ServerConfigStatus } from '../models/ServerConfigStatus.ts';
import { HttpFile } from '../http/http.ts';

export class ServerConfig {
    /**
    * The id of the server configuration
    */
    'id': number;
    /**
    * The binary id of the server configuration
    */
    'binaryId': number;
    /**
    * The app id of the server configuration
    */
    'appId': number;
    /**
    * The name of the server config
    */
    'name': string;
    /**
    * The command to run in the container (overrides ENTRYPOINT of the Dockerfile)
    */
    'command': string | null;
    /**
    * The arguments to pass to the command (overrides CMD of the Dockerfile)
    */
    'args': string | null;
    /**
    * The notes of the server config - to keep track of things and to inform colleagues
    */
    'notes': string | null;
    /**
    * The current status
    */
    'status': ServerConfigStatus;
    /**
    * An optional message
    */
    'statusMessage': string | null;
    /**
    * Indicates if the server config is under maintenance
    */
    'maintenance': boolean;
    /**
    * The slug of the resource package used in this server config
    */
    'resourcePackageSlug': string | null;
    /**
    * The policy used to restart this server
    */
    'restartPolicy': RestartPolicy;
    /**
    * The environment variable definitions to be used in this config
    */
    'env': Array<EnvironmentVariableDefinition>;
    /**
    * The mounts to use
    */
    'mounts': Array<Mount>;
    /**
    * The ports to expose
    */
    'ports': Array<PortDefinition>;
    /**
    * The config files to use
    */
    'configFiles': Array<ConfigFile>;
    /**
    * The secret files to use
    */
    'secretFiles': Array<SecretFile>;
    /**
    * The image that is used in this server config
    */
    'binary'?: Binary;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "binaryId",
            "baseName": "binaryId",
            "type": "number",
            "format": ""
        },
        {
            "name": "appId",
            "baseName": "appId",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
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
            "name": "args",
            "baseName": "args",
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
            "name": "status",
            "baseName": "status",
            "type": "ServerConfigStatus",
            "format": ""
        },
        {
            "name": "statusMessage",
            "baseName": "statusMessage",
            "type": "string",
            "format": ""
        },
        {
            "name": "maintenance",
            "baseName": "maintenance",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "resourcePackageSlug",
            "baseName": "resourcePackageSlug",
            "type": "string",
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
            "name": "binary",
            "baseName": "binary",
            "type": "Binary",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ServerConfig.attributeTypeMap;
    }

    public constructor() {
    }
}



