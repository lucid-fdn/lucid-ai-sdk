# SystemHealth

## Example Usage

```typescript
import { SystemHealth } from "raijin-labs-lucid-ai/models";

let value: SystemHealth = {
  status: "degraded",
  timestamp: new Date("2024-04-25T23:55:30.701Z"),
  uptime: 8733.56,
  version: "<value>",
  dependencies: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | [models.SystemHealthStatus](../models/systemhealthstatus.md)                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `uptime`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `version`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dependencies`                                                                                | Record<string, [models.HealthCheckResult](../models/healthcheckresult.md)>                    | :heavy_check_mark:                                                                            | N/A                                                                                           |