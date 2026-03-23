# LucidUpdatePassportRequest

## Example Usage

```typescript
import { LucidUpdatePassportRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidUpdatePassportRequest = {
  passportId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `passportId`                                                          | *string*                                                              | :heavy_check_mark:                                                    | Unique passport identifier to update                                  |
| `xOwnerAddress`                                                       | *string*                                                              | :heavy_minus_sign:                                                    | Owner wallet address for ownership verification                       |
| `body`                                                                | [models.UpdatePassportRequest](../../models/updatepassportrequest.md) | :heavy_check_mark:                                                    | N/A                                                                   |