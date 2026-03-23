# LucidDeployBlueGreenRequest

## Example Usage

```typescript
import { LucidDeployBlueGreenRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidDeployBlueGreenRequest = {
  passportId: "<id>",
  body: {
    image: "https://picsum.photos/seed/6uvx0golb/2194/1054",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `passportId`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Agent passport identifier                                                                                |
| `body`                                                                                                   | [operations.LucidDeployBlueGreenRequestBody](../../models/operations/luciddeploybluegreenrequestbody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |