/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hknpolito.org',
      },
    ],
  },
  
  i18n: {
    locales: ['en', 'it'],
    localeDetection: false,
    defaultLocale: 'en',
  },
  distDir: process.env.NEXT_BUILD_DIR || '.next',
}

module.exports = nextConfig
