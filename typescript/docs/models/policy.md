# Policy

## Example Usage

```typescript
import { Policy } from "raijin-labs-lucid-ai/models";

let value: Policy = {
  policyVersion: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `policyVersion`                                | *string*                                       | :heavy_check_mark:                             | Policy schema version, e.g. '1.0'              |
| `allowRegions`                                 | *string*[]                                     | :heavy_minus_sign:                             | N/A                                            |
| `residencyRequired`                            | *boolean*                                      | :heavy_minus_sign:                             | N/A                                            |
| `attestation`                                  | [models.Attestation](../models/attestation.md) | :heavy_minus_sign:                             | N/A                                            |
| `latency`                                      | [models.Latency](../models/latency.md)         | :heavy_minus_sign:                             | N/A                                            |
| `cost`                                         | [models.Cost](../models/cost.md)               | :heavy_minus_sign:                             | N/A                                            |
| `privacy`                                      | [models.Privacy](../models/privacy.md)         | :heavy_minus_sign:                             | N/A                                            |