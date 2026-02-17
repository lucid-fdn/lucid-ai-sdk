# PayoutRecipient

## Example Usage

```typescript
import { PayoutRecipient } from "raijin-labs-lucid-ai/models";

let value: PayoutRecipient = {
  role: "<value>",
  wallet: "<value>",
  bp: 87271,
  amountLamports: "<value>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `role`                      | *string*                    | :heavy_check_mark:          | N/A                         |
| `wallet`                    | *string*                    | :heavy_check_mark:          | N/A                         |
| `bp`                        | *number*                    | :heavy_check_mark:          | N/A                         |
| `amountLamports`            | *string*                    | :heavy_check_mark:          | BigInt serialized as string |