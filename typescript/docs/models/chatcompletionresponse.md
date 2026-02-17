# ChatCompletionResponse

## Example Usage

```typescript
import { ChatCompletionResponse } from "raijin-labs-lucid-ai/models";

let value: ChatCompletionResponse = {
  id: "<id>",
  object: "<value>",
  created: 137159,
  model: "Model Y",
  choices: [
    {},
  ],
  usage: {
    promptTokens: 937433,
    completionTokens: 168168,
    totalTokens: 971442,
  },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `id`                                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `object`                               | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `created`                              | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `model`                                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `choices`                              | [models.Choice](../models/choice.md)[] | :heavy_check_mark:                     | N/A                                    |
| `usage`                                | [models.Usage](../models/usage.md)     | :heavy_check_mark:                     | N/A                                    |