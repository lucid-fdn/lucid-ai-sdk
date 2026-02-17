# LucidPayoutFromReceiptResponse

OK

## Example Usage

```typescript
import { LucidPayoutFromReceiptResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidPayoutFromReceiptResponse = {
  success: true,
  payout: {
    runId: "<id>",
    totalAmountLamports: "<value>",
    recipients: [],
    payoutHash: "<value>",
    timestamp: 869345,
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `success`                               | *boolean*                               | :heavy_check_mark:                      | N/A                                     |
| `payout`                                | [models.Payout](../../models/payout.md) | :heavy_check_mark:                      | N/A                                     |