# LucidAddTemporalMemoryRequestBody

## Example Usage

```typescript
import { LucidAddTemporalMemoryRequestBody } from "raijin-labs-lucid-ai/models/operations";

let value: LucidAddTemporalMemoryRequestBody = {
  content: "<value>",
  validFrom: 79173,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `content`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `validFrom`                                                                                                | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Unix ms timestamp                                                                                          |
| `validTo`                                                                                                  | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `recordedAt`                                                                                               | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `namespace`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `memoryLane`                                                                                               | [operations.LucidAddTemporalMemoryMemoryLane](../../models/operations/lucidaddtemporalmemorymemorylane.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `metadata`                                                                                                 | Record<string, *any*>                                                                                      | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |