# LucidCrossChainValidateRequest

## Example Usage

```typescript
import { LucidCrossChainValidateRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidCrossChainValidateRequest = {};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `receiptHash`                             | *string*                                  | :heavy_minus_sign:                        | N/A                                       |
| `runId`                                   | *string*                                  | :heavy_minus_sign:                        | N/A                                       |
| `signature`                               | *string*                                  | :heavy_minus_sign:                        | N/A                                       |
| `chainId`                                 | *string*                                  | :heavy_minus_sign:                        | If provided, submit validation on-chain   |
| `agentTokenId`                            | *string*                                  | :heavy_minus_sign:                        | ERC-8004 token ID for on-chain submission |