const { resolvePath } = require("./utils");

function getResolvePath(mode) {
  let _default = {
    "@": "../src"
  };
  if (mode == "dev:test") {
    _default["hs-vue3"] = _default["hs"] = "../../hs-vue3/src"
  }
  return _default;
}

function getResolveConfig(mode) {
  let pathObj = getResolvePath(mode),
    alias = [];
  for (const key in pathObj) {
    alias.push({
      find: key,
      replacement: resolvePath(pathObj[key]),
    });
  }
  return {
    alias,
  };
}

module.exports = { getResolveConfig };
