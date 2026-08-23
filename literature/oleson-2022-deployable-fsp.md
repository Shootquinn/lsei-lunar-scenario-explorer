# Oleson et al. 2022 - A Deployable 40 kWe Lunar Fission Surface Power Concept

## Comprehensive Technical Summary

## Citation

Oleson, S., Packard, T., Turnbull, E., Gibson, M., Rao, D., Barth, C., Wilson, S., Schmitz, P., Colozza, A., Klefman, B., Tian, L., & Mason, L. (2022, May 8-12). *A deployable 40 kWe lunar fission surface power concept* [Conference paper]. Nuclear and Emerging Technologies for Space (NETS-2022), Cleveland, OH. NASA NTRS 20220004670, Report No. NETS38629. https://ntrs.nasa.gov/citations/20220004670

Publisher URL: https://ntrs.nasa.gov/citations/20220004670

No DOI is printed in the source. The extracted text itself carries the notation "[Placeholder for Digital Object Identifier (DOI) to be added by ANS]" (p. 1). The conference venue, dates, and report number are not printed in the extracted PDF text and were confirmed against the NASA NTRS record (accessed 2026-08-20) rather than the source text.

## Metadata

| Field | Value |
|---|---|
| Document type | Conference paper, conceptual point design study |
| Institutions | NASA Glenn Research Center (lead, Compass Team); HX5, LLC; Los Alamos National Laboratory; Power Computing Solutions Inc. |
| Conference | NETS-2022 (Nuclear and Emerging Technologies for Space), Cleveland, OH, May 8-12, 2022 |
| Pages | 9 |
| Open access | Yes, NASA NTRS |

---

## Abstract

Conceptual point design for a 40 kWe lunar fission surface power system (FSPS) intended for deployment at the lunar south pole. The design separates the reactor from the crew and control electronics by placing the reactor at a remote site and delivering power over a 1 km cable, rather than shielding the reactor with mass through burial or a four-pi shield. A pressurized-rover chassis, repurposed from a crew mobility role, delivers the system to the surface in three separately sled-mounted elements: reactor, control, and cable-and-spool. The paper reports mass, thermal, power-conversion, and radiation-shielding parameters for each element against a stated 6,000 kg design goal, and states that the goal was exceeded.

---

### Background and objective

The paper frames continuous surface power as the limiting factor for lunar or Martian surface operations once transportation is solved. Solar power at the lunar poles is available without atmospheric attenuation but only for roughly two weeks of every month, which forces a choice between a large energy storage system with additional solar arrays or a nuclear reactor that provides continuous power. Prior studies are cited establishing lunar or Martian surface power demand in the 10-40 kWe range in the near term (p. 1, refs. 1-2), and a 40 kWe reactor design and its key technologies are noted as having been explored roughly a decade before this paper (p. 1, refs. 3-4).

The central design problem the paper identifies is delivering both the reactor system and its output power to users while keeping crew radiation exposure within limits. A prior design approach buried the reactor near the base, which eliminates long cable runs but requires excavation equipment, a hole for the reactor, transport to the hole, placement, and covering. The approach explored in this paper instead uses a transportation system, the pressurized-rover chassis, to deploy the reactor to a remote location, sized so that distance alone provides the needed shielding. This avoids specialized construction equipment but requires a power delivery system of its own, with its own deployment systems and voltage converters.

The point design was commissioned, in the paper's own words, "to explore both what a 40 kWe fission surface power system (FSPS) might look like as well as how one might deploy it on the south pole of the moon using large crew-class cargo landers." Requirements are described as coming "loosely" from the Fission Surface Power (FSP) Project's request for proposal, cited as Statement of Work No. 18960 (p. 1, ref. 5). Top-level requirements are shown in a referenced figure (Fig. 1, p. 1) and design goals in a second referenced figure (Fig. 2, p. 1-2). The text states that among these design goals, the mass goal of 6,000 kg was significantly exceeded, though the final mass still fits on a planned cargo lander with volume dimensions similar to those specified in a referenced requirements document, DG-1 (p. 1-2, ref. 6). Additional stated drivers include use of low-enriched uranium, placement near the lunar south pole, and a self-contained power system requiring no crew or robotic support for startup, operation, or maintenance. Design scalability to higher power levels was explicitly excluded from the study's scope (p. 2).

### Methods and scope

The design was produced by NASA Glenn's Compass Team, which explored both a 10 kWe and a 40 kWe concept assuming planned lander and rover capabilities. The 10 kWe system could be deployed as a single unit; the 40 kWe system was too large for one trip and required deployment across multiple trips using the same rover (p. 1).

The transportability approach repurposes a 6-wheel, pre-deployed rover chassis designed by NASA Johnson Space Center to mobilize a pressurized crewed cabin, paired with a modified JSC sled concept for surface deployment (p. 2, refs. 7-8). The sled deploys by lowering its legs to the surface on one end via a screw-drive mechanism, then the rover drives out from under the sled until the second pair of legs deploys, freeing the rover entirely; the same four legs level the sled once it is on the surface.

The concept of operations assumes launch and delivery via a human-class cargo lunar lander with a defined delivery mass of approximately 12 t and volume, but no final lander design has been chosen (p. 2, ref. 6). The FSPS may spend five months in transit, during which the cargo lander supplies up to 2 kWe of power to the FSPS, continuing for up to two days after landing; an off-loading system for the cargo lander is required but left undefined. Because the combined mass of the three FSPS elements exceeds the rover chassis's single-trip capability, the system is split into a reactor system element, a control system element, and a cable-and-spool element, each mounted on its own sled. The rover makes two trips: first delivering the reactor element to a site 1 km from the end-user location, then returning to retrieve the control system and cable-and-spool elements. The control system is placed 50 m from the reactor, which eliminates the need for radiation shielding on the control electronics, and the cable-and-spool element is placed at the 1 km end-user site (p. 2).

Mass estimation follows AIAA mass growth allowance methodology (ref. 9). MGA is estimated per subsystem by component leads according to the design maturity of each component, and 15% system-level margin is added on top to reach a "green" mass-risk rating at authority to proceed (p. 3). Thermal sizing of the deployable radiators uses an energy-balance area scaling from the identified waste-heat loads under worst-case solar loading, approximated as a 45-degree effective sun angle for the dual-sided radiators. Power electronics, meaning rectifiers, DC-DC converter units, and power distribution units, are sized using the Metcalf PMAD model (ref. 11), itself based on ISS power components, and the NASA GRC Advanced Exploration Systems Modular Power System components (ref. 12). Radiation shielding requirements are set from a distance/tolerance table (Table I) covering Stirling components, electronics, and crew.

### Key findings

The reactor is a HALEU-fueled, yttrium hydride-moderated heat pipe reactor, developed from a Los Alamos National Laboratory preliminary alternatives assessment against a prior highly-enriched-uranium fast-spectrum design (175 kWth) that met the same functional needs (p. 3, ref. 10). The HALEU reactor supplies approximately 250 kWth to produce the required 40 kWe over a 10-year operating life, using approximately 20% enriched uranium nitride fuel pellets with sodium-molybdenum steel-wick heat pipes and a yttrium hydride moderator (p. 3).

Thermal losses from the reactor are estimated at 18%, based on KiloPower program development work, with an additional 2% loss from the reactor to the Stirling convertor hot-end interface, based on recent Glenn Research Center work. Eight 6.2 kWe-class Stirling convertors, configured as four dual-opposed pairs, were selected after downstream power management and distribution losses were estimated; no spare convertors are included, so a forced pairwise Stirling failure degrades system output by approximately one-quarter per lost pair. Stirling hot-end temperature is 700 degC (973 K), set by superalloy material limits; cold-end temperature is limited to 150 degC (420 K) by alternator organics development limitations, versus a best-specific-power cold-end temperature of 460 K, giving an operating temperature ratio of approximately 2.0. Convertor efficiency is 26.1%, downstream power management and distribution efficiency is 87%, and overall end-to-end thermal-to-electric efficiency is 18.1% (p. 4).

Table III (p. 4) gives thermal design specifications: fission reactor waste heat is 126,400 W, electronics/shunt waste heat is 5,100 W, and power distribution waste heat is 2,000 W. Average reactor operating temperature is 395 K, with a 420 K radiator inlet and 50 K temperature drop to a 370 K exit; electronics operate across roughly 271 K to 310 K (-3 degC to 37 degC); the shunt radiator operates at 800 K. Twenty-five layers of multi-layer insulation cover the electronics enclosure and the back side of the shunt radiators. The lunar polar operating environment ranges from 50 K to 220 K surface temperature.

