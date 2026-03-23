# AgentPayoutEntry

## Example Usage

```typescript
import { AgentPayoutEntry } from "raijin-labs-lucid-ai/models";

let value: AgentPayoutEntry = {
  runId: "<id>",
  totalAmountLamports: "<value>",
  recipients: [
    {},
  ],
  createdAt: 185487,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `runId`                                      | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `totalAmountLamports`                        | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `recipients`                                 | [models.Recipient](../models/recipient.md)[] | :heavy_check_mark:                           | N/A                                          |
| `createdAt`                                  | *number*                                     | :heavy_check_mark:                           | N/A                                          |