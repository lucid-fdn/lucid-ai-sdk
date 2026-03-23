# AnchorRecord

## Example Usage

```typescript
import { AnchorRecord } from "raijin-labs-lucid-ai/models";

let value: AnchorRecord = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `anchorId`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `artifactType`                                               | [models.ArtifactType](../models/artifacttype.md)             | :heavy_minus_sign:                                           | N/A                                                          |
| `artifactId`                                                 | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `agentPassportId`                                            | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `producer`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `provider`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `storageTier`                                                | [models.StorageTier](../models/storagetier.md)               | :heavy_minus_sign:                                           | N/A                                                          |
| `cid`                                                        | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `contentHash`                                                | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `url`                                                        | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `sizeBytes`                                                  | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `status`                                                     | [models.AnchorRecordStatus](../models/anchorrecordstatus.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `parentAnchorId`                                             | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `chainTx`                                                    | [models.ChainTx](../models/chaintx.md)                       | :heavy_minus_sign:                                           | N/A                                                          |
| `metadata`                                                   | [models.Metadata](../models/metadata.md)                     | :heavy_minus_sign:                                           | N/A                                                          |
| `createdAt`                                                  | *number*                                                     | :heavy_minus_sign:                                           | Unix timestamp in milliseconds                               |
| `verifiedAt`                                                 | *number*                                                     | :heavy_minus_sign:                                           | Unix timestamp in milliseconds                               |