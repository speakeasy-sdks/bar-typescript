# CreateOrderOrderUpdateRequestBody

## Example Usage

```typescript
import { CreateOrderOrderUpdateRequestBody } from "@speakeasy-sdks/speakeasy-bar/sdk/models/callbacks";
import { OrderType } from "@speakeasy-sdks/speakeasy-bar/sdk/models/shared";

let value: CreateOrderOrderUpdateRequestBody = {
  order: {
    productCode: "AC-A2DF3",
    quantity: 466311,
    type: OrderType.Drink,
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `order`                                                       | [shared.OrderInput](../../../sdk/models/shared/orderinput.md) | :heavy_minus_sign:                                            | An order for a drink or ingredient.                           |