// One Word for the Boss — make.fun
// Competition: u-swift-badger-44-one-word-for-the-boss-6b48c735
//
// The entry is a single word written to /output/entry.txt (1-30 chars,
// no spaces, no caption, no explanation). The judge weighs, most
// important first:
//   1. a single word a person would actually use about their boss
//   2. funny on its own, the kind a colleague repeats at lunch
//   3. rings true, catching a real habit of bosses
//   4. fresh, not the first word anyone would reach for
//   5. travels, working in a kitchen, a warehouse or an office
//
// Two candidates were compared against those criteria in order:
//   - "nitpicker": a real word and instantly understood, but a standard
//     complaint word (weak on freshness) and more of a sigh than a laugh.
//   - "hoverer": a real word (one who hovers) for the boss who stands
//     behind your chair watching you type. It is funnier on its own,
//     just as true, clearly fresher, and travels to any workplace.
//     Criterion 1 differs only slightly between them, while criteria 2
//     and 4 differ clearly in "hoverer"'s favour, so it wins under the
//     judge's own ordering rule.
// Rejected: "micromanager" (first word anyone reaches for, fails
// freshness), hyphenated compounds (read as phrases, lose criterion 1),
// "seagull" (needs the insider "seagull manager" term to land — a word
// that needs a caption does less than one that stands alone).
//
// The program takes no input, uses no network, and writes exactly the
// word, with no trailing newline, so the file is the word and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "hoverer";
const OUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, WORD, "utf8");
