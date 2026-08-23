# NASA 2023 - Carbothermal Reduction Demonstration (CaRD) Project Status

## Comprehensive Technical Summary

## Citation

National Aeronautics and Space Administration. (2023). *Carbothermal Reduction Demonstration (CaRD) project status* [Slide deck]. DOI: not printed in source.

Publisher URL: not printed in source.

## Metadata

Study type: NASA internal project status slide deck (institutional gray literature, no peer review, no named authors). Institution: NASA, with project partners named on the slides: Canadian Space Agency (soil excavation), Sierra Space / Orbitec (carbothermal reactor), Physical Sciences Inc. (solar concentrator), NASA Johnson Space Center (water electrolysis, liquefaction, propulsion), and University of Texas at El Paso, UTEP (methanation, shown on the p. 1 process diagram). Publication date: 2023, per the title-slide banner ("CaRD Project Status 2023"); every slide footer, however, reads "GCD FY18 Mid Year Review," a leftover template footer that conflicts with the 2023 date. This discrepancy is reported as printed and not resolved. Open-access status: not specified; no distribution statement, author list, or DOI is printed anywhere in the deck.

---

## Abstract

An eleven-slide NASA project status deck (2023) on the Carbothermal Reduction Demonstration (CaRD) project, which determines the performance of carbothermal reduction of lunar regolith (SiO2 + 2C -> Si + 2CO) for oxygen production. The deck traces project heritage from a 2010 "Dust to Thrust" demonstration through a brassboard environmental test campaign and oxygen-yield results, a CaRD prototype subsystem architecture, a pilot-to-full-scale production roadmap, and process commonality with Mars ISRU propellant production and life support (ECLSS). States a FY24 prototype test milestone and a targeted 2027 lunar-surface payload demonstration.

---

### Background and objective

The CaRD project scope covers all subsystems needed to determine the performance of the carbothermal reduction process on the lunar surface, given as SiO2 + 2C -> Si + 2CO; downstream components that convert the CO byproduct into oxygen gas can be implemented at larger scale once the reaction yield is known (p. 1). The deck frames the project on a "Past / Present / Future" timeline: the "past" anchor is a 2010 "Dust to Thrust" demonstration combining a Canadian Space Agency excavator, an Orbitec (now Sierra Space) carbothermal reactor, a Physical Sciences Inc. solar concentrator, and NASA Johnson Space Center water electrolysis, liquefaction, and propulsion subsystems, with a sintered-pad plume-effects contribution from Physical Sciences Inc. and NORCAT (p. 1, p. 2). The "present" state is a carbothermal reactor developed by Sierra Space and tested inside JSC's 15-foot dirty thermal vacuum chamber; the "future" milestone is a CaRD prototype test in FY24 targeting a payload demonstration on the lunar surface in 2027 (p. 1). The deck states a landed-cost motivation for in-situ production: the cost to land 1 kg on the lunar surface is given as $1.2M, so landing 10 tonnes of LOX at that rate would cost $12B (p. 1).

### Methods and scope

- A CaRD environmental test unit ("brassboard") was carried through an environmental qualification sequence intended to demonstrate TRL 4 to 6 for the Moon: component thermal vacuum (TVAC), component vibration, component dust, subsystem vibration, integrated vibration, thermal cycling, component thermal vacuum, integrated thermal vacuum, and torque margin/dust testing (p. 3).
- COMSOL Multiphysics analysis was run on the solar-concentrator optics, covering lens heating analysis and lens stress analysis (p. 5).
- A CaRD prototype integrates the reactor, solar concentrator, an arm mockup, gas analysis instrumentation, avionics/software, a lander mockup, thermal management, and a reactor fluid system (p. 7).
- The long-term roadmap tracks a pilot plant (1 MT/yr, 0.2 kg/hr) toward a full-scale plant (10 MT/yr, 2 kg/hr), advanced through an SBIR Phase 3 Carbothermal Oxygen Production Reactor (COPR) Tipping Point project with Sierra Space, alongside a Compass Study sizing 3.5 MT/yr per module (p. 8). Prior/parallel work items listed include a brassboard reactor (SBIR Phase 3, Sierra Space), a brassboard waveguide (SBIR Phase 2, Physical Sciences Inc.), a prototype reactor (COPR Tipping Point, Sierra Space), and a prototype waveguide (SBIR Phase 3, Physical Sciences Inc.) (p. 8).
- Process-commonality diagrams compare the end-to-end lunar carbothermal oxygen-from-regolith process against a Mars propellant production process, and separately against a modified lunar carbothermal concept that also produces methane via pyrolysis; all three share subsystems such as the condenser, water electrolysis, dryer, and liquefaction/maintenance stages, framed as common to Mars ISRU, carbothermal, and ECLSS (life support) (p. 9, p. 11).

### Key findings

