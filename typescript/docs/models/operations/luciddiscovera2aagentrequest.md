# LucidDiscoverA2aAgentRequest

## Example Usage

```typescript
import { LucidDiscoverA2aAgentRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidDiscoverA2aAgentRequest = {
  agentUrl: "https://torn-disadvantage.com",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `agentUrl`                               | *string*                                 | :heavy_check_mark:                       | HTTPS URL of the agent                   |
| `authToken`                              | *string*                                 | :heavy_minus_sign:                       | Optional auth token for the remote agent |