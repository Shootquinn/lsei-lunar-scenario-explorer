# A Comprehensive Review of Lunar-based Manufacturing and Construction

## Provenance

- Source file (on disk): `azami-2024-lunar-manufacturing-review.pdf` (arXiv PDF, 68 pages incl. references)
- Document type: Review article (preprint)
- Authors: Mohammad Azami; Zahra Kazemi; Sare Moazen; Martine Dube; Marie-Josee Potvin; Krzysztof Skonieczny
- Venue: arXiv preprint (no journal-ref given). Subject classes astro-ph.IM, astro-ph.EP, cond-mat.mtrl-sci
- Year: 2024 (submitted August 11, 2024)
- DOI: 10.48550/arXiv.2408.05823 (arXiv DOI)
- Publisher URL: https://arxiv.org/abs/2408.05823
- Note: this is a secondary/review source used here for compiled specific-energy figures and process temperatures with their original citations; primaries should be pulled where a number is load-bearing.

## Abstract

Critical review of the current state of lunar-based manufacturing and construction (LBMC): materials extraction/processing (oxygen and metals from regolith), additive manufacturing, sintering, construction techniques, and their power requirements and challenges. Covers molten regolith electrolysis (MRE), molten salt electrolysis, carbothermal reduction, hydrogen reduction, microwave sintering, and regolith-polymer/geopolymer processes. Emphasizes that solar power is currently the only lunar power source and that evaluating power requirements of manufacturing systems is crucial.

## Summary

### Background and objective
Surveys how metals, oxygen, and construction materials could be produced on the Moon, comparing techniques on efficiency, temperature, power, and technology readiness. Explicitly frames power as a binding constraint (solar-only) and that many extraction processes are high-temperature.

### Key findings (emphasis: specific-energy values, basis, thermal vs electrical, temperature)
- **Molten regolith electrolysis (MRE):** operates with the regolith itself as oxide source and electrolyte "once it reaches temperatures typically between **1600-1800 C**" (elsewhere stated as a minimum of ~1200 C to melt). A cited techno-economic study found **ferrosilicon-alloy extraction by MRE is the most efficient ISRU process: it requires 6,776 kg of equipment and 311.34 kW of solar power to produce 25 tonnes of metal and 23.9 tonnes of oxygen annually** (mass payback ratio 0.14 kg hardware per kg product). 
  - Napkin specific-energy (derived here from those numbers, not stated as such): 311.34 kW x 8,760 h = ~2.73 GWh/yr for 48,900 kg of combined product => **~56 kWh/kg of (metal + oxygen)**; or per oxygen alone ~114 kWh/kg O2; or per metal alone ~109 kWh/kg. This is ELECTRICAL (solar-electric) energy at nameplate power; actual duty cycle would raise per-kg figures. Because MRE is Joule-self-heated (see sibille-2012), this electrical figure already includes the melt process heat.
  - Also cites Schreiner et al. (2016, Advances in Space Research 57(7):1585-1603) parametric MRE sizing model predicting reactor mass and power across oxygen-yield levels vs operating temperature, regolith type, and design flexibility.
- **Carbothermal reduction (NASA CaRD -- Carbothermal Reduction Demonstration):** reached TRL 6 in a Dirty Thermal Vacuum Chamber using a high-power laser to simulate concentrated solar melting. Oxygen-extraction efficiency, expressed as O2 mass per unit energy DELIVERED TO THE REACTOR:
  - 2010 field demonstration: **1.45 g O2/kWh** (= ~690 kWh/kg O2 -- an early, very inefficient demo).
  - CaRD ambient test: **13.42 g/kWh** (= ~75 kWh/kg O2).
  - CaRD vacuum tests: **11.53, 15.79, and 10.77 g/kWh** (= ~63 to ~93 kWh/kg O2).
  - (Note: these g/kWh figures are for CARBOTHERMAL reduction, not MRE.)
- **Molten salt electrolysis:** melt salts at ~700 C or above; needs a separate molten-salt electrolyte; the substantial salt mass makes it inefficient unless salt usage is cut >=5x.
- **Glass/construction:** a 75 kW solar concentrator melted low-grade basaltic regolith simulant at 1200 C to make glass/glass fiber; microwave melting of high-Ti mare simulant 1200-1500 C.
- **Thermal energy storage context:** ~90,000 kg of regolith-derived thermal mass could store 16-19 GJ to carry heat/power through the lunar night.
- General theme corroborating the project thesis: extraction of metals and oxygen is dominated by high-temperature processing (>=1200 C, MRE 1600-1800 C, carbothermal ~1900 C in Colozza), so process heat, not just electrolysis electricity, sets the energy budget.

### Limitations
Review/preprint, not peer-reviewed at time of capture; specific-energy figures are secondary (compiled from cited primaries -- e.g., the 311.34 kW ferrosilicon-MRE study and CaRD demonstrations -- which should be consulted directly for load-bearing use). The g/kWh values are "delivered to the reactor" and do not consistently separate thermal from electrical delivered energy or include full balance-of-plant. Some temperature ranges are quoted as general rather than for a single reactor.

## Topic mapping (neutral)
Overview of lunar material/metal production processes and their specific energy and temperatures; MRE specific energy (ferrosilicon study) and temperature (1600-1800 C); carbothermal reduction demonstrated efficiency (g/kWh); molten salt electrolysis; solar power as the binding constraint; thermal energy storage for lunar night. Serves as the numeric anchor for MRE/carbothermal specific energy that the MRE primary (sibille-2012) does not quantify.
