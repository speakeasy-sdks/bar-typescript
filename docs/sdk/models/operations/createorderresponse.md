# CreateOrderResponse

## Example Usage

```typescript
import { CreateOrderResponse } from "@speakeasy-sdks/speakeasy-bar/sdk/models/operations";
import { OrderType, Status } from "@speakeasy-sdks/speakeasy-bar/sdk/models/shared";

let value: CreateOrderResponse = {
    contentType: "<value>",
    order: {
        productCode: "AC-A2DF3",
        quantity: 963663,
        status: Status.Pending,
        type: OrderType.Drink,
    },
    statusCode: 477665,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `error`                                                               | [shared.ErrorT](../../../sdk/models/shared/errort.md)                 | :heavy_minus_sign:                                                    | An unknown error occurred interacting with the API.                   |
| `order`                                                               | [shared.Order](../../../sdk/models/shared/order.md)                   | :heavy_minus_sign:                                                    | The order was created successfully.                                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |