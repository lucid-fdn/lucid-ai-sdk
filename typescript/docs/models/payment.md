# Payment

## Example Usage

```typescript
import { Payment } from "raijin-labs-lucid-ai/models";

let value: Payment = {
  chain: "base-sepolia",
  token: "USDC",
  tokenAddress: "<value>",
  amount: "158.77",
  recipient: "<value>",
  facilitator: "<value>",
  scheme: "exact",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `chain`                              | *string*                             | :heavy_check_mark:                   | N/A                                  | base-sepolia                         |
| `token`                              | *string*                             | :heavy_check_mark:                   | N/A                                  | USDC                                 |
| `tokenAddress`                       | *string*                             | :heavy_check_mark:                   | N/A                                  |                                      |
| `amount`                             | *string*                             | :heavy_check_mark:                   | Amount in micro-units (6 decimals)   |                                      |
| `recipient`                          | *string*                             | :heavy_check_mark:                   | Wallet or splitter contract address  |                                      |
| `facilitator`                        | *string*                             | :heavy_check_mark:                   | N/A                                  |                                      |
| `scheme`                             | [models.Scheme](../models/scheme.md) | :heavy_check_mark:                   | N/A                                  |                                      |