# ReceiptHashVerification

## Example Usage

```typescript
import { ReceiptHashVerification } from "raijin-labs-lucid-ai/models";

let value: ReceiptHashVerification = {
  success: true,
  verified: true,
  receiptHash: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `success`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `verified`                                                                       | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `receiptHash`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `runId`                                                                          | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `hashValid`                                                                      | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `signatureValid`                                                                 | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `signerPubkey`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `signerType`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `executionMode`                                                                  | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `runtimeHash`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `gpuFingerprint`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `inclusionProof`                                                                 | [models.InclusionProof](../models/inclusionproof.md)                             | :heavy_minus_sign:                                                               | N/A                                                                              |
| `inclusionValid`                                                                 | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `epoch`                                                                          | [models.ReceiptHashVerificationEpoch](../models/receipthashverificationepoch.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `onChainVerified`                                                                | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `txSignature`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |