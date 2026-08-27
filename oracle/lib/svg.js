/* svg.js -- draws one of two mark shapes over a resolved point list, as plain SVG text.
 *
 * No DOM, no canvas, no external dependency: SVG is markup, and this is composed as a string
 * the same way report-generator-prompt.md's own trace convention is composed, which is the whole
 * reason SVG rather than the app's own <canvas> chart is the right form for a session with no
 * browser in its loop. Every number placed on the page is one already sitting in the points
 * array handed in; nothing here calls model() or reads the app.
 *
 * Corrected after a review of the rendered output.
 * Four changes from the version that review was written against, every one of them a decision
 * about what the drawing says rather than a changed number:
 *
 *   - A point whose own model() call returned feasible:false now draws hollow (white fill, an
 *     accent-colored outline) instead of filled solid, identically for a bar or a line marker.
 *     The figure previously drew a configuration the app refuses exactly like one it accepts.
 *   - The knob-sweep line no longer draws a connecting path between its DETENTS. Nine or twenty-
 *     one detents are that many discrete settings, not samples off a continuous function, and a
 *     line between them asserted a continuity, and therefore a rate of change, the data does not
 *     carry. This also removes the ordinal-axis-reads-as-Cartesian defect the review measured,
 *     since a line is the part of the grammar that promises "in between" -- points alone do not.
 *   - The bar forms (era series, scenario comparison) inset their first and last category from
 *     the plot edges instead of centering the outer categories on the axis lines themselves. This
 *     is what stopped "The Commercial Break" clipping off the canvas and stopped the first bar
 *     straddling the y-axis with its value label smearing into the "0" tick label.
 *   - A figure carrying more than nine points (today only phi_c's 21-detent rail) thins its point
 *     labels and x-axis tick labels to roughly nine evenly spaced entries. Every point still draws
 *     a marker; only the label text is thinned, because unlabelled ticks are a legibility choice
 *     and a silently dropped data point would not be.
 *   - The figure states its own unit once, beside the title, rather than nowhere. And if any point
 *     is infeasible, the figure says once, in words, what the hollow mark means, rather than
 *     leaving a reader to guess at an undocumented convention.
 *
 * Corrected again after a second review of the rendered output, which cleared three repaired blocks and held one:
 *
 *   - The hollow bar's two-pixel stroke was eating its own white interior below about four pixels
 *     of height, so the smallest infeasible bars -- the ones the mark exists to catch -- drew
 *     solid. An infeasible bar's drawn height now floors at eight pixels (room for the two-pixel
 *     stroke top and bottom plus the four-pixel interior the mark needs), anchored to the zero
 *     baseline so it grows upward rather than through the axis. That is one fix. The other rides
 *     in a channel no bar height can eat: an infeasible bar's own value label now reads
 *     "N (infeasible)" in text, the same word the caption already uses, so the mark survives even
 *     if some future change reintroduces a thin stroke or a short bar.
 *   - The same "(infeasible)" word now lands on a y-axis tick, not just a bar or a point, when that
 *     tick's own number equals an infeasible point's value -- the power sweep's axis maximum,
 *     which the apex alone sets, being the case that surfaced it. An axis tick cannot be drawn
 *     hollow; it can still say what it is.
 *   - A figure where every point is infeasible now says so beside the title, in its own bold
 *     colored line, instead of relying on the fourth line of a grey header stack nobody reads that
 *     far into. A figure that mixes feasible and infeasible points keeps the quieter grey line,
 *     because there the hollow-against-filled contrast already does the work by itself.
 *   - The sweep form now insets its first and last point the same way the bar forms already did,
 *     closing the one branch that repair had missed: a sweep's first point no longer sits flush on
 *     the y-axis with its value label smearing into the axis-maximum tick beside it.
 *   - Label thinning on a run past nine points now always keeps the highest and lowest point
 *     labelled, in addition to the existing every-Nth-plus-endpoints cadence, so a peaked sweep
 *     cannot land its own apex on an unlabelled marker.
 *
 * Corrected a third time after "feasible" was found to be a misreading of the app's own field.
 * The app defines feasible = (binding === 'power') and renders it as a binding-regime label, power-
 * limited against mass-limited, never as a refusal of a state. Every "infeasible" word above and in
 * the two reviews that asked for it was this file's own words for a fact the app never asserted.
 * Nothing about what a bar or a point draws changes: the hollow/filled split, the eight-pixel floor,
 * the fixed 70-pixel margin, and the dropped axis-tick suffix are all exactly as the second review
 * left them. What changes is what the drawing says: a mark's own binding regime, in the app's own
 * three words (power limited, landed-mass limited, power-system-mass limited), on the point suffix,
 * the bar suffix, the mixed-figure legend, and the all-one-regime banner alike. The one new gap
 * closed alongside it: a sweep's own point label never carried the suffix a bar's did, so the same
 * value printed twice in one figure with different text 36 pixels apart. It now carries the same
 * regime word the bar form always has.
 */
'use strict';

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function fmt(v) {
  if (typeof v !== 'number' || !isFinite(v)) return String(v);
  const r = Math.round(v * 1000) / 1000;
  return String(r);
}

/* model()'s own three binding labels, in the app's own words (Lunar_Scenario_Explorer.html
   carries this exact map for its own tooltip prose, keyed the same way off the same field).
   binding is not a pass/fail flag: every point binds on something, and this names what. The
   filled/hollow mark below still separates only two regimes -- power limited against everything
   else -- but a point's own text says which of the three it actually is. */
const BINDING_WORD = {
  power: 'power limited',
  'landed mass': 'landed-mass limited',
  'power-system mass': 'power-system-mass limited',
};
function regimeWord(binding) {
  return Object.prototype.hasOwnProperty.call(BINDING_WORD, binding) ? BINDING_WORD[binding] : String(binding);
}
/* The hollow/filled split: power limited draws filled, either mass regime draws hollow. A point
   with no recorded binding (an older manifest, or a form that never carried one) draws filled,
   the same as this file has always done for anything not affirmatively marked otherwise. */
function isMassLimited(p) {
  return p.binding != null && p.binding !== 'power';
}

/* How far the first and last bar category sits from the plot's own left/right edge. Sized off the
   longest label this figure actually carries, since "The Commercial Break" needs far more room
   than "Pilot" does and a fixed inset would either clip the long one or waste width on the short
   one. oracle/lib/raster_figure.js computes this from the identical formula over the identical
   labels, so the vector and raster figures agree on where every category sits even though neither
   reads the other's code. */
function categoryInset(labels) {
  const maxLen = labels.reduce((m, s) => Math.max(m, String(s).length), 0);
  return Math.min(100, Math.max(28, Math.round(maxLen * 3.4)));
}

/* An axis tick is a mark on the scale, not a data point, and never carries a per-point suffix (a
   review measured that "0 (infeasible)" printed at the manufactured zero origin on every figure
   regardless of whether any point actually sat there, which was false on its face). The left
   margin is therefore the fixed 70 pixels every already-cleared figure was measured against,
   below, with no widened-margin case to compute -- there used to be a tickPadL() here for that
   case; it is gone along with the suffix it existed to make room for. */

/* Thin the labelled subset of a large point set to roughly nine entries, so a 21-detent rail does
   not smear its tick and value text into one illegible strip. Every point still gets a marker;
   this only decides which points also get text beside them. Always keeps the first and last point
   labelled, since a thinned axis with an unlabelled end is worse than one with an unlabelled
   middle. */
function labelStep(n) {
  return n > 9 ? Math.ceil(n / 9) : 1;
}
/* The apex and the trough of a run, so a peaked or troughed sweep past nine points cannot land
   its own extremum on an unlabelled marker just because the index-based cadence skipped it. The
   whole subject of a sweep figure is often where such a point falls. */
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

/* If every point on this figure names the identical binding value, the point returns it; a mixed
   figure (or one with no recorded binding at all) returns null. Used only to decide the banner
   line below -- the per-point marks and labels below read each point's own binding regardless. */
function commonBinding(points) {
  if (!points.length) return null;
  const first = points[0].binding;
  if (first == null) return null;
  return points.every((p) => p.binding === first) ? first : null;
}

/* The lines that stack under the title: the all-one-regime banner (if every point on this figure
   names the identical binding), the subtitle, the unit line, and the mixed-figure legend for the
   hollow/filled split (only when the figure carries both power-limited and mass-limited points,
   since a uniform figure gets the banner instead). Computed once, top to bottom, so the padding
   above the plot and the y-position each line is actually drawn at can never drift apart from
   each other. oracle/lib/raster_figure.js mirrors this exact sequence so the two renderers agree
   on where the header ends and the plot begins. */
