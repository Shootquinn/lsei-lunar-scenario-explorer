# Self-Replicating Robots for Lunar Development

## Citation

Chirikjian, G. S., Zhou, Y., & Suthakorn, J. (2002). Self-replicating robots for lunar
development. *IEEE/ASME Transactions on Mechatronics, 7*(4), 462-472.
https://doi.org/10.1109/TMECH.2002.806232

Publisher URL: none in source

## Abstract

Reviews the concept of self-replicating robots (SRRs) and analyzes the feasibility of a
minimalist SRR architecture for developing lunar materials and energy resources. Proposes a
four-subsystem factory design (multifunctional mobile-manipulator robots, a materials refining
and casting facility, solar energy conversion/storage/transmission, and electromagnetic rail
guns), argues each subsystem is buildable from resources present in lunar regolith, and reports
two small LEGO Mindstorm-based robot prototypes that physically demonstrate directed mechanical
replication of a robot from a set of components. Separately, develops an analytical model, based
on degenerate diffusion on the rotation group SO(3), of how replica factories would spread across
the lunar surface as a function of rail-gun aiming error, and presents numerical solutions of that
model.

## Summary

### Background and objective

The paper opens with a history of self-replication concepts, tracing the theoretical lineage to
von Neumann's 1950s automata theory, itself built on Turing's 1930s "universal computer," in which
an automaton operating in a "sea of spare parts" could assemble copies of itself. The authors
situate their work within "artificial life," a field concerned mostly with software patterns (cellular
automata, computer viruses, the "game of life") that self-replicate only inside a computer, and note
that self-reconfigurable or "metamorphic" modular robotics, an area the authors had previously worked
in, is a related but distinct topic in which modules change connection topology rather than build new
copies of themselves. The authors state explicitly that, to their knowledge, no deterministic
self-replicating mechanical or robotic system had been physically built by anyone prior to this
paper, and that doing so is one of the paper's contributions. They distinguish this from prior
physically realized work on passive self-assembly (structures that assemble under external
agitation or ambient physical forces, with no directed intent to copy a specific machine), which
they treat as a related but different phenomenon from directed robotic self-replication.

Two prior conceptual studies of self-replicating space factories are cited as direct motivation:
Freitas and Zachary (1981) and Von Tiesenhausen and Darbro (NASA TM-78304, 1980). Both proposed
self-replicating factories on the order of 100 tons each, but the paper states that neither gave a
concrete architecture, system, or prototype to demonstrate feasibility. The stated objective of the
present paper is to move past that conceptual level: to propose a specific, buildable subsystem
architecture, to build and test small physical prototypes of the mechanical replication step, and
to analyze, mathematically, how such factories would spread across the lunar surface once deployed.
Motivating context includes a claim that US heavy-launch capability has not increased in 20 years
and is, by the authors' account, currently inferior in some respects to capability of 30 years
earlier, and a cited estimate of 6.6 million tons of water ice trapped in the lunar south polar
region (attributed to Feldman et al., 2000), which the authors argue could supply hydrogen and
oxygen for propellant, fuel cells, and metal-oxide reduction if harvested.

### Methods and scope

The paper is structured in two largely separate parts, which this summary keeps distinct: a
subsystem design concept with physical prototype experiments (Sections II and III), and a
mathematical model of factory proliferation (Section IV) that is explicitly not tied to any
physical test.

**Design concept.** The proposed lunar factory has four subsystems: (1) multifunctional robots,
mobile-manipulator platforms that dig, transport material and components, and assemble both
replica robots and the other three subsystems from cast parts, operating within a single factory
site the paper describes as occupying an area on the order of one square kilometer; (2) a
materials refining and casting facility that melts strip-mined regolith, separates oxygen from
silicon, aluminum, and iron oxides, and casts the separated molten metals into molds to produce
components for new copies of all four subsystems; (3) solar energy conversion, storage, and
transmission, using photovoltaic cells and/or mirror-concentrated solar radiation to power the
robots, the rail gun, and electrolytic separation, with excess energy proposed to be beamed by
microwave to satellites in low-earth orbit (LEO); and (4) electromagnetic rail guns for long-distance
transport, which would pack a completed replica's subsystems into an iron casing and accelerate
it "much like a bullet train," shooting it ballistically to a new lunar site or, at sufficient
scale, directly to LEO. The paper notes only one section of a rail gun need be transported from
Earth, since a rail gun is built of many repeated identical units that could be cast and
replicated in situ once a mold exists.

The paper reproduces two tables of lunar regolith composition (most abundant elements as a
percentage of atoms, by Mare, Highland, and average terrain; and trace elements in grams per cubic
meter), citing Turkevich (1973), Heiken, Vaniman, and French (1991), and Schrunk et al. (1999) as
sources. The element names are listed (oxygen, silicon, aluminum, calcium, magnesium, iron,
sodium, and titanium for the major table; sulfur, phosphorus, carbon, hydrogen, nitrogen, helium,
neon, argon, krypton, and xenon for the trace table), but the numeric percentage and concentration
values themselves did not survive text extraction from the source PDF and are not reported here;
this summary does not reconstruct or estimate them.

To avoid microprocessors, which the authors note are sensitive to radiation, the design commits to
a "minimalist" robot intelligence built from electromechanical switches, primitive vacuum-tube-like
elements (without glass envelopes, since space is already a vacuum), and metal ticker tape as a
data storage medium, reasoning by analogy to Brooks' subsumption architecture, Wiener's simple
photoelectric steering circuit, and Tilden's small-transistor-count robots. Design criteria are
stated as bullet lists: mechanically, robots must locomote on a two-dimensional surface that
deviates from an ideal plane, have adaptable rigid fixtures per task, use actuators built from
rigid subunits assembled by simple motions, and transport both solid components and powder;
in terms of minimal intelligence, robots must translate encoded instructions into motion and
force tasks, sense and correct position relative to artificial landmarks, assess their own damage
or misassembly, identify components they are responsible for manipulating, and transfer all of
these abilities to their replicas.

**Physical prototypes.** Two prototypes, built from LEGO Mindstorm kits with enhanced electrical
connections and magnetic alignment features, were constructed and run to test the mechanical
replication step specifically (not the casting, refining, solar, or rail-gun subsystems, none of
which were built). Prototype 1 is described as remote-controlled and non-autonomous, consisting of
seven subsystems (left motor, right motor, left wheel, right wheel, microcontroller receiver,
manipulator wrist, and passive gripper); it relies on external passive (unactuated) fixtures placed
in an assembly area, and a remotely controlled original robot retrieves subsystem parts from
storage, aligns and snaps them together in the fixtures in sequence (motor subsystem first, then
wheels), and completes an assembled replica of itself. Prototype 2 is described as
semi-autonomous, with five subsystems (robot control system/RCX, chassis, left track, right track,
motor/sensor unit) and three actuated intermediate assembly stations that the original robot cannot
bypass: Station 1 (chassis assembly, using a conveyor-belt/sensor unit, docking unit, electrical
connector, and central controller unit) attaches the RCX to the chassis; Station 2 (motor and
track assembly, using hooks, a central controller unit, an electrical connector, a stationary
docking sensor, and a motorized pulley unit) attaches left and right tracks to the chassis
assembly; Station 3 (gripper assembly, using a central controller unit, an electrical connector,
and a ramp/lift mechanism) attaches a motorized gripper arm. The robot navigates autonomously
between the three stations by following floor-marked lines, but acts under remote control while
performing tasks at each station, which the authors label "semiautonomous." The paper states this
system "has yet to fulfill our objective of fully autonomous self-replication."

**Proliferation model.** Section IV develops a separate, purely analytical and numerical model,
stated by the authors not to be an analysis of population growth rates but of how errors in rail-gun
aiming affect the spatial spread of factory locations. The moon is modeled as a unit sphere; the
position and rail-gun orientation of each factory/robot system is represented jointly as a 3x3
rotation matrix in SO(3), so that transporting a replica to a new site is a rotation composed of an
expected shooting-distance term plus Gaussian white-noise error terms. This yields a Fokker-Planck-type
diffusion equation on SO(3) (a "degenerate diffusion," since noise acts in only two of the three
rotational degrees of freedom), governed by three physical parameters: a drift coefficient d1 (expected
shooting distance per shot, in units of lunar radius), and two diffusion coefficients, one for
along-track shooting-distance error and one for cross-track angular error. The equation is solved
using noncommutative harmonic analysis (Fourier analysis on SO(3), following the authors' own prior
text on the subject), reducing the partial differential equation to a set of linear, time-invariant
ordinary differential equations whose solution is a matrix exponential, which is then inverted to
recover the time-evolving probability distribution of factory locations on the sphere.

### Key findings

The single physical result the paper reports is that directed mechanical self-replication, one
robot assembling a complete copy of itself from a stock of separate rigid/electromechanical
components using either passive external fixtures (Prototype 1) or a sequence of actuated
intermediate assembly stations (Prototype 2), was demonstrated in bench-top LEGO Mindstorm
hardware. Prototype 1's seven-subsystem design is presented as evidence that "it is mechanically
feasible for one robot to produce a copy of itself" (page 467). Prototype 2, with five subsystems
and three assembly stations, adds partial autonomy (the robot navigates between stations without
human input) while still requiring remote-control input for the manipulation tasks at each station;
its replication sequence is illustrated in the paper's Fig. 9. No numeric replication time, robot
mass, or part count beyond the subsystem counts above is reported for either prototype, and no
success rate or number of repeated trials is stated in the text.

All other subsystems of the proposed lunar factory (casting and refining plant, solar power
system, electromagnetic rail gun, in-situ actuator and microprocessor-free intelligence
fabrication) are presented only as design arguments about feasibility using lunar materials; none
of them were built, and the paper does not claim otherwise.

The proliferation model's numerical results (Fig. 10) compare probability distributions on the
sphere under three illustrative parameter sets that the authors describe as "reasonable" choices
based on the proposed lunar operation, not values measured from any built hardware: holding the
diffusion coefficients fixed and increasing the drift coefficient causes the region of
concentrated probability to move across the sphere faster, consistent with a longer expected
shooting distance per shot; holding the drift coefficient fixed and increasing the diffusion
coefficient causes the probability mass to spread over a wider area at a given time, consistent
with larger shooting error; and in all three cases the distribution converges toward the uniform
distribution on the sphere as time increases, with larger coefficient values producing faster
convergence. The paper's stated interpretation is that a "noisy" (less precisely aimed) rail gun
may actually be desirable for achieving wide dispersion of self-replicating factories across the
lunar surface, and it describes this analysis as "a first step in the optimal specification of
subsystem properties," not a design conclusion.

### Limitations

The paper is explicit that Prototype 2 has not achieved its own stated goal of full autonomy, and
more broadly the gap between the two demonstrated points, a LEGO robot replicating itself with
either passive fixtures or actuated assembly stations, and the proposed end state, a roughly
one-square-kilometer autonomous factory that strip-mines regolith, casts its own components, and
launches replicas by electromagnetic rail gun, is not bridged by any built or tested hardware
in this paper. The casting/refining plant, solar power and microwave transmission subsystem, rail
gun, and the microprocessor-free "electromechanical intelligence" concept are argued for
qualitatively (by analogy to available materials and to prior robotics and cybernetics work) but
none were fabricated or tested. The lunar regolith composition tables cite external sources for
elemental abundances but the numeric values themselves were not present in the extractable text of
this paper's tables, a limitation of this summary's source extraction rather than a claim about
the paper's content.

The proliferation model is presented by the authors as illustrative of a mechanism (how aiming
error shapes spatial spread), not as a validated predictive model: the drift and diffusion
coefficient values used in the numerical examples are stated to be chosen as "reasonable" rather
than measured or derived from any specific rail-gun design, and the model does not address
population growth rate, replication time, or the number of factories or robots produced over time.
Two prior conceptual space-factory designs (Freitas and Zachary 1981; Von Tiesenhausen and Darbro
1980), cited as motivation, are themselves described by the present authors as lacking concrete
architecture or prototypes, a limitation the authors identify in that prior literature rather than
in their own paper. The paper is from 2002 and its conclusion frames both the hardware and the
proliferation analysis as early steps toward, not achievements of, a functioning autonomous
lunar factory.

### Topic mapping

FA6. Source list entry 3. Sub-Q 5. Empirical reality check for self-replicating capital: reports
the only physically built (bench-scale, LEGO-based) demonstration of directed mechanical robot
self-replication found in this review, sharply distinguished from the paper's separate, purely
analytical/numerical model of how self-replicating lunar factories would spread across the moon's
surface as a function of rail-gun aiming-error parameters, providing a concrete point of contrast
against the paper-factory-scale designs (Freitas 1980, Metzger 2013) that anchor FA6's doubling-time
discussion.
