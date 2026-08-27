# Orbital Data Centers: Spacecraft Constraints and Economic Viability

## Citation

Turyshev, S. G. (2026). Orbital data centers: Spacecraft constraints and economic
viability (preprint, dated May 1, 2026). Jet Propulsion Laboratory, California Institute
of Technology. arXiv:2604.27197 [physics.gen-ph]. https://arxiv.org/abs/2604.27197

Publisher URL: none in source. This is an arXiv preprint, not a journal article. The
arXiv identifier and submission date (arXiv:2604.27197v1, category physics.gen-ph, 29 Apr
2026) were decoded from the rotated page-margin banner text embedded in the extracted
page 1 text; the in-document dateline separately states "(Dated: May 1, 2026)." No
peer-reviewed venue, DOI, or publisher imprint is given anywhere in the document.

## Abstract

This paper asks whether a cluster of solar-powered orbital data-center (ODC) nodes can be economically competitive with terrestrial data centers once every physical constraint is closed at once: photovoltaic generation, eclipse recharge, radiator heat rejection, sustained space-to-ground bandwidth, utilization, and node replacement over a finite operating life. It builds necessary viability conditions around delivered IT electrical power, mass per delivered kilowatt (kg/kW), a communication-intensity ratio of downlinked data to IT energy consumed, a ceiling on that ratio set by downlink physics, effective utilization, and a lifetime penalty factor. Working a representative 1 MW, high-sunlight node, the base case needs roughly 5,640 square meters of beginning-of-life photovoltaic area and about 2,500 square meters of radiator area, putting combined photovoltaic-storage-radiator mass at 29.4 kg/kW before fixed spacecraft mass pushes the total to 34-59 kg/kW. At around 40 kg/kW, matching a terrestrial infrastructure cost benchmark of $10,000-40,000/kW leaves only $250-1,000/kg of headroom for combined launch and spacecraft-build cost, before communications, operations, utilization, and lifetime costs are even subtracted -- a headroom 3.4 to 13.5 times below today's public Falcon 9 dedicated-launch price per kilogram, with spacecraft build cost not yet counted. The paper's conclusion is regime-specific: space-native preprocessing and communications-integrated edge compute look achievable in the near term, but general-purpose compute serving terrestrial users only pencils out under a demanding combination of low communication intensity, high utilization, long node lifetime, and very low combined launch-and-build cost.

## Summary

### Background and objective

The paper opens from a terrestrial data-center demand trend: recent United States
assessments put data-center electricity use at 176 terawatt-hours per year in 2023, with
projections of 325 to 580 terawatt-hours per year by 2028, corresponding to an average
load rising from about 20.1 GW to 37.1 to 66.2 GW. Reliability assessments identify data
centers as material adequacy and deliverability drivers for the bulk power system, and
the paper stresses that the binding constraint on terrestrial expansion is usually
interconnection, transmission, firm capacity, and equipment lead time rather than gross
annual energy availability. This terrestrial calibration is explicitly flagged as a
United States-context benchmark; applying it elsewhere requires local values for
deliverability, terrestrial infrastructure cost, electricity price, and permitting delay.

Against that backdrop, the paper frames orbital data centers as having moved from
conceptual energy arguments to explicit spacecraft-system proposals, citing public
studies and filings including a solar-powered compute-constellation study, a European
Space Policy Institute and Technical University of Munich gigawatt-class cost analysis, a
SpaceX filing with the United States Federal Communications Commission, a NASA
commercial relay-services program, Starlink's published optical inter-satellite-link
architecture, and NVIDIA space-computing hardware announcements. The stated objective is
to determine whether the substituted orbital constraint set (power, thermal,
communications, and lifetime) is more favorable than the terrestrial one for a specified
workload and service level, and to derive a cluster-level viability condition that maps
delivered IT power into deployed mass per kilowatt, admissible space-to-ground data per
unit compute energy, and delivered compute-years over finite mission life.

### Methods and scope

The author models an orbital data center as a set of independently deployable "nodes,"
each delivering a specified end-of-life IT electrical power at a given utilization over
an operational lifetime, with a strict node boundary covering photovoltaics, eclipse
storage, power conditioning, thermal transport and radiators, attitude control,
propulsion, communications terminals, avionics, structure, shielding margin, and compute
packaging. The system is decomposed into physical, operational, and lifecycle
architecture layers, and workloads are classified into three regimes: C1, space-native
processing that reduces the volume of data sent to Earth or enables local action; C2,
communications-integrated edge compute hosted inside a relay or broadband constellation
that already carries pointing, gateway, and operations overhead; and C3, terrestrial-user
general compute, where the orbital system competes directly with terrestrial data
centers for workloads whose users and storage are on Earth. C3 is treated as the stress
case because it alone must satisfy the full joint condition without a location-value
credit, and it is the regime most relevant to FA7's question of a durable external demand
sink.

The paper derives first-principles subsystem sizing relations: photovoltaic area and
mass from an orbit-averaged sunlit power balance including eclipse recharge losses;
battery mass from usable end-of-life capacity, depth-of-discharge, and cycle-life
penalties; and radiator area from a Stefan-Boltzmann relation net of absorbed
environmental heat flux, with radiator area scaling as the inverse fourth power of
radiator temperature. These combine into a mass-per-delivered-kilowatt metric, m_kW,
expressed as the sum of photovoltaic, battery, radiator, and fixed-spacecraft-mass
contributions. A separate section develops a sustained space-to-ground communications
ceiling from duty-cycle-limited optical downlink physics (geometric visibility, weather
availability, scheduling contention among satellites sharing finite ground sites, and
protocol overhead), expressed through a communication-intensity metric (bits of
space-to-ground data per joule of IT energy consumed) and its ceiling value. A further
section propagates radiation environment, single-event-effect-driven utilization
penalties, permanent-node-loss hazard rates, and technology obsolescence into a lifetime
penalty factor and delivered compute-years. The paper closes with an economics section
that defines a capital-cost benchmark (combined launch-plus-build cost per kilogram,
multiplied by mass per delivered kilowatt, plus allocated communications and operations
cost) compared against a terrestrial infrastructure cost benchmark, plus a levelized
cost-per-delivered-IT-energy form. All numeric results are anchored to a representative
1 MW node example, evaluated at both an idealized "physics floor" and a more realistic
"base case" with explicit non-ideal efficiency and end-of-life factors. The paper reports
no new hardware testing; it is a physics-and-economics derivation exercise built from
published subsystem technology ranges (Table V) and reference architecture mass budgets
(Tables VI and VII), not a specific mission design.

### Key findings

**Terrestrial demand basis (context for the addressable market).** United States
data-center electricity use is stated at 176 TWh/yr in 2023, projected to 325 to 580
TWh/yr by 2028, implying an average-load increase of 17.0 to 46.1 GW over that window and
a five-year delivery ramp of 3.4 to 9.2 GW per year. At a utilization factor of 0.5, the
2028 high case corresponds to about 132.4 GW of nameplate-equivalent provisioned power.
Applying the paper's node-to-power translation (Table III), meeting the full 17.0 to 46.1
GW increment would require 170,000 to 461,000 active 100 kW compute nodes, or 17,000 to
46,100 active 1 MW compute nodes, before reserve, gateway, and replacement margin are
added. The paper treats this as a scale-of-market indicator rather than a demand forecast
for orbital compute specifically; it does not attempt to estimate what share of this
terrestrial growth an ODC industry could plausibly capture.

**Subsystem physics floor for a 1 MW node (spacecraft constraint set).** For a
representative 1 MW node in a high-sunlight orbit, the base-case design point (Table X,
including explicit power-conditioning, battery round-trip, end-of-life photovoltaic and
battery derating, and absorbed-environmental-heat factors) requires beginning-of-life
photovoltaic area of about 5.64x10^3 square meters, radiator area of about 2.50x10^3
square meters, and a combined photovoltaic-plus-battery-plus-radiator mass fraction of
29.4 kg/kW. An idealized "physics floor" case (no eclipse, no environmental heat load,
unity efficiencies) understates this by about one-third, giving only 22.8 kg/kW; the
paper states explicitly that the base case, not the floor, should control any economic
conclusion. Adding fixed spacecraft mass (structure and deployment, attitude control,
avionics, propulsion, communications terminals, compute packaging and thermal transport,
shielding margin, and growth/qualification margin, Table VI) raises total mass per
delivered kilowatt to 34 to 59 kg/kW for a monolithic 1 MW node, and to a comparable 7 to
40 kg/kW range of fixed-mass contribution alone for a modular 100 kW node design point. A
worked distributed-cluster anchor (Table VII: twenty 100 kW compute nodes plus four
gateway nodes) gives a cluster-averaged fixed-mass subtotal of about 20 kg/kW on top of
the subsystem floor, for an illustrative cluster total near 49 kg/kW.

**Governing spacecraft constraints.** Photovoltaic mass contribution scales inversely
with deployed photovoltaic specific power (30 to 165 W/kg technology range cited from a
NASA small-spacecraft survey); radiator area scales as the inverse fourth power of
radiator operating temperature (300 to 400 K range, limited by semiconductor
junction-temperature and thermal-transport constraints), and is inflated by 25 percent at
an absorbed-environmental-heat fraction of 0.2 and by 67 percent at a fraction of 0.4.
Eclipse recharge burden depends on orbit geometry: a dawn-dusk sun-synchronous low-Earth
orbit can approach continuous sunlight (eclipse fraction near zero), suppressing the
battery term, while a mid-inclination low-Earth orbit has an eclipse duration up to about
35.6 minutes per orbit. Five-year total ionizing dose brackets by orbit (Table IX,
described as illustrative design brackets rather than mission-specific outputs) range
from about 3 to 6 krad(Si) for a 550 km mid-inclination low-Earth orbit up to about 20 to
30 krad(Si) at geostationary orbit.

**Communications ceiling (the binding constraint for Earth-serving workloads).** Peak
optical downlink demonstrations reach the 100 to 200 Gb/s class, but sustained,
duty-cycle-limited average throughput is far lower once geometric visibility, weather
availability, ground-scheduling contention, and protocol overhead are applied; a
representative worked example gives sustained average downlink of about 7.0 to 13.9 Gb/s
per node depending on ground-site count. Expressed as the paper's communication-intensity
ceiling (space-to-ground data per unit IT energy, Table VIII, for a representative
comm configuration with 200 Gb/s peak rate and 0.8 utilization), the ceiling is about 148
GB per kWh of IT energy at 0.1 MW node power, falling to 14.8 GB/kWh at 1 MW, and to only
1.48 GB/kWh at 10 MW, because the ceiling scales inversely with delivered IT power unless
communications capacity is scaled proportionally. This is presented as a hard workload
filter: interactive or storage-coupled services with large bidirectional data needs are
structurally excluded, while compute-dense, delay-tolerant workloads with pre-positioned
datasets can fit beneath the ceiling.

**Lifetime, radiation, and delivered compute-years.** The paper introduces a lifetime
penalty factor that multiplies effective delivered-cost relative to an "immortal" node.
Worked examples give a penalty of about 1.27 for a permanent-loss hazard rate of 0.10 per
year over a 5-year mission, and about 1.58 for a hazard rate of 0.20 per year over the
same lifetime; adding a technology-obsolescence term (an assumed 0.20 per year
performance-per-watt improvement rate on Earth) raises the combined penalty to about
1.93. In levelized-cost terms, the paper states this means a node close to capital-cost
break-even can see its delivered cost pushed 27 to 58 percent higher purely from lifetime
and replacement-cadence effects, before any additional utilization loss is counted.

**Economic viability result (headline number for FA7).** The paper's central
capital-cost discriminator is: combined launch-plus-spacecraft-build cost per kilogram,
multiplied by mass per delivered kilowatt, plus allocated space-to-ground communications
cost and operations cost, must not exceed the terrestrial infrastructure benchmark. Using
an industry-cited terrestrial artificial-intelligence-ready facility and infrastructure
cost range of about 10,000 to 40,000 dollars per kW (10 to 40 million dollars per MW,
excluding chip and server capital), and the paper's own base-case mass-per-power figure
of about 40 kg/kW, the allowable combined launch-plus-build cost is only 250 to 1,000
dollars per kg, before space-to-ground link, operations, utilization, or lifetime terms
are subtracted from that allowance. The paper compares this directly to a stated current
public Falcon 9 dedicated low-Earth-orbit launch price of 74 million dollars for up to
22,000 kg, equal to about 3,360 dollars per kg for launch alone (page 27 of the source),
placing the allowable combined budget a factor of 3.4 to 13.5 below that published
launch-price benchmark alone, before any spacecraft-build cost is added on top. The paper
also states that every additional 1,000 dollars per kW of communications or operations
burden reduces the allowable combined launch-plus-build cost by about 25 dollars per kg
at this 40 kg/kW mass-per-power level. A separate relay-service breakeven example gives
an illustrative purchased-bandwidth breakeven price near 0.95 cents per gigabyte (derived
from a dedicated-ground-site cost of 10,000 dollars per kW, a 10 percent capital recovery
factor, 0.8 utilization, and 15 GB/kWh of IT energy communication intensity), below which
purchasing relay service is stated to beat building dedicated optical ground
infrastructure for low-intensity or bursty workloads.

**Demand basis and addressable volume, as stated by the author.** The paper does not
provide a standalone dollar-denominated addressable-market estimate for orbital compute
specifically; its demand-side numbers (176 TWh in 2023, 325 to 580 TWh by 2028, and the
associated 17.0 to 46.1 GW average-load increment) describe the terrestrial data-center
market that ODCs would need to displace or supplement, not a projected orbital-compute
order book. The paper explicitly frames the 1 MW and 100 kW node-power cases as "analytic
power anchors," not claims about current flight-qualified node classes or committed
deployment plans, and frames the fleet-scale node counts in Table III as a lower bound
that excludes reserve, gateway, and replacement spacecraft.

**Author's overall verdict.** The stated conclusion is that orbital data centers are
technically feasible spacecraft systems but are not automatically competitive substitutes
for terrestrial data centers. The governing issue is not solar-energy access in orbit but
simultaneous closure of mass per delivered kilowatt, radiative heat rejection, sustained
space-to-ground throughput, effective utilization, lifetime and replacement, and
space-to-ground communications cost. For C3 (terrestrial-user general compute, the
regime FA7 cares about as an external demand sink), the paper's explicit verdict is that
it "is not a generally closed replacement for terrestrial data centers under the baseline
assumptions," becoming credible only under a joint combination of low mass per delivered
kilowatt, low external communication intensity, high effective utilization, long
delivered lifetime, and very low combined launch-and-build cost. By contrast, the paper
states that C1 (space-native processing) and C2 (communications-integrated edge compute)
are credible near-term regimes because they each relax a different term in the joint
condition (reduced downlink volume for C1; shared fixed mass, gateway, and operations
cost for C2) rather than needing the full stringent condition to close simultaneously.

### Limitations

The author repeatedly characterizes the model as a necessary-condition, architecture-level
screening tool rather than a mission design or a point cost forecast; it determines
whether a proposed architecture lies in a physically and economically admissible region,
not what a specific hardware program would cost. The five-year total-ionizing-dose
brackets in Table IX are explicitly labeled "illustrative" and "surrogate design
brackets," drawn from literature dose-depth examples rather than project-specific
AE9/AP9-IRENE radiation-environment runs; the author states a mission study would need to
replace them with percentile-specific, solar-cycle-phased analysis. The terrestrial
comparison is explicitly flagged as a United States-context benchmark (built from LBNL
and NERC data and a Falcon 9 published price sheet); applying the framework elsewhere
requires substituting local deliverability, electricity price, permitting delay, and
terrestrial infrastructure cost values. The terrestrial infrastructure cost range itself
(10,000 to 40,000 dollars per kW) is a wide, industry-guide-sourced band rather than a
single calibrated figure, and the paper explicitly limits its terrestrial-side comparison
to the infrastructure increment (power, cooling, buildings, site electrical), excluding
accelerator and server capital cost, which it treats as common-mode across the
comparison and therefore out of scope for the orbital-versus-terrestrial discriminator.
Node-power anchors of 100 kW and 1 MW are stated to be analytic scaling anchors rather
than claims about current or planned flight hardware, and the fixed-mass budget ranges in
Tables VI and VII are described as unoptimized, mid-band illustrations rather than a
specific vendor design. The paper relies on published third-party claims (a Google study,
a SpaceX FCC filing, an NVIDIA announcement, an ESPI/TUM report, and a Starlink progress
report) for the current state of proposed ODC architectures, and it explicitly cautions
that Starlink's published optical capability is described as an inter-satellite-link
mesh, not necessarily a direct optical space-to-ground service available to third-party
ODC payloads. The paper does not model bottom-up compute-chip architecture, does not
report new hardware test data, and does not attempt to quantify what fraction of
terrestrial data-center demand growth might realistically shift to orbit under its
viability condition; it supplies the physical and economic screening test rather than a
market-share projection.

### Topic mapping

FA7. Source list entry 6. Sub-Q 1. This is the paper most directly relevant to FA7's
question of whether orbital compute is a genuinely new, external, Earth-facing demand
sink rather than a mass-export commodity. It supplies a directly stated economic-viability
result (at about 40 kg/kW deployed mass per delivered kilowatt, a 10,000 to 40,000
dollars-per-kW terrestrial infrastructure benchmark allows only 250 to 1,000 dollars per
kg for combined launch-plus-spacecraft-build cost, a factor of 3.4 to 13.5 below the
current public Falcon 9 launch-price benchmark alone), an explicit spacecraft constraint
set governing feasibility (photovoltaic and radiator sizing, eclipse recharge, a
communications ceiling that falls from about 14.8 GB/kWh at 1 MW to 1.48 GB/kWh at 10 MW
of node power, and a lifetime penalty of 1.27 to 1.93 depending on hazard rate and
obsolescence assumptions), a terrestrial demand basis describing the market ODCs would
need to enter (176 TWh in 2023 rising to 325 to 580 TWh by 2028) without a dedicated
orbital-compute market-share estimate, and an explicit, narrow, conditional verdict that
terrestrial-user general compute is not a generally closed substitute for terrestrial data
centers under baseline assumptions, becoming credible only under a joint low-mass,
low-communication-intensity, high-utilization, long-life, very-low-launch-cost regime,
while space-native processing and communications-integrated edge compute are identified
as the credible near-term regimes instead.
