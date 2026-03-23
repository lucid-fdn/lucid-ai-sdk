# LucidGetCompositeReputationResponse

Composite score

## Example Usage

```typescript
import { LucidGetCompositeReputationResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetCompositeReputationResponse = {
  success: true,
  agentId: "<id>",
  composite: {
    overall: 7737.41,
    algorithmScores: [],
    computedAt: 509024,
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `success`                                                                   | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `agentId`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `composite`                                                                 | [models.CompositeReputationScore](../../models/compositereputationscore.md) | :heavy_check_mark:                                                          | N/A                                                                         |