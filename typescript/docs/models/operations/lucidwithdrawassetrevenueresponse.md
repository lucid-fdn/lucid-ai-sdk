# LucidWithdrawAssetRevenueResponse

Withdrawal queued

## Example Usage

```typescript
import { LucidWithdrawAssetRevenueResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidWithdrawAssetRevenueResponse = {
  success: false,
  withdrawal: {
    amount: "138.52",
    token: "<value>",
    status: "no_funds",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `success`                                                      | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `withdrawal`                                                   | [operations.Withdrawal](../../models/operations/withdrawal.md) | :heavy_check_mark:                                             | N/A                                                            |