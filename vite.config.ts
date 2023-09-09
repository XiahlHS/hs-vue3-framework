import { defineConfig } from "vite";

const checkVersion = require("./bin/checkEnvVersion");
const { getCssPreprocessorOptions } = require("./bin/cssConfig");
const { getResolveConfig } = require("./bin/resolveConfig");
const { getPluginsConfig } = require("./bin/pluginsConfig");
const serverProxyConfig = require("./bin/serverProxyConfig");

checkVersion();

export default defineConfig(({ command, mode }) => {
  return {
    resolve: getResolveConfig(mode),
    plugins: getPluginsConfig(),
    css: getCssPreprocessorOptions("scss"),
    server: serverProxyConfig,
  };
});
