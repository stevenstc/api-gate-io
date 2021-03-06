/**
 * Gate API v4
 * APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user\'s behalf.
 *
 * Contact: support@mail.gate.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class Repayment {
    /**
     * Loan record ID
     */
    'id'?: string;
    /**
     * Repayment time
     */
    'createTime'?: string;
    /**
     * Repaid principal
     */
    'principal'?: string;
    /**
     * Repaid interest
     */
    'interest'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'createTime',
            baseName: 'create_time',
            type: 'string',
        },
        {
            name: 'principal',
            baseName: 'principal',
            type: 'string',
        },
        {
            name: 'interest',
            baseName: 'interest',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return Repayment.attributeTypeMap;
    }
}
