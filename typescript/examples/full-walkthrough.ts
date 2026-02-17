/**
 * full-walkthrough.ts
 *
 * Comprehensive example demonstrating all major SDK features against a live
 * LucidLayer backend running on localhost:3001.
 *
 * Usage:
 *   npx tsx examples/full-walkthrough.ts
 */

import { RaijinLabsLucidAi } from "raijin-labs-lucid-ai";

const sdk = new RaijinLabsLucidAi({
  serverURL: "http://localhost:3001",
});

const OWNER = "7cBsSHBB4nSVQy6ceUvmrA8Z2ks8Me8AjxSUqvJ2q1S9";

function header(section: string) {
  console.log(`\n${"=".repeat(60)}`);
  console.log(`  ${section}`);
  console.log(`${"=".repeat(60)}\n`);
}

/**
 * Helper: the backend sometimes omits optional fields (e.g. `status`) that
 * the SDK schema marks as required, causing ResponseValidationError.
 * When that happens the raw parsed JSON is still available on `e.rawValue`.
 */
async function call<T>(fn: () => Promise<T>): Promise<T> {
  try {
    return await fn();
  } catch (e: any) {
    if (e.name === "ResponseValidationError" && e.rawValue) {
      console.log("  (response-validation recovered via rawValue)");
      return e.rawValue as T;
    }
    throw e;
  }
}

// ---------------------------------------------------------------------------
// 1. Health Checks
// ---------------------------------------------------------------------------
async function healthChecks() {
  header("1. Health Checks");

  const system = await sdk.health.checkSystemHealth();
  console.log("System health:", JSON.stringify(system, null, 2));

  const live = await sdk.health.checkLiveness();
  console.log("Liveness:", JSON.stringify(live, null, 2));
}

// ---------------------------------------------------------------------------
// 2. Passport CRUD
// ---------------------------------------------------------------------------
async function passportCrud(): Promise<{ modelId: string; computeId: string }> {
  header("2. Passport CRUD");

  const ts = Date.now();

  // Create a model passport (metadata must follow ModelMeta.schema.json)
  const model = await sdk.passports.create({
    type: "model",
    owner: OWNER,
    name: "walkthrough-model",
    description: "Example model passport from full walkthrough",
    version: "1.0.0",
    tags: ["example", "walkthrough"],
    metadata: {
      schema_version: "1.0",
      model_passport_id: `mdl-walkthrough-${ts}`,
      format: "gguf",
      runtime_recommended: "vllm",
      name: "walkthrough-model-7B",
      context_length: 4096,
      requirements: { min_vram_gb: 24 },
    },
  });
  console.log("Created model passport:", model.passportId);

  // Create a compute passport (metadata must follow ComputeMeta.schema.json)
  const compute = await sdk.passports.create({
    type: "compute",
    owner: OWNER,
    name: "walkthrough-compute",
    description: "Example compute passport from full walkthrough",
    version: "1.0.0",
    tags: ["example", "walkthrough"],
    metadata: {
      schema_version: "1.0",
      compute_passport_id: `cmp-walkthrough-${ts}`,
      provider_type: "cloud",
      regions: ["us-east-1"],
      hardware: { gpu: "NVIDIA-A100-80GB", vram_gb: 80 },
      runtimes: [{ name: "vllm", version: "0.4.0", image: "vllm/vllm:0.4.0" }],
      endpoints: { inference_url: "http://localhost:8080/v1" },
    },
  });
  console.log("Created compute passport:", compute.passportId);

  // List passports (may hit stale data → use call() helper)
  const list = await call(() =>
    sdk.passports.list({ owner: OWNER, tags: "walkthrough", perPage: 5 }),
  );
  console.log(
    "Listed passports:",
    list.passports.map((p: any) => `${p.passportId ?? p.passport_id} (${p.type})`),
  );

  // Get a single passport
  const fetched = await call(() =>
    sdk.passports.get({ passportId: model.passportId }),
  );
  console.log("Fetched passport name:", fetched.passport.name);

  // Update passport
  const updated = await call(() =>
    sdk.passports.update({
      passportId: model.passportId,
      xOwnerAddress: OWNER,
      body: {
        description: "Updated description from walkthrough",
        version: "1.0.1",
        tags: ["example", "walkthrough", "updated"],
      },
    }),
  );
  console.log("Updated passport:", JSON.stringify(updated.passport, null, 2));

  // Create a throwaway passport to delete
  const throwaway = await sdk.passports.create({
    type: "tool",
    owner: OWNER,
    name: "throwaway-passport",
    metadata: { temp: true },
  });
  const deleted = await sdk.passports.delete({
    passportId: throwaway.passportId,
    xOwnerAddress: OWNER,
  });
  console.log("Deleted throwaway passport:", deleted.deleted);

  return { modelId: model.passportId, computeId: compute.passportId };
}

// ---------------------------------------------------------------------------
// 3. Passport Search & Stats
// ---------------------------------------------------------------------------
async function passportSearch() {
  header("3. Passport Search & Stats");

  const stats = await sdk.passports.getStats();
  console.log("Passport stats:", JSON.stringify(stats, null, 2));

  const models = await call(() =>
    sdk.passports.searchModels({ search: "walkthrough", perPage: 5 }),
  );
  console.log("Model search results:", JSON.stringify(models, null, 2));

  const tools = await call(() =>
    sdk.passports.lucidListTools({ perPage: 5 }),
  );
  console.log("Tools list:", JSON.stringify(tools, null, 2));
}

// ---------------------------------------------------------------------------
// 4. Match & Explain
// ---------------------------------------------------------------------------
async function matchExplain(): Promise<string> {
  header("4. Match & Explain");

  const result = await call(() =>
    sdk.match.explain({
      policy: {
        policyVersion: "1.0",
        allowRegions: ["us-east-1", "eu-west-1"],
        residencyRequired: false,
        attestation: {
          attestationRequired: false,
          requireCcOn: false,
          fallbackAllowed: true,
        },
        latency: {
          p95MsBudget: 3000,
          hardTimeoutMs: 10000,
        },
        cost: {
          maxPricePer1kTokensUsd: 0.05,
          spotOnly: false,
        },
        privacy: {
          storeInputs: false,
          redactPii: true,
        },
      },
      computeMeta: {
        schema_version: "1.0",
        compute_passport_id: "cmp-match-example",
        provider_type: "cloud",
        regions: ["us-east-1"],
        hardware: { gpu: "NVIDIA-A100-80GB", vram_gb: 80 },
        runtimes: [{ name: "vllm", version: "0.4.0", image: "vllm/vllm:0.4.0" }],
        endpoints: { inference_url: "http://localhost:8080/v1" },
        pricing: { price_per_1k_tokens_estimate: 0.02 },
        network: { p95_ms_estimate: 1500 },
        capabilities: { supports_attestation: false },
      },
      modelMeta: {
        schema_version: "1.0",
        model_passport_id: "mdl-match-example",
        format: "gguf",
        runtime_recommended: "vllm",
        requirements: { min_vram_gb: 24 },
      },
    }),
  );

  const policyHash = result.policyHash ?? (result as any).policy_hash;
  console.log("Match allowed:", result.allowed);
  console.log("Reasons:", result.reasons);
  console.log("Policy hash:", policyHash);

  return policyHash;
}

// ---------------------------------------------------------------------------
// 5. Receipts & Proofs
// ---------------------------------------------------------------------------
async function receiptsAndProofs(
  modelId: string,
  computeId: string,
  policyHash: string,
): Promise<string> {
  header("5. Receipts & Proofs");

  // Create a receipt (policyHash must be 64-char hex, reuse the one from match/explain)
  const created = await call(() =>
    sdk.receipts.create({
      modelPassportId: modelId,
      computePassportId: computeId,
      policyHash,
      runtime: "vllm",
      tokensIn: 128,
      tokensOut: 256,
      ttftMs: 120,
      totalLatencyMs: 850,
      traceId: `walkthrough-${Date.now()}`,
      executionMode: "standard",
    }),
  );
  const receipt = created.receipt;
  const receiptId = receipt.runId ?? (receipt as any).run_id;
  console.log("Created receipt:", receiptId);
  console.log(
    "Receipt hash:",
    receipt.receiptHash ?? (receipt as any).receipt_hash,
  );

  // Get the receipt
  const fetched = await call(() => sdk.receipts.get({ receiptId }));
  console.log("Fetched receipt runtime:", fetched.receipt.runtime);
  const m = fetched.receipt.metrics ?? (fetched.receipt as any);
  console.log("Tokens in/out:", m.tokensIn ?? m.tokens_in, "/", m.tokensOut ?? m.tokens_out);

  // Verify the receipt
  const verification = await call(() => sdk.receipts.verify({ receiptId }));
  console.log("Receipt valid:", verification.isValid ?? (verification as any).is_valid);

  // Get inclusion proof
  const proof = await call(() => sdk.receipts.getProof({ receiptId }));
  console.log("Proof:", JSON.stringify(proof.proof, null, 2));

  // Get MMR root
  const mmrRoot = await call(() => sdk.receipts.getMmrRoot());
  console.log("MMR root:", JSON.stringify(mmrRoot, null, 2));

  // Get signer public key
  const signer = await call(() => sdk.receipts.getSignerPubKey());
  console.log("Signer pubkey:", JSON.stringify(signer, null, 2));

  return receiptId;
}

