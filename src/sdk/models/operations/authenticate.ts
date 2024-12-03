/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type AuthenticateRequestBody = {
  password?: string | undefined;
  username?: string | undefined;
};

/**
 * The api key to use for authenticated endpoints.
 */
export type AuthenticateResponseBody = {
  token?: string | undefined;
};

export type AuthenticateResponse = {
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
   * The api key to use for authenticated endpoints.
   */
  object?: AuthenticateResponseBody | undefined;
};

/** @internal */
export const AuthenticateRequestBody$inboundSchema: z.ZodType<
  AuthenticateRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  password: z.string().optional(),
  username: z.string().optional(),
});

/** @internal */
export type AuthenticateRequestBody$Outbound = {
  password?: string | undefined;
  username?: string | undefined;
};

/** @internal */
export const AuthenticateRequestBody$outboundSchema: z.ZodType<
  AuthenticateRequestBody$Outbound,
  z.ZodTypeDef,
  AuthenticateRequestBody
> = z.object({
  password: z.string().optional(),
  username: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthenticateRequestBody$ {
  /** @deprecated use `AuthenticateRequestBody$inboundSchema` instead. */
  export const inboundSchema = AuthenticateRequestBody$inboundSchema;
  /** @deprecated use `AuthenticateRequestBody$outboundSchema` instead. */
  export const outboundSchema = AuthenticateRequestBody$outboundSchema;
  /** @deprecated use `AuthenticateRequestBody$Outbound` instead. */
  export type Outbound = AuthenticateRequestBody$Outbound;
}

export function authenticateRequestBodyToJSON(
  authenticateRequestBody: AuthenticateRequestBody,
): string {
  return JSON.stringify(
    AuthenticateRequestBody$outboundSchema.parse(authenticateRequestBody),
  );
}

export function authenticateRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<AuthenticateRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AuthenticateRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AuthenticateRequestBody' from JSON`,
  );
}

/** @internal */
export const AuthenticateResponseBody$inboundSchema: z.ZodType<
  AuthenticateResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  token: z.string().optional(),
});

/** @internal */
export type AuthenticateResponseBody$Outbound = {
  token?: string | undefined;
};

/** @internal */
export const AuthenticateResponseBody$outboundSchema: z.ZodType<
  AuthenticateResponseBody$Outbound,
  z.ZodTypeDef,
  AuthenticateResponseBody
> = z.object({
  token: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthenticateResponseBody$ {
  /** @deprecated use `AuthenticateResponseBody$inboundSchema` instead. */
  export const inboundSchema = AuthenticateResponseBody$inboundSchema;
  /** @deprecated use `AuthenticateResponseBody$outboundSchema` instead. */
  export const outboundSchema = AuthenticateResponseBody$outboundSchema;
  /** @deprecated use `AuthenticateResponseBody$Outbound` instead. */
  export type Outbound = AuthenticateResponseBody$Outbound;
}

export function authenticateResponseBodyToJSON(
  authenticateResponseBody: AuthenticateResponseBody,
): string {
  return JSON.stringify(
    AuthenticateResponseBody$outboundSchema.parse(authenticateResponseBody),
  );
}

export function authenticateResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<AuthenticateResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AuthenticateResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AuthenticateResponseBody' from JSON`,
  );
}

/** @internal */
export const AuthenticateResponse$inboundSchema: z.ZodType<
  AuthenticateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Error: shared.ErrorT$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  object: z.lazy(() => AuthenticateResponseBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Error": "error",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AuthenticateResponse$Outbound = {
  ContentType: string;
  Error?: shared.ErrorT$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
  object?: AuthenticateResponseBody$Outbound | undefined;
};

/** @internal */
export const AuthenticateResponse$outboundSchema: z.ZodType<
  AuthenticateResponse$Outbound,
  z.ZodTypeDef,
  AuthenticateResponse
> = z.object({
  contentType: z.string(),
  error: shared.ErrorT$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  object: z.lazy(() => AuthenticateResponseBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    error: "Error",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthenticateResponse$ {
  /** @deprecated use `AuthenticateResponse$inboundSchema` instead. */
  export const inboundSchema = AuthenticateResponse$inboundSchema;
  /** @deprecated use `AuthenticateResponse$outboundSchema` instead. */
  export const outboundSchema = AuthenticateResponse$outboundSchema;
  /** @deprecated use `AuthenticateResponse$Outbound` instead. */
  export type Outbound = AuthenticateResponse$Outbound;
}

export function authenticateResponseToJSON(
  authenticateResponse: AuthenticateResponse,
): string {
  return JSON.stringify(
    AuthenticateResponse$outboundSchema.parse(authenticateResponse),
  );
}

export function authenticateResponseFromJSON(
  jsonString: string,
): SafeParseResult<AuthenticateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AuthenticateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AuthenticateResponse' from JSON`,
  );
}
