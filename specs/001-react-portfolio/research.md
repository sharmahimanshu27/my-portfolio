# Research: Personal Portfolio

**Date**: 2026-10-03
**Inputs**: Feature specification, project constitution, and user-confirmed choices

## Application Structure and Rendering

**Decision**: Use Vite with React and TypeScript to build one static, client-rendered
page. Keep semantic page sections and same-page links; do not add a router, backend,
CMS, or server-rendering layer for the current scope.

**Rationale**: The portfolio has one owner and a small set of public content sections.
There are no authenticated workflows or server-managed records. A small Vite app
fits the requested React stack and can be deployed as static files.

**Alternatives considered**: A React framework with server rendering or static
pre-rendering could improve content availability before client JavaScript and support
future multi-page growth, but adds framework conventions and scope. Revisit if search
visibility or direct multi-page routes becomes a requirement. A vanilla HTML site is
not suitable because the constitution requires React.

## Runtime and Dependencies

**Decision**: Use Node.js 24 LTS for development and CI. Start with the official Vite
React/TypeScript project scaffold, check peer compatibility for the resolved package
set, and commit the package-manager lockfile. Do not pin versions in planning text;
resolve and verify them during implementation.

**Rationale**: The repo has no existing runtime or dependency baseline. Vite requires
a supported Node runtime; Node 24 LTS avoids selecting an end-of-life baseline.

**Alternatives considered**: Other Node versions are viable if supported by the chosen
Vite release and project policy. Avoid an unsupported or end-of-life runtime.

## Content Representation and Navigation

**Decision**: Store supplied owner content in a typed local TypeScript data module.
Render optional media and destinations only when the owner supplies them. Use native
same-page anchors and semantic section IDs. If active-section indication is needed,
track sections with a narrowly scoped browser observer and reflect the current state
accessibly.

**Rationale**: Static typed data provides one clear source of portfolio content without
a remote data dependency or publishing system. Native anchors work without a router
and retain browser history and direct-section navigation behavior.

**Alternatives considered**: JSON is suitable but less expressive for content types;
Markdown/MDX is useful for owner-edited articles but not required for this small fixed
portfolio. A routing library is unnecessary until separate pages or route-level state
is in scope.

## Quality and Accessibility Validation

**Decision**: Use Vitest with React Testing Library, user-event, and jest-dom for
behavior tests; Playwright and axe-core for browser accessibility checks. Include a
separate TypeScript check, ESLint, Prettier check, and production build. Manually
review keyboard focus, content reflow/zoom, and reduced-motion behavior.

**Rationale**: Component tests verify user-visible interactions efficiently; a real
browser is needed to inspect responsive CSS and focus presentation. Axe catches many
common accessibility issues but cannot determine WCAG conformance alone. The project
constitution also explicitly requires lint and formatting validation.

**Alternatives considered**: Unit tests alone cannot verify browser layout or focus
visibility. Axe in a simulated DOM does not replace the browser. A single combined
lint/format tool is possible, but ESLint plus Prettier satisfies the project's gates
with clear separation of responsibilities. Do not run a second linter alongside
ESLint.

## Design Direction

**Decision**: Build a bold-modern professional portfolio with a confident
introduction, expressive but legible typography, purposeful color and asymmetry,
distinct work and project narratives, scannable skills, education, and direct contact.
Use purposeful motion only where it improves orientation or emphasis; preserve full
functionality with reduced motion.

**Rationale**: The owner selected a bold-modern direction. The reference project
demonstrates useful content coverage and impact-oriented project summaries. Its exact
neon sci-fi visual treatment and code are not requirements and must not be copied.

**Alternatives considered**: A restrained editorial style was considered but the
owner chose a more expressive direction. Reproducing the reference's cinematic 3D,
audio, custom cursor, and dense motion would increase performance and accessibility
risks without support from the stated goals.

## Public Content and Privacy

**Decision**: Use the supplied name, role, professional summary, skills, experience,
projects, education, Bengaluru location, email, LinkedIn, and confirmed “Open to
opportunities” status. Exclude the supplied phone number. Omit a portrait, resume
button/file, project destinations, education dates, credentials, and quantitative
outcomes unless the owner provides them. Never infer outcomes from task descriptions.

**Rationale**: Public profile content and visibility have been confirmed by the owner.
The spec requires accurate information and omission of unavailable details.

**Alternatives considered**: Publishing the phone number was offered and declined.
Inferring dates, metrics, portrait, or project URLs would risk inaccurate public claims
and is explicitly excluded.

## Deployment and Search Discovery

**Decision**: Keep the deliverable as static build output, but do not select a hosting
provider or prescribe provider-specific headers/URLs yet. Include standard document
metadata and ensure essential content is represented in the delivered page. Revisit
pre-rendering and host configuration when deployment/search requirements are known.

**Rationale**: No domain or hosting platform was supplied. Provider-specific setup,
security headers, and subpath configuration cannot be determined from this repository.

**Alternatives considered**: Selecting a hosting provider now would invent an
operational requirement. Client rendering is adequate for the current single-page
scope, but pre-rendering is a viable future change if indexing or no-JavaScript access
becomes a hard requirement.

## Remaining Questions

None block this plan. Hosting provider/domain, final resume file, portrait, public
project URLs, and a target browser support matrix remain optional implementation inputs;
missing optional assets and destinations must stay omitted.

## References

- [Vite Getting Started](https://vite.dev/guide/)
- [Vite TypeScript behavior](https://vite.dev/guide/features.html)
- [Vite build compatibility and deployment](https://vite.dev/guide/build.html)
- [Node.js releases](https://nodejs.org/en/about/previous-releases)
- [React app guidance](https://react.dev/learn/creating-a-react-app)
- [Vitest](https://vitest.dev/guide/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright accessibility testing](https://playwright.dev/docs/accessibility-testing)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [typescript-eslint](https://typescript-eslint.io/getting-started/)
- [Prettier CI checks](https://prettier.io/docs/install)
