# LucidChatCompletionsRequest

## Example Usage

```typescript
import { LucidChatCompletionsRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidChatCompletionsRequest = {
  body: {
    model: "Impala",
    messages: [],
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `xPaymentProof`                                                       | *string*                                                              | :heavy_minus_sign:                                                    | Transaction hash proving USDC payment (x402 protocol)                 |
| `body`                                                                | [models.ChatCompletionRequest](../../models/chatcompletionrequest.md) | :heavy_check_mark:                                                    | N/A                                                                   |