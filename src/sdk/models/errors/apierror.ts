/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * An error occurred interacting with the API.
 */
export type APIErrorData = {
    code?: string | undefined;
    details?: { [k: string]: any } | undefined;
    message?: string | undefined;
};

/**
 * An error occurred interacting with the API.
 */
export class APIError extends Error {
    code?: string | undefined;
    details?: { [k: string]: any } | undefined;

    /** The original data that was passed to this error instance. */
    data$: APIErrorData;

    constructor(err: APIErrorData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        if (err.code != null) {
            this.code = err.code;
        }
        if (err.details != null) {
            this.details = err.details;
        }

        this.name = "APIError";
    }
}

/** @internal */
export const APIError$inboundSchema: z.ZodType<APIError, z.ZodTypeDef, unknown> = z
    .object({
        code: z.string().optional(),
        details: z.record(z.any()).optional(),
        message: z.string().optional(),
    })
    .transform((v) => {
        return new APIError(v);
    });

/** @internal */
export type APIError$Outbound = {
    code?: string | undefined;
    details?: { [k: string]: any } | undefined;
    message?: string | undefined;
};

/** @internal */
export const APIError$outboundSchema: z.ZodType<APIError$Outbound, z.ZodTypeDef, APIError> = z
    .instanceof(APIError)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            code: z.string().optional(),
            details: z.record(z.any()).optional(),
            message: z.string().optional(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace APIError$ {
    /** @deprecated use `APIError$inboundSchema` instead. */
    export const inboundSchema = APIError$inboundSchema;
    /** @deprecated use `APIError$outboundSchema` instead. */
    export const outboundSchema = APIError$outboundSchema;
    /** @deprecated use `APIError$Outbound` instead. */
    export type Outbound = APIError$Outbound;
}
