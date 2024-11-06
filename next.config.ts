import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's3.us-west-2.amazonaws.com',
        pathname: '/cdn.number8.com/LA/**',
      },
    ],
  },
};

export default nextConfig;
