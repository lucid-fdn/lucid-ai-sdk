# Lucid AI SDK

[![GitHub](https://img.shields.io/github/license/raijinlabs/lucid-ai-sdk)](https://github.com/raijinlabs/lucid-ai-sdk/blob/main/LICENSE)

Official SDK and MCP server for the [LucidLayer API](https://www.lucid.foundation/) by Raijin Labs.

## Packages

| Package | Description | Version |
|---------|-------------|---------|
| [`raijin-labs-lucid-ai`](./typescript/) | TypeScript SDK client library | 0.4.1 |
| [`raijinlabs-mcp`](./mcp/) | MCP (Model Context Protocol) server | 0.2.2 |

## TypeScript SDK

The SDK provides a typed client for the LucidLayer API, covering passports, receipts, epochs, compute matching, payouts, and AI agent orchestration.

### Install

```bash
npm install raijin-labs-lucid-ai
```

### Quick Start

```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const sdk = new RaijinLabsLucidAi({
  serverURL: "https://api.lucid.foundation",
});

// Check system health
const health = await sdk.health.checkSystemHealth();
console.log("Status:", health.status);

// Create a model passport
const passport = await sdk.passports.create({
  type: "model",
  owner: "YOUR_WALLET_ADDRESS",
  name: "my-model",
  version: "1.0.0",
  tags: ["nlp", "inference"],
  metadata: {
    schema_version: "1.0",
    model_passport_id: "mdl-my-model",
    format: "gguf",
    runtime_recommended: "vllm",
    requirements: { min_vram_gb: 24 },
  },
});
console.log("Passport ID:", passport.passportId);
```

### Match Compute to a Model

```typescript
// Evaluate a policy against compute and model metadata
const match = await sdk.match.explain({
  policy: {
    policyVersion: "1.0",
    allowRegions: ["us-east-1"],
    latency: { p95MsBudget: 3000, hardTimeoutMs: 10000 },
    cost: { maxPricePer1kTokensUsd: 0.05 },
    privacy: { storeInputs: false, redactPii: true },
  },
  computeMeta: {
    schema_version: "1.0",
    compute_passport_id: "cmp-my-node",
    provider_type: "cloud",
    regions: ["us-east-1"],
    hardware: { gpu: "NVIDIA-A100-80GB", vram_gb: 80 },
    runtimes: [{ name: "vllm", version: "0.4.0", image: "vllm/vllm:0.4.0" }],
    endpoints: { inference_url: "http://localhost:8080/v1" },
  },
  modelMeta: {
    schema_version: "1.0",
    model_passport_id: "mdl-my-model",
    format: "gguf",
    runtime_recommended: "vllm",
    requirements: { min_vram_gb: 24 },
  },
});
console.log("Allowed:", match.allowed, "Reasons:", match.reasons);
```

### Create Receipts and Verify Proofs

```typescript
// Create an inference receipt
const receipt = await sdk.receipts.create({
  modelPassportId: "mdl-my-model",
  computePassportId: "cmp-my-node",
  policyHash: match.policyHash,
  runtime: "vllm",
  tokensIn: 128,
  tokensOut: 256,
  ttftMs: 120,
  totalLatencyMs: 850,
});
console.log("Receipt ID:", receipt.receipt.runId);

// Verify the receipt with inclusion proof
const verification = await sdk.receipts.verify({
  receiptId: receipt.receipt.runId,
});
console.log("Valid:", verification.isValid);
```

### Agent MMR (Proof of Contribution)

```typescript
// Initialize an agent and process contribution vectors
await sdk.agents.initAgent({ agentId: "my-agent" });

await sdk.agents.processAgentEpoch({
  agentId: "my-agent",
  epochNumber: 1,
  vectors: [
    "Inference completed with 256 tokens",
    "Model loaded in 1.2 seconds",
  ],
});

// Generate a cryptographic proof for a specific contribution
const proof = await sdk.agents.generateAgentProof({
  agentId: "my-agent",
  epochNumber: 1,
  vectorText: "Inference completed with 256 tokens",
});
console.log("Proof:", proof);
```

See [`typescript/README.md`](./typescript/README.md) for the full API reference, and [`typescript/examples/`](./typescript/examples/) for a complete walkthrough.

## MCP Server

The MCP server exposes all LucidLayer API operations as tools for AI assistants (Claude, Cursor, VS Code, etc.).

### Claude Code

```bash
claude mcp add raijinlabs-mcp npx raijinlabs-mcp start --
```

### Claude Desktop / Cursor / VS Code

Add to your MCP configuration:

```json
{
  "mcpServers": {
    "RaijinlabsMcp": {
      "command": "npx",
      "args": ["raijinlabs-mcp", "start"]
    }
  }
}
```

### Available Tools

Once connected, your AI assistant gains access to tools for:

- **Passports** - Create, list, update, and search model/compute/tool/dataset/agent passports
- **Match** - Evaluate policies and match compute nodes to models
- **Receipts** - Create inference receipts, verify proofs, inspect the MMR
- **Epochs** - Manage on-chain anchoring epochs
- **Payouts** - Calculate and verify payout splits
- **Agents** - Initialize agents, process epochs, generate proofs of contribution
- **Health** - Check system, database, Redis, and service health

See [`mcp/README.md`](./mcp/README.md) for full setup instructions across all supported clients.

## Development

Both packages are generated from the shared [`openapi.yaml`](./openapi.yaml) spec using [Speakeasy](https://speakeasy.com).

### Building

```bash
# SDK
cd typescript && npm install && npm run build

# MCP server
cd mcp && npm install && npm run build
```

## License

[MIT](https://github.com/raijinlabs/lucid-ai-sdk/blob/main/LICENSE)
