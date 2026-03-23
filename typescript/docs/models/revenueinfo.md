# RevenueInfo

## Example Usage

```typescript
import { RevenueInfo } from "raijin-labs-lucid-ai/models";

let value: RevenueInfo = {
  total: "<value>",
  pending: "<value>",
  withdrawn: "<value>",
  token: "<value>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `total`                                                 | *string*                                                | :heavy_check_mark:                                      | Total revenue in micro-units                            |
| `pending`                                               | *string*                                                | :heavy_check_mark:                                      | Pending revenue that is confirmed but not yet withdrawn |
| `withdrawn`                                             | *string*                                                | :heavy_check_mark:                                      | Already withdrawn                                       |
| `token`                                                 | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |