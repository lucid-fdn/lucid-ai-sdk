# TokenLaunchResponse

## Example Usage

```typescript
import { TokenLaunchResponse } from "raijin-labs-lucid-ai/models";

let value: TokenLaunchResponse = {
  success: false,
  mint: "<value>",
  txSignature: "<value>",
  totalSupply: 83590,
  provider: "<value>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `success`                    | *boolean*                    | :heavy_check_mark:           | N/A                          |
| `mint`                       | *string*                     | :heavy_check_mark:           | SPL token mint address       |
| `txSignature`                | *string*                     | :heavy_check_mark:           | Transaction signature        |
| `totalSupply`                | *number*                     | :heavy_check_mark:           | N/A                          |
| `provider`                   | *string*                     | :heavy_check_mark:           | Token launcher provider used |