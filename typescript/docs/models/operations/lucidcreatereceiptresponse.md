# LucidCreateReceiptResponse

OK

## Example Usage

```typescript
import { LucidCreateReceiptResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidCreateReceiptResponse = {
  success: false,
  receipt: {
    runId: "<id>",
    modelPassportId: "<id>",
    computePassportId: "<id>",
    policyHash: "<value>",
    runtime: "<value>",
    timestamp: 171739,
    metrics: {
      ttftMs: 96137,
      tokensIn: 67093,
      tokensOut: 269858,
    },
    receiptHash: "<value>",
    receiptSignature: "<value>",
    signerPubkey: "<value>",
    signerType: "compute",
  },
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `success`                                 | *boolean*                                 | :heavy_check_mark:                        | N/A                                       |
| `receipt`                                 | [models.Receipt](../../models/receipt.md) | :heavy_check_mark:                        | N/A                                       |