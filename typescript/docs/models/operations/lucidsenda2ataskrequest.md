# LucidSendA2aTaskRequest

## Example Usage

```typescript
import { LucidSendA2aTaskRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidSendA2aTaskRequest = {
  passportId: "<id>",
  body: {
    message: {
      parts: [
        {},
      ],
    },
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `passportId`                                                    | *string*                                                        | :heavy_check_mark:                                              | Agent passport identifier to send task to                       |
| `body`                                                          | [models.A2ASendTaskRequest](../../models/a2asendtaskrequest.md) | :heavy_check_mark:                                              | N/A                                                             |