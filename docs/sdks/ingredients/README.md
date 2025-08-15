# Ingredients
(*ingredients*)

## Overview

The ingredients endpoints.

### Available Operations

* [listIngredients](#listingredients) - Get a list of ingredients.

## listIngredients

Get a list of ingredients, if authenticated this will include stock levels and product codes otherwise it will only include public information.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listIngredients" method="get" path="/ingredients" -->
```typescript
import { BarSDK } from "@speakeasy-sdks/speakeasy-bar";

const barSDK = new BarSDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await barSDK.ingredients.listIngredients(982293);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BarSDKCore } from "@speakeasy-sdks/speakeasy-bar/core.js";
import { ingredientsListIngredients } from "@speakeasy-sdks/speakeasy-bar/funcs/ingredientsListIngredients.js";

// Use `BarSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const barSDK = new BarSDKCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await ingredientsListIngredients(barSDK, 982293);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ingredientsListIngredients failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `page`                                                                                                                                                                         | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `ingredients`                                                                                                                                                                  | *string*[]                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | A list of ingredients to filter by. If not provided all ingredients will be returned.                                                                                          |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListIngredientsResponse](../../sdk/models/operations/listingredientsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 4XX              | \*/\*            |