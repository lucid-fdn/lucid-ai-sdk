# TokenInfo

## Example Usage

```typescript
import { TokenInfo } from "raijin-labs-lucid-ai/models";

let value: TokenInfo = {
  success: true,
  mint: "<value>",
  passportId: "<id>",
  name: "<value>",
  symbol: "<value>",
  totalSupply: 262516,
  decimals: 231942,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `success`                      | *boolean*                      | :heavy_check_mark:             | N/A                            |
| `mint`                         | *string*                       | :heavy_check_mark:             | SPL token mint address         |
| `passportId`                   | *string*                       | :heavy_check_mark:             | N/A                            |
| `name`                         | *string*                       | :heavy_check_mark:             | N/A                            |
| `symbol`                       | *string*                       | :heavy_check_mark:             | N/A                            |
| `totalSupply`                  | *number*                       | :heavy_check_mark:             | N/A                            |
| `decimals`                     | *number*                       | :heavy_check_mark:             | N/A                            |
| `holders`                      | *number*                       | :heavy_minus_sign:             | Number of unique token holders |