# LucidListChainsResponse

OK

## Example Usage

```typescript
import { LucidListChainsResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListChainsResponse = {
  success: true,
  count: 603744,
  chains: [
    {
      chainId: "<id>",
      name: "<value>",
      type: "solana",
      connected: true,
    },
  ],
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `success`                                       | *boolean*                                       | :heavy_check_mark:                              | N/A                                             |
| `count`                                         | *number*                                        | :heavy_check_mark:                              | N/A                                             |
| `chains`                                        | [models.ChainInfo](../../models/chaininfo.md)[] | :heavy_check_mark:                              | N/A                                             |