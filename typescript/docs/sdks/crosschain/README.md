# CrossChain

## Overview

EVM multi-chain operations — chain status, ERC-8004 registration, cross-chain reputation and payouts

### Available Operations

* [lucidCrossChainValidate](#lucidcrosschainvalidate) - Validate a receipt cross-chain
* [lucidCrossChainRoute](#lucidcrosschainroute) - Chain-aware compute routing

## lucidCrossChainValidate

Validate a receipt locally and optionally submit the validation on-chain
via the ERC-8004 Validation Registry.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_cross_chain_validate" method="post" path="/v2/validate" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.crossChain.lucidCrossChainValidate({
    receiptHash: "a3f2b8c1d4e5f6789012345678901234567890abcdef1234567890abcdef1234",
    runId: "run_abc123def456",
    signature: "3045022100...",
    chainId: "base",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { crossChainLucidCrossChainValidate } from "raijin-labs-lucid-ai/funcs/crossChainLucidCrossChainValidate.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await crossChainLucidCrossChainValidate(raijinLabsLucidAi, {
    receiptHash: "a3f2b8c1d4e5f6789012345678901234567890abcdef1234567890abcdef1234",
    runId: "run_abc123def456",
    signature: "3045022100...",
    chainId: "base",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crossChainLucidCrossChainValidate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidCrossChainValidateRequest](../../models/operations/lucidcrosschainvalidaterequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidCrossChainValidateResponse](../../models/operations/lucidcrosschainvalidateresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidCrossChainRoute

Route with chain_id parameter for chain-aware compute matching.
Extends the standard /v1/match with cross-chain context.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_cross_chain_route" method="post" path="/v2/route" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.crossChain.lucidCrossChainRoute({
    modelMeta: {
      "key": "<value>",
      "key1": "<value>",
    },
    policy: {
      "key": "<value>",
    },
    computeCatalog: [
      {
        "key": "<value>",
      },
      {

      },
      {

      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { crossChainLucidCrossChainRoute } from "raijin-labs-lucid-ai/funcs/crossChainLucidCrossChainRoute.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await crossChainLucidCrossChainRoute(raijinLabsLucidAi, {
    modelMeta: {
      "key": "<value>",
      "key1": "<value>",
    },
    policy: {
      "key": "<value>",
    },
    computeCatalog: [
      {
        "key": "<value>",
      },
      {
  
      },
      {
  
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crossChainLucidCrossChainRoute failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidCrossChainRouteRequest](../../models/operations/lucidcrosschainrouterequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidCrossChainRouteResponse](../../models/operations/lucidcrosschainrouteresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |