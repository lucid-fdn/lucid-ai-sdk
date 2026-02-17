# AgentAccomplishRequest

## Example Usage

```typescript
import { AgentAccomplishRequest } from "raijin-labs-lucid-ai/models";

let value: AgentAccomplishRequest = {
  goal: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `goal`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `context`                                                  | Record<string, *any*>                                      | :heavy_minus_sign:                                         | N/A                                                        |
| `preferredExecutor`                                        | [models.PreferredExecutor](../models/preferredexecutor.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `dryRun`                                                   | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |