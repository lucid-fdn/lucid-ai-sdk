# LucidMatchResponse

OK

## Example Usage

```typescript
import { LucidMatchResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidMatchResponse = {
  success: true,
  match: {
    "key": "<value>",
  },
  explain: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `success`             | *boolean*             | :heavy_check_mark:    | N/A                   |
| `match`               | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `explain`             | Record<string, *any*> | :heavy_check_mark:    | N/A                   |