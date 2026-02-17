# LucidGetReceiptProofResponse

OK

## Example Usage

```typescript
import { LucidGetReceiptProofResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetReceiptProofResponse = {
  success: true,
  proof: {
    runId: "<id>",
    receiptHash: "<value>",
    leafIndex: 88290,
    proof: [
      "<value 1>",
      "<value 2>",
    ],
    root: "<value>",
  },
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `success`                                           | *boolean*                                           | :heavy_check_mark:                                  | N/A                                                 |
| `proof`                                             | [models.ReceiptProof](../../models/receiptproof.md) | :heavy_check_mark:                                  | N/A                                                 |