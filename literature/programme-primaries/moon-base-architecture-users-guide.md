# NASA 2026 - Moon Base User's Guide: Architecture Resources

## Comprehensive Technical Summary

## Citation

National Aeronautics and Space Administration. (2026, April). *Moon base user's guide: Architecture resources* (NP-2026-04-6806-HQ). NASA Headquarters, Washington, DC. https://www.nasa.gov/architecture

Publisher URL: www.nasa.gov/architecture, printed on the back cover (p. 16) and again on p. 3. The agency landing page www.nasa.gov is printed alongside it on the back cover. No file-level URL for this document is printed in the document.

DOI: not assigned. NASA public-affairs publications in the NP series do not carry DOIs, and the absence of one is a property of the document class rather than a defect in this citation.

Citation verification (2026-08-06): the report number NP-2026-04-6806-HQ and the URL www.nasa.gov/architecture were both located verbatim in the source PDF at `moon-base-architecture-users-guide.pdf`, back cover, PDF page 16 of 16, searched in spaced, closed-up and hyphenated forms with controls fired first (NASA 39, Moon 63, gap 27). The back cover also prints the publisher as National Aeronautics and Space Administration, NASA Headquarters, 300 E. Street SW, Washington, DC 20546. The cover prints the title on two lines as "Moon Base User's Guide" over "Architecture Resources." The page count of 16 was measured. The parent-document claim was checked: the phrase "revision C" appears once in the source. The April 2026 publication date is inferred from the NP-YYYY-MM series convention embedded in the report number and no explicit publication date is printed in the document. This citation is transcribed from the source, not constructed.

## Metadata

| Field | Value |
|---|---|
| Document type | Agency users guide / architecture reference |
| Issuing organization | NASA Headquarters |
| Publication date | April 2026 (NP-2026-04-6806-HQ) |
| Triggering event | "Ignition" -- NASA Administrator Jared Isaacman announcement, March 24, 2026 |
| Pages | 16 |
| Open access | Yes (www.nasa.gov/architecture) |
| Parent document | Architecture Definition Document (ADD), revision C |

---

This guide is a publicly-released entry point to NASA's Architecture Definition Document (ADD). It distills the ADD's functional gap lists, technology gaps, and data gaps into a stakeholder-facing reference organized around the three phases of Moon Base development. It was released in April 2026 following the "Ignition" event at which NASA Administrator Jared Isaacman formally announced a phased U.S. Moon Base in the lunar South Pole region, alongside the Space Reactor 1 (SR-1) Freedom nuclear electric propulsion demonstration. For the CSA LSEI study, this document is directly relevant: it specifies NASA's demand signals in ISRU, power, robotics, mobility, communications, and habitation -- all eight ISRU capability areas map against the functional and technology gaps listed here. It also identifies the categories of partnership NASA is actively soliciting, which directly defines the market and mission context for the LSEI workshops' architecture work.

---

## 1. The Ignition Announcement and Document Purpose

On March 24, 2026, NASA hosted the "Ignition" event, inviting industry and international partners to NASA Headquarters. Administrator Isaacman announced:
- Establishment of a U.S. Moon Base in the lunar South Pole region, using a phased iterative approach.
- Development of Space Reactor 1 (SR-1) Freedom, a nuclear electric propulsion demonstration repurposing the Power and Ignition Propulsion Element originally planned for the Gateway space station.
- A fleet of robotic helicopters to scout the Martian surface for candidate crewed landing regions.

The Moon Base User's Guide provides an overview of resources in the ADD that can guide research, technology, and infrastructure investments by NASA, industry, academia, and international partners. It is not a standalone architecture document; it is a curated index of the ADD's appendices, with QR code pointers to white papers on specific technology and data gap lists. The full ADD is available through the same URL (www.nasa.gov/architecture).

## 2. The Phased Moon Base Implementation Plan

NASA has structured Moon Base development into three sequential phases. The guide presents launch, landing, and payload metrics for each.

**Phase 1:**
- 25 launches, 21 landings
- Approximately 4,000 kg payload to surface
- Strategic goals: achieve high-rate reliable surface access; establish ground truth for Moon Base landing sites; experiment and test capabilities; accomplish the first crewed Moon Base mission

**Phase 2:**
- 27 launches, 24 landings
- Approximately 60,000 kg payload to surface (15x increase over Phase 1)
- Strategic goals: establish initial lunar surface infrastructure; increase CLPS payload mass capability to 5 metric tons; conduct technology demonstrations; achieve semi-annual crewed missions

**Phase 3:**
- 29 launches, 28 landings
- Approximately 150,000 kg payload to surface (37.5x increase over Phase 1)
- Strategic goals: regolith manipulation and site preparation; increase CLPS payload mass capability to 8 metric tons; demonstrate uncrewed cargo return capabilities; achieve continuous crew presence

The phased approach addresses two strategic factors. On market enablers, NASA will apply CLPS-model bulk buys and multiple awards to create a lunar marketplace. On technology readiness, near-term Phase 1 CLPS missions serve as flight test opportunities to mature Moon Base-enabling technologies and buy down risk before major infrastructure investment.

## 3. Environmental Challenges

### Lighting
The lunar South Pole region presents a fundamentally different lighting environment from Apollo equatorial sites. The sun remains low on the horizon, casting dramatic shadows that hinder solar electricity generation and subject systems to prolonged periods of extreme cold and dark. Key development needs include heating and power solutions that allow systems to survive the lunar night and to operate in permanently shadowed regions (PSRs).

### Terrain
The South Pole region features topography of extremes: high mountains, deep craters, and wide terrain type variation. Mobility systems must traverse steep crater walls to access frozen volatiles in PSRs. NASA and partners must develop systems capable of descending and climbing extreme slopes for sample collection, resource prospecting, and ISRU activities.

### Interoperability
The Moon Base will comprise systems from government, industry, academia, and international providers. The guide emphasizes collaborative development of interoperability standards for power, docking, and communications as essential to efficient multi-partner architecture development.

## 4. Phase 1 Functional Gaps

The guide presents functional gaps -- architecture functions either unallocated to existing elements or requiring additional performance -- organized by subsystem. These are drawn from the ADD appendix and are expected to evolve as gaps close.

### 4.1 Autonomous Systems and Robotics
**Architectural value:** Maximize exploration value; perform functions crew cannot; support uncrewed periods.
**Capability targets:**
- Demonstration of cargo manipulation (10 kg) on the surface
- Demonstration of lunar site preparation capabilities
- Demonstration of remote mating/demating of cables

**Functional gap IDs:**
- FN-A-104L: Robotic manipulation of payloads, logistics, equipment on lunar surface
- FN-A-105L: Interface robotic systems with logistics carriers on surface
- FN-A-201L: Earth control of robotic systems in sunlit areas and non-PSRs
- FN-A-302L: Safeguards for automated assets operating near crew
- FN-A-401L: Earth command and control during uncrewed periods
- FN-M-401L: Unload limited cargo (100s kg) on lunar surface
- FN-M-501L: Reposition limited cargo (100s kg) in south pole region

### 4.2 Communications and Positioning, Navigation, and Timing (PNT)
**Capability targets:**
- Deploy second orbital relay constellation with surface imaging and lunar ground stations enabling greater than 500 Mbps capability
- Deploy orbital navigation and timing assets

**Functional gap IDs:**
- FN-C-101L: Surface-to-Earth communications and data exchange
- FN-C-103L: Surface-to-surface asset communications and data exchange
- FN-C-105L: High bandwidth, high-availability surface-to-Earth communications
- FN-C-201L: PNT services at south pole region on lunar surface

### 4.3 Habitation Systems
**Capability targets:**
- Demonstrate extended crew habitation including hygiene, exercise, and nutrition
- Demonstrate extended duration medical capabilities
- Demonstrate Earth-independent operations
- Demonstrate management of waste streams on lunar surface

**Functional gap IDs:**
- FN-H-101L: Pressurized habitable environment, short duration (days to weeks)
- FN-H-102L: Pressurized habitable environment, moderate duration (month+)
- FN-X-103L: Crew countermeasure systems for moderate duration (month+)
- FN-L-301L: Waste management from habitable assets on lunar surface
- FN-H-201L: Habitation system operation in uncrewed mode between missions

### 4.4 Logistics Systems
**Capability targets:** Transfer of pressurized goods, water, and gases on lunar surface
**Functional gap IDs:**
- FN-L-101L: Pressurized asset mating on lunar surface
- FN-L-201L: Transfer of pressurized cargo into habitable assets
- FN-L-203L: Transfer of water to habitable assets
- FN-L-205L: Transfer of gases to habitable assets

### 4.5 Mobility Systems
**Capability targets:**
- Deploy small utility rovers and hoppers for science, reconnaissance, and resource discovery
- Deploy large crewed and uncrewed rovers with speeds of 10 km/hr

**Functional gap IDs:**
- FN-M-302L: Local unpressurized mobility in sunlit areas and non-PSRs
- FN-M-304L: Local unpressurized mobility in PSRs
- FN-A-103L: Robotic system for reconnaissance
- FN-U-103L: Resource identification and utilization payload operations on surface

### 4.6 Power Systems
**Capability targets:**
- Demonstrate 5 kW power generation and storage plus survival through 120+ hours of darkness
- Demonstrate survive-the-night capability using radioisotope thermal generators (RTGs)

**Functional gap IDs:**
- FN-P-101L: Power generation in south pole region
- FN-P-102L: Energy storage in south pole region
- FN-P-301L: Power distribution in south pole region
- FN-P-401L: Power for deployed surface utilization payloads/equipment
- FN-P-402L: Power for external utilization payloads for mid- (month+) to long-duration (year+) operations

### 4.7 Transportation Systems (Cargo)
**Capability targets:** Landers with 2 metric ton cargo delivery capability to South Pole region
**Functional gap IDs:**
- FN-T-201L: Transport limited cargo (100s kg) from Earth to South Pole sites
- FN-T-202L: Transport moderate cargo (1000s kg) from Earth to South Pole sites

## 5. Architecture-Driven Technology and Data Gaps

The guide distinguishes two gap types. Technology gaps represent differences between current and desired functional capability requiring new technology or significant performance advancement. Data gaps exist where missing information about the cislunar environment affects architecture analysis, risk characterization, hardware development, or science.

### 5.1 Landing Safely and Accurately
**Knowledge gaps (data):** Observe surface for blocks, rocks, craters; map surface topology; characterize gravitational field variance. Characterize plume-surface interaction (PSI) events including ejecta trajectory, particle size distribution, and surface alteration. Gap IDs: DN-001L, DN-002L, DN-014L, DN-017L, DN-018L.

**Technology gaps:** Precision landing with range/velocity measurement over low-visibility terrain including shadow and PSI. Real-time hazard avoidance. Technology gap ID: #1101.

### 5.2 Securing Sites
Need high-resolution imagery, regolith property characterization, and resource location data. Data gaps: DN-001L through DN-010L, DN-013L, DN-014L.

Small cargo return additionally requires detailed understanding of how lunar surface launch affects regolith and nearby assets. Data gaps: DN-017L, DN-018L.

### 5.3 Operating Long Duration
**Knowledge gaps:** Dust mechanics, regolith geotechnical properties, radiation and charged particle fluctuations, seasonal patterns, scattering. Data gaps: DN-008L through DN-016L, DN-019L.

**Technology gaps:** Extreme temperature-tolerant mechanisms and electronics for shadow periods without dedicated heating. Dust mitigation systems (extremely abrasive and electrostatic regolith). Navigation and timing systems robust to lunar electromagnetic radiation environment. Technology gap IDs: #0101, #0201, #0301, #0801, #0804.

### 5.4 Key Subsystem Technology and Knowledge Challenges
The guide identifies associated challenges for specific subsystems:

- **Surface-to-surface communications:** Deploy comms systems robust to lunar geological, electromagnetic, and RF environment. Tech gap #0103.
- **Manipulating regolith:** Excavation, compaction, site preparation require in-depth regolith characterization and large-scale excavation/construction systems. Data gaps DN-008L, DN-009L, DN-010L, DN-019L; tech gap #0505, #0605.
- **Moving logistics:** Robotic off-loading, payload manipulation, long-duration packaging. Tech gaps #0701, #0806, #1001.
- **Solar power:** Precise lighting condition knowledge and dust-robust arrays. Data gaps DN-005L, DN-019L; tech gaps #0504, #0901, #0903.
- **Thermal generators:** RTG survive-the-night capability requires detailed lunar environmental knowledge. Data gap DN-019L; tech gaps #0301, #0901.
- **Electrical connections:** Dust-tolerant connections and cable deployment. Data gaps DN-008L, DN-009L, DN-019L; tech gap #0903.
- **Wireless charging:** Interoperable wireless power robust to lunar environment. Data gap DN-009L; tech gap #0903.
- **Timing systems:** Precise real-time synchronization with low latency and drift. Tech gap #0101.
- **Pressurized mating:** Dust-tolerant pressurized interface systems. Data gaps DN-008L through DN-010L, DN-019L; tech gap #0807.
- **Initial habitation:** Small pressurized crew-rated surface module with minimal ECLSS and external power. Tech gaps #0807, #0903.
- **ISRU systems:** Requires detailed resource availability knowledge and extraction/processing systems. Data gaps DN-006L, DN-007L; tech gaps #0601, #0603, #0604, #0605.

## 6. Mars-Forward Considerations

The guide explicitly frames Moon Base development as a proving ground for Mars. Key areas:

- **Nuclear technologies:** Moon Base nuclear power development directly empowers Mars, where NASA has already selected nuclear fission as the primary power generation technology (robustness to dust storms). Also benefits nuclear propulsion for Mars transportation.
- **Independent operations:** Test autonomous systems, human/robotic interaction, and astronaut autonomy at Moon Base in preparation for communication-delay-constrained Mars operations.
- **Human factors:** Continuous Moon Base presence generates more deep space astronaut performance data than any prior program; informs gravity adaptation and partial gravity EVA planning for Mars.
- **Logistics strategies:** Foster lunar logistics marketplace to develop government and industry competencies needed for crewed Mars missions.
- **Dust tolerance:** Both destinations have abrasive regolith; dust-tolerant systems developed for Moon directly advance Mars mission development.
- **Planetary protection:** Forward and backward contamination principles developed for Moon Base will guide Mars planetary protection.
- **Systems development:** Shared systems between Moon and Mars architectures reduce cost, development time, and risk.

## 7. Partnership Building Priorities

The guide closes by identifying strategic partnership priority areas NASA is actively seeking from industry, academia, and international partners:

- Surface habitation
- Logistics services
- Small mobility and robotics
- High capacity mobility systems
- Large cargo delivery and return
- Resource mapping and reconnaissance
- Sample storage and conditioning
- Advanced navigation capabilities

Contact point provided: HQ-MoonBase@nasa.gov

---

## Key Findings

1. The Moon Base is now official U.S. space policy as of March 24, 2026, announced by NASA Administrator Isaacman under the "Ignition" banner. This is not a proposal or concept -- it is an active program with a published Architecture Definition Document.
2. Three phases are defined with specific launch counts, landing counts, and payload mass targets: Phase 1 (~4,000 kg surface payload), Phase 2 (~60,000 kg), Phase 3 (~150,000 kg). This trajectory makes real-number ISRU sizing feasible.
3. ISRU is an explicitly listed Phase 1 functional gap (FN-U-103L: resource identification and utilization payload operations) and a named technology and data challenge with four technology gap IDs (#0601, #0603, #0604, #0605) and two core data gap IDs (DN-006L, DN-007L).
4. Power survival through 120+ hours of lunar night at 5 kW minimum is a Phase 1 capability target. This drives RTG and nuclear surface power development concurrently with solar power.
5. Phase 1 cargo transportation capability target is 2 metric tons to the South Pole region -- this constrains ISRU system mass budgets for early missions.
6. Mobility in PSRs (permanently shadowed regions) is a distinct functional gap (FN-M-304L) from general south pole mobility (FN-M-302L), reflecting the special challenge of accessing frozen volatiles.
7. Interoperability of power, docking, and communications systems is foregrounded as a cross-cutting enabler; standards development is explicitly needed.
8. Resource mapping and reconnaissance is listed as a top-tier strategic partnership priority, directly relevant to Canadian remote sensing and prospecting contributions.
9. The Architecture Definition Document appendices are the primary technical source; this guide is a stakeholder-facing summary/index only. The full gap lists continue to evolve.
10. The SR-1 Freedom nuclear electric propulsion demonstration is linked to the Gateway repurpose; this resets assumptions about cislunar transportation architecture.

---

## Relevance to LSEI ISRU Architecture

This document is a primary demand-signal source for the LSEI workshop series. Several direct connections:

**ISRU as named NASA gap:** ISRU technology gaps (#0601, #0603, #0604, #0605) and data gaps (DN-006L, DN-007L) appear explicitly in the ADD appendices indexed by this guide. The Phase 1 functional gap FN-U-103L for resource identification and utilization directly defines a gap Canada could address. This language should be mirrored in CSA LSEI deliverables to demonstrate alignment.

**Resource mapping and reconnaissance as partnership priority:** NASA explicitly lists "Resource Mapping and Reconnaissance" as a strategic partnership priority (guide page 15). Canadian remote sensing capability and CSA's planetary surface science expertise map directly against this stated need.

**Power constraints as ISRU design driver:** The 5 kW / 120+ hour darkness requirement defines the operating envelope within which ISRU systems must be designed. Any ISRU capability area involving extraction or processing must address power budgets against this constraint.

**Mobility in PSRs as prerequisite for water ice ISRU:** FN-M-304L (PSR mobility) is a prerequisite for water ice extraction. Workshop discussions of volatiles-based ISRU should treat PSR mobility as a gating dependency.

**Phase 1 cargo constraint:** The 2 MT lander capability target constrains what ISRU pilot systems can mass in Phase 1. Architecture work should establish whether key ISRU demonstrators can be delivered within this envelope.

**Regolith geotechnical knowledge as cross-cutting dependency:** Data gaps DN-008L through DN-010L and DN-019L (regolith properties, dust mechanics) appear across nearly every capability challenge. CSA geotechnical or regolith science contributions could close multiple gaps simultaneously.

**Eight ISRU capability areas cross-map** (EDITORIAL -- the following cross-mapping is interpretive analysis by the intake summarizer, not content from the source document; the Moon Base guide does not reference the Canadian eight-area ISRU framework and does not contain this mapping)**:** Regolith excavation maps to #0505/#0605; water extraction maps to DN-006L/DN-007L/#0601; oxygen production maps to #0603/#0604; power maps to FN-P-401L/FN-P-402L; site preparation maps to FN-A-104L and the regolith manipulation challenge; mobility/prospecting maps to FN-M-304L and FN-U-103L; communications maps to FN-C-201L; and habitation-ISRU integration maps to the logistics and pressurized transfer gap set.

**International partnership framing:** NASA explicitly invites international space community participation; this guide (and the underlying ADD) provide the architecture vocabulary that LSEI workshop outputs should use when positioning CSA contributions.
