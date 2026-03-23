# LucidSetAgentWalletLimitsRequest

## Example Usage

```typescript
import { LucidSetAgentWalletLimitsRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidSetAgentWalletLimitsRequest = {
  agentId: "<id>",
  body: {
    perTxUsd: 6677.19,
    dailyUsd: 2169.46,
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `agentId`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | Agent passport identifier for wallet limits                                 |
| `body`                                                                      | [models.AgentWalletLimitsRequest](../../models/agentwalletlimitsrequest.md) | :heavy_check_mark:                                                          | N/A                                                                         |