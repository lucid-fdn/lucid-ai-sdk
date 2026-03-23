# LucidGetDeploymentEventsRequest

## Example Usage

```typescript
import { LucidGetDeploymentEventsRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetDeploymentEventsRequest = {
  passportId: "<id>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `passportId`                       | *string*                           | :heavy_check_mark:                 | Agent passport identifier          |
| `limit`                            | *number*                           | :heavy_minus_sign:                 | Maximum number of events to return |