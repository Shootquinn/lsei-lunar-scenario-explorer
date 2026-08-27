# Thermal Control System Architecture and Technology Challenges for a Lunar Surface Habitat

## Citation

Schunk, R. G., Babiak, S. D., & Evans, B. W. (2022). Thermal control system architecture and
technology challenges for a lunar surface habitat. *2022 IEEE Aerospace Conference*. NASA
Marshall Space Flight Center / Jacobs Space Exploration Group. NTRS document 20210026557.

Publisher URL (NTRS): https://ntrs.nasa.gov/citations/20210026557

Note on bibliographic confirmation: the paper's title block (page 1) lists three authors, R.
Gregory Schunk and Stephanie D. Babiak (both NASA, Thermal Analysis and Control Branch, Mail
Stop EV34, MSFC) and Brian W. Evans (NASA / Jacobs Space Exploration Group, same branch and
mail stop), with the footer "U.S. Government work not protected by U.S. copyright." The venue is
identified from the paper's own IEEE Aerospace formatting and the task's provenance as the 2022
IEEE Aerospace Conference; the NTRS accession number 20210026557 is carried from the task's
source register. No DOI is printed in the extracted text. The paper's reference [1] is its own
predecessor, a Thermal and Fluid Analysis Workshop (TFAWS) paper of August 2021 by G. Schunk, S.
Babiak, D. Naville, and B. Evans, "Conceptual Thermal Control System Design for a Lunar Surface
Habitat," of which this IEEE paper is the update (the "Update" in the file title). Dawn Naville,
credited in the acknowledgements for the detailed radiator-panel models, is not on the IEEE-paper
author line.

## Abstract

A NASA conceptual design of the Thermal Control System (TCS) for a crewed Lunar Surface Habitat
(SH) at the Lunar South Pole, developed under the NextSTEP habitation formulation and sized to a
government reference architecture. The habitat is an inflatable pressurized volume plus a metallic
airlock and a propulsive transfer element, supporting 2 to 4 crew for 30 to 60 days with a 15-year
life, total mass constrained to 12 metric tons, powered by a 10 to 15 kW deployable solar array
with regenerative fuel cells for eclipse. The TCS is a dual-loop design (a water/propylene-glycol
internal loop for crew spaces and a NOVEC-7200 external loop) that rejects more than 15 kW of peak
summertime heat through 48 m2 of double-sided deployable thermal radiators. Its load-bearing value
for this review is that the radiators are sized directly off ISS flown hardware: the paper states
the two-sided deployable radiators are "derived from the International Space Station (ISS) design"
and "based on an areal density of the ISS Heat Rejection System thermal radiators (14 kg/m2),"
while explicitly cautioning that "the ISS design isn't qualified to deploy/retract in the lunar
gravitational field." The paper also works the Survive-the-Night problem (eclipse periods up to
100 hours), radiator growth to accommodate electrical-power-system growth, and regenerative-fuel-
cell mass trades.

## Summary

### Background and objective

The paper is set within NASA's NextSTEP (Next Space Technologies for Exploration Partnerships)
Broad Area Announcement for Habitation, released April 2016 to develop cis-lunar habitation
through commercial partnerships, under which NASA developed a Lunar Surface Habitat Reference
Architecture (page 1). The objective is to present a TCS conceptual design for the Surface Habitat
built on the government design reference, focused on thermal-radiator design, Survive-the-Night
considerations, and growth potential (page 1). The habitat is assumed to comprise an inflatable
pressurized volume, an airlock, and a propulsive transfer element; after insertion into a Near
Rectilinear Halo Orbit (NRHO) it is deployed to the Lunar South Pole via the lander element (pages
1 to 2). It is designed for 2 to 4 crew for 30 to 60 days with a 15-year life, normally hosting 2
crew and 4 during changeovers with a pressurized rover (which may run sorties up to 15 days),
total mass constrained to 12 mT, internal pressure baselined at 10.2 psia (reducible to 8.2 psia
to facilitate EVA), with a fully regenerable ECLSS (page 1). Electrical power is a deployable solar
array of 10 to 15 kW with regenerative fuel cells providing up to 3 kW during eclipse periods
lasting up to 100 hours at the South Pole; both the solar array and the thermal radiators are
articulated from the top of the habitat (page 1).

### Methods and scope

The TCS geometry and internal/external loop architecture are optimized via analytical thermal
models of the system (page 1). Thermal math models built in Thermal Desktop assess overall
radiator heat-rejection capacity for the primary landing site and evaluate system growth from
increased electrical-power demand; the habitat model with radiators and photovoltaic arrays
deployed is placed on an adiabatic ground plane representing the primary landing site, with the
sun vector elevated about 1.5 degrees above the ground plane and aligned with the leading-edge
radiator (pages 3 to 4). Detailed thermal/fluid models of the individual radiator panels resolve
flow through both the individual passages and the supply/return manifolds for accurate pressure-
drop assessment; the flow paths are embedded in "saddles" or brackets sandwiched between two
aluminum face-sheets with a honeycomb core for stiffness (page 4). The scope is a conceptual
(reference-architecture) design study, not flown or qualified hardware; the paper explicitly
frames low-mass, dust-tolerant, deployable/retractable radiators in partial gravity and the
accommodation of 100-hour eclipses as the major open technology challenges (page 1).

### Key findings

**TCS architecture and heat-rejection sizing.** The TCS is a two-loop design: an internal loop of
60/40 water/propylene-glycol mixture serving crew spaces and an external loop using NOVEC 7200
(3M's HFE-7200 engineered fluid) (page 2). The internal loop is partitioned into Low Temperature
Loop (LTL) and Moderate Temperature Loop (MTL) service through two interface heat exchangers,
analogous to the ISS ATCS, with redundant loops and redundant pumps for two-fault tolerance
system-wide (page 2). The external loop splits into parallel paths through two thermal-radiator
arrays, each array subdivided into four panels (page 2). **The SH TCS is designed to reject more
than 15 kW of heat under peak summertime conditions at the Lunar South Pole with 48 m2 of radiator
surface area (double sided)** (page 2).

**Radiator design derived from ISS, at 14 kg/m2 (the load-bearing areal-density statement).** The
paper states directly (page 2): "The thermal radiators may be retracted during the Survive-the-
Night scenario and are based on an areal density of the ISS Heat Rejection System thermal
radiators (14 kg/m2) as shown in Figure 3, although the ISS design isn't qualified to deploy/
retract in the lunar gravitational field. Mass margins are applied to account for additional mass
to enable the deployment or retraction mechanism to function in the lunar environment." The two-
sided deployable radiators are "derived from the International Space Station (ISS) design utilizing
a honeycomb core and embedded flow paths with slightly thicker face-sheets" (page 2). Each 3 m by
2 m radiator panel contains 10 embedded flow tubes spaced about 8 inches apart, giving a fin
efficiency of 85 percent based on a front-and-back face-sheet thickness of 0.015 inch (page 3).
Once deployed, the radiators are oriented horizontally so one side faces deep space while the
backside radiates mostly to lunar terrain (pages 2 to 3). The deployable thermal radiators and the
internal/external pump packages together are nearly 75 percent of the total TCS mass (Figure 5,
pages 3 to 4).

**Basis reconciliation of the 14 kg/m2 figure (projected, mounted; single-face served on the
lunar surface).** The paper's adopted "14 kg/m2" is the ISS EATCS Heat Rejection System (HRS)
radiator areal density. Computed first-principles from the primary ISS ATCS Overview flown
dimensions and mass (1,122.64 kg over a 23.3 m by 3.4 m eight-panel deployable ORU = 79.22 m2
projected), the projected-basis areal density is 1,122.64 / 79.22 = **14.2 kg/m2 projected
(mounted)**, which reproduces the paper's 14 kg/m2 to within rounding. This confirms the paper is
quoting the ISS number on a PROJECTED (mounted-assembly-mass divided by one-face footprint area)
basis, not a double-sided-radiating-area basis (the double-sided ISS HRS figure would be about 7.1
kg/m2). The paper's own "48 m2 of radiator surface area (double sided)" phrasing describes the
habitat's total emitting area (both faces of the deployed panels counted), which is a separate
quantity from the areal-density basis; the 14 kg/m2 is mass per one-face footprint. On the lunar
surface the paper has the horizontal panels facing deep space on one side while "the backside
radiating mostly to lunar terrain" (page 3), i.e. the back face sees warm regolith rather than
cold sky, which is exactly the single-effective-face situation for which the projected (14 kg/m2)
density, not the optimistic double-sided (about 7 kg/m2) density, is the correct heavier anchor.
The paper's explicit caveat that the ISS design "isn't qualified to deploy/retract in the lunar
gravitational field" plus its added mass margins for the lunar deploy/retract mechanism mean a
lunar-rated radiator is, if anything, heavier than 14 kg/m2, not lighter.

**Radiator growth for electrical-power-system growth.** Heat-rejection capacity versus panel count
(Figure 7): the baseline configuration of 8 double-sided panels rejects just above the requirement
at 17 kW; adding panels raises capacity to as much as 27 kW with 12 panels, using a third radiator
array for the extra capacity (page 4). The summary quantifies the growth mass as approximately 400
kg per 10 kWe for the radiator panels, plus approximately 130 kg per 10 kWe of water or oxygen/
hydrogen for Survive-the-Night energy storage (page 7).

**Survive-the-Night scenario (100-hour eclipse).** Eclipse periods up to 100 hours are possible at
the Lunar South Pole, requiring make-up heat to keep the inflatable volume and radiators above
minimum temperature limits during the dormant period; sizing is to the worst case (total eclipse)
(page 4). Maintaining the SH at a minimum 283 K would require 1,550 watts to offset heat leak
through the inflatable volume (page 4). For the fluid working limit, the un-mitigated total energy
required is 540 kWh over the 100-hour scenario (page 5). The radiator fluid NOVEC 7200 has a lower
working temperature limit of -100 degrees C (-148 degrees F, 173 K) and a freezing point of -137
degrees C (-215 degrees F, 136 K); keeping the radiators just above the working or freezing limits
would require nearly continuous heat of at least 3,840 or 1,353 watts respectively (page 5). A
sublimator is added for heat rejection during descent or on-orbit loiter before the radiators
deploy, sized to reject 4,300 watts for three periods of about 4 hours (page 4).

**Mitigation strategies.** Stowing (retracting) the radiators for Survive-the-Night sharply cuts
parasitic loss: fully closing the radiators reduces the heat needed to maintain them from nearly
3,400 W to about 700 W, though the bottom surface of the outermost panels still views the
environment because the panels reject from both sides (page 6). About 1,550 watts of make-up heat
would still be needed to keep the habitable volume above 293 K (68 degrees F) (page 6). Pre-heating
(thermal-mass storage) can reduce the nominal-case energy requirement to 155 kWh (page 6). The
baseline beta-cloth outer covering of the inflatable has an infrared emittance of 0.9 and a solar
absorptance of 0.4; reducing surface emittance could cut heat leak, with potential savings on the
order of 50 kWh, aided by the habitat's net heat loss of about 850 watts during daylight (page 6).

**Regenerative fuel-cell trades.** Hydrogen/oxygen regenerative fuel cells (RFCs) supply the
energy for the 100-hour Survive-the-Night scenario at a given radiator size; habitat heat leak is
roughly constant at about 1,550 watts during eclipse and does not vary with power sizing (pages 6
to 7). RFCs nominally produce 400 kWe/kg with 243 kWt/kg of waste heat at 62.2 percent efficiency
(page 7). Total RFC logistics-plus-hardware mass, radiator mass, and photovoltaic mass are traded
against electrical power (Figure 14); the fixed regenerable fuel-cell mass impact for Survive-the-
Night is slight with increasing radiator size, while the water or oxygen/hydrogen needed for
storage grows at about 130 kg per 10 kWe (page 7).

### Limitations

This is a conceptual reference-architecture design study, not flown or qualified hardware and not
an empirical measurement: the radiator masses and areal density are derived by scaling ISS heritage
into a lunar concept and modeling it in Thermal Desktop, so the numbers are design estimates with
applied mass margins rather than as-built values. The paper itself is explicit that the governing
ISS radiator design "isn't qualified to deploy/retract in the lunar gravitational field," so the 14
kg/m2 it adopts is an ISS-heritage starting point to which the paper adds unspecified mass margins
for a lunar deploy/retract mechanism; the fully lunar-rated areal density is therefore expected to
exceed 14 kg/m2, but the paper does not print the post-margin value. The 14 kg/m2 is stated without
its own derivation in this paper (it is imported from ISS); the projected-basis interpretation
(mass per one-face footprint) is confirmed here by reconciliation against the primary ISS ATCS
Overview flown dimensions, not by an explicit basis statement in this paper, which could invite a
double-sided misreading if the "48 m2 (double sided)" surface-area phrasing were conflated with the
areal-density basis. Several quantitative results are read from figures (Figures 5, 7, 9, 10, 12,
14) whose underlying tabular values are not in the extracted text, so figures such as the 17 kW
baseline and 27 kW twelve-panel capacities are as-plotted design points. The habitat mass
constraint (12 mT), power (10 to 15 kW), and crew/duration (2 to 4 crew, 30 to 60 days) are
reference-architecture assumptions that may shift with later Artemis design maturation.

### Relevance to the review

This source is the independent NASA corroboration that pins the flown-ISS radiator areal density
to the lunar-surface use case for the lunar-economics thermal chain. Where the primary ISS ATCS
Overview supplies the raw flown dimensions and mass (from which 14.2 kg/m2 projected is computed),
this paper shows a separate NASA thermal team, sizing an actual lunar-habitat radiator, adopting
"14 kg/m2" off the same ISS Heat Rejection System hardware and explicitly treating the lunar
environment as a mass-adding, not mass-reducing, factor. That triangulation hardens the radiator
areal-density anchor used in the register: the flown/derived projected figure (14 to 17.5 kg/m2)
is what NASA itself carries into lunar design, it is the heavy/conservative end of the evidence
ordering (above unflown fission-surface-power design estimates and far above sub-3 kg/m2 design
goals), and the lunar back-face-to-regolith geometry described here justifies using the single-
face projected density rather than the optimistic double-sided value. The paper also supplies
useful adjacent lunar-habitat parameters (Survive-the-Night energy budgets, radiator growth of
about 400 kg per 10 kWe, NOVEC-7200 temperature limits, RFC performance) for any lunar-surface
thermal or power mass build-up.

### Topic mapping

FA-thermal / radiator areal-density corroboration. NASA lunar-surface-habitat TCS conceptual
design serving as the independent corroboration of the ISS radiator areal-density anchor.
Companion to the primary flown-hardware source (NASA/Boeing ISS ATCS Overview,
`473486main_iss_atcs_overview.md`) and reconciled against the verified register. Supplies: adoption of the ISS HRS "14 kg/m2" areal
density (projected/mounted basis, reproducing the 14.2 kg/m2 computed first-principles from the
ISS primary), with the load-bearing caveat that the ISS design "isn't qualified to" the lunar
environment (implying a lunar-rated unit is heavier), plus 48 m2 double-sided radiator area
rejecting more than 15 kW, radiator growth at approximately 400 kg per 10 kWe, Survive-the-Night
energy budgets (540 kWh un-mitigated over 100 hours; 155 kWh nominal with pre-heating), and RFC
performance (400 kWe/kg, 243 kWt/kg waste heat, 62.2 percent efficiency).
