/* raster_figure.js -- the docx raster fallback for a figure, drawn directly from the same
 * {title, subtitle, xLabel, yLabel, unit, points, kind} shape svg.js takes, not by parsing svg.js's
 * own SVG text back into pixels. Every number placed on this canvas is one already sitting in the
 * points array the caller hands in, the same array manifest.js built the caption from and svg.js
 * drew the vector figure from; nothing here calls model() or reads the app.
 *
 * What it draws: axis-aligned filled or outline-only rectangles (the bar form, solid for a
 * power-limited point and a border only for one the app's own model() reports bound by landed mass
 * or power-system mass), filled or ring-only circles (the sweep's point markers, the same
 * power-limited/mass-limited distinction, no connecting stroke between them), and a fixed 3x5
 * bitmap font (see bitmap_font.js) for every title, label, tick, and value. That is the complete
 * mark vocabulary oracle/lib/svg.js itself uses for these three chart forms, and this module claims
 * to handle exactly that vocabulary and nothing wider.
 *
 * What it refuses, stated plainly rather than silently approximated: no curves, no connecting line
 * between a sweep's own points (svg.js draws neither either, as of Step 41's repair -- see its own
 * header), no rotated text (the SVG rotates the y-axis label -90 degrees for a vertical caption;
 * this raster fallback omits that one label rather than fake a rotation), no anti-aliasing (every
 * edge is hard pixel-aligned, which reads as slightly blocky rather than smooth), and no color
 * beyond the fixed palette svg.js already uses (white ground, near-black ink, one accent blue for
 * marks). A chart is a constrained drawing, and this is a constrained renderer built for exactly
 * that constraint, not a general rasterizer that happens to be small.
 *
 * Corrected after a review of the rendered output. See oracle/lib/svg.js's own header for
 * the four decisions both renderers now share: infeasible points draw hollow, the knob-sweep line
 * is gone, bar categories inset from the plot edges instead of centering the outer ones on the
 * axis, and a point set past nine entries thins its labels rather than smearing them. The unit
 * line and the infeasible legend line, when either applies, are new text rows this canvas draws
 * the same way svg.js does, computed by the identical formula so the two never disagree about how
 * much header room a given figure needs.
 *
 * Corrected again after a second review of the rendered output. See
 * oracle/lib/svg.js's own header for the five fixes this file mirrors line for line: the
 * infeasible bar's height floor, the "(infeasible)" suffix on a bar's value label and on an axis
 * tick that lands on an infeasible point's own value, the all-infeasible banner line, the sweep
 * form's own category inset, and extremum-aware label thinning.
 *
 * Corrected a third time alongside oracle/lib/svg.js: see its own header for why. "Feasible" was
 * this file's own word for the app's binding-regime field, not the app's; every mark, floor, and
 * margin below is unchanged, and every word this file draws now names the regime (power limited,
 * landed-mass limited, power-system-mass limited) instead.
 */
'use strict';
const { encodePNG } = require('./png_encode.js');
const { GLYPH_W, GLYPH_H, toGlyphCells } = require('./bitmap_font.js');

const WHITE = [255, 255, 255];
const INK = [17, 17, 17];
const AXIS = [51, 51, 51];
const ACCENT = [26, 82, 118];

function fmt(v) {
  if (typeof v !== 'number' || !isFinite(v)) return String(v);
  const r = Math.round(v * 1000) / 1000;
  return String(r);
}

/* Mirrors oracle/lib/svg.js's own BINDING_WORD/regimeWord()/isMassLimited(): the app's own three
   binding labels, in the app's own words, and the same power-limited/mass-limited split that
   decides the hollow/filled mark. */
const BINDING_WORD = {
  power: 'power limited',
  'landed mass': 'landed-mass limited',
  'power-system mass': 'power-system-mass limited',
};
function regimeWord(binding) {
  return Object.prototype.hasOwnProperty.call(BINDING_WORD, binding) ? BINDING_WORD[binding] : String(binding);
}
function isMassLimited(p) {
  return p.binding != null && p.binding !== 'power';
}

/* Mirrors oracle/lib/svg.js's own categoryInset(): same formula over the same labels, so the two
   renderers agree on where every bar category sits even though neither reads the other's code. */
function categoryInset(labels) {
  const maxLen = labels.reduce((m, s) => Math.max(m, String(s).length), 0);
  return Math.min(100, Math.max(28, Math.round(maxLen * 3.4)));
}

/* An axis tick is a mark on the scale, not a data point, and never carries a per-point suffix (see
   oracle/lib/svg.js's own note on this). The left margin is therefore the fixed 70 pixels below,
   with no widened-margin case to compute -- there used to be a tickPadL() here mirroring svg.js's
   own; it is gone along with the suffix it existed to make room for. */

/* Mirrors oracle/lib/svg.js's own labelStep()/isLabelled()/extremeIndices(). */
function labelStep(n) {
  return n > 9 ? Math.ceil(n / 9) : 1;
}
function extremeIndices(points) {
  let maxI = -1, minI = -1, maxV = -Infinity, minV = Infinity;
  points.forEach((p, i) => {
    if (typeof p.value === 'number' && isFinite(p.value)) {
      if (p.value > maxV) { maxV = p.value; maxI = i; }
      if (p.value < minV) { minV = p.value; minI = i; }
    }
  });
  const set = new Set();
  if (maxI >= 0) set.add(maxI);
  if (minI >= 0) set.add(minI);
  return set;
}
function isLabelled(i, n, step, forced) {
  return i === 0 || i === n - 1 || i % step === 0 || (forced && forced.has(i));
}

/* Mirrors oracle/lib/svg.js's own commonBinding(): null unless every point names the identical
   binding, in which case that binding is returned. */
function commonBinding(points) {
  if (!points.length) return null;
  const first = points[0].binding;
  if (first == null) return null;
  return points.every((p) => p.binding === first) ? first : null;
}

/* Mirrors oracle/lib/svg.js's own headerLines(): identical y-position sequence for the
   all-one-regime banner, subtitle, unit line, and mixed-figure legend, so the two renderers agree
   on where the header ends and the plot begins even though neither reads the other's code. Colors
   are rgb arrays here rather than the SVG's hex strings; "bold" is stood in for by a doubled glyph
   scale, since the bitmap font has no second weight. */
// The same accent ink the hollow marks themselves use, not an alarm color: naming which regime
// binds is not a warning, and this line reports that fact exactly as evenly for "power limited"
// as for either mass-limited case.
const BANNER_COLOR = ACCENT;
function headerLines(subtitle, unit, anyMassLimited, uniformBinding) {
  const lines = [];
  let y = 42;
  if (uniformBinding) {
    lines.push({ y, text: "every point in this figure is " + regimeWord(uniformBinding) + " under the app's own envelope", scale: 2, color: BANNER_COLOR });
    y += 14;
  }
  if (subtitle) {
    lines.push({ y, text: subtitle, scale: 1, color: [68, 68, 68] });
    y += 14;
  }
  if (unit) {
    lines.push({ y, text: 'units: ' + unit, scale: 1, color: [102, 102, 102] });
    y += 14;
  }
  if (anyMassLimited && !uniformBinding) {
    lines.push({ y, text: "hollow marks are mass-limited under the app's own envelope", scale: 1, color: [102, 102, 102] });
    y += 14;
  }
  return { lines, padT: Math.max(60, y + 4) };
}

function makeCanvas(width, height) {
  const data = Buffer.alloc(width * height * 3);
  data.fill(255); // white ground
  return { width, height, data };
}

function setPixel(canvas, x, y, rgb) {
  x = Math.round(x);
  y = Math.round(y);
  if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) return;
  const i = (y * canvas.width + x) * 3;
  canvas.data[i] = rgb[0];
  canvas.data[i + 1] = rgb[1];
  canvas.data[i + 2] = rgb[2];
}

function fillRect(canvas, x, y, w, h, rgb) {
  const x0 = Math.round(x), y0 = Math.round(y);
  const x1 = Math.round(x + w), y1 = Math.round(y + h);
  for (let yy = y0; yy < y1; yy++) {
    for (let xx = x0; xx < x1; xx++) setPixel(canvas, xx, yy, rgb);
  }
}

/* Border-only rectangle, for a bar the app's own model() reports bound by landed mass or
   power-system mass rather than power: the same footprint a solid bar would fill, but only its
   four edges are drawn, so the reader sees the same height and position, and reads "not filled
   in" as "a different binding regime" rather than a different chart entirely. */
function strokeRect(canvas, x, y, w, h, rgb, thickness) {
  thickness = thickness || 1;
  fillRect(canvas, x, y, w, thickness, rgb);
  fillRect(canvas, x, y + h - thickness, w, thickness, rgb);
  fillRect(canvas, x, y, thickness, h, rgb);
  fillRect(canvas, x + w - thickness, y, thickness, h, rgb);
}

function drawCircleFilled(canvas, cx, cy, r, rgb) {
  const x0 = Math.floor(cx - r), x1 = Math.ceil(cx + r);
  const y0 = Math.floor(cy - r), y1 = Math.ceil(cy + r);
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      if ((x - cx) * (x - cx) + (y - cy) * (y - cy) <= r * r) setPixel(canvas, x, y, rgb);
    }
  }
}

/* Ring only, for a sweep point the app's own model() reports bound by landed mass or
   power-system mass rather than power: a filled white disc (so it reads against a bar or another
   marker behind it the same as the SVG's white-fill ring does) with an accent rim, rather than a
   solid dot. */
