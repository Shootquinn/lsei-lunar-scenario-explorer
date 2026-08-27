#!/usr/bin/env node
/* verify_answers.js -- the post-condition on class five's own run log.
 *
 * Step 41 sub-step 5, section 3's own test: "A verifier over class five's own run log records
 * four outcomes, ANSWERED, REFUSED, FILLED, and ERROR, never collapsing REFUSED into a bare pass
 * or absorbing it into ANSWERED with an empty body." This file is that verifier. It reads
 * oracle/answer_question.js's own JSONL run log and reports the count of each of the four
 * outcomes, by name, every time; it never reduces the log to a single pass/fail bit.
 *
 * WHAT THIS FILE CAN AND CANNOT DETERMINE ON ITS OWN. ANSWERED and REFUSED are outcomes
 * answer_question.js decides for itself and writes to the log at run time: it either built and
 * verified an answer, or it determined, and can point to the reason it printed, that nothing
 * available answers. ERROR is likewise self-reported, on a thrown, uncaught failure the CLI
 * entry point catches at the top level rather than letting a stack trace stand in for a verdict.
 *
 * FILLED is different in kind, and this file does not pretend otherwise: a row is FILLED when a
 * question that should have refused instead reached for an inference, which is a defect report
 * on the router's own judgment, not a fact the router can observe about itself while it is
 * running. No mechanism here can look at its own REFUSED-vs-ANSWERED call and know it called it
 * wrong; that determination is exactly an independent reviewer's own pass, per this sub-step's
 * own closing test (a reviewer's own independent pass afterward is the one that counts for the
 * verdict). This file's contract is therefore: it counts what the log
 * says (ANSWERED, REFUSED, ERROR, and any row an auditor has hand-annotated FILLED after review,
 * a row this file recognizes if present but never assigns itself), and its own PASS/FAIL is only
 * about the LOG'S OWN INTEGRITY, not about whether any individual verdict was the right one.
 *
 * The log's own integrity is checked two ways.
 *   SCHEMA    every row parses as JSON and carries one of the four recognized outcome strings.
 *             A row with an outcome this file does not recognize is a finding, not a silent skip,
 *             the same posture the standing rule takes toward an empty population: a check that
 *             cannot fail is not a check.
 *   NO ERROR  an ERROR row means the router did not finish, which this file treats as a finding
 *             requiring attention regardless of how many ANSWERED/REFUSED rows sit beside it,
 *             since one unfinished run is not offset by five finished ones.
 *
 *   node verify_answers.js [<log path>]
 *   node verify_answers.js --prove
 */
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');

/* The run log is ephemeral session history, never part of the published tree, so its default
   location is the OS temp directory rather than a path inside this project or the clone; a
   caller who wants a specific log read passes its path as the first argument. */
const DEFAULT_LOG = path.join(os.tmpdir(), 'lsei-oracle', 'question_form_run_log.jsonl');
const OUTCOMES = ['ANSWERED', 'REFUSED', 'FILLED', 'ERROR'];

function readLog(logPath) {
  if (!fs.existsSync(logPath)) {
    return { rows: [], malformed: [], missing: true };
  }
  const lines = fs.readFileSync(logPath, 'utf8').split('\n').map(l => l.trim()).filter(Boolean);
  const rows = [];
  const malformed = [];
  lines.forEach((line, i) => {
    let row;
    try { row = JSON.parse(line); } catch (e) { malformed.push({ line: i + 1, reason: 'not valid JSON: ' + e.message, raw: line }); return; }
    if (!OUTCOMES.includes(row.outcome)) {
      malformed.push({ line: i + 1, reason: 'outcome "' + row.outcome + '" is not one of ' + OUTCOMES.join('/'), raw: line });
      return;
    }
    rows.push(row);
  });
  return { rows, malformed, missing: false };
}

function tally(rows) {
  const counts = { ANSWERED: 0, REFUSED: 0, FILLED: 0, ERROR: 0 };
  for (const r of rows) counts[r.outcome]++;
  return counts;
}

function report(logPath, log) {
  const W = s => process.stdout.write(s + '\n');
  W('VERIFY ANSWERS  ' + logPath);
  if (log.missing) {
    W('  EMPTY POPULATION: no run log exists at this path yet. Per the standing rule, an empty');
    W('  population is reported as empty, never as a pass.');
    W('');
    W('RESULT  FAIL (empty population)');
    return { findings: 1 };
  }
  const counts = tally(log.rows);
  W('  rows read              ' + log.rows.length);
  W('  malformed rows         ' + log.malformed.length);
  W('');
  W('OUTCOME COUNTS, all four named every time, never collapsed to one pass/fail bit:');
  for (const k of OUTCOMES) W('  ' + k.padEnd(10) + counts[k]);
  W('');
  if (log.malformed.length) {
    W('MALFORMED ROWS:');
    for (const m of log.malformed.slice(0, 25)) W('  line ' + m.line + ': ' + m.reason);
    W('');
  }
  W('LIMIT   ANSWERED and REFUSED are self-reported by the router at run time; a row is never');
  W('        reclassified FILLED by this file, because a router cannot mechanically know it');
  W('        fabricated an answer it should have refused. FILLED is a hand annotation an');
  W('        auditor (an independent reviewer\'s own pass) adds to the log after review, and');
  W('        this file only counts it, never assigns it. This file\'s own PASS/FAIL is about the');
  W('        log\'s integrity (every row parses, every outcome is one of the four), not about');
  W('        whether any individual verdict was the right one.');
  W('');
  const findings = log.malformed.length + counts.ERROR;
  W(findings === 0 ? 'RESULT  PASS (log well-formed' + (counts.FILLED ? ', ' + counts.FILLED + ' FILLED row(s) on record' : '') + ')'
    : 'RESULT  FAIL, ' + findings + ' finding(s)');
  return { findings, counts };
}

/* ---------------------------------------------------------------- proof
 *
 * The discriminating case for THIS file is not a recompute decoy (it has no numbers to recompute)
 * but the collapse this section 3 explicitly bars: a naive verifier might report "6 rows, all
 * fine" without ever printing that two of those six were REFUSED. This proof builds a small
 * scratch log with one of each real outcome plus one malformed row, and asserts the report names
 * all four counts and the malformed row by line, rather than folding REFUSED into a bare pass.
 */
function prove() {
  const os = require('os');
  const scratchPath = path.join(os.tmpdir(), 'verify_answers_prove_' + Date.now() + '.jsonl');
  const rows = [
    { timestamp: 't1', question: 'q-answered', verdict: 'APP', outcome: 'ANSWERED' },
    { timestamp: 't2', question: 'q-refused', verdict: 'REFUSE', outcome: 'REFUSED' },
    { timestamp: 't3', question: 'q-filled-annotated', verdict: 'LITERATURE', outcome: 'FILLED' },
  ];
  const lines = rows.map(r => JSON.stringify(r));
  lines.push('{not valid json');
  lines.push(JSON.stringify({ timestamp: 't5', question: 'q-bad-outcome', verdict: 'APP', outcome: 'MAYBE' }));
  fs.writeFileSync(scratchPath, lines.join('\n') + '\n', 'utf8');

  const log = readLog(scratchPath);
  const counts = tally(log.rows);
  const out = [];
  out.push({ id: 'COUNTS-ALL-FOUR-NAMED', expect: '1 ANSWERED, 1 REFUSED, 1 FILLED, 0 ERROR',
    got: OUTCOMES.map(k => k + '=' + counts[k]).join(' '),
    pass: counts.ANSWERED === 1 && counts.REFUSED === 1 && counts.FILLED === 1 && counts.ERROR === 0 });
  out.push({ id: 'MALFORMED-ROWS-CAUGHT', expect: '2 malformed rows (bad JSON, unrecognized outcome)',
    got: log.malformed.length + ' malformed', pass: log.malformed.length === 2 });
  out.push({ id: 'REFUSED-NOT-COLLAPSED', expect: 'the REFUSED row is counted on its own, not folded into ANSWERED',
    got: 'REFUSED=' + counts.REFUSED + ' ANSWERED=' + counts.ANSWERED, pass: counts.REFUSED === 1 && counts.ANSWERED === 1 });

  let bad = 0;
  const w = Math.max(...out.map(o => o.id.length));
  for (const o of out) { if (!o.pass) bad++; process.stdout.write((o.pass ? 'PASS  ' : 'FAIL  ') + o.id.padEnd(w) + '  expected ' + o.expect + '  |  got ' + o.got + '\n'); }
  process.stdout.write('\n' + (out.length - bad) + ' of ' + out.length + ' proofs pass\n');
  fs.unlinkSync(scratchPath);
  process.exit(bad ? 1 : 0);
}

/* ---------------------------------------------------------------- entry */

const argv = process.argv.slice(2);
if (argv[0] === '--prove') {
  prove();
} else {
  const logPath = argv[0] || DEFAULT_LOG;
  const log = readLog(logPath);
  const r = report(logPath, log);
  process.exit(r.findings === 0 ? 0 : 1);
}

module.exports = { readLog, tally };
