# LucidSearchComputeRequest

## Example Usage

```typescript
import { LucidSearchComputeRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidSearchComputeRequest = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `regions`                                                 | *string*                                                  | :heavy_minus_sign:                                        | Comma-separated region filter (e.g. us-east-1, eu-west-1) |
| `runtimes`                                                | *string*                                                  | :heavy_minus_sign:                                        | Comma-separated runtime filter (e.g. vllm, tgi)           |
| `providerType`                                            | *string*                                                  | :heavy_minus_sign:                                        | Filter by provider type (depin, cloud, onprem, managed)   |
| `minVram`                                                 | *number*                                                  | :heavy_minus_sign:                                        | Minimum VRAM requirement in GB                            |
| `gpu`                                                     | *string*                                                  | :heavy_minus_sign:                                        | Filter by GPU model (e.g. NVIDIA-A100-40GB)               |
| `owner`                                                   | *string*                                                  | :heavy_minus_sign:                                        | Filter by compute provider owner wallet address           |
| `tags`                                                    | *string*                                                  | :heavy_minus_sign:                                        | Comma-separated tag filter                                |
| `search`                                                  | *string*                                                  | :heavy_minus_sign:                                        | Free-text search across compute passport fields           |
| `page`                                                    | *number*                                                  | :heavy_minus_sign:                                        | Page number for pagination (starts at 1)                  |
| `perPage`                                                 | *number*                                                  | :heavy_minus_sign:                                        | Number of results per page (1-100)                        |