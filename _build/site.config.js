/* Single place to change the hub's brand name and tool list.
   Edit, then run: node _build/build.js   (writes index.html, sitemap*.xml, robots.txt) */
module.exports = {
  BRAND: "UK Admin Tools",
  SITE_URL: "https://besttechguides.github.io/",
  TRADER_LINE: "Best Tech Guides is a trading name of Andrew Ellis.",
  EMAIL: "lemondogs@yahoo.co.uk",
  LASTMOD: "2026-10-04",
  HERO_ALT: "Illustration of a small-business desk: a laptop showing a chart and checklist, receipts and coins, a coffee mug, a calendar with a date circled, and a car badge with a dotted route to a map pin.",
  /* Tool repos on this Pages host that publish their own sitemap */
  CHILD_SITEMAPS: [
    "https://besttechguides.github.io/mileclaim-uk/sitemap.xml",
    "https://besttechguides.github.io/mtd-scopecheck/sitemap.xml"
  ],
  /* Pages on this host with no sitemap of their own (listed in sitemap-hub.xml) */
  EXTRA_URLS: ["https://besttechguides.github.io/all-steps/", "https://besttechguides.github.io/billfold/", "https://besttechguides.github.io/noticeduty/", "https://besttechguides.github.io/first-six/"],
  /* Disclosed affiliate ads, shown after the card with id "after". Not part of the JSON-LD ItemList. */
  ADS: [
    {
      id: "ad-sage", after: "mtd", tag: "Advertisement",
      title: "Need MTD-compatible software? Try Sage Accounting (Ad)",
      body: "Sage Accounting is paid cloud accounting software from Sage. Check it meets your needs, and compare other options on GOV.UK.",
      cta: "See Sage Accounting (Ad)", href: "https://sageuklimited.sjv.io/5kGrQj",
      image: { png: "img/sage-300x250.png", webp: "img/sage-300x250.webp", width: 300, height: 250, alt: "Sage Accounting offer: 100% off for 3 months (Ad)" },
      compare: { label: "Compare MTD software on GOV.UK", href: "https://www.gov.uk/guidance/choose-the-right-software-for-making-tax-digital-for-income-tax" },
      note: "Ad: this is an affiliate link. We may earn a commission if you buy through it, at no extra cost to you."
    }
  ],
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
      id: "billfold", name: "Billfold", tag: "Invoices · Expenses",
      benefit: "Make invoices with the details GOV.UK lists and log expenses under the Self Assessment headings by tax year, free and with no account.",
      price: "Free",
      note: "Runs in your browser. Not tax advice and not Making Tax Digital software.",
      buttons: [{ label: "Try free", href: "https://besttechguides.github.io/billfold/", primary: true }],
      schema: { type: "WebApplication", url: "https://besttechguides.github.io/billfold/", offers: [["Free invoice and expense worksheet", "0", "https://besttechguides.github.io/billfold/"]] }
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
      id: "noticeduty", name: "NoticeDuty", tag: "DMCC Act 2024 · Subscriptions",
      benefit: "Plan the reminder, cooling-off and end-of-contract notices for the new UK subscription contract rules, expected from January 2027: dates worked out for every subscriber, with draft notice wording.",
      price: "Free demo · Starter £100 · Growth £190 · Scale £350 (one-off)",
      note: "Expected from January 2027: the exact day and the regulations are not published yet. Not legal advice. Data stays on your device.",
      buttons: [
        { label: "Try free demo", href: "https://besttechguides.github.io/noticeduty/", primary: true },
        { label: "Buy Starter £100", href: "https://payhip.com/b/SkH8e", external: true },
        { label: "Buy Growth £190", href: "https://payhip.com/b/UNRVc", external: true },
        { label: "Buy Scale £350", href: "https://payhip.com/b/RCeh4", external: true }
      ],
      schema: { type: "WebApplication", url: "https://besttechguides.github.io/noticeduty/", offers: [["Free demo", "0", "https://besttechguides.github.io/noticeduty/"], ["NoticeDuty Starter (up to 1,000 subscriptions)", "100.00", "https://payhip.com/b/SkH8e"], ["NoticeDuty Growth (up to 5,000 subscriptions)", "190.00", "https://payhip.com/b/UNRVc"], ["NoticeDuty Scale (up to 10,000 subscriptions)", "350.00", "https://payhip.com/b/RCeh4"]] }
    },
    {
      id: "firstsix", name: "First Six", tag: "Employment Rights Act 2025",
      benefit: "Keep probation on track before the six-month unfair dismissal qualifying period starts, from 1 January 2027: each person's qualifying date, review reminders, probation and appeal letters, and a notice and holiday pay calculator.",
      price: "Free demo · Team £90 · Business £190 · Company £390 · Exit Pack £19 (one-off)",
      note: "England, Wales and Scotland. Not legal advice. Data stays on your device.",
      buttons: [
        { label: "Try free demo", href: "https://besttechguides.github.io/first-six/", primary: true },
        { label: "Buy Team (10 staff) £90", href: "https://payhip.com/b/8y16X", external: true },
        { label: "Buy Business (30 staff) £190", href: "https://payhip.com/b/jNt4T", external: true },
        { label: "Buy Company (150 staff) £390", href: "https://payhip.com/b/RCrod", external: true },
        { label: "Buy Exit Pack £19", href: "https://payhip.com/b/x9wab", external: true }
      ],
      schema: { type: "WebApplication", url: "https://besttechguides.github.io/first-six/", offers: [["Free demo", "0", "https://besttechguides.github.io/first-six/"], ["First Six Team (up to 10 staff)", "90.00", "https://payhip.com/b/8y16X"], ["First Six Business (up to 30 staff)", "190.00", "https://payhip.com/b/jNt4T"], ["First Six Company (up to 150 staff)", "390.00", "https://payhip.com/b/RCrod"], ["First Six Exit Pack (one employee)", "19.00", "https://payhip.com/b/x9wab"]] }
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
    }
  ]
};
