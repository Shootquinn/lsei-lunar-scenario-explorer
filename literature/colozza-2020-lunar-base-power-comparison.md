# Colozza 2020 - Small Lunar Base Camp and ISRU Oxygen Production Facility Power System Comparison
## Comprehensive Technical Summary

## Citation

Colozza, A. J. (2020). Small lunar base camp and in situ resource utilization oxygen production facility power system comparison (NASA/CR-2020-220368; also numbered E-19754 and GRC-E-DAA-TN73095, both NTRS-sourced and NOT printed in the artifact, which carries no SF298). National Aeronautics and Space Administration, Glenn Research Center. Prepared by Vantage Partners, LLC, Brook Park, Ohio, under Contract NCC12BA01B. https://ntrs.nasa.gov/citations/20200001622

Publisher URL: https://ntrs.nasa.gov/api/citations/20200001622/downloads/20200001622.pdf

Resolution paths, stated so a reader knows which is which. Path one is the NTRS citation record at accession 20200001622, fetch-verified on 2026-08-06; it returned title, sole author and affiliation, publication date 1 March 2020, the three report numbers above, subject category Lunar and Planetary Science and Exploration, and a public-use rights statement. Path two is the NTRS full-text download endpoint for the same accession, which is the object on disk. UNVERIFIED item C1, NARROWED 2026-08-06: NASA STI registered NO DOI for this record. The universal negative is not defensible and is withdrawn, because DataCite does carry 10.13140/RG.2.2.33977.93285, minted by ResearchGate over an uploaded copy. That is not a publisher-registered identifier and is not used as a locator here. The NTRS record shows no DOI field and the document prints none anywhere in its 98 sheets. What would resolve it is a DOI registered by NASA STI for this report; none was found. No DOI has been constructed here. UNVERIFIED item C2: neither the accession 20200001622 nor any NTRS record URL is printed inside the PDF. What the PDF prints is the generic availability statement naming http://www.sti.nasa.gov/ and http://ntrs.nasa.gov/ on the verso, PDF sheet 4. The accession therefore comes from an external NTRS lookup performed for this summary, not from the artifact, and it is flagged rather than presented as printed.

## Metadata

Study type: NASA contractor report, an analytical power-system sizing and mass-comparison study, no hardware and no test data. Institution: NASA Glenn Research Center, work performed by Vantage Partners, LLC, Brook Park, Ohio, under Contract NCC12BA01B; technical review credited to two named reviewers and editorial review to one. Publication date: March 2020, NTRS date 1 March 2020. Open-access status: public, NTRS rights statement is public use permitted; 98 PDF sheets carrying report pages i to xii and 1 to 79 plus references, 71 figures, 31 tables.

How this artifact was read, recorded because the previous summary of this source was built from text extraction alone and silently lost every figure. The text layer was extracted with pdfplumber. Every mass-breakdown pie chart, every bar chart, and every energy-balance plot in Section 6.0 is a raster with no text layer, so a text-only pass returns the captions and none of the numbers. Those pages were rendered with pdfplumber to_image at 200 dpi, because pdftoppm and poppler are absent on this machine and the Read tool cannot render a PDF page here. Mean luminance was checked on every rendered sheet before any number was read off it, since CMYK JPEGs on this corpus have rendered solid black through a naive inversion; all sheets used came back in the range 232 to 250 on a 0 to 255 scale, which is a white page with black ink. Every recovered legend was then closed against its own printed total before being admitted. Term counts used Python str.count on whitespace-normalized text, never grep -c, and no zero reported below was admitted until known nonzero controls fired on the same instrument in the same run.

---

## Abstract

Sizing and mass comparison of three power architectures against two lunar-surface loads, both sited at 30 degrees north latitude and both sized over one 708.33 h lunar day and night cycle. The loads are a hydrogen-reduction-of-ilmenite oxygen plant, baseline 1.63 kg/h for 1,154 kg of oxygen per cycle at 25.83 kW, and a six-person base camp at 28.05 kW continuous. The architectures are a fixed non-tracking photovoltaic array with lithium-ion battery storage, the same array with regenerative fuel cell storage, and a modular 10 kWe Kilopower fission reactor block. Component mass and power are built from analytical scaling relations and curve fits to representative commercial data rather than from hardware design. Three load cases are run: the oxygen plant alone, the base camp alone, and the two combined at 53.84 kWe. For continuous day and night operation the reactor is lowest mass in every case. For the oxygen plant restricted to daytime production with a 500 W nighttime keep-alive heater, the array with regenerative fuel cell falls below the baseline reactor configurations. Energy storage is the dominant mass term in every continuous photovoltaic case.

---

### Background and objective

The report opens by surveying power levels across eleven classes of lunar surface activity and then picks two of them for detailed sizing. Table 1 (Colozza, 2020, p. 2) gives habitat and base camp power as 30.0 to at least 100.0 kW at an average of 5 to 10 kW per person, in situ resource utilization processing as tens to hundreds of kW thermal and tens to hundreds of kW electrical, a single communications transmitter as 0.3 to 1.0 kW, support vehicles and rovers as 2.0 to 10.0 kW, a long-range pressurized rover or heavy equipment vehicle as 7.0 to 30.0 kW, a charging station as 1.0 to 10.0 kW, electrostatic radiation shielding as 1.0 to at least 10.0 kW, a long-distance science rover as 0.1 to 5.0 kW, and remote stand-alone geology and astronomy stations as 0.1 to 1.0 kW each. These are REQUIREMENT-class ranges quoted from the survey, not results.

Three sizing assumptions are stated up front (Colozza, 2020, p. 2) and they govern everything downstream. The power systems provide power over one day and night period. The systems either operate continuously over that period or operate during the daytime, approximately 354 h, and carry enough power to survive the nighttime, also approximately 354 h. The oxygen goal is at least 1,000 kg of oxygen per day and night cycle. The base camp goal is to sustain six astronauts through day and night.

The lunar environment section supplies the physical constants used downstream. Table 2 (Colozza, 2020, p. 4) gives day length 708.33 h, maximum declination angle 1.5 degrees, lunar orbital eccentricity 0.0549, Earth and Moon system orbital eccentricity 0.0167, surface gravity 1.623 m/s2, surface temperature minimum 102 K and maximum 385 K, daytime average sink temperature 270 K, nighttime average sink temperature 84 K, lunar radius 1,737 km, surface albedo 0.3, and mean solar intensity at Earth's orbital distance 1,353 W/m2. Solar intensity varies with the Earth orbit eccentricity over the year, computed by Equations 2 and 3 and plotted in Figure 6 (Colozza, 2020, p. 7). Regolith composition for highland and mare terrain is in Table 3 (Colozza, 2020, p. 5); mare titanium dioxide content is 7.3 percent by weight against zero tabulated for highland. Table 4 (Colozza, 2020, p. 7) gives granular ilmenite density 1,400 kg/m3, ilmenite particle density 4,790 kg/m3, ilmenite mass fraction of regolith 0.07, regolith friction coefficient 0.40, and illuminated surface temperature 384 K; average regolith density is stated as approximately 1,000 kg/m3 (Colozza, 2020, p. 5).

### Methods and scope

#### Site, latitude, and the darkness the analysis assumes

Every case in this report is sited at 30 degrees north latitude. The value is stated as a power-system input in Table 14 (Colozza, 2020, p. 34), which records that 30 degrees north was selected as the operational latitude for all cases, and it is restated for the base camp at the head of Section 4.0 (Colozza, 2020, p. 23). The array is fixed at a 30 degree inclination, south facing, and does not track the Sun. The baseline date is 21 March, day number 80, the vernal equinox, at a solar intensity of 1,359 W/m2. Every energy-balance caption in Section 6.0 repeats those four conditions verbatim.

The darkness the analysis carries is a full equatorial-class lunar night. It is stated once as a numeric assumption, approximately 354 h of daytime and approximately 354 h of nighttime out of the 708.33 h cycle (Colozza, 2020, p. 2), and it is never revised. The abscissa of every energy-balance figure runs 0 to 708 h with ticks every 59 h. The one operating window the source prints as a number is the 218.3 h daytime production window used in the daytime-only cases (Colozza, 2020, p. 62). The exact hours at which the array output curve crosses zero or crosses the load level are NOT PRINTED anywhere, in caption, axis label, table, or body text; they exist only as positions on a plotted curve and are recorded here as not available from this source rather than digitized.

The report knows that polar sites with near-continuous illumination exist, names one, and does not use it. Discussing the 1.5 degree declination angle, it states that "high elevations near the poles could be in constant sunlight throughout the year", conditioned on local geographical obstructions, and identifies the rim of Peary crater at the north pole as such a location found by Clementine in 1994, citing its Reference 2, Bussey et al., Permanent Sunlight at the Lunar North Pole, Lunar and Planetary Science XXXV, 2004 (Colozza, 2020, p. 3), with that reference printed in the report list (Colozza, 2020, p. 89). That observation is made in the environment section and is never carried into any sizing case. No case is sited at a pole, on a ridge, on a peak, or at any location with an illumination duty factor other than the 30 degree north profile.

Measured absences, each admitted only after controls fired on the same instrument in the same run. Live controls on the whitespace-normalized full text: Kilopower 39 occurrences, storage 69, night 130, transmission 39, latitude 20, crater 14, pole 7. With that instrument proven live, the following return ZERO occurrences across all 98 sheets: polar, eclipse, darkness, permanently shadowed, south pole, Shackleton, continuous illumination, hybrid, duty cycle. The seven hits on pole are the four passages summarized above plus the magnetic separator drum poles and the Reference 2 title. The single hit on beam is the direct beam component of solar radiation reaching the array (Colozza, 2020, p. 34). So this source contains no polar illumination model, no eclipse-duration statistic, and no treatment of a permanently shadowed region.

The one place a polar site is quantified at all is thermal, not electrical. Operating near the poles at a 100 K surface temperature raises the power needed to heat the ilmenite by 32 percent, from 13.4 to 17.7 kW, which is a 16.5 percent increase in total oxygen-plant power, and the report states that this approximately represents the maximum effect site selection and time of operation can have on the system power requirement (Colozza, 2020, p. 17). That bounding claim is about the process heat load. It is not a claim about illumination, storage, or array sizing, and nothing in the document extends it to those.

#### The storage sizing policy, which is a stated design choice rather than a physical constraint

The array is sized by an energy balance, not by a peak-power rule. Energy collected by the array over the day is Equation 62, the integral of array output power over the day. Daytime load energy is Equation 63, the integral of daytime load power. Nighttime energy is Equation 64, the integral of NIGHTTIME LOAD POWER over the night, and the sizing statement is Equation 65, which sets nighttime energy equal to the array surplus multiplied by the charge efficiency and the discharge efficiency (Colozza, 2020, pp. 37-38). The array area is then iterated until Equation 65 balances. Battery mass follows from Equation 76 as nighttime energy divided by the product of battery specific energy and depth of discharge (Colozza, 2020, p. 42).

The policy therefore lives entirely in the choice of nighttime load power in Equation 64, and the report uses two different values of it and says plainly that this is an operational choice. For continuous cases the nighttime load equals the daytime load and storage carries FULL LOAD through the whole night. The report states for the base camp that the power system is required to operate continuously day and night at the same power level, so the photovoltaic system must have sufficient storage to operate throughout the night, and attributes the resulting 95 percent battery mass fraction to the requirement of operating at full power throughout the night (Colozza, 2020, p. 68). For the oxygen plant it offers the alternative explicitly, in a passage that opens by observing that the nighttime storage requirement is a dominating factor in sizing the photovoltaic system: oxygen is produced only during the day and the plant is placed in a HIBERNATION MODE at night, drawing only enough power to hold the equipment at a survivable temperature, estimated at approximately 500 W of heater power by the same method used for the habitat night heat leak (Colozza, 2020, p. 62). To keep the comparison honest the plant is then scaled up so that daytime-only operation still yields the baseline 1,154 kg of oxygen per cycle, which requires 5.29 kg/h over 218.3 h and gives 1,158 kg.

Load shedding is thus modeled, and the report is explicit that it is available only where the mission permits it. The base camp cannot shed. For Case 2 the report states there was no means of eliminating or reducing the energy storage requirement for the photovoltaic systems, because the crew must be sustained day and night (Colozza, 2020, p. 78). The oxygen plant can shed, and Section 6.3 applies the shed to the combined case as well, on the ground that nighttime oxygen production on stored energy was shown to be noncompetitive in Case 1 (Colozza, 2020, p. 72). No intermediate policy appears anywhere: there is no partial duty cycle, no fractional load carry, no accepted outage, and no availability or reliability allowance. The two policies modeled are full load and keep-alive, and nothing between them.

#### Architectural alternatives to mass storage, and which of them the source considers

Four architectural alternatives are worth checking against this source because each changes what storage has to do. Three are absent and one is present but attached to the reactor rather than to the array.

Linked or distributed arrays at separated sites, so that one array is lit while another is dark, are ABSENT. Figure 27 (Colozza, 2020, p. 33) shows a single array field, one energy storage unit, and one load. Array modules are spaced 3 m apart within one field for wiring purposes, per Equations 68 and 69 (Colozza, 2020, p. 39), and no second site exists in any layout.

Power beaming is ABSENT. The string returns one hit and it is the direct beam component of incident sunlight.

Cabled power transmission between separated sites IS modeled, but only for the fission reactor, and it is modeled because of radiation standoff rather than illumination. Section 5.2 deploys a cable from the reactor to the loads, boosts the 120 Vdc reactor output to 1,500 Vdc for transmission to cut conductor gauge and mass, and steps it back down at each load, with a dc to dc converter at each end of each line. Table 23 (Colozza, 2020, p. 58) gives two wires per reactor system, 1,500 V transmission voltage, and 1,150 m transmission line length. Line resistance per metre and transmission loss are Equations 104 and 105, converter mass is Equation 106 fitted to the data in Figure 47, and total reactor system mass is Equation 107. The same section discusses placing the reactor over the horizon from the crew, using Equation 100 for horizon distance, and notes that for an observer 3 m or less above the surface the horizon is approximately 3 km (Colozza, 2020, p. 57). Nothing analogous is offered for an array.

A hybrid architecture combining solar and fission is ABSENT; the string hybrid returns zero. The three architectures are compared against each other and never combined.

Sun tracking is considered and rejected. The array is fixed because a fixed array uses a simple lightweight structure and is less complicated to install and operate than a tracking array (Colozza, 2020, p. 34). Array elevation above the surface is never considered; the array is a ground-lying fixed panel field, and there is no mast, tower, or tripod anywhere in the photovoltaic mass boundary.

#### The oxygen plant model

Thirteen candidate oxygen extraction chemistries are listed and one is carried forward. Hydrogen reduction of ilmenite was selected for its relatively low process temperature, about 1,000 degC, below the melting point of the soil, and its present-day technology readiness (Colozza, 2020, p. 8). The process chain is scoop and delivery conveyor, vibrating screen, electromagnetic drum separator at 90 percent separation efficiency, fluidized-bed reactor holding ilmenite at 1,273 K for 1 h, then a proton-exchange-membrane electrolyzer at 72 percent efficiency splitting the reaction water into hydrogen for recycle and oxygen for storage. Baseline assumptions are Table 5 (Colozza, 2020, p. 16): reactor diameter 0.80 m, reactor height 0.80 m, reactor standing 1.00 m above the surface, scoop travel 1.00 m, conveyor length 3.00 m, electric motor efficiency 0.90, fluidized bed porosity 0.50, hydrogen velocity 0.30 m/s, ilmenite particle shape factor 0.83, 50 layers of multilayer insulation at 0.10 mm spacing, and emissivity 0.17 for both the reactor wall and the insulation layers. Gibbs free energy for water splitting at 340 K is derived as 230.4 kJ/mol, equivalently 3,520 Wh/kg (Colozza, 2020, p. 14).

Two component datasets under that model are reusable on their own. Table 6 (Colozza, 2020, p. 21) gives electrolyzer component scaling factors in kg per kW: stack 2.00, water tank and heater 0.10, filters 0.12, propellant lines and fittings 0.52, controller unit 0.16, wiring 0.30, heat exchanger 1.00, water pump 0.27, check valves 0.08, flow regulators 0.62, control valves 0.16, pressure and temperature sensors 0.07, and flow sensors 0.06, summing to 5.46 kg/kW. Table 7 (Colozza, 2020, p. 20) gives tank sizing: the process reactor tank at 147 psi in titanium alloy of 120,000 psi yield strength and 0.8 m diameter, and both the hydrogen and oxygen storage tanks at 1,350 psi in carbon composite of 275,000 psi yield strength, the hydrogen tank at 0.8 m and the oxygen tank at 1.27 m diameter, all at a factor of safety of 2.5. The oxygen tank diameter is set by the mass of oxygen produced over one lunar day and night cycle, which is why it dominates plant mass. Regolith handling relations are curve fits: vibrating screen throughput against particle size, Equation 35, screen mass against screen area, Equation 37, and magnetic separator mass against separation rate, Equation 38.

#### The base camp model

Base camp power is built up rather than assumed. Table 8 (Colozza, 2020, p. 24) gives the six-person environmental control and life support breakdown in kW: air handling with carbon dioxide removal and oxygen generation 5.85, biomass 6.10, food 4.27, thermal 1.03, waste 0.01, water processing 1.29, and extravehicular activity support 2.50, totalling 21.05 kW, sourced to the report's Reference 13. A nighttime heat-leak model then tests whether heaters are needed. Table 11 (Colozza, 2020, p. 26) totals the leak at 4,096 W: insulation 245 W, passthroughs and seams 1,883 W, radiator connections 42 W, support legs 426 W, and airlock structure 1,500 W, for an 8 m hemispherical habitat at 295 K interior against an 84 K night sink. Because that leak is smaller than the life-support waste heat, Equation 50 sets required heater power to ZERO. Communications is sized from a link budget with Shannon-capacity data rates, Equations 51 to 55, with Table 13 (Colozza, 2020, p. 28) giving a 10 m tower, 30 GHz centre frequency, and 270 K effective noise temperature, and a maximum surface-to-surface range of 11.1 km; 1 kW is then assumed for the communications system. Operational equipment power is read from Desert Research and Technology Studies Deep Space Habitat field data spanning 2.5 to 7.0 kW, from which 6 kW is selected as a conservative estimate (Colozza, 2020, p. 32). Equation 56 sums them: 21.05 plus 0 plus 1 plus 6 gives the 28.05 kW continuous base camp load.

The communications requirement the link budget is checked against is Table 12 (Colozza, 2020, p. 27), sourced to the report's Reference 14, and it is reusable independently of the power analysis: lunar surface to spacecraft relay 1,000 Mbps over 6,500 km; lunar surface low-rate communications 10 Mbps over 2,700 km; surface to lunar science orbiter 100 Mbps over 2,700 km; and lunar surface human outpost 1,000 Mbps over 2,700 km. The report notes that the communications system must run continuously through day and night alongside the habitat, so it is part of the load storage must carry.

#### The photovoltaic mass boundary

The complete photovoltaic and battery system mass is stated as a sum of seven terms (Colozza, 2020, p. 46): array blanket, array structure, battery charge controller, wire, junction and breaker box, battery, and thermal control. Array blanket mass is areal density times array area, Equation 66, using the UltraFlex multijunction value of 1.59 kg/m2. Array structure is a fixed carbon composite frame at 0.55 kg/m2 of array area, Equation 67, sourced to the report's References 19 and 20. Wire mass is Equation 73, built from the number of runs, run length, and a gauge selected by current from Equations 70 to 72, and the wire is bare and uninsulated, held apart by spacers, chosen because bare conductors reject heat better and because insulation adds mass, degrades under ultraviolet exposure, and mismatches the conductor in thermal expansion (Colozza, 2020, p. 41). Breaker box mass is a logarithmic fit in the number of connections, Equation 74. Thermal control is radiator plus multilayer insulation plus cold plates plus heat pipes, sized on the battery enclosure area and the charging heat load. This boundary contains NO mast, tower, tripod, deployment mechanism, sun-tracking drive, landing adapter, or relocation hardware, because the configuration analyzed has none of them.

Table 14 (Colozza, 2020, p. 34) carries the remaining electrical inputs: solar cell efficiency 28 percent, array fill factor 0.89, battery charge efficiency 0.99, battery discharge efficiency up to 0.99 and rate dependent, fuel cell efficiency 0.65, and electrolyzer efficiency 0.85. Dust coverage is set to zero on the assumption that a crewed base camp will clean the array periodically (Colozza, 2020, p. 35).

The thermal control term is built from four components and is sized on the battery enclosure, which is why it tracks storage mass rather than power. Enclosure area is Equation 80, six times the two-thirds power of the product of battery mass and a lithium-ion specific volume of 5.5 times ten to the minus fourth m3/kg. Radiator area is sized from the charging heat load against Table 16 (Colozza, 2020, p. 44): emissivity 0.84, radiator temperature 300 K, lunar surface absorptivity 0.3, view factor to the surface 0.5, solar absorptivity 0.14, maximum Sun angle 75 degrees, and a louver area adjustment factor of 1.3. Radiator mass follows from Table 17 in kg/m2: panels 3.30, coating 0.42, tubing 1.31, header 0.23, adhesives 0.29, stingers 1.50, attachment 0.75, and louvers 4.50, which is 8.30 kg/m2 summed. Multilayer insulation mass follows from Table 18 in kg/m2: spacer 0.0063, reflective layer 0.0550, outer cover 0.1100, inner cover 0.0500, and attachment and seals 0.1000. Cold plate and heat pipe mass follows from Table 19: coverage coefficient 0.25, plate thickness 0.005 m, plate width and length 0.1 m each, aluminium at 2,700 kg/m3, and a heat pipe mass coefficient of 0.15 kg/m. Total thermal control mass is Equation 84, the sum of radiator, insulation, cold plates, and heat pipes.

#### The regenerative fuel cell model

The regenerative fuel cell is an electrolyzer plus a fuel cell plus reactant tanks. Fuel cell component scaling factors are Table 20 (Colozza, 2020, p. 47) in kg per kW of nighttime load, summed by Equation 90: stack 2.00, hydrogen separation tank 0.20, filters 0.12, propellant lines and fittings 0.52, controller unit 0.16, wiring 0.30, heat exchanger 1.00, water pump 0.27, check valves 0.08, flow regulators 0.62, control valves 0.16, pressure and temperature sensors 0.07, flow sensors 0.06, hydrogen phase separator 0.07, hydrogen regulator 0.05, oxygen separation tank 0.18, and oxygen regulators 0.09, summing to 5.90 kg/kW. The source attaches an explicit validity floor to these factors and to the electrolyzer factors of Table 6: because they are linear they are NOT representative of regenerative fuel cell systems below 500 W, since structures and attachments become a larger mass fraction and scaling turns nonlinear at low power (Colozza, 2020, p. 47). Reactant mass follows from Faraday's constant and the required nighttime energy, with a 20 percent residual by mass added to both hydrogen and oxygen to account for reactants and water left in lines and tanks. Required oxygen mass is one eighth the hydrogen mass by Equation 92. Tank volumes come from the gas constants 4,157.2 and 259.84 J per kg K for hydrogen and oxygen, Equations 93 and 94, and the tanks are spherical. Table 21 (Colozza, 2020, p. 48) gives both reactant tanks as carbon composite at 2,000 psi, or 13.8 MPa, with a factor of safety of 2.0 and a material yield strength of 275,000 psi, or 1,900 MPa. That 2,000 psi storage pressure and 2.0 factor of safety are the conditions under which every regenerative fuel cell mass in this report was computed.

#### The reactor model

The reactor is treated as a fixed modular block rather than a scalable design. Table 22 (Colozza, 2020, p. 52) gives three columns, a 1 kWe baseline, a 10 kWe baseline, and a 10 kWe core-based advanced variant. Electrical output 1, 10, and 10 kW; reactor operating temperature 800, 800, and 1,000 degC; Stirling engine efficiency 23, 23, and 35 percent; reactor radiator area 3.2, 20, and 20 m2; reactor mass 136, 235, and 235 kg; shield mass 148, 547, and 547 kg; balance-of-plant mass 122, 763, and 763 kg; total mass 406, 1,545, and 1,545 kg. Both distinct columns close on their own arithmetic: 136 plus 148 plus 122 gives 406, and 235 plus 547 plus 763 gives 1,545. The advanced column carries the SAME masses as the 10 kWe baseline and differs only in temperature and conversion efficiency, so the table supplies two distinct mass-versus-power design points, not three. The table is footnoted to the report's Reference 28, a NASA COMPASS Team draft titled ISRU Power System Demonstrator, dated 2016, which carries no report number and no accession.

Table 22 carries further rows that a mass-only reading of it drops, and they are the rows that describe what the unit physically is:

    Nuclear fuel                              93 percent enriched solid cast U-235 Mo alloy, all columns
    Reactor type                              fast spectrum, Be reflector, single centered control rod
    Design life                               greater than 10 yr
    Reactor thermal power output, kW          4.3          43.3        43.3
    Output power voltage, Vdc                 120          120         120
    Distance for 26.3 rem/yr, m               100          500         500
    Distance for 5 rem/yr, km                 0.23         1.15        1.15
    Stowed diameter, m                        1.1          1.5         1.5
    Stowed height, fixed radiator, m          3.0          7.3         7.3
    Stowed height, deployable radiator, m     2.0          3.3         3.3

The 10 kWe unit is described as an extension of the tested 1 kW design rather than a new design, reached by minor changes to core size and by integrating the heat pipes into the core instead of mounting them outside it (Colozza, 2020, p. 52). Operational characteristics are stated for the concept: units are ganged to build up power, robotically placed at standoff with the transmission cable spooled out as the unit is moved, radiators deployed before activation, full power available in 4 to 6 h depending on size, and after shutdown robotic operations may resume nearby within 1 day and crewed operations within 1 week, which is what makes the units relocatable (Colozza, 2020, p. 51). The section also carries a compact history of space reactor programs: Project Rover and NERVA with 17 reactors developed and tested and the Phoebus design ground tested at 4,000 MWth, the Space Power Advanced Reactor at 1,200 kWth and 1,500 K from 1979, SP-100 at 2.4 MWth and 1,350 K aiming at 100 kWe and cancelled in 1994, a Multimegawatt Space Reactor program cancelled in 1990, a Training Research Isotopes General Atomic thermionic test reactor programme ended in 1993, and the Soviet TOPAZ thermionic reactor, flown on two satellites in 1987, whose second generation targeted 6 kWe from 15 kWth (Colozza, 2020, pp. 49-50).

Radiation is controlled by shielding plus standoff. The Table 22 shield mass yields 26.3 rem/yr at 500 m from the 10 kWe unit, which is far above the 5 rem/yr radiation worker whole-body limit the report adopts, so distance makes up the difference. Dose falls with the inverse square of distance, Equation 99. Standoff is 1.15 km for one 10 kWe unit, 1.99 km for three, and 2.81 km for six, and the 1.15 km figure presumes direct line of sight. Number of reactors is Equation 101, rounded up to a whole unit. Figure 42 plots dose against regolith thickness for an unshielded reactor at 1 km and shows dose falling steeply with thickness. Three alternative shielding approaches are described but not carried into any mass result: piling regolith around the reactor with the robotic deployment equipment or stacking regolith blocks or bags, placing the reactor in a pit and covering the pit, and siting the reactor in a crater or depression to use the terrain, illustrated in Figures 43 to 45 (Colozza, 2020, pp. 53-56). Each carries a stated operational condition, chiefly that the area above the reactor remains a keep-out zone unless a cone shield is added on top.

### Key findings

#### The two loads, built up rather than assumed

The oxygen plant baseline is 1.63 kg/h, giving 1,154 kg of oxygen per day and night cycle. Table 24 (Colozza, 2020, p. 60) gives its component power and mass:

    Component                          Required power, W    Mass, kg
    Scoop and delivery conveyors               134              51
    Vibrating screen                           132              68
    Magnetic separator                          98              98
    Fluidized bed reactor                       na              27
    Hydrogen tank                               na              19
    Oxygen tank                                 na             488
    Electrolyzer                             8,965              49
    Thermal power to process reactor        13,386              na
    Heat of reaction                         2,563              na
    Heat loss                                  552              na
    Thermal control system                      na             326
    Total                                   25,830           1,125 Figure 18 (Colozza, 2020, p. 22), image-only and recovered by rendering, gives the same plant as a mass breakdown at slightly different precision:

    Oxygen storage                   486.4 kg    43 percent
    Thermal control                  332.0 kg    29 percent
    Magnetic separator                97.7 kg     9 percent
    Vibrating screen                  68.4 kg     6 percent
    Conveyor belts                    50.9 kg     5 percent
    Electrolyzer                      48.9 kg     4 percent
    Reactor tank                      26.9 kg     2 percent
    Hydrogen storage                  18.6 kg     2 percent

Those rows sum to 1,129.8 kg against the 1,125 kg of Table 24, and the two disagree on the oxygen tank, 486.4 against 488 kg, and on thermal control, 332.0 against 326 kg. The oxygen tank alone is 43 percent of plant mass, and it is sized to hold one full day and night cycle of production, stated in the body text as 1,155 kg of oxygen against the 1,154 kg quoted elsewhere. Splitting that total, electrical demand is 9,329 W and thermal demand is 16,502 W; the 25,830 W figure is the all-electric case in which resistance heaters substitute for reactor waste heat. Figure 11 (Colozza, 2020, p. 17) breaks the thermal side into heating ilmenite 13.39 kW at 81 percent, reaction 2.56 kW at 16 percent, and loss to surroundings 0.55 kW at 3 percent. Figure 12 on the same page breaks the electrical side into electrolyzer 8,965 W at 96 percent, vibrating screen 132 W, magnetic separation 98 W, lifting regolith 62 W, lifting ilmenite 61 W, and scooping regolith 11 W. Both figures are image-only and were recovered by rendering.

The base camp is 28.05 kW continuous. Figure 26 (Colozza, 2020, p. 32), also image-only, gives environmental control and life support 21.05 kW at 75 percent, operations 6 kW at 21 percent, communications 1 kW at 4 percent, and heaters 0 kW at 0 percent. The zero heater term is a computed result, not an omission: Equation 50 sets it to zero because the 4,096 W night heat leak is smaller than the life-support waste heat available inside the habitat.

The combined case is 53.84 kWe continuous day and night.

#### Energy storage specific energy, with the condition attached to each figure

This is the part of the source most often quoted without its constraint set, so each figure is given with what it is valid for.

Battery, 200 Wh/kg. The value is the specific energy of a PACKAGED battery system comprising multiple cells, not a cell figure, and it is selected for lithium-ion from the survey in Figure 37 (Colozza, 2020, pp. 42-43). Sodium sulfur sits higher on that survey but is a thermal battery and is ruled out as unsuitable for long-duration operation, and therefore for the lunar night. Depth of discharge is 0.80, justified by cycle life: over an estimated 15 year life the batteries see only 196 cycles, which permits a deep discharge without a life penalty, per Figure 38 (Colozza, 2020, pp. 42-43). Usable specific energy is therefore 200 Wh/kg times 0.80, which is 160 Wh/kg. The source states explicitly that the battery specific energy is CONSTANT regardless of operating time (Colozza, 2020, p. 62), so this figure carries no duration condition. It does carry a cycle-count condition: the deep discharge is defensible because there are 196 cycles, and a site with more frequent, shorter outages would cycle far more often and would sit at a different point on Figure 38.

Regenerative fuel cell, 832 Wh/kg. Valid for Case 1 continuous operation at 25.8 kW held through the night, and the source attaches the condition in its own words, saying the value follows from the Section 5.1 mass scaling analysis and the required operating time and power level set by the energy balance curve of Figure 50 (Colozza, 2020, p. 62). The corresponding regenerative fuel cell mass is 8,861 kg.

Regenerative fuel cell, 831 Wh/kg. Valid for Case 2, the base camp at 28.05 kW held through the night, with the component breakdown printed in Table 29 (Colozza, 2020, p. 70) and a system total of 9,627.3 kg.

Regenerative fuel cell, 456 Wh/kg. Valid for the 500 W nighttime keep-alive case, with the component breakdown in Table 26 (Colozza, 2020, p. 65) and a system total of 309.4 kg. The source explains the drop as the consequence of a smaller total energy requirement at a lower power level, and generalizes it: as operating power decreases, regenerative fuel cell specific energy decreases, because component scaling is nonlinear at low power and the reactants become a smaller fraction while the electrical conversion hardware becomes a larger one (Colozza, 2020, p. 65).

The mechanism behind all three figures is stated plainly and it is what makes them duration-dependent. At fixed power, longer operation raises regenerative fuel cell specific energy, because every component except the reactants and the storage tanks is sized on MAXIMUM OUTPUT POWER and only the tanks and reactants scale with duration (Colozza, 2020, p. 62). It follows from the source's own mechanism that a SHORTER outage at the same power gives a LOWER specific energy than 832 Wh/kg, and the report gives no figure for any duration shorter than its own night. Anyone applying 832 Wh/kg to an outage of hours or a few days is using it outside the conditions the source states for it, in the optimistic direction.

An arithmetic inversion performed during summarization, not printed in the source, pins the durations these figures correspond to. The source never prints a storage discharge duration for any case. Inverting each printed storage mass against its printed specific energy and its printed load gives: Case 1 battery, 58,270.1 kg times 0.160 kWh/kg gives 9,323.2 kWh, which at 25.8 kW is 361.4 h; Case 2 battery, 63,305 kg times 0.160 kWh/kg gives 10,128.8 kWh, which at 28.05 kW is 361.1 h; Case 1 regenerative fuel cell, 8,861 kg times 0.832 kWh/kg gives 7,372.4 kWh, which at 25.8 kW is 285.7 h; Case 2 regenerative fuel cell, 9,627.3 kg times 0.831 kWh/kg gives 8,000.3 kWh, which at 28.05 kW is 285.2 h; and the keep-alive regenerative fuel cell, 309.4 kg times 0.456 kWh/kg gives 141.1 kWh, which at 500 W is 282.2 h. The battery cases therefore correspond to roughly 361 h of full-load discharge and the regenerative fuel cell cases to roughly 285 h, both of the same order as the stated approximately 354 h night. The difference between the two is consistent with the source's own statement that the larger regenerative fuel cell array delivers usable power earlier in the morning and later in the evening and so shortens the interval storage must cover (Colozza, 2020, p. 73). These inverted durations are DERIVED here and are not source statements.

#### Array areal density, the source's independent technology dataset

Table 15 (Colozza, 2020, p. 36), sourced to the report's Reference 18, gives six array and cell combinations:

    Array type      Cell type        Array efficiency, percent   Areal density, kg/m2
    UltraFlex       Thin film                  11.5                     0.80
    UltraFlex       Multijunction              25.0                     1.59
    RAPDAR          Thin film                   8.5                     0.33
    RAPDAR          Thin film                  11.5                     0.42
    RAPDAR          Multijunction              25.0                     1.79
    Rigid panel     Multijunction              25.0                     3.12

RAPDAR is the report's abbreviation for a rollout and passively deployed array, and UltraFlex is attributed to AEC-Able Engineering Company, Inc. The source states that these are OVERALL ARRAY efficiencies, already adjusted from cell efficiency by the fill factor. The analysis uses the UltraFlex multijunction row, 1.59 kg/m2, throughout. The 28 percent cell efficiency of Table 14 is separately described as representative of near-term large-scale space array capability, with the note that research cells in Figure 30 reach higher values under laboratory conditions but that large-scale production arrays fall below single-sample research cells (Colozza, 2020, p. 35).

#### Case 1, oxygen plant alone

Continuous day and night production, photovoltaic array with battery, total 60,563.2 kg. Figure 49 (Colozza, 2020, p. 61) is image-only and its recovered legend is:

    Battery                       58,270.1 kg    96.21 percent
    Thermal control system         1,788.0 kg     3.00 percent
    Array blanket                    331.5 kg     0.55 percent
    Structure                        114.1 kg     0.19 percent
    Battery charge controller         29.4 kg     0.05 percent
    Junction and breaker box          16.5 kg     0.03 percent
    Wire                              13.6 kg     0.02 percent
    Total                         60,563.2 kg

Rows sum to 60,563.2 kg against a printed total of 60,563.2 kg, exactly. Array area is printed as 208.5 m2 in the Figure 48 caption and total cycle energy as 18,288 kWh; peak array output printed on the Figure 48 plot is 70.9 kW.

Continuous production, photovoltaic array with regenerative fuel cell, total 11,789 kg. Figure 51 (Colozza, 2020, p. 62), image-only:

    Regenerative fuel cell         8,861 kg    75.18 percent
    Thermal control system         2,135 kg    18.11 percent
    Array blanket                    562 kg     4.77 percent
    Structure                        193 kg     1.64 percent
    Junction and breaker box          22 kg     0.18 percent
    Wire                              14 kg     0.12 percent
    Total                         11,789 kg

Rows sum to 11,787 kg against a printed total of 11,789 kg, a 2 kg residue from rounding the printed rows. Array area is 353.6 m2 and peak array output 120.2 kW, per the Figure 50 caption.

Daytime-only production at 5.29 kg/h with 500 W keep-alive, photovoltaic array with battery, total 2,740 kg. Figure 53 (Colozza, 2020, p. 64), image-only and previously unrecovered on this project:

    Battery                          1,041 kg    38.00 percent
    Oxygen plant mass increase         865 kg    32.00 percent
    Array blanket                      520 kg    18.98 percent
    Structure                          179 kg     6.53 percent
    Thermal control system              66 kg     2.00 percent
    Wire                                47 kg     1.73 percent
    Junction and breaker box            21 kg     0.76 percent
    Battery charge controller            1 kg     0.03 percent
    Total                            2,740 kg

Rows sum to 2,740 kg exactly. Note that this total INCLUDES the 865 kg penalty for scaling the oxygen plant up to the higher daytime production rate, so it is not a power-system-only number.

Daytime-only production, photovoltaic array with regenerative fuel cell, total 2,020 kg. Figure 54 (Colozza, 2020, p. 64), image-only and previously unrecovered:

    Oxygen plant mass increase         865 kg    43.00 percent
    Array blanket                      520 kg    25.74 percent
    Regenerative fuel cell             309 kg    15.30 percent
    Structure                          179 kg     8.86 percent
    Thermal control system              79 kg     3.91 percent
    Wire                                47 kg     2.33 percent
    Junction and breaker box            21 kg     1.04 percent
    Total                            2,020 kg

Rows sum to 2,020 kg exactly. Storage has fallen from the largest item to the third largest, and the plant mass penalty has become the largest.

Reactor variants. Two 10 kWe baseline units using reactor waste heat directly, 3,090 kg, per Table 27 (Colozza, 2020, p. 66); this configuration also produces 18,488 W of unused excess heat, which is the mass penalty of the fixed modular block. One 10 kWe advanced unit at 1,000 degC and 35 percent Stirling efficiency, 1,545 kg, per Table 28 (Colozza, 2020, p. 67); Figure 56 on that page splits its 43.3 kW of heat into 26.49 kW required by the Stirling engine at 62 percent, 13.30 kW to heat ilmenite at 31 percent, 2.55 kW to the reaction at 6 percent, and 0.55 kW lost to surroundings at 1 percent. Three 10 kWe baseline units at 1.99 km standoff supplying all 25,830 W electrically, 4,853 kg. Figure 57 (Colozza, 2020, p. 67), image-only:

    Balance of plant               2,289 kg    47.17 percent
    Shielding                      1,641 kg    33.82 percent
    Reactors                         705 kg    14.53 percent
    Wiring                           162 kg     3.33 percent
    dc to dc converter                56 kg     1.15 percent
    Total                          4,853 kg

The three reactor terms are exactly three times the Table 22 10 kWe column, giving 4,635 kg, and the legend sums to 4,853 kg exactly. That legend is the only place the transmission overhead of the three-reactor configuration appears, at 218 kg.

Case 1 comparison, Figure 58 (Colozza, 2020, p. 68), with all seven bar values printed above their bars: baseline Kilopower electrical output at 1.99 km 4,853 kg; baseline Kilopower thermal and electrical 3,090 kg; advanced Kilopower thermal and electrical 1,545 kg; array with battery continuous 60,563 kg; array with regenerative fuel cell continuous 11,789 kg; array with battery daytime only 2,740 kg; array with regenerative fuel cell daytime only 2,020 kg.

#### Case 2, base camp alone at 28.05 kW continuous

Photovoltaic array with battery, total 65,786 kg. Figure 60 (Colozza, 2020, p. 69), image-only:

    Battery                       63,305 kg    96.23 percent
    Thermal control system         1,933 kg     3.00 percent
    Array blanket                    360 kg     0.55 percent
    Structure                        124 kg     0.19 percent
    Battery charge controller         32 kg     0.05 percent
    Junction and breaker box          17 kg     0.03 percent
    Wire                              14 kg     0.02 percent
    Total                         65,786 kg

Rows sum to 65,785 kg against a printed total of 65,786 kg, a 1 kg rounding residue. Array area is 226.5 m2, cycle energy 19,869 kWh, and the Figure 59 plot prints a maximum array output power of 76.99 kW.

Photovoltaic array with regenerative fuel cell, total 12,805 kg. Figure 62 (Colozza, 2020, p. 71), image-only:

    Regenerative fuel cell         9,627 kg    75.19 percent
    Thermal control system         2,319 kg    18.11 percent
    Array blanket                    611 kg     4.77 percent
    Structure                        210 kg     1.64 percent
    Junction and breaker box          22 kg     0.18 percent
    Wire                              15 kg     0.12 percent
    Total                         12,805 kg

Rows sum to 12,804 kg against a printed total of 12,805 kg, a 1 kg rounding residue. Array area is 384.2 m2 and cycle energy 19,868 kWh, and the source notes the regenerative fuel cell array is 42 percent larger than the battery array because of the lower charge and discharge efficiency. Note the internal tension in the source's own prose here: the body text says the regenerative fuel cell constitutes approximately 92 percent of total power system mass while its own Figure 62 legend prints 75.19 percent (Colozza, 2020, pp. 68-71). The 92 percent figure is unexplained; the legend and the summary section both support 75 percent.

Kilopower, three 10 kWe units at 1.99 km, total 4,853 kg, the same breakdown as Figure 57.

Case 2 comparison, Figure 63 (Colozza, 2020, p. 71), values printed on the bars: Kilopower reactor system 4,853 kg, array with battery 65,786 kg, array with regenerative fuel cell 12,805 kg.

#### Case 3, combined base camp and oxygen plant at 53.84 kWe

Photovoltaic array with battery, daytime-only oxygen production at 5.29 kg/h, 172.5 kW daytime and 28.05 kW nighttime, total 64,419 kg. Figure 65 (Colozza, 2020, p. 73), image-only:

    Battery                       60,075 kg    93.26 percent
    Thermal control system          1,850 kg     3.00 percent
    Array blanket                   1,092 kg     1.70 percent
    Oxygen plant mass increase        865 kg     1.00 percent
    Structure                         376 kg     0.58 percent
    Wire                              101 kg     0.16 percent
    Battery charge controller          32 kg     0.05 percent
    Junction and breaker box           28 kg     0.04 percent
    Total                          64,419 kg

Rows sum to 64,419 kg exactly. Array area is 687 m2.

Photovoltaic array with regenerative fuel cell, daytime-only oxygen production at 4.66 kg/h, 152.2 kW daytime and 28.05 kW nighttime, total 12,731 kg. Figure 67 (Colozza, 2020, p. 75), image-only:

    Regenerative fuel cell         9,400 kg    78.83 percent
    Array blanket                  1,162 kg     9.12 percent
    Thermal control system           934 kg     7.34 percent
    Oxygen plant mass increase       718 kg     6.00 percent
    Structure                        400 kg     3.14 percent
    Wire                              89 kg     0.70 percent
    Junction and breaker box          29 kg     0.22 percent
    Total                         12,731 kg

Rows sum to 12,732 kg against a printed total of 12,731 kg, a 1 kg rounding residue. Array area is 730 m2 and cycle energy 38,158 kWh. The lower production rate is a real effect the source explains: the larger array supplies enough power earlier and later in the day that the plant can run longer at a lower rate.

Baseline reactor, six 10 kWe modules producing 6.2 kWe of excess capacity, total 9,909 kg. Figure 69 (Colozza, 2020, p. 76), image-only:

    Balance of plant               4,578 kg    46.20 percent
    Shielding                      3,282 kg    33.12 percent
    Reactor                        1,410 kg    14.23 percent
    Wiring                           457 kg     4.61 percent
    dc to dc converter               182 kg     1.84 percent
    Total                          9,909 kg

The legend sums to 9,909 kg exactly. The three reactor terms are exactly six times the Table 22 10 kWe column, six times 235, 547, and 763, giving 9,270 kg, to which the two distribution terms add 639 kg. That 639 kg is the difference between the Table 22 boundary and an installed-system boundary, and it appears nowhere except in this legend and Figure 70.

Scaled reactor, mass scaled linearly to the 53.84 kWe requirement rather than built from whole modules, total 8,939 kg. Figure 70 (Colozza, 2020, p. 77), image-only:

    Balance of plant               4,108 kg    45.96 percent
    Shielding                      2,945 kg    32.95 percent
    Reactor                        1,265 kg    14.15 percent
    Wiring                           457 kg     5.12 percent
    dc to dc converter               164 kg     1.83 percent
    Total                          8,939 kg

The legend sums to 8,939 kg exactly. Every term is Figure 69 multiplied by 53.84 divided by 60, which is 0.897333, with wiring held fixed: 1,410 gives 1,265.2 against a printed 1,265; 3,282 gives 2,945.0 against 2,945; 4,578 gives 4,107.9 against 4,108; and 182 gives 163.3 against a printed 164. The source states the method in the body text, saying the reactor mass was scaled linearly to match the total power requirement (Colozza, 2020, p. 75). This point is therefore an assumed linear rescaling of the six-module result, not an independent design point.

Case 3 comparison, Figure 71 (Colozza, 2020, p. 77), values printed on the bars: Kilopower reactor system continuous 9,909 kg, scaled Kilopower reactor system continuous 8,939 kg, array with battery daytime oxygen production 64,419 kg, array with regenerative fuel cell daytime oxygen production 12,731 kg.

#### Energy storage dominates every continuous photovoltaic case

The source states it directly: for continuous operation of the photovoltaic system the energy storage mass dominates total system mass, at 95 percent for a battery and 75 percent for a regenerative fuel cell (Colozza, 2020, p. 62). The recovered legends put numbers on it. Battery storage share is 96.21 percent in Figure 49, 96.23 percent in Figure 60, and 93.26 percent in Figure 65. Regenerative fuel cell share is 75.18 percent in Figure 51, 75.19 percent in Figure 62, and 78.83 percent in Figure 67. Adding the thermal control system, which exists chiefly to service the storage, takes the battery cases to 99.21, 99.23, and 96.26 percent and the regenerative fuel cell cases to 93.29, 93.30, and 86.17 percent. Under the keep-alive policy the same share collapses: 38.00 percent for battery in Figure 53 and 15.30 percent for regenerative fuel cell in Figure 54. Across the two policies, at the same site, with the same array technology and the same lunar night, storage moves from about 96 percent of the system to about 38 percent for a battery and from about 75 percent to about 15 percent for a regenerative fuel cell. In Case 1 the photovoltaic and battery total falls from 60,563 kg to 2,740 kg and the photovoltaic and regenerative fuel cell total from 11,789 kg to 2,020 kg, factors of 22.1 and 5.8, and both totals include the plant scale-up penalty. The nighttime load policy, not the darkness itself and not the array, is what moves the mass in this source.

#### Headline conclusion

For missions that must operate through the lunar night at power levels comparable to daytime, the Kilopower reactor system holds a substantial mass advantage over both photovoltaic options in every case examined. For missions that can meet their goals with daytime-only operation and a minimal nighttime keep-alive draw, photovoltaic systems, and specifically photovoltaic with regenerative fuel cell storage, become competitive with or lighter than the currently designed non-advanced reactor configurations (Colozza, 2020, pp. 78-79). The conclusion also records two levers the analysis did not take: shielding mass and standoff distance could be reduced by regolith burial or terrain shielding, and a reactor custom-scaled to a mission's power level would be lighter at the cost of modularity.

### Limitations

#### Scope limits stated or implied by the source

The oxygen analysis models one chemistry. Hydrogen reduction of ilmenite is carried through; the other twelve extraction routes listed on report page 8 are named and not modeled. The reaction is also assumed to run on mare regolith at 7 percent ilmenite by mass, so the plant sizing does not transfer to highland terrain, where Table 3 tabulates no titanium dioxide at all.

All photovoltaic results assume one fixed, non-tracking, south-facing array at 30 degrees north latitude and 30 degrees tilt, on the vernal equinox at 1,359 W/m2. Off-equinox and year-round variation is not carried into any mass result even though Figure 6 and Figure 29 supply the variation. Dust accumulation is assumed to be zero and the assumption rests on periodic cleaning by crew, which the analysis neither costs nor mans. Array degradation over life is not modeled, and no beginning-of-life or end-of-life distinction appears.

The reactor is modeled almost entirely as a fixed 10 kWe modular block, so most reactor results carry a mass penalty from unused capacity: 18,488 W of unused heat in the two-reactor Case 1 configuration, and 6.2 kWe of unused electrical capacity in the six-reactor Case 3 configuration. Only the Case 3 scaled variant relaxes this, and it does so by assuming linear scaling rather than by designing a scaled reactor. Regolith burial and terrain shielding are described conceptually and never carried into a mass result.

All component mass and power relations for the electrolyzer, fuel cell, battery, charge controller, breaker box, wire, dc to dc converter, and radiator are curve fits to representative commercial or literature data rather than flight-qualified hardware. Both the regenerative fuel cell and the Kilopower reactor are acknowledged as lower in technology readiness than the photovoltaic array and battery combination.

The regenerative fuel cell scaling factors are stated by the source to be invalid below 500 W.

#### Internal inconsistencies located in this reading

Case 1 continuous battery array size and peak power disagree between figure and text. The Figure 48 plot prints a maximum output power of 70.9 kW and its caption prints an array area of 208.5 m2, while the body text on the following page cites 84.4 kW and 248.5 m2 for the same configuration (Colozza, 2020, pp. 60-61). Three independent statements support 208.5 m2: the caption, the Figure 49 blanket mass of 331.5 kg divided by 1.59 kg/m2, and the Figure 49 structure mass of 114.1 kg divided by 0.55 kg/m2, which give 208.5 and 207.5 m2. The body text is the outlier. Both values are recorded here rather than resolved.

Case 2 regenerative fuel cell mass share disagrees between figure and text. The body text says approximately 92 percent while the Figure 62 legend prints 75.19 percent and the report summary says 75 percent (Colozza, 2020, pp. 68-71).

Case 3 reactor standoff distance disagrees between figure captions and text. The Figure 69 and Figure 70 captions both state 1.15 km, while the body text places the six-reactor system at 2.81 km and Table 22 gives 1.15 km as the single-reactor distance (Colozza, 2020, pp. 75-77).

A figure cross-reference is wrong. The Case 3 text points to Figure 51 for the six-reactor layout illustration; Figure 51 is the Case 1 photovoltaic and regenerative fuel cell pie chart, and the layout is Figure 68 (Colozza, 2020, p. 75).

Two tables of the same daytime-only oxygen plant at 5.29 kg/h differ by 1 kg. Table 25 totals 1,989 kg with a 488 kg oxygen tank (Colozza, 2020, p. 63); Table 30 totals 1,990 kg with a 486 kg oxygen tank (Colozza, 2020, p. 73).

The baseline plant mass differs between its table and its figure. Table 24 totals 1,125 kg with a 488 kg oxygen tank and 326 kg of thermal control; Figure 18 rows sum to 1,129.8 kg with a 486.4 kg oxygen tank and 332.0 kg of thermal control (Colozza, 2020, p. 22), against Table 24 (Colozza, 2020, p. 60). The stored oxygen mass is likewise given as 1,155 kg in the Figure 18 discussion and 1,154 kg everywhere else.

Several recovered pie legends do not close exactly on their own printed totals, by 1 kg in Figures 60, 62, and 67 and by 2 kg in Figure 51. Figures 49, 53, 54, 57, 65, 69, and 70 close exactly. The residues are consistent with rounding the displayed rows and are recorded rather than adjusted.

#### UNVERIFIED items

C1. NASA STI registered no DOI for this record. The NTRS metadata carries no DOI field and the document prints none. A ResearchGate-minted DataCite DOI, 10.13140/RG.2.2.33977.93285, does exist over an uploaded copy and is not used as a locator here. What would resolve it is a DOI registered by NASA STI; none was found and none was constructed.

C2. The NTRS accession 20200001622 is not printed inside the PDF. It was obtained from an external NTRS lookup for this summary. What would resolve it is any printed accession in the artifact; there is none.

L1. The provenance of Table 22 cannot be checked. The table is footnoted to the report's Reference 28, a NASA COMPASS Team draft titled ISRU Power System Demonstrator dated 2016, with no report number, no accession, no publisher, and no URL, and it is not held on this project. Every fission mass figure in this source therefore rests on a document that cannot be opened from here. What would resolve it is a copy of that COMPASS draft.

L2. The report's Reference 13, which supplies the entire 21.05 kW life support breakdown of Table 8, and Reference 18, which supplies the whole of the Table 15 areal density dataset, were not opened for this summary. Their identities are printed in the reference list; their contents are not checked here.

L3. Whether the regenerative fuel cell thermal control system is inside or outside the regenerative fuel cell mass line is not stated. The pie charts list a thermal control system as a separate slice alongside the regenerative fuel cell slice, so it appears to be outside, but the source does not say what the thermal control system is sized to service in the regenerative fuel cell cases. What would resolve it is a component list for the thermal control mass in the regenerative fuel cell configurations, which the source does not print.

L4. The 92 percent regenerative fuel cell share in the Case 2 body text has no derivable basis. It matches neither the legend nor the summary.

L5. The hours at which the array output curve crosses zero and crosses the load level are not printed anywhere in the report. They govern how long storage must actually discharge, and they exist only as positions on plotted curves. They are recorded here as NOT AVAILABLE from this source rather than digitized from pixels. The storage discharge durations quoted in the Key findings are inverted from printed masses and printed specific energies and are derived rather than read.

L6. Whether the 200 Wh/kg packaged battery figure includes the battery enclosure, harness, and cell balancing hardware is not stated beyond the phrase packaged battery system comprising multiple cells.

#### Domain over which these results hold

Every result in this report is conditioned on a 30 degrees north site with an approximately 354 h night and a nighttime load policy chosen by the analyst. The source contains no polar site, no illumination duty factor, no eclipse statistic, and no outage shorter than a full lunar night. Any use of its storage figures at a site with a different darkness duration is an extrapolation the source does not support, and in the case of the regenerative fuel cell specific energy the source's own stated mechanism says the extrapolation runs optimistic at shorter duration.

### Topic mapping

Section 1.0 surveys power levels across eleven lunar mission classes and selects the two loads, with Table 1 as the reusable artifact. Section 2.0 supplies the lunar environment constants, the solar intensity model, the regolith and mineral composition tables, and the one paragraph in the document that acknowledges near-continuous polar illumination without using it. Section 3.0 develops the hydrogen reduction of ilmenite plant, its component power and mass scaling relations, and the baseline power and mass tables, and it contains the single quantified polar penalty in the report, which is thermal. Section 4.0 builds the six-person base camp load from life support, a communications link budget, a habitat night heat leak model that drives required heater power to zero, and field-derived operational equipment power. Section 5.1 covers photovoltaic array sizing, the energy balance equations that encode the storage sizing policy, the Table 15 array technology dataset, battery specific energy and depth of discharge selection, and regenerative fuel cell component scaling. Section 5.2 covers the Kilopower reactor design point, historical space reactor context, radiation shielding and standoff sizing, the three alternative shielding concepts that are never costed, and the cabled power transmission model with its dc to dc conversion. Sections 6.1 to 6.3 present the three case comparisons, and all of their component-level results live in raster figures rather than in the text layer. Section 7.0 restates the case results and names the two unexploited reactor mass levers.
