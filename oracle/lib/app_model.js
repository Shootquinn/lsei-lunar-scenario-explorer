/* app_model.js -- the Oracle's one and only door into the app.
 *
 * This is the same extraction pattern tools/selfcheck_knob_sidecar.js already uses: locate the
 * DATA-ISLAND and MODEL-CORE markers in the delivered HTML by their sentinel comments, eval each
 * in its own sandboxed Function scope, and hand back a live model() bound to the file's own
 * CONFIG, DETENTS, ENVELOPE and PRESETS. Nothing here re-types a number out of the app; every
 * value a caller gets back came out of the file's own text, extracted and evaluated at call time.
 *
 * Two things are read live out of the app's OWN SOURCE TEXT rather than hand-copied by a person
 * reading the file once, because a hand-copied mirror is exactly the two-copies-of-one-truth
 * defect this project keeps finding: the set of keys model() actually reads off its argument
 * object (inputKeys), and the phase-to-era display name (2030 -> Prospecting, and so on), read
 * off the app's own runTests() benchmark cell labels rather than typed from memory.
 */
'use strict';
const fs = require('fs');
const crypto = require('crypto');

function readIsland(html, name, appPath) {
  const a = html.indexOf('/* ===== ' + name + ':START ===== */');
  const b = html.indexOf('/* ===== ' + name + ':END ===== */');
  if (a < 0 || b < 0 || b < a) {
    throw new Error('oracle/app_model: island ' + name + ' not found or malformed in ' + appPath +
      ' -- refusing rather than returning a partial model.');
  }
  return html.slice(a, b);
}

/* Derive the phase -> era display name map from the app's own runTests() CELLS array text,
   e.g. "{id:'Agency Led Baseline/Prospecting', ice:5, funding:'med',  phase:'2030', ...}"
   yields {'2030':'Prospecting'}. This is read off the shipped id strings rather than typed by
   hand, so a future era rename in the app is picked up the next time this runs rather than
   silently going stale in a mirror. Refuses (throws) if it cannot find at least one row per era
   name it does find, rather than guessing at a display label. */
function deriveEraNames(modelCoreSrc, appPath) {
  const re = /\{id:'[^\/']+\/([^']+)',\s*ice:[0-9.]+,\s*funding:'(\w+)',\s*phase:'(\d{4})'/g;
  const byPhase = {};
  let m;
  while ((m = re.exec(modelCoreSrc))) {
    const era = m[1], phase = m[3];
    if (byPhase[phase] && byPhase[phase] !== era) {
      throw new Error('oracle/app_model: phase ' + phase + ' names two different eras in the ' +
        'app\'s own benchmark rows (' + byPhase[phase] + ' and ' + era + ') in ' + appPath +
        ' -- refusing to guess which one a chart should print.');
    }
    byPhase[phase] = era;
  }
  if (Object.keys(byPhase).length === 0) {
    throw new Error('oracle/app_model: found no era-name rows in MODEL-CORE\'s runTests() CELLS ' +
      'array in ' + appPath + ' -- the app\'s own shape changed and this reader needs updating.');
  }
  return byPhase;
}

/* Derive the set of keys model() actually reads off its argument object, by scanning the
   function's own source text for every "a.<key>" reference, rather than hand-listing them from
   the header comment (which can drift the same way a lock cited by specification rather than by
   shipped location already has on this project). */
function deriveModelInputKeys(modelCoreSrc, appPath) {
  const fnStart = modelCoreSrc.indexOf('function model(a){');
  if (fnStart < 0) {
    throw new Error('oracle/app_model: function model(a){ not found in MODEL-CORE in ' + appPath);
  }
  // model() is the last thing MODEL-CORE declares before the test harness; take the island tail
  // from the function's own start to the end of the island text, which safely over-includes
  // (runTests lives below it and is excluded because the island cursor never reaches it) --
  // in practice the model() body ends well before the "TEST HARNESS" banner, so slice there.
  const harnessAt = modelCoreSrc.indexOf('TEST HARNESS', fnStart);
  const body = harnessAt > fnStart ? modelCoreSrc.slice(fnStart, harnessAt) : modelCoreSrc.slice(fnStart);
  const keys = new Set();
  const re = /\ba\.(\w+)/g;
  let m;
  while ((m = re.exec(body))) keys.add(m[1]);
  if (keys.size === 0) {
    throw new Error('oracle/app_model: model(a){...} read no a.<key> references in ' + appPath +
      ' -- refusing, since a model with no legible inputs cannot be addressed at all.');
  }
  return keys;
}

/* Load a live model API out of one app HTML file (real or a scratch mutation of it).
   Returns { model, CONFIG, DETENTS, ENVELOPE, PRESETS, phases, eraNames, inputKeys,
             appPath, appHash } and nothing else; every field is read out of this call's own
   file, never cached across calls, so a decoy re-render always re-extracts from scratch. */
function loadModelAPI(appPath) {
  const html = fs.readFileSync(appPath, 'utf8');
  const appHash = crypto.createHash('md5').update(html).digest('hex');

  const dataIslandSrc = readIsland(html, 'DATA-ISLAND', appPath);
  const box = {};
  new Function('window', 'globalThis', dataIslandSrc)(box, box);
  const KNOB_DATA = box.KNOB_DATA;
  if (!KNOB_DATA) {
    throw new Error('oracle/app_model: DATA-ISLAND evaluated but published no KNOB_DATA in ' + appPath);
  }

  const modelCoreSrc = readIsland(html, 'MODEL-CORE', appPath);
  const tail = '\nreturn {model, CONFIG, DETENTS, ENVELOPE, PRESETS: KNOB_DATA.PRESETS};';
  const api = new Function('KNOB_DATA', modelCoreSrc + tail)(KNOB_DATA);
  if (typeof api.model !== 'function') {
    throw new Error('oracle/app_model: MODEL-CORE did not publish a callable model() in ' + appPath);
  }

  /* Class five (oracle/answer_question.js) needs more of the app's own registers than a figure
     ever does: the exclusion prose, the citation registers, the ledger and section bodies, and
     the claim-slug set the text-trace convention checks traces against. These are read straight
     off KNOB_DATA, which the DATA-ISLAND eval above already produced in full; nothing here is a
     second copy of anything, it is the same box read a few fields further. */
  const EXCLUSIONS = KNOB_DATA.EXCLUSIONS || {};
  const SECTION_REFS = KNOB_DATA.SECTION_REFS || {};
  const REFERENCES = KNOB_DATA.REFERENCES || {};
  const LEDGER = KNOB_DATA.LEDGER || {};
  const SECTIONS = KNOB_DATA.SECTIONS || {};
  const SLUGS = new Set(Object.keys(KNOB_DATA.SLUGS || {}));

  /* DERIVATION and its three band-selector helpers (_dBindKey/_dIceKey/_dPhiKey) live in the
     DERIVATION-CORE island, evaluated the same way MODEL-CORE is above rather than hand-mirrored:
     a copy of a three-line ternary is still a copy, and a copy drifts the day the app's own bands
     move. composeDerivation() and runDerivationTests() come along in the same eval and are never
     called; they reference state this loader does not build and are declared, not invoked, so
     their presence costs nothing. */
  let DERIVATION = {}, regimeNoteKeyForBinding = null, iceNoteKeyForIce = null, phiNoteKeyForPhiC = null;
  const derivationCoreSrc = readIsland(html, 'DERIVATION-CORE', appPath);
  if (derivationCoreSrc) {
    const dTail = '\nreturn {DERIVATION, _dBindKey, _dIceKey, _dPhiKey};';
    const dApi = new Function('KNOB_DATA', derivationCoreSrc + dTail)(KNOB_DATA);
    DERIVATION = dApi.DERIVATION || {};
    regimeNoteKeyForBinding = dApi._dBindKey;
    iceNoteKeyForIce = dApi._dIceKey;
    phiNoteKeyForPhiC = dApi._dPhiKey;
  }

  const eraNames = deriveEraNames(modelCoreSrc, appPath);
  const inputKeys = deriveModelInputKeys(modelCoreSrc, appPath);
  // Phase order comes off ENVELOPE's own funding-tier rows rather than a hand-typed ['2030',
  // '2040','2055'] literal; every funding tier carries the same three phase keys, so the first
  // one found governs, and this refuses loudly if that assumption is ever false.
  const fundingKeys = Object.keys(api.ENVELOPE);
  if (fundingKeys.length === 0) {
    throw new Error('oracle/app_model: ENVELOPE carries no funding tiers in ' + appPath);
  }
  const phases = Object.keys(api.ENVELOPE[fundingKeys[0]]);
  for (const f of fundingKeys) {
    const fp = Object.keys(api.ENVELOPE[f]);
    if (fp.length !== phases.length || fp.some((p, i) => p !== phases[i])) {
      throw new Error('oracle/app_model: ENVELOPE.' + f + ' names a different phase set than ' +
        'ENVELOPE.' + fundingKeys[0] + ' in ' + appPath + ' -- refusing to pick one arbitrarily.');
    }
  }

  return {
    model: api.model,
    CONFIG: api.CONFIG,
    DETENTS: api.DETENTS,
    ENVELOPE: api.ENVELOPE,
    PRESETS: api.PRESETS,
    phases,
    eraNames,
    inputKeys,
    appPath,
    appHash,
    EXCLUSIONS,
    SECTION_REFS,
    REFERENCES,
    LEDGER,
    SECTIONS,
    SLUGS,
    DERIVATION,
    regimeNoteKeyForBinding,
    iceNoteKeyForIce,
    phiNoteKeyForPhiC,
  };
}

module.exports = { loadModelAPI, readIsland };
