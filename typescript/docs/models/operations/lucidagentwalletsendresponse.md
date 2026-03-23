# LucidAgentWalletSendResponse

Transaction executed

## Example Usage

```typescript
import { LucidAgentWalletSendResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidAgentWalletSendResponse = {
  success: true,
  transaction: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `success`             | *boolean*             | :heavy_check_mark:    | N/A                   |
| `transaction`         | Record<string, *any*> | :heavy_check_mark:    | N/A                   |