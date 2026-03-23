# LucidSubscribeAssetResponse

Subscription created

## Example Usage

```typescript
import { LucidSubscribeAssetResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidSubscribeAssetResponse = {
  subscribed: true,
  passportId: "<id>",
  expiresAt: 948074,
  durationHours: 202584,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `subscribed`       | *boolean*          | :heavy_check_mark: | N/A                |
| `passportId`       | *string*           | :heavy_check_mark: | N/A                |
| `expiresAt`        | *number*           | :heavy_check_mark: | Unix timestamp     |
| `durationHours`    | *number*           | :heavy_check_mark: | N/A                |