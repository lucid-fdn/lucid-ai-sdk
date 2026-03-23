# ReleaseEscrowRequest

## Example Usage

```typescript
import { ReleaseEscrowRequest } from "raijin-labs-lucid-ai/models";

let value: ReleaseEscrowRequest = {
  chainId: "<id>",
  escrowId: "<id>",
  receiptHash: "<value>",
  signature: "<value>",
  signerPubkey: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `chainId`          | *string*           | :heavy_check_mark: | N/A                |
| `escrowId`         | *string*           | :heavy_check_mark: | N/A                |
| `receiptHash`      | *string*           | :heavy_check_mark: | N/A                |
| `signature`        | *string*           | :heavy_check_mark: | N/A                |
| `signerPubkey`     | *string*           | :heavy_check_mark: | N/A                |