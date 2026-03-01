# BN Automobiles

Foundational repo for the BN Automobiles dealership platform. This document captures the initial product intent, working assumptions, and delivery plan so everyone on Team Skoda stays aligned before code starts to land.

## 1. Product Snapshot

| Area | Notes |
| --- | --- |
| **Goal** | Build a modern, lead-gen friendly web experience for BN Automobiles with room to grow into inventory browsing, financing calculators, and service booking. |
| **Primary users** | Prospective car buyers researching BN Automobiles; existing customers looking for service/follow-ups. |
| **Tone & brand** | Trustworthy, premium, locally rooted. Bold hero visuals + high-contrast CTA blocks. |
| **Platforms** | Responsive web (mobile-first). |

## 2. Working Assumptions

1. Content source of truth will be a lightweight CMS (sanity/Contentful) or structured JSON until CMS is selected.
2. Deployment target is Vercel (preferred) or Netlify; staging + production environments will be separate.
3. Authentication is out-of-scope for v0; lead forms route to the BN Automobiles CRM via webhook/email.
4. Integrations required:
   - Google Maps for showroom/service center locations.
   - WhatsApp deep link for instant inquiries.
   - Optional GA4 tag.

(Assumptions will be ratified with Pranav before coding.)

## 3. Proposed Stack

| Layer | Choice | Rationale |
| --- | --- | --- |
| Framework | Next.js 15 (App Router) + TypeScript | Fast iteration, server components, SEO tooling baked in. |
| Styling | Tailwind CSS + Framer Motion | Consistent design tokens + subtle motion for premium feel. |
| Forms | React Hook Form + Zod, posting to Next Route Handlers | Client + server validation symmetry. |
| CMS bridge | Sanity client (optional fallback to local JSON) | Lets us flip to real CMS without rewiring components. |
| Deployment | Vercel | Preview deployments for every PR; zero-config edge caching. |

## 4. Repository Layout (planned)

```
.
├── apps/
│   └── web/                # Next.js app
├── packages/
│   ├── ui/                 # Shared UI primitives (buttons, cards, etc.)
│   └── config/             # Schema, constants, copy blocks
├── public/                 # Static assets (logos, meta images)
├── tooling/
│   ├── eslint/             # Custom ESLint setup
│   └── scripts/            # Release/build helpers
├── tests/                  # Playwright + contract tests
└── README.md
```

This structure keeps future multi-app expansion open while staying lightweight for v0.

## 5. Delivery Roadmap (Draft)

| Phase | Scope | Deliverables |
| --- | --- | --- |
| **P0 – Discovery (1 day)** | Confirm requirements, finalize sitemap, gather assets (logos, copy, photography). | Signed off sitemap + content checklist. |
| **P1 – Scaffold (1 day)** | Initialize repo structure, CI (GitHub Actions), lint/test config, Tailwind theme. | `apps/web` booted, CI passing. |
| **P2 – Core UX (3–4 days)** | Build hero, inventory spotlight, services CTA, testimonial band, contact form. | Responsive pages with placeholder data. |
| **P3 – Data wiring (2 days)** | Hook up CMS/JSON feed, integrate Google Maps + WhatsApp, form submission handler + email/webhook. | Live data powering UI + notifications. |
| **P4 – Polish & Launch (2 days)** | SEO/meta, analytics, performance pass, accessibility audit, deploy to staging + prod. | Production release + handover notes. |

## 6. Next Actions

1. Confirm these assumptions + stack with Pranav.
2. Collect brand assets (logo, color palette, typography guidelines).
3. Lock sitemap + content blocks.
4. Kick off Phase P1 (repo scaffold + CI) once the above are approved.

---

_This README will evolve as scope firms up. All major changes will be documented via PR summaries for transparency._
