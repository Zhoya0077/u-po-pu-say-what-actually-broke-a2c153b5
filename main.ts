import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Say What Actually Broke — one honest, funny error line.
// The failure is specific (the disk filled up mid-save), the fix is
// plain (free some space, then retry), and the joke is the file being
// left homeless by the whole thing.
const ENTRY =
  "The server ran out of disk space halfway through saving, so your file is currently homeless. Delete something old, hit retry, and we'll pretend this never happened.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
