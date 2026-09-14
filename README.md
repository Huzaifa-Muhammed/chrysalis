# Chrysalis Education — Next.js front end

A React/Next.js port of the static build in `../UI_design/CHRYSALIS WEBSITE FILES/`.
UI only: nothing here talks to a backend yet.

```bash
npm run dev     # http://localhost:3000
npm run build   # all pages prerender statically
```

## Pages ported (5 of 24)

| Route | Source file | Design system |
|---|---|---|
| `/` | `index.html` | Chrysalis |
| `/concierge` | `concierge.html` | Nova |
| `/dexter` | `dexter/solutions.html` | Dexter |
| `/spark` | `spark-ai-program.html` | Chrysalis |
| `/contact` | `contact.html` | Chrysalis |

The drawer, footers and some cards link to routes that don't exist yet
(`/about`, `/careers`, `/support`, `/why`, the Spark course detail pages, the
Dexter article pages, and the legal pages). The information architecture is
intact so those slot in without touching what's here.

## Three design systems, one token set

`src/app/globals.css` holds all three `:root` blocks from the static build as
Tailwind v4 `@theme` tokens, so the palettes can't drift apart:

- **Chrysalis** — `plum` / `amber` / `paper`, `font-display` (Archivo) + `font-body` (IBM Plex Sans)
- **Nova** — `coral` / `nova-shell` / `nova-band`, `font-nova-display` (Outfit) + `font-nova-body` (Plus Jakarta Sans)
- **Dexter** — `accent` / `accent-deep` / `accent-soft`, same type as Chrysalis

Fonts are self-hosted through `next/font/google` in `src/app/layout.tsx`.

`--gutter` and `--shell` reproduce the original responsive gutters; `.shell`
and `.wrap` are the two container widths the static pages used.

## Layout

```
src/
  app/           one folder per route, each a server component
  components/    shared chrome (header, footer, rail, on-page nav)
    nova/        Concierge-only interactive parts
  content/       page copy and data, kept out of the markup
```

`SiteHeader` takes a `brand` prop (`chrysalis` | `nova` | `dexter`) that swaps
the drawer palette — the markup itself is shared, as in the static build.

Everything is a server component except the pieces that need state: the drawer,
the sticky on-page nav, the 30-second tour, the Concierge tabs / plan table /
card rails, the Dexter audience tabs, and the contact form.

## Known gaps carried over from the static build

- **The contact form has no endpoint.** `src/components/contact-form.tsx` holds
  local state and shows a confirmation; swap the handler for a `fetch()` POST.
  The static build used `mailto:` here and in five other forms.
- **The 30-second tour's photo slots are unfilled** — coloured panels labelled
  "Manager photo" etc., same as the source.
- **Social links and legal pages are placeholders** (`href="#"` in the source).
- **WhatsApp number is a placeholder** — `9710000000000` on `/contact`.
- **No Arabic.** The language chips advertise Arabic and Urdu; adding either
  needs full RTL mirroring, not translation.

## Content accuracy

Facts a developer should not silently change (from the source handover):
Spark courses start **January 2027** and prices are not shown on the hub; Spark
Pass is **coming soon**, not purchasable; the Concierge testimonials are **real
named customers**; Dexter tiers are Free / $250 / $500 / $700 / Enterprise; EDU
Concierge tiers are Free / AED 49 / AED 350 / AED 575–750.
