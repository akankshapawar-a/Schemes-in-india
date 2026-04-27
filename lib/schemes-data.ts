// ─── Types ────────────────────────────────────────────────────────────────────

export interface Scheme {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  benefit: string;
  category: "agriculture" | "education" | "health" | "housing" | "employment" | "women" | "finance" | "infrastructure";
  eligibility: string[];
  documents: string[];
  applyLink: string;
  launchYear: number;
  keywords: string[];
  faqs: { q: string; a: string }[];
  isPopular?: boolean;
}

export interface State {
  slug: string;
  name: string;
  hindiName: string;
  capital: string;
  population: string;
  totalSchemes: number;
  icon: string;
}

// ─── States ───────────────────────────────────────────────────────────────────

export const states: State[] = [
  { slug: "maharashtra", name: "Maharashtra", hindiName: "महाराष्ट्र", capital: "Mumbai", population: "12.4 Cr", totalSchemes: 48, icon: "🏙️" },
  { slug: "uttar-pradesh", name: "Uttar Pradesh", hindiName: "उत्तर प्रदेश", capital: "Lucknow", population: "24 Cr", totalSchemes: 62, icon: "🕌" },
  { slug: "rajasthan", name: "Rajasthan", hindiName: "राजस्थान", capital: "Jaipur", population: "8.1 Cr", totalSchemes: 41, icon: "🏜️" },
  { slug: "madhya-pradesh", name: "Madhya Pradesh", hindiName: "मध्य प्रदेश", capital: "Bhopal", population: "8.5 Cr", totalSchemes: 44, icon: "🌲" },
  { slug: "bihar", name: "Bihar", hindiName: "बिहार", capital: "Patna", population: "12.8 Cr", totalSchemes: 39, icon: "🛕" },
  { slug: "gujarat", name: "Gujarat", hindiName: "गुजरात", capital: "Gandhinagar", population: "7.1 Cr", totalSchemes: 45, icon: "⚓" },
  { slug: "west-bengal", name: "West Bengal", hindiName: "पश्चिम बंगाल", capital: "Kolkata", population: "10.1 Cr", totalSchemes: 36, icon: "🐯" },
  { slug: "karnataka", name: "Karnataka", hindiName: "कर्नाटक", capital: "Bengaluru", population: "6.7 Cr", totalSchemes: 42, icon: "🌺" },
  { slug: "tamil-nadu", name: "Tamil Nadu", hindiName: "तमिल नाडु", capital: "Chennai", population: "8.2 Cr", totalSchemes: 40, icon: "🏛️" },
  { slug: "andhra-pradesh", name: "Andhra Pradesh", hindiName: "आंध्र प्रदेश", capital: "Amaravati", population: "5.4 Cr", totalSchemes: 35, icon: "🌊" },
  { slug: "telangana", name: "Telangana", hindiName: "तेलंगाना", capital: "Hyderabad", population: "3.8 Cr", totalSchemes: 33, icon: "💎" },
  { slug: "kerala", name: "Kerala", hindiName: "केरल", capital: "Thiruvananthapuram", population: "3.5 Cr", totalSchemes: 38, icon: "🌴" },
  { slug: "punjab", name: "Punjab", hindiName: "पंजाब", capital: "Chandigarh", population: "3.1 Cr", totalSchemes: 31, icon: "🌾" },
  { slug: "haryana", name: "Haryana", hindiName: "हरियाणा", capital: "Chandigarh", population: "2.9 Cr", totalSchemes: 34, icon: "🐄" },
  { slug: "jharkhand", name: "Jharkhand", hindiName: "झारखंड", capital: "Ranchi", population: "3.8 Cr", totalSchemes: 29, icon: "⛏️" },
  { slug: "chhattisgarh", name: "Chhattisgarh", hindiName: "छत्तीसगढ़", capital: "Raipur", population: "2.9 Cr", totalSchemes: 27, icon: "🌿" },
  { slug: "odisha", name: "Odisha", hindiName: "ओडिशा", capital: "Bhubaneswar", population: "4.7 Cr", totalSchemes: 32, icon: "🎨" },
  { slug: "assam", name: "Assam", hindiName: "असम", capital: "Dispur", population: "3.5 Cr", totalSchemes: 28, icon: "🍵" },
  { slug: "himachal-pradesh", name: "Himachal Pradesh", hindiName: "हिमाचल प्रदेश", capital: "Shimla", population: "73 Lakh", totalSchemes: 24, icon: "🏔️" },
  { slug: "uttarakhand", name: "Uttarakhand", hindiName: "उत्तराखंड", capital: "Dehradun", population: "1.1 Cr", totalSchemes: 26, icon: "🏞️" },
  { slug: "delhi", name: "Delhi", hindiName: "दिल्ली", capital: "New Delhi", population: "2.0 Cr", totalSchemes: 30, icon: "🏛️" },
  { slug: "goa", name: "Goa", hindiName: "गोवा", capital: "Panaji", population: "15 Lakh", totalSchemes: 18, icon: "🏖️" },
];

// ─── Central Government Schemes ───────────────────────────────────────────────

export const centralSchemes: Scheme[] = [
  {
    slug: "pm-vishwakarma-yojana",
    title: "PM Vishwakarma Yojana 2025",
    shortTitle: "PM Vishwakarma",
    description: "PM Vishwakarma Yojana provides financial assistance, skill training, and recognition to traditional artisans and craftspeople across India covering 18 trades.",
    benefit: "₹3 Lakh loan at 5% interest + ₹15,000 toolkit + free skill training",
    category: "employment",
    eligibility: [
      "Traditional artisan or craftsperson",
      "Must belong to one of 18 eligible trades",
      "Age 18 years or above",
      "Self-employed (not salaried)",
      "Not enrolled in any similar central/state scheme",
    ],
    documents: ["Aadhaar Card", "Mobile number linked to Aadhaar", "Bank account details", "Caste certificate (if applicable)", "Proof of trade/craft"],
    applyLink: "https://pmvishwakarma.gov.in",
    launchYear: 2023,
    keywords: ["pm vishwakarma yojana registration", "vishwakarma yojana login", "pm vishwakarma documents", "vishwakarma yojana eligibility", "vishwakarma yojana loan"],
    isPopular: true,
    faqs: [
      { q: "What is PM Vishwakarma Yojana?", a: "PM Vishwakarma Yojana is a central government scheme launched on September 17, 2023 to support traditional artisans and craftspeople with skill training, toolkit support, and collateral-free loans." },
      { q: "Who is eligible for PM Vishwakarma Yojana?", a: "Any traditional artisan or craftsperson who works with hands and tools, belongs to one of the 18 eligible trades, is 18+ years old, and is self-employed can apply." },
      { q: "What is the loan amount under PM Vishwakarma Yojana?", a: "Eligible artisans can get up to ₹1 lakh in the first tranche and ₹2 lakh in the second tranche (total ₹3 lakh) at a concessional interest rate of 5% per annum." },
      { q: "How to apply for PM Vishwakarma Yojana online?", a: "Visit pmvishwakarma.gov.in, click on 'Apply Now', register with your Aadhaar-linked mobile number, fill in the application form, and submit the required documents." },
      { q: "What are the 18 trades covered?", a: "The 18 trades include Carpenter, Boat Maker, Armourer, Blacksmith, Hammer & Tool Kit Maker, Locksmith, Goldsmith, Potter, Sculptor, Cobbler, Mason, Basket/Mat/Broom Maker, Doll & Toy Maker, Barber, Garland Maker, Washerman, Tailor, and Fishing Net Maker." },
      { q: "Is PM Vishwakarma Yojana only for certain castes?", a: "No, the scheme is open to artisans from all communities who practice one of the 18 eligible traditional crafts or trades." },
      { q: "What is the toolkit e-voucher benefit?", a: "Enrolled beneficiaries receive a ₹15,000 e-voucher to purchase tools and equipment required for their trade from registered vendors on the portal." },
      { q: "Can women apply for PM Vishwakarma Yojana?", a: "Yes, women artisans and craftspeople are fully eligible to apply and are encouraged to participate." },
    ],
  },
  {
    slug: "pm-awas-yojana",
    title: "PM Awas Yojana 2025 — Pradhan Mantri Awas Yojana",
    shortTitle: "PM Awas Yojana",
    description: "Pradhan Mantri Awas Yojana provides financial assistance for construction of pucca houses to homeless and kutcha house-dwelling families in rural and urban areas.",
    benefit: "₹1.20 lakh (rural) to ₹2.67 lakh (urban) housing subsidy",
    category: "housing",
    eligibility: ["BPL family", "No pucca house", "Not availed housing benefit before", "Annual income under ₹3 lakh (urban)"],
    documents: ["Aadhaar Card", "BPL Certificate", "Bank Passbook", "Income Certificate", "Land ownership proof"],
    applyLink: "https://pmayg.nic.in",
    launchYear: 2016,
    keywords: ["pm awas yojana list 2025", "pradhan mantri awas yojana apply", "pmay registration", "awas yojana gramin"],
    isPopular: true,
    faqs: [
      { q: "What is PM Awas Yojana?", a: "PM Awas Yojana is a flagship housing scheme providing financial assistance to economically weaker sections to construct or purchase a pucca house." },
      { q: "How much subsidy is given under PMAY?", a: "Under PMAY-Gramin, ₹1.20 lakh is given in plain areas and ₹1.30 lakh in hilly/difficult areas. Under PMAY-Urban, interest subsidy up to ₹2.67 lakh is provided." },
      { q: "How to check PM Awas Yojana list?", a: "Visit pmayg.nic.in, click on 'Awaassoft', then 'Report', and select 'Beneficiary details for verification' to check your name in the list." },
      { q: "Can I apply for PM Awas Yojana online?", a: "Yes, you can apply through the official PMAY portal at pmaymis.gov.in for urban areas or through your local Gram Panchayat for rural areas." },
    ],
  },
  {
    slug: "pm-kisan-samman-nidhi",
    title: "PM Kisan Samman Nidhi Yojana 2025",
    shortTitle: "PM Kisan",
    description: "PM-KISAN provides ₹6,000 per year direct income support to all land-holding farmer families across India in three equal instalments of ₹2,000.",
    benefit: "₹6,000/year directly to bank account in 3 instalments",
    category: "agriculture",
    eligibility: ["Land-owning farmer family", "Valid Aadhaar", "Bank account linked", "Not income tax payee"],
    documents: ["Aadhaar Card", "Land records / Khasra-Khatauni", "Bank Passbook", "Mobile number"],
    applyLink: "https://pmkisan.gov.in",
    launchYear: 2019,
    keywords: ["pm kisan status", "pm kisan 18th installment", "pm kisan beneficiary list", "pm kisan registration"],
    isPopular: true,
    faqs: [
      { q: "When is the next PM Kisan installment?", a: "PM Kisan instalments are released 3 times a year — April-July, August-November, and December-March. The exact date is announced by the government." },
      { q: "How to check PM Kisan status?", a: "Go to pmkisan.gov.in, click 'Beneficiary Status', enter your Aadhaar number or mobile number to check your payment status." },
    ],
  },
  {
    slug: "ayushman-bharat-yojana",
    title: "Ayushman Bharat PM-JAY Yojana 2025",
    shortTitle: "Ayushman Bharat",
    description: "Ayushman Bharat provides free health insurance coverage of ₹5 lakh per family per year for secondary and tertiary hospitalisation to economically vulnerable families.",
    benefit: "₹5 lakh free health insurance per family per year",
    category: "health",
    eligibility: ["SECC database listed family", "No private health insurance", "Any age group covered"],
    documents: ["Aadhaar Card", "Ration Card", "SECC/BPL Certificate"],
    applyLink: "https://pmjay.gov.in",
    launchYear: 2018,
    keywords: ["ayushman bharat card download", "pm jan arogya yojana eligibility", "ayushman card apply online", "pmjay hospital list"],
    isPopular: true,
    faqs: [
      { q: "Who is eligible for Ayushman Bharat?", a: "Families listed in the SECC 2011 database, including rural families with deprived categories and urban workers in 11 occupational categories." },
      { q: "How to download Ayushman Card?", a: "Visit beneficiary.nha.gov.in, enter your mobile number, verify OTP, and download your Ayushman Bharat health card." },
    ],
  },
  {
    slug: "pm-ujjwala-yojana",
    title: "PM Ujjwala Yojana 2.0 — Free LPG Connection",
    shortTitle: "PM Ujjwala",
    description: "Pradhan Mantri Ujjwala Yojana provides free LPG gas connections to women from below poverty line households to replace unhealthy cooking fuel usage.",
    benefit: "Free LPG connection + ₹1,600 financial assistance",
    category: "women",
    eligibility: ["Women 18+ years", "BPL household", "No existing LPG connection", "Not availed PMUY before"],
    documents: ["Aadhaar Card", "BPL Ration Card", "Bank Passbook", "Passport photo"],
    applyLink: "https://pmuy.gov.in",
    launchYear: 2016,
    keywords: ["pm ujjwala yojana apply", "ujjwala yojana 2.0 registration", "free lpg connection apply", "pmuy eligibility"],
    isPopular: true,
    faqs: [
      { q: "What is PM Ujjwala Yojana 2.0?", a: "PMUY 2.0 extends the scheme to more beneficiaries including migrants and adds portability for refills anywhere in India." },
      { q: "How to apply for PM Ujjwala Yojana?", a: "Visit the nearest LPG distributor (HP, Bharatgas, or Indane) or apply online at pmuy.gov.in with your Aadhaar and BPL certificate." },
    ],
  },
  {
    slug: "pm-yasasvi-scholarship",
    title: "PM YASASVI Scholarship Scheme 2025",
    shortTitle: "PM YASASVI",
    description: "PM Young Achievers Scholarship Award Scheme for Vibrant India provides scholarships to OBC, EBC, and DNT students for education in Classes 9-12.",
    benefit: "₹75,000/year for residential school students, ₹25,000/year for day scholars",
    category: "education",
    eligibility: ["OBC/EBC/DNT category student", "Class 9 to 12", "Annual family income ≤ ₹2.5 lakh", "Selected through NTA exam"],
    documents: ["Caste Certificate", "Income Certificate", "School enrollment proof", "Aadhaar Card"],
    applyLink: "https://yet.nta.ac.in",
    launchYear: 2023,
    keywords: ["pm yasasvi scholarship 2025 apply", "yasasvi scholarship eligibility", "yasasvi exam date 2025", "pm yasasvi obc scholarship"],
    isPopular: false,
    faqs: [
      { q: "What is PM YASASVI Scholarship?", a: "It is a scholarship for OBC, EBC, and DNT students studying in Classes 9-12, selected through the YASASVI Entrance Test conducted by NTA." },
      { q: "How much scholarship amount is given?", a: "Students in residential schools/hostels get ₹75,000/year and day scholars in top-class schools get ₹25,000/year." },
    ],
  },
  {
    slug: "pm-svanidhi",
    title: "PM SVANidhi — Street Vendor Loan Scheme 2025",
    shortTitle: "PM SVANidhi",
    description: "PM Street Vendor's AtmaNirbhar Nidhi provides collateral-free working capital loans to street vendors to resume their livelihoods post-COVID disruption.",
    benefit: "Loans of ₹10,000 → ₹20,000 → ₹50,000 + digital cashback rewards",
    category: "finance",
    eligibility: ["Street vendor in any city/town", "Certificate of Vending issued", "Age 18+"],
    documents: ["Aadhaar Card", "Vendor Certificate / Letter of Recommendation", "Bank passbook", "Mobile number"],
    applyLink: "https://pmsvanidhi.mohua.gov.in",
    launchYear: 2020,
    keywords: ["pm svanidhi loan apply", "street vendor loan scheme", "svanidhi yojana registration", "pm svanidhi 50000 loan"],
    isPopular: false,
    faqs: [
      { q: "What loans are available under PM SVANidhi?", a: "Vendors can get ₹10,000 initially, then ₹20,000, and finally ₹50,000 as they repay each loan — a step-up lending model." },
      { q: "Who can apply for PM SVANidhi?", a: "Any street vendor who is vending in urban areas, has a Certificate of Vending, or has a Letter of Recommendation from a Town Vending Committee." },
    ],
  },
  {
    slug: "pm-suraksha-bima-yojana",
    title: "PM Suraksha Bima Yojana — ₹2 Lakh Accident Insurance",
    shortTitle: "PM Suraksha Bima",
    description: "PMSBY provides accidental death and disability insurance cover of ₹2 lakh for just ₹20 per year, renewable annually through bank auto-debit.",
    benefit: "₹2 lakh accident cover for only ₹20/year",
    category: "finance",
    eligibility: ["Age 18–70 years", "Active bank account with auto-debit facility", "Aadhaar linked to bank"],
    documents: ["Aadhaar Card", "Bank account details"],
    applyLink: "https://jansuraksha.gov.in",
    launchYear: 2015,
    keywords: ["pmsby enrollment", "suraksha bima yojana claim", "pm suraksha bima ₹20", "accident insurance scheme india"],
    isPopular: false,
    faqs: [
      { q: "What is covered under PMSBY?", a: "Death or total permanent disability due to accident gets ₹2 lakh. Partial permanent disability gets ₹1 lakh." },
      { q: "How to enroll in PM Suraksha Bima Yojana?", a: "Contact your bank branch or enroll through internet banking/mobile app to activate this insurance with just ₹20/year deducted automatically." },
    ],
  },
];

// ─── State-specific schemes sample (Maharashtra) ──────────────────────────────

export const maharashtraSchemes: Scheme[] = [
  {
    slug: "ladki-bahin-yojana",
    title: "Mukhyamantri Ladki Bahin Yojana 2025 Maharashtra",
    shortTitle: "Ladki Bahin Yojana",
    description: "Maharashtra government provides ₹1,500 per month financial assistance directly to eligible women beneficiaries to improve their economic independence.",
    benefit: "₹1,500/month direct bank transfer to women",
    category: "women",
    eligibility: ["Maharashtra resident woman", "Age 21–65 years", "Annual family income ≤ ₹2.5 lakh", "Domicile certificate holder"],
    documents: ["Aadhaar Card", "Domicile Certificate", "Bank Passbook", "Income Certificate", "Age proof"],
    applyLink: "https://namo-shetkari-yojana.maharashtra.gov.in",
    launchYear: 2024,
    keywords: ["ladki bahin yojana apply", "ladki bahin yojana ₹1500", "ladki bahin eligibility", "maharashtra women scheme 2024"],
    isPopular: true,
    faqs: [
      { q: "What is Mukhyamantri Ladki Bahin Yojana?", a: "It is a Maharashtra state scheme providing ₹1,500 per month financial assistance to eligible women aged 21-65 with annual family income below ₹2.5 lakh." },
      { q: "How to apply for Ladki Bahin Yojana?", a: "Apply through the Aaple Sarkar portal or at any Seva Kendra with your Aadhaar, domicile certificate, and bank details." },
    ],
  },
  {
    slug: "namo-shetkari-yojana",
    title: "Namo Shetkari Maha Samman Nidhi Yojana",
    shortTitle: "Namo Shetkari Yojana",
    description: "Maharashtra's own farmer income support scheme providing ₹6,000/year in addition to PM-KISAN, effectively doubling farmer income support to ₹12,000/year.",
    benefit: "₹6,000/year extra (total ₹12,000/year with PM-KISAN)",
    category: "agriculture",
    eligibility: ["Maharashtra resident farmer", "Registered with PM-KISAN", "Valid 7/12 land record"],
    documents: ["7/12 Extract", "Aadhaar Card", "Bank Passbook", "PM-KISAN registration number"],
    applyLink: "https://namo-shetkari-yojana.maharashtra.gov.in",
    launchYear: 2023,
    keywords: ["namo shetkari yojana apply", "namo shetkari status", "maharashtra farmer scheme 2024", "namo shetkari installment"],
    isPopular: true,
    faqs: [
      { q: "Who is eligible for Namo Shetkari Yojana?", a: "Any farmer registered in Maharashtra who is also a PM-KISAN beneficiary can receive the additional ₹6,000/year." },
    ],
  },
];

// Helper to get schemes by state slug
export function getSchemesByState(stateSlug: string): Scheme[] {
  const stateMap: Record<string, Scheme[]> = {
    "maharashtra": maharashtraSchemes,
    // Add more states as content grows
  };
  return stateMap[stateSlug] || [];
}

// Categories with metadata
export const categories = [
  { slug: "agriculture", label: "Agriculture", icon: "🌾", color: "#16a34a" },
  { slug: "education", label: "Education", icon: "📚", color: "#2563eb" },
  { slug: "health", label: "Health", icon: "🏥", color: "#dc2626" },
  { slug: "housing", label: "Housing", icon: "🏠", color: "#d97706" },
  { slug: "employment", label: "Employment", icon: "💼", color: "#7c3aed" },
  { slug: "women", label: "Women", icon: "👩", color: "#db2777" },
  { slug: "finance", label: "Finance", icon: "💰", color: "#0891b2" },
  { slug: "infrastructure", label: "Infrastructure", icon: "🏗️", color: "#374151" },
];
