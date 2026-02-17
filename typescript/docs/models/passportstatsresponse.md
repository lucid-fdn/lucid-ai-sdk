# PassportStatsResponse

## Example Usage

```typescript
import { PassportStatsResponse } from "raijin-labs-lucid-ai/models";

let value: PassportStatsResponse = {
  success: false,
  stats: {
    total: 624733,
    byType: {},
    byStatus: {},
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `success`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `stats`                                                                      | [models.PassportStatsResponseStats](../models/passportstatsresponsestats.md) | :heavy_check_mark:                                                           | N/A                                                                          |