# Liu 2025 - Sintering of Lunar Regolith Simulants Using a Domestic Microwave
## Comprehensive Technical Summary

## Citation

Liu, Z., Li, J., Yang, X., Ding, Y., & Meng, S. (2025). Sintering of lunar regolith simulants using a domestic microwave: A rapid and energy-efficient strategy for construction material fabrication. *Journal of the European Ceramic Society*, *45*, Article 117047. https://doi.org/10.1016/j.jeurceramsoc.2024.117047

Publisher URL: https://doi.org/10.1016/j.jeurceramsoc.2024.117047

Citation notes, recorded so a later reader does not treat an absence as an omission:

- The issue number is not printed anywhere in the document. The running head on all eight pages prints volume, year and article number as "45 (2025) 117047", and the PDF metadata `/Subject` field prints the same string. The issue element is therefore UNVERIFIED from the source and is not constructed here.
- The article is paginated by article number and carries no journal page range. Its own local folios run 1 to 8, printed on pages 2 through 8.
- The year of the issue of record is 2025, printed in the running head. All processing dates and the copyright line print 2024, and the DOI stem carries 2024. Both facts are on the title page.
- The journal homepage printed on the title page is www.elsevier.com/locate/jeurceramsoc.

## Metadata

Experimental laboratory study with coupled electromagnetic and thermal finite-element modelling. National Key Laboratory of Science and Technology on Advanced Composites in Special Environments, Harbin Institute of Technology, Harbin 150080, PR China. Received 26 August 2024; revised 31 October 2024; accepted 1 November 2024; available online 2 November 2024; issue of record 2025. Not open access: the title page copyright line reads 0955-2219 / (c) 2024 Elsevier Ltd, all rights reserved. Funded by the Major Program of the National Natural Science Foundation of China, grant 12090034. Eight pages, 11 figures, 3 tables, 49 references, plus a separate Supporting Information file containing four supplementary figures and three supplementary tables.

---

## Abstract

Reports susceptor-assisted microwave sintering of two lunar regolith simulants, mare CLRS-1 and highlands SC-080, in a 2.45 GHz 1000 W domestic microwave oven fitted with a silicon-carbide-lined ceramic fibre kiln. Establishes, for 11 g powder charges in an alumina crucible, that 11 minutes densifies CLRS-1 and 14 minutes densifies SC-080, with metered whole-process energy consumption of 69 and 98 MJ/kg respectively. Characterizes the two products for density, hardness, compressive and flexural strength, fracture toughness, thermal expansion and thermal conductivity, before and after 15 thermal cycles spanning minus 180 C to 150 C, and compares them with terrestrial brick and concrete. Supports the experiments with a COMSOL model coupling Maxwell's equations to Fourier heat transfer, used to select power and time and to examine internal temperature uniformity.

---

### Background and objective

The paper opens on in-situ resource utilization as the route to avoiding Earth transportation costs for lunar infrastructure, naming landing pads, walls and roads as the target structures. It positions sintering against concrete on the grounds that sintering requires no additives, which the authors treat as the decisive advantage for early surface construction.

It then places microwave sintering against the other consolidation routes by their reported shortcomings, each with citations. Pressureless sintering consolidates simulants readily and produces good mechanical and thermal properties, but its heating is slow, typically 91 to 350 minutes. Spark plasma sintering reaches 2.90 g/cm3 in 20 minutes, but the equipment complexity is judged too expensive for lunar engineering. Laser sintering produces high-precision small parts such as gears and nuts, but the beam size and penetration depth make it unsuitable at building scale. Solar sintering is reported to give low mechanical properties. Microwave sintering converts electromagnetic field energy into heat volumetrically, which the authors associate with lower sintering temperature and energy consumption, higher heating speed, and simpler equipment.

Three stated gaps motivate the work. The dielectric constant of simulants rises with temperature, which can drive thermal runaway and degrade product quality. Most published microwave work uses mare simulants, whereas the future lunar base is stated to be sited in the South Pole region, so the highlands type should be studied; three references are cited for this point. And sample properties need comprehensive investigation to support engineering application.

The objective is therefore to develop computational modelling that predicts the heating behaviour of a mare and a highlands simulant, to sinter both using a ceramic fibre microwave kiln inside a domestic microwave oven, and to characterize microstructure, mineralogy, mechanical properties and thermal properties, including behaviour in a simulated lunar surface thermal environment.

### Methods and scope

**Feedstocks.** CLRS-1, the mare simulant, was purchased from the Chinese Academy of Sciences; its source material is basaltic scoria composed of modal glass, pyroxene, olivine and plagioclase. SC-080, the highlands simulant, was purchased from SimulTek Research Company Ltd; the manufacturer-stated composition is anorthosite 74.4 percent, basalt 24.7 percent, ilmenite 0.4 percent, pyroxene 0.3 percent and olivine 0.2 percent. CLRS-1 particles are brown and SC-080 particles are gray, and both show irregular shapes and sharp edges. Median particle sizes are 119 and 115 micrometres respectively (Liu et al., 2025, p. 2).

Chemical composition by X-ray fluorescence, in weight percent, is given in Table 1 (p. 3):

| Oxide | SiO2 | Al2O3 | Fe2O3 | CaO | MgO | Na2O | K2O | TiO2 | P2O5 | MnO |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CLRS-1 | 49.3 | 15.1 | 11.3 | 8.3 | 7.1 | 3.9 | 2.1 | 1.9 | 0.6 | 0.2 |
| SC-080 | 51.2 | 26.6 | 2.7 | 12.8 | 1.6 | 2.9 | 0.5 | 0.6 | 0.1 | 0.1 |

**Apparatus.** A domestic microwave oven at 2.45 GHz and 1000 W from Guangzhou Guben Technology Co., Ltd., and a ceramic fibre microwave kiln from Zibo Dingrong High Temperature Materials Co., Ltd. The kiln chamber is 80 mm in diameter and 45 mm in height, made of white insulating fibre and lined internally with black silicon carbide. The paper identifies the silicon carbide as a susceptor, a high-loss material that converts microwave energy to heat, so the arrangement is described as hybrid heating combining radiation from the susceptor with volumetric heating of the sample. Eleven grams of simulant powder was placed in an alumina crucible, the crucible in the kiln, and the kiln in the microwave oven. Power level and heating time were set before starting; after the oven stopped, the kiln was removed and cooled naturally to room temperature (p. 2).

**Energy measurement.** The energy consumption of the microwave oven's entire process was measured with an electricity meter, a DDS666 from Zhejiang Zhengtai Instrument Co., Ltd (p. 2). The paper reports no separately measured power draw and no loss breakdown.

**Temperature measurement.** The top of the microwave oven was drilled with a 10 mm diameter hole, through which a colorimetric pyrometer measured the surface temperature of the sample directly (p. 4). Both the measured and predicted temperatures are referenced to a point at the centre of the sample's upper surface.

**Characterization.** Volume density by the Archimedes method. Nano hardness under 500 mN on an Agilent G200. Compressive strength on 5 mm diameter by 12 mm cylinders at 0.5 mm/min on an Instron 8002. Flexural strength by three-point bending on 3 mm by 4 mm by 25 mm strips, 16 mm span, 0.5 mm/min. Fracture toughness by single-edge notched beam on 2 mm by 4 mm by 22 mm specimens with a notch 0.2 mm wide and 2 mm deep, 16 mm span, 0.05 mm/min. Each mechanical value is the average of five samples. Coefficient of thermal expansion on 3 mm by 4 mm by 25 mm specimens from minus 100 C to 150 C at 10 C/min under argon, on a Netzsch 402 Expedis Supreme. Thermal conductivity on 12.7 mm diameter by 2.5 mm specimens from minus 100 C to 150 C on a Netzsch LFA467. Particle size distribution by laser diffraction on a Malvern Mastersizer 2000. Composition by XRF on a Rigaku ZSX Primus IV. Mineralogy by XRD on a Malvern Panalytical Empyrean. Thermogravimetry with differential scanning calorimetry in air at 10 C/min on a Netzsch STA449F3. Microstructure and elemental analysis by SEM with EDS on a Hitachi SU5000. Dielectric properties by coaxial probe and vector network analyzer at 2.45 GHz on an Agilent E5071C (p. 2).

**Simulated lunar thermal cycling.** One cycle is 12 hours at minus 180 C, then 12 hours at 25 C, then 12 hours at 150 C, then 12 hours at 25 C. Fifteen cycles were run, after which compressive strength, flexural strength and fracture toughness were re-measured at the same specimen sizes and parameters (p. 2).

**Modelling.** A COMSOL solid model of the microwave chamber, the ceramic fibre insulation package, the silicon carbide susceptor and the simulant, meshed with 57,118 tetrahedral elements. The electromagnetic module uses a rectangular waveguide with input power defined as 1000 W, TE10 excitation at 2.45 GHz, and the entire microwave metal cavity as an impedance boundary condition; the frequency-domain solution gives the field distribution in the cavity. The thermal module assigns a surface-to-ambient radiation boundary condition to the susceptor kiln surface and couples the electromagnetic solution as the heat source. The governing relations are given as Maxwell's equations (equation 1), the Fourier heat transfer equation (equation 2), and the microwave heat source as a function of frequency, permittivity of free space, imaginary permittivity and field intensity (equation 3). Material properties are held constant: the paper states explicitly that the work does not consider the effect of temperature on parameters (p. 3).

Model parameters are given in Table 2 (p. 4):

| Material | Density (kg/m3) | Thermal conductivity (W/(m K)) | Specific heat (J/(kg K)) | Relative permeability | Relative permittivity | Loss tangent | Electrical conductivity (S/m) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CLRS-1 | 2560 | 1.29 | 790 | 0.9801 | 3.0419 | 0.1339 | 1e-6 |
| SC-080 | 2600 | 1.04 | 730 | 0.9494 | 2.9588 | 0.1247 | 1e-6 |
| SiC | 3120 | 170 | 675 | 1.01 | 10 | 0.4 | 10 |
| Al2O3 | 2700 | 0.32 | 1000 | 1 | 4.3 | not given | 1e-14 |
| Air | not given | not given | not given | 1 | 1 | not given | 0 |

**Scope boundaries stated by the paper.** All runs were at one atmosphere in air. The paper's future-work paragraph names a vacuum environment, low gravity, real lunar regolith mineral composition and particle size, and varying heating powers as effects that should be further investigated (p. 7).

### Key findings

**Thermal behaviour of the two simulants.** Differential scanning calorimetry of CLRS-1, whose glass phase content is stated as 20 to 40 percent, shows a vitreous transition at 626 C, glass phase crystallization at 766 C, simultaneous crystal melting with amorphous particle crystallization at 1014 C, and full melting at 1129 C. The SC-080 curve shows no exothermic peaks before melting, which the paper attributes to high crystallinity, with melting annotated at 1248 C in Figure 3(b). Thermogravimetric mass loss over the run is annotated as minus 0.53 percent for CLRS-1 and minus 0.52 percent for SC-080 (Figure 3, p. 3).

**Dielectric coupling.** Calculated loss tangents at 2.45 GHz are 0.1339 for CLRS-1 and 0.1247 for SC-080. The paper cites a criterion that materials with a loss tangent between 0.01 and 1 absorb microwave energy effectively, and concludes that both simulants couple well (p. 2). Figure 3(c) gives real permittivity of 3.0419 and 2.9588 and dielectric loss of 0.4074 and 0.3691 for the two materials.

**Model against experiment.** Maximum errors between predicted and measured surface temperature are 7.4 percent for CLRS-1 and 7.1 percent for SC-080 (p. 4). Internal temperature distribution is reported as relatively uniform with the sample core hotter than the edge and a maximum internal difference of 200 C. From this the paper infers that no thermal runaway occurred during sintering, which it links to the absence of sample deformation and cracking. The paper notes that the model does not account for sample rotation.

**Time and temperature schedule at 1000 W.** For CLRS-1, heating times of 10, 11 and 12 minutes correspond to 966, 1018 and 1063 C. For SC-080, times of 13, 14 and 15 minutes correspond to 1084, 1123 and 1157 C. Both simulants show density and compressive strength rising with heating time and then flattening. The inflection points for effective densification are 11 minutes for CLRS-1 and 14 minutes for SC-080, which the paper takes as the times at which sintering completed (p. 4).

**Product properties at the selected schedules.** At 1000 W and 11 minutes CLRS-1 reached 2.34 g/cm3 and 309 MPa compressive strength. At 1000 W and 14 minutes SC-080 reached 2.23 g/cm3 and 146 MPa. Full property sets are given in Table 3 (p. 6), alongside literature values for brick and concrete:

| Sample | Density (g/cm3) | Hardness (GPa) | Compressive 25 C / 15 cycles (MPa) | Flexural 25 C / 15 cycles (MPa) | Fracture toughness 25 C / 15 cycles (MPa m^1/2) | CTE, minus 100 to 150 C (10^-6 / C) | Thermal conductivity, minus 100 to 150 C (W/(m K)) | E (MJ/kg) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CLRS-1 | 2.34 | 13.09 | 309 / 291 | 41.66 / 40.88 | 1.68 / 1.57 | 4.20 to 7.25 | 0.77 to 1.32 | 69 |
| SC-080 | 2.23 | 7.57 | 146 / 141 | 28.37 / 26.90 | 0.67 / 0.63 | 3.38 to 6.19 | 0.63 to 1.13 | 98 |
| Brick | not given | 9.90 | 77 | 22 | 0.71 | 5.25 | 0.96 | not given |
| Concrete | not given | 8.00 | 70 | 14.20 | 0.85 | 13.00 | 1.69 | not given |

**Energy consumption, the paper's headline quantity.** The abstract states that hybrid heating for 11 and 14 minutes gave energy consumption of 69 and 98 MJ/kg respectively for CLRS-1 and SC-080 (p. 1). The same two values appear as the two rows of the E column of Table 3 (p. 6). The paper's discussion on p. 7 gives a third figure, stating that using 1000 W microwave heating equipment the energy consumption was 76 MJ/kg, and comparing it with 61 MJ/kg reported by Allan et al. for microwave sintering, while noting that this study's sintering time of 11 minutes was well below Allan's 30 minutes. The same paragraph gives the authors' earlier pressureless sintering result as 103 MJ/kg at 220 minutes. The paper does not reconcile the 76 MJ/kg on p. 7 with the 69 MJ/kg printed on p. 1 and p. 6 for the same 11-minute CLRS-1 run.

**Comparison at 800 W.** Simulation indicated that heating times of 16 minutes for CLRS-1 and 22 minutes for SC-080 at 800 W reach sintering temperatures of 1019 and 1134 C. Density and compressive strength results for those runs are placed in supplementary Table S1. The paper reports that lower power extended the time to reach sintering temperature but did not significantly change the properties of the sintered samples (p. 4). No energy figure for the 800 W runs appears in the main article.

**Mineralogy and microstructure.** XRD of CLRS-1 powder shows a wide hump between 15 and 35 degrees two theta indicating a glass component, which disappears after sintering, consistent with the calorimetry. SC-080 powder shows no hump, only mineral diffraction peaks. Neither sintered sample shows significant appearance or disappearance of peaks relative to its powder, though both show reduced intensity in certain peaks, which the paper links to molten amorphous phase formation and volatilization of some crystalline phases (pp. 5 to 6).

SEM of the CLRS-1 fracture surface shows mineral particles bonded together with many bubble-like pores, and in magnified views the particle morphology and boundaries are indistinguishable. EDS identifies iron-rich white particles covering the sample area and calcium-rich plagioclase black particles, from which the paper infers that iron-bearing minerals melt at lower temperature to form a liquid phase promoting mass transport and final sintering. Inside the pores, EDS spots show high oxygen with silicon, aluminium and calcium significantly reduced, and the paper infers that the bubble-shaped pores arise from trapped gas from high vapour pressure elements, residual air accumulation, and low-melting glass phase evaporation. SC-080 shows similar bonding and bubble-like pores but retains sharp angular particles with no significant molten phase in the matrix or pores, which the paper attributes to the low glass mineral content and the high temperature needed to sinter calcium-rich plagioclase (pp. 5 to 6).

Fracture surfaces at shorter times, 10 minutes for CLRS-1 and 13 minutes for SC-080, show unsintered areas, and longer times, 12 and 15 minutes, do not significantly improve mechanical properties or change the microstructure. On that basis the paper fixes 11 and 14 minutes as the optimal sintering times (p. 6).

**Durability.** Strength retention rates of both samples after 15 thermal cycles were above 90 percent, which the paper reports as good durability against lunar surface temperature change. The paper attributes the lower thermal expansion and thermal conductivity of the SC-080 sample to its more porous structure at lower density (pp. 6 to 7).

**Positioning against other routes.** Figure 11 (p. 7) plots compressive strength against temperature for simulant samples prepared by microwave sintering, solar sintering, laser sintering, pressureless sintering and spark plasma sintering, drawing on thirteen cited studies. The paper states that its CLRS-1 sample had higher compressive strength than the comparison set, and that its SC-080 sample at 146 MPa was higher than other microwave-sintered results. The body text on p. 6 gives the SC-080 figure as 140 MPa in one sentence, while Table 3, the abstract and the conclusions give 146 MPa.

**Stated conclusions.** The paper concludes that both simulants were sintered in a microwave oven with a ceramic fibre kiln, that the modelled internal temperature distribution was uniform and higher power raised the heating rate, that optimal times are 11 and 14 minutes at 1000 W, that sintered surfaces were smooth without cracking, that densification proceeds by melting of low melting point minerals bonding the grains, and that the mechanical and thermal properties are similar to Earth-based concrete and brick. It presents the rapid heating rate and low energy consumption as the attractive features for early construction under energy scarcity.

### Limitations

Limitations stated by the paper in its own voice:

- The heating experiments were conducted at ambient pressure. The paper lists the effects of a vacuum environment as future work (p. 7).
- The experiments were at Earth gravity. Low gravity is listed as future work.
- Real lunar regolith mineral composition and particle size are listed as future work, so all results are on purchased terrestrial simulants.
- Varying heating powers beyond 1000 W and 800 W are listed as future work.
- The model does not consider the effect of temperature on material parameters (p. 3), while the introduction identifies the temperature dependence of the dielectric constant as the mechanism that causes thermal runaway.
- The model does not account for rotation of the sample to homogenize temperature (p. 4).

Limitations evident from the reported scope, stated descriptively:

- Sample charges are 11 g and the kiln chamber is 80 mm by 45 mm, so all results are batch-scale laboratory results in a consumer appliance. The paper reports no scaling study and no continuous or larger-batch operation.
- The energy figures are whole-appliance wall-plug measurements from an electricity meter. The paper reports no cavity efficiency, no susceptor or crucible mass, no kiln mass, and no partition of the metered energy between the sample and the apparatus.
- The paper prints two different energy values for the same 11-minute CLRS-1 run, 69 MJ/kg in the abstract and Table 3 and 76 MJ/kg in the discussion, and does not reconcile them. It similarly prints 146 MPa in three places and 140 MPa in one for the SC-080 compressive strength.
- The p. 7 sentence attributing 103 MJ/kg at 220 minutes to pressureless sintering cites reference [49], which is titled as a cold sintering study by the same group. Whether that reference also reports a pressureless comparison cannot be determined from this article.
- Four supplementary figures and three supplementary tables are referenced in the text and are not in the article file; they are in the separate Supporting Information download named in Appendix A.

### Topic mapping

**Microwave sintering process and energy.** Sections 2.1 and 3 and Table 3 carry the apparatus description, the metered energy figures of 69 and 98 MJ/kg, the discussion figure of 76 MJ/kg, and the two comparison figures of 61 MJ/kg for a cited microwave study and 103 MJ/kg for the authors' earlier route.

**Highlands versus mare feedstock.** The introduction on p. 1 states the South Pole siting premise and the resulting need to study highlands simulants. Section 2.1 and Table 1 give the two feedstock compositions. Sections 3 and Table 3 give the two products separately throughout, with per-simulant times, densities, strengths and energies.

**Product mechanical and thermal properties.** Table 3 on p. 6 and the surrounding discussion carry hardness, compressive strength, flexural strength, fracture toughness, thermal expansion and thermal conductivity, before and after 15 thermal cycles, with brick and concrete comparison rows.

**Thermal runaway and process control.** The introduction names thermal runaway as a known risk. Section 3 and Figures 5 and 6 carry the model-versus-experiment temperature comparison and the internal uniformity result the paper uses to argue that runaway did not occur.

**Dielectric properties of simulants.** Section 3 and Figure 3(c) and Table 2 carry the measured permittivity and loss tangent values at 2.45 GHz for both simulants, and the coupling criterion cited from the literature.

**Comparison across sintering routes.** The introduction summarizes pressureless, spark plasma, laser and solar sintering by their reported limitations with citations. Figure 11 on p. 7 plots compressive strength against temperature across those routes for thirteen cited studies.

---

*Prepared from the source PDF at `liu2025_microwave_sinter.pdf`, sha256 9d9a3e48769364329f9d591af9e5d78ed8d3252e89b88dd0dfa27bec9bca8867. All eight pages were read in the text layer under two independent extractors and rendered and inspected as images. Page citations use the article's own printed folios 1 to 8.*
