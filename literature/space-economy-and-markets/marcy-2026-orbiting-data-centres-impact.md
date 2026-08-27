# The Impact of Computing Data Centres Orbiting Earth

## Citation

Marcy, G. W. (2026). The impact of computing data centres orbiting Earth (preprint,
submitted to Letters of the Monthly Notices of the Royal Astronomical Society; version
dated March 29, 2026; the document's own acceptance field reads "Accepted: xx," i.e., not
yet accepted at this version). arXiv:2603.28829. https://arxiv.org/abs/2603.28829

Publisher URL: none in source. The extracted text gives no arXiv subject category, DOI,
volume, or page numbers, only the arXiv identifier, the March 29, 2026 version date, and
the submission target (MNRAS Letters). The author's sole affiliation is given as "Space
Laser Awareness," Santa Rosa, California, described in the acknowledgements as a
supporting organization rather than a university or observatory department.

## Abstract

A 7-page astronomy letter that treats AI-driven data-centre power demand only as
motivation, then asks what proposed orbiting AI-computing satellites, sized to meet that
demand, would look like and do to the sky. Working from published solar-array-area
requirements, the paper derives the angular size, brightness, and visibility duration of
kilometre-scale orbital data centres in Sun-synchronous low-Earth orbit, and separately
assesses collision and debris risk. Its result: such structures would be roughly as large
as the Moon in the sky, far brighter than any star, visible about three hours around both
sunset and sunrise every day, capable of briefly occulting stars and planets, and exposed
to a debris environment that could trigger cascading collisions. The paper's own framing
is astronomical and cultural impact, not economic viability.

## Summary

### Background and objective

The paper opens with the same demand figures cited elsewhere in this literature review as
the motivation for orbital compute: United States data-centre power demand is projected to
exceed 100 gigawatts (GW) by 2035, with global AI-related demand potentially approaching 1
terawatt (page 1). It then notes, in one sentence, that companies and governments have
responded by proposing to move computing infrastructure into orbit, where continuous
sunlight can supply power and radiative cooling can ease some terrestrial thermal
constraints, and where inter-satellite laser links could reduce reliance on ground
internet infrastructure (page 2). The author, an astronomer, does not evaluate that
economic or engineering case. The paper's stated objective is instead "to determine the
size, brightness, and appearance of these computing centres in orbit" (page 2), i.e., to
quantify the astronomical and sky-visibility consequences of building the orbital data
centres that the demand numbers imply. The demand figures function here purely as the
premise establishing why such large structures would be proposed at all; the paper's own
contribution is entirely about what those structures would do to the daytime and
nighttime sky, plus a separate section on collision and debris risk.

### Methods and scope

The analysis is a set of order-of-magnitude physical calculations, not a simulation,
survey, or new observational dataset; the paper's own data-availability statement says it
"is based on no new data" (page 6). The author first sizes a representative data-centre
solar array from basic radiometry: using the solar constant of 1,361 W per square metre
and an assumed 25 percent photovoltaic efficiency, generating 5 GW requires about 15 square
kilometres of array area, i.e., a roughly 3.9 by 3.9 km panel, or, in the paper's rounder
description, "4 x 4 km" (pages 1 to 2). This is compared against the solar-panel area of
current Starlink-class low-Earth-orbit (LEO) satellites, about 105 square metres, to derive
a cross-sectional-area and reflected-light scaling factor of roughly 140,000 (page 2).

Brightness is then scaled from the measured magnitudes of existing Starlink V2 Mini
satellites (g approximately 6 to 7.5 magnitude, citing Mallama and collaborators), applying
the 140,000-times area ratio, equivalent to about 13 magnitudes, to obtain a predicted
magnitude range for the orbital data centres (pages 3 to 4). Visibility duration and
geometry are derived by simple orbital trigonometry for a Sun-synchronous orbit at about
500 to 550 km altitude (the paper uses both figures in different sections): Earth's radius
R = 6,371 km and orbital radius r = 6,871 km give a horizon-crossing angle of arccos(R/r)
is approximately 22 degrees, which at Earth's 15-degree-per-hour rotation rate corresponds
to about 90 minutes, the time for the satellite swath to move from overhead to the horizon
after sunset (or before sunrise) (pages 2 to 3, with an accompanying geometry figure).
Angular size is computed as a small-angle approximation, array size divided by altitude,
for a 4 km array at 550 km (page 4 to 5). Albedo comparisons draw on published lunar
albedo values (about 0.11 weighted average) against an assumed 10 to 15 percent solar-panel
albedo (page 4). The collision and debris section draws on ESA's 2025 debris population
estimate and published relative-velocity and impact-energy relations, with the
International Space Station's recorded impact history offered as a real-world calibration
point (pages 5 to 6). No new brightness measurements, radiative-transfer modeling, or
orbital-debris simulation are performed; all quantitative results are closed-form estimates
built from cited constants and published comparison satellites.

### Key findings

**Proposed ventures and scale, as named by the paper (motivation only).** The paper lists
specific orbital data-centre proposals as context, not as its own analytical subject:
SpaceX has filed with the U.S. Federal Communications Commission (FCC) for about one
million solar-powered orbital data-centre satellites specifying 100 GW of AI computing
capacity per year; Starcloud has applied to the FCC for a constellation of up to 88,000
satellites; Blue Origin has filed with the FCC for 51,600 satellites for data-centre
operations; Google's Project Suncatcher plans AI-chip satellite constellations with
launches proposed as early as 2027; and China's Adaspace is pursuing a comparable
space-based data-centre concept (pages 2 to 3, citing SpaceX 2026, Foust 2026a and 2026b,
Beals et al. 2025a and 2025b, and Russell 2025). The paper treats these filings as evidence
that "proposals to place computing infrastructure into low-Earth orbit are proliferating"
(page 2) rather than analyzing their individual capacities or economics further.

**Solar-array size, reflectivity, and angular size.** Generating 5 GW requires roughly 15
square kilometres of solar array, about a 3.9 by 3.9 km panel; this is about 140,000 times
the cross-sectional area of a current Starlink satellite's approximately 105 square metre
solar panels, implying the proposed structures would reflect roughly 140,000 times more
sunlight than a present-day LEO satellite (pages 1 to 2). A representative 4 km array at
approximately 550 km altitude subtends an angular diameter of about 0.42 degrees,
comparable to the full Moon's angular diameter of about 0.53 degrees (pages 4 to 5).

**Brightness.** Scaling the roughly 140,000-times area ratio onto measured Starlink V2 Mini
magnitudes yields a predicted visual magnitude of about -5.5 to -7.0 for the orbital data
centres, about 100 times brighter than the brightest stars, several times brighter than
Venus at its brightest (about -4), and roughly one-twentieth as bright as a quarter Moon
(about -10.5) (pages 1, 4, and 6). The scaling assumes mitigation measures (e.g., visors)
comparable to those already used on Starlink; without such mitigation, the structures
"will be brighter than computed above" (page 4).

**Visibility geometry and duration.** In a Sun-synchronous orbit, data centres would form a
north-south swath crossing directly overhead at sunset and sunrise, then appear to migrate
toward the western (or, before sunrise, from the eastern) horizon over roughly 90 minutes
as Earth's rotation carries the observer eastward; the same geometry gives roughly 90
minutes of visibility before sunset and 90 minutes after sunrise as well, for a total of
about 6 hours of daily visibility (3 hours bracketing each terminator), with higher
latitudes seeing them longer, potentially continuously (pages 2 to 4, with an accompanying
geometry figure).

**Sky occultation and interference with astronomy.** At 0.42 degrees across, the structures
would be large enough to block naked-eye stars, planets, and deep-sky objects for several
seconds as they transit, with the paper naming Orion's first-magnitude stars, a crescent or
quarter Moon, and Saturn, Jupiter, Vega, and Sirius as objects that would "commonly vanish"
(page 5). It also names professional time-domain survey programs, including ZTF,
Pan-STARRS, the ARGUS Array, GOTO, ATLAS, and Rubin/LSST, as facilities whose observations
would be disrupted on second timescales during the twilight windows (page 5).

**Collision and debris risk.** More than one million debris objects sized 1 to 10 cm
already populate LEO (citing ESA's 2025 Space Environmental Report), with masses of roughly
1 to 1,000 grams and typical relative velocities near 7 km/s; because Sun-synchronous
(near-polar) orbits cross debris in equatorial orbits at close to perpendicular angles,
relative speeds near 10 km/s are estimated, at which a 1 kg impactor would deliver on the
order of 5x10^7 joules, far exceeding the roughly 3,000 joules of a shotgun or rifle round
(pages 5 to 6). The paper cites the International Space Station's history of more than
1,400 recorded impacts, mostly minor surface damage, as a real-world reference point for
what kilometre-scale solar panels would need to survive repeatedly (page 6). It states that
a collision could trigger a Kessler-syndrome cascade producing millions of fragments across
the 500 to 600 km altitude band, with no practical means of removal (page 5).

**Paper's own conclusion.** The paper does not evaluate whether orbital compute is
economically viable, competitive with terrestrial data centres, or likely to be built at
the proposed scale; it takes the proposals as given and states that "prior to widespread
implementation, the astronomical and societal consequences of such large machines in LEO
will require rigorous, multidisciplinary assessment" (page 6). Its closing argument is
explicitly cultural as well as technical: it frames the visible night and daytime sky as
a shared reference point across human history and argues that bright, resolvable
industrial structures crossing it "would obstruct and alter the natural sky seen by
everyone on Earth" (page 6), regardless of whether a given community has any stake in the
computing capacity itself.

### Limitations

The paper is a single-author order-of-magnitude estimate, not a peer-reviewed published
result; its own header lists "Accepted: xx," indicating it has not yet cleared MNRAS
Letters review at this version, and it states plainly that it is "based on no new data"
(page 6). All brightness and size figures are derived by linear scaling from a single
comparison satellite class (Starlink V2 Mini), assuming a mitigation level equivalent to
Starlink's already-implemented visors; the paper flags that structures without comparable
mitigation would be brighter than its computed range, and that the reflective behavior of
an untested kilometre-scale structure with struts, joints, and a spacecraft bus, not just
flat panels, is only approximated by a simple area-ratio scaling. Altitude is treated
inconsistently between sections (500 km in the geometry derivation on page 2, 550 km in the
angular-size calculation on pages 4 to 5 and again in the conclusions), so the reported
90-minute visibility window and 0.42-degree angular size are not drawn from one
self-consistent altitude. The 5 GW array-sizing calculation assumes a fixed 25 percent
photovoltaic efficiency and does not address alternative array geometries or lighter
concentrator designs that could change area for a given power output. The collision-risk
section relies on a single debris-population citation (ESA 2025) and simplified
relative-velocity and impact-energy arithmetic, without a full orbital-debris propagation
model or collision-probability estimate for the constellation sizes named earlier in the
paper (up to about one million satellites in SpaceX's filing). The paper does not attempt
to quantify economic cost, power delivered, data throughput, or any other dimension of
orbital-compute viability; its scope is limited to sky brightness, sky occultation, and
collision and debris hazard, narrower than the demand and venture context it opens with.

### Topic mapping

FA7. This paper is a companion to Source list entry 6 (Turyshev 2026) as the second
peer-reviewed orbital-data-center source in this review, but its own contribution sits
almost entirely outside FA7's demand-and-value-capture question. It cites the same class
of demand-driver figures used elsewhere in FA7 (U.S. data-centre power demand beyond 100 GW
by 2035, global AI demand toward 1 terawatt, page 1) and names the same proposal landscape
(SpaceX's roughly one-million-satellite FCC filing at 100 GW of AI compute capacity per
year, Starcloud's 88,000-satellite filing, Blue Origin's 51,600-satellite filing, Google's
Project Suncatcher, and China's Adaspace, pages 2 to 3), but treats all of this purely as
motivation for an astronomical impact study, not as evidence bearing on economic viability
or demand durability. Sub-Q 1. For the question of whether orbital compute is a viable,
durable external demand sink, this paper's relevance is indirect: it identifies a
non-economic constraint category, astronomical, regulatory, and cultural objection, that
sits alongside the mass-based and cost-based constraints Turyshev derives, and it implies
that near-Moon-sized, near-Venus-brightness structures visible for roughly six hours daily
worldwide could generate policy or public pushback independent of whether the underlying
economics close. The paper's headline quantitative result, magnitude about -5.5 to -7.0,
angular diameter about 0.4 degrees, and roughly six hours of daily visibility for
kilometre-scale Sun-synchronous data-centre arrays (pages 1, 4 to 6), is a sky-impact
finding, not a demand or cost figure, and should not be read into FA7's economics
discussion beyond noting it as a distinct, non-financial risk factor attached to the same
proposed hardware.
