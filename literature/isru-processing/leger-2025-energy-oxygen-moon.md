# Modeling energy requirements for oxygen production on the Moon

## Provenance

- Source file (on disk): `leger-2025-energy-oxygen-moon.pdf` (Europe PMC rendered PDF of the PMC open-access deposit, PMC11874342; 12 pages)
- Document type: Peer-reviewed research article (PNAS Direct Submission)
- Authors: Dorian Leger; Fardin Ghaffari-Tabrizi; Matthew Shaw; Joshua Rasera; David Dickson; Baptiste Valentin; Anton Morlock; Freja Thoresen; Aidan Cowley
- Venue: Proceedings of the National Academy of Sciences (PNAS), Vol. 122, No. 8, article e2306146122
- Year: 2025 (published February 18, 2025; received April 19, 2023; accepted October 28, 2024)
- DOI: 10.1073/pnas.2306146122 (transcribed from the article footer)
- Publisher URL: https://doi.org/10.1073/pnas.2306146122 (transcribed from the article)
- License note: printed as distributed under CC BY-NC-ND 4.0. Corresponding authors affiliated with ESA European Astronaut Centre / Spaceship EAC and Cx Bio (Luxembourg); co-authors include Colorado School of Mines Center for Space Resources and CSIRO.

## Abstract

The study presents an end-to-end energy-consumption model for producing liquid oxygen (LOX) on the Moon via hydrogen reduction of the mineral ilmenite (FeTiO3), covering the full chain from dry regolith feedstock: excavation, transportation, beneficiation, hydrogen reduction, water electrolysis, liquefaction, and zero-boil-off storage. The model predicts energy demand per kilogram of LOX as a function of adjustable process parameters and feedstock composition. For regolith of 10 wt% ilmenite, the model predicts a total of 24.3 (+/- 5.8) kWh per kg of liquid oxygen. Hydrogen reduction and electrolysis are confirmed as the highest-energy steps; sensitivity analysis identifies the beneficiation enrichment factor as the most critical parameter. A location-dependent assessment maps favorable production sites (High-Ti Mare regions).

## Summary

### Background and objective
Oxygen is the dominant mass fraction (~80%+) of most combustion propellants and a key life-support commodity; producing it on the Moon is attractive because of the shallower gravity well (rockets from the Moon to EML1 burn ~4 kg propellant per kg payload vs ~25 kg from Earth). Over 20 candidate oxygen-production technologies exist. The authors note a Strategic Knowledge Gap: overall system energy requirements for ISRU oxygen production are poorly characterized. They target hydrogen reduction of ilmenite because it is the most mature and best-documented pathway and is commonly used as a baseline.

### Methods and scope
The model computes the ELECTRICAL energy required per kg LOX (stated explicitly: "the energy consumption model calculates the electrical energy required per unit mass of liquid oxygen produced"), treating process heat as an electrical load; it is deliberately "agnostic to the potential energy sources such as photovoltaics or nuclear energy." A mass-yield analysis is solved first (per 1 kg regolith input, normalized to 1 kg LOX output), then an energy-requirement analysis per process step (P1 excavation ... P7 storage). Ilmenite concentration (1 to 15 wt%) is the single mineralogical parameter. Reactor modeled as batch (loading 0.5 h, heat-up 5 h, reaction 2.5 h, unloading 0.5 h); PEM electrolyzer at 60% system efficiency; cryocooler using Carnot COP with cold reservoir 80 K, hot reservoir 233 K.

### Key findings (emphasis: specific-energy values, basis, thermal vs electrical, temperature)
- **Headline: hydrogen reduction of ilmenite (10 wt% ilmenite feedstock) = 24.3 (+/- 5.8) kWh/kg LOX** (approx. 87 MJ/kg LOX). Basis: full end-to-end chain, modeled as electrical energy demand. This closely matches a historical estimate the authors cite from Taylor & Carrier (1993): ~3 MW-year (~26 GWh) equivalent to **26 kWh/kg LOX** for hydrogen reduction (5 wt% ilmenite with enrichment factor 10).
- **Process temperature: hydrogen reduction reactor operates at 900 C** (beneficiated regolith heated from ~0 C to 900 C and reacted with H2 at ~1 bar; reaction H2 + FeOTiO2 -> H2O + Fe + TiO2). Heating range for the reaction is stated as 800 to 1100 C generally; yield increases up to ~900 C then asymptotes, while reaction rate keeps improving to at least 1100 C.
- **Step breakdown at 10 wt% ilmenite:** hydrogen reduction step ~55% of total energy; electrolysis ~38%; liquefaction ~4.8% (P_Liquefaction = 1.17 kWh/kg O2); storage 0.31 kWh/kg; excavation and transport are small (order 1e-4 kWh/kg terms). WITHIN the hydrogen-reduction step: heating the regolith ~55% and heating the hydrogen ~27% of that step's demand -- i.e. the bulk of the whole chain is high-temperature PROCESS HEAT that the model bills as electricity.
- **Electrolysis** modeled per unit (P_Electrolysis = 8.26 kWh/kg via H2 energy content 39.7 kWh/kg and 60% efficiency chain); noted ~11% less efficient in lunar gravity due to slower bubble detachment.
- **Feedstock dependence:** total energy falls steeply with richer ilmenite (less inert regolith wasted on heating). Varying the beneficiation enrichment factor from 1.5 to 10.5 moves total energy from **53 to 23 kWh/kg LOX**. Non-ilmenite regolith costs ~0.24 kWh/kg to heat 0->900 C (ilmenite ~0.21 kWh/kg).
- **Comparisons to other technologies (as cited by the authors, not independently modeled):** Taylor & Carrier's other-technology estimates fall between **18 and 35 kWh/kg LOX**. A water-ice pathway (Kornuta et al.) producing 2,178 t LOX/yr needs 2.8 MW = **11.3 kWh/kg LOX** (sublimation + electrolysis + robotics + cryocoolers).
- Rough resource-scale note: ~10 Mt LOX at EML1 (=> ~40 Mt at the lunar base) framing for large campaigns.

### Limitations
Model is a baseline with simplifying assumptions: only ilmenite concentration parameterizes mineralogy; assumes ~50% ilmenite-in-particle reaction and sufficient liberation; neglects gas contaminants (H2S, HCl), hydrogen leakage, indigenous regolith hydrogen (~150 ppm), oxygen leakage, heat recovery from spent regolith, soil maturity, particle size, and Mg in TiO2; conservatively ignores extra O2 obtainable from TiO2, glass-phase FeO, and silicates. Crucially for the thermal/electrical question, ALL energy is reported as electrical demand (process heat billed as electricity), so the split between process heat and true electrical work must be reconstructed by the reader from the step breakdown. Location map derived from an LROC TiO2->ilmenite regression that is unavailable below 2% TiO2 and beyond +/-latitude limits.

## Topic mapping (neutral)
Lunar-ISRU oxygen production energy budget; hydrogen reduction of ilmenite specific energy; process temperature (900 C); process-heat vs electrical accounting; comparative specific energies across ISRU pathways; site selection. Directly relevant to steelmanning the energy cost of local material production (oxygen) on the Moon.
