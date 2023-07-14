const headers = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  }
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    typedRoutes: true,
  },
  poweredByHeader: false,
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers
      },
    ]
  },
  images: {
    remotePatterns: [{
      hostname: "2023.javazone.no",
      protocol: "https"
    }]
  }
}

module.exports = nextConfig
