# LucidGetChainStatusChain

## Example Usage

```typescript
import { LucidGetChainStatusChain } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetChainStatusChain = {
  chainId: "<id>",
  name: "<value>",
  type: "evm",
  connected: true,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `chainId`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `type`                                                                                   | [operations.LucidGetChainStatusType](../../models/operations/lucidgetchainstatustype.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `evmChainId`                                                                             | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `testnet`                                                                                | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `explorer`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `connected`                                                                              | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `erc8004`                                                                                | [operations.Erc8004](../../models/operations/erc8004.md)                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `account`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | Account address on this chain                                                            |