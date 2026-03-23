# LucidGetAgentCrossChainReputationResponse

Reputation data

## Example Usage

```typescript
import { LucidGetAgentCrossChainReputationResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetAgentCrossChainReputationResponse = {
  success: false,
  agentId: "<id>",
  chainsQueried: 933685,
  results: [],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `success`                                                                                                                  | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `agentId`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `chainsQueried`                                                                                                            | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `results`                                                                                                                  | [operations.LucidGetAgentCrossChainReputationResult](../../models/operations/lucidgetagentcrosschainreputationresult.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |