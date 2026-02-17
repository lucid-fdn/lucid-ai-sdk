# CreatePassportResponse

## Example Usage

```typescript
import { CreatePassportResponse } from "raijin-labs-lucid-ai/models";

let value: CreatePassportResponse = {
  success: true,
  passportId: "<id>",
  passport: {
    passportId: "<id>",
    type: "model",
    owner: "<value>",
    status: "deprecated",
    createdAt: 59407,
    updatedAt: 596104,
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `success`                                | *boolean*                                | :heavy_check_mark:                       | N/A                                      |
| `passportId`                             | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `passport`                               | [models.Passport](../models/passport.md) | :heavy_check_mark:                       | N/A                                      |