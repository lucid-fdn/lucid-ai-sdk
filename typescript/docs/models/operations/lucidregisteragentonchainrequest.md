# LucidRegisterAgentOnChainRequest

## Example Usage

```typescript
import { LucidRegisterAgentOnChainRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidRegisterAgentOnChainRequest = {
  chainId: "<id>",
  metadataUri: "https://similar-daddy.name/",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `chainId`          | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_minus_sign: | N/A                |
| `description`      | *string*           | :heavy_minus_sign: | N/A                |
| `metadataUri`      | *string*           | :heavy_check_mark: | N/A                |
| `endpoints`        | *string*[]         | :heavy_minus_sign: | N/A                |
| `capabilities`     | *string*[]         | :heavy_minus_sign: | N/A                |
| `wallets`          | *string*[]         | :heavy_minus_sign: | N/A                |