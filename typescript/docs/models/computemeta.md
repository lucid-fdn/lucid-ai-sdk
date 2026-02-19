# ComputeMeta

Metadata for a compute provider passport. Validated against schemas/ComputeMeta.schema.json (additionalProperties: false).

## Example Usage

```typescript
import { ComputeMeta } from "raijin-labs-lucid-ai/models";

let value: ComputeMeta = {
  schemaVersion: "1.0",
  computePassportId: "<id>",
  providerType: "onprem",
  regions: [],
  hardware: {
    gpu: "<value>",
    vramGb: 447541,
  },
  runtimes: [
    {
      name: "tgi",
    },
  ],
  endpoints: {
    inferenceUrl: "https://grim-brace.info",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `schemaVersion`                                                          | [models.ComputeMetaSchemaVersion](../models/computemetaschemaversion.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `computePassportId`                                                      | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `providerType`                                                           | [models.ProviderType](../models/providertype.md)                         | :heavy_check_mark:                                                       | N/A                                                                      |
| `executionMode`                                                          | [models.ExecutionMode](../models/executionmode.md)                       | :heavy_minus_sign:                                                       | N/A                                                                      |
| `operatorPubkey`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | ed25519 public key (hex) of the provider operator                        |
| `regions`                                                                | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `residencySupported`                                                     | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `hardware`                                                               | [models.ComputeHardware](../models/computehardware.md)                   | :heavy_check_mark:                                                       | N/A                                                                      |
| `gpuFingerprint`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | GPU hardware fingerprint. Must be null for managed_endpoint mode.        |
| `runtimeHash`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | Docker image digest. Must be null for managed_endpoint mode.             |
| `runtimes`                                                               | [models.ComputeRuntime](../models/computeruntime.md)[]                   | :heavy_check_mark:                                                       | N/A                                                                      |
| `capabilities`                                                           | [models.ComputeCapabilities](../models/computecapabilities.md)           | :heavy_minus_sign:                                                       | N/A                                                                      |
| `network`                                                                | [models.Network](../models/network.md)                                   | :heavy_minus_sign:                                                       | N/A                                                                      |
| `limits`                                                                 | [models.Limits](../models/limits.md)                                     | :heavy_minus_sign:                                                       | N/A                                                                      |
| `pricing`                                                                | [models.Pricing](../models/pricing.md)                                   | :heavy_minus_sign:                                                       | N/A                                                                      |
| `endpoints`                                                              | [models.ComputeEndpoints](../models/computeendpoints.md)                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `workers`                                                                | [models.ComputeWorker](../models/computeworker.md)[]                     | :heavy_minus_sign:                                                       | N/A                                                                      |
| `sla`                                                                    | [models.Sla](../models/sla.md)                                           | :heavy_minus_sign:                                                       | N/A                                                                      |
| `policyTags`                                                             | *string*[]                                                               | :heavy_minus_sign:                                                       | Tags for matching (e.g. 'hipaa', 'gdpr', 'no-logging')                   |
| `metadata`                                                               | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |