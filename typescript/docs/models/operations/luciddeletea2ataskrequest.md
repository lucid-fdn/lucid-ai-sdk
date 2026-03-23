# LucidDeleteA2aTaskRequest

## Example Usage

```typescript
import { LucidDeleteA2aTaskRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidDeleteA2aTaskRequest = {
  passportId: "<id>",
  taskId: "<id>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `passportId`                         | *string*                             | :heavy_check_mark:                   | Agent passport identifier            |
| `taskId`                             | *string*                             | :heavy_check_mark:                   | A2A task identifier to delete (UUID) |