# LucidGetAgentReceiptsResponseBody

Paginated receipts

## Example Usage

```typescript
import { LucidGetAgentReceiptsResponseBody } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetAgentReceiptsResponseBody = {
  receipts: [
    {},
  ],
  total: 827022,
  page: 954991,
  perPage: 308864,
  totalPages: 371403,
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `receipts`                                            | [models.AgentReceipt](../../models/agentreceipt.md)[] | :heavy_check_mark:                                    | N/A                                                   |
| `total`                                               | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `page`                                                | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `perPage`                                             | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `totalPages`                                          | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |