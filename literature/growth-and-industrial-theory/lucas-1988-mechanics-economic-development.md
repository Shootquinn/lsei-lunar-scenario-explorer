# On the Mechanics of Economic Development

## Citation

Lucas, R. E. (1988). On the mechanics of economic development. *Journal of
Monetary Economics, 22*(1), 3-42.

DOI: 10.1016/0304-3932(88)90168-7 (confirmed in FA2 ledger)

Publisher URL: https://www.sciencedirect.com/science/article/abs/pii/0304393288901687

## Abstract

Published version of Lucas's 1985 Marshall Lectures. The paper asks whether a
neoclassical growth-and-trade framework can be extended to fit the main
features of cross-country economic development: enormous diversity in income
levels, sustained but very unequal growth rates, occasional sharp
accelerations and decelerations, and the absence of the rapid factor-price
equalization that simple trade theory predicts. Three closed-form optimal-
growth models are set out and compared, informally, to twentieth-century U.S.
aggregate data: (1) the standard Solow-Denison model driven by exogenous,
disembodied technical change; (2) a one-good model in which human capital
(schooling) replaces technical change as the engine of growth, with both an
internal (private) and an external (spillover) effect on productivity; and
(3) a two-good model in which specialized human capital accumulates through
learning-by-doing and interacts with comparative advantage and trade. The
paper is explicitly theoretical/expository rather than econometric: no
hypothesis is statistically tested, and the author repeatedly notes that
aggregate time series cannot discriminate among the competing
parameterizations.

## Summary

### Background and objective

Lucas opens with the scale of cross-country diversity: 1980 per-capita income
of $10,000 for the "industrial market economies" against $240 for India and
$270 for Haiti (a factor of ~40; Summers-Heston purchasing-power adjustments
narrow this to roughly a factor of 16). Growth rates over 1960-80 are equally
dispersed and, converted to doubling times via the rule of 69: India at
1.4%/year doubles every 50 years, Korea at 7.0%/year doubles roughly every 10.
The four East Asian "miracles" (South Korea, Taiwan, Hong Kong, Singapore)
grew at 6.5-7.5%/year over 1960-80 versus much lower rates in the 1950s, and
several countries (Indonesia, Syria) show large decade-to-decade jumps in
growth rates. Lucas frames "the problem of economic development" narrowly:
accounting for the observed cross-country and cross-time pattern in levels
and growth rates of per-capita income.

He defines "theory" strictly as an explicit dynamic system that "can be put on
a computer and run" — the "mechanics" of the title — and states the paper's
plan: review the Solow-Denison neoclassical model as applied to U.S. growth,
show that it fails as a theory of development, then build two successive
extensions that substitute human-capital accumulation for exogenous technical
change as the growth engine. Population growth is taken as exogenous
throughout (demography is set aside as "a serious omission," in the author's
words), and all monetary/financial considerations are abstracted away (a
barter-goods economy).

### Methods and scope

The paper is a theoretical/expository lecture series, not an empirical study.
Its method in each of the three models is the same: specify a Cobb-Douglas-type
technology and a representative-household CRRA utility function, form the
current-value Hamiltonian, derive first-order conditions and costate
(shadow-price) dynamics via Pontryagin's maximum principle (following Cass,
1965), and characterize the balanced-growth path — the solution on which
consumption and the capital stock(s) grow at constant, asymptotically
converged-to percentage rates. Convergence to the balanced path from arbitrary
initial capital stocks is proved for the one-capital Solow case (following
Cass) but only conjectured, not proved, for the two-capital human-capital case.

Each model is then loosely calibrated — not statistically estimated — against
a single data source: Edward Denison's 1961 monograph *The Sources of Economic
Growth in the United States*, covering 1909-57 U.S. national accounts. A small
number of long-run average parameters (population growth, output/capital
growth, labor's income share, the net savings rate, and Denison's own
estimate of the growth rate of human capital from schooling) are read off
Denison and substituted into the balanced-growth equations to back out the
remaining structural parameters (externality elasticity, schooling-technology
effectiveness, equilibrium time allocation). No regression, standard errors,
or out-of-sample test is performed anywhere in the paper. Section 5 (the
learning-by-doing/trade model) is presented purely analytically, with no
numerical calibration at all.

### Key findings

**The Solow-Denison baseline (Sections 2-3).** The review model: closed
economy, competitive markets, identical infinitely-lived households,
production `N(t)c(t) + K̇(t) = A(t)K(t)^β N(t)^(1-β)` with exogenous population
growth rate λ and exogenous technology growth rate g = Ȧ/A > 0. On the
balanced path, per-capita consumption and capital both grow at the constant
rate κ = g/(1-β) — i.e., the exogenous rate of technical change, amplified by
the inverse of labor's share. Calibrating to Denison's 1909-57 U.S. data
(λ=0.013, β≈0.25, savings rate s≈0.10, κ+λ averaging 0.027 across output and
capital growth) implies κ≈0.0105 and pins down ρ+σκ=0.0675 (ρ and σ are not
separately identified from steady-state averages alone). Section 3 then
argues this model cannot serve as a theory of development: with no factor
mobility it predicts convergence of income levels and growth rates across
countries with similar preferences/technology, which is not observed; with
factor mobility (capital or labor) it predicts rapid equalization of factor
prices, which also is not observed for twentieth-century capital flows (though
it is shown to fit nineteenth-century land-labor migration well). Variations
in the taste parameters (ρ, σ), population growth, or labor share do not
plausibly account for the scale of observed income differences. This leaves
"technology" — reinterpreted not as a disembodied common stock but as
*embodied* knowledge held by particular people — as the candidate explanatory
force, which motivates human capital as the engine of growth for the rest of
the paper.

**The human-capital growth model (Section 4) — the model of central interest
to FA2.** Workers have individual skill/human-capital level h; a worker with
skill h(t) devotes fraction u(t) of time to current production and 1-u(t) to
skill accumulation. Beyond this **internal effect** of human capital (skill
raises its owner's own productivity), Lucas adds an **external effect**: the
economy-wide average skill level h_a(t) raises the productivity of *all*
factors, even though no individual's accumulation decision materially moves
h_a, so no one internalizes it privately. With all workers assumed identical
(h_a = h in equilibrium), the technology is:

`N(t)c(t) + K̇(t) = A·K(t)^β·[u(t)h(t)N(t)]^(1-β)·h_a(t)^γ`  (eq. 11)

with γ ≥ 0 the elasticity of output with respect to the *external* human-capital
effect, and A now held constant (technical change is switched off — human
capital alone must carry the growth engine).

The accumulation technology for human capital is the crux of the paper:

`ḣ(t) = h(t)·δ·[1 - u(t)]`  (eq. 13)

This is **linear** in the existing stock h(t) — a constant fraction of
non-leisure time devoted to schooling produces a constant *percentage*
increase in h(t), independent of the level already attained (the
Uzawa-Rosen formulation). Lucas is explicit that this linearity is not a
minor technical choice but the entire mechanism: if the schooling technology
instead has diminishing returns to the stock (h^η with η<1 in the more
general eq. 12), "human capital cannot serve as an alternative engine of
growth" — ḣ/h necessarily tends to zero as h grows, no matter how much
effort is devoted to it, and the model collapses back to a disguised Solow
model with no genuinely new growth source. Only the no-diminishing-returns
case sustains growth.

Because of the external effect (γ>0), competitive equilibrium and the
efficient (planner's) allocation diverge — this does not happen in the
Section 2 model, where they coincide. On any balanced path, letting ν = ḣ/h
denote the human-capital growth rate, the growth rate of consumption and
per-capita physical capital is:

`κ = ν·(1 - β + γ)/(1 - β)`  (eq. 21)

so κ = ν when γ=0, and κ > ν when γ>0 (the externality makes physical
capital grow faster than human capital). The efficient rate ν* and the
competitive-equilibrium rate ν are derived separately (eqs. 24 and 26); both
increase with the effectiveness δ of the schooling technology and decrease
with the discount rate ρ, and **both describe sustained, non-decelerating
per-capita growth whether or not the externality γ is positive** — the
externality's presence changes the *level* of underinvestment (and the
relative growth rates of the two capital stocks) but is not what makes
growth possible in the first place; the linear ḣ technology alone does that.
When γ>0, the competitive economy strictly under-invests in schooling
relative to the planner's solution (ν < ν*), because atomistic households
ignore their own contribution to h_a.

*U.S. calibration.* Using Denison's estimates (λ=0.013, β=0.25, s=0.10) and
Denison's estimate of 0.009/year for the schooling-driven growth rate of
human capital (taken as the *equilibrium* ν, i.e., assuming private returns
to schooling equal social cost), Lucas solves the balanced-growth system for
the remaining parameters:

| Quantity | Estimated value | Source relation |
|---|---|---|
| ρ + σκ | 0.0675 | eq. (10) |
| γ (externality elasticity) | 0.417 | eq. (21), given κ≈0.014, ν=0.009, β=0.25 |
| δ (max. feasible rate of human-capital growth, at u=0) | ≈0.05 | eqs. (21) & (26) jointly |
| u (equilibrium time share in production) | 0.82 | eq. (20) |

The efficient human-capital growth rate as a function of relative risk
aversion σ is ν\* = 0.009 + 0.0146/σ. Table 1 in the paper reports:

| σ | ν* (human capital) | u* (time in production) | κ* (consumption/output) |
|---|---|---|---|
| 1 (log utility) | 0.024 | 0.52 | 0.037 |
| 2 | 0.016 | 0.68 | 0.025 |
| 3 | 0.014 | 0.72 | 0.022 |

Under log utility, the efficient U.S. economy "ought" to devote nearly three
times as much effort to schooling as it actually does and would enjoy growth
about two percentage points higher than observed. A separate all-internal
variant (γ=0) fitting κ to Denison's 0.014 capital-growth figure implies
u=0.72 (28% of time in human-capital accumulation), leaving 0.005 of the 0.009
schooling-growth estimate attributable to non-schooling channels such as
on-the-job training.

**FA2 verdict — does the model admit a constant 24-month doubling (~41%/year)?
NO, not under any calibration anchored to the paper's own evidence, though the
algebra does not forbid it as a pure hypothetical.** The model's central
achievement, contrasted explicitly with Solow, is that it *can* sustain a
constant, non-decelerating per-capita growth rate indefinitely — this is
exactly the "engine of growth" property Section 3 found missing from the
neoclassical baseline. But the *magnitude* of that constant rate is set by
δ, the effectiveness of the schooling/learning technology (the ceiling rate
ḣ/h can reach only if u=0, i.e., no one produces any output at all), together
with σ (risk aversion/inverse intertemporal substitution), β (capital's
share) and γ (the externality). Via κ ≤ δ·(1-β+γ)/(1-β), even the
economically degenerate corner of u=0 with Lucas's own U.S.-calibrated
δ≈0.05 and γ≈0.417 caps physical-capital/consumption growth at roughly
0.05×1.556 ≈ 0.078, under 8%/year — and the paper's actual reported numbers,
efficient or equilibrium, run from about 1%/year (Denison's raw 0.009
schooling estimate) to 3.7%/year (the efficient, log-utility case in Table
1), roughly an order of magnitude below a 41%/year, 24-month-doubling regime.
Reaching 41%/year would require δ around 0.26-0.5 — a schooling/knowledge
technology 5-10 times more powerful than Lucas's own ceiling, sustained with
*zero* diminishing returns even as h(t) grows without bound — well outside
the paper's evidentiary base (Lucas questions whether his already-modest
γ≈0.4 estimate is even "a plausible number"). The formal mechanism (linear
ḣ technology) is structurally the kind of device the FA2 ledger is probing
for a self-replicating growth engine, but the paper's own calibrated range
sits nowhere near the required magnitude; 41%/year would have to be
asserted, not derived from anything in this source.

**Relevance flag for the thesis — the "labor" term is embodied knowledge,
not headcount.** In eq. (11), the labor-like input is *effective labor*
`u(t)h(t)N(t)`: population N appears only as a multiplicative scale, while
the entire per-capita growth-rate result (eqs. 21/24/26) depends on ν, δ, σ,
β and γ — not on N or on the population growth rate λ at all, which cancels
out of every per-capita growth expression. Growth is driven by the rate at
which *h*, an unobservable stock of skill/knowledge, compounds — not by
adding workers. Lucas is explicit that human capital is "an unobservable
magnitude or force" whose reality is inferred only from its many observable
correlates (earnings profiles, schooling patterns), and in Section 6 argues
that the natural scope of the *external* effect need not track national
population boundaries at all: he uses cities (via Jane Jacobs) as the
paradigm case of a non-national, non-headcount unit across which the
externality operates, suggesting the relevant "population" for the spillover
term is whatever group's interactions transmit knowledge, not a demographic
count. This is precisely the reframing the FA2 ledger flags as needed for a
population-free lunar economy: the growth-relevant quantity is an
"absorptive capacity" / embodied-knowledge stock accumulating via a
linear, no-diminishing-returns technology plus a spillover term, not bodies.
The caution the paper adds, however, is that even granting that generous
non-diminishing-returns structure, the *rate* such a stock can compound at is
an empirical parameter (δ) that Lucas's own U.S. calibration puts in the
low-single-digit-to-high-single-digit percent range, not tens of percent.

**The learning-by-doing / trade model (Section 5).** A second, independent
demonstration that human capital can drive sustained growth, built on
on-the-job learning rather than schooling. Two consumption goods are produced
by a Ricardian technology, `C_i(t) = h_i(t)u_i(t)N(t)`, with good-specific
human capital accumulating purely through use and purely externally:
`ḣ_i(t) = h_i(t)·δ_i·u_i(t)`, δ_1 > δ_2 (good 1 is the "high-technology"
good), under CES preferences with elasticity of substitution σ. Under
autarky, the dynamics of the relative price q = h_1/h_2 split into three
cases: σ>1 (substitutes) drives the economy to complete specialization; σ<1
(poor substitutes) yields a stable interior allocation; σ=1 fixes the initial
allocation forever while price drifts at a constant rate. Under free trade
among a continuum of countries, each country's growth rate is constant but
*differs* by which good it specializes in; producing the high-δ good grows
faster only when σ>1 — the case Lucas argues is realistic, and connects
speculatively to the export-led "growth miracles" of Korea, Taiwan, Hong
Kong, Singapore and Japan. As in Section 4, the equilibrium is inefficient
relative to a planner who would tilt labor toward the high-learning good.
This supplies a mechanism for *persistent cross-country growth-rate
differences* tied to comparative advantage and export composition (Sub-Q 4),
but Lucas flags the section as underdeveloped, with no numerical calibration
of δ_1, δ_2 or σ against data anywhere in the paper.

**Cities and the scope of externalities (Section 6).** An informal discussion
connecting the external human-capital force γ to Jane Jacobs's account (*The
Economy of Cities*, 1969) of cities as sites of unpriced knowledge spillovers.
Lucas suggests urban land rents could in principle help quantify the
externality but does not attempt this measurement — underscoring that γ's
plausible empirical range remains, by his own admission, essentially unknown
outside the single residual estimate (≈0.4) backed out of Section 4.

**Conclusion (Section 7).** Lucas identifies the Section 4 model as the
paper's central construction: a closed economy with two state variables (K
and h) that converges, from any initial capital configuration, to a curve of
balanced-growth combinations in (K,h)-space, but the point of convergence —
and hence the country's permanent relative income level — depends on initial
conditions. Countries that start poor stay poor in *level* terms
indefinitely, while sharing the *same* long-run per-capita *growth rate* as
initially wealthier countries: growth-rate convergence without income-level
convergence, and a permanently stable world income distribution absent labor
mobility. Only if the externality is present *and* labor is mobile does the
model predict systematic labor flows from poor to rich countries (matching
observed immigration pressure). The Section 4 model alone has no mechanism
for cross-country growth-rate *diversity*; that comes only from Section 5,
and only for a fixed set of goods, with no within-country acceleration or
deceleration mechanism (new-goods introduction is flagged as needed but
unmodeled).

### Limitations

- The paper is explicitly theoretical/expository (based on lecture material),
  not an econometric study: no regression, standard error, significance
  test, or out-of-sample validation appears anywhere. The author states
  repeatedly that aggregate U.S. time series "have no ability to
  discriminate" among competing specifications — the competitive-equilibrium
  and efficient-planner versions of Section 4 fit equally well, as does the
  Section 2 (Solow) model and any intermediate hybrid.
- The two-capital dynamics of Section 4 away from the balanced-growth path
  are explicitly labeled conjecture, not proof: a footnote states the model
  "has not been fully analyzed in the literature" and that off-balanced-path
  behavior "is largely conjecture, based on parallels with Uzawa (1965) and
  Romer (1986)."
- The externality elasticity γ≈0.417 and the schooling-effectiveness ceiling
  δ≈0.05 are both backed out residually from two macro balanced-growth
  identities combined with a handful of Denison averages, not estimated
  independently; Lucas himself asks whether γ≈0.4 is "a plausible number"
  and says he does not know what other evidence would confirm or refute it.
  Nothing in the model's logic independently bounds δ from above, so the
  paper provides no argument against assuming a larger value — only an
  absence of empirical support for one.
- Population growth and all monetary/financial phenomena are assumed away
  entirely, a simplification the author calls "a serious omission."
- The Section 4 model, taken alone, generates no cross-country growth-rate
  diversity and no mechanism for growth accelerations or decelerations
  within a country — all economies converge to the same asymptotic
  per-capita growth rate; only the separate, less-developed Section 5 model
  admits differing growth rates, and only via fixed, time-invariant
  comparative advantage, with predictions that hinge delicately on whether
  the two goods are substitutes or complements (σ ≷ 1).
- All parameters are calibrated to a single country and period (Denison's
  1909-57 United States); no attempt is made to test the model against any
  other country's history, including the East Asian "miracle" cases the
  introduction highlights as motivation.
- Figures 1-3 are qualitative phase diagrams (the balanced-growth locus in
  (K,h)-space; the autarky price-dynamics curve; the world endowment
  distribution) illustrating already-derived algebraic results, with no
  additional quantitative content beyond what is stated in the text.

### Topic mapping

FA2. Serves Sub-Q 2, 4 (human-capital-driven growth; the "labor" term as
embodied knowledge). Touches: Sections 2-3 (Solow-Denison neoclassical
baseline and its critique as a development theory, background for Sub-Q 1,
motivating the shift from disembodied technical change to embodied human
capital); Section 4 (the core Sub-Q 2 result — the linear, no-diminishing-
returns human-capital accumulation technology as the engine of sustained
per-capita growth, the internal/external effect decomposition, the
externality elasticity γ that drives a wedge between competitive and
efficient growth rates, and the U.S. calibration that pins the model's
plausible growth-rate range at roughly 1-4%/year, well short of the 41%/year
band this review is testing for); Section 5 (Sub-Q 4 — a second,
comparative-advantage-based human-capital/learning-by-doing model generating
persistent cross-country growth-rate differences tied to export composition,
offered by Lucas as a lens on the East Asian and Japanese export-led growth
episodes); Section 6 (the unresolved empirical scope and plausible magnitude
of the human-capital externality, relevant to how much weight FA2 can put on
large assumed spillover terms); and Section 7 (the conclusion's growth-rate-
convergence/income-level-divergence result and its labor-mobility corollary).
