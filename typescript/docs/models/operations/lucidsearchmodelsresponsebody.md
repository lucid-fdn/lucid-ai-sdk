# LucidSearchModelsResponseBody

OK

## Example Usage

```typescript
import { LucidSearchModelsResponseBody } from "raijin-labs-lucid-ai/models/operations";

let value: LucidSearchModelsResponseBody = {
  success: true,
  models: [
    {
      passportId: "<id>",
      type: "voice",
      owner: "<value>",
      status: "active",
      createdAt: 190113,
      updatedAt: 813394,
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

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `success`                                       | *boolean*                                       | :heavy_check_mark:                              | N/A                                             |
| `models`                                        | [models.Passport](../../models/passport.md)[]   | :heavy_check_mark:                              | N/A                                             |
| `pagination`                                    | [models.Pagination](../../models/pagination.md) | :heavy_check_mark:                              | N/A                                             |