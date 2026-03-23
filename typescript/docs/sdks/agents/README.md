# Agents

## Overview

DEPRECATED: Legacy agent MMR orchestration (use AgentDeploy, AgentMirror instead)

### Available Operations

* [~~lucidInitAgent~~](#lucidinitagent) - Initialize an AI agent :warning: **Deprecated**
* [~~lucidProcessAgentEpoch~~](#lucidprocessagentepoch) - Process an epoch for an agent :warning: **Deprecated**
* [~~lucidProcessAgentBatchEpochs~~](#lucidprocessagentbatchepochs) - Process multiple epochs in batch :warning: **Deprecated**
* [~~lucidGenerateAgentProof~~](#lucidgenerateagentproof) - Generate proof of contribution :warning: **Deprecated**
* [~~lucidGetAgentStats~~](#lucidgetagentstats) - Get agent statistics :warning: **Deprecated**
* [~~lucidGetAgentHistory~~](#lucidgetagenthistory) - Get agent MMR root history :warning: **Deprecated**
* [~~lucidGetAgentRoot~~](#lucidgetagentroot) - Get current MMR root for agent :warning: **Deprecated**
* [~~lucidVerifyAgentMmr~~](#lucidverifyagentmmr) - Verify MMR integrity for agent :warning: **Deprecated**
* [~~lucidListAgents~~](#lucidlistagents) - List all registered agents :warning: **Deprecated**
* [~~lucidPlanAgentWorkflow~~](#lucidplanagentworkflow) - Plan a workflow from a goal :warning: **Deprecated**
* [~~lucidAccomplishAgentGoal~~](#lucidaccomplishagentgoal) - Plan and execute a workflow in one call :warning: **Deprecated**
* [~~lucidPreviewAgentWorkflow~~](#lucidpreviewagentworkflow) - Preview a workflow without executing :warning: **Deprecated**
* [~~lucidGetAgentOrchestratorHistory~~](#lucidgetagentorchestratorhistory) - Get agent execution history for a tenant :warning: **Deprecated**
* [~~lucidCheckAgentOrchestratorHealth~~](#lucidcheckagentorchestratorhealth) - Agent orchestrator health check :warning: **Deprecated**
* [~~lucidExecuteAgentFlowspec~~](#lucidexecuteagentflowspec) - Execute a FlowSpec :warning: **Deprecated**
* [~~lucidValidateFlowspec~~](#lucidvalidateflowspec) - Validate a FlowSpec structure :warning: **Deprecated**
* [~~lucidGetPlannerInfo~~](#lucidgetplannerinfo) - Get planner service info :warning: **Deprecated**
* [~~lucidCheckExecutorHealth~~](#lucidcheckexecutorhealth) - Check executor health :warning: **Deprecated**
* [~~lucidGetExecutorDecision~~](#lucidgetexecutordecision) - Get executor decision for a FlowSpec :warning: **Deprecated**

## ~~lucidInitAgent~~

DEPRECATED. Initialize or load a legacy agent for MMR-based proof-of-contribution tracking. Use /v1/agents/deploy instead for new agent deployments.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_init_agent" method="post" path="/api/agents/init" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.lucidInitAgent({
    agentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLucidInitAgent } from "raijin-labs-lucid-ai/funcs/agentsLucidInitAgent.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await agentsLucidInitAgent(raijinLabsLucidAi, {
    agentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLucidInitAgent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AgentInitRequest](../../models/agentinitrequest.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidInitAgentResponse](../../models/operations/lucidinitagentresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## ~~lucidProcessAgentEpoch~~

DEPRECATED. Process an epoch of vectors for a legacy agent, computing the MMR root and optionally anchoring on-chain. Use /v1/agents/* endpoints instead.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_process_agent_epoch" method="post" path="/api/agents/epoch" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.lucidProcessAgentEpoch({
    agentId: "<id>",
    vectors: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLucidProcessAgentEpoch } from "raijin-labs-lucid-ai/funcs/agentsLucidProcessAgentEpoch.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await agentsLucidProcessAgentEpoch(raijinLabsLucidAi, {
    agentId: "<id>",
    vectors: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLucidProcessAgentEpoch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AgentEpochRequest](../../models/agentepochrequest.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidProcessAgentEpochResponse](../../models/operations/lucidprocessagentepochresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## ~~lucidProcessAgentBatchEpochs~~

DEPRECATED. Process multiple epochs in batch for one or more legacy agents. Returns per-epoch results with MMR roots and transaction signatures. Use /v1/agents/* endpoints instead.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_process_agent_batch_epochs" method="post" path="/api/agents/batch-epochs" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.lucidProcessAgentBatchEpochs({
    epochs: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLucidProcessAgentBatchEpochs } from "raijin-labs-lucid-ai/funcs/agentsLucidProcessAgentBatchEpochs.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await agentsLucidProcessAgentBatchEpochs(raijinLabsLucidAi, {
    epochs: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLucidProcessAgentBatchEpochs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AgentBatchEpochsRequest](../../models/agentbatchepochsrequest.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidProcessAgentBatchEpochsResponse](../../models/operations/lucidprocessagentbatchepochsresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## ~~lucidGenerateAgentProof~~

DEPRECATED. Generate a cryptographic MMR proof of contribution for a specific vector submitted by a legacy agent. Use /v1/agents/{passportId}/proof instead.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_generate_agent_proof" method="post" path="/api/agents/proof" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.lucidGenerateAgentProof({
    agentId: "<id>",
    vectorText: "<value>",
    epochNumber: 783802,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLucidGenerateAgentProof } from "raijin-labs-lucid-ai/funcs/agentsLucidGenerateAgentProof.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await agentsLucidGenerateAgentProof(raijinLabsLucidAi, {
    agentId: "<id>",
    vectorText: "<value>",
    epochNumber: 783802,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLucidGenerateAgentProof failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AgentProofRequest](../../models/agentproofrequest.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidGenerateAgentProofResponse](../../models/operations/lucidgenerateagentproofresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400, 404                             | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## ~~lucidGetAgentStats~~

DEPRECATED. Retrieve statistics and current status for a legacy agent including epoch count, total vectors, and current MMR root. Use /v1/agents/{passportId}/receipts instead.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_get_agent_stats" method="get" path="/api/agents/{agentId}/stats" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.lucidGetAgentStats({
    agentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLucidGetAgentStats } from "raijin-labs-lucid-ai/funcs/agentsLucidGetAgentStats.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await agentsLucidGetAgentStats(raijinLabsLucidAi, {
    agentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLucidGetAgentStats failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidGetAgentStatsRequest](../../models/operations/lucidgetagentstatsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidGetAgentStatsResponse](../../models/operations/lucidgetagentstatsresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 404                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## ~~lucidGetAgentHistory~~

DEPRECATED. Retrieve a legacy agent's MMR root history across all epochs, ordered chronologically. Use /v1/agents/{passportId}/epoch instead.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_get_agent_history" method="get" path="/api/agents/{agentId}/history" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.lucidGetAgentHistory({
    agentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLucidGetAgentHistory } from "raijin-labs-lucid-ai/funcs/agentsLucidGetAgentHistory.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await agentsLucidGetAgentHistory(raijinLabsLucidAi, {
    agentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLucidGetAgentHistory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidGetAgentHistoryRequest](../../models/operations/lucidgetagenthistoryrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidGetAgentHistoryResponse](../../models/operations/lucidgetagenthistoryresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## ~~lucidGetAgentRoot~~

DEPRECATED. Retrieve the current MMR root hash for a legacy agent. Use /v1/agents/{passportId}/proof instead for the modern equivalent.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_get_agent_root" method="get" path="/api/agents/{agentId}/root" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.lucidGetAgentRoot({
    agentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLucidGetAgentRoot } from "raijin-labs-lucid-ai/funcs/agentsLucidGetAgentRoot.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await agentsLucidGetAgentRoot(raijinLabsLucidAi, {
    agentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLucidGetAgentRoot failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidGetAgentRootRequest](../../models/operations/lucidgetagentrootrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidGetAgentRootResponse](../../models/operations/lucidgetagentrootresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 404                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## ~~lucidVerifyAgentMmr~~

DEPRECATED. Verify the MMR integrity for a legacy agent by recomputing the tree and comparing roots. Use /v1/receipts/{receipt_id}/verify for receipt-level verification.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_verify_agent_mmr" method="get" path="/api/agents/{agentId}/verify" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.lucidVerifyAgentMmr({
    agentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLucidVerifyAgentMmr } from "raijin-labs-lucid-ai/funcs/agentsLucidVerifyAgentMmr.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await agentsLucidVerifyAgentMmr(raijinLabsLucidAi, {
    agentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLucidVerifyAgentMmr failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidVerifyAgentMmrRequest](../../models/operations/lucidverifyagentmmrrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidVerifyAgentMmrResponse](../../models/operations/lucidverifyagentmmrresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## ~~lucidListAgents~~

DEPRECATED. List all legacy registered agents with their statistics. Use GET /v1/agents (lucid_list_agent_passports) for the modern passport-based agent listing.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_list_agents" method="get" path="/api/agents" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.lucidListAgents();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLucidListAgents } from "raijin-labs-lucid-ai/funcs/agentsLucidListAgents.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await agentsLucidListAgents(raijinLabsLucidAi);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLucidListAgents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidListAgentsResponse](../../models/operations/lucidlistagentsresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## ~~lucidPlanAgentWorkflow~~

DEPRECATED. Plan a multi-step workflow from a natural language goal using the CrewAI planner. Returns a FlowSpec, reasoning explanation, and complexity estimate.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_plan_agent_workflow" method="post" path="/api/agents/plan" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.lucidPlanAgentWorkflow({
    goal: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLucidPlanAgentWorkflow } from "raijin-labs-lucid-ai/funcs/agentsLucidPlanAgentWorkflow.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await agentsLucidPlanAgentWorkflow(raijinLabsLucidAi, {
    goal: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLucidPlanAgentWorkflow failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AgentPlanRequest](../../models/agentplanrequest.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidPlanAgentWorkflowResponse](../../models/operations/lucidplanagentworkflowresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400                                  | application/json                     |
| errors.ErrorResponse                 | 500, 503                             | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## ~~lucidAccomplishAgentGoal~~

DEPRECATED. Plan and execute a complete workflow in a single call via the Agent Orchestrator. Combines planning and execution with automatic executor selection.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_accomplish_agent_goal" method="post" path="/api/agents/accomplish" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.lucidAccomplishAgentGoal({
    goal: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLucidAccomplishAgentGoal } from "raijin-labs-lucid-ai/funcs/agentsLucidAccomplishAgentGoal.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await agentsLucidAccomplishAgentGoal(raijinLabsLucidAi, {
    goal: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLucidAccomplishAgentGoal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AgentAccomplishRequest](../../models/agentaccomplishrequest.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidAccomplishAgentGoalResponse](../../models/operations/lucidaccomplishagentgoalresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## ~~lucidPreviewAgentWorkflow~~

DEPRECATED. Generate a workflow preview (dry run) from a natural language goal without executing it. Returns the FlowSpec and reasoning for review before committing.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_preview_agent_workflow" method="post" path="/api/agents/accomplish/preview" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.lucidPreviewAgentWorkflow({
    goal: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLucidPreviewAgentWorkflow } from "raijin-labs-lucid-ai/funcs/agentsLucidPreviewAgentWorkflow.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await agentsLucidPreviewAgentWorkflow(raijinLabsLucidAi, {
    goal: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLucidPreviewAgentWorkflow failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidPreviewAgentWorkflowRequest](../../models/operations/lucidpreviewagentworkflowrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidPreviewAgentWorkflowResponse](../../models/operations/lucidpreviewagentworkflowresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## ~~lucidGetAgentOrchestratorHistory~~

DEPRECATED. Retrieve the execution history for a specific tenant, including workflow results, timing, and status. Supports an optional limit parameter.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_get_agent_orchestrator_history" method="get" path="/api/agents/history/{tenantId}" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.lucidGetAgentOrchestratorHistory({
    tenantId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLucidGetAgentOrchestratorHistory } from "raijin-labs-lucid-ai/funcs/agentsLucidGetAgentOrchestratorHistory.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await agentsLucidGetAgentOrchestratorHistory(raijinLabsLucidAi, {
    tenantId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLucidGetAgentOrchestratorHistory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidGetAgentOrchestratorHistoryRequest](../../models/operations/lucidgetagentorchestratorhistoryrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidGetAgentOrchestratorHistoryResponse](../../models/operations/lucidgetagentorchestratorhistoryresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## ~~lucidCheckAgentOrchestratorHealth~~

DEPRECATED. Check the health of all agent orchestrator sub-services (planner, executor router, n8n, LangGraph). Returns per-service status.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_check_agent_orchestrator_health" method="get" path="/api/agents/orchestrator/health" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.lucidCheckAgentOrchestratorHealth();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLucidCheckAgentOrchestratorHealth } from "raijin-labs-lucid-ai/funcs/agentsLucidCheckAgentOrchestratorHealth.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await agentsLucidCheckAgentOrchestratorHealth(raijinLabsLucidAi);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLucidCheckAgentOrchestratorHealth failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidCheckAgentOrchestratorHealthResponse](../../models/operations/lucidcheckagentorchestratorhealthresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## ~~lucidExecuteAgentFlowspec~~

DEPRECATED. Execute a FlowSpec workflow with automatic executor selection (n8n or LangGraph). Requires a tenant context with tenantId for execution tracking.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_execute_agent_flowspec" method="post" path="/api/agents/execute" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.lucidExecuteAgentFlowspec({
    flowspec: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    context: {
      tenantId: "<id>",
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
import { agentsLucidExecuteAgentFlowspec } from "raijin-labs-lucid-ai/funcs/agentsLucidExecuteAgentFlowspec.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await agentsLucidExecuteAgentFlowspec(raijinLabsLucidAi, {
    flowspec: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    context: {
      tenantId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLucidExecuteAgentFlowspec failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidExecuteAgentFlowspecRequest](../../models/operations/lucidexecuteagentflowspecrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidExecuteAgentFlowspecResponse](../../models/operations/lucidexecuteagentflowspecresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## ~~lucidValidateFlowspec~~

DEPRECATED. Validate a FlowSpec structure for correctness without executing it. Returns validation results including any errors or warnings found in the spec.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_validate_flowspec" method="post" path="/api/agents/validate" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.lucidValidateFlowspec({

  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLucidValidateFlowspec } from "raijin-labs-lucid-ai/funcs/agentsLucidValidateFlowspec.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await agentsLucidValidateFlowspec(raijinLabsLucidAi, {
  
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLucidValidateFlowspec failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [{ [k: string]: any }](../../models/.md)                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidValidateFlowspecResponse](../../models/operations/lucidvalidateflowspecresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## ~~lucidGetPlannerInfo~~

DEPRECATED. Retrieve the agent planner service information including status, available planning backends, and configuration details.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_get_planner_info" method="get" path="/api/agents/planner/info" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.lucidGetPlannerInfo();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLucidGetPlannerInfo } from "raijin-labs-lucid-ai/funcs/agentsLucidGetPlannerInfo.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await agentsLucidGetPlannerInfo(raijinLabsLucidAi);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLucidGetPlannerInfo failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidGetPlannerInfoResponse](../../models/operations/lucidgetplannerinforesponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## ~~lucidCheckExecutorHealth~~

DEPRECATED. Check the health of all executor backends (n8n, LangGraph), returning a boolean status for each. Used for operational monitoring.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_check_executor_health" method="get" path="/api/agents/executor/health" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.lucidCheckExecutorHealth();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { agentsLucidCheckExecutorHealth } from "raijin-labs-lucid-ai/funcs/agentsLucidCheckExecutorHealth.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await agentsLucidCheckExecutorHealth(raijinLabsLucidAi);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLucidCheckExecutorHealth failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidCheckExecutorHealthResponse](../../models/operations/lucidcheckexecutorhealthresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## ~~lucidGetExecutorDecision~~

DEPRECATED. Get the recommended executor for a FlowSpec without actually running it. Returns the executor choice (n8n or langgraph) and the reasoning behind the decision.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_get_executor_decision" method="post" path="/api/agents/executor/decision" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.lucidGetExecutorDecision({
    flowspec: {

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
import { agentsLucidGetExecutorDecision } from "raijin-labs-lucid-ai/funcs/agentsLucidGetExecutorDecision.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await agentsLucidGetExecutorDecision(raijinLabsLucidAi, {
    flowspec: {
  
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("agentsLucidGetExecutorDecision failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidGetExecutorDecisionRequest](../../models/operations/lucidgetexecutordecisionrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidGetExecutorDecisionResponse](../../models/operations/lucidgetexecutordecisionresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |