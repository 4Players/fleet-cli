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

import { TaggedImage } from '../models/TaggedImage.ts';
import { TaggedImageMetaData } from '../models/TaggedImageMetaData.ts';
import { HttpFile } from '../http/http.ts';

export class GetTaggedImages200Response {
    'data': Array<TaggedImage>;
    'meta': TaggedImageMetaData;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<TaggedImage>",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "TaggedImageMetaData",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetTaggedImages200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

