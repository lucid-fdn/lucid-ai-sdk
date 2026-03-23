# LucidGetMemoryProvenanceChainRequest

## Example Usage

```typescript
import { LucidGetMemoryProvenanceChainRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetMemoryProvenanceChainRequest = {
  agentId: "<id>",
  namespace: "<value>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `agentId`                 | *string*                  | :heavy_check_mark:        | Agent passport identifier |
| `namespace`               | *string*                  | :heavy_check_mark:        | Memory namespace          |