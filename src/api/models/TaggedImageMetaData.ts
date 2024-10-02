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

export class TaggedImageMetaData {
    /**
    * Whether the data was retrieved from the cache.
    */
    'cached': boolean;
    /**
    * Timestamp of when the data was last cached.
    */
    'cachedAt': string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cached",
            "baseName": "cached",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "cachedAt",
            "baseName": "cached_at",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TaggedImageMetaData.attributeTypeMap;
    }

    public constructor() {
    }
}

