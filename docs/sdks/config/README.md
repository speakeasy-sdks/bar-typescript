# Config
(*config*)

### Available Operations

* [subscribeToWebhooks](#subscribetowebhooks) - Subscribe to webhooks.

## subscribeToWebhooks

Subscribe to webhooks.

### Example Usage

```typescript
import { SpeakeasyBar } from "speakeasy-bar";
import { SubscribeToWebhooksRequestBodyWebhook } from "speakeasy-bar/dist/sdk/models/operations";

(async() => {
  const sdk = new SpeakeasyBar({
    apiKey: "",
  });

  const res = await sdk.config.subscribeToWebhooks([
    {},
  ]);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [operations.SubscribeToWebhooksRequestBody[]](../../models//.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.SubscribeToWebhooksResponse](../../models/operations/subscribetowebhooksresponse.md)>**

