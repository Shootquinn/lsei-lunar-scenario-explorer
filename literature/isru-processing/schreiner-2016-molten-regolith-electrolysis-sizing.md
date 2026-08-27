# Schreiner 2016 - Parametric Sizing Model for Molten Regolith Electrolysis Reactors
## Comprehensive Technical Summary

## Citation

Schreiner, S. S., Sibille, L., Dominguez, J. A., & Hoffman, J. A. (2016). A parametric sizing model for Molten Regolith Electrolysis reactors to produce oxygen on the Moon. Advances in Space Research, 57(7), 1585-1603. https://doi.org/10.1016/j.asr.2016.01.006

Publisher URL: https://www.sciencedirect.com/science/article/pii/S0273117716000375

## Metadata

Peer-reviewed journal article · Advances in Space Research (COSPAR, published by Elsevier) · Massachusetts Institute of Technology and NASA Kennedy Space Center · received 9 August 2015, accepted 7 January 2016, online 14 January 2016 · not open access (ScienceDirect) · DOI 10.1016/j.asr.2016.01.006

---

## Abstract

A parametric sizing model for a Molten Regolith Electrolysis (MRE) reactor that produces oxygen and molten metals from lunar regolith by direct electrolysis of the melt with no added reagents. Regolith material-property models validated against Apollo samples and simulants feed a multiphysics reactor simulation, which generates a database linking reactor design to performance. A design methodology uses that database to size a reactor that sustains the required current, operating temperature, and molten mass for a target oxygen production level; protects the reactor walls with a frozen-regolith cold-wall layer; and supports a range of electrode separations for operational flexibility. Reactor mass, power, and performance are reported across a range of oxygen production levels, with sensitivity analyses on operating temperature, regolith feedstock composition, and design margin.

---

### Background and objective

- MRE (also called Molten Oxide Electrolysis) feeds granular regolith into a reactor, heats it to a molten conductive state, and drives a current between two immersed electrodes. Oxygen forms at the anode; molten iron, silicon, aluminum, and titanium form at the cathode. The process needs no fluxing reagents, distinguishing it from Fluxed Magma Electrolysis and the FFC-Cambridge process.
- The paper frames ISRU against launch cost. It states, as a benchmark quoting a prior source, that the transport-everything paradigm "has resulted in prohibitive launch costs on the order of $110,000/kg to the lunar surface (Diaz et al., 2005), in 2015 dollars" (Section 1.1, p. 1585). A second in-text benchmark (Section 1.5, p. 1587) quotes Sherwood and Woodcock (1993): about $18,370/kg (2015 dollars) to produce oxygen on the lunar surface via Hydrogen Reduction of Ilmenite, varying from $12,570/kg to $29,857/kg when ISRU system mass is varied by a factor of two. Both are quoted benchmarks, not results of this paper.
- The wall-containment problem is central: the longest laboratory MRE runs lasted only hours before molten regolith eroded the crucible, which motivates the frozen-regolith cold-wall approach modeled here.

### Methods and scope

- The model links a validated regolith property database to a multiphysics simulation of the reactor, then fits regression relations (Tables 1 to 3 give coefficients for electrode separation, molten mass and operating temperature, and heat loss) so a reactor can be sized parametrically rather than simulated each time.
- Three feedstock compositions are carried throughout: High-Titanium Mare, Low-Titanium Mare, and Highlands. Oxide weight-percent breakdowns (Fig. 2, from Apollo/Luna composition data and Clementine imagery): Highlands is SiO2 44.9, Al2O3 25.1, CaO 14.9, MgO 7.5, FeO 6.2, TiO2 0.5; High-Ti Mare is SiO2 41.0, FeO 16.6, Al2O3 12.4, CaO 11.4, MgO 8.9, TiO2 8.5; Low-Ti Mare is SiO2 45.1, FeO 17.0, Al2O3 13.1, CaO 10.7, MgO 9.9, TiO2 2.9.
- Key design variables swept: operating temperature (about 1850 to 2450 K), design margin (1.0 to 1.4, a measure of electrode-separation flexibility), batch time, and annual oxygen production level (about 1 to 10 metric tons per year).

### Key findings

Note: the paper reports mass, power, yield, and current efficiency only as plotted curves. There is no table of specific energy (kWh/kg O2); those values would have to be derived from the mass-and-power-versus-production figures. The numbers below are read from the figures (interim figure analysis).

- Oxygen extraction yield rises with operating temperature (Fig. 9). Text-stated maxima are 0.454 kg O2/kg regolith (Highlands), 0.423 (Low-Ti Mare), and 0.417 (High-Ti Mare); within the plotted temperature range yields top out near 0.375 to 0.38. Highlands jumps sharply near 2000 K when SiO2 is fully electrolyzed; Mare reaches the comparable step near 2200 to 2280 K.
- Current efficiency also rises with temperature (Fig. 9): Highlands from about 74 percent at 1850 K to about 82 percent above 2000 K; Mare from about 57 percent at 1850 K to about 72 percent at 2200 K, then declining slightly as MgO electrolysis (about 50 percent current efficiency) begins.
- Reactor mass and power scale with annual production and fall with operating temperature (Fig. 10, High-Ti Mare, margin 1.5, 8 h batch). At 5 metric tons O2/yr, reactor mass is about 1450 kg at 1850 K but about 150 kg at 2300 K; reactor power at 5 metric tons/yr ranges from about 38 kW (2150 K) down to about 26 kW (2300 K).
- Larger design margins widen the feasible electrode-separation band but raise mass and power and increase the maximum production a reactor can reach (Figs. 11, 12). A margin of 1.2 at 4000 kg O2/yr yields a feasible electrode separation of 1.9 cm to 3.8 cm. Margin 1.0 caps at about 5000 kg O2/yr; margin 1.1 at about 9500 kg O2/yr.
- Feedstock composition matters most at midrange temperature near 2000 K (Fig. 13): Highlands reactors are about 33 percent less massive and need about 60 percent less power than Mare at that temperature. At low (1850 K) and high (2300 K) temperatures the regolith-type gap narrows.
- Metal co-production rises with temperature (Fig. 14) for a reactor making 10 metric tons O2/yr. Leftover slag falls by about 35 percent from 1850 K to 2300 K (Mare) or 2000 K (Highlands); at high temperature the cumulative metal produced approaches the 10 metric ton oxygen figure. Highlands begins producing aluminum at a lower temperature than Mare because its liquidus peak sits near 2000 K rather than 2250 K.

### Limitations

- All mass, power, yield, and current-efficiency results live in figures, not tables, so specific-energy figures (kWh/kg O2) are not stated and must be derived from the mass-and-power-versus-production plots.
- The model rests on regression fits to a multiphysics simulation and on regolith property models validated against Apollo samples and simulants, not on an operating full-scale reactor; the longest physical MRE runs cited lasted only hours before wall erosion.
- Results assume the cold-wall frozen-regolith containment concept holds at scale, which the paper models rather than demonstrates.

### Topic mapping

- Section 1 (introduction) covers the ISRU rationale and the quoted launch-cost and oxygen-production-cost benchmarks ($110,000/kg surface delivery; $18,370/kg oxygen via ilmenite reduction). Sections 2 to 4 develop the regolith property models, the multiphysics reactor simulation, and the cold-wall containment approach. Section 5 (design methodology) and its regression tables (Tables 1 to 3) define the parametric sizing. Section 6 (results) presents the mass, power, yield, current-efficiency, and metal-production figures (Figs. 9 to 14) and the sensitivity analyses on temperature, feedstock, and design margin.
