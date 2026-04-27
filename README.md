# 🇮🇳 Schemes In India — Next.js Website

Complete government schemes website built for SEO + AdSense monetization.

## 📁 Folder Structure

```
schemes-india/
├── app/
│   ├── page.tsx                          → Homepage (schemesindia.in/)
│   ├── layout.tsx                        → Root layout (AdSense script, fonts, SEO)
│   ├── globals.css                       → Global styles
│   ├── sitemap.ts                        → Auto-generated sitemap.xml
│   ├── robots.ts                         → robots.txt for SEO
│   ├── states/
│   │   └── page.tsx                      → /states (all states listing)
│   ├── central/
│   │   ├── page.tsx                      → /central (all central schemes)
│   │   └── [scheme]/
│   │       └── page.tsx                  → /central/pm-vishwakarma-yojana
│   └── schemes/
│       └── [state]/
│           ├── page.tsx                  → /schemes/maharashtra
│           └── [scheme]/
│               └── page.tsx             → /schemes/maharashtra/ladki-bahin-yojana
├── components/
│   ├── Header.tsx                        → Sticky header with nav
│   ├── Footer.tsx                        → Footer with links
│   ├── AdUnit.tsx                        → All AdSense placements
│   ├── SchemeCard.tsx                    → Reusable scheme card
│   ├── StateCard.tsx                     → State grid card
│   ├── Breadcrumb.tsx                    → SEO breadcrumb nav
│   └── FaqAccordion.tsx                  → FAQ with schema markup
├── lib/
│   └── schemes-data.ts                  → All schemes data + types
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 🚀 Quick Setup

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser at http://localhost:3000
```

## 💰 AdSense Setup (DO THIS BEFORE LAUNCH)

1. Sign up at **google.com/adsense** with your domain
2. Get your publisher ID: `ca-pub-XXXXXXXXXXXXXXXXX`
3. Replace ALL instances of `ca-pub-XXXXXXXXXXXXXXXXX` in these files:
   - `app/layout.tsx` (line 44)
   - `components/AdUnit.tsx` (line 10)
4. Replace `TOP_BANNER_SLOT`, `MID_CONTENT_SLOT` etc. with your actual Ad Unit slot IDs

### Ad Units to Create in AdSense Dashboard:
| Name | Format | Placement |
|------|--------|-----------|
| TOP_BANNER_SLOT | Horizontal/Leaderboard | Below header |
| MID_CONTENT_SLOT | Rectangle 300x250 | Mid article |
| IN_FEED_SLOT | In-feed/Native | Between scheme cards |
| SIDEBAR_SLOT | Vertical 300x600 | Sidebar |
| END_ARTICLE_SLOT | Auto-responsive | End of article |
| MOBILE_STICKY_SLOT | Banner 320x50 | Mobile footer sticky |

## 🔍 SEO Checklist

- [x] Meta title + description on every page
- [x] Canonical URLs
- [x] Open Graph tags
- [x] Schema markup (Article, FAQ, BreadcrumbList, Organization, WebSite)
- [x] Auto sitemap.xml at /sitemap.xml
- [x] robots.txt at /robots.txt
- [x] Semantic HTML (h1, h2, h3 hierarchy)
- [x] Internal linking (header nav + sidebar + footer)
- [x] Mobile responsive
- [x] Fast fonts (next/font with display:swap)
- [ ] Add Google Search Console verification code in `app/layout.tsx`
- [ ] Submit sitemap to Google Search Console after launch

## 📝 How to Add More Schemes

Open `lib/schemes-data.ts` and add to `centralSchemes` array:

```typescript
{
  slug: "your-scheme-slug",
  title: "Scheme Full Title 2025",
  shortTitle: "Short Name",
  description: "2-3 sentence description...",
  benefit: "Main benefit in one line",
  category: "agriculture", // one of the 8 categories
  eligibility: ["Criterion 1", "Criterion 2"],
  documents: ["Aadhaar Card", "Bank Passbook"],
  applyLink: "https://official-portal.gov.in",
  launchYear: 2024,
  keywords: ["keyword 1", "keyword 2"],
  isPopular: false,
  faqs: [
    { q: "Question?", a: "Answer." },
  ],
}
```

## 🗺️ How to Add State Schemes (Maharashtra example)

Add to `maharashtraSchemes` array in `lib/schemes-data.ts` (same Scheme format).
For new states, add a new array and update the `getSchemesByState()` function.

## 🚀 Deployment

### Vercel (Recommended — Free)
```bash
npm install -g vercel
vercel --prod
```
Add custom domain in Vercel dashboard → point your domain DNS to Vercel.

### Hostinger (Cheap Indian hosting)
```bash
npm run build
# Upload .next folder + package.json to Node.js hosting
```

## 💡 Content Strategy to Rank Fast

1. **Publish 20+ pages first** before applying for AdSense
2. **Target long-tail keywords**: "pm vishwakarma yojana documents required list" beats "pm vishwakarma yojana"
3. **Add Hindi content**: Create Hindi versions of top pages (`/hi/central/pm-vishwakarma-yojana`)
4. **Update content**: Change year references (2024→2025) regularly — freshness boosts ranking
5. **WhatsApp share button**: Add to all pages to get viral traffic from WhatsApp groups
6. **State pages**: Each state page = 1 extra indexed URL + targets "[State] yojana" searches

## 📊 URL Structure (SEO-Friendly)

```
schemesindia.in/                          → Homepage
schemesindia.in/central/                  → All central schemes
schemesindia.in/central/pm-vishwakarma-yojana  → Scheme detail
schemesindia.in/states/                   → All states
schemesindia.in/schemes/maharashtra/      → Maharashtra schemes
schemesindia.in/schemes/maharashtra/ladki-bahin-yojana  → State scheme detail
schemesindia.in/category/agriculture/     → Category filter
schemesindia.in/sitemap.xml               → Auto-generated
schemesindia.in/robots.txt                → Auto-generated
```

All URLs are clean subfolder paths (NOT subdomains) — this is the correct SEO structure.
Google treats all pages as part of one strong domain, not separate sites.
