# LucidListPassportsResponse

## Example Usage

```typescript
import { LucidListPassportsResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListPassportsResponse = {
  result: {
    success: false,
    passports: [],
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

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `result`                                                              | [models.ListPassportsResponse](../../models/listpassportsresponse.md) | :heavy_check_mark:                                                    | N/A                                                                   |