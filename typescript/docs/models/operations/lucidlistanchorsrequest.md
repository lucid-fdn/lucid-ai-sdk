# LucidListAnchorsRequest

## Example Usage

```typescript
import { LucidListAnchorsRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListAnchorsRequest = {
  agentPassportId: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `agentPassportId`                                                  | *string*                                                           | :heavy_check_mark:                                                 | Agent passport ID to filter anchor records                         |
| `artifactType`                                                     | [operations.ArtifactType](../../models/operations/artifacttype.md) | :heavy_minus_sign:                                                 | Filter by artifact type                                            |
| `limit`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | Maximum number of records to return                                |