function drawCircleRing(canvas, cx, cy, r, rgb) {
  drawCircleFilled(canvas, cx, cy, r, WHITE);
  const x0 = Math.floor(cx - r), x1 = Math.ceil(cx + r);
  const y0 = Math.floor(cy - r), y1 = Math.ceil(cy + r);
  const rInner = Math.max(r - 1.4, 0);
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const d2 = (x - cx) * (x - cx) + (y - cy) * (y - cy);
      if (d2 <= r * r && d2 >= rInner * rInner) setPixel(canvas, x, y, rgb);
    }
  }
}

/* (x, y) is the top-left of the text's glyph row, already resolved for the requested anchor.
   scale multiplies each font pixel into a scale x scale block on the canvas. */
function drawGlyphsAt(canvas, x, y, cells, rgb, scale) {
  let cx = x;
  for (const rows of cells) {
    for (let ry = 0; ry < GLYPH_H; ry++) {
      const row = rows[ry];
      for (let rx = 0; rx < GLYPH_W; rx++) {
        if ((row >> (GLYPH_W - 1 - rx)) & 1) {
          fillRect(canvas, cx + rx * scale, y + ry * scale, scale, scale, rgb);
        }
      }
    }
    cx += (GLYPH_W + 1) * scale; // one font-pixel gap between glyphs
  }
}

function textWidth(cells, scale) {
  if (cells.length === 0) return 0;
  return cells.length * (GLYPH_W + 1) * scale - scale; // no trailing gap
}

/* x, y follow the SVG convention this module mirrors: y is the text's baseline, not its top.
   anchor is 'start' | 'middle' | 'end', matching the SVG's own text-anchor values. */
function drawText(canvas, x, y, text, rgb, scale, anchor) {
  const cells = toGlyphCells(text);
  const w = textWidth(cells, scale);
  let left = x;
  if (anchor === 'middle') left = x - w / 2;
  else if (anchor === 'end') left = x - w;
  const top = y - GLYPH_H * scale + scale; // approximate baseline-to-top offset
  drawGlyphsAt(canvas, left, top, cells, rgb, scale);
}

/* Mirrors oracle/lib/svg.js's own layout: same canvas size, same padding, same axis-scale
   derivation from the points array, so the raster fallback agrees with the vector figure on
   where every value sits, even though the two do not share code. Both are pure functions of the
   same points array the caller passes in, which is the property that matters: neither can drift
   from the manifest that governs both, because both read only what the manifest already recorded. */
function renderRasterPNG({ title, subtitle, xLabel, yLabel, unit, points, kind }) {
  const W = 640, H = 400;
  const padR = 30, padB = 70;

  const anyMassLimited = points.some(isMassLimited);
  // A figure where every point names the same binding cannot rely on hollow-against-filled
  // contrast alone to say so when that binding is power (there is no hollow mark on the page to
  // contrast against), so a uniform figure gets its own bold line naming the shared regime.
  const uniformBinding = commonBinding(points);
  const { lines: header, padT } = headerLines(subtitle, unit, anyMassLimited, uniformBinding);
  const plotH = H - padT - padB;

  const canvas = makeCanvas(W, H);

  const values = points.map((p) => p.value).filter((v) => typeof v === 'number' && isFinite(v));
  let vMin = values.length ? Math.min(0, ...values) : 0;
  let vMax = values.length ? Math.max(...values) : 1;
  if (vMax === vMin) vMax = vMin + 1;
  const yOf = (v) => padT + plotH - ((v - vMin) / (vMax - vMin)) * plotH;

  // An axis tick is a mark on the scale, not a data point, and never carries a per-point suffix --
  // see oracle/lib/svg.js's own note on this. The left margin below is the fixed 70 pixels every
  // already-cleared figure was measured against.
  const yTicks = [vMin, (vMin + vMax) / 2, vMax];
  const yTickLabels = yTicks.map((t) => fmt(t));
  const padL = 70;
  const plotW = W - padL - padR;

  const n = points.length;
  const catInset = n > 1 ? categoryInset(points.map((p) => p.label)) : 0;
  const xOf = (i) => {
    if (n <= 1) return padL + plotW / 2;
    return padL + catInset + (i / (n - 1)) * (plotW - 2 * catInset);
  };

  drawText(canvas, W / 2, 24, title, INK, 2, 'middle');
  header.forEach((hl) => {
    drawText(canvas, W / 2, hl.y, hl.text, hl.color, hl.scale, 'middle');
  });

  drawLine(canvas, padL, padT, padL, padT + plotH, AXIS, 1);
  drawLine(canvas, padL, padT + plotH, padL + plotW, padT + plotH, AXIS, 1);

  // y ticks: 0, mid, max (labels and padL already resolved above).
  yTicks.forEach((t, k) => {
    const y = yOf(t);
    drawLine(canvas, padL - 4, y, padL, y, AXIS, 1);
    drawText(canvas, padL - 8, y + 4, yTickLabels[k], AXIS, 1, 'end');
  });
  // y-axis label is rotated -90 degrees in the SVG; this raster fallback omits it rather than
  // fake a rotation the bitmap font has no way to draw faithfully. See the file header. The unit
  // still reaches this fallback, through the "units: ..." header line above, drawn either way.
  if (xLabel) drawText(canvas, padL + plotW / 2, H - 12, xLabel, AXIS, 1, 'middle');

  if (kind === 'line') {
    // No connecting line: see the file header and oracle/lib/svg.js's own.
    const step = labelStep(n);
    const forced = extremeIndices(points);
    points.forEach((p, i) => {
      const x = xOf(i), y = yOf(p.value);
      const massLimited = isMassLimited(p);
      if (massLimited) drawCircleRing(canvas, x, y, 3, ACCENT);
      else drawCircleFilled(canvas, x, y, 3, ACCENT);
      if (isLabelled(i, n, step, forced)) {
        // A sweep point's own value label now carries the same regime suffix a bar's value label
        // does, in the app's own words -- see oracle/lib/svg.js's own note on the gap this closes.
        const valueText = fmt(p.value) + (massLimited ? ' (' + regimeWord(p.binding) + ')' : '');
        drawText(canvas, x, y - 8, valueText, INK, 1, 'middle');
        drawText(canvas, x, padT + plotH + 16, p.label, AXIS, 1, 'middle');
      }
    });
  } else {
    const bw = Math.min(60, (plotW / n) * 0.6);
    // Mirrors oracle/lib/svg.js's own floor: a hollow bar's two-pixel stroke eats its own white
    // interior below eight pixels of total height, so the smallest mass-limited bars drew solid,
    // identical to a power-limited bar. Floor a mass-limited bar at eight pixels, anchored to the
    // zero baseline, and carry the same fact in the value label as well, in a channel no bar height
    // can eat. This floor is a rendering fix for a stroke that eats its own interior, orthogonal to
    // what the mark means, so it holds regardless of what the point is named.
    const MIN_MASS_LIMITED_BAR_H = 8;
    points.forEach((p, i) => {
      const x = xOf(i) - bw / 2;
      const y = yOf(Math.max(p.value, 0));
      const zeroY = yOf(0);
      let top = Math.min(y, zeroY);
      let barH = Math.max(Math.abs(zeroY - y), 1);
      const massLimited = isMassLimited(p);
      if (massLimited && barH < MIN_MASS_LIMITED_BAR_H) {
        top = zeroY - MIN_MASS_LIMITED_BAR_H;
        barH = MIN_MASS_LIMITED_BAR_H;
      }
      if (massLimited) strokeRect(canvas, x, top, bw, barH, ACCENT, 2);
      else fillRect(canvas, x, top, bw, barH, ACCENT);
      const valueText = fmt(p.value) + (massLimited ? ' (' + regimeWord(p.binding) + ')' : '');
      drawText(canvas, xOf(i), top - 6, valueText, INK, 1, 'middle');
      drawText(canvas, xOf(i), padT + plotH + 16, p.label, AXIS, 1, 'middle');
    });
  }

  const buffer = encodePNG(W, H, canvas.data);
  return { buffer, width: W, height: H };
}

/* A thickness-2 Bresenham line: every plotted pixel also plots its immediate neighbor one step
   perpendicular to the line's dominant axis, which is enough to keep a line from vanishing to a
   hairline at this canvas's resolution. It is a deliberately simple stand-in for a stroked path,
   not an anti-aliased renderer. Still used for the axes and tick marks; the sweep's own connecting
   line is gone (see the file header), so this is no longer called for that purpose. */
function drawLine(canvas, x0, y0, x1, y1, rgb, thickness) {
  thickness = thickness || 1;
  x0 = Math.round(x0); y0 = Math.round(y0); x1 = Math.round(x1); y1 = Math.round(y1);
  const dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
  const dy = -Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1;
  let err = dx + dy;
  const steep = Math.abs(y1 - y0) > Math.abs(x1 - x0);
  let x = x0, y = y0;
  for (;;) {
    setPixel(canvas, x, y, rgb);
    if (thickness > 1) {
      if (steep) { setPixel(canvas, x + 1, y, rgb); if (thickness > 2) setPixel(canvas, x - 1, y, rgb); }
      else { setPixel(canvas, x, y + 1, rgb); if (thickness > 2) setPixel(canvas, x, y - 1, rgb); }
    }
    if (x === x1 && y === y1) break;
    const e2 = 2 * err;
    if (e2 >= dy) { err += dy; x += sx; }
    if (e2 <= dx) { err += dx; y += sy; }
  }
}

module.exports = { renderRasterPNG };
