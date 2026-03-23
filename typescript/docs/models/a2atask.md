# A2ATask

## Example Usage

```typescript
import { A2ATask } from "raijin-labs-lucid-ai/models";

let value: A2ATask = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `id`                                               | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `status`                                           | [models.A2ATaskStatus](../models/a2ataskstatus.md) | :heavy_minus_sign:                                 | N/A                                                |
| `artifacts`                                        | [models.Artifact](../models/artifact.md)[]         | :heavy_minus_sign:                                 | N/A                                                |
| `history`                                          | Record<string, *any*>[]                            | :heavy_minus_sign:                                 | N/A                                                |
| `metadata`                                         | Record<string, *any*>                              | :heavy_minus_sign:                                 | N/A                                                |