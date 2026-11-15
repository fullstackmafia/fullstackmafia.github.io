---
company: Exchange Solutions
role: Senior Technical Writer
dates: February 2026 to present
location: Toronto, Canada
summary: Four disconnected documentation sources became one docs-as-code site, and 70+ product features got documented straight from the codebase.
order: 1
---

I joined Exchange Solutions as the company's only technical writer. I own the documentation for the ES Loyalty platform: the console user guides, the API reference, the data feeds, and the release notes.

## Where the docs started

Documentation lived in four places that did not talk to each other. Console guides were in RoboHelp. The API reference was a Postman collection. Feed specifications and release notes were spread across Confluence and SharePoint. Clients often received documentation as emailed PDF and JSON exports.

## One site, maintained as code

I unified all four sources into a single Docusaurus site that is version-controlled and maintained as docs-as-code. Clients, integrators, and the support team now have one place to look.

- **Console guides.** I migrated and rewrote the RoboHelp guides using Claude, with prompts built on the Google developer documentation style guide. This reduced documentation maintenance overhead by <mark>61%</mark>.
- **API reference.** I rebuilt the reference from the Postman collection into MDX pages with reusable components. Every endpoint covers its parameters, request body, and response body.
- **Data feeds.** I documented the operational and data warehouse feeds as structured field tables with format examples.
- **Release notes.** Each note now explains a change by its value to members, program owners, and support teams.
- **Analytics.** I set up Google Analytics on the site to see what people read and to decide what to improve next.

## Feature descriptions from the codebase

The product team and I documented more than 70 product features, with their sub-features and capabilities, directly from the codebase. The product team proposed the approach and scoped the feature list. I ran the drafting in a Claude Project loaded with the company glossary, user personas, and feature sheet, which cut time-to-first-draft by <mark>87.5%</mark>.

Each feature description carries an internal gap report. It flags every mismatch between what the code does and what the existing documentation says, so the product team can resolve it before a client or the support team runs into it.

## Working at team scale as one writer

I use Claude Code, Claude Projects, and Cowork every day to draft, review, and maintain documentation at a scale that would otherwise need a team of writers.

I wrote about the first six months in [One Writer, Four Systems, Six Months](https://exchangesolutions.com/resources/documentation-team-of-one/) on the Exchange Solutions site.
