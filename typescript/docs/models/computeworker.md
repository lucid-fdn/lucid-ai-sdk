# ComputeWorker

## Example Usage

```typescript
import { ComputeWorker } from "raijin-labs-lucid-ai/models";

let value: ComputeWorker = {
  workerId: "<id>",
  status: "draining",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `workerId`                                                     | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `status`                                                       | [models.ComputeWorkerStatus](../models/computeworkerstatus.md) | :heavy_check_mark:                                             | N/A                                                            |
| `lastHeartbeat`                                                | *number*                                                       | :heavy_minus_sign:                                             | Unix timestamp of last heartbeat                               |