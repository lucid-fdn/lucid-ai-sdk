# PayoutFromReceiptRequest

## Example Usage

```typescript
import { PayoutFromReceiptRequest } from "raijin-labs-lucid-ai/models";

let value: PayoutFromReceiptRequest = {
  runId: "<id>",
  tokensIn: 644114,
  tokensOut: 450312,
  pricePer1kTokensLamports: 349221,
  computeWallet: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `runId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `tokensIn`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `tokensOut`                                                  | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `pricePer1kTokensLamports`                                   | *models.PricePer1kTokensLamports*                            | :heavy_check_mark:                                           | N/A                                                          |
| `computeWallet`                                              | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `modelWallet`                                                | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `orchestratorWallet`                                         | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [models.PayoutConfig](../models/payoutconfig.md)             | :heavy_minus_sign:                                           | Payout split configuration (basis points, must sum to 10000) |