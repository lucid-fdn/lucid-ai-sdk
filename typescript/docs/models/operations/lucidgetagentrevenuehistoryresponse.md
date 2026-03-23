# LucidGetAgentRevenueHistoryResponse

OK

## Example Usage

```typescript
import { LucidGetAgentRevenueHistoryResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetAgentRevenueHistoryResponse = {
  success: true,
  history: [
    {
      runId: "<id>",
      totalAmountLamports: "<value>",
      recipients: [],
      createdAt: 82457,
    },
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `success`                                                     | *boolean*                                                     | :heavy_check_mark:                                            | N/A                                                           |
| `history`                                                     | [models.AgentPayoutEntry](../../models/agentpayoutentry.md)[] | :heavy_check_mark:                                            | N/A                                                           |