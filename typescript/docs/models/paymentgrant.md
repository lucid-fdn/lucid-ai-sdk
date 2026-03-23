# PaymentGrant

## Example Usage

```typescript
import { PaymentGrant } from "raijin-labs-lucid-ai/models";

let value: PaymentGrant = {
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
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `grantId`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `tenantId`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `agentPassportId`                                                      | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `runId`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `scope`                                                                | [models.PaymentGrantScope](../models/paymentgrantscope.md)             | :heavy_check_mark:                                                     | N/A                                                                    |
| `limits`                                                               | [models.PaymentGrantLimits](../models/paymentgrantlimits.md)           | :heavy_check_mark:                                                     | N/A                                                                    |
| `attestation`                                                          | [models.PaymentGrantAttestation](../models/paymentgrantattestation.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `signature`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Ed25519 signature (hex)                                                |
| `signerPubkey`                                                         | *string*                                                               | :heavy_check_mark:                                                     | Ed25519 public key (hex)                                               |