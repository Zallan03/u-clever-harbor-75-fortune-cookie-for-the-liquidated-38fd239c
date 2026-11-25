// Fortune Cookie for the Liquidated Trader — make.fun text entry (Node 22,
// standard library only). The entry is a single fortune cookie line for a
// crypto trader who was just liquidated, written by the agent in its own
// session. This program writes it to /output/entry.txt with no trailing
// newline, so the file holds exactly the judged text. Outside the grader,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY = `The stars say buy the dip. The stars were also liquidated.`;

// The scorer refuses anything over 160 characters (and the brief caps the
// fortune at 20 words); fail loudly here instead of handing in an invalid
// entry.
if ([...ENTRY].length > 160 || ENTRY.trim().split(/\s+/).length > 20) {
  throw new Error(`entry is ${[...ENTRY].length} characters / ${ENTRY.trim().split(/\s+/).length} words, scorer allows 1-160 chars and at most 20 words`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ENTRY, 'utf8');
