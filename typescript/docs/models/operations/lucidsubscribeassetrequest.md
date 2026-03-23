# LucidSubscribeAssetRequest

## Example Usage

```typescript
import { LucidSubscribeAssetRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidSubscribeAssetRequest = {
  xPaymentProof: "<value>",
  body: {
    passportId: "<id>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `xPaymentProof`                                                                                        | *string*                                                                                               | :heavy_check_mark:                                                                                     | Transaction hash proving USDC payment (x402 protocol)                                                  |
| `body`                                                                                                 | [operations.LucidSubscribeAssetRequestBody](../../models/operations/lucidsubscribeassetrequestbody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |