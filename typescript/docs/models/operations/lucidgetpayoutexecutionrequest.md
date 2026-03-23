# LucidGetPayoutExecutionRequest

## Example Usage

```typescript
import { LucidGetPayoutExecutionRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetPayoutExecutionRequest = {
  runId: "<id>",
  chainId: "<id>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `runId`                                              | *string*                                             | :heavy_check_mark:                                   | Inference run identifier for payout execution lookup |
| `chainId`                                            | *string*                                             | :heavy_check_mark:                                   | Chain on which the payout was executed               |