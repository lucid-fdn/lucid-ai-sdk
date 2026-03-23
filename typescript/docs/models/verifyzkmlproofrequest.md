# VerifyZkMLProofRequest

## Example Usage

```typescript
import { VerifyZkMLProofRequest } from "raijin-labs-lucid-ai/models";

let value: VerifyZkMLProofRequest = {
  chainId: "<id>",
  proof: {},
  receiptHash: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `chainId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `proof`                                                                        | [models.VerifyZkMLProofRequestProof](../models/verifyzkmlproofrequestproof.md) | :heavy_check_mark:                                                             | Groth16 proof (a, b, c points)                                                 |
| `receiptHash`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |