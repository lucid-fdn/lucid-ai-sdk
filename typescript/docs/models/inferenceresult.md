# InferenceResult

## Example Usage

```typescript
import { InferenceResult } from "raijin-labs-lucid-ai/models";

let value: InferenceResult = {
  success: true,
  runId: "<id>",
  tokensIn: 812715,
  tokensOut: 598678,
  ttftMs: 29877,
  totalLatencyMs: 256953,
  modelPassportId: "<id>",
  computePassportId: "<id>",
  runtime: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `success`           | *boolean*           | :heavy_check_mark:  | N/A                 |
| `runId`             | *string*            | :heavy_check_mark:  | N/A                 |
| `requestId`         | *string*            | :heavy_minus_sign:  | N/A                 |
| `traceId`           | *string*            | :heavy_minus_sign:  | N/A                 |
| `text`              | *string*            | :heavy_minus_sign:  | N/A                 |
| `finishReason`      | *string*            | :heavy_minus_sign:  | N/A                 |
| `tokensIn`          | *number*            | :heavy_check_mark:  | N/A                 |
| `tokensOut`         | *number*            | :heavy_check_mark:  | N/A                 |
| `ttftMs`            | *number*            | :heavy_check_mark:  | N/A                 |
| `totalLatencyMs`    | *number*            | :heavy_check_mark:  | N/A                 |
| `modelPassportId`   | *string*            | :heavy_check_mark:  | N/A                 |
| `computePassportId` | *string*            | :heavy_check_mark:  | N/A                 |
| `runtime`           | *string*            | :heavy_check_mark:  | N/A                 |
| `policyHash`        | *string*            | :heavy_minus_sign:  | N/A                 |
| `receiptId`         | *string*            | :heavy_minus_sign:  | N/A                 |
| `usedFallback`      | *boolean*           | :heavy_minus_sign:  | N/A                 |
| `fallbackReason`    | *string*            | :heavy_minus_sign:  | N/A                 |
| `error`             | *string*            | :heavy_minus_sign:  | N/A                 |
| `errorCode`         | *string*            | :heavy_minus_sign:  | N/A                 |