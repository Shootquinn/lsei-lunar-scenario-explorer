/* verify_figure.js -- the post-condition on a generated figure.
 *
 * Step 41 sub-step 3. This is the extension of verify_report.js's forward/backward trace check
 * from prose to a manifest, and it is a standing file rather than embedded code a model rewrites
 * each run, per the ruling that a decoy proves nothing against an object that gets rewritten on
 * every run.
 *
 * CORRECTED under Step 41 sub-step 5, 2026-08-26. This file was written before sub-steps 1 and 2
 * (the renderer and the manifest emitter) existed, and its own header said so: it stated a
 * manifest schema it assumed rather than one it had seen. That assumed schema (a top level
 * "slugs" array, points carrying an "accessor" object, a caption with bracketed [[slug]] traces
 * checked against KNOB_DATA.SLUGS) never matched what oracle/lib/manifest.js actually emits (a
 * top-level "slugsAddressed" array, points carrying only a self-describing "slug" string, a
 * caption with no bracket syntax and a separate "captionTraces" array). Running this file's own
 * --prove mode against a real render_figure.js manifest, rather than against its own hand-built
 * stand-in, reproduced the mismatch directly: FORWARD reported all three real points unresolved
 * and RECOMPUTE threw on every one, because there was no "accessor" field to read. That is the
 * shape this project's own standing rules keep finding, that a reference a machine cannot follow
 * is a copy, and a copy drifts: the two halves were built to agree in prose and were never run
 * against each other.
 *
 * The repair is at the source, per the standing rule that a defect found while building today's
 * deliverable is repaired where it lives rather than worked around downstream. This file now
 * reads the schema oracle/lib/manifest.js actually writes, and reuses oracle/lib/address.js's own
 * parseSlug and scenarioArgs to decode a point's self-describing slug back into a model() call,
 * rather than expecting a manifest to carry a second, parallel "accessor" object nothing writes.
 * app loading is now oracle/lib/app_model.js's loadModelAPI, the same loader render_figure.js
 * itself uses, instead of a second hand-rolled island eval kept only for this file.
 *
 * THE REAL MANIFEST SCHEMA, oracle/lib/manifest.js's buildManifest():
 *
 *   {
 *     "schema": 1,
 *     "figure": "<figureId>",
 *     "form": "era-series" | "scenario-comparison" | "knob-sweep",
 *     "slugsAddressed": ["scenario:<presetKey>" | "phase:<phase>" | "knob:<knob>" | "output:<key>", ...],
 *     "address": { "form": ..., "scenario"|"phase": ..., "output": ..., ["knob": ...] },
 *     "points": [ { "slug": "<self-describing slug>", "label": "<axis label>", "value": <number> }, ... ],
 *     "caption": "<prose, no bracket syntax>",
 *     "captionTraces": ["<point slug>", ...],
 *     "source": { "appPath": ..., "appHash": ..., "generatedAt": ... }
 *   }
 *
 * A point's "slug" is address.js's own pointSlug() output, e.g. "model:artemis|2040|water" or
 * "model:commercial|2055|phi_c=0.2|water". address.parseSlug() is the single place that decodes
 * it, and this file calls that rather than re-deriving the grammar.
 *
 * IT RUNS TWO CHECKS, and only the second is new.
 *   FORWARD     every slug this manifest names (a point slug, a slugsAddressed entry, or a
 *               captionTraces entry) parses and resolves: the scenario names a PRESETS key, the
 *               phase names an ENVELOPE phase, the output names a key model() returns, and the
 *               knob (if the slug carries one) names a key both DETENTS and model()'s own inputs
 *               carry. This is sub-step 2's check, restated against the schema sub-step 2 actually
 *               shipped rather than the one this file guessed at.
 *   RECOMPUTE   for every point, address.parseSlug() recovers the call, address.scenarioArgs()
 *               rebuilds the scenario's own envelope inputs, any knob override is applied, and
 *               the app's own model() is called fresh. The manifest's recorded value must equal
 *               what comes back right now. This is the sub-step 3 extension and the actual point
 *               of this file; FORWARD alone is sub-step 2 wearing a new name.
 *
 * WHAT IT DOES NOT DO. It does not check that the caption's prose is the right sentence for what
 * the figure shows, the same limit verify_report.js states for itself: a trace resolving, and now
 * a value recomputing, are not the same thing as a human judging the figure well chosen or well
 * described. That reading is a person's own, not this tool's.
 *
 *   node verify_figure.js <manifest.json> <app.html>
 *   node verify_figure.js --prove <app.html>
 */
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const { loadModelAPI } = require('./lib/app_model.js');
const address = require('./lib/address.js');

