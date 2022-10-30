/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains: ["links.papareact.com","fakestoreapi.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
