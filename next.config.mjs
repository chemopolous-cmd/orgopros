/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  images: {
    // Uses sharp if installed; enables modern formats
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/get-started",
        permanent: true,
      },
    ];
  },
};
