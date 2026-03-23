# LucidGetReputationBreakdownResponse

Breakdown by chain

## Example Usage

```typescript
import { LucidGetReputationBreakdownResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetReputationBreakdownResponse = {
  success: true,
  agentId: "<id>",
  chainCount: 824484,
  chains: [
    {},
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `success`                                                                                                    | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `agentId`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `chainCount`                                                                                                 | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `chains`                                                                                                     | [operations.LucidGetReputationBreakdownChain](../../models/operations/lucidgetreputationbreakdownchain.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |