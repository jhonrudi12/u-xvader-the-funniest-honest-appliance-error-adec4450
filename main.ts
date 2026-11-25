// The Funniest Honest Appliance Error — make.fun entry.
// Writes one line (<=200 chars) to /output/entry.txt. Deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "ERROR 04: Drum bearing seized. After 11 years of unbalanced loads, the drum has stopped spinning and will not be taking questions.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
