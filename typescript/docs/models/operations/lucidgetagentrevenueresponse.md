# LucidGetAgentRevenueResponse

OK

## Example Usage

```typescript
import { LucidGetAgentRevenueResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetAgentRevenueResponse = {
  success: false,
  revenue: {
    agentPassportId: "<id>",
    accumulatedLamports: "<value>",
    totalDistributedLamports: "<value>",
    lastAirdropAt: 854028,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `success`                                                   | *boolean*                                                   | :heavy_check_mark:                                          | N/A                                                         |
| `revenue`                                                   | [models.AgentRevenuePool](../../models/agentrevenuepool.md) | :heavy_check_mark:                                          | N/A                                                         |