function headerLines(subtitle, unit, anyMassLimited, uniformBinding) {
  const lines = [];
  let y = 42;
  if (uniformBinding) {
    // Bold for emphasis, a whole-figure fact worth stating plainly, but the same accent ink the
    // hollow marks themselves use, not an alarm color: naming which regime binds is not a warning,
    // and this line reports that fact exactly as evenly for "power limited" as for either
    // mass-limited case.
    lines.push({ y, text: "every point in this figure is " + regimeWord(uniformBinding) + " under the app's own envelope", size: 13, bold: true, color: '#1a5276' });
    y += 14;
  }
  if (subtitle) {
    lines.push({ y, text: subtitle, size: 12, bold: false, color: '#444444' });
    y += 14;
  }
  if (unit) {
    lines.push({ y, text: 'units: ' + unit, size: 10, bold: false, color: '#666666' });
    y += 14;
  }
  if (anyMassLimited && !uniformBinding) {
    lines.push({ y, text: "hollow marks are mass-limited under the app's own envelope", size: 10, bold: false, color: '#666666' });
    y += 14;
  }
  return { lines, padT: Math.max(60, y + 4) };
}

/* points: [{label, value, binding}], title/subtitle: strings, kind: 'bar' | 'line', unit: string
   or falsy. Bars suit the two categorical forms (era series, scenario comparison); a line -- now
   markers only, no connecting stroke -- suits a knob sweep across its own numeric DETENTS rail.
   Both share one coordinate frame and one axis-drawing routine so a figure never has two different
   scales quietly disagreeing with each other. */
