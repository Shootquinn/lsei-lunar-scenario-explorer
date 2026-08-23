# Kerslake 2007 - Lunar Surface-to-Surface Power Transfer
## Comprehensive Technical Summary

## Citation

Kerslake, T. W. (2007). *Lunar surface-to-surface power transfer* (NASA/TM-2007-215041). National Aeronautics and Space Administration, Glenn Research Center. http://gltrs.grc.nasa.gov

Publisher URL: http://gltrs.grc.nasa.gov

## Metadata

Technical memorandum (concept design study), prepared as conference paper number 167 for the Space Technology and Applications International Forum (STAIF-2008), sponsored by the University of New Mexico's Institute for Space and Nuclear Power Studies, Albuquerque, New Mexico, February 10-14, 2008 · National Aeronautics and Space Administration, Glenn Research Center, Cleveland, Ohio (author affiliation); performing organization report number E-16242 · Report date 01-12-2007 (issued December 2007) · Distribution statement "Unclassified-Unlimited," Subject Categories 20, 32, 33, 36; available from NASA Center for Aerospace Information and the National Technical Information Service; no DOI is printed in the source.

---

## Abstract

Concept-design study of lunar surface-to-surface electric power transfer subsystems for a human lunar outpost under NASA study in the 2020s. Covers four technology options, AC power cable, DC power cable, radiofrequency (RF) beamed power, and solid-state laser beamed power, for power levels of 1 to 50 kW over distances of 0.1 to 10 km. Spreadsheet-based sizing tools quantify subsystem mass and performance for each option, supported by a qualitative assessment of concept of operations, hazards, relative cost, and technology development needs. The author recommends a DC power cable subsystem as the option that minimizes mass, mission risk, and programmatic cost, with an AC power cable subsystem as a close second choice.

---

### Background and objective

The study responds to lunar outpost planning under "The Vision for Space Exploration," in which NASA's Lunar Architecture Team (LAT) defined a strategy for a permanent human outpost near the lunar South Pole on the Shackleton Crater rim, citing Cooke, Lavoie, and Volosin (2006) (p. 1). Because outpost elements, including an in situ resource utilization (ISRU) oxygen production plant, must be sited remotely from the outpost core to limit contamination from plant-operations dust, power must be transferred across the surface to these remote payload elements (p. 1). The stated goal is to develop lunar surface-to-surface power transfer subsystem concept designs, compare their quantitative and qualitative metrics, and recommend the option with the best balance of mass, performance, risk, and cost (p. 1). Prior studies cited by the author focused mainly on cable transmission (Gordon, 2001; Khan et al., 2006; Sprouse, 1991); this study extends the comparison to RF and laser beamed power (p. 1).

### Methods and scope

Concept designs were prepared for power transfer levels of 1 to 50 kW and distances of 0.1 to 10 km, consistent with LAT lunar outpost requirements (p. 1). Spreadsheet-based sizing tools were built from subsystem design inputs and used to compute design-option mass and performance. Options were compared on power transfer subsystem mass, power source plus power transfer subsystem mass, the input-to-output power "gear ratio" (Pin/Pout), subsystem efficiency, and net payload element power for a fixed 10 kW source power case consistent with LAT payload requirements (p. 1 to 2).

Source voltage was treated as regulated 160 VDC (consistent with the LAT solar Standard Power Unit) or regulated 300 VAC single-phase, 100 Hz (consistent with a fission reactor and Stirling engine power plant); payload voltage was fixed at regulated 28 VDC (p. 3).

