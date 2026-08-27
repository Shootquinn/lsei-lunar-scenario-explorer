# NASA 2025 - Integrated Lunar Power Strategy Considerations
## Comprehensive Technical Summary

## Citation

National Aeronautics and Space Administration. (2025). *Integrated lunar power strategy considerations* [2025 Moon to Mars Architecture Concept Review white paper]. NASA Moon to Mars Architecture. NTRS accession 20250010948.

Publisher URL: https://ntrs.nasa.gov/citations/20250010948, direct PDF: https://ntrs.nasa.gov/api/citations/20250010948/downloads/ACR25%20-%20WP%20-%20Lunar%20Power%20Strategy.pdf

## Metadata

White paper / framework document · NASA (Johnson Space Center, Langley Research Center, Glenn Research Center, NASA Headquarters, and National Cyber-security Center co-authored) · dated 2025-12-12 · 2025 Moon to Mars Architecture Concept Review (ACR25) · public domain (U.S. Government work) · 6 pages

The printed title on the document itself is "Integrated Lunar Power 2025 / Moon to Mars / Strategy Considerations / Architecture" (a two-line running head split across the title block); the NTRS record's own citation title is "Integrated Lunar Power Strategy Considerations." The filename served by NTRS, "ACR25 - WP - Lunar Power Strategy.pdf," carries "ACR25" as the 2025 Architecture Concept Review's internal document code and "Lunar Power Strategy" as a filename-level short title, not as the document's own printed title. Neither the printed title nor the NTRS citation title is "ACR25 Lunar Power Strategy."

Authors printed on the record: Nujoud Merancy and Shatel Bhakta (Johnson Space Center), Kandyce E. Goodliff (Langley Research Center), Lee S. Mason (NASA Headquarters), Justin S. Fada (Glenn Research Center), Greg Mercer and Danny Baird (NCS).

---

## Abstract

A narrative framework document on NASA's approach to lunar surface power for the Artemis campaign and its Moon to Mars Architecture. States the environmental drivers (lunar South Pole illumination and shadowing geometry), the architectural drivers (multi-region support, mass minimization, complexity/risk balance, extensibility to Mars), and a qualitative comparison of nuclear fission and solar power generation, energy storage, and power transfer (cabling and power beaming) options. Concludes that NASA is developing an integrated lunar power strategy and, as of August 2025, had announced plans (per then-acting Administrator Sean Duffy) to develop a nuclear power system for the lunar surface. Carries four numbered figures, one of which (Figure Three) is a chart with a cumulative-power-in-kW ordinate bounded at 0 and 30 and tagged Values Notional. Contains no energy quantity in any unit, and no sintering, regolith, or ISRU processing content.

---

### Background and objective

The paper frames lunar surface power as a cross-cutting architecture problem rather than a single-technology choice, driven by the lunar South Pole's mix of near-continuous illumination in some locations and near-continuous darkness in others. It positions the strategy against the Moon to Mars Architecture's staged segments (Human Lunar Return, Foundational Exploration, Sustained Lunar Evolution) and states that external power augmentation becomes necessary starting in the Foundational Exploration segment.

### Methods and scope

The document is qualitative in its prose: no cost model, no mass-fraction table beyond one narrative figure, and no cited primary data set of its own. Its quantitative content sits almost entirely in its artwork, which is flattened raster and does not appear in a text extraction; the Figures section below records that content. It discusses two power-generation technologies (nuclear fission and solar) in a comparison table of qualitative factors (availability, maturity, unique factors), introduces "effective energy storage duration" as a named parameter (the hours of storage needed to survive the annual worst-case lunar night), and discusses two power-transfer approaches (cabling and power beaming) in narrative terms only.

### Key findings

The only quantity in the running prose: "conventional lithium-ion batteries would account for more than one-fourth of the mass of a theoretical 15-metric ton habitation asset delivered to the lunar surface" (p. 5). No source or derivation is given for it within the paper. The same page states the Mars one-way light-time communications delay ranges from 4 to 24 minutes, and gives power-transfer separation distances qualitatively as several meters to several kilometers.

Segment phasing is stated explicitly. Human Lunar Return runs on self-sufficient elements with no external power augmentation; Foundational Exploration is where NASA will implement external power augmentation; Sustained Lunar Evolution is where additional national, international, and commercial actors generate further needs, with commercial power services named as a means of meeting them.

The paper names and defines effective energy storage duration in a callout box (p. 4): the number of hours of energy storage capacity needed to account for the annual worst-case recharge and discharge of solar-generated power, that is, winter survival mode. It states the parameter varies greatly across lunar South Pole sites and makes site selection a design factor for that reason. No value is given for any site.

A two-column comparison table (p. 4) contrasts nuclear and solar on three rows and carries no numbers. Availability: continuous versus only in sunlight. Maturity: prior experience limited to low-power, radioisotope power systems versus extensive spaceflight heritage. Unique factors: human-rated radiation shielding and long-distance power cabling versus tall masts to increase array height above the surface and the need for energy storage for night power. Adjacent prose adds that NASA has yet to demonstrate the large, vertical solar systems needed for lunar polar applications, and may need to adapt or construct specialized facilities to build larger space-rated fission power systems.

Two power-transfer approaches are under analysis: cabling and power beaming, the latter using lasers or microwaves, with inductive coupling raised for close-proximity charging.

Policy anchors: NASA identified nuclear fission as the primary surface power generation source for initial human missions to Mars in 2024, citing a 2024 architecture white paper; in August 2025 acting Administrator Sean Duffy announced plans to develop a nuclear power system for the lunar surface.

The paper closes with a reference list of four items, all NASA in-house architecture products (a 2022 white paper on the South Pole rationale, the NASA Moon to Mars Architecture website, a 2024 Mars surface power decision white paper, and the NASA Moon to Mars Objectives executive summary); it cites no external ISRU, sintering, or resource-processing literature.


### Figures

Four numbered figures, one each on pages 1 through 4. Pages 5 and 6 carry no figures. All figure artwork is flattened raster, so no label, axis, or value inside a figure appears in an extracted text layer. The readings below were taken from the embedded images at native resolution (5400 x 2250 for the Figure Two and Figure Three artwork, 2654 x 405 for Figure Four) using PyMuPDF and NumPy; values read off a plot are marked as readings.

Figure One (p. 1) is a monochrome orthographic rendering of South Polar terrain under a single illumination epoch, sunlit rims and massif tops in grey against fully black shadowed interiors, overlaid with one thin teal circle and a teal crosshair marking the pole. Caption: a rendering of sunlight and shadow within 2 degrees of the lunar South Pole on January 1, 2030. No axes, scale bar, ticks, coordinate labels, colour bar, or legend. Its only quantities, the 2 degree radius and the 2030-01-01 epoch, are in the caption. Being a single instant, it supports no illumination-fraction reading.

Figure Two (p. 2) is a qualitative infographic with no axes and no units, contrasting SURVIVE (no power augmentation) with THRIVE (with augmentation). Its key defines three icon tiles, a teal weight for Payload Mass, an orange battery for Battery Mass, a green lightning bolt for Power System Mass, plus a rose Power bar and a navy Range bar. Assets are drawn as tile stacks, so the figure's quantitative content is tile counts. On the SURVIVE side, four user assets: three landers each with one payload, one battery, and one power system tile, and one rover with two power system, one payload, and three battery tiles. Totals: 4 payload, 6 battery, 5 power system, 15 tiles. On the THRIVE side, the same four assets and the same 15 tiles: lander one with one payload, one battery, one power system; lander two with two payload and one battery; lander three with three payload; rover with two payload and four battery. Totals: 8 payload, 6 battery, 1 power system. Added alongside, and not part of the 15, are a dedicated lander with three power system tiles labelled External Power Augementation (the misspelling is the document's) and a separate single-battery grid node cabled to all four users and the power lander. Fill bars, unscaled and untick-marked, sit at roughly half to two thirds on the SURVIVE side and full on the THRIVE side.

Figure Three (p. 3) is the document's only chart, panel-titled Foundational Exploration Segment Power Profile. Ordinate: cumulative power in kW, bracketed by printed endpoints 0 and 30. Abscissa: lunar surface power users, bracketed by printed endpoints 0 and 12. Six gridline intervals on each axis, implying unprinted graduations of 5 kW and 2 users. An italic tag in the lower right reads Values Notional, and the caption calls the profile notional. Six legend entries in two groups: Day Power Needed, Day Power Available (subtitled without augmentation), Day Power Gap; Night Power Needed, Night Power Available (subtitled without augmentation), Night Power Gap.

Calibration for the readings below: plot frame x 323 to 3391 px for 0 to 12 users, y 1973 to 207.5 px for 0 to 30 kW, giving 58.85 px per kW. Trace stroke about 12 px, or 0.2 kW. Anchoring instead to the printed glyph centres shifts values by up to 0.4 kW. All values are readings, uncertainty about plus or minus 0.5 kW in power and plus or minus 0.15 in users.

| Users | Day Needed | Day Available | Night Needed | Night Available |
|---|---|---|---|---|
| 0 | ~0 | 0.1 | ~0 | 0.0 |
| 2 | ~9.9 | 9.9 | 2.6 | 1.2 |
| 4 | 10.5 | 10.1 | 3.1 | 1.2 |
| 5 | 16.4 | 15.9 | 5.2 | 1.8 |
| 7 | 20.1 | 16.0 | 6.1 | 1.8 |
| 9 | 21.0 | 16.0 | 6.6 | 1.8 |
| 11 | 22.4 | 16.0 | 7.7 | 1.8 |
| 12 | 28.3 | 16.1 | 9.6 | 1.75 |

All values in kW. Day Needed is drawn beneath Day Available and is not separately visible below about 4 users, where the two are coincident by construction; the caption states earlier users are entirely power self-sufficient. Day Available is a two-step staircase, ramping to about 10 kW between 1 and 2 users, holding to about 4 users, ramping to about 16 kW by 5 users, then flat to 12 users. Day Needed separates after about 4 users and rises to about 22.4 kW at 11 users before a steep final rise to about 28.3 kW at 12. Night Needed shelves near 2.5 to 3 kW from about 2 to 3.7 users, steps to about 5.1 kW at 5, and reaches about 9.6 kW at 12. Night Available reaches about 1.75 kW by 5 users and holds flat. Derived at 12 users: Day Power Gap about 12.2 kW, Night Power Gap about 7.9 kW; night availability without augmentation saturates at roughly one ninth of day availability.

Figure Four (p. 4) is a single horizontal timeline with no axis, no ticks, no units, and no printed numbers. A green Lunar Summer band, hatched at its left edge to indicate continuation, runs into a teal Lunar Winter band. A continuous orange rule denotes solar illumination and dark navy blocks denote periods of darkness. Two annotated span brackets sit below: purple, Maximum Period of Continuous Darkness; rose, Effective Energy Storage Need. Caption states the graphic is representative and for illustrative purposes only, not actual illumination at a proposed site.

Measured against the native render (readings, not printed values): the timeline spans 5211 px, of which the summer band occupies 1523 px and the winter band 3530 px. Twelve discrete darkness blocks fall within the winter band, widths 213, 84, 84, 212, 84, 83, 342, 84, 85, 41, 40, and 84 px. The purple bracket spans 338 px over the widest (seventh) block. The rose bracket spans 1044 px, from the leading edge of the third block to the trailing edge of the seventh, of which darkness accounts for 805 px (77 percent) and four intervening illuminated gaps for the remainder. The implied ratio of effective energy storage need to maximum continuous darkness is about 3.1, unlabelled and explicitly illustrative.

Three unnumbered graphics carry no numbers: the nuclear versus solar comparison table (p. 4), the Effective Energy Storage Duration definition callout (p. 4), and the Key Takeaways box (p. 6).

### Number inventory

A digit-token sweep of the text layer returns 44 tokens; four further numerals are printed inside Figure Three and appear in no text extraction, for 48 printed numerals in total. Of the 44, twelve are digit substrings inside the four reference URLs, six are page numbers, seven are the ACR branding year 2025 (page 1 sidebar plus six footers), four are footnote markers, and four are reference-list numerals, leaving eleven in prose and captions.

Numerals that are physical quantities carrying a unit, nine printed plus one written out: 2 degrees and January 1, 2030 (Figure One caption); 0 kW and 30 kW (Figure Three ordinate bounds); 0 and 12 lunar surface power users (Figure Three abscissa bounds); 15 metric tons (theoretical habitation asset, p. 5); more than one-fourth (battery share of that mass, p. 5, written out); 4 minutes and 24 minutes (Mars one-way light-time range, p. 5).

### Limitations

The document is a strategy-framing white paper, not a data source. It contains no energy quantity in any unit. A case-insensitive search of the full text for kWh, kW, sinter, megajoule, MJ, joule, specific energy, per kilogram, per tonne, /kg, regolith, ISRU, and watt returns zero matches, and the only unit symbol anywhere in the artwork is kW in the Figure Three ordinate title, which is a rate rather than an energy and carries a Values Notional tag. The word ISRU never appears; the phrase in-situ resources appears once (p. 3), in a list of activities more available power would enable, with no process, material, or energy attached.

The one mass-fraction quantity it carries (battery mass as more than one-fourth of a 15 metric ton habitat) is unsourced within the document, attributed only to unnamed analyses. Figure Three is labelled notional and is an illustration of shape and ratio rather than an analysis output, a design point, or a requirement. Figure Four is labelled representative and for illustrative purposes only. The paper names effective energy storage duration as a parameter but gives no value for it at any site. It gives no reactor power level, array size, delivery schedule, or cost. All four of its references are NASA in-house architecture products, so it cannot be followed outward to primary data.

### Topic mapping

Lunar surface power architecture strategy, pages 1 through 6 throughout. Moon to Mars segment phasing of power augmentation, pages 1, 3, and 5. Lunar South Pole illumination and shadowing geometry, page 1 (Figure One) and pages 2 and 4. Nuclear fission versus solar power generation, pages 3 and 4, including the comparison table on page 4. Energy storage technologies and the effective energy storage duration parameter, pages 4 and 5, with Figure Four on page 4. Notional Foundational Exploration segment power demand and availability, page 3 (Figure Three). Power transfer by cabling and power beaming, page 5. Mars-forward technology considerations, page 5. Does not touch energy-per-tonne, specific-energy, sintering, regolith processing, or any ISRU value chain.
