/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DrinkIngredient } from "./drinkingredient";
import { DrinkType } from "./drinktype";
import { Expose, Type } from "class-transformer";

export class DrinkInput extends SpeakeasyBase {
    /**
     * The ingredients required to make the drink, only available when authenticated.
     */
    @SpeakeasyMetadata({ elemType: DrinkIngredient })
    @Expose({ name: "ingredients" })
    @Type(() => DrinkIngredient)
    ingredients?: DrinkIngredient[];

    /**
     * The name of the drink.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * A photo of the drink.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "photo" })
    photo?: string;

    /**
     * The price of one unit of the drink in US cents.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "price" })
    price: number;

    /**
     * The product code of a drink, only available when authenticated.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "productCode" })
    productCode: string;

    /**
     * The type of drink.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: DrinkType;
}
