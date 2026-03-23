# Webhooks

## Overview

Deployment webhook receivers — normalizes provider-specific callbacks into deployment events

### Available Operations

* [lucidReceiveDeploymentWebhook](#lucidreceivedeploymentwebhook) - Receive deployment webhook

## lucidReceiveDeploymentWebhook

Receive and normalize provider-specific deployment webhooks (Railway, Akash,
Phala, io.net, Nosana). The provider path parameter selects the appropriate
normalizer. Webhook payloads are converted into deployment events.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_receive_deployment_webhook" method="post" path="/v1/webhooks/{provider}" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.webhooks.lucidReceiveDeploymentWebhook({
    provider: "railway",
    body: {
      "key": "<value>",
      "key1": "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { webhooksLucidReceiveDeploymentWebhook } from "raijin-labs-lucid-ai/funcs/webhooksLucidReceiveDeploymentWebhook.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await webhooksLucidReceiveDeploymentWebhook(raijinLabsLucidAi, {
    provider: "railway",
    body: {
      "key": "<value>",
      "key1": "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksLucidReceiveDeploymentWebhook failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidReceiveDeploymentWebhookRequest](../../models/operations/lucidreceivedeploymentwebhookrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidReceiveDeploymentWebhookResponse](../../models/operations/lucidreceivedeploymentwebhookresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |