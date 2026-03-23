# LucidListAgentDeploymentsRequest

## Example Usage

```typescript
import { LucidListAgentDeploymentsRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListAgentDeploymentsRequest = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `tenantId`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | Filter deployments by tenant identifier                                |
| `status`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | Filter by deployment status (e.g. running, stopped, failed)            |
| `target`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | Filter by deploy target (docker, railway, akash, phala, ionet, nosana) |