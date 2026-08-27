# World Bank World Development Indicators: Gross Domestic Product (current US dollars), ranking table

## Citation

World Bank. *Gross Domestic Product 2025* (ranking table of economies by GDP in current US
dollars). World Development Indicators database, World Bank, dated 15 July 2026. Data source:
http://data.worldbank.org/data-catalog/world-development-indicators. Projections source:
http://data.worldbank.org/data-catalog/global-economic-prospects.

No DOI. On disk: `GDP.pdf` at the workspace root (4 pages: a 204-economy ranking plus regional
and income-group aggregates and a World total). Every figure below was extracted from the on-disk
PDF via pdfplumber and the World total, United States, China, and income-group aggregates were
re-verified by rendering pages 1 and 4 to PNG at 200 dpi and reading them by vision, because the
raw text extraction split the leading digit of many figures with a stray space.

## Abstract

The World Bank's standard cross-country GDP ranking table, giving nominal (current US dollar)
gross domestic product for 204 ranked economies plus regional and income-group aggregates and a
single World total. This is the keystone denominator of the review's global energy-intensity
ratio: world nominal GDP is the dollar figure that world primary energy is divided by to obtain
kWh per dollar. The on-disk edition is the "Gross domestic product 2025" table, dated 15 July
2026, and reports a World total of 118,350,166 million US dollars, that is about 118.35 trillion
dollars.

## Summary

### Background and objective

The table is one page of the World Bank's World Development Indicators (WDI) database output: a
simple ranked list of economies by GDP measured in current (nominal) US dollars, headed "Gross
domestic product 2025" and footed "World Development Indicators database, World Bank, 15 July
2026" on every page. Its purpose in this review is narrow and load-bearing: it supplies the
denominator (world nominal GDP) for the global energy-intensity keystone. The numerator (world
primary energy) comes from the Energy Institute Statistical Review of World Energy; the two are
divided to express how many kilowatt-hours of primary energy underpin each dollar of world
output.

### Methods and scope

GDP is expressed in millions of current US dollars. The table lists 217 economies in total but
ranks only the 204 with confirmed GDP estimates for at least one of the last three years; figures
shown in italics are for 2024 or 2023 rather than 2025 (note on page 4). Thirteen economies are
listed as "not available" (a dash), including Cuba, Eritrea, Guam, North Korea, South Sudan,
Syria, Yemen, and several small territories (page 4). Country footnotes qualify a few figures:
Russia and Ukraine (footnote a, based on official Ukrainian and Russian statistics plus UN data),
Morocco (footnote b, includes Western Sahara), Tanzania (footnote c, mainland only), Cyprus
(footnote d, government-controlled area only), Georgia (footnote e, excludes Abkhazia and South
Ossetia), and Moldova (footnote f, excludes Transnistria). The World total and the regional and
income-group aggregates appear at the bottom of page 4.

### Key findings

World total (the keystone denominator). World GDP 2025 equals 118,350,166 million US dollars,
that is 118.350 trillion dollars nominal (page 4, "World" row, verified by vision).

Largest economies (page 1, all in millions of current US dollars, verified by vision for the top
two):

- United States: 30,769,700 (that is 30.77 trillion dollars), rank 1.
- China: 19,498,039 (19.50 trillion), rank 2.
- Germany: 5,050,923 (5.05 trillion), rank 3.
- Japan: 4,435,163 (4.44 trillion), rank 4.
- United Kingdom: 4,002,588 (4.00 trillion), rank 5.
- India: 3,956,067 (3.96 trillion), rank 6.
- France: 3,366,316; Russian Federation: 2,561,310 (footnote a); Italy: 2,551,557; Canada:
  2,319,900 round out the top 10.

Regional and income-group aggregates (page 4, millions of current US dollars, verified by vision):

- East Asia and Pacific: 33,656,981.
- Europe and Central Asia: 32,268,612.
- North America: 33,099,237.
- Latin America and Caribbean: 7,395,990.
- Middle East and North Africa: 5,135,570.
- South Asia: 4,578,022.
- Sub-Saharan Africa: 2,211,221.
- High income: 76,878,051.
- Upper middle income: 33,529,654.
- Lower middle income: 7,308,505.
- Low income: 642,666.

The United States alone is about 26 percent of world GDP (30.77 divided by 118.35), and the
United States and China together are about 43 percent.

### Reconciliation against the gap register and the review's keystone

The register and the review's keystone assumed world GDP of about 110 to 111 trillion dollars
nominal for 2024. The on-disk file is a NEWER edition than that assumption: it is the WDI "Gross
domestic product 2025" table, released 15 July 2026, and it reports a World total of
118,350,166 million dollars, that is 118.35 trillion dollars, for 2025. So the on-disk value does
not equal the register's ~110 to 111 trillion 2024 figure; it is about 7 to 8 trillion dollars
higher because it is a later reference year (2025 rather than 2024) drawn from a later database
vintage. Both are internally correct for their respective years; the discrepancy is a
year-and-edition difference, not an error. For any keystone computed strictly from on-disk
sources, the denominator to use is 118.35 trillion dollars (2025). See `Statistical Review of
World Energy.md` for the matching numerator and the recomputed keystone (about 1.41 kWh per
dollar using the 2025 on-disk figures, versus the register's 1.55 to 1.64 kWh per dollar computed
from the earlier 620 EJ and ~110.5 trillion dollars inputs).

### Limitations

Nominal, current-US-dollar GDP is sensitive to exchange-rate movements and does not adjust for
purchasing-power differences, so cross-country comparisons here reflect market exchange rates.
The ranking mixes reference years: most figures are 2025, but italicized figures (for example
United Arab Emirates, Morocco, Ukraine) are 2024 or 2023, so the World total blends a small
number of off-year observations. Several economies are absent for lack of data, which slightly
understates the true world total. The table is a database extract with no methodological narrative
beyond the WDI documentation it points to.

### Topic mapping

Keystone denominator. Serves the review's global energy-intensity ratio (kWh of primary energy
per dollar of world GDP) as the denominator, paired with the Energy Institute Statistical Review
of World Energy as the numerator. Flagged for the arithmetic note: the on-disk denominator is the
2025 world total of 118.35 trillion dollars, which supersedes the register's earlier ~110 to 111
trillion dollars (2024) assumption and lowers the derived keystone accordingly.
