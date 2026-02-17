# LucidVerifyEpochResponse

OK

## Example Usage

```typescript
import { LucidVerifyEpochResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidVerifyEpochResponse = {
  success: false,
  valid: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `success`          | *boolean*          | :heavy_check_mark: | N/A                |
| `valid`            | *boolean*          | :heavy_check_mark: | N/A                |
| `onChainRoot`      | *string*           | :heavy_minus_sign: | N/A                |
| `expectedRoot`     | *string*           | :heavy_minus_sign: | N/A                |
| `txSignature`      | *string*           | :heavy_minus_sign: | N/A                |
| `error`            | *string*           | :heavy_minus_sign: | N/A                |