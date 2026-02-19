# ComputeHardware

## Example Usage

```typescript
import { ComputeHardware } from "raijin-labs-lucid-ai/models";

let value: ComputeHardware = {
  gpu: "<value>",
  vramGb: 34664,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `gpu`                                      | *string*                                   | :heavy_check_mark:                         | GPU model (e.g. 'NVIDIA-A100-40GB')        |
| `vramGb`                                   | *number*                                   | :heavy_check_mark:                         | GPU VRAM in gigabytes                      |
| `arch`                                     | *string*                                   | :heavy_minus_sign:                         | GPU architecture (e.g. 'ampere', 'hopper') |
| `gpuCount`                                 | *number*                                   | :heavy_minus_sign:                         | N/A                                        |
| `cpuCores`                                 | *number*                                   | :heavy_minus_sign:                         | N/A                                        |
| `memoryGb`                                 | *number*                                   | :heavy_minus_sign:                         | System RAM in gigabytes                    |