# EpochsReadyResponse

## Example Usage

```typescript
import { EpochsReadyResponse } from "raijin-labs-lucid-ai/models";

let value: EpochsReadyResponse = {
  success: false,
  count: 272092,
  epochs: [],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `success`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `count`                                                                    | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `epochs`                                                                   | [models.EpochsReadyResponseEpoch](../models/epochsreadyresponseepoch.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |