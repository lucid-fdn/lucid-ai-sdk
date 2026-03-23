# LucidGetUnifiedReputationResponse

Unified score

## Example Usage

```typescript
import { LucidGetUnifiedReputationResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetUnifiedReputationResponse = {
  success: false,
  agentId: "<id>",
  unifiedScore: 981.37,
  totalFeedbackCount: 739376,
  chainCount: 350141,
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `success`            | *boolean*            | :heavy_check_mark:   | N/A                  |
| `agentId`            | *string*             | :heavy_check_mark:   | N/A                  |
| `unifiedScore`       | *number*             | :heavy_check_mark:   | N/A                  |
| `totalFeedbackCount` | *number*             | :heavy_check_mark:   | N/A                  |
| `chainCount`         | *number*             | :heavy_check_mark:   | N/A                  |
| `message`            | *string*             | :heavy_minus_sign:   | N/A                  |