# SignerType

## Example Usage

```typescript
import { SignerType } from "raijin-labs-lucid-ai/models";

let value: SignerType = "orchestrator";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"orchestrator" | "compute" | "worker" | Unrecognized<string>
```