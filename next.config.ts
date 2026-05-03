import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'scores.iplt20.com' },
      { protocol: 'https', hostname: 'www.iplt20.com' },
      { protocol: 'https', hostname: 'img1.hscicdn.com' },
      { protocol: 'https', hostname: 'people.cricbuzz.com' },
      { protocol: 'https', hostname: 'cricbuzz-cricket.p.rapidapi.com' },
    ],
  },
};

export default nextConfig;