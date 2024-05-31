/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as b64$ from "../../../lib/base64";
import * as shared from "../shared";
import * as z from "zod";

export type UpdateDrinkRawRequest = {
    requestBody: Uint8Array | string;
    productCode: string;
};

export type UpdateDrinkRawResponse = {
    body?: Uint8Array | string | undefined;
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The drink was updated successfully.
     */
    drink?: shared.Drink | undefined;
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
export namespace UpdateDrinkRawRequest$ {
    export const inboundSchema: z.ZodType<UpdateDrinkRawRequest, z.ZodTypeDef, unknown> = z
        .object({
            RequestBody: b64$.zodInbound,
            productCode: z.string(),
        })
        .transform((v) => {
            return {
                requestBody: v.RequestBody,
                productCode: v.productCode,
            };
        });

    export type Outbound = {
        RequestBody: Uint8Array;
        productCode: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateDrinkRawRequest> = z
        .object({
            requestBody: b64$.zodOutbound,
            productCode: z.string(),
        })
        .transform((v) => {
            return {
                RequestBody: v.requestBody,
                productCode: v.productCode,
            };
        });
}

/** @internal */
export namespace UpdateDrinkRawResponse$ {
    export const inboundSchema: z.ZodType<UpdateDrinkRawResponse, z.ZodTypeDef, unknown> = z
        .object({
            Body: b64$.zodInbound.optional(),
            ContentType: z.string(),
            Drink: shared.Drink$.inboundSchema.optional(),
            Error: shared.ErrorT$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.Body === undefined ? null : { body: v.Body }),
                contentType: v.ContentType,
                ...(v.Drink === undefined ? null : { drink: v.Drink }),
                ...(v.Error === undefined ? null : { error: v.Error }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        Body?: Uint8Array | undefined;
        ContentType: string;
        Drink?: shared.Drink$.Outbound | undefined;
        Error?: shared.ErrorT$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateDrinkRawResponse> = z
        .object({
            body: b64$.zodOutbound.optional(),
            contentType: z.string(),
            drink: shared.Drink$.outboundSchema.optional(),
            error: shared.ErrorT$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.body === undefined ? null : { Body: v.body }),
                ContentType: v.contentType,
                ...(v.drink === undefined ? null : { Drink: v.drink }),
                ...(v.error === undefined ? null : { Error: v.error }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
