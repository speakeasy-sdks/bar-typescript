# StockUpdateRequestBody

## Example Usage

```typescript
import { IngredientType } from "@speakeasy-sdks/speakeasy-bar/sdk/models/shared";
import { StockUpdateRequestBody } from "@speakeasy-sdks/speakeasy-bar/sdk/models/webhooks";

let value: StockUpdateRequestBody = {
  drink: {
    name: "Old Fashioned",
    price: 1000,
    productCode: "AC-A2DF3",
    volume: 100,
  },
  ingredient: {
    name: "Sugar Syrup",
    productCode: "AC-A2DF3",
    type: IngredientType.LongLife,
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `drink`                                                       | [shared.DrinkInput](../../../sdk/models/shared/drinkinput.md) | :heavy_minus_sign:                                            | N/A                                                           |
| `ingredient`                                                  | [shared.Ingredient](../../../sdk/models/shared/ingredient.md) | :heavy_minus_sign:                                            | N/A                                                           |