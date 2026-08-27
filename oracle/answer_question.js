#!/usr/bin/env node
/* answer_question.js -- Step 41 sub-step 5, class five, the question form.
 *
 * A question goes in; one of five verdicts comes out: APP, LITERATURE, BOTH, FIGURE, or REFUSE.
 * This file is the router this project's own routing specification describes, built to it rather
 * than around it. It is a standing file under oracle/, per the ruling that Oracle tooling ships
 * as standing files rather than embedded code a model rewrites each run.
 *
 * THE CLASSIFICATION IS BEFORE THE RETRIEVAL, not after. A question is split into sub-claims
 * (decomposeSubClaims), and each sub-claim is classified by whether the router can build a
 * resolved address into the app (the operational "mathy" test in address.js: every named
 * component resolves against PRESETS, ENVELOPE, DETENTS, or model()'s own return object with no
 * hand-typed number), before anything is searched in the literature. A sub-claim that resolves to
 * the app never triggers a literature search at all; two sources are never searched and then
 * reconciled, because reconciling after the fact is exactly the shape that lets a summary's number
 * argue with the app's own number, which is the defect this whole step exists to prevent.
 *
 * SUB-CLAIM CLASSIFICATION, in order, per sub-claim text:
 *   1. Does a scenario name resolve (a PRESETS label) and does at least one output keyword
 *      resolve (the OUTPUT_LEXICON below, matched against model()'s own return keys)? If yes,
 *      and the sub-claim's own language asks for a sweep across a knob's full rail, attempt the
 *      knob-sweep address; otherwise attempt one scalar address per matched output
 *      (address.singlePoint). Either resolves through the app or throws a specific, named reason
 *      it does not -- never a guess.
 *   2. If no app address resolves, attempt literature retrieval (oracle/lib/literature_search.js):
 *      a filename match against the 57-file corpus followed by a full-text confirmation, per the
 *      specification's own named mechanism.
 *   3. If the app's EXCLUSIONS register names the sub-claim's own topic at least as strongly as
 *      the best (if any) literature candidate, and that literature candidate carries no author or
 *      year identity anchor, the EXCLUSIONS refusal is preferred: a structural boundary the app
 *      has already declared is stronger evidence than an unanchored keyword-overlap match, per
 *      the specification's own ranking of the two (section 3).
 *   4. Otherwise, a confirmed literature match answers; failing that, a weaker refusal states that
 *      no address resolved and no match was found across the corpus searched.
 *
 * COMPOSITION. The question's own verdict is composed from its sub-claims' verdicts (section 1):
 * all-APP (with a figure layered on top per section 5's own test, more than one model() call)
 * gives APP or FIGURE; all-LITERATURE gives LITERATURE; a genuine mix of an app-sourced fact and a
 * literature-sourced fact answering two DISTINCT questions gives BOTH; all-refused gives REFUSE.
 * Where the app and a literature candidate appear to compete for the SAME fact, the app wins
 * outright per the standing rule this project has already paid for three times, and the literature
 * figure is never folded in as a second BOTH sentence.
 *
 * TRACE DISCIPLINE, per section 4. An APP scalar fact is traced with a fourth manifest form,
 * "scalar", built the same way sub-step 2's manifest is built (oracle/lib/manifest.js) and proved
 * the same way sub-step 3's verifier proves a figure (oracle/verify_figure.js's check(), reused
 * here in-process rather than reimplemented): the trace names the resolved address and the
 * verifier recomputes the value fresh and asserts equality. This is recompute-grade support, not
 * mere resolution. An app-carried NARRATIVE fact (the binding-regime prose in DERIVATION.notes) is
 * a stored field, not a live computation, and it is traced the way classes one through four trace
 * any LEDGER-adjacent fact: bracketed [[slug]] tokens naming the note's own claims, checked for
 * resolution against KNOB_DATA.SLUGS the way verify_report.js's own FORWARD half already does.
 * That is resolution-only support, the same limit prose has always carried, and it is not
 * dressed up as the stronger promise the scalar number gets. A LITERATURE fact is traced with a
 * citation, resolved through SECTION_REFS/REFERENCES where the app already cites the matched file,
 * or a direct filename citation into the corpus where it does not; this is resolution-only too,
 * because a citation resolving to a real file is not proof the file supports the sentence beside
 * it, and only a person's sampling read closes that gap. A REFUSE fact carries no trace, because
 * nothing is asserted; what stands in its place is the refusal's own stated reason.
 *
 *   node answer_question.js "<question text>" [--app=<path>] [--lit=<path>] [--log=<path>]
 */
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const { loadModelAPI } = require('./lib/app_model.js');
const address = require('./lib/address.js');
const { buildManifest } = require('./lib/manifest.js');
const { check: verifyManifest } = require('./verify_figure.js');
const { searchLiterature, citationForFile, tokenize } = require('./lib/literature_search.js');
const { matchExclusions } = require('./lib/exclusions_match.js');
const { renderFigure } = require('./render_figure.js');

/* Two candidate locations for the app and for the literature corpus, checked in order: the
   shipped layout (oracle/, index.html and literature/ all under one published repository's root)
   and this project's own working-tree layout (the gold-star copy, and a sibling clone's
   literature/, both one level further away). Whichever exists first is the default; a caller who
   wants a third location entirely still overrides it with --app or --lit. */
function firstExisting(paths) {
  for (const p of paths) if (fs.existsSync(p)) return p;
  return paths[0];
}
const DEFAULT_APP = firstExisting([
  path.join(__dirname, '..', 'index.html'),
  path.join(__dirname, '..', 'context', 'gold star outputs THE BEST', 'Lunar_Scenario_Explorer.html'),
]);
const DEFAULT_LIT = firstExisting([
  path.join(__dirname, '..', 'literature'),
  path.join(__dirname, '..', '..', 'lsei-lunar-scenario-explorer', 'literature'),
]);
/* The run log is this session's own ephemeral history, never part of the published tree, so its
   default location is the OS temp directory rather than a path inside this project or the clone;
   a caller who wants the log kept passes --log=<path> explicitly. */
const DEFAULT_LOG = path.join(os.tmpdir(), 'lsei-oracle', 'question_form_run_log.jsonl');

/* ================================================================== the lexicons
 *
 * These are the one genuinely hand-built part of this file, and they are named as such rather
 * than left implicit. model()'s return keys and DETENTS' rail names are internal identifiers no
 * mechanical process can recover from ordinary English on its own (the app itself does this
 * translation with a UI, not a parser); a small phrase-to-key table is the cheapest mechanism that
 * could do it for text, the same posture the routing specification takes toward literature
 * retrieval. What IS mechanical is the resolution test after a candidate key is proposed: every
 * lexicon hit is verified against the app's own PRESETS/DETENTS/model()-return-keys before it is
 * trusted, exactly like address.js's own resolve* functions, so a wrong or stale lexicon entry
 * fails loudly rather than silently producing a wrong number.
 */
const OUTPUT_LEXICON = [
  // [regex, output key]. Longer, more specific phrases are listed first so they win a scan.
  // "water yield" alone excludes "water yield model", which names the app's model rather than
  // asking for its output value; a sub-claim naming the model by name is not thereby asking for
  // the number, the same distinction section 1's own "number and its own why" example draws.
  [/\bwater output\b|\bwater yield(?!\s+model)\b|\btonnes? of water\b/i, 'water'],
  [/\bbinding constraint\b|\bwhat binds\b|\bbinding regime\b/i, 'binding'],
  [/\bice fraction\b|\bice concentration\b|\bice content\b|\bice assumption\b|\bregolith ice\b/i, 'ice'],
  [/\bconstruction potential\b/i, 'constructionPotential'],
  [/\bconstruction\b/i, 'construction'],
  [/\bfeasib(le|ility)\b/i, 'feasible'],
  [/\bphi[_ ]?c\b|\bconstruction share\b/i, 'phi_c'],
  [/\bregolith\b(?!.*\bice\b)/i, 'regolith'],
];

const SWEEP_LANGUAGE = /\bswept?\b|\bsweep\b|\bfull detent rail\b|\bacross its full\b|\bhow does .* change as\b|\bvaries?\b/i;

const KNOB_LEXICON = [
  [/\bfission specific power\b|\bfission[- ]specific[- ]power\b|\bf ?fis\b/i, 'fFis'],
  [/\bsolar specific power\b|\bf ?sol\b/i, 'fSol'],
  [/\bconstruction share\b|\bphi[_ ]?c\b/i, 'phi_c'],
  [/\bice fraction\b|\bice knob\b/i, 'ice'],
  [/\bpower rail\b|\bpower knob\b|\bpower detent\b/i, 'power'],
  [/\bmass rail\b|\bmass knob\b|\bmass detent\b/i, 'mass'],
  [/\blanded cost\b/i, 'landed_cost'],
];

function findScenario(api, text) {
  const lower = text.toLowerCase();
  for (const key of Object.keys(api.PRESETS)) {
    if (lower.includes(api.PRESETS[key].label.toLowerCase())) return key;
  }
  return null;
}

function findPhase(api, text) {
  const lower = text.toLowerCase();
  for (const phase of api.phases) {
    const era = (api.eraNames[phase] || '').toLowerCase();
    if (era && lower.includes(era)) return phase;
    if (lower.includes(phase)) return phase;
  }
  return null;
}

function findOutputs(text) {
  const hits = [];
  for (const [re, key] of OUTPUT_LEXICON) {
    if (re.test(text) && !hits.includes(key)) hits.push(key);
  }
  return hits;
}

function findSweepKnob(text) {
  if (!SWEEP_LANGUAGE.test(text)) return null;
  for (const [re, knob] of KNOB_LEXICON) {
    if (re.test(text)) return knob;
  }
  return { unnamed: true };
}

/* ================================================================== decomposition
 *
 * A heuristic front end, named as one. Full natural-language decomposition of an arbitrary
 * English question into sub-claims is not a deterministic problem; what is mechanical, and is
 * what actually carries this file's guarantees, is the resolution test each candidate sub-claim
 * is put through afterward. This splits on a semicolon (treating everything before the last one
 * as shared context carried into every clause that follows, since a context clause like "the
 * app's water yield model assumes a fixed regolith ice fraction" is load-bearing for resolving
 * the question clause that follows it) and then on a comma-plus-"and" immediately followed by a
 * new interrogative or auxiliary word, which is the shape a second, independently-answerable
 * question clause takes and a plain noun-phrase conjunction ("the binding constraint and the
 * water output") does not.
 *
 * A second clause split this way is merged back into the one before it when its own subject is a
 * bare anaphoric pronoun ("what did IT conclude", "what would THAT cost") rather than a freshly
 * named noun phrase ("what ice concentrations did THE LCROSS IMPACT EXPERIMENT detect"). A bare
 * pronoun continuing the first clause's own topic is not a second, independently-resolvable
 * sub-claim; splitting it anyway strands the pronoun with no antecedent and sends it looking for
 * a literature match or an app address on its own, which it was never going to have. This is a
 * syntactic test (does the clause introduce its own noun-phrase subject), not a semantic guess
 * at which question is "really" about one topic.
 */
const PRONOUN_CONTINUATION = /^(what|why|how)\s+(did|does|is|would|will|could|should)\s+(it|that|this|they)\b/i;

/* Returns one { own, full } object per sub-claim. "own" is the clause's own text, with no
   borrowed context, and is what literature and EXCLUSIONS matching is run against: a shared lead
   clause like "the app's water yield model assumes a fixed regolith ice fraction" contributes the
   words "app" and "model", which are exactly the boilerplate every EXCLUSIONS entry's own "does"
   field opens with ("This app does not model X"), so folding it into every sibling clause's own
   search text inflates an EXCLUSIONS match, and a coincidentally shared "model", for every clause
   in the question, not just the one the context actually belongs to. "full" carries the context
   prefix and is what the app-address resolution path (tryAppPath) uses instead, because a clause
   like "what value does it use for Early Shift to Mars" needs the lead clause's own "ice fraction"
   to know which model() output it is even asking about; that borrowing is safe on the APP side
   because address resolution is a strict, all-or-nothing test against real PRESETS/DETENTS/model()
   keys, so an extra stray word never manufactures a false address the way it manufactures a false
   keyword-overlap score on the literature/EXCLUSIONS side. */
function decomposeSubClaims(questionText) {
  const semiParts = questionText.split(';').map(s => s.trim()).filter(Boolean);
  const context = semiParts.length > 1 ? semiParts.slice(0, -1).join('; ') : '';
  const questionPart = semiParts[semiParts.length - 1];
  const rawPieces = questionPart
    .split(/,\s*and\s+(?=what\b|why\b|how\b|does\b|is\b|did\b|would\b|will\b|which\b)/i)
    .map(s => s.trim())
    .filter(Boolean);

  const pieces = [];
  for (const piece of rawPieces) {
    if (pieces.length > 0 && PRONOUN_CONTINUATION.test(piece)) {
      pieces[pieces.length - 1] = pieces[pieces.length - 1].replace(/[?.]?$/, '') + ', and ' + piece;
    } else {
      pieces.push(piece);
    }
  }
  return pieces.map(p => ({ own: p, full: context ? context + '. ' + p : p }));
}

/* ================================================================== app-side resolution */

function buildScalarFact(api, scenarioKey, phaseKey, output, label) {
  const resolved = address.singlePoint(api, {
    scenario: api.PRESETS[scenarioKey].label, phase: phaseKey, output,
  });
  const manifest = buildManifest({
    figureId: 'scalar__' + address.slugify([scenarioKey, phaseKey, output].join('-')),
    form: 'scalar', slugsAddressed: resolved.slugsAddressed, resolvedAddress: resolved.resolvedAddress,
    points: resolved.points, appPath: api.appPath, appHash: api.appHash,
  });
  const verify = verifyManifest(manifest, api);
  return {
    kind: 'app-scalar', label: label || output,
    scenario: api.PRESETS[scenarioKey].label, phase: phaseKey, output,
    value: resolved.points[0].value, slug: resolved.points[0].slug,
    manifest, verify, verified: verify.findings === 0,
  };
}

function buildNoteFact(api, noteKey, label) {
  const note = api.DERIVATION.notes && api.DERIVATION.notes[noteKey];
  if (!note) return null;
  const unresolvedClaims = (note.claims || []).filter(c => !api.SLUGS.has(c));
  return {
    kind: 'app-note', label: label || noteKey, noteKey, text: note.text, claims: note.claims || [],
    tracesResolve: unresolvedClaims.length === 0, unresolvedClaims,
  };
}

/* Attempt the app path for one sub-claim. Returns null (not a thrown error) when the sub-claim
   simply does not name a scenario or an output the OUTPUT_LEXICON recognizes, which is the
   ordinary "this is not mathy" case, not a failure. A knob-sweep whose knob names a real sweep
   intent that the shipped address.js grammar cannot resolve (fFis is a CONFIG coefficient with
   its own FFIS_LANDMARKS rail, not a DETENTS entry; only ice, power, mass and phi_c are both a
   DETENTS rail and a model() input) is returned as its own distinct outcome, appUnbuildable,
   rather than silently falling through to a literature search that has nothing to do with the
   question actually asked. */
function tryAppPath(api, subClaimText) {
  const scenarioKey = findScenario(api, subClaimText);
  if (!scenarioKey) return null;
  const outputs = findOutputs(subClaimText);
  if (outputs.length === 0) return null;
  const phaseKey = findPhase(api, subClaimText) || api.phases[0];
  const phaseWasNamed = !!findPhase(api, subClaimText);

  const sweepKnob = findSweepKnob(subClaimText);
  if (sweepKnob) {
    if (sweepKnob.unnamed) {
      return { appUnbuildable: true, reason: 'sweep language detected ("' + subClaimText.match(SWEEP_LANGUAGE)[0] +
        '") but no knob name in this sub-claim matched the KNOB_LEXICON, so no sweep address can be attempted.' };
    }
    try {
      const resolved = address.knobSweep(api, {
        scenario: api.PRESETS[scenarioKey].label, phase: phaseKey, knob: sweepKnob, output: outputs[0],
      });
      return { figureEligible: true, scenarioKey, phaseKey, knob: sweepKnob, output: outputs[0], resolved };
    } catch (e) {
      return { appUnbuildable: true, reason: e.message };
    }
  }

  const facts = [];
  for (const output of outputs) {
    try {
      const fact = buildScalarFact(api, scenarioKey, phaseKey, output,
        phaseWasNamed ? undefined : output + ' (scenario-level input; phase is incidental to the call)');
      facts.push(fact);
    } catch (e) {
      facts.push({ kind: 'app-scalar-failed', label: output, reason: e.message });
    }
  }
  // The binding-regime narrative rides along whenever 'binding' was one of the matched outputs,
  // per the routing specification's own first named ambiguous shape: the number is a model()
  // output, and the binding-regime explanation is DERIVATION.notes, the same field class one's
  // own Era regime notes section already draws from.
  if (outputs.includes('binding')) {
    const args = address.scenarioArgs(api, scenarioKey, phaseKey);
    const out = api.model(args);
    const noteKey = api.regimeNoteKeyForBinding ? api.regimeNoteKeyForBinding(out.binding) : null;
    if (noteKey) {
      const note = buildNoteFact(api, noteKey, 'binding-regime explanation');
      if (note) facts.push(note);
    }
  }
  return { facts, scenarioKey, phaseKey };
}

/* ================================================================== literature-side resolution */

function tryLiteraturePath(litDir, subClaimText) {
  const result = searchLiterature(litDir, subClaimText);
  return result;
}

/* ================================================================== the EXCLUSIONS precedence rule
 *
 * Per section 3, an EXCLUSIONS hit is "the strongest form of refusal because the app has already
 * declared the boundary." A bag-of-words literature match can score a "confirmed" hit against an
 * off-topic file purely by sharing ordinary domain vocabulary (a paper on cryogenic propellant
 * technology shares "cryogenic" and "transfer" with a question about a cryogenic-transfer SCHEDULE
 * DELAY without ever pricing a delay). The literature candidate is trusted over an EXCLUSIONS hit
 * only when it carries its own identity anchor (the filename's author or year is named in the
 * sub-claim's own text), which is real, checkable evidence a keyword coincidence is not. Absent
 * that anchor, an EXCLUSIONS entry naming at least two distinct topic words the sub-claim also
 * uses outranks the literature guess.
 */
function classifyNonAppSubClaim(api, litDir, subClaimText) {
  const lit = tryLiteraturePath(litDir, subClaimText);
  const exclusions = matchExclusions(api.EXCLUSIONS, subClaimText);
  const topExclusionOverlap = exclusions.length ? exclusions[0].overlap : 0;
  const tiedExclusions = exclusions.filter(e => e.overlap === topExclusionOverlap && topExclusionOverlap > 0);

  const hasIdentityAnchor = !!(lit.best && lit.best.bonus > 0);
  if (lit.best && hasIdentityAnchor) {
    return { kind: 'literature', best: lit.best, search: lit, reason: 'identity-anchored (author/year named in the question)' };
  }
  if (tiedExclusions.length > 0 && topExclusionOverlap >= 2) {
    return { kind: 'refuse-strong', exclusions: tiedExclusions, search: lit };
  }
  if (lit.best && lit.best.confirmed) {
    return { kind: 'literature', best: lit.best, search: lit, reason: 'full-text confirmed, no competing EXCLUSIONS boundary' };
  }
  if (tiedExclusions.length > 0) {
    return { kind: 'refuse-strong', exclusions: tiedExclusions, search: lit };
  }
  return { kind: 'refuse-weak', search: lit };
}

/* ================================================================== per-sub-claim classification */

function classifySubClaim(api, litDir, piece) {
  // piece is { own, full } from decomposeSubClaims. The APP path gets the context-carrying
  // "full" text (it needs the borrowed scenario/output words and a strict address-resolution
  // test cannot be fooled by an extra one); the literature/EXCLUSIONS path gets only "own" (a
  // borrowed context clause's boilerplate words inflate a keyword-overlap score in a way address
  // resolution structurally cannot be inflated).
  const app = tryAppPath(api, piece.full);
  if (app) {
    if (app.figureEligible) return { text: piece.full, kind: 'app-figure', app };
    if (app.appUnbuildable) return { text: piece.full, kind: 'app-unbuildable', reason: app.reason };
    return { text: piece.full, kind: 'app', facts: app.facts };
  }
  const non = classifyNonAppSubClaim(api, litDir, piece.own);
  return Object.assign({ text: piece.own }, non);
}

/* ================================================================== composition and rendering */

function fmtNum(v) {
  if (typeof v !== 'number' || !isFinite(v)) return String(v);
  const r = Math.round(v * 1000) / 1000;
  return String(r);
}

function renderLiteratureSentence(api, litDir, sub) {
  const best = sub.best;
  const citation = citationForFile(api, best.filename);
  const lines = [];
  if (citation) {
    const ref = citation.reference;
    lines.push('The literature corpus answers this from ' + best.filename + ', already cited in this app under ' +
      citation.referenceKey + ' (' + ref.authors + ', ' + ref.year + ', "' + ref.title + '", ' + ref.venue +
      (ref.locator ? ', ' + ref.locator : '') + ').');
    if (citation.citingSections.length) {
      lines.push('Trace (citation, resolution-only): SECTION_REFS[' + citation.citingSections.join(', ') +
        '] -> REFERENCES[' + citation.referenceKey + '] -> literature/' + best.filename + '.');
    } else {
      lines.push('Trace (citation, resolution-only): REFERENCES[' + citation.referenceKey + '] -> literature/' + best.filename + '.');
    }
  } else {
    lines.push('The literature corpus answers this from literature/' + best.filename +
      ', a direct filename citation into the 57-file corpus since the app does not already cite it.');
    lines.push('Trace (citation, resolution-only): literature/' + best.filename + ' (filename match score ' +
      best.score + ', full-text confirmed at ' + (best.frac * 100).toFixed(0) + '% of remaining topic tokens).');
  }
  lines.push('LIMIT: this trace proves the file resolves and that its body contains the matched topic words. ' +
    'It does not prove the file supports the sentence beside it; only a person\'s sampling read closes that gap.');
  return lines.join('\n');
}

function renderAppFactSentence(fact) {
  if (fact.kind === 'app-scalar') {
    const lines = [];
    lines.push('At ' + fact.scenario + ', phase ' + fact.phase + ', ' +
      (fact.label && fact.label !== fact.output ? fact.label + ': ' : '') +
      'the model returns ' + fact.output + ' = ' + fmtNum(fact.value) + '.');
    lines.push('Trace (scalar, recompute-verified): ' + fact.slug + ' = ' + fmtNum(fact.value) +
      (fact.verified ? ', recomputed fresh from the app and found equal.' : ', RECOMPUTE MISMATCH -- see verify output.'));
    return lines.join('\n');
  }
  if (fact.kind === 'app-note') {
    const traceTokens = fact.claims.map(c => '[[' + c + ']]').join(' ');
    return fact.text + (traceTokens ? ' ' + traceTokens : '') +
      '\nTrace (resolution-only, app-stored prose): ' + (fact.tracesResolve ? 'all claim slugs resolve against KNOB_DATA.SLUGS.' :
        'UNRESOLVED: ' + fact.unresolvedClaims.join(', '));
  }
  if (fact.kind === 'app-scalar-failed') {
    return 'The app could not resolve ' + fact.label + ': ' + fact.reason;
  }
  return JSON.stringify(fact);
}

function renderRefusal(sub) {
  if (sub.kind === 'refuse-strong') {
    const names = sub.exclusions.map(e => e.key);
    const lines = ['REFUSED. The app\'s own EXCLUSIONS register names this boundary directly:'];
    for (const e of sub.exclusions) {
      lines.push('  [' + e.key + '] ' + e.entry.does + ' ' + e.entry.reason);
    }
    lines.push('This is the strongest form of refusal available: the app has already declared the boundary, ' +
      'rather than the router merely failing to find something today.');
    return lines.join('\n');
  }
  const searched = sub.search ? sub.search.candidates.length : 0;
  return 'REFUSED. No address resolved against the app (no scenario/phase/output/knob combination in this ' +
    'sub-claim\'s own text builds a call PRESETS, ENVELOPE, DETENTS or model() carries), and no confirmed match ' +
    'was found across the corpus searched (the 57 literature summaries current at run time' +
    (searched ? '; ' + searched + ' filename candidate(s) scored above zero but none reached the confirmation bar' : '') +
    '). This is a weaker claim than an EXCLUSIONS hit, since it asserts today\'s search result rather than a ' +
    'structural boundary the app has declared.';
}

/* ================================================================== FIGURE rendering */

function renderFigureForSubClaim(api, appPath, sub, outDir, tag) {
  const app = sub.app;
  const opts = { form: 'knob-sweep', scenario: app.resolved.resolvedAddress.scenario,
    phase: app.resolved.resolvedAddress.phase, knob: app.knob, output: app.resolved.resolvedAddress.output };
  const outBase = outDir ? path.join(outDir, tag) : null;
  const built = renderFigure(api, opts);
  if (outBase) {
    fs.mkdirSync(path.dirname(outBase), { recursive: true });
    fs.writeFileSync(outBase + '.svg', built.svg, 'utf8');
    fs.writeFileSync(outBase + '.manifest.json', JSON.stringify(built.manifest, null, 2), 'utf8');
  }
  const verify = verifyManifest(built.manifest, api);
  return { built, verify, outBase };
}

/* ================================================================== the full run */

function answerQuestion(questionText, opts) {
  opts = opts || {};
  const appPath = opts.appPath || DEFAULT_APP;
  const litDir = opts.litDir || DEFAULT_LIT;
  const api = loadModelAPI(appPath);

  const pieces = decomposeSubClaims(questionText);
  const subClaims = pieces.map(p => classifySubClaim(api, litDir, p));

  const kinds = new Set();
  for (const s of subClaims) {
    if (s.kind === 'app' || s.kind === 'app-figure') kinds.add('APP');
    else if (s.kind === 'literature') kinds.add('LITERATURE');
    else if (s.kind === 'app-unbuildable') kinds.add('APP_UNBUILDABLE');
    else kinds.add('REFUSE');
  }
  let verdict;
  if (kinds.size === 1) verdict = [...kinds][0];
  else if (kinds.has('APP') && kinds.has('LITERATURE') && !kinds.has('APP_UNBUILDABLE')) verdict = 'BOTH';
  else if (kinds.has('APP_UNBUILDABLE') && !kinds.has('LITERATURE')) verdict = 'APP_UNBUILDABLE';
  else verdict = [...kinds].join('+');

  const hasFigure = subClaims.some(s => s.kind === 'app-figure');
  const allRefused = subClaims.every(s => s.kind === 'refuse-strong' || s.kind === 'refuse-weak');
  const anyUnbuildable = subClaims.some(s => s.kind === 'app-unbuildable');

  let outcome;
  if (allRefused) outcome = 'REFUSED';
  else if (anyUnbuildable && subClaims.every(s => s.kind === 'app-unbuildable')) outcome = 'REFUSED';
  else outcome = 'ANSWERED';

  return { questionText, subClaims, verdict: hasFigure ? 'FIGURE' : verdict, outcome, api, appPath, litDir };
}

function formatAnswer(result, opts) {
  opts = opts || {};
  const lines = [];
  lines.push('QUESTION');
  lines.push('  ' + result.questionText);
  lines.push('');
  lines.push('SUB-CLAIMS  (' + result.subClaims.length + ')');
  result.subClaims.forEach((s, i) => lines.push('  ' + (i + 1) + '. ' + s.text));
  lines.push('');
  lines.push('ROUTING VERDICT  ' + result.verdict);
  lines.push('RUN OUTCOME      ' + result.outcome);
  lines.push('');

  result.subClaims.forEach((sub, i) => {
    lines.push('--- sub-claim ' + (i + 1) + ' -----------------------------------------------------');
    if (sub.kind === 'app') {
      lines.push('classified APP (address resolved before any literature search was attempted)');
      for (const fact of sub.facts) { lines.push(renderAppFactSentence(fact)); lines.push(''); }
    } else if (sub.kind === 'app-figure') {
      lines.push('classified APP, FIGURE (address leaves the ' + sub.app.knob + ' dimension unbound; ' +
        sub.app.resolved.points.length + ' calls into model())');
      const figResult = renderFigureForSubClaim(result.api, result.appPath, sub, opts.outDir, opts.figureTag || ('figure-' + i));
      lines.push('Manifest form: ' + figResult.built.manifest.form + ', ' + figResult.built.manifest.points.length + ' points.');
      lines.push('Caption: ' + figResult.built.manifest.caption);
      lines.push('Verify (forward + recompute, sub-step 3\'s own verifier, called in-process): ' +
        (figResult.verify.findings === 0 ? 'PASS, 0 findings.' : 'FAIL, ' + figResult.verify.findings + ' finding(s).'));
      if (figResult.outBase) lines.push('Wrote ' + figResult.outBase + '.svg and .manifest.json');
      sub._figResult = figResult;
    } else if (sub.kind === 'app-unbuildable') {
      lines.push('classified APP in intent, but the address does not resolve under the shipped renderer grammar:');
      lines.push('  ' + sub.reason);
      lines.push('REFUSED (structural: the renderer grammar sub-step 1 shipped cannot build this address; ' +
        'this is not an EXCLUSIONS hit and not a corpus-search miss, it is a gap between what this sub-claim ' +
        'names and what address.js\'s resolveKnob() actually accepts).');
    } else if (sub.kind === 'literature') {
      lines.push('classified LITERATURE (no app address resolved for this sub-claim; search ran only after that)');
      lines.push(renderLiteratureSentence(result.api, result.litDir, sub));
    } else if (sub.kind === 'refuse-strong' || sub.kind === 'refuse-weak') {
      lines.push('classified REFUSE');
      lines.push(renderRefusal(sub));
    }
    lines.push('');
  });
  return lines.join('\n');
}

/* ================================================================== run log
 *
 * Section 3's own test: "A verifier over class five's own run log records four outcomes,
 * ANSWERED, REFUSED, FILLED, and ERROR, never collapsing REFUSED into a bare pass." This file
 * writes ANSWERED and REFUSED automatically, since those are the two outcomes this router can
 * determine for itself: it either built and verified an answer, or it determined, and can name
 * why, that nothing available answers. ERROR is reserved for a thrown, uncaught failure (the CLI
 * entry point below catches at the top level and logs ERROR rather than letting a stack trace
 * stand in for a verdict). FILLED cannot be self-reported by construction: a router cannot
 * mechanically know that it fabricated an answer it should have refused, since detecting that
 * requires exactly the independent judgment a person, not this file, provides. A FILLED row is an
 * annotation a reviewer's own independent pass adds to the log after review, never one this
 * file writes itself, and oracle/verify_answers.js says so rather than pretend otherwise.
 */
function appendRunLog(logPath, entry) {
  fs.mkdirSync(path.dirname(logPath), { recursive: true });
  fs.appendFileSync(logPath, JSON.stringify(entry) + '\n', 'utf8');
}

/* ================================================================== CLI */

function main() {
  const argv = process.argv.slice(2);
  const opts = {};
  const positional = [];
  for (const tok of argv) {
    const m = /^--([^=]+)=(.*)$/.exec(tok);
    if (m) opts[m[1]] = m[2]; else positional.push(tok);
  }
  const question = positional.join(' ');
  if (!question) {
    console.error('usage: node answer_question.js "<question text>" [--app=<path>] [--lit=<path>] [--log=<path>] [--out=<dir>]');
    process.exit(2);
  }
  const logPath = opts.log || DEFAULT_LOG;
  const timestamp = new Date().toISOString();
  try {
    const result = answerQuestion(question, { appPath: opts.app, litDir: opts.lit });
    const text = formatAnswer(result, { outDir: opts.out, figureTag: opts.figureTag });
    console.log(text);
    appendRunLog(logPath, { timestamp, question, verdict: result.verdict, outcome: result.outcome });
  } catch (e) {
    console.error('ERROR: ' + e.message);
    appendRunLog(logPath, { timestamp, question, verdict: null, outcome: 'ERROR', error: e.message });
    process.exit(1);
  }
}

if (require.main === module) main();

module.exports = {
  decomposeSubClaims, findScenario, findPhase, findOutputs, findSweepKnob,
  classifySubClaim, answerQuestion, formatAnswer, appendRunLog,
};
