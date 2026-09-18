# Orca compact selector pack

## Existing markup/classes
Header: `.site-header .brand .desktop-nav .round-menu`.
Page header: `.page-header > .wrap.page-header-grid`; children `.page-header-left h1`, `.page-header-left p`, `.page-header-right`, `.button-row`, `.outline-btn`, `.dark-btn`, `.try-note`.
Styles: `.styles-section > .wrap.styles-layout`; `.styles-intro h2`, `.style-count`, `.style-samples`, `.weights > div`.
Cover: `.cover-section .cover-art`; children `.cover-small`, `.cover-word`, `.cover-word.italic`, `.cover-mark`, `.cover-rule.r1/r2/r3`.
Sampler: `.sampler-section .sampler-stack .sampler-panel`; `.sampler-toolbar`, `.toolbar-weights`, `.sample-text`, `.sample-display`, `.sample-headline`, `.sample-copy`.
Gallery1: `.gallery-one .gallery-two-col`; cards `.portrait-a`, `.portrait-b`.

## Current key CSS metrics
Global wrapper: `--wrap:92vw`; desktop main top 208px; desktop section gap 96.17px after the structure fix; mobile main top 99.3px and gap 70.5px.
Page header desktop h=144; grid columns 71% + 1fr with 4% gap; h1=80px/1; description=15.75px/20.5; CTA buttons h=38px.
Page header mobile h=225.3; block layout; h1=60px; description same 15.75/20.5; CTA row centered.
Cover desktop h=960; mobile h=284px. Do not override these root heights.
Styles desktop h=751; mobile h=1388. Do not override root height.
Sampler desktop h=1305; mobile h=1795. Do not override root height.

## Target observations relevant to these selectors
Desktop target wrapper x≈51.2, width≈1177.6 at 1280px viewport (~92vw).
Desktop page title x≈51.2 y≈208.16, font 80/80, narrow high-contrast serif feel; description y≈310.8; CTA block x≈931.7 y≈219.7.
Mobile title x≈16.48 y≈99.31 font 60/60; description y≈180.47; CTA row y≈242.56.
Target UI sans is compact Neue-Montreal-like; use local/system sans only. Target display is proprietary Editorial New; approximate with local high-contrast serif only.
Target media language: cream paper, black/red editorial type, warm photography/specimen feel; no fake browser UI.

## Patch rules
Each Orca layer must stay <=65 total lines by geometry contract.
No external URLs, @import, @font-face.
Never set root section height/min-height/max-height/margin-top in layer files.
