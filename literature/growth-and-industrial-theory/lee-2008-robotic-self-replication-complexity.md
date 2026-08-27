# Robotic Self-replication in Structured Environments: Physical Demonstrations and Complexity
Measures

## Citation

Lee, K., Moses, M., & Chirikjian, G. S. (2008). Robotic self-replication in structured
environments: Physical demonstrations and complexity measures. *The International Journal of
Robotics Research, 27*(3-4), 387-401. https://doi.org/10.1177/0278364907084982

Publisher URL: http://ijr.sagepub.com/cgi/content/abstract/27/3-4/387

## Abstract

Defines a "complexity ratio" (the degree of self-replication, D_s) that scores how
self-replicating a robot is, based on the number and complexity of the subsystems it can
assemble into a functional replica, and adapts Sanderson's parts-entropy method to quantify
how much structure the environment must supply for that assembly to succeed. Applies both
measures to three lab-built self-replicating robot (SRR) prototypes of increasing subsystem
count and decreasing per-subsystem complexity, presented as a progression toward more
powerful self-replication under increasingly disordered environmental conditions.

## Summary

### Background and objective

The authors frame the paper against a long-term lab goal of developing robots that
self-replicate in unstructured environments starting from the most basic building blocks.
They illustrate the spectrum of "how self-replicating" a system is with two poles: a trivial
process in which a robot merely nudges two complex prefabricated halves of a replica together
along a fixed track, versus a less trivial (more desirable) process in which many simple
components are assembled from an open, randomly arranged space. The paper's stated purpose is
to make this intuitive spectrum quantitative: a complexity measure applied to a modular SRR,
and an entropy-based measure of how much "randomness" in initial subsystem placement the
system can tolerate.

Related work is grouped into von Neumann's 1950s theoretical work on self-reproducing
automata (summarized in von Neumann and Burks, 1962), the earliest physical replicators
(Jacobson 1958, an electric-cart system on an oval track; Penrose 1959, passive mechanical
elements self-reproducing under external vibration), a 1980s NASA feasibility study on
self-replicating robots for lunar development and later work on lunar and terrestrial
self-replicating factories, and four categories of more recent experimental work: directed
replication via module assembly, directed replication via fabrication (assembling components
from raw material), self-reconfigurable modular robots, and self-assembly from randomly
agitated modules. The authors adopt the convention of calling a system "replicating" if it is
designed specifically for replication and "reconfigurable" if designed primarily for
reconfiguration.

The paper places its own lab's prior systems within this lineage. Chirikjian and Suthakorn
(2002) and Suthakorn et al. (2003b) built remote-controlled and semi-autonomous replicating
robots that required external human control during replication, and so, by the paper's own
definition (below), these systems "replicate" but do not "self-replicate." Suthakorn et al.
(2003a) and Park et al. (2004), referred to here as "SRR-03," then produced the lab's first
fully autonomous self-replicating system, retrieving subsystems and assembling them in a
structured environment consisting of tracks on a flat surface and metal foil used to trigger a
gripper, with the robot's trajectory fixed by line-tracking (Park et al. added bar codes so the
robot could distinguish subsystems by location). The three systems presented in this paper,
SRR I, SRR II, and SRR III, are described as improvements on this lineage because they function
in less structured environments and use simpler components, while performing the same or more
complex assembly tasks.

### Methods and scope

**Descriptive framework.** Following Lee and Chirikjian (2007), a robotic replicating system is
described by a triple of multisets (R, M, E): R is the initial functional system(s) to be
reproduced, M is the set of available parts for building replicas, and E is the set of
environmental structures used as catalytic elements in the process but not themselves
replicated. Replication is written as a transition (R, M, E) to (R', M', E') with |R'| greater
than |R|. For a system to count as self-replicating, R must not be empty and all necessary
machinery and manipulation must be performed by R; if E includes an agent that actively
controls the process, the system is said to "replicate" but not "self-replicate." M can be a
strictly ordered, partially ordered, or unordered set depending on whether subsystems must be
assembled in a fixed sequence. Environments are classified as completely structured (no
structure may be moved or permuted without breaking the process), partially structured
(structures may be relocated or permuted without affecting replication), or unstructured
(E is the empty set, e.g., a flat bounded surface with no landmarks).

**Degree of self-replication.** The authors count "active elements" per subsystem (a moving
mechanical part or a fundamental electronic component; logic gates and motors are counted by an
explicit convention, e.g., an AND gate as two active elements, a brushed motor as four) and
count "interconnections" formed between subsystems on assembly. They describe the active-element
convention as "somewhat subjective and arbitrary," useful for comparison only when the same
counting criteria are applied across all systems being compared (p. 389). The degree of
self-replication is defined (eq. 1, p. 390) as D_s = (C_min / C_max) x (C_total / C_ave) x
(1 / C_ave), where C_max and C_min are the maximum and minimum subsystem complexities, C_ave is
the mean subsystem complexity, and C_total is the sum of subsystem complexities plus the total
number of interconnections. A higher D_s is claimed to indicate a "more powerful"
self-replicating system: it rewards a large, evenly distributed complexity across many
subsystems and penalizes concentrating most of the system's complexity into a single module.

**Parts entropy.** The paper adapts Sanderson's (1984) parts-entropy method to compute the
positional and rotational uncertainty of subsystem placement. For each subsystem, translational
(x, y) and rotational (theta) pose coordinates are discretized at a chosen positional resolution
delta_p and rotational resolution delta_r (the paper uses delta_p = 0.5 mm and delta_r = 0.01 rad
throughout, applied consistently across all systems being compared, since the authors state
there is "no clear-cut way to choose" these values other than keeping them below the smallest
relevant tolerance, p. 392). Assuming independent, uniform distributions and no overlap penalty
between parts, the joint discrete entropy of n subsystems is summed to give: H_u, the parts
entropy when subsystems are placed randomly in an unstructured environment; H_s, the parts
entropy when subsystems are placed (with tolerance) in a structured environment, plus a
permutation-entropy term when interchangeable subsystems can occupy multiple equivalent slots;
and H_a, the residual parts entropy of the fully assembled replica (near zero, reflecting only
small assembly tolerances). Two derived quantities are then reported for each system: the
entropy reduction attributable to the structured environment, delta_H_E = H_u - H_s, and the
entropy reduction attributable to the robot's own assembly action, delta_H_R = H_s - H_a. If an
external agent partially or fully controls assembly, that manipulation is folded into
delta_H_E rather than delta_H_R, so a higher delta_H_R is read as a more sophisticated task
performed by the robot itself, and a higher delta_H_E as a system leaning more heavily on the
environment to do the uncertainty-reducing work.

**Three prototypes: shared architecture.** All three demonstrated systems are mobile-manipulator
robots operating on a track-based structured environment. Heterogeneous, prefabricated
subsystems are supplied externally at fixed sub-track locations; the robot travels the main
track, retrieves each subsystem in turn, and attaches it in a defined order to a base or hub to
build one complete functional duplicate. All three run without human intervention during the
assembly process itself and are accordingly classed by the authors as self-replicating (not
merely replicating) under their own framework (p. 393). None of the three fabricates parts from
raw material; they assemble only finished, externally supplied modules, and a fresh external
resupply of subsystems is required for each additional replication cycle. The power supply is
explicitly treated as "a replenishable resource" and is not tracked in the entropy accounting.

**SRR I (Park et al. 2004).** Five subsystems: a gripper, a left wheel with motor, a right wheel
with motor, a balancing tail, and a base carrying a Lego RCX microprocessor controller, which
must be fixed at the center of the track while the other four subsystems are placed on one of
four sub-tracks and collected in strict order. SRR I reads bar codes on the track to identify
each subsystem's location, an advance over the lab's earlier "SRR-03," which simply followed a
pre-set trajectory. Reported active-element complexities (Table 1, p. 394): right motor/wheel =
12, gripper = 9, left motor/wheel = 12, balancing tail = 1, and the RCX controller estimated as a
lower bound of approximately 4,000 active elements (from its 512 bytes of RAM), with 18
interconnections among subsystems on assembly.

**SRR II (Eno et al. 2007).** Also five subsystems, but with no microprocessor: control logic is
implemented as a finite-state machine built from discrete logic chips distributed across the
five subsystems rather than concentrated in one controller. The central hub is fixed, while the
other four subsystems are placed with a given orientation anywhere along one of four tracks; the
robot's two-state behavior (moving forward along the line, moving backward blindly) is triggered
by front and rear touch sensors, and subsystems are attached via a magnetic gripper end-effector.
Reported active-element complexities (Table 2, p. 395): magnetic gripper/9V battery = 3, left
motor/driving circuit = 14, right motor/driving circuit/touch sensor = 15, 5V battery/touch
sensor = 3, main circuit/line tracker = 65, with 26 interconnections.

**SRR III (Lee and Chirikjian 2007).** Six subsystems, again with electronics distributed as six
sub-circuits (one per subsystem) rather than a single controller, and with no subsystem fixed as
an initial hub (unlike SRR I and II). The authors list five explicit improvements over the prior
two prototypes: more subsystems, no initially fixed hub, an improved push-and-slide modular
design, an extended behavioral repertoire (a six-state machine keyed to an outer and inner
track), and more movable environmental structures. Subsystems are collected in three ordered
layers of two modules each. Reported active-element complexities (Table 3, p. 397): line-tracking
circuit = 11, line-tracker sensor = 16, motor driver circuit/left motor = 30, bar-code
reader/right motor = 24, power supply/three contact sensors = 12, and state machine/three contact
sensors = 91, with 49 interconnections.

### Key findings

**Degree of self-replication, D_s.** SRR I: D_s is approximately 1.56 x 10^-6 (eq. 9, p. 394).
SRR II: D_s is approximately 1.45 x 10^-2 (eq. 13, p. 395), roughly four orders of magnitude
higher than SRR I. SRR III: D_s is approximately 2.99 x 10^-2 (eq. 17, p. 397), the highest of
the three. The paper attributes the large jump from SRR I to SRR II mainly to de-concentrating
complexity, replacing a single microprocessor subsystem (approximately 4,000 active elements
against subsystems of 1-12 elements) with electronics distributed across all five subsystems in
SRR II; the further rise for SRR III is attributed to a still flatter complexity distribution
(minimum-to-maximum subsystem complexity ratio of 11/91 versus much larger ratios in SRR I and
II) combined with a larger subsystem count (six versus five).

**Entropy reduction.** SRR I: delta_H_E is approximately 107.95 and delta_H_R is approximately
30.80 (eqs. 10-11, p. 394). SRR II: delta_H_E is approximately 81.51 and delta_H_R is
approximately 54.84 (eqs. 14-15, p. 396). SRR III: delta_H_E is approximately 97.68 and
delta_H_R is approximately 90.97 (eqs. 18-19, p. 399). SRR III shows the largest delta_H_R of the
three, which the authors read as the robot itself performing the most sophisticated assembly
task, relying comparatively less on the environment to remove uncertainty. SRR I and SRR II are
described as showing "similar" combined entropy reduction (delta_H_E plus delta_H_R) despite
assembling the same number of subsystems in a structured environment, but the paper attributes
the different split between the two terms to a difference between the systems in whether the
robot itself performs additional work reading identifying information (bar codes) embedded in
the environment to distinguish subsystems (Section 3.4, p. 399-400).

**Boundary case cited from outside the lab's own work.** The system of Zykov et al. (2005),
consisting of four identical cubes assembled from one of two feeding locations, is analyzed by
the authors as an illustration of "replicating" without "self-replicating": because a human
supplies cubes at the feeding location, that human counts as an external active agent, and
because the feeding-location tolerance equals the assembled tolerance, the authors compute zero
entropy reduction attributable to the robot's own assembly action for that system (p. 400).

**Scope conditions the authors place on their own measures.** The conclusion states that a
higher D_s and a higher delta_H_R are desirable specifically for a modular robot designed for
directed self-replication, that this may not hold for other categories of modular robot, and
that comparing D_s or entropy values across different task categories (e.g., a directed
self-replication system against a self-assembly system) "may not yield meaningful information,"
because what constitutes "a task" differs between them. The authors also state that computing
D_s, delta_H_E, and delta_H_R for other groups' robots is difficult without detailed knowledge of
their experimental data and design specifics (p. 400).

### Limitations

The paper's own stated caveats, together with scope limits evident from the text, include the
following. The active-element counting convention used to define subsystem complexity is
explicitly called "subjective and arbitrary" by the authors, valid for comparison only when the
same counting criteria are held constant across the systems being compared (p. 389). The entropy
calculations rest on stated simplifying assumptions: no penalty for physical overlap between
parts (justified only when total part footprint is small relative to the environment), and
statistical independence with uniform probability distributions across the x, y, and theta pose
coordinates (p. 390-391). The positional and rotational resolutions (delta_p, delta_r) used to
discretize pose space have, in the authors' words, "no clear-cut way to choose," beyond being
smaller than the relevant tolerances and held identical across any systems being compared,
meaning the specific entropy values reported are conditioned on an analyst choice rather than
derived from first principles (p. 392). The authors themselves caution against comparing D_s or
entropy values across different categories of task, restricting the measures' claimed validity to
within-category comparison.

All three physical demonstrations occur in a structured, flat, bench-scale environment guided by
tracks, bar codes, contact patches, or magnetic and mechanical alignment features; delta_H_E is
nonzero for all three (ranging from about 82 to 108 in the reported units), meaning none of the
three prototypes is demonstrated with the environment doing zero uncertainty-reducing work. None
of the three fabricates any part from raw material; all three assemble only prefabricated,
externally supplied subsystems, and each additional replication cycle is stated to require a
fresh external supply of subsystems, with the power supply likewise assumed externally
replenishable and excluded from the entropy accounting. The paper reports no quantitative data on
replication success rate, cycle time, or number of physical trials performed alongside its
process descriptions and complexity/entropy calculations. The reported numeric comparisons are
confined to the lab's own three prototypes plus two illustrative outside examples discussed
qualitatively (Zykov et al. 2005 and, in the references, Liu et al. 2007's seven-subsystem
system); the paper does not compute its own entropy or complexity measures for the other cited
categories of prior work (fabrication-based replication, self-reconfigurable modular robots, or
random-agitation self-assembly) as a systematic survey.

### Topic mapping

FA6. Source list entry 7. Sub-Q 3, 5. Supplies the empirical reality check and quantitative
apparatus for assessing how close a physically demonstrated robot comes to genuine
self-replication and how much of the work is actually done by a pre-structured environment
rather than the robot. Directly illuminates Sub-Q 3 (information/complexity closure): all three
demonstrated systems assemble only externally supplied, prefabricated subsystems inside a
nonzero-entropy structured environment, and none fabricates parts from raw material or is shown
operating with zero environmental structuring, marking a sharp, explicitly stated boundary
between these bench demonstrations and any autonomous, unstructured-terrain self-replicating
factory.
