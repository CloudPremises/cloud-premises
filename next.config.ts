import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  basePath: '/cloud-premises',
  assetPrefix: '/cloud-premises/',

  /* config options here */
  images: {

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cloudpremises.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
