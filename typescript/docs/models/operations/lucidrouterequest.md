# LucidRouteRequest

## Example Usage

```typescript
import { LucidRouteRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidRouteRequest = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `modelMeta`                                                                                                   | [models.ModelMeta](../../models/modelmeta.md)                                                                 | :heavy_minus_sign:                                                                                            | Metadata for a model passport. Validated against schemas/ModelMeta.schema.json (additionalProperties: false). |
| `policy`                                                                                                      | [models.Policy](../../models/policy.md)                                                                       | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `computeCatalog`                                                                                              | [models.ComputeMeta](../../models/computemeta.md)[]                                                           | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `requestId`                                                                                                   | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `requireLiveHealthy`                                                                                          | *boolean*                                                                                                     | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |