# LucidGetEscrowRequest

## Example Usage

```typescript
import { LucidGetEscrowRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidGetEscrowRequest = {
  chainId: "<id>",
  escrowId: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `chainId`                                              | *string*                                               | :heavy_check_mark:                                     | Blockchain chain identifier (e.g. base, solana-devnet) |
| `escrowId`                                             | *string*                                               | :heavy_check_mark:                                     | Escrow identifier on the specified chain               |