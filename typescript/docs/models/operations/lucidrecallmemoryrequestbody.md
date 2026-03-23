# LucidRecallMemoryRequestBody

## Example Usage

```typescript
import { LucidRecallMemoryRequestBody } from "raijin-labs-lucid-ai/models/operations";

let value: LucidRecallMemoryRequestBody = {
  query: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `query`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `types`                                                                                | [operations.LucidRecallMemoryType](../../models/operations/lucidrecallmemorytype.md)[] | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `lanes`                                                                                | [operations.Lane](../../models/operations/lane.md)[]                                   | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `limit`                                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `namespace`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `minSimilarity`                                                                        | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `includeArchived`                                                                      | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |