<div align="center">
    <img src="https://github.com/speakeasy-sdks/bar-typescript/assets/6267663/f20796b3-05fd-4100-bb13-763e618b1df6" width="300">
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

### Example

```typescript
import { SpeakeasyBar } from "speakeasy-bar";

async function run() {
    const sdk = new SpeakeasyBar();

    const res = await sdk.authentication.authenticate({});

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [authentication](docs/sdks/authentication/README.md)

* [authenticate](docs/sdks/authentication/README.md#authenticate) - Authenticate with the API by providing a username and password.

### [drinks](docs/sdks/drinks/README.md)

* [deleteDrink](docs/sdks/drinks/README.md#deletedrink) - Delete a drink.
* [getDrink](docs/sdks/drinks/README.md#getdrink) - Get a drink.
* [listDrinks](docs/sdks/drinks/README.md#listdrinks) - Get a list of drinks.
* [searchDrinks](docs/sdks/drinks/README.md#searchdrinks) - Search for drinks.
* [updateDrinkJson](docs/sdks/drinks/README.md#updatedrinkjson) - Update a drink.
* [updateDrinkMultipart](docs/sdks/drinks/README.md#updatedrinkmultipart) - Update a drink.
* [updateDrinkRaw](docs/sdks/drinks/README.md#updatedrinkraw) - Update a drink.
* [updateDrinkString](docs/sdks/drinks/README.md#updatedrinkstring) - Update a drink.

### [orders](docs/sdks/orders/README.md)

* [createOrder](docs/sdks/orders/README.md#createorder) - Create an order.

### [configuration](docs/sdks/configuration/README.md)

* [subscribeToWebhooks](docs/sdks/configuration/README.md#subscribetowebhooks) - Subscribe to webhooks.
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

Example

```typescript
import { SpeakeasyBar } from "speakeasy-bar";

async function run() {
    const sdk = new SpeakeasyBar();

    let res;
    try {
        res = await sdk.authentication.authenticate({});
    } catch (err) {
        if (err instanceof errors.APIError) {
            console.error(err); // handle exception
            throw err;
        } else if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://speakeasy.bar` | None |
| 1 | `https://staging.speakeasy.bar` | None |
| 2 | `https://{organization}.{environment}.speakeasy.bar` | `environment` (default is `prod`), `organization` (default is `api`) |

#### Example

```typescript
import { SpeakeasyBar } from "speakeasy-bar";

async function run() {
    const sdk = new SpeakeasyBar({
        serverIdx: 2,
    });

    const res = await sdk.authentication.authenticate({});

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```

#### Variables

Some of the server options above contain variables. If you want to set the values of those variables, the following optional parameters are available when initializing the SDK client instance:
 * `environment: models.ServerEnvironment`
 * `organization: string`

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { SpeakeasyBar } from "speakeasy-bar";

async function run() {
    const sdk = new SpeakeasyBar({
        serverURL: "https://speakeasy.bar",
    });

    const res = await sdk.authentication.authenticate({});

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { speakeasy-bar } from "SpeakeasyBar";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new SpeakeasyBar({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type     | Scheme   |
| -------- | -------- | -------- |
| `apiKey` | apiKey   | API key  |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { SpeakeasyBar } from "speakeasy-bar";

async function run() {
    const sdk = new SpeakeasyBar({
        apiKey: "<YOUR_API_KEY_HERE>",
    });

    const res = await sdk.authentication.authenticate({});

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

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
