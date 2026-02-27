# Robert Grantham Art — rgrantham82.github.io

This repository contains the source code for **Robert Grantham Art**, my GitHub Pages website and portfolio.  
It’s where I publish selected works (calligraphy, calligraffiti, and abstract acrylic paintings), highlight series, and provide commission/contact info—without relying on any platform that can “change the rules” overnight.

## What You’ll Find Here
- **Portfolio / Gallery** pages for finished works  
- **Series + themes** (Southern Gothic, resilience, memory, luminous fields, letterform-as-structure)  
- **Commission-ready presence**: clear contact info and a straightforward way to reach me

## Curated Gallery (how it works)
The gallery is curated (front-window selection), not a full archive. Each artwork lives in its own file under:

- `_works/`

Those files power:
- the main Gallery page at `/portfolio/`
- individual artwork pages at `/portfolio/<slug>/`

### Add a new artwork
1) Put the image in `assets/images/` (JPG/PNG).
2) Create a new file in `_works/` like `my-new-piece.md` with front matter keys:
   - `title`, `year`, `series` (optional), `status` (Available/Collected/Selected/Commissionable)
   - `size`, `medium`, `finish` (optional), `price` (optional), `inventory_id` (optional)
   - `image`, `alt`, `subtitle`
   - `section` (where it appears in the curated gallery)
   - `order` (lower numbers appear first)
   - `featured: true` (only for your “front-window” pieces)

That’s it — Jekyll rebuilds the gallery automatically.

### Keep old links working
`/portfolio.html` redirects to `/portfolio/` so older posts and shares don’t break.

