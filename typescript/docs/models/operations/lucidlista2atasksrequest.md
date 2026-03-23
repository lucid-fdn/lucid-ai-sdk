# LucidListA2aTasksRequest

## Example Usage

```typescript
import { LucidListA2aTasksRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListA2aTasksRequest = {
  passportId: "<id>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `passportId`                                         | *string*                                             | :heavy_check_mark:                                   | Agent passport identifier to list tasks for          |
| `state`                                              | [operations.State](../../models/operations/state.md) | :heavy_minus_sign:                                   | Filter by task state                                 |
| `page`                                               | *number*                                             | :heavy_minus_sign:                                   | Page number for pagination (starts at 1)             |
| `perPage`                                            | *number*                                             | :heavy_minus_sign:                                   | Number of results per page (1-100)                   |