# LucidGetDetailedHealthResponse

OK

## Example Usage

```typescript
import { LucidGetDetailedHealthResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetDetailedHealthResponse = {
  status: "healthy",
  timestamp: new Date("2025-01-31T23:10:00.446Z"),
  uptime: 5022.4,
  version: "<value>",
  environment: "<value>",
  dependencies: {},
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `status`                                                                                           | [operations.LucidGetDetailedHealthStatus](../../models/operations/lucidgetdetailedhealthstatus.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `timestamp`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `uptime`                                                                                           | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `version`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `environment`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `dependencies`                                                                                     | Record<string, [models.HealthCheckResult](../../models/healthcheckresult.md)>                      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `statistics`                                                                                       | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `resources`                                                                                        | [operations.Resources](../../models/operations/resources.md)                                       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |