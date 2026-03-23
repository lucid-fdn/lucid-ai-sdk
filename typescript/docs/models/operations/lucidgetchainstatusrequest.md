# LucidGetChainStatusRequest

## Example Usage

```typescript
import { LucidGetChainStatusRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetChainStatusRequest = {
  chainId: "<id>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `chainId`                                             | *string*                                              | :heavy_check_mark:                                    | Chain identifier (e.g. base, ethereum, solana-devnet) |