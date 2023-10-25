/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ], // Add any other domains you need here
  },
  env: {
    base_url: process.env.REACT_APP_BASE_URL,
  },
};

module.exports = nextConfig;
