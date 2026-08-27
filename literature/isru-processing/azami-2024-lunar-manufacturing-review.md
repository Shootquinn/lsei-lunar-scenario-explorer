# Azami et al. 2024 - A Comprehensive Review of Lunar-based Manufacturing and Construction
## Comprehensive Technical Summary

## Citation

Azami, M., Kazemi, Z., Moazen, S., Dube, M., Potvin, M.-J., & Skonieczny, K. (2024). A comprehensive review of lunar-based manufacturing and construction. arXiv:2408.05823v1 [astro-ph.IM], posted 11 August 2024. DOI: not printed in source (preprint).

Publisher URL: not printed in source (preprint)

## Metadata

Study type: review article (literature synthesis, no new primary experiments) · Institutions: Concordia University (Department of Electrical and Computer Engineering, corresponding author K. Skonieczny); University of Toronto Institute for Aerospace Studies; Ecole de technologie superieure (CREPEC, Department of Mechanical Engineering); Canadian Space Agency (Space Science and Technology, Saint-Hubert) · Publication date: 11 August 2024 (arXiv preprint, version 1) · Open-access status: openly posted preprint on arXiv, no journal name or DOI printed in the document; running footer on every page reads "Preprint"

---

## Abstract

Reviews the published state of the art in Lunar-based manufacturing and construction (LBMC), covering the Lunar environment's effect on fabrication, the mineralogy and simulants of Lunar regolith, oxygen and metal extraction from regolith, space-grade materials selection, additive manufacturing (AM) techniques for regolith and regolith composites, non-additive (traditional) manufacturing techniques, pre- and post-treatment methods, large-scale/robotic construction approaches, and the potential role of artificial intelligence in LBMC. Synthesizes findings technique by technique into comparison tables of technology maturity, applicable materials, regolith content, scale, energy consumption (qualitative), advantages, and challenges, and closes with recommended future research directions per technique.

---

### Background and objective

The paper is motivated by the Artemis program and the anticipated need for sustained human presence on the Moon, which the authors argue makes reliance on Earth-supplied spare parts and structures cost-prohibitive (p. 2). The stated aim is to enumerate the challenges of manufacturing in the Lunar environment, review the state of the art for each traditional and additive manufacturing technique applicable to LBMC, and discuss the potential of each (p. 2). The review gives particular emphasis to in-situ resource utilization (ISRU) and additive manufacturing.

### Methods and scope

This is a literature review, not an experimental study. The authors synthesize findings from primary studies, prior reviews, agency reports, and company/project disclosures into a structured technique-by-technique treatment. Six numbered tables organize the source material: Table 1 (regolith chemical composition by Apollo mission, p. 5), Table 2 (chronological catalog of Lunar regolith simulants, p. 6 to 13), Table 3 (compilation of space-grade materials by category, p. 14), Table 4 (assessment of AM techniques for LBMC, p. 47 to 48), Table 5 (assessment of non-AM techniques for LBMC, p. 49), and Table 6 (recommended future research directions by technique, p. 49 to 50). No numbered figures with surviving captions appear in the extracted text; the review reports no new plotted datasets of its own. The document is 68 physical pages; the article body is internally paginated "Page N of 67."

### Key findings

**Lunar environment constraints on fabrication**

- Atmospheric pressure is about 3x10^-15 bar (p. 2), making outgassing a governing material-selection constraint: polymers must meet Total Mass Loss below 0.1% and Collected Volatile Condensed Mass below 0.01% (p. 2).
- Gravity averages 1.6 m/s^2, about one-sixth of Earth's (p. 3), affecting layer adhesion in extrusion-based printing and requiring compensation for gravity-dependent process steps.
- The Lunar day and night each last about 14.75 Earth days (full cycle about 29.5 Earth days); surface temperatures swing from over +100 C to about -173 C (p. 4). Subsurface mean temperature at 35 cm depth was 40 to 45 C higher than at the surface in Apollo 15/17 heat-flow data, attributed to regolith's low thermal conductivity in its top 1 to 2 cm (p. 4).
- Power is identified as the primary constraint. Solar is the only currently available source; the review surveys NASA's Fission Surface Power Project (three 2022 contracts to Lockheed Martin, Westinghouse, and IX; target under 6 metric tons, 40 kWe, 10-year unattended operation, demonstration targeted for the early 2030s), a UK Space Agency/Rolls-Royce modular reactor initiative, and NASA's Nuclear Thermionic Avalanche Cell (NTAC) plus Metallic Junction Thermoelectric (MJ-TE) concepts, the latter offering 3 to 4 times higher efficiency-per-mass than conventional designs and a conceptual 100 to 200 kWe per unit mobile power station (p. 3).

**Regolith characteristics and simulants**

- Table 1 (p. 5) gives oxide composition (wt%) for Apollo 12/14/15/16/17: SiO2 42.2/46.3/48.1/46.8/45.1; TiO2 7.8/3/1.7/1.2/0.54; Al2O3 13.6/12.9/17.4/14.6/27.3; FeO 15.3/15.1/10.4/14.3/5.1; MgO 7.8/9.3/9.4/11.5/5.7; CaO 11.9/10.7/10.7/10.8/15.7; plus MnO, Na2O, K2O, P2O5 in minor amounts.
- Oxygen and silicon are the two most abundant elements by mole fraction, about 61 mol% (about 42 wt%) and about 16 to 17 mol% (about 21 wt%) respectively (p. 5).
- Mean grain size of analyzed soils ranges 40 to 800 micrometers (average 60 to 80 micrometers); median particle size 40 to 130 micrometers (average 70 micrometers); roughly 10 to 20% of soil by weight is finer than 20 micrometers (p. 5).
- Regolith thickness is approximately 10 to 15 m in highlands and 3 to 5 m in maria; under 1% of the surface is covered by rocks approximately 1 m or larger (p. 5).
- Table 2 (p. 6 to 13) catalogs 27 named Lunar regolith simulants developed between 1990 and 2023 (MLS-1/2, JSC-1/1A, FJS-1, OB-1, NU-LHT series, CAS-1, GCA-1, NAO-1, CHENOBI, CLRS-1/2, GRC-1, CUG-1, BP-1, OPRL/OPRH series, CSM-CL-S, TJ-1, DNA-1, KOHLS-1, KLS-1, OPRFLCROSS2, GreenSpar, EAC-1A, LSS-ISAC-1, LMS-1, LHS-1, CSM-LHT-1/LMT-1/LHT-1G), each tagged by simulant type (mare or highlands) and reported use (general, geotechnical, chemical, rover mobility, ice simulant).

**Oxygen and metal extraction (Section 3.3)**

- Carbothermal reduction (PILOT/OPTIMA program, ORBITEC): field demonstration achieved 1 metric ton O2/year target under Lunar polar conditions; oxygen yields up to 28 wt% under carbon-rich conditions but with a carbon cap limiting heat transfer; carbon loss as low as 0 to 0.03 wt%, corresponding to a maximum of 1.7 kg carbon lost per metric ton of oxygen produced (p. 8).
- The 2010 carbothermal field demonstration achieved 1.45 g O2 per kWh delivered to the reactor. The subsequent Carbothermal Reduction Demonstration (CaRD) project, using a laser to simulate concentrated solar energy inside NASA's Dirty Thermal Vacuum Chamber, raised technology readiness to TRL 6 and reported extraction rates of 13.42 g/kWh (ambient test) and 11.53, 15.79, and 10.77 g/kWh (three vacuum tests) (p. 8 to 9). These are oxygen-extraction yield rates, not sintering-energy figures, and the review reports no absolute kWh per kg sintering-energy value anywhere in the text.
- Molten salt electrolysis (Metalysis-FFC process): a proof-of-concept study achieved near-complete (96%) oxygen recovery from regolith simulant at approximately 950 C, with byproduct Al/Fe, Fe/Si, and Ca/Si/Al alloys (p. 9).
- Molten regolith electrolysis (MRE) operates at 1600 to 1800 C. A comparative plant-scale study found ferrosilicon-alloy extraction via MRE the most efficient of three processes modeled, requiring 6,776 kg of equipment and 311.34 kW of solar power to produce 25 tons of metal and 23.9 tons of oxygen annually, with a mass payback ratio of 0.14 kg hardware per kg product (p. 9 to 10). A separate parametric MRE reactor model forecast oxygen extraction efficiencies of approximately 0.15 to 0.375 kg O2 per kg regolith, with current efficiency rising from 72.5% to 82% for Highland regolith and from 57.5% to 70% for Mare regolith as operating temperature increases; Highland-optimized reactors at about 2000 K were modeled as 33% lighter and requiring 60% less power than Mare-optimized reactors (p. 10).
- Acid leaching, bioleaching, and vacuum sublimation are covered as lower-maturity alternative extraction routes; acid leaching faces freeze/boil cycling of aqueous reagents across the Lunar diurnal temperature range and requires in-situ acid production infrastructure (p. 11).
- Physical (magnetic and electrostatic) beneficiation can pre-concentrate ilmenite and iron oxide ahead of extraction. Using N-50 neodymium-iron-boron magnets, one study enriched iron oxide from 10 wt% to 87 wt% (two passes) and ilmenite from 10 wt% to 75 wt% (three passes) in quartz sand, though enrichment was much weaker in JSC-1A and NU-LHT-2M simulants (4 to 10.5 wt% iron oxide-rich minerals) (p. 12).

**Materials selection (Section 4.1, Table 3)**

- Because Lunar gravity is one-sixth of Earth's, the review states the compressive strength required for Lunar construction is expected to be one-sixth of an equivalent Earth structure, typically 25 to 40 MPa (p. 13).
- Table 3 (p. 14) lists space-grade materials in four categories: metals (aluminum alloys, titanium alloys, stainless steel, Invar, copper alloys, gold/silver), ceramics (alumina, silicon carbide, zirconia, boron nitride, sapphire, piezoelectric ceramics, ceramic thermal insulation), polymers (Kapton/polyimide, polyethylene, PEEK, polysulfone, PTFE, PET, fluorosilicone and silicone rubber, nylon), and composites (carbon fiber, glass fiber, aramid fiber, fiber metal laminates, carbon-carbon, foam core, ceramic matrix composites), each with a qualitative property description.

**Additive manufacturing: Powder Bed Fusion (Section 4.2.1)**

- L-PBF (laser): Fateri et al. printed JSC-1A (sieved to 63 micrometers) at 50 W / 50 mm/s, achieving 1245 HV surface hardness and Ra = 1.5 micrometer roughness (p. 15). Goulas et al. optimized to a laser energy density of 1.011 J/mm^2, achieving 99.8% dimensional accuracy but 40.8% porosity and 670+/-11 HV hardness (p. 15); a follow-up study at 0.92 J/mm^2 reported 44 to 49% porosity, maximum compressive strength 4.2+/-0.1 MPa, elastic modulus 287.3+/-6.6 MPa, hardness 657+/-14 HV (p. 15). Caprio et al. printed NU-LHT-2M highlands simulant to a maximum compressive strength of 31.4 MPa, 680 HV, 37% porosity (p. 15).
- Sibille et al. compared vacuum versus air sintering of JSC-1A mare simulant: vacuum-sintered specimens reached higher compressive strength at a lower temperature than air-sintered specimens (152 MPa at 1100 C in vacuum versus 98 MPa at 1125 C in air) (p. 15). For NU-LHT-2M highland regolith, full sintering with 5.3 to 5.6% open porosity was reached at 1300 C in air versus 1250 C in vacuum for comparable porosity (p. 15).
- Wang et al. (HIT-L-1 simulant, 75 W laser, volumetric energy density 3.5 to 4.3 J/mm^3) reported average compressive strength 50.71 MPa, fracture toughness 1.49 MPa.m^(1/2), hardness 897.91 HV, at 40% relative porosity (p. 16).
- Liao et al. produced a Lunar regolith-AlSi10Mg composite (1:1 weight ratio, SLM, 200 W, up to 800 mm/s) reaching 92.5% relative density and 264 MPa compressive strength (p. 16).
- A large-scale paving demonstration using a 3 kW CO2 laser (5 mm/min, single layer, EAC-1A simulant, 250 mm x 250 mm interlocking tiles) achieved a compressive strength range of 56.19 to 216.29 MPa (average 93.97 MPa), about 50 times the 2.49 MPa reported for the comparison solar-sintered RegoLight specimens (p. 17).
- ICON's Laser Vitreous Multi-Material (VMX) process (with NASA KSC, 6-DOF robotic arms in a 6.4 m x 8.5 m simulation chamber, 0.9 m bed depth) reported compressive strength of 344.7 MPa at 25 C and 251.66 MPa after one year of Lunar thermal vacuum cycling, flexural strength 37.92 MPa, and a thermal expansion coefficient of 3.6x10^-6 per C over -150 to 50 C in vacuum (p. 17).
- EB-PBF (electron beam): operates natively in vacuum and is less sensitive to material absorption than laser processes, but is largely limited to metals; a Howell et al. study printed JSC-1/LHT-1M aluminum composites with no reported mechanical property data (p. 17 to 18). The review identifies this as a research gap.
- SS-PBF (solar sintering): Hintze et al. built a 1 m^2 Fresnel-lens solar concentrator reaching 1350 C on JSC-1 (p. 18). Meurisse et al. and Fateri et al. used dual Xenon lamps (1.2 MW/m^2 focused to a 20 mm point) on JSC-2A, reporting ambient-condition compressive strength of 2.49 MPa and Young's modulus 0.21 GPa, with vacuum results not characterized (p. 18). Outward Technologies fabricated 1 m x 0.3 m x 0.1 m components from CSM-LHT-1 at 95% density, compressive strength 25 MPa, Young's modulus 10.3 GPa, flexural strength 3.5 MPa, described as comparable to M25 concrete (p. 19).
- MWS-PBF (microwave): stated to consume approximately 23% less energy than laser sintering with shorter fabrication times (p. 19, citing ref. [147]), with microwave penetration depth up to 65 cm enabling volumetric, subsurface heating (p. 19). This is a relative energy comparison in the source's own prose, not an absolute kWh/kg figure.

**Additive manufacturing: Material Extrusion, DIW, SLA (Section 4.2.2 to 4.2.3)**

- FFF/FDM: high-performance thermoplastics PEEK, PEKK, and PEI are the polymers of focus for space use. PEEK: glass transition 143 C, tensile strength around 100 MPa, density 1320 kg/m^3 (p. 21). Build orientation strongly affects strength: tensile strength ranged from 82.58+/-1.03 MPa (horizontal/0 degree, at yield) down to 9.99+/-0.94 MPa (vertical/90 degree, at break), versus 98 MPa for molded PEEK (p. 22). Azami et al. found 20 wt% carbon fiber improved PEEK tensile strength by 8.37%, while 15 wt% and 30 wt% Lunar regolith reduced tensile strength by 14.63% and 26.78% respectively (p. 21).
- Carbon is scarce on the Moon (approximately 142 to 226 ppm by mass per Apollo 11 data), which the review identifies as the central obstacle to ISRU-based FFF since polymers themselves cannot be sourced locally (p. 23).
- Extrusion of Molten Regolith (EMR): Mueller et al. (NASA KSC) melted and robotically extruded BP-1 and JSC-1A, reporting flexural strength exceeding typical residential concrete and comparable to some low-durability glasses, but described the technology as early-stage (p. 25).
- Direct Ink Writing (DIW): Contour Crafting (CC) sulfur concrete (about 80% regolith, 20% sulfur, extruded at 130 C) achieved 21 MPa compressive strength, but sulfur's low melting point (120 C) and vacuum instability (1 cm sublimes in about 5 years in vacuum per a cited durability study) limit Lunar applicability (p. 26). Taylor et al. printed PLGA-bound JSC-1A regolith ink into micro-truss lattices, reaching 87% relative density and up to 19 MPa peak compressive stress after 1100 C/24 h air sintering (p. 26). Jakus/Taylor group elastomeric Lunar (LRS) and Martian (MRS) regolith inks (PLGA binder, dichloromethane solvent) showed Young's moduli of 8 to 13 MPa (LRS) and 2 to 3 MPa (MRS), with 27% and 35% porosity respectively, and elastic strain to failure up to 250% (LRS) (p. 27). Ma et al.'s biomimetic geopolymer sandwich structures reached compressive strengths of 11.3 to 20.1 MPa (Y-axis) and 23.8 to 46.7 MPa (Z-axis) depending on cellular architecture (p. 27). Pilehvar et al. used human-waste-derived urea as a geopolymer superplasticizer with DNA-1 simulant, reaching an initial compressive strength of 13 MPa (p. 27 to 28).
- SLA (lithography-based ceramic manufacturing): Altun et al. printed EAC-1A polymer-ceramic suspensions, reporting average compressive strength 5.4 MPa and elastic modulus 403.3 MPa, with relative density falling from 67.9% to 55.9% after debinding and sintering (p. 27).

**Non-additive (traditional) techniques (Section 4.3)**

- Regolith casting: a 1988 project melted basaltic simulant at 1200 C with a 75 kW solar concentrator to produce glass and glass fiber (p. 33). Ishikawa et al. produced construction material by microwave-melting high-Ti mare simulant at 1200 to 1500 C, reaching 120 MPa uniaxial compressive strength (p. 33). Tucker et al. incorporated 1 wt% regolith glass fiber into sulfur concrete, improving flexural strength by about 50% (p. 33). MoonFibre (RWTH Aachen) has spun continuous regolith fibers as thin as 17 micrometers (p. 34).
- Regolith sintering: Simonds (1973) first investigated Lunar sintering, forming cohesive material at 800 C but not at 750 C from sub-37-micrometer glass powder (p. 34). Allen et al. reached maximum compressive strength 26 MPa at 1100 C (p. 34). Matyas et al. densified mare simulant at 1200 C (3.6 to 9.9% porosity) versus highland simulant requiring 1300 C (else 62.8 to 89.0% porosity at 1200 C); sintered thermal diffusivity reached 0.76 mm^2/s, over 100 times the unsintered powder value of 0.0066 mm^2/s, motivating thermal-energy-storage applications (16 to 19 GJ estimated for a 90,000 kg reference thermal mass) (p. 34 to 35). Gualtieri and Bandyopadhyay found failure stress increased about 77%, from 103.2 MPa to 232 MPa, as porosity decreased to 1% via particle-size control (p. 35 to 36). Hoshino et al.'s scaled-up 100 mm x 100 mm x 50 mm blocks reached 30 MPa compressive and 5 MPa bending strength, in the range of typical Earth concrete, with vacuum sintering requiring about 100 K lower temperature than air for equal strength (p. 36). Kim et al. reported 17 to 28 MPa mechanical strength for KLS-1 sintered under vacuum at 1080 to 1120 C (p. 37). Wan et al. found adding 10 wt% Fe to CUG-1A raised density from 82% to 90% and produced tensile strength 21.01 MPa and compressive strength 150.92 MPa (p. 38).
- The Microwave Structure Construction Capability (MSCC) project, part of NASA's MMPACT program, is described as actively working to minimize energy input measured in kWh/kg, and produced a 1.4 kg, 100% in-situ-resource paver from CSM-LHT-1G in a vacuum chamber (p. 36 to 37); no resulting kWh/kg figure is given in the reviewed text.
- Regolith concrete: sulfur concrete (65 wt% JSC-1, 35 wt% sulfur) reached average compressive strengths of 17.5, 15.7, and 17.6 MPa across room-temperature, -27 C 50-day, and 50-cycle freeze/thaw conditions, showing no significant freeze effect, but the source separately reports sulfur sublimation degrading 1 cm of material in about 3.5 years at 15 C versus about 2 hours at 120 C (p. 37 to 38). Geopolymer concrete is described as stable to 800 C and vacuum-stable, usable with up to 90% regolith content, with a near-zero-water recycling process proposed by Wang et al. (p. 38). Polyethylene-bound concrete (Lee et al.) reached compressive strength 12.6 to 12.9 MPa after 4 to 5 hours of heating, stated as equivalent to 70 MPa under Earth gravity per structural-loading requirements cited in the source (p. 39). Zhang et al.'s carbon-nanofiber/geopolymer composite (optimal 0.3 wt% CNF) improved flexural strength by 34.8%, Young's modulus by 7.5%, flexural toughness by 83.9%, and compressive strength by 13.1% (p. 40).
- Binder-based methods: Chen et al. found compaction pressure up to 350 MPa reduced polyester resin binder content in JSC-1 mixtures to 6.5 to 8.7 wt% (p. 39 to 40); a follow-up ultra-low-binder (2 to 5 wt%) method using polymer micro-agglomerates reached 30 to 40 MPa flexural strength (p. 40). Oh et al.'s PEKK-based ultralow-binder cement (3 to 6 wt% polymer) reached 10 MPa flexural strength at 3 wt% PEKK and a maximum of 35 MPa at 6 wt% PEKK (450 to 500 C heating) (p. 40).

**Pre-treatment, post-treatment, large-scale construction, and AI (Sections 4.4 to 6)**

- Pre-treatments center on particle size reduction (milling, sieving) and morphology/surface conditioning (coating to reduce laser reflectivity, drying to prevent moisture-driven defects) (p. 41).
- Post-treatment is dominated by sintering and infiltration for regolith-based (ceramic) parts. Popovich et al.'s spark plasma sintering reduced porosity from 23.7+/-5.4% to 11.7+/-3.3% and raised hardness from 443+/-56 HV to 743+/-142 HV when raising SPS temperature from 1025 to 1075 C (p. 41). Azami et al.'s polymeric resin infiltration raised compressive strength of alumina-based CMC parts from 56 MPa to 120 MPa (p. 42).
- Large-scale/robotic construction (Section 5) surveys gantry-based systems (Contour Crafting, D-Shape, NASA's ACME program, ICON's 2022 Mars Surface Simulated Habitat print), serial-manipulator systems (Mataerial, XtreeE, Apis Cor with an 8.5 m reach, CONPrint3D truck-mounted boom), and mobile/team-based 3D printing approaches (conveyor systems from Voxeljet; mobile-robot printheads; the Digital Construction Platform; SLAAM localization; early multi-robot coordinated printing by Zhang et al.), motivated by the mass cost of launching large gantry structures from Earth (p. 42 to 44).
- AI applications (Section 6) are reviewed as prospective rather than demonstrated for LBMC specifically: machine-learning classification of Lunar soil type, particle size, maturity, and pyroxene chemistry from reflectance spectra (Kodikara et al., using the LSCC Apollo database) and from Chang'e-5 micro-CT imaging; potential use in path planning, build-orientation and support-structure optimization, defect detection/quality monitoring, and prediction of mechanical properties (strain rate, compressive/tensile strength, modulus) from process parameters via neural networks (p. 44 to 45).

**Technique assessment tables (Table 4, AM; Table 5, non-AM; both p. 47 to 49)**

Energy Consumption in these tables is a qualitative rating (Low / Moderate / High / Very High or a descriptive phrase such as "Uses Solar Energy Directly"), not a numeric value. Selected rows:

| Technique | TMS (outdoor ISRU) | Max regolith % | Energy (qualitative) | Notable advantage | Notable challenge |
|---|---|---|---|---|---|
| L-PBF | Low to Medium | High to Very High | Moderate to High | High precision, no additives needed | Low optical absorption causes voids/pores |
| EB-PBF | Low | High to Very High | Moderate to High | Less influenced by absorption characteristics | Ineffective for non-metals; powder emission in microgravity |
| SS-PBF | Low | Very High | Uses solar energy directly | Energy efficient | Process control, low strength, geometric inaccuracy |
| MWS-PBF | Low to Medium | Very High | Low | Energy and time efficient, deep MW penetration | Process control and resolution |
| FFF | Medium | Medium | Low | Simplicity, cost-effectiveness | Layered-structure weakness |
| EMR | Low | Very High | Very High | ISRU, uses molten regolith from O2 extraction | Hard to control |
| CC (contour crafting) | Medium | Medium to High | Low | Construction speed | Water evaporation |
| SLA | Low | Medium | Low | High precision, complex shapes | Indoor only, recycling |
| BJ | Low | Medium | Moderate | Fast, multi-material | Low-g droplet ejection; outgassing/freezing of ink |
| Regolith Casting | Low | Very High | High | ISRU | High energy consumption |
| Regolith Sintering | Low to Medium | Very High | High | Meets structural needs | Needs furnace or MW chamber |
| Sulfur Concrete | Low | Medium to High | Moderate | Stable under freezing | Sulfur instability under vacuum/Lunar day |
| Geopolymer Concrete | Low | High | Moderate | Stable through Lunar day after curing | Needs water |
| Binder-Based | Low | High to Very High | Moderate | Binder recycling and reuse feasible | Requires high compression pressure |

The review's own synthesis (Section 7.1, p. 45 to 47) states no AM technique currently takes precedence over the others; SLA has the highest maturity for small indoor precise parts but faces outdoor vacuum outgassing limits; PBF methods allow high regolith fractions but remain low maturity with literature dominated by conference papers rather than journal studies; EMR is called out as one of the few routes to high-regolith-content, binder-free, large-scale fabrication; Contour Crafting (CC) is identified as the most promising technique for large-scale Lunar construction despite evaporation, outgassing, and vacuum viscosity challenges.

**Energy figures, stated plainly for downstream use**

The review reports no absolute kWh/kg (or other per-unit-mass) sintering-energy figure anywhere in the text. Sintering and casting energy content is expressed only in three ways: qualitatively (the Low/Moderate/High/Very High ratings in Tables 4 and 5); relatively (microwave sintering "consumes approximately 23% less energy than laser sintering and in shorter fabrication times," p. 19, citing ref. [147]); or as process temperature (regolith casting and sintering reach approximately 1200 to 1300 C and are described as energy-intensive, p. 46; vacuum-sintered JSC-1A at 1100 C reached 152 MPa versus air-sintered at 1125 C reaching 98 MPa, p. 15). The only quantitative energy-rate figures anywhere in the paper are the CaRD oxygen-extraction rates in g/kWh (13.42, 11.53, 15.79, 10.77 g/kWh, p. 8 to 9), which measure oxygen-extraction yield per unit energy delivered to the reactor, not sintering energy.

### Limitations

- The review is a synthesis of secondary sources; it conducts no independent experiments and its quantitative claims carry whatever uncertainty the underlying primary studies report (mixed and often unstated in the extracted text).
- Almost every technique is assessed by the review itself as Low or Low-to-Medium technology maturity stage (TMS) for outdoor ISRU-based Lunar fabrication (Table 4, Table 5, p. 47 to 49); the authors state no technique has yet reached a TMS the review would call "High" (p. 45 to 46).
- The authors note that PBF literature is dominated by conference papers and company/agency project disclosures rather than peer-reviewed journal studies (p. 46).
- Reported mechanical properties (compressive strength, porosity, density) come from simulant testing under widely varying process parameters, atmospheres (air, vacuum, argon, nitrogen), and specimen geometries across studies, and the review does not attempt to normalize or statistically combine these values.
- Several sections point to explicit research gaps rather than settled findings: EB-PBF for non-metals, scattering effects (Rayleigh/Mie) in laser sintering of regolith, ISRU-based FFF, and Lunar-condition validation of MRE cold-wall reactor designs (p. 15 to 18, p. 23).
- The review's own future-directions table (Table 6, p. 49 to 50) frames essentially every technique as requiring further work on process control, energy efficiency, recycling, or outgassing before Lunar deployment.

### Topic mapping

- Section 2 (p. 2 to 4): Lunar environmental constraints (vacuum/outgassing, low gravity, energy sources, temperature gradients).
- Section 3 (p. 4 to 13): regolith mineralogy and morphology, simulants, and oxygen/metal extraction processes (carbothermal, molten salt electrolysis, MRE, acid leaching, bioleaching, physical separation).
- Section 4.1 (p. 13 to 14): space-grade materials selection and Table 3.
- Section 4.2 (p. 14 to 27): additive manufacturing techniques (PBF variants, material extrusion variants including FFF/FGF/EMR/DIW, SLA).
- Section 4.3 (p. 33 to 40): non-additive techniques (regolith casting, regolith sintering, regolith concrete, binder-based methods).
- Section 4.4 to 4.5 (p. 41 to 42): pre-treatment and post-treatment methods.
- Section 5 (p. 42 to 44): large-scale and robotic/mobile construction approaches.
- Section 6 (p. 44 to 45): artificial intelligence applications to LBMC.
- Section 7 (p. 45 to 50): synthesis across techniques, Tables 4/5/6, and future research directions.
