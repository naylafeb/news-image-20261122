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
const DEFAULT_OUTPUT_DIR = '/output';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? DEFAULT_OUTPUT_DIR;

// Resolve the paths for one placement run: the image next to this file
// is the source, and the caller-chosen output directory holds the copy.
function resolvePaths(outputDir) {
  return {
    source: join(HERE, IMAGE_NAME),
    target: join(outputDir, IMAGE_NAME),
  };
}

// Place the entry image at the output directory, creating it first.
// The output is a byte-for-byte copy of the image next to this file.
function placeEntry(outputDir) {
  const { source, target } = resolvePaths(outputDir);
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, target);
}

placeEntry(OUTPUT_DIR);