For DC and AC cables, operating voltage was varied parametrically (DC: 160, 300, 500, 1000, 2000, 3000, 4000, 5000 VDC; AC: 500, 1000, 2000, 3000, 4000, 5000 VAC rms, 400 Hz, 3-phase, 0.9 power factor), with conductor gauge sized to hold cable efficiency (1-V/V) between 0.75 and 0.997, subject to a minimum 16 AWG conductor size (p. 3). Cable length was varied at 0.1, 0.2, 0.5, 1, 5, and 10 km. Cables were modeled as spool-deployed, twisted-pair, hot/return, stranded copper conductors with 3:2 redundancy (fail-operate at full power, fail-safe at 50 percent power), ETFE (Tefzel) insulation, filler rods, and an abrasion-resistant thermal control jacket, passively cooled at a 300 K operating temperature representative of the cool lunar south-polar surface (p. 3 to 4). A separate side study compared copper and aluminum conductors and stainless-steel meteoroid/EMI armoring at a fixed 270 VDC, 6.88 kW design point, 3:2, 2:2, and 1:1 redundancy levels, and 50, 100, and 200 m lengths (p. 4).

Power electronics were sized using algorithms from Metcalf (2002), evolved from International Space Station heritage models in Metcalf (1992): Weinberg-topology DDCUs (40 kHz inversion, 1 percent bus ripple) for DC cables, or AC-to-AC frequency converter units (AACUs, DC-link resonance topology, 5 percent bus ripple) for AC cables (p. 4). Electronics were cooled by an Active Thermal Control System (ATCS) with a 353 K effective rejection temperature, a 6 kg/m2 planar radiator areal mass, and a 50 percent view to deep space and 200 K surface; a 5 percent secondary structure and integration mass fraction was applied throughout (p. 4).

For RF, the DC-to-RF converter is a 2.45 GHz mature oven magnetron (Long, 1990) or a developing 5.8 GHz magnetron (Mitani et al., 2006), each modeled at 2 kg/kW specific mass, with operating efficiencies of 0.7 (2.45 GHz) and 0.4 (5.8 GHz) at a negative 4000 VDC cathode voltage (p. 5). A deployable parabolic transmit dish (0.75 efficiency, 1 kg/m2 areal mass) and a deployable circular rectenna array (element efficiency 0.6 to 0.9, 2 kg/m2 areal mass) were each capped at about 4 m aperture radius (about 50 m2 projected area) for lander stowage (p. 5). RF power electronics used a 0.95-efficient, 3.4 kg/kW boost DDCU and a 0.97-efficient, 13.3 kg/kW sequential shunt unit (SSU) regulator (p. 5).

For laser, the transmitter is a solid-state AlGaAs/Ge quantum-well laser diode module array (0.8 micron wavelength, per Williams et al., 1993) at an assumed 0.5 conversion efficiency at 1368 W/m2 and 293 K, scaled logarithmically with intensity and empirically with temperature (per Scifres et al., 1982); a fixed 1 m diameter (0.8 m2) array was modeled at 12 kg/kW specific mass plus 10 percent secondary structure, with 293 K and 325 K module control temperatures both assessed (p. 6). The receiver is a fixed 1 m diameter AlGaAs photovoltaic (PV) array (0.5 efficiency, 2 kg/m2, 320 K control temperature) with a peripheral mirror reflector (p. 6 to 7). A 10-year mission degradation allowance included 1.5 percent per year dust-accumulation loss and 0.5 percent per year meteoroid/ejecta loss (p. 7). Laser power electronics used a 0.95-efficient, 6.3 kg/kW buck DDCU and a 0.97-efficient, 13.3 kg/kW SSU regulator (p. 7).

Notional concepts of operations were developed for deployment, start-up, and nominal operation of each option, covering pre-integration with source and payload, EVA or telerobotic deployment, alignment, activation, and a low-power-to-high-power ramp with crew evacuation for beamed options (p. 8 to 9).

### Key findings

DC power cable subsystem, point design and parametric sweeps (Figures 8 to 13, p. 9 to 12):

