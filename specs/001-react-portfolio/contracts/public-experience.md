# Public Experience Contract

## Scope

Defines visitor-visible behavior for the single public portfolio page. This is a UI
contract, not a network API. The page is read-only and does not collect visitor data.

## Page Structure

- The document has a descriptive title and semantic `header`, `nav`, `main`, named
  content sections, and `footer` landmarks where appropriate.
- The introduction identifies Himanshu Sharma, Frontend Developer, React.js /
  JavaScript / TypeScript focus, Bengaluru, Karnataka, “Open to opportunities,” and
  a visible path to work or contact.
- The visual direction is bold-modern: expressive but legible typography, purposeful
  color, and considered asymmetry support a professional presentation without copying
  the reference portfolio's exact composition or visual assets.
- Navigation links target real section IDs and use descriptive names. The current
  section is indicated accessibly when a scroll-aware indicator is provided.
- Main content includes profile, experience, projects, skills, education, and contact.
- Contact provides `mailto:sharmah665@gmail.com` and the confirmed LinkedIn profile.
  No phone number is shown.
- No resume action, portrait, project URL, project metric, credential, or education
  date is shown until the owner supplies and approves it.

## Interaction

- Section navigation uses native in-page links and works with keyboard and pointer.
- All interactive elements expose a meaningful accessible name and visible keyboard
  focus; no operation requires hover or a custom pointer.
- External destinations are identifiable before activation. If a new tab is used,
  the originating page remains safe from opener access.

## Responsive and Motion Behavior

- At 320, 375, 768, 1280, and 1920 CSS pixel widths, content remains readable without
  document-level horizontal scrolling, overlap, or clipped controls.
- Keyboard focus is not hidden behind fixed or sticky elements.
- With `prefers-reduced-motion: reduce`, essential content and navigation remain
  available and nonessential movement is disabled or substantially reduced.

## Accessibility and Content Integrity

- Semantic heading order and landmarks allow assistive technology to navigate the page.
- Meaningful images have descriptive alternative text; decorative images are hidden
  from assistive technology.
- Text and interactive controls meet the chosen WCAG 2.2 AA contrast requirements.
- All public claims are accurate and supported by owner-provided content.
- axe-core browser results have no unresolved violations in the primary page; findings
  marked incomplete receive manual review.

## Failure and Empty States

- Missing optional content is omitted without empty headings, dead links, or broken
  image placeholders.
- Failure of an external destination does not hide unrelated portfolio content.
- The page has no visitor-submitted form or remote data dependency in this scope.
