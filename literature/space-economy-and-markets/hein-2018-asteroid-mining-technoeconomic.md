# A Techno-Economic Analysis of Asteroid Mining

## Citation

Hein, A. M., Matheson, R., & Fries, D. (2018). A techno-economic analysis of asteroid mining.
Initiative for Interstellar Studies. https://arxiv.org/abs/1810.03836

Publisher URL: none identified beyond the arXiv listing; the corresponding author's affiliation
is the Initiative for Interstellar Studies (Bone Mill, Charfield, United Kingdom).

Version note: this is an arXiv preprint (arXiv:1810.03836, submitted 2018). The extracted text
carries no journal name, volume, issue, or DOI, and no statement that the paper was subsequently
published in a peer-reviewed venue; it is treated here as preprint-only.

## Abstract

Techno-economic model of asteroid mining profitability, built up from a single-mission profit
equation to a multi-mission, learning-curve, and net-present-value formulation, then applied to
in-space water mining and Earth-return platinum mining, with a supply-demand model estimating how
added platinum supply from asteroids depresses the terrestrial platinum price.

## Summary

### Background and objective

The paper opens by framing asteroid resources in two categories: metals (particularly
platinum-group metals, valuable enough to justify return to Earth) and volatiles such as water
(valuable mainly for use in space, due to the high cost of Earth return for low value-to-mass
material). It notes rare earth and platinum-group metals are inputs to fuel cells, catalyzers,
batteries, and solar cells, and reviews prior asteroid mining economics literature, including
Sonter's net-present-value (NPV) cost framework, the Mass Payback Ratio figure of merit, and
Craig et al.'s year-by-year cash flow study of the M-type asteroid 1986 DA, which concluded a
mining venture would currently be too risky to succeed commercially. The authors identify four
shortcomings in Sonter's model that they set out to address: it considers only a single mining
mission, omits the cost of returning material to the Earth's surface, does not consider
development cost, and is limited to impulsive orbital transfers. The stated objective is to
build a techno-economic model that identifies key criteria for economic viability, compares
asteroid mining to the alternatives of terrestrial mining and delivering resources from Earth to
space, and analyzes supply-demand effects, including price elasticity and substitution, that
would follow from injecting asteroid-mined platinum into the terrestrial market.

### Methods and scope

The authors build a profit equation from first principles (revenue from material sold minus
production, transportation, and operations cost for a single mission, page 2), then extend it
successively: spacecraft reuse, multiple spacecraft per mission, a learning-curve (experience
curve) reduction in per-unit production cost with an assumed aerospace learning exponent
corresponding to an 85 percent learning rate, and finally the time value of money via NPV
discounting (pages 2 through 4). The resulting model treats spacecraft dry mass, throughput rate
(kilograms of material processed per second per kilogram of spacecraft mass), mining duration,
the fraction of processed material recovered as usable resource, mass-specific production cost,
transportation cost, operations cost, and mass-specific development cost as its core parameters.
Development cost is financed as a loan carrying 10 percent annual interest, with only interest
(not principal) paid down.

Separately, section 3.3 develops a supply-demand model for platinum only (page 5). It assumes a
linear terrestrial demand curve for platinum, anchored to a single empirical point, a five-year
average global platinum price of 40,449 dollars per kilogram against five-year average global
demand of 254,582 kilograms, sourced from World Bank commodity data and World Platinum Investment
Council supply-and-demand tables. Two model parameters, called levers by the authors, govern the
outcome: the demand-curve slope, constrained to correspond to a price elasticity of demand between
0.5 and 0.6 in magnitude (consistent with platinum's known inelastic demand, 0 less than PED less
than 1), and a substitution parameter (labeled b), representing the kilograms by which
Earth-based platinum production falls for every kilogram the asteroid miner adds to the global
market. The model assumes a single asteroid-mining firm (not multiple competing firms), assumes
Earth-based producers believe the asteroid miner will remain in the market long term, and treats
the demand curve itself as fixed rather than shifting over time. The asteroid miner is modeled as
choosing the number of missions per year to maximize annual profit given this demand curve, with
development cost financed at the 10 percent loan rate described above.

The model is applied to two products: water mined and used in space, and platinum mined and
returned to Earth. For each, conservative and optimistic cost scenarios are defined (Tables 1 and
2, pages 6 and 7), drawing conservative figures from the Space Mission Analysis and Design (SMAD)
handbook and from Calla et al.'s small-spacecraft asteroid mining cost estimates, and optimistic
figures from mass-production cost levels similar to those reported for OneWeb constellation
spacecraft. A propellant-less propulsion system (solar or electric sail) is assumed throughout,
so no propellant mass ratio correction is applied. A sample small-spacecraft mining architecture
using 26-unit CubeSats, laser regolith heating, and electric-sail transport is presented as an
illustrative concept (Figure 7, page 9), without independent cost analysis of that architecture
beyond the parameters already used in the tables.

### Key findings

**Breakeven and profitability, water versus platinum (Tables 1 and 2, pages 6 to 7).** For water,
using a 150 kilogram spacecraft, 100-day mining duration, a 5 percent extracted-resource fraction
(described as conservative for C-type asteroids), and a throughput rate of 2.3 times 10 to the
negative 4 kilograms per second per kilogram of spacecraft mass, the conservative cost scenario
(1,000,000 dollars per kilogram specific production cost, 35,000 dollars per kilogram
transportation, 5,453,333 dollars per kilogram development cost, water priced at 20,000 dollars
per kilogram) yields a profit of 139 million dollars and breakeven in 5.9 years. The optimistic
scenario (10,000 dollars per kilogram production cost, 500,000 dollars per kilogram development
cost, same price and throughput) yields 293 million dollars profit and 0.26 years to breakeven.
For platinum, using the same spacecraft mass and duration but a lower extracted-resource ratio
(10 to the negative 5, reflecting platinum's much lower concentration in asteroid material) and a
throughput rate of 0.35 kilograms per second per kilogram of spacecraft mass, roughly two orders
of magnitude higher than the water case, the conservative scenario (platinum priced at 70,000
dollars per kilogram) yields 149 million dollars profit and 5.5 years to breakeven, while the
optimistic scenario yields 303 million dollars profit and 0.25 years to breakeven. The paper notes
the platinum throughput requirement (0.35 kilograms per second per kilogram of spacecraft mass)
"seems very high," equivalent to processing the spacecraft's own mass every three seconds, and
that platinum mining additionally carries the cost of returning material to Earth, modeled by
doubling the launch-cost term to approximate aerobraking and re-entry mass.

**Sensitivity to platinum price (Figures 5 and 6, page 8).** Because platinum prices fluctuate,
the authors rerun the platinum cases at 30,000 dollars per kilogram instead of 70,000. In the
conservative scenario at this lower price, only the case using 10 small spacecraft per mission
reaches breakeven within 10 years; other configurations do not. In the optimistic scenario, most
configurations still reach breakeven in the first year, except the case with throughput rate
reduced by 50 percent. The text concludes from this that "long-term prices of platinum would have
a significant impact on asteroid platinum mining viability."

**Technical drivers of profitability (page 9, Discussion pages 10 to 11).** Across both products,
throughput rate is identified as the parameter with the largest effect on economic viability,
followed by the number of spacecraft used per mission (which reduces per-unit development cost
through the learning curve). The learning-curve effect itself is found to have only a minor
effect on profitability at the modeled learning rate. Reusing spacecraft speeds breakeven, but
for the optimistic cost scenario, expendable spacecraft launched in a tighter sequence (not
constrained by the round-trip time reuse requires) can outperform reuse. Volatile mining is found
to require substantially lower throughput rates than platinum mining because of the higher
fraction of volatiles present in C-type asteroid material, which the authors describe as an
additional argument (beyond volatiles' lower boiling point) for why volatile mining is easier.

**Supply-demand results for platinum (Table 3, pages 9 to 10).** The authors tabulate annual
profit and years to breakeven across a grid of substitution values (b, framed as the decrease in
Earth-based platinum production per kilogram increase in asteroid-supplied platinum, ranging from
1 down to 0) and corresponding elasticity values (ranging from about 0.08 up to about 0.95 in
magnitude). The table shows only a slim range of b and elasticity combinations yield a profitable
venture at all, and an even slimmer range yields breakeven in under 30 years. At the corner case
b equal to 1 (full substitution, meaning each kilogram of asteroid platinum entirely displaces a
kilogram of terrestrial production, holding total market supply and price constant), the miner is
profitable and breaks even in one year regardless of elasticity, but the authors call this "an
unlikely corner solution." They judge it more likely that b falls in the region of 0.6 or 0.4
(not above roughly 0.9), and that the elasticity magnitude is not below about 0.25; at these more
realistic values, breakeven in the table stretches to many years or profit turns negative. The
text concludes that "a platinum asteroid miner would only be profitable in a relatively small and
unlikely set of conditions for the global platinum market," which the authors say "draws into
question whether a platinum asteroid miner would be able to survive the volatility that can occur
in the global platinum market" (page 10).

**Explicit price-collapse and elasticity modeling, and its scope.** The paper does model the
price effect of adding new supply, but only for platinum returned to Earth, not for water or
other in-space products. Section 3.3 (page 5) builds a linear market demand curve in which added
asteroid-mined supply lowers the market price of platinum, subject to the elasticity and
substitution parameters described above; Table 3 (pages 9 to 10) reports how that price
suppression narrows profitability to a small parameter region. For water, by contrast, the model
in Table 1 treats the price of water in space (20,000 dollars per kilogram in both scenarios) as
a fixed input with no demand curve, elasticity, or market-size ceiling; the paper does not model
how the asteroid miner's own water supply would affect that price, nor does it state an
addressable market volume for in-space water or propellant. The only quantified addressable
market figure in the paper is the terrestrial platinum reference point of 254,582 kilograms per
year at 40,449 dollars per kilogram (page 5), used solely to anchor the platinum demand curve.

**Non-market factors affecting platinum price (page 10).** Beyond its own supply-demand model,
the discussion lists several factors external to the model that could move platinum's price
independent of the asteroid miner's output: platinum's role as a speculative asset sensitive to
expected U.S. interest rate changes; currency effects, illustrated by South African producers
(53 percent of 2013 to 2017 global platinum supply) maintaining or increasing output despite low
prices because a weak Rand supports their margins; and demand-side shocks such as the Volkswagen
diesel emissions scandal reducing demand for platinum used in diesel catalytic converters (39
percent of 2013 to 2017 global platinum demand). The paper also notes platinum recycling was not
included in the analysis, and that a feedback loop in which stable asteroid-mining supply could
encourage new platinum-consuming industries (for example substituting platinum for palladium in
catalytic converters) was considered but judged likely to be dominated by other trends, such as
electric vehicles displacing the traditional automotive share (41 percent of 2013 to 2017 global
platinum demand) of platinum demand.

**Headline conclusions (Conclusions, page 11).** The authors state that from a profitability
perspective, throughput rate and the use of smaller, multiple spacecraft per mission are the key
technical parameters for reaching breakeven quickly, and that development of efficient mining and
refining processes plus mass-produced small spacecraft are key to viability. Platinum mining is
singled out as requiring very high throughput rates that "could be difficult to achieve." For any
Earth-return product, they state the reaction of the Earth-based market is critical to economic
viability. They conclude, consistent with prior studies they cite, that mining volatiles for
supply to cislunar orbit "seems to be economically viable without the development of mining and
refining processes with very high throughput rates," whereas platinum return is only viable under
a narrow, specific combination of assumptions: "For realistic price elasticity values, the mining
venture would only be economically feasible when the quantity of platinum from space would
substitute an equal quantity of terrestrial platinum," that is, close to the b equal to 1 corner
case the authors elsewhere call unlikely.

### Limitations

The paper's own stated limitations are narrow: it notes platinum recycling was not modeled, and
that the demand curve is assumed fixed rather than shifting over time (page 5), with only a
qualitative discussion of why a rightward demand shift is considered unlikely on relevant
timescales. Beyond what the authors state, several scope boundaries are evident from the model
itself. The supply-demand and price-elasticity analysis is built and reported only for platinum;
no equivalent price-response or market-size treatment is presented for water or other in-space
volatiles, so the paper offers no quantified view of how in-space demand or price would respond
to added supply of those products. The single empirical anchor point for the platinum demand
curve (five-year averages of price and global demand from two sources) is treated as fixed
throughout the sensitivity table, and the elasticity and substitution ranges explored, while
described as realistic by the authors, remain assumptions rather than measured or fitted values.
The model assumes a single asteroid-mining firm rather than a competitive multi-firm market, and
assumes Earth-based producers do not change behavior unless they believe the asteroid miner will
persist long term. Development cost, operations cost, and transportation cost figures are drawn
from a mix of a spacecraft-design handbook, one prior small-spacecraft cost study, and
constellation mass-production analogs, rather than from asteroid-mining-specific cost data, since
none exists. The paper does not model insurance, launch failure risk, regulatory or property-rights
cost, or the multi-year lag between investment and first revenue in its NPV treatment beyond the
interest-bearing loan mechanism described. No funding source or conflict-of-interest statement was
found in the extracted text.

### Topic mapping

FA7. FA8. Source list entry: demand-skeptic (gap 3). Sub-Q 1, 4. For FA7's demand and
value-capture question, this paper is the most detailed publicly available profitability model
tying asteroid-mining technical parameters (throughput rate, spacecraft mass, development cost,
reuse, learning curve) to breakeven and NPV outcomes, and it is one of the few sources in this
literature that explicitly models the price effect of adding new supply to a terrestrial market,
via a linear demand curve, an elasticity parameter, and a substitution parameter for platinum
(page 5), concluding that platinum return to Earth is profitable only across a narrow and, in the
authors' own assessment, unlikely combination of those parameters (Table 3, pages 9 to 10), while
water and other in-space volatiles are treated with a fixed assumed price and no demand-side or
market-size ceiling at all. This asymmetry, an explicit but narrow price-collapse model for the
terrestrial commodity-export case and no price-response model at all for the in-space-use case,
is directly relevant to FA7's question of whether demand is a durable external sink or an
assumption that collapses under its own supply. The source also cross-lists to FA8 because its
background section frames platinum-group and rare earth metals as strategic inputs to
green-technology supply chains (fuel cells, catalyzers, batteries, solar cells) and because its
substitution parameter (b) directly quantifies how asteroid-sourced platinum would displace
terrestrial supply chain production, a mechanism relevant to any supply-chain-oriented treatment
of critical mineral sourcing.
