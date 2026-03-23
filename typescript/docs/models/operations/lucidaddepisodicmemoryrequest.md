# LucidAddEpisodicMemoryRequest

## Example Usage

```typescript
import { LucidAddEpisodicMemoryRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidAddEpisodicMemoryRequest = {
  xAgentPassportId: "<id>",
  body: {
    sessionId: "<id>",
    role: "system",
    content: "<value>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `xAgentPassportId`                                                                                           | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `body`                                                                                                       | [operations.LucidAddEpisodicMemoryRequestBody](../../models/operations/lucidaddepisodicmemoryrequestbody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |