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

export class TaggedImage {
    /**
    * The name of the docker image including the tag.
    */
    'name': string;
    /**
    * The tag of the docker image.
    */
    'tag': string;
    /**
    * The name of the repository.
    */
    'repository': string;
    /**
    * The location URI of the tagged docker image.
    */
    'location': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string",
            "format": ""
        },
        {
            "name": "repository",
            "baseName": "repository",
            "type": "string",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TaggedImage.attributeTypeMap;
    }

    public constructor() {
    }
}
