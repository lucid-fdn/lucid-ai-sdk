# LaunchResponse

## Example Usage

```typescript
import { LaunchResponse } from "raijin-labs-lucid-ai/models";

let value: LaunchResponse = {
  success: false,
  reputationEligible: true,
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `success`                                                     | *boolean*                                                     | :heavy_check_mark:                                            | N/A                                                           |
| `passportId`                                                  | *string*                                                      | :heavy_minus_sign:                                            | Created passport identifier                                   |
| `deploymentId`                                                | *string*                                                      | :heavy_minus_sign:                                            | Deployment record identifier                                  |
| `deploymentUrl`                                               | *string*                                                      | :heavy_minus_sign:                                            | Public URL of the deployed agent                              |
| `verificationMode`                                            | [models.VerificationMode](../models/verificationmode.md)      | :heavy_minus_sign:                                            | Active verification mode                                      |
| `reputationEligible`                                          | *boolean*                                                     | :heavy_check_mark:                                            | Whether the agent is eligible for on-chain reputation scoring |
| `configHash`                                                  | *string*                                                      | :heavy_minus_sign:                                            | SHA-256 hash of the launch configuration (for audit)          |
| `error`                                                       | *string*                                                      | :heavy_minus_sign:                                            | Error message (present only when success is false)            |