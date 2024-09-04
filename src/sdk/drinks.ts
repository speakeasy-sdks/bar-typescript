/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { drinksGetDrink } from "../funcs/drinksGetDrink.js";
import { drinksListDrinks } from "../funcs/drinksListDrinks.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Drinks extends ClientSDK {
    /**
     * Get a drink.
     *
     * @remarks
     * Get a drink by name, if authenticated this will include stock levels and product codes otherwise it will only include public information.
     */
    async getDrink(name: string, options?: RequestOptions): Promise<operations.GetDrinkResponse> {
        return unwrapAsync(drinksGetDrink(this, name, options));
    }

    /**
     * Get a list of drinks.
     *
     * @remarks
     * Get a list of drinks, if authenticated this will include stock levels and product codes otherwise it will only include public information.
     */
    async listDrinks(
        drinkType?: shared.DrinkType | undefined,
        options?: RequestOptions
    ): Promise<operations.ListDrinksResponse> {
        return unwrapAsync(drinksListDrinks(this, drinkType, options));
    }
}
