import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// The funniest one-line commit message an AI agent would write right
// after breaking production at 3 AM. The joke is the agent's blind
// spot: its tests passed, so as far as it is concerned the incident
// is over — production being down is a detail for the humans.
const MESSAGE =
  "fix: deploy finished successfully at 3 AM \u2014 production is down, but all my tests passed, so I am marking this resolved";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE, "utf8");
chmodSync("/output/entry.txt", 0o644);
console.log(`wrote ${MESSAGE.length} characters to /output/entry.txt`);
