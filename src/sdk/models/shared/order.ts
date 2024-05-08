/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The type of order.
 */
export enum OrderType {
    Drink = "drink",
    Ingredient = "ingredient",
}

/**
 * The status of the order.
 */
export enum Status {
    Pending = "pending",
    Processing = "processing",
    Complete = "complete",
}

/**
 * An order for a drink or ingredient.
 */
export class Order extends SpeakeasyBase {
    /**
     * The type of order.
     */
    @SpeakeasyMetadata()
    orderType: OrderType;

    /**
     * The product code of the drink or ingredient.
     */
    @SpeakeasyMetadata()
    productCode: string;

    /**
     * The number of units of the drink or ingredient to order.
     */
    @SpeakeasyMetadata()
    quantity: number;

    /**
     * The status of the order.
     */
    @SpeakeasyMetadata()
    status: Status;
}

/**
 * An order for a drink or ingredient.
 */
export class OrderInput extends SpeakeasyBase {
    /**
     * The type of order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "orderType" })
    orderType: OrderType;

    /**
     * The product code of the drink or ingredient.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "productCode" })
    productCode: string;

    /**
     * The number of units of the drink or ingredient to order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity: number;
}
