# LucidSearchComputeResponseBody

OK

## Example Usage

```typescript
import { LucidSearchComputeResponseBody } from "raijin-labs-lucid-ai/models/operations";

let value: LucidSearchComputeResponseBody = {
  success: true,
  compute: [
    {
      passportId: "<id>",
      type: "dataset",
      owner: "<value>",
      status: "active",
      createdAt: 672713,
      updatedAt: 462198,
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
| `compute`                                       | [models.Passport](../../models/passport.md)[]   | :heavy_check_mark:                              | N/A                                             |
| `pagination`                                    | [models.Pagination](../../models/pagination.md) | :heavy_check_mark:                              | N/A                                             |