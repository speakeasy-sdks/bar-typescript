<!-- Start SDK Example Usage [usage] -->
```typescript
import { BarSDK } from "@speakeasy-sdks/speakeasy-bar";

const barSDK = new BarSDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await barSDK.drinks.listDrinks();

  // Handle the result
  console.log(result);
}

run();

```

```typescript
import { BarSDK } from "@speakeasy-sdks/speakeasy-bar";
import { OrderType } from "@speakeasy-sdks/speakeasy-bar/sdk/models/shared";

const barSDK = new BarSDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await barSDK.orders.createOrder([
    {
      productCode: "APM-1F2D3",
      quantity: 567805,
      type: OrderType.Ingredient,
    },
    {
      productCode: "AC-A2DF3",
      quantity: 618237,
      type: OrderType.Ingredient,
    },
  ]);

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->