# Drink

## Example Usage

```typescript
import { Drink } from "@speakeasy-sdks/speakeasy-bar/sdk/models/shared";

let value: Drink = {
  name: "Negroni",
  price: 1200,
  productCode: "NAC-3F2D1",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `name`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | The name of the drink.                                                        | Old Fashioned                                                                 |
| `price`                                                                       | *number*                                                                      | :heavy_check_mark:                                                            | The price of one unit of the drink in US cents.                               | 1000                                                                          |
| `productCode`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | The product code of the drink, only available when authenticated.             | AC-A2DF3                                                                      |
| `stock`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | The number of units of the drink in stock, only available when authenticated. |                                                                               |
| `type`                                                                        | [shared.DrinkType](../../../sdk/models/shared/drinktype.md)                   | :heavy_minus_sign:                                                            | The type of drink.                                                            |                                                                               |