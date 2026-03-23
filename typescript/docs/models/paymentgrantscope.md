# PaymentGrantScope

## Example Usage

```typescript
import { PaymentGrantScope } from "raijin-labs-lucid-ai/models";

let value: PaymentGrantScope = {
  models: [
    "<value 1>",
  ],
  tools: [],
  maxPerCallUsd: 2617.18,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `models`           | *string*[]         | :heavy_check_mark: | N/A                |
| `tools`            | *string*[]         | :heavy_check_mark: | N/A                |
| `maxPerCallUsd`    | *number*           | :heavy_check_mark: | N/A                |