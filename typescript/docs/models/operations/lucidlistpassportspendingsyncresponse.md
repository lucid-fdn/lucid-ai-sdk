# LucidListPassportsPendingSyncResponse

OK

## Example Usage

```typescript
import { LucidListPassportsPendingSyncResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListPassportsPendingSyncResponse = {
  success: false,
  count: 883733,
  passports: [
    {
      passportId: "<id>",
      type: "compute",
      owner: "<value>",
      status: "active",
      createdAt: 820087,
      updatedAt: 942792,
    },
  ],
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `success`                                     | *boolean*                                     | :heavy_check_mark:                            | N/A                                           |
| `count`                                       | *number*                                      | :heavy_check_mark:                            | N/A                                           |
| `passports`                                   | [models.Passport](../../models/passport.md)[] | :heavy_check_mark:                            | N/A                                           |