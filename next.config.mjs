// next.config.mjs
export default {
  experimental: {
    esmExternals: 'loose', // or true
  },
  images: {
    domains: ['gpst.billingdil.com'], // Add your external domains here
  },
};
