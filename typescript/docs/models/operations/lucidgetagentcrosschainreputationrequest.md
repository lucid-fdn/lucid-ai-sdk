# LucidGetAgentCrossChainReputationRequest

## Example Usage

```typescript
import { LucidGetAgentCrossChainReputationRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetAgentCrossChainReputationRequest = {
  agentId: "<id>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `agentId`                                         | *string*                                          | :heavy_check_mark:                                | Agent identifier for cross-chain reputation query |
| `chainId`                                         | *string*                                          | :heavy_minus_sign:                                | Filter to specific chain (omit for all chains)    |