const ContentSecurityPolicy = `
  default-src 'none';
  script-src 'self';
  style-src 'self';
  font-src 'self';
  base-uri 'self';
  form-action 'self'
  frame-ancestors 'none';
`

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
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
]

const productionOnlyHeaders = [""]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  poweredByHeader: false,
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: headers.filter((header) => {
          if (productionOnlyHeaders.includes(header.key)) return process.env.NODE_ENV === 'production'
          return true
        }),
      },
    ]
  },
}

module.exports = nextConfig
