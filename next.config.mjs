/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net", // Contentful
      },
      {
        protocol: "https",
        hostname: "cdn.example.com", // Ví dụ khác
      },
      {
        protocol: "https",
        hostname: "another-source.com", // Thêm hostname khác
      },
    ],
  },
};

export default nextConfig;
