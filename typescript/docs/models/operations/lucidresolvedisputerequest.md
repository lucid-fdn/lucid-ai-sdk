# LucidResolveDisputeRequest

## Example Usage

```typescript
import { LucidResolveDisputeRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidResolveDisputeRequest = {
  disputeId: "<id>",
  body: {
    chainId: "<id>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `disputeId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | Dispute identifier to resolve                                                                          |
| `body`                                                                                                 | [operations.LucidResolveDisputeRequestBody](../../models/operations/lucidresolvedisputerequestbody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |