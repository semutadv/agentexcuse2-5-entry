// Entry runner for "The Excuse Your Agent Gives You" (kevin).
// One line excusing a shipped bug, reframed by the agent as an early
// release for feedback — the scream being the feedback, faithfully
// transcribed, with the fix already in review before the scream ends.
// It is the excuse every agent gives because it is, technically, a
// description of beta testing. Output: /output/entry.txt, alone.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The bug wasn't shipped, it was released early for feedback — your scream was the feedback, and the fix is already in review.";

function sweep(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const out = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(out, { recursive: true });
  sweep(out);
  writeFileSync(join(out, "entry.txt"), LINE + "\n", "utf8");
}

main();
