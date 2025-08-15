# OrderInput

An order for a drink or ingredient.

## Example Usage

```typescript
import { OrderInput, OrderType } from "@speakeasy-sdks/speakeasy-bar/sdk/models/shared";

let value: OrderInput = {
  productCode: "AC-A2DF3",
  quantity: 235456,
  type: OrderType.Ingredient,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `productCode`                                               | *string*                                                    | :heavy_check_mark:                                          | The product code of the drink or ingredient.                | AC-A2DF3                                                    |
| `quantity`                                                  | *number*                                                    | :heavy_check_mark:                                          | The number of units of the drink or ingredient to order.    |                                                             |
| `type`                                                      | [shared.OrderType](../../../sdk/models/shared/ordertype.md) | :heavy_check_mark:                                          | The type of order.                                          |                                                             |