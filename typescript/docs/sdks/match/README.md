# Match

## Overview

Policy-based compute matching and route planning

### Available Operations

* [explain](#explain) - Evaluate policy against compute/model meta
* [compute](#compute) - Match compute for model
* [planRoute](#planroute) - Plan a route (match + resolve endpoint)

## explain

Evaluate a policy against compute and model metadata, returning a detailed explanation of whether the compute node is allowed and the reasons for the decision. Useful for debugging policy mismatches.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_match_explain" method="post" path="/v1/match/explain" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.match.explain({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { matchExplain } from "raijin-labs-lucid-ai/funcs/matchExplain.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await matchExplain(raijinLabsLucidAi, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("matchExplain failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidMatchExplainRequest](../../models/operations/lucidmatchexplainrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidMatchExplainResponse](../../models/operations/lucidmatchexplainresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## compute

x402-gated with dynamic pricing when X402_ENABLED=true.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_match" method="post" path="/v1/match" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.match.compute({
    body: {
      modelMeta: {
        schemaVersion: "1.0",
        modelPassportId: "ppt_model_7xK9mQ2v",
        format: "safetensors",
        runtimeRecommended: "vllm",
        contextLength: 32768,
        requirements: {
          minVramGb: 16,
        },
      },
      policy: {
        policyVersion: "1.0",
        allowRegions: [
          "us-east-1",
        ],
        latency: {
          p95MsBudget: 500,
        },
      },
      computeCatalog: [
        {
          schemaVersion: "1.0",
          computePassportId: "ppt_compute_Xn5vR2kJ",
          providerType: "cloud",
          regions: [
            "us-east-1",
          ],
          hardware: {
            gpu: "NVIDIA-A100-40GB",
            vramGb: 40,
          },
          runtimes: [],
          endpoints: {
            inferenceUrl: "https://ironclad-puritan.biz/",
          },
        },
      ],
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
import { matchCompute } from "raijin-labs-lucid-ai/funcs/matchCompute.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await matchCompute(raijinLabsLucidAi, {
    body: {
      modelMeta: {
        schemaVersion: "1.0",
        modelPassportId: "ppt_model_7xK9mQ2v",
        format: "safetensors",
        runtimeRecommended: "vllm",
        contextLength: 32768,
        requirements: {
          minVramGb: 16,
        },
      },
      policy: {
        policyVersion: "1.0",
        allowRegions: [
          "us-east-1",
        ],
        latency: {
          p95MsBudget: 500,
        },
      },
      computeCatalog: [
        {
          schemaVersion: "1.0",
          computePassportId: "ppt_compute_Xn5vR2kJ",
          providerType: "cloud",
          regions: [
            "us-east-1",
          ],
          hardware: {
            gpu: "NVIDIA-A100-40GB",
            vramGb: 40,
          },
          runtimes: [
            {
              name: "tensorrt",
            },
          ],
          endpoints: {
            inferenceUrl: "https://ironclad-puritan.biz/",
          },
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("matchCompute failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidMatchRequest](../../models/operations/lucidmatchrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidMatchResponse](../../models/operations/lucidmatchresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.X402PaymentRequiredError      | 402                                  | application/json                     |
| errors.ErrorResponse                 | 422                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## planRoute

Perform compute matching and resolve an executable inference endpoint in a single call. Returns the matched compute node, model, endpoint URL, runtime, policy hash, and fallback options.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_route" method="post" path="/v1/route" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.match.planRoute({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { matchPlanRoute } from "raijin-labs-lucid-ai/funcs/matchPlanRoute.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await matchPlanRoute(raijinLabsLucidAi, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("matchPlanRoute failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidRouteRequest](../../models/operations/lucidrouterequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidRouteResponse](../../models/operations/lucidrouteresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 422                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |