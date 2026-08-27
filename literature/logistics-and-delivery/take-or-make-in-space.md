# Take Material to Space or Make It There?

## Citation

Jones, H. W. (circa 2023). Take material to space or make it there? NASA Ames Research
Center, Moffett Field, CA. Systems Engineer, Bioengineering Branch (Member AIAA).

No DOI, journal name, volume, conference series number, or explicit publication year is
printed anywhere in the extracted text (title block, running header, footer, or reference
list). The author affiliation line and AIAA membership note, together with the AMCM and ICES
references, are consistent with an AIAA International Conference on Environmental Systems
(ICES) paper; the internal evidence dates the work to no earlier than 2023 (costs are stated
in "current" 2023 dollars, and several references were accessed in March 2023). Those items
are the only stable identifiers available from the source itself.

Publisher URL: none in source.

Naming note: this author is **Harry W. Jones of NASA Ames Research Center**, the systems
engineer whose life-support and launch-cost papers are the on-disk "take or make" primary. He
is a distinct person from **Karen L. Jones of The Aerospace Corporation** (Center for Space
Policy and Strategy), whose separate super-heavy-lift report supplies the matured fully
reusable Starship cost figures used elsewhere in this review. Every citation of either author
should carry the first name; a bare "Jones" is ambiguous between the two.

## Abstract

A parametric cost analysis of the "take or make" decision in space life support: whether to
transport consumables such as water and oxygen from Earth (resupply, "take") or to produce and
recycle them in space (in situ production or recycling, "make"). The paper argues that the
historical presumption favoring recycling on long missions rested on an assumption that is no
longer valid, that launch mass is an adequate substitute for cost, and that the roughly 25 to
50 fold reduction in launch cost per kilogram since the Space Shuttle era (from about $72,300
per kilogram on the Shuttle to about $1,520 per kilogram on Falcon Heavy) pushes the cost
breakeven point for "make" much farther out in time. The author develops simple cost equations
for taking versus making material, estimates hardware development cost with NASA's Advanced
Missions Cost Model (AMCM), and applies the framework to International Space Station (ISS)
water and oxygen recycling and to a future Moon base. The stated conclusion is that at current
launch costs, taking water to ISS is about as cheap as recycling it, recycling oxygen still
saves cost, and for a Moon mission "take" is generally best unless the mission establishes a
permanent base or runs for many years.

## Summary

### Background and objective

The paper frames life support as a choice between three strategies: taking materials into
space (resupply), and making them there by recycling or in situ resource production. Recycling
has traditionally been advocated for longer missions because of the launch mass it saves:
resupply requires launching a fixed mass per crewmember per day, and a recycling system pays
for itself once the accumulated resupply mass it displaces exceeds the mass of the recycling
system plus its spares and logistics. The date at which cumulative resupply mass first exceeds
recycling-system mass is the "mass breakeven date," typically months to years, and this
mass-breakeven reasoning has historically justified developing recycling systems. Brief
missions from Mercury in the 1960s through the Space Shuttle in the 2010s all used resupply;
ISS, operating since 2000, uses extensive recycling.

The author's central argument is that the mass-breakeven logic depends on a now-invalid
assumption, that launch mass can stand in for dollar cost. That substitution holds only when
launch cost dominates both options. It does for filled resupply tanks, whose development cost
is small, but not for complex recycling equipment, whose development cost is large. The paper
notes that even at high Shuttle launch costs, the cost of developing ISS recycling equipment
exceeded the cost of launching it, so a cost breakeven date (comparing recycling development
cost against resupply launch cost) would already have sat farther out than the mass breakeven
date. The roughly 40 fold fall in launch cost since the Shuttle pushes the cost breakeven date
farther still, to the point that resupply launch cost is now so low that the development cost
of resupply hardware (the tanks themselves) can no longer be ignored either. The stated
objective is to build parametric "take" and "make" cost models, populate them with AMCM-based
hardware development costs and current launch prices, and re-examine the take or make decision
for ISS water and oxygen and for a future Moon base.

### Methods and scope

The paper builds two parametric cost equations in mission time t (years), for a material
needed at rate m kilograms per year over mission duration D years.

**Cost to Take** equals the material mass times the sum of container cost per kilogram plus
(1 plus container mass fraction) times transportation cost per kilogram. The container mass
fraction is typically 0.1 to 0.2 for water or gas tanks.

**Cost to Make** equals a fixed initial term (production system cost plus system mass times
transportation cost) plus a time-dependent term (yearly operations cost plus yearly supplies
mass times transportation cost, accumulated over t). Operations cost is taken as roughly ten
percent of system cost per year.

Setting the two equal (and simplifying by dropping the smaller transportation terms) yields a
**Make Breakeven Time** equal to system cost divided by the rate at which making saves money,
which is the container-plus-transport cost rate minus the operations cost rate. "Take" is
preferred when the make breakeven time exceeds mission duration D. When transportation cost is
very large, as on the Shuttle, it dominates the cost to take and produces short breakeven
times (months), favoring make; when transportation cost is small, breakeven times lengthen and
container cost and operations cost become the deciding terms.

Hardware development costs are estimated with the **Advanced Missions Cost Model (AMCM)**, a
single cost-estimating relationship calibrated on 260 government aerospace systems (ships,
aircraft, missiles, planetary and crewed spacecraft) that scales total DDT and E plus
production cost by quantity, system dry mass, mission-type specification factor (2.13 for a
human habitat, 2.39 for a planetary base, 2.46 for a crewed planetary lander), year of initial
operating capability, hardware design generation (block), and difficulty. Costs computed in
1999 dollars are inflated to 2023 using a 1.82 factor. Operations cost is cross-checked against
Shuttle (13.8 percent of development cost per year), ISS (10.4 percent), and the JSC Mission
Operations Cost Model (10.9 percent), and rounded to about 10 percent per year. The take or
make framework is then applied to ISS water and oxygen and to a Moon base, using ISS hardware
mass and production-rate data and crewmember consumption requirements.

### Key findings

**Launch cost levels (Section IV, all figures list-price based).** The paper's transportation
costs are derived from published sticker prices, not from any internal or marginal cost
accounting, a distinction that matters for reconciliation with other sources in this review.
The Space Shuttle carried 27,500 kilograms to LEO (and only 2,270 kilograms to geosynchronous
orbit via the Inertial Upper Stage). Its real incremental cost per launch is given as $1.44
billion in 2010 dollars, equal to $1.99 billion in 2023 dollars, so **$1.99 billion divided by
27,500 kilograms equals about $72,300 per kilogram to LEO** in current dollars. **Falcon 9 is
quoted at $67 million for 22,800 kilograms to LEO, or about $2,940 per kilogram.** **Falcon
Heavy is quoted at $97 million for 63,800 kilograms to LEO, or about $1,520 per kilogram.** The
author states the Shuttle cost per kilogram was roughly 25 to 50 times higher than the current
Falcon rates. The paper takes the Falcon Heavy $1,520 per kilogram as its working "current"
LEO transportation cost throughout the ISS and Moon calculations.

*Reconciliation caveat on the Falcon Heavy figure.* The $1,520 per kilogram number divides a
$97 million price by 63,800 kilograms, but 63,800 kilograms is Falcon Heavy's maximum payload
in its fully expendable configuration, while $97 million is closer to a partially reusable
price; the figure therefore mixes a reusable-configuration price with an expendable-
configuration payload. A clean expendable-configuration list rate is closer to $2,350 per
kilogram. This review carries Falcon Heavy as a **$1,520 to $2,350 per kilogram list band**,
with $1,520 per kilogram understood as the optimistic (mixed-basis) end and $2,350 per
kilogram as the clean expendable-list end. All of these are list prices, not internal or
marginal costs.

**Starship, labeled marginal-only by the author (Section IV).** The paper reports Elon Musk's
repeated "$10 per kilogram" Starship figure and a companion "$2 million per launch for more
than 100 tons to orbit," which would imply about $20 per kilogram all-in. Crucially, the author
does not adopt these as prices: he writes that the $10 per kilogram figure "is only the
marginal cost for an additional flight without paying back any of the development cost," and
explains that to break even and profit, development cost must be recovered, with price falling
toward marginal cost only in a mature competitive market. A NASA primary thus independently
labels the low Starship number as marginal-only with no development payback, which is why this
review treats any $10 to $20 per kilogram (and the related $100 per kilogram) Starship figure
as an aspirational floor rather than a sourced price.

**Lunar transportation cost via a physics-based gear ratio (Section VIII.B).** The cost to
place a kilogram of payload on the lunar surface is higher than to LEO because the mass placed
in LEO must include the transfer and landing propulsion. The paper uses a **stack-to-payload
mass ratio (gear ratio, or location factor) of about 7.2 to go from LEO to lunar orbit and
land on the surface**, citing the NASA Baseline Values and Assumptions Document (BVAD,
NASA/TP-2015-218570/REV2, February 2022). Multiplying the Falcon Heavy $1,520 per kilogram LEO
rate by 7.2 gives a **lunar-surface transportation cost of about $10,800 per kilogram**. This
gear ratio is the physics-based delta-v surcharge that replaces any brute-force repeated-launch
strawman: it is the chemical-propulsion baseline, and optimized transfer architectures
(electric-propulsion kicker stages, ferryboat or cycler services amortizing a transfer stage
across many payloads, fully reusable heavy lift) would drive the effective ratio below 7.2.

**Container (tank) costs from AMCM.** A space-station water tank massing 21.2 kilograms holds
103 kilograms of water (0.21 kilograms of tank per kilogram of water). AMCM, for 100 units of
an extremely-easy second-generation habitat tank, gives $164.2 million for 100 tanks, or about
**$15,940 per kilogram of water delivered** in tank cost alone. A space-qualified oxygen tank
massing 12.7 kilograms holds 35.4 kilograms of oxygen (0.36 kilograms of tank per kilogram of
oxygen); AMCM gives $66.1 million for 100 tanks, or about **$18,670 per kilogram of oxygen**.
The author stresses that these tank costs already exceed the current Falcon launch cost, so
further launch-cost reductions barely move the take or make decision.

**ISS recycling costs from AMCM.** The ISS Water Processor Assembly (476 kilograms, 478
kilograms per year resupply, about 50 kilograms of water recycled per day, so 18,250 kilograms
per year) costs about $411 million by AMCM, and because the resupply mass roughly equals the
system mass each year the author treats system cost as also the yearly operations cost, giving
**about $22,500 per kilogram of recycled water.** The ISS Oxygen Generator System (113
kilograms, 5.9 kilograms of oxygen per day) costs about $70.1 million; at 10 percent per year
operations this is **about $3,260 per kilogram of oxygen.**

**ISS take versus make verdict.** At the Falcon Heavy launch rate, taking water costs about
$17,780 per kilogram (tank cost $15,940 plus launch of water and tank at about $1,830) versus
recycling at about $22,540 per kilogram, so **taking and recycling water cost about the same at
current launch costs** (at Shuttle rates, taking water would have cost about $103,130 per
kilogram, strongly favoring recycling). **Recycling oxygen still wins**, about $3,260 per
kilogram recycled versus about $20,740 per kilogram to take (tank $18,670 plus launch), though
by less than at Shuttle costs.

**Moon base take versus make verdict (Section VIII).** At the lunar-surface rate of $10,800 per
kilogram, cost to take is about **$28,970 per kilogram for water** and **$33,340 per kilogram
for oxygen**. With crewmember use rates of 9.68 kilograms of water and 0.84 kilograms of oxygen
per crewmember-day, the daily cost to take is about $280,400 (water) and $28,010 (oxygen) per
crewmember-day. Because recycling-system development cost dominates even at the higher lunar
transportation cost, the recycling cost per kilogram is nearly unchanged from the ISS case. The
resulting **cost breakeven dates are about 1,287 days (roughly 3.5 years) for water recycling
and about 402 days (a little over one year) for oxygen generation**. The author concludes
"take" is best for a Moon mission unless it establishes a permanent base or continues for many
years.

**General decision rules (Section IX).** For short missions (less than a few years), probably
take. For very long missions (many years or a permanent base), usually make. For intermediate
missions, make only if the duration is several times the cost breakeven date. Because
transportation cost is now low, launch mass and cost are usually no longer the deciding factor,
and hardware development and operations costs govern.

### Limitations

The launch costs are list or published sticker prices, not observed contract prices or internal
marginal costs, and the Falcon Heavy $1,520 per kilogram working figure specifically mixes a
reusable-configuration price with an expendable-configuration payload (see the reconciliation
caveat above), so it should be read as the optimistic end of a $1,520 to $2,350 per kilogram
list band rather than a single settled rate. All hardware costs come from a single
cost-estimating relationship, the AMCM, whose inputs (quantity, difficulty rating, design
generation, specification factor) are analyst judgments that materially drive the tank and
system cost outputs; the paper does not report uncertainty bands on those AMCM estimates. The
operations-cost rate is a single rounded 10 percent per year figure. The lunar gear ratio of
7.2 is a chemical-propulsion baseline drawn from one reference (BVAD) and does not reflect
optimized or reusable transfer architectures. The Starship $10 to $20 per kilogram figures are
explicitly flagged by the author as marginal-only without development payback and are not used
in any of the paper's quantitative take or make results. The analysis is a cost model only; the
author repeatedly cautions that a full systems analysis must also weigh performance,
reliability, safety, and risk, which can favor "make" (crew safety, supply-chain independence)
even where "take" is nominally cheaper.

### Topic mapping

FA7, FA5. Launch-cost register anchor. This source is the on-disk primary for the launch-cost
ladder used across the review: it fixes the list-price benchmarks (Shuttle about $72,300 per
kilogram, Falcon 9 about $2,940 per kilogram, Falcon Heavy about $1,520 to $2,350 per kilogram
to LEO) and, critically for FA5 and FA7, supplies the physics-based **LEO-to-lunar-surface gear
ratio of about 7.2** and the resulting **about $10,800 per kilogram lunar-surface transportation
cost** at Falcon Heavy list. It independently labels Musk's $10 per kilogram Starship figure as
marginal-only with no development payback, corroborating the review's treatment of the $100 per
kilogram figure as aspirational rather than sourced. Its "take or make" breakeven framework
(recycling development cost versus resupply launch cost, with cheaper launch pushing the "make"
breakeven farther out) is the direct life-support analogue of the review's central mass-wall
argument: cheaper launch relaxes the seed-delivery and resupply corollary without changing the
mass that must be manufactured on the Moon. Author is Harry W. Jones (NASA Ames), not Karen
Jones (Aerospace Corporation).
