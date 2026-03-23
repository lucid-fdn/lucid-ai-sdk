# LucidGetAgentHistoryResponse

OK

## Example Usage

```typescript
import { LucidGetAgentHistoryResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetAgentHistoryResponse = {
  success: false,
  agentId: "<id>",
  history: [
    {},
  ],
  totalEpochs: 577206,
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