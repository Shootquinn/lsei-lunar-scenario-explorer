# Economic Control of Quality of Manufactured Product

## Citation

Shewhart, W. A. (1931). *Economic control of quality of manufactured product*.
D. Van Nostrand Company.

Publisher URL: none in source

## Abstract

Founding monograph of statistical quality control, written by a Bell Telephone
Laboratories physicist as a record of roughly six years of investigation.

Defines a phenomenon as "controlled" when past experience permits prediction,
within stated probability limits, of its future variation, and reframes
manufacturing quality as an inherently variable characteristic produced by a
system of chance causes.

Distinguishes a constant (chance-cause) system, whose fluctuations should be
left to chance, from assignable causes that can be found and removed.

Introduces the control chart (a central line at the expected value flanked by
upper and lower limits at three standard deviations) as the operational
instrument for detecting lack of control, and argues the 3-sigma spacing on
economic rather than purely probabilistic grounds.

Develops the supporting apparatus: frequency distributions and their
statistics; the normal law and its second (skewness) approximation;
small-sample sampling theory; five formal criteria for detecting lack of
control; specification of standard quality through tolerances; and the economic
advantages of control.

Illustrated with real industrial and physical datasets and with a large
bowl-drawing sampling experiment (4,000 drawings from each of three universes).

## Summary

### Background and objective

The book grew out of an investigation begun at Bell Telephone Laboratories
around 1925 to build a scientific basis for economic control of manufacturing
quality.

Its stated aim (set out in a Preface signed "W. A. Shewhart, Bell Telephone
Laboratories, Inc., New York, April, 1931") is to establish control limits
that indicate, at every stage from raw material to finished product, when
quality is varying more than is economically desirable. Within those limits
routine production stays economical; departures signal a breakdown that will
not be economical again until the cause of trouble is removed.

Shewhart frames the work as a record of progress rather than a closed theory.
He situates it against a contemporary shift (quoted from Eddington, Bridgman,
and 1927-era physics writing) toward viewing physical law as fundamentally
statistical.

The motivating problem is put concretely: a manufacturer turning out millions
of nominally identical articles sets a standard (a "bull's-eye") yet, like a
marksman, repeatedly misses because unknown or chance causes act. The central
question is framed as how much variation should be left to chance.

Two characteristics of a controlled product follow from the hand-written-letter
"a" thought experiment:

- A controlled quality is a variable, not a constant, quality.
- Its variability is nonetheless distinguishable and constant within limits.

The OCR front matter confirms the following bibliographic particulars:

- Author: Walter A. Shewhart, Ph.D., Member of the Technical Staff, Bell
  Telephone Laboratories, Inc.
- Publisher: D. Van Nostrand Company, Inc., 250 Fourth Avenue, New York (with
  Macmillan & Company, London, and a D. Van Nostrand Canada imprint, Toronto).
- Copyright 1931 by D. Van Nostrand Company, Inc.; printed by Lancaster Press,
  Inc., Lancaster, PA.
- Structure: seven Parts (I–VII), twenty-five chapters, plus Appendix I
  (resultant effects of constant cause systems), Appendix II (experimental
  results), and Appendix III (bibliography).
- Apparatus: roughly 147 numbered figures in the main text (plus figures in the
  appendices) and 56 numbered tables (plus lettered reference tables A–C and
  appendix tables A–F).

### Methods and scope

The exposition is deductive and illustrative: statistical theory is developed
and then checked against real industrial datasets, physical-constant
measurements, and a purpose-built sampling experiment.

Three postulates ground the argument:

1. Chance systems of causes are not all alike in whether they let us predict
   the future from the past.
2. Constant systems of chance causes do exist in nature, evidenced by the law
   of mortality (Fig. 1) and by Brownian/molecular displacement (Fig. 2), whose
   components follow the normal law.
3. Assignable causes of variation may be found and eliminated.

Quality of a lot of product is expressed through frequency distributions and a
compact set of statistics:

- fraction defective p;
- arithmetic mean X-bar (central tendency);
- standard deviation sigma (dispersion);
- skewness k;
- flatness / kurtosis beta-2;
- correlation coefficient r (and correlation ratio eta) for relationships.

The exposition proceeds part by part:

- Part II reviews the reduction of large bodies of observations to these
  statistics and their computation from grouped data, including Sheppard-type
  grouping corrections and small-sample correction factors.
- Part III develops the laws basic to control: exact versus statistical law,
  the law of large numbers, the point binomial, and the conditions for
  statistical and "maximum" control.
- Part IV treats sampling fluctuations of the statistics for small samples (n =
  4 is the recurring working case), drawing on Student, Fisher, Pearson, and
  Tippett.
- Part V covers tolerances and specification of standard quality.
- Part VI defines the five criteria for detecting lack of control.
- Part VII covers control in practice: the control program and measurement /
  sampling theory.

The principal worked datasets include:

- 204 insulation-resistance readings in megohms, read in time order (Table 2;
  values ~2,855–5,750 megohms).
- 60 aluminum die-castings with tensile strength, Rockwell hardness (E), and
  density (Table 3).
- Millikan's 58 electron-charge measurements (Table 5).
- 1,370 creosoted telephone poles paired for sapwood depth and creosote
  penetration (Table 4; correlation dataset).
- Modulus-of-rupture data for green Sitka spruce (1,304 specimens, Fig. 9) and
  for telephone poles.
- Tensile strength of steel strand from two suppliers, 20 values each (Table
  42).
- Weekly stale-bread returns for ten bakeries (Fig. 13).
- The Appendix II bowl experiment: chips drawn with replacement 4,000 times
  from each of three universes: Normal (998 chips, Table 22), Rectangular (122
  chips), and Right-Triangular (820 chips), Table 28, grouped into 1,000
  samples of four per universe (Tables A–F).

### Key findings

**Definition of control as prediction within limits.** A phenomenon is
controlled when, through past experience, one can predict at least within
limits how it will vary in future; that is, the probability that an
observation falls within stated limits can be stated at least approximately.
Eclipse timing and free fall are near-exact predictions; length of life,
molecular velocity, and wire breaking-strength are predictable only in the
probability sense.

**Chance versus assignable causes.** Observed variability is partitioned into:

- a constant system of chance causes, whose distribution dy = f(X, lambda-1,
  ..., lambda-m) dX is independent of time and should be left to chance; and
- assignable causes, which can be found and removed.

Control is reached when only the constant chance-cause system remains.

**The control chart and 3-sigma limits.** The operational test plots a
statistic against successive samples, with a solid central line at the expected
value and dashed limits at expected value ± 3·(standard deviation of that
statistic) (Fig. 100). A point outside the limits indicates trouble. Limit
forms:

- fraction defective: p-bar ± 3·sqrt(p-bar·q-bar/n);
- averages: X-bar ± 3·sigma/sqrt(n);
- standard deviations: sigma-bar ± 3·sigma/sqrt(2n).

Worked fraction-defective example (Type A product, data of Table 1): p-bar =
0.0109, sigma-p = 0.0047, upper limit 0.0250, lower limit taken as 0 (the
computed −0.0032 being inadmissible). Two of twelve monthly points (May ~0.030,
Oct ~0.028) fall above the limit, so those variations should not be left to
chance; the Type B product shows no point outside its limits (Figs. 3–4).

Worked variables example (steel strand, Table 42; accepted standard X-bar =
13,540 psi, sigma = 440 psi, n = 20): average limits {13,245; 13,835} and
standard-deviation limits ~{214; 632}, with one supplier's average (~13,970)
above the upper limit, out of control (Fig. 103).

Insulation-resistance data grouped in fours show several subgroup standard
deviations above the upper limit before assignable causes were removed (Fig.
111, center line ~255).

**Economic basis for the 3-sigma choice.** Because the exact sampling
distribution of a statistic is generally unknown and, even if known, an
in-limits result cannot prove control, limits are set empirically. Inspecting N
samples when no trouble exists yields on average (1 − P)·N false alarms; a
smaller P catches real trouble more often but raises the cost of needless
investigation, so a balance is struck. Using Tchebycheff's inequality P > 1 −
1/t^2 for symmetric limits at ±t·sigma, experience indicates t = 3 is an
acceptable economic value.

Coverage benchmarks (Fig. 33, normal law):

- within ±0.6745·sigma: 50.00000%
- within ±1·sigma: 68.26894%
- within ±2·sigma: 95.44998%
- within ±3·sigma: 99.73002%

Tchebycheff guarantees more than 89% (1 − 1/9) within ±3·sigma for any
distribution shape (Fig. 92, shown for four dissimilar universes of equal mean
and sigma).

**Frequency distributions and the normal law.** Physical properties are
statistical: 1,304 spruce modulus-of-rupture specimens form a slightly
right-skewed distribution (Fig. 9).

The 1,370-pole sapwood dataset shows how much information a few statistics
carry (Table 14): X-bar = 2.9141 in, sigma = 0.8029 in, k = 0.2407, beta-2 =
2.6870. Reconstruction of the distribution from the mean and standard deviation
alone (normal law) is good; adding skewness (the Gram–Charlier "second
approximation") improves the fit near the peak, where the normal-only fit
over-predicts (Tables 15, 17, 18; Fig. 32).

Observed coverage tracked normal-theory estimates closely for the 1,370
observations (Table 16):

- estimated per cent: 50.00, 68.27, 95.45, 99.73
- observed per cent: 47.45, 66.57, 95.91, 99.93
- difference: 2.55, 2.70, 0.46, 0.20

**Sampling fluctuations.** Small-sample distributions of the statistics are
derived and checked against the bowl experiment:

- The distribution of averages of four approaches normality even for
  rectangular and right-triangular parents (Figs. 58–59).
- Standard deviations of samples of four follow Student's distribution (Fig.
  60); modal sigma theoretical 0.7071 vs observed 0.7168; expected sigma 0.7979
  vs observed 0.8007 (Table 30).
- Correction factors c-1 (modal) and c-2 (expected) convert observed to
  universe sigma (Table 29): e.g. n = 3 → 0.57735 / 0.72360; n = 4 → 0.70711 /
  0.79788; n = 10 → 0.89443 / 0.92275.
- Bowl statistics for four samples of 1,000 reproduced the universe values well
  (Table 24: standard deviations 1.0219, 1.0019, 1.0317, 0.9739 vs universe
  1.0070; averages within ~0.04 of 0).

The correlation coefficient fluctuates widely at small n even when the universe
r = 0: eight samples of five gave observed r from −0.82 to +0.76 (Fig. 75),
motivating Fisher's z-transform and the approximation sigma-r = (1 −
r^2)/sqrt(n − 1). Normality of the distribution of effects proves necessary but
not sufficient for control (Fig. 55: a mixture of two normals still looks
normal).

