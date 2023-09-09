module.exports = {
  host: "0.0.0.0",
  port: 5173,
  hmr: {
    overlay: false,
  },
  proxy: {
    "/api": {
      target: "http://127.0.0.1:10616/api",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
  fs: {
    allow: ['..'],
  },
};
