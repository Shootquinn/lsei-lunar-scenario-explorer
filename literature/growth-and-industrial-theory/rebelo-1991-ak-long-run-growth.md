# Long-Run Policy Analysis and Long-Run Growth

## Citation

Rebelo, S. (1991). Long-run policy analysis and long-run growth. *Journal of Political Economy, 99*(3), 500-521.

DOI: 10.1086/261764 (confirmed in FA2 ledger)

Publisher URL: https://www.journals.uchicago.edu/doi/10.1086/261764

## Abstract

The paper addresses the wide cross-country dispersion in long-run growth rates by
proposing a class of models in which that heterogeneity can be traced to differences
in government policy, and in which the resulting wage differentials create incentives
for labor to migrate from slow- to fast-growing countries. Growth in these models is
endogenous — it does not require exogenous technical progress — but, unlike Romer
(1986), it does not rely on increasing returns to scale. Instead, sustained growth
survives because the economy contains a "core" of capital goods producible without
any direct or indirect input of factors that cannot themselves be accumulated (e.g.,
land).

## Summary

### Background and objective

Rebelo opens from an empirical puzzle: some postwar economies (he names Japan,
Brazil, and Gabon) grew rapidly while others stagnated, and the neoclassical growth
model cannot generate large, permanent cross-country growth differences from policy.
In the Solow-type neoclassical model, the steady-state growth rate is pinned down by
the exogenous rate of technical progress; taxes and other policies can only alter
the economy's *level* and the speed of transition toward the steady state, and King
and Rebelo (1989) had already argued that the near-constancy of real interest rates
over the past century implies transitional effects are too weak to explain observed
growth-rate dispersion.

Romer (1986) had shown growth can be endogenous — sustained without any exogenous
productivity trend — but only by introducing increasing returns to scale and an
externality, which also implies accelerating (non-constant) growth. Rebelo's
objective is to show that endogenous, *policy-sensitive*, and permanently different
steady-state growth rates are attainable with constant-returns-to-scale technology
and no externalities — a class of models consistent with Kaldor's (1961) stylized
facts (roughly constant capital-output ratio, capital share, and growth rate). The
paper's organizing device is the idea of a "core" of capital goods whose production
never touches a fixed, nonreproducible factor. Its stated focus is taxation, chosen
because tax regimes vary widely across countries and are thought to proxy for the
effects of other policy variables such as property-rights protection.

### Methods and scope

The paper is entirely analytical: continuous-time, perfect-foresight, closed-form
optimal-growth models, solved as social-planning problems (justified by the welfare
theorem, since the environments are distortion-free absent taxes) but analyzed
directly in decentralized competitive-equilibrium form so the mechanism driving the
growth rate is transparent. Households have standard time-separable, constant-
relative-risk-aversion (CRRA) preferences, U = ∫ e^(−ρt) C^(1−σ)/(1−σ) dt, so that
optimal consumption growth is g_c = (r − ρ)/σ, where r is the real interest rate, ρ
the discount rate, and σ the CRRA coefficient (the inverse of the intertemporal
elasticity of substitution). Population is constant throughout; there is no labor
growth and no exogenous technical change anywhere in the paper.

The models are built up in stages:

- **Section II — basic two-sector model.** Two factors: a reproducible composite
  capital good Z_t (physical + human capital combined) and a fixed nonreproducible
  factor T_t (e.g., land). A capital-goods sector produces investment linearly in
  capital, I_t = A·Z_t·(1−φ_t), with A the constant marginal product of capital and
  φ_t the share of capital diverted to the consumption sector; crucially, this sector
  uses none of the fixed factor T. A separate consumption-goods sector is
  Cobb-Douglas, C_t = B·(φ_t Z_t)^α·T^(1−α), 0 < α ≤ 1, combining capital with the
  fixed factor. Capital depreciates at rate δ and investment is irreversible.
- **Section II.C — the pure linear (AK) special case.** Setting α = 1 and B = A
  collapses the consumption sector into the same linear technology as the capital
  sector, giving a one-sector economy Y_t = A·Z_t in which "everything is
  reproducible." Rebelo treats this as the benchmark member of the whole class,
  tracing its lineage to Knight (1935, 1944) and Hagen (1942).
- **Section III.A — disaggregating physical and human capital.** Along lines close
  to Lucas (1988, sec. 4) but without Lucas's externality, and with physical capital
  used as an input to human-capital production (Lucas's baseline does not do this).
  Both the output sector and the human-capital sector are Cobb-Douglas and constant
  returns to scale, but neither is restricted to being linear in a single variable.
  This section also treats endogenous labor/leisure choice, which requires a
  restricted class of preferences (Becker/Heckman-style homothetic household
  production functions, or the King-Plosser-Rebelo 1988 utility function) to remain
  compatible with balanced growth.
- **Section III.C — capital goods produced with nonreproducible factors.** Adds a
  second capital good S_t whose production does use the fixed factor T, alongside
  the core good Z_t, which still does not.
- **Section III.D — multiple consumption goods.** Shows the framework extends, at
  the cost of a cross-equation restriction on preference and technology parameters
  for balanced growth to remain optimal.
- **Section IV — relation to other models.** Formally contrasts the class with (i) a
  one-sector Cobb-Douglas model in which capital, labor, and a nonreproducible
  factor are all essential inputs, (ii) the standard neoclassical (Solow-type) model
  with exogenous labor-augmenting technical change, (iii) Jones and Manuelli's
  (1990) convex technology with nonessential nonreproducible factors, and
  (iv) Romer's (1986) increasing-returns/externality model.

There is no original empirical estimation or calibration in the paper; two outside
cross-country correlations (Kormendi and Meguire 1986 on property rights, Barro
1989 on government consumption share) are cited only as illustrative, consistent
evidence. A companion paper (King and Rebelo 1990) is flagged as where calibration
to the "great ratios" is actually carried out. The source PDF contains no figures,
charts, or tables — every result is delivered as a closed-form equation.

### Key findings

- **The general mechanism.** Endogenous, non-accelerating, steady growth is
  compatible with constant-returns-to-scale technology and no externalities,
  provided the economy has a "core" of capital goods producible without any direct
  or indirect use of nonreproducible factors. This is the paper's central structural
  claim and its point of contrast with Romer (1986): increasing returns are
  *sufficient* but not *necessary* for endogenous growth.

- **THE AK GROWTH-RATE FORMULA (the FA2 crux).** In the basic two-sector model
  (Section II), the steady-state growth rate of net income is

  `g_y = α·g_z = α(A − δ − ρ) / [1 − α(1−σ)]`

  where g_z is capital's growth rate, A is the constant (undiminished) marginal
  product of capital in the capital-producing sector, δ is the depreciation rate, ρ
  is the discount rate, α is capital's Cobb-Douglas share in the consumption
  sector, and σ is the CRRA coefficient. (This closed form follows directly from
  the paper's stated equilibrium conditions: r_z = A − δ; r_c = r_z + g_p with
  g_p = (α−1)g_z; g_c = (r_c − ρ)/σ; and g_c = α·g_z.) Setting α = 1 — Rebelo's
  pure one-sector "linear model," Y_t = A·Z_t, in which capital and consumption are
  the same undifferentiated good — this collapses to the canonical AK formula:

  **`g = (A − δ − ρ) / σ = (1/σ)(A − δ − ρ)`**

- **YES, conditionally: the AK model does admit a constant growth rate (hence a
  constant doubling time), for as long as the economy exists.** Rebelo states this
  as an explicit property of the equilibrium: "this economy has no transitional
  dynamics; it expands always at rate g_y." There is no convergence phase and no
  deceleration — the growth rate is the same at t = 0 as at any later date,
  regardless of how large Z has already grown. This holds because A, the marginal
  product of capital in the core sector, is a *constant*, not a *declining*
  function of the capital stock — the model never lets capital accumulation run
  into a fixed, nonreproducible bottleneck. Rebelo's formal proof of the converse
  (Section IV, eq. [18]) makes the mechanism explicit: in an otherwise identical
  one-sector Cobb-Douglas economy where capital, labor, *and* a nonreproducible
  factor are all essential inputs, the marginal product of capital necessarily
  falls toward zero as capital accumulates (since the other two inputs are fixed or
  bounded), so the growth rate of capital converges to −δ even if 100% of output is
  reinvested — "the presence of decreasing returns to the only factor of production
  that can be accumulated... implies that the growth rate of capital has to
  converge to zero." The entire difference between sustained constant growth and
  inevitable deceleration, in this paper, is whether or not the reproducible-capital
  "core" is kept free of nonreproducible inputs.

- **The condition is structural, not parametric.** The qualifying assumption is not
  a particular value of A, σ, or ρ — it is the *shape* of the technology: production
  of the core capital stock must be linear (Section II) or, more generally, linearly
  homogeneous / constant-returns (Section III.A extension) in the reproducible
  factor(s) alone, with no nonreproducible input anywhere in its own production
  chain, direct or indirect. Section III.A shows the core technology need not be
  literally linear — only CRS in physical and human capital jointly — for the same
  no-deceleration property to hold; strict linearity (Section II) is a special case,
  not a requirement. Section III.C further shows a "non-core" capital good may
  freely use nonreproducible factors and still leave perpetual growth intact, so
  long as at least one CRS, nonreproducible-factor-free channel for reproducing
  capital exists somewhere in the economy.

- **The model places no ceiling on the magnitude of the growth rate — any constant
  g, including 41%/yr, is admissible if the primitives support it.** The formula
  g = (A − δ − ρ)/σ is monotonically increasing in A and decreasing in σ and ρ,
  with no upper bound built into the theory. A 24-month constant doubling time
  corresponds to a continuous-time growth rate g = ln(2)/2 ≈ 0.347/yr (equivalently
  a discrete annual rate of about 41.4%/yr, since 1.414² = 2). Applying Rebelo's
  formula: with, say, σ = 1 (log utility) and ρ = 0.03, sustaining g ≈ 0.347/yr
  requires A − δ ≈ 0.377, i.e., a net marginal product of the reproducible-capital
  technology of roughly 38% per year, indefinitely — one to two orders of magnitude
  above net returns to capital observed in any real economy (typically single
  digits). Higher σ (a lower elasticity of intertemporal substitution) raises the
  required A proportionally further. Nothing in the paper's theory rules this out;
  the model is silent on what values of A are physically achievable. **The binding
  constraint on reaching a 41%/yr AK growth path is therefore physical/engineering
  — whether real reproducible capital (the lunar "closure ratio" question: can the
  relevant capital stock actually be reproduced, directly and indirectly, without a
  nonreproducible bottleneck, at the required rate A) — not a theoretical constraint
  of the model itself.** Rebelo's own "core" condition is exactly the formal
  statement of that physical requirement; the paper defines the qualifying
  assumption precisely but never tests, calibrates, or bounds how large A can be in
  practice.

- **Taxes act through A.** With a proportional investment tax τ_p, the arbitrage
  condition (1+τ_p)(1+r_z) = A + (1−δ) + τ_p(1−δ) implies r_z = A/(1+τ_p) − δ, so an
  investment (or income) tax operates on the growth rate exactly like a permanent
  cut in A: g falls one-for-one with the effective marginal product of capital, with
  no offsetting transition-path recovery (unlike the neoclassical model, where tax
  effects on growth are confined to the transition and vanish in steady state,
  since steady-state growth there is fixed by exogenous technical progress). A pure
  consumption tax, by contrast, is growth-neutral — equivalent to a lump-sum tax —
  because it does not distort the intertemporal consume-now-versus-later margin.
  Since B (consumption-sector productivity) and T (the quantity of the
  nonreproducible factor) drop out of the growth-rate formula entirely — they set
  the level of the consumption path, not its growth rate — countries with different
  natural-resource endowments can share the same growth rate while differing
  permanently in income level.

- **Savings rate raises growth (contra Solow).** With an exogenously fixed savings
  rate s (net investment share of net output), the steady-state growth rate is
  g = (A−δ)s / [α + (1−α)s], increasing in s — a result the paper contrasts
  explicitly with Solow (1956), where the savings rate affects only levels, not the
  steady-state growth rate, because that rate is exogenously fixed by technical
  progress.

- **Physical/human capital extension (Section III.A) confirms the mechanism
  survives disaggregation.** With Cobb-Douglas technologies for both output and
  human-capital production, the steady-state real interest rate is
  r = ψ·A₁^ν·A₂^(1−ν)·(1−L)^(1−ν) − δ (ν a geometric-average weight on the two
  technology levels, ψ a positive function of the technology shares), giving
  g = max{[r − ρ]/σ, −δ}. This economy *does* have transitional dynamics (unlike
  the pure linear case) if physical and human capital start off their balanced
  ratio, but the long-run growth rate is still constant, independent of the
  nonreproducible factor, and still increasing in the underlying technology levels
  A₁ and A₂ and in hours worked. Income taxation still lowers growth here, but by
  less than in the one-sector case, because agents can substitute toward the
  human-capital-intensive technology to shelter from the tax on physical capital;
  in the limiting case that recovers Lucas (1988) (physical capital not used to
  produce human capital), the tax effect on growth vanishes entirely, and growth
  and the interest rate depend only on the human-capital production parameters.

- **Migration channel.** Because policy differences translate into permanent
  after-tax wage differences (the model derives an after-tax wage elasticity with
  respect to the tax wedge exceeding one), workers in high-tax, slow-growing
  economies have an incentive to migrate to low-tax, fast-growing ones — a
  Lucas-style prediction obtained without positing any externality.

- **Illustrative empirical correlations cited (not estimated here).** Kormendi and
  Meguire (1986), across 47 postwar countries, find per-capita GDP growth
  positively correlated with Gastil's civil-liberties/property-rights index; Barro
  (1989) finds a negative correlation between growth and government consumption
  share of GDP. Rebelo offers these as consistent with, not as tests of, his model.

### Limitations

- Purely theoretical: no calibration or econometric estimation is performed in this
  paper; the calibration exercise against the "great ratios" is explicitly deferred
  to a companion manuscript (King and Rebelo 1990).
- Rebelo himself flags the pure linear (AK) model as one "usually dismissed as
  inappropriate to think about growth issues" because labor and nonreproducible
  factors play no explicit role in it; he defends it only as a tractable benchmark
  and "a good representative of the class," not as a literal model of any real
  economy.
- Closed-form results depend on restrictive functional-form choices carried
  throughout: Cobb-Douglas production, CRRA (or the special homothetic/King-
  Plosser-Rebelo) preferences, and, in the physical/human-capital model, equal
  depreciation rates for physical and human capital. A footnote states that a
  working-paper appendix (Rebelo 1990) shows the qualitative results survive more
  general neoclassical production functions and unequal depreciation rates, but
  that extension is not reproduced in the published article.
- The "core of capital goods producible without nonreproducible factors" is a
  modeling postulate, not something derived from engineering, geological, or
  physical constraints. The paper never establishes, empirically or physically,
  whether or where such a frictionless core exists in any real production system —
  it is an assumption whose real-world validity the model does not test.
  Correspondingly, the paper supplies no evidence or argument about what
  numerical values of A (the constant marginal product of the core technology) are
  achievable in practice; A is a free parameter throughout.
- No role for population growth (population is held constant throughout) or for
  interaction between the endogenous mechanism and any exogenous technical-change
  process.
- A transversality/finite-utility condition restricts the admissible parameter
  space: ρ > σ(1−α)(A−δ) must hold for lifetime utility to be finite and for the
  household optimum to be well defined; not every (A, σ, ρ, α) combination yields a
  valid equilibrium.
- The analysis is explicitly positive, not normative: the paper "sidesteps the
  question of whether these different policies can be viewed as optimal," and takes
  no position on whether high-A, high-growth configurations are desirable,
  attainable through policy, or physically realizable — only that, algebraically,
  they are not excluded by the theory.
- Investment irreversibility only ever binds as a *lower* bound (growth cannot fall
  below −δ when investment hits zero); the paper does not model any analogous
  *upper*-bound constraint on how fast capital can physically be built, which is
  precisely the constraint the FA2 lunar application needs supplied from outside
  the model.

### Topic mapping

FA2. Serves Sub-Q 3 (reproducible capital without diminishing returns — the formal
home of the self-replication argument).

This is the formal skeleton for "capital that builds more of itself": Section II.C's
one-sector linear model, Y = A·Z, and its growth-rate formula g = (1/σ)(A−δ−ρ),
are the source of the AK growth rate cited throughout FA2 and in Barro and
Sala-i-Martin's textbook treatment of the same class of models. The paper's "core of
capital goods" concept (Sections II and III.C) is the precise formalization of the
condition under which a broad, reproducible capital stock avoids diminishing
returns — directly relevant to the thesis's claim that lunar industrial capital
must reproduce itself without a nonreproducible bottleneck (energy, raw materials,
labor equivalent). Section IV's equation (18), the one-sector model with an
essential nonreproducible factor, is the formal mirror image: it proves why
ordinary (Solow-type) capital accumulation *must* decelerate, which is the wall
FA2's Solow (1956) entry names and this paper's "core" condition is built to evade.
The taxation results (Section II.A, III.A) and the savings-rate result (Section
II.B) show growth-rate (not just level) sensitivity to policy in this model class,
relevant wherever FA2 or later focus areas consider institutional/policy leverage
on a lunar economy's effective A or savings rate. The paper is silent on the
magnitude of A itself and on whether any physical production system can sustain a
nonreproducible-factor-free "core" at industrial scale — that question is explicitly
outside its scope and is where FA2 must hand off to the physical/engineering
literature (FA6) on self-replicating systems.
