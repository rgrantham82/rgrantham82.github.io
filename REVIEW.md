# rgrantham82.github.io — Review & Repairs
**Audited:** July 31, 2026 · **Source:** `rgrantham82_github_io-main__2_.zip` (94 files, 80.4 MB)

---

## The short of it

The site is well built. The templates are tidy, the semantics are careful, there is a
skip-link and an `aria-label` on nearly everything that needs one, the copy has an actual
voice, and the artwork records are structured as data instead of being hand-typed into
twelve separate HTML files. Somebody thought about this. That somebody deserves to know
that the whole handsome edifice was sitting on **78.8 megabytes of photographs**, which is
rather like commissioning a fine suit and then filling the pockets with anvils.

Everything below is either measured from the files you sent or verified against a source.
Nothing is a hunch.

---

## What was actually wrong

### 1. The images. This is the whole ballgame. 🔴

Your portfolio page loaded **43.5 MB of image data**. Not the site — one page.

| Page | Image payload before | After | On a 4 Mbps phone |
|---|---|---|---|
| `/portfolio/` | 43.49 MB | 1.00 MB | **91 s → 2.1 s** |
| Home | 15.38 MB | 443 KB | **32 s → 0.9 s** |
| Whole repo | 78.81 MB | 5.35 MB | — |

The offenders, in their natural habitat:

- `work-aurum-rising.jpg` — **5.14 MB, 6112 × 6112 px**, served on the home hero with
  `fetchpriority="high"`. That is a print master wearing a website's clothes.
- `robert_grantham_conjunction_golden_passage_1.jpg` — **8.39 MB, 8160 × 6120 px**.
- `logo.png` — **1.53 MB at 1024 × 1024**, displayed at 40 × 40. A 1,500 KB file rendering
  into 1,600 pixels of screen. Roughly one kilobyte per pixel.
- `favicon.png` — **380 KB at 1024 × 1024**, declared in the HTML as `sizes="32x32"`.

Lazy loading does not save you here, because the images above the fold are the heavy ones,
and a browser that has been told `fetchpriority="high"` will obediently haul five megabytes
up the hill before it draws anything else. A collector on a phone outside a gallery does not
wait ninety-one seconds. There is no version of that sentence that ends well.

**Fixed:** every image resized to a 1600 px long edge, re-encoded as progressive JPEG at
q82, with an 800 px thumbnail generated alongside for the gallery grid. The grid and detail
pages now use `srcset`/`sizes`, so a phone downloads the 800 px file and a desktop the
1600 px one. Logo down to 160 px (retina-safe at its 40 px display size), favicon to a real
32 px, plus a proper 180 px `apple-touch-icon.png`.

> ⚠️ **Keep your masters.** The 6112 px originals are your print and archival files. I
> replaced only the *web* copies. Make sure those originals live somewhere that is not this
> repository — an external drive, cloud backup, anywhere — before you overwrite anything.

### 2. Three images referenced that do not exist 🔴

Not "suboptimal." Broken. Empty frames and a broken social card.

| Reference | Where |
|---|---|
| `self-portrait-commission-demo.webp` | `portraiture.html` lines 7, 8, 137 — the page's hero image **and** its `og:image` |
| `2024-07-01.png` | `_posts/2024-07-01-cta-lgbt-community-support.md:7` — post's featured image |
| `2024-08-08/visualizations.png` | `_posts/2024-08-09-race-gender-dynamics-police-shootings.md:24` — the "Fig. 1" in an essay whose entire argument rests on that figure |

The portraiture one is the cruel joke: the file was on disk the whole time as
`self-portrait-commission-demo.png`. Three characters of extension, and the page has been
showing a broken image and a broken share preview ever since.

**Fixed:** generated the `.webp` (121 KB) from your PNG, so all three references resolve.
The two post images I could not conjure — the source files aren't in the archive. The
featured-image key is commented out and the figure replaced with an HTML comment telling
you exactly what to restore. No more silent breakage.

### 3. A raw template file was being published to the public web 🟠

`work-card.html` sits in the repository **root**. It is a duplicate of
`_includes/work-card.html`, and it has no front matter — which means Jekyll does not process
it, it copies it verbatim. Anyone visiting `rgrantham82.github.io/work-card.html` was
served a page of naked Liquid syntax. Worse, `jekyll-sitemap` includes root-level `.html`
static files, so you were likely *advertising* it to Google.

**Fixed:** deleted. The real one in `_includes/` is untouched.

### 4. Your social share card was over X's size limit 🟠

`_config.yml` set `og_image: /assets/images/work-aurum-rising.jpg` — **5.14 MB, square**.
X caps card images at 5 MB and wants roughly 1.91:1 or 2:1 landscape. You were over the
cap. Cards that exceed it don't degrade gracefully; they just don't render, and you never
find out, because nobody emails to say "your link preview was blank."

**Fixed:** generated `og-default.jpg` — 1200 × 630, **68 KB**, cropped from *Aurum Rising*.
Added `og:image:width`, `og:image:height`, and alt text for both OG and Twitter.

### 5. No structured data, so search engines can't see the merchandise 🟠

You had `itemscope itemtype="VisualArtwork"` microdata scattered across the templates, but
it declared only `name`, `image`, and `dateCreated`. It never said **who made the work** or
**whether it's for sale**. A crawler reading your portfolio learned there are pictures, and
nothing else. No `creator`, no `offers`, no `availability`.

**Fixed:** new `_includes/structured-data.html` emitting a proper JSON-LD `@graph` —
`Person` + `WebSite` on every page, `VisualArtwork` with `creator` and an `Offer`
(`InStock` / `SoldOut`, price when set) on artwork pages, `BlogPosting` on essays,
`BreadcrumbList` throughout. Built with capture-and-split rather than inline commas, so
removing a social handle later can't strand a comma and invalidate the entire document.
Uses only Liquid available in the Jekyll 3.x that GitHub Pages runs.

### 6. `jekyll-feed` was enabled but never announced 🟡

The plugin was generating `/feed.xml` faithfully, and no browser or reader could discover
it, because `{% feed_meta %}` was never in `<head>`.

**Fixed:** added, plus a visible RSS link in the footer.

### 7. Dead pagination config 🟡

`_config.yml` had `paginate: 6` and `paginate_path: /page:num`, but `jekyll-paginate` was
never listed under `plugins:`. GitHub Pages builds in `--safe` mode and only loads
whitelisted plugins that you explicitly declare, so the setting did precisely nothing.
`blog/index.html` already hedges with `paginator.posts | default: site.posts`, so the blog
worked — it just worked for a reason other than the one the config implies.

**Fixed:** removed both keys with a comment explaining why. With eleven posts and a
client-side search-and-filter over the whole set, pagination would actively *hurt* you:
it would hide posts from the very filter you built.

### 8. `/portraiture.html` is an orphan 🟡

A finished 7 KB page with its own stylesheet, not in the nav, not in the footer, not
linked from anywhere in the site. Reachable only by someone who already knew the URL, which
is a demographic of roughly one.

**Fixed:** added to the footer. It probably deserves better — see below.

### 9. Data hygiene in `_works/` 🟡

- Four records used `image: assets/...` and eight used `image: /assets/...`. Both happen to
  survive the `relative_url` filter, so it was never a bug — but it's the kind of
  inconsistency that eventually becomes one.
- `magnolia_canticle_4.png` had trailing whitespace in its YAML value.
- `aurum-rising.md` has `size: 24×30x1.5 in` — a proper `×` and a lowercase `x` in the same
  measurement.

**Fixed:** paths normalized to leading-slash, whitespace stripped, and every record now
carries `thumb`, `image_w`, and `image_h` so the templates can declare true intrinsic
dimensions and stop shifting the layout as images arrive.

---

## What I did **not** touch (these are yours to decide)

**Every available painting says "Price on request."** All six of them. This is a defensible
gallery convention and an indefensible sales tactic for work at your price point. Every
study of e-commerce friction says the same thing: a buyer who has to send an email to learn
a number usually decides they didn't want the number. The `price` field already exists in
the schema and the templates already render it. `magnolia-canticle-no-3.md` even has
`price: ""` sitting there like an unanswered question. Fill them in.

**The contact form only opens a mailto: draft.** The engineering is careful — validation,
a structured body, a no-JS fallback. But `mailto:` fails silently for anyone using webmail
in a browser with no registered mail handler, which is a great many people, and long
messages get truncated by client URL limits. You will never know how many inquiries you've
lost, which is exactly the problem. A free Formspree or Netlify Forms endpoint posts to a
real inbox and takes about ten minutes to wire up. Keep the mailto as the fallback.

**Two artworks are documented at low resolution.** `magnolia_canticle_4` is only
**592 × 774 px** and `resilientia-final` is **717 × 1024** — while their neighbors are
6000 px masters. On a retina display those two will look soft next to everything else.
Re-shoot or re-export.

**`aurum-rising.md` has no `series` key.** It's your featured piece and your home-page hero,
and it's the one work that gets no series filter chip in the gallery. Deliberate, or an
oversight?

---

## ⚠️ One honest caveat

**I could not run `jekyll build`.** There's no Ruby in this sandbox and no network access to
install one. So I verified what I could statically: Liquid block balance across every layout,
include, and page (clean); JSON-LD brace and bracket balance (clean); and that every
`/assets/…` path referenced anywhere in the repo now resolves to a real file (clean, except
the one missing figure I deliberately left commented).

That is not the same as a green build. **Run `bundle exec jekyll build` locally, or watch
the Pages build after you push**, and check `/portfolio/aurum-rising/` and one blog post
before you call it done. The image work and the deletions are risk-free; the Liquid changes
in `default.html`, `work.html`, `work-card.html`, and the new `structured-data.html` are the
ones to eyeball.

---

## What to do next, in order of return on effort

1. **Push the image fixes.** 44× lighter portfolio page. Nothing else you do this year will
   move the needle as far.
2. **Put prices on the six available paintings.** You built the whole apparatus for it.
3. **Replace the mailto form with a real endpoint.** Ten minutes; stops the leak.
4. **Add a `Gemfile`** pinning `gem "github-pages", group: :jekyll_plugins` so your local
   build matches what GitHub actually runs. There isn't one in the repo.
5. **Re-shoot Magnolia Canticle No. 4 and Resilientia Lotus.**
6. **Decide about `/portraiture.html`** — promote it to the nav or fold it into
   `/commissions.html`. A finished page nobody can find is just a well-made secret.
7. **Validate the structured data** at `search.google.com/test/rich-results` once it's live.

---

---

## Revision — November 12, 2026

A second pass over the November 7 snapshot found the July fixes had only
partly landed, and that prices had drifted into open disagreement with each
other. Fixed in this revision:

**Images — finished.** The five files the July pass never reached are now
1600 px progressive JPEGs at q82 with real 800 px thumbs, and the four
records whose `thumb` pointed at the master itself now point at a real
thumbnail: Aurum Rising (19 MB → 271 KB), Black Sun (10 MB → 216 KB),
Red Shore (850 KB → 164 KB), Judge's Dance (5.4 MB → 364 KB), Interchange
(3.1 MB → 427 KB, and it finally has a thumb). Seven unreferenced files
(~35 MB: three phone-photo masters, the hero PNG, the portraiture PNG
source, two post PNGs now served as JPGs, one orphan thumb) were removed
from the site. The originals are NOT lost — they are in the accompanying
masters backup. Repository: 85 MB → 16 MB. The two 2026 post heroes now
use their existing JPGs instead of the 4 MB / 3.1 MB PNGs.

**Root `work-card.html` — finally deleted.** It was still in the November
snapshot, still publishing raw Liquid.

**Prices — one schedule everywhere.** The site was publishing four
different prices for the same sizes: the September ladder in
`_data/pricing.yml`, the `_works` front matter, the trade page's bands
(a fifth set, as ranges), and the October 2026 catalog — plus stale
figures in the artwork `description` meta fields ($1,250 for Aurum, $835
for the 20×24s, $625/$555) that search engines were showing. Everything
now follows the October 2026 catalog, the newest published schedule and
the one the December show checklist uses: 8×10 $205, 12×12 $370, 16×20
$825, 20×24 $1,235, 24×30 $1,855, 30×40 $3,100. The ladder, the
`_works` prices, the meta descriptions, the trade table, and the
December-show math in `pricing.yml` were all brought into line. The
December show's `if_all_sell` is now $12,740 gross / $2,548 church /
$10,192 artist on the old 12-work list — that list itself predates the
current 7+5 arrangement and still needs Tatiana's five.

**Records corrected against the catalog.** Black Sun is "Conjunction
*of* the Black Sun", inventory RGA-CBS-2026-01 (the site said "with",
RGA-CWBS-2026-01). Magnolia Canticle No. 1 and No. 2 had their years
and inventory numbers swapped relative to the catalog — now MC1 is
2025 / RGA-MC1-2025-01 and MC2 is 2026 / RGA-MC2-2026-01. Aurum Rising
finally has its `series: Conjunctions` key, so it gets a series chip
and kicker instead of "Featured Originals" / "Artwork". The Judge's
Dance had a blank price and available-work copy on a sold painting —
now marked Sold. The Lonely Pier's description said "$350. Available."
on a sold work — now says Sold. Structured data no longer emits
`"price": "Sold"` for sold works; the price is only emitted for
available ones.

**Sales tax, stated plainly.** The trade page now has a sales-tax row
(8.25% in Austin added for own-use purchases; resale with a valid
Form 01-339 on file is tax-free) and the buying page says the same in
one sentence. The trade page also stopped claiming the December show
is "currently exhibiting" in November — it now says opening December 8.
A short December show notice was added to the home page.

**Two broken post images — contained, not conjured.** The 2024-07-01
featured image and the 2024-08-09 Fig. 1 are still missing from the
repo, so the references are now commented out with TODOs saying exactly
what to restore, instead of rendering broken frames. The work-card
`width`/`height` now come from each record's true image dimensions
instead of a hardcoded 800×800, and the home hero's dimensions now
match the resized Aurum file (1280×1600). A `Gemfile` pinning
`github-pages` was added.

**Still yours to decide.** The contact form is still mailto-only (a real
endpoint needs a Formspree/Netlify account under your email). Magnolia
Canticle No. 4 (592×774) and Resilientia Lotus (717×1024) are still
low-resolution next to their neighbors — re-shoot or re-export. And if
the October catalog prices were *not* meant to supersede the September
ladder, say so: the price alignment is the one change here that moves
real money, and it is trivially reversible.

*Robert Grantham · robertgrantham40@gmail.com · 512-200-3563*
*rgrantham82.github.io · Instagram [@robertgranthamart](https://instagram.com/robertgranthamart)*
