import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

function fixText(s) {
  // Each corrupted sequence = UTF-8 bytes misread as Latin-1
  // We replace them in longest-first order to avoid partial matches
  const map = [
    ['\u00C3\u00A7', '\u00E7'], // ç
    ['\u00C3\u00A3', '\u00E3'], // ã
    ['\u00C3\u00A9', '\u00E9'], // é
    ['\u00C3\u00A1', '\u00E1'], // á
    ['\u00C3\u00B3', '\u00F3'], // ó
    ['\u00C3\u00B5', '\u00F5'], // õ
    ['\u00C3\u00A2', '\u00E2'], // â
    ['\u00C3\u00AD', '\u00ED'], // í
    ['\u00C3\u00BA', '\u00FA'], // ú
    ['\u00C3\u00BC', '\u00FC'], // ü
    ['\u00C3\u00A0', '\u00E0'], // à
    ['\u00C3\u00B4', '\u00F4'], // ô
    ['\u00C3\u00AA', '\u00EA'], // ê
    ['\u00C3\u0087', '\u00C7'], // Ç
    ['\u00C3\u0089', '\u00C9'], // É
    ['\u00C3\u0081', '\u00C1'], // Á
    ['\u00C3\u0093', '\u00D3'], // Ó
    ['\u00C3\u0094', '\u00D4'], // Ô
    ['\u00C3\u0095', '\u00D5'], // Õ
    ['\u00C3\u009C', '\u00DC'], // Ü
    ['\u00C3\u0083', '\u00C3'], // Ã
    ['\u00E2\u0080\u0099', '\u2019'], // right single quote
    ['\u00E2\u0080\u009C', '\u201C'], // left double quote
    ['\u00E2\u0080\u009D', '\u201D'], // right double quote
    ['\u00E2\u0080\u0093', '\u2013'], // en dash
    ['\u00E2\u0080\u0094', '\u2014'], // em dash
    ['\u00E2\u0080\u00A6', '\u2026'], // ellipsis
    ['\u00E2\u0086\u0092', '\u2192'], // →
  ];
  for (const [from, to] of map) {
    s = s.split(from).join(to);
  }
  return s;
}

function walkFiles(dir, exts, result = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walkFiles(full, exts, result);
    else if (exts.some(e => name.endsWith(e))) result.push(full);
  }
  return result;
}

const files = walkFiles('src', ['.tsx', '.ts']);
const changed = [];

for (const f of files) {
  const original = readFileSync(f, 'utf8');
  const fixed = fixText(original);
  if (fixed !== original) {
    writeFileSync(f, fixed, 'utf8');
    changed.push(f.replace(/\\/g, '/'));
  }
}

console.log('Fixed', changed.length, 'files:');
changed.forEach(f => console.log(' ', f));
console.log('Done.');