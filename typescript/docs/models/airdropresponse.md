# AirdropResponse

## Example Usage

```typescript
import { AirdropResponse } from "raijin-labs-lucid-ai/models";

let value: AirdropResponse = {
  success: true,
  passportId: "<id>",
  tokenMint: "<value>",
  totalDistributed: 427162,
  holders: 696344,
  distributions: [],
  txSignatures: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `success`                                          | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |
| `passportId`                                       | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `tokenMint`                                        | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `totalDistributed`                                 | *number*                                           | :heavy_check_mark:                                 | Total lamports distributed                         |
| `holders`                                          | *number*                                           | :heavy_check_mark:                                 | Number of holders who received airdrop             |
| `distributions`                                    | [models.Distribution](../models/distribution.md)[] | :heavy_check_mark:                                 | N/A                                                |
| `txSignatures`                                     | *string*[]                                         | :heavy_check_mark:                                 | N/A                                                |