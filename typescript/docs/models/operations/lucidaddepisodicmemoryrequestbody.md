# LucidAddEpisodicMemoryRequestBody

## Example Usage

```typescript
import { LucidAddEpisodicMemoryRequestBody } from "raijin-labs-lucid-ai/models/operations";

let value: LucidAddEpisodicMemoryRequestBody = {
  sessionId: "<id>",
  role: "tool",
  content: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `sessionId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `role`                                                                                                     | [operations.Role](../../models/operations/role.md)                                                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `content`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `tokens`                                                                                                   | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `namespace`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `memoryLane`                                                                                               | [operations.LucidAddEpisodicMemoryMemoryLane](../../models/operations/lucidaddepisodicmemorymemorylane.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `metadata`                                                                                                 | Record<string, *any*>                                                                                      | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |