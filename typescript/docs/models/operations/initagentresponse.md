# InitAgentResponse

OK

## Example Usage

```typescript
import { InitAgentResponse } from "raijin-labs-lucid-ai/models/operations";

let value: InitAgentResponse = {
  success: true,
  agentId: "<id>",
  initialized: true,
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