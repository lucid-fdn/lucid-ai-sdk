# Receipt

## Example Usage

```typescript
import { Receipt } from "raijin-labs-lucid-ai/models";

let value: Receipt = {
  runId: "<id>",
  modelPassportId: "<id>",
  computePassportId: "<id>",
  policyHash: "<value>",
  runtime: "<value>",
  timestamp: 396846,
  metrics: {
    ttftMs: 96137,
    tokensIn: 67093,
    tokensOut: 269858,
  },
  receiptHash: "<value>",
  receiptSignature: "<value>",
  signerPubkey: "<value>",
  signerType: "orchestrator",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `schemaVersion`                              | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `runId`                                      | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `modelPassportId`                            | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `computePassportId`                          | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `policyHash`                                 | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `runtime`                                    | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `timestamp`                                  | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `traceId`                                    | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `imageHash`                                  | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `modelHash`                                  | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `attestation`                                | Record<string, *any*>                        | :heavy_minus_sign:                           | N/A                                          |
| `executionMode`                              | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `jobHash`                                    | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `quoteHash`                                  | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `nodeId`                                     | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `runtimeHash`                                | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `gpuFingerprint`                             | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `outputsHash`                                | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `outputRef`                                  | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `startTs`                                    | *number*                                     | :heavy_minus_sign:                           | N/A                                          |
| `endTs`                                      | *number*                                     | :heavy_minus_sign:                           | N/A                                          |
| `inputRef`                                   | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `errorCode`                                  | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `errorMessage`                               | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `metrics`                                    | [models.Metrics](../models/metrics.md)       | :heavy_check_mark:                           | N/A                                          |
| `receiptHash`                                | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `receiptSignature`                           | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `signerPubkey`                               | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `signerType`                                 | [models.SignerType](../models/signertype.md) | :heavy_check_mark:                           | N/A                                          |
| `mmrLeafIndex`                               | *number*                                     | :heavy_minus_sign:                           | N/A                                          |
| `anchor`                                     | [models.Anchor](../models/anchor.md)         | :heavy_minus_sign:                           | N/A                                          |