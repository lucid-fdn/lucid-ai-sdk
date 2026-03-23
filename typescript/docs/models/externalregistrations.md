# ExternalRegistrations

## Example Usage

```typescript
import { ExternalRegistrations } from "raijin-labs-lucid-ai/models";

let value: ExternalRegistrations = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `externalId`                                                                                   | *string*                                                                                       | :heavy_minus_sign:                                                                             | ID on the external registry (e.g., Metaplex asset pubkey)                                      |
| `txSignature`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | Registration transaction signature                                                             |
| `registrationDocUri`                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | ERC-8004 registration document URI on DePIN storage                                            |
| `registeredAt`                                                                                 | *number*                                                                                       | :heavy_minus_sign:                                                                             | Unix ms when first registered                                                                  |
| `lastSyncedAt`                                                                                 | *number*                                                                                       | :heavy_minus_sign:                                                                             | Unix ms of last sync attempt                                                                   |
| `status`                                                                                       | [models.PassportExternalRegistrationsStatus](../models/passportexternalregistrationsstatus.md) | :heavy_minus_sign:                                                                             | Projection status                                                                              |
| `lastError`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | Last error message (null when synced)                                                          |