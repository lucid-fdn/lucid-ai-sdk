# LucidCommitEpochRootResponse

Accepted

## Example Usage

```typescript
import { LucidCommitEpochRootResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidCommitEpochRootResponse = {
  success: true,
  epochId: "<id>",
  root: "<value>",
  tx: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `success`          | *boolean*          | :heavy_check_mark: | N/A                |
| `epochId`          | *string*           | :heavy_check_mark: | N/A                |
| `root`             | *string*           | :heavy_check_mark: | N/A                |
| `tx`               | *string*           | :heavy_check_mark: | N/A                |
| `leafCount`        | *number*           | :heavy_minus_sign: | N/A                |