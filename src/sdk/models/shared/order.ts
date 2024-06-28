/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { OrderType, OrderType$ } from "./ordertype.js";
import * as z from "zod";

/**
 * The status of the order.
 */
export enum Status {
    Pending = "pending",
    Processing = "processing",
    Complete = "complete",
}

/**
 * An order for a drink or ingredient.
 */
export type Order = {
    /**
     * The product code of the drink or ingredient.
     */
    productCode: string;
    /**
     * The number of units of the drink or ingredient to order.
     */
    quantity: number;
    /**
     * The status of the order.
     */
    status: Status;
    /**
     * The type of order.
     */
    type: OrderType;
};

/** @internal */
export namespace Status$ {
    export const inboundSchema: z.ZodNativeEnum<typeof Status> = z.nativeEnum(Status);
    export const outboundSchema: z.ZodNativeEnum<typeof Status> = inboundSchema;
}

/** @internal */
export namespace Order$ {
    export const inboundSchema: z.ZodType<Order, z.ZodTypeDef, unknown> = z.object({
        productCode: z.string(),
        quantity: z.number().int(),
        status: Status$.inboundSchema,
        type: OrderType$.inboundSchema,
    });

    export type Outbound = {
        productCode: string;
        quantity: number;
        status: string;
        type: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Order> = z.object({
        productCode: z.string(),
        quantity: z.number().int(),
        status: Status$.outboundSchema,
        type: OrderType$.outboundSchema,
    });
}
