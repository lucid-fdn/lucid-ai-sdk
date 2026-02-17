# raijin-labs-lucid-ai

Developer-friendly & type-safe TypeScript SDK for the [LucidLayer API](https://www.lucid.foundation/).

[![npm](https://img.shields.io/npm/v/raijin-labs-lucid-ai)](https://www.npmjs.com/package/raijin-labs-lucid-ai)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](https://github.com/raijinlabs/lucid-ai-sdk/blob/main/LICENSE)

## Summary

LucidLayer API: LucidLayer Offchain API.

Route groups:
- `/v1/*` — Passports, Match, Run, Receipts, Epochs, Payouts, Compute
- `/health/*` — System health and dependency checks
- `/api/agents/*` — AI Agent MMR, Planner, and Orchestrator

## Installation

```bash
npm install raijin-labs-lucid-ai
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.

## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).

## Quick Start

```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const sdk = new RaijinLabsLucidAi({
  serverURL: "https://api.lucid.foundation",
});

// Check system health
const health = await sdk.health.checkSystemHealth();
console.log("Status:", health.status);
```

## Usage Examples

### Passport CRUD

Create, list, update, and delete passports for models, compute nodes, tools, datasets, and agents.

```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const sdk = new RaijinLabsLucidAi({
  serverURL: "https://api.lucid.foundation",
});

const OWNER = "YOUR_WALLET_ADDRESS";

// Create a model passport
const model = await sdk.passports.create({
  type: "model",
  owner: OWNER,
  name: "my-llm-7b",
  description: "7B parameter language model",
  version: "1.0.0",
  tags: ["nlp", "inference"],
  metadata: {
    schema_version: "1.0",
    model_passport_id: "mdl-my-llm-7b",
    format: "gguf",
    runtime_recommended: "vllm",
    name: "my-llm-7b",
    context_length: 4096,
    requirements: { min_vram_gb: 24 },
  },
});
console.log("Model passport:", model.passportId);

// Create a compute passport
const compute = await sdk.passports.create({
  type: "compute",
  owner: OWNER,
  name: "gpu-node-us-east",
  version: "1.0.0",
  tags: ["gpu", "a100"],
  metadata: {
    schema_version: "1.0",
    compute_passport_id: "cmp-gpu-node-us-east",
    provider_type: "cloud",
    regions: ["us-east-1"],
    hardware: { gpu: "NVIDIA-A100-80GB", vram_gb: 80 },
    runtimes: [{ name: "vllm", version: "0.4.0", image: "vllm/vllm:0.4.0" }],
    endpoints: { inference_url: "http://my-node:8080/v1" },
  },
});
console.log("Compute passport:", compute.passportId);

// List passports
const list = await sdk.passports.list({ owner: OWNER, perPage: 10 });
console.log("Total:", list.pagination.total);

// Update a passport
await sdk.passports.update({
  passportId: model.passportId,
  xOwnerAddress: OWNER,
  body: { description: "Updated description", version: "1.0.1" },
});

// Delete a passport (soft delete)
await sdk.passports.delete({
  passportId: model.passportId,
  xOwnerAddress: OWNER,
});
```

### Match Compute to a Model

Evaluate whether a compute node satisfies a deployment policy for a given model.

```typescript
const match = await sdk.match.explain({
  policy: {
    policyVersion: "1.0",
    allowRegions: ["us-east-1", "eu-west-1"],
    residencyRequired: false,
    attestation: {
      attestationRequired: false,
      requireCcOn: false,
      fallbackAllowed: true,
    },
    latency: { p95MsBudget: 3000, hardTimeoutMs: 10000 },
    cost: { maxPricePer1kTokensUsd: 0.05, spotOnly: false },
    privacy: { storeInputs: false, redactPii: true },
  },
  computeMeta: {
    schema_version: "1.0",
    compute_passport_id: "cmp-gpu-node-us-east",
    provider_type: "cloud",
    regions: ["us-east-1"],
    hardware: { gpu: "NVIDIA-A100-80GB", vram_gb: 80 },
    runtimes: [{ name: "vllm", version: "0.4.0", image: "vllm/vllm:0.4.0" }],
    endpoints: { inference_url: "http://my-node:8080/v1" },
    pricing: { price_per_1k_tokens_estimate: 0.02 },
    network: { p95_ms_estimate: 1500 },
    capabilities: { supports_attestation: false },
  },
  modelMeta: {
    schema_version: "1.0",
    model_passport_id: "mdl-my-llm-7b",
    format: "gguf",
    runtime_recommended: "vllm",
    requirements: { min_vram_gb: 24 },
  },
});

console.log("Allowed:", match.allowed);
console.log("Reasons:", match.reasons);
console.log("Policy hash:", match.policyHash);
```

### Receipts & Proofs

Create an inference receipt and verify it with a cryptographic inclusion proof.

```typescript
// Create a receipt
const created = await sdk.receipts.create({
  modelPassportId: "mdl-my-llm-7b",
  computePassportId: "cmp-gpu-node-us-east",
  policyHash: match.policyHash,
  runtime: "vllm",
  tokensIn: 128,
  tokensOut: 256,
  ttftMs: 120,
  totalLatencyMs: 850,
  traceId: `trace-${Date.now()}`,
  executionMode: "standard",
});
console.log("Receipt ID:", created.receipt.runId);

// Verify the receipt
const verification = await sdk.receipts.verify({
  receiptId: created.receipt.runId,
});
console.log("Valid:", verification.isValid);

// Get the inclusion proof
const proof = await sdk.receipts.getProof({
  receiptId: created.receipt.runId,
});
console.log("Proof:", proof.proof);

// Get the current MMR root
const mmrRoot = await sdk.receipts.getMmrRoot();
console.log("MMR root:", mmrRoot.root);
```

### Agent MMR (Proof of Contribution)

Initialize agents, process contribution vectors into epochs, and generate cryptographic proofs.

```typescript
const agentId = "my-agent";

// Initialize an agent
await sdk.agents.initAgent({ agentId });

// Process an epoch with contribution vectors
const epoch = await sdk.agents.processAgentEpoch({
  agentId,
  epochNumber: 1,
  vectors: [
    "Inference completed with 256 tokens",
    "Model loaded in 1.2 seconds",
    "Batch of 32 requests processed",
  ],
});
console.log("Epoch root:", epoch.root);

// Generate a proof for a specific contribution
const proof = await sdk.agents.generateAgentProof({
  agentId,
  epochNumber: 1,
  vectorText: "Inference completed with 256 tokens",
});
console.log("Proof valid:", proof.valid);

// Get agent stats
const stats = await sdk.agents.getAgentStats({ agentId });
console.log("Total vectors:", stats.totalVectors);

// Verify MMR integrity
const verification = await sdk.agents.verifyAgentMmr({ agentId });
console.log("MMR valid:", verification.valid);

// List all agents
const agents = await sdk.agents.listAgents();
console.log("Agents:", agents.agents);
```

### Payouts

Calculate and verify payout splits between compute, model, and orchestrator wallets.

```typescript
// Calculate a payout split
const payout = await sdk.payouts.calculate({
  runId: `run-${Date.now()}`,
  totalAmountLamports: 1_000_000,
  computeWallet: "COMPUTE_WALLET_ADDRESS",
  modelWallet: "MODEL_WALLET_ADDRESS",
  orchestratorWallet: "ORCHESTRATOR_WALLET_ADDRESS",
});
console.log("Payout recipients:", payout.recipients);

// Create payout from receipt token data
const fromReceipt = await sdk.payouts.createFromReceipt({
  runId: `run-${Date.now()}`,
  tokensIn: 128,
  tokensOut: 256,
  pricePer1kTokensLamports: 5000,
  computeWallet: "COMPUTE_WALLET_ADDRESS",
});
console.log("Total:", fromReceipt.totalAmount);

// Verify a payout
const verified = await sdk.payouts.verify({ runId: payout.runId });
console.log("Payout valid:", verified.valid);
```

### Run Inference

Run inference through LucidLayer or use the OpenAI-compatible chat completions endpoint.

```typescript
// OpenAI-compatible chat completions
const chat = await sdk.run.chatCompletions({
  model: "my-model",
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "Hello!" },
  ],
  temperature: 0.7,
  maxTokens: 256,
});
console.log("Response:", chat.choices[0].message.content);
```

### Epochs

Manage on-chain anchoring epochs.

```typescript
// Get current epoch
const current = await sdk.epochs.getCurrent({});
console.log("Current epoch:", current.epochId);

// List epochs
const epochs = await sdk.epochs.list({});
console.log("Epochs:", epochs.epochs);

// Get epoch stats
const stats = await sdk.epochs.getStats();
console.log("Stats:", stats);
```

For a complete end-to-end example, see [`examples/full-walkthrough.ts`](./examples/full-walkthrough.ts).

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

Some of the endpoints in this SDK support retries. If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API. However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const sdk = new RaijinLabsLucidAi();

const result = await sdk.passports.create({
  type: "model",
  owner: "YOUR_WALLET_ADDRESS",
  metadata: { schema_version: "1.0" },
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
```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const sdk = new RaijinLabsLucidAi({
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

const sdk = new RaijinLabsLucidAi();

try {
  const result = await sdk.passports.create({
    type: "model",
    owner: "YOUR_WALLET_ADDRESS",
    metadata: { schema_version: "1.0" },
  });
  console.log(result);
} catch (error) {
  if (error instanceof errors.RaijinLabsLucidAiError) {
    console.log(error.message);
    console.log(error.statusCode);
    console.log(error.body);

    if (error instanceof errors.ErrorResponse) {
      console.log(error.data$.error);
      console.log(error.data$.message);
    }
  }
}
```

### Error Classes
**Primary errors:**
* [`RaijinLabsLucidAiError`](./src/models/errors/raijinlabslucidaierror.ts): The base class for HTTP error responses.
  * [`ErrorResponse`](./src/models/errors/errorresponse.ts): Bad Request.

<details><summary>Less common errors (9)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.

**Inherit from [`RaijinLabsLucidAiError`](./src/models/errors/raijinlabslucidaierror.ts)**:
* [`HealthCheckResultError`](./src/models/errors/healthcheckresulterror.ts): Healthy. Status code `503`. Applicable to 3 of 69 methods.
* [`SystemHealthError`](./src/models/errors/systemhealtherror.ts): Healthy. Status code `503`. Applicable to 1 of 69 methods.
* [`ServiceUnavailableError`](./src/models/errors/serviceunavailableerror.ts): Not ready. Status code `503`. Applicable to 1 of 69 methods.
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance:

```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const sdk = new RaijinLabsLucidAi({
  serverURL: "https://api.lucid.foundation",
});
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

The following example shows how to use the `"beforeRequest"` hook to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";
import { HTTPClient } from "raijin-labs-lucid-ai/lib/http";

const httpClient = new HTTPClient({
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

const sdk = new RaijinLabsLucidAi({ httpClient });
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

## Development

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation.
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=raijin-labs-lucid-ai&utm_campaign=typescript)
