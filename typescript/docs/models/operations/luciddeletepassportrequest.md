# LucidDeletePassportRequest

## Example Usage

```typescript
import { LucidDeletePassportRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidDeletePassportRequest = {
  passportId: "<id>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `passportId`                                       | *string*                                           | :heavy_check_mark:                                 | Unique passport identifier to delete (soft delete) |
| `xOwnerAddress`                                    | *string*                                           | :heavy_minus_sign:                                 | Owner wallet address for ownership verification    |