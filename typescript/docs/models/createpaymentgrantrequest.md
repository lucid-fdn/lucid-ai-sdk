# CreatePaymentGrantRequest

## Example Usage

```typescript
import { CreatePaymentGrantRequest } from "raijin-labs-lucid-ai/models";

let value: CreatePaymentGrantRequest = {
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
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `tenantId`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `agentPassportId`                                                      | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `runId`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `scope`                                                                | [models.PaymentGrantScope](../models/paymentgrantscope.md)             | :heavy_check_mark:                                                     | N/A                                                                    |
| `limits`                                                               | [models.PaymentGrantLimits](../models/paymentgrantlimits.md)           | :heavy_check_mark:                                                     | N/A                                                                    |
| `attestation`                                                          | [models.PaymentGrantAttestation](../models/paymentgrantattestation.md) | :heavy_minus_sign:                                                     | N/A                                                                    |