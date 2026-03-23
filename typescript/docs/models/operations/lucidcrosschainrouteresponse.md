# LucidCrossChainRouteResponse

Route computed

## Example Usage

```typescript
import { LucidCrossChainRouteResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidCrossChainRouteResponse = {
  success: true,
  requestId: "<id>",
  route: {
    "key": "<value>",
    "key1": "<value>",
  },
  explain: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `success`             | *boolean*             | :heavy_check_mark:    | N/A                   |
| `requestId`           | *string*              | :heavy_check_mark:    | N/A                   |
| `chainId`             | *string*              | :heavy_minus_sign:    | N/A                   |
| `route`               | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `explain`             | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `chain`               | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |