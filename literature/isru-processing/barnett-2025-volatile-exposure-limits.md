# Barnett, Oh, Dempster & Saydam 2025 - Mass of Lunar Volatiles Required to Reach Spacecraft Exposure Limits, a Simulation Analysis

## Comprehensive Technical Summary

## Citation

Barnett, N., Oh, J., Dempster, A. G., & Saydam, S. (2025). Mass of lunar volatiles required to reach spacecraft exposure limits - a simulation analysis. *Proceedings of the International Astronautical Congress, IAC*, 251-272. Presented at the 76th International Astronautical Congress (IAC 2025), 58th IAA Symposium on Safety, Quality and Knowledge Management in Space Activities, Sydney, Australia, September 29-October 3, 2025. https://doi.org/10.52202/083095-0025

Publisher URL: https://www.proceedings.com/content/083/083095webtoc.pdf

Citation verification: the extracted source PDF carries no printed DOI, journal name, or page range beyond the author affiliation block. The venue, page range (251-272), and DOI were located by resolving the paper title and author list against the Curran Associates / proceedings.com record for ISBN 979-8-3313-2943-3 (IAC 2025 proceedings volume) and confirmed by following the DOI to its proceedings.com landing page, which lists the same title and author set. This paper is the companion of `barnett-2025-regolith-consolidation-water-ice.md` in the same proceedings volume, sharing first author N. Barnett and co-authors Oh, Dempster and Saydam.

## Metadata

| Field | Value |
|---|---|
| Document type | Conference paper (analytical/simulation study; no new laboratory measurement) |
| Institution | UNSW Sydney (Minerals and Energy Resources Engineering; Electrical Engineering and Telecommunications) |
| Conference | 76th International Astronautical Congress (IAC 2025), 58th IAA Symposium on Safety, Quality and Knowledge Management in Space Activities, Sydney, Australia, Sept 29-Oct 3, 2025 |
| Pages (extracted text) | 22 |
| Open access | Not confirmed from the source; distributed through the paid Curran Associates / proceedings.com IAC 2025 proceedings record |

---

## Abstract

Combines published terrestrial safe-work exposure limits (Safe Work Australia, ACGIH, NIOSH) and NASA spacecraft continuous exposure limits (Spacecraft Maximum Allowable Concentrations, SMACs, and Spacecraft Water Exposure Guidelines, SWEGs) with LCROSS-measured Cabeus Crater ejecta volatile concentrations.

Calculates the maximum mass of lunar regolith, per cubic metre of air, that can be handled before airborne or waterborne exposure limits are exceeded.

Treats each of eight Cabeus-detected volatiles independently, one contaminant active at a time, with no additive-mixture effects computed, at 25 degrees C and 1 atmosphere.

Reports a minimum threshold mass of 0.15 g/m3 (hydrogen sulphide, ACGIH TWA) to exceed a terrestrial safe-work limit, and 14.9 g/m3 (hydrogen sulphide, NIOSH IDLH) to reach a life-threatening terrestrial exposure. For spacecraft continuous exposure, 0.04 g/m3 (hydrogen sulphide, 180-day SMAC) is identified as the lowest threshold found.

---

### Background and objective

The paper frames lunar-volatile exposure as a human-health hazard distinct from, but adjacent to, the ISRU value of the same volatiles: extractable oxygen, water and propellant.

It traces the history of spacecraft air-quality standards from 1964, when NASA first recognized the need for cabin air-quality standards ahead of Apollo, through the 1992 NRC-developed Spacecraft Maximum Allowable Concentrations (SMACs) and the 1998 Spacecraft Water Exposure Guidelines (SWEGs). Both are maintained and periodically updated by an NRC Expert Panel for ISS and deep-space use (Khan-Mayberry et al. 2011).

Apollo-era precedent is cited directly. Lunar dust adhering to EVA suits via small particle size and static charge caused astronaut respiratory, ocular and dermal irritation lasting under 24 hours (Wagner 2006; Scheuring et al. 2008). This led NASA to form the Lunar Airborne Dust Toxicity Assessment Group (LADTAG) in 2004, whose report set a habitable-cabin permissible exposure limit of 0.3 mg/m3, time-weighted average, over an intermittent 6-month period for lunar dust particles under 10 microns (Francisco 2023; James 2014).

The paper defines a lunar volatile, following Hurley et al. (2023), as "molecules that cannot remain on the surface in direct sunlight at the lunar equator, where temperatures can exceed 400K" (p. 3).

It restates the observational chain establishing lunar polar water ice: the LCROSS Cabeus Crater impact detection (Colaprete et al. 2010; Gladstone et al. 2010; Luchsinger et al. 2021); Paige et al. (1992) cold-trap stability below 112 K; M3 surface ice detection to a few millimetres depth within 20 degrees latitude of both poles at temperatures below 110 K, with spectral modeling indicating up to 30 wt % water ice in places but only about 3.5% of mapped cold traps showing exposed ice (Li et al. 2018); thermal modeling of stable sub-surface ice below 30 cm depth in briefly-illuminated South Pole terrain (King et al. 2020; Warren et al. 2020); SOFIA detection of molecular water in sunlit regions outside PSRs (Honniball et al. 2021); and a suggested ice-layer depth of roughly 2.0 m (Hall 1998).

Apollo 17 regolith samples released sulphur dioxide and carbon dioxide up to 15 ppm each when heated to 230-260 degrees C, 503-533 K, in laboratory analysis (Heiken et al. 1991). This establishes that non-water volatiles bound in regolith are also a heating-triggered exposure pathway, not just polar ice.

The analysis scope is explicitly narrowed to the eight, nine including hydroxide, volatile species detected in the Cabeus Crater ejecta plume by LCROSS (Table 1, from Colaprete et al. 2010). The stated grounds are that lunar regolith will be handled in both Earth-based (sample return, laboratory analysis) and off-Earth (in-situ resource use, habitat construction, spacecraft return) contexts, and both require assessed exposure limits (p. 3).

### Methods and scope

**Exposure limit sources.** Three terrestrial "safe work" standards were used for Earth-based handling: Safe Work Australia (SWA) workplace exposure standards (2023), the American Conference of Governmental Industrial Hygienists (ACGIH) Threshold Limit Values (2024), and the US National Institute for Occupational Safety and Health (NIOSH) Recommended Exposure Limits (2023).

Each defines a Time-Weighted Average, TWA: an 8-hour day / 40-hour week for SWA and ACGIH, a 10-hour day / 40-hour week for NIOSH. Each also defines a Short-Term Exposure Limit, STEL: a 10-30 minute higher-concentration allowance, standardized in this paper at 15 minutes. NIOSH additionally defines an Immediately Dangerous to Life or Health (IDLH) ceiling.

For off-Earth handling, NASA's Spacecraft Maximum Allowable Concentrations for Airborne Contaminants (SMACs, JSC 20584, Ryder 2022) were used. These provide continuous short-term (1-24 hour, for accidental spills) and nominal limits out to 1000 days of continuous exposure.

The SMAC atmospheric envelope is set by NASA-STD-3001 Volume 2 Revision D (Francisco 2023): minimum 30 vol % combined nitrogen and oxygen, maximum 3 mmHg CO2 partial pressure, inspired O2 partial pressure 2.46-9.86 psia within a total habitat pressure envelope of 5.0-15.0 psia. Nominal values within that envelope are inspired O2 partial pressure 2.8-3.0 psia, habitat pressure 8.2-14.7 psia, and temperature 22.5 degrees C within an 18-27 degree C range.

For drinking-water contamination, NASA's Spacecraft Water Exposure Guidelines (SWEGs, JSC 63414, Langford 2023) were used. These cover 30 ISS and deep-space-relevant compounds, of which three Cabeus-detected volatiles have established SWEGs: ammonia, ethylene and methanol.

**Mixture-effect definitions, stated but not applied.** The paper defines additive effect (Equation 1, sum of C_n/L_n ratios across contaminants, compliant if the sum is less than or equal to 1), synergistic effect (combined impact much greater than the sum of individual effects), potentiation (one contaminant increasing another's effect on an organ it does not normally affect), and antagonism (one contaminant reducing another's effect).

The calculations that follow, however, evaluate only one volatile acting on the atmosphere at a time. Combined or synergistic behavior is explicitly excluded from the numeric results as a stated assumption.

**Core assumptions (p. 9-10).** The regolith sample carries volatile species and concentrations matching the Cabeus Crater ejecta, per Table 1. No volatile mass is lost during extraction or transport. Both Earth-based and spacecraft atmospheres are evaluated at 25 degrees C and 1 atmosphere, 101.3 kPa or 760 torr. Spacecraft inspired partial pressure of oxygen is fixed at 2.9 psia, used as 2.90 psia in the tabulated calculations.

Further assumptions: the atmosphere is dry air; no filtration removes contaminants; the entire volatile mass in the sample instantaneously sublimates or transitions to gas phase on exposure; volatiles distribute evenly through the atmosphere with no pocketing; and only one volatile is present as a contaminant at any given time.

**Calculation chain (Equations 2-8).** Spacecraft inspired oxygen partial pressure is related to ambient pressure and dry-gas oxygen fraction (Equation 2, per Francisco 2023). Dalton's Law (Equation 3) sums partial pressures of atmospheric constituents.

Carbon dioxide's dry-gas volume fraction is derived from its partial-pressure limit (Equation 4), since CO2 limits in the source standards are given as partial pressures rather than concentrations.

Methane's dry-gas fraction is derived from its Lower Explosive Limit, LEL, rather than a toxicological limit (Equation 5). Methane's most restrictive exposure criterion in the source standards is flammability, 5% LEL for safe-work limits and 10% LEL for SMACs, rather than toxicity, and is stated as independent of total pressure.

Dry-gas percentage converts to ppm by simple ratio (Equation 6). Volatile mass concentration in mg/m3 is computed from ppm via the ideal gas relation (Equation 7), using molecular weight, ambient pressure and temperature, and the universal gas constant R = 1.2069 L-psi-K-1-mol-1.

Finally, the maximum allowable mass of regolith per unit air volume is obtained from the weight-percent relation (Equation 8): mass of regolith equals mass of volatile divided by the volatile's Cabeus weight percent of regolith.

**Cabeus ejecta composition used as the calculation basis (Table 1, from Colaprete et al. 2010).**

| Volatile | % relative to H2O(g) | wt % of regolith |
|---|---|---|
| H2O | 100.00% | 5.6 |
| H2S | 16.75% | 0.938 |
| NH3 | 6.03% | 0.338 |
| SO2 | 3.19% | 0.179 |
| C2H4 | 3.12% | 0.175 |
| CO2 | 2.17% | 0.122 |
| CH3OH | 1.55% | 0.0868 |
| CH4 | 0.65% | 0.0364 |
| OH | 0.03% | 0.00168 |

### Key findings

**Source exposure limits in ppm.** Table 4 gives the safe-work exposure limits as originally published, in parts per million, before the paper's own unit conversion to mg/m3.

| Volatile | SWA TWA | SWA STEL | ACGIH TWA | ACGIH STEL | NIOSH TWA | NIOSH STEL | NIOSH IDLH |
|---|---|---|---|---|---|---|---|
| H2S | 10 | 15 | 1 | 5 | NA | 10 (10 min max) | 100 |
| NH3 | 20 | 35 | 25 | 35 | 25 | 35 | 300 |
| SO2 | NA | 0.25 | NA | 0.25 | 2 | 5 | 100 |
| C2H4 | insufficient data | insufficient data | 200 | NA | min. 19.5% oxygen | min. 19.5% oxygen | 800 |
| CO2 | 5,000 | 30,000 | 5,000 | 30,000 | 5,000 | 30,000 | 40,000 |
| CH3OH | 200 | 250 | 200 | 250 | 200 | 250 | 6,000 |
| CH4 | 5% LEL | 5% LEL | min. 19.5% oxygen | min. 19.5% oxygen | NA | NA | NA |

Table 5 gives the NASA continuous-exposure SMAC limits as originally published, in ppm, across the same six duration bands used throughout the paper.

| Volatile | 1 hour | 24 hours | 7 days | 30 days | 180 days | 1000 days |
|---|---|---|---|---|---|---|
| H2S | 5 | 1.3 | 1.3 | 1.3 | 0.3 | NA |
| NH3 | 30 | 20 | 3 | 3 | 3 | 3 |
| SO2 | 0.25 | 0.25 | 0.25 | 0.25 | 0.25 | 0.25 |
| C2H4 | 40 | 40 | 40 | 40 | 40 | 40 |
| CO2 | partial pressure ceiling of 3 mmHg hourly average, all durations | | | | | |
| CH3OH | 70 | 70 | 20 | 20 | 20 | 10 |
| CH4 | 10% LEL | 10% LEL | 10% LEL | 10% LEL | 10% LEL | 10% LEL |

SO2's SMAC values are footnoted in the source as ACGIH-derived proxies (SMACs were never separately assessed for sulphur dioxide), and C2H4's SMAC values are footnoted as an ACGIH safe-work value carrying an applied safety factor of 5 for its time-dependent toxicity, since ethylene SMACs were likewise never separately assessed.

**Converted exposure limits, mg/m3.** Table 7 converts the ppm-based safe-work limits to mg/m3 at 25 degrees C / 1 atm.

| Volatile | Lowest safe-work value found (mg/m3) | Basis | IDLH (mg/m3) |
|---|---|---|---|
| H2S | 1.4 | ACGIH TWA | 139 |
| NH3 | 13.9 | SWA TWA | 209 |
| SO2 | 0.65 | SWA/ACGIH STEL | 262 |
| C2H4 | 229 | ACGIH TWA (only value set) | 917 |
| CO2 | 8,994 | TWA, consistent across agencies | 71,952 |
| CH3OH | 262 | TWA | 7,857 |
| CH4 | 1,639 | SWA/ACGIH TWA and STEL, 5% LEL basis | NA |

Table 8 gives the corresponding SMAC continuous-exposure limits in mg/m3.

| Volatile | 1 hour | 24 hours | 7 days | 30 days | 180 days | 1000 days |
|---|---|---|---|---|---|---|
| H2S | 7.0 | 1.8 | 1.8 | 1.8 | 0.42 | NA |
| NH3 | 20.9 | 13.9 | 2.1 | 2.1 | 2.1 | 2.1 |
| SO2 | 0.65 | 0.65 | 0.65 | 0.65 | 0.65 | 0.65 |
| C2H4 | 45.9 | 45.9 | 45.9 | 45.9 | 45.9 | 45.9 |
| CO2 | 7,099 | 7,099 | 7,099 | 7,099 | 7,099 | 7,099 |
| CH3OH | 91.7 | 91.7 | 26.2 | 26.2 | 26.2 | 13.1 |
| CH4 | 3,278 | 3,278 | 3,278 | 3,278 | 3,278 | 3,278 |

CO2's SMAC is a fixed partial-pressure ceiling rather than a duration-dependent value, which is why it does not taper across the six columns.

**Maximum allowable regolith mass, safe-work limits (Table 9, g/m3 of air).** The lowest, most restrictive threshold found anywhere in the safe-work table is hydrogen sulphide at the ACGIH TWA: 0.15 g/m3. A 0.15 g sample of Cabeus-representative regolith per cubic metre of air is enough to exceed this safe-work limit.

Other H2S thresholds: 1.5 g/m3 (SWA/NIOSH TWA and STEL bases), 2.2 g/m3 (SWA STEL), 0.74 g/m3 (ACGIH STEL), and 14.9 g/m3 at the NIOSH IDLH. The paper identifies the IDLH figure, 14.9 g/m3, as the point capable of resulting in loss of human life.

Sulphur dioxide's minimum threshold is 0.37 g/m3 (SWA/ACGIH STEL). Ammonia's thresholds run 4.1-7.2 g/m3, TWA/STEL across agencies, up to 61.8 g/m3 at the IDLH. Ethylene's only computed threshold is 131.2 g/m3, ACGIH TWA, rising to 524.9 g/m3 at the IDLH.

The two least-restrictive, highest-threshold volatiles are carbon dioxide and methane. The paper's discussion states these require 7.4 kg and 9 kg of regolith per cubic metre of air respectively to reach safe-work limits.

The CO2 figure matches Table 9's TWA value of 7,401.2 g/m3 exactly. For methane, Table 9's only shared SWA TWA/STEL value is 4,502.7 g/m3, 4.5 kg, while the SMAC table (Table 10) records a flat 9,005.4 g/m3, about 9 kg, across all six SMAC durations. The prose figure of "9 kg" for the safe-work case appears to correspond numerically to the Table 10 SMAC value rather than the Table 9 safe-work value; this internal inconsistency is reported as it stands in the source and is not resolved by this summary.

**Maximum allowable regolith mass, spacecraft SMACs (Table 10, g/m3 of air).** Hydrogen sulphide again sets the lowest threshold: 0.74 g/m3 at the 1-hour SMAC, falling to 0.19 g/m3 for 24 hours through 30 days, and to 0.04 g/m3 at 180 days. This 0.04 g/m3 figure is the single lowest mass threshold reported anywhere in the paper.

Sulphur dioxide is flat at 0.37 g/m3 across all durations. Ammonia falls from 6.2 g/m3 (1 hour) to 0.62 g/m3 (7-1000 days). Ethylene is flat at 26.2 g/m3.

Carbon dioxide is flat at 5,841.5 g/m3, matching the discussion's stated "5.8 kg." Methanol falls from 105.6 g/m3 (1-24 hours) to 15.1 g/m3 (1000 days).

Methane is flat at 9,005.4 g/m3 across the five durations for which a value is set; the 1000-day methane SMAC is marked "not set" in Table 10. The discussion text states 18 kg for methane's SMAC threshold, roughly double the tabulated 9,005.4 g/m3, about 9 kg. This is a second internal inconsistency between prose and table, reported as-is.

**Drinking-water contamination example.** Extracting 1 litre of water from Cabeus-representative regolith, 5.6 wt % water content, requires 17,857.1 g of regolith, assuming 100% water extraction efficiency (Equation 8).

That same mass of regolith carries 60.36 g of ammonia, 31.25 g of ethylene, and 15.50 g of methanol, the three Cabeus volatiles with established SWEGs.

Table 11 gives the percentage of each volatile's mass within that regolith sample sufficient to exceed NASA's SWEGs at four exposure durations.

| Volatile | Mass in 17,857.1 g regolith sample (g) | 1 day | 10 days | 100 days | 1000 days |
|---|---|---|---|---|---|
| NH3 | 60.36 | 0.0083% | 0.0017% | 0.0017% | 0.0017% |
| C2H4 | 31.25 | 0.864% | 0.448% | 0.0640% | 0.0128% |
| CH3OH | 15.50 | 0.258% | 0.258% | 0.258% | 0.258% |

The paper characterizes this as showing that contamination by less than 1% by mass of these volatiles, relative to the volatile mass present in a water-yielding regolith sample, can exceed SWEGs.

**Stated primary findings (Discussion, p. 15).** Three findings are given directly:

1. Exposure of humans to as little as 0.04 g of Cabeus-representative lunar regolith per cubic metre of spacecraft atmosphere can impact human health, the 180-day H2S SMAC threshold.
2. The regolith mass thresholds that impact human health are described as "not dissimilar" between Earth-based and spacecraft environments.
3. Further research is stated as required to develop SMACs for all lunar volatiles that can affect human health, since not every Cabeus-detected species has a directly assessed SMAC.

Sulphur dioxide and ethylene in particular lack a NASA-assessed SMAC and were instead estimated from ACGIH safe-work limits, with a safety factor of 5 applied to the ethylene value to account for its time-dependent toxicity.

### Limitations

The authors state the analysis does not account for sublimation losses that would occur during excavation, transportation and delivery of a regolith sample. This includes heat-driven losses from drilling (Bar-Cohen & Zacny 2008; Zacny et al. 2010) and losses from exposure to changing surface conditions during handling (Kleinhenz et al. 2016).

This means the modeled assumption that the entire volatile mass sublimates instantly and completely is a worst-case upper bound, not a transport-realistic estimate.

The rate at which volatiles would actually dissipate through an atmosphere, and the effect of atmospheric filtration and circulation, are not modeled. Spacecraft environments lack gravity-driven natural airflow and require an effective circulation rate of 4.57-36.58 metres per minute to prevent pocketing, per IECLSSIS (2019) and Francisco (2023).

Not all Cabeus-detected volatiles have assessed SMACs. SO2 and C2H4 values used in this study are ACGIH-derived proxies rather than NASA-assessed spacecraft limits.

SMAC applicability itself is stated as uncertain outside the 25 degrees C / 1 atm reference condition used to originally derive most of the standards. NASA's own SMAC documentation states values "may or may not be applicable to altered atmospheres" (Ryder 2022).

The paper calculates that varying spacecraft atmosphere from 25 degrees C / 1 atm down to the lowest habitable envelope, 18 degrees C / 8.2 psia, can shift ppm-versus-mg/m3 equivalence by close to 42.9%. This would change which unit-basis limit actually governs for pressure- or count-dependent toxins.

Flammability limit behavior, LEL/UEL, below 1 atmosphere is described as poorly characterized for methane and other C1-C4 alkanes, so the methane threshold specifically carries added uncertainty at reduced spacecraft pressures.

The analysis is also limited to the eight volatile species detected in the single LCROSS Cabeus Crater impact event, and does not claim to represent the full spectrum of lunar volatile species or their spatial variability across the Moon.

### Topic mapping

The Introduction and its "Space Toxicology Overview," "Lunar Volatiles," and "Airborne Contaminants Exposure Limits" subsections establish the regulatory provenance - SWA, ACGIH, NIOSH, NASA SMACs and SWEGs - and the Cabeus ejecta composition basis.

The Methodology section sets out the assumption list and the full equation chain, Equations 1-8, converting exposure standards and Cabeus concentrations into regolith mass thresholds.

The Results section, "Lunar Volatiles as a Airborne Contaminant" and "Lunar Volatiles as a Water Contaminant," reports the derived mass thresholds in Tables 7-11.

The Discussion's "Assumption Limitations" and "Variation of Atmospheric Conditions on SMACs" subsections state the caveats on sublimation-loss modeling, missing SMACs, and atmosphere-dependent unit conversion.

The Discussion's "Protecting Humans from Volatile Exposure" subsection restates the Apollo-era and current operational-safety framing without new numeric content.

No figure in this source carries a quantitative finding not already stated in the prose or tables; all reported results are numeric table entries, and no chart, plot or image is cited in the body text as the source of a specific number. No figure is flagged for visual review under the Figure Rule.
