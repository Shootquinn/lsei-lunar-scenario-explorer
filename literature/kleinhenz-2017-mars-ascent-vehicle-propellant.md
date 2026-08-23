# Kleinhenz & Paz 2017 - An ISRU Propellant Production System to Fully Fuel a Mars Ascent Vehicle
## Comprehensive Technical Summary

## Citation

Kleinhenz, J. E., & Paz, A. (2017). An ISRU propellant production system to fully fuel a Mars ascent vehicle. In 10th Symposium on Space Resource Utilization, AIAA SciTech Forum, Grapevine, TX. American Institute of Aeronautics and Astronautics. https://doi.org/10.2514/6.2017-0423

Publisher URL: UNVERIFIED as a retrieval. AIAA is the publisher of record, but no AIAA landing page was obtained by fetching; arc.aiaa.org returned HTTP 403 to retrieval from this environment on 2026-08-06, so no AIAA URL is printed here rather than deriving one from the DOI string. A retrieval of the AIAA Aerospace Research Central record from a network AIAA does not block would resolve it. A second, independent, fetch-verified resolution path is the NASA Technical Reports Server record at https://ntrs.nasa.gov/citations/20170001421, retrieved 2026-08-06, which returns the same title, both authors, the meeting, and NASA report number GRC-E-DAA-TN37793.

Verification notes on the citation elements, each carried in place. Authors, affiliations, and title were taken from the PDF title page. The DOI 10.2514/6.2017-0423 was verified by direct retrieval of the Crossref registrar record on 2026-08-06, which returns AIAA as publisher, 10th Symposium on Space Resource Utilization as container, and an issued date of 2017-01-05; the doi.org landing page itself was not fetched, so the DOI is registrar-verified rather than landing-page-verified. The year is UNVERIFIED from the artifact alone: the on-disk PDF prints no year, no copyright line, no venue, no DOI, no report number, and no accession number anywhere in its eleven pages, a negative confirmed by whitespace-normalized full-text search after the same method returned nonzero counts on control strings. Year 2017 rests on two independent external records that agree, Crossref at 2017-01-05 and NTRS at 2017-01-09, and is consistent with the file's embedded creation timestamp of 2016-12-06 and modification timestamp of 2017-02-07. The registered title differs from the title the artifact prints: Crossref carries a variant reading an ISRU propellant production system for a fully fueled Mars Ascent Vehicle, while the PDF and the NTRS record both carry the to-fully-fuel wording; the artifact's wording is used above. The venue is recorded differently by the two registrars, Crossref as the 10th Symposium on Space Resource Utilization and NTRS as the AIAA SciTech Forum held in Grapevine, TX, 9-13 January 2017; the symposium is a track within that forum. The AIAA paper number is UNVERIFIED and is deliberately not printed above, because it appears nowhere in the artifact and neither retrieved record states it as a paper-number field. The page range in the proceedings is UNVERIFIED; Crossref returns no page or volume field and the artifact carries its own pagination 1 to 11. Whether the on-disk manuscript is textually identical to the AIAA published version is UNVERIFIED and is contradicted at least in the title; the artifact is an author manuscript on the AIAA Word template, its embedded document title is still the template placeholder, and it carries an internal NASA review-routing header rather than a proceedings header.

## Metadata

AIAA conference paper (system-level modeling and trade study) · NASA Glenn Research Center and NASA Johnson Space Center · January 2017 (per Crossref and NTRS; the artifact prints no date) · open-access status of the AIAA version UNVERIFIED, no copyright or distribution statement appears in the artifact; a copy is publicly downloadable from NTRS

---

## Abstract

Documents an Excel-based, subsystem-modular model of an end-to-end Mars ISRU plant sized against the 2016 NASA Evolvable Mars Campaign, and reports its mass and power outputs for five cases. The plant excavates hydrated-mineral regolith with a surface bucket-drum rover, drives water off in a heated auger conveyor, captures and cleans the vapor, electrolyzes the water, feeds the hydrogen plus cryogenically captured atmospheric carbon dioxide to a Sabatier reactor, and liquefies the resulting oxygen and methane. Cases span oxygen-only production from the atmosphere, full oxygen and methane production on low-yield and high-yield regolith, and variants adding life support consumables. Reports landed-mass comparisons against a no-ISRU reference and a propellant-produced-per-landed-kilogram ratio for each case. Excludes the surface power system, propellant storage tanks, storage maintenance, and dedicated heat rejection hardware from every reported total.

---

### Background and objective

NASA published the Mars Design Reference Architecture 5.0 in 2009 and identified ISRU as an enabling technology for a crewed Mars mission, but DRA 5.0 called out only oxygen production from atmospheric carbon dioxide, for ascent propulsion and life support. Page 1 states that adding water from Martian regolith to the atmospheric carbon dioxide would allow both oxygen and methane to be produced, fully fueling an ascent vehicle and also supplying water and oxygen for life support. The paper gives three reasons this was not previously baselined: perceived complexity of mining regolith, the mass penalty attributed to it, and low confidence in water availability. It notes that robotic and orbital exploration since DRA 5.0 has indicated a greater likelihood and a more prevalent presence of water in Mars regolith, and that the Evolvable Mars Campaign therefore commissioned a study to estimate the quantitative benefits and trades of an end-to-end Mars water ISRU system.

The stated goal on page 2 was to develop models that estimate mass and power for a human-scale end-to-end production system, building parallel models for the oxygen-only and the oxygen-plus-methane cases so the two could be compared. Specific component technologies were fixed in order to anchor the models to one concrete system structure. The acknowledgments on page 11 record that the work was performed under the NASA ISRU Human Spaceflight Architecture Team and funded by the Advanced Exploration Systems program.

### Methods and scope

The model was built in Microsoft Excel, both to reuse earlier work and for team accessibility, with modular subsystems so alternate technologies can be traded in. Page 2 states that component and subsystem technologies were selected on development status rather than expected optimality, favoring items with existing performance data because the models are largely empirical; some detailed component models, including solid oxide electrolysis and the Sabatier reactor, already existed and were incorporated directly.

Mission inputs come from the 2016 EMC architecture. A pre-deployed Mars Ascent Vehicle must carry four crew off the surface, its engines burn liquid oxygen and liquid methane at mixture ratios between 3:1 and 3.5:1, and total ascent propellant is 7.0 mT of methane and 22.7 mT of oxygen, all on page 2. Mars launch windows recur every 26 months; assuming a 9-month transit plus one month of margin, production must complete in 16 months, taken as 480 days of continuous 24-hour operation.

Figure 2 on page 2 gives the derived production requirements, as total mass needed and as the rate for continuous operation over 480 days.

- Methane requirement: 6,978 kg, 0.61 kg/hr.
- Water reactant needed: 15,701 kg, 1.36 kg/hr, annotated as 785,050 kg of soil at 2 percent water and 68.2 kg/hr of soil at that concentration.
- Carbon dioxide reactant needed: 19,190 kg, 1.67 kg/hr.
- Oxygen resulting: 27,912 kg total, 2.43 kg/hr, of which 22,728 kg is propellant and 5,184 kg is left over.

The paper explains that the Sabatier produces oxygen and methane at 4:1, above the engine mixture ratio, so methane rather than oxygen is the driving requirement. These quantities close arithmetically on Sabatier and electrolysis stoichiometry with the Sabatier product water recycled to the electrolyzer, and the 785,050 kg soil figure is computed at 2 percent water rather than at the 1.3 percent baseline regolith yield adopted later in the paper.

The system boundary is stated explicitly on pages 2 and 3. The power source is excluded, assumed to be a separate surface system shared with the habitat, and the paper notes the ISRU plant runs while crew are in transit so the two loads are not concurrent. Propellant storage tanks and storage maintenance such as zero boil-off are excluded, because the plant is assumed co-located with the MAV and liquefies into existing MAV tanks; the cryocoolers that perform the liquefaction are included. A heat rejection subsystem is not explicitly included because thermal management is tied to packaging, although each subsystem model does estimate heat rejection requirements.

Figure 3 on page 3 lists the selected technologies and the heritage claimed for each, which is the paper's own evidence basis for each subsystem model.

- Excavation: RASSOR 2.0 bucket-drum rover. KSC prototype hardware, laboratory tests in regolith simulant. The text describes it as a small rover of about 66 kg that excavates about 80 kg of regolith.
- Regolith processing, dryer: heated auger conveyor with a gas loop for continuous processing. JSC design concept, numerical sizing model, conceptual CAD.
- Regolith processing, vapor cleanup: membrane separator. COTS, from Permapure LLC.
- Regolith processing, water collection: cold trap. JSC design concept, numerical sizing model.
- Propellant production, carbon dioxide acquisition: cryofreezer. COTS with flight heritage, plus a KSC cold head conceptual design numerical sizing.
- Propellant production, Sabatier: microchannel reactor. Solicited, Battelle PNNL.
- Propellant production, gas drying: regenerative desiccant dryers. JSC development hardware.
- Propellant production, methane and hydrogen separation: solicited, Hamilton Sundstrand.
- Propellant production, electrolysis: cathode-feed PEM stack from Giner Inc., with a COTS deionizer and COTS micropump.
- Propellant production, liquefaction: cryocoolers. COTS.

The condenser coil model is based on standard thermodynamic equations and is anchored to no specific hardware. The regolith dryer model derives from published experimental data on screw conveyor dryers. All pressurized tank models use ASME Section VIII wall thickness calculations with a 1.5 burst factor per ANSI/AIAA S-80, and fall back to an assumed 0.051 cm wall where the calculated thickness is impractical.

Page 3 records that the excavator choice drives two architecture decisions. The plant is centralized, with the rover travelling 100 m to fresh material and depositing spent regolith 10 m from the excavation site, and the model balances resource range, battery recharge time, and trip count, adding excavators as needed. Because a bucket drum is a surface technique, the target resource is water in hydrated minerals rather than ice, since ice in the prospective landing band of plus or minus 40 degrees latitude is estimated to lie more than 3 m subsurface and would require significant trenching or overburden removal.

Figure 4 on page 4 reproduces four Mars water reference cases from the Mars Water ISRU Planning study, with an attribute row set that the model consumes directly.

- Case A, ice: no water content at temperature given; 3 m depth to top of deposit; bulk geometry; sand overburden; 90 percent ice as phase 1; competent and hard to mine; no crushing needed; heterogeneity given as variation in impurities; 1 km to power source and to processing plant; flat terrain; dissolved salts as the deleterious impurity.
- Case B, poly-hydrated sulfate: 8.6 percent water at 150 degC; 0 m stripping ratio; bulk; 40 percent gypsum, then 3.0 percent each of allophane, akaganeite, and smectite; sand and easy to mine; no crushing needed; plus or minus 30 percent variation in concentration; 1 km to power and plant; flat terrain; no deleterious impurities.
- Case C, clay: 2.7 percent water at 300 degC; 0 m stripping ratio; bulk; 40 percent smectite, then 3.0 percent each of allophane, akaganeite, and bassanite; sand and easy; no crushing; plus or minus 30 percent; 1 km to power and plant; flat terrain; none.
- Case D, typical regolith at Gale: 1.3 percent water at 300 degC; 0 m stripping ratio; bulk; 23.5 percent basaltic glass, then 3.0 percent each of allophane, akaganeite, bassanite, and smectite; sand and easy; no crushing; plus or minus 30 percent; 100 m to power and plant; flat terrain; perchlorate listed with a question mark.

Page 4 notes that the presence of cases B and C in granular unconsolidated form has yet to be proven.

Figure 5 on page 4 is a parametric sweep of processing temperature carrying thermal power on the left axis and regolith mass on the right. Values read from the plot are approximate.

- Case D, typical regolith, plotted as a connected series: about 13 kW and about 1,050 mt near 100 degC; 16 kW and about 805 mt at 150 degC; 18 kW and about 500 mt at 300 degC; 30 kW and about 420 mt at 500 degC.
- Case B, gypsum-rich, plotted as a single circled cluster near 150 degC: about 4 kW and about 70 mt.
- Case C, smectite-rich, plotted as a single circled cluster near 300 degC: about 11 kW and about 235 mt.

The text states that case D reaches 1.5 wt% water at 500 degC but at significant power cost, and that 300 degC was adopted as the case D baseline for a 1.3 wt% yield targeting the smectite and sulfate phases. The figure does not state whether its regolith and thermal power axes are per ISRU module or per full system, and the plotted regolith masses do not close against the water quantities in Figure 2 and Figure 6 at the stated 1.3 wt% yield.

Page 5 gives the margin and modularity assumptions: 15 percent structural mass margin, 20 percent growth margin, and a system built as three identical modules operating in parallel, each producing 40 percent of the requirement, so the modeled plant delivers 120 percent of the stated requirement. Table 1 on page 5 defines the five cases plus a no-ISRU reference. Case 0 is the ascent propellant landed from Earth. Case 1 is oxygen-only ISRU from atmospheric carbon dioxide for propulsion, with methane still shipped. Case 2 is methane and oxygen ISRU for propulsion on case D regolith. Case 3 adds life support water and oxygen to case 2. Cases 4 and 5 repeat cases 2 and 3 on case B regolith at about 8 percent water.

Figure 6 on page 6 is an image-only table with no text layer, and it carries the consumable totals actually modeled.

- ISRU oxygen, ascent propellant: 22,728 kg. ISRU oxygen, life support: 1,906 kg.
- ISRU methane, ascent propellant: 6,978 kg.
- ISRU water processed into oxygen and methane: 18,891 kg. ISRU water, life support: 24,179 kg.

Its caption states that the life support water number is highly conservative and that the three-module baseline produces 120 percent of the required consumables. Page 6 adds that the life support oxygen basis is Reference 9 and the water basis is Reference 10, a water-rich Mars scenario covering uses down to laundry, evaluated in its most conservative open-loop ECLSS form.

Section III.A on pages 6 and 7 describes notional packaging built in PTC Creo Parametric 2.0 for the case 2 requirements, and states that the illustrations convey a volumetric representation and should not be considered a design. Figures 7 and 8 show the excavation and regolith processing hardware and the propellant production hardware; Figure 8 is annotated with a roughly 40 by 30 by 58 inch envelope and a human figure for scale. Figure 9 places three water extraction modules and three propellant production modules on a single EMC lander of approximately 9 m outer diameter, with the access ramp excluded from the mass estimates. Page 7 notes that Curiosity's power source produces 110 We and about 2 kW thermal, offered as a reason to site water extraction modules near a power source to use excess thermal energy.

### Key findings

Case 1, the oxygen-only system, is reported on page 7 at 0.9 mT of hardware and 34 kW. Reading the Figure 10 stacks, essentially all of that mass is atmosphere processing at roughly 880 kg with a thin oxygen liquefaction layer above it, and roughly 30 kW of the 34 kW is atmosphere processing with the remainder oxygen liquefaction.

Case 2 raises hardware mass to 1.7 mT and power to 52 kW, with the text on page 7 attributing the majority of the power increase to 17 kW of thermal energy for releasing water from regolith. Reading the Figure 10 case 2 stacks gives the following approximate subsystem split, which the paper does not tabulate numerically anywhere.

- Excavation: about 255 kg; under 1 kW, plotted as regolith processing electrical.
- Regolith processing: about 635 kg; about 18 kW thermal.
- Atmosphere processing: about 450 kg; about 3.5 kW.
- Electrolysis: about 150 kg; about 23 kW.
- Methane dryer and oxygen dryer together: about 60 kg.
- Oxygen liquefaction: about 4 kW. Methane liquefaction: about 2.5 kW. The two together are about 140 kg.

Note that the plotted thermal bar reads slightly above the 17 kW quoted in the text, and that Figure 5 gives 18 kW for case D at 300 degC.

Case 3 reaches 2.2 mT and 80 kW on page 8, of which 44 kW is thermal energy for regolith heating. The paper states that excess oxygen already produced by the methane system absorbs the life support oxygen requirement at no system cost, so only excavation and regolith processing grow, through a larger processing subsystem and a larger excavator count. The Figure 10 mass stack reads about 510 kg of excavation and about 880 kg of regolith processing for this case.

The high-yield regolith trade is given on page 8. Moving case 2 to case B regolith produces case 4, described as a 7 percent mass reduction and a 27 percent reduction in power, with the small mass change attributed to size scaling of the regolith processing subsystem, since the excavator count in case 2 was already at the minimum of one per module. Moving case 3 to case B produces case 5, described as a 25 percent mass reduction and a 45 percent power reduction, where excavator count does fall. Figure 11 places case 4 at roughly 1,580 kg and 38 kW and case 5 at roughly 1,650 kg and 44 kW, and labels the two regolith types as 1.3 percent water and 8.6 percent water. Page 9 restates the case 4 power result as 30 percent less than case 2, which does not agree with the 27 percent given on page 8 for the same comparison.

Landed mass results appear in Figure 12 on page 8 and the Figure 13 table on page 9, which gives ISRU hardware mass, total landed mass, and the ratio of propellant produced per kilogram of total mass.

- Case 3, ISRU propellants and life support: 2.2 mT hardware, 2.2 mT total, ratio 13.5.
- Case 2, ISRU propellants on baseline regolith: 1.7 mT hardware, 1.7 mT total, ratio 17.7.
- Case 1, ISRU oxygen propellant: 0.93 mT hardware, 8.0 mT total given as 1 mT hardware plus 7 mT methane, ratio 2.9.
- Case 0, no ISRU: 0 mT hardware, 29.7 mT total given as 23 mT oxygen plus 7 mT methane, no ratio.

The Figure 12 vertical axis is labeled Kg while its 0 to 30 scale is in metric tons. Page 8 states a 75 percent mass reduction for case 1 over case 0, and the conclusion on page 10 states that oxygen-only ISRU reduces landed propellant mass by over 70 percent while adding water mining pushes the reduction toward 95 percent. Page 9 states that harnessing even the lowest yield regolith gives a 6x improvement over an oxygen-only system on the propellant-per-landed-mass metric.

Two further quantitative claims appear on pages 9 and 10. The mass saving in low Earth orbit is stated as on the order of 10 kg for every 1 kg of propellant produced on the Mars surface, so a full oxygen and methane system could save on the order of 300 mT in LEO, which the conclusion associates with eliminating several heavy lift launchers. On power, the conclusion places ISRU systems for ascent propulsion between 30 and 50 kW, compares that with an estimated habitat need of around 40 kW, and notes that if the regolith heating load for case 2 were recuperated rather than supplied electrically the draw would fall from 52 kW to 35 kW.

Figure 14 on page 9 is an image-only diagram showing the four resource acquisition and delivery architectures originally considered, of which only the first was modeled. The left margin labels them, reading upward, as centralized, centralized, deployed, and mobile regolith processing, with the fourth row also annotated as a large haul.

- Centralized processing with regolith hauled 100 to 500 m from the mine to the lander.
- Centralized water extraction at the mine with dirty water hauled 100 to 500 m to the lander.
- Deployed regolith processing sited 100 m from the mine with its own power unit annotated 10 kW, sending dirty water under 500 m to the lander.
- Large-haul regolith transport by a dedicated hauler over 100 to 5,000 m.

Page 9 states that given ice stability issues and the localized nature of a subsurface excavator, a mobile processing option would likely fit an ice-targeting architecture best, and that for cases 3 and 5 a deployed regolith processing system may prove more beneficial because extracted water could be delivered separately to an ECLSS system and to the propellant plant.

Every mass and power figure above is a model output rather than a measurement. The measured inputs the paper identifies are component-level: laboratory tests of RASSOR in regolith simulant supplied excavation time, speed, and power consumption during traverse and excavation; the carbon dioxide capture model rests on empirical data from a near-relevant-scale freezer tested at KSC; the methane and hydrogen separator model rests on test data from a Hamilton Sundstrand stack delivered to NASA; the electrolysis, deionization, and pump models rest on performance of relevant-scale COTS or vendor hardware; and the regolith dryer model rests on published screw conveyor drying data. The propellant quantities, mixture ratios, 480-day window, and life support consumable levels are requirements imported from other studies, not results of this one. The paper assigns no technology readiness levels, reports no integrated end-to-end demonstration, and gives no uncertainty bands on any output.

### Limitations

The paper states on pages 9 and 10 that the system presented is only one example, is not optimized, and that other subsystem and component models can be traded in. It notes on page 2 that the MAV design and mission timeline are continuously evolving, that the propulsion needs came from archival values, and that the timeline came from DRA 5.0.

Resource assumptions carry their own limits. The presence of cases B and C in granular unconsolidated form is stated on page 4 as unproven. No subsurface ice option is modeled at all: page 9 identifies trading in a subsurface excavation subsystem as the top item of extended model use, states that technology development for large-scale excavators of that type is limited, and notes that ice excavation would likely also move the water processing system onto the mobility platform, which changes the architecture rather than a parameter within it.

The excluded scope is large and is excluded from every headline number. Surface power generation, propellant storage tanks, storage maintenance systems, and dedicated heat rejection hardware are all outside the boundary, as are storage and transfer systems for the life support consumables in cases 3 and 5. The case 0 comparison excludes entry, descent and landing mass, the propellant and systems needed to deliver ascent propellant from LEO, and maintenance of those propellants in space and at Mars; it also excludes Earth-supplied life support consumables, which the paper notes would improve case 3's standing further. Page 9 also cautions that the case 3 life support water requirement reflects a deliberately water-rich scenario and exceeds what would realistically be shipped from Earth, giving laundry water against additional clothing as the example.

Thermal management is discussed on page 10 as considered during model development but not presented in the manuscript; waste heat is estimated per subsystem but its management, and the possibility of duty-cycling the plant to exploit diurnal temperature variation, remain unaddressed and are noted as a potential source of substantial power reduction.

Four internal inconsistencies are visible within the document. Page 8 and page 9 give 27 percent and 30 percent for the same case 4 versus case 2 power reduction. The Figure 12 axis is labeled Kg on a metric ton scale. Figure 5 does not state whether its axes are per module or per system, and its regolith masses do not reconcile with the water requirements at the baseline yield. Figure 2 computes its regolith mass at 2 percent water while the adopted case D baseline is 1.3 percent.

The artifact itself carries no self-identifying bibliographic data. It prints no year, venue, DOI, report number, accession number, copyright statement, or distribution statement anywhere in its eleven pages.

### Topic mapping

Section I on page 1 and Section II.A on page 2 address the DRA 5.0 baseline, the EMC mission scenario, MAV propellant quantities and mixture ratio, the 480-day production window, and the system boundary that excludes power, tanks, and heat rejection. Section II.B on pages 3 and 4 addresses subsystem technology selection and heritage, tank sizing standards, and the architecture consequences of choosing a surface bucket-drum excavator.

Section II.C on pages 4 and 5 addresses the four M-WIP Mars water reference cases, their water content and processing temperatures, their geotechnical and impurity attributes, and the processing-temperature parametric that fixes the case D baseline. Section II.D on page 5 addresses mass and power margins and the three-module parallel architecture. Section II.E on page 5 addresses the parallel oxygen-only model using solid oxide electrolysis.

Section III on pages 5 through 8 addresses the case definitions, the consumable requirement totals, notional volumetric packaging on an EMC lander, and the mass and power results for the three baseline cases and the two high-yield regolith trades. Section IV on pages 8 through 10 addresses landed mass comparison against the no-ISRU reference, the propellant-per-landed-mass metric, LEO mass savings, alternative architecture concepts for resource acquisition and delivery, carbon dioxide acquisition technology alternatives, commonality with ECLSS hardware, and thermal management. Section V on page 10 restates the mass, power, and percentage reduction results.
