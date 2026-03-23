# LucidListPassportsRequest

## Example Usage

```typescript
import { LucidListPassportsRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListPassportsRequest = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `type`                                                               | *operations.LucidListPassportsType*                                  | :heavy_minus_sign:                                                   | Filter by passport type (model, compute, tool, dataset, agent)       |
| `owner`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | Filter by owner wallet address (Solana base58 or EVM 0x)             |
| `status`                                                             | *operations.LucidListPassportsStatus*                                | :heavy_minus_sign:                                                   | Filter by passport status (active, deprecated, revoked)              |
| `tags`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | Comma-separated                                                      |
| `tagMatch`                                                           | [operations.TagMatch](../../models/operations/tagmatch.md)           | :heavy_minus_sign:                                                   | Tag matching mode - all (every tag must match) or any (at least one) |
| `search`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | Free-text search across name, description, and tags                  |
| `page`                                                               | *number*                                                             | :heavy_minus_sign:                                                   | Page number for pagination (starts at 1)                             |
| `perPage`                                                            | *number*                                                             | :heavy_minus_sign:                                                   | Number of results per page (1-100)                                   |
| `sortBy`                                                             | [operations.SortBy](../../models/operations/sortby.md)               | :heavy_minus_sign:                                                   | Sort field (created_at, updated_at, or name)                         |
| `sortOrder`                                                          | [operations.SortOrder](../../models/operations/sortorder.md)         | :heavy_minus_sign:                                                   | Sort direction (asc or desc)                                         |