/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The type of order.
 */
export enum OrderType {
  Drink = "drink",
  Ingredient = "ingredient",
}

/** @internal */
export const OrderType$inboundSchema: z.ZodNativeEnum<typeof OrderType> = z
  .nativeEnum(OrderType);

/** @internal */
export const OrderType$outboundSchema: z.ZodNativeEnum<typeof OrderType> =
  OrderType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderType$ {
  /** @deprecated use `OrderType$inboundSchema` instead. */
  export const inboundSchema = OrderType$inboundSchema;
  /** @deprecated use `OrderType$outboundSchema` instead. */
  export const outboundSchema = OrderType$outboundSchema;
}
