# DrinkOrder

An order for a drink or ingredient.


## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `barCounter`                                                  | [shared.BarCounter](../../../sdk/models/shared/barcounter.md) | :heavy_minus_sign:                                            | The bar counter to collect the drink from.                    |                                                               |
| `orderType`                                                   | [shared.OrderType](../../../sdk/models/shared/ordertype.md)   | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `productCode`                                                 | *string*                                                      | :heavy_check_mark:                                            | The product code of the drink or ingredient.                  | AC-A2DF3                                                      |
| `quantity`                                                    | *number*                                                      | :heavy_check_mark:                                            | The number of units of the drink or ingredient to order.      |                                                               |
| `status`                                                      | [shared.Status](../../../sdk/models/shared/status.md)         | :heavy_check_mark:                                            | The status of the order.                                      |                                                               |