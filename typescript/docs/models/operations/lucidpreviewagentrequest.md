# LucidPreviewAgentRequest

## Example Usage

```typescript
import { LucidPreviewAgentRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidPreviewAgentRequest = {
  descriptor: {
    "key": "<value>",
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `name`                   | *string*                 | :heavy_minus_sign:       | N/A                      |
| `owner`                  | *string*                 | :heavy_minus_sign:       | N/A                      |
| `descriptor`             | Record<string, *any*>    | :heavy_check_mark:       | Agent runtime descriptor |
| `preferredAdapter`       | *string*                 | :heavy_minus_sign:       | N/A                      |