# PaymentGrantAttestation

## Example Usage

```typescript
import { PaymentGrantAttestation } from "raijin-labs-lucid-ai/models";

let value: PaymentGrantAttestation = {
  balanceVerifiedAt: 609560,
  balanceSource: "credit",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `balanceVerifiedAt`                                | *number*                                           | :heavy_check_mark:                                 | Unix timestamp                                     |
| `balanceSource`                                    | [models.BalanceSource](../models/balancesource.md) | :heavy_check_mark:                                 | N/A                                                |