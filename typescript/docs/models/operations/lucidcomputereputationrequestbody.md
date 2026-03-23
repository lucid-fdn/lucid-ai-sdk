# LucidComputeReputationRequestBody

## Example Usage

```typescript
import { LucidComputeReputationRequestBody } from "raijin-labs-lucid-ai/models/operations";

let value: LucidComputeReputationRequestBody = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `algorithmId`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | Algorithm to use (default: receipt-volume-v1)                      |
| `context`                                                          | Record<string, *any*>                                              | :heavy_minus_sign:                                                 | Optional context for the computation (chain IDs, time range, etc.) |