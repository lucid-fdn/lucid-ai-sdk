# LaunchImageRequest

## Example Usage

```typescript
import { LaunchImageRequest } from "raijin-labs-lucid-ai/models";

let value: LaunchImageRequest = {
  mode: "image",
  image: "https://loremflickr.com/277/315?lock=1838452112658527",
  target: "docker",
  owner: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `mode`                                                                   | *"image"*                                                                | :heavy_check_mark:                                                       | Launch mode — bring your own Docker image                                |
| `image`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | Docker image reference (e.g. ghcr.io/myorg/my-agent:latest)              |
| `target`                                                                 | [models.LaunchImageRequestTarget](../models/launchimagerequesttarget.md) | :heavy_check_mark:                                                       | Deployment target provider                                               |
| `owner`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | Owner wallet address (Solana base58 or EVM 0x)                           |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Human-readable agent name                                                |
| `port`                                                                   | *number*                                                                 | :heavy_minus_sign:                                                       | Container port to expose (default 8080)                                  |
| `verification`                                                           | [models.Verification](../models/verification.md)                         | :heavy_minus_sign:                                                       | Verification mode (full includes receipts + memory + payment hooks)      |
| `envVars`                                                                | Record<string, *string*>                                                 | :heavy_minus_sign:                                                       | Additional environment variables injected into the container             |
| `registryAuth`                                                           | [models.RegistryAuth](../models/registryauth.md)                         | :heavy_minus_sign:                                                       | Private registry credentials (never stored, used at deploy time only)    |