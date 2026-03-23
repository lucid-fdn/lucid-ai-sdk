# AlgorithmScore

## Example Usage

```typescript
import { AlgorithmScore } from "raijin-labs-lucid-ai/models";

let value: AlgorithmScore = {
  overall: 2034.26,
  components: {
    "key": 1962.91,
  },
  computedAt: 42947,
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `overall`                             | *number*                              | :heavy_check_mark:                    | Overall score (0-100)                 |
| `components`                          | Record<string, *number*>              | :heavy_check_mark:                    | Component scores (algorithm-specific) |
| `metadata`                            | Record<string, *any*>                 | :heavy_minus_sign:                    | Raw metadata from the computation     |
| `computedAt`                          | *number*                              | :heavy_check_mark:                    | Unix timestamp                        |