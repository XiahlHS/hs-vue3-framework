const { createServer } = require("vite");

async function devProd() {
  const server = await createServer({
    root: "../",
    configFile: "../vite.config.ts",
    mode: "dev:prod",
    clearScreen: false,
    cacheDir: "../node_modules/.vite",
  });
  if (!server.httpServer) {
    throw new Error("HTTP server not available");
  }
  await server.listen();
  server.printUrls();
}

devProd();
