# LucidTriggerRevenueAirdropRequest

## Example Usage

```typescript
import { LucidTriggerRevenueAirdropRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidTriggerRevenueAirdropRequest = {
  passportId: "<id>",
  body: {
    amountLamports: 857951,
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `passportId`                                            | *string*                                                | :heavy_check_mark:                                      | Passport identifier for revenue airdrop                 |
| `body`                                                  | [models.AirdropRequest](../../models/airdroprequest.md) | :heavy_check_mark:                                      | N/A                                                     |