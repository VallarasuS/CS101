/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: 'https://cs101.in/',
  images: {
    loader: 'akamai',
    path: '',
  }
}

module.exports = nextConfig
