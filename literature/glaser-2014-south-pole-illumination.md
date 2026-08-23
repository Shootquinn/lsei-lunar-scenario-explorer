# Gläser et al. 2014 - Illumination Conditions at the Lunar South Pole
## Comprehensive Technical Summary

## Citation

Gläser, P., Scholten, F., De Rosa, D., Marco Figuera, R., Oberst, J., Mazarico, E., Neumann, G. A., & Robinson, M. S. (2014). Illumination conditions at the lunar south pole using high resolution Digital Terrain Models from LOLA. Icarus, 243, 78-90. https://doi.org/10.1016/j.icarus.2014.08.013

Publisher URL: www.elsevier.com/locate/icarus

## Metadata

Peer-reviewed journal article (Icarus) · Technical University Berlin (Department of Geodesy and Geoinformation Science), German Aerospace Center (DLR, Institute of Planetary Research), European Space Agency ESTEC, Arizona State University (School of Earth and Space Exploration), NASA Goddard Space Flight Center · Received 14 February 2014; revised 25 July 2014; accepted 8 August 2014; available online 20 August 2014; print pagination Icarus 243 (2014) 78-90 · Open-access status not printed in source.

---

## Abstract

The illumination conditions of the lunar south pole are investigated using a geometrically adjusted, 20 m/pixel Digital Terrain Model (DTM) built from Lunar Orbiter Laser Altimeter (LOLA) laser tracks, cross-validated against Lunar Reconnaissance Orbiter Camera (LROC) Narrow Angle Camera (NAC) images. Illumination conditions are evaluated first over a 20 x 20 km region across one year (October 22, 2018 to October 22, 2019) at surface level and 2 m above ground for three candidate landing sites: two on Shackleton Rim (SR1, SR2) and one on "Connecting Ridge" (CR1). A 19-year study spanning the lunar precessional cycle is then carried out at surface level, 2 m, and 10 m above ground for Connecting Ridge. Locations there receive sunlight for 92.27% of the time at 2 m above ground and 95.65% of the time at 10 m above ground, with longest continuous darkness periods typically 3-5 days (p. 78).

---

### Background and objective

The Moon's small rotational-axis inclination (~1.54 degrees to the ecliptic) produces polar areas in permanent shadow or extended sunlight. Permanently shadowed areas may harbor water ice (Watson et al., 1961); near-constantly illuminated areas allow near-uninterrupted solar power supply, motivating repeated study of polar illumination (p. 78).

Prior approaches reviewed by the authors: Clementine imagery in 1994 limited investigation to about 2.5 lunar days owing to the mission's 71-day life (Shoemaker et al., 1994; Bussey et al., 1999); Speyerer and Robinson (2013) used approximately 7,800 LROC Wide Angle Camera (WAC) images over February 15, 2010 to February 5, 2011 to build a 100 m/pixel average illumination map; Stacy et al. (1997) used Arecibo radar polarization to search for ice in permanently shadowed areas but was limited by extreme viewing geometry (85.9 degrees incidence angle at the north pole, 83.9 degrees at the south pole) and radar shadows; Margot et al. (1999) derived polar DTMs from Earth-based radar at 150 m spatial and 50 m height resolution, enabling purely geometric illumination simulation but with far-side gaps; the Japanese Kaguya (SELENE) spacecraft's Laser Altimeter (LALT) gave the first complete direct polar topography measurement, used by Noda et al. (2008) at 470 m resolution over 2,000 days and one full precessional cycle, and by Bussey et al. (2010) at similar resolution to generate a south polar illumination map for 2020; Mazarico et al. (2011) simulated illumination using 240 m LOLA DTMs; De Rosa et al. (2012) used LOLA DTMs up to 40 m resolution for specific ESA Lunar Lander candidate sites at the lunar south pole (p. 78-79).

The stated objective is a more detailed investigation of three potential landing sites, two near Shackleton Rim (SR1, SR2) and one on Connecting Ridge (CR1, the ridge connecting Shackleton and de Gerlache craters), using high-resolution 20 m LOLA DTMs, with site nomenclature adopted from De Rosa et al. (2012), and comparison against LROC NAC images (p. 79).

### Methods and scope

