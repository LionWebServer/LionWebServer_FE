const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/server",
    createProxyMiddleware({
      target: "http://110.11.183.148:8000",
      changeOrigin: true,
      pathRewrite: {
        "^/server": "", // URL ^/server -> 공백 변경
      },
    })
  );
};
