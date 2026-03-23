# A2AAgentCard

A2A Agent Card for agent discovery (per A2A protocol spec).

## Example Usage

```typescript
import { A2AAgentCard } from "raijin-labs-lucid-ai/models";

let value: A2AAgentCard = {};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `name`                                   | *string*                                 | :heavy_minus_sign:                       | N/A                                      |
| `description`                            | *string*                                 | :heavy_minus_sign:                       | N/A                                      |
| `url`                                    | *string*                                 | :heavy_minus_sign:                       | N/A                                      |
| `provider`                               | [models.Provider](../models/provider.md) | :heavy_minus_sign:                       | N/A                                      |
| `version`                                | *string*                                 | :heavy_minus_sign:                       | N/A                                      |
| `capabilities`                           | Record<string, *any*>                    | :heavy_minus_sign:                       | N/A                                      |
| `skills`                                 | [models.Skill](../models/skill.md)[]     | :heavy_minus_sign:                       | N/A                                      |