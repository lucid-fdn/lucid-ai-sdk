# Payout

## Example Usage

```typescript
import { Payout } from "raijin-labs-lucid-ai/models";

let value: Payout = {
  runId: "<id>",
  totalAmountLamports: "<value>",
  recipients: [
    {
      role: "<value>",
      wallet: "<value>",
      bp: 639746,
      amountLamports: "<value>",
    },
  ],
  payoutHash: "<value>",
  timestamp: 425638,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `runId`                                                  | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `totalAmountLamports`                                    | *string*                                                 | :heavy_check_mark:                                       | BigInt serialized as string                              |
| `recipients`                                             | [models.PayoutRecipient](../models/payoutrecipient.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `payoutHash`                                             | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `timestamp`                                              | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |