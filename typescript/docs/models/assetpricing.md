# AssetPricing

## Example Usage

```typescript
import { AssetPricing } from "raijin-labs-lucid-ai/models";

let value: AssetPricing = {
  passportId: "<id>",
  payoutAddress: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `passportId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pricePerCall`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Micro-units (6 decimals)                                                                      |
| `pricePerToken`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `priceSubscriptionHour`                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `acceptedTokens`                                                                              | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `acceptedChains`                                                                              | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `payoutAddress`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customSplitBps`                                                                              | Record<string, *number*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |