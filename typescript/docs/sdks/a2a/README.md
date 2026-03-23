# A2A

## Overview

Google A2A protocol — agent cards, task submission, and task lifecycle

### Available Operations

* [lucidGetA2aAgentCard](#lucidgeta2aagentcard) - Get A2A Agent Card
* [lucidSendA2aTask](#lucidsenda2atask) - Send task to A2A agent
* [lucidDiscoverA2aAgent](#luciddiscovera2aagent) - Discover an external A2A agent
* [lucidGetA2aTask](#lucidgeta2atask) - Get A2A task status
* [lucidDeleteA2aTask](#luciddeletea2atask) - Delete an A2A task
* [lucidListA2aTasks](#lucidlista2atasks) - List A2A tasks for an agent

## lucidGetA2aAgentCard

Standard A2A discovery endpoint. Returns the Agent Card for
the specified agent, conforming to the A2A protocol spec.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_get_a2a_agent_card" method="get" path="/v1/a2a/{passportId}/agent.json" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.a2A.lucidGetA2aAgentCard({
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
import { a2ALucidGetA2aAgentCard } from "raijin-labs-lucid-ai/funcs/a2ALucidGetA2aAgentCard.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore();

async function run() {
  const res = await a2ALucidGetA2aAgentCard(raijinLabsLucidAi, {
    passportId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("a2ALucidGetA2aAgentCard failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidGetA2aAgentCardRequest](../../models/operations/lucidgeta2aagentcardrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.A2AAgentCard](../../models/a2aagentcard.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 404                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidSendA2aTask

Admin-only. Sends a task to an A2A-compatible agent. If the agent
has a deployment URL, the request is forwarded via the A2A client.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_send_a2a_task" method="post" path="/v1/a2a/{passportId}/tasks/send" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await raijinLabsLucidAi.a2A.lucidSendA2aTask({
    passportId: "<id>",
    body: {
      message: {
        parts: [
          {},
        ],
      },
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
import { a2ALucidSendA2aTask } from "raijin-labs-lucid-ai/funcs/a2ALucidSendA2aTask.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await a2ALucidSendA2aTask(raijinLabsLucidAi, {
    passportId: "<id>",
    body: {
      message: {
        parts: [
          {},
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("a2ALucidSendA2aTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidSendA2aTaskRequest](../../models/operations/lucidsenda2ataskrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.A2ATask](../../models/a2atask.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidDiscoverA2aAgent

Admin-only. Fetches the Agent Card from an external HTTPS URL.
Includes SSRF protection (blocks internal/private IPs).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_discover_a2a_agent" method="post" path="/v1/a2a/discover" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await raijinLabsLucidAi.a2A.lucidDiscoverA2aAgent({
    agentUrl: "https://unripe-bug.info/",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { a2ALucidDiscoverA2aAgent } from "raijin-labs-lucid-ai/funcs/a2ALucidDiscoverA2aAgent.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await a2ALucidDiscoverA2aAgent(raijinLabsLucidAi, {
    agentUrl: "https://unripe-bug.info/",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("a2ALucidDiscoverA2aAgent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidDiscoverA2aAgentRequest](../../models/operations/luciddiscovera2aagentrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidDiscoverA2aAgentResponse](../../models/operations/luciddiscovera2aagentresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 400, 404                             | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidGetA2aTask

Admin-only. Retrieves the current state of a task.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_get_a2a_task" method="get" path="/v1/a2a/{passportId}/tasks/{taskId}" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await raijinLabsLucidAi.a2A.lucidGetA2aTask({
    passportId: "<id>",
    taskId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { a2ALucidGetA2aTask } from "raijin-labs-lucid-ai/funcs/a2ALucidGetA2aTask.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await a2ALucidGetA2aTask(raijinLabsLucidAi, {
    passportId: "<id>",
    taskId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("a2ALucidGetA2aTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidGetA2aTaskRequest](../../models/operations/lucidgeta2ataskrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.A2ATask](../../models/a2atask.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 404                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidDeleteA2aTask

Admin-only. Deletes a task record. If the task is still in progress it is
canceled first, then the record is removed. Returns 404 if the task does
not exist.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_delete_a2a_task" method="delete" path="/v1/a2a/{passportId}/tasks/{taskId}" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await raijinLabsLucidAi.a2A.lucidDeleteA2aTask({
    passportId: "<id>",
    taskId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { a2ALucidDeleteA2aTask } from "raijin-labs-lucid-ai/funcs/a2ALucidDeleteA2aTask.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await a2ALucidDeleteA2aTask(raijinLabsLucidAi, {
    passportId: "<id>",
    taskId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("a2ALucidDeleteA2aTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidDeleteA2aTaskRequest](../../models/operations/luciddeletea2ataskrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidDeleteA2aTaskResponse](../../models/operations/luciddeletea2ataskresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 404                                  | application/json                     |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |

## lucidListA2aTasks

Admin-only. Lists tasks with optional state filter and pagination.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="lucid_list_a2a_tasks" method="get" path="/v1/a2a/{passportId}/tasks" -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await raijinLabsLucidAi.a2A.lucidListA2aTasks({
    passportId: "<id>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RaijinLabsLucidAiCore } from "raijin-labs-lucid-ai/core.js";
import { a2ALucidListA2aTasks } from "raijin-labs-lucid-ai/funcs/a2ALucidListA2aTasks.js";

// Use `RaijinLabsLucidAiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const raijinLabsLucidAi = new RaijinLabsLucidAiCore({
  bearerAuth: process.env["RAIJINLABSLUCIDAI_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await a2ALucidListA2aTasks(raijinLabsLucidAi, {
    passportId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("a2ALucidListA2aTasks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LucidListA2aTasksRequest](../../models/operations/lucidlista2atasksrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LucidListA2aTasksResponse](../../models/operations/lucidlista2atasksresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorResponse                 | 500                                  | application/json                     |
| errors.RaijinLabsLucidAiDefaultError | 4XX, 5XX                             | \*/\*                                |