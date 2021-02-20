const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
  },
  typescript: {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://192.168.0.107/:path*',
        },
      ];
    },
    ignoreBuildErrors: true,
  },
};
