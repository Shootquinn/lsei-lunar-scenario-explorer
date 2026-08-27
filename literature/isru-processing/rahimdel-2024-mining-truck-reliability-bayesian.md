# Bayesian Network Approach for Reliability Analysis of Mining Trucks

## Citation

Rahimdel, M. J. (2024). Bayesian network approach for reliability analysis of mining trucks.
*Scientific Reports, 14*, 3415. https://doi.org/10.1038/s41598-024-52694-0

Publisher URL: https://www.nature.com/articles/s41598-024-52694-0

Note on article number: the running header printed on every page of the extracted PDF reads
"Scientific Reports | (2024) 14:3415," and this is the number used above. The task brief that
assigned this source listed the article number as 3244; that number does not appear anywhere in
the extracted text, so it is flagged here as unconfirmed rather than silently corrected. The DOI
(10.1038/s41598-024-52694-0) is confirmed from the document and is unambiguous regardless of which
article number is correct.

## Abstract

Single-author case study (Golgohar Iron Mine, Iran) that develops a dynamic Bayesian network (BN),
mapped from a fault tree (FT) built on a reliability block diagram (RBD), to model the reliability
of a fleet of six Caterpillar 777 mining trucks (100-tonne capacity, TR1-TR6). Truck subsystems are
decomposed into roughly 39 basic components across engine, drive (brake and steering), transmission,
tire, body/chassis, and electrical systems. Component failure rates (assumed constant, exponential
lifetimes) are estimated from historical time-between-failure (TBF) data and propagated through the
BN (built in GeNIe software) to compute reliability of each truck and of the fleet as a parallel
system over time. Birnbaum Importance Measure (BIM) and Risk Reduction Worth (RRW) identify the fuel
injection system's pipes and connectors as the dominant failure driver in most trucks, and truck TR5
as the most critical truck to overall fleet reliability. Reliability-based preventive-maintenance
(PM) intervals at an 80 percent reliability target are proposed for each truck's subsystems.

## Summary

### Background and objective

Material transportation (loading and hauling) is reported to account for about 50-60 percent of
total mine operating costs, and truck-and-shovel haulage is described as the dominant conventional
system in open-pit mines. Because unplanned truck downtime wastes labor and capital in an already
capital-intensive industry, the paper frames reliability estimation as the analytical basis for
availability, preventive maintenance, and life-cycle cost control. The introduction reviews prior
truck/engine reliability studies using Weibull fitting, reliability block diagrams (RBD), the
proportional hazard model (PHM), and the power law process (citing Summit and Halomoan on Caterpillar
777D suspension failures in Australian coal/metal mines; Tumanggor on Indonesian dump-truck axle
repair times; He et al. on exhaust-valve PHM modeling; Kishorilal and Mukhopadhyay on engine fuel-
supply reliability block diagrams; Angeles and Kumral on power-law preventive-maintenance scheduling;
Wang and Zhang on after-sales engine reliability; and the author's own prior tire-residual-life study
at a different Iranian iron mine). The stated gap is that these prior studies model only a specific
part of a truck using classical statistical methods that assume component independence and cannot
update failure probabilities as new evidence arrives. The paper's stated objective is to combine
fault tree analysis with a dynamic Bayesian network to (1) analyze the reliability and fault
diagnosis of a fleet of heavy-duty mining trucks, and (2) identify, via criticality analysis, which
components contribute most to system-level failure, as an input to preventive-maintenance planning.

### Methods and scope

**Fault tree (FT) foundation.** A fault tree is a top-down Boolean logic diagram connecting basic
events (component failures) through AND/OR gates up to a "top event" (system failure). Three
standard assumptions are stated explicitly: (1) all basic events are statistically independent; (2)
all components have a constant failure rate, i.e., failures follow the exponential distribution, with
occurrence probability of a basic event at time t given by P(BE_i)_t = 1 - exp(-lambda*t), where
lambda is the constant failure rate (page 3, Eq. 1); and (3) all components are "as good as new"
after maintenance (perfect/minimal-repair renewal, remaining life independent of current age).

**Bayesian network (BN) mapping.** The BN is a directed acyclic graph in which parent (root) nodes
carry marginal probabilities and child nodes carry Conditional Probability Tables (CPTs) built from
the states of their parents; joint probability follows the chain rule, P(U) = product over i of
P(X_i | Pa(X_i)) (page 4, Eq. 3), and posterior probability updates under new evidence via Bayes'
rule, P(U|E) = P(E|U)*P(U) / sum_E[P(E|U)*P(U)] (Eq. 4). The FT is mapped to the BN by treating basic
and intermediate FT events as root and intermediate BN nodes respectively, and the FT top event as
the BN leaf node; gate probabilities become CPTs. System reliability at time t is then R(t) = 1 -
Pr{TE}_t, where Pr{TE}_t is the top event's occurrence probability at time t (page 5, Eq. 5).

**Criticality analysis.** Two standard importance measures are used to rank components/trucks: the
Birnbaum Importance Measure, I_BIM,i = P(LN | RN_i=1) - P(LN | RN_i=0), and the Risk Reduction Worth,
I_RRW,i = P(LN) / P(LN | RN_i=0), where LN is the leaf node (system/fleet failure) and RN_i is root
node i (page 5, Eqs. 6-7).

**Case study, data, and sample.** The Golgohar Iron Mine (Sirjan, Kerman Province, Iran; anomaly no.
3 reserve of about 616 million tons at 54.3 percent Fe grade; roughly 15 million tons of ore extracted
per year) hauls broken rock with a mixed fleet of 28 Komatsu 65-tonne and 20 Caterpillar 100-tonne
dump trucks. Six Caterpillar 777 trucks (100-tonne capacity), labeled TR1 through TR6, were selected
for data gathering. The paper states in one place that "the failure data were gathered over one
year" (page 5) and, two paragraphs later, that "the required failure data were gathered over 9
months" (page 6); both statements appear in the text and the discrepancy is not otherwise resolved in
the document, so it is reported here as an internal inconsistency rather than reconciled. Each truck
is decomposed via an RBD into major systems (the paper states "seven major sub-systems" but names
only six in the same sentence: engine, drive, power transmission, tire, body and chassis, and
electrical) and, in the accompanying component table (Table 1), into roughly 39 named basic
components/failure modes (for example, within the engine system: crankcase, cylinder head, engine
block, turbocharger, oil pump, air manifold under "Engine major"; pipes and connectors, exhaust, fuel
pumps, injectors, sensors, other under "Fuel injection"; pipes and connectors, water pump, cooling
fan, radiator under "Engine cooling"; switches and sensors, starter, battery, alternator under
"Engine electrical"; similarly for brake/steering under Drive system, gearbox/shafts/planetary
gear/power take-off/connectors under Transmission, front/rear tire and wheels/rims under Tire,
cab/air-condition/seat and body hoist/chassis under Body and chassis, and cables/switches-sensors/
lights under Electrical). Time-between-failure (TBF, in hours) records for each basic event were
used to compute a constant failure rate per component, calculated as the reciprocal of MTBF (citing
Dhillon, 2020, page 6), i.e., lambda = 1/MTBF. A sample TBF series is given for the engine component
of truck TR1 (Table 2, page 9): 20 recorded failures with TBF values in hours of 12, 22, 99, 227,
207, 43, 587, 755, 366, 435, 756, 1294, 399, 1257, 1486, 58, 478, 74, 323, and 895. The resulting
per-component failure rates for truck TR1 (Table 3, page 9) are reported in units of failures per
hour (h^-1); selected values include: crankcase (ES1.1) 0.0008, cylinder head (ES1.2) 0.0031,
turbocharger (ES1.4) 0.0026, oil pump (ES1.5) 0.0010; fuel-injection pipes and connectors (ES2.1)
0.0084, exhaust (ES2.2) 0.0030, fuel pumps (ES2.3) 0.0058, injectors (ES2.4) 0.0019; engine-cooling
pipes/connectors (ES3.1) 0.0028, air-condition water pipe/connections (BC1.1.4) 0.0065; brake
pneumatic relief valve (DS1.2.1) 0.0021, air compressor (DS1.2.2) 0.0022, air hoses/connectors
(DS1.2.3) 0.0050; steering shock absorber (DS2.4) 0.0107; rear drive shaft (TS2) 0.017; body-hoist
hydraulic pump (BC2.1) 0.0059 and pipes/connections (BC2.2) 0.0050; and tire failure rates of 0.0012
(front, Tr.1), 0.0039 (rear, Tr.2), and 0.0014 (wheels/rims, Tr.3). Using the paper's own lambda =
1/MTBF relation, these imply (derived, not stated in the paper) approximate component MTBFs for
truck TR1 of about 59 h for the rear drive shaft (TS2), 93 h for the steering shock absorber
(DS2.4), 119 h for fuel-injection pipes/connectors (ES2.1), 172 h for fuel pumps (ES2.3), 200 h for
brake-pneumatic air hoses/connectors (DS1.2.3), and 1,250 h for the crankcase (ES1.1). The BN for a
single truck (Fig. 7) contains 17 intermediate ("parent") nodes (DS, DS1, DS2, DS1.1, DS1.2, ES, ES1,
ES2, ES3, ES4, BC, BC1, BC1.1, BC2, Tr, Ts, El) built in GeNIe software, with the remaining, more
numerous basic-event nodes as leaves/roots feeding those parents. The fleet is modeled as a parallel
system (Fig. 9) on the logic that mineral haulage succeeds if at least one of the six trucks is
operating.

### Key findings

**Individual truck reliability over time (Fig. 8; page 6 discussion).** Truck TR5 has the highest
reliability of the six trucks at all observed time intervals, but even TR5's reliability degrades
from 1 to 0.7241 within the first 5 hours of operation. Trucks TR1 and TR2 maintain the lowest
reliability among the fleet, remaining low out to 50 hours; the paper recommends these two receive
particular attention in daily inspection and maintenance. All six individual trucks' reliability
curves reach approximately zero by about 50 hours of operation.

**Fleet-level reliability (parallel system; Fig. 10).** The paper gives three different numeric
values for fleet reliability at short operating times, and these values are not internally
consistent: the abstract states the fleet reliability "reaches 0.881 at 20 h" (page 1); the
Discussion section states the fleet reliability "degrades to 0.952 during 10 h period" implying a
4.8 percent failure probability by that point (page 6); and the Conclusions section states fleet
reliability "degrades to 0.972 after 10 h" (page 13). All three figures are reproduced here exactly
as printed, without attempting to adjudicate which is correct; a reader using this paper's fleet-
reliability numbers should treat the 10-hour figure as either about 0.95 or about 0.97 depending on
which section is cited, and the 20-hour abstract figure (0.881) as a further, separately reported
data point. On fleet reliability reaching zero, the Discussion and Conclusions sections agree: fleet
reliability (the parallel six-truck system) reaches zero, i.e., failure probability reaches one, at
about 80 hours of operation.

**Critical components by truck (BIM/RRW criticality analysis, Figs. 11-16).** The dominant failure
contributor differs somewhat by truck, but the fuel injection system recurs across most trucks: for
TR1, the most critical root-node components are the shock absorber (steering), the pipes and
connectors of the fuel injection system, and the switch/sensors of the steering system; for TR2, the
pipes and connectors of the fuel injection system have the highest relative contribution to failure
occurrence, followed by air hoses/connectors of the brake pneumatic system, pipes/connections of the
hydraulic body-hoist system, and the gearbox; for TR3, the fuel injection system's sensors, the
battery, and the brake pneumatic system's air hoses/connectors are most critical; for TR4 and TR5,
the pipes and connectors of the fuel injection system are again the most critical components; and for
TR6, air hoses/connectors of the brake pneumatic system, the shock absorber, and the gearbox are most
critical, in that order. Aggregating across the fleet, the paper's headline conclusion (abstract and
Conclusions) is that "the fuel injection system of the truck's engine is the main leading cause of
the trucks failure," recommending preventive-maintenance attention be focused there.

**Truck-level importance to fleet failure (Table 4, page 13).** BIM and RRW scores and rank (1 =
most critical to fleet failure) for each truck: TR1, BIM 0.0072, RRW 0.0003, rank 6; TR2, BIM 0.0147,
RRW 0.0079, rank 5; TR3, BIM 0.0195, RRW 0.0127, rank 2; TR4, BIM 0.0174, RRW 0.0106, rank 3; TR5,
BIM 0.0248, RRW 0.0180, rank 1; TR6, BIM 0.0170, RRW 0.0102, rank 4. TR5 is therefore identified as
the truck whose performance the fleet's overall reliability is most sensitive to; the paper notes
this is "inconsistent" with TR5 also having the highest individual reliability, interpreting the
result as meaning the fleet outcome is most sensitive to the truck that is itself most reliable
(page 9-10).

**Reliability-based preventive-maintenance (PM) intervals.** Using an 80 percent reliability target
(cited as commonly used in engineering practice), Table 5 gives PM intervals (hours) per subsystem
per truck; illustrative entries include engine system 12.35 h (TR1) up to 20.22 h (TR5); drive system
6.18 h (TR1) up to 18.20 h (TR4); transmission system 11.03 h (TR2) up to 33.09/33.06 h (TR5/TR6);
electrical system 8.47 h (TR2) up to 24.27 h (TR5); body and chassis 3.43 h (TR2) up to 33.09 h
(TR5); and tires 10.71 h (TR2) up to 60.66 h (TR6). These per-truck values are then grouped into
combined, operationally simplified PM intervals shared across trucks with similar values (Table 6):
engine system, 11 h for TR1/TR2/TR4 and 16 h for TR3/TR5/TR6; drive system, 7 h for TR1, 16 h for
TR2/TR3/TR4, 11 h for TR5/TR6; transmission system, 16 h for TR1-TR4 and 33 h for TR5/TR6; electrical
system, 11 h for all trucks except TR5 at 24 h; body and chassis, 7 h for TR1/TR2 and 24 h for
TR3-TR6; and tires, 16 h for TR1-TR5 and 60 h for TR6. The paper highlights that the drive system of
TR1 and the body/chassis of TR1 and TR2 have the shortest combined PM intervals (7 h, i.e., most
frequent required servicing), while the transmission system of TR5/TR6 (33 h) and the tires of TR6
(60 h) have the longest. The Conclusions section additionally reports fleet-average maintenance
intervals across all six trucks (presumably averaged from Table 5, though the averaging is not shown
step by step) of 13.5 h for the engine system, 11 h for the drive system, 24.5 h for power
transmission, 17.5 h for the electrical system, 15.5 h for body and chassis, and 38 h for tires.

### Limitations

The paper states two explicit limitations of its own modeling approach. First, environmental and
operational factors known to affect truck subsystem failure behavior, including haul road quality,
weather conditions, and operator skill level, were not incorporated into the BN; the author suggests
a separate BN could be built to study reliability under such operating conditions. Second, the
constructed BN could not model statistical dependencies between basic events (i.e., it retains the
FT's independence assumption at the BN level), which the author states "may lead to inaccurate
results." Beyond these stated limitations, several features of the reported numbers should be noted
for downstream use. The paper documents constant-failure-rate (exponential) modeling of every
component from an unspecified underlying TBF sample size (only one example TBF series, for the
engine of TR1 with 20 recorded failures, is shown in full); no goodness-of-fit statistic or
distribution-fitting diagnostic (e.g., Weibull shape parameter) is reported to justify the exponential
assumption, despite competing studies cited in the introduction using Weibull fits for similar truck
subsystems. The observation window over which failure data were collected is internally inconsistent
in the text (stated as both "one year" and "9 months," see Methods and scope above), and no start or
end calendar dates for data collection are given. Fleet-level reliability at short time horizons
(the ~10-20 hour range) is reported with three different, mutually inconsistent numeric values across
the abstract, Discussion, and Conclusions sections of the same paper (0.881 at 20 h; 0.952 and 0.972,
variously, at 10 h); this is a source-internal inconsistency, not a synthesis judgment, and should be
treated with corresponding caution if these specific figures are propagated into further analysis.
The paper reports no explicit unit conversion factor between "hours" in its reliability curves and
actual truck operating/engine hours versus calendar time, and does not report a fleet-wide aggregate
MTBF figure (only per-basic-event failure rates for one representative truck, TR1, in Table 3); MTBF
values for other trucks (TR2-TR6) and any fleet-level MTBF are not given in the document. Funding is
declared as none external; data are stated as available from the corresponding author on request
rather than being published with the article.

### Topic mapping

FA6, also FA5. Source list entry 9. Sub-Q 7. Component- and system-level reliability quantification
(constant failure rates derived from historical time-between-failure data, exponential lifetime
assumption, Bayesian-network-propagated system and fleet reliability curves, and Birnbaum/Risk-
Reduction-Worth criticality ranking) for a fleet of six 100-tonne autonomous-haulage-relevant mining
trucks at an Iranian iron mine, bearing on whether reliability/MTBF at the truck and fleet scale
would allow a self-reproducing terrestrial or space capital stock to sustain its operating tempo
without human-scale maintenance intervention, or would instead force frequent (order 10-30 hour)
preventive servicing intervals and near-total individual-unit failure probability within 50-80 hours
of continuous, unmaintained operation.
