# CreateTBARequest

## Example Usage

```typescript
import { CreateTBARequest } from "raijin-labs-lucid-ai/models";

let value: CreateTBARequest = {
  chainId: "<id>",
  tokenContract: "<value>",
  tokenId: "<id>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `chainId`            | *string*             | :heavy_check_mark:   | N/A                  |
| `tokenContract`      | *string*             | :heavy_check_mark:   | NFT contract address |
| `tokenId`            | *string*             | :heavy_check_mark:   | NFT token ID         |