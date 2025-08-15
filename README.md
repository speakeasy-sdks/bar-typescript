<div align="center">
    <img src="https://github.com/speakeasy-sdks/bar-typescript/assets/6267663/f20796b3-05fd-4100-bb13-763e618b1df6" width="150">
    <h1>Speakeasy Bar Typescript SDKs</h1>
    <p>Cocktails & Mocktails served via API</p>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
</div>

## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/bar-typescript
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/bar-typescript
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example 1

```typescript
import { BarSDK } from "@speakeasy-sdks/speakeasy-bar";

const barSDK = new BarSDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await barSDK.drinks.listDrinks();

  console.log(result);
}

run();

```

### Example 2

```typescript
import { BarSDK } from "@speakeasy-sdks/speakeasy-bar";

const barSDK = new BarSDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await barSDK.orders.createOrder([]);

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [authentication](docs/sdks/authentication/README.md)

* [authenticate](docs/sdks/authentication/README.md#authenticate) - Authenticate with the API by providing a username and password.


### [config](docs/sdks/config/README.md)

* [subscribeToWebhooks](docs/sdks/config/README.md#subscribetowebhooks) - Subscribe to webhooks.

### [drinks](docs/sdks/drinks/README.md)

* [getDrink](docs/sdks/drinks/README.md#getdrink) - Get a drink.
* [listDrinks](docs/sdks/drinks/README.md#listdrinks) - Get a list of drinks.

### [food](docs/sdks/food/README.md)

* [getFood](docs/sdks/food/README.md#getfood) - Get a food item.
* [listFoods](docs/sdks/food/README.md#listfoods) - Get a list of food items.

### [ingredients](docs/sdks/ingredients/README.md)

* [listIngredients](docs/sdks/ingredients/README.md#listingredients) - Get a list of ingredients.

### [orders](docs/sdks/orders/README.md)

* [createOrder](docs/sdks/orders/README.md#createorder) - Create an order.

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`BarSDKError`](./src/sdk/models/errors/barsdkerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { BarSDK } from "@speakeasy-sdks/speakeasy-bar";
import * as errors from "@speakeasy-sdks/speakeasy-bar/sdk/models/errors";

const barSDK = new BarSDK();

async function run() {
  try {
    const result = await barSDK.authentication.authenticate({});

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.BarSDKError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.APIError) {
        console.log(error.data$.code); // string
        console.log(error.data$.details); // { [k: string]: any }
        console.log(error.data$.message); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`BarSDKError`](./src/sdk/models/errors/barsdkerror.ts): The base class for HTTP error responses.
  * [`APIError`](./src/sdk/models/errors/apierror.ts): An error occurred interacting with the API. Status code `5XX`.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/sdk/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/sdk/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`BarSDKError`](./src/sdk/models/errors/barsdkerror.ts)**:
* [`ResponseValidationError`](./src/sdk/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name       | Server                                               | Variables                        | Description                                 |
| ---------- | ---------------------------------------------------- | -------------------------------- | ------------------------------------------- |
| `prod`     | `https://speakeasy.bar`                              |                                  | The production server.                      |
| `staging`  | `https://staging.speakeasy.bar`                      |                                  | The staging server.                         |
| `customer` | `https://{organization}.{environment}.speakeasy.bar` | `environment`<br/>`organization` | A per-organization and per-environment API. |

If the selected server has variables, you may override its default values through the additional parameters made available in the SDK constructor:

| Variable       | Parameter                               | Supported Values                           | Default  | Description                                                   |
| -------------- | --------------------------------------- | ------------------------------------------ | -------- | ------------------------------------------------------------- |
| `environment`  | `environment: models.ServerEnvironment` | - `"prod"`<br/>- `"staging"`<br/>- `"dev"` | `"prod"` | The environment name. Defaults to the production environment. |
| `organization` | `organization: string`                  | string                                     | `"api"`  | The organization name. Defaults to a generic organization.    |

#### Example

```typescript
import { BarSDK } from "@speakeasy-sdks/speakeasy-bar";

const barSDK = new BarSDK({
  server: "customer",
  environment: "dev",
  organization: "<value>",
});

async function run() {
  const result = await barSDK.authentication.authenticate({});

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { BarSDK } from "@speakeasy-sdks/speakeasy-bar";

const barSDK = new BarSDK({
  serverURL: "https://speakeasy.bar",
});

async function run() {
  const result = await barSDK.authentication.authenticate({});

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { BarSDK } from "@speakeasy-sdks/speakeasy-bar";
import { HTTPClient } from "@speakeasy-sdks/speakeasy-bar/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new BarSDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name                | Type   | Scheme       |
| ------------------- | ------ | ------------ |
| `apiKey`            | apiKey | API key      |
| `clientCredentials` | oauth2 | OAuth2 token |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { BarSDK } from "@speakeasy-sdks/speakeasy-bar";

const barSDK = new BarSDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await barSDK.authentication.authenticate({});

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Summary [summary] -->
## Summary

The Speakeasy Bar: A bar that serves drinks.

A secret underground bar that serves drinks to those in the know.

For more information about the API: [The Speakeasy Bar Documentation.](https://docs.speakeasy.bar)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
  * [SDK Installation](#sdk-installation)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [SDK Installation](#sdk-installation-1)
  * [Requirements](#requirements)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @speakeasy-sdks/speakeasy-bar
```

### PNPM

```bash
pnpm add @speakeasy-sdks/speakeasy-bar
```

### Bun

```bash
bun add @speakeasy-sdks/speakeasy-bar
```

### Yarn

```bash
yarn add @speakeasy-sdks/speakeasy-bar zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`authenticationAuthenticate`](docs/sdks/authentication/README.md#authenticate) - Authenticate with the API by providing a username and password.
- [`configSubscribeToWebhooks`](docs/sdks/config/README.md#subscribetowebhooks) - Subscribe to webhooks.
- [`drinksGetDrink`](docs/sdks/drinks/README.md#getdrink) - Get a drink.
- [`drinksListDrinks`](docs/sdks/drinks/README.md#listdrinks) - Get a list of drinks.
- [`foodGetFood`](docs/sdks/food/README.md#getfood) - Get a food item.
- [`foodListFoods`](docs/sdks/food/README.md#listfoods) - Get a list of food items.
- [`ingredientsListIngredients`](docs/sdks/ingredients/README.md#listingredients) - Get a list of ingredients.
- [`ordersCreateOrder`](docs/sdks/orders/README.md#createorder) - Create an order.

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { BarSDK } from "@speakeasy-sdks/speakeasy-bar";

const barSDK = new BarSDK();

async function run() {
  const result = await barSDK.authentication.authenticate({}, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { BarSDK } from "@speakeasy-sdks/speakeasy-bar";

const barSDK = new BarSDK({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
});

async function run() {
  const result = await barSDK.authentication.authenticate({});

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { BarSDK } from "@speakeasy-sdks/speakeasy-bar";

const sdk = new BarSDK({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
