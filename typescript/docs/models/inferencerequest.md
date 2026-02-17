# InferenceRequest

## Example Usage

```typescript
import { InferenceRequest } from "raijin-labs-lucid-ai/models";

let value: InferenceRequest = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `modelPassportId`                                | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `model`                                          | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `prompt`                                         | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `messages`                                       | [models.ChatMessage](../models/chatmessage.md)[] | :heavy_minus_sign:                               | N/A                                              |
| `maxTokens`                                      | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `temperature`                                    | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `topP`                                           | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `topK`                                           | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `stop`                                           | *string*[]                                       | :heavy_minus_sign:                               | N/A                                              |
| `stream`                                         | *boolean*                                        | :heavy_minus_sign:                               | N/A                                              |
| `policy`                                         | [models.Policy](../models/policy.md)             | :heavy_minus_sign:                               | N/A                                              |
| `computePassportId`                              | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `traceId`                                        | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `requestId`                                      | *string*                                         | :heavy_minus_sign:                               | N/A                                              |