# Withdrawal

## Example Usage

```typescript
import { Withdrawal } from "raijin-labs-lucid-ai/models/operations";

let value: Withdrawal = {
  amount: "97.01",
  token: "<value>",
  status: "pending_payout",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Amount in micro-units                                                                                    |
| `token`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `status`                                                                                                 | [operations.LucidWithdrawAssetRevenueStatus](../../models/operations/lucidwithdrawassetrevenuestatus.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |