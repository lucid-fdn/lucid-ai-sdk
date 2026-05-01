# LucidDeployBlueGreenRequestBody

## Example Usage

```typescript
import { LucidDeployBlueGreenRequestBody } from "raijin-labs-lucid-ai/models/operations";

let value: LucidDeployBlueGreenRequestBody = {
  image: "https://picsum.photos/seed/CrmPIbsLG7/511/626",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `image`                                                             | *string*                                                            | :heavy_check_mark:                                                  | Docker image reference for the blue deployment                      |
| `target`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | Deploy target override (docker, railway, akash, phala, ionet, nosana) |
| `envVars`                                                           | Record<string, *string*>                                            | :heavy_minus_sign:                                                  | Environment variable overrides                                      |
| `healthGateMs`                                                      | *number*                                                            | :heavy_minus_sign:                                                  | Health check wait time in milliseconds before promotion eligibility |