The reactor's main double-sided accordion-deployable radiator is based on ISS radiator heritage and uses a pumped-fluid coolant loop with inlet/outlet temperatures of 420 K / 370 K. Its waste heat load of 126,400 W requires 133.4 m2 of radiator area when operating at the pole; at the lunar equator, the same load would require 216.2 m2, a 62% area increase (p. 4-5, Table IV). Radiator solar absorptivity is 0.14, emissivity 0.84, at a maximum 45-degree sun angle, with view factors of 0.5 to the lunar surface and 0.5 to deep space. The reactor element's deployed radiator height is approximately 16 m, giving an overall deployed element height of 17.6 m including 60 cm sled legs; stowed dimensions are 461 cm by 160 cm by 160 cm, and outriggers triple the sled base width to 320 cm once deployed (p. 5).

Table V (p. 5) gives the electronics and shunt thermal control specifications:

| Parameter | Power production electronics | Shunt | Power distribution electronics |
|---|---|---|---|
| Radiator type | Double sided, deployable | Single sided, fixed | Double sided, deployable |
| Power dissipation | 5,100 W | 40,000 W | 2,000 W |
| Radiator area | 15.3 m2 | 2.1 m2 | 6.0 m2 |
| Operating temperature | 288 K-300 K | 795 K-800 K | 288 K-300 K |
| View factor to lunar surface | 0.5 | 0.3 | 0.5 |
| View factor to deep space | 0.5 | 0.7 | 0.5 |

Stirling convertors output single-phase 240 VAC at 50 Hz, carried over eight pairs of 10-AWG copper wiring across 50 m to Stirling controllers. Eight parallel AC-DC rectifiers, one per Stirling generator, each output up to 5.9 kW and convert 240 VAC to a nominal 400 VDC. A DC-DC converter unit then boosts 400 VDC to plus-or-minus 2800 VDC for the transmission cable. End-to-end efficiency from the Stirling terminals to the end-user load is approximately 78% (p. 6). Startup and buffering power is provided by a rechargeable lithium-ion battery sized to 4,000 W for 1 hour (4 kWh) at a maximum 80% depth of discharge, with a specific energy of approximately 173 Wh/kg, using commercial off-the-shelf LG 18650 MJ1 cells in a 34S-13P configuration plus one spare string for single-fault tolerance. The auxiliary power distribution unit supplies approximately 374 W to 120 VDC auxiliary loads (p. 6-7).

The transmission cable design trades aluminum conductor mass against insulation mass over operating voltage, at a fixed cable efficiency of 95%, allocating mass only for a vacuum-rated insulated cable without micrometeoroid shielding or redundancy, with minimum wire gauge capped at 16 AWG for mechanical strength. For a 1 km cable carrying 43.5 kWe at 95% efficiency, the design reaches a mass minimum of approximately 45 kg at plus-or-minus 2800 VDC (p. 7, Fig. 13). An equivalent AC design sweep is described as resulting in an overall cable that is slightly heavier, due to greater insulation thickness needed to offset AC-voltage insulation degradation. The source states that the mass benefit of elevated voltage is accentuated at longer transmission distances: holding efficiency at 95%, a 3 km cable is stated to weigh 3,300 kg at 500 V and 240 kg at 2800 V (p. 7).

A DDCU bucks plus-or-minus 2800 VDC from the transmission cable to 120 VDC for user loads, and a power distribution unit provides fault protection and distributes the 40 kWe as eight 5 kWe user output feeds; both are duplicated for single-fault tolerance. Stage efficiencies given in the source's power-flow figure are 95% for the cable, 96.1% for the DDCU, and 98.4% for the PDU (p. 8, Fig. 14).

Table I (p. 3) sets the distance and radiation tolerance assumptions on which the shielding approach depends:

| Item | Distance | Radiation tolerance |
|---|---|---|
| Stirling components | 1 m | Neutron: 5x10^14 n/cm2 (>100 keV); Gamma: 25 MRad (Rad Si) |
| Electronics | 10 m | Neutron: 5x10^11 n/cm2; Gamma: 25 kRad |
| Humans (crew) | 1 km | Total 5 rem/yr (gamma + neutron); 100% occupancy; 1 km wide zone |

Given the 1 km standoff and the 5 rem/yr limit for permanently present crew, a shadow shield approach was selected over a heavy four-pi shield. This eliminates the four-pi shield mass but requires crew to remain within the 1 km wide shadowed area. The conclusions state that, in the current configuration, increasing the reactor-to-crew distance further, or moving the reactor over the horizon, does not reduce shield mass (p. 8).

The Master Equipment List summary (Fig. 6, p. 3) and the mobility system mass figure (Fig. 7, p. 3) give basic (unmargined), growth-allowance, margin, and final masses by element:

| Element | Basic mass (kg) | MGA (kg, %) | Predicted mass (kg) | System margin (kg, %) | Final element mass (kg) |
|---|---|---|---|---|---|
| Fission Surface Power System (reactor) | 5,590 | 905 (16%) | 6,496 | 839 (15%) | 7,334 |
| Control Systems | 1,258 | 401 (32%) | 1,659 | 189 (15%) | 1,848 |
| Cable and Spool | 597 | 177 (30%) | 774 | 90 (15%) | 864 |
| Total carried by lander | 7,446 | 1,483 (20%) | 8,929 | 1,117 (15%) | 10,046 |
| Mobility system (rover chassis, separate lander) | 1,600 | 240 (15%) | 1,840 | 240 (15%) | 2,080 |

The basic mass of each element breaks down by subsystem as follows:

| Subsystem | Reactor element (kg) | Control Systems element (kg) | Cable and Spool element (kg) |
|---|---|---|---|
| Fission Power System | 3,969 | 0 | 0 |
| Electrical Power Subsystem | 0 | 733 | 357 |
| Command and Data Handling | 0 | 46 | 0 |
| Communications | 0 | 26 | 0 |
| Thermal Control | 1,101 | 184 | 68 |
| Structures and Mechanisms | 520 | 269 | 172 |
| Basic mass total | 5,590 | 1,258 | 597 |

The Cable and Spool element's basic mass has no finer breakdown than these three nonzero lines: Electrical Power Subsystem at 357 kg, Thermal Control at 68 kg, and Structures and Mechanisms at 172 kg. The paper does not itemize a separate conductor mass anywhere in this breakdown or elsewhere; Section III.C.3 states that the closed-out box truss holds the two DDCU and two PDU of the Electrical Power Subsystem, so the 357 kg EPS line contains the 1 km transmission cable together with those four power-conversion boxes, undifferentiated. The 68 kg Thermal Control line corresponds to the element's double-sided electronics radiator and heat pipes, and the 172 kg Structures and Mechanisms line corresponds to the box truss, closeout panels, sled, and deployable legs; this allocation follows from the narrative describing what mounts on the sled, not from a printed line-item table.

The rover chassis is delivered pre-deployed on a separate lander and is not included in the 10,046 kg FSPS total carried by the lander; Figure 7 reports its basic, MGA, predicted, margin, and final masses in a separate block from the three-element Figure 6 table above.

Table II (p. 4) itemizes the Fission Power Subsystem's own component-level mass breakdown within the reactor element, on a basic-mass basis with no MGA or margin applied: primary heat exchanger, 1 unit at 497 kg; shielding (LiH and W), 1 unit at 1,250 kg; reactor control and instrumentation, 1 unit at 6 kg; reactor control mechanism, 1 unit at 18 kg; Stirling convertors (gas bearing), 8 units at 110 kg each for 878 kg; Stirling convertor-to-reactor structure, 8 units at 12 kg each for 93 kg; balance of core assembly, 1 unit at 1,000 kg; and assembly structure and cold plate, 1 unit at 228 kg. The shielding line item, at 1,250 kg, is the single largest component in the reactor's Fission Power Subsystem mass.

The conclusions restate this result in rounded terms: the design is "far above the goal of 6 t and cannot be landed with the chosen mobility system" (p. 8). The 6,000 kg design-goal figure and the "significantly exceeded" characterization both appear in Section I (p. 1-2); the achieved total, from the Master Equipment List, is 10,046 kg for the three FSPS elements combined.

The source does not state an explicit system-level specific-power figure in W/kg for the completed design. It states only the qualitative claim that "reactors scale [specific power (W/kg)] very efficiently with increasing power" (p. 4), made in the context of trading Stirling cold-end temperature, not as a result for this design. Computed from the paper's own reported masses at the stated 40 kWe design point: on the reactor element's final mass of 7,334 kg (basic plus MGA plus margin), 40,000 We divided by 7,334 kg is 5.45 W/kg; on that element's basic mass of 5,590 kg with no MGA or margin, 40,000 We divided by 5,590 kg is 7.16 W/kg; on the total mass of all three FSPS elements carried by the lander, 10,046 kg, 40,000 We divided by 10,046 kg is 3.98 W/kg, which is consistent with the conclusions' own framing of the design as an "~10 t" system delivering 40 kWe.

