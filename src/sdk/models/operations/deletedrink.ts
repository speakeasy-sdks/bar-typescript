/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type DeleteDrinkRequest = {
    productCode: string;
};

export type DeleteDrinkResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * An unknown error occurred interacting with the API.
     */
    error?: shared.ErrorT | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace DeleteDrinkRequest$ {
    export const inboundSchema: z.ZodType<DeleteDrinkRequest, z.ZodTypeDef, unknown> = z
        .object({
            productCode: z.string(),
        })
        .transform((v) => {
            return {
                productCode: v.productCode,
            };
        });

    export type Outbound = {
        productCode: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteDrinkRequest> = z
        .object({
            productCode: z.string(),
        })
        .transform((v) => {
            return {
                productCode: v.productCode,
            };
        });
}

/** @internal */
export namespace DeleteDrinkResponse$ {
    export const inboundSchema: z.ZodType<DeleteDrinkResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            Error: shared.ErrorT$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Error === undefined ? null : { error: v.Error }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteDrinkResponse> = z
        .object({
            contentType: z.string(),
            error: shared.ErrorT$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.error === undefined ? null : { Error: v.error }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
