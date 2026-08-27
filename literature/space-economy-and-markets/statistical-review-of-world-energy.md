# Energy Institute Statistical Review of World Energy 2026 (75th edition)

## Citation

Energy Institute. *Statistical Review of World Energy 2026*, 75th edition. Produced by the Energy
Institute (EI) in partnership with Ember and in collaboration with Kearney and KPMG. London:
Energy Institute, 2026. Full data and methodology at
https://www.energyinst.org/statistical-review.

No DOI. On disk: `Statistical Review of World Energy.pdf` at the workspace root (88 pages). The
headline Total Energy Supply figures used here were extracted via pdfplumber from the "Total
energy supply and carbon" narrative (page 23), the "Total energy Supply" data table (page 24),
and the "Supply by fuel" table (page 25), with the exajoule-to-terawatt-hour conversion taken
from the Review's own "Approximate conversion factors" appendix (page 83).

## Abstract

The Energy Institute Statistical Review of World Energy is the standard annual dataset of global
energy production, consumption, trade, and emissions, published freely each year and, before its
transfer to the EI, produced by bp. This 75th (2026) edition reports data for calendar year 2025.
It is the keystone numerator of the review's global energy-intensity ratio: world total energy
supply is the energy figure divided by world GDP to obtain kilowatt-hours per dollar. The on-disk
edition reports world Total Energy Supply (TES) of 600.31 EJ in 2025, up 1.7 percent on 2024,
with fossil fuels still 86 percent of the total.

## Summary

### Background and objective

The Statistical Review provides "the first, full, freely-available analysis of global energy
markets for the prior year" (Foreword, page 3). It is described as a 75-year continuous dataset,
originally stewarded by bp and now by the Energy Institute in partnership with Ember and in
collaboration with Kearney and KPMG. For this review its role is narrow and load-bearing: it
supplies the numerator (world total energy supply) of the global energy-intensity keystone, with
world nominal GDP (from the World Bank WDI table, `GDP.md`) as the denominator. The 2026 edition
also carries a 75th-anniversary analysis on energy security and import dependence and country and
regional profiles, which are context rather than the figures used here.

### Methods and scope

The Review's headline energy metric is Total Energy Supply (TES). The table footnote (pages 24
and 25) defines the coverage: "energy supply comprises commercially-traded fuels, including
modern renewables used to generate electricity." Non-fossil combustible electricity generation is
accounted for on its input heat requirements, and non-combustible renewables on the energy
content of their gross electrical output. Data run 2015 to 2025 with annual columns, a 2025 share
of world total, and 2015 to 2025 growth rates; growth rates are adjusted for leap years (page
24). Energy is reported in exajoules (EJ). The conversion used to move between EJ and
terawatt-hours is the Review's own: one exajoule equals approximately 278 terawatt-hours of
electricity-equivalent (page 83, "Calorific equivalents"); more precisely 1 EJ = 277.78 TWh
(since 1 EJ = 1e18 J and 1 TWh = 3.6e15 J).

Important edition and definition note. This on-disk file is the 2026 (75th) edition reporting
2025 data, and its headline metric is Total Energy Supply. Earlier editions of the Review
reported a "primary energy consumption" series that, under the older substitution-accounting
method, ran higher (about 620 EJ for 2023). The TES series in this edition is lower for the same
years (see below), because of the different accounting treatment of non-fossil generation. The
two are not interchangeable; this matters for reconciliation and is treated explicitly below.

### Key findings

World Total Energy Supply (the keystone numerator), from the "Total energy Supply" table, "Total
World" row (page 24):

- 2025: 600.31 EJ (that is about 166,750 TWh at 277.78 TWh per EJ). Growth of 1.7 percent over
  2024; 10-year (2015 to 2025) growth of 1.4 percent per year.
- 2024: 592.18 EJ (about 164,500 TWh).
- 2023: 579.16 EJ (about 160,900 TWh).
- Of the 2025 total, OECD is 219.89 EJ (36.6 percent) and non-OECD is 380.43 EJ (63.4 percent);
  the European Union is 52.19 EJ (8.7 percent).

The narrative confirms the headline: "Total energy supply (TES) topped 600EJ in 2025, a rise of
1.7 percent over 2024" (page 23), and "Total energy supply (TES) exceeded 600EJ in 2025, a rise
of 1.7 percent over 2024, continuing the long-term upward trend" (Key highlights, page 5).

Fuel mix, world TES 2025 (page 25, "Total World" row, exajoules): oil 200.97, natural gas 150.70,
coal 166.03, nuclear 31.04, hydroelectricity 16.12, renewables 35.45, total 600.31. Fossil fuels
(oil plus gas plus coal, 517.70 EJ) are 86 percent of TES (page 5). Renewables were the largest
single contributor to TES growth in 2025, expanding about 10 percent year on year, the first time
outside a recession that the largest source of TES growth was not coal, oil, or gas (page 23).

Largest national energy systems, TES 2025 (page 24): China 162.19 EJ (27.0 percent of world),
United States 93.83 EJ (15.6 percent), India 39.10 EJ (6.5 percent), Russian Federation 31.19 EJ
(5.2 percent), Japan 16.48 EJ (2.7 percent). Regional totals: Asia Pacific 283.84 EJ (47.3
percent), North America 113.71 EJ, Europe 72.13 EJ, Middle East 41.96 EJ, CIS 40.65 EJ, South and
Central America 26.16 EJ, Africa 21.85 EJ.

Emissions and other context. Global CO2 emissions from energy, gas flaring, and methane rose 1.1
percent to about 41,000 million tonnes of CO2 in 2025 (page 23); CO2 from fossil-fuel consumption
alone rose 1.1 percent to 35,806.2 million tonnes (page 5). Electricity demand grew about 3
percent, faster than TES; solar generation grew about 30 percent and reached an 8.7 percent share
of power generation, surpassing wind (8.4 percent) and nearly equalling nuclear (8.8 percent)
(page 5). Global installed battery storage grew 66 percent to 302 GW (page 12). These are context
for the energy-security analysis and are not part of the keystone computation.

### Reconciliation against the gap register and the review's keystone

The register and the review's keystone assumed world primary energy of 620 EJ for 2023, equal to
172,222 TWh, paired with world GDP of about 110 to 111 trillion dollars (2024), giving an
energy-intensity keystone of about 1.55 to 1.64 kWh per dollar.

The on-disk file is a NEWER edition than that assumption and reports a DIFFERENT metric. Two
distinct gaps arise:

1. Edition and reference year. The on-disk file is the 2026 (75th) edition reporting 2025, not
   the earlier edition reporting 2023. Its headline world figure is 600.31 EJ for 2025 (not 620
   EJ for 2023).
2. Metric definition. The on-disk headline is Total Energy Supply (commercially-traded fuels
   including modern renewables), whereas the register's 620 EJ was the older "primary energy
   consumption" series. On the TES basis, even 2023 is only 579.16 EJ on disk, below the
   register's 620 EJ, because of the different accounting for non-fossil generation.

Recomputed keystone from strictly on-disk sources (2025 numerator, 2025 denominator):
600.31 EJ equals about 166,750 TWh, that is 1.6675e14 kWh; divided by world GDP of 118.35
trillion dollars (2025, from `GDP.pdf`) gives about 1.41 kWh per dollar. This is below the
register's 1.55 to 1.64 kWh per dollar, and it moves lower for two compounding reasons: the
numerator is smaller (TES 600.31 EJ versus primary-energy 620 EJ) and the denominator is larger
(118.35 trillion dollars for 2025 versus about 110.5 trillion dollars for 2024).

Reconciliation result: PARTIAL MATCH ONLY, flagged. The register's 620 EJ (2023) primary-energy
figure is NOT present in this on-disk edition; the on-disk headline is 600.31 EJ (2025) Total
Energy Supply. The review's keystone should either (a) be restated to about 1.41 kWh per dollar
using consistent 2025 on-disk figures on a Total-Energy-Supply basis, or (b) retain the 1.55 to
1.64 kWh per dollar figure but relabel it explicitly as computed from the earlier primary-energy
edition (620 EJ, 2023) and an earlier GDP vintage, which are no longer the files on disk. Either
way the order of magnitude (roughly 1.4 to 1.6 kWh per dollar of world output) is unchanged and
the keystone's qualitative role holds; only the precise coefficient shifts with edition and
metric.

### Limitations

Total Energy Supply covers commercially-traded fuels and modern renewables; traditional biomass
and non-commercial energy are outside the series, so TES understates all-in human energy use.
Non-fossil generation is converted to a heat-input or gross-electrical-output basis rather than a
fossil-substitution basis, which makes this edition's totals not directly comparable to the older
primary-energy-consumption series used in earlier editions and in the register's original
keystone. Annual revisions are routine (page 84), so historical years shift slightly edition to
edition. The exajoule-to-terawatt-hour conversion is a physical energy-content equivalence and
does not imply that all TES is delivered as electricity.

### Topic mapping

Keystone numerator. Serves the review's global energy-intensity ratio (kWh of primary energy per
dollar of world GDP) as the numerator, paired with the World Bank WDI GDP table (`GDP.md`) as the
denominator. Flagged for the arithmetic note: the on-disk numerator is 600.31 EJ (2025 Total
Energy Supply), which supersedes the register's earlier 620 EJ (2023 primary energy); the metric
and edition differ, and the recomputed keystone from consistent 2025 on-disk figures is about
1.41 kWh per dollar rather than 1.55 to 1.64 kWh per dollar.
