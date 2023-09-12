/** @type {import('next').NextConfig} */
const nextConfig ={
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://api.instamojo.com/*',
          },
        ]
      },
  };

module.exports = nextConfig
