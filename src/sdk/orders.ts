/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ordersCreateOrder } from "../funcs/ordersCreateOrder.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Orders extends ClientSDK {
  /**
   * Create an order.
   *
   * @remarks
   * Create an order for a drink.
   */
  async createOrder(
    requestBody: Array<shared.OrderInput>,
    callbackUrl?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.CreateOrderResponse> {
    return unwrapAsync(ordersCreateOrder(
      this,
      requestBody,
      callbackUrl,
      options,
    ));
  }
}
