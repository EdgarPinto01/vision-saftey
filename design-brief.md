# Vision Safety India — Website Redesign Brief

**Client:** Vision Safety India (visionsafetyindia.com)
**Design language reference:** Tanda System (tandasystem.com)
**Brief prepared for:** Claude Code build

---

## 1. Client overview (content source: visionsafetyindia.com)

- **Company:** Vision Safety India — founded 1997, Verna Industrial Estate, Goa, India
- **What they do:** End-to-end fire & safety solutions — consultancy, design, supply, installation, testing, commissioning, and NOC compliance. One of India's leading Fire & Safety solution providers, active in Marine, Industrial, Fire, and Workplace Breathing Air domains.
- **Baseline / tagline:** *"Protecting Human Lives at Workplace."*
- **Credentials (use as trust badges/credibility strip):**
  - Professional Member, FSAI
  - 25+ years as major Fire & Safety suppliers
  - Approved Contractor for Supply/Installation/Maintenance of Fire Protection Systems (Dir. Fire & Emergency Services, Govt. of Goa)
  - All-India Importers/Distributors for Bullard Co., USA
  - Member — National Fire Protection Association (NFPA), USA
  - Life Member — National Safety Council (NSC) India
  - Importer/Assembling & PESO Testing of EN 137 SCBA kits
  - EN3 Approved Fire Extinguishers / Trace Tube Auto Systems
  - Clean Agent FE 227/FE 236 Gas & Mist Fire Suppression (UL/FM Approved)
  - Manufacturers of SITRA/CE mark V-Safe 3-ply and N95 masks
- **Core sections/pages to carry over:** About Us, Our Services, Our Products, Home Fire Safety (with downloadable brochure), PAPR by VSafe (product line + catalogues), Video Gallery, Vision Farms (CSR/organic farming — nice human-interest section), Our Team, Image Gallery, Contact Us
- **Services list:** servicing of power packs, hose binding, fire extinguisher servicing/inspection/refilling, SCBA servicing/testing/refilling, fire detection & alarm system testing (conventional & addressable), calibration & certification of gas monitors, hydrostatic pressure testing of high-pressure cylinders (PESO/gas cylinder rules 2004)
- **Products list:** fire extinguishers (CO2, DCP, AFFF, water, clean agent), SCBA, fire hydrants, hose reel drum sets, EEBD, adaptors/couplings/connectors
- **Contact:** Verna Industrial Estate, Goa · +91 9326127464 / 9326127199 / 7798988905 · info.visionsafetyindia@gmail.com · WhatsApp enabled
- **Tone of existing copy:** plain, credential-heavy, slightly dated (GoDaddy site builder), but the underlying substance (25+ yrs, NFPA/NSC membership, PESO/UL/FM approvals, own manufacturing) is strong — the redesign's job is to make that substance look as credible and modern as it actually is.

---

## 2. Design-language reference: Tanda System (tandasystem.com)

Tanda is a Singapore-based global fire-alarm systems manufacturer (600,000+ projects, 1,800+ experts, 126 countries, 400+ patents). Its site is the *structural and tonal* model to follow — a modern, international, engineering-grade B2B safety brand. Key patterns observed:

**Page structure / section rhythm (top to bottom):**
1. Hero — big headline + mission statement + one primary CTA ("Explore More"), set against a full-bleed product/industry photo, with a stat row overlaid or directly beneath (Delivered Projects / Industry Patents / Expert Team — big numbers, small labels)
2. **Cases** — logo-free project/case-study cards by vertical (Resort & Spa, Solar Farm, City Centre Residencies, National University, City Hospital, Central Library) — photo-forward cards, one per industry
3. **Certifications** — dense grid/carousel of certificate images (LPCB, CPR, etc.) — visually communicates "regulatory-grade" without reading a word
4. **Why Choose Us** — 4-icon feature row (24/7 Fast Response, Multiple Certifications, Precise Positioning, Seamless Integration) — icon + 3-word heading + one-sentence support copy
5. **Certified By** — row of certification body logos (TÜV, CE, UKCA, LPCB, ISO 9001, FM) — pure logo strip, high trust signal, minimal design
6. **Products** — category sidebar/tab list + featured product image tiles, "See All Products" per tile
7. **Applications/Solutions** — one card per building type (Commercial Complexes, Industrial Facilities, High-Rise, Healthcare, Data Centers), photo + 2-sentence problem statement, paginated (03/05 style counter)
8. **About Us** — short mission paragraph + single wide photo + "More About Us" link
9. **Blog** — 3–6 card grid, category tag + date + title
10. Footer — mega-footer with Products / Solutions / Company / Contact / Social columns, quick-link cards above it (Custom Solutions / Assistance & Contacts / Resources)

**Visual/tonal qualities to carry over (even without exact hex/font extraction):**
- Corporate-international, engineering/product-catalogue feel rather than a local-vendor feel
- Heavy reliance on **big numbers** (stat counters) to establish scale and trust immediately
- **Certification/compliance visuals treated as first-class content**, not buried in a footer line — full sections/grids for certificates and certifying bodies
- Segmented **by-industry / by-application** navigation, not just by-product — helps a visitor self-identify ("that's my building type")
- Icon + short-label feature blocks (4-across) for value props
- Consistent card-based rhythm: every section is a grid of cards with image + title + 1–2 lines, never long paragraphs
- Photography is straight documentary/product photography (real installs, real product shots), not stock/illustration-heavy
- Restrained, few-color palette (reads as blue/white/neutral-dominant industrial B2B — confirm exact hex once you have DevTools access, not guessed here)

**What NOT to copy directly:** Tanda is a manufacturer selling globally across 126 countries — Vision Safety India is a regional (Goa-based) supplier/service company with a much more personal, hands-on story (25 years, own farm/CSR, named team members, WhatsApp contact). The redesign should borrow Tanda's *structural confidence and credibility-first layout*, not its impersonal global-conglomerate voice.

---

## 3. Direction: "modern minimal" synthesis for Vision Safety India

Goal: Tanda's credibility-first, card-based, stat-driven structure — executed in a **more modern, more minimal** visual language than Tanda itself uses (Tanda's own site is fairly dense/busy; go cleaner, more whitespace, fewer simultaneous colors, larger type scale).

**Suggested section order for the new site:**
1. Hero — full-bleed real photo (see `reference-images/welding-work.jpg` or a similar plant shot), headline "India's Top Fire & Safety Provider" / baseline "Protecting Human Lives at Workplace", one primary CTA (Call / WhatsApp / Get a Quote)
2. Stat row — "25+ Years", "NFPA / NSC Member", "PESO-Tested SCBA", "3 Business Verticals" (Marine / Industrial / Workplace) — Tanda-style big numbers, VSI-specific facts
3. Credentials/certifications strip — FSAI, NFPA, NSC, PESO, EN3, UL/FM, CE/SITRA — logo-style badges, Tanda's "Certified By" pattern
4. Services grid — the 8 servicing lines, icon + title + 1 line each
5. Products grid — extinguishers / SCBA / hydrants / hose reels / EEBD / adaptors, photo-tile cards
6. Home Fire Safety mini-section — consumer-facing products + brochure download (keep — good lead-gen)
7. PAPR by VSafe — own-manufactured product spotlight (differentiator — Tanda-style single-product feature section)
8. About/Team — real photos (`about-hero-employees.jpg`, `head-office.jpg`) + named leadership, credibility through people, not just certificates
9. Facility/plant gallery — use `welding-work.jpg`, `storage-area.jpg` and similar to show real manufacturing/servicing capability (this is a genuine differentiator most competitors won't have — lean into it)
10. Vision Farms — keep as a distinct, warmer, human/CSR section (breaks the industrial tone deliberately — good storytelling beat)
11. Video gallery — keep, reformat as a clean card grid
12. Contact — address, 3 phone lines, WhatsApp, embedded map, contact form

**Minimal/modern execution notes for Claude Code:**
- Generous whitespace, large type scale for headings, restrained color palette (1 primary brand color + neutrals; avoid the multi-color icon-per-service look many GoDaddy templates default to)
- Real photography over icons wherever a real photo exists (this client actually has strong documentary photos — use them instead of generic safety-industry stock/iconography)
- Card grids with consistent aspect ratios (Tanda's biggest weakness is inconsistent image crops — fix this in the rebuild)
- Sticky/minimal nav, condense the current 10-item nav into fewer top-level items with sub-groupings (Services, Products, About, Projects/Gallery, Contact)
- Mobile-first: current site is a dated GoDaddy builder site, likely weak on mobile — prioritize responsive polish
- Keep WhatsApp CTA prominent (already present, works well for an Indian B2B/local-service audience)

---

## 4. Reference photography (extracted from visionsafetyindia.com)

Local copies saved in `reference-images/` alongside this brief:

| File | Original alt text | Use case |
|---|---|---|
| `about-hero-employees.jpg` | "EMPLOYEES" | Team/people photo — About Us section, humanizes the brand |
| `head-office.jpg` | "HEAD OFFICE" | Office interior (workstations) — supporting About/credibility shot |
| `welding-work.jpg` | "WELDING WORK" | Actual plant/fabrication floor — strong "we manufacture, not just resell" proof shot, good hero or facility-gallery candidate |
| `storage-area.jpg` | "STORAGE AREA FOR FIRE EXTINGUISHER SPARES" | Warehouse/parts storage — reinforces scale of operations |

Note: these are the **real, full-resolution source images** pulled directly from the live site (not placeholders/thumbnails) — safe to use directly in the rebuild or as a starting point for reshoots/crops. The site has additional photos (reception, top management, service station, SCBA servicing, team members, farm/CSR photos, product shots) not pulled here since 4 covers the main "office/plant" ask — ask Claude Code to pull more from the live site's Image Gallery / Our Team / Watch Us At Work sections if needed.

---

## 5. Open items to confirm before/during build

- Exact hex palette and font-family for a literal Tanda-match were not extracted in this pass (only structure/content/tone were) — if an exact visual match to Tanda's CSS is wanted, inspect tandasystem.com's computed styles directly, or treat the palette as a free choice within the "modern minimal industrial" direction above.
- Confirm whether "Our Projects — coming soon" (seen on current site) has real project photos to substitute, or should stay a placeholder.
- Confirm which of the 3 phone numbers is primary for the new site's main CTA.
