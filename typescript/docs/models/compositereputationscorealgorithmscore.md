# CompositeReputationScoreAlgorithmScore

## Example Usage

```typescript
import { CompositeReputationScoreAlgorithmScore } from "raijin-labs-lucid-ai/models";

let value: CompositeReputationScoreAlgorithmScore = {
  algorithmId: "<id>",
  weight: 2946.89,
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

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `algorithmId`                                        | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `weight`                                             | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `score`                                              | [models.AlgorithmScore](../models/algorithmscore.md) | :heavy_check_mark:                                   | N/A                                                  |