- The 10 kW, 1000 m, 1000 VDC point design totals 766.5 kg (76.7 kg/kW): power cable 453.7 kg, step-down DDCU 108.0 kg, step-up DDCU 81.2 kg, control cable 50.0 kg, cabling spool and deployer mechanism 50.0 kg, with the remainder in connectors, thermal control system (TCS), and secondary structure (p. 10, fig. 8).
- Across the 1 to 50 kW power sweep at 1000 m and 1000 VDC, total mass runs 516.0 kg (1 kW), 538.1 kg (5 kW), 766.5 kg (10 kW), 1142.2 kg (20 kW), and 2193.7 kg (50 kW); specific mass drops from 516.0 kg/kW at 1 kW to 43.9 kg/kW at 50 kW. Mass is essentially proportional to power level except below about 5 kW, where the minimum 16 AWG conductor gauge is reached and further mass savings are not realized (p. 9 to 10, fig. 8).
- Across the 50 m to 10 km distance sweep at 10 kW and 1000 VDC, total mass runs from 275.0 kg at 50 m to 8223.5 kg at 10 km, driven almost entirely by power cable mass (16.0 kg at 50 m to 7382.9 kg at 10 km) while power electronics mass stays nearly fixed; specific mass runs 27.5 to 822.3 kg/kW over the same range (p. 11, fig. 10).
- Across the 160 to 5000 VDC voltage sweep at 10 kW and 1000 m, total subsystem mass reaches a minimum of 550.5 kg (55.1 kg/kW) at 2000 VDC; the 1000 VDC point design totals 766.5 kg (76.7 kg/kW). At the low 160 VDC end, no step-up conversion is needed but power cable mass reaches 1699.4 kg, giving the highest total mass in the sweep, 1946.3 kg (p. 12, fig. 12 to 13).
- The source text extracted in tabular form (spreadsheet screenshots) shows the cable operating temperature input as 400 K in several places; the figure images and body text state a 300 K cable operating temperature consistent with the cool lunar south polar surface. This discrepancy is noted as it appears in the source's own data presentation, without resolving it (p. 3 to 4, 9 to 12, fig. 8, 10, 12).

Figure 8 mass breakdown, kg, DC copper cable, 2-fault-tolerant, fixed at 1000 m and 1000 VDC (p. 10):

| Item | 1 kW | 5 kW | 10 kW | 20 kW | 50 kW |
|---|---|---|---|---|---|
| Step-up DDCU | 39.5 | 39.5 | 81.2 | 118.7 | 220.6 |
| Power cable | 323.5 | 312.3 | 453.7 | 711.6 | 1425.2 |
| Power cable connectors | 3.2 | 3.1 | 4.5 | 7.1 | 14.3 |
| Control cable | 50.0 | 50.0 | 50.0 | 50.0 | 50.0 |
| Step-down DDCU | 42.0 | 71.3 | 108.0 | 174.0 | 368.6 |
| Step-up TCS | 0.6 | 1.9 | 3.5 | 6.8 | 16.6 |
| Step-down TCS | 0.5 | 1.8 | 3.3 | 6.2 | 15.0 |
| Spool and deployer | 50.0 | 50.0 | 50.0 | 50.0 | 50.0 |
| Secondary structure (5%) | 6.6 | 8.2 | 12.3 | 17.8 | 33.5 |
| Total mass | 516.0 | 538.1 | 766.5 | 1142.2 | 2193.7 |
| Specific mass, kg/kW | 516.0 | 107.6 | 76.7 | 57.1 | 43.9 |

Figure 10 mass breakdown, kg, DC copper cable, 2-fault-tolerant, fixed at 10 kW and 1000 VDC (p. 11):

| Item | 50 m | 100 m | 200 m | 500 m | 1000 m | 5000 m | 10000 m |
|---|---|---|---|---|---|---|---|
| Step-up DDCU | 79.4 | 79.6 | 79.6 | 81.2 | 81.2 | 83.4 | 88.6 |
| Power cable | 16.0 | 31.8 | 93.0 | 156.0 | 453.7 | 4016.0 | 7382.9 |
| Power cable connectors | 0.2 | 0.3 | 0.9 | 1.6 | 4.5 | 40.2 | 73.8 |
| Control cable | 2.5 | 5.0 | 10.0 | 25.0 | 50.0 | 250.0 | 500.0 |
| Step-down DDCU | 108.0 | 108.0 | 108.0 | 108.0 | 108.0 | 108.0 | 108.0 |
| Step-up TCS | 3.5 | 3.4 | 3.4 | 3.5 | 3.5 | 3.7 | 4.2 |
| Step-down TCS | 3.3 | 3.3 | 3.3 | 3.3 | 3.3 | 3.3 | 3.3 |
| Spool and deployer | 50.0 | 50.0 | 50.0 | 50.0 | 50.0 | 50.0 | 50.0 |
| Secondary structure (5%) | 12.2 | 12.2 | 12.2 | 12.3 | 12.3 | 12.4 | 12.7 |
| Total mass | 275.0 | 293.6 | 360.4 | 440.9 | 766.5 | 4567.0 | 8223.5 |
| Specific mass, kg/kW | 27.5 | 29.4 | 36.0 | 44.1 | 76.7 | 456.7 | 822.3 |

