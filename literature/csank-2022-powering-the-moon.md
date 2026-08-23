# Csank, Thomas, Granger & Gardner 2022 - Powering the Moon: From Artemis Technology Demonstrations to a Lunar Economy

## Comprehensive Technical Summary

## Citation

Csank, J., Thomas, G. L., Granger, M., & Gardner, B. (2022, May). *Powering the Moon: From Artemis technology demonstrations to a lunar economy* [Conference paper]. Nuclear and Emerging Technologies for Space (NETS 2022), American Nuclear Society, Cleveland, OH. NASA NTRS 20220004165. https://ntrs.nasa.gov/citations/20220004165

Publisher URL: https://ntrs.nasa.gov/citations/20220004165

Citation verification: bibliographic detail (conference name, dates, sponsor, NTRS document ID, NTRS acquisition date of March 10, 2022) confirmed against the NASA NTRS citation record at the URL above, since the extracted source PDF text carries a placeholder line reading "[Placeholder for Digital Object Identifier (DOI) to be added by ANS]" and no DOI was ever assigned in the NTRS record.

## Metadata

| Field | Value |
|---|---|
| Document type | Conference paper |
| Institution | NASA Glenn Research Center, Cleveland, OH |
| Conference | Nuclear and Emerging Technologies for Space (NETS 2022), American Nuclear Society, Cleveland, OH, May 8-12, 2022 |
| NASA document ID | NTRS 20220004165 |
| NTRS date acquired | March 10, 2022 |
| Pages | 7 |
| Figures / tables | 11 figures (Fig. 1 through Fig. 11); no tables |
| Open access | Yes, NASA NTRS |

---

## Abstract

Sizes lunar surface electrical power demand across two horizons and evaluates the transmission architecture to meet it. The Artemis baseline case totals about 90 kW across three consumer groups: small rovers, an ISRU system split between a cold-trap mining site and a separate production site, and a crewed habitat. A lunar microgrid connecting islanded habitat and ISRU sub-grids is proposed, and three topologies (radial, ring, mesh) are sized for both DC and 1 kHz AC over 1.2 to 6 kV using the EPS-SAT sizing tool, with a 40 kW design case set by a Fission Surface Power (FSP) demonstration. Cable mass is reported as the dominant term in total microgrid mass, scaling roughly linearly with power and near-quadratically with transmission distance. Beyond-Artemis scenarios extrapolate to approximately 1 MW total demand and 1,000 km distribution distances, at which point the paper concludes AC transmission is the only feasible option given DC converter voltage limits.

---

### Background and objective

The paper frames lunar surface power development in two phases. Under Artemis, surface operations begin with robotic exploration of the lunar south polar region to locate resources such as water ice, using the Volatiles Investigating Polar Exploration Rover (VIPER) and other mobile robots (p. 1). Activities are expected to expand from robotic operations toward full surface operations that include a lunar habitat and ISRU assets supporting deep space human exploration, including missions to Mars. Beyond Artemis, the authors describe growing interest in commercial lunar surface activities such as manufacturing and agriculture, which they state will require relatively large increases in power, reliability, and availability, most likely including more power during the lunar night (p. 1).

The stated motivation for a microgrid architecture is drawn from a terrestrial analogy: microgrids integrate a variety of power sources, support islanded operation where power is used near the load to minimize distribution losses, and support power-sharing operation where power is transmitted longer distances. The authors identify this dual-mode flexibility as important during failures, since power availability can be maintained by sharing power to a system experiencing a generation or distribution failure, and important for growth, since the architecture can expand incrementally as new assets arrive (p. 1).

The paper is organized into five sections: Section II states baseline Artemis power needs and power system design goals; Section III covers full Artemis operations and the proposed lunar microgrid, including the AC-versus-DC trade study; Section IV extrapolates to beyond-Artemis power needs; Section V is the summary.

The choice between AC and DC for lunar surface transmission is framed as a long-running debate rather than a new question. The paper traces the terrestrial version of the debate to the 1880s "war of the currents" between Thomas Edison and Nikola Tesla, and states that the lunar-specific version of the debate has been running since the early 1990s, citing an investigation comparing centralized and decentralized power deployment, several early lunar power system designs, and more recent lunar base design studies (p. 3, refs. 10-15). Section III.A is presented as the paper's own contribution to that continuing debate, applied specifically to the proposed Artemis microgrid.

### Methods and scope

The AC-versus-DC trade study (Section III.A) uses the Electrical Power System - Sizing and Analysis Tool (EPS-SAT) to model three generic microgrid architectures, described and shown in Fig. 3 (p. 2):

- Radial network: all sources and loads connect to a single bus. Lowest mass, lowest reliability (no redundant feeds).
- Ring network: power can flow in either direction around the ring. Higher mass than radial, single-line fault tolerant (any one transmission line can fail and power can still reach any two assets via an alternate path).
- Mesh network: every source connects to every load. Highest mass, dual-line fault tolerant (any two lines can fail).

All architectures carry a baseline line between the habitat and FSP (the Habitat Microgrid) and a baseline line between ISRU mining and ISRU production (the ISRU Microgrid). The radial architecture adds one tie line between the two sub-grids, specifically between the habitat and ISRU production (Fig. 4, p. 3). The ring architecture adds a second tie line between FSP and ISRU mining (Fig. 5, p. 3). The mesh architecture adds two further tie lines, habitat to ISRU mining and FSP to ISRU production (Fig. 6, p. 4).

Three study goals are stated (p. 3): identify whether AC or DC is more advantageous by mass, characterize the relationships between system design variables, and quantify how mass differs across the three architecture options to support architecture selection.

Sizing assumptions:
- Cables and all grid-to-load and grid-to-source converters are sized for 40 kW, the largest power intended to be transmitted through the grid, set by the FSP plant capacity.
- Line lengths are estimated from a notional layout of the Artemis electrical power assets and are noted as subject to change.
- Total microgrid mass is obtained by summing cable and converter masses.
- Cables are ETFE (ethylene tetrafluoroethylene copolymer) insulated twisted bundles laid on the lunar surface; cable mass includes conductor and insulation mass.
- Converters are bidirectional DC-DC or AC-DC, with assumed efficiencies of 95% (DC-DC) and 96.5% (AC-DC) respectively. Converter mass includes enclosure, radiator, magnetics, filters, and power electronic components, based on curve fits of existing space power electronic systems.
- Both architectures are sized across DC and 1 kHz three-phase AC over a voltage range of 1.2 kV to 6 kV. This range was set by an initial exploratory study showing 1.2 kV as the lowest voltage giving reasonable cable mass, and 6 kV as consistently beyond the point where insulation mass drives total mass back up; an optimal (minimum-mass) voltage was found to exist within this range for each power type and architecture.

The per-link line lengths behind the notional layout are not given in the body text; they appear only as callouts inside the architecture block diagrams. Fig. 4 (Radial, p. 3) sums to 9.6 km: 2.6 km habitat-to-FSP, 3.4 km habitat-to-ISRU-production (the radial tie line), and 3.6 km ISRU-bus-to-mining. Fig. 5 (Ring, p. 3) adds a second tie line of 3.0 km, FSP to ISRU mining, for a 12.6 km total. Fig. 6 (Mesh, p. 4) adds two more tie lines, 3.1 km and 3.2 km, for an 18.9 km total.

The study explicitly excludes switchgear, control and communication hardware, cable deployment robots, and cable spools, noting this "at risk of underestimating system masses," because these items were judged either insignificant relative to cabling and converter mass or under-documented at the time of writing (p. 3).

Section IV extends the radial architecture model to scaled-up power and distance values (1x to 100x) to characterize beyond-Artemis sensitivity, without re-running the full architecture comparison at those scales.

### Key findings

The Artemis baseline power budget is built up asset by asset. Early rovers such as VIPER and the Polar Resources Ice Mining Experiment-1 (PRIME-1) require 200 W to 500 W and carry their own solar generation and battery storage. ISRU requires about 68 kW total, of which 22 kW is for mining and excavation activities. The mining and excavation site "will most likely be in a cold trap or crater located 3 to 5 km from the other ISRU assets and power generation" (p. 1-2). The remaining ISRU power is used outside the cold trap for converting lunar regolith, at what the paper calls the ISRU production site. The paper does not state a distinct engineering reason for the 3 to 5 km figure itself. The separation follows from siting mining and excavation in a cold trap or crater, the terrain type associated with water-ice resources, while regolith conversion and the rest of ISRU power generation are located outside the cold trap. No mechanism, such as a thermal, line-of-sight, or power-transmission constraint, is stated as the driver of the specific distance; the paper presents it as a most-likely siting outcome rather than a derived requirement.

