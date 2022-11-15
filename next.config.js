/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects(){
    return [
      {
        source: '/',
        destination: '/access',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
