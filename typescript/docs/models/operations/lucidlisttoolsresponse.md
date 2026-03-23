# LucidListToolsResponse

## Example Usage

```typescript
import { LucidListToolsResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListToolsResponse = {
  result: {
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
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [operations.LucidListToolsResponseBody](../../models/operations/lucidlisttoolsresponsebody.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |