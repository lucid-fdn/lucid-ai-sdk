# LucidSetAssetPricingRequest

## Example Usage

```typescript
import { LucidSetAssetPricingRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidSetAssetPricingRequest = {
  passportId: "<id>",
  body: {
    payoutAddress: "<value>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `passportId`                                                            | *string*                                                                | :heavy_check_mark:                                                      | AI asset passport identifier to set pricing for                         |
| `body`                                                                  | [models.SetAssetPricingRequest](../../models/setassetpricingrequest.md) | :heavy_check_mark:                                                      | N/A                                                                     |