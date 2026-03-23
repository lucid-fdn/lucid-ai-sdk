# LucidCrossChainRouteRequest

## Example Usage

```typescript
import { LucidCrossChainRouteRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidCrossChainRouteRequest = {
  modelMeta: {
    "key": "<value>",
  },
  policy: {
    "key": "<value>",
  },
  computeCatalog: [
    {},
    {},
    {
      "key": "<value>",
    },
  ],
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `modelMeta`                      | Record<string, *any*>            | :heavy_check_mark:               | N/A                              |
| `policy`                         | Record<string, *any*>            | :heavy_check_mark:               | N/A                              |
| `computeCatalog`                 | Record<string, *any*>[]          | :heavy_check_mark:               | N/A                              |
| `requestId`                      | *string*                         | :heavy_minus_sign:               | N/A                              |
| `requireLiveHealthy`             | *boolean*                        | :heavy_minus_sign:               | N/A                              |
| `chainId`                        | *string*                         | :heavy_minus_sign:               | Target chain for routing context |