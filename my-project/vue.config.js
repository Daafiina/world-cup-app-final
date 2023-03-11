// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })



const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  transpileDependencies: true,

  devServer: {
    before: app => {
      app.use(
        '/api',
        createProxyMiddleware({
          target: 'https://api.football-data.org/v4',
          changeOrigin: true,
          headers: {
            'X-Auth-Token': 'feea40ee4ac1414a831b124e97e6d650',
          },
          pathRewrite: {
            '^/api': '',
          },
        })
      );
    },
  },
};
