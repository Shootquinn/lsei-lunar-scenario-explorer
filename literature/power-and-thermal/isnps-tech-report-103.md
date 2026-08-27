# Advanced Lightweight Heat Rejection Radiators for Space Nuclear Power Systems (NASA ESI Phase 1 Final Report)

## Citation

El-Genk, M. S., & Schriener, T. M. (2025). *Advanced lightweight heat rejection radiators
for space nuclear power systems*: NASA Early-Stage Innovations (ESI) final report (Grant No.
80NSSC22K0263). University of New Mexico, Institute for Space and Nuclear Power Studies
(UNM-ISNPS). UNM-ISNPS Technical Report 103. Submitted 14 February 2025.

Publisher URL: https://isnps.unm.edu/reports/ISNPS_Tech_Report_103.pdf

Identity and provenance note: the title page (PDF sheet i) lists Mohamed S. El-Genk
(Distinguished and Regents' Professor and Founding Director, UNM-ISNPS) as Principal
Investigator and the byline (PDF sheet ii) lists "Mohamed S. El-Genk and Timothy M.
Schriener." The grant is NASA Space Technology Mission Directorate ESI award 80NSSC22K0263
(internally "21-ESI-0049"), period of performance 01/18/2022 to 01/17/2025, with NASA
Research Collaborator Fernando Reyes Tirado (Marshall Space Flight Center). This is the final
report of a three-year Phase 1 project; two earlier annual continuation reviews are
UNM-ISNPS Tech Report 97 (Year 1, 2022; summarized separately in this folder) and Tech
Report 99 (Year 2, 2023). No DOI is printed on the report itself. Pagination note: the PDF's
sheet markers run eight ahead of the report's own printed footer page numbers (PDF sheet =
printed page + 8), so the areal-density band defined in the running text sits on printed page
6 (PDF sheet 14), Table 2 on printed page 7 (PDF sheet 15), Table 3 on printed page 10 (PDF
sheet 18), and the results Table 10 on printed pages 61 to 62 (PDF sheets 69 to 70). Page
citations below use the report's own printed page numbers.

## Abstract

Final report of a NASA Early-Stage Innovations Phase 1 award to UNM-ISNPS to develop a heat
rejection radiator much lighter than the current State-of-the-Art (SOA) for fission surface
power on the Moon. The developed concept is a modular, foldable panel of ten Cesium-Titanium
(Cs-Ti) heat pipe modules with Highly Oriented Pyrolytic Graphite / Titanium (HOPG/Ti) heat
spreading fins, armored with carbon-carbon (C-C) composite, rejecting waste heat into space at
a surface average temperature of 600 K over a 10-year lunar service life. The work is entirely
analytical and computational (2-D heat pipe transient modeling with HPTrAM, 3-D CFD thermal
analysis with STAR-CCM+, micrometeoroid armor analysis, and finite-element launch-vibration
stress analysis), supported by TEM/SEM characterization of Ti-to-carbon bonding. The report's
headline result is a ten-module Version 7 panel with an ESTIMATED areal density of 2.97 to
2.98 kg/m2 (projected basis) and specific heat rejection power of 3.98 kW/kg, which meets
NASA's design GOAL of areal density under 3 kg/m2. The report anchors this against a SOA
radiator areal density band of 5.24 to 12.76 kg/m2 (projected) and SOA specific power of 0.1
to 2.68 kW/kg. Every headline number for the developed concept is a Phase 1 design estimate;
the report states the concept's Technology Readiness Level (TRL) rose from about 1 to 2 up to
about 3 (analysis and simulation only, no hardware built or tested).

## Summary

### Background and objective

