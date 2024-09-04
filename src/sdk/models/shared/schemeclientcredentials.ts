/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type SchemeClientCredentials = {
    clientID: string;
    clientSecret: string;
    tokenURL?: string | undefined;
};

/** @internal */
export const SchemeClientCredentials$inboundSchema: z.ZodType<
    SchemeClientCredentials,
    z.ZodTypeDef,
    unknown
> = z.object({
    clientID: z.string(),
    clientSecret: z.string(),
    tokenURL: z.string().default("https://speakeasy.bar/oauth2/token/"),
});

/** @internal */
export type SchemeClientCredentials$Outbound = {
    clientID: string;
    clientSecret: string;
    tokenURL: string;
};

/** @internal */
export const SchemeClientCredentials$outboundSchema: z.ZodType<
    SchemeClientCredentials$Outbound,
    z.ZodTypeDef,
    SchemeClientCredentials
> = z.object({
    clientID: z.string(),
    clientSecret: z.string(),
    tokenURL: z.string().default("https://speakeasy.bar/oauth2/token/"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemeClientCredentials$ {
    /** @deprecated use `SchemeClientCredentials$inboundSchema` instead. */
    export const inboundSchema = SchemeClientCredentials$inboundSchema;
    /** @deprecated use `SchemeClientCredentials$outboundSchema` instead. */
    export const outboundSchema = SchemeClientCredentials$outboundSchema;
    /** @deprecated use `SchemeClientCredentials$Outbound` instead. */
    export type Outbound = SchemeClientCredentials$Outbound;
}
