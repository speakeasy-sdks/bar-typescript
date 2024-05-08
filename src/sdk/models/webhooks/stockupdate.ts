/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class StockUpdateResponse extends SpeakeasyBase {
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
}

export class StockUpdateRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "drink" })
    @Type(() => shared.DrinkInput)
    drink?: shared.DrinkInput;

    @SpeakeasyMetadata()
    @Expose({ name: "ingredient" })
    @Type(() => shared.Ingredient)
    ingredient?: shared.Ingredient;
}
