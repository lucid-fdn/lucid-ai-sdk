# LucidListDatasetsResponse

## Example Usage

```typescript
import { LucidListDatasetsResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListDatasetsResponse = {
  result: {
    success: false,
    datasets: [],
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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `result`                                                                                             | [operations.LucidListDatasetsResponseBody](../../models/operations/lucidlistdatasetsresponsebody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |