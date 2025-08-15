# CreateOrderRequest

## Example Usage

```typescript
import { CreateOrderRequest } from "@speakeasy-sdks/speakeasy-bar/sdk/models/operations";
import { OrderType } from "@speakeasy-sdks/speakeasy-bar/sdk/models/shared";

let value: CreateOrderRequest = {
  requestBody: [
    {
      productCode: "AC-A2DF3",
      quantity: 903466,
      type: OrderType.Ingredient,
    },
  ],
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `requestBody`                                                   | [shared.OrderInput](../../../sdk/models/shared/orderinput.md)[] | :heavy_check_mark:                                              | N/A                                                             |
| `callbackUrl`                                                   | *string*                                                        | :heavy_minus_sign:                                              | The url to call when the order is updated.                      |