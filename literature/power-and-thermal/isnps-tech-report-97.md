# Advanced Lightweight Heat Rejection Radiators for Space Nuclear Power Systems (NASA ESI Year 1 Continuation Review)

## Citation

El-Genk, M. S., Schriener, T. M., Anderoglu, O., & Wolf, C. (2022). *Advanced lightweight heat
rejection radiators for space nuclear power systems: Year 1 ESI continuation review, grant
performance summary* (NASA Grant No. 21-ESI-0049; 80NSSC22K0263). University of New Mexico,
Institute for Space and Nuclear Power Studies (UNM-ISNPS). UNM-ISNPS Technical Report 97
(Report 21 ESI-0049-1). Revised 25 November 2022.

Publisher URL: https://isnps.unm.edu/reports/ISNPS_Tech_Report_97.pdf

Identity and provenance note: this is the Year 1 continuation-review "Grant Performance Summary"
for the same three-year NASA Early-Stage Innovations project whose final report is UNM-ISNPS Tech
Report 103 (El-Genk & Schriener, 2025, summarized separately in this folder). The cover (PDF sheet
1) gives NASA grant number "21-ESI-0049," date 11/25/2022, Principal Investigator Mohamed S.
El-Genk (UNM-ISNPS and Nuclear Engineering Department), and NASA Research Collaborator Fernando
Reyes Tirado (Marshall Space Flight Center); the co-authors (Schriener, Anderoglu, Wolf) are taken
from Tech Report 103's reference list, which cites this document as "Technical Report 21
ESI-0049-1 ... 2022." The report covers "less than 11 months of the first year" of the award, so
its results are preliminary relative to the final report. No DOI is printed. Page citations below
use the report's own printed footer page numbers, which coincide with the PDF sheet numbers.

## Abstract

Year 1 progress summary of a NASA Early-Stage Innovations Phase 1 project at UNM-ISNPS to develop
a foldable heat pipe radiator panel much lighter than the current State-of-the-Art (SOA) for
space and lunar-surface fission power. It sets the SOA baseline against which the whole project is
measured, selects the heat pipe working fluid, develops two module design concepts (Version 1 and
Version 2), and reports first-year lumped-parameter and 3-D CFD thermal analyses plus early
Ti-to-carbon bonding characterization. The report surveys SOA radiator areal densities of 5.8 to
11.9 kg/m2 (projected basis) across a set of published fission power systems and states NASA's
design goal of areal density at or below 3 kg/m2 for 500 to 600 K heat rejection over 10 years.
Its own first-year concept (Version 2, Cesium-Titanium heat pipes with HOPG/Ti fins) is estimated
to reach an areal density of about 4.4 down to 3.6 kg/m2 depending on fin width, described as "still
short of" the 3 kg/m2 target but well below SOA. The report places the concept at TRL 3.0 to 4.0.
All results are analytical estimates; no radiator hardware was fabricated or tested.

## Summary

### Background and objective

The report frames heat rejection radiators as "one of the most voluminous and massive components"
of a space fission power system (printed page 2) and states the project objectives (printed page
1): develop a lightweight, foldable heat pipe radiator panel for heat rejection at 500 to 600 K
surface temperature with a specific mass (areal density) at or below 3 kg/m2, and advance its TRL.
Table 1 (printed page 2) lists the NASA design requirements: nominal heat rejection at 500 to 600
K; integrated areal density at or below 3 kg/m2 including all major components; operation in
microgravity, low gravity, and high-thrust environments; service life of 10 years or more;
modular and deployable, surviving launch vibration; and survival of micrometeoroid impacts, solar
UV, reactor ionizing radiation, and atomic oxygen. The 3 kg/m2 figure is therefore a program design
goal, not a flown or measured value.

### Methods and scope

The metric is defined (printed page 2) as "the radiator areal density (or specific mass) in kg/m2
versus the projected average surface temperature," so all areal densities in this report are on a
PROJECTED (one-face) basis. Year 1 work: (1) selected the heat pipe working fluid, comparing Cesium
(Cs), Rubidium (Rb), and Potassium (K) by Figure of Merit and continuum-flow diameter, concluding
that for 500 to 600 K Cs and Rb are the only viable choices and Cs is preferable (smaller
continuum-flow diameter, thinner wall), with operation sonic-limited because of the low alkali-metal
vapor densities; (2) developed a MATLAB/Simulink lumped-parameter thermal model of a radiator
module (a single Cs heat pipe conductively coupled to a HOPG/Ti/C-C composite heat spreading fin,
with a NaK-78 header duct on the evaporator); (3) ran 3-D CFD thermal analyses in STAR-CCM+ of a
module to study heat pipe-to-fin coupling (HOPG fillet angle, HOPG layer thickness) for a 600 K
surface; (4) developed two module concepts, Version 1 (heat pipe and duct protruding on opposite
faces) and Version 2 (flat, more compact stowage, foldable); and (5) began Ti-to-carbon interface
work, magnetron-sputtering Ti (1 to 2 micrometers) onto C-C composite and graphite/HOPG coupons at
the LANL CINT facility and refurbishing the UNM-ISNPS vacuum test stands (10-inch and 18-inch bell
jars, hard vacuum 1 to 5 x 10-7 torr) for outgassing studies. A 3-D printing capability produced
plastic module models for visualization. No radiator hardware or heat pipe was built or thermally
tested; material work was limited to bonding coupons.

Selected material properties (Table 2, printed page 5): titanium wall 0.1 to 0.2 mm thick, density
4,510 kg/m3, melting 1,943 K; C-C composite armor density 1,400 to 1,800 kg/m3, 1.0 mm thick on the
heat pipes and NaK duct and 0.2 mm on the fins; HOPG fins density 2,200 kg/m3, in-plane conductivity
1,800 W/m-K and off-plane 8 W/m-K, layer 0.3 to 1 mm; NaK-78 density 867 kg/m3, melting point 260.6
K, boiling about 1,058 K. Heat pipes are sized to operate at 75% of the prevailing (sonic) limit,
allowing up to 25% redundancy; wick pore radius 25 micrometers, liquid annulus 0.25 mm.

### Key findings

**SOA radiator areal density band (printed pages 3 to 4; Figure 2).** El-Genk compares reported SOA
radiator areal densities versus radiator surface temperature. Figure 2 (printed page 3) is labeled
with a range of 5.8 to 11.9 kg/m2 for the SOA systems shown (SAIRS-B AMTEC, HP-STMC TE, SP-100 TE,
AFSPS FPSE, JIMO CBC, Prometheus FSPS CBC, SCoRe-S TE, S^4-CBC), with a "3 kg/m2 Target" line drawn
across the plot. The text breaks this down: for water heat pipe radiators at surface temperature at
or below 500 K, "reported estimate of the areal densities ... ranges from 5.8 kg/m2 for the S^4-CBC
system to 7.16 kg/m2 for the Prometheus JIMO mission" (printed page 3); for higher-temperature static
(thermoelectric and AMTEC) conversion systems, "estimated areal densities of 6.82 to 11.9 kg/m2"
(printed page 4). The report also notes armor to protect heat pipes from micrometeoroids and debris
"can add as much as 30% to 50% to the radiator mass and areal density" (printed page 4), as seen for
the SP-100, SAIRS-B, and HP-STMC designs. All SOA figures "are well above the NASA desired at or
below 3 kg/m2."

Reconciliation with the verified register (step7_3RR, section 2a) and with Tech Report 103: Report
97 quotes the SOA span as 5.8 to 11.9 kg/m2, a NARROWER enumeration than the 5.24 to 12.76 kg/m2
band in Report 103's Table 2. This is not a contradiction. The later Report 103 widens the tails by
adding the NASA Kilopower lunar point (5.24 kg/m2 at 400 K, the new floor) and the SAIRS-A AMTEC
point (12.76 kg/m2 at 662 K, the new ceiling); Report 97's narrower set omits those two endpoints.
Both reports use the same PROJECTED-basis metric, the same central band of roughly 5 to 13 kg/m2,
and the same NASA at-or-below-3 kg/m2 target line. Report 97 is the earlier, narrower SOA statement;
Report 103 is the fuller enumeration.

**Own first-year concept, labeled as estimate (printed pages 14, 18 to 21; Figure 18).** The
lumped-parameter analysis estimates that the Version 2 module at a 600 K surface, with NaK-78 inlet
650 K and HOPG layer 0.45 mm, reaches an areal density of about 4.4 kg/m2 at a 10 cm fin width,
decreasing to 3.6 kg/m2 at a 30 cm fin width; the corresponding Version 1 values are 12% to 13%
higher, 4.9 to 4.1 kg/m2 (printed pages 20 to 21). The report states "achieving an areal density of
4 kg/m2 is possible with the developed advanced radiator panel concepts at ... 600 K, subject to
future improvements to attempt approaching or reaching the NASA stated target of at or below 3
kg/m2" (printed page 14), and summarizes the two concepts as "promising for achieving areal
densities significantly lower than the current SOA, but still short of the NASA desired target of at
or below 3 kg/m2" (printed page 14). These are unflown Year 1 model estimates; the later Report 103
carries the design further (Version 7) to an estimated 2.97 to 2.98 kg/m2. Per-module heat rejection
is estimated at 3.45 to 3.75 kW for Version 2 versus 2.83 to 2.96 kW for Version 1 at NaK inlet 650 K
(printed page 18), a 22% to 26% increase attributed to Version 2's larger surface area.

**Working fluid selection.** Cesium is selected over rubidium and potassium (printed pages 10 to 13):
at 500 to 600 K, potassium's continuum-flow diameter is impractically large (26.96 cm at 500 K), Rb
is 3.91 cm at 500 K, and Cs is smallest at 2.36 cm (500 K) falling to 0.139 cm at 600 K; heat pipe
operation is sonic-limited, and Cs's higher vapor pressure raises the sonic limit and lowers the
required wall thickness and areal density.

**Bonding characterization.** Magnetron sputtering produced continuous Ti coatings about 1.4 to 2
micrometers thick on C-C composite carbon fibers and polished graphite; SEM characterization of the
Ti-to-C-C and Ti-to-HOPG interfaces is described as "very promising," with full outgassing and
diffusion-bonding studies planned in hard vacuum.

**TRL.** The report states the developed radiator design concepts are at TRL 3.0 to 4.0 after the
first 11 months, "and could be higher subject to demonstrating fabricability" (printed pages 14 to
15).

### Limitations

This is a Year 1 progress summary; all radiator performance numbers are preliminary lumped-parameter
and 3-D CFD estimates, not measured on hardware, and the design is superseded by the Version 7 result
in the final report (Tech Report 103). The Year 1 concept explicitly does not yet meet the NASA at-or-
below-3 kg/m2 goal (best estimate about 3.6 kg/m2 for Version 2). All areal densities are on a
PROJECTED (one-face) basis and should not be conflated with double-sided radiating densities. The
SOA enumeration (5.8 to 11.9 kg/m2) is narrower than the final report's (5.24 to 12.76 kg/m2) because
it omits the Kilopower floor and SAIRS-A ceiling; a reader anchoring on Report 97 alone would understate
both tails of the SOA band. Radiative performance assumes a surface emissivity of 0.85 and an
environmental sink temperature of 250 K; no dust, atomic-oxygen, solar-UV, or reactor-radiation
degradation is quantified. Armor, micrometeoroid, and launch-vibration analyses are stated as future
work at this stage (they appear fully only in Report 103), and the bonding work is at the coupon level
with SEM only (TEM/EDX confirmation comes later). Some Table 2 property entries are garbled in the
source text extraction and should be read against the cleaner Table 2 in Report 103.

### Topic mapping

FA5 (fission surface power for lunar-night survival), radiator sub-question. This is the earlier,
narrower SOA-baseline companion to UNM-ISNPS Tech Report 103. It supplies the register's cross-check
(step7_3RR, section 2a): the SOA fission-surface-power radiator areal density quoted here as 5.8 to
11.9 kg/m2 (projected), reconciled as a narrower enumeration of the same 5 to 13 kg/m2 band that
Report 103 states as 5.24 to 12.76 kg/m2, with the same NASA at-or-below-3 kg/m2 design goal line. It
also documents the working-fluid selection, the Version 1 and Version 2 module concepts, and the
first-year areal density estimates (about 4.4 down to 3.6 kg/m2, unflown) that the Version 7 result in
Report 103 later improves toward the NASA goal.
