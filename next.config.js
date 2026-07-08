/** @type {import('next').NextConfig} */
const nextConfig = {
  // output:"export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/videos/**",
      },
    ],
  },
};

module.exports = nextConfig;
