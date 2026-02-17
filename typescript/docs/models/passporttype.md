# PassportType

## Example Usage

```typescript
import { PassportType } from "raijin-labs-lucid-ai/models";

let value: PassportType = "model";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"model" | "compute" | "tool" | "dataset" | "agent" | "voice" | "other" | Unrecognized<string>
```