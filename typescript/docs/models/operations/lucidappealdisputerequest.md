# LucidAppealDisputeRequest

## Example Usage

```typescript
import { LucidAppealDisputeRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidAppealDisputeRequest = {
  disputeId: "<id>",
  body: {
    chainId: "<id>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `disputeId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Dispute identifier to appeal                                                                         |
| `body`                                                                                               | [operations.LucidAppealDisputeRequestBody](../../models/operations/lucidappealdisputerequestbody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |