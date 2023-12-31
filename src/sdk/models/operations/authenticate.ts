/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class AuthenticateRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "password" })
    password?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username?: string;
}

/**
 * The api key to use for authenticated endpoints.
 */
export class AuthenticateResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "token" })
    token?: string;
}

export class AuthenticateResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * An unknown error occurred interacting with the API.
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * The api key to use for authenticated endpoints.
     */
    @SpeakeasyMetadata()
    object?: AuthenticateResponseBody;
}
