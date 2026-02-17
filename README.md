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

```bash
npm install raijin-labs-lucid-ai
```

See [`typescript/README.md`](./typescript/README.md) for full documentation.

## MCP Server

The MCP server exposes all LucidLayer API operations as MCP tools, enabling AI assistants (Claude, etc.) to interact with the platform directly.

```bash
npm install raijinlabs-mcp
```

See [`mcp/README.md`](./mcp/README.md) for setup and configuration.

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
