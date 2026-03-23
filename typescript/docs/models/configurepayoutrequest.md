# ConfigurePayoutRequest

## Example Usage

```typescript
import { ConfigurePayoutRequest } from "raijin-labs-lucid-ai/models";

let value: ConfigurePayoutRequest = {
  chainId: "<id>",
  account: "52281834",
  recipients: [
    "<value 1>",
  ],
  basisPoints: [
    883399,
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `chainId`          | *string*           | :heavy_check_mark: | N/A                |
| `account`          | *string*           | :heavy_check_mark: | N/A                |
| `recipients`       | *string*[]         | :heavy_check_mark: | N/A                |
| `basisPoints`      | *number*[]         | :heavy_check_mark: | Must sum to 10000  |