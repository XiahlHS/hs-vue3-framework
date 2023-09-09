const path = require("path");
const fs = require("fs");

function resolvePath(url) {
  return path.resolve(__dirname, url);
}

function isExist(path) {
  return new Promise((resolve, reject) => {
    fs.access(path, (err) => {
      if (err !== null) {
        reject(`${path} does not exist`);
      } else {
        resolve(true);
      }
    });
  });
}

function copyF(from, to) {
  return fs.copyFile(from, to, (err) => {
    if (err) throw err;
    console.log(`${from} was copied to ${to}`);
  });
}

async function copyDir(from, to) {
  from = resolvePath(from);
  to = resolvePath(to);
  try {
    await isExist(to);
  } catch (err) {
    try {
      fs.mkdirSync(to, true);
    } catch (error) {
      return false;
    }
  }
  await fs.readdir(from, (err, paths) => {
    paths.forEach((path) => {
      var src = `${from}/${path}`;
      var dist = `${to}/${path}`;
      fs.stat(src, (err, stat) => {
        if (stat.isFile()) {
          fs.writeFileSync(dist, fs.readFileSync(src));
        } else if (stat.isDirectory()) {
          copyDir(src, dist);
        }
      });
    });
  });
}

module.exports = { resolvePath, isExist, copyDir, copyF };
