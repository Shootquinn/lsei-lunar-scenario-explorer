# Statistical Method from the Viewpoint of Quality Control

## Citation

Shewhart, W. A. (1939). *Statistical method from the viewpoint of quality control* (W. E. Deming, Ed.). The Graduate School, U.S. Department of Agriculture.

Publisher URL: Not stated in the source document. The PDF is a scanned USDA Graduate School archive copy (marked "Historic, Archive Document") with a National Agricultural Library ownership stamp; no DOI or web address appears anywhere in the file.

## Abstract

Transcript of four lectures Shewhart delivered in March 1938 at the Graduate School of the U.S. Department of Agriculture, edited for publication by W. Edwards Deming.

Develops, from first principles and industrial case material (mainly Bell Telephone Laboratories/Western Electric data), an operational theory of "statistical control": a state, an operation, and a judgment.

Argues that quality control in mass production consists of three interdependent, circularly related steps — specification, production, inspection — paralleling hypothesis, experiment, and test of hypothesis in scientific method.

Introduces the distinction between chance (constant) causes and assignable causes of variation, the control-chart criterion ("Criterion I") for detecting the latter, and operational (rather than purely mathematical) definitions of randomness, tolerance limits, accuracy, and precision.

Uses examples from steel, malleable iron, insulating material, fuses, and measurements of physical constants (velocity of light, gravitational constant, Planck's constant) to argue that a state of statistical control is empirically rare, must be actively attained through a specified operation, and cannot be assumed merely because data are said to arise under "the same essential conditions."

## Summary

### Background and objective

The lectures originated as an invited series before the Graduate School of the Department of Agriculture, arranged because agricultural researchers of the period had grown interested in distribution theory and statistical hypothesis testing and wanted contact with the statistical methods industry had developed for economic quality control.

Deming's foreword contrasts the industrial statistician's fast feedback loop (machines "turning out pieceparts by the thousands or even millions monthly") with the agricultural researcher's slow one, where a prediction about a crop treatment may take years, and multiple growing seasons, to confirm or refute.

The foreword frames Shewhart's contribution as providing operationally verifiable meanings for terms — random variable, accuracy, precision, true value, probability, degree of rational belief — that agricultural statistics used without such grounding.

Shewhart's own preface states the lectures are limited to "elementary but fundamental principles and techniques basic to the efficient use of statistical method in the attainment of a state of statistical control, the establishment of tolerance limits, the presentation of data, and the specification of accuracy and precision."

The stated broader objective, beyond manufacturing, is to use the "simplest type of scientific control" — economic control of quality — to illuminate general questions about the fundamental role of statistical method in scientific control, and about how far intelligence versus chance can govern control of the physical environment.

Deming's foreword also frames the collaboration between statistician and subject-matter expert as generative rather than merely additive: what the two are capable of turning out jointly, he writes, is "the sum of their independent efforts augmented by a strong positive interaction term."

Each chapter opens with an epigraph that signals its orientation toward practice: Chapter I with a quotation from John Johnston, Director of Research at United States Steel, on improving the uniformity of steel; Chapter II with one from Frank B. Jewett, President of Bell Telephone Laboratories, on the engineer's need for more intimate knowledge of materials; Chapter III with quotations from Lord Kelvin ("when you can measure what you are speaking about... you know something about it") and the philosopher C. I. Lewis; and Chapter IV with P. W. Bridgman's operationalist dictum that a concept is synonymous with its corresponding set of operations.

### Methods and scope

The work is expository and argumentative rather than a report of new experiments. Its evidentiary base is drawn from Shewhart's prior industrial work (control-chart data, mostly unattributed Bell System/Western Electric production series) and from published measurements of physical constants and material properties assembled from other sources: a malleable-iron tensile-strength symposium, tables of physical constants, and historical determinations of the velocity of light, the gravitational constant, and Planck's constant.

Four chapters correspond to the four lectures:

- Chapter I, Statistical Control — the three senses of statistical control (state, operation, judgment) and the historical emergence of interchangeable-parts manufacturing and the control chart.
- Chapter II, How Establish Limits of Variability? — setting economic tolerance limits and comparing engineering versus "research" data.
- Chapter III, The Presentation of the Results of Measurements of Physical Properties and Constants — how summarized data should be tabulated and reported to convey maximal knowledge.
- Chapter IV, The Specification of Accuracy and Precision — operational definitions of these terms and of the underlying concept of a "true value."

An Epilogue, added for publication, maps the three-step control cycle onto the steps of scientific method. A closing section, "Some Comments on Symbols and Nomenclature," discusses the difficulty of fixing definite meanings even for the book's own notation (X, X′, σ, p′, "random").

Deming's editorial footnotes appear throughout the text, occasionally adding independent technical commentary — for example, an extended editor's note on the Student-range versus tolerance-range distinction in Chapter II.

### Key findings

**Three steps of control as a dynamic, circular process.** Quality control is presented as three steps: specification of what is wanted, production of things to satisfy the specification, and inspection of the things produced against the specification. These were historically treated as independent ("a beautifully simple picture") under an "exact science" mindset, but Shewhart argues they must instead be coordinated in a circle or spiral (fig. 10, p. 45), each step informing the other two, because science is only probable, not exact.

He draws an explicit parallel to scientific method: specification corresponds to hypothesis, production to experiment, and inspection to test of hypothesis. Mass production combined with statistical control constitutes a "continuing, self-corrective" method of using materials efficiently — the same adjectives, he notes in the Epilogue, that characterize scientific method itself.

**Three senses of statistical control.**

- As a *state* — a limiting statistical condition definable both physically, via an idealized "bowl experiment" (drawing chips with replacement from a bowl, showing predictable, irreducible sample-to-sample variability), and mathematically, via a frequency function and postulated statistical limits (Postulate I: a model based on n+1 terms of a random sequence is preferred to one based on n terms).
- As an *operation* — the technique (control charts, action limits) used to attain that state.
- As a *judgment* — a probable inference that the state has actually been reached (Postulate II: the degree of rational belief in a prediction is not an intrinsic property of the prediction but inheres in its relation to evidence).

Shewhart argues at length that no unique mathematical description of "random order" exists for either infinite or finite sequences — three specific difficulties are enumerated for the infinite-sequence case — so randomness can only be given meaning operationally, in terms of a chosen physical random operation such as bowl-drawing.

He works through von Mises' proposed requirements for calling an infinite sequence random: that the fraction of observed values falling in any interval approach a stable limiting value, and that this same limiting value hold for every subsequence selected by a rule that does not depend on the magnitude of the value being selected. Citing Kendall and Smith (1938), he notes a recognized difficulty with this approach: ignorance of a value's magnitude is not, by itself, a satisfactory criterion of independent selection, and there is arguably no such thing as a random selection from a universe considered apart from the universe being sampled.

For finite sequences, he shows that any particular observed order is, strictly, no more or less "random" than any other of the n! possible orderings of the same n numbers — a genuinely ordered sequence such as strictly increasing values is exactly as likely, combinatorially, as any disordered one — yet working scientists reliably treat some orders as suspicious. He resolves this by defining random order operationally, as membership in the class of orders generated by repeating a chosen physical random operation, rather than as an intrinsic property to be read off the sequence itself.

**The operation of statistical control: five specified steps.** The operation by which a state of control is pursued is set out as a five-step specification:

1. Specify in a general way how an observed sequence of n data is to be examined for clues to the existence of assignable causes.
2. Specify how the original data are to be taken and broken into subsamples, based on human judgment about whether conditions were essentially the same.
3. Specify the criterion of control to be used — what statistics are to be computed for each subsample, and how control limits are to be built from them.
4. Specify the action to be taken when an observed statistic falls outside its control limits.
5. Specify how much data must be examined, without evidence of assignable causes, before the engineer is to act as though a state of statistical control had been attained.

Shewhart stresses that the operation as a whole is distinct from the criterion used within it: the operation is "a dynamic process involving a chain of actions," of which the control-chart criterion is only one tool.

**Order as a clue to nonrandomness: the oxygen-density example.** To illustrate how order alone can signal an assignable cause, Shewhart gives nine successive determinations of the density of oxygen presented in increasing numerical order — 1.42891, 1.42892, 1.42892, 1.42894, 1.42894, 1.42895, 1.42895, 1.42896, 1.42900 — noting that a reader shown only this monotonic sequence would likely suspect a nonrandom condition, such as a drift caused by warming apparatus.

Shown the values in the order they actually occurred instead (1.42900, 1.42894, 1.42896, 1.42892, 1.42895, 1.42891, 1.42892, 1.42894, 1.42895), the same reader would likely judge the sequence random. The two presentations contain identical numbers; only the order differs, which Shewhart uses to argue that order is itself evidence, independent of the magnitudes observed.

**The ideal bowl experiment as physical model.** Shewhart's own earlier work (cited from his 1931 *Economic Control of Quality of Manufactured Product*) is invoked to describe a specific normal bowl containing a large number of chips, from which 4,000 drawings were recorded and analyzed as the empirical anchor for what "random" means physically throughout the lectures; later discussion of approaching a statistical limit (fig. 5) uses a bowl built with roughly 1,000 chips distributed approximately normally about zero.

**Chance versus assignable causes; the control-chart criterion.** Variation is attributed either to a constant ("chance") cause system, which cannot economically be reduced further, or to "assignable causes," defined pragmatically as causes findable by experiment "without costing more than it is worth to find it." This definition is explicitly economically relative: an assignable cause today may not be one tomorrow.

"Criterion I," Shewhart's control-chart method, is evaluated against four practical requirements. It must:

1. Indicate the presence of assignable causes of variation.
2. Do so in a way that facilitates discovery of those causes.
3. Be simple enough for continuing, self-corrective use.
4. Keep the false-alarm rate — looking for a cause when none is present — below an accepted value; in his own practice, about three times in 1,000 subsamples under normality.

**Worked demonstration of the role of order.** Using 204 insulation-resistance measurements on pieces of a new material (table 7), grouped into 51 subgroups of 4 in production order, Criterion I detects assignable causes (fig. 7, upper).

Applying the identical criterion to the same 204 numbers after randomizing their order (drawing from a bowl) shows no evidence of assignable causes (fig. 7, lower). This demonstrates that detection depends on the *order* in which data are examined, not merely on the magnitudes present, since any one specific order is, by construction, no more or less likely than any of the 204! possible random orderings.

The same data show that subgroup size matters. Analyzed as 51 subgroups of 4, or via analysis of variance at the .01 level, assignable causes are indicated. Analyzed as 4 subgroups of 51, both tests still indicate causes, but the result is called exceptional for that grouping. Analyzed as 2 subgroups of 102, both tests fail to detect anything.

Shewhart reports that a subsample size of four is effective in most cases in his experience, because large subgroups tend to mask the erratic, come-and-go character of individual assignable causes by overlapping their effects.

He further distinguishes three kinds of acts within the operation of control: mental operations, or judgments about whether conditions were essentially the same; mathematical operations, such as constructing a criterion of control; and physical operations, such as searching for an assignable cause once a point falls outside its limits.

**Minimum evidence for concluding control has been attained.** Shewhart states that a person "would seldom if ever be justified" in concluding a state of statistical control had been reached with fewer than 25 samples of 4 satisfying Criterion I under presumably constant conditions. Establishing economic minimum tolerance limits may require a total sample of not less than 1,000 showing no indication of assignable causes.

A control chart of 136 successive sample averages of fuse blowing-time (fig. 9), taken after a preliminary survey removed assignable causes, is presented as an example of a manufacturing process in a state of control so complete that its averages "remain within control limits almost as well as if the samples had been obtained from a normal bowl universe." Shewhart calls this result the more impressive because, as later chapters show, some of the most precise physical-science measurements fail this same test.

**The judgment of statistical control.** Having distinguished the state and the operation, Shewhart treats the third sense, judgment, as a probable inference resting on Postulate II.

He casts the person who must judge whether control has been reached as needing familiarity not only with the statistical means of specifying control but also with rules of probable inference and evidence. He draws an explicit analogy to a legal judge under Anglo-American jurisprudence, who likewise operates under defined rules of evidence and principles of judicial proof rather than by direct access to fact.

**Formal versus physical states of control.** The text distinguishes a purely formal, mathematical concept of a state of statistical control (a property of distribution theory that may or may not describe anything attainable in practice) from the physical state approximated by the bowl experiment, which represents "the limit to which we can go in attaining valid predictability and minimum variability."

Quality-control studies are said to show that this physical limit can in fact be approached in mass production, and that when it is approached, the observed data satisfy the criteria used to describe the purely formal state. Shewhart treats this as evidence that the formal and physical concepts are not merely analogous but empirically convergent in the manufacturing setting — a convergence he states is comparatively rare in physics and engineering measurement generally.

He also engages Neyman's characterization of randomness as a property of experiments that "even if carried out repeatedly with utmost care to keep the conditions constant, yield varying results," but argues it is safer to anchor randomness to one specific physical operation, such as drawing from a bowl, and to require that any other operation believed random reproduce the bowl's results before being treated as such, rather than to rely on a general sense of having controlled conditions carefully.

**Two kinds of errors.** Paralleling Neyman and Pearson's error framework (cited directly, Biometrika 1928), Shewhart defines analogous error pairs for control-chart interpretation: rejecting the hypothesis of an assignable cause when one was in fact present, versus accepting that hypothesis when none was present.

This pairing is applied both to a single finite sequence and to the broader judgment of whether an entire repetitive process is in a state of control. He distinguishes these empirical, unquantifiable error pairs from Neyman–Pearson's formally computable ones, which rest on an assumption of random sampling that the rest of the lectures treat as itself needing to be established rather than assumed.

**Historical stages in interchangeable-part manufacture.** A brief history (fig. 2) traces control through several stages:

- Essentially uncontrolled toolmaking in the earliest periods.
- Early fitted parts roughly 10,000 years ago.
- Egyptian interchangeable bow parts and arrows roughly 5,000 years ago.
- The first real concept of interchangeable parts, around 1787.
- The introduction of "go" tolerance limits, around 1840.
- "Go, no-go" tolerance limits, around 1870.
- The statistical quality-control chart, 1924 — identified as the starting point of statistical technique applied to manufactured-product quality control in the sense used throughout the book.

The Bell System example cited: telephone apparatus involves more than 110,000 different kinds of pieceparts drawn from raw materials "from the four corners of the earth," and many quality tests — fuse blowing time, for instance — are destructive, forcing reliance on sampling.

**Three patterns of tolerance specification.** Chapter II opens by classifying practical tolerance ranges into three types, each illustrated with a concrete manufacturing requirement: both limits specified, as with the diameter of a shaft; only an upper limit specified, as with the maximum permitted blowing time of a fuse, where a lower limit of zero is implied; and only a lower limit specified, as with the minimum tensile strength of a steel strand, where an upper limit of infinity is implied.

In each case, Shewhart notes, some maximum tolerable fraction of nonconforming product is implicitly required even when not stated explicitly — usually less than 1 percent and often less than 0.1 percent.

**Tolerance limits and the limits of engineering "estimation."** Chapter II works through 5,000 tensile-strength measurements on malleable-iron test bars (Touceda, for the Malleable Iron Research Institute, May–November 1930; table 1).

The observed distribution resembles a normal curve but fits it only loosely (chi-square = 90.23). Shewhart treats the poor fit as beside the point: the operative question for setting tolerances is not the functional form of the distribution but whether a statistical universe — that is, a controlled state — exists at all.

A companion example, pure iron density reported in an authoritative table as 7.871 ± 0.002 g/cm³, is used to show that a summary of the form X ± ΔX does not by itself indicate whether the underlying process is controlled.

Nor does such a summary specify which of several distinct statistical meanings is intended. The text works through numeric examples of three such ranges, all computed at the same 50 percent probability level, to show they are not interchangeable:

- The Student range, computed from a sample.
- The estimated tolerance range, also computed from a sample but predicting inclusion of future averages.
- The classical probable-error range, computed from the universe parameters rather than a sample.

Chapter II further argues that "engineering" and "research" data should not be treated differently with respect to assuming statistical control. Sixteen research-grade measurements of a physical property (table 4) are shown, like the engineering tensile-strength data, not to behave as though drawn from a bowl, undercutting any presumption that carefully taken laboratory data are automatically "in control."

The chapter concludes that the statistician's own work in setting tolerances should begin only after the scientist or engineer, in cooperation with the statistician, has established evidence of control. Shewhart illustrates the division of labor with an anecdote about an Irish hod-carrier who describes his job as easy because he only carries bricks up four flights of stairs while "the man up there does all the work" — used to suggest that the scientist who hands data to a statistician without first checking for control has, in effect, skipped the harder part of the job.

A worked numerical example illustrates why estimated tolerance ranges fluctuate: for a sample of four drawn from a normal bowl universe with values 1.7, 0.2, 1.4, and 0.5, Shewhart computes an average of 0.950 and a standard deviation of 0.619.

He then walks through how the resulting 90 percent estimated tolerance range, approximately mean ± 3σ for a sample of this size, is subject to sampling fluctuation. It is only verifiable, in the operational sense, as a statement about the average behavior of many such ranges rather than about any one range's certainty of containing 90 percent of future values.

The chapter also takes up the meaning of a "best" estimate, citing Neyman's concept of the "best unbiased estimate": an estimate whose expected value equals the true parameter and whose variance is minimum among unbiased estimates.

Shewhart concludes that "there is no such thing as the best estimate: there can be only an estimate that is chosen... as best by someone," comparing the statistician's acceptance of an estimation rule to the way editors of the International Critical Tables must themselves choose, without a uniquely correct method, which values to accept as the "true" values of physical constants.

Measurement consistency across methods is examined using duplicate physical standards of length (table 6): each standard, used repeatedly, generates its own infinite sequence of measurements, and true interchangeability of the standards would additionally require that all such sequences behave as random samples from the same universe — a stronger and, the text argues, generally unmet requirement beyond internal consistency of any one method alone.

Measurements of small masses attributed to Heyl are cited as a further instance of research-grade data that fail this consistency requirement: Shewhart quotes Heyl's own remark that differences among results obtained with different materials "are yet to be explained" but are not attributable to the nature of the material, treating this as another case of elite scientific measurements that do not behave like drawings from a bowl of chips.

**Presentation of data.** Chapter III argues that a single tabulated constant — the density of pure iron given in the Smithsonian tables as 7.86 g/cm³, for example — conveys no information about variability and is inadequate for setting tolerances.

It distinguishes "scientific" language, which conveys knowledge, from "emotive" language, which arouses attitudes, and criticizes statistical terms such as "most probable value" and "probable error" as sometimes more emotive than scientific.

Using historical measurements of the velocity of light spanning 1874–1902 (fig. 20, after von Friesen, 1937) compared against the theoretically expected behavior of ranges computed from repeated draws from a normal bowl (fig. 14), the chapter shows that observed ranges of physical-constant measurements do not behave like random samples: they fail to center on a stable value the way bowl-drawn ranges do.

The same lack of control is reported in historical measurements of the gravitational constant G and Planck's constant h.

The recommended practice, when the underlying distribution's form is unknown, is to report the original ungrouped distribution f₀ together with the mean, standard deviation, and sample size n, rather than summary statistics alone.

Shewhart states his own degree of belief in a tolerance-range prediction would be reduced, not increased, on seeing the full data behind a small-sample (n = 8) summary. The 204-observation insulation-resistance data (table 7) reappear here as a worked example of presenting original data with order preserved.

Chapter III frames knowledge derived from measurement as resting on three components: evidence, prediction, and degree of belief. It treats the presentation of "original data" as raising its own interpretive questions — whether such data can be presented purely "as facts," and what counts as adequate evidence for the various kinds of inference a reader might draw from them.

The chapter also proposes that any set of original data has four characteristics relevant to its presentation: the numbers themselves, their order, the conditions under which each was taken, and the identity of the observer.

Two rules of thumb follow from this analysis: original data should be considered evidence for inferences of various kinds rather than as self-interpreting facts (Rule 1), and a summary should convey the useful information in a set of original data as completely as the chosen form of summary permits (Rule 2).

**Operational definition of accuracy and precision.** Chapter IV, epigraphed with Bridgman's operationalist dictum that "the concept is synonymous with the corresponding set of operations," poses a fivefold objective:

1. Giving operationally definite meaning to specifications of accuracy and precision.
2. Establishing how the truth content of a judgment about them can be assessed.
3. Establishing how the validity of such a judgment can be assessed.
4. Identifying means for controlling the error of judgment.
5. Clarifying the role of statistical theory in all of the above.

A commercial core-solder specification requiring tin content "determined by any method capable of a precision of ±.2 percent" is used to argue that a specification can carry definite meaning even before any method is shown to satisfy it.

A judgment applying such a method, Shewhart argues, can remain "valid" — in the sense of being what a reasonable person would conclude from the stated evidence — even if later shown false.

A surface-tension measurement procedure is analyzed to show that neither the physical description of an operation (for example, "free from grease") nor its numerical description (for example, "continue until consistent readings are obtained") alone constitutes a complete operational definition.

Both aspects, physical and numerical, must be specified together, and reproducibility, not mere agreement of readings, is the deeper requirement — a large number of identical readings can itself signal a problem, not just too much scatter.

The "true value" X′ of a physical constant is argued to be, in principle, unobservable by any physical operation — analogized to √−1 having no place among the real numbers — so that accuracy and precision, tied to this concept, admit multiple operationally verifiable meanings-in-use rather than one canonical meaning fixed "once and for all."

The chapter separates theoretical from practical verifiability, and within theoretical verifiability separates physical from logical verifiability.

An infinite sequence of measurements is called physically verifiable in a theoretical sense because one more observation can always, in principle, be added, much as one more digit of √2 can always be calculated. The true value X′ itself, by contrast, is held to have no corresponding physical operation of observation at all, only a logical or symbolic one.

The two concepts — an approachable infinite sequence and an unapproachable true value — are therefore of fundamentally different verifiable character, even though both appear together in the same equations of classical error theory.

**Epilogue synthesis.** The closing section makes explicit the correspondence between control and inquiry: specification corresponds to hypothesis, production to experiment, inspection to test of hypothesis, framing the entire control cycle as an instance of scientific method conducted at industrial scale.

It restates as an empirically established fact, not an assumption, that a state of statistical control "is not a natural one, at least in the fields of physical and engineering measurements," and that even after such a state is attained — itself typically a long process — on the order of 1,000 or more repetitions are still needed to set valid, maximally efficient tolerance limits.

**The future of statistics in mass production.** Closing Chapter I, Shewhart argues that the industrial statistician's role must expand beyond studying and measuring an existing chance-cause system to actively modifying it: helping to close up tolerance ranges, improve quality, and decrease production costs rather than only measuring them.

He frames the three steps of specification, production, and inspection as together constituting a scientific experiment whose steps in large-scale mass production may be split across different companies or departments. Carrying it out requires the coordinated effort of "literally hundreds and even thousands" of employees — physicists, chemists, engineers, sales agents, purchasing agents, lawyers, and economists — most of whom have had no training in statistics or probability.

He concludes that the long-run contribution of statistics to mass production depends less on placing more trained statisticians in industry than on cultivating "a statistically minded generation" among those who design and direct production processes.

### Limitations

The text repeatedly frames its own operating rules as empirically and economically chosen rather than derived a priori.

The subgroup size of 4, the "not less than 25 samples of 4" threshold for judging control attained, the "three in 1,000" false-alarm rate, and the "1,000 or more" observations needed for tolerance-limit setting are all described as reflecting Shewhart's own accumulated industrial experience rather than as universal constants; he states there is "no a priori exact basis" for the underlying choices.

The discussion of statistical design of experiments is explicitly bypassed, with Shewhart noting only that "time did not permit" its treatment.

The concept of a "true value" of a physical constant is declared not operationally observable by any physical procedure, which the text acknowledges leaves accuracy and precision without a single fixed operational meaning.

The material is oriented to mass production and physical or engineering measurement.

The editor's foreword itself flags that industrial and agricultural applications differ sharply in feedback speed and in the practical stakes of misapplying the theory, without the lectures extending detailed treatment to the agricultural case.

As an edited transcription of oral lectures, the text carries interspersed editorial footnotes and at least one extended editorial comment — pp. 59–60, on the Student-range versus tolerance-range distinction — that are Deming's rather than Shewhart's own exposition.

Several numeric thresholds recur without a derivation the text presents as exact: the three-in-1,000 false-alarm figure is explicitly tied to an assumption of normality in the underlying statistic, and Shewhart notes elsewhere that real production and measurement series routinely fail to meet that assumption before control is attained, so the same figure is offered as a practical convention rather than a guaranteed error rate in any given application.

### Topic mapping

FA3. Source list entry 4. Sub-Q 1.

Chapter I, "Statistical Control" (pp. 1–49): three steps of quality control; three senses of statistical control (state, operation, judgment); historical stages in interchangeable-part manufacture and the 1924 origin of the control chart; the bowl experiment and Postulates I and II; Criterion I and the operation of statistical control; two kinds of errors; significance of control for statistical methodology and for mass production.

Chapter II, "How Establish Limits of Variability?" (pp. 50–79): economic tolerance limits; malleable-iron tensile-strength and pure-iron density examples; Student range versus estimated tolerance range versus probable-error range; engineering versus research data and where the statistician's work should begin.

Chapter III, "The Presentation of the Results of Measurements of Physical Properties and Constants" (pp. 80–119): scientific versus emotive language; presentation of original data (insulation-resistance table); measurements of the velocity of light, G, and h as evidence against assumed control in physical measurement; recommended reporting of f₀, mean, standard deviation, and n.

Chapter IV, "The Specification of Accuracy and Precision" (pp. 120–148): operational meaning of measurement operations; the unobservability of the "true value"; core-solder and surface-tension examples; the fivefold objective for specifying and judging accuracy and precision.

Epilogue (pp. 149–151): mapping of specification/production/inspection onto hypothesis/experiment/test of hypothesis; synthesis across chapters.

Some Comments on Symbols and Nomenclature (pp. 152–155): discussion of the indefiniteness of the book's own notation (X, X′, σ, p′, "random") as a closing illustration of the difficulty of fixing meaning even within a single technical text.
