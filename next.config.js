const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    config.module.rules.push({
      test: /\.(graphql|gql)?$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
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
