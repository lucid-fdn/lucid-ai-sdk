# ListAgentsResponse

OK

## Example Usage

```typescript
import { ListAgentsResponse } from "raijin-labs-lucid-ai/models/operations";

let value: ListAgentsResponse = {
  success: true,
  totalAgents: 454586,
  agents: [
    {},
  ],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `success`                                         | *boolean*                                         | :heavy_check_mark:                                | N/A                                               |
| `totalAgents`                                     | *number*                                          | :heavy_check_mark:                                | N/A                                               |
| `agents`                                          | [models.AgentStats](../../models/agentstats.md)[] | :heavy_check_mark:                                | N/A                                               |
| `message`                                         | *string*                                          | :heavy_minus_sign:                                | N/A                                               |