function renderSVG({ title, subtitle, xLabel, yLabel, unit, points, kind }) {
  const W = 640, H = 400;
  const padR = 30, padB = 70;

  const anyMassLimited = points.some(isMassLimited);
  // A figure where every point names the same binding cannot rely on hollow-against-filled
  // contrast alone to say so when that binding is power (there is no hollow mark on the page to
  // contrast against), so a uniform figure gets its own bold line beside the title stating the
  // shared regime by name, rather than the quiet grey legend line a mixed figure can afford.
  const uniformBinding = commonBinding(points);
  const { lines: header, padT } = headerLines(subtitle, unit, anyMassLimited, uniformBinding);
  const plotH = H - padT - padB;

  const values = points.map((p) => p.value).filter((v) => typeof v === 'number' && isFinite(v));
  let vMin = values.length ? Math.min(0, ...values) : 0;
  let vMax = values.length ? Math.max(...values) : 1;
  if (vMax === vMin) vMax = vMin + 1;
  const yOf = (v) => padT + plotH - ((v - vMin) / (vMax - vMin)) * plotH;

  // An axis tick is a mark on the scale, not a data point, and never carries a per-point suffix --
  // see the note between categoryInset() and labelStep() above for why that stays gone. The left
  // margin below is the fixed 70 pixels every already-cleared figure was measured against.
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

  const parts = [];
  parts.push(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" width="' + W +
    '" height="' + H + '" font-family="Georgia, \'Times New Roman\', serif">'
  );
  parts.push('<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="#ffffff"/>');
  parts.push('<text x="' + (W / 2) + '" y="24" text-anchor="middle" font-size="16" fill="#111111">' + esc(title) + '</text>');
  header.forEach((hl) => {
    parts.push('<text x="' + (W / 2) + '" y="' + hl.y + '" text-anchor="middle" font-size="' + hl.size +
      '"' + (hl.bold ? ' font-weight="bold"' : '') + ' fill="' + hl.color + '">' + esc(hl.text) + '</text>');
  });

  // Axes
  parts.push('<line x1="' + padL + '" y1="' + padT + '" x2="' + padL + '" y2="' + (padT + plotH) + '" stroke="#333333"/>');
  parts.push('<line x1="' + padL + '" y1="' + (padT + plotH) + '" x2="' + (padL + plotW) + '" y2="' + (padT + plotH) + '" stroke="#333333"/>');
  // y ticks: 0, mid, max (labels and padL already resolved above).
  yTicks.forEach((t, k) => {
    const y = yOf(t);
    parts.push('<line x1="' + (padL - 4) + '" y1="' + y + '" x2="' + padL + '" y2="' + y + '" stroke="#333333"/>');
    parts.push('<text x="' + (padL - 8) + '" y="' + (y + 4) + '" text-anchor="end" font-size="10" fill="#333333">' + esc(yTickLabels[k]) + '</text>');
  });
  if (yLabel) {
    const yLabelText = unit ? yLabel + ' (' + unit + ')' : yLabel;
    parts.push('<text x="16" y="' + (padT + plotH / 2) + '" text-anchor="middle" font-size="11" fill="#333333" transform="rotate(-90 16 ' + (padT + plotH / 2) + ')">' + esc(yLabelText) + '</text>');
  }
  if (xLabel) {
    parts.push('<text x="' + (padL + plotW / 2) + '" y="' + (H - 12) + '" text-anchor="middle" font-size="11" fill="#333333">' + esc(xLabel) + '</text>');
  }

  if (kind === 'line') {
    // No connecting path: nine or twenty-one DETENTS are that many discrete settings, and a
    // stroke between them would assert a continuity, and a slope, the data does not carry.
    const step = labelStep(n);
    const forced = extremeIndices(points);
    points.forEach((p, i) => {
      const x = xOf(i), y = yOf(p.value);
      const massLimited = isMassLimited(p);
      if (massLimited) {
        parts.push('<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="3.5" fill="#ffffff" stroke="#1a5276" stroke-width="2"/>');
      } else {
        parts.push('<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="3.5" fill="#1a5276"/>');
      }
      if (isLabelled(i, n, step, forced)) {
        // A sweep point's own value label now carries the same regime suffix a bar's value label
        // does, in the app's own words -- a review found this point printed the bare number here
        // and the suffixed form 36 pixels away in the same figure's caption, the same value in two
        // different texts.
        const valueText = fmt(p.value) + (massLimited ? ' (' + regimeWord(p.binding) + ')' : '');
        parts.push('<text x="' + x.toFixed(1) + '" y="' + (y - 8).toFixed(1) + '" text-anchor="middle" font-size="10" fill="#111111">' + esc(valueText) + '</text>');
        parts.push('<text x="' + x.toFixed(1) + '" y="' + (padT + plotH + 16) + '" text-anchor="middle" font-size="10" fill="#333333">' + esc(p.label) + '</text>');
      }
    });
  } else {
    const bw = Math.min(60, plotW / n * 0.6);
    // A mass-limited bar draws hollow: a two-pixel stroke top and bottom, with white in between.
    // Below eight pixels of total height that stroke consumes its own interior, so the mark
    // inverts and reads as solid, identical to a power-limited bar, exactly on the smallest values
    // -- the ones the mark exists to catch. Floor a mass-limited bar's drawn height at eight pixels
    // (two-pixel stroke, two-pixel stroke, four-pixel interior), anchored to the zero baseline so
    // it grows upward rather than crossing the axis. This floor is a rendering fix for a stroke
    // that eats its own interior, orthogonal to what the mark means, so it holds regardless of
    // whether the point beneath it is named "infeasible" or "mass-limited": the label beside it
    // now carries the honest word either way.
    const MIN_MASS_LIMITED_BAR_H = 8;
    points.forEach((p, i) => {
      const x = xOf(i) - bw / 2;
      const y = yOf(Math.max(p.value, 0));
      const zeroY = yOf(0);
      let top = Math.min(y, zeroY);
      let barH = Math.max(Math.abs(zeroY - y), 0.5);
      const massLimited = isMassLimited(p);
      if (massLimited && barH < MIN_MASS_LIMITED_BAR_H) {
        top = zeroY - MIN_MASS_LIMITED_BAR_H;
        barH = MIN_MASS_LIMITED_BAR_H;
      }
      if (massLimited) {
        parts.push('<rect x="' + x.toFixed(1) + '" y="' + top.toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + barH.toFixed(1) + '" fill="#ffffff" stroke="#1a5276" stroke-width="2"/>');
      } else {
        parts.push('<rect x="' + x.toFixed(1) + '" y="' + top.toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + barH.toFixed(1) + '" fill="#1a5276"/>');
      }
      // The floor above keeps the mark visible by construction, but it depends on the stroke
      // staying at two pixels; the value label carries the same fact in a channel no bar height
      // can ever eat, the same regime word the caption already uses for the same point.
      const valueText = fmt(p.value) + (massLimited ? ' (' + regimeWord(p.binding) + ')' : '');
      parts.push('<text x="' + xOf(i).toFixed(1) + '" y="' + (top - 6).toFixed(1) + '" text-anchor="middle" font-size="10" fill="#111111">' + esc(valueText) + '</text>');
      parts.push('<text x="' + xOf(i).toFixed(1) + '" y="' + (padT + plotH + 16) + '" text-anchor="middle" font-size="10" fill="#333333">' + esc(p.label) + '</text>');
    });
  }

  parts.push('</svg>');
  return parts.join('\n');
}

module.exports = { renderSVG };
