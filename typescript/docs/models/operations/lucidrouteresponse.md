# LucidRouteResponse

OK

## Example Usage

```typescript
import { LucidRouteResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidRouteResponse = {
  success: false,
  route: {},
  explain: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `success`                                            | *boolean*                                            | :heavy_check_mark:                                   | N/A                                                  |
| `requestId`                                          | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `route`                                              | [operations.Route](../../models/operations/route.md) | :heavy_check_mark:                                   | N/A                                                  |
| `explain`                                            | Record<string, *any*>                                | :heavy_check_mark:                                   | N/A                                                  |