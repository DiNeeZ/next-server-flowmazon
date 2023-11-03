/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "m.media-amazon.com",
      },
      {
        hostname: "store.storeimages.cdn-apple.com",
      },
    ],
  },
};

module.exports = nextConfig;
