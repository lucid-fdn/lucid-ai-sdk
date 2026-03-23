# LucidGetAssetPricingResponse

Pricing data (null if not configured)

## Example Usage

```typescript
import { LucidGetAssetPricingResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetAssetPricingResponse = {
  success: true,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `success`                                           | *boolean*                                           | :heavy_check_mark:                                  | N/A                                                 |
| `pricing`                                           | [models.AssetPricing](../../models/assetpricing.md) | :heavy_minus_sign:                                  | N/A                                                 |