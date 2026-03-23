# SponsorUserOpRequest

## Example Usage

```typescript
import { SponsorUserOpRequest } from "raijin-labs-lucid-ai/models";

let value: SponsorUserOpRequest = {
  chainId: "<id>",
  userOp: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `chainId`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `userOp`                                                                     | [models.SponsorUserOpRequestUserOp](../models/sponsoruseroprequestuserop.md) | :heavy_check_mark:                                                           | ERC-4337 UserOperation struct                                                |