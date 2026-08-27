# Affordable, Rapid Bootstrapping of the Space Industry and Solar System Civilization

## Citation

Metzger, P. T., Muscatello, A., Mueller, R. P., & Mantovani, J. (2013). Affordable, rapid
bootstrapping of the space industry and solar system civilization. *Journal of Aerospace
Engineering, 26*(1), 18–29. https://doi.org/10.1061/(ASCE)AS.1943-5525.0000236

Publisher URL: https://ascelibrary.org/doi/10.1061/%28ASCE%29AS.1943-5525.0000236

## Abstract

Spreadsheet-based systems-engineering model of a robotic lunar industry that starts from a
small, teleoperated "subreplicating" hardware seed and evolves generation by generation
toward full material and electronic self-sufficiency ("full closure"). Reports that the
process can be seeded with as little as 12 t landed on the Moon (reduced manufacturing-rate
case) or 41 t (maximum manufacturing-rate case) over roughly 20 years, reaching 156 t of
industrial assets with 60 humanoid robots in the low case or as much as 40,000 t with
100,000 humanoid robots in the high case, then continuing to grow exponentially once
Earth-independent. Presents a six-generation (plus an open-ended seventh) mass-, power-,
and labor-balance model with baseline hardware masses, production rates, and electronics
import fractions per generation, together with sensitivity analysis of duty cycle, printer
throughput, and robonaut productivity, and order-of-magnitude launch-cost estimates.

## Summary

### Background and objective

The authors, all NASA Kennedy Space Center researchers, revisit the question of whether a
self-sustaining space industry can be bootstrapped affordably, in light of two
"game-changing" developments since earlier studies: advances in robotics and in additive
manufacturing (3D printing), plus the discovery of lunar polar ice as a source of hydrogen,
nitrogen, and carbon. They frame the paper against two earlier positions: O'Neill (1989),
who argued an orbiting space colony needed a human population above 10,000 to be
economical, and Zubrin (1999), who argued human-tended lunar or asteroid-belt
manufacturing colonies were impractical because of the energy cost of growing food for
humans and the local scarcity of hydrogen, nitrogen, and carbon. Both of those analyses
predated mature robotics and did not model robotic labor in place of human labor. The paper
also revisits the 1980 NASA Ames summer study (Freitas and Gilbreath 1980), which
established the theoretical feasibility of self-replicating machines and proposed a
100-t-class "straw-man" self-replicator (12 t paving robots, 4.4 t mining robots, 4 t
mobile assembly/repair robots, among other components), a mass figure the authors treat as
a benchmark for comparison with their own results. The stated objective is to "roughly
assess how much mass and time are needed on the Moon to reach the ignition point of a
self-sustaining and expanding industry" and to show that the launch costs for that mass can
be quite low; the authors explicitly do not assess the cost of developing the underlying
technologies or of teleoperating them until autonomy is achieved, and characterize the
assessment as rough, intended to organize thinking and prompt further, more detailed study
rather than as a finished engineering design. The manuscript was submitted November 15,
2011, approved March 30, 2012, and published online April 2, 2012, in Vol. 26, No. 1 of the
journal (January 2013 issue).

Rather than pursuing a fully self-contained "self-replicator" (a complete, colocated set of
hardware that reproduces an identical complete set, as in the 1980 Ames study), the authors
adopt what they describe as a strategy not previously discussed in the literature: begin
with a simpler, deliberately sub-replicating system built with high-tech Earth-manufactured
parts, and evolve it across generations toward increasing self-replication capability and
increasing sophistication, without necessarily ever becoming a strict self-replicator even
after reaching full closure (because each generation can build something more advanced than
itself). They also explicitly reject a networked, non-colocated "self-replicator" framing in
favor of describing the target system as an evolving, distributed industrial ecology
analogous to Earth's biosphere, which the paper later terms a "robotosphere."

### Methods and scope

The core method is a spreadsheet model of mass balance, energy balance, asset quantities,
and production times, tracking hardware through six defined generations (1.0, 2.0, 2.5,
3.0, 4.0, 5.0, 6.0) plus a notional open-ended "X.0" generation, each characterized in
Table 1 by human/robotic interaction mode, Moravec-scale artificial-intelligence level
(insect-, lizard-, mouse-, monkey-, human-like), scale of industry, materials manufactured,
and source of electronics (ranging from "import fully integrated machines" at Gen. 1.0 to
"make chips locally" by Gen. 5.0 and "makes everything locally" at Gen. 6.0). Generation 1.0
baseline hardware (Table 2) is specified asset-by-asset: power distribution/backup,
swarming excavators (five units), two chemical plants (gases; solids), a metals/ceramics
refinery, a solar-cell manufacturer, two classes of 3D printers (small parts, large parts,
four units each), and three robonaut assemblers, each with mass (with and without
electronics), power draw, and feedstock/product throughput. Subsequent generations are
modeled as extrapolations from Gen. 1.0 using a "crudeness factor" — a multiplier on mass
reflecting the poorer mechanical properties of early in-situ ("mongrel") alloys — set to 2.5
for Gen. 2.0 and 2.5, 1.5 for Gen. 3.0, and 1.0 (parity with Earth-grade materials) for
Gen. 4.0 onward. Generations are spaced at 2-year intervals in the baseline runs, and the
model is recursive (each generation's output feeds the next generation's inputs and is
iterated to consistency). Sensitivity analysis is run by varying, one at a time: solar
power duty cycle per lunation (70% vs. 40%, representing polar vs. more equatorial siting);
additive-manufacturing printer throughput (0.1–0.15 kg/h, cited as the current commercial
range, up to a baseline assumption of 0.4–0.5 kg/h and a discussed target of 1 kg/h via
casting); and robonaut productivity, parameterized as "robonaut weeks per asset" (RWPA),
varied by a factor of 3 up or down from a nominal schedule of 4, 4, 6, 7, 7, 8 RWPA across
the six generations. The model also computes required launch mass to the lunar surface per
generation, cumulative asset mass and robonaut count, and power supply vs. demand. Separate
back-of-envelope calculations address the propellant mass needed to export a seed fleet to
the asteroid main belt (delta-v to Ceres of 9.5 km/s, hydrogen/oxygen specific impulse
~455 s) and Earth-to-low-Earth-orbit (LEO) launch cost, using a stated ~4:1 Earth-to-LEO
gear ratio for landing mass near the lunar poles. The paper does not report an independent
validation of the model against empirical data (no such system has been built) and states
plainly that "the details of the modeling results are not as important as the general
picture it paints."

### Key findings

**Closure and the electronics/"vitamins" fraction.** The paper defines closure as "the
ability to replicate all aspects of the system in space so that nothing further is required
from Earth to build replicas," and states that "nearly full closure is vastly easier to
achieve than full closure," because manufacturing electronics and computer chips requires
heavy, high-tech equipment that would be expensive to launch from Earth and would consume
much of the industry's resources during early replication — while incomplete closure causes
launch mass to grow very high later as the industry expands exponentially. The model's
explicit, generation-by-generation closure metric is the target percentage of electronics
manufactured on the Moon rather than imported: **90% by Gen. 3.0, 95% by Gen. 4.0, 99% by
Gen. 5.0, and 100% by Gen. 6.0**. Table 1 elaborates the qualitative electronics-sourcing
path underlying these percentages: Gen. 1.0 imports fully integrated machines; Gen. 2.0
imports electronics "boxes"; Gen. 2.5 fabricates crude components locally while still
importing boxes; Gen. 3.0 locally builds PC cards, chassis, and simple components but still
imports chips; Gen. 4.0 builds large assets such as lithography machines; Gen. 5.0 makes
chips locally and exports robots to the asteroid belt; Gen. 6.0 "makes everything locally,
increasing sophistication." The text states the model "follows the hardware through six
generations of increasing complexity until full independence from the terrestrial economy
is achieved." Non-electronics closure (structural materials, chemicals, fluids) is treated
as reaching effective local production earlier: by Gen. 3.0 robonaut structural components
begin to be made on the Moon (cameras, computers, motors, and sensors continue to be
imported until robonauts are "eventually made completely on the Moon"). The paper reports
no single overall percentage figure for total system mass closure (e.g., no stated "X% of
system mass is imported" at a given generation); the only closure percentages given in the
text are the electronics-fraction targets above. The model shows what happens under
incomplete closure as a sensitivity case: if no electronics, or no computer chips
specifically, are manufactured on the Moon, the corresponding imported mass "grow[s]
exponentially" over time (shown in Fig. 4 but not reduced to a single number in text),
which the authors present as demonstrating "the need to achieve full closure."

**Doubling time / growth rate.** The paper states the underlying growth mechanism as: "each
basic set of assets creates two or fewer new sets per year" (plus additional robonauts and
set-asides such as facility and spacecraft construction in later generations), under the
baseline assumptions of a 70% solar duty cycle and generations spaced at 2-year intervals;
this is offered as the reason the resulting exponential growth curves (Figs. 2–3) are "not
too optimistic." A second, sharper doubling-type figure is given for the printer-limited
replication rate: for a 300-kg large 3D printer operating at 0.1 kg/h for 70% of a lunation,
the "specific reproduction" time (asset mass divided by production rate) is about 3 months;
applying Gen. 1.0's crudeness factor of 2.5, "it will take 7.5 months for Gen. 1.0 to make
Gen. 2.0." The paper states printer mass reduction gives only limited benefit to this
timescale, and that acceptably short (few-month) reproduction times require raising
manufacturing throughput by "a factor of 4 or greater" above the low end of the commercial
range. For the wider bootstrapping process, the model's default cadence is a fixed 2-year
generation period (not a free doubling time solved by the model), with an explicit note
that this period can instead be stretched by "another 6–8 years" to keep launch mass at or
below nominal values regardless of robonaut productivity, since production can then proceed
"at a leisurely pace." Beyond the six modeled generations, the paper extrapolates an energy
growth rate of a factor of 3 per year (see energy figures below) as an illustrative,
unmodeled continuation of exponential growth. Duty-cycle sensitivity is reported
qualitatively as strongly nonlinear: "reducing [the duty cycle] by less than a factor of 2
decreases the net growth by more than an order of magnitude." Robonaut-productivity
sensitivity is also reported as strongly nonlinear via its effect on launch mass (see below)
rather than as a directly stated change in doubling time.

**Seed mass and total launched mass.** Two paired headline scenarios: (1) reduced
manufacturing-rate case — total of 12 t launched to the Moon over the bootstrapping process,
yielding a final industry of 156 t of assets with 60 humanoid-equivalent robots, "but the
scale of industry is two orders of magnitude smaller" than case (2); (2) baseline
maximum-manufacturing-rate case — total of 41 t launched to the Moon, yielding a final
industry as high as 40,000 t with as many as 100,000 humanoid robots. The abstract and
conclusion both cite "12–41 t of hardware landed on the Moon" as the total initiating
investment bound. Separately, Table 2 gives Gen. 1.0's own baseline hardware set (the first
launch) at approximately 7.7 t total, drawing 64.36 kW of power, processing 20 kg
regolith/h of feedstock, and yielding 4 kg parts/h of product output. The paper flags that
the industry's total asset mass tends to plateau near 100 t before full closure is reached
("it might be significant... that the mass plateau hovers around 100 t"), a figure the
authors note matches the single-seed-replicator mass estimated in the 1980 NASA Ames study
(Freitas and Gilbreath), interpreted as independent agreement on the correct order of
magnitude for ignition, "while being just shy of full closure." The plateau is described as
useful because it delays exponential growth (and thus launch cost) until after full closure
is achieved.

**Bootstrapping stages and what each generation adds.** Generation 1.0 (teleoperated,
insect-like AI): imported, small-scale hardware of limited diversity; produces gases,
water, crude alloys, ceramics, and solar cells; imports fully integrated electronics.
Generation 2.0 (teleoperated, lizard-like AI): crude, inefficient fabrication with greater
throughput than 1.0; same material categories; imports electronics "boxes." Generation 2.5
(teleoperated, lizard-like AI; additive to 2.0 rather than a replacement): diversifies into
plastics, rubbers, and some chemicals, especially volatiles and metals processes; fabricates
crude components while still importing electronics boxes. Generation 3.0 (teleoperated with
autonomy experiments, lizard-like AI): larger, more complex processing plants; diversifies
chemicals and simple fabrics/polymers; locally builds PC cards, chassis, and simple
components but imports chips; also fabricates 80 t of construction equipment (used to build
Gen. 4.0's dust-free electronics-manufacturing buildings) and begins making robonaut
structural components locally. Generation 4.0 (closely supervised autonomy with some
teleoperation, mouse-like AI): large plants for chemicals, fabrics, metals; sandwiched and
other advanced material processes; locally builds large assets such as lithography
machines; sets aside 10 t of metals as building reinforcement. Generation 5.0 (loosely
supervised autonomy, mouse-like AI): laboratories and factories for electronics and
robotics, plus shipyards to support a main-belt mission; makes computer chips locally and
makes robots in situ for export; stockpiles materials for a six-spacecraft fleet (each
20 t dry mass plus 12 t payload, 120 t total materials set aside) to transport 72 t of
industrial equipment and robonauts as the seed for asteroid main-belt industry, requiring
about 1,400 t of propellant (2.8% of the fluids produced across the six modeled
generations). Generation 6.0 (near-full autonomy, monkey-like AI): large-scale,
self-supporting industry exporting industry to the asteroid main belt; makes all necessary
materials with increasing sophistication; makes everything locally including electronics.
An open-ended Generation "X.0" (autonomous robotics, human-like AI) is described only
qualitatively: robust exports/imports through solar-system zones, material factories
specialized by zone, and electronics factories in various locations — not quantified in the
model.

**Robotic AI timeline (Moravec scale).** Using Moravec's (1999, 2003) framework, the paper
projects: lizard-level robotics by 2020, mouse-level by 2030, monkey-level by 2040, and
human-level by 2050, extrapolated from commercial microprocessor speed trends reaching
Moravec's human-equivalent processing threshold "by the year 2023." Only mouse-level
autonomy is stated as needed to complete lunar bootstrapping; robotics sent on to the
asteroid belt "may be at monkey level or higher" depending on how fast the strategy is
executed.

**Energy/power.** Generation 1.0 power is a single Earth-launched power station (2,000 kg,
included in Table 2); from Gen. 2.0 onward, power comes from Moon-fabricated solar cells,
augmented with thermal power from solar concentrators, deliberately sized (per Fig. 5) to
provide "vastly excess power capacity" relative to demand at every generation — a
conservative choice the authors note also buffers against solar-cell fabrication being less
efficient than predicted, and against unmodeled degradation from radiation and
micrometeoroid damage. At the aggregate scale: total U.S. energy use is cited as 10^20 J/yr
(Department of Energy 2010 data, covering fossil, nuclear, and renewable sources); Fig. 3
shows Gen. 5.0, at 70% duty cycle, using 10^15 J/yr. Extrapolating industry-wide energy
growth at a factor of 3 per year beyond that point, the paper states the industry would
exceed U.S. annual energy use within 11 more years, exceed it by a factor of a million after
12 further years, and exceed it by a factor of a billion after another decade beyond that.

**Plant mass productivity.** The paper does not report a generalized figure of kg output
per year per kg of installed plant across the whole system. The closest quantified analog is
the printer-specific "specific reproduction" ratio (asset mass ÷ production rate): for the
baseline 0.4 kg/h printer speed, 70% duty cycle, and 2-year generation length, maximum
generation production is stated as "about 6 t." Table 2 gives generation-1.0, asset-level
input/output rates directly (e.g., metals refinery: 20 kg/h regolith feedstock in, 3.15 kg/h
product out, at 1,019 kg mass minus electronics and 19 kg electronics, 10.00 kW; full
per-asset table reproduced with quantity, mass, power, and throughput for all nine
Gen. 1.0 asset types), but the paper does not itself convert these into an annualized
output-per-installed-mass ratio.

**Launch-cost / affordability figures (the paper's headline economic claim).** Typical LEO
launch cost is cited as "on the order of US$10,000/kg" (FAA 2009; Perez 2011). Using a
stated ~4:1 Earth-to-LEO gear ratio for material landed near the lunar poles (Rapp 2010),
the paper computes that a 100-t seed replicator (the 1980 Ames-study benchmark) would
require about $4 billion in LEO launch costs, whereas the evolving approach's reduced-case
12-t lunar-surface mass would require only about $0.5 billion in LEO launch costs. The
paper further notes SpaceX's then-expected Falcon 9 Heavy launch cost of US$1,500–$2,400/kg
to LEO, which it states "brings the LEO launch costs even lower to about 2–3% of the
original figure." The abstract's and conclusion's overall affordability claim is that "all
of the benefits of its billion-fold industrial power will be at humanity's service for no
cost beyond the initial investment of 12–41 t of hardware landed on the Moon..., plus the
cost of a modest robotics and manufacturing development program... and then the labor to
teleoperate the systems until they become autonomous." The paper explicitly excludes
technology-development cost and Earth-to-lunar-surface transport cost (as opposed to
Earth-to-LEO cost) from its dollar estimates, describing the LEO-only figures as an
incomplete accounting.

### Limitations

The authors repeatedly characterize the assessment as deliberately rough and preliminary:
it is intended "mainly to organize thinking on this topic, and to initiate discussion and
further study," and a "full study will be very complex and require the involvement of a
much larger group of contributors." They state directly that "the details of the modeling
results are not as important as the general picture it paints." The model excludes, by the
authors' own statement, the cost of developing the underlying technologies and the cost of
teleoperating the equipment until autonomy is achieved — only launch mass and (partially)
LEO launch cost are estimated, and even the launch-cost figures cover Earth-to-LEO only, not
LEO/Earth-to-lunar-surface transport, which the paper states is difficult to estimate
because "that capability has never existed commercially." Several conservative simplifying
choices are flagged as such by the authors: economies of scale in larger chemical plants
are explicitly ignored even though Gen. 3.0 and later generations are stated to gain from
them in practice; hardware assets are conservatively assumed retired at the end of each
generation (except solar cells and robonauts) even though this likely overstates required
replication effort; excavator, solar-cell, and fluids-chemical-plant quantities are set
"much higher than needed" rather than optimized; and power system sizing deliberately
provides large excess capacity. Solar-cell degradation from radiation and micrometeoroid
impact "has not been modeled explicitly." The model does not incorporate nanotechnology,
which the authors note explicitly ("the current study ignores the possible effects of
nanotechnology"). The "networked ecology" character of real industrial/biological systems —
specialized production sites trading with each other rather than colocated replication sets
— is described narratively as the more realistic and efficient topology but is stated not to
be represented in the quantitative modeling ("this aspect of networked complexity is not
visible in the modeling presented here"). The robotic-AI capability timeline (lizard level
by 2020, mouse by 2030, monkey by 2040, human by 2050) is presented as an extrapolation from
Moravec's predictions and current microprocessor trends, which the authors call "a very
optimistic picture," contingent on continued progress in robotic software and artificial
intelligence. The authors state the modeling "looks very optimistic as parameters are
varied to study their relationships," attributing this partly to the model's deliberate
conservatism in several of the areas above but not resolving whether the net effect of all
simplifications over- or under-states real-world difficulty. Business-model and
public/private cost-sharing strategy are explicitly left to future work. No empirical
validation against a built system is possible or claimed, since no such bootstrapping
industry has been constructed. Several supporting numeric claims in the Discussion section
(e.g., the energy-growth extrapolation beyond Gen. 5.0, and the "millions of times" and
"billion-fold" future industrial-capacity claims) are extensions beyond the six explicitly
modeled generations and are presented as illustrative order-of-magnitude reasoning rather
than as outputs of the generation-by-generation spreadsheet model itself.

### Topic mapping

FA6. Source list entry 2. Sub-Q 3, 4. The source addresses incremental, evolutionary
bootstrapping of a self-expanding robotic space industry from a small teleoperated hardware
seed, as distinct from a single fully self-contained self-replicating machine: it defines
and quantifies "closure" (the electronics-fraction targets of 90/95/99/100% imported-to-
local across Gen. 3.0–6.0, and the qualitative materials/electronics sourcing path across
seven defined generations in Table 1); reports seed and total launched mass figures (12 t
and 41 t total-launched cases, 7.7 t for the first hardware generation alone, and a ~100-t
pre-closure mass plateau); gives growth-rate and replication-time figures (two-or-fewer
new sets per basic set per year, a 2-year baseline generation period, and printer-limited
specific-reproduction times of about 3–7.5 months); and reports Earth-to-LEO launch-cost
estimates and sensitivity analyses across solar duty cycle, printer throughput, and
robonaut productivity. It also touches FA5 (physical economy) through its explicit,
generation-by-generation mass, power, and throughput balance model (Table 2 baseline
hardware masses and rates; Fig. 5 power supply/demand; the 10^20 J/yr U.S. energy-use
comparison and 10^15 J/yr, 3×/year industry energy-growth extrapolation).
