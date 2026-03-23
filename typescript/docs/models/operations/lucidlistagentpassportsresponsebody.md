# LucidListAgentPassportsResponseBody

OK

## Example Usage

```typescript
import { LucidListAgentPassportsResponseBody } from "raijin-labs-lucid-ai/models/operations";

let value: LucidListAgentPassportsResponseBody = {
  success: true,
  agents: [
    {
      passportId: "<id>",
      type: "model",
      owner: "<value>",
      status: "deprecated",
      createdAt: 573638,
      updatedAt: 463605,
    },
  ],
  pagination: {
    total: 140064,
    page: 415655,
    perPage: 864769,
    totalPages: 731028,
  },
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `success`                                       | *boolean*                                       | :heavy_check_mark:                              | N/A                                             |
| `agents`                                        | [models.Passport](../../models/passport.md)[]   | :heavy_check_mark:                              | N/A                                             |
| `pagination`                                    | [models.Pagination](../../models/pagination.md) | :heavy_check_mark:                              | N/A                                             |