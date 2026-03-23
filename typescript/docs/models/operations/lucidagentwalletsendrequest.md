# LucidAgentWalletSendRequest

## Example Usage

```typescript
import { LucidAgentWalletSendRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidAgentWalletSendRequest = {
  agentId: "<id>",
  body: {
    to: "<value>",
    amount: "639.57",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `agentId`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Agent passport identifier for wallet send                               |
| `body`                                                                  | [models.AgentWalletSendRequest](../../models/agentwalletsendrequest.md) | :heavy_check_mark:                                                      | N/A                                                                     |