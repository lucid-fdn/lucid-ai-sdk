# LucidListEpochsRequest

## Example Usage

```typescript
import { LucidListEpochsRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListEpochsRequest = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `projectId`                                                | *string*                                                   | :heavy_minus_sign:                                         | Filter by project identifier                               |
| `status`                                                   | *string*                                                   | :heavy_minus_sign:                                         | Filter by epoch status (open, anchoring, anchored, failed) |
| `page`                                                     | *number*                                                   | :heavy_minus_sign:                                         | Page number for pagination (starts at 1)                   |
| `perPage`                                                  | *number*                                                   | :heavy_minus_sign:                                         | Number of results per page (1-100)                         |