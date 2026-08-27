# Joule-Heated Molten Regolith Electrolysis Reactor Concepts for Oxygen and Metals Production on the Moon and Mars

## Provenance

- Source file (on disk): `sibille-2012-joule-heated-mre.pdf` (NASA NTRS full text, 11 pages)
- Document type: Conference paper
- Authors: Laurent Sibille; Jesus A. Dominguez (both ESC-Team QNA / QinetiQ North America, Kennedy Space Center, FL)
- Venue: 42nd International Conference on Environmental Systems (ICES), San Diego, CA, July 15-19, 2012 (per NTRS record). Report numbers KSC-2011-305 / KSC-2012-006R; NTRS record ID 20120003037
- Year: 2012 (publication date January 9, 2012 per NTRS record)
- DOI: not provided
- Publisher URL: not printed; NTRS citation page https://ntrs.nasa.gov/citations/20120003037
- Note: page-1 body does not print venue/year; venue and date above are transcribed from the NTRS bibliographic record, not from the document body.

## Abstract

Molten Regolith Electrolysis (MRE, also called molten oxide electrolysis) directly electrolyzes molten lunar/planetary regolith -- using the regolith itself as both the oxide source and the electrolyte -- to produce oxygen at the anode and molten metal alloys at the cathode, without any added fluxes or reagents. The paper develops a multiphysics (electrical, thermal, radiative) model of Joule-heated reactor concepts operating near 1600 C, in which the electric current passing through the melt generates enough heat by the Joule effect to keep the oxide/metal pool molten (self-heating). A key design concept is containing the aggressive melt within a frozen shell of the regolith itself ("cold-wall" / self-lining), eliminating the need for high-temperature containment materials. Preliminary predictions of self-heating and startup modes are presented.

## Summary

### Background and objective
MRE is attractive because it extracts oxygen AND structural metals (Fe/Si/Al alloys) directly from bulk regolith at high yield, unlike molten-salt or halide routes that need a separate electrolyte tailored to one oxide (low saturation limits, ~4-5%). The engineering obstacles are the chemically aggressive melt at ~1600 C and containment. This work models reactor concepts to address both.

### Methods and scope
COMSOL-type multiphysics model coupling electrical conduction (Joule heating), heat transfer (conduction, convection, and surface-to-surface thermal radiation, which dominates above ~1000 C), and melt/solid interfaces. Temperature-dependent thermal and electrical conductivity of regolith built from measured simulant data (JSC-1, FJS-1, "Synthetic Apollo 11", tholeiitic basalt, lunar sample 12002,85) with extrapolation into the glass/molten range (700-1700 C). Used to identify critical reactor dimensions for self-heating and startup.

### Key findings (emphasis: energy character, temperature)
- **Process temperature ~1600 C** (operating temperature of the oxide/metal melt; melting/high-temperature electrolysis regime).
- **Load-bearing point for the thermal-vs-electrical question:** in MRE the PROCESS HEAT is supplied ELECTRICALLY. "The passage of current through the melt between the electrodes during electrolysis creates enough thermal energy by Joule effect to maintain the molten pool of oxides and metals." The self-heating mode "reduces the energy needed for maintaining the regolith molten by eliminating the need for external heating." Thus, unlike hydrogen/carbothermal reduction (where a separate high-temperature heat source is needed and can be solar-thermal), MRE's reduction work and its melt-sustaining heat are one and the same electrical input -- MRE is effectively an all-electrical process.
- **Containment concept:** a self-formed frozen regolith shell (cold-wall) contains the melt, avoiding high-temperature crucible materials; analogous to industrial Hall-Heroult aluminum cells.
- Analogy to terrestrial electrowinning (Al, Mg) where the metal oxide is dissolved in its own or a molten-salt bath and reduced electrolytically.
- **No specific-energy (kWh/kg) figure is stated in this document** -- it is a reactor thermal/electrical design-modeling paper, not an energy-budget paper. For an MRE specific-energy number see the ferrosilicon-MRE and demonstration figures compiled in `azami-2024-lunar-manufacturing-review.md`.

### Limitations
Modeling study with simulant-derived and extrapolated high-temperature material properties (glass/molten-phase conductivities are extrapolations); predictions of self-heating and startup are preliminary. No experimental validation of the full reactor in this paper; no oxygen/metal production-rate or specific-energy figure. Does not quantify anode/cathode overpotentials or Faradaic efficiency here.

## Topic mapping (neutral)
Molten Regolith Electrolysis (direct electrolysis of molten regolith to metals + oxygen); process temperature ~1600 C; Joule self-heating (process heat delivered electrically); cold-wall self-lining containment; multiphysics reactor modeling. Establishes that MRE's process heat is intrinsically electrical, contrasting with thermochemical routes whose heat can be supplied by direct solar concentration.
