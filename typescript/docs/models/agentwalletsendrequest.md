# AgentWalletSendRequest

## Example Usage

```typescript
import { AgentWalletSendRequest } from "raijin-labs-lucid-ai/models";

let value: AgentWalletSendRequest = {
  to: "<value>",
  amount: "522.12",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `to`                                           | *string*                                       | :heavy_check_mark:                             | Recipient address                              |
| `amount`                                       | *string*                                       | :heavy_check_mark:                             | Amount to send                                 |
| `token`                                        | *string*                                       | :heavy_minus_sign:                             | Token mint address (optional, defaults to SOL) |