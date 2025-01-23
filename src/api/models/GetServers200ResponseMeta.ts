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

import { GetServers200ResponseMetaLinksInner } from '../models/GetServers200ResponseMetaLinksInner.ts';
import { HttpFile } from '../http/http.ts';

export class GetServers200ResponseMeta {
    'currentPage': number;
    '_from': number | null;
    'lastPage': number;
    /**
    * Generated paginator links.
    */
    'links': Array<GetServers200ResponseMetaLinksInner>;
    /**
    * Base path for paginator generated URLs.
    */
    'path': string | null;
    /**
    * Number of items shown per page.
    */
    'perPage': number;
    /**
    * Number of the last item in the slice.
    */
    'to': number | null;
    /**
    * Total number of items being paginated.
    */
    'total': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "currentPage",
            "baseName": "current_page",
            "type": "number",
            "format": ""
        },
        {
            "name": "_from",
            "baseName": "from",
            "type": "number",
            "format": ""
        },
        {
            "name": "lastPage",
            "baseName": "last_page",
            "type": "number",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<GetServers200ResponseMetaLinksInner>",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "perPage",
            "baseName": "per_page",
            "type": "number",
            "format": ""
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "number",
            "format": ""
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetServers200ResponseMeta.attributeTypeMap;
    }

    public constructor() {
    }
}
