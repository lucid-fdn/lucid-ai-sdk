# ChainInfo

## Example Usage

```typescript
import { ChainInfo } from "raijin-labs-lucid-ai/models";

let value: ChainInfo = {
  chainId: "<id>",
  name: "<value>",
  type: "evm",
  connected: false,
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `chainId`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `name`                                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `type`                                 | [models.Type](../models/type.md)       | :heavy_check_mark:                     | N/A                                    |
| `evmChainId`                           | *number*                               | :heavy_minus_sign:                     | N/A                                    |
| `testnet`                              | *boolean*                              | :heavy_minus_sign:                     | N/A                                    |
| `explorer`                             | *string*                               | :heavy_minus_sign:                     | N/A                                    |
| `connected`                            | *boolean*                              | :heavy_check_mark:                     | N/A                                    |
| `erc8004`                              | [models.Erc8004](../models/erc8004.md) | :heavy_minus_sign:                     | N/A                                    |