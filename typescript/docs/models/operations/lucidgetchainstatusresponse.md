# LucidGetChainStatusResponse

OK

## Example Usage

```typescript
import { LucidGetChainStatusResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetChainStatusResponse = {
  success: false,
  chain: {
    chainId: "<id>",
    name: "<value>",
    type: "evm",
    connected: true,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `success`                                                                                  | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `chain`                                                                                    | [operations.LucidGetChainStatusChain](../../models/operations/lucidgetchainstatuschain.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |