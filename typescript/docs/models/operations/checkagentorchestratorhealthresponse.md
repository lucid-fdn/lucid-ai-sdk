# CheckAgentOrchestratorHealthResponse

OK

## Example Usage

```typescript
import { CheckAgentOrchestratorHealthResponse } from "raijin-labs-lucid-ai/models/operations";

let value: CheckAgentOrchestratorHealthResponse = {
  success: false,
  health: {
    "key": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `success`             | *boolean*             | :heavy_check_mark:    | N/A                   |
| `health`              | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `message`             | *string*              | :heavy_minus_sign:    | N/A                   |