# ChatCompletionRequest

## Example Usage

```typescript
import { ChatCompletionRequest } from "raijin-labs-lucid-ai/models";

let value: ChatCompletionRequest = {
  model: "Cruze",
  messages: [],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `model`                                          | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `messages`                                       | [models.ChatMessage](../models/chatmessage.md)[] | :heavy_check_mark:                               | N/A                                              |
| `maxTokens`                                      | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `temperature`                                    | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `topP`                                           | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `stop`                                           | *models.Stop*                                    | :heavy_minus_sign:                               | N/A                                              |
| `stream`                                         | *boolean*                                        | :heavy_minus_sign:                               | N/A                                              |
| `policy`                                         | [models.Policy](../models/policy.md)             | :heavy_minus_sign:                               | N/A                                              |
| `traceId`                                        | *string*                                         | :heavy_minus_sign:                               | N/A                                              |