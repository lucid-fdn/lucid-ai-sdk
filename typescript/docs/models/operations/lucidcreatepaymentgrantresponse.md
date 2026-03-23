# LucidCreatePaymentGrantResponse

Grant created

## Example Usage

```typescript
import { LucidCreatePaymentGrantResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidCreatePaymentGrantResponse = {
  success: false,
  grant: {
    grantId: "<id>",
    tenantId: "<id>",
    agentPassportId: "<id>",
    runId: "<id>",
    scope: {
      models: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      tools: [
        "<value 1>",
      ],
      maxPerCallUsd: 2172.63,
    },
    limits: {
      totalUsd: 1240.27,
      expiresAt: 421220,
      maxCalls: 239370,
    },
    attestation: {
      balanceVerifiedAt: 923580,
      balanceSource: "escrow",
    },
    signature: "<value>",
    signerPubkey: "<value>",
  },
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `success`                                           | *boolean*                                           | :heavy_check_mark:                                  | N/A                                                 |
| `grant`                                             | [models.PaymentGrant](../../models/paymentgrant.md) | :heavy_check_mark:                                  | N/A                                                 |