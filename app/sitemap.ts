import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.orgopros.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${BASE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/pricing`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/testimonials`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/get-started`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
