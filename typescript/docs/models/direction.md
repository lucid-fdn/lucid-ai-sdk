# Direction

## Example Usage

```typescript
import { Direction } from "raijin-labs-lucid-ai/models";

let value: Direction = "R";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"L" | "R" | Unrecognized<string>
```