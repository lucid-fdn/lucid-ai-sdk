# ChatMessage

## Example Usage

```typescript
import { ChatMessage } from "raijin-labs-lucid-ai/models";

let value: ChatMessage = {
  role: "user",
  content: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `role`                                           | [models.Role](../models/role.md)                 | :heavy_check_mark:                               | N/A                                              |
| `content`                                        | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `name`                                           | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `functionCall`                                   | [models.FunctionCall](../models/functioncall.md) | :heavy_minus_sign:                               | N/A                                              |