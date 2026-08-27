# Active Thermal Control System (ATCS) Overview

## Citation

Boeing Integrated Defense Systems (IDS). (n.d.). *Active Thermal Control System (ATCS)
overview: EEATCS (5A-12A.1)/EATCS (12A.1+)*. Boeing IDS Business Support, Communications
and Community Affairs, P.O. Box 516, St. Louis, MO 63166. Distributed by NASA as document
473486main_iss_atcs_overview.

Publisher URL: https://www.nasa.gov/wp-content/uploads/2021/02/473486main_iss_atcs_overview.pdf

Note on bibliographic confirmation: the document carries no printed author line, title-page
byline, date, or report number in the extracted text; the only originating attribution is the
masthead "IDS Business Support, Communications and Community Affairs, P.O. Box 516, St. Louis,
MO 63166" on page 1, which is Boeing Integrated Defense Systems (the ISS prime contractor's
business unit). The corporate author is therefore given as Boeing IDS. No publication date is
printed, but the document is written in the present and future tense around the STS-116 /
Assembly Flight 12A.1 mission (which activated the permanent EATCS for the first time in
December 2006), so the content is contemporaneous with late 2006; "(n.d.)" is used because no
date appears in the source itself. The NASA-hosted PDF filename (473486main) is a NASA content
identifier, not a formal NTRS technical-report number; no DOI or NTRS document ID is printed in
the text and none is invented here. The internal system designation on page 1, "EEATCS
(5A-12A.1)/EATCS (12A.1+)," is reproduced as the document's own subtitle.

## Abstract

An engineering overview of the International Space Station (ISS) Active Thermal Control System
(ATCS), the pumped-fluid heat-rejection architecture that collects, transports, and radiates
waste heat from the Station's pressurized modules and external electrical equipment to space.
The document describes the four constituent systems (the internal water-loop IATCS, the
permanent external ammonia-loop EATCS, the Photovoltaic Thermal Control System PVTCS, and the
temporary Early External system EEATCS), their heat-rejection capacities, working fluids,
operating temperatures and pressures, and the mass and dimensions of every major orbital
replacement unit (ORU), including pump modules, ammonia and nitrogen tank assemblies,
interface heat exchangers, coldplates, valve modules, and the deployable radiators. Its
load-bearing value for this review is the primary, flown-hardware (TRL 9) dimensional and mass
data for three ISS radiator families, from which the radiator areal-density anchors used
throughout the lunar-economics thermal analysis are computed: the Photovoltaic Radiator (PVR)
and the geometrically identical EEATCS radiator (740.7 kg over a 3.12 m by 13.6 m seven-panel
deployable) and the EATCS Heat Rejection System (HRS) radiator ORU (1,122.64 kg over a 23.3 m
by 3.4 m eight-panel deployable).

## Summary

### Background and objective

The document explains why the ISS needs an active (pumped) thermal control system at all: most
Station systems produce waste heat that must be transferred off the vehicle to space to keep
components within acceptable temperature limits, and when the combination of the external
environment and the internal heat loads exceeds what the Passive Thermal Control System can
handle, an ATCS is required (page 1). An ATCS uses a mechanically pumped fluid in closed-loop
circuits to perform three functions: heat collection, heat transportation, and heat rejection.
Heat is collected through cold plates and heat exchangers cooled by circulating ammonia loops on
the outside of the Station; the heated ammonia then circulates through large exterior radiators
that release the heat by radiation to space and thereby cool the ammonia for return (page 1).

The ATCS is described as four systems (page 1): the Internal Active Thermal Control System
(IATCS), which circulates water inside the pressurized modules (nine separate internal water
loops at assembly complete) to collect equipment and experiment heat and hand it off at the
interface heat exchangers; the External Active Thermal Control System (EATCS), the permanent
ammonia system that rejects that collected heat to space; the Photovoltaic Thermal Control
System (PVTCS), the ammonia loops that cool the solar-array power electronics; and the Early
External Active Thermal Control System (EEATCS), a temporary modified-PVTCS system used to cool
the U.S. Laboratory before the permanent EATCS was assembled and activated. The document is
framed around the STS-116 / Assembly Flight 12A.1 mission, on which the permanent EATCS was
activated for the first time (page 2), with the EEATCS then transitioning to a dormant/spare
role.

### Methods and scope

This is a descriptive engineering-overview document, not an analysis or a study; it reports
as-designed and as-built hardware parameters for the ISS thermal system rather than deriving or
modeling anything. Its scope is the full external and internal ATCS architecture as of the
12A.1 configuration and forward to assembly complete: subsystem functions, working fluids,
redundancy philosophy (two independent loops so that a single failure degrades but does not
disable heat rejection, page 5), operating temperatures and pressures, failure-detection and
freeze-protection logic, the on-orbit activation sequence, and a component-by-component
enumeration of the ORUs with their measured masses and dimensions. For the purposes of this
literature review the operative content is that hardware enumeration, in particular the
radiator dimensions and masses, because they are flown (TRL 9) primary data usable to compute
radiator areal density on a like-for-like basis. Areal densities quoted below are computed here
from the document's own printed dimensions and masses; the document does not itself state any
kg/m2 areal-density figure.

### Key findings

**Internal Active Thermal Control System (IATCS).** The U.S. Destiny Laboratory ITCS uses water
as the transport fluid because water is efficient and safe inside a habitable module (page 2).
It runs two independent loops: a Low Temperature Loop (LTL) designed to operate at 40 degrees F
(4 degrees C) holding about 16.64 gallons (63 liters), serving equipment that needs low
temperatures such as the ECLSS Common Cabin Air Assembly; and a Moderate Temperature Loop (MTL)
nominally at 63 degrees F (17 degrees C) holding about 52.83 gallons (200 liters), providing
most avionics and payload cooling. At assembly complete there are nine internal ITCS water loops
across the U.S. and International Partner modules (page 1). The loops can be reconfigured to run
as a single loop to reduce pump wear or power, or to compensate for a pump failure (page 2).

**Photovoltaic Thermal Control System (PVTCS) and the Photovoltaic Radiator (PVR).** The PVTCS
consists of ammonia coolant, eleven coldplates, two Pump Flow Control Subassemblies (PFCS), and
one Photovoltaic Radiator (PVR); it can dissipate 6,000 watts of heat per orbit on average (page
2). Each PFCS consumes 275 watts in normal operation, measures about 101.6 cm by 73.7 cm by 48.3
cm, and weighs 235 pounds (106.7 kilograms) (pages 2 to 3). The PVR is deployable on orbit,
comprises two separate flow paths through seven panels, and can reject up to 14 kW of heat into
deep space (page 3). **The PVR weighs 1,633 pounds (740.7 kilograms) and when deployed measures
10.24 feet (3.12 meters) by 44.62 feet (13.6 meters)** (page 3). At assembly complete there are
four PVRs, one per photovoltaic module (S4, P4, P6, S6).

**Early External Active Thermal Control System (EEATCS) radiator.** The EEATCS is a modified
version of the PVTCS used as the temporary external cooler for the U.S. Laboratory interface
heat exchangers, with two independent simultaneously operating ammonia cooling loops rejecting
heat via radiators on truss segment P6 (pages 3 to 4). The EEATCS radiator ORU is a direct-flow,
deployable and retractable system of seven radiator panels plus deploy/retract mechanism,
support structure, and plumbing, deployed as two non-articulating ORUs (one aft/trailing and one
starboard/normal) (page 4). **The EEATCS radiator measures 10.24 feet (3.12 meters) by 44.62
feet (13.6 meters)** (page 4), i.e. the same geometry and PVTCS-derived class as the PVR. The
EEATCS provides 14 kW of heat-rejection capability (page 6).

**External Active Thermal Control System (EATCS).** The EATCS is the primary permanent active
heat-rejection system on the ISS; it uses single-phase anhydrous ammonia as the working fluid
for its high thermal capacity and wide operating range, ammonia having an extremely low freezing
point of -107 degrees F (-77 degrees C) at standard pressure (page 5). It comprises two
independent loops, Loop A on S1 (Starboard) and Loop B on P1 (Port), physically separated and
buried in the truss so orbital debris cannot take out both (page 5). **The EATCS is designed to
provide 35 kW of heat rejection per loop for a total capability of 70 kW** (page 5), a
substantial upgrade over the 14 kW EEATCS capability (page 6). Ammonia supply temperature is set
at about 37 degrees F (2.8 degrees C) (page 6). Each loop collects heat from up to five
interface heat exchangers and from externally mounted coldplates: two Main Bus Switch Unit
(MBSU) coldplates each designed to remove 495 watts at 80 lb/hr, and three DC-to-DC Converter
Unit (DDCU) coldplates each designed to remove 694 watts at 125 lb/hr (page 5).

