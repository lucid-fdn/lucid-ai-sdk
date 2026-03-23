# LucidGetAssetRevenueRequest

## Example Usage

```typescript
import { LucidGetAssetRevenueRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetAssetRevenueRequest = {
  passportId: "<id>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `passportId`                                      | *string*                                          | :heavy_check_mark:                                | AI asset passport identifier for revenue query    |
| `token`                                           | *string*                                          | :heavy_minus_sign:                                | Payment token to query revenue for (default USDC) |