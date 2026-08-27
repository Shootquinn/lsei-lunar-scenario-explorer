# Entropy, Symmetry, and the Difficulty of Self-Replication

## Citation

Chirikjian, G. S. (2022). Entropy, symmetry, and the difficulty of self-replication (arXiv:2202.02938).
National University of Singapore. https://arxiv.org/abs/2202.02938

Publisher URL: https://arxiv.org/abs/2202.02938

This is an arXiv preprint (submitted 7 February 2022, listed under cs.RO/math.GR). The text does
not identify any peer-reviewed journal or conference as a publication venue for this specific
paper. It states that its own presentation is "an embellishment" of two earlier conference papers
by the same author, one at the 2008 ASME Dynamic Systems and Control Conference and one at the
2008 IEEE Conference on Automation Science and Engineering, both titled close variants of "Parts
Entropy, Symmetry, and the Difficulty of Self-Replication" and "Parts Entropy and the Principal
Kinematic Formula" (references 8 and 9 in the paper's own bibliography).

## Abstract

Frames three questions about artificial physical self-replicating systems, how complex the whole
system is relative to a basic part, how disordered the input parts can be while still permitting
successful replication, and what design principles let complex self-replicating systems function
in disordered environments across generations, then develops mathematical tools (entropy,
symmetry/group theory, information theory, statistical mechanics, ergodic theory, and integral
geometry) to address them, without proposing or reviewing any specific system architecture.

## Summary

### Background and objective

The paper opens from the premise that artificial self-replicating systems, factories of robots,
materials-processing units, and manufacturing apparatus that harvest in-situ resources and build
infrastructure before humans arrive, could greatly extend humanity's reach into space. It states
this is not a new idea and cites a lineage of prior technical work, and explicitly defers any
review of specific system architectures to a companion review by the same research group (Moses
and Chirikjian, 2020, reference 7). Its own stated purpose is narrower: to articulate mathematical
modeling tools, drawn from information theory, statistical mechanics, ergodic theory, group
theory, and integral geometry, that can be applied to assess any self-replicating system, artificial
or biological.

The author frames the central design tension as a tradeoff between overall system complexity and
the system's ability to handle simple inputs. A more complex system can assemble simpler parts or
even raw materials, but a more complex system is also harder to reproduce (the paper's example: a
robot needing microprocessors, or a 3D printer needing a high-energy laser, would face an enormous
challenge producing those components from in-situ resources). The paper's proposed way around this
is to reclassify certain components, microprocessors, lasers, some chemical reagents, as
"vitamins": externally supplied inputs to the system rather than items the system must itself
replicate. This is presented as both a practical route to in-situ resource utilization and, the
author argues, a safety feature: a system dependent on non-self-manufactured inputs is likened to
a living system's dependence on specific nutrients, and is described as safer than an unbounded
self-replicator, because it imposes an intentional resource bottleneck against runaway replication.

The paper repeatedly frames itself as a set of analytical tools rather than a technology review or
a feasibility verdict on any named mission architecture (the author does not perform a
worked numerical case study of a lunar factory in this paper).

### Methods and scope

**Degree of self replication (DOSR, Section 2).** The paper defines DOSR as the ratio of system
complexity to part complexity (eq. 1): DOSR = System Complexity / Part Complexity. It argues this
quantifies the intuitive sense that a biological replicator (e.g., a bacterium built from millions
of amino acids, nucleic acids, lipids, and sugars) is "more" self-replicating than an artificial
system that picks and places a handful of pre-manufactured, complex modules such as motors,
microprocessors, and sensors. The paper states plainly that measuring "complexity" is itself
ambiguous, offering several candidate measures (counting solid parts weighted by geometric
complexity, counting operations or energy expended to produce a part, or using algorithmic
complexity theory to count the length of a fabrication program) and noting that simply summing
part complexities can understate the complexity of an assemblage when synergy is present, as in
gears combined into a transmission.

**Entropy concepts (Section 3).** The paper reviews multiple formal notions of entropy and argues
they are relevant because self-replication intertwines physical and informational aspects. It
covers discrete/quantum entropy (Shannon self-information and Shannon entropy, eqs. 2 to 4; von
Neumann quantum entropy, eq. 5, included "only for completeness" since no connection between
quantum entropy and self-replicating systems has yet been explored), continuous entropy of a
probability density on a measure space (eq. 6) and its specialization to a Lie group (eq. 7, which
the paper states is motivated by A. Sanderson's 1984 "parts entropy" concept for robotic assembly),
statistical-mechanical/configurational entropy via the Gibbs formula and the Boltzmann distribution
(eqs. 8 to 12), measure-theoretic entropy as used in ergodic theory (partition-based entropy, eqs.
13 to 16), and entropy differences, relative entropy (Kullback-Leibler divergence), and conditional
entropy (eqs. 17 and 18). A recurring methodological point is that the relevant quantity for
assessing assembly difficulty is not total entropy but the entropy difference between the
disordered (unassembled) state and the assembled state, and that continuous and discrete entropy
differences converge once bins are chosen smaller than the physical tolerance of the assembly task.

**Symmetry and group theory (Section 4).** The paper reviews groups, subgroups, cosets, coset
spaces, and Lagrange's theorem, then Lie groups (SE(2), SO(3), unimodular groups, and convolution
of probability densities on a group). It states and proves three entropy inequalities (Theorems 4.1
to 4.3), each derived from the nonnegativity of Kullback-Leibler divergence, bounding the entropy
of a probability density on a group by the sum of marginal entropies over a subgroup and its coset
space (eq. 29), over two subgroups and a double-coset space (eq. 30), and over a chain of nested
subgroups (eq. 31). It then applies this machinery to assembly: if a part has a finite symmetry
group K, the space of relevant orientations shrinks from the full motion group G to the coset space
G/K, so there are |K| times as many geometrically correct ways to assemble the part as there would
be without symmetry. Worked illustrations include a cube (24 symmetry operations), a cone (a
one-parameter continuous rotational symmetry), a spherical ball dropped into a matching slot
(orientation becomes irrelevant), and a cylindrical bullet loaded into a revolver chamber. The
paper also notes that viral capsids assembled from asymmetric protein subunits can exhibit
icosahedral symmetry with 60 elements at the level of the whole assemblage.

**Principal Kinematic Formula and containment (Section 5).** The paper introduces the Principal
Kinematic Formula (PKF) from integral geometry, stated without proof and attributed to Blaschke,
which gives the volume, in the group of rigid-body motions, of all configurations in which two
convex bodies collide, computed purely from elementary geometric invariants of the bodies (area
and perimeter in the plane, eq. 34; volume, surface area, and integral of mean curvature in three
dimensions, eq. 35) without needing to integrate directly over the motion group. It states an
analogous "kinematics of containment" result (eqs. 36 to 37) for the volume of free motion of a
small convex body inside a larger convex container under stated curvature conditions, and combines
this with the collision formula to give the parts entropy of a convex part moving freely inside a
container with an internal obstacle, as the log of the difference between the containment volume
and the collision volume with the obstacle (Section 5.3).

**Error propagation across generations (Section 6).** The paper discusses how manufacturing errors
compound when replicas are used to fabricate subsequent generations of parts (e.g., a mold used to
cast a part that is then used to make a new mold), and proposes symmetry as a parity-check
mechanism: because random manufacturing flaws affect different regions of a symmetric part
differently, imposing the known symmetry of the original design onto later-generation parts as a
post-processing step can suppress accumulated error, though it does not treat this as a permanent
fix.

### Key findings

The paper is a mathematical-framework contribution rather than an empirical or case-study paper,
so its "findings" are primarily formal claims and worked toy examples rather than measured data
from a real system. Reported quantitative content:

- DOSR estimates by order of magnitude only (p. 4): "millions" for a biological system such as a
bacterium, versus "tens or hundreds" for artificial physical replicators built to date, a gap the
paper characterizes as "several orders of magnitude." The paper adds that if an artificial
replicator could harvest raw material and cast or 3D-print parts, its DOSR "could rival those of
biological replicators," but this is offered as a qualitative aspiration, not a derived figure.
- Entropy-difference framing (Section 3.3, eq. 17): the difference between continuous and
discretized entropy differences becomes negligible once discretization bins are chosen below the
assembly tolerance, formalized as delta-S_continuous is approximately equal to delta-S_discrete
and both are greater than or equal to zero.
- Three formal entropy-subadditivity theorems (Section 4.4.2, eqs. 29 to 31), each proved directly
from the nonnegativity of Kullback-Leibler divergence, giving upper bounds on the entropy of an
assembly-relevant probability density in terms of marginal entropies over subgroups and coset or
double-coset spaces.
- A worked symmetry example: a cube-shaped part has 24 correct assembly orientations rather than
1, i.e., the entropic burden of correct placement is reduced by a factor of |K| (here 24) relative
to an asymmetric part of the same size.
- Blaschke's Principal Kinematic Formula for planar convex bodies (eq. 34, derived, not original to
this paper): I(C0,C1) = 2*pi*[A(C0) + A(C1)] + L(C0)*L(C1), and its 3D analog (eq. 35): I(C0,C1) =
8*pi^2*[V(C0) + V(C1)] + 2*pi*[A(C0)*M(C1) + A(C1)*M(C0)], worked out explicitly for two spheres
of radii r0 and r1, where it reduces to the volume of SO(3) times the volume of a ball of radius
(r0 + r1), matching direct geometric reasoning about when two spheres collide.
- Containment/free-motion formulas (eqs. 36 to 37) and a resulting parts-entropy expression for a
convex part moving inside a container with an obstacle, S = log(V(C1,C2) minus I(C0,C1)), given as
a closed-form entropy in terms of the same geometric invariants (area, perimeter, volume, surface
area, integral of mean curvature).
- On error propagation (Section 6), the paper states, as a qualitative conclusion rather than a
derived bound, that "no matter what error correction methods are put in place," compounded
manufacturing errors in artificial self-replicating machines "would almost always result in
reduction of functionality over generations." It suggests this may not be undesirable if the goal
is bounded amplification of human effort rather than indefinite replication, offering as an
illustrative (not calculated) example that "a magnification by a factor between 10-100 before they
cease to replicate would be tremendous," explicitly contrasted with the unwanted alternative of an
"immortal (and evolvable)" self-replicating system.

The paper's central qualitative argument for why self-replication is difficult is that closing the
self-replication loop requires simultaneously handling two entropy-relevant burdens: (1) the
combinatorial/informational cost of correctly identifying, manipulating, and orienting initially
disordered parts (parts entropy in the Sanderson sense, extended here to Lie groups and to convex
bodies via integral geometry), which symmetry can reduce but not eliminate; and (2) the compounding
of manufacturing error across generations, for which the paper offers symmetry-based parity
checking as a partial mitigation but states no error-correction scheme it considers prevents an
eventual decline in functionality. The bottleneck the paper identifies is therefore not a single
number but a combination of (a) the entropy cost of assembly from disordered inputs, reducible by
environmental structuring, containment, and part/assemblage symmetry, and (b) an information/error
closure problem across replication generations, for which the paper's own worked example treats
finite, bounded amplification (its 10-100x illustration) as the realistic and arguably preferable
outcome rather than indefinite exponential self-replication.

### Limitations

The paper repeatedly signals that it is presenting a toolkit rather than a validated feasibility
analysis. It explicitly declines to review or evaluate any specific self-replicating system
architecture, deferring that task to a separate review paper by the same group. The connection
between quantum (von Neumann) entropy and self-replicating systems is flagged by the author as
unexplored and included "only for completeness," not as an applied result. The paper offers no
single agreed way to measure "complexity" for the DOSR ratio, presenting several candidate
definitions (part counts, energy/effort, algorithmic complexity of a fabrication program) without
resolving which is most appropriate, and states this ambiguity as an open issue rather than a
solved one. The Principal Kinematic Formula and the containment formulas are stated "without
proof," with the reader directed to cited integral-geometry references (Blaschke; Santalo) for
derivations. The DOSR figures given for biological versus artificial systems ("millions" versus
"tens or hundreds") are order-of-magnitude qualitative comparisons, not values computed from a
defined, agreed complexity measure applied to a named system. The error-propagation discussion in
Section 6 is qualitative: the claim that compounded error "would almost always result in reduction
of functionality over generations" is not accompanied by a derived decay rate, a bound on the
number of viable generations, or a quantitative model connecting the entropy/symmetry apparatus of
Sections 3 to 5 to the generational error-accumulation argument of Section 6; the "10-100x"
magnification figure is presented as an illustrative aspiration, not a value derived from the
paper's formalism, and is labeled here as such. The paper does not perform a numerical case study
applying its entropy and symmetry tools to a specific lunar or Martian self-replicating factory
design, and it does not state a minimum entropy cost, information-theoretic bound, or complexity
threshold that a self-replicating factory would need to clear. It cites the thermodynamics of
computation and physical information-theory literature (Bennett, Szilard, Landauer) without
incorporating a Landauer-type energetic bound into its own derivations.

### Topic mapping

FA8. FA6. Source list entry 7. Sub-Q 6. Supplies the formal skeptic's counterweight to the
optimistic Freitas/Metzger-style assumption, load-bearing for FA6's self-replication centerpiece,
that a lunar factory can straightforwardly close a self-replicating loop. Written by the same
author responsible for the lab's own physical self-replicating robot demonstrations (cross-listed
FA6 entries on Chirikjian's SRR prototypes), this paper argues from entropy and symmetry principles
that self-replication is harder than a simple doubling-time model implies: closing the loop
requires paying an entropy cost to assemble ordered replicas from disordered parts (mitigated, not
eliminated, by containment, environmental structuring, and part/assemblage symmetry) and faces
compounding manufacturing error across generations that the paper states "almost always" degrades
functionality over time, with no error-correction method treated as a permanent fix. Directly
relevant to Sub-Q 6: the paper's own preferred framing treats bounded amplification (its own
illustrative 10-100x figure, explicitly not a derived bound) as the realistic and arguably safer
outcome, in contrast to an assumption of indefinite exponential self-replication, and it recommends
architecturally excluding certain high-complexity components ("vitamins" such as microprocessors
and lasers) from the replication loop entirely as both a practical and a safety-motivated design
choice. The paper offers mathematical tools (entropy measures, symmetry-based entropy-reduction
theorems, and integral-geometry formulas for parts entropy under containment) rather than a
numerical feasibility verdict on any specific lunar factory design, so it should be read as
supplying the analytical apparatus and the qualitative case for caution rather than a computed
bound that could directly overturn a specific doubling-time estimate.