**EATCS Heat Rejection System (HRS) radiator ORU (the primary flown radiator anchor).** Heat
collected by the EATCS ammonia loops is radiated to space by two rotating radiator wings, each
composed of three separate radiator ORUs, giving six HRS radiator ORUs total (page 14). Each
radiator ORU is a deployable eight-panel system (page 6, page 14). **Each Radiator ORU measures
76.4 feet (23.3 meters) by 11.2 feet (3.4 meters) and weighs 2,475 pounds (1,122.64 kilograms)**
(page 14). Each individual radiator has two coolant flow paths, each flowing through all eight
panels; each panel carries eleven flow tubes per flow path for a total of 22 Inconel flow tubes
per panel, and the tubes are freeze tolerant (page 15). Each panel has a white Z-93 coating to
maximize heat rejection (page 15). Rotation is provided by a Thermal Radiator Rotary Joint
(TRRJ) that turns the radiator beam to keep the radiators cold enough to reject heat yet warm
enough to avoid ammonia freezing, with a temperature goal of -40 degrees F at the radiator
outlet; the joint rotates 230 degrees (plus or minus 115 degrees from neutral, software-limited
to plus or minus 105 degrees) at 0 to 45 degrees per minute (pages 16 to 17).

**Computed radiator areal densities (this document supplies dimensions and mass; the areal
densities below are computed here).** On a projected (one-face footprint = length times width)
area basis using the full deployable assembly mass as flown:
- PVR / EEATCS radiator: 3.12 m by 13.6 m = 42.43 m2 projected; 740.7 kg / 42.43 m2 = **17.5
kg/m2 projected (mounted)**; on a double-sided radiating basis (both faces counted, 84.86 m2)
740.7 / 84.86 = **8.7 kg/m2 double-sided (mounted)**.
- EATCS HRS radiator ORU: 23.3 m by 3.4 m = 79.22 m2 projected; 1,122.64 kg / 79.22 m2 = **14.2
kg/m2 projected (mounted)**; on a double-sided radiating basis (158.44 m2) 1,122.64 / 158.44 =
**7.1 kg/m2 double-sided (mounted)**.
The mass in each case is the full deployable ORU as flown (panels, deploy/retract mechanism,
support structure, manifolds, and plumbing per the page 4 and page 14 descriptions), not a bare
radiating skin, so these are assembly-level (mounted) areal densities. The projected-versus-
double-sided distinction is a factor-of-2 basis choice: a flat panel in free space radiates from
both faces, so its mass-per-double-sided-radiating-area is half its mass-per-projected-area.
Both bases are carried above so downstream users can match whichever emission geometry their
scenario assumes.

**Other major ORU masses and operating parameters (context).** Pump Module (PM) about 780 pounds
(353.8 kg), nominal loop-A flow 8,200 lb/hr and loop-B 8,900 lb/hr at 14,000 and 14,700 rpm,
nominal loop pressure 300 psia at pump inlet, 390 psia for startup, 500 psia maximum design
pressure (page 10). Temperature control range 36 to 43 degrees F (2.2 to 6.1 degrees C) set at
37 degrees F, with total heater power of 1.8 kW split across two 900-watt HRS-bypass heater
strips (page 11). Ammonia Tank Assembly (ATA) about 1,120 pounds (508.02 kg) holding roughly 640
lbm ammonia (pages 12 to 13). Nitrogen Tank Assembly (NTA) about 460 pounds (208.65 kg) storing
nitrogen at 2,500 psia and supplying regulated pressure up to 390 psia (page 13). Interface Heat
Exchanger (IFHX) about 91 pounds (41.28 kg), a counterflow core of 45 alternating layers (23
water, 22 ammonia), 10 in operation at assembly complete (pages 7 to 8). MBSU coldplate about
109 pounds (49.4 kg) (page 8); DDCU coldplate about 96 pounds (43.54 kg) (page 9); Radiator Beam
Valve Module (RBVM) about 50 pounds (22.68 kg) (page 16); TRRJ about 927 pounds (420.5 kg) (page
17). Boeing (Huntington Beach) designed the EATCS, S0, S1, and P1; major subcontractors were
Hamilton Sundstrand (pump/control valve package, coldplates, heat-exchanger core), Honeywell
(tanks, accumulator, RBVMs), Lockheed Martin (radiators), and Marotta (valves) (page 18).

