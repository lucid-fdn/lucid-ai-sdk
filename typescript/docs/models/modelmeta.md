# ModelMeta

Metadata for a model passport. Validated against schemas/ModelMeta.schema.json (additionalProperties: false).

## Example Usage

```typescript
import { ModelMeta } from "raijin-labs-lucid-ai/models";

let value: ModelMeta = {
  schemaVersion: "1.0",
  modelPassportId: "<id>",
  format: "api",
  runtimeRecommended: "tgi",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `schemaVersion`                                                      | [models.ModelMetaSchemaVersion](../models/modelmetaschemaversion.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `modelPassportId`                                                    | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `format`                                                             | [models.Format](../models/format.md)                                 | :heavy_check_mark:                                                   | N/A                                                                  |
| `runtimeRecommended`                                                 | [models.RuntimeRecommended](../models/runtimerecommended.md)         | :heavy_check_mark:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `description`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `provider`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | Provider name (e.g. trustgate, openai)                               |
| `base`                                                               | [models.Base](../models/base.md)                                     | :heavy_minus_sign:                                                   | N/A                                                                  |
| `hf`                                                                 | [models.Hf](../models/hf.md)                                         | :heavy_minus_sign:                                                   | N/A                                                                  |
| `contextLength`                                                      | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `quantizations`                                                      | [models.Quantization](../models/quantization.md)[]                   | :heavy_minus_sign:                                                   | N/A                                                                  |
| `requirements`                                                       | [models.ModelRequirements](../models/modelrequirements.md)           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `endpoints`                                                          | [models.Endpoints](../models/endpoints.md)                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `artifacts`                                                          | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `weightsUri`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `weightsHash`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |