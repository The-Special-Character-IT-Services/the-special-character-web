const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'tsx', 'mdx'],
  reactStrictMode: true,
  images: {
    domains: [
      'assets.website-files.com',
      '4f22-202-131-101-178.ngrok.io',
      'localhost',
    ],
  },
});
