# LucidListReputationAlgorithmsResponse

OK

## Example Usage

```typescript
import { LucidListReputationAlgorithmsResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListReputationAlgorithmsResponse = {
  success: true,
  algorithms: [
    {
      id: "<id>",
      name: "<value>",
      version: "<value>",
      description: "more aw valuable wherever however where",
    },
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `success`                                                                   | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         |
| `algorithms`                                                                | [models.ReputationAlgorithmInfo](../../models/reputationalgorithminfo.md)[] | :heavy_check_mark:                                                          | N/A                                                                         |