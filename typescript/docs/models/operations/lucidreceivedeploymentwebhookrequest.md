# LucidReceiveDeploymentWebhookRequest

## Example Usage

```typescript
import { LucidReceiveDeploymentWebhookRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidReceiveDeploymentWebhookRequest = {
  provider: "akash",
  body: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `provider`                                                 | [operations.Provider](../../models/operations/provider.md) | :heavy_check_mark:                                         | Deployment provider name                                   |
| `body`                                                     | Record<string, *any*>                                      | :heavy_check_mark:                                         | N/A                                                        |