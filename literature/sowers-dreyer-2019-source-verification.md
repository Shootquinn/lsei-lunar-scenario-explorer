# Sowers and Dreyer 2019 - Ice Mining in Lunar Permanently Shadowed Regions
## Comprehensive Technical Summary

## Citation

Sowers, G. F., & Dreyer, C. B. (2019). Ice mining in lunar permanently shadowed regions. New Space, 7(4), 235-244. https://doi.org/10.1089/space.2019.0002

Publisher URL: https://journals.sagepub.com/doi/10.1089/space.2019.0002

Notes on the citation fields, recorded because the artifact on disk does not print all of them.

The DOI is printed in the artifact itself, in the page 1 footer, and was not constructed. Volume 7, issue 4, and the page range 235-244 are NOT printed in the artifact, which carries the online-first footer showing VOL. XX NO. XX and paginates itself 1 through 10. Those three fields were taken from two independent bibliographic registries that agree exactly, Crossref and OpenAlex, and not from any summary in this repository.

The publisher is a two-object situation rather than an error. The artifact prints Mary Ann Liebert, Inc. as publisher on every odd page, which was correct at publication. The current Crossref record lists SAGE Publications, and the legacy address www.liebertpub.com/doi/10.1089/space.2019.0002 redirects to journals.sagepub.com, which confirms a title transfer rather than a conflicting identity. Both resolution paths were exercised and both redirect correctly.

Four items are flagged UNVERIFIED, each with the retrieval that would resolve it.

- UNVERIFIED, publisher landing page content. journals.sagepub.com returns HTTP 403 to automated fetch from this environment, so the publisher link is resolution-verified through its redirect chain but not content-verified. A browser retrieval or institutional access would resolve it.
- UNVERIFIED, page-number correspondence. The mapping between the on-disk pagination of 1-10 and the journal pagination of 235-244 is inferred from the equal ten-page extent and is not demonstrated. The version of record would resolve it.
- UNVERIFIED, textual identity. Whether the on-disk online-first text is identical to the version of record at 235-244 is inferred, not shown. A page-by-page comparison against the version of record would resolve it.
- UNVERIFIED, open-access status publisher-side. OpenAlex reports the article as closed and the Crossref record carries only a text-and-data-mining license, but this could not be confirmed at the publisher because of the same 403. A browser retrieval of the article page would resolve it.

Every page citation in this summary indexes the ON-DISK online-first pagination, 1 through 10, not the journal pagination. A locator cited from this source must state which of the two objects it indexes, because the two paginations are both live and neither is the default. The on-disk artifact is ten PDF sheets carrying its own 1 through 10; the published article occupies journal pages 235 through 244. The correspondence between them is flagged UNVERIFIED above and must not be used to silently convert a locator from one object to the other.

## Metadata

Peer-reviewed journal article, 10 pages as held on disk · Colorado School of Mines, Golden, Colorado (both authors) · online-first PDF timestamped 2019-11-06, Crossref published-print 2019-12 and published-online 2019-12-16, OpenAlex publication date 2019-11-06, artifact footer year 2019 · closed access per OpenAlex, publisher-side confirmation UNVERIFIED · funded in part by the United Launch Alliance per the article's funding statement

---

## Abstract

Documents a Colorado School of Mines architecture study, performed in 2017, that tested whether lunar polar water ice could be mined and processed into liquid oxygen and liquid hydrogen at a delivered price of 500 dollars per kilogram on the lunar surface, the price the United Launch Alliance had stated in 2016 it would pay for 1,100 metric tons of propellant per year. Three ice-extraction options were carried to a common level of concept definition and compared on mass, power, development cost, availability, and risk. Two of the three, borehole heating and concentrated-sunlight surface heating under a capture tent, are grouped as thermal mining, and the concentrated-sunlight option is developed in detail through its sublimation physics, vapor confinement and transport, passive cold-trap cooling, and power delivery. The paper reports analytical and design results only. It presents no hardware test, and it identifies laboratory testing under cryogenic vacuum as the next step.

---

### Background and objective

The study was commissioned against a stated commercial price rather than against a technical goal. In 2016 the United Launch Alliance became the first commercial company to offer to buy liquid oxygen and liquid hydrogen propellant in cislunar space, naming a price it would be willing to pay and quantities at various locations, among them 500 dollars per kilogram on the lunar surface for 1,100 metric tons of propellant per year (Sowers, 2019, p. 1). The Colorado School of Mines performed an architecture study in 2017 to determine whether that price was feasible, and this article reports the result of that study. The paper's own framing of the answer is that the price point is feasible under a set of plausible assumptions about the nature and quantities of water ice available (Sowers, 2019, p. 1).

The resource premise is drawn from remote sensing rather than in-situ measurement. The introduction states that the permanently shadowed regions near the lunar poles harbor significant quantities of water as ice and that up to 30 weight percent ice on the surface is indicated at some locations (Sowers, 2019, p. 1). Figure 1, reproduced from the paper's reference 8, maps the north and south polar regions from 80 to 90 degrees latitude and plots ice exposures constrained by M3, LOLA, and Diviner, with LAMP added for the south pole, over a Diviner annual-maximum-temperature background scaled from below 60 K to above 320 K. The figure as printed shows exposure locations and a temperature scale; it carries no weight-percent scale, so the 30 weight percent value is not readable from it.

### Methods and scope

The method was systems-engineering concept development and feasibility determination. A wide set of candidate architectures was brainstormed and three were selected for further analysis. A functional architecture was created that showed strong convergence across the candidates, so most of the architecture was held common between the three alternatives in order to concentrate study effort on the ice-extraction step. The common functions are transporting ice, purifying ice, splitting ice into hydrogen and oxygen, liquefying and storing the products, providing heat and power, and providing communications.

The three ice-extraction options differ only in how heat reaches the ice.

- Option 1, excavation. Regolith is excavated and transported to a central location for heating to sublimate water vapor, which is collected in a cold trap as ice.
- Option 2, drilling. Regolith is heated in place from heaters within boreholes drilled into the ice field. Ice is collected on tarps across the surface, and the tarps are reheated at a central location to transfer ice to cold traps.
- Option 3, passive. Sunlight is directed from the crater rim to a dome-shaped capture tent for direct heating of the surface, with sublimated water captured in cold traps connected to the tent.

Options 2 and 3 together are what the paper calls thermal mining, and the remainder of the article treats them. The paper identifies the primary risk for both as the effectiveness of direct heating in sublimating ice at a rate sufficient to be economical, and identifies reliability and maintainability as the particular susceptibility of the excavation option given its moving parts and dust generation. Common risks named across all three are the size and complexity of the mirror systems, and the cold, vacuum, and dust environment. The paper allows that excavation may make sense in a second phase once more easily extracted ice is exhausted.

Each option was developed only far enough to demonstrate feasibility and to estimate power, mass, and cost. The paper states plainly that masses were estimated for the common elements and the ice-extraction systems from publicly available data on similar systems and that detailed mass calculations were not performed (Sowers, 2019, p. 3). Costs were produced by simple mass-based cost-estimating relationships. Sizing across all options was set by the ULA-specified production rate of 1,100 metric tons of propellant per year.

The surrounding architecture was sized alongside the extraction options. Power for both extraction and processing comes from large heliostats sited in areas of nearly permanent sunlight near the selected permanently shadowed region, and the paper cites its reference 10 for the result that three locations suffice for full coverage in some geometries. Each location carries two heliostats, one aimed at the ice-extraction operation and one illuminating a photovoltaic array that powers propellant production and the remaining architecture elements. The propellant plant sits adjacent to a landing and launch pad, transport was assumed to use the ULA ACES lander concept formerly known as XEUS, and three spent ACES landers with a storage capacity of 70 metric tons each were assumed as propellant tanks. Ice is expected to be contaminated with volatiles including hydrogen sulfide, ammonia, and sulfur dioxide, and is melted and purified using a system attributed to Paragon before standard electrolysis and liquefaction. The entire operation is teleoperated from Earth. The article's funding statement records that the United Launch Alliance funded some of the research, the same party that set the price the study evaluates.

### Key findings

The mass and cost comparison favors the two thermal-mining options over excavation. Table 1 of the source, reproduced below, gives the subsystem mass breakdown in kilograms for the three options.

| Group | Subsystem or component | Option 1 excavation | Option 2 drilling | Option 3 passive |
|---|---|---|---|---|
| Common | XEUS derived storage tanks (3), liquefaction hardware only, lander mass not included | 3,000 | 3,000 | 3,000 |
| Common | Purification and electrolysis plant | 3,000 | 3,000 | 3,000 |
| Common | Common relay | 100 | 100 | 100 |
| Common | Cold traps (3) | 900 | 900 | 900 |
| Common | GP vehicle | 1,000 | 1,000 | 1,000 |
| Similar | Power generation plant 1 | 4,000 | 4,000 | 4,000 |
| Similar | Rim mirror assembly (3), scaled by power consumption | 8,400 | 8,400 | 7,500 |
| Similar | Haulers and tankers (3) | 1,500 | 1,500 | 1,500 |
| Unique to 1 | Backhoe | 4,000 | | |
| Unique to 1 | Cable assembly | 500 | | |
| Unique to 1 | Ore carts (4) | 2,000 | | |
| Unique to 1 | Heating and capture facility | 4,000 | | |
| Unique to 1 | Power generation plant 2 | 4,000 | | |
| Unique to 1 | Cart dumper | 2,000 | | |
| Unique to 1 | Maintenance vehicle | 2,000 | | |
| Unique to 2 | Drillers | | 1,000 | |
| Unique to 2 | Tarps | | 600 | |
| Unique to 2 | Heating elements | | 200 | |
| Unique to 2 | Power supply and cables | | 5,400 | |
| Unique to 2 | Capture device | | 400 | |
| Unique to 2 | Power generation plant 2 | | 4,000 | |
| Unique to 3 | Capture tent | | | 5,000 |
| Unique to 3 | Secondary optics | | | 3,000 |
| | Total | 40,400 | 33,500 | 29,000 |

Table 3 of the source compares the same three options across five parameters.

| Parameter | Option 1 excavation | Option 2 drilling | Option 3 passive |
|---|---|---|---|
| Mass (kg) | 40,400 | 31,900 | 29,000 |
| Total power (kW) | 2,500 | 2,500 | 2,000 |
| Development cost | 3.43B dollars | 2.71B dollars | 2.47B dollars |
| Availability and maintainability | Medium | Medium-high | High |
| Risk | Low | Medium | Medium |

The two mass tables disagree for one option. Table 3 lists the drilling option at 31,900 kg while Table 1 lists it at 33,500 kg, a difference of 1,600 kg. Table 1's own line items sum to 33,500 kg for that option, and the other two options agree between the tables at 40,400 kg and 29,000 kg.

The total power figures in Table 3 are a separate quantity from the 500 kW that Table 4 assigns to the capture tent. Table 3 reports 2,000 kW to 2,500 kW for the whole architecture including propellant processing, while 500 kW is the ice-extraction sizing alone.

The cost-estimating relationships are three single-point rates, given in Table 2 of the source.

| Cost estimating parameter | Relationship | Basis |
|---|---|---|
| Development and build | 50,000 dollars per kg | Commercial space hardware |
| Transportation | 35,000 dollars per kg | Vulcan ACES lander |
| Operations and maintenance | 3,000 dollars per kg | Teleoperation with spares delivery |

No base year, currency year, or escalation assumption is printed for any of the three, and no uncertainty band, sensitivity range, or confidence interval appears anywhere in the article. Measured against a control that returned nonzero on known-present strings, the strings TRL, sensitivity, Monte Carlo, confidence, IRR, NPV, and break-even each occur zero times in the full text.

The thermal-mining chain is defined as four critical functional steps.

- Sublimation of ice and transport of water vapor through the subsurface.
- Confinement and transport of the vapor to cold traps.
- Passive cooling of the cold traps.
- Power delivery for surface and optional subsurface heating.

Heat is applied either directly on the surface through concentrated sunlight or on the subsurface through conducting rods or borehole heaters, or both, depending on local conditions.

Surface temperature for sublimation was set at 220 K, reached by a two-step process of heating the icy regolith mixture from 40 K to 220 K followed by sublimation of the ice. The paper cites its reference 16 for sublimation rate increasing rapidly above 200 K and its reference 15 for 100 micrometer diameter ice grains losing mass rapidly above 170 K. A nominal capture-tent dwell time of 44 hours was chosen to meet the required production rate, and at 220 K that dwell is stated to be sufficient to consume any grains smaller than 100 micrometers.

Figure 7 plots time to completely sublimate an ice sphere against temperature from 40 K to 280 K on a logarithmic time axis spanning 1e-03 to 1e+20 hours, with curves for 1 micrometer, 10 micrometers, 100 micrometers, 1 mm, 1 cm, and 10 cm and a horizontal line at 44 hours. The temperature at which each grain size crosses the 44 hour dwell line, read off the printed figure, is tabulated below. These crossing values are digitized from the figure and are not printed as numbers in the source.

| Grain diameter | Approximate temperature at the 44 hour crossing |
|---|---|
| 1 micrometer | 192 K |
| 10 micrometers | 208 K |
| 100 micrometers | 225 K |
| 1 mm | 243 K |
| 1 cm | 262 K |
| 10 cm | beyond the 280 K axis limit |

The 100 micrometer crossing lying above the chosen 220 K surface temperature is consistent with the text's restriction to grains strictly smaller than 100 micrometers.

Vapor confinement is modeled as a lumped mass balance under the tent, dm/dt equal to the sublimation mass flow minus the deposition mass flow minus the loss flow, where loss is vapor escaping through the imperfect seal between tent and surface. The analysis assumes loss is held below 0.10 of the sublimation rate, which requires the tent-to-surface gap area to be below 0.10 of the cold-trap entrance area, and it assumes the cold trap has sufficient internal surface area, thermal mass, and radiative dissipation to freeze ice at the deposition rate. Transport to the cold traps and through leaks is treated as an effusion-like process in which mass flow is the product of tent pressure, the relevant area, and the square root of the water molar mass divided by the quantity 2 pi R T.

The tent reaches steady state in minutes and equilibrates at 15 to 20 Pa. That pressure is quoted in the text for a cold-trap entrance area of 3 m2 and a leak area of 0.3 m2 (Sowers, 2019, p. 7). Table 4 instead gives an exit area to cold traps of 2 m2 and a leak area of 0.2 m2. The two pairs disagree in magnitude while preserving the same 0.10 area ratio. The low operating pressure is stated to keep the tent from lifting off the surface, and losses are described as directly proportional to the ratio of leak area to cold-trap inlet area, so perfect sealing is stated as unnecessary.

Cold traps are passively cooled by radiation to the ambient environment. Permanently shadowed region surface temperatures are given as low as 40 K against a 2.7 K space background, cold traps are assumed to start each tent placement at ambient, and thermal mass was sized so that cold-trap temperature remains below 100 K after freezing a full load of ice, with a full view to space maintained throughout collection.

The water-grade requirement is the study's central sizing input and it is derived, not observed. Figure 9 plots average power in kW required per 1,600 metric tons of water produced per year, at 70 percent solar availability, against weight percent ice from 0 to 20. The text states that power requirements increase exponentially as ice content falls below 2 weight percent because the demand is dominated by heating barren regolith, and that above 5 weight percent power becomes relatively insensitive to ice content. On that basis the paper records that "a lower bound on acceptable ice concentration was placed at 4wt%" and that this then becomes a requirement on the prospecting campaign to identify ice fields of sufficient area and sufficient average concentration (Sowers, 2019, p. 8). Figure 9 annotates the same value as an ice concentration requirement.

The 4 weight percent value is therefore a design lower bound selected from the shape of a modeled power-versus-grade curve and then levied as a prospecting requirement. It is not an economic break-even, since no cost or revenue quantity enters its derivation, and it is not an observational lower bound on lunar ice grade. The observational figures are stated separately and immediately after it: the best estimate of lunar permanently shadowed region water ice content is attributed to LCROSS at 5.6 weight percent ice, other estimates put the content at 30 weight percent, and the most pessimistic estimates are at 1 weight percent (Sowers, 2019, p. 8). The paper's own qualifier on the resource is that existing data suggesting such ice fields exist are not conclusive.

The power figure attached to that grade is internally inconsistent between the text and its own figure. The text states that at the minimum required ice concentration of 4 weight percent, 350 kW of power is required, and that the system was sized at 500 kW to provide margin for unknowns and potentially nonuniform heating of the regolith (Sowers, 2019, p. 8). The printed Figure 9 curve was digitized against its own labeled gridlines, a calibration that reproduces every labeled gridline to within 2 kW and every labeled grade gridline to within 0.02 weight percent.

| Ice grade | Power read from the printed Figure 9 curve |
|---|---|
| 2 weight percent | about 352 kW |
| 3 weight percent | about 284 kW |
| 4 weight percent | about 255 kW |
| 5 weight percent | about 230 kW |
| 20 weight percent | about 175 kW, the high-grade asymptote |

The value the text attaches to 4 weight percent, 350 kW, corresponds to the printed curve at about 2 weight percent rather than at 4. Both the text value and the digitized figure value are recorded here without preference. The 500 kW system size is the number that carries into Table 4 and into the rest of the architecture.

Production stoichiometry sets ice throughput above propellant output. Meeting the 1,100 metric tons per year propellant requirement calls for 1,600 metric tons of ice to be extracted, because a typical rocket engine such as the RL10 uses liquid oxygen and liquid hydrogen at a mass ratio of 5.5 to 1 while water contains oxygen and hydrogen at a mass ratio of 8 to 1. The excess oxygen produced is waste in the current system design, and the paper notes it could become a salable product in future operations.

Table 4 of the source fixes the capture tent requirements for 1,600 metric tons of ice per year.

| Requirement | Value |
|---|---|
| Area mined (m2 per year) | 100,000 |
| Yield per m2 (kg) | 16 |
| Ice sublimated per m2 (kg) | 18 |
| Capture tent geometry | Hemispherical |
| Dwell time (h) | 44 |
| Move time (h) | 12 |
| Power (kW) | 500 |
| Diameter (m) | 29 |
| Plan area (m2) | 641 |
| Exit area to cold traps (m2) | 2 |
| Leak area (m2) | 0.2 |

The text adds that extractable ice per surface area is required to be at least 16 kg per m2 and that a single tent would need to be placed 156 times per year, with additional tents providing additional margin. These figures close on themselves: 641 m2 times 156 placements is 99,996 m2, and 100,000 m2 at 16 kg per m2 is 1,600 metric tons. The gap between 18 kg per m2 sublimated and 16 kg per m2 yielded implies about 0.11 of sublimated vapor not captured, close to the stated loss assumption of below 0.10.

Transportation cost benefits are given as ratios without absolute figures. Use of lunar propellant is stated to lower cost per kilogram from Earth to a high Earth orbit such as EML1 by a factor of 2, to lower cost per kilogram to the lunar surface by a factor of 3, and to reduce the cost to return to Earth from the Moon by a factor of 50. No base year, launch price, or source cost is printed for these ratios in this article.

The hardware status of thermal mining in this article is that nothing has been built or tested. The next steps section identifies laboratory testing to validate the effectiveness of both surface and subsurface heating in sublimating ice embedded in regolith, states that this would need to take place in cryogenic vacuum conditions, and places proof-of-concept testing of the capture tent and cold traps after that (Sowers, 2019, p. 9). The vapor mass-transport investigation from surface through tent into cold traps, by test and analysis, is likewise named as the subject of future research (Sowers, 2019, p. 6). No feedstock, simulant, chamber, or test result appears anywhere in the article, and it assigns no technology readiness level to any element.

Work outside this article is reported as having continued. A ULA-facilitated workshop involving 25 academic, industry, and government entities added detail to the overall architecture including cislunar propellant storage and distribution and produced a larger public report, cited as the paper's reference 12. A rigorous business case for the thermal mining architecture is attributed to the paper's reference 18, a 2018 Space Resources Roundtable presentation, and is described as showing positive returns under both a purely commercial scenario and a public-private partnership scenario. A Lunar Polar Prospecting workshop was held at the Colorado School of Mines in June 2018, cosponsored by the Space Resources Roundtable and the Lunar Exploration Analysis Group, and created a roadmap for a prospecting campaign leading to industrial-scale propellant production within a decade.

The conclusions assert scalability and business closure. Thermal mining is characterized as efficient, scalable, and sustainable, as working in any ice type so long as pore space exists for vapor transport, as adaptable through conducting rods or subsurface heaters, and as benefiting from direct solar energy transfer with variable heating to control production rate. The closing claim is that its efficiency enables a commercial lunar mining operation whose business case closes without government participation.

### Limitations

The article states several of its own limits. Detailed mass calculations were not performed and masses rest on publicly available data for similar systems. Verification and refinement of the tent-to-cold-trap mass transport assumptions is deferred to future research. The evidence that ice fields at the required grade exist is described by the paper as not conclusive.

The economics are single-point throughout. Three mass-based cost-estimating rates, one development cost per option, and three transportation cost-reduction factors constitute the entire quantitative economic content, and none carries a base year, a launch price, an uncertainty band, or a sensitivity range. The 500 dollars per kilogram figure is a price a named buyer stated it would pay in 2016, not a computed production cost, and the article's stated conclusion is that this price is feasible under plausible assumptions rather than that a cost was derived and compared to it. The abstract characterizes the business case analysis in this article as simple, and the rigorous business case is external to the document.

Three internal numeric disagreements are present. The drilling option's mass differs between Table 1 at 33,500 kg and Table 3 at 31,900 kg. The cold-trap entrance and leak areas differ between the page 7 text at 3 m2 and 0.3 m2 and Table 4 at 2 m2 and 0.2 m2. The power required at the 4 weight percent design grade differs between the page 8 text at 350 kW and Figure 9 as printed at approximately 255 kW.

No element of the architecture has hardware heritage reported in this document, and the concentrated-sunlight extraction option that sets the mass, power, and cost results is the least demonstrated of the three compared.

Two reading hazards attach to the artifact rather than the science. The on-disk PDF is the online-first version, so its internal pagination of 1-10 does not correspond to the journal pagination of 235-244 and any locator must state which it indexes. Separately, the text layer renders the Greek mu as a Latin m, so an automated text extraction of this PDF reports 100 mm ice grains where the document prints 100 micrometers, an error of three orders of magnitude; the reading was confirmed by font inspection, the two mu glyphs being set in a symbol font distinct from the body font, and independently by the Figure 7 legend, which spells out micron.

### Topic mapping

The introduction and study methodology sections on pages 1 through 3 establish the ULA price and quantity premise, the three candidate extraction options, the common propellant-production architecture, and the option comparison in Tables 1 through 3. The thermal mining section beginning on page 3 introduces the analogy to terrestrial thermal desorption in environmental remediation and defines the four critical functional steps. Pages 5 through 6 cover sublimation and vapor transport, including the dwell-time and grain-size analysis of Figure 7. Pages 5 through 7 cover confinement and transport of vapor, the tent mass balance, the effusion relation, and the steady-state tent pressure. Page 8 covers passive cooling of the cold traps and power delivery, and carries both Figure 9 and the 4 weight percent grade requirement together with the LCROSS and remote-sensing grade estimates. Page 9 gives the thermal mining system requirements in Table 4, the next steps, and the conclusions. Page 10 is the reference list and correspondence address.

Image-only content was checked rather than assumed. The document contains nine embedded rasters corresponding to Figures 1 through 9 and no image-only tables; all four tables carry a text layer and were read as text. All nine figures were rendered and read. Figures 2 through 6 and Figure 8 are schematics and flowcharts carrying no numeric content, two of them labeled not to scale. Figure 1 carries a latitude range, a Diviner temperature scale, and instrument attributions. Figures 7 and 9 are the only figures carrying quantitative content, and both were read and digitized. Nothing in this source remains unread.

This work stands in a defined relation to the NIAC Phase I final report summarized in this folder as sowers-2019-thermal-mining-niac.md, which shares a first author and year but is a separate document. The journal article is the narrower and earlier-executed of the two: it reports the 2017 ULA-driven architecture study, confines itself to the Moon, and compares three extraction options against a commercial price premise. The NIAC report surveys thermal mining targets across the solar system, develops the lunar mission in greater subsystem depth, and adds two things this article does not contain, namely a business-case analysis with internal-rate-of-return scenarios and proof-of-concept laboratory testing with icy regolith simulants. The hardware distinction is the sharpest one: this article reports no test of any kind and names cryogenic vacuum laboratory testing as the step still to be taken, while the NIAC report describes Block 1 and Block 2 apparatus and testing with simulant at about 12 percent water by weight. The two documents agree on the headline sizing, about 350 kW at about 4 weight percent ice with the system sized at about 500 kW to produce roughly 1,600 metric tons of water per year, and this article is where those figures are printed in peer-reviewed form. Neither document supersedes the other on the grade requirement, which originates here.
