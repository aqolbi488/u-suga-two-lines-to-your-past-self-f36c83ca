// Two Lines to Your Past Self — deterministic entry writer.
// Writes exactly two lines to /output/entry.txt. No network, no
// randomness, no environment reads, no time dependence: the same
// fixed text on every run.
//
// The entry is built from two named parts so each line's job is
// explicit: MOMENT warns about one specific decision, CONSEQUENCE
// states what that decision cost.
import { mkdirSync, writeFileSync } from "node:fs";

// Line 1: one sentence, one specific moment — the landlord's offer.
const MOMENT =
  "When the landlord offers the ground-floor flat for two hundred less if you pay the year up front, say no.";

// Line 2: one sentence, the cause and effect — what the discount cost.
const CONSEQUENCE =
  "That discount bought a flat that flooded every spring, and you spent the next three years bailing out your own furniture.";

const ENTRY = `${MOMENT}\n${CONSEQUENCE}\n`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
