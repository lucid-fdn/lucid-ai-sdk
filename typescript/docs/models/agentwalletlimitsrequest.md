# AgentWalletLimitsRequest

## Example Usage

```typescript
import { AgentWalletLimitsRequest } from "raijin-labs-lucid-ai/models";

let value: AgentWalletLimitsRequest = {
  perTxUsd: 7824.22,
  dailyUsd: 7309.73,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `perTxUsd`                  | *number*                    | :heavy_check_mark:          | Maximum USD per transaction |
| `dailyUsd`                  | *number*                    | :heavy_check_mark:          | Maximum USD per day         |