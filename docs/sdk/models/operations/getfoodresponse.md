# GetFoodResponse

## Example Usage

```typescript
import { GetFoodResponse } from "@speakeasy-sdks/speakeasy-bar/sdk/models/operations";

let value: GetFoodResponse = {
  contentType: "<value>",
  statusCode: 14952,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `error`                                                                                 | [shared.ErrorT](../../../sdk/models/shared/errort.md)                                   | :heavy_minus_sign:                                                                      | An unknown error occurred interacting with the API.                                     |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |
| `object`                                                                                | [operations.GetFoodResponseBody](../../../sdk/models/operations/getfoodresponsebody.md) | :heavy_minus_sign:                                                                      | A food item.                                                                            |