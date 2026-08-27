#!/usr/bin/env node
/* render_figure.js -- the Oracle's figure renderer.
 *
 * A small closed grammar over the app's own model(), DETENTS, ENVELOPE and PRESETS: three forms,
 * era series, scenario comparison, and knob sweep, each an address resolved against those four
 * objects with no hand-typed number anywhere. An address naming a key one of them does not carry
 * is a thrown error (a build-time refusal), never a blank cell.
 *
 * Library use:
 *   const { renderFigure } = require('./oracle/render_figure.js');
 *   const { svg, manifest } = renderFigure(appPath, { form: 'era-series', scenario: 'Agency Led
 *     Baseline', output: 'water' });
 *
 * CLI use (run from the repository root; --app defaults to the app beside this file if omitted):
 *   node oracle/render_figure.js --app=index.html \
 *     --form=era-series --scenario="Agency Led Baseline" --output=water \
 *     --out=/tmp/era-water
 *   node oracle/render_figure.js --form=scenario-comparison --phase=2040 --output=water --out=...
 *   node oracle/render_figure.js --form=knob-sweep --scenario="The Commercial Break" --phase=2040 \
 *     --knob=power --output=water --out=...
 *
 * Writes <out>.svg and <out>.manifest.json when --out is given; always returns both in memory.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { loadModelAPI } = require('./lib/app_model.js');
const address = require('./lib/address.js');
const { renderSVG } = require('./lib/svg.js');
const { buildManifest } = require('./lib/manifest.js');
const { renderRasterPNG } = require('./lib/raster_figure.js');

/* Two candidate locations for the app, checked in order: the shipped layout (this file and the
   app both sitting at a published repository's root) and this project's own working-tree layout
   (the gold-star copy, one level further down). Whichever exists first is the default; a caller
   who wants a third location entirely still overrides it with --app. */
function firstExisting(paths) {
  for (const p of paths) if (fs.existsSync(p)) return p;
  return paths[0];
}
const DEFAULT_APP = firstExisting([
  path.join(__dirname, '..', 'index.html'),
  path.join(__dirname, '..', 'context', 'gold star outputs THE BEST', 'Lunar_Scenario_Explorer.html'),
]);

function resolveForm(api, opts) {
  if (opts.form === 'era-series') {
    if (!opts.scenario || !opts.output) throw new Error('oracle/render_figure: era-series needs scenario and output.');
    return address.eraSeries(api, { scenario: opts.scenario, output: opts.output });
  }
  if (opts.form === 'scenario-comparison') {
    if (!opts.phase || !opts.output) throw new Error('oracle/render_figure: scenario-comparison needs phase and output.');
    return address.scenarioComparison(api, { phase: opts.phase, output: opts.output });
  }
  if (opts.form === 'knob-sweep') {
    if (!opts.scenario || !opts.phase || !opts.knob || !opts.output) {
      throw new Error('oracle/render_figure: knob-sweep needs scenario, phase, knob and output.');
    }
    return address.knobSweep(api, { scenario: opts.scenario, phase: opts.phase, knob: opts.knob, output: opts.output });
  }
  throw new Error('oracle/render_figure: "' + opts.form + '" is not one of era-series, scenario-comparison, knob-sweep.');
}

/* No em dash: house style bars it from any generated document, and a figure title lands in
   client documents the same as a caption does. A comma reads exactly as well here. */
function titleFor(resolvedAddress) {
  if (resolvedAddress.form === 'era-series') return resolvedAddress.scenario + ', ' + resolvedAddress.output + ' by era';
  if (resolvedAddress.form === 'scenario-comparison') return resolvedAddress.output + ' at ' + resolvedAddress.phase + ' across scenarios';
  return resolvedAddress.scenario + ', ' + resolvedAddress.phase + ', ' + resolvedAddress.output + ' vs ' + resolvedAddress.knob;
}

/* The unit each output is denominated in. Read nowhere in the app as a machine-legible field (the
   live app prints "t/yr" only once, beside the water readout in its own DOM, never as a value on
   KNOB_DATA or CONFIG), so this is stated here rather than mirrored from a place a caller could
   point to. Every entry is a rate the model derives from CONFIG.H (hours per calendar year) times
   a throughput or power term, which is why water, construction, constructionPotential, Cfull,
   Wpower and Wthr all share one unit. An output this map does not carry is a refusal, not a blank:
   the same posture oracle/lib/address.js takes when an address names a key nothing carries, rather
   than shipping a figure that states no unit, which is the defect this map exists to close. */
const OUTPUT_UNITS = {
  water: 't/yr',
  construction: 't/yr',
  constructionPotential: 't/yr',
  Cfull: 't/yr',
  Wpower: 't/yr',
  Wthr: 't/yr',
};

function unitFor(output) {
  if (!Object.prototype.hasOwnProperty.call(OUTPUT_UNITS, output)) {
    throw new Error('oracle/render_figure: "' + output + '" has no recorded unit in OUTPUT_UNITS. ' +
      'Add one rather than ship a figure that states none -- that is the defect Step 41 closed.');
  }
  return OUTPUT_UNITS[output];
}

/* apiOrAppPath: either a loaded API object (from loadModelAPI) so a caller can reuse one
   extraction across many figures, or a filesystem path, which this loads fresh. Loading fresh
   every time is what the decoy proof relies on: nothing here caches a prior extraction across
   two different app files. */
function renderFigure(apiOrAppPath, opts) {
  const api = typeof apiOrAppPath === 'string' ? loadModelAPI(apiOrAppPath) : apiOrAppPath;
  const resolved = resolveForm(api, opts);
  const kind = opts.form === 'knob-sweep' ? 'line' : 'bar';
  const resolvedAddress = resolved.resolvedAddress;
  const figureId = opts.figureId || (resolvedAddress.form + '__' +
    address.slugify([resolvedAddress.scenario, resolvedAddress.phase, resolvedAddress.knob, resolvedAddress.output]
      .filter(Boolean).join('-')));

  const unit = unitFor(resolvedAddress.output);

  // Shared once so the SVG and the docx raster fallback are built from the identical title,
  // subtitle, labels and points, never two independently-typed copies of the same figure.
  const drawing = {
    title: titleFor(resolvedAddress),
    subtitle: 'Source: ' + path.basename(api.appPath) + ' (' + api.appHash.slice(0, 8) + '…)',
    xLabel: opts.form === 'era-series' ? 'era' : (opts.form === 'scenario-comparison' ? 'scenario' : opts.knob),
    yLabel: resolvedAddress.output,
    unit,
    points: resolved.points,
    kind,
  };

  const svg = renderSVG(drawing);

  const manifest = buildManifest({
    figureId,
    form: opts.form,
    slugsAddressed: resolved.slugsAddressed,
    resolvedAddress,
    points: resolved.points,
    appPath: api.appPath,
    appHash: api.appHash,
    unit,
  });

  /* raster: the docx SVG fallback the `docx` package's own type definitions require (see
     oracle/lib/raster_figure.js and its pure-Node PNG encoder). Computed lazily-by-default is not
     worth the complexity here: every caller of renderFigure that does not build a docx simply
     ignores this field, and it costs microseconds against a 640x400 canvas. */
  const raster = renderRasterPNG(drawing);

  return { svg, manifest, figureId, raster };
}

function parseArgv(argv) {
  const opts = {};
  for (const tok of argv) {
    const m = /^--([^=]+)=(.*)$/.exec(tok);
    if (m) opts[m[1]] = m[2];
  }
  return opts;
}

function main() {
  const opts = parseArgv(process.argv.slice(2));
  const appPath = opts.app || DEFAULT_APP;
  const { svg, manifest, figureId } = renderFigure(appPath, opts);
  if (opts.out) {
    fs.mkdirSync(path.dirname(opts.out), { recursive: true });
    fs.writeFileSync(opts.out + '.svg', svg, 'utf8');
    fs.writeFileSync(opts.out + '.manifest.json', JSON.stringify(manifest, null, 2), 'utf8');
    console.log('wrote ' + opts.out + '.svg and .manifest.json (figure ' + figureId + ')');
  } else {
    console.log(JSON.stringify(manifest, null, 2));
  }
}

if (require.main === module) {
  try {
    main();
  } catch (e) {
    console.error('FAIL: ' + e.message);
    process.exit(1);
  }
}

module.exports = { renderFigure };
