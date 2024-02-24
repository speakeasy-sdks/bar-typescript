<!-- Start SDK Example Usage [usage] -->
```typescript
import { SpeakeasyBar } from "speakeasy-bar";
import { DrinkType } from "speakeasy-bar/dist/sdk/models/shared";

async function run() {
    const sdk = new SpeakeasyBar({
        apiKey: "<YOUR_API_KEY_HERE>",
    });

    const res = await sdk.drinks.listDrinks({});

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->