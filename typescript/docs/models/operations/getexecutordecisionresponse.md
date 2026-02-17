# GetExecutorDecisionResponse

OK

## Example Usage

```typescript
import { GetExecutorDecisionResponse } from "raijin-labs-lucid-ai/models/operations";

let value: GetExecutorDecisionResponse = {
  success: false,
  decision: {},
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `success`                                                  | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `decision`                                                 | [operations.Decision](../../models/operations/decision.md) | :heavy_check_mark:                                         | N/A                                                        |
| `message`                                                  | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |