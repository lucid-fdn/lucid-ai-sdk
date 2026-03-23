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

<!-- Start Summary [summary] -->
## Summary

LucidLayer API: LucidLayer API — the verifiable AI execution layer.

Blockchain-anchored infrastructure giving AI assets (models, agents, tools, compute, datasets)
provable identity, cryptographic receipts, and reputation backed by real traffic data.

**Open-source and self-hostable.** Run your own instance with `docker compose up`
or `npm start` (port 3001). The SDK defaults to `http://localhost:3001` — no cloud
account required.

This OpenAPI spec is the source of truth for all backend routes and is used to
generate SDK clients via [Speakeasy](https://speakeasy.com).

## Version Strategy

| Prefix | Status | Description |
|--------|--------|-------------|
| `/v1/*` | **Stable** | Core API — passports, receipts, epochs, payouts, inference, agent deployment. Production-ready and covered by semver guarantees. |
| `/v2/*` | **Stable** | Cross-chain and reputation APIs — EVM multi-chain, ERC-8004, pluggable reputation. Production-ready. |
| `/api/agents/*` | **Deprecated** | Legacy agent MMR orchestration. Retained for SDK backward compatibility only. Migrate to `/v1/agents/*` (AgentDeploy, AgentMirror). Will be removed in a future major version. |
| `/health/*` | **Stable** | System health probes — not versioned (infrastructure endpoints). |

### Migration Path (legacy `/api/agents/*` to `/v1/agents/*`)

1. Replace `init_agent` + `process_agent_epoch` with `lucid_deploy_agent` (one-click deployment).
2. Replace `generate_agent_proof` with `lucid_get_agent_proof` / `lucid_get_agent_run_proof` (AgentMirror).
3. Replace `get_agent_stats` / `get_agent_history` with `lucid_get_agent_receipts` + `lucid_get_agent_epoch`.
4. All legacy operationIds will be removed when the next major version ships.

## Route Groups

- `/v1/*` — Passports, Match, Run, Receipts, Epochs, Payouts, Compute
- `/v1/agents/*` — Agent Deployment, Wallet, Revenue, Mirror (receipts/proofs)
- `/v1/a2a/*` — A2A Protocol (Agent-to-Agent)
- `/v1/config/*` — Payment configuration and grants
- `/v2/chains/*` — Cross-chain status and routing
- `/v2/agents/*` — ERC-8004 agent registration and reputation
- `/v2/reputation/*` — Pluggable reputation scoring, cross-chain aggregation
- `/v2/payouts/*` — On-chain payout execution
- `/health/*` — System health and dependency checks
- `/api/agents/*` — Legacy agent MMR orchestration (deprecated)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [raijin-labs-lucid-ai](#raijin-labs-lucid-ai)
  * [Installation](#installation)
  * [Requirements](#requirements)
  * [Quick Start](#quick-start)
  * [Usage Examples](#usage-examples)
  * [Version Strategy](#version-strategy)
  * [Route Groups](#route-groups)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements-1)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Pagination](#pagination)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
  * [Development](#development)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add git+https://gitpkg.now.sh/raijinlabs/lucid-ai-sdk/typescript.git?subdir=typescript
```

### PNPM

```bash
pnpm add https://gitpkg.now.sh/raijinlabs/lucid-ai-sdk/typescript#path:typescript
```

### Bun

```bash
bun add https://gitpkg.now.sh/raijinlabs/lucid-ai-sdk/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/raijinlabs/lucid-ai-sdk/typescript
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
  const result = await raijinLabsLucidAi.run.chatCompletions({
    body: {
      model: "mistral-7b-instruct",
      messages: [
        {
          role: "system",
          content: "You are a helpful AI assistant.",
        },
        {
          role: "user",
          content: "Explain how MMR proofs work in one paragraph.",
        },
      ],
      maxTokens: 256,
      temperature: 0.7,
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      | Environment Variable            |
| ------------ | ---- | ----------- | ------------------------------- |
| `bearerAuth` | http | HTTP Bearer | `RAIJINLABSLUCIDAI_BEARER_AUTH` |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await raijinLabsLucidAi.passports.create({
    type: "model",
    owner: "7xK9mQ2vNbPfYkRd3JhEzV1LnWqA8tUcGp4SyDfH5Bo",
    metadata: {
      "schema_version": "1.0",
      "model_passport_id": "ppt_model_7xK9mQ2v",
      "format": "safetensors",
      "runtime_recommended": "vllm",
      "context_length": 32768,
      "hf": {
        "repo_id": "mistralai/Mistral-7B-Instruct-v0.3",
      },
    },
    name: "mistral-7b-instruct",
    description: "Mistral 7B Instruct fine-tuned for chat",
    version: "1.0.0",
    tags: [
      "llm",
      "chat",
      "instruct",
    ],
  });

  console.log(result);
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.agents.mirror.lucidGetAgentReceipts({
    adminAuth: process.env["RAIJINLABSLUCIDAI_ADMIN_AUTH"] ?? "",
  }, {
    passportId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [A2A](docs/sdks/a2a/README.md)

* [lucidGetA2aAgentCard](docs/sdks/a2a/README.md#lucidgeta2aagentcard) - Get A2A Agent Card
* [lucidSendA2aTask](docs/sdks/a2a/README.md#lucidsenda2atask) - Send task to A2A agent
* [lucidDiscoverA2aAgent](docs/sdks/a2a/README.md#luciddiscovera2aagent) - Discover an external A2A agent
* [lucidGetA2aTask](docs/sdks/a2a/README.md#lucidgeta2atask) - Get A2A task status
* [lucidDeleteA2aTask](docs/sdks/a2a/README.md#luciddeletea2atask) - Delete an A2A task
* [lucidListA2aTasks](docs/sdks/a2a/README.md#lucidlista2atasks) - List A2A tasks for an agent

### [Agents](docs/sdks/agents/README.md)

* [~~lucidInitAgent~~](docs/sdks/agents/README.md#lucidinitagent) - Initialize an AI agent :warning: **Deprecated**
* [~~lucidProcessAgentEpoch~~](docs/sdks/agents/README.md#lucidprocessagentepoch) - Process an epoch for an agent :warning: **Deprecated**
* [~~lucidProcessAgentBatchEpochs~~](docs/sdks/agents/README.md#lucidprocessagentbatchepochs) - Process multiple epochs in batch :warning: **Deprecated**
* [~~lucidGenerateAgentProof~~](docs/sdks/agents/README.md#lucidgenerateagentproof) - Generate proof of contribution :warning: **Deprecated**
* [~~lucidGetAgentStats~~](docs/sdks/agents/README.md#lucidgetagentstats) - Get agent statistics :warning: **Deprecated**
* [~~lucidGetAgentHistory~~](docs/sdks/agents/README.md#lucidgetagenthistory) - Get agent MMR root history :warning: **Deprecated**
* [~~lucidGetAgentRoot~~](docs/sdks/agents/README.md#lucidgetagentroot) - Get current MMR root for agent :warning: **Deprecated**
* [~~lucidVerifyAgentMmr~~](docs/sdks/agents/README.md#lucidverifyagentmmr) - Verify MMR integrity for agent :warning: **Deprecated**
* [~~lucidListAgents~~](docs/sdks/agents/README.md#lucidlistagents) - List all registered agents :warning: **Deprecated**
* [~~lucidPlanAgentWorkflow~~](docs/sdks/agents/README.md#lucidplanagentworkflow) - Plan a workflow from a goal :warning: **Deprecated**
* [~~lucidAccomplishAgentGoal~~](docs/sdks/agents/README.md#lucidaccomplishagentgoal) - Plan and execute a workflow in one call :warning: **Deprecated**
* [~~lucidPreviewAgentWorkflow~~](docs/sdks/agents/README.md#lucidpreviewagentworkflow) - Preview a workflow without executing :warning: **Deprecated**
* [~~lucidGetAgentOrchestratorHistory~~](docs/sdks/agents/README.md#lucidgetagentorchestratorhistory) - Get agent execution history for a tenant :warning: **Deprecated**
* [~~lucidCheckAgentOrchestratorHealth~~](docs/sdks/agents/README.md#lucidcheckagentorchestratorhealth) - Agent orchestrator health check :warning: **Deprecated**
* [~~lucidExecuteAgentFlowspec~~](docs/sdks/agents/README.md#lucidexecuteagentflowspec) - Execute a FlowSpec :warning: **Deprecated**
* [~~lucidValidateFlowspec~~](docs/sdks/agents/README.md#lucidvalidateflowspec) - Validate a FlowSpec structure :warning: **Deprecated**
* [~~lucidGetPlannerInfo~~](docs/sdks/agents/README.md#lucidgetplannerinfo) - Get planner service info :warning: **Deprecated**
* [~~lucidCheckExecutorHealth~~](docs/sdks/agents/README.md#lucidcheckexecutorhealth) - Check executor health :warning: **Deprecated**
* [~~lucidGetExecutorDecision~~](docs/sdks/agents/README.md#lucidgetexecutordecision) - Get executor decision for a FlowSpec :warning: **Deprecated**

### [Agents.Crosschain](docs/sdks/agentscrosschain/README.md)

* [lucidRegisterAgentOnChain](docs/sdks/agentscrosschain/README.md#lucidregisteragentonchain) - Register agent on ERC-8004
* [lucidGetAgentCrossChainReputation](docs/sdks/agentscrosschain/README.md#lucidgetagentcrosschainreputation) - Cross-chain reputation query

### [Agents.Deploy](docs/sdks/deploy/README.md)

* [lucidDeployAgent](docs/sdks/deploy/README.md#luciddeployagent) - One-click agent deployment
* [lucidPreviewAgent](docs/sdks/deploy/README.md#lucidpreviewagent) - Generate agent code preview
* [lucidListAgentDeployments](docs/sdks/deploy/README.md#lucidlistagentdeployments) - List all agent deployments
* [lucidGetAgentCapabilities](docs/sdks/deploy/README.md#lucidgetagentcapabilities) - List available runtime adapters and deploy targets
* [lucidGetAgentDeployStatus](docs/sdks/deploy/README.md#lucidgetagentdeploystatus) - Get agent deployment status
* [lucidGetAgentDeployLogs](docs/sdks/deploy/README.md#lucidgetagentdeploylogs) - Get agent deployment logs
* [lucidTerminateAgent](docs/sdks/deploy/README.md#lucidterminateagent) - Terminate a deployed agent
* [lucidGetDeploymentEvents](docs/sdks/deploy/README.md#lucidgetdeploymentevents) - Get deployment event history

### [Agents.Launch](docs/sdks/launch/README.md)

* [lucidLaunchAgent](docs/sdks/launch/README.md#lucidlaunchagent) - Launch an agent in the Lucid verified network
* [lucidDeployBlueGreen](docs/sdks/launch/README.md#luciddeploybluegreen) - Initiate blue-green deployment
* [lucidPromoteBlue](docs/sdks/launch/README.md#lucidpromoteblue) - Promote blue to primary
* [lucidRollbackDeployment](docs/sdks/launch/README.md#lucidrollbackdeployment) - Rollback to previous deployment
* [lucidGetBlueDeployment](docs/sdks/launch/README.md#lucidgetbluedeployment) - Get blue deployment status
* [lucidCancelBlueDeployment](docs/sdks/launch/README.md#lucidcancelbluedeployment) - Cancel blue deployment

### [Agents.Mirror](docs/sdks/mirror/README.md)

* [lucidGetAgentReceipts](docs/sdks/mirror/README.md#lucidgetagentreceipts) - Get agent receipts
* [lucidGetAgentEpoch](docs/sdks/mirror/README.md#lucidgetagentepoch) - Get agent current epoch
* [lucidGetAgentProof](docs/sdks/mirror/README.md#lucidgetagentproof) - Get agent latest proof
* [lucidGetAgentRunProof](docs/sdks/mirror/README.md#lucidgetagentrunproof) - Get proof for specific run

### [Agents.Revenue](docs/sdks/revenue/README.md)

* [lucidGetAgentRevenue](docs/sdks/revenue/README.md#lucidgetagentrevenue) - Get agent revenue pool status
* [lucidTriggerAgentAirdrop](docs/sdks/revenue/README.md#lucidtriggeragentairdrop) - Trigger revenue airdrop to share token holders
* [lucidGetAgentRevenueHistory](docs/sdks/revenue/README.md#lucidgetagentrevenuehistory) - Get agent payout history

### [Agents.Wallet](docs/sdks/wallet/README.md)

* [lucidGetAgentWalletBalance](docs/sdks/wallet/README.md#lucidgetagentwalletbalance) - Get agent wallet balance
* [lucidAgentWalletSend](docs/sdks/wallet/README.md#lucidagentwalletsend) - Send from agent wallet
* [lucidSetAgentWalletLimits](docs/sdks/wallet/README.md#lucidsetagentwalletlimits) - Set agent wallet spending limits
* [lucidGetAgentWalletPolicy](docs/sdks/wallet/README.md#lucidgetagentwalletpolicy) - Get agent wallet policy

### [Anchoring](docs/sdks/anchoring/README.md)

* [lucidListAnchors](docs/sdks/anchoring/README.md#lucidlistanchors) - Query anchor records
* [lucidGetAnchor](docs/sdks/anchoring/README.md#lucidgetanchor) - Get a single anchor record
* [lucidGetAnchorLineage](docs/sdks/anchoring/README.md#lucidgetanchorlineage) - Get anchor parent chain
* [lucidVerifyAnchor](docs/sdks/anchoring/README.md#lucidverifyanchor) - Verify anchor CID against DePIN provider
* [lucidLookupAnchorByCid](docs/sdks/anchoring/README.md#lucidlookupanchorbycid) - Reverse lookup anchor by CID

### [Chains](docs/sdks/chains/README.md)

* [lucidListChains](docs/sdks/chains/README.md#lucidlistchains) - List supported chains
* [lucidGetChainStatus](docs/sdks/chains/README.md#lucidgetchainstatus) - Get chain status

### [Compute](docs/sdks/compute/README.md)

* [searchCompute](docs/sdks/compute/README.md#searchcompute) - Search compute passports
* [heartbeat](docs/sdks/compute/README.md#heartbeat) - Submit compute node heartbeat
* [getNodeHealth](docs/sdks/compute/README.md#getnodehealth) - Get compute node health

### [CrossChain](docs/sdks/crosschain/README.md)

* [lucidCrossChainValidate](docs/sdks/crosschain/README.md#lucidcrosschainvalidate) - Validate a receipt cross-chain
* [lucidCrossChainRoute](docs/sdks/crosschain/README.md#lucidcrosschainroute) - Chain-aware compute routing

### [Disputes](docs/sdks/disputes/README.md)

* [lucidOpenDispute](docs/sdks/disputes/README.md#lucidopendispute) - Open a dispute on an escrow
* [lucidSubmitEvidence](docs/sdks/disputes/README.md#lucidsubmitevidence) - Submit evidence for a dispute
* [lucidResolveDispute](docs/sdks/disputes/README.md#lucidresolvedispute) - Resolve a dispute
* [lucidAppealDispute](docs/sdks/disputes/README.md#lucidappealdispute) - Appeal a dispute decision
* [lucidGetDispute](docs/sdks/disputes/README.md#lucidgetdispute) - Get dispute details

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

### [Escrow](docs/sdks/escrow/README.md)

* [lucidCreateEscrow](docs/sdks/escrow/README.md#lucidcreateescrow) - Create a time-locked escrow
* [lucidReleaseEscrow](docs/sdks/escrow/README.md#lucidreleaseescrow) - Release escrow with verified receipt
* [lucidDisputeEscrow](docs/sdks/escrow/README.md#luciddisputeescrow) - Dispute an escrow
* [lucidGetEscrow](docs/sdks/escrow/README.md#lucidgetescrow) - Get escrow details

### [Health](docs/sdks/health/README.md)

* [lucidCheckSystemHealth](docs/sdks/health/README.md#lucidchecksystemhealth) - Overall system health
* [lucidCheckLiveness](docs/sdks/health/README.md#lucidcheckliveness) - Liveness probe
* [lucidCheckReadiness](docs/sdks/health/README.md#lucidcheckreadiness) - Readiness probe
* [lucidCheckDatabaseHealth](docs/sdks/health/README.md#lucidcheckdatabasehealth) - Database health check
* [lucidCheckRedisHealth](docs/sdks/health/README.md#lucidcheckredishealth) - Redis health check
* [lucidCheckNangoHealth](docs/sdks/health/README.md#lucidchecknangohealth) - Nango service health check
* [lucidGetDetailedHealth](docs/sdks/health/README.md#lucidgetdetailedhealth) - Detailed health with statistics

### [Identity](docs/sdks/identity/README.md)

* [lucidLinkIdentity](docs/sdks/identity/README.md#lucidlinkidentity) - Link addresses cross-chain
* [lucidResolveIdentity](docs/sdks/identity/README.md#lucidresolveidentity) - Resolve cross-chain identity
* [lucidGetIdentity](docs/sdks/identity/README.md#lucidgetidentity) - Resolve identity (GET)
* [lucidGetIdentityChains](docs/sdks/identity/README.md#lucidgetidentitychains) - Get linked chains for identity
* [lucidUnlinkIdentity](docs/sdks/identity/README.md#lucidunlinkidentity) - Unlink a cross-chain address

### [Match](docs/sdks/match/README.md)

* [explain](docs/sdks/match/README.md#explain) - Evaluate policy against compute/model meta
* [compute](docs/sdks/match/README.md#compute) - Match compute for model
* [planRoute](docs/sdks/match/README.md#planroute) - Plan a route (match + resolve endpoint)

### [Memory](docs/sdks/memory/README.md)

* [lucidAddEpisodicMemory](docs/sdks/memory/README.md#lucidaddepisodicmemory) - Store episodic memory
* [lucidAddSemanticMemory](docs/sdks/memory/README.md#lucidaddsemanticmemory) - Store semantic memory (extracted fact)
* [lucidAddProceduralMemory](docs/sdks/memory/README.md#lucidaddproceduralmemory) - Store procedural memory (learned rule)
* [lucidAddEntityMemory](docs/sdks/memory/README.md#lucidaddentitymemory) - Store entity memory (knowledge graph node)
* [lucidAddTrustWeightedMemory](docs/sdks/memory/README.md#lucidaddtrustweightedmemory) - Store trust-weighted memory (cross-agent trust)
* [lucidAddTemporalMemory](docs/sdks/memory/README.md#lucidaddtemporalmemory) - Store temporal memory (time-bounded fact)
* [lucidRecallMemory](docs/sdks/memory/README.md#lucidrecallmemory) - Recall relevant memories via two-stage retrieval
* [lucidCompactMemory](docs/sdks/memory/README.md#lucidcompactmemory) - Trigger memory compaction
* [lucidMemoryHealth](docs/sdks/memory/README.md#lucidmemoryhealth) - Memory store health and diagnostics
* [lucidStartMemorySession](docs/sdks/memory/README.md#lucidstartmemorysession) - Start a new conversation session
* [lucidListMemorySessions](docs/sdks/memory/README.md#lucidlistmemorysessions) - List sessions for an agent
* [lucidVerifyMemoryChain](docs/sdks/memory/README.md#lucidverifymemorychain) - Verify memory hash chain integrity
* [lucidGetMemoryEntry](docs/sdks/memory/README.md#lucidgetmemoryentry) - Read a single memory entry
* [lucidListMemoryEntries](docs/sdks/memory/README.md#lucidlistmemoryentries) - List memory entries with filters
* [lucidCloseMemorySession](docs/sdks/memory/README.md#lucidclosememorysession) - Close a memory session
* [lucidGetMemorySessionContext](docs/sdks/memory/README.md#lucidgetmemorysessioncontext) - Get session context
* [lucidGetMemoryProvenanceChain](docs/sdks/memory/README.md#lucidgetmemoryprovenancechain) - Get provenance chain
* [lucidGetMemoryEntryProvenance](docs/sdks/memory/README.md#lucidgetmemoryentryprovenance) - Single entry provenance
* [lucidGetMemoryStats](docs/sdks/memory/README.md#lucidgetmemorystats) - Memory diagnostics

### [Modules](docs/sdks/modules/README.md)

* [lucidInstallModule](docs/sdks/modules/README.md#lucidinstallmodule) - Install module on smart account
* [lucidUninstallModule](docs/sdks/modules/README.md#luciduninstallmodule) - Uninstall module from smart account
* [lucidConfigurePolicyModule](docs/sdks/modules/README.md#lucidconfigurepolicymodule) - Configure policy module
* [lucidConfigurePayoutModule](docs/sdks/modules/README.md#lucidconfigurepayoutmodule) - Configure payout module
* [lucidListModules](docs/sdks/modules/README.md#lucidlistmodules) - List installed modules

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
* [lucidUpdatePassportPricing](docs/sdks/passports/README.md#lucidupdatepassportpricing) - Update passport pricing
* [lucidRetryPassportProjections](docs/sdks/passports/README.md#lucidretrypassportprojections) - Retry failed identity projections
* [lucidUpdatePassportEndpoints](docs/sdks/passports/README.md#lucidupdatepassportendpoints) - Update passport endpoint URLs

### [Paymaster](docs/sdks/paymaster/README.md)

* [lucidSponsorUserOp](docs/sdks/paymaster/README.md#lucidsponsoruserop) - Sponsor a UserOp with $LUCID
* [lucidGetPaymasterRate](docs/sdks/paymaster/README.md#lucidgetpaymasterrate) - Get LUCID/ETH exchange rate
* [lucidEstimateGasLucid](docs/sdks/paymaster/README.md#lucidestimategaslucid) - Estimate gas cost in $LUCID

### [Payments](docs/sdks/payments/README.md)

* [lucidGetAssetPricing](docs/sdks/payments/README.md#lucidgetassetpricing) - Get asset pricing
* [lucidSetAssetPricing](docs/sdks/payments/README.md#lucidsetassetpricing) - Set asset pricing
* [lucidDeleteAssetPricing](docs/sdks/payments/README.md#luciddeleteassetpricing) - Remove asset pricing
* [lucidGetAssetRevenue](docs/sdks/payments/README.md#lucidgetassetrevenue) - Get asset revenue summary
* [lucidWithdrawAssetRevenue](docs/sdks/payments/README.md#lucidwithdrawassetrevenue) - Withdraw asset revenue
* [lucidGetPaymentConfig](docs/sdks/payments/README.md#lucidgetpaymentconfig) - Get x402 payment configuration
* [lucidSetDefaultFacilitator](docs/sdks/payments/README.md#lucidsetdefaultfacilitator) - Set default payment facilitator
* [lucidGetSupportedChains](docs/sdks/payments/README.md#lucidgetsupportedchains) - List supported payment chains
* [lucidSubscribeAsset](docs/sdks/payments/README.md#lucidsubscribeasset) - Subscribe to asset access
* [lucidCreatePaymentGrant](docs/sdks/payments/README.md#lucidcreatepaymentgrant) - Issue a signed payment grant

### [Payouts](docs/sdks/payouts/README.md)

* [calculate](docs/sdks/payouts/README.md#calculate) - Calculate payout split
* [createFromReceipt](docs/sdks/payouts/README.md#createfromreceipt) - Create payout from receipt token data
* [get](docs/sdks/payouts/README.md#get) - Get payout by run_id
* [verify](docs/sdks/payouts/README.md#verify) - Verify payout split

### [Payouts.Crosschain](docs/sdks/payoutscrosschain/README.md)

* [lucidExecutePayoutOnChain](docs/sdks/payoutscrosschain/README.md#lucidexecutepayoutonchain) - Execute payout on-chain
* [lucidGetPayoutExecution](docs/sdks/payoutscrosschain/README.md#lucidgetpayoutexecution) - Get payout execution status

### [Receipts](docs/sdks/receipts/README.md)

* [create](docs/sdks/receipts/README.md#create) - Create a receipt
* [get](docs/sdks/receipts/README.md#get) - Get a receipt
* [verify](docs/sdks/receipts/README.md#verify) - Verify a receipt (hash + signature + inclusion)
* [getProof](docs/sdks/receipts/README.md#getproof) - Get inclusion proof for receipt
* [lucidVerifyReceiptByHash](docs/sdks/receipts/README.md#lucidverifyreceiptbyhash) - Verify receipt by hash with inclusion proof and epoch info
* [getMmrRoot](docs/sdks/receipts/README.md#getmmrroot) - Get current MMR root
* [getSignerPubKey](docs/sdks/receipts/README.md#getsignerpubkey) - Get orchestrator signing public key

### [Reputation](docs/sdks/reputation/README.md)

* [lucidListReputationAlgorithms](docs/sdks/reputation/README.md#lucidlistreputationalgorithms) - List available scoring algorithms
* [lucidComputeReputation](docs/sdks/reputation/README.md#lucidcomputereputation) - Compute reputation score
* [lucidGetCompositeReputation](docs/sdks/reputation/README.md#lucidgetcompositereputation) - Get composite reputation score

### [Reputation.Crosschain](docs/sdks/reputationcrosschain/README.md)

* [lucidGetUnifiedReputation](docs/sdks/reputationcrosschain/README.md#lucidgetunifiedreputation) - Unified cross-chain reputation score
* [lucidGetReputationBreakdown](docs/sdks/reputationcrosschain/README.md#lucidgetreputationbreakdown) - Per-chain reputation breakdown
* [lucidGetReceiptBasedReputation](docs/sdks/reputationcrosschain/README.md#lucidgetreceiptbasedreputation) - Sybil-resistant receipt-based reputation
* [lucidSubmitReputationOnChain](docs/sdks/reputationcrosschain/README.md#lucidsubmitreputationonchain) - Submit reputation on-chain
* [lucidGetReputationIndexerStatus](docs/sdks/reputationcrosschain/README.md#lucidgetreputationindexerstatus) - Reputation indexer status

### [Run](docs/sdks/run/README.md)

* [inference](docs/sdks/run/README.md#inference) - Run inference (optionally streaming via SSE)
* [chatCompletions](docs/sdks/run/README.md#chatcompletions) - OpenAI-compatible chat completions

### [Shares](docs/sdks/shares/README.md)

* [lucidLaunchShareToken](docs/sdks/shares/README.md#lucidlaunchsharetoken) - Launch a share token for a passport
* [lucidGetShareToken](docs/sdks/shares/README.md#lucidgetsharetoken) - Get share token info for a passport
* [lucidTriggerRevenueAirdrop](docs/sdks/shares/README.md#lucidtriggerrevenueairdrop) - Trigger revenue airdrop for share token holders

### [Tba](docs/sdks/tba/README.md)

* [lucidCreateTba](docs/sdks/tba/README.md#lucidcreatetba) - Create TBA for passport NFT
* [lucidGetTba](docs/sdks/tba/README.md#lucidgettba) - Get TBA address

### [Webhooks](docs/sdks/webhooks/README.md)

* [lucidReceiveDeploymentWebhook](docs/sdks/webhooks/README.md#lucidreceivedeploymentwebhook) - Receive deployment webhook

### [ZkML](docs/sdks/zkml/README.md)

* [lucidGenerateZkmlProof](docs/sdks/zkml/README.md#lucidgeneratezkmlproof) - Generate zkML proof
* [lucidVerifyZkmlProof](docs/sdks/zkml/README.md#lucidverifyzkmlproof) - Verify zkML proof
* [lucidRegisterZkmlModel](docs/sdks/zkml/README.md#lucidregisterzkmlmodel) - Register model circuit
* [lucidListZkmlModels](docs/sdks/zkml/README.md#lucidlistzkmlmodels) - List registered model circuits

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

- [`a2ALucidDeleteA2aTask`](docs/sdks/a2a/README.md#luciddeletea2atask) - Delete an A2A task
- [`a2ALucidDiscoverA2aAgent`](docs/sdks/a2a/README.md#luciddiscovera2aagent) - Discover an external A2A agent
- [`a2ALucidGetA2aAgentCard`](docs/sdks/a2a/README.md#lucidgeta2aagentcard) - Get A2A Agent Card
- [`a2ALucidGetA2aTask`](docs/sdks/a2a/README.md#lucidgeta2atask) - Get A2A task status
- [`a2ALucidListA2aTasks`](docs/sdks/a2a/README.md#lucidlista2atasks) - List A2A tasks for an agent
- [`a2ALucidSendA2aTask`](docs/sdks/a2a/README.md#lucidsenda2atask) - Send task to A2A agent
- [`agentsCrosschainLucidGetAgentCrossChainReputation`](docs/sdks/agentscrosschain/README.md#lucidgetagentcrosschainreputation) - Cross-chain reputation query
- [`agentsCrosschainLucidRegisterAgentOnChain`](docs/sdks/agentscrosschain/README.md#lucidregisteragentonchain) - Register agent on ERC-8004
- [`agentsDeployLucidDeployAgent`](docs/sdks/deploy/README.md#luciddeployagent) - One-click agent deployment
- [`agentsDeployLucidGetAgentCapabilities`](docs/sdks/deploy/README.md#lucidgetagentcapabilities) - List available runtime adapters and deploy targets
- [`agentsDeployLucidGetAgentDeployLogs`](docs/sdks/deploy/README.md#lucidgetagentdeploylogs) - Get agent deployment logs
- [`agentsDeployLucidGetAgentDeployStatus`](docs/sdks/deploy/README.md#lucidgetagentdeploystatus) - Get agent deployment status
- [`agentsDeployLucidGetDeploymentEvents`](docs/sdks/deploy/README.md#lucidgetdeploymentevents) - Get deployment event history
- [`agentsDeployLucidListAgentDeployments`](docs/sdks/deploy/README.md#lucidlistagentdeployments) - List all agent deployments
- [`agentsDeployLucidPreviewAgent`](docs/sdks/deploy/README.md#lucidpreviewagent) - Generate agent code preview
- [`agentsDeployLucidTerminateAgent`](docs/sdks/deploy/README.md#lucidterminateagent) - Terminate a deployed agent
- [`agentsLaunchLucidCancelBlueDeployment`](docs/sdks/launch/README.md#lucidcancelbluedeployment) - Cancel blue deployment
- [`agentsLaunchLucidDeployBlueGreen`](docs/sdks/launch/README.md#luciddeploybluegreen) - Initiate blue-green deployment
- [`agentsLaunchLucidGetBlueDeployment`](docs/sdks/launch/README.md#lucidgetbluedeployment) - Get blue deployment status
- [`agentsLaunchLucidLaunchAgent`](docs/sdks/launch/README.md#lucidlaunchagent) - Launch an agent in the Lucid verified network
- [`agentsLaunchLucidPromoteBlue`](docs/sdks/launch/README.md#lucidpromoteblue) - Promote blue to primary
- [`agentsLaunchLucidRollbackDeployment`](docs/sdks/launch/README.md#lucidrollbackdeployment) - Rollback to previous deployment
- [`agentsMirrorLucidGetAgentEpoch`](docs/sdks/mirror/README.md#lucidgetagentepoch) - Get agent current epoch
- [`agentsMirrorLucidGetAgentProof`](docs/sdks/mirror/README.md#lucidgetagentproof) - Get agent latest proof
- [`agentsMirrorLucidGetAgentReceipts`](docs/sdks/mirror/README.md#lucidgetagentreceipts) - Get agent receipts
- [`agentsMirrorLucidGetAgentRunProof`](docs/sdks/mirror/README.md#lucidgetagentrunproof) - Get proof for specific run
- [`agentsRevenueLucidGetAgentRevenue`](docs/sdks/revenue/README.md#lucidgetagentrevenue) - Get agent revenue pool status
- [`agentsRevenueLucidGetAgentRevenueHistory`](docs/sdks/revenue/README.md#lucidgetagentrevenuehistory) - Get agent payout history
- [`agentsRevenueLucidTriggerAgentAirdrop`](docs/sdks/revenue/README.md#lucidtriggeragentairdrop) - Trigger revenue airdrop to share token holders
- [`agentsWalletLucidAgentWalletSend`](docs/sdks/wallet/README.md#lucidagentwalletsend) - Send from agent wallet
- [`agentsWalletLucidGetAgentWalletBalance`](docs/sdks/wallet/README.md#lucidgetagentwalletbalance) - Get agent wallet balance
- [`agentsWalletLucidGetAgentWalletPolicy`](docs/sdks/wallet/README.md#lucidgetagentwalletpolicy) - Get agent wallet policy
- [`agentsWalletLucidSetAgentWalletLimits`](docs/sdks/wallet/README.md#lucidsetagentwalletlimits) - Set agent wallet spending limits
- [`anchoringLucidGetAnchor`](docs/sdks/anchoring/README.md#lucidgetanchor) - Get a single anchor record
- [`anchoringLucidGetAnchorLineage`](docs/sdks/anchoring/README.md#lucidgetanchorlineage) - Get anchor parent chain
- [`anchoringLucidListAnchors`](docs/sdks/anchoring/README.md#lucidlistanchors) - Query anchor records
- [`anchoringLucidLookupAnchorByCid`](docs/sdks/anchoring/README.md#lucidlookupanchorbycid) - Reverse lookup anchor by CID
- [`anchoringLucidVerifyAnchor`](docs/sdks/anchoring/README.md#lucidverifyanchor) - Verify anchor CID against DePIN provider
- [`chainsLucidGetChainStatus`](docs/sdks/chains/README.md#lucidgetchainstatus) - Get chain status
- [`chainsLucidListChains`](docs/sdks/chains/README.md#lucidlistchains) - List supported chains
- [`computeGetNodeHealth`](docs/sdks/compute/README.md#getnodehealth) - Get compute node health
- [`computeHeartbeat`](docs/sdks/compute/README.md#heartbeat) - Submit compute node heartbeat
- [`computeSearchCompute`](docs/sdks/compute/README.md#searchcompute) - Search compute passports
- [`crossChainLucidCrossChainRoute`](docs/sdks/crosschain/README.md#lucidcrosschainroute) - Chain-aware compute routing
- [`crossChainLucidCrossChainValidate`](docs/sdks/crosschain/README.md#lucidcrosschainvalidate) - Validate a receipt cross-chain
- [`disputesLucidAppealDispute`](docs/sdks/disputes/README.md#lucidappealdispute) - Appeal a dispute decision
- [`disputesLucidGetDispute`](docs/sdks/disputes/README.md#lucidgetdispute) - Get dispute details
- [`disputesLucidOpenDispute`](docs/sdks/disputes/README.md#lucidopendispute) - Open a dispute on an escrow
- [`disputesLucidResolveDispute`](docs/sdks/disputes/README.md#lucidresolvedispute) - Resolve a dispute
- [`disputesLucidSubmitEvidence`](docs/sdks/disputes/README.md#lucidsubmitevidence) - Submit evidence for a dispute
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
- [`escrowLucidCreateEscrow`](docs/sdks/escrow/README.md#lucidcreateescrow) - Create a time-locked escrow
- [`escrowLucidDisputeEscrow`](docs/sdks/escrow/README.md#luciddisputeescrow) - Dispute an escrow
- [`escrowLucidGetEscrow`](docs/sdks/escrow/README.md#lucidgetescrow) - Get escrow details
- [`escrowLucidReleaseEscrow`](docs/sdks/escrow/README.md#lucidreleaseescrow) - Release escrow with verified receipt
- [`healthLucidCheckDatabaseHealth`](docs/sdks/health/README.md#lucidcheckdatabasehealth) - Database health check
- [`healthLucidCheckLiveness`](docs/sdks/health/README.md#lucidcheckliveness) - Liveness probe
- [`healthLucidCheckNangoHealth`](docs/sdks/health/README.md#lucidchecknangohealth) - Nango service health check
- [`healthLucidCheckReadiness`](docs/sdks/health/README.md#lucidcheckreadiness) - Readiness probe
- [`healthLucidCheckRedisHealth`](docs/sdks/health/README.md#lucidcheckredishealth) - Redis health check
- [`healthLucidCheckSystemHealth`](docs/sdks/health/README.md#lucidchecksystemhealth) - Overall system health
- [`healthLucidGetDetailedHealth`](docs/sdks/health/README.md#lucidgetdetailedhealth) - Detailed health with statistics
- [`identityLucidGetIdentity`](docs/sdks/identity/README.md#lucidgetidentity) - Resolve identity (GET)
- [`identityLucidGetIdentityChains`](docs/sdks/identity/README.md#lucidgetidentitychains) - Get linked chains for identity
- [`identityLucidLinkIdentity`](docs/sdks/identity/README.md#lucidlinkidentity) - Link addresses cross-chain
- [`identityLucidResolveIdentity`](docs/sdks/identity/README.md#lucidresolveidentity) - Resolve cross-chain identity
- [`identityLucidUnlinkIdentity`](docs/sdks/identity/README.md#lucidunlinkidentity) - Unlink a cross-chain address
- [`matchCompute`](docs/sdks/match/README.md#compute) - Match compute for model
- [`matchExplain`](docs/sdks/match/README.md#explain) - Evaluate policy against compute/model meta
- [`matchPlanRoute`](docs/sdks/match/README.md#planroute) - Plan a route (match + resolve endpoint)
- [`memoryLucidAddEntityMemory`](docs/sdks/memory/README.md#lucidaddentitymemory) - Store entity memory (knowledge graph node)
- [`memoryLucidAddEpisodicMemory`](docs/sdks/memory/README.md#lucidaddepisodicmemory) - Store episodic memory
- [`memoryLucidAddProceduralMemory`](docs/sdks/memory/README.md#lucidaddproceduralmemory) - Store procedural memory (learned rule)
- [`memoryLucidAddSemanticMemory`](docs/sdks/memory/README.md#lucidaddsemanticmemory) - Store semantic memory (extracted fact)
- [`memoryLucidAddTemporalMemory`](docs/sdks/memory/README.md#lucidaddtemporalmemory) - Store temporal memory (time-bounded fact)
- [`memoryLucidAddTrustWeightedMemory`](docs/sdks/memory/README.md#lucidaddtrustweightedmemory) - Store trust-weighted memory (cross-agent trust)
- [`memoryLucidCloseMemorySession`](docs/sdks/memory/README.md#lucidclosememorysession) - Close a memory session
- [`memoryLucidCompactMemory`](docs/sdks/memory/README.md#lucidcompactmemory) - Trigger memory compaction
- [`memoryLucidGetMemoryEntry`](docs/sdks/memory/README.md#lucidgetmemoryentry) - Read a single memory entry
- [`memoryLucidGetMemoryEntryProvenance`](docs/sdks/memory/README.md#lucidgetmemoryentryprovenance) - Single entry provenance
- [`memoryLucidGetMemoryProvenanceChain`](docs/sdks/memory/README.md#lucidgetmemoryprovenancechain) - Get provenance chain
- [`memoryLucidGetMemorySessionContext`](docs/sdks/memory/README.md#lucidgetmemorysessioncontext) - Get session context
- [`memoryLucidGetMemoryStats`](docs/sdks/memory/README.md#lucidgetmemorystats) - Memory diagnostics
- [`memoryLucidListMemoryEntries`](docs/sdks/memory/README.md#lucidlistmemoryentries) - List memory entries with filters
- [`memoryLucidListMemorySessions`](docs/sdks/memory/README.md#lucidlistmemorysessions) - List sessions for an agent
- [`memoryLucidMemoryHealth`](docs/sdks/memory/README.md#lucidmemoryhealth) - Memory store health and diagnostics
- [`memoryLucidRecallMemory`](docs/sdks/memory/README.md#lucidrecallmemory) - Recall relevant memories via two-stage retrieval
- [`memoryLucidStartMemorySession`](docs/sdks/memory/README.md#lucidstartmemorysession) - Start a new conversation session
- [`memoryLucidVerifyMemoryChain`](docs/sdks/memory/README.md#lucidverifymemorychain) - Verify memory hash chain integrity
- [`modulesLucidConfigurePayoutModule`](docs/sdks/modules/README.md#lucidconfigurepayoutmodule) - Configure payout module
- [`modulesLucidConfigurePolicyModule`](docs/sdks/modules/README.md#lucidconfigurepolicymodule) - Configure policy module
- [`modulesLucidInstallModule`](docs/sdks/modules/README.md#lucidinstallmodule) - Install module on smart account
- [`modulesLucidListModules`](docs/sdks/modules/README.md#lucidlistmodules) - List installed modules
- [`modulesLucidUninstallModule`](docs/sdks/modules/README.md#luciduninstallmodule) - Uninstall module from smart account
- [`passportsCreate`](docs/sdks/passports/README.md#create) - Create a passport
- [`passportsDelete`](docs/sdks/passports/README.md#delete) - Delete a passport (soft delete)
- [`passportsGet`](docs/sdks/passports/README.md#get) - Get a passport
- [`passportsGetStats`](docs/sdks/passports/README.md#getstats) - Passport statistics
- [`passportsList`](docs/sdks/passports/README.md#list) - List passports
- [`passportsListPendingSync`](docs/sdks/passports/README.md#listpendingsync) - Get passports pending sync
- [`passportsLucidListAgentPassports`](docs/sdks/passports/README.md#lucidlistagentpassports) - List agent passports
- [`passportsLucidListDatasets`](docs/sdks/passports/README.md#lucidlistdatasets) - List dataset passports
- [`passportsLucidListTools`](docs/sdks/passports/README.md#lucidlisttools) - List tool passports
- [`passportsLucidRetryPassportProjections`](docs/sdks/passports/README.md#lucidretrypassportprojections) - Retry failed identity projections
- [`passportsLucidUpdatePassportEndpoints`](docs/sdks/passports/README.md#lucidupdatepassportendpoints) - Update passport endpoint URLs
- [`passportsLucidUpdatePassportPricing`](docs/sdks/passports/README.md#lucidupdatepassportpricing) - Update passport pricing
- [`passportsSearchModels`](docs/sdks/passports/README.md#searchmodels) - Search model passports
- [`passportsSync`](docs/sdks/passports/README.md#sync) - Trigger on-chain sync for a passport
- [`passportsUpdate`](docs/sdks/passports/README.md#update) - Update a passport
- [`paymasterLucidEstimateGasLucid`](docs/sdks/paymaster/README.md#lucidestimategaslucid) - Estimate gas cost in $LUCID
- [`paymasterLucidGetPaymasterRate`](docs/sdks/paymaster/README.md#lucidgetpaymasterrate) - Get LUCID/ETH exchange rate
- [`paymasterLucidSponsorUserOp`](docs/sdks/paymaster/README.md#lucidsponsoruserop) - Sponsor a UserOp with $LUCID
- [`paymentsLucidCreatePaymentGrant`](docs/sdks/payments/README.md#lucidcreatepaymentgrant) - Issue a signed payment grant
- [`paymentsLucidDeleteAssetPricing`](docs/sdks/payments/README.md#luciddeleteassetpricing) - Remove asset pricing
- [`paymentsLucidGetAssetPricing`](docs/sdks/payments/README.md#lucidgetassetpricing) - Get asset pricing
- [`paymentsLucidGetAssetRevenue`](docs/sdks/payments/README.md#lucidgetassetrevenue) - Get asset revenue summary
- [`paymentsLucidGetPaymentConfig`](docs/sdks/payments/README.md#lucidgetpaymentconfig) - Get x402 payment configuration
- [`paymentsLucidGetSupportedChains`](docs/sdks/payments/README.md#lucidgetsupportedchains) - List supported payment chains
- [`paymentsLucidSetAssetPricing`](docs/sdks/payments/README.md#lucidsetassetpricing) - Set asset pricing
- [`paymentsLucidSetDefaultFacilitator`](docs/sdks/payments/README.md#lucidsetdefaultfacilitator) - Set default payment facilitator
- [`paymentsLucidSubscribeAsset`](docs/sdks/payments/README.md#lucidsubscribeasset) - Subscribe to asset access
- [`paymentsLucidWithdrawAssetRevenue`](docs/sdks/payments/README.md#lucidwithdrawassetrevenue) - Withdraw asset revenue
- [`payoutsCalculate`](docs/sdks/payouts/README.md#calculate) - Calculate payout split
- [`payoutsCreateFromReceipt`](docs/sdks/payouts/README.md#createfromreceipt) - Create payout from receipt token data
- [`payoutsCrosschainLucidExecutePayoutOnChain`](docs/sdks/payoutscrosschain/README.md#lucidexecutepayoutonchain) - Execute payout on-chain
- [`payoutsCrosschainLucidGetPayoutExecution`](docs/sdks/payoutscrosschain/README.md#lucidgetpayoutexecution) - Get payout execution status
- [`payoutsGet`](docs/sdks/payouts/README.md#get) - Get payout by run_id
- [`payoutsVerify`](docs/sdks/payouts/README.md#verify) - Verify payout split
- [`receiptsCreate`](docs/sdks/receipts/README.md#create) - Create a receipt
- [`receiptsGet`](docs/sdks/receipts/README.md#get) - Get a receipt
- [`receiptsGetMmrRoot`](docs/sdks/receipts/README.md#getmmrroot) - Get current MMR root
- [`receiptsGetProof`](docs/sdks/receipts/README.md#getproof) - Get inclusion proof for receipt
- [`receiptsGetSignerPubKey`](docs/sdks/receipts/README.md#getsignerpubkey) - Get orchestrator signing public key
- [`receiptsLucidVerifyReceiptByHash`](docs/sdks/receipts/README.md#lucidverifyreceiptbyhash) - Verify receipt by hash with inclusion proof and epoch info
- [`receiptsVerify`](docs/sdks/receipts/README.md#verify) - Verify a receipt (hash + signature + inclusion)
- [`reputationCrosschainLucidGetReceiptBasedReputation`](docs/sdks/reputationcrosschain/README.md#lucidgetreceiptbasedreputation) - Sybil-resistant receipt-based reputation
- [`reputationCrosschainLucidGetReputationBreakdown`](docs/sdks/reputationcrosschain/README.md#lucidgetreputationbreakdown) - Per-chain reputation breakdown
- [`reputationCrosschainLucidGetReputationIndexerStatus`](docs/sdks/reputationcrosschain/README.md#lucidgetreputationindexerstatus) - Reputation indexer status
- [`reputationCrosschainLucidGetUnifiedReputation`](docs/sdks/reputationcrosschain/README.md#lucidgetunifiedreputation) - Unified cross-chain reputation score
- [`reputationCrosschainLucidSubmitReputationOnChain`](docs/sdks/reputationcrosschain/README.md#lucidsubmitreputationonchain) - Submit reputation on-chain
- [`reputationLucidComputeReputation`](docs/sdks/reputation/README.md#lucidcomputereputation) - Compute reputation score
- [`reputationLucidGetCompositeReputation`](docs/sdks/reputation/README.md#lucidgetcompositereputation) - Get composite reputation score
- [`reputationLucidListReputationAlgorithms`](docs/sdks/reputation/README.md#lucidlistreputationalgorithms) - List available scoring algorithms
- [`runChatCompletions`](docs/sdks/run/README.md#chatcompletions) - OpenAI-compatible chat completions
- [`runInference`](docs/sdks/run/README.md#inference) - Run inference (optionally streaming via SSE)
- [`sharesLucidGetShareToken`](docs/sdks/shares/README.md#lucidgetsharetoken) - Get share token info for a passport
- [`sharesLucidLaunchShareToken`](docs/sdks/shares/README.md#lucidlaunchsharetoken) - Launch a share token for a passport
- [`sharesLucidTriggerRevenueAirdrop`](docs/sdks/shares/README.md#lucidtriggerrevenueairdrop) - Trigger revenue airdrop for share token holders
- [`tbaLucidCreateTBA`](docs/sdks/tba/README.md#lucidcreatetba) - Create TBA for passport NFT
- [`tbaLucidGetTBA`](docs/sdks/tba/README.md#lucidgettba) - Get TBA address
- [`webhooksLucidReceiveDeploymentWebhook`](docs/sdks/webhooks/README.md#lucidreceivedeploymentwebhook) - Receive deployment webhook
- [`zkMLLucidGenerateZkmlProof`](docs/sdks/zkml/README.md#lucidgeneratezkmlproof) - Generate zkML proof
- [`zkMLLucidListZkmlModels`](docs/sdks/zkml/README.md#lucidlistzkmlmodels) - List registered model circuits
- [`zkMLLucidRegisterZkmlModel`](docs/sdks/zkml/README.md#lucidregisterzkmlmodel) - Register model circuit
- [`zkMLLucidVerifyZkmlProof`](docs/sdks/zkml/README.md#lucidverifyzkmlproof) - Verify zkML proof
- ~~[`agentsLucidAccomplishAgentGoal`](docs/sdks/agents/README.md#lucidaccomplishagentgoal)~~ - Plan and execute a workflow in one call :warning: **Deprecated**
- ~~[`agentsLucidCheckAgentOrchestratorHealth`](docs/sdks/agents/README.md#lucidcheckagentorchestratorhealth)~~ - Agent orchestrator health check :warning: **Deprecated**
- ~~[`agentsLucidCheckExecutorHealth`](docs/sdks/agents/README.md#lucidcheckexecutorhealth)~~ - Check executor health :warning: **Deprecated**
- ~~[`agentsLucidExecuteAgentFlowspec`](docs/sdks/agents/README.md#lucidexecuteagentflowspec)~~ - Execute a FlowSpec :warning: **Deprecated**
- ~~[`agentsLucidGenerateAgentProof`](docs/sdks/agents/README.md#lucidgenerateagentproof)~~ - Generate proof of contribution :warning: **Deprecated**
- ~~[`agentsLucidGetAgentHistory`](docs/sdks/agents/README.md#lucidgetagenthistory)~~ - Get agent MMR root history :warning: **Deprecated**
- ~~[`agentsLucidGetAgentOrchestratorHistory`](docs/sdks/agents/README.md#lucidgetagentorchestratorhistory)~~ - Get agent execution history for a tenant :warning: **Deprecated**
- ~~[`agentsLucidGetAgentRoot`](docs/sdks/agents/README.md#lucidgetagentroot)~~ - Get current MMR root for agent :warning: **Deprecated**
- ~~[`agentsLucidGetAgentStats`](docs/sdks/agents/README.md#lucidgetagentstats)~~ - Get agent statistics :warning: **Deprecated**
- ~~[`agentsLucidGetExecutorDecision`](docs/sdks/agents/README.md#lucidgetexecutordecision)~~ - Get executor decision for a FlowSpec :warning: **Deprecated**
- ~~[`agentsLucidGetPlannerInfo`](docs/sdks/agents/README.md#lucidgetplannerinfo)~~ - Get planner service info :warning: **Deprecated**
- ~~[`agentsLucidInitAgent`](docs/sdks/agents/README.md#lucidinitagent)~~ - Initialize an AI agent :warning: **Deprecated**
- ~~[`agentsLucidListAgents`](docs/sdks/agents/README.md#lucidlistagents)~~ - List all registered agents :warning: **Deprecated**
- ~~[`agentsLucidPlanAgentWorkflow`](docs/sdks/agents/README.md#lucidplanagentworkflow)~~ - Plan a workflow from a goal :warning: **Deprecated**
- ~~[`agentsLucidPreviewAgentWorkflow`](docs/sdks/agents/README.md#lucidpreviewagentworkflow)~~ - Preview a workflow without executing :warning: **Deprecated**
- ~~[`agentsLucidProcessAgentBatchEpochs`](docs/sdks/agents/README.md#lucidprocessagentbatchepochs)~~ - Process multiple epochs in batch :warning: **Deprecated**
- ~~[`agentsLucidProcessAgentEpoch`](docs/sdks/agents/README.md#lucidprocessagentepoch)~~ - Process an epoch for an agent :warning: **Deprecated**
- ~~[`agentsLucidValidateFlowspec`](docs/sdks/agents/README.md#lucidvalidateflowspec)~~ - Validate a FlowSpec structure :warning: **Deprecated**
- ~~[`agentsLucidVerifyAgentMmr`](docs/sdks/agents/README.md#lucidverifyagentmmr)~~ - Verify MMR integrity for agent :warning: **Deprecated**

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.passports.list();

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.passports.create({
    type: "model",
    owner: "7xK9mQ2vNbPfYkRd3JhEzV1LnWqA8tUcGp4SyDfH5Bo",
    metadata: {
      "schema_version": "1.0",
      "model_passport_id": "ppt_model_7xK9mQ2v",
      "format": "safetensors",
      "runtime_recommended": "vllm",
      "context_length": 32768,
      "hf": {
        "repo_id": "mistralai/Mistral-7B-Instruct-v0.3",
      },
    },
    name: "mistral-7b-instruct",
    description: "Mistral 7B Instruct fine-tuned for chat",
    version: "1.0.0",
    tags: [
      "llm",
      "chat",
      "instruct",
    ],
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
    type: "model",
    owner: "7xK9mQ2vNbPfYkRd3JhEzV1LnWqA8tUcGp4SyDfH5Bo",
    metadata: {
      "schema_version": "1.0",
      "model_passport_id": "ppt_model_7xK9mQ2v",
      "format": "safetensors",
      "runtime_recommended": "vllm",
      "context_length": 32768,
      "hf": {
        "repo_id": "mistralai/Mistral-7B-Instruct-v0.3",
      },
    },
    name: "mistral-7b-instruct",
    description: "Mistral 7B Instruct fine-tuned for chat",
    version: "1.0.0",
    tags: [
      "llm",
      "chat",
      "instruct",
    ],
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
      type: "model",
      owner: "7xK9mQ2vNbPfYkRd3JhEzV1LnWqA8tUcGp4SyDfH5Bo",
      metadata: {
        "schema_version": "1.0",
        "model_passport_id": "ppt_model_7xK9mQ2v",
        "format": "safetensors",
        "runtime_recommended": "vllm",
        "context_length": 32768,
        "hf": {
          "repo_id": "mistralai/Mistral-7B-Instruct-v0.3",
        },
      },
      name: "mistral-7b-instruct",
      description: "Mistral 7B Instruct fine-tuned for chat",
      version: "1.0.0",
      tags: [
        "llm",
        "chat",
        "instruct",
      ],
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

<details><summary>Less common errors (10)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`RaijinLabsLucidAiError`](./src/models/errors/raijinlabslucidaierror.ts)**:
* [`X402PaymentRequiredError`](./src/models/errors/x402paymentrequirederror.ts): Payment Required (x402). Status code `402`. Applicable to 3 of 185 methods.*
* [`HealthCheckResultError`](./src/models/errors/healthcheckresulterror.ts): Healthy. Status code `503`. Applicable to 3 of 185 methods.*
* [`SystemHealthError`](./src/models/errors/systemhealtherror.ts): Healthy. Status code `503`. Applicable to 1 of 185 methods.*
* [`ServiceUnavailableError`](./src/models/errors/serviceunavailableerror.ts): Not ready. Status code `503`. Applicable to 1 of 185 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name          | Server                         | Variables         | Description                                         |
| ------------- | ------------------------------ | ----------------- | --------------------------------------------------- |
| `local`       | `http://localhost:3001`        |                   | Local / self-hosted (default for open-source users) |
| `self-hosted` | `https://{host}:{port}`        | `host`<br/>`port` | Self-hosted instance (custom host and port)         |
| `cloud`       | `https://api.lucid.foundation` |                   | Managed cloud (Raijin Labs hosted)                  |

If the selected server has variables, you may override its default values through the additional parameters made available in the SDK constructor:

| Variable | Parameter      | Default       | Description                           |
| -------- | -------------- | ------------- | ------------------------------------- |
| `host`   | `host: string` | `"localhost"` | Hostname or IP of your Lucid instance |
| `port`   | `port: string` | `"3001"`      | Port your Lucid instance listens on   |

#### Example

```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi({
  server: "self-hosted",
  host: "localhost",
  port: "3001",
});

async function run() {
  const result = await raijinLabsLucidAi.passports.create({
    type: "model",
    owner: "7xK9mQ2vNbPfYkRd3JhEzV1LnWqA8tUcGp4SyDfH5Bo",
    metadata: {
      "schema_version": "1.0",
      "model_passport_id": "ppt_model_7xK9mQ2v",
      "format": "safetensors",
      "runtime_recommended": "vllm",
      "context_length": 32768,
      "hf": {
        "repo_id": "mistralai/Mistral-7B-Instruct-v0.3",
      },
    },
    name: "mistral-7b-instruct",
    description: "Mistral 7B Instruct fine-tuned for chat",
    version: "1.0.0",
    tags: [
      "llm",
      "chat",
      "instruct",
    ],
  });

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi({
  serverURL: "http://localhost:3001",
});

async function run() {
  const result = await raijinLabsLucidAi.passports.create({
    type: "model",
    owner: "7xK9mQ2vNbPfYkRd3JhEzV1LnWqA8tUcGp4SyDfH5Bo",
    metadata: {
      "schema_version": "1.0",
      "model_passport_id": "ppt_model_7xK9mQ2v",
      "format": "safetensors",
      "runtime_recommended": "vllm",
      "context_length": 32768,
      "hf": {
        "repo_id": "mistralai/Mistral-7B-Instruct-v0.3",
      },
    },
    name: "mistral-7b-instruct",
    description: "Mistral 7B Instruct fine-tuned for chat",
    version: "1.0.0",
    tags: [
      "llm",
      "chat",
      "instruct",
    ],
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

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";
import { ProxyAgent } from "undici";
import { HTTPClient } from "raijin-labs-lucid-ai/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
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

## Development

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation.
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=raijin-labs-lucid-ai&utm_campaign=typescript)

<!-- Placeholder for Future Speakeasy SDK Sections -->
