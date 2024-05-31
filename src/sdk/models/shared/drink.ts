/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { DrinkType, DrinkType$ } from "./drinktype";
import * as z from "zod";

export type Drink = {
    /**
     * The name of the drink.
     */
    name: string;
    /**
     * The price of one unit of the drink in US cents.
     */
    price: number;
    /**
     * The product code of the drink, only available when authenticated.
     */
    productCode?: string | undefined;
    /**
     * The number of units of the drink in stock, only available when authenticated.
     */
    stock?: number | undefined;
    /**
     * The type of drink.
     */
    type?: DrinkType | undefined;
};

/** @internal */
export namespace Drink$ {
    export const inboundSchema: z.ZodType<Drink, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            price: z.number(),
            productCode: z.string().optional(),
            stock: z.number().int().optional(),
            type: DrinkType$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                price: v.price,
                ...(v.productCode === undefined ? null : { productCode: v.productCode }),
                ...(v.stock === undefined ? null : { stock: v.stock }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        name: string;
        price: number;
        productCode?: string | undefined;
        stock?: number | undefined;
        type?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Drink> = z
        .object({
            name: z.string(),
            price: z.number(),
            productCode: z.string().optional(),
            stock: z.number().int().optional(),
            type: DrinkType$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                price: v.price,
                ...(v.productCode === undefined ? null : { productCode: v.productCode }),
                ...(v.stock === undefined ? null : { stock: v.stock }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}
