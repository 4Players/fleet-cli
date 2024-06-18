/**
 * B2B_API
 * API to access Odin Fleet, empowering developers to deploy gameservers all around the world in just a few lines of code.
 *
 * OpenAPI spec version: 0.8.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Resources } from '../models/Resources.ts';
import { HttpFile } from '../http/http.ts';

export class ResourceAllocations {
    /**
    * The limits set for the server
    */
    'limits': Resources;
    /**
    * The resources that are reserved for the server
    */
    'reservations': Resources;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "limits",
            "baseName": "limits",
            "type": "Resources",
            "format": ""
        },
        {
            "name": "reservations",
            "baseName": "reservations",
            "type": "Resources",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ResourceAllocations.attributeTypeMap;
    }

    public constructor() {
    }
}

