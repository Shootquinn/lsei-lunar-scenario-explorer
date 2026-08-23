# Linne, Kleinhenz, and Paz 2020 - Lunar Water Pilot Plant Conceptual Design
## Comprehensive Technical Summary

## Citation

Linne, D. L., Kleinhenz, J. E., & Paz, A. (2020). Lunar water pilot plant conceptual design [Conference presentation]. AIAA ASCEND 2020, November 16-18, 2020.

Publisher URL: not printed in source.

## Metadata

Study type: conceptual design study (NASA COMPASS point-design team), presented as a 26-slide conference deck. Institution: NASA Glenn Research Center (GRC), with excavator and umbilical hardware development credited to NASA Johnson Space Center (JSC) and NASA Kennedy Space Center (KSC). Publication date: presented November 16-18, 2020, at the AIAA ASCEND conference. Open-access status: slide 2 states the material "is a work of the U.S. Government and is not subject to copyright protection in the United States"; no DOI, publisher URL, or NTRS accession number is printed anywhere in the deck itself. Project records external to this source give NTRS accession 20205008294, but that number does not appear in the source and is not used to construct a citation link here.

---

## Abstract

Conceptual design study, produced by a NASA Glenn Research Center COMPASS team over six remote sessions across two weeks (conducted remotely because of Covid-19), for a two-element robotic in-situ resource utilization (ISRU) pilot plant. One element sits inside a lunar permanently shadowed region (PSR) and extracts water from icy regolith; the second sits on an adjacent sunlit ridge and processes that water into liquid oxygen and hydrogen. Target output is 1000 kg of oxygen in one year. The deck specifies PSR site-selection criteria, a 350-kg-payload lander concept, an excavator and auger-dryer water-extraction reactor, an ice-based tanker transport scheme that exploits the PSR thermal environment, PEM electrolysis and cryogenic liquefaction hardware for the ridge plant, a nuclear-reactor power-delivery trade for the PSR side, and closes with itemized mass and power summaries for both plant elements.

---

### Background and objective

The study's stated purpose is to develop a conceptual design for an ISRU system that extracts water from icy dirt in a PSR and processes it into liquid oxygen and hydrogen, with a stated goal of 1000 kg of oxygen produced in one year (p. 3). The GRC Compass team's customer is listed as STMD LSII, with named points of contact David Reeves, Diane Linne, Jerry Sanders, Julie Kleinhenz, and Aaron Paz; the team itself covered systems integration/MEL, structures, environmental, power, propellant handling/mobility, command and data handling/software, communications, and configuration roles (p. 2). All sessions were conducted remotely because of Covid-19, over six sessions across two weeks (p. 2).

Two governing assumptions frame the design. Power: the PSR plant is powered by a previously landed nuclear power demonstrator, while the ridge plant is powered by solar arrays, with the ridge plant assumed to operate only during 225 days of continuous sunlight (p. 3). Water: regolith in the PSR is assumed to contain 5% water by mass, with icy regolith located underneath a 20-cm desiccated surface layer (p. 3).

### Methods and scope

Site selection targeted a reasonably sized PSR accessible from locations along the ridge between de Gerlache and Shackleton craters, a location favored for human missions because of its high illumination periods. Five craters were assessed for mining suitability using distance and maximum slope as criteria (p. 4).

The lander concept is the Lockheed Martin McCandless lander, selected for its open-deck payload space, ground access for the excavator, and 350-kg payload capability; a primary study objective was demonstrating that the ISRU PSR components could be packaged on a small lander (p. 5).

The concept of operations: within 24 hours of landing, a power cart connects nuclear power to the PSR plant; ramps deploy and the excavator travels to a pre-selected mining site and removes dry overburden from the required surface area over about 4 days, during which both plants remain dormant; Tanker 1 travels from the ridge down into the PSR and connects to the PSR plant; the excavator delivers its first load of icy regolith and water extraction begins; when Tanker 1 nears full, Tanker 2 travels down and swaps with it (water extraction halts temporarily during the swap); and Tanker 1 travels back up to the Ridge plant to transfer its water for further processing (p. 6).

### Key findings

PSR plant hardware:
- The excavator concept, developed at NASA KSC, uses two sets of bucket drums that provide counter-force while digging and gathers 40 kg of icy regolith in each set of drums; after delivering a complete load it drives to a discard location and gathers the pile of processed regolith (p. 8).
- Excavator performance, adjusted from measured terrestrial test energy to lunar operating conditions (p. 9):

  | Activity | Terrestrial power (W) | Lunar power (W) | Digging time (min) | Digging energy (W-hr) | Disposal time (min) | Disposal energy (W-hr) |
  | --- | --- | --- | --- | --- | --- | --- |
  | Digging/Receive Slag | 215 | 215 | 2.5 | 9.0 | 2 | 7.2 |
  | Drive Empty | 200 | 65 | (blank in source) | (blank in source) | 8.5 | 9.2 |
  | Drive Full | 210 | 66 | 8.5 | 9.4 | 8.5 | 9.4 |
  | Dump | 155 | 155 | 5 (note c) | 2.6 | less than 1 | 2.6 |
  | Totals | | | 16 | 21.0 | 20 | 28.4 |

  Footnotes as printed: terrestrial tests run at 0.44 m/s with hotel load of 53 W; lunar case assumes velocity of 0.2 m/s with hotel load of 53 W; the 5-minute dump-digging figure is 1.0 minute for depositing in the hopper, with the remainder being low-energy positioning.
- The regolith hopper sits on the payload deck for excavator access; a horizontal auger transports regolith to one end, where a vertical tube through valves connects to the water extraction reactor. The hopper holds only 40 kg, so the excavator deposits one drum-load, waits for the PSR plant to process it, then spins around and deposits a second drum-load (p. 10).
- The water extraction reactor is an auger-dryer based on terrestrial soil dryers, but where the terrestrial goal is dry soil, the lunar goal is extracted water. Heaters wrapped around the outer metal casing heat regolith to approximately 100 degrees C as the auger moves it end to end; extracted water is sent through an insulated and heated line to the tanker, assuming 75% water extraction/capture efficiency; processed regolith empties into a sloped dump chute that deposits spent regolith away from the lander structure (p. 11). A full-scale auger-dryer with a clear outer casing was under test at NASA JSC to study regolith flow behavior (p. 11).
- A dust-tolerant automated umbilical (DTAU) provides fluid and electrical connections, with an active half mounted on the PSR lander leg and Ridge plant and a passive half on the tankers; it was developed at NASA KSC and successfully field tested on a NASA-built rover (p. 12).
- The ice tanker was initially designed to carry liquid water, which required significant energy and insulation to keep the water liquid in the PSR and during transport, either tripling the mobile platform battery mass for the same number of trips or tripling the number of trips out of the PSR. The redesigned ice tanker instead exploits the PSR environment: a radiator sized to freeze water at the extraction rate, then turned toward the sun on the ridge to melt the ice in about 15 hours before transfer to the Ridge plant. Freezing the water also keeps the ice tanker at very low pressure, acting as a cryopump that maintains flow from the auger-dryer to the tank. The mobility platform is assumed capable of a payload ratio of 1.5 (p. 13).
- Each ice tanker carries 54 kg of ice per trip, and two tankers make a total of 21 trips (p. 14):

  | Item | Mass (kg) |
  | --- | --- |
  | Water Ice | 54.2 |
  | Tank empty | 11.8 |
  | Battery | 6.3 |
  | DTAU (passive half) | 4.5 |
  | Mobile platform | 48.2 |
  | Radiator | 5.1 |
  | Total dry mass | 75.9 |
  | Total wet mass | 130.1 |

  (Dry mass of 75.9 kg is the sum excluding the 54.2 kg of water ice; wet mass of 130.1 kg includes it.)

Ridge plant water processing:
- The water electrolysis subsystem uses a liquid cathode feed PEM electrolyzer, with performance based on recent NASA-funded contracts. A pump on the Ridge plant transfers water from the tanker into water electrolyzer storage; the system waits 15 hours after receiving the first load before starting the electrolyzer, to ensure it never "runs dry" (p. 16).
- Cryocoolers bring oxygen and hydrogen gas down to saturation temperature and liquefy them. The enthalpy change required to cool hydrogen is much greater than for oxygen, but total energy change is similar because of the 8:1 oxygen-to-hydrogen ratio. Hydrogen uses one cryocooler to cool gas to 70 K, then a second cryocooler to cool to 20 K and liquefy; the electrical efficiency of a cryocooler with a 70 K cold head is much greater than one with a 20 K cold head, and using a pre-cooler reduces total hydrogen liquefaction power by 60% (p. 17).

Power in the PSR:
- The nuclear power trade evaluated bringing the reactor on the same lander as the ISRU hardware, with two shielding options: leaving the reactor on the lander with sufficient shielding to protect ISRU electronics (requiring significant added mass), or using the excavator to dig a hole and bury the reactor. Because of the excavator's trenching nature and wall-stability angle constraints, burying the reactor would take approximately 40 days to dig a sufficiently large hole, would require the excavator to recharge while digging before the reactor could be turned on, and would also require a crane or other device to lift the reactor off the lander and place it in the hole (p. 19).
- The adopted assumption is that a nuclear reactor is already available in the PSR from a previous demonstration mission; the lander also carries a cable cart to deploy a power cable between the reactor and the PSR lander, with cable distance determined by landing accuracy and plume ejecta concerns (p. 20).
- Power is transmitted at 1000 VDC to minimize coaxial cable diameter, with the cart carrying 1000 VDC to 28 VDC converters; the ice tanker is used to guide the cable cart, aided by motors on the cart's wheels (p. 21).

Mass and power summary, PSR Plant (p. 24): grand total 325 kg (275 kg basic plus 50 kg growth) and 2353 W (1809 W basic plus 544 W growth).

| Line item | Mass basic (kg) | Mass growth (kg) | Mass total (kg) | Power basic (W) | Power growth 30% (W) | Power total (W) |
| --- | --- | --- | --- | --- | --- | --- |
| PSR Plant (grand total) | 275 | 50 | 325 | 1809 | 544 | 2353 |
| Bus (subtotal) | 114 | 24 | 138 | 45 | 14 | 59 |
| Command & Data Handling | 10.3 | 3.1 | 13.4 | 24.3 | 7.3 | 31.6 |
| Communications & Tracking | 13.5 | 1.4 | 14.9 | 3.8 | 1.2 | 5.0 |
| Electrical Power Subsystem | 43.0 | 12.3 | 55.3 | 11.5 | 3.5 | 15.0 |
| Thermal Control | 3.8 | 0.7 | 4.5 | 5.4 | 1.6 | 7.0 |
| Water Capture and Transfer | 15.7 | 1.0 | 16.6 | blank in source | blank in source | blank in source |
| Structures and Mechanisms | 28.1 | 5.1 | 33.1 | blank in source | blank in source | blank in source |
| ISRU System (subtotal) | 161 | 26 | 187 | 1764 | 530 | 2294 |
| Water extractor and hopper | 95 | 19 | 114 | 1475 | 443 | 1918 |
| Water tanker hotel/survival | blank in source | blank in source | blank in source | 115 | 35 | 150 |
| Excavator | 66 | 7 | 73 | 174 (note b) | 52 | 226 |

Footnotes as printed: mass growth based on AIAA standard; excavator power of 174 W is only needed for 5 hours every 4 days.

Mass and power summary, Ridge Plant (p. 25): grand total 839 kg (657 kg basic plus 182 kg growth) and 4306 W (3311 W basic plus 995 W growth).

| Line item | Mass basic (kg) | Mass growth (kg) | Mass total (kg) | Power basic (W) | Power growth 30% (W) | Power total (W) |
| --- | --- | --- | --- | --- | --- | --- |
| Ridge Plant (grand total) | 657 | 182 | 839 | 3311 | 995 | 4306 |
| Bus (subtotal) | 249 | 51 | 300 | 365 | 111 | 476 |
| Command & Data Handling | 6.5 | 2 | 8.5 | 8.3 | 2.5 | 11 |
| Communications & Tracking | 42 | 4.4 | 46 | 65 | 20 | 85 |
| Electrical Power Subsystem | 55 | 22 | 77 | 292 | 88 | 380 |
| Thermal Control | 39 | 5 | 44 | blank in source | blank in source | blank in source |
| Structures and Mechanisms | 106 | 18 | 124 | blank in source | blank in source | blank in source |
| ISRU System (subtotal) | 256 | 85 | 341 | 2832 | 850 | 3682 |
| Command and Data Handling (ISRU) | 9.1 | 2.7 | 12 | 30 | 9 | 39 |
| Electrolyzer | 11 | 4 | 15 | 1322 | 397 | 1719 |
| Electrolyzer balance-of-plant | 32 | 11 | 44 | 59 | 18 | 77 |
| Thermal control (electrolyzer) | 21 | 3.7 | 25 | blank in source | blank in source | blank in source |
| Hydrogen dryer | 6 | 2 | 8 | 24 | 7 | 31 |
| Hydrogen tank storage | 48 | 17 | 64 | blank in source | blank in source | blank in source |
| Hydrogen liquefaction | 87 | 31 | 118 | 1148 | 345 | 1493 |
| Oxygen dryer | 5 | 2 | 7 | 24 | 7 | 31 |
| Oxygen tank storage | 28 | 10 | 38 | blank in source | blank in source | blank in source |
| Oxygen liquefaction | 9 | 1 | 10 | 225 | 67 | 292 |
| Water Ice Tanker (total) | 152 | 46 | 198 | 114 | 34 | 148 |
| Water Ice Tanker (each) | 76 | 23 | 99 | 50 | 15 | 65 |
| Water Ice Tanker recharge (note) | blank in source | blank in source | blank in source | 64 | 19 | 83 |

Footnotes as printed: mass growth based on AIAA standard; the 64 W recharge power is only needed for 20 hours every 9.5 days; the "Water Ice Tanker recharge" row carries an asterisk in the source with no further explanation printed.

Conclusions (p. 26):
- A CLPS-style lander can deliver an ISRU system to extract 1125 kg of water in a year, producing 1000 kg of oxygen.
- The 325 kg ISRU system mass estimate leaves a 7.5% margin on the 350-kg payload lander.
- Taking advantage of the PSR environment to freeze extracted water in the ice tanker reduces power and mass requirements relative to the initial liquid-water tanker design.
- Getting power to the PSR plant remains the key challenge; the assumption of a dedicated nuclear reactor may be reasonable for full-scale water/oxygen production, but for the pilot plant the study prefers a scenario where the power supply can be landed with either the PSR plant or the Ridge plant.

### Limitations

- The study is a COMPASS-style point design produced across six remote sessions over two weeks, conducted remotely because of Covid-19 (p. 2); it is a conceptual design, not a detailed engineering design.
- Several stated figures are design assumptions rather than measured or lunar-validated results: 75% water extraction/capture efficiency for the auger-dryer (p. 11), 30% mass and power growth per AIAA standard applied throughout the mass/power tables (p. 24, p. 25 footnotes), and the 225-day continuous-sunlight operating assumption for the ridge plant (p. 3).
- Excavator performance figures are derived from measured terrestrial test energy adjusted for assumed lunar velocity (0.2 m/s) and hotel load, not from lunar-validated data (p. 9, footnotes a-b).
- The source has no formal figure or table numbering; slide number equals PDF page number throughout, and several slides (7, 14, 15) present system or CAD diagrams whose content is largely graphical component-callout labels rather than text, with no additional quantitative findings beyond what is captured above.
- Several subsystem-level power cells in the mass and power summary tables (Water Capture and Transfer, Structures and Mechanisms, Thermal Control, and others) are left blank as printed on both slide 24 and slide 25, and are reproduced here as blank rather than inferred or calculated.
- The deck presents a single point-design iteration; it does not report a sensitivity analysis, cost estimate, or trade-study detail beyond the two-option nuclear power/shielding trade on slide 19.
- No DOI, publisher URL, or NTRS accession number is printed in the source; the NTRS accession number provided as a citation hint originates outside the document and could not be confirmed against the source text.

### Topic mapping

- Slides 3 through 6 cover the mission concept: purpose and goal, power and water assumptions, PSR site selection, lander selection, and concept of operations.
- Slides 7 through 14 cover PSR plant hardware: excavator design and performance, regolith hopper, water extraction reactor, fluid/electrical umbilical, and ice tanker design and mass breakdown.
- Slides 15 through 17 cover Ridge plant water processing: water electrolysis subsystem and oxygen/hydrogen liquefaction and storage.
- Slides 18 through 21 cover PSR power provisioning: the nuclear power on-lander-versus-buried trade and cable cart design.
- Slides 22 through 26 cover the pilot-plant mass and power summary tables for both plant elements and the study's closing conclusions.
