// ─── NEWS / BLOG ARTICLE SYSTEM ───────────────────────────────────────────────
//
// HOW TO ADD A NEW ARTICLE (takes 5 minutes):
//   1. Copy one of the objects below and paste it at the TOP of the newsArticles array
//   2. Change the slug, title, date, excerpt, content, and tags
//   3. Run: git add . && git commit -m "new article" && git push
//   4. Vercel auto-deploys in 60 seconds — article is live!
//
// WHAT TO WRITE ABOUT (high-traffic, low-effort topics):
//   - "PM Kisan 19th Installment Date 2025 — When will money come?"
//   - "Ayushman Bharat Card Download 2025 — Step by step guide"
//   - "New scheme launched for [State] women — eligibility, apply"
//   - "[Scheme name] status check — how to check online"
//   - "List of schemes for [category] in 2025"
//
// ─────────────────────────────────────────────────────────────────────────────

export interface NewsArticle {
  slug: string;
  title: string;
  titleHindi?: string;           // Optional Hindi title
  date: string;                  // ISO format: "2025-04-30"
  lastModified?: string;         // Update this when you edit an article
  excerpt: string;               // 1-2 lines shown in listing
  excerptHindi?: string;
  content: string;               // Full article HTML (use <p>, <h2>, <h3>, <ul>, <ol>, <strong>)
  contentHindi?: string;         // Hindi version of the article
  category: "central" | "state" | "agriculture" | "education" | "health" | "women" | "finance" | "employment";
  tags: string[];                // Used for related articles and SEO keywords
  schemeSlug?: string;           // Links to a scheme detail page if article is about one scheme
  state?: string;                // State slug if article is state-specific
  isPopular?: boolean;
  image?: string;                // Optional OG image path e.g. "/images/blog/pm-kisan.jpg"
}

export const newsArticles: NewsArticle[] = [
  // ── ADD YOUR NEW ARTICLES AT THE TOP OF THIS LIST ──────────────────────────

  {
    slug: "pm-kisan-19th-installment-date-2025",
    title: "PM Kisan 19th Installment Date 2025 — When Will ₹2,000 Come to Your Account?",
    titleHindi: "पीएम किसान 19वीं किस्त 2025 — कब आएगा ₹2,000?",
    date: "2025-04-28",
    lastModified: "2025-04-28",
    excerpt: "PM Kisan Samman Nidhi 19th installment is expected in July 2025. Check your status, beneficiary list, and eKYC requirements here.",
    excerptHindi: "पीएम किसान सम्मान निधि की 19वीं किस्त जुलाई 2025 में आने की उम्मीद है। अपना स्टेटस और eKYC की जानकारी यहाँ देखें।",
    category: "agriculture",
    tags: ["pm kisan installment", "pm kisan 19th installment", "pm kisan status 2025", "kisan yojana"],
    schemeSlug: "pm-kisan-samman-nidhi",
    isPopular: true,
    content: `
<p>The <strong>PM Kisan Samman Nidhi 19th Installment</strong> is expected to be released in <strong>July 2025</strong>. The Government of India releases PM Kisan installments three times a year — April-July, August-November, and December-March.</p>

<h2>PM Kisan 19th Installment Expected Date</h2>
<p>Based on the pattern of previous installments, the 19th installment of PM Kisan Samman Nidhi is likely to be credited in <strong>July 2025</strong>. The exact date is announced by the Prime Minister's Office. The 18th installment was released in February 2025, transferring ₹2,000 directly to over 9.4 crore farmers.</p>

<h2>How to Check PM Kisan Status 2025</h2>
<ol>
  <li>Go to <strong>pmkisan.gov.in</strong></li>
  <li>Click on <strong>"Beneficiary Status"</strong></li>
  <li>Enter your <strong>Aadhaar Number</strong> or registered mobile number</li>
  <li>Click "Get Data" to see your payment status</li>
</ol>

<h2>Why Might Your PM Kisan Installment Be Stuck?</h2>
<ul>
  <li><strong>eKYC not completed</strong> — the most common reason. Complete eKYC at pmkisan.gov.in</li>
  <li><strong>Aadhaar not linked to bank account</strong> — visit your bank branch</li>
  <li><strong>Land records mismatch</strong> — contact your local agriculture department</li>
  <li><strong>Wrong bank account details</strong> — update through the beneficiary correction portal</li>
</ul>

<h2>PM Kisan eKYC — How to Complete</h2>
<ol>
  <li>Go to pmkisan.gov.in and click "eKYC"</li>
  <li>Enter your Aadhaar number and registered mobile OTP</li>
  <li>Or visit your nearest Common Service Centre (CSC) for biometric eKYC</li>
</ol>

<p>All registered beneficiaries who have completed their eKYC and have a valid Aadhaar-linked bank account will receive the ₹2,000 installment directly in their bank account.</p>
    `,
    contentHindi: `
<p><strong>पीएम किसान सम्मान निधि 19वीं किस्त</strong> <strong>जुलाई 2025</strong> में आने की उम्मीद है। केंद्र सरकार साल में तीन बार किस्त जारी करती है।</p>
<h2>19वीं किस्त की संभावित तारीख</h2>
<p>पिछली किस्तों के पैटर्न के आधार पर, 19वीं किस्त <strong>जुलाई 2025</strong> में आने की उम्मीद है।</p>
<h2>पीएम किसान स्टेटस कैसे चेक करें</h2>
<ol>
  <li>pmkisan.gov.in पर जाएं</li>
  <li>"Beneficiary Status" पर क्लिक करें</li>
  <li>अपना आधार नंबर डालें</li>
  <li>"Get Data" पर क्लिक करें</li>
</ol>
    `,
  },
  {
    slug: "ayushman-bharat-card-download-2025",
    title: "Ayushman Bharat Card Download 2025 — Download Your Health Card in 2 Minutes",
    titleHindi: "आयुष्मान भारत कार्ड डाउनलोड 2025 — 2 मिनट में कार्ड कैसे डाउनलोड करें",
    date: "2025-04-25",
    excerpt: "Download your Ayushman Bharat PM-JAY health card online at beneficiary.nha.gov.in. Step-by-step guide with screenshots.",
    excerptHindi: "आयुष्मान भारत पीएम-जेएवाई हेल्थ कार्ड beneficiary.nha.gov.in पर डाउनलोड करें। आसान स्टेप-बाय-स्टेप गाइड।",
    category: "health",
    tags: ["ayushman bharat card download", "pm jay card", "ayushman card 2025", "health card india"],
    schemeSlug: "ayushman-bharat-yojana",
    isPopular: true,
    content: `
<p>The <strong>Ayushman Bharat PM-JAY health card</strong> gives you access to free hospitalisation treatment worth up to <strong>₹5 lakh per year</strong> at over 27,000 empanelled hospitals across India. Here is how to download it in minutes.</p>

<h2>How to Download Ayushman Bharat Card Online</h2>
<ol>
  <li>Visit <strong>beneficiary.nha.gov.in</strong></li>
  <li>Click on <strong>"Beneficiary Login"</strong></li>
  <li>Enter your registered mobile number and verify the OTP</li>
  <li>Enter your <strong>Aadhaar number</strong> for authentication</li>
  <li>Your Ayushman Bharat card will appear — click <strong>"Download"</strong></li>
</ol>

<h2>How to Check if You are Eligible for Ayushman Bharat</h2>
<ul>
  <li>Visit pmjay.gov.in and click "Am I Eligible"</li>
  <li>Enter your mobile number and state</li>
  <li>Search by name, HHD number, or ration card number</li>
</ul>

<h2>Ayushman Bharat Card at Hospital — What to Carry</h2>
<p>When visiting an empanelled hospital, carry your <strong>Aadhaar card</strong> and <strong>ration card</strong>. The hospital's Ayushman Mitra will verify your eligibility on the spot and create your card if you don't already have one.</p>

<h2>Hospitals Accepting Ayushman Bharat Card</h2>
<p>Over 27,000 government and private hospitals across India are empanelled under PM-JAY. To find the nearest hospital, visit the Hospital Finder at pmjay.gov.in or call the helpline <strong>14555</strong>.</p>
    `,
  },
  {
    slug: "pm-awas-yojana-list-2025-check-name",
    title: "PM Awas Yojana List 2025 — Check Your Name in PMAY Beneficiary List",
    date: "2025-04-22",
    excerpt: "Check if your name is in the PM Awas Yojana 2025 beneficiary list online at pmayg.nic.in. Complete guide for rural and urban areas.",
    category: "central",
    tags: ["pm awas yojana list 2025", "pmay beneficiary list", "pradhan mantri awas yojana apply", "housing scheme india"],
    schemeSlug: "pm-awas-yojana",
    isPopular: true,
    content: `
<p>The <strong>PM Awas Yojana beneficiary list 2025</strong> is now available online. Families who applied for PMAY-Gramin (rural) or PMAY-Urban housing scheme can check if their name has been selected.</p>

<h2>How to Check Your Name in PM Awas Yojana List 2025</h2>
<h3>For Rural Areas (PMAY-G)</h3>
<ol>
  <li>Visit <strong>pmayg.nic.in</strong></li>
  <li>Click on <strong>"Awaassoft"</strong> in the top menu</li>
  <li>Select <strong>"Report"</strong></li>
  <li>Click on <strong>"Beneficiary details for verification"</strong></li>
  <li>Select your State, District, Block, and Village</li>
  <li>Your village's beneficiary list will appear</li>
</ol>

<h3>For Urban Areas (PMAY-U)</h3>
<ol>
  <li>Visit <strong>pmaymis.gov.in</strong></li>
  <li>Click on <strong>"Search Beneficiary"</strong></li>
  <li>Enter your Aadhaar number</li>
  <li>Your application status will be displayed</li>
</ol>

<h2>How to Apply for PM Awas Yojana 2025</h2>
<ul>
  <li><strong>Rural:</strong> Apply through your Gram Panchayat or Block Development Office</li>
  <li><strong>Urban:</strong> Apply online at pmaymis.gov.in or through your Urban Local Body office</li>
</ul>

<h2>PM Awas Yojana Eligibility 2025</h2>
<ul>
  <li>No pucca house (must be kutcha/semi-pucca)</li>
  <li>BPL household or economically weaker section</li>
  <li>Annual household income below ₹3 lakh (urban)</li>
  <li>Have not previously received housing benefit under any government scheme</li>
</ul>
    `,
  },
  {
    slug: "ladli-behna-yojana-mp-april-2025-installment",
    title: "Ladli Behna Yojana MP — April 2025 Installment Status & Payment Date",
    date: "2025-04-18",
    excerpt: "Madhya Pradesh Ladli Behna Yojana April 2025 installment has been released. Check your payment status at cmladlibahna.mp.gov.in.",
    category: "state",
    state: "madhya-pradesh",
    tags: ["ladli behna yojana installment", "ladli behna april 2025", "mp women scheme", "ladli behna status check"],
    isPopular: true,
    content: `
<p>The <strong>Ladli Behna Yojana Madhya Pradesh April 2025 installment</strong> of ₹1,250 per month has been credited to the bank accounts of over 1.29 crore women beneficiaries across Madhya Pradesh.</p>

<h2>How to Check Ladli Behna Yojana Payment Status</h2>
<ol>
  <li>Visit <strong>cmladlibahna.mp.gov.in</strong></li>
  <li>Click on <strong>"आवेदन एवं भुगतान की स्थिति"</strong> (Application and Payment Status)</li>
  <li>Enter your registered mobile number or Application number</li>
  <li>Enter the OTP received on your mobile</li>
  <li>Your payment status and installment history will be displayed</li>
</ol>

<h2>Ladli Behna Yojana Eligibility</h2>
<ul>
  <li>Married woman resident of Madhya Pradesh</li>
  <li>Age 21 to 60 years</li>
  <li>Annual family income below ₹2.5 lakh</li>
  <li>Not an income tax payer</li>
  <li>Not a government employee</li>
</ul>

<h2>What if Your Payment is Not Received?</h2>
<p>If your Ladli Behna installment has not arrived, check: (1) your bank account is active and Aadhaar-linked, (2) your eKYC is complete, (3) your application status shows "Approved". Contact your Anganwadi worker or camp organiser for corrections.</p>
    `,
  },
  {
    slug: "new-government-schemes-april-2025",
    title: "New Government Schemes Launched in April 2025 — Complete List",
    date: "2025-04-15",
    excerpt: "List of all new central and state government schemes launched in April 2025. PM Rahat Scheme, Delhi Lakhpati Bitiya Yojana, and more.",
    category: "central",
    tags: ["new government schemes 2025", "new schemes april 2025", "latest yojana 2025"],
    isPopular: false,
    content: `
<p>Several new central and state government schemes were launched or updated in April 2025. Here is a complete list of the latest government yojanas you should know about.</p>

<h2>Central Government New Schemes — April 2025</h2>
<ul>
  <li><strong>PM Rahat Scheme:</strong> Free cashless medical treatment up to ₹1.5 lakh for road accident victims at any empanelled hospital. Launched February 2026.</li>
  <li><strong>NBS Fertilizer Subsidy:</strong> Cabinet approved ₹41,534 crore fertilizer subsidy for Kharif 2025 season under the Nutrient Based Subsidy scheme.</li>
</ul>

<h2>State Government New Schemes — April 2025</h2>
<ul>
  <li><strong>Delhi Lakhpati Bitiya Yojana:</strong> Replaces old Ladli Yojana. Provides financial support to girl children from birth to graduation. Registration open at Delhi e-District portal.</li>
  <li><strong>Punjab Mawan Dhiyan Satkar Yojana:</strong> ₹1,000–₹1,500/month for women in Punjab. Registration started April 15, 2025.</li>
  <li><strong>Punjab Solar Street Lighting Scheme:</strong> 3 lakh solar lights to be installed in 11,500 Punjab villages.</li>
</ul>

<h2>Scheme Updates — April 2025</h2>
<ul>
  <li><strong>PM Ujjwala Yojana:</strong> ₹300/cylinder subsidy extended for FY 2025-26, capped at 9 cylinders/year via DBT.</li>
  <li><strong>UP Farmer ID Registration:</strong> Deadline April 30, 2025. Mandatory for fertilizer subsidies and PM Kisan benefits from May 15, 2025.</li>
</ul>

<p>Bookmark this page and check back regularly. We update this list as new schemes are announced by the central and state governments.</p>
    `,
  },
  {
    slug: "sukanya-samriddhi-yojana-interest-rate-2025",
    title: "Sukanya Samriddhi Yojana Interest Rate 2025 — 8.2% Confirmed for Q1",
    date: "2025-04-10",
    excerpt: "The government has confirmed 8.2% interest rate for Sukanya Samriddhi Yojana for Q1 FY 2025-26. Here is everything you need to know.",
    category: "women",
    tags: ["sukanya samriddhi yojana interest rate", "ssy 2025", "girl child scheme interest", "post office scheme"],
    schemeSlug: "sukanya-samriddhi-yojana",
    content: `
<p>The Government of India has <strong>confirmed the Sukanya Samriddhi Yojana (SSY) interest rate at 8.2% per annum</strong> for Q1 FY 2025-26 (April to June 2025). This makes SSY one of the highest-yielding government-backed savings instruments in India.</p>

<h2>SSY Interest Rate History</h2>
<ul>
  <li>Q1 FY 2025-26 (Apr–Jun 2025): <strong>8.2%</strong></li>
  <li>FY 2024-25: 8.2%</li>
  <li>FY 2023-24: 8.0% (Q1–Q2), 8.2% (Q3–Q4)</li>
</ul>

<h2>How to Maximise SSY Returns</h2>
<ul>
  <li><strong>Deposit before April 5 each year</strong> — interest is calculated on the minimum balance between 5th and end of month. Depositing early earns more interest.</li>
  <li><strong>Deposit ₹1.5 lakh annually</strong> — this is the maximum and makes you eligible for the full ₹1.5 lakh Section 80C deduction.</li>
  <li><strong>Open account as early as possible</strong> — earlier you open (before girl turns 10), more years you get at this high interest rate.</li>
</ul>

<h2>When Will SSY Mature?</h2>
<p>An SSY account matures 21 years from the date of account opening. Early closure is allowed only for the girl's marriage after she turns 18, or on her death.</p>
    `,
  },
  {
    slug: "pm-mudra-loan-apply-online-2025",
    title: "PM Mudra Loan Apply Online 2025 — Get ₹50,000 to ₹20 Lakh for Your Business",
    date: "2025-04-05",
    excerpt: "How to apply for PM Mudra Yojana loan online in 2025. Eligibility, documents, which bank to approach, and how long it takes.",
    category: "finance",
    tags: ["mudra loan apply 2025", "pm mudra yojana online", "business loan government", "shishu kishore tarun loan"],
    schemeSlug: "pm-mudra-yojana",
    content: `
<p>The <strong>PM Mudra Yojana loan</strong> has helped over 57 crore small businesses since 2015. In 2025, you can apply online for loans from ₹50,000 (Shishu) to ₹20 lakh (Tarun) without any collateral.</p>

<h2>Which Mudra Loan Category is Right for You?</h2>
<ul>
  <li><strong>Shishu:</strong> Up to ₹50,000 — for new businesses just starting out</li>
  <li><strong>Kishore:</strong> ₹50,001 to ₹5 lakh — for businesses that have started but need funds to grow</li>
  <li><strong>Tarun:</strong> ₹5 lakh to ₹20 lakh — for established businesses that need larger capital</li>
</ul>

<h2>How to Apply for Mudra Loan Online in 2025</h2>
<ol>
  <li>Visit <strong>udyamimitra.in</strong> (the official Mudra loan portal)</li>
  <li>Click <strong>"Apply Now"</strong> under the relevant loan category</li>
  <li>Register with your Aadhaar-linked mobile number</li>
  <li>Fill in business details and loan amount required</li>
  <li>Upload documents (Aadhaar, PAN, bank statement, business proof)</li>
  <li>Submit — a bank will contact you within 7 days</li>
</ol>
<p>Alternatively, walk into any public sector bank branch (SBI, PNB, Bank of Baroda) or private bank and ask for a <strong>Mudra loan application form</strong>.</p>

<h2>Documents Required for Mudra Loan</h2>
<ul>
  <li>Aadhaar Card and PAN Card</li>
  <li>Last 6 months bank statement</li>
  <li>Business registration / GST certificate (if applicable)</li>
  <li>Passport size photographs</li>
  <li>Quotation of machinery/equipment (for equipment loans)</li>
</ul>

<h2>How Long Does Mudra Loan Approval Take?</h2>
<p>Typically <strong>7 to 14 working days</strong> after complete document submission. PSU banks generally take longer than private banks. The entire process can be done online via udyamimitra.in.</p>
    `,
  },
];

// Helper functions
export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}

export function getRecentArticles(count = 6): NewsArticle[] {
  return [...newsArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getRelatedArticles(article: NewsArticle, count = 3): NewsArticle[] {
  return newsArticles
    .filter(
      (a) =>
        a.slug !== article.slug &&
        (a.category === article.category ||
          a.tags.some((t) => article.tags.includes(t)) ||
          (a.schemeSlug && a.schemeSlug === article.schemeSlug))
    )
    .slice(0, count);
}

export function getPopularArticles(count = 5): NewsArticle[] {
  return newsArticles.filter((a) => a.isPopular).slice(0, count);
}
