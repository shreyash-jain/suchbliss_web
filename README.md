# Suchbliss website — recovered static mirror

Full replica of https://suchbliss-khaki.vercel.app/ (the original Next.js
source was lost), rebuilt from the deployed output and packaged for
**Cloudflare Pages**.

## Layout

- `public/` — the complete site: 37 pages (home, about, plans, events,
  blogs + 27 blog posts, contact, faqs, privacy, refund, terms, profile),
  all Next.js JS/CSS chunks, fonts, images, hero video, and a styled 404 page.
- `public/_rsc/` — captured React Server Component payloads; these make
  Next.js client-side navigation (no full page reloads) keep working.
- `functions/_next/image.js` — replaces Vercel's image optimizer by serving
  the original image (no resizing).
- `functions/_middleware.js` — answers the Next router's RSC requests from
  `public/_rsc/`.
- `functions/api/auth/*.js` — stubs for the lost OTP-login backend (see below).

## Deploy

```bash
npx wrangler login
npx wrangler pages deploy
```

`wrangler.toml` already points at `public/`. To use a custom domain, add it
in the Cloudflare dashboard under Pages → suchbliss → Custom domains.

## Run locally

```bash
npx wrangler pages dev
```

## What could not be recovered

The **OTP login backend** (`/api/auth/send-otp`, `verify-otp`, `logout`) ran
as serverless functions on Vercel; their code never reaches the browser, so
it is unrecoverable from the deployed site. The stubs in `functions/api/auth/`
return a friendly "login temporarily unavailable" message instead of a crash.
The request/response contract (reconstructed from the client JS) is documented
in each stub — reconnecting your SMS provider there restores login. Note the
login only personalises the client-side `/profile` page; no site content is
gated behind it.

## Editing content

This is a compiled mirror, not source code. Text lives in the HTML files in
`public/` **and** in the matching `public/_rsc/*.txt` payload (client-side
navigation renders from the latter) — edit both, or ask Claude to do it.
For heavier changes, rebuilding the site as a fresh Next.js/Astro project is
the better path.
