/* eslint-disable import/no-anonymous-default-export */
// next.config.mjs
export default {
  output: 'export',
  images: {
    unoptimized: true, // Disable image optimization for static export
    domains: ['gpst.billingdil.com'], // Add your external domains here
  },
  experimental: {
    esmExternals: 'loose', // or true
  },
};
