/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || "http://localhost:3000",
    NEXT_PUBLIC_BASE_URL_API:
      process.env.BASE_URL_API || "http://localhost:3000",
  },
  images: {
    domains: [
      "assets.example.com",
      "higherid-sg.s3.ap-southeast-1.amazonaws.com",
      "lh3.googleusercontent.com",
    ],
  },
}

module.exports = nextConfig
