# LucidGetDisputeRequest

## Example Usage

```typescript
import { LucidGetDisputeRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetDisputeRequest = {
  chainId: "<id>",
  disputeId: "<id>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `chainId`                   | *string*                    | :heavy_check_mark:          | Blockchain chain identifier |
| `disputeId`                 | *string*                    | :heavy_check_mark:          | Dispute identifier to query |