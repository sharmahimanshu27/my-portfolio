# Data Model: Personal Portfolio

This is a static, curated public profile. It has no authenticated users, remote
database, or visitor-submitted records. Optional values are omitted from the public
experience when unavailable; they are never fabricated.

## Owner Profile

Represents the portfolio owner and the central introduction.

| Field | Type | Required | Validation / visibility |
|---|---|---:|---|
| name | text | Yes | `Himanshu Sharma`; displayed as supplied |
| role | text | Yes | Frontend Developer |
| specialties | list of text | Yes | React.js, JavaScript, TypeScript |
| summary | text | Yes | Based on the supplied professional summary; do not add unsupported claims |
| location | text | Yes | `Bengaluru, Karnataka`; owner approved public display |
| availability | text | Yes | `Open to opportunities`; owner approved this status |
| portrait | local image reference | No | Omit until an owner-approved image is supplied; meaningful image requires descriptive alternative text |

## Experience Record

Represents one supplied employment position. Ordered newest first.

| Field | Type | Required | Validation / visibility |
|---|---|---:|---|
| organization | text | Yes | Brioso Technologies or Logic Junior |
| title | text | Yes | Preserve supplied role title |
| startDate | month and year | Yes | Use supplied month/year |
| endDate | month and year | Yes | Use supplied month/year; do not label as current |
| location | text | No | Bengaluru, Karnataka where supplied |
| contributions | list of text | Yes | Faithful summaries of supplied responsibilities; no invented metrics |

## Project Record

Represents an owner-supplied project. No public link or outcome is currently supplied.

| Field | Type | Required | Validation / visibility |
|---|---|---:|---|
| name | text | Yes | Clinic Appointment Booking System or AI Data Management Platform |
| summary | text | Yes | Faithful summary of supplied project description |
| contributions | list of text | Yes | Preserve owner role and workflows described |
| technologies | list of text | Yes | Use only technologies supplied for that project |
| outcomes | list of text | No | Show only verified outcomes explicitly supplied by owner |
| links | list of labeled URLs | No | Omit now; show only when owner supplies valid destination |
| image | local image reference | No | Omit until approved asset supplied; never use reference-project assets |

## Skill Group

Represents a scannable grouping of supplied skills.

| Field | Type | Required | Validation / visibility |
|---|---|---:|---|
| category | text | Yes | Languages; Frontend; UI & Styling; API & Integration; Development; Tools |
| skills | list of text | Yes | Preserve supplied skill names; do not assign proficiency scores absent evidence |

## Education Record

Represents the supplied degree.

| Field | Type | Required | Validation / visibility |
|---|---|---:|---|
| qualification | text | Yes | Bachelor of Technology, Computer Science & Engineering |
| institution | text | Yes | Chouksey Engineering College |
| dates | text | No | Omit because no dates were supplied |

## Contact Destination

Represents a visitor-facing way to follow up.

| Field | Type | Required | Validation / visibility |
|---|---|---:|---|
| label | text | Yes | Describes the destination, such as Email or LinkedIn |
| destination | email or URL | Yes | `sharmah665@gmail.com` or the supplied LinkedIn profile URL |
| public | boolean | Yes | Both confirmed destinations are public; phone is excluded entirely |

## Relationships and Ordering

- One Owner Profile has many Experience Records, Project Records, Skill Groups, and Education Records.
- The Owner Profile has multiple Contact Destinations.
- Experience records are ordered newest first; project order is curated for relevance; skill groups follow the supplied categories.
- Missing optional fields do not block display of the record's required content.

## Validation Rules

- All visible text and claims must be traceable to the supplied resume or later owner approval.
- Link destinations must be valid, match their visible labels, and be omitted if not supplied.
- Contact output must never contain the supplied phone number.
- Date display must preserve the supplied month/year and must not suggest the most recent role is current.
- Do not display skill ratings, project metrics, awards, credentials, project URLs, a portrait, or a resume file unless supplied and verified.