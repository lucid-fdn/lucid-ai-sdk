# LucidAddEntityMemoryRequest

## Example Usage

```typescript
import { LucidAddEntityMemoryRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidAddEntityMemoryRequest = {
  xAgentPassportId: "<id>",
  body: {
    entityName: "<value>",
    entityType: "<value>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `xAgentPassportId`                                                                                       | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `body`                                                                                                   | [operations.LucidAddEntityMemoryRequestBody](../../models/operations/lucidaddentitymemoryrequestbody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |