# A Model of Growth Through Creative Destruction

## Citation

Aghion, P., & Howitt, P. (1992). A model of growth through creative
destruction. *Econometrica, 60*(2), 323-351.

DOI: unconfirmed in FA2 ledger (Econometric Society/JSTOR; 10.2307/2951599 to
be verified on the publisher page). Not recorded here per no-unconfirmed-DOI
rule.

Publisher URL: https://www.jstor.org/stable/2951599

## Abstract

The paper builds a general-equilibrium model of endogenous growth in which a
competitive research sector generates a sequence of quality-improving
("vertical") innovations, each of which renders the previous intermediate
good obsolete. Equilibrium is characterized by a forward-looking difference
equation: the amount of research employed in the current interval depends
negatively on the amount of research expected next interval, because
anticipated future research (a) raises next period's wage, which erodes the
monopoly rents of the next innovator, and (b) raises the hazard of creative
destruction that will terminate those rents. This equation admits a unique
stationary (balanced-growth) equilibrium in which research employment is
constant and the log of GNP follows a random walk with drift, though
cyclical and "no-growth trap" equilibria can also exist. Both the average
growth rate and the variance of growth are increasing in the size of
innovations, the skilled-labor endowment, and the productivity of research
(as governed by the Poisson arrival-rate parameter), and decreasing in the
rate of time preference. Relative to Romer-style horizontal-innovation
models, the paper identifies two additional distortions specific to
obsolescence-driven growth — a "business-stealing" effect and a
monopoly-distortion effect — that push laissez-faire research and growth
*above* the social optimum, so that the net welfare comparison between
laissez-faire and optimal growth is ambiguous rather than one-directional.
When the size of innovations is itself made a choice variable, the
business-stealing effect further implies that laissez-faire innovations are
systematically too small.

## Summary

### Background and objective

The paper positions itself explicitly against the two founding endogenous-
growth papers, Romer (1986) and Lucas (1988), and against Romer's (1990)
horizontal-product-variety model and Judd's (1985) Dixit-Stiglitz-based
model. Those models generate sustained growth through the proliferation of
*new* varieties of goods that are no better than existing ones and involve
no uncertainty. Aghion and Howitt instead model *vertical* innovation:
successive generations of an intermediate good that are strictly better than
their predecessors and that make the predecessor obsolete. This introduces
into endogenous growth theory "the factor of obsolescence" and is presented
as a formalization of Schumpeter's process of creative destruction, quoted
briefly as "the essential fact about capitalism" (Schumpeter 1942, p. 83).

The model is built on the patent-race literature (Reinganum 1985; Tirole
1988, ch. 10) but generalizes it: it lets the stream of innovations
continue forever rather than analyzing a single race, and it makes the
reward to a successful innovation endogenous to the *future* level of
research, rather than a fixed prize as in standard patent-race comparative
statics. The resulting equilibrium condition — current research is a
decreasing function of expected future research — is structurally
analogous to the forward-looking difference equations of two-period
overlapping-generations monetary models (Azariadis 1981; Grandmont 1985).

The authors distinguish their contribution from contemporaneous models of
vertical innovation: Segerstrom, Anant, and Dinopoulos (1990) assume a
deterministic interval between innovations; Stokey (1988) treats quality
improvement as an unintentional by-product of learning-by-doing; Shleifer's
(1986) cost-reducing innovations generate deterministic cycles but do not
endogenize the long-run growth rate except in a degenerate case; Grossman
and Helpman (1991) synthesize the Segerstrom-Anant-Dinopoulos and
Aghion-Howitt frameworks. King and Rebelo (1988) introduce uncertainty
through a random return to human-capital accumulation rather than through
discrete innovation events.

### Methods and scope

**Environment.** Continuous time, a continuum of infinitely-lived
individuals with linear (risk-neutral) utility and constant rate of time
preference *r*, which also equals the interest rate; no disutility of
labor. Three fixed labor stocks: unskilled labor *M* (consumption-good
production only), skilled labor *N* (research or intermediate-good
production), and specialized labor *R* (research only).

**Production.** The consumption good is produced from fixed unskilled labor
and a flow *x* of intermediate input under constant returns, *y = A·F(x)*,
with *A* the productivity level of the current-vintage intermediate good.
The intermediate good is produced one-for-one from skilled labor, *x = L*.
Each successful innovation raises *A* by a fixed multiplicative factor,
here denoted γ > 1 (the source PDF's OCR renders the paper's Greek gamma as
"y"), so *A_t = A_0·γ^t*. A successful innovator receives a patent and
becomes the economy-wide monopolist until superseded by the next
innovation; Sections 2-4 assume "drastic" innovations (the new monopolist
is unconstrained by the previous vintage), and Section 5 relaxes this to
"nondrastic" innovations.

