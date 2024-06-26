/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The type of ingredient.
 */
export enum IngredientType {
    Fresh = "fresh",
    LongLife = "long-life",
    Packaged = "packaged",
}

/** @internal */
export namespace IngredientType$ {
    export const inboundSchema: z.ZodNativeEnum<typeof IngredientType> =
        z.nativeEnum(IngredientType);
    export const outboundSchema: z.ZodNativeEnum<typeof IngredientType> = inboundSchema;
}
