# LucidListAgentPassportsRequest

## Example Usage

```typescript
import { LucidListAgentPassportsRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListAgentPassportsRequest = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `owner`                                            | *string*                                           | :heavy_minus_sign:                                 | Filter by agent owner wallet address               |
| `tags`                                             | *string*                                           | :heavy_minus_sign:                                 | Comma-separated                                    |
| `search`                                           | *string*                                           | :heavy_minus_sign:                                 | Free-text search across agent name and description |
| `page`                                             | *number*                                           | :heavy_minus_sign:                                 | Page number for pagination (starts at 1)           |
| `perPage`                                          | *number*                                           | :heavy_minus_sign:                                 | Number of results per page (1-100)                 |