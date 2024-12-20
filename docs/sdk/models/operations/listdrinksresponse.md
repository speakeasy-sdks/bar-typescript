# ListDrinksResponse

## Example Usage

```typescript
import { ListDrinksResponse } from "@speakeasy-sdks/speakeasy-bar/sdk/models/operations";

let value: ListDrinksResponse = {
  contentType: "<value>",
  statusCode: 511,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  classes: [
    {
      name: "Manhattan",
      price: 1500,
      productCode: "NAC-3F2D1",
    },
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `error`                                                               | [shared.ErrorT](../../../sdk/models/shared/errort.md)                 | :heavy_minus_sign:                                                    | An unknown error occurred interacting with the API.                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `classes`                                                             | [shared.Drink](../../../sdk/models/shared/drink.md)[]                 | :heavy_minus_sign:                                                    | A list of drinks.                                                     |