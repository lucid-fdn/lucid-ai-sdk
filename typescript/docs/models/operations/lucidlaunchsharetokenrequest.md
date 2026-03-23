# LucidLaunchShareTokenRequest

## Example Usage

```typescript
import { LucidLaunchShareTokenRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidLaunchShareTokenRequest = {
  passportId: "<id>",
  body: {
    name: "<value>",
    symbol: "<value>",
    totalSupply: 591957,
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `passportId`                                                    | *string*                                                        | :heavy_check_mark:                                              | Passport identifier to launch share token for                   |
| `body`                                                          | [models.TokenLaunchRequest](../../models/tokenlaunchrequest.md) | :heavy_check_mark:                                              | N/A                                                             |