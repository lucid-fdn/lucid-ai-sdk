# ProcessAgentEpochResponse

OK

## Example Usage

```typescript
import { ProcessAgentEpochResponse } from "raijin-labs-lucid-ai/models/operations";

let value: ProcessAgentEpochResponse = {
  success: false,
  agentId: "<id>",
  epochNumber: 645330,
  vectorCount: 752077,
  mmrRoot: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `success`                                 | *boolean*                                 | :heavy_check_mark:                        | N/A                                       |
| `agentId`                                 | *string*                                  | :heavy_check_mark:                        | N/A                                       |
| `epochNumber`                             | *number*                                  | :heavy_check_mark:                        | N/A                                       |
| `vectorCount`                             | *number*                                  | :heavy_check_mark:                        | N/A                                       |
| `mmrRoot`                                 | *string*                                  | :heavy_check_mark:                        | N/A                                       |
| `ipfsCid`                                 | *string*                                  | :heavy_minus_sign:                        | N/A                                       |
| `transactionSignature`                    | *string*                                  | :heavy_minus_sign:                        | N/A                                       |
| `gasCost`                                 | [models.GasCost](../../models/gascost.md) | :heavy_minus_sign:                        | N/A                                       |
| `message`                                 | *string*                                  | :heavy_minus_sign:                        | N/A                                       |