Figure 12 mass breakdown, kg, DC copper cable, 2-fault-tolerant, fixed at 10 kW and 1000 m (p. 12). The 1000 VDC column is the point design highlighted in the source:

| Item | 160 VDC | 300 VDC | 500 VDC | 1000 VDC | 2000 VDC | 3000 VDC | 4000 VDC | 5000 VDC |
|---|---|---|---|---|---|---|---|---|
| Step-up DDCU | 0.0 | 92.4 | 84.9 | 81.2 | 80.5 | 78.7 | 78.4 | 78.4 |
| Power cable | 1699.4 | 1115.4 | 796.9 | 453.7 | 241.1 | 338.6 | 361.0 | 399.7 |
| Power cable connectors | 17.0 | 11.2 | 8.0 | 4.5 | 2.4 | 3.4 | 3.6 | 4.0 |
| Control cable | 50.0 | 50.0 | 50.0 | 50.0 | 50.0 | 50.0 | 50.0 | 50.0 |
| Step-down DDCU | 118.1 | 112.3 | 109.6 | 108.0 | 107.5 | 107.6 | 107.9 | 108.2 |
| Step-up TCS | 0.0 | 4.2 | 3.7 | 3.5 | 3.5 | 3.4 | 3.4 | 3.4 |
| Step-down TCS | 3.3 | 3.3 | 3.3 | 3.3 | 3.3 | 3.3 | 3.3 | 3.3 |
| Spool and deployer | 50.0 | 50.0 | 50.0 | 50.0 | 50.0 | 50.0 | 50.0 | 50.0 |
| Secondary structure (5%) | 8.6 | 13.1 | 12.6 | 12.3 | 12.2 | 12.1 | 12.1 | 12.2 |
| Total mass | 1946.3 | 1451.8 | 1118.9 | 766.5 | 550.5 | 647.1 | 669.7 | 709.1 |
| Specific mass, kg/kW | 194.6 | 145.2 | 111.9 | 76.7 | 55.1 | 64.7 | 67.0 | 70.9 |

DC cable conductor and armoring side study, 270 VDC, 6.88 kW point (Figure 14, p. 13):

- At 200 m length and 3:2 redundancy, unshielded long power cable mass is 205.6 kg (copper) versus 167.6 kg (aluminum); with stainless-steel braided armoring/EMI shielding added, mass rises to 269.8 kg (copper) and 231.8 kg (aluminum).
- Aluminum conductors are about 20 percent lighter than copper but about 15 percent larger in diameter and minimum bend radius; stainless-steel armoring adds roughly 40 percent to baseline cable mass. Cable mass grows roughly with length to the 1.5 power for this cable class (p. 13).
- The author's assessment favors unshielded, unarmored copper cable with 3:2 redundancy over aluminum, citing copper's superior bend radius, lower stowed volume, greater fault current capacity, no galvanic corrosion controls, and flight heritage; an extra conductor pair for redundancy is suggested as a lower-mass alternative to armoring against meteoroid damage (p. 13).

AC power cable subsystem (Figures 15 to 20, p. 13 to 16):

- At 10 kW, 1000 m, 1000 VAC (400 Hz, 3-phase), total mass is 1001.1 kg (100.1 kg/kW), compared with 766.5 kg (76.7 kg/kW) for the equivalent DC point design.
- AC subsystem mass is likewise essentially proportional to payload power level, and the AC mass minimum occurs near 2000 VAC (p. 13, 15).

RF subsystem (Figures 21 to 35, and Figure 42 to 46 comparison; text discussion p. 17 to 19):

- At 10 kW and 1000 m, the extracted text states AC-cable-comparable totals for RF of 2449.2 kg (2.45 GHz) and 1228.7 kg (5.8 GHz); the 5.8 GHz system is about half the mass of the 2.45 GHz system at this power and distance because higher frequency improves antenna gain and free-space transmission efficiency (p. 17).
- Both source power and subsystem mass grow by orders of magnitude with transmission distance because free-space loss increases exponentially with distance, and aperture areas are already capped by lander stowage limits (p. 17).

Laser subsystem (Figure 36 to 41 point design and sweeps; text discussion p. 25 to 28):

- At 10 kW and 1 km, laser subsystem totals are approximately 1777 kg at 293 K module temperature and 1677 kg at 325 K, per the cross-option comparison (fig. 45).
- The laser module ATCS is the single largest mass contributor in the laser subsystem, about 27 percent of subsystem mass at 293 K control temperature, dropping to about 16 percent at the higher 325 K control temperature, at the cost of about 20 percent higher required source power from reduced laser efficiency (p. 27 to 28).

Net efficiency comparison at 10 kW (Figure 42, p. 29):

- Power cable options exceed 70 percent net efficiency (DC 1000 VDC: 88.5 percent at 0.1 km, 85.5 percent at 1 km, 71.9 percent at 10 km; AC: 86.2 percent at 0.1 km, 69.4 percent at 10 km).
- RF and laser options remain below 20 percent at all distances (RF 2.45 GHz: 30.3 percent at 0.1 km falling to 0.05 percent at 10 km; RF 5.8 GHz: 62.5 percent falling to 0.1 percent; laser: 19.6 percent at 293 K and 15.9 percent at 325 K, essentially flat with distance).

Cross-option comparison tables at a fixed 10 kW payload/source level (Figures 43 to 46, p. 30 to 31). The 1 km column is identified in the source as the point of comparison consistent with LAT distances; asterisked cells are as printed in the source, denoting values not computed by the study at that cell.

Figure 43, net power delivered to the payload with 10 kW source power, kW:

| Option | 0.1 km | 1 km | 10 km |
|---|---|---|---|
| DC cable, 1000 VDC | 8.85 | 8.55 | 7.19 |
| DC cable, 300 VDC | not given | 7.19 | not given |
| AC cable, 1000 VAC, 400 Hz, 3-phase | 8.62 | 8.20 | 6.94 |
| RF, 2.45 GHz | 3.03 | 0.45 | 0.00 |
| RF, 5.8 GHz | 6.25 | 1.27 | 0.01 |
| Laser, 293 K | 1.96 | 1.96 | 1.96 |
| Laser, 325 K | 1.59 | 1.59 | 1.59 |

Figure 44, specific mass in kg/kW with the power ratio Pin/Pout in parentheses, for 10 kW delivered to the payload:

| Option | 0.1 km | 1 km | 10 km |
|---|---|---|---|
| DC cable, 1000 VDC | 29.4 (1.13) | 76.7 (1.17) | 822.3 (1.39) |
| DC cable, 300 VDC | not given | 145.2 (1.39) | not given |
| AC cable | 54.7 (1.16) | 100.1 (1.22) | 801.7 (1.44) |
| RF, 2.45 GHz | 53.2 (3.30) | 244.9 (22.00) | 20,991.9 (2203.40) |
| RF, 5.8 GHz | 39.0 (1.60) | 122.9 (7.90) | 8,787.2 (789.80) |
| Laser, 293 K | 177.7 (5.10) | 177.7 (5.10) | 177.7 (5.10) |
| Laser, 325 K | 167.7 (6.30) | 167.7 (6.30) | 167.7 (6.30) |

Figure 45, power transfer subsystem mass, kg:

| Option | 0.1 km | 1 km | 10 km |
|---|---|---|---|
| DC cable, 1000 VDC | 294 | 767 | 8,223 |
| DC cable, 300 VDC | not given | 1,452 | not given |
| AC cable | 547 | 1,001 | 8,017 |
| RF, 2.45 GHz | 532 | 2,449 | 209,919 |
| RF, 5.8 GHz | 390 | 1,229 | 87,872 |
| Laser, 293 K | 1,777 | 1,777 | 1,777 |
| Laser, 325 K | 1,677 | 1,677 | 1,677 |

Figure 46, combined mass of source power system plus power transfer subsystem, kg. Source mass assumption is the LAT solar Standard Power Unit option 2 at 183 kg/kW for all options except AC cable, which is paired with the LAT nuclear fission surface power system at 252 kg/kW (p. 31):

| Option | 0.1 km | 1 km | 10 km |
|---|---|---|---|
| DC cable, 1000 VDC | 2,361 | 2,907 | 10,765 |
| DC cable, 300 VDC | not given | 3,994 | not given |
| AC cable | 3,470 | 4,075 | 11,646 |
| RF, 2.45 GHz | 6,567 | 42,683 | 4,239,579 |
| RF, 5.8 GHz | 3,316 | 15,677 | 1,532,288 |
| Laser, 293 K | 11,104 | 11,104 | 11,104 |
| Laser, 325 K | 13,199 | 13,199 | 13,199 |

- At 10 kW and 1 km, the DC 1000 VDC cable option has the lowest combined mass (2,907 kg), followed by the AC cable (4,075 kg); beamed options are far higher (11,104 kg laser, 15,677 to 42,683 kg RF). The source notes a typical lunar lander cargo down-mass capacity of about 15,000 kg for context, observing that the laser option at 1 km consumes most of that capacity and the RF options exceed it (p. 31).
- Beamed power "gear ratios" (Pin/Pout) of 5 to 22 at 10 kW/1 km would, in the source's assessment, require essentially the full outpost power system output and are judged unacceptable at that combination of power and distance; cable gear ratios remain just above 1 (p. 30).

Hazards and controls (p. 31 to 32):

- Power cable: high-voltage exposure is controlled by grounded enclosures, insulated conductors and jackets, and recessed connector pins; free-laying cable presents an EVA trip hazard and rover fouling hazard, addressed in the design by a spool/payout mechanism intended to lay the cable flush, with cable guards recommended for high-traffic crossings (mass of guards not assessed).
- RF: down-range RF exposure from the primary beam, spillage, side lobes, and reflections poses an intraocular heating hazard to EVA crew and a risk to nearby equipment; controls include grounded EMI shielding, thermal insulation blankets, and manually or sensor-triggered emergency transmitter shutoff with defined crew and vehicle keep-out zones (not yet fully defined).
- Laser: primary hazard is high flux, on the order of 5 suns at 10 kW transfer, requiring thermal protection blankets near the receiver and laser-reflective EVA visors for crew eye safety, plus keep-out zones and emergency shutoff similar to the RF case.

Technology needs and qualitative cost assessment (p. 32 to 33):

- DC cable: primary technology need is fast (40 kHz), high-quality chopper/rectifying diode technology for buck DDCU operation above 1 kV input; terrestrial IGBTs are commonly rated to 1200 V (with 3000 V expected within about 20 years), with 5000 V solid-state IGBTs available from one named vendor for ground use.
- AC cable: no major technology needs identified; cable deployment itself needs engineering and operations development for both AC and DC options.
- RF: needs higher-efficiency magnetron and rectenna technology above 2.45 GHz, and larger deployable rectenna structures.
- Laser: needs large laser diode array phase control and packaging, high-performance integral water heat pipe evaporators, and module thermoelectric coolers; both RF and laser need low-mass, large-area deployable heat rejection radiators.
- Qualitative relative cost ranking: power cable options are assessed as lowest cost "by a considerable margin (perhaps an order-of-magnitude)" given highest technology readiness level (TRL) and lowest complexity; RF is assessed as high cost given low-to-moderate TRL components and the largest gear ratio; laser is assessed as the highest cost option given the greatest technology and engineering development need (p. 33).