// ---------------------------------------------------------------------------
// 6. Agent MMR
// ---------------------------------------------------------------------------
async function agentMmr() {
  header("6. Agent MMR");

  const agentId = `walkthrough-agent-${Date.now()}`;

  // Initialize agent
  const init = await call(() => sdk.agents.initAgent({ agentId }));
  console.log("Initialized agent:", JSON.stringify(init, null, 2));

  // Process an epoch with vectors (epochNumber must be >= 1)
  const epoch = await call(() =>
    sdk.agents.processAgentEpoch({
      agentId,
      epochNumber: 1,
      vectors: [
        "The cat sat on the mat",
        "Inference completed with 256 tokens",
        "Model loaded in 1.2 seconds",
      ],
    }),
  );
  console.log("Processed epoch:", JSON.stringify(epoch, null, 2));

  // Generate proof for a specific vector
  const proof = await call(() =>
    sdk.agents.generateAgentProof({
      agentId,
      epochNumber: 1,
      vectorText: "The cat sat on the mat",
    }),
  );
  console.log("Agent proof:", JSON.stringify(proof, null, 2));

  // Get agent stats
  const stats = await call(() => sdk.agents.getAgentStats({ agentId }));
  console.log("Agent stats:", JSON.stringify(stats, null, 2));

  // Get agent history
  const history = await call(() => sdk.agents.getAgentHistory({ agentId }));
  console.log("Agent history:", JSON.stringify(history, null, 2));

  // Verify agent MMR
  const verify = await call(() => sdk.agents.verifyAgentMmr({ agentId }));
  console.log("MMR verification:", JSON.stringify(verify, null, 2));

  // List all agents
  const agents = await call(() => sdk.agents.listAgents());
  console.log("All agents:", JSON.stringify(agents, null, 2));
}

// ---------------------------------------------------------------------------
// 7. Payouts
// ---------------------------------------------------------------------------
async function payouts(receiptRunId: string) {
  header("7. Payouts");

  const computeWallet = "COMPUTEwa11et1111111111111111111111111111111";
  const modelWallet = "MODELwa11et11111111111111111111111111111111111";
  const orchestratorWallet = OWNER;

  // Calculate payout
  const calcRunId = `calc-${Date.now()}`;
  const calculated = await call(() =>
    sdk.payouts.calculate({
      runId: calcRunId,
      totalAmountLamports: 1_000_000,
      computeWallet,
      modelWallet,
      orchestratorWallet,
    }),
  );
  console.log("Calculated payout:", JSON.stringify(calculated, null, 2));

  // Create payout from receipt token data
  const fromReceiptRunId = `from-receipt-${Date.now()}`;
  const fromReceipt = await call(() =>
    sdk.payouts.createFromReceipt({
      runId: fromReceiptRunId,
      tokensIn: 128,
      tokensOut: 256,
      pricePer1kTokensLamports: 5000,
      computeWallet,
      modelWallet,
      orchestratorWallet,
    }),
  );
  console.log("Payout from receipt:", JSON.stringify(fromReceipt, null, 2));

  // Get payout
  const fetched = await call(() => sdk.payouts.get({ runId: calcRunId }));
  console.log("Fetched payout:", JSON.stringify(fetched, null, 2));

  // Verify payout
  const verified = await call(() => sdk.payouts.verify({ runId: calcRunId }));
  console.log("Payout verification:", JSON.stringify(verified, null, 2));
}

// ---------------------------------------------------------------------------
// 8. Epochs
// ---------------------------------------------------------------------------
async function epochs() {
  header("8. Epochs");

  // Get current epoch
  const current = await call(() => sdk.epochs.getCurrent({}));
  console.log("Current epoch:", JSON.stringify(current, null, 2));

  // List epochs
  const list = await call(() => sdk.epochs.list({}));
  console.log("Epochs list:", JSON.stringify(list, null, 2));

  // Get epoch stats
  const stats = await call(() => sdk.epochs.getStats());
  console.log("Epoch stats:", JSON.stringify(stats, null, 2));
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  console.log("LucidLayer SDK Full Walkthrough");
  console.log(`Backend: http://localhost:3001`);
  console.log(`Owner:   ${OWNER}`);

  await healthChecks();
  const { modelId, computeId } = await passportCrud();
  await passportSearch();
  const policyHash = await matchExplain();
  const receiptRunId = await receiptsAndProofs(modelId, computeId, policyHash);
  await agentMmr();
  await payouts(receiptRunId);
  await epochs();

  header("Done!");
  console.log("All sections completed successfully.");
}

main().catch((err) => {
  console.error("Walkthrough failed:", err);
  process.exit(1);
});
