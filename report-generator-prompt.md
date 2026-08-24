# Report Generator

**Run this prompt when someone asks for a document off the Lunar Scenario Explorer.** It takes the
finished self-contained app plus one selection from the menu below and produces a document in this
project's register. It is written so that a session with a one-million-token context can do the whole
job from the app alone, with no other file from this project on disk.

The reason it exists is the ruling the app was rebuilt to serve. The authority is in the app. A
document is a picture of the front of the tapestry rather than a second copy of what the tapestry
says, so documents are rendered when they are wanted and never maintained. Anything that would put
authority back into a document, or leave a standing second copy of what the app already holds, is
decided against.

## What you need before you start

You need three things and the run stops if any of them is missing.

The app itself, a single self-contained HTML file whose data island publishes `KNOB_DATA`. It carries
the coefficients, the Claims and their sections, the evidence, the arguments, the counter-cases, the
references, the exclusions and the slug table. Everything the document asserts comes out of it.

A selection from the menu, which is a class plus whatever that class needs.

The writing guides at `writing-guides/`, vendored inside this repository rather than fetched. If they
are not on disk, you stop. That is a refusal and it is specified below rather than left to judgement.

## Step 1, pin the app, and this stamp is a verified match

Read the app file, derive its md5, and compare it against the digest the request carries. If the
request carries no digest, derive the digest and print it, and treat the derived value as the pin for
this run. If the request carries a digest and it disagrees with the file, stop. Do not generate
against an artifact you cannot identify.

```bash
md5sum <app.html>
node -e "const s=require('fs').readFileSync(process.argv[1],'utf8');const a=s.indexOf('/* ===== DATA-ISLAND:START'),b=s.indexOf('/* ===== DATA-ISLAND:END');const r=s.slice(a,b);const v=require('vm'),x={root:{}};v.createContext(x);v.runInContext(r.slice(r.indexOf('(function (root)')).replace(/\}\)\(typeof window[\s\S]*$/,'})(root);'),x);console.log('pin',x.root.KNOB_DATA.__pin,'slugs',Object.keys(x.root.KNOB_DATA.SLUGS).length)" <app.html>
```

The data island also publishes its own pin, an FNV-1a digest over the coefficient and claim objects.
Record it beside the md5. It moves whenever text inside those objects moves, whether or not a number
did, so it is a change detector rather than a value statement.

## Step 2, read the writing guides' vendor stamp, and this stamp is an observation rather than a check

The guides ship inside this repository, vendored rather than fetched, at the same relative paths
below.

```
writing-guides/style.md
writing-guides/structure.md
writing-guides/style-reference.md
writing-guides/reporting-copy.md
writing-guides/signs_of_ai_writing.md
```

Read the five files from disk, and read `writing-guides/SOURCE.md` for the commit sha they were
vendored at and the vendor date.

```bash
cat writing-guides/style.md
cat writing-guides/SOURCE.md
```

**A missing file is a refusal, not a fallback.** If any of the five, or `SOURCE.md` itself, is not
on disk, stop and say so. Do not write from memory of the guides, and above all do not record a sha
you did not read from `SOURCE.md`. Recording an unread sha converts a gap into a false assurance,
which is worse than the gap, because the next reader has no way to tell the two apart.

**The two stamps are not the same kind of thing and the document says which is which.** The app pin
is a verified match: read, derive, compare, refuse on disagreement. The guides stamp is a recorded
observation, a vendor-time sha copied from `SOURCE.md` rather than a live comparison against a
branch, because this repository carries no network dependency for these five files at all. Printed
side by side undifferentiated, two stamps read as two checks and one of them is not.

**The guides stamp matters more than the app pin, not less.** A drifted figure is recoverable by
recomputation, because the app still holds the right number and anyone can rerun the comparison. A
drifted register is detectable by nothing mechanical at all. Nothing in this file or anywhere else
can measure whether a document reads like this project's work. For register, the stamp is the only
evidence there will ever be, so it is the one stamp that cannot be skipped.

## Step 3, resolve names from the app's own slug table

This repository carries no working tree and no register apparatus of any kind. Identity for every
document this generator produces resolves one way, from the app itself. The data island publishes
the whole slug table with every title and every parent. Resolve every name and slug from
`KNOB_DATA.SLUGS`. Do not type a filename, a display title or a slug as a literal, and do not invent
a filename. Name the document from its subject and hand the naming decision back with the file.

## The menu

### Class one, Scenario Treatment, one scenario across three eras, and Trade Study Delta Executive Summary

This repository holds no static copy of either document. A reader asking for one is asking this
generator to build it fresh from the app, which is the generator's actual job rather than an apology
for a missing file.

| selection | what it is |
|---|---|
| Scenario Treatment, Agency Led Baseline | one scenario across three eras |
| Scenario Treatment, Early Shift to Mars | one scenario across three eras |
| Scenario Treatment, The Commercial Break | one scenario across three eras |
| Trade Study Delta Executive Summary | what changed against the prior study, and why |

Use the full canonical scenario names everywhere. Agency Led Baseline, Early Shift to Mars, The
Commercial Break. The two-character handles are retired and the app resolves them only as a courtesy
for readers holding an archived copy.

**A class-one template carries the shape and the current content, and those are two different
things.** The shape is the section order below, which is what makes the regenerated document
recognizable as the one that was retired. The current content is whatever the app holds today at the
slugs each section names. Regenerating proves nothing was lost. It does not prove nothing changed.
Where a figure has moved, the regenerated document shows the moved figure, and the change stays
visible because the archived copy and the regenerated one each carry the pin they were built from.
Two documents disagreeing with their pins printed is a legible history. Two documents disagreeing
without them is the failure this whole architecture exists to remove.

**Scenario Treatment template.** Three eras, and each era carries the same five subsections.

| section | where the content comes from |
|---|---|
| Orientation | `PRESETS` for the scenario's own rails, and `BLURB` for the era prose |
| Nomenclature | `DERIVATION.coeff`, every symbol with its label, unit and governing section |
| Era, input envelope | the `envelope-` section for that scenario and phase |
| Era, production | the `water-` section for that scenario and phase, computed against `CONFIG` |
| Era, value economics | `VALUE`, `VALUE_TRACE` and `LANDED_COST`, with `DERIVATION.honesty` for the framing |
| Era, derivation and evidence | `DERIVATION.equations` and the `LEDGER` bodies of the sections named above |
| Era, regime notes | `DERIVATION.notes`, the binding-regime entries |
| Scenario limitations | `EXCLUSIONS`, plus the counter-case field of every section the document traces |
| References | `SECTION_REFS` for the sections traced, resolved through `REFERENCES` |

The eras are the prospecting, pilot and sustained rows of that scenario's envelope and water-output
sections. Read the slug table for their names rather than assembling them from a pattern.

**Delta Executive Summary template.** Six sections, in this order.

| section | where the content comes from |
|---|---|
| The model structure delta | `DERIVATION.equations` and `DERIVATION.notes` |
| The power figure at the center | `CONFIG.fSol` and `CONFIG.fFis`, with `solar-mass-allocation` and `fission-specific-power` |
| Inputs, the scenario rails | `PRESETS` and the nine `envelope-` sections |
| Results that moved | the nine `water-` sections, computed against `CONFIG` |
| Rigor and evidence | the tier field on every section the document traces, counted rather than characterized |
| Where we agree, and what we deliberately did not change | `EXCLUSIONS` and the sections the register marks excluded |

### Class two, a client-facing answer document

The request carries a set of questions. The document answers each one from the app and cites where
the answer came from.

One question is one section. The section states the answer, gives the figure the app holds, names the
section that owns it, and stops. Where the app does not carry an answer, the section says the app
does not carry it and names the exclusion if the register records one. A question the app cannot
answer gets a stated non-answer rather than an inference, because an inference from an app that holds
no term for the thing is the exact move this project has recorded going wrong four times.

Anything that goes to a client is Quinn's to send. Produce the document, hand it over, and do not
draft a covering note.

### Class three, a claim dossier

Everything the app holds on one Claim, or on one section, in one document.

| part | where the content comes from |
|---|---|
| Title and identity | the slug, its title, its parent, its state |
| Statement | `LEDGER[slug].statement` |
| Evidence | `LEDGER[slug].evidence`, every item with its full citation |
| Argument | `LEDGER[slug].argument`, every item with its id, head and role |
| Counter-case | the `counterCase` field, joined through `COUNTER_JOIN` |
| What stays open | the argument items whose role is not support, and the extras block where one exists |
| Coefficients governed | every `DERIVATION.coeff` row whose claim pointer is this slug |
| Links out | every bracketed slug inside this node's own text |
| Links in | every node whose text points at this slug |
| References | `SECTION_REFS[slug]` resolved through `REFERENCES` |
| Exclusion | where the state is excluded, the `EXCLUSIONS` entry, both what it does not do and why |

A dossier on a Claim carries every section under it, in the order the slug table gives.

### Class four, the combined Scenarios digest

One executive note on the phi_c term, then all three scenarios side by side, four subsections each.
This is the shape of the document Step 38 retired, `Scenarios.md`. It is not a shorter version of a
class-one run and it is not three class-one runs stapled under one cover. Class one's per-scenario,
per-era template does not change; class four exists beside it as a different document for a different
reader, one built for someone who wants three scenarios compared at a glance rather than the complete
derivation chain for one.

Use the full canonical scenario names everywhere, exactly as class one requires. The document opens
on the executive note, then gives each scenario its four subsections in this order.

| section | where the content comes from |
|---|---|
| Executive note on the phi_c term | `DERIVATION.coeff` rows governing the construction split, `CONFIG.phiC0`, and the ledger section that states the water-equals-cap identity at water-primary posture |
| Scenario, Baseline Conditions | `PRESETS` for the scenario's own rails, `BLURB` for the narrative framing, and the counter-case field where a baseline claim carries one |
| Scenario, Quantitative Parameters | the three eras' `envelope-` sections for power, mass and fission posture, and the three eras' `water-` sections computed against `CONFIG`, collapsed into one three-column table per scenario rather than three per-era tables |
| Scenario, The Operational Picture | `DERIVATION.notes` binding-regime entries and the `LEDGER` bodies of the envelope and water sections traced, in narrative rather than tabular form |
| Scenario, Scenario Design Signals | not app-derived. This subsection is strategic framing for Canada's position, the one place in the document that is analysis rather than a report of what the app holds, and it carries no trace requirement for exactly that reason |
| References | `SECTION_REFS` for every section traced in that scenario, resolved through `REFERENCES` |

## What this file does not give you

**It does not hand you an archived document as an exemplar.** That was scoped and then withdrawn the
same hour, and the reason is worth keeping. An exemplar sitting beside a template is a facts-shaped
object, and an agent will lift facts from it. A lifted fact carries no trace, or worse, it carries a
plausible one. The template carries shape, the writing guides carry register, and the app carries
every fact. Nothing else is a source.

## Step 4, write it

House style is the guides you read in step 2, and three rules are worth restating because they are
the ones this project catches most often.

No em dashes. No en dashes used as punctuation. No clause-joining double hyphens.

Topic sentences rather than bold-label fragments. A paragraph opens with a sentence that says what the
paragraph argues, and a bolded phrase standing in for that sentence is the AI-ism this project has
banned by name.

Titles are laconic. A title is a plain name for the thing. Epistemic theater in a title is a rename
waiting to happen.

**The trace convention is part of the check, so it is a rule rather than a style.** Every
claim-bearing sentence carries a trace, written `[[slug]]`, and the trace sits immediately before the
sentence's terminal punctuation.

```
The app carries fission specific mass at 0.16693 t/kWe [[fission-specific-power]].
```

A trace placed after the full stop attaches to the next sentence, which is a silent misattribution,
so the placement is checked rather than trusted.

## Step 5, run the post-condition, and it is not a request

An instruction telling a model to flag what it cannot source is a behavioural request, and this
project's record says a behavioural request is not a control. So the control is a check that runs
after generation, over the bytes that were produced.

Write out the verifier at the end of this file, then run it.

```bash
node verify_report.js <document.md> <app.html>
node verify_report.js <document.md> <app.html> --scope <slug,slug,...>
node verify_report.js --prove <document.md> <app.html>
```

**It runs in both directions.** The forward half asserts that every trace resolves to a slug the app
carries. The backward half asserts that every claim-bearing unit carries at least one trace. The
backward half is the one that matters, because a fabricated sentence does not arrive with a broken
reference. It arrives with no reference at all, and a forward-only check passes it.

**The claim-bearing population is a checkable superset.** A unit is claim-bearing if it holds a
numeral, a unit token, a coefficient name or a named source, and the last three lists are read out of
the app rather than typed into the verifier. Framing prose carries none of the four and is exempt by
carrying none of them, which is a property of the sentence rather than a judgement about it. The
superset over-selects deliberately. A sentence wrongly called claim-bearing costs one trace. A
sentence wrongly excused costs the whole control.

**Run `--prove` before you believe a green result on a document you have not verified before.** It
takes the document that just passed, breaks it a set number of ways, asserts the check fires on each,
and prints its own total at the end rather than having one restated here. The
decoys are the real document's own bytes with one mutation applied rather than constructed strings,
and a mutation that fails to apply is reported as a failure rather than skipped, because a decoy
built as a constructed string can return a false green when the real document's shape differs from
the constructed one. That has happened on this project.

## Step 6, stamp it

The document ends with a provenance block. Both stamps appear and each says what kind of stamp it is.

```
Generated from the Lunar Scenario Explorer.
App md5           <digest>            verified match, derived and compared
Data island pin   <pin>               recorded observation, read from the artifact
Writing guides    vendored at <sha> on <date>   recorded observation, vendored at generation
Verifier          forward <n>/<n>, backward <n>/<n>, run after generation
Generated         <date>
```

## What a green result does not mean

The verifier checks that a trace RESOLVES. It does not check that the target SUPPORTS the claim. A
lifted fact carrying a plausible trace to a slug that does not support it passes every mechanical
check in this file, and nothing in here will ever reach it. Only a sampling read by a person, or a
fact-checking pass against the app, does.

So a green result means every claim-bearing sentence is pointed at something real. It does not mean
every claim-bearing sentence is true. A later session reading a passing document should know exactly
that much and no more, which is why it is written here in the generator's own voice rather than left
to be worked out from the code.

The honest reading of the whole instrument is narrower still. Two of the three properties it enforces
are mechanical and will hold. The third, register, rests on a vendored copy read at generation time
and a human eye, and if that step is skipped nothing downstream will notice.

## The verifier

Write this out as `verify_report.js` and run it. It is the same file the proofs in step 5 were run
against.

```javascript
/* verify_report.js  --  the post-condition on a generated document.
 *
 * This is not an instruction to a model. It is a check run after generation, over the bytes that
 * were produced, and it either passes or it names the lines that failed. This project's record
 * says a behavioural request is not a control, so nothing in here asks a writer to be careful.
 *
 *   node verify_report.js <document.md> <app.html> [--scope slug,slug,...]
 *   node verify_report.js --prove <document.md> <app.html>
 *
 * IT RUNS IN BOTH DIRECTIONS, and that is the whole point of it.
 *   FORWARD   every trace in the document resolves to a slug the app carries.
 *   BACKWARD  every claim-bearing unit in the document carries at least one trace.
 * A fabricated sentence does not arrive with a broken reference. It arrives with no reference at
 * all, so the forward half alone passes it and the backward half is the half that catches it.
 *
 * THE CLAIM-BEARING POPULATION IS A CHECKABLE SUPERSET. A unit is claim-bearing if it contains a
 * numeral, a unit token, a coefficient name, or a named source, and the last three lists are read
 * out of the app rather than typed here. Framing prose carries none of the four and is exempt by
 * carrying none of them, which is a property of the sentence rather than a judgement about it.
 * The superset over-selects on purpose: a sentence wrongly called claim-bearing costs one trace,
 * and a sentence wrongly excused costs the whole control.
 *
 * THE TRACE CONVENTION IS PART OF THE CHECK. A trace is written [[slug]] and it sits immediately
 * before the sentence's terminal punctuation, so that splitting on the punctuation keeps every
 * trace with the sentence it belongs to. A trace placed after the full stop attaches to the NEXT
 * sentence, which is a silent misattribution, so the placement is a rule rather than a style.
 *
 * WHAT IT DOES NOT DO, written here rather than left to be discovered. It checks that a trace
 * RESOLVES. It does not check that the section at the other end SUPPORTS the sentence. A lifted
 * fact carrying a plausible trace to a slug that does not support it passes every check in this
 * file. Only a sampling read by a person, or a fact-checking pass against the app, reaches that.
 * A green result means every claim-bearing sentence is pointed at something real. It does not
 * mean every claim-bearing sentence is true.
 */
'use strict';
const fs = require('fs');
const vm = require('vm');

/* ---------------------------------------------------------------- the app is the authority */

function loadApp(appPath) {
  const src = fs.readFileSync(appPath, 'utf8');
  const a = src.indexOf('/* ===== DATA-ISLAND:START'), b = src.indexOf('/* ===== DATA-ISLAND:END');
  if (a < 0 || b < 0 || b <= a) { console.error('REFUSED: the app carries no data island sentinels, so nothing here can be resolved'); process.exit(2); }
  const region = src.slice(a, b);
  const sandbox = { root: {} };
  vm.createContext(sandbox);
  vm.runInContext(region.slice(region.indexOf('(function (root)')).replace(/\}\)\(typeof window[\s\S]*$/, '})(root);'), sandbox, { timeout: 30000 });
  const K = sandbox.root.KNOB_DATA;
  if (!K || !K.SLUGS || Object.keys(K.SLUGS).length === 0) { console.error('REFUSED: EMPTY POPULATION, the app published no slugs'); process.exit(2); }
  const SLUGS = new Set(Object.keys(K.SLUGS));
  const COEFFS = new Set([].concat(Object.keys(K.CONFIG), Object.keys(K.VALUE), Object.keys(K.DERIVATION.coeff), Object.keys(K.DERIVATION.equations)).filter(x => x.length >= 2));
  const UNITS = new Set();
  for (const src2 of [K.CONFIG, K.VALUE])
    for (const k of Object.keys(src2))
      for (const tok of String(src2[k].unit || '').split(/[^A-Za-z%$°·⁻¹²³]+/))
        if (tok.length >= 1 && /[A-Za-z%$]/.test(tok)) UNITS.add(tok);
  for (const u of ['t', 'kg', 'kW', 'kWe', 'kWh', 'MWh', 'yr', 'wt', 'USD', 'km', 'm', 'W', 'h', 'percent']) UNITS.add(u);
  const SOURCES = new Set();
  for (const id of Object.keys(K.REFERENCES))
    for (const n of String(K.REFERENCES[id].authors || '').split(/[^A-Za-z\-]+/)) if (n.length >= 4) SOURCES.add(n);
  return { K, SLUGS, COEFFS, UNITS, SOURCES };
}

/* ---------------------------------------------------------------- the check */

const TRACE = /\[\[([a-z0-9-]+)\]\]/g;
const SPLIT = /(?<=[.!?])\s+(?=[A-Z(\[])/;

function unitsOf(text) {
  const lines = text.split(/\r?\n/), units = [];
  let fence = false;
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (/^```/.test(t)) { fence = !fence; continue; }
    if (fence || t === '') continue;
    if (/^#{1,6}\s/.test(t)) continue;
    if (t.indexOf('|') >= 0 && /^\|?[\s:|-]+\|[\s:|-]*$/.test(t)) continue;
    if (/^\|/.test(t)) { units.push({ line: i + 1, kind: 'row', text: t }); continue; }
    for (const p of t.split(SPLIT)) if (p.trim()) units.push({ line: i + 1, kind: 'sentence', text: p.trim() });
  }
  return units;
}

function check(docText, app, scope) {
  const units = unitsOf(docText);
  const forward = [], backward = [], outside = [];
  let claimBearing = 0, framing = 0, traced = 0, traceCount = 0;
  const seen = new Set();
  for (const u of units) {
    const tr = []; TRACE.lastIndex = 0;
    let m; while ((m = TRACE.exec(u.text))) tr.push(m[1]);
    traceCount += tr.length;
    for (const t of tr) {
      seen.add(t);
      if (!app.SLUGS.has(t)) forward.push({ line: u.line, slug: t, text: u.text.slice(0, 100) });
      else if (scope && scope.indexOf(t) < 0) outside.push({ line: u.line, slug: t });
    }
    const bare = u.text.replace(TRACE, ' ');
    const words = bare.split(/[^A-Za-z0-9_%$]+/);
    const why = [];
    if (/\d/.test(bare)) why.push('numeral');
    for (const w of words) if (app.COEFFS.has(w)) { why.push('coefficient ' + w); break; }
    for (const w of words) if (app.SOURCES.has(w)) { why.push('source ' + w); break; }
    for (const w of words) if (app.UNITS.has(w)) { why.push('unit ' + w); break; }
    if (why.length === 0) { framing++; continue; }
    claimBearing++;
    if (tr.length === 0) backward.push({ line: u.line, why: why.join(', '), text: u.text.slice(0, 110) });
    else traced++;
  }
  const unused = scope ? scope.filter(s => !seen.has(s)) : [];
  const empty = claimBearing === 0;
  const findings = forward.length + backward.length + outside.length + unused.length + (empty ? 1 : 0);
  return { units, forward, backward, outside, unused, empty, claimBearing, framing, traced, traceCount, seen, findings };
}

/* ---------------------------------------------------------------- report */

function report(docPath, appPath, r, scope) {
  const W = s => process.stdout.write(s + '\n');
  W('VERIFY  ' + docPath);
  W('  app                    ' + appPath);
  W('  checkable units        ' + r.units.length);
  W('  claim-bearing units    ' + r.claimBearing + '   a numeral, a unit token, a coefficient name or a named source');
  W('  framing units          ' + r.framing + '   none of the four markers, so exempt by property rather than by judgement');
  W('  traces present         ' + r.traceCount + ' across ' + r.seen.size + ' distinct targets');
  W('  traced claim-bearing   ' + r.traced + ' of ' + r.claimBearing);
  W('');
  W('FORWARD   every trace resolves to a slug the app carries');
  if (r.forward.length === 0) W('  PASS  0 unresolved traces');
  else { W('  FAIL  ' + r.forward.length + ' unresolved'); for (const f of r.forward.slice(0, 25)) W('    line ' + f.line + '  [[' + f.slug + ']]  ' + f.text); }
  W('');
  W('BACKWARD  every claim-bearing unit carries at least one trace');
  if (r.empty) W('  FAIL  EMPTY POPULATION, nothing in this document is claim-bearing, which is not a result this check reports as clean');
  else if (r.backward.length === 0) W('  PASS  0 untraced claim-bearing units');
  else { W('  FAIL  ' + r.backward.length + ' untraced'); for (const f of r.backward.slice(0, 25)) W('    line ' + f.line + '  [' + f.why + ']  ' + f.text); }
  if (scope) {
    W('');
    W('SCOPE     every trace falls inside the declared scope, and every declared slug is used');
    if (r.outside.length === 0 && r.unused.length === 0) W('  PASS  ' + scope.length + ' slugs declared, all used, nothing outside');
    else {
      if (r.outside.length) { W('  FAIL  ' + r.outside.length + ' trace(s) outside the declared scope'); for (const f of r.outside.slice(0, 15)) W('    line ' + f.line + '  [[' + f.slug + ']]'); }
      if (r.unused.length) W('  FAIL  ' + r.unused.length + ' declared slug(s) nothing traces: ' + r.unused.join(', '));
    }
  }
  W('');
  W('LIMIT     this checks that a trace RESOLVES. It does not check that the target SUPPORTS the');
  W('          sentence. A lifted fact with a plausible trace passes everything above. Only a');
  W('          sampling read or a fact-checking pass against the app reaches that.');
  W('');
  W(r.findings === 0 ? 'RESULT  PASS' : 'RESULT  FAIL, ' + r.findings + ' finding(s)');
}

/* ---------------------------------------------------------------- proofs */

/* THE DECOYS ARE THE REAL DOCUMENT IN A BROKEN STATE. Each is the passing document's own bytes
   with one mutation applied, and a mutation that does not apply is itself a FAIL. A decoy built
   as a constructed string can return a false green when the real document's shape differs from
   the constructed one, which has happened on this project. */
function prove(docPath, appPath) {
  const app = loadApp(appPath);
  const good = fs.readFileSync(docPath, 'utf8');
  const base = check(good, app, null);
  const out = [];
  out.push({ id: 'CONTROL', expect: 'the unmodified document passes', got: base.findings === 0 ? 'passes' : base.findings + ' finding(s)', pass: base.findings === 0 });

  /* The decoy has to strike a CLAIM-BEARING unit. Stripping a trace off a framing sentence is a
     correct non-event, and a decoy that lands there proves the check works on nothing. So the
     target is chosen by re-running the classifier rather than by taking the first trace found. */
  let target = null;
  for (const u of base.units) {
    const bare = u.text.replace(TRACE, ' ');
    const words = bare.split(/[^A-Za-z0-9_%$]+/);
    const bearing = /\d/.test(bare) || words.some(w => app.COEFFS.has(w) || app.SOURCES.has(w) || app.UNITS.has(w));
    const t = /\[\[([a-z0-9-]+)\]\]/.exec(u.text);
    if (bearing && t && good.indexOf(u.text) >= 0) { target = { unit: u, trace: t[0], slug: t[1] }; break; }
  }
  if (!target) out.push({ id: 'DECOY-TRACE-REMOVED', expect: 'a mutation applies', got: 'MUTATION DID NOT APPLY, no claim-bearing unit carries a locatable trace', pass: false });
  else {
    const at = good.indexOf(target.unit.text);
    const stripped = good.slice(0, at) + target.unit.text.replace(target.trace, '') + good.slice(at + target.unit.text.length);
    const r1 = check(stripped, app, null);
    out.push({ id: 'DECOY-TRACE-REMOVED', expect: 'BACKWARD fires when one claim-bearing sentence loses its trace, which is the shape a fabricated sentence takes',
      got: r1.backward.length > base.backward.length ? 'caught, ' + (r1.backward.length - base.backward.length) + ' new finding' : 'NOT CAUGHT', pass: r1.backward.length > base.backward.length });
    const broken = good.slice(0, at) + target.unit.text.replace(target.trace, '[[' + target.slug + 'x]]') + good.slice(at + target.unit.text.length);
    const r2 = check(broken, app, null);
    out.push({ id: 'DECOY-TRACE-DANGLING', expect: 'FORWARD fires when one trace points at no slug',
      got: r2.forward.length > base.forward.length ? 'caught, ' + (r2.forward.length - base.forward.length) + ' unresolved' : 'NOT CAUGHT', pass: r2.forward.length > base.forward.length });
  }

  const fabricated = good + '\nThe plant delivers 4,096 t of water per year at a landed cost of 12 USD per kg.\n';
  const r3 = check(fabricated, app, null);
  out.push({ id: 'DECOY-FABRICATED-SENTENCE', expect: 'BACKWARD fires on an appended figure-bearing sentence carrying no trace',
    got: r3.backward.length > base.backward.length ? 'caught, ' + (r3.backward.length - base.backward.length) + ' new finding' : 'NOT CAUGHT', pass: r3.backward.length > base.backward.length });

  const scopeSlugs = [...base.seen];
  if (scopeSlugs.length === 0) out.push({ id: 'DECOY-OUT-OF-SCOPE', expect: 'a scope can be derived from the document', got: 'MUTATION DID NOT APPLY, no traces to scope', pass: false });
  else {
    const narrowed = scopeSlugs.slice(0, Math.max(1, scopeSlugs.length - 1));
    const r4 = check(good, app, narrowed);
    out.push({ id: 'DECOY-OUT-OF-SCOPE', expect: 'SCOPE fires when the declared scope is narrower than what the document traces',
      got: r4.outside.length ? r4.outside.length + ' outside' : (scopeSlugs.length === 1 ? 'INCONCLUSIVE, the document traces one slug only' : 'NOT CAUGHT'),
      pass: scopeSlugs.length > 1 ? r4.outside.length > 0 : false });
    const r5 = check(good, app, scopeSlugs.concat(['water-anchor-unused-probe']));
    out.push({ id: 'DECOY-SCOPE-UNUSED', expect: 'SCOPE fires when a declared slug is traced nowhere',
      got: r5.unused.length ? r5.unused.length + ' unused' : 'NOT CAUGHT', pass: r5.unused.length > 0 });
  }

  const framingOnly = '# A title\n\nThis section explains what follows and asserts nothing that could be wrong.\n';
  const r6 = check(framingOnly, app, null);
  out.push({ id: 'DECOY-EMPTY-POPULATION', expect: 'an all-framing document is reported as an empty population rather than as clean',
    got: r6.empty ? 'reported empty' : 'REPORTED CLEAN', pass: r6.empty && r6.findings > 0 });

  const w = Math.max(...out.map(o => o.id.length));
  let bad = 0;
  for (const o of out) { if (!o.pass) bad++; process.stdout.write((o.pass ? 'PASS  ' : 'FAIL  ') + o.id.padEnd(w) + '  expected ' + o.expect + '  |  got ' + o.got + '\n'); }
  process.stdout.write('\n' + (out.length - bad) + ' of ' + out.length + ' proofs pass\n');
  process.exit(bad ? 1 : 0);
}

/* ---------------------------------------------------------------- entry */

const argv = process.argv.slice(2);
if (argv[0] === '--prove') {
  if (!argv[1] || !argv[2]) { console.error('usage: node verify_report.js --prove <document.md> <app.html>'); process.exit(2); }
  prove(argv[1], argv[2]);
} else {
  const docPath = argv[0], appPath = argv[1];
  if (!docPath || !appPath) { console.error('usage: node verify_report.js <document.md> <app.html> [--scope slug,slug]'); process.exit(2); }
  const i = argv.indexOf('--scope');
  const scope = i >= 0 && argv[i + 1] ? argv[i + 1].split(',').map(s => s.trim()).filter(Boolean) : null;
  const app = loadApp(appPath);
  const r = check(fs.readFileSync(docPath, 'utf8'), app, scope);
  report(docPath, appPath, r, scope);
  process.exit(r.findings === 0 ? 0 : 1);
}
```
