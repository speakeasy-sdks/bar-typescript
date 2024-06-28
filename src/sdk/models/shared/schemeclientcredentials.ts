/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type SchemeClientCredentials = {
    clientID: string;
    clientSecret: string;
    tokenURL?: "https://speakeasy.bar/oauth2/token/" | undefined;
};

/** @internal */
export namespace SchemeClientCredentials$ {
    export const inboundSchema: z.ZodType<SchemeClientCredentials, z.ZodTypeDef, unknown> = z
        .object({
            ClientID: z.string(),
            ClientSecret: z.string(),
            TokenURL: z.literal("https://speakeasy.bar/oauth2/token/").optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ClientID: "clientID",
                ClientSecret: "clientSecret",
                TokenURL: "tokenURL",
            });
        });

    export type Outbound = {
        ClientID: string;
        ClientSecret: string;
        TokenURL: "https://speakeasy.bar/oauth2/token/";
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SchemeClientCredentials> = z
        .object({
            clientID: z.string(),
            clientSecret: z.string(),
            tokenURL: z
                .literal("https://speakeasy.bar/oauth2/token/")
                .default("https://speakeasy.bar/oauth2/token/" as const),
        })
        .transform((v) => {
            return remap$(v, {
                clientID: "ClientID",
                clientSecret: "ClientSecret",
                tokenURL: "TokenURL",
            });
        });
}
