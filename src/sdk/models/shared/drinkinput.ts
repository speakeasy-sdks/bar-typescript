/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { DrinkType, DrinkType$ } from "./drinktype";
import * as z from "zod";

export type DrinkInput = {
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
     * The type of drink.
     */
    type?: DrinkType | undefined;
};

/** @internal */
export namespace DrinkInput$ {
    export const inboundSchema: z.ZodType<DrinkInput, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            price: z.number(),
            productCode: z.string().optional(),
            type: DrinkType$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                price: v.price,
                ...(v.productCode === undefined ? null : { productCode: v.productCode }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        name: string;
        price: number;
        productCode?: string | undefined;
        type?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DrinkInput> = z
        .object({
            name: z.string(),
            price: z.number(),
            productCode: z.string().optional(),
            type: DrinkType$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                price: v.price,
                ...(v.productCode === undefined ? null : { productCode: v.productCode }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}
