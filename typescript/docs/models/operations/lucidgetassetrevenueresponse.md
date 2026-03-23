# LucidGetAssetRevenueResponse

Revenue summary

## Example Usage

```typescript
import { LucidGetAssetRevenueResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetAssetRevenueResponse = {
  success: false,
  revenue: {
    total: "<value>",
    pending: "<value>",
    withdrawn: "<value>",
    token: "<value>",
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `success`                                         | *boolean*                                         | :heavy_check_mark:                                | N/A                                               |
| `revenue`                                         | [models.RevenueInfo](../../models/revenueinfo.md) | :heavy_check_mark:                                | N/A                                               |