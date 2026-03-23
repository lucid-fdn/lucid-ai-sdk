# LucidUpdatePassportPricingRequest

## Example Usage

```typescript
import { LucidUpdatePassportPricingRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidUpdatePassportPricingRequest = {
  passportId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `passportId`                                                                        | *string*                                                                            | :heavy_check_mark:                                                                  | Passport identifier to update pricing for                                           |
| `xOwnerAddress`                                                                     | *string*                                                                            | :heavy_minus_sign:                                                                  | Owner wallet address for ownership verification                                     |
| `body`                                                                              | [models.UpdatePassportPricingRequest](../../models/updatepassportpricingrequest.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |