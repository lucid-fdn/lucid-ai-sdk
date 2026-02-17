# PlanAgentWorkflowResponse

OK

## Example Usage

```typescript
import { PlanAgentWorkflowResponse } from "raijin-labs-lucid-ai/models/operations";

let value: PlanAgentWorkflowResponse = {
  success: false,
  goal: "<value>",
  flowspec: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  reasoning: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `success`             | *boolean*             | :heavy_check_mark:    | N/A                   |
| `goal`                | *string*              | :heavy_check_mark:    | N/A                   |
| `flowspec`            | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `reasoning`           | *string*              | :heavy_check_mark:    | N/A                   |
| `complexity`          | *string*              | :heavy_minus_sign:    | N/A                   |
| `workflowId`          | *string*              | :heavy_minus_sign:    | N/A                   |
| `execution`           | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `executionError`      | *string*              | :heavy_minus_sign:    | N/A                   |
| `message`             | *string*              | :heavy_minus_sign:    | N/A                   |