# LucidListToolsResponseBody

OK

## Example Usage

```typescript
import { LucidListToolsResponseBody } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListToolsResponseBody = {
  success: true,
  tools: [
    {
      passportId: "<id>",
      type: "dataset",
      owner: "<value>",
      status: "active",
      createdAt: 882955,
      updatedAt: 285667,
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
| `tools`                                         | [models.Passport](../../models/passport.md)[]   | :heavy_check_mark:                              | N/A                                             |
| `pagination`                                    | [models.Pagination](../../models/pagination.md) | :heavy_check_mark:                              | N/A                                             |