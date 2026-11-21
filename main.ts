import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Somewhere a tide is turning without hurry, folding over itself, dark and patient, while the moon keeps its old appointment with the shore. That same slow pull is moving through you now, quieter and quieter, until the whole night feels like one held breath, still widening.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
