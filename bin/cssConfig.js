// Custom Modify Config For Css Preprocessor Options
let fileName = "variables.module.scss";
let filePath = "../src/styles/env";

if(process.env.npm_lifecycle_event == "dev:test") {
  // filePath = "F:/xiahl-project/hs-vue3-projects/hs-vue3/src/styles/env";
  filePath = "D:/01-my-works/xiahl/07-VUE3/hs-vue3/src/styles/env";
}

const { isExist } = require("./utils");
let fileImportPath = `@use "${filePath}/${fileName}" as *;`;
let _path = `${filePath}/${fileName}`;
isExist(_path).catch((rej) => {
  fileImportPath = "";
})

function getCssPreprocessorOptions(type) {
  return {
    preprocessorOptions: {
      [type]: {
        additionalData: (content, loaderContext) => {
          if (loaderContext && loaderContext.endsWith(fileName)) return content;
          return `${fileImportPath} ${content}`;
        },
        javascriptEnabled: true,
      },
    },
  };
}

module.exports = { getCssPreprocessorOptions };
