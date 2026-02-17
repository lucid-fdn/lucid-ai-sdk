# EpochStatus

## Example Usage

```typescript
import { EpochStatus } from "raijin-labs-lucid-ai/models";

let value: EpochStatus = "open";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"open" | "anchoring" | "anchored" | "failed" | Unrecognized<string>
```