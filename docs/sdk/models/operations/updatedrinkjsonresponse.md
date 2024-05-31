# UpdateDrinkJsonResponse


## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `body`                                                                | *Uint8Array*                                                          | :heavy_minus_sign:                                                    | N/A                                                                   |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `drink`                                                               | [shared.Drink](../../../sdk/models/shared/drink.md)                   | :heavy_minus_sign:                                                    | The drink was updated successfully.                                   |
| `error`                                                               | [shared.ErrorT](../../../sdk/models/shared/errort.md)                 | :heavy_minus_sign:                                                    | An unknown error occurred interacting with the API.                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |