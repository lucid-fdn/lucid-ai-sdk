# LucidCrossChainValidateResponse

Validation result

## Example Usage

```typescript
import { LucidCrossChainValidateResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidCrossChainValidateResponse = {
  success: false,
  receiptHash: "<value>",
  runId: "<id>",
  localValid: false,
  hashValid: false,
  signatureValid: false,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `success`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `receiptHash`                                            | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `runId`                                                  | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `localValid`                                             | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `hashValid`                                              | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `signatureValid`                                         | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `onChain`                                                | [operations.OnChain](../../models/operations/onchain.md) | :heavy_minus_sign:                                       | N/A                                                      |