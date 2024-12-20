# Ingredient

## Example Usage

```typescript
import { Ingredient, IngredientType } from "@speakeasy-sdks/speakeasy-bar/sdk/models/shared";

let value: Ingredient = {
  name: "Orange Peel",
  productCode: "NAC-3F2D1",
  type: IngredientType.LongLife,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The name of the ingredient.                                            | Sugar Syrup                                                            |
| `productCode`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | The product code of the ingredient, only available when authenticated. | AC-A2DF3                                                               |
| `type`                                                                 | [shared.IngredientType](../../../sdk/models/shared/ingredienttype.md)  | :heavy_check_mark:                                                     | The type of ingredient.                                                |                                                                        |