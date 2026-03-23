# LucidUpdatePassportEndpointsRequest

## Example Usage

```typescript
import { LucidUpdatePassportEndpointsRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidUpdatePassportEndpointsRequest = {
  passportId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `passportId`                                                                            | *string*                                                                                | :heavy_check_mark:                                                                      | Passport identifier to update endpoints for                                             |
| `xOwnerAddress`                                                                         | *string*                                                                                | :heavy_minus_sign:                                                                      | Owner wallet address for ownership verification                                         |
| `body`                                                                                  | [models.UpdatePassportEndpointsRequest](../../models/updatepassportendpointsrequest.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |