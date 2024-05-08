# Drinks
(*drinks*)

## Overview

The drinks endpoints.

### Available Operations

* [deleteDrink](#deletedrink) - Delete a drink.
* [getDrink](#getdrink) - Get a drink.
* [listDrinks](#listdrinks) - Get a list of drinks.
* [searchDrinks](#searchdrinks) - Search for drinks.
* [updateDrinkJson](#updatedrinkjson) - Update a drink.
* [updateDrinkMultipart](#updatedrinkmultipart) - Update a drink.
* [updateDrinkRaw](#updatedrinkraw) - Update a drink.
* [updateDrinkString](#updatedrinkstring) - Update a drink.

## deleteDrink

Delete a drink. Only available when authenticated.

### Example Usage

```typescript
import { SpeakeasyBar } from "speakeasy-bar";

async function run() {
  const sdk = new SpeakeasyBar({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.drinks.deleteDrink({
    productCode: "AC-A2DF3",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteDrinkRequest](../../sdk/models/operations/deletedrinkrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteDrinkResponse](../../sdk/models/operations/deletedrinkresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

## getDrink

Get a drink by product code. Only available when authenticated.

### Example Usage

```typescript
import { SpeakeasyBar } from "speakeasy-bar";

async function run() {
  const sdk = new SpeakeasyBar({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.drinks.getDrink({
    productCode: "NAC-3F2D1",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetDrinkRequest](../../sdk/models/operations/getdrinkrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetDrinkResponse](../../sdk/models/operations/getdrinkresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

## listDrinks

Get a list of drinks, if authenticated this will include stock levels and product codes otherwise it will only include public information.

### Example Usage

```typescript
import { SpeakeasyBar } from "speakeasy-bar";
import { DrinkType } from "speakeasy-bar/dist/sdk/models/shared";

async function run() {
  const sdk = new SpeakeasyBar();

  const res = await sdk.drinks.listDrinks({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListDrinksRequest](../../sdk/models/operations/listdrinksrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListDrinksResponse](../../sdk/models/operations/listdrinksresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

## searchDrinks

Search for drinks, if authenticated this will include stock levels and product codes otherwise it will only include public information.

### Example Usage

```typescript
import { SpeakeasyBar } from "speakeasy-bar";
import { DrinkType } from "speakeasy-bar/dist/sdk/models/shared";

async function run() {
  const sdk = new SpeakeasyBar();

  const res = await sdk.drinks.searchDrinks({
    query: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.SearchDrinksRequest](../../sdk/models/operations/searchdrinksrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.SearchDrinksResponse](../../sdk/models/operations/searchdrinksresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

## updateDrinkJson

Update a drink. Only available when authenticated.

### Example Usage

```typescript
import { SpeakeasyBar } from "speakeasy-bar";
import { DrinkType } from "speakeasy-bar/dist/sdk/models/shared";

async function run() {
  const sdk = new SpeakeasyBar({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.drinks.updateDrinkJson({
    drink: {
      ingredients: [
        {
          ingredientProductCode: "NAC-3F2D1",
          quantity: 895218,
        },
      ],
      name: "Old Fashioned",
      photo: "https://speakeasy.bar/drinks/negroni.jpg",
      price: 1000,
      productCode: "NAC-3F2D1",
    },
    productCode: "APM-1F2D3",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateDrinkJsonRequest](../../sdk/models/operations/updatedrinkjsonrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateDrinkJsonResponse](../../sdk/models/operations/updatedrinkjsonresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

## updateDrinkMultipart

Update a drink. Only available when authenticated.

### Example Usage

```typescript
import { SpeakeasyBar } from "speakeasy-bar";
import { DrinkType } from "speakeasy-bar/dist/sdk/models/shared";

async function run() {
  const sdk = new SpeakeasyBar({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.drinks.updateDrinkMultipart({
    requestBody: {
      name: "Negroni",
      photo: {
        content: new TextEncoder().encode("0x40f816dD98"),
        fileName: "bicycle_brent_degree.htm",
      },
      price: 1500,
    },
    productCode: "NAC-3F2D1",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateDrinkMultipartRequest](../../sdk/models/operations/updatedrinkmultipartrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateDrinkMultipartResponse](../../sdk/models/operations/updatedrinkmultipartresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

## updateDrinkRaw

Update a drink. Only available when authenticated.

### Example Usage

```typescript
import { SpeakeasyBar } from "speakeasy-bar";
import { DrinkType } from "speakeasy-bar/dist/sdk/models/shared";

async function run() {
  const sdk = new SpeakeasyBar({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.drinks.updateDrinkRaw({
    requestBody: new TextEncoder().encode("0x200BD6d80E"),
    productCode: "AC-A2DF3",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateDrinkRawRequest](../../sdk/models/operations/updatedrinkrawrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateDrinkRawResponse](../../sdk/models/operations/updatedrinkrawresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

## updateDrinkString

Update a drink. Only available when authenticated.

### Example Usage

```typescript
import { SpeakeasyBar } from "speakeasy-bar";

async function run() {
  const sdk = new SpeakeasyBar({
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.drinks.updateDrinkString({
    requestBody: "<value>",
    productCode: "AC-A2DF3",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateDrinkStringRequest](../../sdk/models/operations/updatedrinkstringrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateDrinkStringResponse](../../sdk/models/operations/updatedrinkstringresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |
