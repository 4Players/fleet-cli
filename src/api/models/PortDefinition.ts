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

import { Protocol } from '../models/Protocol.ts';
import { PublishMode } from '../models/PublishMode.ts';
import { HttpFile } from '../http/http.ts';

export class PortDefinition {
    /**
    * The name of the server config
    */
    'name': string;
    /**
    * The protocols to expose
    */
    'protocols': Array<Protocol>;
    /**
    * The port to expose
    */
    'targetPort': number;
    /**
    * Defines whether the port uses the hosts network or the ingress network
    */
    'publishMode': PublishMode;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "protocols",
            "baseName": "protocols",
            "type": "Array<Protocol>",
            "format": ""
        },
        {
            "name": "targetPort",
            "baseName": "targetPort",
            "type": "number",
            "format": ""
        },
        {
            "name": "publishMode",
            "baseName": "publishMode",
            "type": "PublishMode",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PortDefinition.attributeTypeMap;
    }

    public constructor() {
    }
}



