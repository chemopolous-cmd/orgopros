// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Add remotePatterns here later if you load images from external domains.
  },
  // If you ever need it:
  // output: "standalone",
  // basePath: "/subpath",
  // trailingSlash: true,
  // experimental: { optimizePackageImports: ["lucide-react"] },
};

export default nextConfig;
