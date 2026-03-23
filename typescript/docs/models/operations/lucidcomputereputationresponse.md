# LucidComputeReputationResponse

Score computed

## Example Usage

```typescript
import { LucidComputeReputationResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidComputeReputationResponse = {
  success: false,
  algorithmId: "<id>",
  agentId: "<id>",
  score: {
    overall: 4750.93,
    components: {
      "key": 6397.98,
    },
    computedAt: 268687,
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `success`                                               | *boolean*                                               | :heavy_check_mark:                                      | N/A                                                     |
| `algorithmId`                                           | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `agentId`                                               | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `score`                                                 | [models.AlgorithmScore](../../models/algorithmscore.md) | :heavy_check_mark:                                      | N/A                                                     |