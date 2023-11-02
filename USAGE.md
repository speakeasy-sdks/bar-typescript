<!-- Start SDK Example Usage -->


```typescript
import { SpeakeasyBar } from "speakeasy-bar";
import { DrinkType } from "speakeasy-bar/dist/sdk/models/shared";

(async () => {
    const sdk = new SpeakeasyBar({
        apiKey: "",
    });

    const res = await sdk.drinks.listDrinks({});

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->