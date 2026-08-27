# Lunar Scenario Explorer

*Published from the Lunar Scenario Explorer, build of 23 August 2026.*

The Lunar Scenario Explorer is a single self-contained web page that models three lunar ISRU scenarios across three eras: Agency Led Baseline, Early Shift to Mars, and The Commercial Break. Moving a slider for ice grade, landed mass, power share or construction share recomputes water production and construction output live from the page's own coefficients. Nothing on screen is a stored number.

The page is live at https://shootquinn.github.io/lsei-lunar-scenario-explorer/. Cloning this repository and opening `index.html` directly from disk runs the identical page. There is no build step, no external dependency, and no network call of any kind; the file that runs on GitHub Pages is the same file that runs offline.

## Repository layout

- `index.html`: the app itself.
- `literature/`: this project's own summaries of the published sources the app's evidence ledger cites, all at one level with no subfolders.
- `writing-guides/`: five vendored style and structure guides used when generating a document from the app; `writing-guides/SOURCE.md` records where they came from.
- `report-generator-prompt.md`: a prompt, described below, that a capable model session runs against the app to produce a document.
- `lunar-scenario-explorer-map.md`: a generated reference to the app's own claims, sections and coefficients, for a session that needs to navigate the app's structure without holding the whole page in context.
- `oracle/`: command-line tools, described below, that answer a question about the app or draw a figure from it on demand.
- `README.md`: this file.
- `LICENSE`: the Unlicense, verbatim.
- `NOTICE.md`: the one named exception to the Unlicense dedication, described below.
- `.gitattributes` and `.nojekyll`: repository configuration. The former keeps line endings from being rewritten; the latter tells GitHub Pages to serve the files as they are rather than run them through Jekyll.

## License

This repository is released under the Unlicense, a dedication to the public domain. The dedication covers this project's own work: the app, its evidence ledger and coefficients, the summaries in `literature/`, `lunar-scenario-explorer-map.md`, and `report-generator-prompt.md`.

The dedication does not extend to the sources those summaries describe, and cannot. Each file in `literature/` is this project's own summary of a published work it does not own; the source is identified by citation and DOI, so a reader reaches the original through its publisher. No third-party PDF or page image is in this repository.

The dedication carries one named exception. `writing-guides/signs_of_ai_writing.md` is a derivative of the English Wikipedia page "Wikipedia:Signs of AI writing" and stays under that page's own licence, CC BY-SA 4.0, rather than the Unlicense; a share-alike licence and a public-domain dedication cannot both govern the same file. See `NOTICE.md` for the full accounting.

## Claims, evidence and arguments

Every claim in the app carries a statement, numbered evidence with citations, an argument that states its own counter-evidence and what stays open, and a tier. The app holds twenty Claims arranged across sixty-six sections, with the sources they rest on identified by citation and DOI.

Where the ledger holds a claim the app does not model, the app says so, names the claim, and gives the reason in its own terms, so that an exclusion is never mistaken for an omission.

Advanced mode reveals the sensitivity sliders together with the Equations, Notes, Definitions and Evidence Ledger tabs. Appending `?selfcheck` to the URL runs the page's own test suite in the browser.

## Generating a document

`report-generator-prompt.md` is a prompt for a capable model session to run against the app, producing a document such as a scenario write-up or a dossier on a single claim. The prompt reads `lunar-scenario-explorer-map.md` to navigate the app's structure without holding the whole page in context.

This repository holds no static copy of the documents the prompt can produce. The app is the authority on the model, the claims and the evidence; a generated document is a rendering of what the app already says, not a second copy of it kept here to drift out of date.

## Answering a question or drawing a figure

`oracle/` holds three command-line tools. Each is a plain Node.js script, so running one needs Node.js installed, the one dependency the app itself does not share; run them from a checkout of this repository, and each locates `index.html` and `literature/` automatically since both ship alongside `oracle/` in this same tree.

```
node oracle/answer_question.js "your question here"
node oracle/render_figure.js --form=era-series --scenario="Agency Led Baseline" --output=water --out=/tmp/water
node oracle/verify_figure.js /tmp/water.manifest.json index.html
```

`answer_question.js` decides whether a question resolves against the app, against `literature/`, both, a figure, or neither, and answers accordingly; a question the app can answer is answered from the app rather than from a literature summary, the same authority the rest of this repository holds the app to. `render_figure.js` draws one of three figure forms, an era series, a scenario comparison, or a knob sweep, directly from the app's own model, never from a stored number. `verify_figure.js` re-derives every value a figure's manifest records straight from the app and asserts it still matches; `verify_answers.js` reports the outcome counts (answered, refused, filled, or errored) from a run log `answer_question.js`'s own `--log` flag writes.
