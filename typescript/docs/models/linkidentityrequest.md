# LinkIdentityRequest

## Example Usage

```typescript
import { LinkIdentityRequest } from "raijin-labs-lucid-ai/models";

let value: LinkIdentityRequest = {
  primaryCaip10: "<value>",
  linkedCaip10: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `primaryCaip10`          | *string*                 | :heavy_check_mark:       | Primary CAIP-10 address  |
| `linkedCaip10`           | *string*                 | :heavy_check_mark:       | Address to link          |
| `proof`                  | *string*                 | :heavy_minus_sign:       | Optional ownership proof |