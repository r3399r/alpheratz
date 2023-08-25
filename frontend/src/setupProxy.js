/* eslint-disable */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://d3t5cppatwgvf.cloudfront.net/',
      changeOrigin: true,
    }),
  );
};
