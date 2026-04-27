/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for fast hosting (Vercel / Netlify / Hostinger)
  // output: 'export', // Uncomment if you want static HTML export

  images: {
    domains: ["schemesindia.in"],
    formats: ["image/avif", "image/webp"],
  },

  // Compression for faster page loads (better SEO)
  compress: true,

  // Generate ETags for caching
  generateEtags: true,

  // Strict mode
  reactStrictMode: true,

  // Headers for SEO and security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      // Cache static assets aggressively
      {
        source: "/(.*)\\.(jpg|jpeg|png|gif|ico|svg|woff|woff2)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },

  // Redirects for common typos / old URLs
  async redirects() {
    return [
      { source: "/pm-vishwakarma", destination: "/central/pm-vishwakarma-yojana", permanent: true },
      { source: "/pm-kisan", destination: "/central/pm-kisan-samman-nidhi", permanent: true },
      { source: "/ayushman", destination: "/central/ayushman-bharat-yojana", permanent: true },
    ];
  },
};

module.exports = nextConfig;
