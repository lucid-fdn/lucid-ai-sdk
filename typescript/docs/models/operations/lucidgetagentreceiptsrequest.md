# LucidGetAgentReceiptsRequest

## Example Usage

```typescript
import { LucidGetAgentReceiptsRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetAgentReceiptsRequest = {
  passportId: "<id>",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `passportId`                                  | *string*                                      | :heavy_check_mark:                            | Agent passport identifier to get receipts for |
| `page`                                        | *number*                                      | :heavy_minus_sign:                            | Page number for pagination (starts at 1)      |
| `perPage`                                     | *number*                                      | :heavy_minus_sign:                            | Number of results per page (1-100)            |