#!/usr/bin/env node
/* Builds the hub from _build/site.config.js. Run from the repo root: node _build/build.js */
const fs = require("fs"), path = require("path");
const C = require("./site.config.js");
const ROOT = path.resolve(__dirname, "..");
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const B = C.BRAND;
const title = `${B}: free and low-cost tools for UK small businesses and sole traders`;
const desc = `${B} makes simple, browser-based tools for UK small businesses and sole traders: HMRC mileage claims, Making Tax Digital scope checks and employer compliance files. Free tools plus low-cost packs.`;

const card = t => {
  const btns = t.buttons.map(b => `<a class="btn ${b.primary ? "btn--primary" : "btn--secondary"}" href="${esc(b.href)}"${b.external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${esc(b.label)}</a>`).join("\n          ");
  return `
      <article class="card${t.soon ? " card--soon" : ""}" id="${t.id}">
        <p class="card__tag">${esc(t.tag)}</p>
        <h3>${esc(t.name)}</h3>
        <p class="card__benefit">${esc(t.benefit)}</p>
        ${t.soon ? "" : `<p class="card__price">${esc(t.price)}</p>`}
        ${t.buttons.length ? `<p class="card__ctas">\n          ${btns}\n        </p>` : `<p class="card__ctas"><span class="badge">Coming soon</span></p>`}
        <p class="card__note">${esc(t.note)}</p>
      </article>`;
};

const adCard = a => `
      <aside class="card card--ad" id="${a.id}" aria-label="Advertisement">
        <p class="card__tag">${esc(a.tag)}</p>
        <h3>${esc(a.title)}</h3>
        ${a.image ? `<p class="card__banner"><a href="${esc(a.href)}" target="_blank" rel="sponsored noopener"><picture><source type="image/webp" srcset="${a.image.webp}"><img src="${a.image.png}" width="${a.image.width}" height="${a.image.height}" alt="${esc(a.image.alt)}" loading="lazy" decoding="async"></picture></a></p>` : ""}
        <p class="card__benefit">${esc(a.body)}</p>
        <p class="card__ctas">
          <a class="btn btn--secondary" href="${esc(a.href)}" target="_blank" rel="sponsored noopener">${esc(a.cta)}</a>
          ${a.compare ? `<a class="btn btn--link" href="${esc(a.compare.href)}" target="_blank" rel="noopener noreferrer">${esc(a.compare.label)}</a>` : ""}
        </p>
        <p class="card__note">${esc(a.note)}</p>
      </aside>`;
const live = C.TOOLS.filter(t => t.schema);
const withAds = t => card(t) + (C.ADS || []).filter(a => a.after === t.id).map(adCard).join("");
const ld = [
  { "@context": "https://schema.org", "@type": "Organization", name: B, url: C.SITE_URL, email: C.EMAIL },
  { "@context": "https://schema.org", "@type": "ItemList", name: `${B} tools`, itemListElement: live.map((t, i) => ({
      "@type": "ListItem", position: i + 1,
      item: Object.assign({ "@type": t.schema.type, name: t.name, url: t.schema.url, description: t.benefit },
        t.schema.type === "WebApplication" ? { applicationCategory: "BusinessApplication", operatingSystem: "Any" } : {},
        { offers: t.schema.offers.map(([n, p, u]) => ({ "@type": "Offer", name: n, price: p, priceCurrency: "GBP", url: u })) })
    })) }
];

const html = `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  <meta name="robots" content="index,follow">
  <link rel="canonical" href="${C.SITE_URL}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="en_GB">
  <meta property="og:url" content="${C.SITE_URL}">
  <meta property="og:site_name" content="${esc(B)}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:image" content="${C.SITE_URL}img/og-image.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${esc(C.HERO_ALT)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(desc)}">
  <meta name="twitter:image" content="${C.SITE_URL}img/og-image.png">
  <meta name="twitter:image:alt" content="${esc(C.HERO_ALT)}">
  <meta name="theme-color" content="#084848">
  <link rel="stylesheet" href="styles.css">
  <link rel="sitemap" type="application/xml" title="Sitemap" href="${C.SITE_URL}sitemap.xml">
${ld.map(o => `  <script type="application/ld+json">\n${JSON.stringify(o, null, 2)}\n  </script>`).join("\n")}
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header hero">
    <div class="site-header__inner hero__inner">
      <div class="hero__text">
        <p class="site-header__eyebrow">${esc(B)} · UK</p>
        <h1>Admin made simpler for UK small businesses and sole traders</h1>
        <p class="hero__sub">Plain-English tools for the jobs HMRC and employment law hand you: mileage claims, Making Tax Digital and new employer duties. Start free in your browser; buy a pack only if you need more.</p>
        <p class="site-header__ctas"><a class="btn btn--cta" href="#tools">See the tools</a></p>
      </div>
      <picture class="hero__art">
        <source type="image/webp" srcset="img/hero-480.webp 480w, img/hero-720.webp 720w, img/hero-960.webp 960w" sizes="(min-width: 860px) 460px, (min-width: 560px) 70vw, 92vw">
        <img src="img/hero-960.png" width="800" height="600" alt="${esc(C.HERO_ALT)}" fetchpriority="high" decoding="async">
      </picture>
    </div>
  </header>

  <main id="main">
    <section aria-labelledby="tools-heading" id="tools">
      <h2 id="tools-heading">Tools</h2>
      <div class="grid">${live.map(withAds).join("")}
      </div>
    </section>

${C.TOOLS.some(t => t.soon) ? `    <section aria-labelledby="soon-heading" id="soon">
      <h2 id="soon-heading">Coming soon</h2>
      <div class="grid">${C.TOOLS.filter(t => t.soon).map(card).join("")}
      </div>
    </section>
` : ""}
    <aside class="disclaimer" role="note">
      <p>These are unofficial helpers, not tax or legal advice, and are not affiliated with HMRC or GOV.UK. Always check current rules on <a href="https://www.gov.uk/" target="_blank" rel="noopener noreferrer">GOV.UK</a>. Paid packs are sold and delivered through Payhip (MileClaim also on Etsy).</p>
    </aside>
  </main>

  <footer class="site-footer">
    <div class="site-footer__inner">
      <p><strong>${esc(B)}</strong></p>
      <p>${esc(C.TRADER_LINE)} Email: <a href="mailto:${C.EMAIL}">${C.EMAIL}</a></p>
      <p class="muted"><a href="${C.SITE_URL}sitemap.xml">Sitemap</a> · Tool sitemaps: ${C.CHILD_SITEMAPS.map(u => `<a href="${u}">${u.replace(C.SITE_URL, "").replace("/sitemap.xml", "")}</a>`).join(" · ")}</p>
    </div>
  </footer>
</body>
</html>
`;
fs.writeFileSync(path.join(ROOT, "index.html"), html);

const urlset = [C.SITE_URL, ...C.EXTRA_URLS].map(u => `  <url>\n    <loc>${u}</loc>\n    <lastmod>${C.LASTMOD}</lastmod>\n    <changefreq>monthly</changefreq>\n  </url>`).join("\n");
fs.writeFileSync(path.join(ROOT, "sitemap-hub.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>\n`);
const idx = [C.SITE_URL + "sitemap-hub.xml", ...C.CHILD_SITEMAPS].map(u => `  <sitemap>\n    <loc>${u}</loc>\n  </sitemap>`).join("\n");
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${idx}\n</sitemapindex>\n`);
fs.writeFileSync(path.join(ROOT, "robots.txt"), `User-agent: *\nAllow: /\nDisallow: /_build/\n\n${["sitemap.xml", ...C.CHILD_SITEMAPS].map(u => "Sitemap: " + (u.startsWith("http") ? u : C.SITE_URL + u)).join("\n")}\n`);
console.log("built index.html, sitemap.xml, sitemap-hub.xml, robots.txt for brand:", B);
