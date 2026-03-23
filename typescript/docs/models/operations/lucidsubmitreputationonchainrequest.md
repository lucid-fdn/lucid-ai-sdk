# LucidSubmitReputationOnChainRequest

## Example Usage

```typescript
import { LucidSubmitReputationOnChainRequest } from "raijin-labs-lucid-ai/models/operations";

let value: LucidSubmitReputationOnChainRequest = {
  agentId: "<id>",
  body: {
    chainId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `agentId`                                                                                                                | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Agent identifier for on-chain reputation submission                                                                      |
| `body`                                                                                                                   | [operations.LucidSubmitReputationOnChainRequestBody](../../models/operations/lucidsubmitreputationonchainrequestbody.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |