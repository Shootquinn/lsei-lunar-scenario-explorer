# Aqua Factorem

## Citation

Metzger, P. T., Sapkota, D., Fox, J., & Bennett, N. (2021). *Aqua Factorem: Ultra low energy
lunar water extraction* (Final report, NASA Innovative Advanced Concepts Phase I, Grant No.
80NSSC 20K1022). University of Central Florida, Florida Space Institute.

Publisher URL: [not stated in the document; confirmation needed before this line is filled]

Bibliographic notes from the document itself: dated 15 March 2021; grant number printed as
80NSSC 20K1022; affiliations are University of Central Florida, Florida Space Institute
(Metzger as Principal Investigator, and Sapkota), Fox Technical Associates as consultant, and
the University of New South Wales Australian Centre for Space Engineering Research as
collaborator. The cover title reads "Ultra Low Energy Lunar Water Extraction" while every
interior running header reads "Ultra Low Energy Lunar Ice Mining". No Digital Object
Identifier appears in the document.

## Abstract

Establishes feasibility of a lunar water extraction architecture that separates ice grains
from regolith by mechanical, pneumatic, magnetic, and electrostatic beneficiation rather than
by thermal volatilization, and sizes a minimum-scale commercial mine around it.

Scope: physical-state argument for granular ice in Permanently Shadowed Regions; process
design for a seven-stage beneficiation train; benchtop magnetic and electrostatic separation
tests on two lunar simulants with plastic and with cryogenic water ice as ice analogues;
four-model parametric treatment of ice particle size; and a transportation, mass, and power
architecture for a mine serving geostationary transfer orbit satellite boosting.

Method: laboratory demonstration at low technology readiness, analytic particle-size and
stream-splitting models, spreadsheet mass estimating relationships, and delta-v budgets from
simulated trajectories and operator rules of thumb.

Reports 63.4 wt% (mare) and 45.0 wt% (highlands) tailings rejection in single-pass magnetic
separation, 98.3 percent surface power reduction against a published thermal-extraction
baseline, a 2,382.5 kg surface segment, and a 213 million dollar initial investment estimate.

## Summary

### Background and objective

The report addresses the energy cost of bringing volatiles and energy together on the Moon.
It characterizes prevailing lunar ice extraction concepts as thermal, meaning the regolith is
heated to sublimate ice in place, and identifies two problems. First, most of the energy heats
the lithic fraction rather than the ice, producing an energy budget requiring either fission
power or infrastructure to deliver solar energy into Permanently Shadowed Regions (PSRs).
Second, cited experiments and modeling indicate that water vapor in regolith migrates away
from a heat source rather than toward it, so much of the vaporized ice refreezes in the soil.
Correcting the vapor direction is described as requiring either additional subsurface heating
to establish counteracting gradients or containment such as a drilled core tube.

The framing objective is a Minimum Viable Product (MVP) mining method: one that starts small,
produces commercial revenue immediately, and scales incrementally as risks are retired, rather
than a technology that reaches a dead end at small scale. The stated commercial anchor is
boosting communications satellites from geostationary transfer orbit (GTO) to geostationary
orbit (GEO), on the argument that a one-day chemical boost avoids the six to twelve months an
electric-propulsion satellite spends reaching operational orbit, which the report values at
approximately 100 million dollars in deferred revenue per satellite.

The technical premise is that lunar ice is physically a mineral. At PSR temperatures both ice
and silicates are stable crystalline solids that respond similarly to impact comminution.
Billions of years of micrometeoroid gardening have already broken both phases into fine
grains and mixed them, so the energy required to liberate the ice has already been supplied
by nature. Grain size estimates cited are approximately 70 micron from Moon Mineralogy Mapper
(M3) near-infrared reflectance of surface frost, and approximately 8 micron mean from the
LCROSS impact ejecta. If the phases can be sorted without a phase change, only the volatile
fraction needs to be transported out of the PSR to where solar energy is available.

### Methods and scope

Three architecture options are described: all power and water processing outside the PSR with
a combined mining and beneficiating rover shuttling in and out; water cleanup moved partway
into the PSR on superconducting cable; and beneficiation moved into the PSR as a stationary
unit fed by a mining-only rover. Power comes from sun-tracking vertical photovoltaic arrays on
high terrain where lunar night is about nine Earth days, with fuel cells for keepalive.

The extraction process comprises a Resource Intake System (excavation, rock rejection by
grizzly, gravel separation by auger, light grinding) feeding a Beneficiation System
(pneumatic de-dusting, inline magnetic and electrostatic separation of the dust stream, and
motive gas separation, magnetic separation, pneumatic size sorting, and electrostatic
separation of the granular stream). Outputs are ice, coarse and fine magnetic and
non-magnetic tailings, free metal, and optional anorthite and ilmenite side streams. Tailings
of 95 to 98 wt% of the excavated mass are dropped in the PSR; the 2 to 5 wt% ice is hauled to
sunlight for cleanup, electrolysis, liquefaction, and storage.

Physical-state risk is addressed against a taxonomy of eight ice-lithic grain morphologies
attributed to Rickman of NASA Marshall Space Flight Center. Four arguments are offered that
granular, non-cemented ice should dominate the mineable zone: no known lunar mechanism creates
frozen ice-soil mixtures, since the geothermal gradient dominates at millimeter depth inside a
PSR and vapor migrates up the gradient; micrometeoroid impacts comminute far more mass than
they bond by vapor deposition, evidenced by maturation ceasing below about one centimeter of
burial and by weak soil at the LCROSS impact; liquid water cannot persist to form an analogue
of agglutinates, with a flash evaporation rate of about 2.7 g per second implying a 100 micron
droplet vaporizes in 0.2 picoseconds; and light grinding liberates bound ice at far lower
energy than vaporization.

Simulants are Exolith Lab Lunar Mare Simulant (LMS-1) and Lunar Highlands Simulant (LHS-1).
Ground plastic sandblasting media stands in for ice in the magnetic, pneumatic, and size
sorting tests, on the basis of similar density and negligible magnetism. Concentration is
measured indirectly through a calibrated correlation between plastic fraction and maximum
compacted bulk density, since direct immersion densitometry fails when the analogue floats and
automated microscopy was out of scope. Magnetic susceptibility is measured on a Faraday scale
with 60 ml samples referenced to aqueous and crystalline nickel chloride.

Particle size modeling uses a two-branch fitting function reconciled from the Lunar Sourcebook
cumulative distribution and a concatenation of JSC-1A with sub-10-micron data for Apollo
sample 10084. Four ice models bound the problem by tuning the fine-side and coarse-side power
indices to match either the LCROSS 8 micron or the M3 70 micron areal-weighted mean.

Architecture analysis covers a two-stage Lander and Tug that stack autonomously in orbit, with
variants for initial orbit (GTO, low Earth orbit, or split lift), oxidizer-to-fuel ratio
(5.6:1 optimal or 8:1 stoichiometric), aerobraking, ion propulsion on the return leg, and
whether the Tug lands or remains in low lunar orbit. Delta-v budgets come from trajectories
simulated in NASA General Mission Analysis Tool, GEO operator rules of thumb, and vis-viva
modifications. Mass estimating relationships cover engines, thrust structures, tanks, and
insulation, with fixed masses assumed for avionics, power, and reaction control.

### Key findings

**Physical state and resource assumptions.** The design case assumes 5 wt% ice in the excavated
regolith, PSR ice temperatures generally below 100 K, and a shallow dry overburden of about 30
to 50 cm at accessible "Type 2" polar locations a few kilometers from sunlight.

**Process physics.** An ice-metal interface fracture energy of 2 J per square meter, with equal
energy partition and the heat capacity of water ice at 100 K, raises a 1 micron ice particle
from 100 K to 103.4 K on liberation from a lithic grain; against a sublimation lifetime of
about 12 hours at 200 K for that particle, this is stated as a 30-fold margin for grinder
inefficiency. The pneumatic ballistic coefficient scales as density times diameter, so with
rock density approximately three times ice density, sorting places a lithic particle of
diameter d in the same bin as an ice particle of diameter 3d; removing the approximately 20
micron and finer dust fraction takes about 29.7 wt% of the lithic mass and splits the ice at
approximately 58 micron. By the Curie-Weiss law with an olivine Curie constant near 11 K,
paramagnetic susceptibility at 40 K is 6 times that at 293 K, making magnetic separation more
efficient inside a PSR than at room temperature.

**Measured magnetic beneficiation.** A benchtop permanent-magnet drum separator processed 11
kg per hour. For LMS-1, one pass discarded 63.41 plus or minus 0.25 wt% as tailings and two
passes 78.97 plus or minus 0.09 wt%; a third pass added nothing. Applied to a 5 wt% starting
ice fraction this gives 12.5 wt% after one pass and 20 wt% after two, factors of 2.5 and 4.0.
For LHS-1, one pass discarded 44.95 plus or minus 0.94 wt% and two passes 48.49 plus or minus
0.55 wt%, giving 8.7 and 9.3 wt% ice, factors of 1.7 and 1.9. Measured plastic concentration
by the bulk density correlation was 15.57 plus or minus 0.04 wt% for LMS-1, a 3.1-fold
increase, and 12.57 plus or minus 1.96 wt% for LHS-1, a 2.51-fold increase, from 5 wt%
starting mixtures measured at 4.36 and 4.62 wt%.

Volume susceptibility referenced to aqueous nickel chloride: LMS-1 bulk 8.737E-04, its
non-magnetic isolate 1.873E-04 after one pass and 1.211E-04 after two; LHS-1 bulk 3.892E-04,
its non-magnetic isolate 1.185E-04 after one pass and 1.211E-04 after two; olivine 2.194E-04.

**Modeled stream splits.** The report records eight numbered findings. Finding 1: dust stream
ice content is high enough that a pneumatics-only system processing dust alone would be viable
and appropriate for a Commercial Lunar Payload Services (CLPS) demonstration. Finding 2:
approximately 70 percent of the resource is in the granular stream, so the full system should
process granulars as well. Finding 3: for mature mare soils the ice in the non-magnetic
dust stream is about 78 wt% pure, possibly requiring no further processing. Finding 4: for
immature highlands soils, after water removal the anorthosite in that stream is 99.6 percent
pure, a candidate aluminum feedstock. Finding 5: granular magnetic beneficiation reduces
downstream burden by 45 to 67 percent. Finding 6: pneumatic splits can be chosen so that the
smallest ice grain in a channel exceeds the largest lithic fragment in that channel. Finding
7: under coarse-ice models the largest channels are dominated by ice, up to 85.8 wt% in the
coarsest LMS-1 channel. Finding 8: required channel mass flow rates are small and readily
scalable.

The fraction of total ice residing in the dust stream ranges from 64.5 wt% under Ice Model 1
to 9.4 wt% under Ice Model 4, a factor of 6.9 across the four bounding ice size distributions.

**Electrostatic separation.** No prior literature was found on electrostatic separation of ice
grains from mineral grains. From published charging power laws against aluminum, ice is
estimated to experience 100 to 10,000 times the electric-field acceleration of silicates of
equal diameter. An assembled triboelectric series places ice at the extreme positive end,
olivine at the negative end, and ilmenite near neutral. Laboratory work with a 20,000 VDC
plate separator and cryogenically prepared granular ice mixed with chilled simulant showed
that the mixture sprayed through a wider range of angles with the field energized than
without, which the report treats as validating that ice tribocharges in a mixture with lithic
particles. Demonstrating separation itself is left to future work.

**Vibrational separation.** Offered as an alternative final stage. Vibrated LMS-1 produced
strata in which the visibly finer isolate was 97 wt% below 250 micron while the visibly
coarser isolate was 34 / 31 / 35 wt% across the below-250, 250 to 425, and above-425 micron
ranges. Repeating on material pre-sieved to 250 to 425 micron produced top and bottom halves
with bulk densities of 1.58 and 1.55 g per cubic centimeter and specific gravities of 2.61 and
2.77, from which the report concludes segregation is primarily by size and not strongly
density-sensitive.

**Transportation.** The baseline concept of operations lands the Tug for refueling, lifts it
to low lunar orbit on the Lander, performs trans-Earth injection and apoapsis lowering into
the customer GTO, boosts a 2,500 kg satellite to GEO, returns via trans-lunar injection,
restacks, and lands. Delta-v budget in m/s: lunar surface to low lunar orbit 2,000; return
2,100; low lunar orbit to trans-Earth injection 842; trans-Earth injection to GTO 678; GTO to
GEO 1,500; GTO to low Earth orbit 2,500; GEO to trans-lunar injection 1,076; low Earth orbit
to trans-lunar injection 3,200; trans-lunar injection to low lunar orbit 780; plus 57 for
rendezvous phasing. The baseline requires 9,300 kg of propellant per boost cycle at 5.6:1
oxidizer-to-fuel ratio, leaving one third of the manufactured oxygen in excess.

**Transportation variants.** Relative to the 9,300 kg GTO to GEO baseline: stoichiometric 8:1
propulsion reduces demand by 29 percent, the single largest individual improvement; leaving the
Tug in low lunar orbit by 15 percent; slow multi-pass aerobraking enabled by zero boil-off
storage by 15 percent; ion propulsion on the GEO to low lunar orbit return by 11 percent; and
conventional aerobraking with thermal protection increases demand by 3 percent. Orbital tug
with stoichiometric propellant gives 39 percent, adding aerobraking gives 46 percent, and the
full orbital-tug stack reaches 58 percent. The report states stoichiometric propulsion has
become the new intended baseline. The low Earth orbit to GEO case nominally requires about
57,000 kg, more than six times the GTO baseline; aerobraking alone reduces it by 39 percent,
stoichiometric propellant by 29 percent, and a split boost with aerobraking by 60 percent, in
which case two Tugs each carry only slightly more propellant than the GTO baseline. The
split-lift aerobraked stoichiometric case is estimated at approximately 16,330 kg and its
ion-propulsion version at approximately 14,700 kg.

**Vehicle mass sensitivity.** Each additional kilogram of non-computed vehicle dry mass adds
2.5 kg to the Lander and 8.4 kg to the Tug at optimal oxidizer-to-fuel ratio, or 1.7 kg and 6.0
kg at 8:1 stoichiometric with a specific impulse of 433 s. With an elliptical low lunar orbit
shifting work to the Lander, sensitivity evens to order 5.4 kg of propellant per kilogram of
dead mass at optimal ratio, or 3.9 kg at stoichiometric.

**Mining and site operations.** The excavator is based on the NASA Regolith Advanced Surface
Systems Operations Robot (RASSOR): 25 kg mass, 20 kg regolith payload, 20 cm per second travel,
120 W driving, 240 W positioning, 48 W excavating, and 8 hours of recharge after 16 hours of
operation. At 100 m maximum travel between dig site and plant, each unit makes three round
trips per hour for 60 kg per hour, or 960 kg per day at 16 hours, and two units meet the MVP
requirement. A transporter of the same mass and power carries ore approximately 4 km to the
sunlit plant. Two further RASSOR-class robots grade the site, build berms, apply a polymer
landing pad agent over a 100 square meter pad, then haul water to the Lander and Tug.

**Water cleanup.** Lunar ice is assumed to carry 24 vapor-mobilized and 8 solar-wind-implanted
species. The notional eleven-step train sieves at 4.0 mm, 500 micron, 100 micron, and 5 micron,
then applies degasification, reverse osmosis, ion exchange, catalytic carbon filtration, a
second degasification, electrolysis, liquefaction, and storage. Surge storage holds one month
of production, 258.08 kg of liquid hydrogen (3,646.15 liters) and 2,066.93 kg of liquid oxygen
(1,812.08 liters), in single-walled stainless steel.

**Mass and power.** The surface segment totals 2,382.50 kg, of which 225.00 kg is inside the
PSR (two 25 kg excavators, a 100 kg beneficiation system, a 50 kg crusher, a 25 kg
transporter) and 2,157.50 kg is outside, dominated by a 1,500 kg power, thermal, and control
system and 550 kg of storage vessels. The MVP mine requires 77.50 kg of water per day, 2,325
kg per month, and 27,900 kg per year, extracted from 1,550 kg of regolith per day and 558,000
kg per year. Total energy is 1,193.55 kWh per day, 429,677.55 kWh per year, which the report
divides by 24 hours to give 49.7 kW, reported as 50 kW and as a 98.3 percent power reduction
from the comparison mining system. Of the daily total, 704.59 kWh is water processing, of
which electrolysis is 335.58 kWh at 4.33 kWh per kilogram of water, and 488.96 kWh is other
equipment, of which the beneficiator is 360.00 kWh and the crusher 120.00 kWh.

**Comparison to a published architecture.** Against the United Launch Alliance-led Commercial
Lunar Propellant Architecture study, the report positions its own case at 8.3 percent of the
asset mass (under 2,500 kg against 30,000 kg), 5.3 percent of the initial investment (213
million dollars against 4 billion), 1.7 percent of the power (50 kW against 2.8 MW), and 1
percent of the annual production (27,900 kg against 2,450,000 kg). The 213 million dollars
comprises 120 million to develop, 83 million to land, and 10 million to operate for a year. A
separate illustration states four larger beneficiators at 3 kg per second and 5 kW each replace
800 kW of thermal extraction, a 97.5 percent power reduction, with greater than 99 percent
reduction of energy and infrastructure inside the PSR once downstream processing moves to
sunlight.

**Byproducts and secondary business cases.** Excess oxygen of about 3 t every four months under
the 5.6:1 ratio is noted against a NASA baseline of roughly 10 t per year of regolith oxygen.
Anorthite for aluminum, ilmenite for oxygen, and free metal at roughly 1 wt% of soil in some
locations are identified as byproducts. Secondary transportation opportunities listed are GEO
disposal to graveyard orbits at roughly 10 m/s, upper stage deorbit at under 100 m/s, dead GEO
satellite deorbit, partial lifts for life extension, and failed apogee motor rescue.

**Scaling.** The benchtop separator at 11 kg per hour reaches the 88 kg per hour MVP benchmark
by widening the drum four times to 1 m and using two units, or one with surge capacity. The
comparison architecture's full rate would need 3,880 kg per hour, or 88 one-meter drums, which
a suggested tenfold throughput improvement would reduce to nine.

### Limitations

The report states that ground truth on the physical state of lunar ice has not been obtained
and that the excavation-based approach does not suit Filling or "Raisins in Pudding"
morphologies, found to be as hard as granite at cryogenic temperatures in prior testing the
Principal Investigator participated in. Site selection is the offered mitigation: prospecting
would target deposits resembling the LCROSS impact site, and non-excavatable deposits would be
left to later thermal approaches. The stated goal is an MVP process, not an architecture that
can mine every deposit type.

Ice was represented by ground plastic for all magnetic, pneumatic, and size sorting tests, and
the report states the analogue's electrostatic properties are undetermined and may not suit
that stage. Cryogenic tests with real water ice established tribocharging but not separation.

Concentration measurement relies on a bulk density correlation calibrated over five points per
simulant. The report notes that packing porosity creates degeneracy with plastic fraction, that
minimum-density packing gave no reliable correlation, that compacted volume reproducibility is
subjective, and that a 0 to 2 percent systematic rejection arises from the collection bin
divider position, attributed to the small drum diameter.

Mineralogical analysis of beneficiated material was outside Phase I scope, so composition of
the magnetic and non-magnetic isolates is inferred rather than measured, with two fitted
parameters closing the mass balance against the measured tailings percentages. Magnetic
properties in the modeling are literature typicals. Real lunar soil containing nanophase iron
was not used and is identified as future work.

The triboelectric series used for the electrostatic stage merges two published lists that
overlap in only two minerals, on different measurement scales, joined by linear interpolation,
with basalt placed by analogy to its components and no quantitative data. The report states the
literature indicates achievable electrostatic concentration cannot be predicted in advance.

A risk is identified that glassy patina with nanophase iron might form on ice grains as it does
on lithic grains, making ice dust magnetic and invalidating magnetic separation of the dust
stream; alternative approaches are asserted to exist but deferred to Phase II. Ice particle
size distribution rests on two noisy datapoints from possibly different reservoirs and depths,
and the four models are explicitly bounding cases rather than estimates, with Ice Model 3
stated to be unlikely because it lacks a process to remove fines.

On the transportation side, low Earth orbit cases were not modeled at high fidelity because the
split lift requires manual iteration in the spreadsheet method. Low-thrust modeling for the ion
propulsion return was not performed, boil-off was not tracked, no zero boil-off mass penalty
was assumed, and station keeping for a Tug in low lunar orbit was not modeled. The report
states only the baseline concept of operations was modeled accurately, with variants using
indicative comparison methods.

Rock rejection and gravel separation are identified as requiring technology advancement, since
augers jam routinely with realistic simulant in NASA Robotic Mining Competitions and the mine
is intended to run unattended, and reduced-gravity flights showed lunar fines do not flow
through cylindrical openings as wide as 5 cm. Comparative grinding methods (grinding, rolling,
impact hammering) were not evaluated against each other. Site preparation, the strip-mining
strategy, roving estimates, and the landing pad design are described as in progress. Planned
4-H student prototype work was cancelled because of COVID-19 policy and replaced with two
undergraduate hires and a postdoctoral researcher.

### Topic mapping

Lunar in-situ resource utilization: ice extraction architecture, thermal versus mechanical
extraction, minimum viable product framing, and scale-up path.

Lunar regolith geology: ice-lithic grain morphology, impact gardening and comminution,
maturation and nanophase iron, agglutinate formation, vapor deposition and patina, cold trap
deposition mechanisms, and evidence from LCROSS and Moon Mineralogy Mapper.

Particle size distribution modeling: two-branch fitting functions for lunar soil, reconciliation
of Lunar Sourcebook, JSC-1A, and Apollo 10084 data, mass-weighted versus areal-weighted mean
size, and four bounding models for ice.

Mineral beneficiation: pneumatic de-dusting and size classification by cyclone train, drum
magnetic separation, inline magnetic separation in pneumatic flow, tribocharging and
electrostatic separation, vibrational and Brazil Nut Effect segregation, and triboelectric
series construction.

Simulant methodology: LMS-1 and LHS-1 characterization, plastic as an ice analogue, cryogenic
ice simulant preparation, Faraday scale susceptibility measurement, and bulk density correlation
as a concentration proxy.

Water processing: contaminant inventory for lunar ice, treatment technology selection,
degasification, reverse osmosis, ion exchange, catalytic carbon filtration, electrolysis, and
cryogenic liquefaction and storage.

Cislunar transportation economics: GTO to GEO orbit raising as a service, Lander and Tug
staging, oxidizer-to-fuel ratio trades, aerobraking and zero boil-off, ion propulsion, orbital
versus landed tug, split and distributed lift, and delta-v budgeting. Secondary cases cover GEO
graveyard disposal, upper stage deorbit, satellite life extension, and apogee motor rescue.

Mission and program context: NIAC Phase I scope, Commercial Lunar Payload Services demonstration
path, comparison to the Commercial Lunar Propellant Architecture study, RASSOR heritage, and
Artemis-era sustainable exploration framing. Secondary lunar products covered are anorthite for
aluminum, ilmenite for oxygen, free metal recovery, and excess oxygen as a saleable commodity.
