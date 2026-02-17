# LucidSearchModelsResponse

OK

## Example Usage

```typescript
import { LucidSearchModelsResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidSearchModelsResponse = {
  success: false,
  models: [
    {
      passportId: "<id>",
      type: "tool",
      owner: "<value>",
      status: "deprecated",
      createdAt: 183908,
      updatedAt: 780509,
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