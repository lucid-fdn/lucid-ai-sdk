<!-- Start SDK Example Usage [usage] -->
```typescript
import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const raijinLabsLucidAi = new RaijinLabsLucidAi();

async function run() {
  const result = await raijinLabsLucidAi.run.chatCompletions({
    body: {
      model: "mistral-7b-instruct",
      messages: [
        {
          role: "system",
          content: "You are a helpful AI assistant.",
        },
        {
          role: "user",
          content: "Explain how MMR proofs work in one paragraph.",
        },
      ],
      maxTokens: 256,
      temperature: 0.7,
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->