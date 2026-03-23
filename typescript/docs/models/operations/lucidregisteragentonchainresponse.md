# LucidRegisterAgentOnChainResponse

Agent registered

## Example Usage

```typescript
import { LucidRegisterAgentOnChainResponse } from "raijin-labs-lucid-ai/models/operations";

let value: LucidRegisterAgentOnChainResponse = {
  success: true,
  chainId: "<id>",
  txHash: "<value>",
  confirmed: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `success`          | *boolean*          | :heavy_check_mark: | N/A                |
| `chainId`          | *string*           | :heavy_check_mark: | N/A                |
| `txHash`           | *string*           | :heavy_check_mark: | N/A                |
| `confirmed`        | *boolean*          | :heavy_check_mark: | N/A                |
| `blockNumber`      | *number*           | :heavy_minus_sign: | N/A                |