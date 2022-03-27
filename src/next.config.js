/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? 'https://cs101.in/' : '',
  images: {
    loader: 'akamai',
    path: '',
  }
}

module.exports = nextConfig
