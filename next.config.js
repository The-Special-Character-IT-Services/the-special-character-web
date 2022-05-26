const withPWA = require('next-pwa');
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      'assets.website-files.com',
      '4f22-202-131-101-178.ngrok.io',
      'localhost',
      'the-special-character-web-api.herokuapp.com',
      'ik.imagekit.io',
    ],
  },
  // experimental: {
  //   runtime: 'nodejs',
  //   serverComponents: true,
  // },
  ignoreBuildErrors: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
});
