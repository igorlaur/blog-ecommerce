import { readFileSync, writeFileSync } from 'fs';

// The em-dash mojibake sequence in the hero is: â€" 
// In UTF-8 bytes: E2 80 94 = em-dash, but stored as latin-1 => â (E2) + € (80 as \x80) + " (94 as \x94)
// At string level in a UTF-8 file that was double-encoded, we see those 3 chars

const files = [
  'src/components/landing/HeroSection.tsx',
  'src/components/landing/CTASection.tsx',
  'src/components/landing/DiferencialSection.tsx',
  'src/app/consultoria/page.tsx',
  'src/app/contato/page.tsx',
];

// Read each file as latin1 bytes so we see the raw bytes, then pick out known sequences
for (const f of files) {
  const raw = readFileSync(f); // Buffer
  // Convert to latin1 string to see the raw bytes as characters
  const latin1 = raw.toString('latin1');
  // Check if it contains mojibake dash: E2 80 94 as latin1 chars = â\x80\x94
  const hasDash = latin1.includes('\xE2\x80\x94') || latin1.includes('\xE2\x80\x93');
  if (!hasDash) {
    // Already fixed or different encoding - read as utf8 and do text replacement
    let s = readFileSync(f, 'utf8');
    // These are the visual strings that appear when utf8 is misinterpreted
    const before = s;
    s = s.replaceAll('\u00e2\u0080\u0094', '\u2014'); // em dash
    s = s.replaceAll('\u00e2\u0080\u0093', '\u2013'); // en dash
    if (s !== before) {
      writeFileSync(f, s, 'utf8');
      console.log('Fixed (text):', f);
    } else {
      console.log('OK:', f);
    }
  } else {
    // The file has proper em-dash bytes - it's fine
    console.log('OK (binary check):', f);
  }
}
console.log('Done.');
