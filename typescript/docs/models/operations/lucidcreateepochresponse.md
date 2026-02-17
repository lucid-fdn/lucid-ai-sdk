# LucidCreateEpochResponse

Created

## Example Usage

```typescript
import { LucidCreateEpochResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidCreateEpochResponse = {
  success: false,
  epoch: {
    epochId: "<id>",
    mmrRoot: "<value>",
    leafCount: 313560,
    createdAt: 308108,
    status: "failed",
  },
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `success`                             | *boolean*                             | :heavy_check_mark:                    | N/A                                   |
| `epoch`                               | [models.Epoch](../../models/epoch.md) | :heavy_check_mark:                    | N/A                                   |