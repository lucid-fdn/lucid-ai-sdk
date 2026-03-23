# LucidDiscoverA2aAgentResponse

Agent discovered

## Example Usage

```typescript
import { LucidDiscoverA2aAgentResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidDiscoverA2aAgentResponse = {
  success: true,
  agentCard: {},
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `success`                                                   | *boolean*                                                   | :heavy_check_mark:                                          | N/A                                                         |
| `agentCard`                                                 | [models.A2AAgentCard](../../models/a2aagentcard.md)         | :heavy_check_mark:                                          | A2A Agent Card for agent discovery (per A2A protocol spec). |