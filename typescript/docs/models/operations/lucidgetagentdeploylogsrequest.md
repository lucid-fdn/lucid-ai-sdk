# LucidGetAgentDeployLogsRequest

## Example Usage

```typescript
import { LucidGetAgentDeployLogsRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetAgentDeployLogsRequest = {
  passportId: "<id>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `passportId`                                | *string*                                    | :heavy_check_mark:                          | Agent passport identifier                   |
| `tail`                                      | *number*                                    | :heavy_minus_sign:                          | Number of log lines to return (default 100) |