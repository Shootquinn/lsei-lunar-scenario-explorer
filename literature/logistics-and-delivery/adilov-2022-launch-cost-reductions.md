# An Analysis of Launch Cost Reductions for Low Earth Orbit Satellites

## Citation

Adilov, N., Alexander, P., Cunningham, B., & Albertson, N. (2022). An analysis of launch
cost reductions for low Earth orbit satellites. Economics Bulletin, 42(3), 1561-1574.
http://www.accessecon.com/Pubs/EB/2022/Volume42/EB-22-V42-I3-P130.pdf

No DOI is printed anywhere in the extracted text (title page, running header, or reference
list); the link above is the publisher's own hosted PDF, confirmed via the AccessEcon
Economics Bulletin archive, and is used here as the stable identifier.

Publisher URL: http://www.accessecon.com/Pubs/EB/2022/Volume42/EB-22-V42-I3-P130.pdf

## Abstract

An econometric study of 2,787 low Earth orbit (LEO) satellites launched from 2000 to 2020,
combining Union of Concerned Scientists launch records with per kilogram launch vehicle cost
data to estimate a time trend in average launch prices. The paper reports that average per
kilogram launch cost fell 5.5% per year unadjusted and 4.4% per year after adjusting for
launch altitude, with faster declines for commercial satellites than non-commercial ones and
still faster declines in per satellite cost due to shrinking satellite mass. The authors
project, on current trend, when average per kilogram launch costs will cross $1,000 and $100.

## Summary

### Background and objective

The paper opens by noting that the number of active LEO satellites grew from 827 in 2006 to
4,550 in 2021 (citing Union of Concerned Scientists, UCS, data), and attributes part of this
growth to falling manufacturing and launch costs, alongside increased competition, in-house
production, and reusable rockets (citing Jones, 2018). Launch cost is described as typically
the second largest cost category for satellite operators after satellite manufacturing, and
the paper cites Bryce Tech data (its Figure 1) showing global satellite manufacturing revenue
running two to three times commercial launch revenue. The authors motivate the study by
noting that detailed launch cost data are not publicly available: launchers post list prices,
but actual contracts are private, and government launch costs are difficult to establish. They
argue that average launch prices, rather than the lowest posted prices, better reflect the
economic pressures facing a typical satellite operator, since price dispersion arises from
differentiated launch services and mission specific preferences over launch date, vehicle
suitability, and reliability.

The authors situate their work against two prior benchmark estimates. Futron (2002) is
reported to show geostationary orbit launch prices declining from $18,158 per pound in 1990
to $11,729 per pound in 2000 (2000 US dollars), equivalent to a 4.3% annual decrease. Jones
(2018) is reported to find a 40 fold decrease in launch cost per kilogram between the Space
Shuttle in 1981 and the Falcon Heavy in 2018, equivalent to a 9.5% annual decrease; the
authors argue this vehicle to vehicle comparison likely overstates the true industry wide
rate because the Falcon Heavy was the cheapest 2018 vehicle while the Shuttle was not the
cheapest 1981 vehicle. The stated objective is to use a granular, multi vehicle dataset of
2,787 LEO satellites with cost per kilogram estimates to estimate aggregate trends in launch
cost from 2000 to 2020, compare commercial and non-commercial satellites, and project when
average per kilogram launch costs will fall below $1,000 and $100.

### Methods and scope

Launch records (launch year, orbit, mass, launch vehicle, and commercial or non-commercial
status) come from the UCS Satellite Database, drawing on 41 database snapshots dated between
November 2005 and January 2021. The analysis is restricted to satellites in LEO, defined here
as altitudes between 200 and 2,000 km, over 2000 to 2020; the authors note that some pre-2006
LEO launches may be missing from the UCS data. Non-commercial satellites include military,
government, and civil use satellites (some satellites are counted as both commercial and
non-commercial). Per kilogram launch vehicle cost data are drawn from the Aerospace Security
Project (Roberts, 2020), the Government Accountability Office (GAO, 2017), and news articles;
these sources give one average per kilogram cost per launch vehicle, so every satellite
launched on a given vehicle in the dataset is assigned that vehicle's cost, and within vehicle
contract variation is not observed. All costs are converted to real 2020 US dollars using the
Federal Reserve's implicit price deflator series. Of 3,207 LEO satellites identified as
launched between 2000 and 2020, cost and mass data are available for 2,787, or 86.9%; the
missing 13.1% reflects launch vehicles without cost data and satellites deployed from the
International Space Station.

The core specification is a trend equation, COST = alpha times (1 minus gamma) to the power
t times ALT to the power beta times an error term, where t is a year index (t = 1 for 2000)
and gamma is the annual rate of cost reduction (gamma = 0.05 implies a 5% per year decline,
all else equal). A logarithmic transform is estimated by Newey-West regression (lag m = 2) on
21 annual observations (2000 through 2020), using either the average per kilogram cost or the
average per satellite cost as the dependent variable, run separately for all satellites,
commercial satellites, and non-commercial satellites, and estimated both with and without the
altitude regressor ALT. This yields twelve year-level regressions (models 1 through 12,
reported in Table 1 for per kilogram cost and Table 2 for per satellite cost). A second set of
regressions (models 13 through 19, Table A5 in the appendix) is estimated on the underlying
2,787 satellite-level observations rather than annual averages, as weighted regressions with
robust standard errors, run for all satellites, commercial satellites, non-commercial
satellites, and four mass bins: above 1,000 kg (n=187), 100 to 1,000 kg (n=1,533), 10 to 100 kg
(n=273), and below 10 kg (n=794). Finally, the estimated altitude-adjusted annual decline rate
and its 95% confidence interval are used to project forward per kilogram cost trajectories at
five candidate annual decline rates (1%, 2.8%, 4.4%, 6.1%, and 9%) to identify the calendar
year each rate would cross $1,000 and $100 per kilogram (Figure 4). Throughout, the independent
variable driving the cost trend is calendar time (year), not cumulative launched mass, launch
count, or cumulative production; the model is a time-trend regression rather than a Wright's
law cumulative-doubling learning curve.

### Key findings

**Year-level average-cost regressions (models 1-12, n=21 annual observations, 2000-2020).**
The average per kilogram launch cost across all LEO satellites declined at a 5.5% annual rate
without an altitude adjustment (model 1) and at a 4.4% annual rate after adjusting for launch
altitude (model 2); the paper reports a 95% confidence interval of 2.8% to 6.1% for this
altitude-adjusted rate. Split by satellite type, the altitude-adjusted annual decline was 7.5%
for commercial satellites (model 4) and 3.6% for non-commercial satellites (model 6). Using
average per satellite cost (mass times per kilogram cost) as the dependent variable instead,
the pooled annual decline was 13% unadjusted (model 7) and 10.4% altitude-adjusted (model 8);
for commercial satellites alone the altitude-adjusted per satellite decline was 10.3% (model
10), and for non-commercial satellites, 8.0% (model 12). The authors attribute roughly the
entire six percentage point gap between the per kilogram rate (model 2, 4.4%) and the per
satellite rate (model 8, 10.4%) to declining average satellite mass over the period. The
altitude variable ALT was statistically significant (5% or 10% level) in only two of the twelve
year-level regressions (models 2 and 10), which the authors read as evidence that altitude,
while included as a control, is not the primary driver of the observed cost decline; excluding
ALT generally raised the estimated magnitude of the decline by about one percentage point.

**Satellite-level regressions (models 13-19, n=2,787 individual satellites).** Estimated on
individual satellite records rather than annual averages, the altitude-adjusted per kilogram
cost decline was 8.2% per year for all satellites, 12.2% per year for commercial satellites,
and 5.0% per year for non-commercial satellites, all steeper than the corresponding year-level
average-cost estimates; the authors suggest this gap arises because the average launch price
in a given year differs from the price actually faced by a typical individual satellite. Split
by mass bin, satellites between 100 and 1,000 kg (55% of the dataset) showed the steepest
altitude-adjusted decline, 10.7% per year, while satellites outside that mass range declined at
roughly 3% per year (the bin-specific t coefficients in Table A5 correspond to about 2.6% per
year above 1,000 kg, 3.4% per year for 10 to 100 kg, and 2.7% per year below 10 kg). The
authors caution that the model explains only a small share of cost variation for the largest
and smallest mass bins, with R-squared of 0.075 (above 1,000 kg) and 0.031 (below 10 kg),
compared with 0.516 for the 100 to 1,000 kg bin.

**Cost and mass levels.** In 2020, the mass-weighted average per kilogram launch cost was
$10,313 for non-commercial satellites versus $4,092 for commercial satellites (Table A2). The
average 2020 satellite mass was 467 kg for non-commercial satellites versus 220 kg for
commercial satellites (a footnote adds that OneWeb's constellation satellites are 146 kg and
Starlink's are 223 or 260 kg). Because both per kilogram cost and average satellite mass fell
over 2000-2020, average per satellite launch cost fell faster still: by a factor of 16.5 for
commercial satellites and 7.7 for non-commercial satellites over the period. The average
altitude of newly launched LEO satellites is reported to have declined substantially since
2010, with satellites launched since 2015 averaging 500 to 600 km.

**Drivers.** Beyond the regression framework, the paper attributes falling launch costs
qualitatively to increased competition, in-house production, and reusable rockets (citing
Jones, 2018). It attributes the faster decline for commercial satellites to stronger market
pressure to cut costs, since commercial operators exist to generate profit while government
satellites are built to a specific mission; government satellites also face restricted launch
vehicle choice for national security or legal reasons requiring domestic launchers, and may be
subject to different project oversight (citing Thomas, Snow, and Connelly, 2007).

**Projections (Figure 4, Section 4).** At the central altitude-adjusted rate of 4.4% per year,
average per kilogram launch cost to LEO is projected to fall below $1,000 by 2055, with a range
of 2045 to 2076 corresponding to the 2.8% to 6.1% confidence interval. At a 9% annual decline
rate, the $1,000 threshold would be reached by 2037. The $100 per kilogram threshold is
projected for 2106 at the 4.4% central rate, or as early as 2082 at the 6.1% rate. The authors
note these are projections of the average, not the minimum, launch cost, and that individual
launch vehicles could cross these thresholds well before the average does. As context (not as
the paper's own estimate), the authors compare SpaceX's public Starship cost claims: at a
quoted marginal cost of $10 million per launch and 100 metric tons to LEO, Starship would
correspond to $100 per kilogram (citing Maidenberg, 2022; the $100 per kilogram figure is the
paper's own calculation from that quote); a more skeptical estimate of $150 million to $250
million per launch (citing Berger, 2022) would instead put Starship near $1,500 per kilogram at
$150 million, close to Falcon Heavy's per unit price.

**Framing relative to a learning curve.** The paper's trend equation is specified in calendar
time (year index t), not in cumulative launched payload, cumulative launch count, or cumulative
production, so it is a time-trend regression rather than a Wright's law cumulative-doubling
learning curve. No cost-reduction-per-doubling-of-cumulative-payload figure is computed or
reported anywhere in the text; the paper's own vocabulary for gamma is "the rate of
technological change that reduces launch costs," expressed strictly as an annual percentage.
The values that most directly answer a per-doubling learning-curve question, and that are
absent here, would require pairing the annual cost decline with the annual growth rate (and
implied doubling time) of cumulative launched mass or launch count; the paper does not report
cumulative payload or launch counts in a form that would support that derivation, so no such
rate is given or derivable from this source. The paper's own headline decline rates are the
4.4% (altitude-adjusted, all satellites, year-level) and 10.7% (100-1,000 kg mass bin,
altitude-adjusted, satellite-level) figures above, both expressed per calendar year.

### Limitations

The underlying cost data are vehicle-level averages, not observed per-satellite contract
prices; every satellite launched on a given vehicle is assigned that vehicle's single average
per kilogram cost, so within-vehicle price variation across individual contracts is not
captured. Cost and mass data are available for 86.9% of the 3,207 LEO satellites identified
(2,787 satellites), with gaps for certain launch vehicles and for satellites deployed from the
International Space Station. The altitude regressor ALT is statistically significant in only
two of the twelve year-level regressions, so its role as a cost driver is uncertain by the
paper's own account. The satellite-level regressions for satellites above 1,000 kg and below 10
kg explain relatively little of the variation in cost (R-squared 0.075 and 0.031 respectively),
so the mass-bin decline rates for those two categories should be read with more caution than
the 100 to 1,000 kg estimate (R-squared 0.516). The UCS dataset may be missing some LEO launches
prior to 2006. The forward projections explicitly assume that current cost trends persist and
are described by the authors as conditional on that assumption, not as a forecast accounting
for other future developments. The model is a calendar-time trend, not a cumulative-production
learning curve, so it does not yield, and cannot be used to derive without additional data on
cumulative launched mass or launch counts, a cost-reduction-per-doubling-of-cumulative-output
rate.

### Topic mapping

FA7. FA2, FA5. Source list entry 8. Sub-Q 2. This source is the primary import-parity
reference for FA7: it establishes Earth's LEO delivered launch price as a moving ceiling,
reporting a 4.4% annual (altitude-adjusted, all satellites) to 12.2% annual (altitude-adjusted,
commercial, satellite-level) decline in per kilogram launch cost over 2000-2020, with a steeper
10.7% annual decline for the 100 to 1,000 kg mass bin that dominates the modern dataset, and
levels of $4,092 per kilogram (commercial) and $10,313 per kilogram (non-commercial) in 2020.
The paper's own projection that average per kilogram cost crosses $1,000 by 2055 (range 2045 to
2076) and $100 by 2106 (as early as 2082) gives FA7 a time-bounded ceiling trajectory against
which any lunar-derived product's landed cost must compete. The rate is explicitly a
calendar-time trend, not a Wright's law cost-per-doubling-of-cumulative-payload rate; FA7 users
wanting the latter should treat that as absent from this source rather than infer it from the
annual rates given here. Drivers named are competition, in-house production, and reusable
rockets, plus (specific to this paper) declining average satellite mass as a distinct
contributor to per-satellite (as opposed to per kilogram) cost decline. This also serves FA2
(commercial launch market structure and commercial versus government cost and behavior
differences) and FA5 (mass-to-orbit cost benchmarks usable alongside cislunar transport cost
modeling).
