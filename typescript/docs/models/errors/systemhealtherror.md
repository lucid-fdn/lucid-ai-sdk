# SystemHealthError

## Example Usage

```typescript
import { SystemHealthError } from "raijin-labs-lucid-ai/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | [models.SystemHealthStatus](../../models/systemhealthstatus.md)                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `uptime`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `version`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dependencies`                                                                                | Record<string, [models.HealthCheckResult](../../models/healthcheckresult.md)>                 | :heavy_check_mark:                                                                            | N/A                                                                                           |