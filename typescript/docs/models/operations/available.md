# Available

Tri-state filter: 'true' returns only models that can serve inference (healthy compute or API-hosted), 'false' returns only unavailable models (missing compute), omit for all models

## Example Usage

```typescript
import { Available } from "raijin-labs-lucid-ai/models/operations";

let value: Available = "false";
```

## Values

```typescript
"true" | "false"
```