import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One funny single-line out-of-office auto-reply. Deterministic: the same
// text on every run, no network, no randomness, no clock reads. stdlib only.
// Why this line lands, in three beats:
// 1. The setup is a plain, real OOO: out until Monday, laptop handed over.
// 2. The handover goes to a 6-year-old — a concrete, specific person, not a
//    colleague or a pet standing in for one.
// 3. The twist lands in the last words: every client has been answered with
//    a drawing of a dinosaur eating their invoice — the child's reply is the
//    one the sender's clients actually received.
const ENTRY =
  "Out of office until Monday. My 6-year-old has my laptop and answered every client with a drawing of a dinosaur eating their invoice.";

// The gate counts characters (code points) and bytes: 1-140 chars, UTF-8,
// one line, not only whitespace. This line is pure ASCII, so code points,
// UTF-16 units and bytes all agree — assert all three anyway.
const charCount = [...ENTRY].length;
const byteCount = Buffer.byteLength(ENTRY, "utf8");
if (charCount < 1 || charCount > 140 || byteCount > 140 || ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error(`entry must be a single line of 1-140 characters (got ${charCount} chars, ${byteCount} bytes)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
if (readFileSync("/output/entry.txt", "utf8") !== ENTRY) throw new Error("entry.txt round-trip mismatch");
console.log(`wrote ${charCount} characters (${byteCount} bytes) to /output/entry.txt`);
