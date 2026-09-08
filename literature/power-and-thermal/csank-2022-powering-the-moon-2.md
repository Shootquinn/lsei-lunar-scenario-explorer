# Powering the Moon: Artemis Microgrid to Lunar Economy

## Citation

Csank, J., Thomas, G. L., Granger, M., & Gardner, B. (2022). *Powering the Moon: From Artemis technology demonstrations to a lunar economy* (NASA Document ID 20220004165) [Conference paper]. Nuclear and Emerging Technologies for Space (NETS 2022), May 8–12, 2022, Cleveland, OH, United States. American Nuclear Society; NASA Glenn Research Center. https://ntrs.nasa.gov/citations/20220004165

Publisher URL: https://ntrs.nasa.gov/citations/20220004165

*Citation fields confirmed 2026-07-21 against the NASA NTRS record (Document ID 20220004165). No DOI assigned (NTRS conference paper). Work of the U.S. Government; public use permitted. Authors all NASA Glenn Research Center, Cleveland, OH. Note: the PDF's own metadata lists "Howard, Richard H." as author and a "NETS 2020 Template", but the page-1 byline and the NTRS record agree on Csank, Thomas, Granger, Gardner. Provenance check against the PDF itself (pdfplumber full-text + 200-dpi render of page 1): the only citation-relevant items PRINTED anywhere in the document are the title, the author byline, the "NASA Glenn Research Center, Cleveland, OH 44135" affiliation, and a DOI placeholder reading "[Placeholder for Digital Object Identifier (DOI) to be added by ANS]". The venue name (NETS 2022), the dates (May 8–12, 2022), the location (Cleveland, OH), and the NTRS Document ID are NOT printed on any page — they come from the NTRS record, not the document. "ANS" (American Nuclear Society) appears in the document only inside the DOI-placeholder text.*

## Abstract

NASA Glenn Research Center conference paper on electrical power architecture for the lunar surface. It sizes candidate microgrid topologies for an Artemis base, runs an AC-versus-DC transmission trade study using an in-house sizing tool, and argues that although early Artemis power will be DC, a growing commercial lunar economy with higher power and longer distances will require AC transmission and a utility-style power business.

### Note

Document metadata lists "Howard, Richard H." as PDF author and the template as "NETS 2020 Template"; the byline authors on page 1 are Csank, Thomas, Granger, and Gardner (all NASA Glenn Research Center), used here as the cited authors.

## Summary

### Background and objective
The paper situates lunar surface power within NASA's Artemis plans, which begin with robotic exploration of the lunar south pole for water-ice and other resources (using assets such as VIPER) and expand over time to habitats, In-Situ Resource Utilization (ISRU), and eventually commercial activities like manufacturing and agriculture. As activity grows, the need for highly reliable, highly available electrical power rises. The authors propose a lunar microgrid to meet these needs and examine how the power system must evolve from initial Artemis demonstrations toward a full commercial lunar economy. The objective is to compare microgrid architectures and transmission approaches (AC vs. DC) and identify a power strategy that can scale with growing power demand and distribution distance.

### Methods and scope
The study assumes an Artemis base drawing about 90 kW total, with a habitat needing roughly 20 kW, and an ISRU production site located about 3–5 km from power generation, often in or near a cold trap. It proposes a microgrid connecting two islanded sub-grids (a Habitat Microgrid and an ISRU Microgrid) so that solar arrays and batteries operate in the load voltage range without conversion, and excess power can be shared. Three architectures are defined and sized — radial, ring, and mesh — with increasing fault tolerance (radial none, ring single-line-fault tolerant, mesh dual-line-fault tolerant). Sizing uses the Electrical Power System – Sizing and Analysis Tool (EPS-SAT). Cables and converters are sized for 40 kW (the Fission Surface Power plant capacity, the largest power transmitted). Cables are ETFE-insulated twisted bundles on the surface; converters are bidirectional DC-DC (95% efficiency) or AC-DC (96.5% efficiency); converter mass models come from curve fits of existing space power electronics. Architectures were sized for DC and for 1 kHz three-phase AC across grid voltages of 1.2 kV to 6 kV. Additional scaling studies on the radial architecture varied power level and cable length toward a 1 MW, ~1,000 km future case. Switchgear, control/communication hardware, and cable-deployment equipment were excluded from mass estimates.

### Key findings
- Assuming equal voltage and other parameters, there is no clear mass advantage between AC and DC; at or below about 3 kV the two are comparable, and voltage above 3 kV is unlikely for Artemis because AC mass rises and high-voltage DC converters would need many series-stacked components.
- Transmission voltage is the design variable that most strongly affects system mass: higher voltage lowers current and therefore cable mass. Cables dominate microgrid mass, ranging from about 70% to 95% of total.
- The ring architecture adds roughly 50% more mass than radial to gain single-line-fault tolerance; the mesh architecture roughly doubles system mass to gain dual-line-fault tolerance.
- In scaling studies, cable mass scales roughly linearly with power level and almost quadratically with transmission distance, so voltage must rise substantially as power and distance grow.
- For a future commercial scale (approaching ~1 MW total demand, power sharing of hundreds of kW, and distances up to ~1,000 km), the authors conclude that DC at 120 V becomes infeasible and AC transmission becomes the only practical option, since radiation-hardening and power-electronics limits cap feasible DC voltage.
- Because AC voltage conversion via transformers is more efficient than AC-DC conversion, the authors suggest distributing primary power as AC and converting to established 120 V DC for secondary systems, and note it would be advantageous for the Artemis distribution system to be AC to align with the later commercial economy.
- The paper references proposed categories of an in-space economy applicable to planetary surfaces: surface habitats/structures, in-space manufacturing, space resources (prospecting, mining, ISRU, recycling), and in-space utilities (energy, communication, water).

### Limitations
Mass estimates are acknowledged to be underestimates because switchgear, control and communication hardware, and cable deployment/spooling equipment were omitted. Cable line lengths derive from a notional Artemis asset layout subject to change. Converter mass relies on curve fits of existing space power electronics rather than lunar-qualified hardware. The AC studies use a single 1 kHz three-phase assumption. A risk-and-reliability study to estimate line-fault likelihood — needed to select among radial, ring, and mesh — is identified as future work. Power demand figures (e.g., 90 kW base, 1 MW future) are stated as assumptions/estimates.

### Topic mapping
Sections: (I) Introduction; (II) initial Artemis operations and power system; (III) Full Artemis Operations and a Lunar Microgrid (including III.A, AC vs. DC for power transmission, and the radial/ring/mesh trade study); (IV) Beyond Artemis (in-space economy categories, scaling studies, utility concept); (V) Summary; plus Acknowledgments and References. Subject areas: lunar surface electrical power, microgrid architectures and fault tolerance, AC vs. DC transmission trade studies, fission surface power and ISRU power needs, power management and distribution (PMAD) mass optimization, and lunar economy/utility concepts.
