/* bitmap_font.js -- a small embedded 3-wide by 5-tall dot-matrix font, for the raster fallback
 * text only. The vector SVG carries the real Georgia/Times New Roman text; this exists because
 * the PNG fallback still needs to be legible on a reader that never gets to the SVG, and a chart
 * over a fixed, known character set does not need a real font engine to say a title, an axis
 * label, or a number.
 *
 * What it covers: A-Z, 0-9, space, period, comma, hyphen, colon, apostrophe, parentheses, percent,
 * underscore. Lowercase input is folded to its uppercase glyph, so the fallback text does not
 * distinguish case; that is a stated limitation, not an oversight. An em dash or an en dash folds
 * to the same glyph as a hyphen. An ellipsis character renders as three period glyphs. Any other
 * character, anything outside this list, renders as a fixed crosshatch placeholder glyph rather
 * than silently vanishing, so a reader sees that something was there rather than a gap that looks
 * like a spacing bug.
 */
'use strict';

const G = 3; // glyph width in font pixels
const R = 5; // glyph height in font pixels

/* Each glyph is 5 rows of a 3-bit row read left to right, MSB first. */
const GLYPHS = {
  '0': [0b111, 0b101, 0b101, 0b101, 0b111],
  '1': [0b010, 0b110, 0b010, 0b010, 0b111],
  '2': [0b111, 0b001, 0b111, 0b100, 0b111],
  '3': [0b111, 0b001, 0b111, 0b001, 0b111],
  '4': [0b101, 0b101, 0b111, 0b001, 0b001],
  '5': [0b111, 0b100, 0b111, 0b001, 0b111],
  '6': [0b111, 0b100, 0b111, 0b101, 0b111],
  '7': [0b111, 0b001, 0b001, 0b001, 0b001],
  '8': [0b111, 0b101, 0b111, 0b101, 0b111],
  '9': [0b111, 0b101, 0b111, 0b001, 0b111],
  'A': [0b010, 0b101, 0b111, 0b101, 0b101],
  'B': [0b110, 0b101, 0b110, 0b101, 0b110],
  'C': [0b011, 0b100, 0b100, 0b100, 0b011],
  'D': [0b110, 0b101, 0b101, 0b101, 0b110],
  'E': [0b111, 0b100, 0b110, 0b100, 0b111],
  'F': [0b111, 0b100, 0b110, 0b100, 0b100],
  'G': [0b011, 0b100, 0b101, 0b101, 0b011],
  'H': [0b101, 0b101, 0b111, 0b101, 0b101],
  'I': [0b111, 0b010, 0b010, 0b010, 0b111],
  'J': [0b001, 0b001, 0b001, 0b101, 0b010],
  'K': [0b101, 0b101, 0b110, 0b101, 0b101],
  'L': [0b100, 0b100, 0b100, 0b100, 0b111],
  'M': [0b101, 0b111, 0b111, 0b101, 0b101],
  'N': [0b101, 0b110, 0b101, 0b011, 0b101],
  'O': [0b010, 0b101, 0b101, 0b101, 0b010],
  'P': [0b110, 0b101, 0b110, 0b100, 0b100],
  'Q': [0b010, 0b101, 0b101, 0b111, 0b011],
  'R': [0b110, 0b101, 0b110, 0b101, 0b101],
  'S': [0b011, 0b100, 0b010, 0b001, 0b110],
  'T': [0b111, 0b010, 0b010, 0b010, 0b010],
  'U': [0b101, 0b101, 0b101, 0b101, 0b111],
  'V': [0b101, 0b101, 0b101, 0b101, 0b010],
  'W': [0b101, 0b101, 0b111, 0b111, 0b101],
  'X': [0b101, 0b101, 0b010, 0b101, 0b101],
  'Y': [0b101, 0b101, 0b010, 0b010, 0b010],
  'Z': [0b111, 0b001, 0b010, 0b100, 0b111],
  ' ': [0b000, 0b000, 0b000, 0b000, 0b000],
  '.': [0b000, 0b000, 0b000, 0b000, 0b010],
  ',': [0b000, 0b000, 0b000, 0b010, 0b100],
  '-': [0b000, 0b000, 0b111, 0b000, 0b000],
  ':': [0b000, 0b010, 0b000, 0b010, 0b000],
  "'": [0b010, 0b010, 0b000, 0b000, 0b000],
  '(': [0b001, 0b010, 0b100, 0b010, 0b001],
  ')': [0b100, 0b010, 0b001, 0b010, 0b100],
  '%': [0b101, 0b001, 0b010, 0b100, 0b101],
  '_': [0b000, 0b000, 0b000, 0b000, 0b111],
};

const UNKNOWN = [0b101, 0b010, 0b101, 0b010, 0b101];

/* Folds a character to a glyph key: uppercases letters, maps both dash variants and the ellipsis
   to their stand-ins. The ellipsis case returns an array of three keys because it is drawn as
   three glyphs, unlike every other entry which is exactly one. */
function foldChar(ch) {
  if (ch === '—' || ch === '–') return ['-']; // em dash, en dash
  if (ch === '…') return ['.', '.', '.']; // ellipsis
  const up = ch.toUpperCase();
  if (Object.prototype.hasOwnProperty.call(GLYPHS, up)) return [up];
  return [null]; // signals UNKNOWN
}

function glyphRows(key) {
  return key === null ? UNKNOWN : GLYPHS[key];
}

/* Expands a text string into a flat list of glyph row-arrays, one per drawn glyph cell, so the
   caller never has to special-case the ellipsis's three-for-one expansion itself. */
function toGlyphCells(text) {
  const cells = [];
  for (const ch of String(text)) {
    for (const key of foldChar(ch)) cells.push(glyphRows(key));
  }
  return cells;
}

module.exports = { GLYPH_W: G, GLYPH_H: R, toGlyphCells };
