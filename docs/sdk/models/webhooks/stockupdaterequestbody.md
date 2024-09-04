# StockUpdateRequestBody

## Example Usage

```typescript
import { IngredientType } from "@speakeasy-sdks/speakeasy-bar/sdk/models/shared";
import { StockUpdateRequestBody } from "@speakeasy-sdks/speakeasy-bar/sdk/models/webhooks";

let value: StockUpdateRequestBody = {
    drink: {
        name: "Negroni",
        price: 1200,
        productCode: "APM-1F2D3",
    },
    ingredient: {
        name: "Orange Peel",
        productCode: "NAC-3F2D1",
        type: IngredientType.LongLife,
    },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `drink`                                                       | [shared.DrinkInput](../../../sdk/models/shared/drinkinput.md) | :heavy_minus_sign:                                            | N/A                                                           |
| `ingredient`                                                  | [shared.Ingredient](../../../sdk/models/shared/ingredient.md) | :heavy_minus_sign:                                            | N/A                                                           |