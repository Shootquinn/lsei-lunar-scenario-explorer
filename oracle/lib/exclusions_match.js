/* exclusions_match.js -- match a sub-claim's own text against the app's own EXCLUSIONS register.
 *
 * Step 41 sub-step 5. The routing specification (section 3) names EXCLUSIONS as the strongest
 * form of refusal available: "the app has already declared the boundary rather than the router
 * merely failing to find something today." This file is the mechanism that decides which entry,
 * if any, a sub-claim's own wording names, built the same way oracle/lib/literature_search.js
 * matches a filename: tokenize both sides and score by overlap, with no hand-typed per-question
 * mapping from a question's wording to an exclusion key.
 *
 * A second job belongs here too, and it is the reason this is its own file rather than folded
 * into literature_search.js: an EXCLUSIONS entry is a structural claim the app itself makes
 * ("this app does not model X"), which the routing specification ranks above a generic
 * keyword-overlap literature match. A sub-claim like the REFUSE test question can score a
 * moderate, textually "confirmed" hit against an off-topic literature file purely because the
 * two share common domain vocabulary (a technical paper on cryogenic propellant transfer shares
 * "cryogenic" and "transfer" with a question about a cryogenic transfer delay, without the paper
 * ever pricing a schedule slip). Where an EXCLUSIONS entry names the same topic at least as
 * strongly as the best literature candidate does, the router prefers the EXCLUSIONS refusal,
 * because a structural boundary the app has already declared is stronger evidence than an
 * unanchored word-overlap match, per the specification's own ranking of the two.
 */
'use strict';
const { tokenize } = require('./literature_search.js');

/* Score one EXCLUSIONS entry against the sub-claim's own tokens, using its own "does" and
   "reason" text (the app's own words for the boundary, never a hand-typed keyword list per
   entry). Plain overlap count, the same cheap measure literature_search.js's filename score
   starts from; there are only ten entries, so no further weighting is needed to keep this
   readable. */
function scoreExclusion(subClaimTokens, key, entry) {
  const entryText = (entry.does || '') + ' ' + (entry.reason || '');
  const entryTokens = new Set(tokenize(entryText));
  const qSet = new Set(subClaimTokens);
  const matched = [...qSet].filter(t => entryTokens.has(t));
  return { key, entry, overlap: matched.length, matched };
}

/* matchExclusions(EXCLUSIONS, subClaimText) -> candidates ranked by overlap, best first.
   Returns an empty array rather than throwing when nothing overlaps at all; the caller decides
   what an empty result means (the weaker, corpus-search-only refusal). */
function matchExclusions(EXCLUSIONS, subClaimText) {
  const tokens = tokenize(subClaimText);
  const candidates = Object.keys(EXCLUSIONS || {})
    .map(key => scoreExclusion(tokens, key, EXCLUSIONS[key]))
    .filter(c => c.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap);
  return candidates;
}

module.exports = { scoreExclusion, matchExclusions };
