/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['nguyenducvuong-nfr-marketplace.infura-ipfs.io', 'ipfs.infura.io'],
  },
}

module.exports = nextConfig
