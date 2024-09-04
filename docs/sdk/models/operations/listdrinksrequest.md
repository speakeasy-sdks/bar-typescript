# ListDrinksRequest

## Example Usage

```typescript
import { ListDrinksRequest } from "@speakeasy-sdks/speakeasy-bar/sdk/models/operations";

let value: ListDrinksRequest = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `drinkType`                                                                  | [shared.DrinkType](../../../sdk/models/shared/drinktype.md)                  | :heavy_minus_sign:                                                           | The type of drink to filter by. If not provided all drinks will be returned. |