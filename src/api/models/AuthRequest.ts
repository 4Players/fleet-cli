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

import { HttpFile } from '../http/http.ts';

export class AuthRequest {
    /**
    * The email of the user
    */
    'email': string;
    /**
    * The password of the user
    */
    'password': string;
    /**
    * The fusion session id of the user
    */
    'sid': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": "email"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        },
        {
            "name": "sid",
            "baseName": "sid",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuthRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
