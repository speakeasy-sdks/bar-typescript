# Authentication
(*authentication*)

## Overview

The authentication endpoints.

### Available Operations

* [authenticate](#authenticate) - Authenticate with the API by providing a username and password.

## authenticate

Authenticate with the API by providing a username and password.

### Example Usage

```typescript
import { BarSDK } from "@speakeasy-sdks/speakeasy-bar";

const barSDK = new BarSDK();

async function run() {
  const result = await barSDK.authentication.authenticate({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BarSDKCore } from "@speakeasy-sdks/speakeasy-bar/core.js";
import { authenticationAuthenticate } from "@speakeasy-sdks/speakeasy-bar/funcs/authenticationAuthenticate.js";

// Use `BarSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const barSDK = new BarSDKCore();

async function run() {
  const res = await authenticationAuthenticate(barSDK, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AuthenticateRequestBody](../../sdk/models/operations/authenticaterequestbody.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AuthenticateResponse](../../sdk/models/operations/authenticateresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 4XX              | \*/\*            |