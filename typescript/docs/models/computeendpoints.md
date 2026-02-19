# ComputeEndpoints

## Example Usage

```typescript
import { ComputeEndpoints } from "raijin-labs-lucid-ai/models";

let value: ComputeEndpoints = {
  inferenceUrl: "https://hidden-provision.org",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `inferenceUrl`             | *string*                   | :heavy_check_mark:         | URL for inference requests |
| `quoteUrl`                 | *string*                   | :heavy_minus_sign:         | N/A                        |
| `jobsUrl`                  | *string*                   | :heavy_minus_sign:         | N/A                        |
| `healthUrl`                | *string*                   | :heavy_minus_sign:         | N/A                        |
| `metricsUrl`               | *string*                   | :heavy_minus_sign:         | N/A                        |