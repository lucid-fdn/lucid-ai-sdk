# LucidMatchExplainRequest

## Example Usage

```typescript
import { LucidMatchExplainRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidMatchExplainRequest = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `policy`                                                                                                                   | [models.Policy](../../models/policy.md)                                                                                    | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `computeMeta`                                                                                                              | [models.ComputeMeta](../../models/computemeta.md)                                                                          | :heavy_minus_sign:                                                                                                         | Metadata for a compute provider passport. Validated against schemas/ComputeMeta.schema.json (additionalProperties: false). |
| `modelMeta`                                                                                                                | [models.ModelMeta](../../models/modelmeta.md)                                                                              | :heavy_minus_sign:                                                                                                         | Metadata for a model passport. Validated against schemas/ModelMeta.schema.json (additionalProperties: false).              |