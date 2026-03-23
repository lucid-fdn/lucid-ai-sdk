# LucidListModulesRequest

## Example Usage

```typescript
import { LucidListModulesRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListModulesRequest = {
  chainId: "<id>",
  account: "31261129",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `chainId`                                  | *string*                                   | :heavy_check_mark:                         | EVM chain identifier for the smart account |
| `account`                                  | *string*                                   | :heavy_check_mark:                         | Smart account address (EVM 0x format)      |