Waste heat rejection radiators are described (printed page 4) as "the most voluminous and could
be the most massive component of a space nuclear reactor power system," their size and mass set
by the heat rejection surface temperature, the reactor thermal power, and the conversion
efficiency. The project's objective (Executive Summary, printed page 1; Table 3, printed page
10) is to develop a lightweight, foldable heat pipe radiator panel with a specific mass (areal
density) at or below 3 kg/m2, rejecting waste heat into space on the lunar surface at a surface
average temperature of 500 to 600 K, for a service life of 10 years or more, that operates in
microgravity and low gravity, survives launch vibration, and survives micrometeoroid, atomic
oxygen, solar UV, and reactor gamma/neutron environments. These are stated as NASA operation
requirements taken from the 21-ESI award (reference 19, the NASA STMD Early-Stage Innovations
appendix), so the 3 kg/m2 figure is a program-defined design goal, not a flown or measured
value.

### Methods and scope

The developed radiator is modular. Each module is a "double-ended" Cs-Ti heat pipe whose central
10 cm evaporator section is thermally coupled through a redesigned liquid NaK-78 (sodium-potassium
eutectic, 78 wt% K) flow duct to two condenser sections carrying HOPG/Ti heat spreading fins 10
cm wide (printed pages 13 to 18). Ten modules are mounted in an aluminum/titanium support frame
and hydraulically coupled in parallel so a single failure does not disable the panel; the report
states a panel of Version 7 modules can operate nominally with up to 40% failed modules (printed
page 45). Cesium was selected as the working fluid over rubidium and potassium because at 500 to
600 K it gives the smallest heat pipe equivalent diameter for continuum vapor flow (13.9 mm at
600 K for Cs versus 23.0 mm for Rb and 111.0 mm for K, printed page 7) and permits a thinner
titanium wall, both of which lower areal density; operation is sonic-limited at these
temperatures. Titanium walls are 0.2 mm (heat pipe) and 0.1 mm (fin cladding and wick); HOPG has
in-plane thermal conductivity of 1,800 to 2,000 W/m-K and off-plane 8 W/m-K (printed page 14).

Four analysis strands were run: (1) 2-D heat pipe performance and operating limits with the
in-house HPTrAM model, thermally coupled to the STAR-CCM+ commercial multiphysics code for 3-D
CFD thermal analysis sizing the condenser length for a 600 K surface; (2) micrometeoroid
protection analysis using NASA's Meteoroid Engineering Model (MEM) and ESA's IMEM1 and IMEM2
models for incident particle densities of 1.0 and 2.5 g/cm3, computing C-C armor thickness for
target perforation/penetration probabilities over 10 years on the Moon; (3) finite-element solid
stress analysis (FEA) of a single module and a ten-module panel under 5 to 100 Hz lateral launch
vibration loads for the Falcon Heavy and Delta IV Heavy launch vehicles; and (4) experimental
TEM/SEM/EDX characterization of magnetron-sputtered Ti layers (1 to 2 micrometers) on HOPG and
C-C samples after weeks in hard vacuum. No radiator hardware was fabricated or thermally tested;
the experimental work was confined to interface bonding coupons.

### Key findings

**SOA radiator areal density band (Table 2, printed page 7; definition printed page 6).**
El-Genk defines the metric explicitly on printed page 6: "the areal density, or the mass per
unit projected area, of the heat rejection radiators ... ranges from 5.24 to 12.76 kg/m2 (Table
2)." So the entire SOA band is on a PROJECTED basis (mounted mass per one-face projected area).
Table 2 endpoints and selected entries (all projected, mounted, with the working fluid and
radiator surface average temperature Ts):
- Minimum 5.24 kg/m2: NASA Kilopower, water heat pipes. Two Kilopower entries both read 5.24:
  the 2.3 m2 / 3 kW space unit at 400 K, and the 20 m2 / 33 kW lunar Surface Power unit at 400 K.
  This 400 K water-heat-pipe point is the SOA floor and the direct 400 K analog.
- Maximum 12.76 kg/m2: SAIRS-A (UNM-ISNPS AMTEC concept), potassium heat pipes, 29.3 m2, 662.3 K.
- Mid-band (projected): AFSPS 7.00 (385 K, water); HOMER-15 9.50 (400 K, ammonia); Prometheus-FSPS
  5.89 (443 K); JIMO 7.16 (447 K); S^4-CBC 5.88 (463 K); SAFE 6.00 (440 K); SP-100 CBC 8.82 (527 K);
  SP-100 FPSE 11.59 (665 K); SP-100 TE 8.00 (791 K); SCoRe-TE 6.82 (780 K); HP-STMC 11.80 (756 K);
  SAIRS-B 11.90 (662.8 K); SAIRS-C 11.71 (661.9 K).
SOA specific power spans 0.1 to 2.68 kW/kg (Executive Summary, printed page 2). This matches the
verified register (step7_3RR, section 2): the SOA band is 5.24 to 12.76 kg/m2 on a projected
basis, with the Kilopower lunar point at 5.24 kg/m2 at 400 K and SAIRS-A AMTEC at 12.76 kg/m2 at
662 K. The Executive Summary and Technology Outlook round the band to "5.24 to 12.7 kg/m2"; the
precise Table 2 ceiling is 12.76.

**NASA design GOAL, labeled.** Printed page 6 states "a desirable objective by NASA is to develop
lighter radiator designs with areal density < 3 kg/m2 for waste heat rejection into space at a
surface average temperature of 600 K." Table 3 (printed page 10) lists "Integrated radiator
aerial density including all major components: <= 3 kg/m2" as a NASA operation requirement. This
under-3 kg/m2 figure is an UNFLOWN program design goal, not achieved by any built hardware; it is
the same evidentiary class as an aspiration, and lies below the entire flown/estimated SOA band.

**El-Genk's own best estimate, labeled.** The ten-module Version 7 panel is stated to achieve an
ESTIMATED areal density of 2.97 kg/m2 (Research Objectives/Accomplishments, printed page 11) and
2.98 kg/m2 (Table 10, printed page 61; Conclusions, printed page 63), with a specific heat
rejection power of 3.98 kW/kg. This is a Phase 1 analysis result (HPTrAM plus CFD plus FEA), not
flown, not measured, not TRL-qualified. The small internal difference (2.97 versus 2.98) is
carried as printed. Per the register, label this as an unflown design estimate.

**Panel performance across module versions (Table 10, printed pages 61 to 62).** Ten-module
panels were compared for Versions 4, 5, 6, 7, and 8 (progressively smaller Cs vapor flow area).
Version 7 is the lightest and lowest areal density: Cs heat pipe outer diameter 4.60 cm, vapor
flow area 8.3 cm2 (30% of Version 4), heat rejection area 4.75 m2, rejected power 56.3 kW, total
mass 14.15 kg, specific power 3.98 kW/kg, areal density 2.98 kg/m2, power density 7.56 kW/m2.
For comparison: Version 6, 3.08 kg/m2 and 3.82 kW/kg (60.8 kW); Version 4 (heaviest), 3.47 kg/m2
and 3.36 kW/kg (67.5 kW, 20.05 kg); Version 8 has the longest evaporator and highest rejected
power (96.3 kW) but a heavier 3.60 kg/m2 areal density because its larger projected area demands
more C-C armor. The Version 7 total mass includes the Cs-Ti heat pipes, Cs working fluid, C-C
armor, Ti support frame, and the dry evaporator flow ducts, but explicitly NOT the NaK-78 loop
upstream of the heat pipe ducts (printed page 60).

**Micrometeoroid armor (Section 5; Executive Summary, printed page 1).** C-C composite armor 0.78
to 0.58 mm thick on the Cs-Ti heat pipes reduces the perforation probability to at or below 10%
over 10 years on the lunar surface (0.58 mm for the lightest Version 7 heat pipe); the HOPG/Ti
fins need less than 0.1 mm (stated elsewhere as at or below 0.2 mm) for a 10% penetration
probability. The C-C armor is the third-largest panel mass term (about 20.9% of Version 4 panel
mass; the heat pipes are 36.4%, the fins 38.4%, the frame 4.1%, printed page 60). El-Genk (Report
97) notes armor can add 30% to 50% to radiator mass and areal density.

