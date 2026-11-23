// The Vacuum's Alibi: one line, 200 characters max.
// A robot vacuum explains why it missed a spot.
// Chosen line is 116 characters, single line, no trailing newline.
// Deterministic: no network, no Date.now, no Math.random.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I did not miss that spot. My lidar classified that dust as a load-bearing wall, and I am not insured for demolition.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only whitespace, on a single line.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`entry line fails the gate (${LINE.length} characters)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