Reactor element deployment (Fig. 8, p. 5) pivots two outriggers to the surface and deploys the double-sided reactor radiator after the sled is set down. Control system element deployment (Fig. 11, p. 7) reaches a deployed height of 623 cm from a stowed envelope of 160 cm by 278 cm by 123 cm, and carries the electronics radiator, two fixed single-sided shunt radiators, a 50 m cable spool, and two low-gain Ka-band antennas providing hemispherical coverage, with two antennas used so coverage continues when one is obstructed by the deployed radiator. Cable-and-spool element deployment (Fig. 15, p. 8) reaches a deployed height of 350 cm from a stowed envelope of 160 cm by 224 cm by 85 cm, and carries the double-sided electronics radiator, the 1 km transmission cable spool, and the redundant DDCU and PDU pairs.

The conclusions section characterizes the design as "just one design solution for such a power system, focusing on nearer-term technologies" (p. 8). Using the current rover chassis to deploy the 40 kWe system requires three separate elements across two trips, adding complexity, mass, and an additional trip to and from the lander; a new dedicated rover could avoid this but at added cost. Laying the reactor down and placing control electronics 50 m away allows directional shielding to be optimized for the crew's 5 rem/yr limit while eliminating added shielding for the control electronics. Two further options were, in the paper's words, "addressed at least cursorily": modifying the design for lunar equatorial use, estimated to require 62% more radiator area and different radiator configurations for all elements, and keeping the reactor on the lander, judged to have a mass solution similar to the current point design if the lander can be placed more than 1 km from the crew, in which case only the control system and cable-and-spool elements would need to be unloaded and deployed. The source states that further work is needed to assess radiation and lander interactions for that configuration.

### Limitations

Design scalability to power levels above 40 kWe was explicitly excluded from the study's scope (p. 2). The cable mass optimization allocates mass only for a vacuum-rated insulated cable and does not include micrometeoroid shielding or redundancy (p. 7). No final cargo lander design has been selected; only an approximate delivery mass of 12 t and a volume envelope are defined, and the off-loading system needed to move the FSPS off the lander is described as required but undefined (p. 2). The equatorial-siting and reactor-on-lander alternative configurations are explicitly described as addressed only cursorily, with further work identified as needed (p. 8). The Stirling power train includes full controller redundancy but no spare Stirling convertors, so a forced convertor-pair failure is stated to degrade system output by approximately one-quarter per lost pair (p. 4). The achieved total mass of 10,046 kg for the three FSPS elements is stated by the source itself to exceed the 6,000 kg design goal and to be incompatible with landing via the chosen mobility system (p. 8).

Two referenced figures are graphical/tabular exhibits whose full content is not reproduced in the surrounding prose: Figure 1 (p. 1), captioned "Deployable FSPS Top-Level Requirements," and Figure 2 (p. 1-2), captioned "FSPS Design Goals." The prose around Figure 2 states only the single mass goal of 6,000 kg; whatever other top-level requirements or design goals (schedule, lifetime, TRL, cost, or similar) these two figures may list are not stated in the extracted text.

### Topic mapping

Section I, Introduction (p. 1-2), covers the motivating power-demand context, the top-level requirements and design goals including the 6,000 kg mass goal and its overrun, and the transportability approach using the repurposed pressurized-rover chassis and JSC sled concept. Section II, Concept of Operations (p. 2-3), covers cargo-lander delivery assumptions, the two-trip rover deployment sequence, and the division of the FSPS into reactor, control, and cable-and-spool elements.

Section III.A (p. 3-6) covers reactor design, the HALEU/yttrium-hydride heat pipe reactor, thermal design including radiator sizing and the efficiency chain in Tables III through V, and reactor element configuration and stowed/deployed geometry. Section III.B (p. 6-7) covers control system design: Stirling controller function, the 240 VAC/50 m/rectifier/DDCU power-conversion and cabling chain, battery sizing, and control-element configuration. Section III.C (p. 7-8) covers the 1 km transmission cable trade shown in Figure 13, the downstream DDCU/PDU power-down conversion stage shown in Figure 14, and cable-and-spool element configuration.

Section IV, Conclusions (p. 8), covers the mass overrun against the 6 t goal, deployment complexity from the three-element two-trip approach, the shielding-geometry findings for crew standoff, and the equatorial and reactor-on-lander alternatives that the source describes as addressed only cursorily.
