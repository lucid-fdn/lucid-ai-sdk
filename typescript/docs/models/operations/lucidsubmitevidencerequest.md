# LucidSubmitEvidenceRequest

## Example Usage

```typescript
import { LucidSubmitEvidenceRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidSubmitEvidenceRequest = {
  disputeId: "<id>",
  body: {
    chainId: "<id>",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `disputeId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | Dispute identifier for evidence submission                            |
| `body`                                                                | [models.SubmitEvidenceRequest](../../models/submitevidencerequest.md) | :heavy_check_mark:                                                    | N/A                                                                   |