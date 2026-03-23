# RegisterZkMLModelRequest

## Example Usage

```typescript
import { RegisterZkMLModelRequest } from "raijin-labs-lucid-ai/models";

let value: RegisterZkMLModelRequest = {
  chainId: "<id>",
  modelHash: "<value>",
  verifyingKey: "<value>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `chainId`                   | *string*                    | :heavy_check_mark:          | N/A                         |
| `modelHash`                 | *string*                    | :heavy_check_mark:          | N/A                         |
| `verifyingKey`              | *string*                    | :heavy_check_mark:          | Groth16 verifying key (hex) |