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

import { Constraints } from '../models/Constraints.ts';
import { HttpFile } from '../http/http.ts';

export class Placement {
    /**
    * The constraints to use
    */
    'constraints': Constraints;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "constraints",
            "baseName": "constraints",
            "type": "Constraints",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Placement.attributeTypeMap;
    }

    public constructor() {
    }
}

