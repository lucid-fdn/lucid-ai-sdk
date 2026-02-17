# LucidListPassportsRequest

## Example Usage

```typescript
import { LucidListPassportsRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListPassportsRequest = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | *operations.Type*                                            | :heavy_minus_sign:                                           | N/A                                                          |
| `owner`                                                      | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `status`                                                     | *operations.LucidListPassportsStatus*                        | :heavy_minus_sign:                                           | N/A                                                          |
| `tags`                                                       | *string*                                                     | :heavy_minus_sign:                                           | Comma-separated                                              |
| `tagMatch`                                                   | [operations.TagMatch](../../models/operations/tagmatch.md)   | :heavy_minus_sign:                                           | N/A                                                          |
| `search`                                                     | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `page`                                                       | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `perPage`                                                    | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `sortBy`                                                     | [operations.SortBy](../../models/operations/sortby.md)       | :heavy_minus_sign:                                           | N/A                                                          |
| `sortOrder`                                                  | [operations.SortOrder](../../models/operations/sortorder.md) | :heavy_minus_sign:                                           | N/A                                                          |