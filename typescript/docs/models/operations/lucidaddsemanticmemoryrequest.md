# LucidAddSemanticMemoryRequest

## Example Usage

```typescript
import { LucidAddSemanticMemoryRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidAddSemanticMemoryRequest = {
  xAgentPassportId: "<id>",
  body: {
    fact: "<value>",
    confidence: 3786.81,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `xAgentPassportId`                                                                                           | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `body`                                                                                                       | [operations.LucidAddSemanticMemoryRequestBody](../../models/operations/lucidaddsemanticmemoryrequestbody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |