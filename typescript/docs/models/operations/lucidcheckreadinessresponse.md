# LucidCheckReadinessResponse

Ready

## Example Usage

```typescript
import { LucidCheckReadinessResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidCheckReadinessResponse = {
  status: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `dependencies`                                                                                | Record<string, [models.HealthCheckResult](../../models/healthcheckresult.md)>                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |