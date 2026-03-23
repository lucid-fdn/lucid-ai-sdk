# LucidGetAgentOrchestratorHistoryRequest

## Example Usage

```typescript
import { LucidGetAgentOrchestratorHistoryRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetAgentOrchestratorHistoryRequest = {
  tenantId: "<id>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `tenantId`                                     | *string*                                       | :heavy_check_mark:                             | Tenant identifier for execution history lookup |
| `limit`                                        | *number*                                       | :heavy_minus_sign:                             | Maximum number of history entries to return    |