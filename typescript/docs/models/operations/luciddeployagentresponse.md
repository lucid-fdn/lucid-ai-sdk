# LucidDeployAgentResponse

Deployment created

## Example Usage

```typescript
import { LucidDeployAgentResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidDeployAgentResponse = {
  success: false,
  deployment: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `success`             | *boolean*             | :heavy_check_mark:    | N/A                   |
| `deployment`          | Record<string, *any*> | :heavy_check_mark:    | N/A                   |