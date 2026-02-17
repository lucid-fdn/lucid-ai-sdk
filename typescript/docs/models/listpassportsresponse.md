# ListPassportsResponse

## Example Usage

```typescript
import { ListPassportsResponse } from "raijin-labs-lucid-ai/models";

let value: ListPassportsResponse = {
  success: false,
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
  pagination: {
    total: 140064,
    page: 415655,
    perPage: 864769,
    totalPages: 731028,
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `success`                                    | *boolean*                                    | :heavy_check_mark:                           | N/A                                          |
| `passports`                                  | [models.Passport](../models/passport.md)[]   | :heavy_check_mark:                           | N/A                                          |
| `pagination`                                 | [models.Pagination](../models/pagination.md) | :heavy_check_mark:                           | N/A                                          |