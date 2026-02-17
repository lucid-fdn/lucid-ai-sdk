# raijinlabs-mcp

Model Context Protocol (MCP) server for the [LucidLayer API](https://www.lucid.foundation/).

[![npm](https://img.shields.io/npm/v/raijinlabs-mcp)](https://www.npmjs.com/package/raijinlabs-mcp)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](https://github.com/raijinlabs/lucid-ai-sdk/blob/main/LICENSE)

## Summary

Exposes all LucidLayer API operations as MCP tools, enabling AI assistants to manage passports, match compute, create receipts, verify proofs, orchestrate agents, and more — directly from Claude, Cursor, VS Code, or any MCP-compatible client.

## Installation

<details open>
<summary>Claude Code</summary>

```bash
claude mcp add raijinlabs-mcp npx raijinlabs-mcp start --
```

</details>

<details>
<summary>Claude Desktop</summary>

1. Open Claude Desktop
2. Open the left-hand side pane, then click on your Username
3. Go to **Settings** > **Developer** tab
4. Click **Edit Config**
5. Paste the following:

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

</details>

<details>
<summary>Cursor</summary>

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](cursor://anysphere.cursor-deeplink/mcp/install?name=RaijinlabsMcp&config=eyJtY3BTZXJ2ZXJzIjp7IlJhaWppbmxhYnNNY3AiOnsiY29tbWFuZCI6Im5weCIsImFyZ3MiOlsicmFpamlubGFicy1tY3AiLCJzdGFydCJdfX19)

Or manually:

1. Open Cursor Settings
2. Select **Tools and Integrations**
3. Select **New MCP Server**
4. Paste the following JSON:

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

</details>

<details>
<summary>VS Code</summary>

1. Open the Command Palette
2. Search and open **MCP: Open User Configuration** (opens `mcp.json`)
3. Paste the following:

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

</details>

<details>
<summary>Windsurf</summary>

1. Open Windsurf Settings
2. Select **Cascade** on the left side menu
3. Click **Manage MCPs** (requires sign-in)
4. Click **View raw config** to open the MCP configuration file
5. Paste the following:

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

</details>

<details>
<summary>Stdio via npm</summary>

```bash
npx raijinlabs-mcp start
```

For a full list of server arguments:

```bash
npx raijinlabs-mcp --help
```

</details>

<details>
<summary>MCP Bundle (Desktop Extension)</summary>

Drag and drop the `mcp-server.mcpb` file onto Claude Desktop to install the extension. The MCP bundle includes the server and all necessary configuration.

> [!NOTE]
> MCP bundles provide a streamlined way to package and distribute MCP servers. Learn more about [Desktop Extensions](https://www.anthropic.com/engineering/desktop-extensions).

</details>

## Usage Examples

Once the MCP server is connected, your AI assistant can use any of the tools below. Here are some common workflows expressed as natural language prompts:

### Check System Health

> "Check the LucidLayer system health"

The assistant will call `check_system_health` and report the status of the API, database, Redis, and other dependencies.

### Create a Passport

> "Create a model passport for my-llm-7b model owned by wallet 7cBsSH...q1S9 with gguf format and vllm runtime, requiring 24GB VRAM"

The assistant will call `lucid_create_passport` with:

```json
{
  "type": "model",
  "owner": "7cBsSHBB4nSVQy6ceUvmrA8Z2ks8Me8AjxSUqvJ2q1S9",
  "name": "my-llm-7b",
  "metadata": {
    "schema_version": "1.0",
    "model_passport_id": "mdl-my-llm-7b",
    "format": "gguf",
    "runtime_recommended": "vllm",
    "requirements": { "min_vram_gb": 24 }
  }
}
```

### Match Compute to a Model

> "Evaluate whether a compute node in us-east-1 with an A100 GPU can serve my model under a policy that requires latency under 3 seconds and costs below $0.05 per 1k tokens"

The assistant will call `lucid_match_explain` with the policy, compute metadata, and model metadata, then explain whether the match is allowed and why.

### Create and Verify a Receipt

> "Create an inference receipt for model mdl-abc on compute cmp-xyz with 128 input tokens and 256 output tokens, then verify it"

The assistant will:
1. Call `lucid_create_receipt` to record the inference
2. Call `lucid_verify_receipt` to check hash, signature, and inclusion proof
3. Report whether the receipt is valid

### Agent Proof of Contribution

> "Initialize an agent called my-agent, process an epoch with these vectors: 'completed inference A', 'completed inference B', then generate a proof for the first vector"

The assistant will:
1. Call `init_agent` to create the agent
2. Call `process_agent_epoch` to process the vectors
3. Call `generate_agent_proof` to get the cryptographic proof

### Search and List Passports

> "List all model passports owned by wallet 7cBsSH...q1S9"

> "Search for compute passports with A100 GPUs in the us-east-1 region"

> "Show me the passport stats"

### Manage Epochs

> "What's the current epoch? Are there any epochs ready for finalization?"

> "Show me the epoch statistics"

## Available Tools

### Passports
| Tool | Description |
|------|-------------|
| `lucid_create_passport` | Create a new passport (model/compute/tool/dataset/agent) |
| `lucid_list_passports` | List passports with filtering, sorting, and pagination |
| `lucid_get_passport` | Retrieve a passport by ID |
| `lucid_update_passport` | Update an existing passport |
| `lucid_delete_passport` | Soft-delete a passport |
| `lucid_trigger_passport_sync` | Trigger on-chain sync |
| `lucid_list_passports_pending_sync` | List passports pending sync |
| `lucid_get_passport_stats` | Get passport statistics |
| `lucid_search_models` | Search model passports |
| `lucid_search_compute` | Search compute passports |
| `lucid_list_tools` | List tool passports |
| `lucid_list_datasets` | List dataset passports |
| `lucid_list_agent_passports` | List agent passports |

### Match & Routing
| Tool | Description |
|------|-------------|
| `lucid_match_explain` | Evaluate a policy against compute & model metadata |
| `lucid_match` | Match compute for a model given constraints |
| `lucid_route` | Match + resolve an executable inference endpoint |

### Receipts & Proofs
| Tool | Description |
|------|-------------|
| `lucid_create_receipt` | Create a receipt and append to the MMR |
| `lucid_get_receipt` | Retrieve a receipt by ID |
| `lucid_verify_receipt` | Verify receipt hash, signature, and inclusion proof |
| `lucid_verify_receipt_by_hash` | Verify a receipt by its hash |
| `lucid_get_receipt_proof` | Get the inclusion proof for a receipt |
| `lucid_get_mmr_root` | Get the current MMR root and leaf count |
| `lucid_get_signer_pubkey` | Get the orchestrator signing public key |

### Epochs
| Tool | Description |
|------|-------------|
| `lucid_get_current_epoch` | Get the current epoch |
| `lucid_list_epochs` | List epochs |
| `lucid_create_epoch` | Create a new epoch |
| `lucid_get_epoch` | Get an epoch by ID |
| `lucid_retry_epoch` | Retry a failed epoch |
| `lucid_verify_epoch` | Verify an epoch anchor |
| `lucid_get_epoch_transaction` | Get epoch anchoring transaction |
| `lucid_commit_epoch_root` | Commit an epoch root to chain |
| `lucid_commit_epoch_roots_batch` | Commit multiple epoch roots |
| `lucid_get_anchoring_health` | Anchoring service health |
| `lucid_list_epochs_ready` | List epochs ready for finalization |
| `lucid_get_epoch_stats` | Get epoch statistics |

### Payouts
| Tool | Description |
|------|-------------|
| `lucid_calculate_payout` | Calculate payout split between recipients |
| `lucid_payout_from_receipt` | Create payout split from receipt token data |
| `lucid_get_payout` | Get payout by run_id |
| `lucid_verify_payout` | Verify payout split integrity |

### Compute
| Tool | Description |
|------|-------------|
| `lucid_heartbeat` | Submit a compute node heartbeat |
| `lucid_get_health` | Get compute node health state |

### AI Agents
| Tool | Description |
|------|-------------|
| `init_agent` | Initialize an AI agent for MMR proof-of-contribution |
| `process_agent_epoch` | Process an epoch of vectors for an agent |
| `process_agent_batch_epochs` | Process multiple epochs in batch |
| `generate_agent_proof` | Generate cryptographic proof of contribution |
| `get_agent_stats` | Get agent statistics and status |
| `get_agent_history` | Get agent MMR root history across epochs |
| `get_agent_root` | Get the current MMR root for an agent |
| `verify_agent_mmr` | Verify MMR integrity for an agent |
| `list_agents` | List all registered agents |

### Agent Orchestrator
| Tool | Description |
|------|-------------|
| `plan_agent_workflow` | Plan a workflow from a natural language goal |
| `accomplish_agent_goal` | Plan and execute a workflow in one call |
| `preview_agent_workflow` | Preview a workflow without executing |
| `execute_agent_flowspec` | Execute a FlowSpec with automatic executor selection |
| `validate_flowspec` | Validate a FlowSpec structure |
| `get_planner_info` | Get planner service info |
| `check_executor_health` | Check executor backend health |
| `get_executor_decision` | Get recommended executor for a FlowSpec |
| `get_agent_orchestrator_history` | Get agent execution history |
| `check_agent_orchestrator_health` | Agent orchestrator health check |

### Run Inference
| Tool | Description |
|------|-------------|
| `lucid_run_inference` | Run inference through LucidLayer |
| `lucid_chat_completions` | OpenAI-compatible chat completions |

### Health
| Tool | Description |
|------|-------------|
| `check_system_health` | Overall system health including all dependencies |
| `check_liveness` | Liveness probe |
| `check_readiness` | Readiness probe |
| `check_database_health` | Database connectivity and latency |
| `check_redis_health` | Redis connectivity and latency |
| `check_nango_health` | Nango service connectivity and latency |
| `get_detailed_health` | Detailed health with system resources and statistics |

## Development

Run locally without a published npm package:

```bash
git clone https://github.com/raijinlabs/lucid-ai-sdk.git
cd lucid-ai-sdk/mcp
npm install
npm run build
node ./bin/mcp-server.js start
```

To use this local version with Cursor, Claude, or other MCP clients:

```json
{
  "mcpServers": {
    "RaijinlabsMcp": {
      "command": "node",
      "args": ["./bin/mcp-server.js", "start"]
    }
  }
}
```

To debug with the MCP Inspector:

```bash
npx @modelcontextprotocol/inspector node ./bin/mcp-server.js start
```

## Contributions

While we value contributions to this MCP Server, the code is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation.
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

### MCP Server Created by [Speakeasy](https://www.speakeasy.com/?utm_source=raijinlabs-mcp&utm_campaign=mcp-typescript)
