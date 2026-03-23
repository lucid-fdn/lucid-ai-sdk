# LucidSearchModelsResponse

## Example Usage

```typescript
import { LucidSearchModelsResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidSearchModelsResponse = {
  result: {
    success: false,
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
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `result`                                                                                             | [operations.LucidSearchModelsResponseBody](../../models/operations/lucidsearchmodelsresponsebody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |