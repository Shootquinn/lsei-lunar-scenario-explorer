# BEA Depreciation Estimates (Rates of Depreciation, Service Lives, Declining-Balance Rates, and Hulten-Wykoff Categories)

## Citation

U.S. Bureau of Economic Analysis. *BEA Depreciation Estimates* (methodology note plus the
table "BEA Rates of Depreciation, Service Lives, Declining-Balance Rates, and Hulten-Wykoff
Categories"). Washington, DC: U.S. Department of Commerce, Bureau of Economic Analysis. The
depreciation patterns are primarily derived by Barbara M. Fraumeni from estimates made by
Charles Hulten and Frank Wykoff under the auspices of the U.S. Department of the Treasury.

Primary underlying sources named in the note: Barbara M. Fraumeni, "The Measurement of
Depreciation in the U.S. National Income and Product Accounts," *Survey of Current Business*
77 (July 1997): 7 to 23; and U.S. Department of Commerce, Bureau of Economic Analysis,
*Fixed Assets and Consumer Durable Goods in the United States, 1925 to 97* (Washington, DC:
U.S. Government Printing Office, September 2003): M-29 to M-33. The Hulten-Wykoff methodology
is taken from Hulten and Wykoff (1981a, 1981b) and Wykoff and Hulten (1979).

No DOI. Publisher URL: https://apps.bea.gov/national/pdf/BEA_depreciation_rates.pdf

On disk: `BEA_depreciation_rates.pdf` at the workspace root (14 pages; pages 1 to 7 methodology,
pages 8 to 14 the asset-by-asset table). Every rate quoted below was extracted from the on-disk
PDF via pdfplumber, page by page, and the machinery cluster central to this review's use was
cross-checked against the values recorded in the gap register.

## Abstract

The reference table BEA uses to depreciate the U.S. capital stock. It lists, for each type of
fixed asset, the geometric annual rate of depreciation, the assumed service life in years, the
declining-balance rate, and the Hulten-Wykoff evidence category (A, B, or C). BEA depreciates
most assets geometrically because resale-price evidence on used assets suggests geometric
profiles approximate actual price declines better than straight-line profiles. The geometric
rate for a given asset equals its declining-balance rate divided by its service life. This is
the canonical, government-published, empirically-grounded schedule of how fast physical capital
loses value with age in the terrestrial economy, and it is used in this review as the sourced
terrestrial floor beneath the lunar capital depreciation rate (delta_lunar).

## Summary

### Background and objective

BEA maintains net capital stocks by the perpetual inventory method: each vintage of each asset
type carries a "depreciation profile" describing how the asset's price falls as it ages, in the
absence of inflation (page 1). For most asset types BEA uses geometric depreciation, because
empirical evidence on used-asset resale prices suggests geometric patterns approximate actual
price declines more closely than straight-line patterns (page 1). The exceptions are missiles
and nuclear fuel rods, which use a straight-line pattern with a Winfrey retirement distribution
(pages 1 and 3, footnotes 33 and 7). The purpose of the table is to give one depreciation rate,
service life, and declining-balance rate per asset type at the level of detail for which annual
NIPA data are available, with some assets differentiated by industry (page 3).

### Methods and scope

The geometric rate for several asset types is computed as the declining-balance rate divided by
the assumed service life (page 1). The declining-balance rates for structures and equipment are
primarily derived by Fraumeni from Hulten-Wykoff Treasury-sponsored estimates (page 1). Assets
are sorted into three Hulten-Wykoff evidence categories, defined in the table's footnote 1
(page 14):

- Type A: assets for which Hulten and Wykoff specifically estimated age-price profiles from
  extensive used-asset data (tractors, construction machinery, metalworking machinery, general
  industrial equipment, trucks, commercial buildings, manufacturing buildings). In 1977 these
  accounted for about 55 percent of equipment investment and 42 percent of nonresidential
  structures spending (page 1).
- Type B: assets for which the direct studies did not support a defensible declining-balance
  estimate, so Hulten and Wykoff used others' research (BEA, Jorgenson, BLS, Jack Faucett
  Associates) plus their own judgement (page 1).
- Type C: assets for which no data were available. For these, Hulten and Wykoff estimated an
  average declining-balance rate from the type A and type B evidence. They determined the average
  declining-balance rate to be 1.65 for equipment and 0.91 for private nonresidential structures
  (page 2); these two default rates then serve as the fallback for any asset lacking data.

Service lives come mainly from Treasury Office of Industrial Economics (1970s) and Office of Tax
Analysis (1980s and 1990s) industry studies, with named exceptions such as computers, which use
Oliner's used-asset profiles rather than a declining-balance rate divided by a life (pages 3 and
14, footnote 2). Intellectual property products (software, R&D, entertainment/literary/artistic
originals) are depreciated by different methods that estimate the geometric rate directly from
the decline in an asset's contribution to profits or royalties, so their service lives and
declining-balance rates are left blank in the table (pages 4 to 5, and footnotes 24 and 25).

### Key findings

Structure of the geometric rate. Rate of depreciation equals declining-balance rate divided by
service life. The two type C defaults anchor the whole schedule: equipment 1.65, structures 0.91
(page 2). For example, equipment with a 1.65 declining-balance rate and an 11-year life
depreciates at 1.65 divided by 11, which equals 0.1500 per year.

Industrial machinery cluster (the classes a lunar mining, ISRU, and manufacturing base is built
from). These are the values this review relies on, and each was confirmed on disk:

- Mining and oil field machinery: 0.1500 per year (life 11, declining balance 1.65, category C;
  page 10).
- Construction machinery, except tractors (private): 0.1550 per year (life 10, declining balance
  1.55, category A; page 10). Construction tractors: 0.1633 per year (life 8; page 10).
  Construction machinery and equipment (state and local government block): 0.1650 per year (life
  10; page 13). Construction machinery therefore spans 0.1550 to 0.1650 per year across the
  private and government blocks.
- General purpose machinery and equipment (state and local block): 0.1500 per year (life 11;
  page 13). The related private "general industrial, including materials handling equipment" runs
  0.1072 per year for nonmanufacturing up to 0.1225 per year in several manufacturing industries
  (page 9).
- Special industry machinery and equipment (state and local block): 0.1500 per year (life 11;
  page 13). Private "special industry machinery, nec" is 0.1031 per year for nonmanufacturing
  (page 9).
- Metalworking machinery and equipment (state and local block): 0.1031 per year (life 16; page
  13). Private metalworking machinery, nonmanufacturing, is 0.1225 per year (life 16; page 8),
  rising to 0.1633 per year for wood products manufacturing (page 8).
- Service industry machinery: wholesale and retail trade 0.1650 per year, other industries
  0.1500 per year (page 10).

Electronics and computing (higher end of the range).

- Special industry machinery / computer and electronic products: 0.1179 per year (page 9).
- Electromedical equipment: 0.1834 per year (page 8). Miscellaneous electrical equipment: 0.1834
  per year (page 10). Electronic components and accessories (state and local): 0.1833 per year
  (page 13). Computer and electronic manufacturing equipment thus runs roughly 0.1179 to 0.1834
  per year across categories.
- Research and development capital, semiconductor and other electronic component manufacturing:
  0.2500 per year (page 11).
- Research and development capital, computers and peripheral equipment manufacturing, and other
  computer and electronic product manufacturing, nec: 0.4000 per year each (page 11).
- Software (private and government): prepackaged 0.5500 per year (3-year life); custom and
  own-account 0.3300 per year (5-year life) (pages 11 and 13). These are the fastest-depreciating
  assets in the table.

For orientation, other R&D depreciation rates on page 11 include pharmaceutical and medicine
manufacturing 0.1000, chemical manufacturing excluding pharma 0.1600, communications equipment
manufacturing 0.2700, navigational/measuring/electromedical/control instrument manufacturing
0.2900, motor vehicles manufacturing 0.3100, aerospace products and parts manufacturing 0.2200,
and scientific research and development services 0.1600.

Slow-depreciating anchors for contrast. Long-lived structures depreciate very slowly:
manufacturing buildings 0.0314 per year (31-year life; page 10), office buildings 0.0247 per
year (36-year life; page 10), electric light and power structures 0.0211 per year for 1946 and
later (45-year life; page 10). Heavy long-lived equipment is also slow: steam engines and
turbines 0.0516 per year (32-year life; page 8), ships and boats 0.0611 per year (27-year life;
page 10), railroad equipment 0.0589 per year (28-year life; page 10). These confirm that the
0.10 to 0.165 per year industrial-machinery cluster sits well above the structural floor and
well below the electronics and software ceiling.

### Reconciliation against the gap register (delta_lunar)

The gap register (Section 7.4, delta_lunar) carries the following geometric annual rates as the
terrestrial anchor for delta_lunar. Each matches the on-disk PDF exactly:

| Asset class (register) | Register value | On-disk PDF value | Page |
| - | - | - | - |
| Mining and oil field machinery | 0.1500 | 0.1500 | 10 |
| Construction machinery and equipment | 0.1550 to 0.1650 | 0.1550 (private) to 0.1650 (state and local) | 10, 13 |
| General purpose machinery and equipment | 0.1500 | 0.1500 | 13 |
| Special industry machinery and equipment | 0.1500 | 0.1500 | 13 |
| Metalworking machinery and equipment | 0.1031 | 0.1031 | 13 |
| Computer and electronic products / electronic equipment | 0.1179 to 0.1834 | 0.1179 to 0.1834 | 8, 9, 13 |
| Semiconductor and other electronic component mfg equipment | 0.2500 | 0.2500 | 11 |
| Computers and peripheral equipment mfg (up to) | 0.4000 | 0.4000 | 11 |

Reconciliation result: EXACT MATCH on every figure. Terrestrial industrial machinery clusters
at 0.10 to 0.165 per year, and the closest analogs to a lunar industrial base (mining,
construction, general-purpose and special-industry machinery) sit at 0.15 to 0.165 per year,
with electronics and computing higher still (0.1179 up to 0.4000 per year). This is the sourced
terrestrial floor used to anchor the review's delta_lunar estimate. The review carries
delta_lunar at greater than or equal to 10 percent per year, floored on this BEA terrestrial
machinery depreciation of 0.10 to 0.165 per year and argued higher for the lunar environment
(abrasive regolith dust, thermal cycling of roughly plus or minus 150 C per lunation, radiation,
hard vacuum, and no maintenance or repair crew). Because these are benign-Earth resale-market
rates for machinery that is serviced and housed, a delta_lunar of at least 10 percent per year is
conservative even before the lunar-specific accelerators, so the floor cuts toward the review's
own conclusion: a higher delta_lunar widens the FA6 gross-to-net gap.

### Limitations

The rates are geometric approximations to entire cohorts of assets, not single machines; when
assets within a cohort have different service lives, the cohort profile is more convex
(accelerated) than any single asset's (page 1, footnote 2). Service lives are held constant over
time for most asset-industry combinations because of data limits (page 2). The declining-balance
rates trace to Hulten-Wykoff studies conducted around 1979 to 1981, updated in specific places
(computers, software, R&D, wind and solar, highways, aircraft lives) but not comprehensively
re-estimated for every category. Most importantly for this review, every figure describes
terrestrial assets in resale markets on Earth, with maintenance, repair, and benign operating
environments assumed; none of these rates was measured under lunar conditions, so they function
strictly as a lower bound and analog, not as a lunar depreciation estimate in themselves.

### Topic mapping

FA6 (gross-to-net capital productivity), via the 7.4 and 7.5 units tables. Source for the
delta_lunar hardening recorded in the gap register, Section 7.4. This source
upgrades delta_lunar from a bare unsourced estimate (greater than or equal to 10 percent per
year) to a terrestrial-floored estimate: "delta_lunar greater than or equal to 10 percent per
year, floored on BEA terrestrial machinery depreciation of 0.10 to 0.165 per year and argued
higher for the lunar environment." The direction of the adjustment is unchanged from the note's
prior draft; the floor is now sourced to a canonical U.S. government dataset rather than asserted.
