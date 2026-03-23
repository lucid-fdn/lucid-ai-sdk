# LucidDeployBlueGreenResponse

Blue deployment created

## Example Usage

```typescript
import { LucidDeployBlueGreenResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidDeployBlueGreenResponse = {
  success: false,
  deploymentId: "<id>",
  slot: "blue",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `success`                                                                                  | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deploymentId`                                                                             | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `slot`                                                                                     | [operations.LucidDeployBlueGreenSlot](../../models/operations/luciddeploybluegreenslot.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `status`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `url`                                                                                      | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |