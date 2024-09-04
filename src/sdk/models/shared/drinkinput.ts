/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { DrinkType, DrinkType$inboundSchema, DrinkType$outboundSchema } from "./drinktype.js";
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
export const DrinkInput$inboundSchema: z.ZodType<DrinkInput, z.ZodTypeDef, unknown> = z.object({
    name: z.string(),
    price: z.number(),
    productCode: z.string().optional(),
    type: DrinkType$inboundSchema.optional(),
});

/** @internal */
export type DrinkInput$Outbound = {
    name: string;
    price: number;
    productCode?: string | undefined;
    type?: string | undefined;
};

/** @internal */
export const DrinkInput$outboundSchema: z.ZodType<DrinkInput$Outbound, z.ZodTypeDef, DrinkInput> =
    z.object({
        name: z.string(),
        price: z.number(),
        productCode: z.string().optional(),
        type: DrinkType$outboundSchema.optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DrinkInput$ {
    /** @deprecated use `DrinkInput$inboundSchema` instead. */
    export const inboundSchema = DrinkInput$inboundSchema;
    /** @deprecated use `DrinkInput$outboundSchema` instead. */
    export const outboundSchema = DrinkInput$outboundSchema;
    /** @deprecated use `DrinkInput$Outbound` instead. */
    export type Outbound = DrinkInput$Outbound;
}
