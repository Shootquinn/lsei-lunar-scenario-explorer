/* address.js -- the small closed grammar over model(), DETENTS, ENVELOPE and PRESETS.
 *
 * An address is a tuple naming a scenario (by its full canonical label), a phase, an output, and
 * for a knob sweep, a knob. Resolving an address never types a number: every point value is what
 * model() just returned for that call. A key an address names that PRESETS, ENVELOPE, DETENTS or
 * model()'s own return object does not carry is a thrown error, not a blank or a zero cell.
 *
 * Every point carries a self-contained slug string that names exactly the model() call that
 * produced it (scenario key, phase, any knob override, output key), so a verifier can re-derive
 * the point from the slug alone without consulting anything else in the manifest.
 */
'use strict';

function slugify(label) {
  return String(label).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/* Build the scenario-label -> PRESETS-key map live off the app's own PRESETS.*.label fields,
   never off a hand-typed list of the three canonical names. Two presets slugifying to the same
   label is a build-time refusal, since a caller could never disambiguate the two by name. */
function scenarioIndex(PRESETS) {
  const bySlug = {};
  for (const key of Object.keys(PRESETS)) {
    const label = PRESETS[key].label;
    const s = slugify(label);
    if (bySlug[s]) {
      throw new Error('oracle/address: two scenarios slugify to "' + s + '" (' +
        PRESETS[bySlug[s]].label + ' and ' + label + ') -- refusing, an address naming "' + s +
        '" would be ambiguous.');
    }
    bySlug[s] = key;
  }
  return bySlug;
}

function resolveScenario(PRESETS, nameOrLabel) {
  const bySlug = scenarioIndex(PRESETS);
  const s = slugify(nameOrLabel);
  const key = bySlug[s];
  if (!key) {
    throw new Error('oracle/address: "' + nameOrLabel + '" does not name a scenario PRESETS ' +
      'carries. PRESETS holds: ' + Object.keys(PRESETS).map(k => PRESETS[k].label).join(', ') +
      '. Full canonical names only -- refusing rather than guessing a nearest match.');
  }
  return key;
}

function resolvePhase(api, phase) {
  const p = String(phase);
  if (!api.phases.includes(p)) {
    throw new Error('oracle/address: "' + phase + '" does not name a phase ENVELOPE carries (' +
      api.phases.join(', ') + ').');
  }
  return p;
}

function resolveOutput(api, output) {
  // The set of legal output keys is derived by calling model() once with a real preset's own
  // envelope defaults and reading Object.keys() off what it returns, rather than a hand-typed
  // list of model()'s return object shape.
  const firstKey = Object.keys(api.PRESETS)[0];
  const preset = api.PRESETS[firstKey];
  const env = api.ENVELOPE[preset.funding][api.phases[0]];
  const probe = api.model({
    ice: preset.ice, phi_c: preset.phi_c, funding: preset.funding, phase: api.phases[0],
    power: env.P, mass: env.M, fission: env.fission,
  });
  if (!(output in probe)) {
    throw new Error('oracle/address: "' + output + '" does not name a key model() returns. ' +
      'model() returns: ' + Object.keys(probe).join(', ') + '.');
  }
  return output;
}

function resolveKnob(api, knob) {
  const inDetents = Object.prototype.hasOwnProperty.call(api.DETENTS, knob);
  const inModelInputs = api.inputKeys.has(knob);
  if (!inDetents || !inModelInputs) {
    throw new Error('oracle/address: "' + knob + '" is not a knob this Oracle can sweep. It must ' +
      'be a key DETENTS carries AND a key model() reads off its argument object. DETENTS holds: ' +
      Object.keys(api.DETENTS).join(', ') + '. model() reads: ' + [...api.inputKeys].join(', ') +
      '. (landed_cost is a DETENTS rail that model() does not accept as an input, so it is not ' +
      'a sweepable knob under this rule.)');
  }
  return knob;
}

function scenarioArgs(api, scenarioKey, phase) {
  const preset = api.PRESETS[scenarioKey];
  const env = api.ENVELOPE[preset.funding][phase];
  if (!env) {
    throw new Error('oracle/address: scenario "' + preset.label + '" (funding ' + preset.funding +
      ') has no ENVELOPE row for phase "' + phase + '".');
  }
  return { ice: preset.ice, phi_c: preset.phi_c, funding: preset.funding, phase,
           power: env.P, mass: env.M, fission: env.fission };
}

function pointSlug(scenarioKey, phase, output, knob, knobValue) {
  const base = 'model:' + scenarioKey + '|' + phase +
    (knob != null ? '|' + knob + '=' + knobValue : '') + '|' + output;
  return base;
}

/* --- The three forms. Each returns { points, slugsAddressed } where points is
       [{slug, label, value}], one entry per point actually drawn. --- */

function eraSeries(api, { scenario, output }) {
  const scenarioKey = resolveScenario(api.PRESETS, scenario);
  resolveOutput(api, output);
  const points = api.phases.map((phase) => {
    const args = scenarioArgs(api, scenarioKey, phase);
    const result = api.model(args);
    return {
      slug: pointSlug(scenarioKey, phase, output, null, null),
      label: api.eraNames[phase] || phase,
      value: result[output],
      binding: (typeof result.binding === 'string') ? result.binding : null,
      feasible: (typeof result.feasible === 'boolean') ? result.feasible : null,
    };
  });
  return {
    points,
    slugsAddressed: ['scenario:' + scenarioKey, 'output:' + output],
    resolvedAddress: { form: 'era-series', scenario: api.PRESETS[scenarioKey].label, output },
  };
}

function scenarioComparison(api, { phase, output }) {
  const phaseKey = resolvePhase(api, phase);
  resolveOutput(api, output);
  const points = Object.keys(api.PRESETS).map((scenarioKey) => {
    const args = scenarioArgs(api, scenarioKey, phaseKey);
    const result = api.model(args);
    return {
      slug: pointSlug(scenarioKey, phaseKey, output, null, null),
      label: api.PRESETS[scenarioKey].label,
      value: result[output],
      binding: (typeof result.binding === 'string') ? result.binding : null,
      feasible: (typeof result.feasible === 'boolean') ? result.feasible : null,
    };
  });
  return {
    points,
    slugsAddressed: ['phase:' + phaseKey, 'output:' + output],
    resolvedAddress: { form: 'scenario-comparison', phase: phaseKey, output },
  };
}

function knobSweep(api, { scenario, phase, knob, output }) {
  const scenarioKey = resolveScenario(api.PRESETS, scenario);
  const phaseKey = resolvePhase(api, phase);
  resolveOutput(api, output);
  resolveKnob(api, knob);
  const baseArgs = scenarioArgs(api, scenarioKey, phaseKey);
  const rail = api.DETENTS[knob];
  const points = rail.map((v) => {
    const args = Object.assign({}, baseArgs, { [knob]: v });
    const result = api.model(args);
    return {
      slug: pointSlug(scenarioKey, phaseKey, output, knob, v),
      label: String(v),
      value: result[output],
      binding: (typeof result.binding === 'string') ? result.binding : null,
      feasible: (typeof result.feasible === 'boolean') ? result.feasible : null,
    };
  });
  return {
    points,
    slugsAddressed: ['scenario:' + scenarioKey, 'phase:' + phaseKey, 'knob:' + knob, 'output:' + output],
    resolvedAddress: { form: 'knob-sweep', scenario: api.PRESETS[scenarioKey].label, phase: phaseKey, knob, output },
  };
}

/* A fourth form, added for Step 41 sub-step 5 (oracle/answer_question.js): one address, one
   value, read once at answer time. This is not a new grammar; it resolves through the same
   resolveScenario/resolvePhase/resolveOutput/scenarioArgs/pointSlug this file already exports,
   the way this project's own routing specification names it: its own manifest schema at a fourth
   form beside era series, scenario comparison, and knob sweep, a scalar form, one address, one
   value read at answer time. A single point's
   own slug is exactly what eraSeries/scenarioComparison/knobSweep already emit per point, so the
   same verify_figure.js recompute check covers it with no change to that file either. An optional
   knob/knobValue overrides one input the way knobSweep does per detent, for a sub-claim that asks
   about a specific override rather than a scenario's own envelope default. */
function singlePoint(api, { scenario, phase, output, knob, knobValue }) {
  const scenarioKey = resolveScenario(api.PRESETS, scenario);
  const phaseKey = resolvePhase(api, phase);
  resolveOutput(api, output);
  const args = scenarioArgs(api, scenarioKey, phaseKey);
  if (knob != null) {
    resolveKnob(api, knob);
    args[knob] = knobValue;
  }
  const result = api.model(args);
  const point = {
    slug: pointSlug(scenarioKey, phaseKey, output, knob != null ? knob : null, knob != null ? knobValue : null),
    label: api.eraNames[phaseKey] || phaseKey,
    value: result[output],
  };
  return {
    points: [point],
    slugsAddressed: ['scenario:' + scenarioKey, 'phase:' + phaseKey, 'output:' + output]
      .concat(knob != null ? ['knob:' + knob] : []),
    resolvedAddress: { form: 'scalar', scenario: api.PRESETS[scenarioKey].label, phase: phaseKey, output,
      knob: knob != null ? knob : undefined },
  };
}

/* Parse a point slug back into its call, for a verifier to recompute against a (possibly
   different) live app. Never used by the renderer itself, which always has the resolved args
   in hand already; this exists because sub-step 2's manifest exists precisely so something
   downstream, without today's call-site context, can redo the call from the slug alone. */
function parseSlug(slug) {
  const m = /^model:([^|]+)\|([^|]+)(?:\|([^=|]+)=([^|]+))?\|([^|]+)$/.exec(slug);
  if (!m) throw new Error('oracle/address: "' + slug + '" is not a slug this grammar produced.');
  const [, scenarioKey, phase, knob, knobValueRaw, output] = m;
  const knobValue = knob != null ? Number(knobValueRaw) : null;
  return { scenarioKey, phase, knob: knob || null, knobValue, output };
}

module.exports = {
  slugify, scenarioIndex, resolveScenario, resolvePhase, resolveOutput, resolveKnob,
  scenarioArgs, pointSlug, eraSeries, scenarioComparison, knobSweep, singlePoint, parseSlug,
};
