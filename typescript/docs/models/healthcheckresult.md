# HealthCheckResult

## Example Usage

```typescript
import { HealthCheckResult } from "raijin-labs-lucid-ai/models";

let value: HealthCheckResult = {
  status: "down",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `status`                                                               | [models.HealthCheckResultStatus](../models/healthcheckresultstatus.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `latency`                                                              | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `error`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `details`                                                              | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | N/A                                                                    |