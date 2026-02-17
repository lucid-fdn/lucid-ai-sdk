# GetDetailedHealthResponse

OK

## Example Usage

```typescript
import { GetDetailedHealthResponse } from "raijin-labs-lucid-ai/models/operations";

let value: GetDetailedHealthResponse = {
  status: "degraded",
  timestamp: new Date("2025-03-19T03:55:01.626Z"),
  uptime: 7360.55,
  version: "<value>",
  environment: "<value>",
  dependencies: {
    "key": {
      status: "healthy",
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | [operations.GetDetailedHealthStatus](../../models/operations/getdetailedhealthstatus.md)      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `uptime`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `version`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `environment`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dependencies`                                                                                | Record<string, [models.HealthCheckResult](../../models/healthcheckresult.md)>                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `statistics`                                                                                  | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `resources`                                                                                   | [operations.Resources](../../models/operations/resources.md)                                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |