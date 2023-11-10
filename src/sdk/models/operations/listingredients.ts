/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class ListIngredientsRequest extends SpeakeasyBase {
    /**
     * A list of ingredients to filter by. If not provided all ingredients will be returned.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ingredients" })
    ingredients?: string[];
}

export class ListIngredientsResponse extends SpeakeasyBase {
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
    rawResponse?: AxiosResponse;

    /**
     * A list of ingredients.
     */
    @SpeakeasyMetadata({ elemType: shared.Ingredient })
    classes?: shared.Ingredient[];
}
