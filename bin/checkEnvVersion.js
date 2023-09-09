const semver = require("semver");
const { engines } = require("./../package");

let version = ">=19.0.1";
let errHtmlStr = ` Required node version ${version}, got: ${process.version}.`;

module.exports = function checkVersion() {
  if (!!engines && !!engines.node) {
    version = engines.node;
  }

  if (!semver.satisfies(process.version, version)) {
    console.error(errHtmlStr);
    process.exit(1);
  }
};
