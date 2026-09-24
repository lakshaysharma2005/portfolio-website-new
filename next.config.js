/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'opengraph.githubassets.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/gh',
        destination: 'https://github.com/lakshaysharma2005',
        permanent: false,
      },
      {
        source: '/in',
        destination: 'https://www.linkedin.com/in/lakshaysharma2005/',
        permanent: false,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/Lakshay_Sharma_Resume.pdf',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
