# LaunchBaseRuntimeRequest

## Example Usage

```typescript
import { LaunchBaseRuntimeRequest } from "raijin-labs-lucid-ai/models";

let value: LaunchBaseRuntimeRequest = {
  mode: "base-runtime",
  model: "LeBaron",
  prompt: "<value>",
  target: "phala",
  owner: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `mode`                                                                               | *"base-runtime"*                                                                     | :heavy_check_mark:                                                                   | Launch mode — pre-built base runtime                                                 |
| `model`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | Model identifier (e.g. gpt-4o, claude-3-opus)                                        |
| `prompt`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | System prompt for the agent                                                          |
| `target`                                                                             | [models.LaunchBaseRuntimeRequestTarget](../models/launchbaseruntimerequesttarget.md) | :heavy_check_mark:                                                                   | Deployment target provider                                                           |
| `owner`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | Owner wallet address (Solana base58 or EVM 0x)                                       |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | Human-readable agent name                                                            |
| `tools`                                                                              | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Optional tool identifiers to enable                                                  |