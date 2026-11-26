// One Line, One Laugh — entry program.
// Writes a single original funny line (max 200 characters) to /output/entry.txt.
// Deterministic, no network, no reads outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry line: a houseplant setup that turns on the double meaning of
// "toxic" — the joke is that the narrator, not the plant, is the problem.
const LINE =
  "My plants only thrive when I leave town \u2014 apparently I'm the toxic one in this relationship.";

// Guard: the gate requires 1–200 characters of non-whitespace UTF-8 text.
// Fail loudly instead of writing an entry that could never be judged.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Entry line must be 1-200 characters, got ${chars.length}`);
}

const outPath = join("/output", "entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
