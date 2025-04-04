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

import { Backup } from '../models/Backup.ts';
import { EnvironmentVariable } from '../models/EnvironmentVariable.ts';
import { Location } from '../models/Location.ts';
import { Node } from '../models/Node.ts';
import { Port } from '../models/Port.ts';
import { ResourcePackage } from '../models/ResourcePackage.ts';
import { RestartPolicy } from '../models/RestartPolicy.ts';
import { HttpFile } from '../http/http.ts';

export class Server {
    /**
    * The ID of the service
    */
    'id': number;
    /**
    * The ID of the location setting
    */
    'appLocationSettingId': number;
    /**
    * The ID of the instance
    */
    'instance': number;
    /**
    * The ID of the server config
    */
    'serverConfigId': number;
    /**
    * The name of the server config
    */
    'serverConfigName': string;
    /**
    * The name of the service
    */
    'name': string;
    /**
    * The current status
    */
    'status': string;
    /**
    * An optional message
    */
    'statusMessage': string | null;
    /**
    * Indicates whether the service can be backed up
    */
    'isBackupable': boolean;
    /**
    * Indicates whether the service can be restored
    */
    'isRestorable': boolean;
    /**
    * Indicates whether the service is pending (not running) due to insufficient resources on the node.
    */
    'isPending': boolean;
    /**
    * Indicates whether the service is currently not found/missing in the cluster.
    */
    'isNotFound': boolean;
    /**
    * Indicates whether the service is currently in an overall healthy state.
    */
    'isHealthy': boolean;
    /**
    * Indicates if the service is under maintenance
    */
    'maintenance': boolean;
    /**
    * The port definitions of the service
    */
    'ports': Array<Port>;
    /**
    * The environment variables of the service
    */
    'env': { [key: string]: EnvironmentVariable; };
    /**
    * The restart policy of the service
    */
    'restartPolicy': RestartPolicy;
    /**
    * The assigned node. If missing, it likely means the service is overloaded and has not yet been assigned to any node.
    */
    'node'?: Node;
    /**
    * The location of the node
    */
    'location': Location;
    /**
    * The assigned resource package
    */
    'resources': ResourcePackage;
    /**
    * The backups of the service
    */
    'backups': Array<Backup>;
    /**
    * The metadata for the service
    */
    'metadata': { [key: string]: any; };
    /**
    * When the service was created
    */
    'createdAt': Date | null;
    /**
    * When the service was last updated
    */
    'updatedAt': Date | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "appLocationSettingId",
            "baseName": "appLocationSettingId",
            "type": "number",
            "format": ""
        },
        {
            "name": "instance",
            "baseName": "instance",
            "type": "number",
            "format": ""
        },
        {
            "name": "serverConfigId",
            "baseName": "serverConfigId",
            "type": "number",
            "format": ""
        },
        {
            "name": "serverConfigName",
            "baseName": "serverConfigName",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "statusMessage",
            "baseName": "status_message",
            "type": "string",
            "format": ""
        },
        {
            "name": "isBackupable",
            "baseName": "isBackupable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isRestorable",
            "baseName": "isRestorable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isPending",
            "baseName": "isPending",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isNotFound",
            "baseName": "isNotFound",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isHealthy",
            "baseName": "isHealthy",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "maintenance",
            "baseName": "maintenance",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "ports",
            "baseName": "ports",
            "type": "Array<Port>",
            "format": ""
        },
        {
            "name": "env",
            "baseName": "env",
            "type": "{ [key: string]: EnvironmentVariable; }",
            "format": ""
        },
        {
            "name": "restartPolicy",
            "baseName": "restartPolicy",
            "type": "RestartPolicy",
            "format": ""
        },
        {
            "name": "node",
            "baseName": "node",
            "type": "Node",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "Location",
            "format": ""
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "ResourcePackage",
            "format": ""
        },
        {
            "name": "backups",
            "baseName": "backups",
            "type": "Array<Backup>",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return Server.attributeTypeMap;
    }

    public constructor() {
    }
}
