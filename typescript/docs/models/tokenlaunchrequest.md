# TokenLaunchRequest

## Example Usage

```typescript
import { TokenLaunchRequest } from "raijin-labs-lucid-ai/models";

let value: TokenLaunchRequest = {
  name: "<value>",
  symbol: "<value>",
  totalSupply: 907713,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `name`                               | *string*                             | :heavy_check_mark:                   | Token name (e.g., "Llama 3.1 Share") |
| `symbol`                             | *string*                             | :heavy_check_mark:                   | Token symbol (e.g., "LLAMA")         |
| `totalSupply`                        | *number*                             | :heavy_check_mark:                   | Total token supply                   |
| `decimals`                           | *number*                             | :heavy_minus_sign:                   | Token decimals                       |