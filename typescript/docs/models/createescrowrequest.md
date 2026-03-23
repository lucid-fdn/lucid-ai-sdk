# CreateEscrowRequest

## Example Usage

```typescript
import { CreateEscrowRequest } from "raijin-labs-lucid-ai/models";

let value: CreateEscrowRequest = {
  chainId: "<id>",
  beneficiary: "<value>",
  token: "<value>",
  amount: "479.77",
  duration: 542747,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `chainId`                                          | *string*                                           | :heavy_check_mark:                                 | Chain identifier (e.g. 'base', 'ethereum-sepolia') |
| `beneficiary`                                      | *string*                                           | :heavy_check_mark:                                 | Beneficiary address                                |
| `token`                                            | *string*                                           | :heavy_check_mark:                                 | ERC-20 token address                               |
| `amount`                                           | *string*                                           | :heavy_check_mark:                                 | Amount in token base units                         |
| `duration`                                         | *number*                                           | :heavy_check_mark:                                 | Escrow duration in seconds                         |
| `expectedReceiptHash`                              | *string*                                           | :heavy_minus_sign:                                 | Optional expected receipt hash for auto-release    |