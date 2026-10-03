# Quickstart: Portfolio Validation

## Prerequisites

- Node.js 24 LTS and npm.
- Install the committed dependency set from the repository root with `npm ci`.
- Browser tests require the Playwright browser installed by the project's setup
  instructions; use the lockfile-matched Playwright version.

## Local Run

```powershell
npm run dev
```

Open the local URL printed by Vite. Confirm the introduction, profile, experience,
projects, skills, education, and contact sections render from the approved content.

## Automated Checks

```powershell
npm run typecheck
npm run lint
npm run format:check
npm run test:unit
npm run test:e2e
npm run build
```

Expected result: every command exits successfully; the production build emits static
files to `dist/`. `typecheck` must run TypeScript independently of Vite's transpilation.
Unit tests should query by role/name and verify user-visible content and optional-link
behavior rather than React internals.

## Browser Scenarios

1. Load the home page; verify the document title, primary landmarks, owner identity,
   role, public location, availability status, and primary navigation.
2. Follow the in-page navigation to profile, work, education, and contact. Verify
   section targets exist and the email and LinkedIn destinations match their labels.
3. Verify that no phone number is rendered and unavailable optional materials (resume,
   portrait, project URLs, outcomes, credentials, and education dates) are not shown.
4. Run axe-core against the rendered page with WCAG 2.2 A/AA tags. Fail on violations;
   manually review results marked incomplete instead of treating them as passes.
5. At 320, 375, 768, 1280, and 1920 CSS pixel widths, verify `documentElement`
   does not overflow horizontally and inspect for overlap or clipping.
6. Emulate reduced motion and confirm all sections and controls remain available with
   nonessential motion suppressed.

## Manual Review

- Navigate from the start of the page using only Tab, Shift+Tab, Enter, and browser
  scrolling. Confirm logical order, visible focus, no keyboard trap, and working skip
  navigation if provided.
- Inspect at narrow and desktop sizes and at increased browser zoom. Confirm focus is
  not obscured by fixed navigation and no content overlaps.
- Review axe incomplete findings, link destination labels, and all public claims against
  the user-supplied resume and approved profile choices.