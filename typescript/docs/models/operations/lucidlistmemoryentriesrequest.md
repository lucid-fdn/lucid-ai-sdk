# LucidListMemoryEntriesRequest

## Example Usage

```typescript
import { LucidListMemoryEntriesRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListMemoryEntriesRequest = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `agentPassportId`                                                                     | *string*                                                                              | :heavy_minus_sign:                                                                    | Agent passport identifier to filter entries                                           |
| `type`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | Memory type filter (episodic, semantic, procedural, entity, trust_weighted, temporal) |
| `namespace`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | Namespace filter                                                                      |
| `page`                                                                                | *number*                                                                              | :heavy_minus_sign:                                                                    | Page number for pagination                                                            |
| `perPage`                                                                             | *number*                                                                              | :heavy_minus_sign:                                                                    | Number of results per page                                                            |