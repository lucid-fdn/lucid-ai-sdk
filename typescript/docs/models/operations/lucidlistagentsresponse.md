# LucidListAgentsResponse

OK

## Example Usage

```typescript
import { LucidListAgentsResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListAgentsResponse = {
  success: false,
  totalAgents: 771694,
  agents: [],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `success`                                         | *boolean*                                         | :heavy_check_mark:                                | N/A                                               |
| `totalAgents`                                     | *number*                                          | :heavy_check_mark:                                | N/A                                               |
| `agents`                                          | [models.AgentStats](../../models/agentstats.md)[] | :heavy_check_mark:                                | N/A                                               |
| `message`                                         | *string*                                          | :heavy_minus_sign:                                | N/A                                               |