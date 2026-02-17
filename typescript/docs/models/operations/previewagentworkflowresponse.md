# PreviewAgentWorkflowResponse

OK

## Example Usage

```typescript
import { PreviewAgentWorkflowResponse } from "raijin-labs-lucid-ai/models/operations";

let value: PreviewAgentWorkflowResponse = {
  success: true,
  preview: {},
  flowspec: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `success`             | *boolean*             | :heavy_check_mark:    | N/A                   |
| `preview`             | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `flowspec`            | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `reasoning`           | *string*              | :heavy_minus_sign:    | N/A                   |