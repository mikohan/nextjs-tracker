module.exports = {
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