### Limitations

This is a corporate engineering-overview document, not a peer-reviewed or dated technical report:
it carries no author byline, no publication date, and no formal report or DOI number, so the
attribution (Boeing IDS) and the circa-2006 dating are inferred from the masthead and the
STS-116 / 12A.1 mission framing rather than stated on a title page. The document reports as-
designed and nominal parameters; it does not give measurement uncertainties, mass tolerances, or
as-flown deviations, and some figures are explicitly design targets or "about" values (for
example "weighs about" figures for several ORUs), so the derived areal densities inherit that
rounding. Critically for this review, the document states no areal-density figure of its own: the
17.5 and 14.2 kg/m2 (projected) and 8.7 and 7.1 kg/m2 (double-sided) values are computed here
from the printed dimensions and masses, and the projected-versus-double-sided choice is a basis
decision imposed by the analyst, not resolved by the source (the document describes the radiators
as flat deployable panels that radiate to space, consistent with two-faced emission on orbit,
but the lunar-surface single-versus-double-sided question is out of this document's scope). The
masses are on-orbit ISS hardware qualified for the low-Earth-orbit environment; the document says
nothing about lunar-surface qualification, dust tolerance, partial-gravity deploy/retract, or the
mass growth a lunar-rated version would carry, all of which are addressed only in the companion
IEEE 2022 lunar-habitat source. Areas are computed from the two-dimensional deployed footprint
(length times width) as printed and do not net out panel gaps, manifolds, or hinge lines, so the
true active radiating area may be marginally less than the footprint, which would make the true
areal density marginally higher (heavier) than computed here, not lower.

### Relevance to the review

This source is the flown-hardware (TRL 9) primary anchor for radiator areal density in the
lunar-economics thermal chain. The register pins the
radiator mass term, the single largest identifiable mass in the installed-capital floor, to real
plumbed, pumped, freeze-tolerant, rotating, MMOD-relevant ISS radiators rather than to paper
concepts, and this document is where those dimensions and masses come from. The two computed
projected densities (PVR/EEATCS 17.5 kg/m2, HRS ORU 14.2 kg/m2) bracket the flown state of the
art on a one-face basis; the HRS 14.2 figure in particular is the number the NASA IEEE 2022
lunar-habitat paper independently adopts (as "14 kg/m2") when sizing a lunar radiator off ISS
heritage, giving a strong flown-hardware triangulation. Because these are TRL-9 flown values,
they sit at the heavy (conservative) end of the evidence ordering above the unflown fission-
surface-power design estimates and well above the sub-3 kg/m2 NASA design goals, so any lunar
radiator mass built on them is the hard, defensible floor rather than an optimistic aspiration.

### Topic mapping

FA-thermal / radiator areal-density anchor. Primary flown-hardware (TRL 9) source for the P1
radiator areal-density swing variable in the space-resources thermal analysis. Paired with the
IEEE 2022 Schunk et al. lunar-surface-habitat TCS paper (which adopts the HRS 14 kg/m2 figure and
flags that the ISS design "isn't qualified to" the lunar environment) and reconciled against the
verified register. Supplies: PVR/EEATCS 740.7 kg over
3.12 m by 13.6 m seven-panel deployable = 17.5 kg/m2 projected / 8.7 kg/m2 double-sided; EATCS
HRS ORU 1,122.64 kg over 23.3 m by 3.4 m eight-panel deployable = 14.2 kg/m2 projected / 7.1
kg/m2 double-sided. Also supplies system-level heat-rejection capacities (EATCS 70 kW total, 35
kW per loop; EEATCS/PVTCS 14 kW; PVTCS 6 kW per orbit average) and a full ORU mass inventory
usable for any ISS-heritage thermal mass build-up.
