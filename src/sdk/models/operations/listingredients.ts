/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type ListIngredientsRequest = {
    /**
     * A list of ingredients to filter by. If not provided all ingredients will be returned.
     */
    ingredients?: Array<string> | undefined;
    page: number;
};

export type Data = {
    resultArray: Array<number>;
};

/**
 * A list of ingredients.
 */
export type ListIngredientsResponseBody = {
    data?: Data | undefined;
};

export type ListIngredientsResponse = {
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
    /**
     * A list of ingredients.
     */
    object?: ListIngredientsResponseBody | undefined;
};

/** @internal */
export namespace ListIngredientsRequest$ {
    export const inboundSchema: z.ZodType<ListIngredientsRequest, z.ZodTypeDef, unknown> = z
        .object({
            ingredients: z.array(z.string()).optional(),
            page: z.number().int(),
        })
        .transform((v) => {
            return {
                ...(v.ingredients === undefined ? null : { ingredients: v.ingredients }),
                page: v.page,
            };
        });

    export type Outbound = {
        ingredients?: Array<string> | undefined;
        page: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListIngredientsRequest> = z
        .object({
            ingredients: z.array(z.string()).optional(),
            page: z.number().int(),
        })
        .transform((v) => {
            return {
                ...(v.ingredients === undefined ? null : { ingredients: v.ingredients }),
                page: v.page,
            };
        });
}

/** @internal */
export namespace Data$ {
    export const inboundSchema: z.ZodType<Data, z.ZodTypeDef, unknown> = z
        .object({
            resultArray: z.array(z.number().int()),
        })
        .transform((v) => {
            return {
                resultArray: v.resultArray,
            };
        });

    export type Outbound = {
        resultArray: Array<number>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Data> = z
        .object({
            resultArray: z.array(z.number().int()),
        })
        .transform((v) => {
            return {
                resultArray: v.resultArray,
            };
        });
}

/** @internal */
export namespace ListIngredientsResponseBody$ {
    export const inboundSchema: z.ZodType<ListIngredientsResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            data: z.lazy(() => Data$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });

    export type Outbound = {
        data?: Data$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListIngredientsResponseBody> = z
        .object({
            data: z.lazy(() => Data$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });
}

/** @internal */
export namespace ListIngredientsResponse$ {
    export const inboundSchema: z.ZodType<ListIngredientsResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            Error: shared.ErrorT$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => ListIngredientsResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Error === undefined ? null : { error: v.Error }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
        object?: ListIngredientsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListIngredientsResponse> = z
        .object({
            contentType: z.string(),
            error: shared.ErrorT$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => ListIngredientsResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.error === undefined ? null : { Error: v.error }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
