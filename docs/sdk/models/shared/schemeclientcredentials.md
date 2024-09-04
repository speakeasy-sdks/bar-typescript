# SchemeClientCredentials

## Example Usage

```typescript
import { SchemeClientCredentials } from "@speakeasy-sdks/speakeasy-bar/sdk/models/shared";

let value: SchemeClientCredentials = {
    clientID: "<value>",
    clientSecret: "<value>",
    tokenURL: "https://speakeasy.bar/oauth2/token/",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `clientID`         | *string*           | :heavy_check_mark: | N/A                |
| `clientSecret`     | *string*           | :heavy_check_mark: | N/A                |
| `tokenURL`         | *string*           | :heavy_check_mark: | N/A                |