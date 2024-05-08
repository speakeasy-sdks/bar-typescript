# SearchDrinksRequest


## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `query`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | The search query.                                                            |
| `type`                                                                       | [shared.DrinkType](../../../sdk/models/shared/drinktype.md)                  | :heavy_minus_sign:                                                           | The type of drink to filter by. If not provided all drinks will be returned. |