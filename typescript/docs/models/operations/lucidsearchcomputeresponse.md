# LucidSearchComputeResponse

## Example Usage

```typescript
import { LucidSearchComputeResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidSearchComputeResponse = {
  result: {
    success: true,
    compute: [],
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `result`                                                                                               | [operations.LucidSearchComputeResponseBody](../../models/operations/lucidsearchcomputeresponsebody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |