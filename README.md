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
import { DrinkType } from "@speakeasy-sdks/speakeasy-bar/sdk/models/shared";

const barSDK = new BarSDK({
    security: {
        apiKey: "<YOUR_API_KEY_HERE>",
    },
});

async function run() {
    const result = await barSDK.drinks.listDrinks(DrinkType.Spirit);

    // Handle the result
    console.log(result);
}

run();

```

### Example 2

```typescript
import { BarSDK } from "@speakeasy-sdks/speakeasy-bar";
import { OrderType } from "@speakeasy-sdks/speakeasy-bar/sdk/models/shared";

const barSDK = new BarSDK({
    security: {
        apiKey: "<YOUR_API_KEY_HERE>",
    },
});

async function run() {
    const result = await barSDK.orders.createOrder(
        [
            {
                productCode: "APM-1F2D3",
                quantity: 26535,
                type: OrderType.Drink,
            },
        ],
        "<value>"
    );

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [authentication](docs/sdks/authentication/README.md)

* [authenticate](docs/sdks/authentication/README.md#authenticate) - Authenticate with the API by providing a username and password.

### [drinks](docs/sdks/drinks/README.md)

* [getDrink](docs/sdks/drinks/README.md#getdrink) - Get a drink.
* [listDrinks](docs/sdks/drinks/README.md#listdrinks) - Get a list of drinks.

### [ingredients](docs/sdks/ingredients/README.md)

* [listIngredients](docs/sdks/ingredients/README.md#listingredients) - Get a list of ingredients.

### [orders](docs/sdks/orders/README.md)

* [createOrder](docs/sdks/orders/README.md#createorder) - Create an order.

### [config](docs/sdks/config/README.md)

* [subscribeToWebhooks](docs/sdks/config/README.md#subscribetowebhooks) - Subscribe to webhooks.
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { BarSDK } from "@speakeasy-sdks/speakeasy-bar";
import { SDKValidationError } from "@speakeasy-sdks/speakeasy-bar/sdk/models/errors";

const barSDK = new BarSDK();

async function run() {
    let result;
    try {
        result = await barSDK.authentication.authenticate({});
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof errors.APIError: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name | Server | Variables |
| ----- | ------ | --------- |
| `prod` | `https://speakeasy.bar` | None |
| `staging` | `https://staging.speakeasy.bar` | None |
| `customer` | `https://{organization}.{environment}.speakeasy.bar` | `environment` (default is `prod`), `organization` (default is `api`) |

```typescript
import { BarSDK } from "@speakeasy-sdks/speakeasy-bar";

const barSDK = new BarSDK({
    server: "customer",
});

async function run() {
    const result = await barSDK.authentication.authenticate({});

    // Handle the result
    console.log(result);
}

run();

```

#### Variables

Some of the server options above contain variables. If you want to set the values of those variables, the following optional parameters are available when initializing the SDK client instance:
 * `environment: models.ServerEnvironment`
 * `organization: string`

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { BarSDK } from "@speakeasy-sdks/speakeasy-bar";

const barSDK = new BarSDK({
    serverURL: "https://speakeasy.bar",
});

async function run() {
    const result = await barSDK.authentication.authenticate({});

    // Handle the result
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

| Name                | Type                | Scheme              |
| ------------------- | ------------------- | ------------------- |
| `apiKey`            | apiKey              | API key             |
| `clientCredentials` | oauth2              | OAuth2 token        |

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

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

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

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { BarSDK } from "@speakeasy-sdks/speakeasy-bar";

const barSDK = new BarSDK();

async function run() {
    const result = await barSDK.authentication.authenticate(
        {},
        {
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
        }
    );

    // Handle the result
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

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

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
