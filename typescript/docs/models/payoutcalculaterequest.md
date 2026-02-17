# PayoutCalculateRequest

## Example Usage

```typescript
import { PayoutCalculateRequest } from "raijin-labs-lucid-ai/models";

let value: PayoutCalculateRequest = {
  runId: "<id>",
  totalAmountLamports: "<value>",
  computeWallet: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `runId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `totalAmountLamports`                                        | *models.TotalAmountLamports*                                 | :heavy_check_mark:                                           | N/A                                                          |
| `computeWallet`                                              | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `modelWallet`                                                | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `orchestratorWallet`                                         | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [models.PayoutConfig](../models/payoutconfig.md)             | :heavy_minus_sign:                                           | Payout split configuration (basis points, must sum to 10000) |