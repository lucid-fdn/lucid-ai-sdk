# LucidMatchExplainResponse

OK

## Example Usage

```typescript
import { LucidMatchExplainResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidMatchExplainResponse = {
  success: true,
  allowed: false,
  reasons: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  policyHash: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `success`          | *boolean*          | :heavy_check_mark: | N/A                |
| `allowed`          | *boolean*          | :heavy_check_mark: | N/A                |
| `reasons`          | *string*[]         | :heavy_check_mark: | N/A                |
| `policyHash`       | *string*           | :heavy_check_mark: | N/A                |