import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // experimental: {
  //   typedRoutes: true,
  //   staleTimes: {
  //     dynamic: 30,
  //   },
  // },
  compiler: {
    reactRemoveProperties: true,
    // removeConsole: {
    //   exclude: ['error'],
    // },
  },
  poweredByHeader: false,
};

export default nextConfig;
