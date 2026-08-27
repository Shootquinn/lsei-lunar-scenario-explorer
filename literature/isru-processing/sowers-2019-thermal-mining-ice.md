# Ice Mining in Lunar Permanently Shadowed Regions

## Citation

Sowers, G. F., & Dreyer, C. B. (2019). Ice mining in lunar permanently shadowed regions. *New
Space*. Advance online publication. https://doi.org/10.1089/space.2019.0002

Publisher URL: https://www.liebertpub.com/doi/10.1089/space.2019.0002

Note on bibliographic confirmation: title, both author names (George F. Sowers and Christopher
B. Dreyer, Colorado School of Mines, Golden, Colorado), journal name ("New Space," published
by Mary Ann Liebert, Inc.), copyright year 2019, and the DOI 10.1089/space.2019.0002 are
all printed in the source PDF and confirmed here. The PDF itself, however, is a typeset
proof carrying placeholder running heads ("VOL. XX NO. XX 2019") and sequential offprint
pagination 1-10 rather than final journal volume, issue, or page numbers; volume/issue/page
fields commonly attached to this citation elsewhere (e.g., 7(4), 235-244) could not be
confirmed from this document and are omitted here rather than invented.

## Abstract

Reports a 2017 Colorado School of Mines (CSM) systems-engineering architecture study
conducted to determine whether a cislunar propellant price of $500/kg, set by United Launch
Alliance (ULA) as its willingness-to-pay benchmark for 1,100 metric tons (mT) of LO2/LH2
propellant per year delivered to the lunar surface, is achievable by mining water ice from
lunar permanently shadowed regions (PSRs). Three ice-extraction concepts sharing a common
propellant-production architecture were developed to feasibility level and compared on mass,
power, and rough-order development cost: (1) regolith excavation and central heating,
(2) in-place borehole/tarp heating ("drilling"), and (3) direct solar heating under a
capture tent ("passive" thermal mining). The article details the physics, hardware sizing,
and operational sequence of the thermal-mining approach (options 2 and 3) and concludes
that thermal mining is an efficient, scalable extraction method under which the $500/kg
target is feasible and a lunar propellant venture can close a positive business case,
without providing the underlying $/kg cost breakdown within the article text itself.

## Summary

### Background and objective

The article opens by framing space resource use, particularly lunar resources, as
central to a sustainable space economy, citing prior lunar-resource proposals (O'Neill's
1970s space-colony concept using 10 million tons of lunar material; a 1984 NASA 10-week
space-resources study; Harrison Schmitt's proposals for lunar 3He fusion fuel) and noting
that interest has accelerated with the discovery of water ice at the lunar poles. It reports
that surface water-ice indications at the lunar poles have been mapped, with up to 30 wt%
ice indicated at some locations, and situates the study's origin in a 2016 commercial signal:
ULA became the first company to offer to buy LO2/LH2 propellant in cislunar space, setting
a price of $500/kg on the lunar surface for 1,100 mT of propellant per year. In 2017 CSM
performed an architecture study to test whether that $500/kg price point was feasible;
the article states this article documents the results and that, under a set of "plausible
assumptions" about the nature and quantity of available water ice, the $500/kg price is
shown to be feasible and a simple business-case analysis indicates lunar propellant thermal
mining can be a profitable commercial enterprise.

### Methods and scope

The study used systems-engineering concept-development and feasibility-determination
processes. A wide range of candidate ice-extraction-and-processing architectures was first
brainstormed; three were selected for further analysis. An overall functional architecture
(Fig. 2) was created showing strong convergence across candidate architectures, so most of the
architecture was held common across the three alternatives (ice transport, ice purification,
water splitting into H2/O2, liquefaction into LO2/LH2, storage, heat and power provision,
and communications), concentrating further study effort on the three ice-extraction options
themselves. Systems were sized to the 1,100 mT/year propellant production rate specified
by ULA. For each option, the extraction concept was developed in enough detail to estimate
power requirements, system masses, and costs; masses were estimated from publicly available
data on similar systems rather than from detailed mass calculations (explicitly stated as
not performed). Simple mass-based cost-estimating relationships (CERs) were applied for
hardware development/build, transportation to the Moon, and operations and maintenance. The
three extraction concepts were: (1) excavation - regolith excavated and transported to a
central location for heating and cold-trap collection; (2) drilling - regolith heated in
place via heaters in boreholes, with ice collected on tarps and the tarps reheated at a
central location; (3) passive - sunlight redirected by rim heliostats onto a dome-shaped
capture tent for direct surface heating, with sublimated water captured in connected cold
traps. Power for all three options was assumed to come from large heliostats sited near
areas of near-permanent sunlight adjacent to the target PSR, using two heliostats per site
(one for ice extraction, one illuminating a photovoltaic array for propellant-plant power);
a prior study (Stoica et al.) is cited as showing three heliostat locations suffice for
full coverage in some site geometries. Transport to/from the Moon was sized around ULA's
ACES lander concept (formerly XEUS).

### Key findings

**Specific energy (headline parameter).** The article does not state a specific-energy
figure (kWh/kg or MJ/kg) directly as such. The closest stated quantities are
power-versus-concentration values from Figure 9, captioned "Power to extract 1,600 mT of
water ice per year with 70% solar availability as a function of water weight percentage":
at the adopted minimum viable ice concentration of 4 wt%, 350 kW of power is required;
the system was then sized to 500 kW to add margin for unknowns and potential nonuniform
regolith heating (this 500 kW figure also appears in Table 4 as the capture-tent power
requirement). Converting these stated kW figures to a per-kg specific energy requires an
assumption the article does not spell out - whether the reported kW already reflects average
power diluted by the stated 70% solar-availability duty cycle, or is a continuous/nameplate
rating applied whenever the site is sunlit. Using the 1,600 mT/year (1,600,000 kg/year)
ice target stated in the text: at 350 kW running only during the 70%-available sunlit hours
(0.70 x 8,760 h = 6,132 h/year), annual energy is about 2.15 GWh, giving roughly 1.3 kWh/kg
(about 4.8 MJ/kg); at the margined 500 kW under the same duty-cycle assumption, annual
energy is about 3.07 GWh, giving roughly 1.9 kWh/kg (about 6.9 MJ/kg). If instead the
stated kW values are treated as running the full 8,760 h/year, the same two power levels
give roughly 1.9 kWh/kg (350 kW) and 2.7 kWh/kg (500 kW). These four values (approximately
1.3-2.7 kWh/kg, or 4.8-9.7 MJ/kg) bound a range derived from the article's own power and
mass figures; they are not stated in the source and are reported here only as a transparent,
clearly-labeled calculation, not as an authors' result.

**Production target and ice/propellant mass balance.** Propellant production target: 1,100
mT/year of LO2/LH2 (ULA-specified). Required ice extraction rate to meet that target: 1,600
mT/year. This 1,100-to-1,600 ratio follows from a stated engine mass-mixture mismatch:
a typical engine such as ULA's RL10 uses LO2/LH2 in a mass ratio of 5.5:1 (oxygen to
hydrogen), whereas water itself splits into oxygen and hydrogen at a mass ratio of 8:1;
the article states the resulting excess oxygen is treated as waste in the current design
(a potential future salable by-product, improving the business case, if used).

**Ice-grade/concentration assumptions.** Reported estimates of lunar PSR water-ice content:
LCROSS-derived best estimate 5.6 wt%; other estimates up to 30 wt%; most pessimistic
estimates as low as 1 wt%. A lower bound of 4 wt% ice concentration was adopted as the
minimum acceptable for economical extraction, based on the power-versus-concentration
relationship (power requirements rise exponentially below about 2 wt%, dominated by the
energy cost of heating regolith, and become relatively insensitive to concentration above
about 5 wt%). The 4 wt% floor is stated to become a requirement on the prospecting campaign:
locating ice fields of sufficient area and average concentration.

**PSR thermal environment and process temperatures.** PSR surface temperatures as low as 40 K
are reported; the temperature of space is given as 2.7 K. Surface temperature for sublimation
was set at a design point of 220 K, based on cited findings that sublimation rate increases
rapidly above 200 K (Kossacki and Leliwa-Kopystynski) and that 100 micrometer-diameter ice
grains lose mass rapidly above 170 K (Andreas). Cold traps are sized so their temperature
remains below 100 K after freezing a full load of ice. The heating process is described as
two steps: heating the icy regolith mixture from 40 K to 220 K, then sublimating the ice.

**System architecture and process chain.** Common architecture elements across all three
options: ice transport, ice purification, water electrolysis into H2/O2, liquefaction
into LO2/LH2, storage, heat/power provision, and communications. At the processing plant,
ice is melted and purified using a system "like that currently in development by Paragon,"
then electrolyzed into H2 and O2 using a standard process, then liquefied and stored; the
article notes that although liquefying LO2/LH2 is power-intensive on Earth, the cold of a
lunar PSR is expected to reduce this power need substantially (no separate liquefaction
power figure given). Storage uses three spent ACES landers as tanks, each with 70 mT
capacity (210 mT total nominal storage). Ice is expected to be contaminated with volatile
species including hydrogen sulfide, ammonia, and sulfur dioxide. The entire operation is
envisioned as teleoperated from Earth. No formal Technology Readiness Level (TRL) numbers are
assigned to individual components in the article; it instead states that laboratory testing
(in cryogenic vacuum) to validate surface and subsurface sublimation heating is the next
required step, followed by proof-of-concept testing of the capture tent and cold traps,
with other subsystem development able to proceed in parallel.

**Mass by option (Table 1, kg).** Common components (identical across all three options):
storage tanks (3, XEUS/ACES-derived, liquefaction hardware only, lander mass excluded)
3,000; purification and electrolysis plant 3,000; common relay 100; cold traps (3) 900;
general-purpose (GP) vehicle 1,000. Similar components (same function, option-specific
scaling): power generation plant 1, 4,000 (all options); rim mirror assembly (3, scaled by
power consumption), 8,400 for options 1 and 2, 7,500 for option 3; haulers/tankers (3), 1,500
(all options). Unique components, Option 1 (excavation): backhoe 4,000; cable assembly 500;
ore carts (4) 2,000; heating and capture facility 4,000; power generation plant 2, 4,000;
cart dumper 2,000; maintenance vehicle 2,000. Unique components, Option 2 (drilling): drillers
1,000; tarps 600; heating elements 200; power supply and cables 5,400; capture device 400;
power generation plant 2, 4,000. Unique components, Option 3 (passive/thermal-mining tent):
capture tent 5,000; secondary optics 3,000. Table 1 totals: Option 1, 40,400 kg; Option
2, 33,500 kg; Option 3, 29,000 kg. (Table 3 restates Option 2's total mass as 31,900 kg
rather than the 33,500 kg summed in Table 1 - both figures are printed in the source and
the discrepancy is not reconciled in the text.)

**Cost estimating relationships (Table 2).** Development and build: $50,000/kg,
basis "commercial space hardware." Transportation: $35,000/kg, basis "Vulcan ACES
lander." Operations and maintenance: $3,000/kg, basis "teleoperation with spares
delivery." These are cost-per-kilogram-of-hardware-mass factors, not cost-per-kilogram
of extracted water or propellant; the article does not present an itemized $/kg cost of
produced water or propellant, or a total capital-cost figure, within the article text. It
states a "rigorous business case" for the thermal-mining architecture was developed
separately and showed positive business returns under both a purely commercial scenario
and a public-private-partnership scenario, citing a separate 2018 conference presentation
(ref. 18) for the underlying figures, which are not reproduced in this article.

**Option comparison (Table 3).** Mass: Option 1 (excavation) 40,400 kg; Option 2 (drilling)
31,900 kg; Option 3 (passive) 29,000 kg. Total power: Option 1, 2,500 kW; Option 2, 2,500
kW; Option 3, 2,000 kW. Development cost: Option 1, $3.43B; Option 2, $2.71B; Option 3,
$2.47B. Availability/maintainability: Option 1 "Medium"; Option 2 "Medium-high"; Option 3
"High." Risk: Option 1 "Low"; Option 2 "Medium"; Option 3 "Medium." The text states the
excavation option (1) requires substantially more mass, more moving parts, and generates
much more dust than either other option, reducing its maintainability/availability rating,
though it is rated "Low" risk; excavation is suggested as a possible second-phase technology
once easily extracted ice is exhausted, and as generally useful for other resource and
habitat-construction work. The primary stated risk for options 2 and 3 is the effectiveness
of direct heating to sublimate ice at a sufficient rate to be economical.

**Thermal-mining process parameters (options 2/3).** Nominal capture-tent dwell time: 44
hours, chosen as sufficient at 220 K to fully consume ice grains smaller than 100 micrometers
(per a sublimation-time-versus-temperature relationship for idealized spherical ice grains,
Fig. 7). Tent move (repositioning) time: 12 hours. Steady state in the tent is reached
"in minutes" at the 220 K design temperature. Modeled tent pressure equilibrium: 15-20 Pa,
for a stated cold-trap entrance area of 3 m^2 and leak area of 0.3 m^2 (these area values,
given in the text discussion of the effusion-based mass-transport model, differ from the 2
m^2 exit area and 0.2 m^2 leak area listed for the same system in Table 4; both are printed
in the source). Vapor loss through tent leaks is assumed constrained to less than 10% of
the sublimation mass flow rate, requiring the tent-to-surface gap area to be less than 10%
of the cold-trap entrance area. The mass-transport model is described as an effusion-like
process (m-dot proportional to pressure x area x sqrt(molecular mass / (2*pi*R*T))) and the
article states that detailed test-and-analysis verification of this model, and refinement
of the resulting design, is left to future research.

**Capture tent requirements (Table 4, sized to 1,600 mT ice/year).** Area mined: 100,000
m^2/year. Yield per m^2: 16 kg. Ice sublimated per m^2: 18 kg (the roughly 2 kg/m^2 gap
between sublimated and yielded ice is consistent with the article's stated allowance for
tent leak losses). Capture tent geometry: hemispherical. Dwell time: 44 h. Move time: 12
h. Power: 500 kW. Diameter: 29 m. Plan area: 641 m^2. Exit area to cold traps: 2 m^2. Leak
area: 0.2 m^2. The text adds that a single 29 m tent would need to be placed 156 times
per year to meet the 1,600 mT/year ice target (100,000 m^2 total area mined divided by
641 m^2 tent plan area), that additional tents would add production margin, and that the
required extractable ice yield per unit surface area is at least 16 kg/m^2. The article
states thermal mining "can be scaled to meet any water extraction goal, larger or smaller,"
by scaling tent size or adding tents, cold traps, and other elements.

**Transportation cost-reduction claims.** The article states that availability of low-cost
lunar/cislunar propellant: lowers cost per kilogram from Earth to a high Earth orbit such
as EML1 by a factor of 2; lowers cost per kilogram to the lunar surface by a factor of 3;
and can reduce the cost of return to Earth from the Moon by a factor of 50. These are stated
as general transportation-economics benefits of in-space propellant availability rather
than as figures computed within this architecture study, and no absolute dollar baseline
is given for them in the article text.

**Downstream/programmatic developments noted.** Since the CSM study, the article reports:
a ULA-facilitated workshop with 25 academic, industry, and government entities producing
a publicly available report on the broader architecture including cislunar propellant
storage/distribution (ref. 12); a June 2018 Lunar Polar Prospecting workshop at CSM
(co-sponsored by the Space Resources Roundtable and the Lunar Exploration Analysis Group)
that produced a roadmap toward industrial-scale propellant production "within a decade"
(ref. 19); and a separate rigorous business case for the thermal-mining architecture showing
positive returns under both commercial and public-private-partnership scenarios (ref. 18),
with the underlying figures not given in this article.

### Limitations

The article explicitly states that "detailed mass calculations were not performed" for the
extraction systems or common elements; masses instead came from publicly available data on
similar (terrestrial or existing space-hardware) systems, and simple mass-based cost-estimating
relationships were used rather than bottom-up cost estimates. The mass-transport/effusion
model for vapor flow through the capture tent to the cold traps is presented as an unverified
analytical assumption; the article states a detailed test-and-analysis investigation to verify
these assumptions and refine the design "will be the subject of future research." The 4 wt%
minimum ice concentration is described as a requirement the prospecting campaign must still
confirm is met over sufficient area; the article characterizes existing ice-field evidence
as suggestive but "not conclusive." Reported ice-concentration estimates span a wide range
(1-30 wt%) depending on data source, and the article does not resolve which estimate is most
reliable. A stated next step is laboratory testing of surface and subsurface sublimation
heating under cryogenic vacuum conditions, followed by proof-of-concept testing of the capture
tent and cold traps, indicating the thermal-mining hardware had not yet been physically
demonstrated at time of writing. A mass discrepancy exists within the article's own tables
for Option 2 (33,500 kg in Table 1 versus 31,900 kg in Table 3), and the cold-trap/leak-area
values used in the text's effusion-model discussion (3 m^2 / 0.3 m^2) differ from those
given in Table 4 for the same design (2 m^2 / 0.2 m^2); neither discrepancy is addressed in
the text. The article does not itemize the $/kg cost of extracted water or propellant, or
total program capital cost, referring instead to an external, non-reproduced business-case
analysis (ref. 18) for those figures. Funding disclosure states ULA funded some of the
underlying research; the authors report no competing financial interests.

### Topic mapping

FA5. Source list entry 2. Sub-Q 3, 4. The source addresses the physical and economic
architecture of lunar water-ice extraction from permanently shadowed regions: the
"thermal mining" process chain (sublimation, vapor capture and transport, passive cold-trap
freezing, power delivery) and its governing physics (sublimation temperature, tent pressure,
effusion-based mass transport); comparative mass, power, and rough development-cost figures
for three candidate ice-extraction architectures (excavation, drilling, passive/thermal-mining
tent); assumed ice-grade/concentration bounds and the PSR thermal environment; production-rate
sizing (ice and propellant mass targets, mass-balance mismatch driving excess oxygen)
and capture-tent design requirements; cost-estimating relationships expressed as $/kg of
hardware mass; and stated transportation cost-reduction effects of lunar-sourced propellant,
framed throughout around the feasibility of a $500/kg lunar-surface propellant price point.
