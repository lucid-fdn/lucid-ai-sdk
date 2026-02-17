# SystemHealthStatus

## Example Usage

```typescript
import { SystemHealthStatus } from "raijin-labs-lucid-ai/models";

let value: SystemHealthStatus = "degraded";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"healthy" | "degraded" | "down" | Unrecognized<string>
```