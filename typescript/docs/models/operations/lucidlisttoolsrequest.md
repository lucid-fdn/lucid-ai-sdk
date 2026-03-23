# LucidListToolsRequest

## Example Usage

```typescript
import { LucidListToolsRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListToolsRequest = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `owner`                                           | *string*                                          | :heavy_minus_sign:                                | Filter by tool owner wallet address               |
| `tags`                                            | *string*                                          | :heavy_minus_sign:                                | Comma-separated                                   |
| `search`                                          | *string*                                          | :heavy_minus_sign:                                | Free-text search across tool name and description |
| `page`                                            | *number*                                          | :heavy_minus_sign:                                | Page number for pagination (starts at 1)          |
| `perPage`                                         | *number*                                          | :heavy_minus_sign:                                | Number of results per page (1-100)                |