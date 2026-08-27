# Review of Automated Operations in Drilling and Mining

## Citation

Kokkinis, A., Frantzis, T., Skordis, K., Nikolakopoulos, G., & Koustoumpardis, P. (2024). Review of
automated operations in drilling and mining. *Machines*, 12(12), 845.
https://doi.org/10.3390/machines12120845

Publisher URL: https://doi.org/10.3390/machines12120845

## Abstract

Narrative literature review, organized around a topic-to-reference mapping table rather than a
stated systematic search protocol, surveying conventional drilling methods and the current and
emerging automation technologies applied to drilling and mining: rotary steerable drilling systems,
longwall systems, automated hauling (scrapers and haulage trucks), explosive-charging robots,
intelligent rock-drilling jumbos, sensing (LIBS, LiDAR, time-of-flight), localization and
communication systems, digital-twin software suites, and collaborative multi-robot fleets. States
its purpose as defining a vision toward fully autonomous, smaller, distributed, cooperative mining
exploration machines able to operate without pre-existing infrastructure, motivated by the trend
toward deeper ore bodies, reopening of abandoned mines, net-zero policy pressure, and worker
health and safety. Reports a small number of quantitative performance figures drawn from individual
cited studies (mostly reinforcement-learning control and scheduling work, several in simulation)
rather than from the review's own measurements, and concludes that infrastructure-less,
standardized, and safety-mature automation remains an open research target rather than a deployed
reality.

## Summary

### Background and objective

The paper opens from the premise that traditional, human-operated methods of ore extraction cannot
keep pace with rising production demand because they carry high downtime and expose personnel to
hazardous conditions, and because human-curated processes are less efficient environmentally. It
cites the collapse of rock in mines as one of the common causes of fatal mining accidents (page 6,
citing reference 1) as a specific motivation for removing workers from active extraction sites.
Additional pressures named are the declining grade of surface ores, which pushes extraction to
greater depths; increasing interest in reopening abandoned mines; net-zero emissions policy, which
is pushing mining companies toward different equipment and more effective mining methods; and
worker protection from dust, poor lighting, and rock-tumbling hazards.

Against this background, the authors state the review's objective as providing "an overview of
research trends and state-of-the-art technologies in face exploration and drilling operations" in
order to define a vision toward fully autonomous mining exploration machines that can operate
without any external infrastructure. The review explicitly scopes itself to fully autonomous,
smaller, and cooperative mining machines, rather than to mining automation in general, and states
its intended contribution as informing future development of such machines, particularly for
near-to-face exploration in deep and abandoned mines. The review's organizing device is a single
table (Table 1, pages 2 to 3) that maps eight topic categories, drilling approaches; automated
mining intelligent machines; sensors used in automated mining; localization systems; communication
systems; digital twin and software tools; collaborative robotics; and research on intelligent
mining machines, to the reference numbers addressing each. No search databases, search strings,
date ranges, or inclusion and exclusion criteria are stated anywhere in the text; the review reads
as a narrative synthesis structured by topic rather than a systematic review with a documented
protocol.

### Methods and scope

The review has eight numbered sections. Section 3 first establishes a baseline of conventional
drilling techniques used historically and currently in mining: cable tool drilling (a bit dropped
under gravity to fracture rock, with fragments retrieved by a bailer); auger drilling (a
screw-like bit whose helical flight forces fragments to the surface without drilling mud); rotary
drilling (a motor-driven, mud-assisted rotating bit); diamond drilling (rotary drilling using a
metallic matrix bit embedded with synthetic diamonds for continuous cylindrical core recovery); and
directional drilling, implemented via whipstock, bent-housing positive-displacement-motor, or
bent-sub configurations to steer the borehole at a controlled angle.

Section 4 covers automated mining and intelligent machines built on top of these drilling
principles: rotary steerable drilling systems (RSDS), which can change trajectory mid-operation and
are divided into push-the-bit, point-the-bit, and hybrid actuation types, illustrated with named
commercial systems (Schlumberger PowerDrive, Baker-Hughes Autotrak, Halliburton Sperry-sun
Geo-Pilot, Schlumberger PowerDrive Archer); longwall systems, which combine drilling and hauling via
conveyor belts and multiple horizontal drilling motors, illustrated by Famur's MIKRUS system;
automated hauling by robotic haulers ("scrapers") and larger-capacity automatic mining trucks;
explosive-charging robots that replace human handling of explosives; and intelligent rock-drilling
jumbos and down-the-hole (DTH) drills with automated blockage prevention, automated drill-pipe
banking, and anti-deviation control.

Section 5 covers the technological infrastructure underpinning these machines: sensing technologies
(Laser-Induced Breakdown Spectroscopy, LIBS, for core-content analysis; LiDAR for mapping and SLAM-
based navigation; time-of-flight cameras and sensors for local planning); localization and
communication technologies (light-based localization stations using rotary encoders, daisy-chained
fiducial markers, magnetic-induction methods using Earth or artificial magnetic fields, WiFi
repeater networks, and LoRaWAN for longer-range, lower-bandwidth transmission through soil and
minerals); digital-twin simulation architectures (a six-layer digital-twin architecture combining
IoT sensors, cloud networking, and simulation software); and named commercial software suites
(e-Drilling's wellAhead and wellSIM modules; Draco, an open-source 3D mesh and point-cloud
compression library; Forestall, a predictive-maintenance platform; TIMiningAware, a real-time mine
and block-model visualization tool).

Section 5.5 covers collaborative robotics and commercially available fleet-control systems, naming
Sandvik's AutoMine drill and machine fleet, Caterpillar's MineStar Command for Underground Systems,
and Elgór-Hanses S.A.'s EH-Remote Head Control v2. Section 6 surveys technologies still in testing
or research rather than commercial deployment: drill piston control for bit-pointing accuracy;
photogrammetry and Real-Time/Post-Process Kinematics for mine digitization without fiducial ground
control points; neural-network-based personnel safety monitoring (illustrated with a YOLOv8 model
for detecting humans and hazardous areas); Unity3D-based virtual-reality simulation for multi-agent
action planning; AI-assisted digital twins integrated with finite-element-analysis software;
reinforcement-learning (RL) and deep-reinforcement-learning (DRL) methods for haulage scheduling,
equipment control, and mine production layout design; drilling-rig condition monitoring using
sound, vibration, and geological/mechanical rock properties; measurement-while-drilling (MWD) with
machine learning for rock-stress monitoring; AI and big-data methods for ventilation-system control;
and quantum computing for open-pit profile optimization. Section 7 is a forward-looking discussion
of standardization, decentralization, and infrastructure-less automation, and Section 8 is the
conclusion. No original experiments, field trials, or data collection are reported by the authors
themselves; all quantitative results in the review are drawn from the cited primary literature.

### Key findings

**Autonomy is real but frequently hybrid, not fully autonomous.** The review's own description of
deployed automated hauling ("scrapers") states that these robots have "a dual capability to handle
various challenges in complex environments": they can operate autonomously, adjusting to problems
such as limited signal propagation underground, or be controlled by a human operator when direct
guidance is needed (page 6). Caterpillar's MineStar Command for Underground Systems is described as
automating multiple hauling trucks "while allowing human operators to watch from afar" (page 10),
that is, supervised autonomy with a human observer rather than a human-free loop. Elgór-Hanses'
EH-Remote Head Control v2 is described as enabling a roadheader to be "operated remotely and safely"
via a digital twin built around the shearer (page 10), which is remote teleoperation rather than
autonomy. Sandvik's AutoMine is described only as allowing "the simultaneous control of several
pieces of mining equipment" (page 10), without the review specifying whether this control is
autonomous, supervised, or teleoperated. RSDS directional-drilling systems (Schlumberger
PowerDrive, Baker-Hughes Autotrak, Halliburton Sperry-sun Geo-Pilot) are automated trajectory
control systems operating within an otherwise conventional, human-planned drilling operation, not
autonomous exploration systems. Across the named commercial systems, the review does not report a
single case of an unsupervised, fully autonomous machine operating with no human role at all; every
named deployed system either retains a remote human observer/operator role or a fallback to direct
human control.

**Reported quantitative performance figures (all traced to individual cited studies, not measured
by the review itself).** Three numeric results appear in Section 6 (page 12):

- Reinforcement-learning (model-free Q-learning) fleet dispatching for autonomous haulers, tested in
  a simulated environment, is reported to have reduced fuel consumption "as high as 30%" and
  increased productivity by 50%, compared with fixed-schedule dispatching (citing reference 66).
- Deep-reinforcement-learning control (a soft actor-critic algorithm) of an underground Load-Haul-
  Dump machine is reported to have produced energy consumption "21% lower for the autonomous
  vehicle in comparison with the energy consumed when a similar vehicle was operated by a human in
  the real world," with productivity increased by 7% (citing reference 68). The review's own
  wording describes the DRL controller as trained "in a simulated environment," so it is not fully
  clear from the review's text alone whether the 21%/7% comparison figures were themselves measured
  on a real machine or are simulation-based estimates benchmarked against a real-world human
  baseline; the review does not resolve this ambiguity.
- Deep-reinforcement-learning design of underground mine production layouts, applied to a gold-
  mining underground stoping case study, is reported to have produced 8.3% higher expected profit
  and 3.4% more gold mined than a baseline created by a conventional mineable-shape optimizer
  (citing reference 69).

No other numeric performance, reliability, uptime, or availability figures appear anywhere else in
the review's body text. A cited source on Overall Effectiveness (OEE) of Autonomous Haulage System
equipment in an open-pit case study is referenced (reference 82) only in support of a qualitative
claim, that autonomous haulage systems allow more efficient battery and fuel consumption than
manually driven trucks and eliminate shift-change delay because autonomous trucks "operate
continuously" (page 10); no OEE percentage, uptime figure, or comparable metric from that source is
quoted in the review's own text.

**Sensing, localization, and communication maturity.** LIBS is described as having moved from
exclusively laboratory use to integration in down-the-hole drilling equipment "recently" (page 7),
suggesting an early field-deployment stage rather than routine use. LiDAR-based SLAM is described as
already used for cave and mine mapping and navigation, including automatic loading trucks. Non-radio-
frequency localization methods (magnetic induction) and daisy-chained fiducial markers are presented
as responses to the specific unreliability of GPS and RF-based tracking underground. WiFi and
LoRaWAN are presented as complementary communication technologies, WiFi for high-bandwidth signal
propagation in tunnels, LoRaWAN for longer-range, lower-bandwidth transmission through soil and
minerals.

**Safety rationale.** The review frames automation's principal safety benefit as removing workers
from hazardous zones such as blasting areas, observed instead through sensors from virtually
identical (digital-twin) environments, and frames unmanned rock-drilling jumbos and DTH drills as
enabling more accurate blasting via automated anti-deviation control. Neural-network personnel-
safety monitoring (a YOLOv8 model detecting people and hazardous zones, Figure 8, page 11) and UAV/
UGV inspection and rescue missions are presented as reducing personnel exposure to toxic gases and
unstable mine ceilings, again without quantitative safety-outcome figures.

### Limitations

The review states several of its own scope boundaries directly. It explicitly excludes discussion
of "the effectiveness of the selected methods and environmental impact" of mining generally,
describing these as out of scope (page 14, Conclusions). It notes automation for mining safety
specifically is "still an immature field" (page 14). It states that environmental-monitoring and
waste-management automation are "not yet mature enough to minimize the environmental impact," and
that current waste-handling practice (neutralization tanks, ground storage) can still pose problems
for certain waste types (page 14).

On the maturity of automation generally, the review states in Section 2 (page 3) that intelligent
methods currently being researched are characterized by high computational intensity and learning
time that increases with project complexity, and that both fully automated processes and
intelligent systems still need to become more robust, flexible, and adaptable to data insufficiency
and unpredictable events before they can be implemented in raw-material production. It also flags
maintenance and operational costs, the variety of smart sensors required, and sensor reliability
under dust, humidity, and poor lighting as unresolved practical considerations.

In its forward-looking Section 7, the review states that current automation "case studies seem to
refer to technologies that follow implementations that require pre-existing communication systems"
and that modern practice tends to favor "non-modular approaches that often rely on specific
proprietary equipment and software." It states plainly that while today's systems appear adequate
for standard, already-infrastructure-equipped mines, "they are not expected to work in environments
that have been abandoned before the installation of such infrastructure." It calls for a unified
framework to standardize data-handling and physical-system layers, notes that infrastructure-less
and rig-less automation methods have not yet been tested, and cautions that decentralized
communication approaches carry bandwidth and latency limitations, explicitly stating it is "not
realistic" to expect 5G or UHF communication coverage in every mine.

Methodologically, the review itself does not state a systematic search protocol (no named
databases, search terms, date range, or inclusion/exclusion criteria), so its coverage cannot be
assessed for completeness against the broader mining-automation literature; it should be read as a
topic-organized narrative synthesis rather than a systematic review. Correspondingly, the review
reports almost no figures on deployment scale (for example, no counts of mines, trucks, or fleets
currently running any named commercial system) and, aside from the three reinforcement-learning
studies discussed above, reports no reliability, uptime, or availability statistics for any named
autonomous or automated mining system, including the large-scale, publicly documented autonomous
haul-truck fleets that exist in surface mining; the OEE-focused source it cites (reference 82) is
referenced only qualitatively, with no OEE, uptime, or availability number transcribed into the
review's own text. Where the review gives a number, it is traced to a single external primary study
(often simulation-based) rather than to the review's own synthesis across multiple studies, and the
review does not attempt to reconcile or cross-check these individual figures against one another.

### Topic mapping

FA6, FA5. Source list entry 8. Sub-Q 5. Narrative review of automation and robotics technologies in
drilling and mining, covering conventional drilling methods, automated hauling and drilling
machines, sensing/localization/communication infrastructure, digital-twin and fleet-control
software, and collaborative multi-robot systems, used here as the closest existing terrestrial
proxy for autonomous field robotics operating in unstructured terrain without human labor. Findings
relevant to FA6 include: named commercial autonomous/automated systems (Sandvik AutoMine, Caterpillar
MineStar Command for Underground Systems, Elgór-Hanses EH-Remote Head Control v2) that in every
described case retain either a remote human observer or a human teleoperation fallback rather than
running fully human-free; a description of automated haulage "scrapers" as switching between
autonomous operation and direct human control specifically when signal propagation or situational
complexity requires it; three individual-study performance figures (30% fuel reduction and 50%
productivity gain for simulated RL fleet dispatching; 21% lower energy use and 7% higher
productivity for DRL-controlled Load-Haul-Dump machines benchmarked against real-world human
operation; 8.3% higher expected profit and 3.4% more ore extracted for DRL-designed mine layouts
versus a conventional optimizer baseline); and an explicit statement that current mining automation
depends on pre-existing, often proprietary communication infrastructure and is not expected to
function in abandoned mines lacking that infrastructure, with standardization, infrastructure-less
operation, and automated safety all named as still-immature, open problems.
