/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'CTM Workspaces Registry',
    description: 'Custom images maintained by me.',
    icon: '/img/logo.svg',
    listUrl: 'https://cmantsch.github.io/kasm-registry/',
    contactUrl: 'https://github.com/cmantsch/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
