# LucidProcessAgentBatchEpochsResponse

OK

## Example Usage

```typescript
import { LucidProcessAgentBatchEpochsResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidProcessAgentBatchEpochsResponse = {
  success: false,
  processedEpochs: 19258,
  results: [],
  totalGasCost: {
    iGas: 886646,
    mGas: 485405,
    total: 963501,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `success`                                                                                                        | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `processedEpochs`                                                                                                | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `results`                                                                                                        | [operations.LucidProcessAgentBatchEpochsResult](../../models/operations/lucidprocessagentbatchepochsresult.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `totalGasCost`                                                                                                   | [models.GasCost](../../models/gascost.md)                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `message`                                                                                                        | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |