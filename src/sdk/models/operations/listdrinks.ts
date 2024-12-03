/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type ListDrinksRequest = {
  /**
   * The type of drink to filter by. If not provided all drinks will be returned.
   */
  drinkType?: shared.DrinkType | undefined;
};

export type ListDrinksResponse = {
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
   * A list of drinks.
   */
  classes?: Array<shared.Drink> | undefined;
};

/** @internal */
export const ListDrinksRequest$inboundSchema: z.ZodType<
  ListDrinksRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  drinkType: shared.DrinkType$inboundSchema.optional(),
});

/** @internal */
export type ListDrinksRequest$Outbound = {
  drinkType?: string | undefined;
};

/** @internal */
export const ListDrinksRequest$outboundSchema: z.ZodType<
  ListDrinksRequest$Outbound,
  z.ZodTypeDef,
  ListDrinksRequest
> = z.object({
  drinkType: shared.DrinkType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDrinksRequest$ {
  /** @deprecated use `ListDrinksRequest$inboundSchema` instead. */
  export const inboundSchema = ListDrinksRequest$inboundSchema;
  /** @deprecated use `ListDrinksRequest$outboundSchema` instead. */
  export const outboundSchema = ListDrinksRequest$outboundSchema;
  /** @deprecated use `ListDrinksRequest$Outbound` instead. */
  export type Outbound = ListDrinksRequest$Outbound;
}

export function listDrinksRequestToJSON(
  listDrinksRequest: ListDrinksRequest,
): string {
  return JSON.stringify(
    ListDrinksRequest$outboundSchema.parse(listDrinksRequest),
  );
}

export function listDrinksRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListDrinksRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDrinksRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDrinksRequest' from JSON`,
  );
}

/** @internal */
export const ListDrinksResponse$inboundSchema: z.ZodType<
  ListDrinksResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Error: shared.ErrorT$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  classes: z.array(shared.Drink$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Error": "error",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type ListDrinksResponse$Outbound = {
  ContentType: string;
  Error?: shared.ErrorT$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
  classes?: Array<shared.Drink$Outbound> | undefined;
};

/** @internal */
export const ListDrinksResponse$outboundSchema: z.ZodType<
  ListDrinksResponse$Outbound,
  z.ZodTypeDef,
  ListDrinksResponse
> = z.object({
  contentType: z.string(),
  error: shared.ErrorT$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  classes: z.array(shared.Drink$outboundSchema).optional(),
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
export namespace ListDrinksResponse$ {
  /** @deprecated use `ListDrinksResponse$inboundSchema` instead. */
  export const inboundSchema = ListDrinksResponse$inboundSchema;
  /** @deprecated use `ListDrinksResponse$outboundSchema` instead. */
  export const outboundSchema = ListDrinksResponse$outboundSchema;
  /** @deprecated use `ListDrinksResponse$Outbound` instead. */
  export type Outbound = ListDrinksResponse$Outbound;
}

export function listDrinksResponseToJSON(
  listDrinksResponse: ListDrinksResponse,
): string {
  return JSON.stringify(
    ListDrinksResponse$outboundSchema.parse(listDrinksResponse),
  );
}

export function listDrinksResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListDrinksResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDrinksResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDrinksResponse' from JSON`,
  );
}
