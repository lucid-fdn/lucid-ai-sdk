# Agents.Launch

## Overview

### Available Operations

* [lucidLaunchAgent](#lucidlaunchagent) - Launch an agent in the Lucid verified network
* [lucidDeployBlueGreen](#luciddeploybluegreen) - Initiate blue-green deployment
* [lucidPromoteBlue](#lucidpromoteblue) - Promote blue to primary
* [lucidRollbackDeployment](#lucidrollbackdeployment) - Rollback to previous deployment
* [lucidGetBlueDeployment](#lucidgetbluedeployment) - Get blue deployment status
* [lucidCancelBlueDeployment](#lucidcancelbluedeployment) - Cancel blue deployment

## lucidLaunchAgent

Launch an agent via one of two modes:
- **image**: Deploy a pre-built Docker image (Path A — Bring Your Own Image).
- **base-runtime**: Deploy a pre-configured base runtime with model, prompt, and optional tools (Path B — No-Code).

Both modes create a passport, deploy to the target provider, and inject Lucid env vars.
Returns the passport_id, deployment_id, and deployment URL.


### Example Usage: base_runtime_mode

<!-- UsageSnippet language="typescript" operationID="lucid_launch_agent" method="post" path="/v1/agents/launch" example="base_runtime_mode" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await raijinLabsLucidAi.agents.launch.lucidLaunchAgent({
    mode: "base-runtime",
    model: "gpt-4o",
    prompt: "You are a helpful trading assistant",
    target: "docker",
    owner: "7xK9mQ2vNbPfYkRd3JhEzV1LnWqA8tUcGp4SyDfH5Bo",
    name: "trading-assistant",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLaunchLucidLaunchAgent } from "raijin-labs-lucid-ai/funcs/agentsLaunchLucidLaunchAgent.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await agentsLaunchLucidLaunchAgent(raijinLabsLucidAi, {
    mode: "base-runtime",
    model: "gpt-4o",
    prompt: "You are a helpful trading assistant",
    target: "docker",
    owner: "7xK9mQ2vNbPfYkRd3JhEzV1LnWqA8tUcGp4SyDfH5Bo",
    name: "trading-assistant",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLaunchLucidLaunchAgent failed:", res.error);
  }
}

run();
```
### Example Usage: image_mode

<!-- UsageSnippet language="typescript" operationID="lucid_launch_agent" method="post" path="/v1/agents/launch" example="image_mode" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await raijinLabsLucidAi.agents.launch.lucidLaunchAgent({
    mode: "image",
    image: "ghcr.io/myorg/my-agent:latest",
    target: "railway",
    owner: "7xK9mQ2vNbPfYkRd3JhEzV1LnWqA8tUcGp4SyDfH5Bo",
    name: "my-trading-agent",
    verification: "full",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLaunchLucidLaunchAgent } from "raijin-labs-lucid-ai/funcs/agentsLaunchLucidLaunchAgent.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await agentsLaunchLucidLaunchAgent(raijinLabsLucidAi, {
    mode: "image",
    image: "ghcr.io/myorg/my-agent:latest",
    target: "railway",
    owner: "7xK9mQ2vNbPfYkRd3JhEzV1LnWqA8tUcGp4SyDfH5Bo",
    name: "my-trading-agent",
    verification: "full",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLaunchLucidLaunchAgent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidLaunchAgentRequest](../../models/operations/lucidlaunchagentrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LaunchResponse](../../models/launchresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidDeployBlueGreen

Start a blue-green rollout for an agent. Deploys a new version into the
blue slot while the current primary continues serving traffic. Use promote
or rollback to finalize.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_deploy_blue_green" method="post" path="/v1/agents/{passportId}/deploy/blue-green" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await raijinLabsLucidAi.agents.launch.lucidDeployBlueGreen({
    passportId: "<id>",
    body: {
      image: "https://picsum.photos/seed/x0OR83PrbJ/659/3733",
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
import { agentsLaunchLucidDeployBlueGreen } from "raijin-labs-lucid-ai/funcs/agentsLaunchLucidDeployBlueGreen.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await agentsLaunchLucidDeployBlueGreen(raijinLabsLucidAi, {
    passportId: "<id>",
    body: {
      image: "https://picsum.photos/seed/x0OR83PrbJ/659/3733",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLaunchLucidDeployBlueGreen failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidDeployBlueGreenRequest](../../models/operations/luciddeploybluegreenrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidDeployBlueGreenResponse](../../models/operations/luciddeploybluegreenresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400, 404                             | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidPromoteBlue

Promote the blue deployment to primary. The current primary is terminated
and the blue slot becomes the new primary. Fails if no healthy blue
deployment exists.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_promote_blue" method="post" path="/v1/agents/{passportId}/promote" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await raijinLabsLucidAi.agents.launch.lucidPromoteBlue({
    passportId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLaunchLucidPromoteBlue } from "raijin-labs-lucid-ai/funcs/agentsLaunchLucidPromoteBlue.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await agentsLaunchLucidPromoteBlue(raijinLabsLucidAi, {
    passportId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLaunchLucidPromoteBlue failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidPromoteBlueRequest](../../models/operations/lucidpromotebluerequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidPromoteBlueResponse](../../models/operations/lucidpromoteblueresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400, 404                             | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidRollbackDeployment

Rollback to the previous primary deployment. Terminates the current
primary and restores the prior version. Fails if no rollback target exists.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_rollback_deployment" method="post" path="/v1/agents/{passportId}/rollback" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await raijinLabsLucidAi.agents.launch.lucidRollbackDeployment({
    passportId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLaunchLucidRollbackDeployment } from "raijin-labs-lucid-ai/funcs/agentsLaunchLucidRollbackDeployment.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await agentsLaunchLucidRollbackDeployment(raijinLabsLucidAi, {
    passportId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLaunchLucidRollbackDeployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidRollbackDeploymentRequest](../../models/operations/lucidrollbackdeploymentrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidRollbackDeploymentResponse](../../models/operations/lucidrollbackdeploymentresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400, 404                             | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidGetBlueDeployment

Retrieve the current blue-slot deployment status for an agent, including
health state, URL, and promotion eligibility.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_get_blue_deployment" method="get" path="/v1/agents/{passportId}/blue" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.launch.lucidGetBlueDeployment({
    passportId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLaunchLucidGetBlueDeployment } from "raijin-labs-lucid-ai/funcs/agentsLaunchLucidGetBlueDeployment.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await agentsLaunchLucidGetBlueDeployment(raijinLabsLucidAi, {
    passportId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLaunchLucidGetBlueDeployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidGetBlueDeploymentRequest](../../models/operations/lucidgetbluedeploymentrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidGetBlueDeploymentResponse](../../models/operations/lucidgetbluedeploymentresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 404                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidCancelBlueDeployment

Cancel and terminate the blue-slot deployment without affecting the
current primary. Useful when the blue deployment fails health checks
or is no longer needed.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_cancel_blue_deployment" method="post" path="/v1/agents/{passportId}/blue/cancel" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await raijinLabsLucidAi.agents.launch.lucidCancelBlueDeployment({
    passportId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLaunchLucidCancelBlueDeployment } from "raijin-labs-lucid-ai/funcs/agentsLaunchLucidCancelBlueDeployment.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await agentsLaunchLucidCancelBlueDeployment(raijinLabsLucidAi, {
    passportId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLaunchLucidCancelBlueDeployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidCancelBlueDeploymentRequest](../../models/operations/lucidcancelbluedeploymentrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidCancelBlueDeploymentResponse](../../models/operations/lucidcancelbluedeploymentresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 404                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |