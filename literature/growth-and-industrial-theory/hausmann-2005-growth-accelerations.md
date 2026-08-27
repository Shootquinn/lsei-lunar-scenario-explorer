# Growth Accelerations

## Citation

Hausmann, R., Pritchett, L., & Rodrik, D. (2005). Growth accelerations. *Journal of
Economic Growth, 10*(4), 303-329.

DOI: 10.1007/s10887-005-4712-0 (confirmed in FA2 ledger; file read is NBER WP 10566)

Publisher URL: https://link.springer.com/article/10.1007/s10887-005-4712-0

PDF-route note: the file processed for this summary is the free NBER Working Paper
10566 version, "Growth Accelerations," dated June 2004
(https://www.nber.org/papers/w10566; the NBER WP itself carries its own identifier,
DOI 10.3386/w10566). All text, tables, and figures cited below are drawn from that
NBER WP; the citation of record above is the published *Journal of Economic Growth*
article.

## Abstract

Rather than pooling growth data into cross-country averages, the paper searches for
turning points: episodes in which a country's per-capita GDP growth jumps sharply and
stays elevated. Using Penn World Tables data from 1950 onward, it identifies more than
80 such "growth accelerations" since the 1950s. Accelerations correlate with rising
investment and trade ratios and with real exchange-rate depreciation. Political-regime
change is a statistically significant predictor of accelerations in general; external
shocks (terms-of-trade windfalls) and financial liberalization predict accelerations
that later fizzle out, while economic-policy reform predicts accelerations that are
sustained. Despite these statistically significant associations, the paper's central
finding is that growth accelerations are highly unpredictable: most accelerations are
not preceded by any of the standard triggers, and most instances of the standard
triggers are not followed by an acceleration.

## Summary

### Background and objective

The paper opens by noting a gap in the cross-country growth literature: regressions of
average growth on country characteristics (Barro 1991; Barro and Sala-i-Martin 1992),
levels regressions (Hall and Jones 1999; Acemoglu, Johnson, and Robinson 2001), and
panel approaches (Islam 1995; Caselli, Esquivel, and LeFort 1996) all average over
time, discarding what the authors consider the most informative variation in the
data: growth performance within a country is highly unstable. Building on Easterly,
Kremer, Pritchett, and Summers (1993) and Pritchett (2000), the authors observe that
few countries sustain high growth for decades; the typical pattern is alternating
phases of growth, stagnation, and decline.

The authors motivate looking at turning points with a simple theoretical contrast
(their Figure 1.1): after a permanent improvement in growth fundamentals at time T,
the neoclassical growth model predicts growth accelerates at T but eventually
converges back to the pre-T rate (unless the improvement is in exogenous technical
progress), while endogenous-growth models predict a permanent acceleration at T. In
both model classes, the informative variation is concentrated at the transition itself,
so cross-country regressions that average over many years wash out the very episodes
most likely to reveal the true determinants of growth. The objective is therefore to
build an empirical filter that locates these turning points directly, characterize
their frequency and correlates, and test how well conventional determinants
(external shocks, political change, economic-policy reform) predict their timing and
their persistence.

### Methods and scope

**Defining an acceleration.** The paper defines the growth rate g at time t over an
n-year horizon as the least-squares trend growth rate of GDP per capita from t to
t+n. A growth acceleration must jointly satisfy three conditions, with n fixed at 8
years (i.e., the post-period horizon is t to t+7):

1. g(t,t+n) >= 3.5 percentage points a year — growth is "rapid" in the post-period.
2. The change in trend growth, delta-g(t) = g(t,t+n) - g(t-n,t) >= 2.0 percentage
   points a year — growth "accelerates" relative to the prior 8 years.
3. Output at t+n exceeds the maximum output level reached at any point up to and
   including t — this rules out episodes that are merely a recovery back to a prior
   peak.

The exact initiation year within an eligible window is chosen by finding the year
that maximizes the F-statistic of a spline regression with a break at that year.
Countries can register more than one episode as long as episodes are at least 5
years apart.

**Data and sample.** The baseline data source is Penn World Tables (PWT) 6.1, which
extends back to 1950. Countries with population under 1 million or fewer than 20 PWT
data points are dropped. Because the 8-year post-period must be observable, the
feasible window for identifying episode start years runs from 1957 to 1992 — a
35-year span. The final estimation sample covers 110 countries.

**Robustness checks (Section 2.B).** The authors treat the 3.5-ppa and 2.0-ppa
thresholds and the 8-year horizon as "defensible, but admittedly arbitrary," and show
how episode counts respond to each choice: a 5-year horizon yields 125 episodes,
a 10-year horizon only 37; raising the growth-level threshold from 3.5 to 4.0 ppa
cuts the count to 68, while lowering it to 3.0 raises it to 90; raising the
acceleration threshold from 2.0 to 2.5 ppa cuts the count to 67, while lowering it to
1.5 raises it to 93. A parallel exercise substitutes World Bank World Development
Indicators (WDI) data for PWT (Table 2.4): of 56 PWT episodes for which comparable
WDI data exist (27 of the 83 predate the 1960 WDI start), 25 (45%) match exactly on
timing, 15 (27%) match within two years, and 6 (11%) match with more than a two-year
difference — 81% overall agreement — while 10 PWT-identified episodes do not survive
in WDI data and 6 additional episodes appear in WDI but not PWT. At the 10% level,
three of the 83 identified episodes (Syria 1974, Malawi 1970, Uruguay 1989) are not
individually statistically significant trend breaks.

**Predictor variables and estimation (Section 4.A).** The dependent variable in the
main analysis is a dummy equal to 1 for a 3-year window centered on each episode's
initiation year, estimated by probit against a comparison group of country-years
without an episode, with year fixed effects throughout. Explanatory variables fall
into three groups: (i) external shocks — TOT_Thresh90, a dummy for terms-of-trade
improvement in the top decile of the sample distribution; (ii) political change —
RegChange (any 3-unit-or-larger Polity IV regime-change or interruption in the prior
5 years), decomposed into PosChange (toward democracy) and NegChange (toward
autocracy), plus supplementary variables for a political leader's death interacted
with tenure length (Jones and Olken 2004b), war end, and civil-war end (Correlates of
War data); and (iii) economic reform — Econ_Lib, a dummy for the first 5 years of a
Sachs-Warner-Wacziarg-Welch (SWWW) openness transition, and Finance, a dummy for the
first 5 years of a financial-liberalization episode dated by Bekaert, Harvey, and
Lundblad (2001). Robustness is checked with country-clustered probit, Tobit, a
rare-events-corrected logit (King and Zeng 2001), and random-effects probit; a
parallel set of regressions restricts the sample to developing countries only. A
separate exercise (Section 4.C) reclassifies episodes as "sustained" or "unsustained"
based on whether growth in years t+7 through t+17 remained above or fell below a
2%/year threshold, and re-runs the probits on each subgroup.

### Key findings