**DTM construction.** LOLA tracks were used to derive a 400 x 400 km DTM of the lunar south pole. LOLA is a 5-beam laser altimeter operating at 28 Hz pulse repetition rate; from the nominal 50 km orbit altitude its along- and cross-track resolution is approximately 10-12 m (Smith et al., 2010b). A total of 15,143 tracks (data as of April 2013; Neumann, 2009) covering 81 to 90 degrees south were incorporated. Because all LOLA tracks converge at the poles, shot density is highest there: about 77.3% of 20 m pixels in the region of interest contain 1 to 18 LOLA shots (22.7% interpolated), but data density drops with distance from the pole; on average across the 160 x 160 km DTM about 50% of pixels contain at least one LOLA shot (50% interpolated), and across the full 400 x 400 km DTM only 21.5% of pixels are shot-occupied (78.5% interpolated) (p. 79).

**Co-registration.** Individual LOLA tracks carry small but significant relative offsets (Gläser et al., 2013a, 2013b) and were co-registered to a reference DTM derived from LROC NAC stereo images (2 x 2 km area at Connecting Ridge, 2 m/pixel resolution, with data gaps in shadowed crater floors). In total 876 tracks (about 100,000 spots) intersected the NAC DTM (data as of August 2013); after co-registration and filtering (using fit accuracy in x, y, z, minimum matched spots, maximum single height offset, and standard deviation of height residuals), 454 tracks (about 90,000 spots) were retained, representing only 50% of intersecting tracks but 90% of the original spot count. The 50% track loss is attributed to polar track convergence (tracks intersecting only at DTM corners) and to the "LOLA anomaly," in which only 2 of the 5 LOLA spots are recorded over the entire night side, likely due to contraction of a Multilayer Insulation (MLI) blanket pulling three spots out of the receiver's focus (Smith et al., 2010b; Chakraborty, 2011) (p. 79-80).

An extended DTM (DTM_EV1) was then produced covering an area about nine times larger than the NAC DTM, with the co-registration process iterated using DTM_EV1 as the new base (p. 80-81).

**Illumination simulation.** The horizon method (following Mazarico et al., 2011) was used rather than ray-tracing (used by Margot et al., 1999; Noda et al., 2008; Bussey et al., 2010; McGovern et al., 2012), because it is more efficient over long time series. For each pixel, 720 horizon maps were computed at 0.5-degree azimuth steps from 0 to 360 degrees; the 0.5-degree step matches the Sun's approximately 0.53-degree angular diameter as seen from the lunar surface, ensuring at least one azimuth direction falls within the solar disk. Horizon elevation is calculated via arctan(delta-h / s) along each line of sight, corrected for gnomonic map-projection distortion and spherical curvature. The Sun is treated as a disk rather than a point source; each illumination-map pixel value represents the fraction of the visible solar disk, computed from the two adjacent horizon maps bracketing the azimuth. Observer height above ground (e.g., 1-10 m) can be introduced when building the horizon-map database, to simulate elevated solar panels or rover masts (cf. the Mars Science Laboratory Mastcam at approximately 2 m above ground, Bell et al., 2012). Time steps of 1 hour were used (during which the Moon rotates about 0.5 degrees, matching the angular grid). A slope map was derived from a plane fit over 3 x 3 pixel (60 x 60 m) arrays; solar incidence angle was computed for photo-realistic rendering using Lambertian shading (surface brightness proportional to cosine of incidence angle), scaled by visible solar disk fraction (p. 81-83).

**Metrics defined.** Accumulated illumination is the time-averaged visible solar-disk fraction over the study period (100% if the Sun is always fully visible; a random lunar surface point averages 50% due to the diurnal cycle). Accumulated percentage in darkness/sunlight sums total time in each state over the period. Longest continuous time in darkness and in sunlight are also reported per location, since a location can be in aggregate darkness for a large total yet never dark for more than a short continuous stretch (p. 83).

**Validation.** Synthetic images were compared against LROC NAC images M139811097L/R (for CR1) and M141385360L/R (for SR1/SR2), computed at the known image-acquisition time; the NAC/LOLA resolution difference is about a factor of 40 (0.5 m NAC vs 20 m LOLA). The comparison showed that small surface features of a few pixels were reproduced in the simulation (p. 82-83).

**Study periods.** (1) A 20 x 20 km region covering all three sites, October 22, 2018 to October 22, 2019, at 1-hour steps (8,783 steps), at surface level (0 m) and 2 m above ground. (2) A 19-year study at Connecting Ridge, December 24, 2015 to December 24, 2034 (covering the 18.6-year lunar precessional cycle), at 0 m, 2 m, and 10 m above ground. (3) An additional 6-month period, March 31, 2010 to September 24, 2010, at surface level, to compare directly with De Rosa et al. (2012). Comparisons were also made against Mazarico et al. (2011)'s long-term results at 0 m and 10 m (p. 84-86).

**Slope criterion.** Only slopes under 5 degrees were treated as candidate landing terrain, though the authors note some landers are designed to manage slopes up to 15 degrees (De Rosa et al., 2012) (p. 88).

### Key findings

**Surface level (0 m), 1-year study (Oct 2018-Oct 2019).** The 100 most illuminated areas in the 20 x 20 km region range from 63.83% to about 73.70% accumulated illumination. CR1, SR1, and SR2 all show illumination levels of 70% or more, consistent with prior studies (Bussey et al., 1999; Noda et al., 2008; Mazarico et al., 2011; De Rosa et al., 2012); the three stations identified by Speyerer and Robinson (2013) also fall within the 100 most illuminated areas found here. No areas of constant (100%) sunlight were found during the period (p. 83).

At CR1, despite several regions of interest (RoIs) above 60% illumination along the ridge, only 400 m2 (1 pixel) averages more than 70% illumination within the landing site. At SR1, an area of 1,200 m2 (3 pixels) exceeds 70%, including the single highest-illumination spot found in the study region at surface level, 73.70%; RoI width there is typically only 20 m (1 pixel) but reaches an elongated area of up to 3,200 m2 (about 8 contiguous pixels), and SR1 sits adjacent to the permanently shadowed interior of Shackleton crater. At SR2, an elongated area of 1,200 m2 (3 pixels) also exceeds 70%, similar to SR1 (p. 83-84).

**2 m above ground, 1-year study.** Illuminated areas grow substantially and some merge relative to the surface-level map. The top illuminated pixels are found exclusively at the three landing sites, with average illumination of 80.62% to 86.62%; the majority (79 pixels) are at CR1. CR1 has about 120,000 m2 (297 pixels) receiving more than 70% average illumination, including the pixel of highest illumination found at this height, 86.62%. SR1 has about 70,000 m2 (173 pixels), mainly continuous, above 70%. SR2 has about 12,000 m2 (49 pixels), fully continuous and curve-shaped, above 70% (p. 84-85).

**Connecting Ridge (CR1), long-term (19-year, full precessional cycle) study.** At surface level, 4 pixels are highly illuminated (>70%) over the 19-year window, compared with 1 pixel in the 1-year analysis (p. 85).

At 2 m above ground, the count of highly illuminated pixels (>80% threshold used for this figure) rises from 297 to 358 relative to the 1-year analysis. The highest accumulated illumination, 88.12%, occurs at 89.4395 S, 222.8066 E ("spot 1"), where the longest continuous darkness is 4.58 days and the longest continuous light period is 233.87 days (8.00% accumulated darkness, 92.00% accumulated light). The smallest accumulated darkness, 7.73%, occurs at 89.4399 S, 222.8524 E ("spot 2"), which correspondingly has the highest accumulated light fraction, 92.27%; spot 2's longest continuous darkness is 4.62 days and longest continuous light is 233.87 days, with 87.93% accumulated illumination. Spots 1 and 2 are located immediately adjacent to each other and are described as "almost identical" in their illumination properties (p. 85-86).

At 10 m above ground, 1,724 pixels (about 0.7 km2) are highly illuminated (>92% threshold used for this figure). The location of highest illumination, 92.55%, is at 89.4516 S, 222.7581 E ("spot 3"), with 4.39% accumulated darkness and 95.61% accumulated light, and longest continuous darkness and light periods of 3.08 days and 262.42 days respectively. The location with the longest accumulated light period (shortest darkness), 95.65% light / 4.35% darkness, is at 89.4544 S, 222.8445 E ("spot 4"); its average illumination is 91.94%, with longest continuous darkness of 3.17 days and longest continuous light of 262.42 days. Spots 3 and 4 are located 90 m apart and are again described as almost identical (p. 86).

**Cross-study comparison and resolution dependence.** Table 1 (p. 87) consolidates 14 points of maximum illumination from this and prior studies (study, DTM resolution, illumination percent, coordinates, observer height, evaluated period, site):

| Point | Study | Res. (m/pix) | Ill. (%) | Latitude, Longitude | Height (m) | Period (a) | Site |
|---|---|---|---|---|---|---|---|
| 1 | Noda et al. (2008) | 474 | 86 | -88.8, 124.1 | 0 | lpc | - |
| 2 | Bussey et al. (2010) | 474 | 86 | -88.74, 124.5 | 0 | lpc | - |
| 3 | Speyerer and Robinson (2013) | 100 | 71.7 | -89.74, 201.20 | 0 | 1.0 | - |
| 4 | De Rosa et al. (2012)^a | 40 | 84.13 | -89.687, 196.144 | 0 | 0.5 | SR2 |
| 5 | This study^a | 40 | 81.30 | -89.6871, 197.2887 | 0 | 0.5 | SR2 |
| 6 | This study^a | 20 | 73.84 | -89.7846, 203.9358 | 0 | 0.5 | SR1 |
| 7 | Mazarico et al. (2011) | 240 | 89.01 | -89.45, 222.69 | 0 | lpc | CR1 |
| 8 | This study | 240 | 86.84 | -89.44, 222.52 | 0 | lpc | CR1 |
| 9 | This study | 20 | 76.23 | -89.6856, 196.7626 | 0 | lpc | SR2 |
| 10 | This study (spot 1) | 20 | 88.12 | -89.4395, 222.8066 | 2 | lpc | CR1 |
| 11 | This study (spot 2) | 20 | 87.93 | -89.4399, 222.8524 | 2 | lpc | CR1 |
| 12 | Mazarico et al. (2011) | 240 | 93.10 | -89.45, 222.69 | 10 | lpc | CR1 |
| 13 | This study (spot 3) | 20 | 92.55 | -89.4516, 222.7581 | 10 | lpc | CR1 |
| 14 | This study (spot 4) | 20 | 91.94 | -89.4544, 222.8445 | 10 | lpc | CR1 |

Table note (a): period evaluated was 6 months, March 31, 2010 to September 24, 2010. "lpc" denotes studies over the full 18.6-year lunar precessional cycle; period 1.0 denotes one year (p. 87).

Extraction discrepancy: the pdfplumber text extraction of Table 1 assigned 71.7% and coordinates -89.74, 201.20 to the Bussey et al. (2010) row (point 2), with the Speyerer and Robinson (2013) row (point 3) left with a blank illumination value. Visual reading of the Table 1 page image instead shows both point 1 (Noda et al., 2008) and point 2 (Bussey et al., 2010) at 86%, and assigns the 71.7% value and -89.74, 201.20 coordinates to point 3 (Speyerer and Robinson, 2013). The table above follows the image reading; the text-extraction discrepancy is noted here rather than silently resolved.

The table shows accumulated illumination rising with observer height at a given site (Mazarico et al.'s CR1 values: 89.01% at 0 m versus 93.10% at 10 m; this study's CR1 spot 3 at 92.55% for 10 m versus spots 1/2 near 88% at 2 m). It also shows that at surface level, higher DTM resolution (20 m/pixel) tends to yield lower reported illumination than coarser DTMs (40 or 240 m/pixel) for the same nominal site: CR1 is 89.01% at 240 m/pixel (Mazarico et al., 2011) versus 86.84% at 240 m/pixel when reproduced in this study, and SR2 is 84.13% at 40 m/pixel (De Rosa et al., 2012) versus 76.23% at 20 m/pixel in this study (p. 84-88).

The authors attribute surface-level discrepancies between studies to dependence on raw LOLA data density, local topography, and interpolation algorithm. When this study's 20 m/pixel DTM is downsampled to 40 m/pixel (De Rosa et al.'s resolution), their SR2 result is reproduced; when downsampled to 240 m/pixel (Mazarico et al.'s resolution), their CR1 result is reproduced. A direct horizon comparison (Fig. 23a) shows the 20 m/pixel horizon is generally higher in the near-field than the 40 m/pixel horizon, explaining the lower illumination at finer resolution. At 10 m above ground, resolution matters less because the far-field topography dominates and is well resolved even at coarser scale: the maximum-illumination spot found by Mazarico et al. (2011) at 10 m lies only 52 m from the spot found in this study, corresponding to 1/5 of Mazarico et al.'s 240 m pixel resolution, so the two locations are considered effectively identical despite the differing resolutions (p. 84-88).

**Surface slopes.** Most surface slopes at CR1 and SR1 are smaller than 3 degrees. SR2 has locally steeper slopes but is mostly under about 3-4 degrees. At surface level, landing-site dimensions are comparable between the slope map and the illumination map. At 2 m above ground, the SR2 site is more limited by rough terrain than by illumination, while the CR1 RoI remains surrounded by a zone of slopes under 5 degrees, and the SR1 RoI now more or less covers the entire 5-degree slope map. At 10 m above ground, the CR1 RoI fills the entire 5-degree slope map and beyond (p. 88).

In slope-versus-illumination scatter plots (Fig. 26; slopes 0-30 degrees, illumination fraction 0.00-1.00) for all three sites at 0, 2, and 10 m, the population of points meeting both slope <5 degrees and illumination >70% (plotted in red) grows with observer height. At SR1 and SR2, distinct horizontal "saturation lines" appear at 10 m, indicating that beyond a certain height (between 2 and 10 m) further elevation has little additional effect on maximum accumulated illumination, because all points on such a line share the same far horizon; the authors note that continued elevation would eventually converge toward a single line at 100% accumulated illumination (a point of eternal light) potentially kilometers above the surface. CR1, owing to its larger extent and many independent horizons, does not show a single distinct saturation line (p. 88-89).

**Conclusion.** CR1 benefits most from elevating a solar panel 2 m above ground, with about 80% of the highest-illuminated pixels at that height found there (p. 89). The authors conclude that for a robotic mission relying on solar power collected above surface level, CR1 is "probably the most promising location" at the lunar south pole. Surface-level locations of maximum illumination differ between this study, Mazarico et al. (2011), and De Rosa et al. (2012); at 10 m above ground, however, the location found in this work falls within the same pixel identified by Mazarico et al. (2011), which the authors take as an indicator that near-surface illumination predictions are highly dependent on local topography and interpolation algorithm, while higher-elevation results are comparatively robust to DTM resolution. The authors conclude that high-accuracy, high-resolution DTMs are needed for investigating illumination conditions at candidate landing sites (p. 89).

### Limitations

- DTM shot coverage is incomplete and resolution-dependent: only about 21.5% of pixels in the full 400 x 400 km DTM contain an actual LOLA shot (78.5% interpolated); coverage improves near the pole (about 77.3% shot-occupied in the smaller region of interest) but a substantial interpolated fraction remains throughout (p. 79).
- The "LOLA anomaly" (attributed to MLI blanket contraction) limits data recovery to 2 of 5 beams on the lunar night side, contributing to track loss during co-registration (only 454 of 876 intersecting tracks were retained) (p. 79-80).
- Surface-level illumination results are demonstrably sensitive to DTM resolution and interpolation method; different studies identify different locations of maximum illumination at surface level for nominally the same site, an effect the authors attribute to near-field topography resolution rather than to a physical difference in the terrain (p. 84-88).
- No area of exactly constant (100%) sunlight was identified within the sites, periods, and resolutions studied.
- The Table 1 comparison figures for points 1-2 (Noda et al., 2008 and Bussey et al., 2010) could not be independently corroborated from the running text of this source; a discrepancy between the automated text extraction and the table image is noted above rather than resolved.
- The paper does not report open-access status, funding-independent replication data, or uncertainty bounds on the reported illumination percentages beyond the resolution-comparison discussion.

### Topic mapping

Background and objective section: prior polar-illumination studies and their instruments/resolutions (Clementine, LROC WAC, Arecibo radar, Earth-based radar, Kaguya LALT, LOLA-based studies), and the three candidate landing sites (CR1, SR1, SR2).

Methods and scope section: LOLA DTM construction and co-registration to NAC stereo imagery, the horizon-method illumination simulation, accumulated-illumination/darkness/longest-continuous-period metrics, and the three study periods (1-year, 19-year precessional-cycle, 6-month comparison).

Key findings section: per-site and per-height (0 m, 2 m, 10 m) illuminated-area and accumulated-illumination results for CR1, SR1, SR2; the named spots 1-4 at Connecting Ridge with their coordinates, illumination percentages, and longest continuous darkness/light durations; the consolidated 14-point cross-study Table 1; the resolution-dependence discussion; and the surface-slope and slope-versus-illumination results.

Limitations section: DTM data-density and interpolation caveats, the LOLA night-side anomaly, and the resolution sensitivity of surface-level comparisons.
