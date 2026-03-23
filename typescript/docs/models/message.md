# Message

## Example Usage

```typescript
import { Message } from "raijin-labs-lucid-ai/models";

let value: Message = {
  parts: [
    {},
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `role`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `parts`                                                                | [models.A2ASendTaskRequestPart](../models/a2asendtaskrequestpart.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |