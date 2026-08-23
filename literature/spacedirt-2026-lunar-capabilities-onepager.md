# SpaceDIRT 2026 - Lunar Surface Industrial Capabilities: Ranked Targets

## RFI One-Pager Summary

## Citation

SpaceDIRT Inc. (2026). *Lunar surface industrial capabilities: Ranked targets* (Doc No. SD-RFI-2026-01, Rev 2, effective 2026-08-10) [RFI context one-pager].

Publisher URL: not printed in source.

## Metadata

Document type: single-page RFI context/positioning document, prepared by a company (SpaceDIRT Inc.) for outreach to space and non-space companies responding to a CSA RFI · Not a peer-reviewed or open-access publication · Effective date printed on the document: 2026-08-10.

**Duplicate file note.** A second file, `Lunar_Capabilities_OnePager_RFI_Rev2_qmod junk.pdf` (in `incoming/`), was checked against this Rev 2 document. Both the extracted plain text and the extracted tables are byte-identical between the two files (zero-line diff on both the `.txt` and `_tables.txt` outputs); the two files differ only in MD5 hash and file modification timestamp, not in content. It is treated as the same source and not summarized separately.

---

## Abstract

A one-page, nine-row ranked list of lunar surface industrial capability areas (surface power; thermal management and night survival; surface mobility and logistics; autonomy, robotics, and teleoperation; excavation and regolith handling at scale; prospecting and resource characterization; construction; ISRU processing and product handling; surface communications, navigation, and timing), each scored on near-term value, readiness, certainty, and program demand, with per-row citations to NASA and industry sources. Scope is stated as covering surface operations, infrastructure, and ISRU; transportation is explicitly excluded and delivery to the surface is assumed to be purchased. The document states its ranks track the NASA/Artemis architecture and reflect the preparer's judgment, and that adjacent ranks are not materially distinguishable.

---

### Background and objective

The document is framed explicitly as context for space and non-space companies responding to a CSA RFI, prepared by SpaceDIRT Inc. It ranks capability areas rather than companies or technologies, on four columns (near-term value, readiness, certainty, program demand), each drawn from cited sources.

### Methods and scope

Nine capability rows are ranked 1 through 9. The document states the ranking tracks the NASA/Artemis architecture as its primary demand signal. Seven references are cited across the rows: [1] NASA FY26 Civil Space Shortfall Prioritization (2026); [2] NASA Civil Space Shortfall Ranking and Descriptions (2024); [3] NASA Moon-to-Mars Architecture Update (2025); [4] NASA ACR25 Lunar Power Strategy, NTRS (2025); [5] Kleinhenz, STMD ISRU Gap Assessment, LSIC/JHU-APL (2022); [6] NASA CFM Portfolio Overview (2024); [7] program announcements from NASA, CNSA, and Intuitive Machines (2024-26).

### Key findings

The nine ranked rows, with the specific figures and citations printed in the source:

| # | Capability | Near-term value | Readiness | Certainty | Program demand |
|---|---|---|---|---|---|
| 1 | Surface power (generation, storage, grid) | Very high: "Gates every operation" | Split: "Solar mature; fission and grids not" | High: "Loads quantified per segment" | Universal: every asset, all programs |
| 2 | Thermal management and night survival | Very high: "14-day ceiling without it" | Low: "Not yet done without nuclear heat" | High: "Environment mapped, penalty known" | Universal: top ten for every stakeholder group [2] |
| 3 | Surface mobility and logistics | High: "Second of 32 in FY26 [1]" | Moderate: "Heavy offload unproven" | High: "Requirements defined" | Broad: Artemis, ILRS, commercial |
| 4 | Autonomy, robotics, and teleoperation | High: "Embedded in ranks 3, 5, 7, 8" | Moderate: "Assembly still open" | Medium: "No converged approach" | Universal: "Cuts across the whole list" |
| 5 | Excavation and regolith handling at scale | Medium-high: "Two customer chains" | Very low at scale: "Largest quantified gap (~10⁷×) [5]" | Medium-high: "Regolith known from Apollo" | Broad: construction and ISRU |
| 6 | Prospecting and resource characterization | Medium: "Gates extraction capital" | Very low: "No completed polar mission" | Very low: "The data does not exist" | Narrow but gating: all polar ISRU plans |
| 7 | Construction (pads, berms, roads, site prep) | Medium: "Plume protection, shielding" | Low: "No in-situ build to date" | Medium: "Unproven in vacuum and dust" | Medium: all programs, later |
| 8 | ISRU processing and product handling | Low near-term / Very high long-term | Low-moderate: "Ground demonstrations only" | Low-medium: "Feedstock adds uncertainty" | Low now: deferred; Chang'e-8 demo planned [7] |
| 9 | Surface communications, navigation, timing | Medium: "Needed beyond line of sight" | Moderate: "All still on paper" | Medium-high: "Standards work underway" | Thin: small share of any budget |

Row-level narrative detail, as printed:

- Row 1: "NASA added a fission element to its architecture in 2025 [3] and requires external power on site before the assets that draw it land."
- Row 2: "First of 187 shortfalls in 2024 and first of 32 in FY26 [1][2]. Battery-only night survival costs over a quarter of a habitat's delivered mass [4]; every lander that has kept operating through the night has used nuclear heat." The mass claim is cited to reference [4], printed in the reference list as "NASA, ACR25 Lunar Power Strategy, NTRS, 2025." The stated denominator for the "over a quarter" figure is a habitat's delivered mass, as printed; this is reported here exactly as the source states it, without reconciliation against any other mass-fraction figure held elsewhere in this project's reference set.
- Row 3: "Covers autonomous navigation, cargo offloading from tall landers, and relocation of multi-tonne assets. NASA's 2025 utility rover element hauls that class of cargo under teleoperated to fully autonomous control [3]."
- Row 5: "Flight-demonstrated hardware has moved under 0.01 t; sustained production needs hundreds of thousands of tonnes per year [5]. Funding covers demonstration scale only."
- Row 6: "VIPER was cancelled in 2024, PRIME-1 was lost on the tipped IM-2 lander [7], and NASA reclassified prospecting as architecture data gaps in 2025 [3]."
- Row 7: narrative sentence corrupted by the same extraction defect as row 4 (see Limitations); the row ends with the legible, un-interleaved clause "...outranks ISRU in the FY26 list [1]."
- Row 8: "Oxygen extraction was assessed at TRL 4/5 and water mining at TRL 2/3 in 2022 [5]; stated production targets are unfunded [5]. Includes surface liquefaction and cryogenic storage of the products [6]."
- Row 9: "Permanently shadowed regions have no Earth line of sight. LunaNet and LCRNS specifications exist; nothing is fielded [3]."

### Limitations

**Extraction defect.** Both this document's plain-text and table extractions show character-interleaved text in places, measured at a 16-24% single-character-token ratio against a 2-5% baseline for clean extraction. Per source-handling instructions, the `_tables.txt` extraction is treated as authoritative for tabular cell content, and was used for the ranked-column values in the table above.

**Row 4 (Autonomy, robotics, and teleoperation).** The connecting narrative sentence for this row is corrupted by the interleaving defect beyond reconstruction; only a trailing fragment survives legibly: "...unsolved [3]." The ranked column values for this row (near-term value, readiness, certainty, program demand, including the sub-notes "Embedded in ranks 3, 5, 7, 8," "Assembly still open," "No converged approach," and "Cuts across the whole list") were recoverable via the tables extraction and are reported above with confidence; the narrative sentence explaining the [3] citation is not, and no reconstruction of it is offered here beyond the surviving fragment.

**Row 7.** The row's connecting narrative is also affected by the same interleaving defect, badly enough that no reliable reconstruction is offered here; the row's ranked column values (Medium / Low / Medium / Medium, with sub-notes "Plume protection, shielding," "No in-situ build to date," and "Unproven in vacuum and dust," recovered via the tables extraction) are reported with confidence, but the prose explaining them is not reproduced or paraphrased, since stitching the legible fragments into a coherent sentence would risk presenting a guess as a quotation.

The document itself states its ranks reflect "the preparer's judgment" and that "adjacent ranks are not materially distinguishable," i.e., the ordinal ranking is explicitly not presented as a precise instrument.

### Topic mapping

Rows 1-2 map to power and thermal/life-support infrastructure. Rows 3-4 map to mobility, robotics, and autonomy. Rows 5-7 map to regolith-facing operations (excavation, prospecting, construction). Rows 8-9 map to ISRU processing and communications/navigation infrastructure, respectively.
