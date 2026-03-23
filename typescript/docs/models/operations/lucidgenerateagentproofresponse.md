# LucidGenerateAgentProofResponse

OK

## Example Usage

```typescript
import { LucidGenerateAgentProofResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGenerateAgentProofResponse = {
  success: false,
  agentId: "<id>",
  vectorText: "<value>",
  epochNumber: 602393,
  proof: {
    "key": "<value>",
  },
  verified: false,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `success`             | *boolean*             | :heavy_check_mark:    | N/A                   |
| `agentId`             | *string*              | :heavy_check_mark:    | N/A                   |
| `vectorText`          | *string*              | :heavy_check_mark:    | N/A                   |
| `epochNumber`         | *number*              | :heavy_check_mark:    | N/A                   |
| `proof`               | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `verified`            | *boolean*             | :heavy_check_mark:    | N/A                   |
| `message`             | *string*              | :heavy_minus_sign:    | N/A                   |