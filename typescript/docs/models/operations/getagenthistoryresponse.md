# GetAgentHistoryResponse

OK

## Example Usage

```typescript
import { GetAgentHistoryResponse } from "raijin-labs-lucid-ai/models/operations";

let value: GetAgentHistoryResponse = {
  success: false,
  agentId: "<id>",
  history: [],
  totalEpochs: 515759,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `success`                                                       | *boolean*                                                       | :heavy_check_mark:                                              | N/A                                                             |
| `agentId`                                                       | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `history`                                                       | [models.AgentHistoryEntry](../../models/agenthistoryentry.md)[] | :heavy_check_mark:                                              | N/A                                                             |
| `totalEpochs`                                                   | *number*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `message`                                                       | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |