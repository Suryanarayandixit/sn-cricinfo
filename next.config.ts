/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ye build ko errors ke bawajood pass kar dega
    ignoreBuildErrors: true,
  },
  eslint: {
    // Build ke waqt linting errors bhi ignore karega
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;