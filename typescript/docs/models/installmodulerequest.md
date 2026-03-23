# InstallModuleRequest

## Example Usage

```typescript
import { InstallModuleRequest } from "raijin-labs-lucid-ai/models";

let value: InstallModuleRequest = {
  chainId: "<id>",
  account: "94508853",
  moduleType: "<value>",
  moduleAddress: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `chainId`                         | *string*                          | :heavy_check_mark:                | N/A                               |
| `account`                         | *string*                          | :heavy_check_mark:                | Smart account address             |
| `moduleType`                      | *string*                          | :heavy_check_mark:                | Module type (validator, executor) |
| `moduleAddress`                   | *string*                          | :heavy_check_mark:                | Module contract address           |
| `initData`                        | *string*                          | :heavy_minus_sign:                | Optional init calldata (hex)      |