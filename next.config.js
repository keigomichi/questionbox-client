/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://163.44.182.176:4000/:path*'
      }
    ]
  }
}

module.exports = nextConfig
