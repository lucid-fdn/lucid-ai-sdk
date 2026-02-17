# ComputeHeartbeat

## Example Usage

```typescript
import { ComputeHeartbeat } from "raijin-labs-lucid-ai/models";

let value: ComputeHeartbeat = {
  computePassportId: "<id>",
  status: "healthy",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `computePassportId`                                                  | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `status`                                                             | [models.ComputeHeartbeatStatus](../models/computeheartbeatstatus.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `queueDepth`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `pricePer1kTokensEstimate`                                           | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `p95MsEstimate`                                                      | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |