# LucidGetTbaRequest

## Example Usage

```typescript
import { LucidGetTbaRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetTbaRequest = {
  chainId: "<id>",
  tokenId: "<id>",
  tokenContract: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `chainId`                            | *string*                             | :heavy_check_mark:                   | EVM chain identifier                 |
| `tokenId`                            | *string*                             | :heavy_check_mark:                   | NFT token identifier for TBA lookup  |
| `tokenContract`                      | *string*                             | :heavy_check_mark:                   | NFT contract address (EVM 0x format) |