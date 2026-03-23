# LucidListEpochsResponseBody

OK

## Example Usage

```typescript
import { LucidListEpochsResponseBody } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListEpochsResponseBody = {
  success: false,
  epochs: [],
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
| `epochs`                                        | [models.Epoch](../../models/epoch.md)[]         | :heavy_check_mark:                              | N/A                                             |
| `pagination`                                    | [models.Pagination](../../models/pagination.md) | :heavy_check_mark:                              | N/A                                             |