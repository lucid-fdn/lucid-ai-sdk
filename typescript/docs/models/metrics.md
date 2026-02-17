# Metrics

## Example Usage

```typescript
import { Metrics } from "raijin-labs-lucid-ai/models";

let value: Metrics = {
  ttftMs: 597543,
  tokensIn: 740364,
  tokensOut: 277612,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `ttftMs`           | *number*           | :heavy_check_mark: | N/A                |
| `tokensIn`         | *number*           | :heavy_check_mark: | N/A                |
| `tokensOut`        | *number*           | :heavy_check_mark: | N/A                |
| `p95Ms`            | *number*           | :heavy_minus_sign: | N/A                |
| `totalLatencyMs`   | *number*           | :heavy_minus_sign: | N/A                |
| `queueWaitMs`      | *number*           | :heavy_minus_sign: | N/A                |
| `queueTimeMs`      | *number*           | :heavy_minus_sign: | N/A                |
| `coldStartMs`      | *number*           | :heavy_minus_sign: | N/A                |
| `modelLoadMs`      | *number*           | :heavy_minus_sign: | N/A                |
| `cacheHit`         | *boolean*          | :heavy_minus_sign: | N/A                |