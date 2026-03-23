# SetAssetPricingRequest

## Example Usage

```typescript
import { SetAssetPricingRequest } from "raijin-labs-lucid-ai/models";

let value: SetAssetPricingRequest = {
  payoutAddress: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `pricePerCall`                     | *string*                           | :heavy_minus_sign:                 | Micro-units (e.g. "10000" = $0.01) |
| `pricePerToken`                    | *string*                           | :heavy_minus_sign:                 | N/A                                |
| `priceSubscriptionHour`            | *string*                           | :heavy_minus_sign:                 | N/A                                |
| `acceptedTokens`                   | *string*[]                         | :heavy_minus_sign:                 | N/A                                |
| `acceptedChains`                   | *string*[]                         | :heavy_minus_sign:                 | N/A                                |
| `payoutAddress`                    | *string*                           | :heavy_check_mark:                 | N/A                                |
| `customSplitBps`                   | Record<string, *number*>           | :heavy_minus_sign:                 | N/A                                |