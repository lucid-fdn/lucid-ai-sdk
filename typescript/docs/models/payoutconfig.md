# PayoutConfig

Payout split configuration (basis points, must sum to 10000)

## Example Usage

```typescript
import { PayoutConfig } from "raijin-labs-lucid-ai/models";

let value: PayoutConfig = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `computeBp`                                          | *number*                                             | :heavy_minus_sign:                                   | Basis points for compute provider (e.g., 7000 = 70%) |
| `modelBp`                                            | *number*                                             | :heavy_minus_sign:                                   | Basis points for model owner (e.g., 2000 = 20%)      |
| `orchestratorBp`                                     | *number*                                             | :heavy_minus_sign:                                   | Basis points for orchestrator (e.g., 1000 = 10%)     |