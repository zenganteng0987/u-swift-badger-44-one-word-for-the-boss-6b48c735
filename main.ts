// One Word for the Boss — make.fun
// Competition: u-swift-badger-44-one-word-for-the-boss-6b48c735
//
// The entry is a single word written to /output/entry.txt (1-30 chars,
// no spaces, no caption, no explanation). The brief's judge compares
// entries two at a time on three things, in this order:
//   1. how funny the word is
//   2. how true it rings
//   3. how fresh it feels
//
// Three candidates were compared against those criteria, funny first:
//   - "hoverer": the boss who stands behind your chair watching you
//     type. Funnier than the other two on its own — an instantly visual,
//     relatable office image — just as true (a real, universal boss
//     habit), and fresh: almost nobody labels a boss "hoverer".
//   - "Bosszilla": funny too (a monster stomping the office), and fresh
//     as an invented compound, but it rings less true — it only fits
//     the scary boss, not the everyday one.
//   - "Overlord": funny in a fantasy-villain way, but a stock word that
//     has been used a thousand times, so it loses on fresh, and it only
//     fits the authoritarian boss.
// "hoverer" wins: funniest of the three, truest, and fresh.
// Rejected: "micromanager" (first word anyone reaches for, fails
// freshness), "nitpicker" (a sigh, not a laugh), hyphenated compounds
// (read as phrases, not one word), "seagull" (needs the insider
// "seagull manager" term to land — a word that needs a caption does
// less than one that stands alone).
//
// The program takes no input, uses no network, and writes exactly the
// word, with no trailing newline, so the file is the word and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const WORD = "hoverer";

if (!/^[^\s]{1,30}$/.test(WORD)) {
  throw new Error("word must be exactly one word of 1-30 characters");
}

// The grader sets MAKEFUN_OUTPUT_DIR; fall back to /output/entry.txt.
const OUT_PATH = join(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", "entry.txt");

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, WORD, "utf8");
