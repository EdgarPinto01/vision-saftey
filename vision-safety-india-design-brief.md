# Vision Safety India — Website Redesign Brief

Design language direction: **Tanda System (tandasystem.com)** as the structural/stylistic reference — but rebuilt **more modern and minimal**. This doc is source material for Claude Code to build from. It has two parts: (1) facts extracted from the client's current site/brand to preserve, (2) design-system notes distilled from Tanda to imitate structurally (never copy their content, copy, or literal red/serif identity).

---

## 1. Client: Vision Safety India — brand & content facts

**Company**
- Fire & safety solutions provider, est. **1997**, Verna Industrial Estate, Goa, India
- Tagline: **"Protecting Human Lives at Workplace"**
- Positioning: single point of contact for end-to-end fire safety — consultancy, design, supply, installation, testing, commissioning, NOC/regulatory compliance
- Domains served: Marine, Industrial, Fire, Workplace Breathing Air
- Core products/services: Self-Contained Breathing Apparatus (SCBA), Powered Air Purifying Respirators (PAPR), fire extinguishers, fire hydrants & hose reels, fire alarm/protection systems, home fire safety
- 25+ years industry experience
- Credentials/memberships: FSAI, NFPA, NSC (National Safety Council) membership
- Also runs "Vision Farms" — a CSR farming initiative (separate gallery/section)

**Site sections currently present** (content inventory to migrate/rewrite, not copy verbatim — see Section 2 for the client's requested changes to this list):
- Home / hero
- About Us (mission, vision, credentials, ideology)
- Services
- Products
- Home Fire Safety — **client requested: remove**
- Brochure — **client requested: remove**
- Rental of training/conference meeting rooms — **client requested: remove**
- PAPR
- Video Gallery (PAPR usage demos, installation videos)
- Vision Farms (CSR) — **client requested: shrink to a small teaser**
- Team
- Image Gallery
- Contact

**New for the rebuild (client requested, not on old site):**
- Dedicated "Breathing Solutions" section/vertical (SCBA + PAPR)
- Products and Services as two clearly separate sections

**Contact**
- Location: Verna Industrial Estate, Goa
- Phone: +91-9326127464, 9326127199, 7798988905
- Email: info.visionsafetyindia@gmail.com
- Hours: 9:00 AM – 6:00 PM

**Current visual identity (to evolve, not discard)**
- Logo: red/black triangular hazard-style mark with a person icon, "VISION SAFETY" wordmark, tagline underneath. This mark is a real asset — keep it as-is in the new site (don't redesign the logo), just give it more breathing room.
- Current site is an outdated Wix build: serif italic hero headline over a photo of their actual Goa office building, black horizontal bands, muted mauve/brick tones (`#ad8c8c`, `#8f6e6e`), Libre Baskerville / Gentium Basic serif fonts, low information density, dated card layouts.
- Real photography exists and is usable/authentic: office interior (product-wall collage, warm wood cabin-style workstations), technicians in PPE servicing equipment, extinguisher/hydrant/PAPR product shots. **Prefer real photos of their people, office and product stock over generic stock imagery** — it's their biggest authenticity asset vs. a big-brand competitor like Tanda.
- Their actual color association: **red is already their brand color** (logo + hazard triangle), paired with black/charcoal and white. This conveniently aligns with the Tanda reference (also red/black/white) — lean into red as the single accent color, don't introduce a new brand color.

---

## 2. Client revision requests (round 1 — direct from Edgar's client call)

These are direct client asks that **override/refine** the Tanda-inspired structure above wherever they conflict. Treat this section as the source of truth for scope; Section 1 and 3 are the visual/structural language it should be built in.

**Hero stat row**
- Replace the placeholder 3-stat row (borrowed from Tanda's "Delivered Projects / Patents / Expert Team") with: **Projects**, **Team**, **Years** (in business), and optionally one more stat if a strong 4th number exists (e.g. certifications held, clients served, or response time). Numbers should be Vision Safety India's real figures, not Tanda's.
- Client is open-ended on the rest of the layout ("after that, you can decide the layout of everything") — so section order/composition below is Claude Code's call within this brief's language.

**Mission / Vision / Credentials**
- Keep these (they exist on the current site) but they are currently **too large and take up too much space**. Redesign as a **compact, minimal block** — think 3 short stat-card-style or icon+short-paragraph tiles side by side, not full-width prose sections. Client will also be trimming/shortening the actual text themselves to be more concise, so build the layout assuming short copy (1–2 sentences per item, not paragraphs).
- **Remove "Ideology"** as a section entirely (it currently sits alongside Mission/Vision — drop it, keep only Mission, Vision, Credentials).

**Products vs. Services — split into two distinct sections**
- Client wants a clearly separate **"Products"** section and a separate **"Services"** section (currently blended). Each gets its own eyebrow + heading + grid, per the Tanda-style pattern in Section 3 below (Products section, Applications/Solutions cards pattern) — just instantiate it twice, once for products, once for services.
- **Client will supply the actual product list/content themselves after handover** and add it in directly — don't wait on a full catalog. Build the Products section as an easy-to-extend card grid/template (a handful of placeholder/sample product cards is enough for the demo) rather than trying to fully populate it now.

**Content to remove**
- Remove the **"Home Fire Safety"** page/section entirely.
- Remove the **brochure** download/section.
- Remove the **"rental of training / conference meeting rooms"** service line (was listed under services/facilities on the old site).

**New vertical: Respiratory Protection (was "Breathing Solutions")**
- Add a dedicated section for their breathing-apparatus vertical — currently the "PAPR" section sat awkwardly under conference-room content on the old site; give it its own proper home, on par with Fire Safety, not a sub-item.
- **Confirmed final heading: "Respiratory Protection"** (client's earlier phrase "Breathing Solutions" was just describing the vibe, not the literal heading).
- This section is structured around **two of their own sub-brands**, so build it as two sub-groups/cards under the one "Respiratory Protection" heading, not a flat product grid:
  - **Vsafe** → N95 masks
  - **Vision Air** → SCBA, BA (Breathing Apparatus) trolley, PAPR (NIOSH approved), refilling of breathing cylinders
- Treat Vsafe and Vision Air as named sub-brand tiles (logo/wordmark + short description + their product list) — similar visual weight to how Products/Services cards work, just nested one level under the Respiratory Protection section.

**Photography**
- Client will supply refined/better photography later. **For this build, use their existing real photos (office, technicians, product shots) as placeholders/demo** — don't hold up the layout waiting on final imagery, and don't spend effort sourcing new stock photography. Structure image containers so they're easy to swap later.

**CSR / Vision Farms**
- The farm/CSR content on the old site is large. Client wants it reduced to a **small teaser** only (e.g. one compact card/banner with a line of text + link out), not a full section with gallery.

**Decorative reference note**
- Client shared a reference screenshot (aerial/wide photo with a stat overlay, in a style similar to the hero+stat-row pattern already planned) and specifically asked to **keep "that illustration of the horse"** — an equestrian visual element from their reference/inspiration. Flag this for the client to supply the actual asset; reserve a tasteful spot for a decorative image/illustration (e.g. near a trust/heritage-themed section) if and when they provide it. Don't invent a horse graphic from scratch.

**Scope of this first pass**
- Client confirmed: **the first build doesn't need to be fully detailed — just a clean outline/demo** of the structure and design language covering the sections above, to sign off on direction before going deeper. So it's fine to use placeholder/sample content (a handful of product cards, not a full catalog; existing photos, not final ones) as long as the layout, hierarchy and design language are right. Full content and final polish come after this is approved.

---

## 3. Design-language reference: Tanda System — what to borrow structurally

Tanda (tandasystem.com) is a large-scale B2B industrial/fire-safety manufacturer site. It reads as **authoritative, global, certified, engineered**. Vision Safety India should borrow its *structural confidence and information architecture*, not its literal skin (not their red hex, not their serif typeface, not their copy).

### Layout & structure patterns worth reusing
- **Hero**: big two-line editorial headline (mixed weight — key phrase in accent color, rest in dark neutral), one short supporting sentence, single primary CTA button, stat row overlapping/adjacent to a full-bleed photographic hero image.
- **Trust stat strip**: 3–4 large numbers with labels directly under/beside the hero. **Per client request, use: Projects (delivered/completed), Team (size), Years (in business, 25+) — plus one optional 4th** (certifications held, clients served, or response time) if a strong number exists.
- **Horizontal scroll/carousel "Cases"** section — image-forward cards, one-line caption, arrow-pair navigation (paired circular prev/next buttons, dark filled + light outline).
- **Certifications strip** — logo/certificate wall as horizontal scrollable cards; plus a row of certifying-body logos (TUV, CE, UKCA, LPCB, ISO 9001, FM equivalent → NSC, FSAI, NFPA, ISO if held).
- **"Why Choose Us" feature grid** — icon + heading + 1–2 sentence description, repeated 4x, icons are simple duotone line icons (dark line art + one accent-color detail), NOT filled illustration or stock icon-pack look.
- **Products section** — eyebrow label ("Products" in small caps/tracked type) → big heading → short intro sentence → then either a tabbed list or grid of product categories, each opening to a dedicated page. **Build as its own standalone section, separate from Services** (client request — see Section 2).
- **Services section** — same pattern as Products (own eyebrow + heading + grid), listing consultancy, design, installation, testing, commissioning, NOC/regulatory compliance etc. Kept fully separate from Products, not blended.
- **Respiratory Protection section** — a third standalone vertical, heading "Respiratory Protection", containing two sub-brand tiles (**Vsafe** = N95 masks; **Vision Air** = SCBA, BA trolley, NIOSH-approved PAPR, cylinder refilling). Built with the same card-pattern confidence as Products/Services, but nested one level (sub-brand → its product list). Client wants this promoted to a proper section rather than buried under other content (see Section 2).
- **Applications/Solutions cards** — text-forward cards (title + 2–3 line description) for different customer verticals (their "Large-Scale Commercial Complexes", "Healthcare Facilities" etc.) → Vision Safety India equivalent: Industrial, Marine, Commercial, Healthcare. (Home Fire Safety is excluded — client requested its removal.)
- **About teaser** — eyebrow + heading + short paragraph + CTA, paired with a large banner photo.
- **Blog/News teaser grid** — category tag + date + title, 3–6 cards.
- **Footer** — dense but organized: 3 value-prop callout blocks above the footer nav, then multi-column link groups (Products / Solutions / Company), contact block, social icons, legal links.
- **Section rhythm**: every section has a small uppercase "eyebrow" label above the H2 (e.g. "Cases", "Certifications", "Why Choose Us", "Products") — this is a strong pattern for scannability, reuse it throughout.

### Typography pattern (structure, not literal font)
Tanda pairs a **serif display face** (headlines, H1–H3) with a **clean sans/serif body** for paragraphs, and uses a small-caps, letter-spaced label style for eyebrows/buttons. For a "more modern minimal" take:
- Swap the serif for a **modern grotesk/sans display face** (e.g. Inter, General Sans, Aeonik, or Söhne-alike — something geometric-humanist, not a novelty font) OR keep a *restrained* serif only for H1 (e.g. a modern serif like Fraunces/Newsreader) if you want one touch of editorial warmth — pick one, not both loud.
- Keep body copy in a highly legible sans (Inter/Aeonik/Public Sans).
- Keep the small-caps tracked-uppercase eyebrow label pattern — it reads premium and modern with very little effort.
- Headline weight: medium/semibold, not black/bold — modern-minimal sites avoid heavy weights.

### Color pattern (structure, not literal hex)
Tanda's system: neutral off-white/light-grey section backgrounds alternating with white, near-black text (`#2b2b2b`), one saturated accent red (`#c91724`) used sparingly (CTA buttons, key headline words, active states), grey-scale supporting tones for cards/footers (`#f0f0f0`, `#f5f5f5`, `#ededf2`), dark near-black footer (`#2b2b2b`/`#353938`).

For Vision Safety India, recommended adapted palette (keeps their existing red brand identity, modernized):
- **Ink**: near-black charcoal for text — `#1a1a1a` / `#212121` (not pure `#000`)
- **Accent red**: a single confident red drawn from their logo — something like `#c8102e`–`#d32f2f` range (test against actual logo red and pick the closest clean web-safe match); use it *sparingly* — CTA buttons, one word per headline, icon accents, active nav state, link hovers. Never as a large background fill except maybe the CTA button or a thin divider.
- **Neutrals**: warm-white background `#faf9f7` or cool `#f7f7f8`, card surface `#f2f1ef`, border/hairline `#e4e2df`, muted grey text `#6b6b6b`
- **Dark section / footer**: `#161616` or `#1c1c1c` with off-white text
- Avoid the old site's dusty mauve (`#ad8c8c`) entirely — that's what reads dated/low-contrast. Replace with confident near-black + red + generous white space.

### "More modern minimal than Tanda" — what to deliberately do less of
Tanda itself is fairly dense (lots of certificate logos, product SKU grids, carousels everywhere). To be "more modern minimal":
- Fewer simultaneous carousels — pick 1–2 moments for horizontal scroll (e.g. case studies), keep everything else in a clean static grid.
- More whitespace between sections (generous vertical rhythm, 96–160px section padding vs. Tanda's tighter spacing).
- Fewer competing visual weights per section — one eyebrow, one heading, one short line of body copy, one CTA. Resist adding secondary CTAs everywhere.
- Icons: simple 1.5px stroke-weight line icons, monochrome or duotone with the single red accent — not filled illustration style.
- Photography: fewer, larger, better-cropped real photos rather than many small stock thumbnails. Lean on their authentic office/technician photography, color-graded consistently (slightly warm, slightly desaturated) so it doesn't feel like a random photo dump.
- Buttons: simple rectangular or barely-rounded (4–6px radius) solid red or outlined black buttons — avoid pill buttons and drop shadows (Tanda's dark circular arrow buttons are fine to reuse for carousel nav only).
- Motion: subtle fade/slide-in on scroll, no flashy parallax — minimal sites earn trust through restraint, not motion flourish.

### Component inventory to build
1. Sticky header: logo left, nav center/right, phone/CTA button right, mobile hamburger
2. Hero with stat row (Projects / Team / Years [/ optional 4th] — client-specified, see Section 2)
3. Eyebrow + heading + body section header (reusable pattern, use everywhere)
4. **Mission / Vision / Credentials — compact tile row** (3 small icon+short-text tiles, not full prose sections; "Ideology" removed per client request)
5. Feature grid (icon + title + text, 3–4 cols) — for "Why Choose Us" style trust points
6. **Products section** (own eyebrow/heading + grid of product category cards)
7. **Services section** (own eyebrow/heading + grid — separate from Products)
8. **Respiratory Protection section** (own eyebrow/heading + two sub-brand tiles: Vsafe [N95 masks], Vision Air [SCBA, BA trolley, PAPR NIOSH-approved, cylinder refilling])
9. Case studies / project gallery (horizontal scroll cards with paired nav arrows)
10. Certifications/credentials strip (logo row + scrollable certificate cards)
11. About/mission teaser (image + text split section)
12. **CSR / Vision Farms teaser** — one small compact card/banner only, not a full section (client requested it be shrunk down)
13. Testimonials (optional — not on Tanda but common for trust; consider adding since Vision Safety India is a smaller trust-building brand)
14. CTA banner (dark background, centered heading + button) before footer
15. Footer (3-column links + contact + social + legal bar) — nav/link groups should exclude Home Fire Safety, Brochure, and conference-room rental (all removed per client request)

---

## 4. Summary instruction for build

Build Vision Safety India's new site with Tanda System's **information architecture and structural confidence** (hero+stats, eyebrow-labeled sections, feature grid with duotone icons, certification strip, case/project carousel, dense-but-organized footer) — but executed in a **more modern, minimal visual language**: sans-first modern typography (one restrained serif accent allowed for H1 only), a tight neutral+red-accent palette built from Vision Safety India's own logo red (not Tanda's), generous whitespace, simple line icons, fewer simultaneous carousels, and real (placeholder-for-now) photography of their Goa office, technicians and product stock in place of generic stock/manufacturer CGI imagery. Keep the existing Vision Safety India logo unchanged.

Layer the **client's round-1 revision requests (Section 2)** on top of this: hero stats = Projects/Team/Years(+1); Mission/Vision/Credentials shrunk to compact tiles with Ideology removed; Products and Services split into two distinct sections (Products as an extensible template — client adds real inventory after handover); Home Fire Safety, brochure, and conference-room rental content removed; a new standalone "Respiratory Protection" vertical added with Vsafe (N95 masks) and Vision Air (SCBA, BA trolley, NIOSH PAPR, cylinder refilling) as its two sub-brand groups; Vision Farms/CSR reduced to a small teaser; image containers built to be easily swapped once the client supplies refined photography; and this first pass should be a clean outline/demo of structure and design language, not a fully detailed final build.
