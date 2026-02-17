# raijin-labs-lucid-ai

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *raijin-labs-lucid-ai* API.

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=raijin-labs-lucid-ai&utm_campaign=typescript)
[![License: MIT](https://img.shields.io/badge/LICENSE_//_MIT-3b5bdb?style=for-the-badge&labelColor=eff6ff)](https://opensource.org/licenses/MIT)


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/raijin-labs-gc4/lucid). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

LucidLayer API: LucidLayer Offchain API.

This OpenAPI spec is the source of truth for the actual backend routes.
It is used to generate SDK clients via Speakeasy.

Route groups:
- `/v1/*` — Passports, Match, Run, Receipts, Epochs, Payouts, Compute
- `/health/*` — System health and dependency checks
- `/api/agents/*` — AI Agent MMR, Planner, and Orchestrator
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [raijin-labs-lucid-ai](#raijin-labs-lucid-ai)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.passports.create({
    type: "dataset",
    owner: "<value>",
    metadata: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Agents](docs/sdks/agents/README.md)

* [initAgent](docs/sdks/agents/README.md#initagent) - Initialize an AI agent
* [processAgentEpoch](docs/sdks/agents/README.md#processagentepoch) - Process an epoch for an agent
* [processAgentBatchEpochs](docs/sdks/agents/README.md#processagentbatchepochs) - Process multiple epochs in batch
* [generateAgentProof](docs/sdks/agents/README.md#generateagentproof) - Generate proof of contribution
* [getAgentStats](docs/sdks/agents/README.md#getagentstats) - Get agent statistics
* [getAgentHistory](docs/sdks/agents/README.md#getagenthistory) - Get agent MMR root history
* [getAgentRoot](docs/sdks/agents/README.md#getagentroot) - Get current MMR root for agent
* [verifyAgentMmr](docs/sdks/agents/README.md#verifyagentmmr) - Verify MMR integrity for agent
* [listAgents](docs/sdks/agents/README.md#listagents) - List all registered agents
* [planAgentWorkflow](docs/sdks/agents/README.md#planagentworkflow) - Plan a workflow from a goal
* [accomplishAgentGoal](docs/sdks/agents/README.md#accomplishagentgoal) - Plan and execute a workflow in one call
* [previewAgentWorkflow](docs/sdks/agents/README.md#previewagentworkflow) - Preview a workflow without executing
* [getAgentOrchestratorHistory](docs/sdks/agents/README.md#getagentorchestratorhistory) - Get agent execution history for a tenant
* [checkAgentOrchestratorHealth](docs/sdks/agents/README.md#checkagentorchestratorhealth) - Agent orchestrator health check
* [executeAgentFlowspec](docs/sdks/agents/README.md#executeagentflowspec) - Execute a FlowSpec
* [validateFlowspec](docs/sdks/agents/README.md#validateflowspec) - Validate a FlowSpec structure
* [getPlannerInfo](docs/sdks/agents/README.md#getplannerinfo) - Get planner service info
* [checkExecutorHealth](docs/sdks/agents/README.md#checkexecutorhealth) - Check executor health
* [getExecutorDecision](docs/sdks/agents/README.md#getexecutordecision) - Get executor decision for a FlowSpec

### [Compute](docs/sdks/compute/README.md)

* [searchCompute](docs/sdks/compute/README.md#searchcompute) - Search compute passports
* [heartbeat](docs/sdks/compute/README.md#heartbeat) - Submit compute node heartbeat
* [getNodeHealth](docs/sdks/compute/README.md#getnodehealth) - Get compute node health

### [Epochs](docs/sdks/epochs/README.md)

* [getCurrent](docs/sdks/epochs/README.md#getcurrent) - Get current epoch
* [list](docs/sdks/epochs/README.md#list) - List epochs
* [create](docs/sdks/epochs/README.md#create) - Create epoch
* [get](docs/sdks/epochs/README.md#get) - Get epoch
* [retry](docs/sdks/epochs/README.md#retry) - Retry failed epoch
* [verify](docs/sdks/epochs/README.md#verify) - Verify epoch anchor
* [getTransaction](docs/sdks/epochs/README.md#gettransaction) - Get epoch anchoring transaction
* [commitRoot](docs/sdks/epochs/README.md#commitroot) - Commit epoch root
* [commitRootsBatch](docs/sdks/epochs/README.md#commitrootsbatch) - Commit multiple epoch roots
* [getAnchoringHealth](docs/sdks/epochs/README.md#getanchoringhealth) - Anchoring service health
* [listReady](docs/sdks/epochs/README.md#listready) - Get epochs ready for finalization
* [getStats](docs/sdks/epochs/README.md#getstats) - Epoch statistics

### [Health](docs/sdks/health/README.md)

* [checkSystemHealth](docs/sdks/health/README.md#checksystemhealth) - Overall system health
* [checkLiveness](docs/sdks/health/README.md#checkliveness) - Liveness probe
* [checkReadiness](docs/sdks/health/README.md#checkreadiness) - Readiness probe
* [checkDatabaseHealth](docs/sdks/health/README.md#checkdatabasehealth) - Database health check
* [checkRedisHealth](docs/sdks/health/README.md#checkredishealth) - Redis health check
* [checkNangoHealth](docs/sdks/health/README.md#checknangohealth) - Nango service health check
* [getDetailedHealth](docs/sdks/health/README.md#getdetailedhealth) - Detailed health with statistics

### [Match](docs/sdks/match/README.md)

* [explain](docs/sdks/match/README.md#explain) - Evaluate policy against compute/model meta
* [compute](docs/sdks/match/README.md#compute) - Match compute for model
* [planRoute](docs/sdks/match/README.md#planroute) - Plan a route (match + resolve endpoint)

### [Passports](docs/sdks/passports/README.md)

* [create](docs/sdks/passports/README.md#create) - Create a passport
* [list](docs/sdks/passports/README.md#list) - List passports
* [get](docs/sdks/passports/README.md#get) - Get a passport
* [update](docs/sdks/passports/README.md#update) - Update a passport
* [delete](docs/sdks/passports/README.md#delete) - Delete a passport (soft delete)
* [sync](docs/sdks/passports/README.md#sync) - Trigger on-chain sync for a passport
* [listPendingSync](docs/sdks/passports/README.md#listpendingsync) - Get passports pending sync
* [getStats](docs/sdks/passports/README.md#getstats) - Passport statistics
* [searchModels](docs/sdks/passports/README.md#searchmodels) - Search model passports
* [lucidListTools](docs/sdks/passports/README.md#lucidlisttools) - List tool passports
* [lucidListDatasets](docs/sdks/passports/README.md#lucidlistdatasets) - List dataset passports
* [lucidListAgentPassports](docs/sdks/passports/README.md#lucidlistagentpassports) - List agent passports

### [Payouts](docs/sdks/payouts/README.md)

* [calculate](docs/sdks/payouts/README.md#calculate) - Calculate payout split
* [createFromReceipt](docs/sdks/payouts/README.md#createfromreceipt) - Create payout from receipt token data
* [get](docs/sdks/payouts/README.md#get) - Get payout by run_id
* [verify](docs/sdks/payouts/README.md#verify) - Verify payout split

### [Receipts](docs/sdks/receipts/README.md)

* [create](docs/sdks/receipts/README.md#create) - Create a receipt
* [get](docs/sdks/receipts/README.md#get) - Get a receipt
* [verify](docs/sdks/receipts/README.md#verify) - Verify a receipt (hash + signature + inclusion)
* [getProof](docs/sdks/receipts/README.md#getproof) - Get inclusion proof for receipt
* [lucidVerifyReceiptByHash](docs/sdks/receipts/README.md#lucidverifyreceiptbyhash) - Verify receipt by hash with inclusion proof and epoch info
* [getMmrRoot](docs/sdks/receipts/README.md#getmmrroot) - Get current MMR root
* [getSignerPubKey](docs/sdks/receipts/README.md#getsignerpubkey) - Get orchestrator signing public key

### [Run](docs/sdks/run/README.md)

* [inference](docs/sdks/run/README.md#inference) - Run inference (optionally streaming via SSE)
* [chatCompletions](docs/sdks/run/README.md#chatcompletions) - OpenAI-compatible chat completions

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`agentsAccomplishAgentGoal`](docs/sdks/agents/README.md#accomplishagentgoal) - Plan and execute a workflow in one call
- [`agentsCheckAgentOrchestratorHealth`](docs/sdks/agents/README.md#checkagentorchestratorhealth) - Agent orchestrator health check
- [`agentsCheckExecutorHealth`](docs/sdks/agents/README.md#checkexecutorhealth) - Check executor health
- [`agentsExecuteAgentFlowspec`](docs/sdks/agents/README.md#executeagentflowspec) - Execute a FlowSpec
- [`agentsGenerateAgentProof`](docs/sdks/agents/README.md#generateagentproof) - Generate proof of contribution
- [`agentsGetAgentHistory`](docs/sdks/agents/README.md#getagenthistory) - Get agent MMR root history
- [`agentsGetAgentOrchestratorHistory`](docs/sdks/agents/README.md#getagentorchestratorhistory) - Get agent execution history for a tenant
- [`agentsGetAgentRoot`](docs/sdks/agents/README.md#getagentroot) - Get current MMR root for agent
- [`agentsGetAgentStats`](docs/sdks/agents/README.md#getagentstats) - Get agent statistics
- [`agentsGetExecutorDecision`](docs/sdks/agents/README.md#getexecutordecision) - Get executor decision for a FlowSpec
- [`agentsGetPlannerInfo`](docs/sdks/agents/README.md#getplannerinfo) - Get planner service info
- [`agentsInitAgent`](docs/sdks/agents/README.md#initagent) - Initialize an AI agent
- [`agentsListAgents`](docs/sdks/agents/README.md#listagents) - List all registered agents
- [`agentsPlanAgentWorkflow`](docs/sdks/agents/README.md#planagentworkflow) - Plan a workflow from a goal
- [`agentsPreviewAgentWorkflow`](docs/sdks/agents/README.md#previewagentworkflow) - Preview a workflow without executing
- [`agentsProcessAgentBatchEpochs`](docs/sdks/agents/README.md#processagentbatchepochs) - Process multiple epochs in batch
- [`agentsProcessAgentEpoch`](docs/sdks/agents/README.md#processagentepoch) - Process an epoch for an agent
- [`agentsValidateFlowspec`](docs/sdks/agents/README.md#validateflowspec) - Validate a FlowSpec structure
- [`agentsVerifyAgentMmr`](docs/sdks/agents/README.md#verifyagentmmr) - Verify MMR integrity for agent
- [`computeGetNodeHealth`](docs/sdks/compute/README.md#getnodehealth) - Get compute node health
- [`computeHeartbeat`](docs/sdks/compute/README.md#heartbeat) - Submit compute node heartbeat
- [`computeSearchCompute`](docs/sdks/compute/README.md#searchcompute) - Search compute passports
- [`epochsCommitRoot`](docs/sdks/epochs/README.md#commitroot) - Commit epoch root
- [`epochsCommitRootsBatch`](docs/sdks/epochs/README.md#commitrootsbatch) - Commit multiple epoch roots
- [`epochsCreate`](docs/sdks/epochs/README.md#create) - Create epoch
- [`epochsGet`](docs/sdks/epochs/README.md#get) - Get epoch
- [`epochsGetAnchoringHealth`](docs/sdks/epochs/README.md#getanchoringhealth) - Anchoring service health
- [`epochsGetCurrent`](docs/sdks/epochs/README.md#getcurrent) - Get current epoch
- [`epochsGetStats`](docs/sdks/epochs/README.md#getstats) - Epoch statistics
- [`epochsGetTransaction`](docs/sdks/epochs/README.md#gettransaction) - Get epoch anchoring transaction
- [`epochsList`](docs/sdks/epochs/README.md#list) - List epochs
- [`epochsListReady`](docs/sdks/epochs/README.md#listready) - Get epochs ready for finalization
- [`epochsRetry`](docs/sdks/epochs/README.md#retry) - Retry failed epoch
- [`epochsVerify`](docs/sdks/epochs/README.md#verify) - Verify epoch anchor
- [`healthCheckDatabaseHealth`](docs/sdks/health/README.md#checkdatabasehealth) - Database health check
- [`healthCheckLiveness`](docs/sdks/health/README.md#checkliveness) - Liveness probe
- [`healthCheckNangoHealth`](docs/sdks/health/README.md#checknangohealth) - Nango service health check
- [`healthCheckReadiness`](docs/sdks/health/README.md#checkreadiness) - Readiness probe
- [`healthCheckRedisHealth`](docs/sdks/health/README.md#checkredishealth) - Redis health check
- [`healthCheckSystemHealth`](docs/sdks/health/README.md#checksystemhealth) - Overall system health
- [`healthGetDetailedHealth`](docs/sdks/health/README.md#getdetailedhealth) - Detailed health with statistics
- [`matchCompute`](docs/sdks/match/README.md#compute) - Match compute for model
- [`matchExplain`](docs/sdks/match/README.md#explain) - Evaluate policy against compute/model meta
- [`matchPlanRoute`](docs/sdks/match/README.md#planroute) - Plan a route (match + resolve endpoint)
- [`passportsCreate`](docs/sdks/passports/README.md#create) - Create a passport
- [`passportsDelete`](docs/sdks/passports/README.md#delete) - Delete a passport (soft delete)
- [`passportsGet`](docs/sdks/passports/README.md#get) - Get a passport
- [`passportsGetStats`](docs/sdks/passports/README.md#getstats) - Passport statistics
- [`passportsList`](docs/sdks/passports/README.md#list) - List passports
- [`passportsListPendingSync`](docs/sdks/passports/README.md#listpendingsync) - Get passports pending sync
- [`passportsLucidListAgentPassports`](docs/sdks/passports/README.md#lucidlistagentpassports) - List agent passports
- [`passportsLucidListDatasets`](docs/sdks/passports/README.md#lucidlistdatasets) - List dataset passports
- [`passportsLucidListTools`](docs/sdks/passports/README.md#lucidlisttools) - List tool passports
- [`passportsSearchModels`](docs/sdks/passports/README.md#searchmodels) - Search model passports
- [`passportsSync`](docs/sdks/passports/README.md#sync) - Trigger on-chain sync for a passport
- [`passportsUpdate`](docs/sdks/passports/README.md#update) - Update a passport
- [`payoutsCalculate`](docs/sdks/payouts/README.md#calculate) - Calculate payout split
- [`payoutsCreateFromReceipt`](docs/sdks/payouts/README.md#createfromreceipt) - Create payout from receipt token data
- [`payoutsGet`](docs/sdks/payouts/README.md#get) - Get payout by run_id
- [`payoutsVerify`](docs/sdks/payouts/README.md#verify) - Verify payout split
- [`receiptsCreate`](docs/sdks/receipts/README.md#create) - Create a receipt
- [`receiptsGet`](docs/sdks/receipts/README.md#get) - Get a receipt
- [`receiptsGetMmrRoot`](docs/sdks/receipts/README.md#getmmrroot) - Get current MMR root
- [`receiptsGetProof`](docs/sdks/receipts/README.md#getproof) - Get inclusion proof for receipt
- [`receiptsGetSignerPubKey`](docs/sdks/receipts/README.md#getsignerpubkey) - Get orchestrator signing public key
- [`receiptsLucidVerifyReceiptByHash`](docs/sdks/receipts/README.md#lucidverifyreceiptbyhash) - Verify receipt by hash with inclusion proof and epoch info
- [`receiptsVerify`](docs/sdks/receipts/README.md#verify) - Verify a receipt (hash + signature + inclusion)
- [`runChatCompletions`](docs/sdks/run/README.md#chatcompletions) - OpenAI-compatible chat completions
- [`runInference`](docs/sdks/run/README.md#inference) - Run inference (optionally streaming via SSE)

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.passports.create({
    type: "dataset",
    owner: "<value>",
    metadata: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
});

async function run() {
  const result = await raijinLabsLucidAi.passports.create({
    type: "dataset",
    owner: "<value>",
    metadata: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`RaijinLabsLucidAiError`](./src/models/errors/raijinlabslucidaierror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";
import * as errors from "raijin-labs-lucid-ai/models/errors";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  try {
    const result = await raijinLabsLucidAi.passports.create({
      type: "dataset",
      owner: "<value>",
      metadata: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.RaijinLabsLucidAiError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorResponse) {
        console.log(error.data$.success); // boolean
        console.log(error.data$.error); // string
        console.log(error.data$.message); // string
        console.log(error.data$.errorCode); // string
        console.log(error.data$.details); // any
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`RaijinLabsLucidAiError`](./src/models/errors/raijinlabslucidaierror.ts): The base class for HTTP error responses.
  * [`ErrorResponse`](./src/models/errors/errorresponse.ts): Bad Request. *

<details><summary>Less common errors (9)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`RaijinLabsLucidAiError`](./src/models/errors/raijinlabslucidaierror.ts)**:
* [`HealthCheckResultError`](./src/models/errors/healthcheckresulterror.ts): Healthy. Status code `503`. Applicable to 3 of 69 methods.*
* [`SystemHealthError`](./src/models/errors/systemhealtherror.ts): Healthy. Status code `503`. Applicable to 1 of 69 methods.*
* [`ServiceUnavailableError`](./src/models/errors/serviceunavailableerror.ts): Not ready. Status code `503`. Applicable to 1 of 69 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi({
  serverURL: "https://api.lucid.foundation",
});

async function run() {
  const result = await raijinLabsLucidAi.passports.create({
    type: "dataset",
    owner: "<value>",
    metadata: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  });

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";
import { HTTPClient } from "raijin-labs-lucid-ai/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new RaijinLabsLucidAi({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const sdk = new RaijinLabsLucidAi({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `RAIJINLABSLUCIDAI_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=raijin-labs-lucid-ai&utm_campaign=typescript)
