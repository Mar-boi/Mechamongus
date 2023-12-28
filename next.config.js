/** @type {import('next').NextConfig} */
var firestore = "firebasestorage.googleapis.com";
const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "media-cdn.bnn.in.th",
      "lh3.googleusercontent.com",
    ],
  },
  // reactStrictMode: false,
};

module.exports = nextConfig;
