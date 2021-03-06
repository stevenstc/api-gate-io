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

export class FuturesAccount {
    /**
     * Total assets, total = position_margin + order_margin + available
     */
    'total'?: string;
    /**
     * Unrealized PNL
     */
    'unrealisedPnl'?: string;
    /**
     * Position margin
     */
    'positionMargin'?: string;
    /**
     * Order margin of unfinished orders
     */
    'orderMargin'?: string;
    /**
     * Available balance to transfer out or trade
     */
    'available'?: string;
    /**
     * POINT amount
     */
    'point'?: string;
    /**
     * Settle currency
     */
    'currency'?: string;
    /**
     * Whether dual mode is enabled
     */
    'inDualMode'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'total',
            baseName: 'total',
            type: 'string',
        },
        {
            name: 'unrealisedPnl',
            baseName: 'unrealised_pnl',
            type: 'string',
        },
        {
            name: 'positionMargin',
            baseName: 'position_margin',
            type: 'string',
        },
        {
            name: 'orderMargin',
            baseName: 'order_margin',
            type: 'string',
        },
        {
            name: 'available',
            baseName: 'available',
            type: 'string',
        },
        {
            name: 'point',
            baseName: 'point',
            type: 'string',
        },
        {
            name: 'currency',
            baseName: 'currency',
            type: 'string',
        },
        {
            name: 'inDualMode',
            baseName: 'in_dual_mode',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return FuturesAccount.attributeTypeMap;
    }
}
