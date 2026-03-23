# LucidMatchRequest

## Example Usage

```typescript
import { LucidMatchRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidMatchRequest = {
  body: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `xPaymentProof`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | Transaction hash proving USDC payment (x402 protocol)                                |
| `body`                                                                               | [operations.LucidMatchRequestBody](../../models/operations/lucidmatchrequestbody.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |