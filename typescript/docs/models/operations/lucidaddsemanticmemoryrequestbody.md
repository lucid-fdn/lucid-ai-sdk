# LucidAddSemanticMemoryRequestBody

## Example Usage

```typescript
import { LucidAddSemanticMemoryRequestBody } from "raijin-labs-lucid-ai/models/operations";

let value: LucidAddSemanticMemoryRequestBody = {
  fact: "<value>",
  confidence: 1532.63,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `fact`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `confidence`                                                                                               | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `content`                                                                                                  | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `sourceMemoryIds`                                                                                          | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `namespace`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `memoryLane`                                                                                               | [operations.LucidAddSemanticMemoryMemoryLane](../../models/operations/lucidaddsemanticmemorymemorylane.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `metadata`                                                                                                 | Record<string, *any*>                                                                                      | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |