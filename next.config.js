/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_REACT_APP_STRIPE_KEY: process.env.NEXT_PUBLIC_REACT_APP_STRIPE_KEY,
    NEXT_PUBLIC_STRIPE_SECRET_KEY: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY
  }
}

module.exports = nextConfig
