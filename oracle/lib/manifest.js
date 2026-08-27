/* manifest.js -- one record per figure, the checkable unit sub-step 2 names.
 *
 * The caption is generated FROM the same points array the figure was drawn from, and its trace
 * list (captionTraces) is exactly that array's own slugs, not a second hand-written list. A
 * caption and a figure built from one shared array cannot drift apart from each other, because
 * there is only one array.
 */
'use strict';

function fmt(v) {
  if (typeof v !== 'number' || !isFinite(v)) return String(v);
  return String(Math.round(v * 1000) / 1000);
}

/* model()'s own three binding labels (oracle/lib/address.js reads result.binding off the same
   call this map interprets), in the app's own words: Lunar_Scenario_Explorer.html itself carries
   this exact three-entry map, keyed the same way, for its own tooltip prose. feasible is a
   derived boolean off this field (feasible = binding === 'power'); it names a regime, not a
   refusal, so a caption states the regime rather than negate the boolean. */
const BINDING_WORD = {
  power: 'power limited',
  'landed mass': 'landed-mass limited',
  'power-system mass': 'power-system-mass limited',
};
function regimeWord(binding) {
  return Object.prototype.hasOwnProperty.call(BINDING_WORD, binding) ? BINDING_WORD[binding] : String(binding);
}

/* unit is optional so a caller with no known unit for its output (today only the scalar form,
   oracle/answer_question.js's buildScalarFact) still gets the same caption it always has, rather
   than this file guessing at a unit it was never told. When a unit is given it is stated once,
   beside the output name, never per point, so nine points do not repeat "t/yr" nine times. */
function caption(form, resolvedAddress, points, unit) {
  const pairs = points.map((p) => {
    const massLimited = p.binding != null && p.binding !== 'power';
    return p.label + ' = ' + fmt(p.value) + (massLimited ? ' (' + regimeWord(p.binding) + ')' : '');
  }).join('; ');
  const u = unit ? ' (' + unit + ')' : '';
  if (form === 'era-series') {
    return resolvedAddress.scenario + ', ' + resolvedAddress.output + u + ' by era: ' + pairs + '.';
  }
  if (form === 'scenario-comparison') {
    return resolvedAddress.output + u + ' at ' + resolvedAddress.phase + ' across scenarios: ' + pairs + '.';
  }
  if (form === 'knob-sweep') {
    return resolvedAddress.scenario + ', ' + resolvedAddress.phase + ', ' + resolvedAddress.output + u +
      ' swept over ' + resolvedAddress.knob + ': ' + pairs + '.';
  }
  return pairs + '.';
}

/* Build the manifest record. `figureId` is a caller-supplied identifier for the filename; it is
   never used as a source of truth about the figure's content, only as a label, per the standing
   rule that identity is a name and never a verdict. `unit` is optional, see caption() above. */
function buildManifest({ figureId, form, slugsAddressed, resolvedAddress, points, appPath, appHash, unit }) {
  return {
    schema: 1,
    figure: figureId,
    form,
    slugsAddressed,
    address: resolvedAddress,
    points,
    unit: unit || null,
    caption: caption(form, resolvedAddress, points, unit),
    captionTraces: points.map((p) => p.slug),
    source: {
      appPath,
      appHash,
      generatedAt: new Date().toISOString(),
    },
  };
}

module.exports = { buildManifest, caption, regimeWord };
