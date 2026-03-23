# State

## Example Usage

```typescript
import { State } from "raijin-labs-lucid-ai/models";

let value: State = "submitted";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"submitted" | "working" | "input-required" | "completed" | "failed" | "canceled" | Unrecognized<string>
```