/* literature_search.js -- the cheapest retrieval mechanism that could work against a corpus of
 * legibly-named summary files.
 *
 * Step 41 sub-step 5, repaired after the published literature corpus moved to a nested,
 * multi-folder layout the original flat read never accounted for. This project's own routing
 * specification names this mechanism rather than leaving it implicit: a match against the corpus's own
 * filenames, each already a legible author-year-topic label, followed by a full-text search
 * within the matched candidates to confirm the summary actually addresses the sub-claim's subject
 * before it is cited. This is not a semantic retrieval layer; nobody asked for one, and a few
 * hundred filenames a person can already read is not a corpus that needs one.
 *
 * THE DIRECTORY SHAPE IS NOT THIS FILE'S DECISION. listCorpusFiles() below walks literatureDir
 * recursively to any depth, so it works unchanged whether the corpus is flat (57 files directly
 * under literatureDir, this sub-step's original shape) or nested into topic folders (Step 42's
 * published shape, eight folders as of this repair). The taxonomy's own folder names are never
 * hard-coded here and never scored; filenameTokens() reads only a candidate's own leaf name. A
 * corpus that is reorganized again tomorrow into a different folder shape still walks correctly,
 * because this file's contract is "find every .md file under the root I am given," not "read one
 * directory level."
 *
 * Two things this file does, and only two.
 *   filename match     tokenize the question text and every corpus filename the same way, score
 *                       each file by token overlap with a bonus for a four-digit year and for the
 *                       filename's own leading author token, and rank.
 *   full-text confirm  for the top-scoring file(s), read the summary's own text and require that
 *                       a meaningful share of the question's own topic tokens (the ones that were
 *                       not already spent matching the filename) actually appear in the body,
 *                       case-insensitively. A filename match with no textual confirmation is not
 *                       returned as a match at all, which is what keeps a plausible-looking
 *                       filename from being cited for a question its body never addresses.
 *
 * What this does not do: it does not read the app, it does not decide a verdict, and it does not
 * know what SECTION_REFS or REFERENCES are. Resolving a matched file against an existing app
 * citation is citationForFile() below, kept separate because it is a different question (does the
 * app already cite this file) from the one this search answers (does this file address the
 * question at all).
 */
'use strict';
const fs = require('fs');
const path = require('path');

const STOPWORDS = new Set([
  'the','a','an','and','or','but','of','in','on','at','to','for','with','by','from','as','is',
  'are','was','were','be','been','being','it','its','this','that','these','those','what','which',
  'who','how','why','when','where','did','does','do','not','no','so','than','then','if','into',
  'about','across','over','under','out','up','down','per','via','vs','and/or','their','it\'s',
  'would','could','should','will','shall','can','may','might','also','only','one','two','three',
  // Project-generic words rather than topic words: nearly every EXCLUSIONS entry opens with
  // "This app does not model X", and nearly every sub-claim asked of this Oracle mentions "the
  // app" or "the model" somewhere, so neither word carries topical signal for a filename match,
  // a full-text confirmation, or an EXCLUSIONS-overlap score; each would otherwise inflate every
  // candidate's score by roughly the same amount regardless of what the sub-claim is actually
  // about.
  'app','apps','model','models','modeled','modelled','modeling','modelling','assumes','assumed',
]);

/* Tokenize into lowercase alphanumeric words, dropping stopwords and bare single characters.
   Years (four digits) and short technical tokens like "he-3" reduce to "he" and "3" separately,
   which is fine: the year-bonus below matches the four-digit token directly, and "he" plus "3"
   still contribute to plain overlap scoring. */
function tokenize(text) {
  const raw = String(text).toLowerCase().match(/[a-z0-9]+/g) || [];
  return raw.filter(t => t.length > 1 && !STOPWORDS.has(t));
}

/* listCorpusFiles walks literatureDir to any depth and returns every .md file as a path relative
 * to literatureDir, forward-slash-joined regardless of platform. It does not assume one level and
 * it does not hard-code the taxonomy's folder names: whether the corpus sits flat (57 files
 * directly under literatureDir, the Step 41 shape) or nested into topic folders (the Step 42
 * shape, eight folders today, however many tomorrow), the same walk finds every file either way.
 * The taxonomy is a published-side decision that can change again; this file's only job is to
 * find every .md file under the root it is given, at whatever depth it lives. */
function listCorpusFiles(literatureDir) {
  const out = [];
  (function walk(dir, relPrefix) {
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch (e) {
      return; /* a missing or unreadable directory yields zero files here; the caller decides
                 whether zero files is itself an error (see requireNonEmptyCorpus below) */
    }
    for (const e of entries) {
      const rel = relPrefix ? relPrefix + '/' + e.name : e.name;
      if (e.isDirectory()) walk(path.join(dir, e.name), rel);
      else if (e.isFile() && e.name.endsWith('.md')) out.push(rel);
    }
  })(literatureDir, '');
  return out.sort();
}

/* The retrieval path must be able to say it saw no corpus at all, distinctly from a search that
 * saw a real, non-empty corpus and confirmed no match in it. A search against zero files is
 * indistinguishable, by return value alone, from a search that legitimately found nothing
 * relevant; that ambiguity is exactly what let a missing corpus resolve to a confident REFUSE
 * instead of a loud failure. This throws rather than returning an empty result, the same standing
 * rule names.js already states for a register that parses to zero rows: an empty population is
 * reported as such and never quietly accepted as a clean, if unhelpful, answer. */
function requireNonEmptyCorpus(literatureDir, files) {
  if (files.length === 0) {
    throw new Error('EMPTY POPULATION: literature_search.js found zero .md files under ' +
      literatureDir + ' (searched recursively). A search against an empty corpus is ' +
      'indistinguishable from a search that found nothing relevant to the question; this throws ' +
      'rather than returning zero candidates so the router cannot silently classify a missing or ' +
      'mispointed corpus as a confident REFUSE.');
  }
}

/* filenameTokens tokenizes a candidate's own leaf name only, not any folder segment the recursive
 * walk prepended. The taxonomy's folder names (a published-side grouping decision) are not part
 * of the author-year-topic filename convention this scoring is built against, so they are not
 * scored; only baseName(filename) below ever reaches tokenize(). */
function baseName(filename) {
  const i = filename.lastIndexOf('/');
  return i === -1 ? filename : filename.slice(i + 1);
}

function filenameTokens(filename) {
  return tokenize(baseName(filename).replace(/\.md$/, '').replace(/-/g, ' '));
}

/* Score one candidate filename against the question's own tokens. A shared four-digit year and a
   shared leading author token (the filename's first hyphen-segment, e.g. "wittenberg" or
   "colaprete") each carry a bonus, because those two are the strongest signal a legible
   author-year-topic filename offers; plain topic-word overlap carries the rest.
 *
 * Overlap is IDF-weighted, not a raw count, and this was found necessary rather than added for
 * symmetry: run against the shipped 156-file corpus rather than the original 57, a question
 * naming "LCROSS" and "regolith" scored a file sharing only the rare, highly specific "lcross"
 * token BELOW a different, off-topic file that happened to share two corpus-ubiquitous words,
 * "ice" and "regolith," with nothing else in common. A raw overlap count treats "lcross"
 * (appearing in a handful of files, the strongest signal a filename can offer) as worth exactly
 * the same one point as "ice" (appearing in dozens of files across a lunar-ISRU corpus, near the
 * weakest signal a filename can offer). This is the identical false-signal shape
 * corpusDocFrequency()/idf() below already exist to correct for full-text confirmation; the same
 * weighting is applied here, to the filename match itself, rather than left to the frac tiebreak
 * that only fires when two files' raw scores already happen to tie. literatureDir is required for
 * this reason: the weighting needs the corpus's own word-frequency table, not a fixed constant. */
function scoreFile(questionTokens, filename, literatureDir) {
  const fTokens = filenameTokens(filename);
  const fSet = new Set(fTokens);
  const qSet = new Set(questionTokens);
  let overlap = 0;
  const matchedTokens = [];
  for (const t of qSet) {
    if (fSet.has(t)) {
      overlap += literatureDir ? idf(literatureDir, t) : 1;
      matchedTokens.push(t);
    }
  }

  const leadAuthor = baseName(filename).split('-')[0];
  const yearMatch = /-(\d{4})-/.exec(baseName(filename));
  let bonus = 0;
  if (leadAuthor && qSet.has(leadAuthor)) bonus += 3;
  if (yearMatch && qSet.has(yearMatch[1])) bonus += 3;

  return { filename, overlap, bonus, score: overlap + bonus, matchedTokens };
}

/* A corpus-wide document-frequency table over the 57 files' own BODY text (not their filenames),
   built once per literatureDir and cached. A word every summary in a lunar-ISRU corpus happens to
   use, "cost", "build", "back", carries almost no discriminating power and would otherwise inflate
   a full-text match on any file at all; a word few summaries use is real signal. This is still the
   cheapest mechanism that could work, a document-frequency count over 57 short files computed once,
   not a semantic layer nobody asked for. */
const _dfCache = new Map();
function corpusDocFrequency(literatureDir) {
  if (_dfCache.has(literatureDir)) return _dfCache.get(literatureDir);
  const files = listCorpusFiles(literatureDir);
  const df = new Map();
  for (const f of files) {
    const text = fs.readFileSync(path.join(literatureDir, f), 'utf8').toLowerCase();
    const seen = new Set((text.match(/[a-z0-9]+/g) || []).filter(t => t.length > 1));
    for (const t of seen) df.set(t, (df.get(t) || 0) + 1);
  }
  const result = { df, n: files.length };
  _dfCache.set(literatureDir, result);
  return result;
}

/* idf(token) = ln((N+1)/(df+1)) + small floor, so a token in every file scores near zero and a
   token in one or two files scores highest; a token this corpus never uses at all (df=0) gets the
   corpus's own maximum weight, since a hit on a genuinely rare or absent-elsewhere term is exactly
   the strongest evidence a full-text confirm can offer. */
function idf(literatureDir, token) {
  const { df, n } = corpusDocFrequency(literatureDir);
  const d = df.get(token) || 0;
  return Math.log((n + 1) / (d + 1)) + 0.1;
}

/* Full-text confirm: after the filename match, read the file and require that an IDF-weighted
   share of the question's topic tokens (excluding the ones the filename match already spent, so a
   file is not confirmed purely by restating its own author and year) actually occur in its body.
   A raw hit-count fraction was tried first and produced a false confirmation: a question whose
   remaining tokens were mostly corpus-ubiquitous words ("cost", "back", "build", "first") scored
   as strongly confirmed against an off-topic file simply because those words appear in nearly
   every summary in this corpus. Weighting by document frequency removed the false positive without
   any change tuned to a particular question or file. */
function confirmInText(literatureDir, candidate, questionTokens) {
  const filePath = path.join(literatureDir, candidate.filename);
  const text = fs.readFileSync(filePath, 'utf8').toLowerCase();
  const spent = new Set(candidate.matchedTokens);
  const remaining = [...new Set(questionTokens)].filter(t => !spent.has(t) && t.length > 2);
  if (remaining.length === 0) {
    // Nothing left to confirm beyond the filename itself (e.g. a bare "author year" query);
    // require at least the filename match to be non-trivial (overlap or both bonuses).
    return { confirmed: candidate.score >= 3, hits: [], checked: [], frac: candidate.score >= 3 ? 1 : 0 };
  }
  const hits = remaining.filter(t => text.includes(t));
  const weightTotal = remaining.reduce((s, t) => s + idf(literatureDir, t), 0);
  const weightHit = hits.reduce((s, t) => s + idf(literatureDir, t), 0);
  const frac = weightTotal > 0 ? weightHit / weightTotal : 0;
  return { confirmed: frac >= 0.45 && hits.length >= 1, hits, checked: remaining, frac };
}

/* searchLiterature(literatureDir, queryText, opts) -> { candidates, best }
   candidates is every scored file with score > 0, ranked descending, each carrying its own
   confirmed flag. best is the top candidate if, and only if, it is confirmed; a filename match
   that fails full-text confirmation is never returned as best, because a plausible filename with
   nothing in the body to back it is exactly the shape of citation this mechanism exists to
   refuse. */
function searchLiterature(literatureDir, queryText, opts) {
  opts = opts || {};
  const limit = opts.limit || 5;
  const questionTokens = tokenize(queryText);
  const files = listCorpusFiles(literatureDir);
  requireNonEmptyCorpus(literatureDir, files);
  const scored = files
    .map(f => scoreFile(questionTokens, f, literatureDir))
    .filter(c => c.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, Math.max(limit, 10));

  const candidates = scored.map(c => {
    const confirm = confirmInText(literatureDir, c, questionTokens);
    return Object.assign({}, c, confirm);
  // A filename-score tie (a generic shared word like "ice" against a distinctive shared word
  // like "lcross") is broken by which file's own body actually confirms more of the question's
  // remaining topic tokens, since that is exactly the signal full-text confirmation exists to
  // add: a shared filename token proves nothing about which candidate the question is really
  // about, and the body text is the tiebreaker rather than an afterthought gate.
  }).sort((a, b) => (b.score - a.score) || ((b.frac || 0) - (a.frac || 0)))
    .slice(0, limit);

  const best = candidates.find(c => c.confirmed) || null;
  return { candidates, best, questionTokens };
}

/* Given a matched filename, find the REFERENCES key it corresponds to (a literature filename is
   always "<referencesKey>-<topic-words>.md" by this corpus's own naming convention) and, if the
   app's SECTION_REFS register already cites that key from one or more sections, return those
   section slugs too. Returns null if the app carries no REFERENCES entry for this file at all,
   which is the "direct filename citation into the 57-file corpus" branch the routing spec names
   for a file the app does not already cite. */
function citationForFile(api, filename) {
  const base = baseName(filename).replace(/\.md$/, '');
  const refKeys = Object.keys(api.REFERENCES || {});
  const key = refKeys.find(k => base === k || base.startsWith(k + '-'));
  if (!key) return null;
  const citingSections = Object.keys(api.SECTION_REFS || {})
    .filter(slug => (api.SECTION_REFS[slug] || []).includes(key));
  return { referenceKey: key, reference: api.REFERENCES[key], citingSections };
}

/* ================================================================== the standing self-test
 *
 * The failure this proves against: a search returning zero candidates against a real, non-empty
 * corpus is indistinguishable, by return shape alone, from a search that saw no corpus at all,
 * and that ambiguity is exactly what let a moved, nested corpus ship a confident REFUSE instead
 * of a loud failure. Three things are proved here, against scratch fixtures rather than the real
 * tree, so this test does not depend on today's corpus shape or content to keep passing tomorrow.
 *
 *   1. NESTED WALK    a corpus built two folders deep is found in full by listCorpusFiles(), and
 *                      a question naming the planted file's own author/year/topic resolves to it
 *                      through searchLiterature() exactly as it would against a flat corpus.
 *   2. FLAT WALK      the same fixture content, laid out with zero subfolders, resolves the same
 *                      way, proving the walk is shape-agnostic rather than nested-only.
 *   3. EMPTY CORPUS   a real, existing, empty directory (zero .md files, not a missing path) is
 *                      searched and the call is required to throw rather than return {best: null}
 *                      or an empty candidate list. A caller that swallowed a normal return here
 *                      would reproduce the exact silent-REFUSE failure this repair exists to close.
 *
 * Run: node oracle/lib/literature_search.js --prove
 * Exit 0 and "SELF-TEST: PASS" on success; exit 1 and "SELF-TEST: FAIL" otherwise.
 */
function _mkScratch(prefix) {
  return fs.mkdtempSync(path.join(require('os').tmpdir(), prefix));
}

function _plantFixture(root, nested) {
  const name = 'wittenberg-1992-he3-resources-review.md';
  const body = 'Wittenberg 1992 reviews lunar regolith helium-3 concentration and extraction ' +
    'feasibility, estimating over one million tonnes of helium-3 across the lunar regolith.';
  const dir = nested ? path.join(root, 'isru-processing') : root;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, name), body, 'utf8');
  // A second, off-topic file in a different (or the same, if flat) folder, so the proof also
  // shows the walk is not merely returning "everything under root" as a single accidental match.
  const otherDir = nested ? path.join(root, 'space-law-and-governance') : root;
  fs.mkdirSync(otherDir, { recursive: true });
  fs.writeFileSync(path.join(otherDir, 'un-1967-outer-space-treaty.md'),
    'The Outer Space Treaty of 1967 establishes non-appropriation of celestial bodies.', 'utf8');
  return name;
}

function runProve() {
  let pass = true;
  const report = (label, ok, detail) => {
    console.log('  ' + (ok ? 'PASS' : 'FAIL') + '  ' + label + (detail ? '  (' + detail + ')' : ''));
    if (!ok) pass = false;
  };

  // 1. NESTED WALK
  const nestedRoot = _mkScratch('litsearch-nested-');
  const nestedName = _plantFixture(nestedRoot, true);
  try {
    const files = listCorpusFiles(nestedRoot);
    const found = files.includes('isru-processing/' + nestedName);
    report('nested walk finds planted file two folders deep', found, files.length + ' file(s) found');
    const r = searchLiterature(nestedRoot,
      "What did Wittenberg's 1992 review estimate for helium-3 concentration in lunar regolith?");
    report('nested search resolves the planted file as best, confirmed',
      !!(r.best && r.best.filename === 'isru-processing/' + nestedName && r.best.confirmed),
      r.best ? r.best.filename : 'no best candidate');
  } catch (e) {
    report('nested walk / search did not throw', false, e.message);
  } finally {
    fs.rmSync(nestedRoot, { recursive: true, force: true });
  }

  // 2. FLAT WALK (same content, zero subfolders)
  const flatRoot = _mkScratch('litsearch-flat-');
  const flatName = _plantFixture(flatRoot, false);
  try {
    const files = listCorpusFiles(flatRoot);
    report('flat walk finds planted file with no subfolder', files.includes(flatName),
      files.length + ' file(s) found');
    const r = searchLiterature(flatRoot,
      "What did Wittenberg's 1992 review estimate for helium-3 concentration in lunar regolith?");
    report('flat search resolves the same planted file as best, confirmed',
      !!(r.best && r.best.filename === flatName && r.best.confirmed),
      r.best ? r.best.filename : 'no best candidate');
  } catch (e) {
    report('flat walk / search did not throw', false, e.message);
  } finally {
    fs.rmSync(flatRoot, { recursive: true, force: true });
  }

  // 3. EMPTY CORPUS -- a real, existing, empty directory must fail loudly, not refuse politely.
  const emptyRoot = _mkScratch('litsearch-empty-');
  try {
    let threw = false, message = '';
    try {
      searchLiterature(emptyRoot, 'any question at all, the corpus itself is the point');
    } catch (e) {
      threw = true;
      message = e.message;
    }
    report('empty, real, non-missing directory throws rather than returning an empty result',
      threw && /EMPTY POPULATION/.test(message), threw ? message.slice(0, 60) + '...' : 'did not throw');
  } finally {
    fs.rmSync(emptyRoot, { recursive: true, force: true });
  }

  console.log((pass ? 'SELF-TEST: PASS' : 'SELF-TEST: FAIL'));
  return pass;
}

if (require.main === module) {
  if (process.argv.indexOf('--prove') !== -1) {
    process.exit(runProve() ? 0 : 1);
  } else {
    console.log('literature_search.js is a library. Run with --prove to self-test (nested walk, ' +
      'flat walk, empty-corpus failure).');
  }
}

module.exports = { tokenize, listCorpusFiles, baseName, requireNonEmptyCorpus, filenameTokens, scoreFile, corpusDocFrequency, idf, confirmInText, searchLiterature, citationForFile, runProve };