/* ---------------------------------------------------------------- the app is the authority */

function loadApp(appPath) {
  let api;
  try {
    api = loadModelAPI(appPath);
  } catch (e) {
    console.error('REFUSED: ' + e.message);
    process.exit(2);
  }
  if (!api.PRESETS || Object.keys(api.PRESETS).length === 0) {
    console.error('REFUSED: the app carries no PRESETS, so no scenario can be resolved'); process.exit(2);
  }
  return api;
}

/* Decode one point's own slug back into a model() call and return the value model() gives right
   now. Throws (never defaults) on anything the slug names that PRESETS, the phase set, DETENTS,
   or model()'s own return object does not carry, the same refusal posture address.js itself
   takes when it first resolves the address. */
function recomputePoint(api, slug) {
  const parsed = address.parseSlug(slug);
  if (!(parsed.scenarioKey in api.PRESETS)) {
    throw new Error('slug names scenario "' + parsed.scenarioKey + '", not a PRESETS key');
  }
  if (!api.phases.includes(parsed.phase)) {
    throw new Error('slug names phase "' + parsed.phase + '", not one ENVELOPE carries');
  }
  const args = address.scenarioArgs(api, parsed.scenarioKey, parsed.phase);
  if (parsed.knob != null) {
    if (!(parsed.knob in api.DETENTS) || !api.inputKeys.has(parsed.knob)) {
      throw new Error('slug names knob "' + parsed.knob + '", not one this Oracle can sweep');
    }
    args[parsed.knob] = parsed.knobValue;
  }
  const out = api.model(args);
  if (!(parsed.output in out)) {
    throw new Error('slug names output "' + parsed.output + '", not a key model() returns');
  }
  return out[parsed.output];
}

/* ---------------------------------------------------------------- the check */

const EPS = 1e-9;

/* Every slug the manifest names anywhere (a point's own slug, a slugsAddressed entry, or a
   captionTraces entry) must parse and every component it names must resolve. slugsAddressed
   entries are "scenario:<key>" / "phase:<key>" / "knob:<key>" / "output:<key>" rather than full
   point slugs, so they are checked component-wise instead of through parseSlug. captionTraces is
   checked against the point slug set, since manifest.js defines it as exactly that list; a
   caption trace naming something no point carries is exactly the dangling-reference shape the
   decoy below plants. */
function forwardCheck(manifest, api) {
  const unresolved = [];
  const pointSlugs = new Set((manifest.points || []).map(p => p.slug));
  const refs = new Set([...(manifest.slugsAddressed || []), ...pointSlugs, ...(manifest.captionTraces || [])]);

  for (const p of (manifest.points || [])) {
    try { recomputePoint(api, p.slug); } // resolution only here; the value comparison is RECOMPUTE's job
    catch (e) { unresolved.push(p.slug + '  (' + e.message + ')'); }
  }
  for (const entry of (manifest.slugsAddressed || [])) {
    const i = entry.indexOf(':');
    const kind = entry.slice(0, i), val = entry.slice(i + 1);
    try {
      if (kind === 'scenario') { if (!(val in api.PRESETS)) throw new Error('not a PRESETS key'); }
      else if (kind === 'phase') { if (!api.phases.includes(val)) throw new Error('not an ENVELOPE phase'); }
      else if (kind === 'knob') { if (!(val in api.DETENTS) || !api.inputKeys.has(val)) throw new Error('not a sweepable knob'); }
      else if (kind === 'output') { address.resolveOutput(api, val); }
      else throw new Error('unrecognized slugsAddressed prefix "' + kind + '"');
    } catch (e) { unresolved.push(entry + '  (' + e.message + ')'); }
  }
  for (const t of (manifest.captionTraces || [])) {
    if (!pointSlugs.has(t)) unresolved.push(t + '  (caption trace names no point in this manifest)');
  }
  return { refs, unresolved };
}

/* The extension. Every point is re-derived from the app's own model() using the call its own
   slug names, and the recorded value must equal what comes back right now. */
function recomputeCheck(manifest, api) {
  const mismatches = [];
  for (const p of (manifest.points || [])) {
    let got;
    try { got = recomputePoint(api, p.slug); }
    catch (e) { mismatches.push({ point: p, reason: 'slug did not resolve: ' + e.message }); continue; }
    const tol = EPS * Math.max(1, Math.abs(got));
    if (Math.abs(got - p.value) > tol) {
      mismatches.push({ point: p, reason: 'recorded ' + p.value + ' does not match recomputed ' + got });
    }
  }
  return mismatches;
}

function check(manifest, api) {
  const fwd = forwardCheck(manifest, api);
  const mismatches = recomputeCheck(manifest, api);
  return { forward: fwd, mismatches, findings: fwd.unresolved.length + mismatches.length };
}

/* sub-step 2 alone, kept separate and callable on its own so the discriminating decoy below can
   show, by running both, that a resolution-only verifier passes what the recomputing one catches. */
function forwardOnlyFindings(manifest, api) {
  return forwardCheck(manifest, api).unresolved.length;
}

/* ---------------------------------------------------------------- report */

function report(manifestPath, appPath, r) {
  const W = s => process.stdout.write(s + '\n');
  W('VERIFY FIGURE  ' + manifestPath);
  W('  app                    ' + appPath);
  W('  slugs referenced       ' + r.forward.refs.size);
  W('');
  W('FORWARD    every slug named in the manifest resolves to a real scenario/phase/knob/output');
  if (r.forward.unresolved.length === 0) W('  PASS  0 unresolved');
  else { W('  FAIL  ' + r.forward.unresolved.length + ' unresolved'); for (const s of r.forward.unresolved) W('    ' + s); }
  W('');
  W('RECOMPUTE  every recorded data point equals the value derived fresh from the app right now');
  if (r.mismatches.length === 0) W('  PASS  0 mismatches');
  else { W('  FAIL  ' + r.mismatches.length + ' mismatch(es)'); for (const m of r.mismatches.slice(0, 25)) W('    ' + m.point.slug + '  ' + m.reason); }
  W('');
  W('LIMIT      this checks that a slug resolves and that a value recomputes. It does not judge');
  W('           whether the figure is the right one to draw, or whether the caption reads well.');
  W('           That reading is a person\'s own.');
  W('');
  W(r.findings === 0 ? 'RESULT  PASS' : 'RESULT  FAIL, ' + r.findings + ' finding(s)');
}

/* ---------------------------------------------------------------- proofs */

function prove(appPath) {
  const api = loadApp(appPath);
  const { renderFigure } = require('./render_figure.js');
  const { manifest } = renderFigure(api, { form: 'era-series', scenario: 'Agency Led Baseline', output: 'water' });

  const base = check(manifest, api);
  const out = [];
  out.push({ id: 'CONTROL', expect: 'a real render_figure.js manifest passes both checks', got: base.findings === 0 ? 'passes' : base.findings + ' finding(s)', pass: base.findings === 0 });

  /* THE DISCRIMINATING DECOY. Take the real manifest. Leave every slug, slugsAddressed entry and
     the caption/captionTraces untouched, so FORWARD still passes. Change one recorded value to a
     plausible neighbour the app does not hold for that point's own slug. A resolution-only
     verifier passes this. A recomputing verifier must not. */
  const mutated = JSON.parse(JSON.stringify(manifest));
  const target = mutated.points[0];
  const real = target.value;
  let decoyValue = real * 1.07 + 3; // a plausible neighbour, not the recomputed figure
  if (Math.abs(decoyValue - real) < 1e-6) decoyValue = real + 50; // guard against a degenerate real value
  target.value = decoyValue;

  const fOnly = forwardOnlyFindings(mutated, api);
  out.push({ id: 'DECOY-VALUE-MUTATED / forward-only', expect: 'a resolution-only verifier passes this decoy, because every slug named is still real',
    got: fOnly === 0 ? 'passed, 0 unresolved (slugs and caption untouched)' : 'unexpectedly flagged ' + fOnly, pass: fOnly === 0 });

  const full = check(mutated, api);
  out.push({ id: 'DECOY-VALUE-MUTATED / recompute', expect: 'a recomputing verifier catches this decoy',
    got: full.mismatches.length > 0 ? 'caught, ' + full.mismatches.length + ' mismatch(es)' : 'NOT CAUGHT', pass: full.mismatches.length > 0 });

  /* A second decoy in the same run, the sub-step 2 shape, kept as a sanity check that FORWARD
     itself still works and this file has not quietly become recompute-only. */
  const dangling = JSON.parse(JSON.stringify(manifest));
  dangling.points[0].slug = dangling.points[0].slug + '-x';
  const rd = check(dangling, api);
  out.push({ id: 'DECOY-SLUG-DANGLING', expect: 'FORWARD fires when a point names a slug that does not parse or resolve',
    got: rd.forward.unresolved.length > 0 ? 'caught, ' + rd.forward.unresolved.length + ' unresolved' : 'NOT CAUGHT', pass: rd.forward.unresolved.length > 0 });

  const w = Math.max(...out.map(o => o.id.length));
  let bad = 0;
  for (const o of out) { if (!o.pass) bad++; process.stdout.write((o.pass ? 'PASS  ' : 'FAIL  ') + o.id.padEnd(w) + '  expected ' + o.expect + '  |  got ' + o.got + '\n'); }
  process.stdout.write('\n' + (out.length - bad) + ' of ' + out.length + ' proofs pass\n');

  if (out.every(o => o.pass)) {
    // Written to the OS temp directory, never to oracle/fixtures/sample_manifest.json: that
    // fixture is checked in, and this manifest's own source.generatedAt is a fresh timestamp on
    // every run, so writing it back there mutated a fixture on every --prove, whether or not
    // anything else about the render had changed. A proof that rewrites its own fixture is not
    // read-only and cannot be trusted to be repeatable. Nothing in this repository reads
    // sample_manifest.json back (confirmed by grep before this was moved), so the temp path loses
    // no caller; it exists only so a person running --prove by hand has a real manifest to look at.
    const fixturePath = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'oracle-verify-figure-')), 'sample_manifest.json');
    fs.writeFileSync(fixturePath, JSON.stringify(manifest, null, 2) + '\n');
    process.stdout.write('\nwrote ' + fixturePath + ' (a real render_figure.js manifest, for cross-check; a temp path, not the checked-in fixture -- --prove no longer mutates the repository)\n');
  }
  process.exit(bad ? 1 : 0);
}

/* ---------------------------------------------------------------- entry */

/* Exported for oracle/answer_question.js, which needs to run the same recompute proof against a
   scalar (address.singlePoint) manifest inline, in-process, rather than shelling out to this file
   for every app-sourced sentence it writes. */
module.exports = { loadApp, check, forwardCheck, recomputeCheck, recomputePoint };

if (require.main === module) {
const argv = process.argv.slice(2);
if (argv[0] === '--prove') {
  if (!argv[1]) { console.error('usage: node verify_figure.js --prove <app.html>'); process.exit(2); }
  prove(argv[1]);
} else {
  const manifestPath = argv[0], appPath = argv[1];
  if (!manifestPath || !appPath) { console.error('usage: node verify_figure.js <manifest.json> <app.html>'); process.exit(2); }
  const api = loadApp(appPath);
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const r = check(manifest, api);
  report(manifestPath, appPath, r);
  process.exit(r.findings === 0 ? 0 : 1);
}
}
