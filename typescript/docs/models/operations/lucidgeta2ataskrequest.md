# LucidGetA2aTaskRequest

## Example Usage

```typescript
import { LucidGetA2aTaskRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetA2aTaskRequest = {
  passportId: "<id>",
  taskId: "<id>",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `passportId`               | *string*                   | :heavy_check_mark:         | Agent passport identifier  |
| `taskId`                   | *string*                   | :heavy_check_mark:         | A2A task identifier (UUID) |