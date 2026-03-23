# CompositeReputationScore

## Example Usage

```typescript
import { CompositeReputationScore } from "raijin-labs-lucid-ai/models";

let value: CompositeReputationScore = {
  overall: 4597.76,
  algorithmScores: [
    {
      algorithmId: "<id>",
      weight: 3908.8,
      score: {
        overall: 4750.93,
        components: {
          "key": 6397.98,
        },
        computedAt: 268687,
      },
    },
  ],
  computedAt: 312471,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `overall`                                                                                              | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `algorithmScores`                                                                                      | [models.CompositeReputationScoreAlgorithmScore](../models/compositereputationscorealgorithmscore.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `computedAt`                                                                                           | *number*                                                                                               | :heavy_check_mark:                                                                                     | Unix timestamp                                                                                         |