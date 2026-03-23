# LucidExecuteAgentFlowspecRequest

## Example Usage

```typescript
import { LucidExecuteAgentFlowspecRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidExecuteAgentFlowspecRequest = {
  flowspec: {},
  context: {
    tenantId: "<id>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `flowspec`                                                 | Record<string, *any*>                                      | :heavy_check_mark:                                         | N/A                                                        |
| `context`                                                  | [operations.Context](../../models/operations/context.md)   | :heavy_check_mark:                                         | N/A                                                        |
| `executor`                                                 | [operations.Executor](../../models/operations/executor.md) | :heavy_minus_sign:                                         | N/A                                                        |