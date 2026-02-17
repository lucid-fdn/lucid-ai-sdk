# CreateReceiptRequest

Input fields for creating a receipt. The backend computes the hash, signature, and wraps metrics.

## Example Usage

```typescript
import { CreateReceiptRequest } from "raijin-labs-lucid-ai/models";

let value: CreateReceiptRequest = {
  modelPassportId: "<id>",
  computePassportId: "<id>",
  policyHash: "<value>",
  runtime: "<value>",
  tokensIn: 625137,
  tokensOut: 471261,
  ttftMs: 119484,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `modelPassportId`     | *string*              | :heavy_check_mark:    | N/A                   |
| `computePassportId`   | *string*              | :heavy_check_mark:    | N/A                   |
| `policyHash`          | *string*              | :heavy_check_mark:    | N/A                   |
| `runtime`             | *string*              | :heavy_check_mark:    | N/A                   |
| `tokensIn`            | *number*              | :heavy_check_mark:    | N/A                   |
| `tokensOut`           | *number*              | :heavy_check_mark:    | N/A                   |
| `ttftMs`              | *number*              | :heavy_check_mark:    | N/A                   |
| `totalLatencyMs`      | *number*              | :heavy_minus_sign:    | N/A                   |
| `timestamp`           | *number*              | :heavy_minus_sign:    | N/A                   |
| `traceId`             | *string*              | :heavy_minus_sign:    | N/A                   |
| `runId`               | *string*              | :heavy_minus_sign:    | N/A                   |
| `imageHash`           | *string*              | :heavy_minus_sign:    | N/A                   |
| `modelHash`           | *string*              | :heavy_minus_sign:    | N/A                   |
| `attestation`         | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `executionMode`       | *string*              | :heavy_minus_sign:    | N/A                   |
| `nodeId`              | *string*              | :heavy_minus_sign:    | N/A                   |
| `runtimeHash`         | *string*              | :heavy_minus_sign:    | N/A                   |
| `gpuFingerprint`      | *string*              | :heavy_minus_sign:    | N/A                   |