The paper assumes a lunar habitat requiring about 20 kW. All stated power figures are maximum (peak) values; the paper notes that assets will often run below peak with excess power available. Total conceptual Artemis base demand, combining human astronauts, ISRU, and robotic exploration, is about 90 kW. Rovers and science experiments are excluded from this figure and from the baseline architecture diagram (Fig. 1, p. 1-2), which shows the habitat, ISRU mining, and ISRU production as the three power-consuming nodes feeding the total.

A Fission Surface Power (FSP) demonstration anchors the transition from the baseline to the full architecture. It is referenced through a Battelle Energy Alliance, LLC request for proposal calling for a system generating 40 kWe end-of-life. The power generated is not designated for a specific use during the demonstration itself, but will supply a load near the habitat; once the demonstration is complete, the paper notes an additional 40 kW becomes available for other use (p. 2). The proposed microgrid (Fig. 2, p. 2) connects two islanded sub-grids, one for the habitat and one for ISRU production, through a primary distribution line. Because the solar arrays and batteries in each islanded grid operate in the load's own voltage range, no power conversion is needed within each sub-grid. The paper states this reduces the total number of power conversions compared to a terrestrial system, where source power is stepped up to a primary distribution voltage before being stepped back down to load voltage. The ability to share excess power between sub-grids is framed as covering generation or distribution failures, compensating for shadowed solar arrays, and letting new assets arrive on the surface without carrying their own dedicated power supply, which the paper states saves mass.

Three generic microgrid topologies are compared, shown together in Fig. 3 (p. 2) with sources labeled "S" and loads labeled "L." The radial network connects all sources and loads to a single bus; it is the simplest and lowest-mass option but has the lowest reliability, since it carries no redundant feeds. The ring network allows power to flow in either direction around the ring, giving single-line fault tolerance at higher mass than radial. The mesh network connects every source to every load, giving dual-line fault tolerance at the highest mass of the three. All three architectures share a baseline line between the habitat and FSP, called the Habitat Microgrid, and a baseline line between ISRU mining and ISRU production, called the ISRU Microgrid. The radial architecture adds one tie line between the two sub-grids, specifically between the habitat and ISRU production (Fig. 4, p. 3). The ring architecture adds a second tie line between FSP and ISRU mining (Fig. 5, p. 3). The mesh architecture adds two further tie lines, habitat to ISRU mining and FSP to ISRU production (Fig. 6, p. 4).

The AC-versus-DC trade study (Section III.A, p. 3-4) reaches several conclusions from the EPS-SAT results. Assuming voltage and all other parameters are equal, there is no clear mass advantage between AC and DC. For voltages at or below 3 kV, near the optimal voltage for minimum AC mass, DC and AC transmission systems have comparable mass (Fig. 7, radial architecture, p. 4). Voltage above 3 kV is described as unlikely to be selected for Artemis, since AC microgrid mass increases beyond 3 kV and DC converters running beyond 1.2 kV require a large number of series-stacked components, which compromises reliability. The transmission voltage is identified as the design variable that most strongly affects system mass, since increasing voltage significantly decreases current and therefore cable mass. The ring architecture adds roughly 50% more mass than the radial architecture to gain single-line fault tolerance, and the mesh architecture roughly doubles system mass relative to radial to gain dual-line fault tolerance; both comparisons are stated in text and shown in the AC data of Fig. 8, Total mass for all AC systems (p. 4). The study's stated future work is a risk and reliability study to estimate the likelihood of line faults, to help drive final architecture selection.

Fig. 8, "Total mass for all AC systems" (p. 4), plots the absolute total microgrid mass behind the ring and mesh mass-premium statements above. Its y-axis is "Total Mass, mT" (metric tonnes), linear from 0 to 15, across the same six voltages as Figs. 7 and 9. Radial totals run 3.3 to 6.6 tonnes across the sweep, Ring runs 4.5 to 10.1 tonnes, and Mesh runs 6.2 to 15.0 tonnes.

| Grid voltage | Radial (mT) | Ring (mT) | Mesh (mT) |
|---|---|---|---|
| 1200 V | 6.6 | 10.1 | 15.0 |
| 1500 V | 5.0 | 7.3 | 10.7 |
| 2400 V | 3.8 | 5.3 | 7.4 |
| 3000 V | 3.3 | 4.5 | 6.2 |
| 4500 V | 3.6 | 4.8 | 6.9 |
| 6000 V | 4.6 | 6.7 | 9.6 |

The Mesh bar at 1200 V reaches the top edge of the axis exactly, so 15.0 mT is a floor rather than a confirmed reading; every other bar sits clear of the axis limit. No absolute tonnage appears in the body text; Fig. 8 is the only place in the paper stating them.

Cables are reported as "by far the heaviest part of the microgrid," with a stated range of between 70% and 95% of total mass, attributed to Fig. 9, "Ratio of cable mass to total mass for all AC designs" (p. 4). Fig. 9's x-axis is the categorical "Grid Voltage, VAC 1000 Hz" axis used throughout the trade study, with six categories from 1200 V to 6000 V; its y-axis is "Cable Mass to Total Mass Ratio," linear from 0 to 1, dimensionless. Three series are plotted per voltage, Radial, Ring, and Mesh, all AC only, with no DC series shown.

| Grid voltage | Radial | Ring | Mesh |
|---|---|---|---|
| 1200 V | 0.88 | 0.92 | 0.95 |
| 1500 V | 0.84 | 0.89 | 0.93 |
| 2400 V | 0.79 | 0.85 | 0.89 |
| 3000 V | 0.77 | 0.82 | 0.88 |
| 4500 V | 0.78 | 0.84 | 0.88 |
| 6000 V | 0.83 | 0.88 | 0.92 |

The lowest value plotted is Radial at 3000 V, 0.767; the highest is Mesh at 1200 V, 0.946. Across all eighteen plotted bars, the figure's own range is 77% to 95%, not 70% to 95%: no bar in Fig. 9 reaches as low as 70%. The body text states "Fig. 9 indicates the cables are by far the heaviest part of the microgrid, which ranges between 70% and 95% of the total mass" (p. 4); the 95% ceiling matches the figure, but the 70% floor does not appear anywhere in Fig. 9, whose minimum bar is 76.7%. The denominator behind both the text's percentage and the plotted ratio is cables plus converters only, the same total-mass definition given in Methods and scope; generation, switchgear, spools, and cable-deployment hardware are excluded from it (p. 3). The plotted values are conditioned on the 40 kW sizing, 1 kHz three-phase AC transmission, the 1.2 to 6 kV voltage sweep, and ETFE-insulated cable laid on the lunar surface, the same conditions given for the trade study as a whole.

Fig. 7, "Total microgrid mass versus voltage for radial architecture" (p. 4), is the source of the comparable-mass-at-or-below-3-kV statement above. It plots two series, Radial DC and Radial 1000 Hz AC, in tonnes across the same six voltages, and each curve reaches its own minimum at a different voltage: the DC curve is lowest at 4500 V, about 2.7 tonnes, while the AC curve is lowest at 3000 V, about 3.5 tonnes, then rises to about 4.7 tonnes by 6000 V. Neither minimum voltage nor either absolute value is stated in the body text.

Beyond-Artemis scaling is addressed in Section IV (p. 5-6). The paper cites a proposed four-category taxonomy for in-space economies applicable to planetary surfaces: Surface Habitats and Surface Structures; In-Space Manufacturing; Space Resources, covering prospecting, mining, beneficiation, processing, ISRU, and recycling; and In-Space Utilities, covering supply chains and infrastructure for energy, communication, and water. Artemis-era power estimates are described as in the "100s of kW," while commercial lunar operations are described as exceeding the 1 MW level, citing a separate source (ref. 20). If total lunar demand reaches 1 MW, the paper estimates power shared between assets would likely rise to the 100s of kW range, a roughly 10x increase over the current 10s-of-kW sharing level, and that transmission distance may increase by roughly 100x over the current 2 to 4 km range.

Scaling studies on the radial architecture (Figs. 10 and 11, p. 5) show cable mass scaling roughly linearly with power level and almost quadratically with distance. The paper concludes that mitigating this growth requires significantly increasing voltage, but states that radiation hardening limitations and the difficulty of developing power electronics for a DC system above 1.2 kV make a higher DC voltage infeasible. Its stated conclusion is that as lunar surface operations approach roughly 1 MW total demand and roughly 1,000 km distribution distance, "the only real possible solution is for an AC transmission system" (p. 5).

The paper contrasts two commercial power-delivery models. In the first, individual power users supply their own generation, citing Vertical Solar Array Technology (VSAT) as a candidate near-term technology; the paper describes this model as possibly less conducive to building a commercial lunar economy. In the second, a centralized electric power utility generates, distributes, and sells power to users, which the paper describes as reducing the number of generation assets required, simplifying operations, and improving reliability, availability, and life-cycle cost. Base footprint growth is tied to the same siting factors: the Artemis south pole target area near Shackleton crater receives sunlight over 80% of the lunar year, but the low solar elevation there creates long shadows that require wide array spacing, and terrain (mountains, valleys, craters) further reduces usable solar area. The paper connects both factors to an expanding base footprint and growing distribution distance over time.

Because AC is judged the likely choice for a commercial-scale lunar transmission system, and because AC voltage conversion via transformers is more efficient than AC-DC conversion, the paper's stated preferred solution is to distribute primary lunar surface power as AC and convert to the already-established 120 VDC standard for secondary systems such as the habitat and ISRU subsystems (p. 5-6). The summary (Section V) states that initial lunar power users will run DC, at 28 VDC or 120 VDC, so initial distribution will be DC, but that 120 VDC distribution becomes infeasible as power and distance needs grow, at which point a higher-voltage AC system becomes the technology path.

### Limitations

The study explicitly excludes switchgear, control and communication hardware, cable deployment robots, and cable spools from the mass totals, flagging this as a possible source of underestimation (p. 3). Line lengths are drawn from "a notional layout for the Artemis electrical power assets" and are noted as "subject to change" (p. 3), so absolute mass and distance figures are tied to an assumed, not final, site layout. The 40 kW cable/converter sizing basis is set by the FSP demonstration's planned capacity rather than by a full-scale future power budget. The paper identifies its own gap in the reliability dimension: it states that a future risk and reliability study estimating the likelihood of line faults is needed to help drive architecture selection, since the current study reports mass trade-offs only (p. 4). The beyond-Artemis figures (1 MW demand, 1,000 km distance, 100x distance scaling) are described as approximate extrapolations ("If the total power demand... is increased to 1 MW, then the power shared... would likely be increased...") rather than as a separately validated design case.

Page 5's in-text references to Fig. 10 and Fig. 11 are swapped relative to the figures' own captions: the sentence attributes the linear-with-power finding to Fig. 10 and the near-quadratic-with-distance finding to Fig. 11, but Fig. 10 is captioned as the cable-length sweep and Fig. 11 as the design-power sweep, and the plotted curves match the captions rather than the sentence. The 1x (unscaled) Radial AC baseline that Figs. 8, 10, and 11 each report at about 1.2 kV does not agree across the three figures: Fig. 8 gives roughly 6.6 x 10^3 kg, Fig. 10's 1x curve reads roughly 8 x 10^3 kg, and Fig. 11's 1x curve reads roughly 1.1 x 10^4 kg, a spread of roughly 60% between the lowest and highest reading with no explanation stated in the source.

### Topic mapping

Section II (p. 1-2) states the Artemis baseline power budget: rover power (200-500 W), ISRU total (68 kW) and its mining/excavation share (22 kW), the cold-trap siting and 3-5 km separation, habitat power (20 kW), and total base demand (~90 kW). Section III (p. 2-4) covers the proposed microgrid concept, the three candidate topologies (radial, ring, mesh), and the AC-versus-DC trade study, including the cable-mass-dominance finding (Fig. 9) and the ring/mesh mass premiums over radial. Section IV (p. 5-6) covers beyond-Artemis scaling toward approximately 1 MW and 1,000 km, the linear-with-power and near-quadratic-with-distance cable mass scaling relationships, and the case for AC as the long-term transmission choice. Section V (p. 6) is the paper's own summary, restating the DC-to-AC transition logic as lunar power distribution grows.
