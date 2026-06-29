# Handoff: Isla Café Miami — Inner Pages (Historia, Menú, El Espacio, Visítanos)

## Overview
This package covers the four inner pages of the **Isla Café Miami** website — a neighborhood specialty-coffee & Caribbean-brunch spot in Cutler Bay, FL. The site is in Spanish (with an ES/EN toggle in the nav, currently visual-only). These four pages branch off the existing one-page homepage:

- **Historia** — brand story: origin, timeline, craft pillars, founders quote, team.
- **Menú (Carta)** — the full menu, organized into Café / Fríos / Brunch / Dulces, with a sticky category tab bar.
- **El Espacio** — the venue: atmosphere, seating zones, photo gallery, work amenities, private hire.
- **Visítanos** — location, live Google map, hours with a live open/closed indicator, how-to-get-here, FAQ, newsletter.

All four share an identical fixed nav and footer with the homepage and follow the same visual language.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing the intended look and behavior, **not production code to copy directly.** Each page is authored as a self-contained "Design Component" (`*.dc.html`) that relies on a runtime (`support.js`) to render; treat them as visual/interaction specs, not as a framework choice.

The task is to **recreate these designs in the target codebase's environment** using its established patterns. For a marketing site like this, a component-based framework with file-based routing (e.g. **Next.js / Astro / SvelteKit**) is a natural fit — the four pages map cleanly to four routes plus shared `<Nav>` and `<Footer>` components. If no environment exists yet, Astro or Next.js App Router are good defaults. Pull the exact colors, typography, spacing, and copy from the specs below.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, copy, and interactions are all specified. Recreate the UI pixel-faithfully using the codebase's libraries. Spanish copy is final and should be used verbatim.

To preview a reference file, open any `*.dc.html` in a browser (they load `support.js` from this folder and images from `uploads/`).

---

## Global Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| Cream (page bg) | `#F4EFE6` | Primary background |
| Warm white (alt bg) | `#FBF7EF` | Alternating section bg, dark-section text |
| Card surface | `#FFFDF8` | Cards |
| Ink (text/dark) | `#2B241D` | Primary text, dark buttons |
| Muted text | `#6E6258` | Body copy, descriptions |
| Tan accent | `#9C8466` | Eyebrows, links, accent rules |
| Tan accent (lighter) | `#B8966B` | Mono accents on dark, selection bg |
| Gold | `#D8B988` | Highlights, italics on dark, primary CTA on dark |
| Gold (label) | `#D8C5A6` / `#C9B69A` | Eyebrow labels / mono numbers on dark |
| Deep green | `#0E2418` | Dark feature/header sections |
| Espresso (footer/hero) | `#1C160F` | Footer, darkest sections |
| Border | `#E4DBC9` | Card & divider borders on light |
| Border on dark | `rgba(251,247,239,.16)` | Dividers on dark |
| Open indicator (green) | `#7FB98A` | "Abierto ahora" dot |
| Closed indicator | `#C77B5A` | "Cerrado ahora" dot |
| Gradient (visit footer) | `#F4EFE6 → #EBE2CF` | Newsletter band background |

`::selection` = bg `#B8966B`, color `#1C160F`.

### Typography
- **Display / headings:** `'Cormorant Garamond', serif` — weights 500/600/700, with italic 500/600 used for emphasis words (often colored `#9C8466` on light, `#D8B988` on dark).
- **UI / body:** `'Manrope', sans-serif` — weights 400/500/600/700/800.
- **Mono (labels, prices, numbers):** `ui-monospace, monospace`.
- Body base: `17px` / line-height `1.65`.
- Eyebrow label pattern: Manrope `12px`, weight `800`, `letter-spacing:.32em`, `text-transform:uppercase`.
- Section index number: mono `13px`, `letter-spacing:.18em`.
- Menu item name: Cormorant `25px`. Price: mono `14px`. Description: Manrope `14.5px`, color `#6E6258`.
- Fluid heading sizes use `clamp()` — H1 `clamp(44px,6.6vw,92px)`, section H2 `clamp(30px,4.2vw,56px)` (see each component for exact values).

### Spacing & layout
- Content max-width: `1240px` (narrow text sections `880–1000px`), horizontal padding `clamp(20px,5vw,64px)`.
- Section vertical padding: `clamp(70px,9vw,120px)` (larger split sections use `clamp(80px,10vw,140px)`).
- Card padding: ~`26–32px`.
- Grid/flex `gap` driven; clamps like `clamp(28px,5vw,72px)` for column gaps.

### Border radius
- Buttons / pills / lang toggle / avatars: `99px` (fully rounded) or `50%` (circles).
- Cards, images, map, newsletter band: **square** (`0`–`2px`). The aesthetic is intentionally sharp-cornered except for pills and circles.

### Shadows
- Card hover: `0 26px 60px rgba(43,36,29,.12)`.
- Dark CTA button: `0 10px 26px rgba(43,36,29,.28)`; hover `0 16px 34px rgba(43,36,29,.38)`.
- Floating images (parallax): `0 40px 80px rgba(43,36,29,.16)` and `0 30px 60px rgba(43,36,29,.14)`.
- Nav (scrolled): `0 8px 32px rgba(43,36,29,.08)`.

---

## Shared Components

### Nav (fixed, top)
- Fixed, full-width, `z-index:100`. Height `78px` at top, shrinks to `64px` after `scrollY > 40` (transition `.45s cubic-bezier(.22,1,.36,1)`); adds shadow when scrolled.
- Background `rgba(244,239,230,.9)` with `backdrop-filter: blur(18px) saturate(1.4)`, bottom border `rgba(43,36,29,.08)`.
- **Left:** circular logo `uploads/islacafemiami.jpg`, `50px` → `42px` on scroll, links to homepage `#top`.
- **Center:** links — Historia · Menú · El Espacio · Visítanos. Active page link is `#9C8466`, weight 700, with a `1.5px` bottom border `#9C8466`; inactive links `#2B241D`, weight 600, hover `#9C8466`. Each link points to the corresponding page file.
- **Right:** ES/EN pill toggle (`border:1px solid rgba(43,36,29,.22)`, radius `99px`; active button bg `#2B241D` text `#F4EFE6`, inactive transparent text `rgba(43,36,29,.55)`) + a dark pill CTA ("Ordenar" / "Visítanos") bg `#2B241D` text `#F4EFE6`, hover lifts `translateY(-2px)`.
- Note: on the homepage the nav starts transparent over the dark hero and turns solid on scroll; on inner pages it is **solid from the top** (no dark hero).

### Page header (inner pages)
- Dark band, bg `#0E2418`, top padding `clamp(118px,15vw,168px)` (clears the fixed nav).
- Background image layer at `opacity:.2`, `filter:saturate(.9)`, with a slow vertical parallax (`translateY(scrollY * 0.18)`); over it a gradient `linear-gradient(180deg, rgba(14,36,24,.66), rgba(14,36,24,.92))`.
- Eyebrow row: mono section number + uppercase label + a `1px` gradient rule `linear-gradient(90deg,#9C8466,transparent)`.
- H1 in Cormorant `clamp(44px,6.6vw,92px)`, one emphasis word in italic `#D8B988`.
- Intro paragraph `rgba(251,247,239,.78)`, max-width ~`56ch`.
- Meta chip row: mono `12px` uppercase, `rgba(251,247,239,.6)`, with emoji glyphs.
- Header background images: Historia `barista-pour.jpeg`, El Espacio `salon.jpeg`, Visítanos `mesa-al-sol.jpeg`, Carta uses `cafe-con-leche.jpeg` at `opacity:.16` (no parallax).

### Footer
- bg `#1C160F`, text `#FBF7EF`. Three columns (`1.4fr 1fr 1fr`): brand blurb + logo, "Explorar" links (the four pages), "Síguenos" (Instagram → `https://www.instagram.com/islacafemiami/`, Facebook, TikTok).
- Bottom bar: mono `11px`, `rgba(251,247,239,.45)` — "© 2026 ISLA CAFÉ · CUTLER BAY" and "HECHO CON ☕ EN MIAMI".

### Eyebrow / section-label pattern (used on every section)
A flex row, baseline-aligned, `gap:18px`: mono letter/number (`#9C8466` on light, `#C9B69A` on dark) · uppercase label (`#6E6258` light / `#D8C5A6` dark) · flex-1 `1px` gradient rule fading to transparent.

### CTA band (closing section, most pages)
- bg `#0E2418`. Two columns (`1.1fr .9fr`): left = uppercase eyebrow + large Cormorant headline; right = stacked buttons (gold primary `#D8B988`/`#221C16` + outlined ghost) and a mono address line.

---

## Page: Historia
Sections top→bottom:
1. **Header** — eyebrow "01 · Nuestra historia"; H1 "Una esquina donde Miami se siente como *casa*."; intro; chips "☕ Desde 2020 · 🔥 Tostado en casa · 📍 Cutler Bay".
2. **El origen** (bg `#FBF7EF`) — split `1.05fr .95fr`. Left: eyebrow + Cormorant H2 with italic "colada"; two body paragraphs (founders Mari & Carlos). Right: two overlapping parallax images (`barista-pour.jpeg` 84% width 3/4 ratio top-right; `pastelitos-historia.jpeg` 52% width 1/1 bottom-left).
3. **Cronología** (bg `#F4EFE6`, max-width `1000px`) — vertical timeline, rows `grid-template-columns:120px 1fr`. Left = mono year; right = `border-left:1px solid #D8C5A6` with an absolutely-positioned node dot (`12px`, `#9C8466`, ring `0 0 0 4px #F4EFE6`), Cormorant title + description. Entries: **2020** "La cafetera de la cocina", **2022** "El tostador del garaje", **2024** "Abrimos la esquina", **2026** "Hoy" (last node gold `#D8B988`, no connecting line below).
4. **El oficio** (bg `#0E2418`) — eyebrow "B · El oficio" + H2; three lettered rows (A/B/C) split `60px 1fr` separated by `1px rgba(251,247,239,.16)` borders: "Tostado en casa", "Horneado del día", "Mesa de barrio".
5. **Cita** (bg `#FBF7EF`, centered, max-width `980px`) — big Cormorant quotation mark glyph, italic pull-quote, attribution "Mari & Carlos · fundadores".
6. **Las manos detrás** (bg `#F4EFE6`) — 3-column cards. Each card: a `60px` circle avatar with a Cormorant initial (M `#9C8466`, C `#5E5042`, L `#B8966B`), name, mono role label, description. People: Mari (Tostado & barra), Carlos (Cocina & brunch), Lucía (Panadería).
7. **CTA band** + **Footer**.

## Page: Menú (Carta)
1. **Header** — eyebrow "02 · La carta"; H1 "Café de especialidad y *brunch* caribeño."; chips "☕ Tostado en casa · 🌱 Opciones veganas · 🕗 Brunch · 8–14h". Background `cafe-con-leche.jpeg` at `opacity:.16`.
2. **Sticky tab bar** — sticky at `top:78px` (follows nav to `64px` on scroll). bg `rgba(244,239,230,.92)` + blur, bottom border `#E4DBC9`. Horizontal scrollable row of 4 tabs (Café / Fríos / Brunch / Dulces). Active tab: color `#2B241D`, `border-bottom:2px solid #9C8466`; inactive `#6E6258`. Active state is driven by an IntersectionObserver watching each category section (rootMargin `-160px 0px -55% 0px`) **and** click. Each `<section>` has `scroll-margin-top:148px`.
3. **Menu body** (bg `#F4EFE6`) — four category `<section>`s in a vertical flex with `gap:clamp(72px,9vw,120px)`. Each category is a 2-column grid (`.82fr 1.18fr`, alternating sides via `order` so the sticky info column zig-zags). Left/info column (`position:sticky; top:160px`): mono category code (e.g. "A · ESPRESSO BAR"), Cormorant category name, a short description, and a `4/5` image. Right column: item rows.
   - **Item row:** `grid-template-columns:1fr auto`; row 1 = Cormorant name (`25px`) + mono price; row 2 (`grid-column:1/-1`) = description (`#6E6258`). Each row separated by `1px solid #E4DBC9` top borders (last row also bottom border). Optional inline badge after the name: Manrope `11px`/700, `letter-spacing:.1em`, `#9C8466` (e.g. "PARA COMPARTIR", "VEGANO", "FAVORITO", "GRANO DE LA SEMANA").
   - Category images: Café `barista-pour.jpeg`, Fríos `pour-over.jpeg`, Brunch `tostada-isla.jpeg`, Dulces `pastelitos-menu.jpeg`.
   - **Full item list & prices** are in the reference file `Isla Cafe Miami - Carta.dc.html` — use the exact names, prices, and Spanish descriptions there (Café: Cortadito 2.5, Café con Leche 3.5, Colada 3, Cappuccino 4, Flat White 4.25, Café Bombón 3.75, Pour Over de Origen 5; Fríos: Cold Brew 4.5, Cold Brew con Coco 5.25, Iced Latte de Guayaba 5.5, Matcha Helado 5.5, Batido de Mamey 6, Limonada de Coco 4.5; Brunch: Tostada Isla 11, Pan con Lechón 12, Mallorca French Toast 10, Huevos Habaneros 12, Bowl de Açaí 10, Croquetas de Jamón 8, Tortilla Española 9; Dulces: Pastelito de Guayaba 3, Croissant 3.5, Tres Leches 5, Quesito 3, Flan de Coco 5, Mallorca de Jamón y Queso 6).
4. **Dietary note** — mono `12px` uppercase `#9C8466`, top border, listing milk options / gluten-free / USD pricing / allergens.
5. **CTA band** (id `pedir`, target of the "Ordenar" nav button) + **Footer**.

## Page: El Espacio
1. **Header** — eyebrow "03 · El espacio"; H1 "Luz de la mañana, plantas y el aroma a *tostado*."; chips "☀ Luz natural · 🪴 +40 plantas · 🔌 Wifi & enchufes · 🐕 Pet-friendly". Header bg `salon.jpeg` (parallax).
2. **El ambiente** (bg `#FBF7EF`) — split `1.05fr .95fr`. Left text (two paragraphs). Right: two overlapping parallax images (`salon.jpeg` + `plantas.jpeg`).
3. **Encuentra tu sitio** (bg `#F4EFE6`) — eyebrow "A". 3 cards (`4/3` image + label + Cormorant title + description), hover lift `translateY(-7px)` + shadow + border `rgba(156,132,102,.5)`. Zones: 01 La barra (`barra.jpeg`), 02 El salón (`salon.jpeg`), 03 La terraza (`mesa-al-sol.jpeg`).
4. **Un paseo por dentro** (bg `#FBF7EF`) — eyebrow "B". Photo mosaic: `grid-template-columns:repeat(4,1fr); grid-auto-rows:200px; gap:18px`. First tile spans 2×2; one mid tile spans 2 cols. Images: salon (big), barra, plantas, barista-pour (wide), mesa-al-sol, pour-over.
5. **Para el día a día** (bg `#0E2418`) — eyebrow "C". Split `.9fr 1.1fr`: left heading/intro; right four lettered rows (A–D): "Wifi rápido y gratis", "Mesa de barrio", "Pet-friendly", "Noches de música".
6. **Eventos / Alquila el espacio** (bg `#F4EFE6`) — split `1fr 1fr`. Left: full-bleed `mesa-al-sol.jpeg`. Right: eyebrow "D · Eventos", H2, paragraph, a `✦`-bulleted list (capacity / catering / workshops), two buttons ("Pedir cotización" dark, "Cómo llegar" ghost).
7. **CTA band** + **Footer**.

## Page: Visítanos
1. **Header** — eyebrow "05 · Visítanos"; H1 "Pasa cuando quieras. Siempre hay *café*."; chips "📍 Cutler Bay, FL · 🅿 Parqueo gratis · 🕗 Abre 7:00". Header bg `mesa-al-sol.jpeg` (parallax).
2. **Cómo encontrarnos + map** (bg `#FBF7EF`) — split `.92fr 1.08fr`. Left: H2 + three icon rows (Dirección "18901 SW 106th Ave, Unit 101 · Cutler Bay, FL 33157"; Contacto "(305) 555-0147 · hola@islacafe.miami"; Parqueo) + two buttons ("Cómo llegar →" opens Google Maps directions, "Llamar" `tel:` link). Right: Google Maps `<iframe>` embed (`output=embed`, `filter:saturate(.92) contrast(.98)`), square, border `#E4DBC9`, min-height `460px`.
3. **Horario** (bg `#F4EFE6`) — eyebrow "A". Split `1.1fr .9fr`. Left: rows (Lun–Vie 7:00–19:00; Sábado 8:00–20:00; Domingo 8:00–20:00; Brunch DIARIO 8:00–14:00), each `display:flex; justify-content:space-between`, Cormorant label + mono time, `1px` top borders. Right: a dark `#0E2418` panel with a **live open/closed indicator** — a dot + label that JS sets to "Abierto ahora" (green `#7FB98A`) or "Cerrado ahora" (`#C77B5A`) based on current time vs hours (Mon–Fri 7–19, Sat–Sun 8–20).
4. **Cómo llegar** (bg `#FBF7EF`) — eyebrow "B". 3 cards (no images): 01 En coche, 02 En transporte, 03 En bici o a pie.
5. **Antes de venir (FAQ)** (bg `#F4EFE6`, max-width `880px`) — eyebrow "C". `<details>` accordion; only one open at a time (JS closes siblings); the `+` marker toggles to `–`. Cormorant `23px` summaries.
6. **Newsletter** (id `pedir`; bg gradient `#F4EFE6→#EBE2CF`) — dark `#0E2418` band, split `1.1fr .9fr`: heading/subtext + email form. Submit validates email (regex `/.+@.+\..+/`); on success button text → "¡Gracias! ☕", bg `#C9B69A`, field clears; on fail field border turns gold.
7. **Footer.**

---

## Interactions & Behavior
- **Nav shrink:** on `scroll`, `scrollY > 40` toggles nav height `78↔64px`, logo `50↔42px`, shadow on/off. Sticky tab bar (Carta) follows: `top` `78↔64px`.
- **Header parallax:** header background image translates `Y = scrollY * 0.18`. Disabled under `prefers-reduced-motion`.
- **Floating image parallax** (`data-plx` on Historia/El Espacio split images): translate based on the parent section's progress through the viewport; amount scales with the `data-plx` value. Disabled under reduced motion.
- **Scroll reveals:** elements marked `data-rv` (single) and `data-rv-group` (staggered children) start at `opacity:0; translateY(28–40px)` and animate to visible via `transition: opacity/transform .85s cubic-bezier(.22,1,.36,1)` when they enter the viewport (IntersectionObserver, `rootMargin:'0px 0px -8% 0px'`, threshold `0.06`). Group children stagger by `0.06–0.08s * index`. A `requestAnimationFrame` safety pass reveals anything already in/above the viewport on load. Under reduced motion, everything is shown immediately (no transforms set).
- **Carta tab active state:** IntersectionObserver on category sections + click handlers (see Carta §2).
- **Card hover** (zone/menu cards): `transform:translateY(-7px)`, shadow `0 26px 60px rgba(43,36,29,.12)`, border `rgba(156,132,102,.5)`, transition `.45s cubic-bezier(.22,1,.36,1)`.
- **Button hover:** pills lift `translateY(-2px)` and deepen shadow; ghost/outline buttons shift border/text to gold `#D8B988` (on dark) or `#9C8466` (on light); text links increase `gap` on hover (arrow slides).
- **Lang toggle:** clicking ES/EN swaps the active pill styling (visual only — no actual translation implemented; wire to i18n in the real build).
- **FAQ accordion** (Visítanos): single-open; `+`/`–` marker toggle.
- **Newsletter form** (Visítanos): client-side email validation + success state (see §6).
- **Open/closed indicator** (Visítanos): computed from `new Date()` against the hours table.

## State Management
Minimal — per-page UI state only:
- Nav scrolled (boolean from scroll position).
- Active language (ES/EN).
- Carta: active category (derived from scroll + clicks).
- Visítanos: FAQ open item; newsletter form value + submit/success state; open/closed status (derived from current time — recompute on mount/interval).
No data fetching beyond the Google Maps iframe embed. In the real build, the menu items and hours should likely come from a CMS/data file rather than hard-coded markup.

## Responsive behavior
The reference files are built primarily for desktop widths with fluid `clamp()` sizing. The multi-column grids (nav links, splits, 3-col card rows, 4-col mosaic, menu 2-col) will need mobile breakpoints in the real build — collapse to single column, convert the center nav links to a hamburger/drawer, make the sticky tab bar horizontally scrollable (already is), and stack split sections. Use the codebase's responsive conventions.

## Assets
All under `uploads/` in this bundle (photographs are placeholders representing the real café — replace with final photography):
- `islacafemiami.jpg` — circular logo (nav + footer).
- `img/barista-pour.jpeg`, `img/pastelitos-historia.jpeg`, `img/pastelitos-menu.jpeg`, `img/cafe-con-leche.jpeg`, `img/tostada-isla.jpeg`, `img/pour-over.jpeg`, `img/salon.jpeg`, `img/barra.jpeg`, `img/plantas.jpeg`, `img/mesa-al-sol.jpeg`, `img/hero.jpeg`.
- Fonts: Google Fonts — **Cormorant Garamond** (ital 500/600/700) and **Manrope** (400–800). Mono uses the system `ui-monospace` stack.
- Icons/glyphs are emoji + simple typographic marks (◎ ✆ ⏱ ✦ ‹ › +). No icon library; substitute the codebase's icon set if preferred.

## Files
Design reference files in this bundle:
- `Isla Cafe Miami - Historia.dc.html`
- `Isla Cafe Miami - Carta.dc.html`
- `Isla Cafe Miami - El Espacio.dc.html`
- `Isla Cafe Miami - Visitanos.dc.html`
- `support.js` — runtime needed only to render the `.dc.html` references in a browser; **not** part of the production implementation.
- `uploads/` — images & logo.

The existing homepage (`Isla Cafe Miami.dc.html`, not included here) holds the canonical Nav/Footer and the section anchors (`#historia`, `#top`, `#visitanos`) these pages link back to; mirror its shared chrome.
