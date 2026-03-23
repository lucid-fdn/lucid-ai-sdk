# LucidListEpochsResponse

## Example Usage

```typescript
import { LucidListEpochsResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListEpochsResponse = {
  result: {
    success: false,
    epochs: [
      {
        epochId: "<id>",
        mmrRoot: "<value>",
        leafCount: 609618,
        createdAt: 332849,
        status: "open",
      },
    ],
    pagination: {
      total: 140064,
      page: 415655,
      perPage: 864769,
      totalPages: 731028,
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `result`                                                                                         | [operations.LucidListEpochsResponseBody](../../models/operations/lucidlistepochsresponsebody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |