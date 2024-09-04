# CreateOrderOrderUpdateRequestBody

## Example Usage

```typescript
import { CreateOrderOrderUpdateRequestBody } from "@speakeasy-sdks/speakeasy-bar/sdk/models/callbacks";
import { OrderType } from "@speakeasy-sdks/speakeasy-bar/sdk/models/shared";

let value: CreateOrderOrderUpdateRequestBody = {
    order: {
        productCode: "APM-1F2D3",
        quantity: 140350,
        type: OrderType.Ingredient,
    },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `order`                                                       | [shared.OrderInput](../../../sdk/models/shared/orderinput.md) | :heavy_minus_sign:                                            | An order for a drink or ingredient.                           |