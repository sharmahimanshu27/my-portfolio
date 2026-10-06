---
description: 'Executable implementation tasks for the personal portfolio'
---

# Tasks: Personal Portfolio

**Input**: Design documents from `/specs/001-react-portfolio/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/public-experience.md, quickstart.md

**Tests**: Included because the project constitution requires automated tests for behavior changes and verification of accessibility and responsive requirements.

**Organization**: Tasks are grouped by user story to enable incremental implementation and independent verification.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Tasks operate on separate files and can run in parallel after their listed dependencies.
- **[Story]**: User story label matching `spec.md`.
- Every task names its target file path(s).

## Path Conventions

Single Vite project at repository root, following `plan.md` (`src/`, `e2e/`, and `public/`).

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the React application and required code-quality tools.

- [ ] T001 Scaffold the Vite React TypeScript app at the repository root, preserving `.specify/` and `specs/`; create `package.json`, `package-lock.json`, `index.html`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, and `.gitignore`.
- [ ] T002 Configure ESLint TypeScript/React rules and Prettier with non-conflicting rules; create `eslint.config.js`, `.prettierrc.json`, and `.prettierignore` and add `lint`, `format`, and `format:check` scripts in `package.json`.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish test/build infrastructure, typed content, and a composable semantic page shell before story implementation.

- [ ] T003 Install and configure Vitest, React Testing Library, user-event, and jest-dom; add `test:unit`, `typecheck`, and `build` scripts in `package.json`, configure `vite.config.ts`, and create `src/test/setup.ts`.
- [ ] T004 Install and configure Playwright with axe-core browser integration; add `test:e2e` and browser startup configuration in `package.json` and `playwright.config.ts`.
- [ ] T005 [P] Write content integrity tests in `src/content/portfolio.test.ts` for owner identity, supplied experience/project/skill/education records, approved public email/LinkedIn/location/availability, and absence of the supplied phone number and unsupported claims.
- [ ] T006 Implement typed static owner content in `src/content/portfolio.ts`: set owner to Himanshu Sharma, Frontend Developer, React.js/JavaScript/TypeScript, Bengaluru, Karnataka, and “Open to opportunities”; include supplied summary, both roles and dates, both projects and their technologies, skill groups, B.Tech and institution, email and LinkedIn. Do not include phone, fabricated metrics, credentials, education dates, project URLs, resume, or portrait.
- [ ] T007 Create the shared semantic app shell and section placeholders in `src/main.tsx`, `src/App.tsx`, `src/styles/global.css`, `src/components/SiteHeader.tsx`, `src/components/SectionNav.tsx`, `src/components/sections/IntroSection.tsx`, `src/components/sections/AboutSection.tsx`, `src/components/sections/ExperienceSection.tsx`, `src/components/sections/ProjectsSection.tsx`, `src/components/sections/SkillsSection.tsx`, `src/components/sections/EducationSection.tsx`, and `src/components/sections/ContactSection.tsx`; expose stable section IDs and compose all sections in the page shell.

**Checkpoint**: The application starts, typed content is verified, test commands run, and each story has an isolated section/component to implement.

---

## Phase 3: User Story 1 - Understand the Portfolio Owner (Priority: P1) - MVP

**Goal**: A visitor can identify Himanshu and his professional focus, understand his profile, and navigate the main portfolio by pointer or keyboard.

**Independent Test**: Render the introduction/profile and page navigation; verify owner name, role, focus, location, availability, clear next action, valid section links, logical keyboard order, and visible focus.

### Tests for User Story 1

- [ ] T008 [P] [US1] Write introduction tests for owner identity, role, specialties, location, availability, summary, and primary action in `src/components/sections/IntroSection.test.tsx`.
- [ ] T009 [P] [US1] Write navigation tests for semantic navigation, valid section targets, current-section indication, keyboard activation, and visible-focus affordance in `src/components/SectionNav.test.tsx`.

### Implementation for User Story 1

- [ ] T010 [P] [US1] Implement the site header, skip link, responsive primary navigation, valid same-page section links, and accessible current-section state in `src/components/SiteHeader.tsx`, `src/components/SectionNav.tsx`, and `src/styles/navigation.css`.
- [ ] T011 [P] [US1] Implement the introduction with the verified owner name, role, React/JavaScript/TypeScript focus, Bengaluru location, approved availability, summary, and a working in-page next action in `src/components/sections/IntroSection.tsx` and `src/styles/intro.css`.
- [ ] T012 [P] [US1] Implement the professional profile using only supplied summary and role context, with semantic headings and readable responsive presentation in `src/components/sections/AboutSection.tsx` and `src/styles/about.css`.

**Checkpoint**: User Story 1 works independently; keyboard and component tests pass without project or contact story details being implemented.

---

## Phase 4: User Story 2 - Evaluate Relevant Work (Priority: P2)

**Goal**: A visitor can evaluate supplied experience, projects, skills, and education without encountering invented claims or broken destinations.

**Independent Test**: Render each work section and verify role/project purpose, contribution, supplied dates and technologies, education, and skills; confirm absent metrics, dates, credentials, and project links are omitted.

### Tests for User Story 2

- [ ] T013 [P] [US2] Write experience-section tests for both supplied employers, exact role titles and month/year dates, newest-first ordering, and accurate contribution summaries in `src/components/sections/ExperienceSection.test.tsx`.
- [ ] T014 [P] [US2] Write project-section tests for both supplied projects, their purpose, owner contributions, supplied technologies, and omission of unsupplied outcome metrics and project links in `src/components/sections/ProjectsSection.test.tsx`.
- [ ] T015 [P] [US2] Write skills-section tests that verify all supplied categories and labels are present without fabricated proficiency scores in `src/components/sections/SkillsSection.test.tsx`.
- [ ] T016 [P] [US2] Write education-section tests for the supplied B.Tech qualification and Chouksey Engineering College, verifying that missing dates are omitted in `src/components/sections/EducationSection.test.tsx`.

### Implementation for User Story 2

- [ ] T017 [P] [US2] Implement the experience timeline from typed content, preserving exact supplied roles and month/year dates and omitting unsupported metrics, in `src/components/sections/ExperienceSection.tsx` and `src/styles/experience.css`.
- [ ] T018 [P] [US2] Implement project entries for Clinic Appointment Booking System and AI Data Management Platform using only supplied purposes, contributions, and technology lists; render no empty link/action for absent URLs in `src/components/sections/ProjectsSection.tsx` and `src/styles/projects.css`.
- [ ] T019 [P] [US2] Implement scannable skill groups from the supplied categories without proficiency ratings in `src/components/sections/SkillsSection.tsx` and `src/styles/skills.css`.
- [ ] T020 [P] [US2] Implement the supplied B.Tech and institution with no invented education dates in `src/components/sections/EducationSection.tsx` and `src/styles/education.css`.

**Checkpoint**: User Story 2 is independently verifiable from the static content and its sections; all unsupported optional claims and links remain absent.

---

## Phase 5: User Story 3 - Make Contact or Continue Elsewhere (Priority: P3)

**Goal**: A visitor can reach the owner through approved public channels without exposure of the private phone number or misleading resume controls.

**Independent Test**: Render the contact section; activate the email and LinkedIn destinations; verify the phone number and unavailable resume action are not present.

### Tests for User Story 3

- [ ] T021 [US3] Write contact tests for the exact `mailto:sharmah665@gmail.com` and confirmed LinkedIn destination, descriptive labels, no phone number, and no resume action until a file is supplied in `src/components/sections/ContactSection.test.tsx`.

### Implementation for User Story 3

- [ ] T022 [US3] Implement the contact section with only owner-approved email and LinkedIn destinations, meaningful link names, and no form, phone number, or unavailable resume control in `src/components/sections/ContactSection.tsx` and `src/styles/contact.css`.

**Checkpoint**: User Story 3 works independently and exposes only the contact methods approved for public display.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Validate the integrated portfolio against the public UI contract, quality gates, and responsive/accessibility requirements.

- [ ] T023 [P] Add document title, accurate description, language, viewport metadata, and social preview metadata for Himanshu Sharma in `index.html`; do not add private phone details or unsupported claims.
- [ ] T024 [P] Add Playwright end-to-end coverage for the main content/navigation/contact journey, axe WCAG 2.2 A/AA scan, 320/375/768/1280/1920px horizontal overflow checks, and reduced-motion behavior in `e2e/portfolio.spec.ts`.
- [ ] T025 Run `npm run typecheck`, `npm run lint`, `npm run format:check`, `npm run test:unit`, `npm run test:e2e`, and `npm run build`; fix any failures in the affected `src/`, `e2e/`, `package.json`, or configuration files.
- [ ] T026 Follow `specs/001-react-portfolio/quickstart.md` for keyboard-only, focus visibility, zoom/reflow, external-link, axe incomplete-result, reduced-motion, and public-content manual review; correct any findings in the affected `src/`, `index.html`, or `e2e/portfolio.spec.ts` files.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; T001 precedes T002 because lint/format scripts extend the generated package manifest.
- **Foundational (Phase 2)**: Depends on setup. T003 precedes unit tests; T004 precedes browser tests; T005 precedes T006 so content assertions are written before the content implementation; T006 and T007 unblock story work.
- **User Stories (Phases 3-5)**: Depend on the foundation. Story components occupy separate files and can be implemented in parallel after T007; each story remains independently testable. Tests within each story precede their corresponding implementation.
- **Polish (Phase 6)**: Run after all desired stories are integrated; T024 precedes browser validation in T025, then T026 completes manual review.

### User Story Dependencies

- **US1 (P1)**: Depends only on Phase 2; delivers the MVP identity/profile/navigation journey.
- **US2 (P2)**: Depends only on Phase 2; its isolated work-section files allow implementation alongside US1 or US3.
- **US3 (P3)**: Depends only on Phase 2; its isolated contact section allows implementation alongside US1 or US2.
- All stories consume the immutable shared content model from `src/content/portfolio.ts`; later stories do not require earlier story code to be complete.

### Parallel Opportunities

- T005 content tests can run alongside T004 browser-test setup after T003.
- US1 tests T008-T009 can run in parallel; after those tests, US1 navigation and section implementations touch separate component/style files.
- US2 tests T013-T016 can run in parallel; after tests, the four section implementations T017-T020 use separate files and can run in parallel.
- US3 is a single test-then-implementation sequence.
- US1, US2, and US3 phases can be assigned to separate contributors after the foundation because they use distinct components and stylesheets.

---

## Parallel Examples

### User Story 1

```text
Task: T008 introduction behavior tests in src/components/sections/IntroSection.test.tsx
Task: T009 navigation behavior tests in src/components/SectionNav.test.tsx
```

After tests are in place:

```text
Task: T010 header and navigation in src/components/SiteHeader.tsx, src/components/SectionNav.tsx, src/styles/navigation.css
Task: T011 introduction section in src/components/sections/IntroSection.tsx, src/styles/intro.css
Task: T012 profile section in src/components/sections/AboutSection.tsx, src/styles/about.css
```

### User Story 2

```text
Task: T013 experience tests in src/components/sections/ExperienceSection.test.tsx
Task: T014 project tests in src/components/sections/ProjectsSection.test.tsx
Task: T015 skills tests in src/components/sections/SkillsSection.test.tsx
Task: T016 education tests in src/components/sections/EducationSection.test.tsx
```

After tests are in place:

```text
Task: T017 experience section in src/components/sections/ExperienceSection.tsx, src/styles/experience.css
Task: T018 projects section in src/components/sections/ProjectsSection.tsx, src/styles/projects.css
Task: T019 skills section in src/components/sections/SkillsSection.tsx, src/styles/skills.css
Task: T020 education section in src/components/sections/EducationSection.tsx, src/styles/education.css
```

### User Story 3

```text
Task: T021 contact behavior test in src/components/sections/ContactSection.test.tsx
Then Task: T022 contact section in src/components/sections/ContactSection.tsx, src/styles/contact.css
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 setup and Phase 2 foundation.
2. Complete Phase 3, User Story 1.
3. Run its Vitest checks and manually verify the independent introduction/profile/navigation journey.
4. Stop for review or deploy a minimal portfolio MVP; keep project/contact sections as clearly labeled shell placeholders only until their stories are implemented.

### Incremental Delivery

1. Complete setup and foundation, including shared typed content and test runners.
2. Deliver US1 as the identity/profile/navigation MVP.
3. Add US2 work, projects, skills, and education; verify independently.
4. Add US3 approved contact links; verify privacy and destinations.
5. Run browser, responsive, accessibility, reduced-motion, and full quickstart checks.

### Notes

- Each checkbox task has a sequential ID and a concrete path; story tasks carry their `[US1]`, `[US2]`, or `[US3]` label.
- `[P]` is used only for tasks operating on separate files after prerequisites are met.
- Unit tests are written before their story implementations, in keeping with the project constitution.
- Do not display the supplied phone number or invent resume, portrait, dates, project links, credentials, or metrics.
- No task installs a contact service, CMS, analytics, or backend.