- Brassboard oxygen yield (p. 6): CaRD Ambient test, 13.42 g O2 extracted per kWh thermal; CaRD Vacuum 1, 11.53 g O2/kWh thermal; CaRD Vacuum 2, 15.79 g O2/kWh thermal; CaRD Vacuum 3, 10.77 g O2/kWh thermal. The slide states this test will be repeated in 2024 using an automated reactor developed by Sierra Space under the Carbothermal Oxygen Production Reactor (COPR) Tipping Point project.
- Scalability and modularity table (p. 10), reported as tonnes of O2 produced over a stated number of days, with resulting kg/day and kg/hr rates: O2FR pilot plant, 1.000 t O2 over 182 days = 5.49 kg/day = 0.23 kg/hr; O2FR full scale, 10.000 t O2 over 182 days = 54.95 kg/day = 2.29 kg/hr; Mars ISRU LOX/Methane case, 27.912 t O2 over 480 days = 58.15 kg/day = 2.42 kg/hr. The full-scale and Mars ISRU rows are sourced on the slide to Kleinhenz, J. E., & Paz, A. (2017), An ISRU propellant production system for a fully fueled Mars Ascent Vehicle, 10th Symposium on Space Resource Utilization, p. 0423.
- Packaging constraints tied to the scalability table (p. 10): a notional Mars ISRU module is sized for 40% of Mars LOX/methane production, with three modules at 40% each totaling 120% of full scale; the module footprint is bounded by a 180-inch diameter (matching the Falcon 9 payload fairing diameter), while a 213-inch-diameter solar mirror is stated as the minimum required for 1 tonne per year at current results; components common to the Mars ISRU module are stated to fit inside a flex rover cargo box.
- Landed-cost figure (p. 1): $1.2M per kg to land on the lunar surface, implying $12B to land 10 tonnes of LOX at that rate.
- Combined LOX/methane production is described as the preferred "Moon to Mars" propellant architecture if solid carbon (from carbothermal reduction) is combined with hydrogen sourced from lunar water; current hydrogen-liquefaction cryocooler technology is stated to require over a year of operation to return landed mass, assuming 183 days of sunlight per year, citing Nugent, B. T., Grotenrath, R. J., & Johnson, W. L. (2022), 20 Watt 20 Kelvin Reverse Turbo-Brayton Cycle Cryocooler Testing and Applications (p. 11).
- The use of solid carbon to drive carbothermal reduction is stated to have been demonstrated for terrestrial silicon production, citing Maeng, S. H., Lee, H., Park, M. S., Park, S., Jeong, J., & Kim, S. (2020), Ultrafast carbothermal reduction of silica to silicon using a CO2 laser beam, Scientific Reports, 10(1), 21730 (p. 11).
- Methane pyrolysis technology is stated to be under development for terrestrial hydrogen and carbon production, marked with a superscript "3" reference callout on the slide (p. 11); see Limitations for the corresponding reference-list discrepancy.
- The carbothermal reduction process is defined on the scope slide by the reaction SiO2 + 2C -> Si + 2CO (p. 1).

### Limitations

- The document is a project status slide deck rather than a full technical report: most slides are block diagrams, hardware photographs, and CAD renders with sparse running text, which limits the methodological detail available for several subsystems (e.g., the p. 5 COMSOL analysis and the p. 7 prototype integration carry no accompanying numeric results in the deck).
- No author byline, journal/venue, volume, or DOI is printed anywhere in the deck; the citation above is constructed as institutional gray literature per project convention.
- Every slide footer reads "GCD FY18 Mid Year Review," which conflicts with the "2023" date printed on the title slide banner; this is reported as printed and not reconciled.
- On p. 11, the text cites a superscript "3" reference for the methane-pyrolysis claim, but the printed reference list on that slide numbers only two items (1: Nugent et al., 2022; 2: Maeng et al., 2020); no reference 3 is printed on the slide.
- Reported numeric precision is inconsistent across tables: the p. 6 oxygen-yield values are given to two decimal places and the p. 10 scalability values to two or three decimal places, with no stated measurement uncertainty or number of test replicates beyond the four brassboard runs listed.
- The deck does not state a formal TRL number reached by the CaRD prototype itself; p. 3 describes the qualification test sequence used to target "TRL 4 to 6 for the Moon" for the earlier OVEN unit without a corresponding statement for the CaRD brassboard or prototype.

### Topic mapping

- p. 1: project scope and process equation, past/present/future roadmap overview, landed-cost motivation.
- p. 2 to p. 3: heritage "Dust to Thrust" 2010 demonstration and the TRL 4-to-6 environmental qualification test sequence.
- p. 4 to p. 5: brassboard environmental test unit hardware and COMSOL solar-concentrator optics analysis.
- p. 6: brassboard oxygen-yield test results (ambient and three vacuum runs).
- p. 7: CaRD prototype subsystem integration.
- p. 8: long-term roadmap from pilot plant to full-scale plant, with associated development projects.
- p. 9 and p. 11: process commonality between lunar carbothermal oxygen production, Mars ISRU propellant production, and ECLSS.
- p. 10: scalability and modularity table, production-rate figures, and packaging/fairing constraints.
