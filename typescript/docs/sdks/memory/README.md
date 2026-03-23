# Memory

## Overview

Agent memory — episodic, semantic, procedural, entity, trust-weighted, temporal types with hash-chain provenance

### Available Operations

* [lucidAddEpisodicMemory](#lucidaddepisodicmemory) - Store episodic memory
* [lucidAddSemanticMemory](#lucidaddsemanticmemory) - Store semantic memory (extracted fact)
* [lucidAddProceduralMemory](#lucidaddproceduralmemory) - Store procedural memory (learned rule)
* [lucidAddEntityMemory](#lucidaddentitymemory) - Store entity memory (knowledge graph node)
* [lucidAddTrustWeightedMemory](#lucidaddtrustweightedmemory) - Store trust-weighted memory (cross-agent trust)
* [lucidAddTemporalMemory](#lucidaddtemporalmemory) - Store temporal memory (time-bounded fact)
* [lucidRecallMemory](#lucidrecallmemory) - Recall relevant memories via two-stage retrieval
* [lucidCompactMemory](#lucidcompactmemory) - Trigger memory compaction
* [lucidMemoryHealth](#lucidmemoryhealth) - Memory store health and diagnostics
* [lucidStartMemorySession](#lucidstartmemorysession) - Start a new conversation session
* [lucidListMemorySessions](#lucidlistmemorysessions) - List sessions for an agent
* [lucidVerifyMemoryChain](#lucidverifymemorychain) - Verify memory hash chain integrity
* [lucidGetMemoryEntry](#lucidgetmemoryentry) - Read a single memory entry
* [lucidListMemoryEntries](#lucidlistmemoryentries) - List memory entries with filters
* [lucidCloseMemorySession](#lucidclosememorysession) - Close a memory session
* [lucidGetMemorySessionContext](#lucidgetmemorysessioncontext) - Get session context
* [lucidGetMemoryProvenanceChain](#lucidgetmemoryprovenancechain) - Get provenance chain
* [lucidGetMemoryEntryProvenance](#lucidgetmemoryentryprovenance) - Single entry provenance
* [lucidGetMemoryStats](#lucidgetmemorystats) - Memory diagnostics

## lucidAddEpisodicMemory

Store a conversation turn as episodic memory. Requires session_id, role, and content.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_add_episodic_memory" method="post" path="/v1/memory/episodic" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.memory.lucidAddEpisodicMemory({
    xAgentPassportId: "<id>",
    body: {
      sessionId: "<id>",
      role: "tool",
      content: "<value>",
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
import { memoryLucidAddEpisodicMemory } from "raijin-labs-lucid-ai/funcs/memoryLucidAddEpisodicMemory.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await memoryLucidAddEpisodicMemory(raijinLabsLucidAi, {
    xAgentPassportId: "<id>",
    body: {
      sessionId: "<id>",
      role: "tool",
      content: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memoryLucidAddEpisodicMemory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidAddEpisodicMemoryRequest](../../models/operations/lucidaddepisodicmemoryrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MemoryWriteResponse](../../models/memorywriteresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidAddSemanticMemory

Store semantic memory (extracted fact)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_add_semantic_memory" method="post" path="/v1/memory/semantic" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.memory.lucidAddSemanticMemory({
    xAgentPassportId: "<id>",
    body: {
      fact: "<value>",
      confidence: 4432.89,
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
import { memoryLucidAddSemanticMemory } from "raijin-labs-lucid-ai/funcs/memoryLucidAddSemanticMemory.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await memoryLucidAddSemanticMemory(raijinLabsLucidAi, {
    xAgentPassportId: "<id>",
    body: {
      fact: "<value>",
      confidence: 4432.89,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memoryLucidAddSemanticMemory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidAddSemanticMemoryRequest](../../models/operations/lucidaddsemanticmemoryrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MemoryWriteResponse](../../models/memorywriteresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidAddProceduralMemory

Store procedural memory (learned rule)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_add_procedural_memory" method="post" path="/v1/memory/procedural" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.memory.lucidAddProceduralMemory({
    xAgentPassportId: "<id>",
    body: {
      rule: "<value>",
      trigger: "<value>",
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
import { memoryLucidAddProceduralMemory } from "raijin-labs-lucid-ai/funcs/memoryLucidAddProceduralMemory.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await memoryLucidAddProceduralMemory(raijinLabsLucidAi, {
    xAgentPassportId: "<id>",
    body: {
      rule: "<value>",
      trigger: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memoryLucidAddProceduralMemory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidAddProceduralMemoryRequest](../../models/operations/lucidaddproceduralmemoryrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MemoryWriteResponse](../../models/memorywriteresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidAddEntityMemory

Store entity memory (knowledge graph node)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_add_entity_memory" method="post" path="/v1/memory/entity" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.memory.lucidAddEntityMemory({
    xAgentPassportId: "<id>",
    body: {
      entityName: "<value>",
      entityType: "<value>",
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
import { memoryLucidAddEntityMemory } from "raijin-labs-lucid-ai/funcs/memoryLucidAddEntityMemory.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await memoryLucidAddEntityMemory(raijinLabsLucidAi, {
    xAgentPassportId: "<id>",
    body: {
      entityName: "<value>",
      entityType: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memoryLucidAddEntityMemory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidAddEntityMemoryRequest](../../models/operations/lucidaddentitymemoryrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MemoryWriteResponse](../../models/memorywriteresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidAddTrustWeightedMemory

Store trust-weighted memory (cross-agent trust)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_add_trust_weighted_memory" method="post" path="/v1/memory/trust-weighted" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.memory.lucidAddTrustWeightedMemory({
    xAgentPassportId: "<id>",
    body: {
      sourceAgentPassportId: "<id>",
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
import { memoryLucidAddTrustWeightedMemory } from "raijin-labs-lucid-ai/funcs/memoryLucidAddTrustWeightedMemory.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await memoryLucidAddTrustWeightedMemory(raijinLabsLucidAi, {
    xAgentPassportId: "<id>",
    body: {
      sourceAgentPassportId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memoryLucidAddTrustWeightedMemory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidAddTrustWeightedMemoryRequest](../../models/operations/lucidaddtrustweightedmemoryrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MemoryWriteResponse](../../models/memorywriteresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidAddTemporalMemory

Store temporal memory (time-bounded fact)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_add_temporal_memory" method="post" path="/v1/memory/temporal" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.memory.lucidAddTemporalMemory({
    xAgentPassportId: "<id>",
    body: {
      content: "<value>",
      validFrom: 352529,
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
import { memoryLucidAddTemporalMemory } from "raijin-labs-lucid-ai/funcs/memoryLucidAddTemporalMemory.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await memoryLucidAddTemporalMemory(raijinLabsLucidAi, {
    xAgentPassportId: "<id>",
    body: {
      content: "<value>",
      validFrom: 352529,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memoryLucidAddTemporalMemory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidAddTemporalMemoryRequest](../../models/operations/lucidaddtemporalmemoryrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MemoryWriteResponse](../../models/memorywriteresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidRecallMemory

Two-stage recall: vector similarity search (if embeddings available) followed by metadata-aware reranking.
Scoring: 0.55*similarity + 0.20*recency + 0.15*type_bonus + 0.10*quality.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_recall_memory" method="post" path="/v1/memory/recall" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.memory.lucidRecallMemory({
    xAgentPassportId: "<id>",
    body: {
      query: "<value>",
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
import { memoryLucidRecallMemory } from "raijin-labs-lucid-ai/funcs/memoryLucidRecallMemory.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await memoryLucidRecallMemory(raijinLabsLucidAi, {
    xAgentPassportId: "<id>",
    body: {
      query: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memoryLucidRecallMemory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidRecallMemoryRequest](../../models/operations/lucidrecallmemoryrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MemoryRecallResponse](../../models/memoryrecallresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidCompactMemory

Tiered compaction: warm (archive old episodics), cold (hard-prune archived past retention).
Self-healing: auto-compacts before rejecting writes when limits are exceeded.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_compact_memory" method="post" path="/v1/memory/compact" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.memory.lucidCompactMemory({
    xAgentPassportId: "<id>",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { memoryLucidCompactMemory } from "raijin-labs-lucid-ai/funcs/memoryLucidCompactMemory.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await memoryLucidCompactMemory(raijinLabsLucidAi, {
    xAgentPassportId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memoryLucidCompactMemory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidCompactMemoryRequest](../../models/operations/lucidcompactmemoryrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidCompactMemoryResponse](../../models/operations/lucidcompactmemoryresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidMemoryHealth

Returns store type, entry/vector counts, embedding pipeline status, and store capabilities.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_memory_health" method="get" path="/v1/memory/health" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.memory.lucidMemoryHealth({
    xAgentPassportId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { memoryLucidMemoryHealth } from "raijin-labs-lucid-ai/funcs/memoryLucidMemoryHealth.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await memoryLucidMemoryHealth(raijinLabsLucidAi, {
    xAgentPassportId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memoryLucidMemoryHealth failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidMemoryHealthRequest](../../models/operations/lucidmemoryhealthrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidMemoryHealthResponse](../../models/operations/lucidmemoryhealthresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidStartMemorySession

Start a new conversation session

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_start_memory_session" method="post" path="/v1/memory/sessions" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.memory.lucidStartMemorySession({
    xAgentPassportId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { memoryLucidStartMemorySession } from "raijin-labs-lucid-ai/funcs/memoryLucidStartMemorySession.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await memoryLucidStartMemorySession(raijinLabsLucidAi, {
    xAgentPassportId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memoryLucidStartMemorySession failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidStartMemorySessionRequest](../../models/operations/lucidstartmemorysessionrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidStartMemorySessionResponse](../../models/operations/lucidstartmemorysessionresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidListMemorySessions

List sessions for an agent

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_list_memory_sessions" method="get" path="/v1/memory/sessions" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.memory.lucidListMemorySessions({
    xAgentPassportId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { memoryLucidListMemorySessions } from "raijin-labs-lucid-ai/funcs/memoryLucidListMemorySessions.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await memoryLucidListMemorySessions(raijinLabsLucidAi, {
    xAgentPassportId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memoryLucidListMemorySessions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidListMemorySessionsRequest](../../models/operations/lucidlistmemorysessionsrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidListMemorySessionsResponse](../../models/operations/lucidlistmemorysessionsresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidVerifyMemoryChain

Verify memory hash chain integrity

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_verify_memory_chain" method="post" path="/v1/memory/verify" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.memory.lucidVerifyMemoryChain({
    agentPassportId: "<id>",
    namespace: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { memoryLucidVerifyMemoryChain } from "raijin-labs-lucid-ai/funcs/memoryLucidVerifyMemoryChain.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await memoryLucidVerifyMemoryChain(raijinLabsLucidAi, {
    agentPassportId: "<id>",
    namespace: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memoryLucidVerifyMemoryChain failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidVerifyMemoryChainRequest](../../models/operations/lucidverifymemorychainrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidVerifyMemoryChainResponse](../../models/operations/lucidverifymemorychainresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidGetMemoryEntry

Retrieve a single memory entry by its unique identifier.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_get_memory_entry" method="get" path="/v1/memory/entries/{id}" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.memory.lucidGetMemoryEntry({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { memoryLucidGetMemoryEntry } from "raijin-labs-lucid-ai/funcs/memoryLucidGetMemoryEntry.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await memoryLucidGetMemoryEntry(raijinLabsLucidAi, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memoryLucidGetMemoryEntry failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidGetMemoryEntryRequest](../../models/operations/lucidgetmemoryentryrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidGetMemoryEntryResponse](../../models/operations/lucidgetmemoryentryresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 404                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidListMemoryEntries

List memory entries for an agent, optionally filtered by type and namespace.
Supports pagination via page and per_page query parameters.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_list_memory_entries" method="get" path="/v1/memory/entries" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.memory.lucidListMemoryEntries({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { memoryLucidListMemoryEntries } from "raijin-labs-lucid-ai/funcs/memoryLucidListMemoryEntries.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await memoryLucidListMemoryEntries(raijinLabsLucidAi, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memoryLucidListMemoryEntries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidListMemoryEntriesRequest](../../models/operations/lucidlistmemoryentriesrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidListMemoryEntriesResponse](../../models/operations/lucidlistmemoryentriesresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidCloseMemorySession

Close an active memory session, preventing further writes.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_close_memory_session" method="post" path="/v1/memory/sessions/{id}/close" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.memory.lucidCloseMemorySession({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { memoryLucidCloseMemorySession } from "raijin-labs-lucid-ai/funcs/memoryLucidCloseMemorySession.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await memoryLucidCloseMemorySession(raijinLabsLucidAi, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memoryLucidCloseMemorySession failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidCloseMemorySessionRequest](../../models/operations/lucidclosememorysessionrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidCloseMemorySessionResponse](../../models/operations/lucidclosememorysessionresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidGetMemorySessionContext

Retrieve the full context for a memory session, including recent turns,
extracted facts, and relevant procedural rules.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_get_memory_session_context" method="get" path="/v1/memory/sessions/{id}/context" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.memory.lucidGetMemorySessionContext({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { memoryLucidGetMemorySessionContext } from "raijin-labs-lucid-ai/funcs/memoryLucidGetMemorySessionContext.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await memoryLucidGetMemorySessionContext(raijinLabsLucidAi, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memoryLucidGetMemorySessionContext failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidGetMemorySessionContextRequest](../../models/operations/lucidgetmemorysessioncontextrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidGetMemorySessionContextResponse](../../models/operations/lucidgetmemorysessioncontextresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidGetMemoryProvenanceChain

Return the full hash-chain provenance for a given agent and namespace,
ordered from oldest to newest.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_get_memory_provenance_chain" method="get" path="/v1/memory/provenance/{agent_id}/{namespace}" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.memory.lucidGetMemoryProvenanceChain({
    agentId: "<id>",
    namespace: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { memoryLucidGetMemoryProvenanceChain } from "raijin-labs-lucid-ai/funcs/memoryLucidGetMemoryProvenanceChain.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await memoryLucidGetMemoryProvenanceChain(raijinLabsLucidAi, {
    agentId: "<id>",
    namespace: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memoryLucidGetMemoryProvenanceChain failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidGetMemoryProvenanceChainRequest](../../models/operations/lucidgetmemoryprovenancechainrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidGetMemoryProvenanceChainResponse](../../models/operations/lucidgetmemoryprovenancechainresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidGetMemoryEntryProvenance

Retrieve the provenance record for a single memory entry.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_get_memory_entry_provenance" method="get" path="/v1/memory/provenance/entry/{id}" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.memory.lucidGetMemoryEntryProvenance({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { memoryLucidGetMemoryEntryProvenance } from "raijin-labs-lucid-ai/funcs/memoryLucidGetMemoryEntryProvenance.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await memoryLucidGetMemoryEntryProvenance(raijinLabsLucidAi, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memoryLucidGetMemoryEntryProvenance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidGetMemoryEntryProvenanceRequest](../../models/operations/lucidgetmemoryentryprovenancerequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidGetMemoryEntryProvenanceResponse](../../models/operations/lucidgetmemoryentryprovenanceresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 404                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidGetMemoryStats

Return memory statistics and diagnostics for a specific agent, including
entry counts by type, storage usage, and hash chain integrity status.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_get_memory_stats" method="get" path="/v1/memory/stats/{agent_id}" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.memory.lucidGetMemoryStats({
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
import { memoryLucidGetMemoryStats } from "raijin-labs-lucid-ai/funcs/memoryLucidGetMemoryStats.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await memoryLucidGetMemoryStats(raijinLabsLucidAi, {
    agentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("memoryLucidGetMemoryStats failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidGetMemoryStatsRequest](../../models/operations/lucidgetmemorystatsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidGetMemoryStatsResponse](../../models/operations/lucidgetmemorystatsresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |