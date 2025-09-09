import type { MetadataRoute } from "next";

// Use your live domain here (or set NEXT_PUBLIC_SITE_URL in your env)
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.orgopros.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
