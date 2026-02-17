# ProcessAgentBatchEpochsResponse

OK

## Example Usage

```typescript
import { ProcessAgentBatchEpochsResponse } from "raijin-labs-lucid-ai/models/operations";

let value: ProcessAgentBatchEpochsResponse = {
  success: true,
  processedEpochs: 432587,
  results: [
    {},
  ],
  totalGasCost: {
    iGas: 272371,
    mGas: 528477,
    total: 415325,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `success`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `processedEpochs`                                                                                      | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `results`                                                                                              | [operations.ProcessAgentBatchEpochsResult](../../models/operations/processagentbatchepochsresult.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `totalGasCost`                                                                                         | [models.GasCost](../../models/gascost.md)                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `message`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |