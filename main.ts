// The World Today — Tuesday 24 November 2026.
//
// Writes the front-page image (entry.png, 1024x1024, under 1 MiB) to
// $MAKEFUN_OUTPUT_DIR/entry.png. Node 22, standard library only, no network.
// Before copying it validates the PNG signature, the 1 MiB size cap and the
// 1024x1024 dimensions from the IHDR chunk, then verifies the copy is
// byte-for-byte identical, so two runs always write the same bytes.

import { copyFileSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1048576;
const MAX_SIDE = 1024;

function fail(message) {
  throw new Error(`entry.png rejected: ${message}`);
}

function checkPng(bytes) {
  if (bytes.length < 33) fail(`too short (${bytes.length} bytes)`);
  if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) fail("bad PNG signature");
  if (bytes.length > MAX_BYTES) fail(`${bytes.length} bytes over the 1 MiB cap`);
  // IHDR is the first chunk: length (4) + "IHDR" (4) + width (4) + height (4).
  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  if (bytes.toString("ascii", 12, 16) !== "IHDR") fail("first chunk is not IHDR");
  if (width > MAX_SIDE || height > MAX_SIDE) {
    fail(`dimensions ${width}x${height} over the 1024x1024 cap`);
  }
  return { width, height };
}

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) fail("MAKEFUN_OUTPUT_DIR is not set");
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");

const bytes = readFileSync(source);
const { width, height } = checkPng(bytes);
copyFileSync(source, dest);

// Verify the copy: same size, same bytes, still a valid PNG.
const copied = readFileSync(dest);
if (copied.length !== bytes.length) fail("copy size differs from source");
if (!copied.equals(bytes)) fail("copy bytes differ from source");
checkPng(copied);
if (sha256(copied) !== sha256(bytes)) fail("copy hash differs from source");

console.log(
  `entry.png ${width}x${height}, ${bytes.length} bytes, sha256 ${sha256(bytes)} -> ${dest}`,
);
