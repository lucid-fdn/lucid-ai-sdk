# CreatePassportRequest

## Example Usage

```typescript
import { CreatePassportRequest } from "raijin-labs-lucid-ai/models";

let value: CreatePassportRequest = {
  type: "voice",
  owner: "<value>",
  metadata: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `type`                                           | [models.PassportType](../models/passporttype.md) | :heavy_check_mark:                               | N/A                                              |
| `owner`                                          | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `metadata`                                       | Record<string, *any*>                            | :heavy_check_mark:                               | N/A                                              |
| `name`                                           | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `description`                                    | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `version`                                        | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `tags`                                           | *string*[]                                       | :heavy_minus_sign:                               | N/A                                              |