Conclusion and recommended avenues for further study (p. 33 to 34):

- The author concludes DC power cable technology is the superior option across the 1 to 50 kW, 0.1 to 10 km design space, citing lower mass, fewer components, lower complexity, more mature technology, lower required source power, higher delivered payload power, higher transfer efficiency, more modest thermal control needs, lower technology development need, likely lower cost, simpler concept of operations, maintenance-free long-term operation, minimal crew hazard, no line-of-sight restriction, and reconfigurability including possible daisy-chaining of cable segments. AC power cable is described as "a very close second place finisher" (p. 33).
- Cited challenges for the cable option include high-voltage, high-frequency switch technology; engineering development of a lunar surface cable spool/deployer; and deployment across impassable terrain, for which the source raises a mortar deployment method previously developed for the Apollo 16 lunar surface seismometer array cable, and used terrestrially for ship-to-ship or ship-to-shore line deployment, as a possible alternative to rover-trailer deployment (p. 33 to 34).
- Recommended further study includes defining high-voltage solid-state switching performance for feedback into buck DDCU design; exploring higher RF operating frequencies and Klystron sources; investigating compact, highly deployable rectenna structures; further characterizing state-of-the-art and advanced laser diode array performance and mass over a 10-year technology horizon; preparing quantitative technology and program cost estimates; further defining beamed-power integration, deployment, maintenance, degradation, and hazard-control details; and sizing an additional beamed-power option using solar concentrators with redirectable reflectors onto payload-area PV arrays, which would need a separate night-time keep-alive power system since it only functions during lunar daylight (p. 33 to 34).

### Limitations

The study is explicitly a preliminary concept-design comparison using spreadsheet-based sizing tools rather than detailed engineering design; the report itself is labeled a preprint and "formal draft or working paper... subject to revision as analysis proceeds" (unnumbered front matter page). Cost comparisons are stated by the author to be "qualitative and speculative" (p. 33), with no quantitative cost figures provided. Several supporting design elements are noted in the source as not yet assessed, including the mass of power cable trip-hazard guards, the definition of RF and laser keep-out zone control systems and their integration with outpost operations, and a fine temperature control system for individual laser modules (p. 6, 32). The laser subsystem analysis explicitly sets aside beam coherence requirements, noting that non-coherent beam collimation is likely an acceptable simplification at the lunar distances considered (10 km or less) but that this assumption itself needs further assessment (p. 6 to 7). Degradation modeling differs by option: laser/receiver degradation over a 10-year mission is explicitly modeled, while cable and RF subsystems are assumed to have negligible long-term performance degradation (p. 4 to 5, 7). Because all numeric results are presented only as spreadsheet-screenshot figures with no separately numbered tables in the document, several sweep tables extract with garbled or misaligned values from the PDF text layer (for example, the cable operating temperature input reading 400 K rather than the 300 K stated in the body text and legible in the figure images); this summary follows the figure images and prose over the garbled tabular extraction where the two conflict.

### Topic mapping

Introduction and study objective: unnumbered first page (p. 1). Subsystem design inputs, assumptions, and governing equations for DC/AC cable, RF, and laser options, including design limitations for each: p. 3 to 7. Concept of operations for each option: p. 8 to 9. DC power cable mass and performance results (power level, distance, and voltage sweeps, plus the conductor material/armoring side study): p. 9 to 13. AC power cable results: p. 13 to 16. RF subsystem results: p. 17 to 19 (data figures continue in unlabeled pages through the 20s). Laser subsystem results: p. 19 to 28 (culminating in the Figure 36 point-design table and Figures 37 to 41 sweep plots). Subsystem comparative metrics, net efficiency, and combined mass tables across all four options at fixed 10 kW: p. 29 to 31 (Figures 42 to 46). Subsystem hazards and controls by option: p. 31 to 32. Comparative operations observations, technology development requirements, and qualitative relative costs: p. 32 to 33. Avenues for further study and conclusion: p. 33 to 34. References: p. 34.
