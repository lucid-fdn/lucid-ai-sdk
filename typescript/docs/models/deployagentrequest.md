# DeployAgentRequest

## Example Usage

```typescript
import { DeployAgentRequest } from "raijin-labs-lucid-ai/models";

let value: DeployAgentRequest = {
  name: "<value>",
  owner: "<value>",
  descriptor: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `description`                                      | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `owner`                                            | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `descriptor`                                       | Record<string, *any*>                              | :heavy_check_mark:                                 | Agent runtime descriptor                           |
| `preferredAdapter`                                 | *string*                                           | :heavy_minus_sign:                                 | Runtime adapter (e.g. vercel-ai, openclaw, docker) |
| `tags`                                             | *string*[]                                         | :heavy_minus_sign:                                 | N/A                                                |
| `listOnMarketplace`                                | *boolean*                                          | :heavy_minus_sign:                                 | N/A                                                |