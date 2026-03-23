# LucidExecutePayoutOnChainResponse

Payout executed

## Example Usage

```typescript
import { LucidExecutePayoutOnChainResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidExecutePayoutOnChainResponse = {
  success: false,
  execution: {},
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `success`                                                    | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `execution`                                                  | [operations.Execution](../../models/operations/execution.md) | :heavy_check_mark:                                           | N/A                                                          |