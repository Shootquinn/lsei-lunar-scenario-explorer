# Prettyman et al. (2006) — Elemental composition of the lunar surface: Analysis of gamma ray spectroscopy data from Lunar Prospector

## Provenance
- **Source file:** `prettyman-2006-lunar-elemental-composition.pdf` (on disk, project root; 41 pp, text-extractable, verified with pdfplumber)
- **Document type:** Peer-reviewed research article
- **Authors:** T. H. Prettyman, J. J. Hagerty, R. C. Elphic, W. C. Feldman, D. J. Lawrence, G. W. McKinney, D. T. Vaniman (all Los Alamos National Laboratory)
- **Venue:** *Journal of Geophysical Research*, vol. 111, article no. E12007 (transcribed from title page header)
- **Year:** 2006 (Received 30 Nov 2005; revised 26 May 2006; accepted 7 Jul 2006; published 21 Dec 2006)
- **DOI:** `10.1029/2005JE002656` (transcribed from title page header "doi:10.1029/2005JE002656" and the printed Citation block)
- **Publisher URL:** https://doi.org/10.1029/2005JE002656
- **Publisher / copyright line (as printed):** Copyright 2006 by the American Geophysical Union; 0148-0227/06/2005JE002656

## Abstract (transcribed from title page)
Gamma ray spectroscopy data acquired by Lunar Prospector are used to determine global maps of the elemental composition of the lunar surface. Maps of the abundance of major oxides, MgO, Al2O3, SiO2, CaO, TiO2, and FeO, and trace incompatible elements, K and Th, are presented along with their geochemical interpretation. Linear spectral mixing is used to model the observed gamma ray spectrum for each map pixel. The spectral shape for each elemental constituent is determined by a Monte Carlo radiation transport calculation. Linearization of the mixing model is accomplished by scaling the spectral shapes with lunar surface parameters determined by neutron spectroscopy, including the number density of neutrons slowing down within the surface and the effective atomic mass of the surface materials. The association of the highlands with the feldspathic lunar meteorites is used to calibrate the mixing model and to determine backgrounds. A linear least squares approach is used to unmix measured spectra to determine the composition of each map pixel. The present analysis uses new gamma ray production cross sections for neutron interactions, resulting in improved accuracy compared to results previously submitted to the Planetary Data System. Systematic variations in lunar composition determined by the spectral unmixing analysis are compared with the lunar soil sample and meteorite collections. Significant results include improved accuracy for the abundance of Th and K in the highlands; identification of large regions, including western Procellarum, that are not well represented by the sample collection; and the association of relatively high concentrations of Mg with KREEP-rich regions on the lunar nearside, which may have implications for the concept of an early magma ocean.

## Summary

### Background / objective
One of the main goals of Lunar Prospector (LP) was to determine the elemental composition of the lunar surface using gamma ray and neutron spectroscopy. This paper describes the spectral-unmixing algorithm that converts low-resolution LP gamma ray spectra into global maps of the abundance of major elements (O, Mg, Al, Si, Ca, Ti, Fe) and radioactive/incompatible trace elements (K, Th, U) within a few tens of centimeters of the surface. It supersedes the preliminary abundance maps submitted to the Planetary Data System in June 2000. For this project it is the definitive global Lunar Prospector elemental (thorium) map.

### Methods / scope
- **Instrument:** Lunar Prospector Gamma Ray Spectrometer (GRS), pulse-height resolution ~12% FWHM at 662 keV. With the exception of Th and Fe, individual lunar gamma-ray lines are not well resolved, so spectral unmixing (analogous to spectral-reflectance unmixing) is required.
- **Data:** Corrected, time-ordered gamma ray spectra (512 energy channels each) binned onto quasi-equal-area maps at 20° (114 pixels), 5° (1790 pixels), and 2° (11,306 pixels). High-altitude mapping orbit ~100 km (footprint ~150 km FWHM); low-altitude ~30 km.
- **Model:** Measured spectrum for each pixel modeled as a linear mixture of elemental spectral components whose amplitudes are elemental weight fractions. Component spectral shapes computed by Monte Carlo radiation transport (MCNPX). Model linearized using neutron-spectroscopy-derived parameters (neutron number density, average atomic mass). Solved with constrained, nonnegative, weighted linear least squares; U constrained proportional to Th.
- **Calibration:** Anchored to the composition of feldspathic lunar meteorites (association of highlands units with feldspathic meteorites per Korotev et al. 2003); backgrounds determined by latitude-binned highlands regions. Selected calibration constant k = 33.4. Compositions of Apollo (11,12,15,16,17), Luna (16,20,24), and an average feldspathic-highlands-terrane (AFHT) endmember (Table 1) used to build/validate the spectral library.
- **Three terranes framework (Jolliff et al. 2000):** Procellarum KREEP Terrane (PKT), South Pole–Aitken (SPA) terrane, feldspathic highlands terrane (FHT).

### Key findings (with quantitative values)
**Thorium (Th):**
- **Average lunar surface Th = 1.7 µg/g (ppm)** from the 5° data set (printed "1.7 mg/g"; the µ glyph renders as "m" on text extraction — value is micrograms/gram = ppm), compared with Warren's [2005] postcalibration value of **1.35 µg/g**. The larger surface average is stated to be consistent with Hagerty et al. [2006b] on Th in lunar pyroclastic glasses. Note the paper stresses the *bulk-Moon* Th is different from (lower than) this surface average.
- Th and K rich materials are concentrated on the lunar nearside (the Procellarum KREEP Terrane); Th and K concentrations are very low on the far side, even within the SPA basin. (Global Th distribution is presented as maps, Figure 25, binned at 2°/5°/20° — the map color scales are image-only; no single peak-ppm PKT value is printed in the text.)
- Endmember Th (Table 1, MCNPX material compositions): **Apollo 11 (A11) = 2.34 ppm; average feldspathic highlands (AFHT) = 0.37 ppm.** (Other Apollo/Luna endmembers omitted from the table because Th/U are present only in trace quantities and were handled in separate simulations.)
- Th distribution qualitatively similar to Lawrence et al. [1999, 2000]; highlands average (the lowest-Th region) was constrained by lunar meteoritic data (Korotev 1998).

**Uranium (U):** Table 1 endmembers A11 = 0.52 ppm; AFHT = 0.16 ppm. U assumed proportional to Th globally.

**Potassium (K):** Presented as global maps (Figure 26, ppm). Table 1 endmember K (wt%): A11 0.14, A12 0.21, A15 0.13, A16 0.08, A17 0.10, Luna16 0.09, Luna20 0.06, Luna24 0.02, AFHT 0.02. K is slightly more compatible than Th/U in at least one major mineral (positive intercept on K-vs-Th scatter). Low lunar K/Th ratio indicates the Moon formed from material highly depleted in volatiles relative to the inner planets and C1 chondrites (consistent with the giant-impact model).

**Iron oxide (FeO):**
- Highest FeO concentrations (**> ~18 wt%**) found in western Procellarum extending into Imbrium (the "WPI" region).
- Maximum FeO in this study **~25 wt%** vs ~23 wt% in Lawrence et al. [2002]. Values approaching **30 wt%** appear in the 2° data set but are statistical artifacts, not representative of the true maximum. Per-pixel FeO uncertainty ~1 wt%. Endmember Fe (Table 1, wt%): Luna24 15.20, Apollo 11 12.75, AFHT 3.42.

**Titania (TiO2):**
- **Highest TiO2 ~8 wt%**, found in Mare Tranquillitatis (similar to Elphic et al. 2002 from neutron spectroscopy). TiO2 used to classify mare basalts. Western Procellarum pixels have high FeO but only intermediate TiO2. Endmember Ti (Table 1, wt%): Apollo 11 (high-Ti) 4.76; AFHT 0.13.

**Major-oxide mapping:** Global maps produced for MgO, Al2O3, SiO2, CaO, TiO2, FeO. Strong Al2O3–FeO anticorrelation: sample/meteorite regression Al2O3 = −1.2·FeO + 32.4 (R² = 0.95); LP 5° data Al2O3 = −0.97·FeO + 31.3. Relatively high Mg is associated with KREEP-rich nearside regions (possible early-magma-ocean implications). Oxide sums used as a self-consistency check (should sum ~100%); western Procellarum pixels show low oxide sums (~94%), indicating some element abundances are underestimated there and that the region is poorly represented by the existing sample collection.

### Limitations (as stated)
- GRS pulse-height resolution is low (~12% FWHM); only Th and Fe give well-resolved spectral features, so all other elements depend on the unmixing model.
- Large spatial footprint (~150 km FWHM at 100 km altitude) far exceeds the scale of Apollo/Luna landing-site traverses, so sample sites do not provide reliable "ground truth" for calibration; feldspathic-meteorite calibration was adopted instead.
- Th abundance maps and PKT/SPA peak values are presented graphically (figures), not as printed numeric peaks in the running text.
- Western Procellarum oxide sums (~94%) reveal residual systematic errors / underestimated abundances there.
- 2° FeO maxima (~30 wt%) are statistical, not real. Improved precision awaits combined low- and high-altitude data.

## Topic mapping (neutral)
- Definitive global Lunar Prospector GRS elemental maps (major oxides + K, Th, U) — the canonical source for surface thorium/potassium and FeO/TiO2 distributions. Suitable to replace a thorium-mapping citation currently attached to wilson-2018.
- Surface-average thorium (1.7 ppm; cf. Warren 1.35 ppm) and endmember Th/U (AFHT 0.37/0.16 ppm; Apollo 11 2.34/0.52 ppm) — feeds heat-production and resource-grade estimates.
- Th/K nearside concentration (PKT) vs far-side / SPA depletion; K/Th ratio and lunar volatile depletion.
- FeO mapping (WPI > 18 wt%, max ~25 wt%) and TiO2 mapping (max ~8 wt%, Mare Tranquillitatis) for mare-basalt classification and Fe/Ti resource context.
- Methodology: gamma ray spectroscopy + MCNPX spectral unmixing + neutron-spectroscopy linearization, calibrated to feldspathic lunar meteorites.
