<!-- Start SDK Example Usage [usage] -->
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