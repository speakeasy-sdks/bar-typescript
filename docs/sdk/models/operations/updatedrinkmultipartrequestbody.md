# UpdateDrinkMultipartRequestBody


## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `name`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The name of the drink.                                      | Old Fashioned                                               |
| `photo`                                                     | [operations.Photo](../../../sdk/models/operations/photo.md) | :heavy_minus_sign:                                          | A photo of the drink.                                       |                                                             |
| `price`                                                     | *number*                                                    | :heavy_minus_sign:                                          | The price of one unit of the drink in US cents.             | 1000                                                        |
| `type`                                                      | [shared.DrinkType](../../../sdk/models/shared/drinktype.md) | :heavy_minus_sign:                                          | The type of drink.                                          |                                                             |