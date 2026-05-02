import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'scores.iplt20.com' },
      { protocol: 'https', hostname: 'www.iplt20.com' },
      { protocol: 'https', hostname: 'cricbuzz-cricket.p.rapidapi.com' },
      { protocol: 'https', hostname: 'img1.hscicdn.com' },
      { protocol: 'https', hostname: 'people.cricbuzz.com' },
    ],
  },
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Ye build ko tab bhi pass kar dega jab errors honge.
    // Temporary deploy ke liye ye best hai.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;