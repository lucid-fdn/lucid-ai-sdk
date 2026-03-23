# LucidInitAgentResponse

OK

## Example Usage

```typescript
import { LucidInitAgentResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidInitAgentResponse = {
  success: false,
  agentId: "<id>",
  initialized: false,
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `success`                                       | *boolean*                                       | :heavy_check_mark:                              | N/A                                             |
| `agentId`                                       | *string*                                        | :heavy_check_mark:                              | N/A                                             |
| `initialized`                                   | *boolean*                                       | :heavy_check_mark:                              | N/A                                             |
| `stats`                                         | [models.AgentStats](../../models/agentstats.md) | :heavy_minus_sign:                              | N/A                                             |
| `message`                                       | *string*                                        | :heavy_minus_sign:                              | N/A                                             |