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

import { BinaryType } from '../models/BinaryType.ts';
import { DockerCompose } from '../models/DockerCompose.ts';
import { DockerImage } from '../models/DockerImage.ts';
import { OperatingSystem } from '../models/OperatingSystem.ts';
import { SteamWorks } from '../models/SteamWorks.ts';
import { ZipFile } from '../models/ZipFile.ts';
import { HttpFile } from '../http/http.ts';

export class CreateBinaryRequest {
    /**
    * The name of the binary
    */
    'name': string;
    /**
    * The version of the binary
    */
    'version': string;
    /**
    * The type of the binary
    */
    'type': BinaryType;
    /**
    * The operating system of the binary
    */
    'os': OperatingSystem;
    /**
    * The docker compose settings
    */
    'dockerCompose'?: DockerCompose;
    /**
    * The zip file settings
    */
    'zipFile'?: ZipFile;
    /**
    * The steam settings
    */
    'steam'?: SteamWorks;
    /**
    * The docker image settings
    */
    'dockerImage'?: DockerImage;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "BinaryType",
            "format": ""
        },
        {
            "name": "os",
            "baseName": "os",
            "type": "OperatingSystem",
            "format": ""
        },
        {
            "name": "dockerCompose",
            "baseName": "dockerCompose",
            "type": "DockerCompose",
            "format": ""
        },
        {
            "name": "zipFile",
            "baseName": "zipFile",
            "type": "ZipFile",
            "format": ""
        },
        {
            "name": "steam",
            "baseName": "steam",
            "type": "SteamWorks",
            "format": ""
        },
        {
            "name": "dockerImage",
            "baseName": "dockerImage",
            "type": "DockerImage",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateBinaryRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