**Launch vibration (Section 6; FEA).** For a single Version 7 module, the peak Von Mises stress
in the Cs-Ti heat pipe wall and NaK-78 duct is only 1.2% to 1.4% of the Ti-6Al-4V (Grade 5
titanium) yield strength of 898 MPa. For the ten-module panel under Falcon Heavy loads, maximum
vertical displacement is 3.0 mm at 25 Hz, peak heat pipe wall stress 22.5 MPa, peak NaK duct
stress 97.6 MPa (10.9% of yield), peak HOPG Ti cladding stress 383.8 MPa (below yield), and peak
HOPG tensile stress 56.1 MPa, marginally above the 53.7 MPa pyrolytic-graphite flexure limit but
only at the extreme fin edges in the frame slots. The report concludes structural integrity is
maintained during launch.

**Bonding characterization.** TEM/EDX shows a clean, continuous C-Ti interface without carbide
formation for magnetron-sputtered Ti (1 to 2 micrometers) on HOPG and C-C samples outgassed for
weeks at about 2 to 1.5 x 10-7 torr, supporting the feasibility of diffusion bonding.

**TRL.** The Technology Outlook (printed page 70) states the concept's TRL rose from about 1 to 2
up to about 3 ("analytical studies place the technology in an appropriate context, modeling and
simulation validate analytical prediction"). No prototype was fabricated or tested; the next
phase is proposed as fabrication and experimental validation.

### Limitations

Everything reported for the developed concept is an analytical and computational Phase 1 estimate;
the 2.97 to 2.98 kg/m2 areal density and 3.98 kW/kg specific power are model outputs at TRL about
3, not measured on hardware and not flown. All areal densities, both the SOA band and the
developed concept, are on a PROJECTED (one-face) basis; they are not double-sided radiating
densities, and conflating the two is a factor-of-2 error. The panel total mass is panel-level
only and excludes the NaK-78 secondary loop, pump, and piping upstream of the heat pipe ducts, so
a system-level radiator mass would be higher. Radiative performance assumes a surface emissivity
of 0.85 to 0.9; the report notes lunar radiators are vertically erected to limit dust
accumulation, which "potentially decreasing the surface emissions," but does not quantify any
dust-driven emissivity or mass penalty, nor model atomic-oxygen, solar-UV, or reactor-radiation
degradation despite listing survival of those hazards as requirements. Armor is sized for a 10%
acceptable perforation/penetration probability at incident particle densities of 1.0 and 2.5
g/cm3; a lower acceptable probability would add armor mass. Vibration analysis covers only lateral
5 to 100 Hz loads for two launch vehicles and no thermal cycling or landing/deployment loads.
Minor printed inconsistencies are reproduced as-is: the developed-panel areal density appears as
both 2.97 and 2.98 kg/m2, a stray "2.08 kg/m2" for Version 7 appears once on printed page 61
(clearly a typo for 2.98), and the SOA band is rounded to "5.24 to 12.7" in the Executive Summary
and Technology Outlook versus the exact 12.76 in Table 2.

### Topic mapping

FA5 (fission surface power for lunar-night survival), radiator sub-question. This report is the
PRIMARY source for the SOA fission-surface-power radiator areal density band used as the P1 swing
variable in the verified register step7_3RR (section 2): 5.24 to 12.76 kg/m2 on a projected
basis, floor at the NASA Kilopower lunar point (5.24 kg/m2, 400 K, water heat pipes), ceiling at
SAIRS-A AMTEC (12.76 kg/m2, 662 K). It supplies the labeled evidentiary ladder: flown ISS
radiators (14 to 17.5 kg/m2 projected, from the register's other primaries) sit above these SOA
DESIGN ESTIMATES, which in turn sit above the NASA under-3 kg/m2 design GOAL and El-Genk's own
unflown 2.97 to 2.98 kg/m2 Phase 1 estimate. It also provides the underlying component detail
(Cs-Ti heat pipe and HOPG/Ti fin design, C-C micrometeoroid armor thicknesses and mass fractions,
launch-vibration FEA margins, Ti-to-carbon bonding) behind the radiator-mass term that the
register identifies as the single largest identifiable mass in the lunar-industry installed-capital
floor.
