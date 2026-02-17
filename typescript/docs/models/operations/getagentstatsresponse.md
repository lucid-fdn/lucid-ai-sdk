# GetAgentStatsResponse

OK

## Example Usage

```typescript
import { GetAgentStatsResponse } from "raijin-labs-lucid-ai/models/operations";

let value: GetAgentStatsResponse = {
  success: false,
  stats: {},
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `success`                                       | *boolean*                                       | :heavy_check_mark:                              | N/A                                             |
| `stats`                                         | [models.AgentStats](../../models/agentstats.md) | :heavy_check_mark:                              | N/A                                             |
| `message`                                       | *string*                                        | :heavy_minus_sign:                              | N/A                                             |