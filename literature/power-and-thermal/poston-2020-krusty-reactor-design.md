# KRUSTY Reactor Design: Fuel, Shielding, and Reactivity Design of the Kilopower Prototype

## Citation

Poston, D. I., Gibson, M. A., Godfroy, T., & McClure, P. R. (2020). KRUSTY reactor design.
Nuclear Technology, 206(sup1), S13–S30. https://doi.org/10.1080/00295450.2020.1725382

Publisher URL: https://www.tandfonline.com/doi/full/10.1080/00295450.2020.1725382

Identity note: the printed masthead, page header, and byline all give **David I. Poston
(Los Alamos National Laboratory)** as first author, with Marc A. Gibson (NASA Glenn
Research Center) as second author, Thomas Godfroy (NASA Marshall Spaceflight Center) as
third, and Patrick R. McClure (LANL) as fourth. The title as printed is "KRUSTY Reactor
Design," not a "fission surface power" title. Received December 18, 2019; accepted
January 31, 2020; published online June 4, 2020. Open access under a Creative Commons
BY-NC-ND 4.0 license, copyright 2020 The Author(s), published with license by Taylor &
Francis Group, LLC. The DOI above is printed on both the cover page and the article's
own running header, so it is confirmed from the document and resolves the citation-ledger
gap for this item. This is one of eight papers in a Nuclear Technology special issue
(volume 206, supplement 1) documenting the KRUSTY project through its March 2018 test.

## Abstract

Design paper for the KRUSTY (Kilowatt Reactor Using Stirling TechnologY) reactor, the
nuclear-powered prototype of a 1-kWe, highly-enriched-uranium (HEU) Kilopower fission
surface/space power reactor tested at the Nevada National Security Site in March 2018.
Covers the design philosophy (simplicity as the controlling design driver), the fuel,
heat-pipe, reflector, control-rod, and shield component specifications as built, and the
neutronic/thermal design-calculation results (criticality tables, reactivity-feedback
coefficients, power-deposition fractions) generated with the MRPLOW/MCNP/FRINK code
chain. Also lists the eleven prioritized design goals against which the test was later
judged. Authored by the reactor-design lead (Poston, LANL) with co-authors from the
power-conversion (Gibson, NASA Glenn), integration (Godfroy, NASA Marshall), and
reactor-physics (McClure, LANL) teams. Does not report quantitative test-run results
(power achieved, run duration, measured-versus-predicted performance), Stirling
conversion efficiency, hot/cold-end temperatures, radiator mass or area, or a system-level
specific-power (W/kg) figure; the paper's own reference list attributes those to
companion papers in the same special issue.

## Summary

### Background and objective

The paper opens by framing U.S. space fission power development since the 1960s SNAP
program as a history of failure attributed to programs attempting too large a first
step. It presents the 2012 DUFF (Demonstration Using Flattop Fissions) experiment as the
deliberately small precursor step, executed for under $1 million in under six months
using an existing critical assembly, a simple heat pipe, and off-the-shelf Stirling
converters. KRUSTY is presented as the next step: a prototypic nuclear-powered test of a
5-kW(thermal) Kilopower reactor built to be as flight-prototypic as possible within a
3-year, under-$20-million program. Kilopower reactor concepts generally are described as
intended for 1- to 10-kW(electric) space and surface power, with "a clear evolution to
substantially higher power systems." The paper's stated objective is to document the
KRUSTY reactor's design together with the philosophy, goals, and engineering decisions
that led to the March 2018 successful nuclear-powered operation — the first
nuclear-powered operation of a genuinely new U.S. reactor concept in over 40 years.
Companion papers in the same issue are explicitly assigned the power-conversion system,
regulatory approvals, and cold-critical, warm-critical, and full nuclear-system test
results; this paper's scope is bounded to reactor design.

### Methods and scope

Design and analysis were performed with an in-house FORTRAN code, MRPLOW, which drives
the design process from an input file of component specifications, materials,
dimensions, design limits, temperature, power, and lifetime targets, generating a
three-dimensional adaptive-geometry design, steady-state component temperatures, and
mass/nuclear-parameter estimates. MRPLOW generates input decks for the MCNP Monte Carlo
transport code (criticality, reactivity coefficients, control worths, shielding/dose,
kinetics parameters), for MONTEBURNS (burnup reactivity and isotopics), and for FRINK
(Fission Reactor Integrated Nuclear Kinetics), a coarse-mesh finite-difference code used
for steady-state and transient coupled thermal-neutronic performance, including warm
criticals and full-power-run scenarios such as simulated failed heat pipes or converters.
ANSYS was used selectively for higher-fidelity thermal cross-checks against FRINK.
Nuclear data used ENDF7.1 cross-section evaluations at 50 K temperature intervals. An
MCNP model of the test facility (NCERC/DAF at the Nevada National Security Site) was
built to compute room and hallway dose fields. The paper states there was no formal,
project-wide quality-assurance directive; QA level was set component-by-component by
facility safety-significance rules, with technical credibility built through frequent
informal updates and by successfully predicting intermediate test results rather than
attempting full pre-test code verification.

### Key findings

**Specific power (W/kg).** Not reported in this paper. No single system mass or reactor
mass figure is given against which a system-level or reactor-level W/kg (or We/kg) value
could be read directly; the paper reports component masses individually (below) rather
than an integrated system mass-power ratio, and it does not state a derived specific-power
figure of its own.

**Power levels and configuration.** Kilopower systems generally: 1 to 10 kW(electric),
with stated evolution toward higher-power systems. KRUSTY specifically: a prototype of a
1-kW(electric) Kilopower system, built and operated as a 5-kW(thermal) reactor. A power
level of approximately 5 kW(thermal) was chosen to be consistent with prior Flattop and
DUFF operations while being high enough to be relevant to a useful flight system. Of the
8 total heat pipes (1-for-1 heat-pipe-to-Stirling coupling), only 2 were connected to
actual Stirling converters producing electricity; the other 6 used dummy thermal
simulators to mimic converter heat removal — i.e., electrical output during the design
described here was a partial, 2-of-8 subset of the reactor's thermal capacity. The paper
states this "electrical capacity/efficiency goal was partially met."

**Reactor, shield, and component masses.** Total KRUSTY fuel mass: 32.20 kg (three cast
core sections measured after machining at 10.741 kg, 10.741 kg, and 10.718 kg), of which
27.7 kg is 235U. The radial shield — solid Type 304 stainless steel (SS304) — was "by far
the heaviest KRUSTY component," at approximately 3500 kg; radial shield quarters measured
63.1 cm tall with a 101.9-cm outer diameter and 41.0-cm inner diameter. No total assembled
reactor or system mass, radiator mass, or radiator area is given anywhere in the paper.
Shield material selection is discussed as a mass/cost trade: a hydrogenous shield
(polyethylene) was ruled out on temperature limit (~100°C); lithium hydride (LiH) was
rejected for this ground test on programmatic cost/schedule risk despite being "generally
preferred (for lower mass)" for space applications if it can meet cost and performance
requirements; borated stainless steel was high cost with limited availability; a layered
SS316/B4C shield was judged attractive but too costly/complex for the radial shield, so a
solid SS304 design — heavier but simpler and cheaper — was used instead, explicitly
because the test article (not a flight system) could accommodate the extra mass.

**Conversion system.** No Stirling efficiency figure, and no hot-end or cold-end
temperature values, are given in this paper. The only thermal figures stated are for the
fuel/core: fuel operating temperature above 800°C was demonstrated (a stated design
goal), and the design-basis maximum fuel temperature limit for design-basis conditions
and transients was approximately 850°C.

**Fuel.** Highly enriched uranium-molybdenum alloy, nominal U-8Mo, with an as-delivered
average weight fraction of 7.65% Mo (procurement tolerance for prototyping depleted-
uranium castings was set loosely at 7.5% to 8.5% Mo; the flight-relevant HEU cores were
then held to a tighter tolerance around the same 7.65% value). Uranium isotopics, reported
as relatively uniform across all measured samples: 1.0% 234U, 93.1% 235U, 0.5% 236U, and
5.4% 238U (i.e., ~93.1% 235U enrichment). Radiological measurements found plutonium below
10 parts per billion and approximately 1 ppm 237Np. Impurities: approximately 300 ppm
(mostly Si, Fe, Ni, excluding carbon), tungsten at 20 ppm, highly neutron-absorbing metals
(Dy, Eu, Gd, Sm) at approximately 1 ppm combined, boron at approximately 1 ppm. Core
dimensions: 11-cm outer diameter, a 4-cm central hole (for a 10-kW(electric) heater during
non-nuclear testing or a B4C rod stack during nuclear testing), and a 25-cm total core
length cast in three parts. Average fuel density used in modeling was 17.34 g/cm3
(as-specified, zero-tolerance assumption); measurements suggested the true average density
was somewhat lower but "probably no lower than 17.25 g/cm3," and the fuel is characterized
as certainly greater than 99% of theoretical density. One of the three cast pieces (the
lowest-mass one) showed measurably different chemistry at its top end (7.83% Mo, 740 ppm C)
versus its middle/bottom and the other two castings (~7.6% Mo, ~300–500 ppm C), which was
tracked for its effect on local neutronic worth but not treated as an overall specification
failure.

**Reactivity and control approach.** Control is via a single central absorber
(B4C)/reflector-height mechanism rather than distributed control elements: the core is
solid-state with no moving fuel, and the only moving part in a flight-representative
Kilopower reactor is the control rod. For KRUSTY specifically, reactivity was inserted by
raising an external "platen" (via the COMET critical-assembly machine) so that a BeO
neutron-reflector stack surrounded the core; this used the existing regulatory framework
rather than requiring qualification of a new movable control-rod mechanism, and the paper
states reactor kinetics during startup are essentially equivalent whether reactivity is
inserted by central-rod withdrawal or by BeO reflector insertion. Full platen travel was
88 cm; reactivity did not rise significantly until the platen was within about 20 cm of
fully closed, and criticality was reached only within a few centimeters of full closure.
Stated reactivity design requirements included: warm k_eff > 1.0; cold k_eff < 0.993 for a
1.5-in. COMET scram; k_eff much less than 1.0 for all credible fuel/assembly handling
configurations. Table I in the source reports k_eff for hypothetical accident
configurations (bare/water/sand/wet-sand immersion), including for the KRUSTY 3-section
fuel stack: bare 0.5886–0.5846 depending on stacking geometry, water-immersed 0.9591–0.9806,
sand-immersed 0.8210–0.8311, wet-sand-immersed 0.9346–0.9446 (ranges span the three
stacking geometries reported: vertical column, triangle pitch, pyramid stack). Beta-effective
was calculated by MCNP as 0.00688. Reactivity feedback is dominated by fuel thermal
expansion: fuel heating causes approximately 95% of net reactor feedback, of which
approximately 90% is due to thermal expansion and approximately 10% to fuel cross-section
changes. Per-component temperature defects and reactivity-temperature coefficients (Table
II) at operating temperature: fuel, 1093 K, −148.1 cents, −0.1844 cents/K; heat pipes, 1073
K, −1.2 cents, −0.0015 cents/K; ring clamp, 1068 K, −2.1 cents, −0.0027 cents/K; axial
reflector, 473 K, −0.1 cents, −0.0005 cents/K; vacuum can, 393 K, +2.4 cents, +0.0233
cents/K; radial reflector, 343 K, +3.1 cents, +0.0585 cents/K; platen and shielding, 323 K,
−0.4 cents, −0.0121 cents/K. The central B4C control/start-up rod used 96%-enriched 10B4C
pucks with an average density of 2.15 g/cm3 (approximately 90% of theoretical density).
Power deposition: average power density in the fuel was approximately 2 W/cm3 at a reactor
power of 4 kW(thermal); the overall axial peaking factor was 1.15; 93.703% of total
recovered fission power was deposited directly in the fuel (Table III), with the radial
shield (2.834%) and radial reflector BeO (1.603%) as the next-largest sinks.

**KRUSTY test results.** This design paper reports only a qualitative outcome: "In March
of 2018, KRUSTY did indeed operate successfully and achieve all of the primary goals laid
out in this paper." No test power level, run duration, or measured-versus-predicted
performance numbers are stated in this document. Per the paper's own reference list, those
results are reported in a separate companion paper in the same special issue, "Results of
the KRUSTY Nuclear System Test" (Poston et al., Nuclear Technology, 206, S89, 2020,
https://doi.org/10.1080/00295450.2020.1730673) — cited here only as the source's own
pointer, not independently verified for this summary. This design paper does, however,
state which of its eleven prioritized design goals were met, partially met, or not
intended to be demonstrated: "Succeed" (met); dynamic reactor operation (met, except for
gravity effects on the heat pipes, which the authors judge will not noticeably affect
reactor dynamics once heat-pipe temperature is above its performance-limit margin);
full-power operation (thermal goal of 5 kW(thermal) met; electrical capacity/efficiency
goal only partially met, given the 2-of-8 converter/simulator split); flight-representative
materials (met); full temperature, fuel >800°C (met); vacuum operation (met, except the
radial reflector sat outside the vacuum boundary); highly reflected beryllium neutronics
(met); flightlike core geometry (met); reactor control effectiveness of the central B4C
rod (met, though only the rod's neutronic worth was tested, not a flight-representative
drive mechanism); radial reflector temperature feedback (only partially met, because the
test window was limited to avoid facility activation, leaving insufficient time to heat
the radial reflector to a representative temperature); shield materials and effectiveness
(explicitly "never intended to be important" for this Earth-based test, used only to
benchmark dose codes).

**Design life, degradation, and operating limits.** At low power — the paper cites
approximately 10 kW(thermal) — burnup reactivity is stated to be small enough that a
10-plus-year reactor lifetime could be achieved with no control-rod movement at all after
startup. Higher-power systems are stated to require only occasional (monthly or annual)
control movement to maintain reactor temperature. At all power levels, the paper states
Kilopower systems can survive worst-case transients (e.g., loss of heat removal by the
power conversion system) without any control action. Fuel operating-temperature limit:
approximately 850°C for design-basis conditions and transients (design-basis maximum);
greater than 800°C was demonstrated as the operating goal.

**TRL.** No technology readiness level is stated numerically anywhere in this paper.

**Cost.** KRUSTY program: 3-year duration, under $20 million total. DUFF precursor
experiment: under $1 million, completed in under 6 months.

**Solar-plus-storage comparison.** Not present in this paper; no lunar-night survival
comparison to solar-plus-energy-storage architectures is made.

### Limitations

The paper explicitly documents several conditions under which this design and test are
not directly flight-representative: the radial neutron reflector was located outside the
vacuum boundary during the test (unlike a flight configuration), though the authors argue
its slow thermal time constant decouples it from acute reactor dynamics; the radial shield
material (solid SS304) was chosen for cost, procurement simplicity, and the test
facility's mass/size tolerance, not for flight-representative mass — the authors state a
lighter shield (e.g., LiH) could have been used for an actual flight system; delivered B4C
axial shield plates came in at only approximately 75% of theoretical density against a 90%
TD specification, accepted without holdup because plate thickness and boron's large
thermal cross-section were judged to compensate for thermal-neutron shielding (fast
neutron and gamma shielding were acknowledged to be reduced); only 2 of 8 heat pipes were
coupled to actual Stirling converters, with the remaining 6 using non-electricity-producing
thermal simulators, so the electrical capacity/efficiency goal is stated as only partially
met; the radial-reflector-temperature-feedback demonstration goal was only partially met
because of a facility-driven time limit intended to avoid activation; fuel density was
never directly volumetrically measured (only calculated from as-specified dimensions, with
actual density inferred to be at or slightly below that value); one of three fuel castings
showed compositional variation at one end, tracked for potential effect on local neutronic
worth; there was no formal, unified project quality-assurance program, with QA rigor set
piecemeal by facility safety-significance rules rather than a top-down plan; and the paper
states some of its own detailed design calculations will be benchmarked against actual test
results "in a future paper," i.e., outside this document's scope. The paper is also
explicit that it does not cover power-conversion-system design, regulatory approvals, or
cold-critical, warm-critical, or full-system nuclear test results, each assigned to a named
companion paper in the same special issue; consequently, several figures central to a
surface-power specific-power assessment (system mass, radiator mass/area, Stirling
efficiency, hot/cold-end temperatures, and quantitative test performance) are outside the
scope of this document and are not present in it.

### Topic mapping

FA5. Source list entry 9. Sub-Q 4. Reactor-, fuel-, and shield-level design parameters and
neutronic/reactivity design calculations for the KRUSTY 1-kWe-class Kilopower prototype
reactor, including fuel enrichment/mass/density, core dimensions, control-rod and
reflector composition, shield material trade and mass, criticality safety tables, and
reactivity-feedback coefficients, together with the qualitative design-goal outcomes from
the March 2018 nuclear test. Bears on fission surface power for lunar-night survival at
the component/fuel/shield level; does not itself supply system-level specific power
(W/kg), power-conversion efficiency or temperatures, radiator sizing, quantitative test
performance, technology readiness level, or a solar-plus-storage comparison, each of which
the source's own reference list attributes to other papers in the same special issue.
