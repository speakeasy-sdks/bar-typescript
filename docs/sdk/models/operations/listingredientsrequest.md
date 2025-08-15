# ListIngredientsRequest

## Example Usage

```typescript
import { ListIngredientsRequest } from "@speakeasy-sdks/speakeasy-bar/sdk/models/operations";

let value: ListIngredientsRequest = {
  page: 412261,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `ingredients`                                                                         | *string*[]                                                                            | :heavy_minus_sign:                                                                    | A list of ingredients to filter by. If not provided all ingredients will be returned. |
| `page`                                                                                | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |