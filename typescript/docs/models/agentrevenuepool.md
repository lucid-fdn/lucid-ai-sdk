# AgentRevenuePool

## Example Usage

```typescript
import { AgentRevenuePool } from "raijin-labs-lucid-ai/models";

let value: AgentRevenuePool = {
  agentPassportId: "<id>",
  accumulatedLamports: "<value>",
  totalDistributedLamports: "<value>",
  lastAirdropAt: 231785,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `agentPassportId`                           | *string*                                    | :heavy_check_mark:                          | N/A                                         |
| `accumulatedLamports`                       | *string*                                    | :heavy_check_mark:                          | Lamports accumulated in pool                |
| `totalDistributedLamports`                  | *string*                                    | :heavy_check_mark:                          | Total lamports distributed via airdrops     |
| `lastAirdropAt`                             | *number*                                    | :heavy_check_mark:                          | Unix timestamp of last airdrop (0 if never) |