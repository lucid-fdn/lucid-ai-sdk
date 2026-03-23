# LucidGetAgentRunProofRequest

## Example Usage

```typescript
import { LucidGetAgentRunProofRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetAgentRunProofRequest = {
  passportId: "<id>",
  runId: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `passportId`                                           | *string*                                               | :heavy_check_mark:                                     | Agent passport identifier                              |
| `runId`                                                | *string*                                               | :heavy_check_mark:                                     | Specific inference run identifier for leaf-level proof |