**Physical-constant illustrations (constant-cause systems).**

- Millikan's 58 electron-charge values (Table 5; range 4.740–4.810 ×10^-10 esu)
  give median 4.785, mid-range 4.775, mode 4.779, and arithmetic mean 4.780
  ×10^-10 esu; subgroup-of-four averages fall within control limits (Fig. 8),
  consistent with Millikan having already removed assignable causes.
- Alpha-particle counts (Rutherford–Geiger 1910) fit a point binomial with
  strike probability ≈ 0.046 (Fig. 43).
- Oxygen-molecule speeds follow Maxwell's law: mean 424.9 m/s, RMS 461.2 m/s,
  most probable 376.6 m/s (Table 21, Fig. 46).
- The relation of mathematical probability to experiment is shown with 4,096
  throws of twelve dice (Table 20; observed vs (1/2 + 1/2)^12 binomial).

**Specification of standard quality and tolerances (Part V).**

- Where 100% inspection is impossible, two tolerances are needed: one on
  quality X and one on fraction defective p (Fig. 84).
- Specification types are graded: fixing only probability p, or only the mean
  X-bar, leaves the distribution largely undetermined (Figs. 90–91); specifying
  both X-bar and sigma (Type III), or additionally k and beta-2 (Type IV), is
  far more useful.
- A finished-product tolerance should be built from the ±3-sigma limits of its
  components: for m independent components the resultant standard deviation is
  sqrt(sigma-1^2 + ... + sigma-m^2), so simply summing component tolerance
  ranges (±3·sum of sigma) is uneconomical because the resultant almost never
  reaches those additive extremes (Fig. 87, shown for m = 9).
- Statistical (regression-plane) calibration using hardness and density
  together shrinks the tolerance range on tensile strength versus either
  predictor alone (Fig. 14). Table 3 / Table 19 statistics: mean tensile
  31,869.4 psi (sigma 3,962.9); mean hardness 69.825 Rockwell (sigma 11.773);
  mean density 2.6785 g/cm^3 (sigma 0.0986); correlations r_xy = 0.616, r_yz =
  0.683, r_zx = 0.657; regression plane z = 15,310.35x + 150.988y.

**Five criteria for detecting lack of control (Part VI).**

- Criterion I: a statistic outside its own ±3-sigma limits (attributes and
  variables, large and small samples).
- Criterion II: the ratio |d|/sigma-d exceeds 3, comparing within- and
  between-subgroup variance. The insulation data (N = 204, n = 4, m = 51
  subgroups) give |d|/sigma-d = 12.7157, far above 3 (Table 45).
- Criterion III: a significant correlation between the quality and a controlled
  variable Y flags Y as an assignable cause (illustrated by hardness of welded
  parts, Table 46; the common cause was heat treatment after welding).
- Criterion IV: analysis via rational subgroups where subgroups cannot be
  formed simply.
- Criterion V: a chi-square goodness-of-fit test against the second-
  approximation distribution, with degrees of freedom reduced by the number of
  estimated parameters (cells − 4 for the k-corrected fit); P < 0.001 indicates
  lack of control.

Criterion V "detects what the eye does not see": a distribution of 7,686
instruments that looks like a good visual fit still fails the chi-square test
(Fig. 114, Table 47). The criteria supplement, not replace, the engineer's
judgment; Fig. 119 shows a run entirely within limits but with an obvious
downward trend that still signals an assignable cause.

**Economic advantages of control (Part I conclusion).** Securing control is
claimed to yield five advantages, listed here verbatim:

1. Reduction in the cost of inspection: the need for inspection falls as
   quality approaches stable equilibrium (Fig. 11, tracked over more than two
   years).
2. Reduction in the cost of rejection: a large-scale telephone-plant program
   cut average per cent defective from 1.4 to 0.8 while the controlled fraction
   rose from 68% to 84% (Fig. 6); the funnel "economic production scheme"
   diverts defectives at each stage (Fig. 12). The telephone instrument has 201
   parts; its line and equipment add roughly 110,000 more.
3. Attainment of maximum benefits from quantity production.
4. Attainment of uniform quality even when the inspection test is destructive
   (fuses, steering rods, rails, aeroplane propellers).
5. Reduction in tolerance limits where quality measurement is indirect.

The bakery illustration (Fig. 13) shows all ten bakeries out of control; the
lowest-return bakery (1.99%) also shows the tightest control, while the highest
(11.70%) is the least well controlled.

**Control as an ongoing scientific program (Part VII).** Control is presented
as dynamic and iterative rather than a one-time attainment:

- Six stages in the use of past experience run from no use, through control
  within limits, to maximum control, and finally a fully exact science.
- An industrial program runs through five steps: research, design, tool-made
  samples, test/specification, production, with control tests at each step.
- The control program is organized as control in research, design, development,
  commercial production, and purchase of raw material (Chapter XXV).
- Results are summarized in a quality-control report that flags each
  characteristic as controlled or not, its likely cause, and the action taken
  (Table 56; sample report Fig. 147).

Statistical versus exact prediction is contrasted directly: a
damped-oscillation curve gives exact prediction (Fig. 127-a), whereas a
penny-tossing relative-frequency record converges only toward a statistical
limit, with the limits p ± 3·sqrt(pq/n) narrowing as 1/sqrt(n) (Figs. 127-b,
128).

### Limitations

The book is explicitly a "record of progress and an indication of the
direction" of future work, not a finished theory: the small-sample distribution
theory of Part IV and the mathematical distribution theory of Chapter XVI are
described as incomplete or approximate, and the 3-sigma choice is justified
pragmatically and economically rather than derived. Shewhart repeatedly
cautions that an in-limits result cannot prove control, only fail to disprove
it, and that the criteria are not infallible ("we are amply rewarded if they
appear to work in the majority of cases").

Much of the supporting data is proprietary Bell System material that, as the
Preface concedes, could only have been accumulated in a large industry,
limiting external reproducibility. The formal criteria further depend on the
engineer's prior division of data into rational subgroups and on judgment the
criteria themselves cannot supply. As a 1931 imprint, the source carries no DOI
or digital identifier.

The prose OCR was generally clean and served directly for definitions, the five
advantages, and the 3-sigma economic argument; numeric values inside tables and
equations were treated more cautiously, since OCR digits there were often
garbled, decimal points dropped, or subscripts mangled, and such values were
taken instead from the figure/table catalogue compiled from the page images.
Where a value remained uncertain in both sources it was marked approximate
("~") or omitted, and several dense or fine-print tables and figures flagged by
the catalogue as needing higher-resolution re-rendering were not transcribed
cell-by-cell here.

### Topic mapping

FA3. Source list entry 3. Sub-Q 1.

- Part I (Chapters I–III): concepts of statistical control, the three
  postulates, the five economic advantages.
- Part II (Chapters IV–IX): definition and presentation of quality:
  distributions, statistics (p, X-bar, sigma, k, beta-2, r), tables/graphs, and
  relationship/correlation.
- Part III (Chapters X–XII): laws basic to control: exact vs statistical law,
  law of large numbers, point binomial, conditions for statistical and maximum
  control.
- Part IV (Chapters XIII–XVI): sampling fluctuations of the statistics,
  small-sample distributions (Student, chi-square, correlation coefficient),
  and mathematical distribution theory.
- Part V (Chapters XVII–XVIII): design limits on variability, tolerances, and
  specification of standard quality.
- Part VI (Chapters XIX–XXI): detection of lack of control, the five criteria,
  and sampling inspection.
- Part VII (Chapters XXII–XXV): summary of fundamental principles, measurement
  and sampling, and the control program.
- Appendices: resultant effects of constant cause systems and design
  applications (I); the bowl-drawing experimental results, Tables A–F (II);
  bibliography (III).

