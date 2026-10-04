#!/usr/bin/env node
/* Renders _build/hero.svg to img/hero.png (transparent, 1600x1200) and img/og-image.png (1200x630 on brand background)
   using headless Chrome; then make-images.py writes the WebP sizes. Run from repo root:
   node _build/make-images.js && python3 _build/make-images.py */
const puppeteer = require(process.env.PUPPETEER || "/workspace/apps/_test/node_modules/puppeteer-core");
const fs = require("fs"), path = require("path");
const ROOT = path.resolve(__dirname, ".."), svg = fs.readFileSync(path.join(__dirname, "hero.svg"), "utf8");
(async () => {
  const b = await puppeteer.launch({ executablePath: "/usr/bin/google-chrome", headless: "new", args: ["--no-sandbox"] });
  const p = await b.newPage();
  await p.setViewport({ width: 800, height: 600, deviceScaleFactor: 2 });
  await p.setContent(`<html><body style="margin:0;background:transparent">${svg}</body></html>`);
  await (await p.$("svg")).screenshot({ path: path.join(__dirname, "hero-2x.png"), omitBackground: true });
  await p.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  await p.setContent(`<html><body style="margin:0;width:1200px;height:630px;background:#084848;display:flex;align-items:center;justify-content:center">
    <div style="width:820px;height:615px">${svg.replace('width="800" height="600"', 'width="820" height="615"')}</div></body></html>`);
  await p.screenshot({ path: path.join(__dirname, "og-raw.png") });
  await b.close(); console.log("rendered");
})();