**How many, and how big.** Applying the filter to PWT 6.1 yields 83 growth
accelerations worldwide between 1957 and 1992 (the paper's headline figure is "more
than 80"). Conditional on qualifying, the average magnitude of acceleration is 4.7
percentage points (median 4.0) — well above the 2.0-ppa minimum — implying that in
the typical episode, output at the end of the episode stood almost 40% higher than
it would have been on the pre-acceleration trend. The largest single accelerations in
the sample are Haiti 1990 (growth rose from -2.3 to 12.7 ppa, a 15.0-point swing),
Jordan 1973 (-3.6 to 9.1, a 12.7-point swing), Argentina 1990 (-3.1 to 6.1, a 9.2-point
swing), Nigeria 1967 (-1.7 to 7.3, a 9.0-point swing), and Botswana 1969 (2.9 to 11.7,
an 8.8-point swing).

**Base-rate frequency.** Dividing the 83 episodes by the 3,097 country-year
"opportunities" for an episode to occur (total country-years in-sample, net of a
4-year post-episode exclusion window) yields an average annual probability of a
growth transition of about 2.7%, equivalent to roughly a 25% chance that a given
country experiences at least one acceleration in any given decade. Of the 110
countries in the sample, 60 (54.5%) experienced at least one acceleration over the
35-year window, and 23 (20.9%) experienced two. By region, Asia had the most episodes
(21) and the highest average annual probability (4.09%, prose figure 4.3% using a
different denominator convention); Africa had 18 episodes but the lowest probability
of any region (1.91%); Latin America had 17 episodes (2.40% probability); the Middle
East and North Africa had 10 episodes and the second-highest probability (3.61%,
though 9 of the 10 predate 1980 and are linked to oil booms); Europe had 12 episodes
(2.34% probability, 5 of them clustered in 1950s postwar recovery). By decade, episode
counts were 13 (1950s), 23 (1960s), 23 (1970s), 16 (1980s), and 8 (1990s, truncated
by the 1992 data cutoff), with annual probabilities declining from 8.44% in the 1950s
to 1.56% in the 1980s before ticking back up to 2.92% in the 1990s. Splitting by
income quartile (Table 3.1), the overall pattern is a monotonic decline in
acceleration probability with income (3.41% in the poorest quartile versus 2.03% in
the richest), though this pattern reverses in some individual decades.

**Sustainability: the base rate for persistence.** Of the 83 episodes, 69 have
enough subsequent data (through t+17) to classify what happened after the initial
8-year acceleration. Using a 2%/year threshold — described by the authors as
"roughly" the long-run OECD average and the rate needed to converge with industrial
countries — 37 of 69 (53.6%) kept growing above 2%/year in years t+7 through t+17
("sustained"), while 32 of 69 (46.4%) fell back below it: 16 (23.2%) had negative
growth in the follow-on decade and 16 (23.2%) grew slowly (0-2%/year). In other words,
even against this comparatively modest 2%/year bar — one full point below the 3.5%
"rapid growth" threshold used to define the acceleration itself — persistence is
close to a coin flip, and roughly a third of accelerations are followed by outright
reversal into negative per-capita growth. Countries with negative growth both before
and after their episode are disproportionately African; countries with high growth
both before and after are disproportionately East Asian and European. Classified by
pre-episode growth, 15/69 accelerations began from negative growth, 32/69 from slow
growth, and 22/69 from above-average growth.

**Correlates around the transition (Table 3.2).** Comparing the 3-year window around
an acceleration's start to the prior 4 years, accelerations coincide with statistically
significant increases in export ratios (+10.7%, t=2.37), import ratios (+8.7%,
t=2.15), investment ratios (+16.0%, t=2.51), and real exchange-rate depreciation
(-21.7%, t=-3.54). Terms-of-trade changes (+2.5%, t=0.51) and inflation (+434%, t=1.24)
move in the expected direction but are not statistically significant. Over the full
8-year acceleration episode (versus the 4 prior years), export, import, and investment
ratios rise by 14.6%, 14.2%, and 14.9% respectively (all significant at 1%), while the
real-exchange-rate effect shrinks to a quarter of its start-of-episode size and loses
significance — suggesting the competitive-depreciation effect is concentrated at the
launch of an acceleration rather than sustained throughout it.

**Predictors of acceleration timing (Table 4.1, baseline probit).** A terms-of-trade
shock in the top decile raises the probability of an acceleration by 4.4 percentage
points (t=2.60, significant at 1%); a political regime change raises it by 5.3 points
(t=4.74, significant at 1%); economic-policy reform (Econ_Lib) has a positive but
statistically insignificant coefficient (+2.1 points, t=1.04). Decomposing regime
change: a move toward autocracy (NegChange) raises acceleration probability by 10.8
points (t=5.80), more than three times the effect of a move toward democracy
(PosChange, +2.9 points, t=1.97) — a result the authors flag as counterintuitive.
Financial liberalization has a strong positive effect, +7.1 points (t=2.79) in the
baseline specification, rising to +10.5-10.8 points in extended specifications; a
leader's death has no significant unconditional effect, but becomes a significant
predictor of acceleration when a short-tenured leader dies (positive effect emerges
once tenure exceeds roughly 10 years); war end and civil-war end are not significant
predictors in any specification. Restricting the sample to developing countries only
(Table 4.3) leaves NegChange and TOT_Thresh90 significant, roughly doubles the
financial-liberalization coefficient, but renders PosChange insignificant, and makes
Econ_Lib marginally significant only once the terms-of-trade variable is dropped.
The NegChange coefficient is the most robust result in the paper, remaining
significant (0.05 to 0.12) across all alternative-threshold and alternative-dataset
specifications tested in Table 4.4.

**Overall predictability is low.** The paper's central quantitative statement on
predictability: the average in-sample predicted probability of an acceleration,
conditional on an acceleration having actually occurred, is only 0.101, versus an
unconditional (base-rate) predicted probability of 0.066. The authors read this gap
as roughly 9-to-1 odds against correctly forecasting a growth takeoff that in fact
materializes. Table 4.5 quantifies this from both directions for the full sample of
episodes: only 14.5% of accelerations are preceded or accompanied by economic
liberalization, 50.6% by a political regime change, and 27.5% by a positive terms-of-
trade shock — meaning 85.5% of accelerations are not linked to a liberalization
episode at all. Conversely, only 18.2% of economic-liberalization episodes are
followed by an acceleration, only 13.6% of political regime changes are followed by
one, and only 5.1% of favorable terms-of-trade shocks are followed by one.

**Sustained versus unsustained accelerations have different triggers (Section 4.C,
Table 4.6).** Splitting the 69 classifiable episodes by the sustained/unsustained
distinction above and re-running the probits: (1) a positive terms-of-trade shock
predicts unsustained accelerations (coefficient 0.019, t=3.72) but has no significant
predictive power over sustained ones; (2) economic-policy reform (Econ_Lib) has a
statistically and quantitatively significant positive effect on sustained
accelerations (coefficients of 0.171, t=4.14, and 0.112, t=4.03, across
specifications) but is not a significant predictor of unsustained ones; (3) financial
liberalization's large positive effect is concentrated entirely in unsustained
accelerations (0.997, t=8.99) and is statistically insignificant for sustained ones
(0.073, t=1.49); (4) democratization (PosChange) significantly predicts sustained
accelerations (0.051, t=3.74) but not unsustained ones (0.001, insignificant). Applied
only to the sustained subsample (Table 4.5, panel b), predictability remains weak:
16.2% of sustained accelerations are preceded by economic liberalization and only
9.1% of liberalization episodes are followed by a sustained acceleration; 56.8% of
sustained accelerations are preceded by regime change but only 7.1% of regime changes
are followed by one; 23.5% are preceded by an external shock but only 1.4% of external
shocks are followed by a sustained acceleration.

**The FA2 base-rate framing.** HPR's operational bar for a growth "miracle" is
sustained per-capita growth of at least 3.5%/year for at least 8 years, following an
acceleration of at least 2.0 percentage points. That 3.5%/year threshold is roughly
an order of magnitude below a 41%/year target: 41 / 3.5 ≈ 11.7, i.e., the entire
empirical literature on growth accelerations — 83 episodes drawn from the full global
record since the 1950s — is calibrated to a bar approximately twelve times lower than
that target. And even at that far lower bar, persistence is not the norm: only 37 of
69 classifiable episodes (53.6%) kept growing above a 2%/year threshold — itself
below the original 3.5% "rapid" cutoff — for the following decade, and about a third
of all classifiable accelerations (16/69, 23.2%) reverted to outright negative
per-capita growth. No single episode in the sample, at 3.5-12.7 percentage points of
acceleration magnitude, approaches the scale implied by a 41%/year, ten-doubling
growth path; nothing resembling that pace appears anywhere in this dataset.

### Limitations

- The three defining thresholds (3.5 ppa post-period growth, 2.0 ppa acceleration,
  8-year horizon) are explicitly acknowledged by the authors as "defensible, but
  admittedly arbitrary." Episode counts are highly sensitive to these choices, ranging
  from 37 (10-year horizon) to 125 (5-year horizon) and from 67 (2.5-ppa acceleration
  threshold) to 93 (1.5-ppa threshold) — meaning the headline "83" (or "more than 80")
  is one point in a wide, filter-dependent range rather than a fixed count.
- PWT-versus-WDI data source produces only 81% agreement on episode dating among the
  56 comparably-dated episodes, and 10 PWT-identified episodes (including two with
  large magnitude, Haiti 1990 and Chad 1973) do not survive under WDI data, while 6
  additional episodes appear only in WDI.
- The sample window (1957-1992 for episode initiation, PWT 6.1 vintage) predates the
  entire post-1992 period, including the sustained 1990s-2000s China and India
  accelerations and the broader emerging-market growth wave of the 2000s; the paper's
  base rate is therefore drawn from an incomplete and dated slice of the historical
  record.
- Sustainability classification could be computed for only 69 of the 83 episodes, due
  to the need for 16 additional data points (t+7 through t+17) beyond each episode's
  onset; the sustained/unsustained split and its determinants rest on this smaller,
  data-availability-selected subsample.
- The authors are explicit that none of the reported correlations imply causality;
  the correlates in Table 3.2 and the probit coefficients in Tables 4.1-4.6 are
  described throughout as associational only.
- Explanatory power is low throughout: pseudo-R² in the probit specifications ranges
  from about 0.05 to 0.16, and the conditional-versus-unconditional predicted-
  probability comparison (0.101 vs. 0.066) itself demonstrates weak forecasting power
  even where individual coefficients are statistically significant.
- The "sustained" classification uses a 2%/year threshold — a rough OECD long-run
  convergence benchmark — not a re-application of the original 3.5%/year "rapid
  growth" bar; "sustained" in this paper therefore does not mean "still growing at
  miracle pace," only "still growing somewhat faster than the industrial-country
  average," a materially weaker claim.
- Per the FA2 source ledger, HPR's regime-change result should not be treated as
  settled: Jong-A-Pin, R., & de Haan, J. (2008), "Growth accelerations and regime
  changes: A correction," *Econ Journal Watch, 5*(1), 51-58, identifies a Polity IV
  data-coding error underlying HPR's RegChange/NegChange/PosChange findings and
  overturns the regime-change result on that basis. That correction is not
  summarized here (out of scope for this file) but should be read alongside any
  synthesis step that leans on HPR's political-regime-change predictor.
- The political-variable asymmetry (autocratic transitions predicting accelerations
  roughly 3-4x more strongly than democratic transitions) is flagged by the authors
  themselves as not obviously interpretable, and is precisely the finding placed in
  doubt by the Jong-A-Pin and de Haan correction above.

### Topic mapping

FA2. Serves Sub-Q 5 (the empirical distribution of growth miracles — the base-rate
reality check). Also bears on Sub-Q 1 conceptually, since the paper's motivating
Figure 1.1 contrasts neoclassical convergence-back-down dynamics with permanent
endogenous-growth accelerations as the reason turning points are worth isolating in
the first place. Sections and tables used: Section 1 (motivation, Figure 1.1);
Section 2.A (formal definition of a growth acceleration, the 83-episode count, Table
2.1 episode list, Table 2.2 regional/decadal frequency); Section 2.B (robustness of
thresholds and data source, Tables 2.3-2.4); Section 3 (income-quartile probabilities
and investment/trade/exchange-rate correlates, Tables 3.1-3.2); Section 4 (probit
predictors of acceleration timing and of sustained-versus-unsustained persistence,
Tables 4.1-4.6); Section 5 (conclusions on frequency and unpredictability). This is
the paper the FA2 verdict table cites for the empirical base rate against which any
model-implied 41%/year, ten-doubling growth path must be judged: the entire observed
distribution of post-1950s growth "miracles" tops out at a 3.5%/year sustained-growth
bar, roughly twelve times lower than that target, and even episodes clearing that far
lower bar persist past the initial 8 years only about half the time.
