# LucidVerifyPayoutResponse

OK

## Example Usage

```typescript
import { LucidVerifyPayoutResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidVerifyPayoutResponse = {
  success: true,
  valid: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `success`          | *boolean*          | :heavy_check_mark: | N/A                |
| `valid`            | *boolean*          | :heavy_check_mark: | N/A                |
| `totalMatches`     | *boolean*          | :heavy_minus_sign: | N/A                |
| `recipientsValid`  | *boolean*          | :heavy_minus_sign: | N/A                |
| `hashValid`        | *boolean*          | :heavy_minus_sign: | N/A                |