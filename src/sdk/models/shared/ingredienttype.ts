/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
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
export const IngredientType$inboundSchema: z.ZodNativeEnum<typeof IngredientType> =
    z.nativeEnum(IngredientType);

/** @internal */
export const IngredientType$outboundSchema: z.ZodNativeEnum<typeof IngredientType> =
    IngredientType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IngredientType$ {
    /** @deprecated use `IngredientType$inboundSchema` instead. */
    export const inboundSchema = IngredientType$inboundSchema;
    /** @deprecated use `IngredientType$outboundSchema` instead. */
    export const outboundSchema = IngredientType$outboundSchema;
}
