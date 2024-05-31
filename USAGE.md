<!-- Start SDK Example Usage [usage] -->
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
<!-- End SDK Example Usage [usage] -->