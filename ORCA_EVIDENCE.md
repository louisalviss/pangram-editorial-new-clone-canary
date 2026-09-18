# Pangram Editorial New — Orca visual evidence

Target A: https://pangrampangram.com/products/editorial-new
Candidate B: this repository.
Viewports used for blind A/B: desktop 1280x633; mobile 412x915.

## Hard rules
- Do not fetch or copy target HTML, CSS, JS, font binaries, or image assets.
- Do not add network calls, external font imports, dependencies, analytics, or hidden behavior.
- Use only observed geometry/text evidence below and existing repository markup/styles.
- Preserve section order and responsive heights already aligned to target.
- Favor minimal overrides in your assigned layer. Do not rewrite unrelated rules.
- The target uses proprietary Editorial New; approximate metrics with available font stacks/CSS, do not copy font files.

## Observed target geometry — desktop 1280x633
Header: y=0 h=53.3, absolute.
Main begins y=208.16.
0 page-header: y=208.16 h=143.61. H1 80px/80, x=51.2, title single line. Description y=310.83 x=51.2 w=598.9 h=40.94. Right CTA block x=931.69 y=219.70 w=297.11.
1 cover image: y=423.89 h=960, full width. Observed image is square 1280x1280 cropped cover.
2 styles: y=1456.02 h=751.19.
3 gallery-1: y=2303.38 h=848.53; two columns x=51.2 w=576.78 and x=652.02 w=576.78; left media h=812.48, right h=848.53.
4 sampler: y=3248.08 h=1304.89.
5 gallery-2: y=4649.14 h=685.61; same two columns; right media h=476.95.
6 variable tester: y=5430.92 h=532.83.
7 glyphs: y=6059.92 h=3347.20.
8 microsite banner: y=9503.30 h=484.89; inner media observed x=51.2 w=1177.6.
9 gallery-3: y=10084.36 h=822.88; same two columns; left h=632.92, right h=822.88.
10 features: y=11003.41 h=488.69.
11 gallery-4: y=11588.27 h=655.80; left h=582.31, right h=655.80.
12 info: y=12340.23 h=751.34. Heading 60px sans, x=75.2 around y=12420.
13 commercial licenses: y=13187.75 h=888.73. Heading 60px sans.
15 in-use: y=14172.66 h=578.
16 pairings: y=14846.83 h=442.33.
Target main height to pairings bottom ~15289.16; body observed ~16436 including footer.

## Observed target geometry — mobile 412x915
Header y=0 h=50.30. Main begins y=99.31.
0 page-header y=99.31 h=225.28. H1 60px/60 x=16.48. Description y=180.47 h=40.94. CTA row y=242.56 h=37.09. Free/price note y=283.66 h=40.94.
1 cover y=395.13 h=284.27.
2 styles y=749.92 h=1388.39.
3 gallery-1 y=2208.84 h=1105.63.
4 sampler y=3385.00 h=1795.00.
5 gallery-2 y=5250.53 h=778.06.
6 variable y=6099.13 h=251.84.
7 glyphs y=6421.50 h=3705.89.
8 microsite y=10197.92 h=379.03.
9 gallery-3 y=10647.48 h=970.77.
10 features y=11688.78 h=265.66.
11 gallery-4 y=12024.97 h=827.72.
12 info y=12923.22 h=1296.08.
13 buy y=14289.83 h=1533.22.
15 in-use y=15893.58 h=364.09.
16 pairings y=16328.20 h=1270.92.
Target main bottom ~17599.13.

## Typography evidence
- Target sans family resolves to Neue Montreal, fallback sans-serif. Body 14px; many descriptions ~15.7504px/20.5px.
- Target display title resolves to editorial-new and is narrow/high-contrast serif: H1 80 desktop, 60 mobile, weight ~300.
- Target uses display serif extensively in sampler and media art, but UI labels remain compact sans.
- Current clone's biggest remaining typography mismatch is serif shape/metrics and over-stylized generated poster lettering. Improve tracking, line-height, scale, hierarchy without proprietary font files.

## Media evidence
Observed target media URLs only for classification, never copy them:
- cover: square editorial specimen photography, object-fit cover.
- gallery 1: two tall editorial poster/specimen images, approx 640x901 and 640x941.
- gallery 2: one tall 640x760 and one landscape-ish 640x529.
- microsite: wide banner.
- gallery 3: 640x702 and 640x913.
- gallery 4: additional editorial/fashion specimens.
Visual language: cream/off-white paper, black/red editorial typography, warm portrait/fashion photography, high-contrast serif, restrained grid, occasional bright accent.
Do not create fake browser UI inside media art. Media boxes should read as standalone editorial artwork.

## Current clone status
Section order/heights are already close to target, especially mobile. Do not disturb those dimensions unless evidence above demands it.
The main remaining visual gap is typography identity, media composition, and some desktop rhythm/detail styling.
