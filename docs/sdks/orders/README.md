# Orders
(*orders*)

## Overview

The orders endpoints.

### Available Operations

* [createOrder](#createorder) - Create an order.

## createOrder

Create an order for a drink.

### Example Usage

```typescript
import { BarSDK } from "@speakeasy-sdks/speakeasy-bar";
import { OrderType } from "@speakeasy-sdks/speakeasy-bar/sdk/models/shared";

const barSDK = new BarSDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await barSDK.orders.createOrder([
    {
      productCode: "APM-1F2D3",
      quantity: 567805,
      type: OrderType.Ingredient,
    },
    {
      productCode: "AC-A2DF3",
      quantity: 618237,
      type: OrderType.Ingredient,
    },
  ]);

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BarSDKCore } from "@speakeasy-sdks/speakeasy-bar/core.js";
import { ordersCreateOrder } from "@speakeasy-sdks/speakeasy-bar/funcs/ordersCreateOrder.js";
import { OrderType } from "@speakeasy-sdks/speakeasy-bar/sdk/models/shared";

// Use `BarSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const barSDK = new BarSDKCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await ordersCreateOrder(barSDK, [
    {
      productCode: "APM-1F2D3",
      quantity: 567805,
      type: OrderType.Ingredient,
    },
    {
      productCode: "AC-A2DF3",
      quantity: 618237,
      type: OrderType.Ingredient,
    },
  ]);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `requestBody`                                                                                                                                                                  | [shared.OrderInput](../../sdk/models/shared/orderinput.md)[]                                                                                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `callbackUrl`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The url to call when the order is updated.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateOrderResponse](../../sdk/models/operations/createorderresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 4XX              | \*/\*            |