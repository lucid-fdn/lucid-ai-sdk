# Epoch

## Example Usage

```typescript
import { Epoch } from "raijin-labs-lucid-ai/models";

let value: Epoch = {
  epochId: "<id>",
  mmrRoot: "<value>",
  leafCount: 454827,
  createdAt: 125581,
  status: "anchored",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `epochId`                                      | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `projectId`                                    | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `mmrRoot`                                      | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `leafCount`                                    | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `createdAt`                                    | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `finalizedAt`                                  | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `status`                                       | [models.EpochStatus](../models/epochstatus.md) | :heavy_check_mark:                             | N/A                                            |
| `chainTx`                                      | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `error`                                        | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `startLeafIndex`                               | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `endLeafIndex`                                 | *number*                                       | :heavy_minus_sign:                             | N/A                                            |