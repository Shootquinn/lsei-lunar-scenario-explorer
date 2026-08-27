# Solar Energy Systems for Lunar Oxygen Generation

## Provenance

- Source file (on disk): `colozza-2010-solar-lunar-oxygen.pdf` (NASA NTRS full text, 27 pages)
- Document type: NASA Technical Memorandum / AIAA conference paper
- Authors: Anthony J. Colozza (Analex Corporation, Cleveland OH); Richard S. Heller (MIT); Wayne A. Wong (NASA Glenn Research Center); Aloysius F. Hepp (NASA Glenn Research Center)
- Venue: NASA/TM-2010-216219; AIAA-2010-1166; prepared for the 48th AIAA Aerospace Sciences Meeting, Orlando FL, January 4-7, 2010 (report issued April 2010) -- all transcribed from the title/cover pages
- Year: 2010
- DOI: not printed
- Publisher URL: not printed (report states "Available electronically at http://gltrs.grc.nasa.gov"); NTRS record ID 20100017257

## Abstract

Evaluation of several solar-concentrator-based systems for producing oxygen from lunar regolith. The systems use a solar concentrator mirror to provide THERMAL energy (process heat) for the oxygen-production reaction; electricity for the balance-of-plant is produced either by a Stirling heat engine driven by the same concentrator (solar-dynamic) or by photovoltaics (hybrid). Two production chemistries are analyzed: hydrogen reduction of ilmenite and carbothermal reduction. For carbothermal reduction, the reactor total power requirement is 8,320 to 9,961 W to produce 1,000 kg/year of oxygen, with the solar concentrator supplying over 82% of the total energy requirement (as heat) via a mirror less than 4 m in diameter.

## Summary

### Background and objective
All lunar oxygen-extraction chemistries require heat added to regolith; the paper's thesis is that DIRECT solar-thermal heating of the regolith is the most efficient way to supply that heat, and that combining process heat and electricity generation from a single concentrator (solar-dynamic + Stirling) gives an inherent system-efficiency and packaging advantage over converting sunlight to electricity and back to heat. Goal: size integrated power/thermal systems for a demonstration-scale (~1,000 kg O2/yr) plant.

### Methods and scope
Energy balance between concentrator-delivered heat and the thermal + electrical needs of each component, scaled with regolith throughput. Regolith density ~1000 kg/m3; assumed O2 yield 15-20 wt%. For hydrogen reduction: scoop -> vibrating screen -> magnetic separator (ilmenite beneficiation, 90% efficient) -> fluidized-bed reactor -> electrolyzer; concentrated solar heat drives the reduction, Stirling engines supply electricity. For carbothermal: augers feed regolith to a reactor heated to 1900 C by concentrated solar energy with methane (CH4) circulation; products processed and O2 stored. Solar intensity taken as ~1307-1367 W/m2.

### Key findings (emphasis: specific-energy values, basis, thermal vs electrical, temperature)
- **Carbothermal reduction:** total reactor power **8,320 to 9,961 W for 1,000 kg O2/year** (single-melt case stated as 10,124 W). **Over 82% of total energy is THERMAL (process heat)** supplied directly by the solar concentrator; remainder is electrical. **Process temperature 1900 C** (methane/carbothermal). Concentrator diameter < 4 m. Module assumed operable ~half the year (4,380 h); regolith mass flow ~1.52 kg/h at 15% yield.
  - Napkin specific-energy (derived here from the paper's own numbers, NOT stated as such): ~9,000 W continuous over 4,380 operating hours ~= 39,400 kWh/yr for 1,000 kg O2 => **~39 kWh/kg O2 delivered energy, of which ~82% (~32 kWh/kg) is thermal and ~18% (~7 kWh/kg) electrical.**
- **Hydrogen reduction:** baseline system produces **~0.6 kg O2/hr with a concentrator mirror ~5 m** (just under 0.6 kg/hr; ~195 kg over a 14-day continuous-sun mission). **Total ELECTRICAL power 1,804 W** (electrolyzer 1,754 W dominates; separator 0.37 W; actuators/augers 50 W) -- this is only the electrical balance-of-plant; the regolith reduction heat is supplied separately as concentrated-solar THERMAL power. Reactor heat terms modeled as Q_total = Q_Stirling + Q_reaction + Q_losssurroundings + Q_heat-ilmenite. Trapped solar-wind hydrogen released at ~900 C.
- **Central quantitative conclusion for the thermal/electrical split:** in solar-thermal ISRU the large majority of the energy is process heat delivered directly as concentrated sunlight (82%+ for carbothermal), NOT electricity -- direct solar-thermal heating avoids the photovoltaic/Stirling conversion penalty that would otherwise apply to that heat load.
- Includes a survey table of candidate photovoltaic modules (efficiency, W/kg, specific power) for the hybrid electrical option.

### Limitations
Preliminary findings "subject to revision as analysis proceeds." Component efficiencies are best-estimate; demonstration scale (~1000 kg O2/yr), not production scale. Carbothermal module assumed only half-year operation (site-latitude dependent). Yields assumed (15-20 wt%). Heat-loss and insulation assumptions (e.g., 50 insulation layers; 1-2 W to hold daytime temperature) are idealized. Requires continuous or near-continuous sunlight; night operation and thermal storage not solved here. Specific energy per kg is not stated by the authors as a single kWh/kg figure -- the reader must derive it from power and rate (as done above).

## Topic mapping (neutral)
Solar-thermal ISRU (concentrated sunlight as direct process heat); carbothermal reduction of regolith (specific energy, 1900 C); hydrogen reduction of ilmenite (electrical balance-of-plant vs thermal reduction load, 900 C); thermal-vs-electrical energy split for lunar oxygen production; solar-dynamic Stirling vs photovoltaic power. Core support for the argument that process heat dominates material production and is best supplied thermally, not electrically.
