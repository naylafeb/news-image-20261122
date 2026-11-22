// Sunday 22 November 2026 news-image entry.
// Renders nothing at run time: the broadsheet image lives in entry.png
// next to this file, and this program places a copy at /output/entry.png.
// Node 22, standard library only.
//
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const IMAGE_NAME = 'entry.png';
const HERE = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(HERE, IMAGE_NAME), join(OUTPUT_DIR, IMAGE_NAME));
