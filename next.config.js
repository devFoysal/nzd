const isProd = process.env.NODE_ENV === 'production'
// const withImages = require('next-images')
// module.exports = withImages({
//   webpack(config, options) {
//     return config
//   }
// })

module.exports = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  useFileSystemPublicRoutes: false,

  // assetPrefix: isProd ? 'http://nzd.hostingx.biz' : '',
}
