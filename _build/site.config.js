/* Single place to change the hub's brand name and tool list.
   Edit, then run: node _build/build.js   (writes index.html, sitemap*.xml, robots.txt) */
module.exports = {
  BRAND: "UK Admin Tools",
  SITE_URL: "https://besttechguides.github.io/",
  TRADER_LINE: "Best Tech Guides is a trading name of Andrew Ellis, 11 Laneside Avenue, Toton, Nottingham NG9 6LW.",
  EMAIL: "lemondogs@yahoo.co.uk",
  LASTMOD: "2026-10-04",
  HERO_ALT: "Illustration of a small-business desk: a laptop showing a chart and checklist, receipts and coins, a coffee mug, a calendar with a date circled, and a car badge with a dotted route to a map pin.",
  /* Tool repos on this Pages host that publish their own sitemap */
  CHILD_SITEMAPS: [
    "https://besttechguides.github.io/mileclaim-uk/sitemap.xml",
    "https://besttechguides.github.io/mtd-scopecheck/sitemap.xml"
  ],
  /* Pages on this host with no sitemap of their own (listed in sitemap-hub.xml) */
  EXTRA_URLS: ["https://besttechguides.github.io/all-steps/"],
  TOOLS: [
    {
      id: "mileclaim", name: "MileClaim UK", tag: "Mileage · HMRC",
      benefit: "Log business trips and see what HMRC's 2026/27 mileage rates (55p a mile for cars and vans) are worth to you, including any Mileage Allowance Relief you may be able to claim.",
      price: "Free calculator · £12 claim pack",
      note: "Unofficial helper. Not tax advice. Data stays in your browser.",
      buttons: [
        { label: "Try free", href: "https://besttechguides.github.io/mileclaim-uk/", primary: true },
        { label: "Buy claim pack £12 (Payhip)", href: "https://payhip.com/b/d2CPD", external: true },
        { label: "Buy on Etsy £12", href: "https://www.etsy.com/uk/listing/4578489364/hmrc-mileage-claim-pack-202627-uk", external: true }
      ],
      schema: { type: "WebApplication", url: "https://besttechguides.github.io/mileclaim-uk/", offers: [["Free calculator", "0", "https://besttechguides.github.io/mileclaim-uk/"], ["HMRC Mileage Claim Pack 2026/27", "12.00", "https://payhip.com/b/d2CPD"]] }
    },
    {
      id: "mtd", name: "MTD ScopeCheck", tag: "Making Tax Digital",
      benefit: "Find out in one screen whether your sole-trader or property income may bring you into Making Tax Digital for Income Tax, and when, with a printable readiness checklist.",
      price: "Free",
      note: "Unofficial helper. Not tax advice. Some software links on its result page are disclosed affiliate links, marked (Ad).",
      buttons: [{ label: "Try free", href: "https://besttechguides.github.io/mtd-scopecheck/", primary: true }],
      schema: { type: "WebApplication", url: "https://besttechguides.github.io/mtd-scopecheck/", offers: [["Free scope checker", "0", "https://besttechguides.github.io/mtd-scopecheck/"]] }
    },
    {
      id: "allsteps", name: "All Steps", tag: "Employment Rights Act 2025",
      benefit: "Get your workplace ready for the 'all reasonable steps' sexual harassment duty and third-party harassment rule, expected from 30 October 2026: gap check, training log and print pack.",
      price: "Free demo · Site Pack £39 · Multi-site Group £99",
      note: "England, Wales and Scotland. Not legal advice. Data stays on your device.",
      buttons: [
        { label: "Try free demo", href: "https://besttechguides.github.io/all-steps/", primary: true },
        { label: "Buy Site Pack £39", href: "https://payhip.com/b/bBaI7", external: true },
        { label: "Buy Multi-site Group £99", href: "https://payhip.com/b/0mWQ7", external: true }
      ],
      schema: { type: "WebApplication", url: "https://besttechguides.github.io/all-steps/", offers: [["Free demo", "0", "https://besttechguides.github.io/all-steps/"], ["All Steps Site Pack", "39.00", "https://payhip.com/b/bBaI7"], ["All Steps Multi-site Group", "99.00", "https://payhip.com/b/0mWQ7"]] }
    },
    {
      id: "signal", name: "SIGNAL", tag: "Content planning",
      benefit: "A 90-day content system for selling digital products: a PDF guide and spreadsheet content calendar. SIGNAL Complete bundles them with a prompt vault and matching PowerPoint posts.",
      price: "£27 · Complete £37",
      note: "Digital download, delivered by Payhip.",
      buttons: [
        { label: "Buy SIGNAL £27", href: "https://payhip.com/b/0lhdi", primary: true, external: true },
        { label: "Buy SIGNAL Complete £37", href: "https://payhip.com/b/3fCz1", external: true }
      ],
      schema: { type: "Product", url: "https://payhip.com/b/0lhdi", offers: [["SIGNAL 90-Day Authority Content System", "27.00", "https://payhip.com/b/0lhdi"], ["SIGNAL Complete", "37.00", "https://payhip.com/b/3fCz1"]] }
    },
    {
      id: "noticeduty", name: "NoticeDuty", tag: "Coming soon · late 2026", soon: true,
      benefit: "Work out when UK subscription businesses must send the new DMCC Act 2024 subscription notices, with dated reminders for every customer.",
      price: "Coming soon", note: "UK employer and business compliance app. No purchase available yet.", buttons: []
    },
    {
      id: "firstsix", name: "First Six", tag: "Coming soon · late 2026", soon: true,
      benefit: "Keep probation reviews on track before the six-month unfair dismissal qualifying period starts on 1 January 2027, with each person's qualifying date and review reminders.",
      price: "Coming soon", note: "UK employer compliance app. No purchase available yet.", buttons: []
    }
  ]
};
