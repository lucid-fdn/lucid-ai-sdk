# ReceiptProof

## Example Usage

```typescript
import { ReceiptProof } from "raijin-labs-lucid-ai/models";

let value: ReceiptProof = {
  runId: "<id>",
  receiptHash: "<value>",
  leafIndex: 338418,
  proof: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  root: "<value>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `runId`                                                           | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `receiptHash`                                                     | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `leafIndex`                                                       | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `proof`                                                           | *string*[]                                                        | :heavy_check_mark:                                                | Sibling hashes along the Merkle path                              |
| `root`                                                            | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `directions`                                                      | [models.Direction](../models/direction.md)[]                      | :heavy_minus_sign:                                                | Direction of each sibling (L = sibling is on left, R = on right). |