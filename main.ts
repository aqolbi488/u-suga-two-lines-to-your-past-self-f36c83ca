// Two Lines to Your Past Self — deterministic entry writer.
// Writes exactly two lines to /output/entry.txt. No network, no
// randomness, no environment reads, no time dependence: the same
// fixed text on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "When the landlord offers the ground-floor flat for two hundred less if you pay the year up front, say no.\n" +
  "The discount bought a flat that flooded every spring, and you spent three years bailing out your own furniture.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
