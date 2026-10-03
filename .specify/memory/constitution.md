<!--
Sync Impact Report
Version change: uninitialized -> 1.0.0
Modified principles: none; all five principles are established by this initial constitution.
Added sections: Technology and Architecture; Engineering Workflow.
Removed sections: none.
Follow-up TODOs: Confirm the original ratification date.
-->
# my-portfolio Constitution

## Core Principles

### I. Readable, Consistent Code
Changes MUST follow the established conventions of the relevant language and project. Names and control flow MUST make intent clear; linting and formatting checks MUST pass before changes are considered complete. Rationale: predictable code is easier to review and safer to change.

### II. Automated Testing and Verification
Behavior changes MUST have automated tests at the narrowest useful level. Tests MUST cover expected behavior and relevant failure or boundary cases. Before completion, contributors MUST run the applicable tests and report any checks that could not be run. Rationale: verification makes regressions visible and conclusions reproducible.

### III. Maintainability by Design
Implementations MUST favor small, cohesive units and explicit boundaries. New abstractions MUST remove meaningful duplication or complexity; speculative generalization MUST be avoided. Changes MUST update affected documentation and tests when contracts or workflows change. Rationale: code is maintained longer than it is first written.

### IV. Accessible, Responsive Experience
User-facing changes MUST remain usable with keyboard navigation, readable contrast, meaningful labels, and responsive layouts. Relevant accessibility and viewport behavior MUST be checked during implementation. Rationale: a portfolio is only effective when visitors can use it across devices and abilities.

### V. Dependency and Security Hygiene
Dependencies MUST have a clear purpose and MUST use supported, maintained versions where practical. Changes MUST NOT expose secrets or introduce avoidable security risks; dependency changes MUST be reviewed for impact and license compatibility. Rationale: third-party code is part of the application's operational and security surface.

## Technology and Architecture

The portfolio user interface MUST use React. New framework or runtime dependencies beyond the established stack MUST have a documented need. Implementations MUST preserve existing project architecture unless an approved change explicitly revises it.

## Engineering Workflow

Each change MUST be scoped to a clear outcome, reviewed for correctness and maintainability, and validated with relevant automated checks. Integration or end-to-end tests MUST be added when behavior crosses component or system boundaries and unit tests alone cannot verify the contract. Reviewers MUST identify untested behavior and unresolved risks before approval.

## Governance

This constitution governs project implementation and review. Every change MUST comply with these principles; any exception MUST state its scope, rationale, and follow-up plan in the change record. Amendments MUST be reviewed, update this document, and include a Sync Impact Report for human review. Versioning follows semantic versioning: MAJOR for incompatible governance changes, MINOR for new or materially expanded principles or sections, and PATCH for clarifications that do not change obligations. Reviewers MUST check changes against applicable principles and confirm required validation has run before approval.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): original adoption date unknown | **Last Amended**: 2026-10-03
