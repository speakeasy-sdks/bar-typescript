# Order

An order for a drink or ingredient.

## Example Usage

```typescript
import { Order, OrderType, Status } from "@speakeasy-sdks/speakeasy-bar/sdk/models/shared";

let value: Order = {
    productCode: "APM-1F2D3",
    quantity: 836079,
    status: Status.Pending,
    type: OrderType.Drink,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `productCode`                                               | *string*                                                    | :heavy_check_mark:                                          | The product code of the drink or ingredient.                | AC-A2DF3                                                    |
| `quantity`                                                  | *number*                                                    | :heavy_check_mark:                                          | The number of units of the drink or ingredient to order.    |                                                             |
| `status`                                                    | [shared.Status](../../../sdk/models/shared/status.md)       | :heavy_check_mark:                                          | The status of the order.                                    |                                                             |
| `type`                                                      | [shared.OrderType](../../../sdk/models/shared/ordertype.md) | :heavy_check_mark:                                          | The type of order.                                          |                                                             |