**Research technology.** A firm employing research inputs experiences
innovations via a Poisson process with arrival intensity *A·φ(z,s)*, where
*A* is a constant research-productivity parameter (distinct from the
productivity level *A_t*), φ is concave and homogeneous of degree one, and
there is no memory: the arrival rate depends only on the current flow of
research inputs, not any accumulated research stock. Aggregated, with *n*
the flow of skilled labor devoted to research, the arrival intensity is
λ = *A·φ(n)*. Because research technology has constant returns, the
*incumbent* monopolist chooses not to conduct research itself: an outside
entrant values the *full* next innovation at *V_{t+1}*, whereas the
incumbent would gain only *V_{t+1} - V_t* (the Arrow/replacement effect),
so equilibrium research is undertaken entirely by outside firms.

**Value of an innovation and the core equilibrium condition.** The value of
becoming the next monopolist is the expected discounted flow of monopoly
profit π over an interval whose length is exponentially distributed with
the next period's arrival intensity:

  V_{t+1} = π_{t+1} / (r + λ_{t+1}), where λ_{t+1} = A·φ(n_{t+1}).

The hazard term λ_{t+1} in the denominator *is* creative destruction: more
expected future research shortens the expected tenure of the next
monopolist and so lowers the present value of the rents that current
research is competing for. Combining the monopolist's static profit-
maximization condition, the research free-entry condition, and the skilled-
labor market-clearing identity *N = n_t + x_t* yields the paper's central
dynamic relationship:

  n_t = ψ(n_{t+1}),

a strictly decreasing function wherever positive-valued (eq. 3.1-3.2).
Current research falls when expected future research rises, through two
channels: (a) creative destruction (higher expected λ_{t+1} shortens the
expected patent life), and (b) a general-equilibrium wage channel (higher
expected future research raises the future wage, compressing the future
monopolist's profit margin and hence the payoff captured by today's
research).

**Equilibria.** A perfect-foresight equilibrium is any sequence {n_t}
satisfying n_t = ψ(n_{t+1}) for all t. A *stationary equilibrium* is the
fixed point n̄ = ψ(n̄); the paper shows it is unique whenever positive. But
the same relationship can also be satisfied by periodic (two-cycle)
trajectories, and by a knife-edge "no-growth trap": a deterministic
two-cycle where research alternates between a positive level and zero, and
because the technology has no memory, the zero-research state — once
reached — never ends, so the economy stops growing in finite time even
though it was growing before.

**Balanced growth and the growth-rate formulas.** In the stationary
equilibrium, GNP is Y_t = A_t·F(N - n̄); each innovation multiplies Y by γ
(eq. 3.6-3.7), so ln Y is a step function, flat between innovations and
jumping by ln γ at each Poisson arrival, with inter-arrival times i.i.d.
exponential with parameter λ̄ = A·φ(n̄). Sampled at unit calendar intervals,
ln Y follows a random walk with constant drift (eq. 3.8-3.10):

  **AGR = A·φ(n̄)·ln γ = λ̄·ln γ**
  **VGR = A·φ(n̄)·(ln γ)² = λ̄·(ln γ)²**

**Proposition 1 (comparative statics of n̄, hence of AGR/VGR).** Stationary
research employment n̄ — and therefore both the average growth rate and its
variance — increases with (a) a decrease in the interest rate *r*; (b) an
increase in the innovation size γ; (c) an increase in the skilled-labor
endowment *N*; (d) an increase in the arrival-productivity parameter *A*. In
the Cobb-Douglas closed-form example (F(x) = x^α), n̄ is also increasing in
market power (decreasing in α), and a *minimum* degree of market power is
required for n̄ > 0 at all (a threshold α* below which even permanent,
uncontested monopoly rents would not cover the cost of research).

**Welfare (Section 4).** Comparing the stationary laissez-faire n̄ to the
planner's optimum n* (maximizing the expected present value of consumption,
eq. 4.1-4.4) identifies four distortions relative to the private research
condition (eq. 3.3):
1. *Intertemporal spillover* — private research ignores that a productivity
   gain becomes the base for every subsequent innovation forever (the same
   spillover as in Romer 1990); pushes growth below optimal.
2. *Appropriability* — the private firm captures only the monopoly profit
   π, not the full social surplus F(N-n); also pushes growth below optimal.
3. *Business-stealing* — new, and specific to obsolescence-driven vertical
   innovation: the planner values an innovation by its *net* contribution
   (γ-1), since it also destroys the previous vintage's surplus, while the
   private firm captures the *gross* γ. Pushes growth *above* optimal.
4. *Monopoly distortion* — the private opportunity cost of research labor
   is the monopolized wage, below the marginal social product, so private
   research is too cheap relative to its social cost; also pushes growth
   above optimal.
Because effects 1-2 and 3-4 pull in opposite directions, laissez-faire AGR
can be either above or below optimal depending on parameters. In the linear
Cobb-Douglas example: n̄ < n* when γ is large (the intertemporal-spillover/
appropriability channel dominates); n̄ > n* when monopoly power is high and
γ is not too large (the business-stealing channel dominates).

**Nondrastic innovations (Section 5).** When the new monopolist is price-
constrained by potential competition from the previous vintage, the same
qualitative results hold; the effective markup γ^(1/α) replaces the drastic
case's markup 1/α, but all of Proposition 1's comparative statics survive.

**Endogenous innovation size (Section 6).** Letting research firms also
choose γ (bigger jumps are harder to find: arrival intensity A·φ(z,s)·v(γ),
v' < 0, v'' < 0) shows that private firms maximize arrival rate times *gross*
jump size, v(γ)·γ, while the social planner maximizes arrival rate times
*net* jump size, v(γ)·(γ-1). Because v(γ)·γ is concave, this yields γ̄ < γ*:
laissez-faire innovations are too small when drastic, partly (not fully)
offset in the nondrastic case by private firms' incentive to enlarge γ to
escape the previous vintage's competitive fringe.

**Strategic monopsony (Section 7).** If the incumbent monopolist recognizes
that hiring *more* skilled labor than short-run profit-maximization dictates
raises the economy-wide wage and thereby slows the pace of research (delaying
its own replacement), it will do so. In the linear Cobb-Douglas case this
monopsony-distortion effect exactly cancels the business-stealing effect,
leaving growth unambiguously below optimal; in the general case the net
effect is ambiguous and can be constructed to vanish entirely.

**Many intermediate sectors (Section 8).** Extending to *m* sectors with a
deterministic innovation order (Shleifer 1986-style) leaves the average
growth-rate formula essentially unchanged (AGR = A·n̄·ln γ in the linear
case) but reduces the *variance* of growth by roughly 1/m — a
law-of-large-numbers smoothing effect from aggregating many asynchronous
sectoral jump processes, without changing the mean growth rate.

**Appendix 1** works a two-state Markov example for the arrival parameter A
and shows that raising A in one state without limit does not raise the
average growth rate monotonically — in the limit, average research
employment and average growth both fall to *zero*, because the higher
hazard of creative destruction in the high-A state progressively
discourages research in the other state.

### Key findings

**The growth-rate expression.** In stationary equilibrium the model
produces
  AGR = A·φ(n̄)·ln γ, VGR = A·φ(n̄)·(ln γ)²,
where A is the research-technology productivity parameter, φ(n̄) is the
(concave) innovation-arrival intensity as a function of research employment
n̄, and γ > 1 is the multiplicative size of each quality-improving
innovation. The average growth rate is the Poisson arrival rate of
innovations, λ̄ = A·φ(n̄), multiplied by the log-size of each innovation,
ln γ — i.e., "frequency times step size," exactly the g = λ·ln γ form
anticipated by the FA2 brief. By Proposition 1, λ̄ (and hence AGR) rises
with lower interest rates, larger γ, a larger skilled-labor pool N, higher
research productivity A (in the baseline, non-stochastic-A case), and
greater intermediate-sector market power.

**FA2 verdict — does the model admit a constant 24-month doubling (~41%/yr
sustained growth)? Qualified YES on the average rate, NO on "constant" in
the literal sense.** The model does produce a *constant expected drift* in
log output, exactly like other first-generation endogenous-growth models
(Romer 1990, Lucas 1988): nothing in the algebra of AGR = A·φ(n̄)·ln γ
imposes an upper bound on this product, so a stationary equilibrium can in
principle be parameterized to average any positive growth rate, including a
41%/yr band. A 24-month doubling implies a continuously-compounded rate of
ln(2)/2 ≈ 0.347/yr, i.e., a discrete annual rate of e^0.347 - 1 ≈ 41.4%/yr —
matching the FA2 target. To hit AGR ≈ 0.347/yr the model needs
λ̄·ln γ ≈ 0.347/yr; for example, one innovation per year on average
(λ̄ = 1) with each innovation raising productivity by roughly 41% (γ ≈
1.41, ln γ ≈ 0.347), or two innovations per year (λ̄ = 2) each raising
productivity by roughly 19% (γ ≈ 1.19, ln γ ≈ 0.173). The paper supplies no
reason internal to the model why such a combination of A, n̄, and γ is
infeasible — but it also supplies no calibration or empirical discipline
suggesting it is realistic; the parameters A, φ, γ, N, and r are treated as
free primitives throughout.

Two features of the model, however, mean it does *not* deliver a literal
"constant 24-month doubling" the way a smooth exponential path would:

- **Growth is inherently discrete and stochastic, not smooth.** Output is
  exactly flat between innovations and jumps by the fixed factor γ at each
  Poisson arrival; realized inter-innovation intervals are exponentially
  distributed with mean 1/λ̄, not fixed at 24 months. "24-month doubling" is
  only the *expected value* of a random walk with drift; the variance term
  VGR = λ̄(ln γ)² is strictly positive and does not vanish as λ̄ or γ grow,
  so realized doubling times scatter around 24 months rather than landing
  on it. A deterministic, clockwork doubling is outside what a Poisson
  arrival process can generate by construction.
- **More research productivity does not mechanically buy more growth.**
  Appendix 1's two-state example shows raising the arrival parameter A in
  one state can lower average research employment and average growth
  *economy-wide*, in the limit driving both to zero, because higher future
  creative-destruction risk discourages current research — the paper's own
  caution against treating AGR = λ·ln γ as mechanically rising in any
  single input to research productivity.

**The distinguishing wrinkle versus Romer (1990).** Romer's horizontal-
variety model has only forces that make laissez-faire growth *too slow*
(intertemporal spillover, appropriability). Aghion-Howitt's obsolescence
mechanism adds a negative externality running the *other* direction
(business-stealing, monopoly distortion), so laissez-faire growth can be
*either* above or below optimal, unlike in Romer. When innovation size is
endogenized (Section 6), business-stealing has an unambiguous sign on size
itself — laissez-faire innovations are always too small (γ̄ < γ*) in the
drastic case — even though the sign of the growth-rate distortion (n̄ vs.
n*) stays ambiguous.

**Existence of no-growth and cyclical equilibria.** Beyond the unique
balanced-growth stationary equilibrium, the same forward-looking difference
equation admits two-cycle equilibria and a "no-growth trap," in which the
economy's growth process can extinguish itself in finite time via a
self-fulfilling expectation that the next research boom would be so large
as to deter any research at all in the intervening period. Sustained
balanced growth is therefore not automatic even once the creative-
destruction mechanics are specified; it depends on which perfect-foresight
equilibrium the economy is on.

### Limitations

- The paper is a pure theory contribution with no empirical calibration or
  data confrontation; the growth-rate formula AGR = A·φ(n̄)·ln γ is never
  matched against observed TFP or output growth series.
- Linear (risk-neutral) utility is assumed specifically to make the choice
  of capital-market structure irrelevant; risk aversion, precautionary
  saving, and capital-market frictions are outside the model.
- The research technology has "no memory" — the arrival rate depends only
  on the current flow of research inputs, not any accumulated stock of past
  research. This rules out scale effects later criticized on empirical
  grounds by Jones (1995), also in the FA2 ledger.
- Most closed-form comparative-statics results are derived for a specific
  Cobb-Douglas example, F(x) = x^α; general existence and uniqueness of a
  positive stationary equilibrium requires a regularity condition (Section
  3) that need not hold for arbitrary parameterizations.
- Perfect-foresight equilibrium is not uniquely selected: balanced growth
  coexists with two-cycles and no-growth traps, and the paper supplies no
  selection mechanism.
- The baseline model (Sections 2-7) assumes each innovation is economy-wide
  in scope; the multi-sector extension (Section 8) is a stylized,
  deterministic innovation-order construct, not a general industry model.
- No physical capital, human-capital accumulation, unemployment/search
  frictions, or bounded/exhaustible technology are modeled; the authors
  list these as directions for future extension.
- Innovation size γ is exogenous and fixed except in Section 6, where the
  nondrastic case's mitigating effect on the too-small-innovation result is
  shown only via a specific worked example, not a general proof.

### Topic mapping

FA2. Serves Sub-Q 2 (Schumpeterian endogenous growth). Touches: Section 1
(positioning creative destruction against Romer 1986/1990, Lucas 1988,
Judd 1985, and other vertical-innovation models); Sections 2-3 (research
technology and Poisson arrival process, the value of an innovation and the
creative-destruction hazard in its denominator, the forward-looking
difference equation n_t = ψ(n_{t+1}), the unique stationary equilibrium,
the balanced-growth AGR/VGR formulas, Proposition 1's comparative statics,
and the possibility of cyclical/no-growth-trap equilibria); Section 4
(welfare comparison via the intertemporal-spillover, appropriability,
business-stealing, and monopoly-distortion effects, and why the net
comparison is ambiguous rather than one-directional as in Romer); Section 5
(nondrastic innovations); Section 6 (endogenous innovation size and the
result that laissez-faire innovations are systematically too small);
Section 7 (strategic monopsony); Section 8 (many-sector extension and
variance reduction); and Appendix 1 (numerical example showing higher
research productivity in one state can lower average growth economy-wide).
Used directly for the FA2 verdict table entry on whether Schumpeterian
endogenous growth admits a constant 24-month doubling.
