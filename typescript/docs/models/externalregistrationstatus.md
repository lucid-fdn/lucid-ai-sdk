# ExternalRegistrationStatus

## Example Usage

```typescript
import { ExternalRegistrationStatus } from "raijin-labs-lucid-ai/models";

let value: ExternalRegistrationStatus = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `externalId`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | ID on the external registry                                                              |
| `txSignature`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | Registration transaction signature                                                       |
| `registrationDocUri`                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | ERC-8004 registration doc URI                                                            |
| `registeredAt`                                                                           | *number*                                                                                 | :heavy_minus_sign:                                                                       | Unix ms when first registered                                                            |
| `lastSyncedAt`                                                                           | *number*                                                                                 | :heavy_minus_sign:                                                                       | Unix ms of last sync attempt                                                             |
| `status`                                                                                 | [models.ExternalRegistrationStatusStatus](../models/externalregistrationstatusstatus.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `lastError`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | Last error message                                                                       |