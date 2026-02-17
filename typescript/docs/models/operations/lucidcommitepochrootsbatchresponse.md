# LucidCommitEpochRootsBatchResponse

Accepted

## Example Usage

```typescript
import { LucidCommitEpochRootsBatchResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidCommitEpochRootsBatchResponse = {
  success: true,
  total: 820921,
  successfulCount: 378375,
  failedCount: 743411,
  results: [],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `success`                                                                                                    | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `total`                                                                                                      | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `successfulCount`                                                                                            | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `failedCount`                                                                                                | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `results`                                                                                                    | [operations.LucidCommitEpochRootsBatchResult](../../models/operations/lucidcommitepochrootsbatchresult.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |