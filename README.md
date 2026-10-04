# besttechguides.github.io: hub page

Static hub for the tool sites on besttechguides.github.io.

The brand name, tool list, prices and links all live in `_build/site.config.js` (`BRAND` is the one place to change the name).
After editing, run `node _build/build.js` from this folder to regenerate `index.html`, `sitemap.xml` (sitemap index), `sitemap-hub.xml` and `robots.txt`, then commit and push.

Hero image: the source is `_build/hero.svg`. To regenerate `img/` (WebP at 480/720/960, PNG fallback, 1200x630 `og-image.png`), run
`node _build/make-images.js && python3 _build/make-images.py` (needs headless Chrome, puppeteer-core and Pillow).
