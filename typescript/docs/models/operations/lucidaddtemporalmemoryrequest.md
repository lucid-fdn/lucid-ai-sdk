# LucidAddTemporalMemoryRequest

## Example Usage

```typescript
import { LucidAddTemporalMemoryRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidAddTemporalMemoryRequest = {
  xAgentPassportId: "<id>",
  body: {
    content: "<value>",
    validFrom: 599218,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `xAgentPassportId`                                                                                           | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `body`                                                                                                       | [operations.LucidAddTemporalMemoryRequestBody](../../models/operations/lucidaddtemporalmemoryrequestbody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |