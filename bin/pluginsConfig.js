const path = require("path");
const vue = require("@vitejs/plugin-vue");
const vueJsx = require("@vitejs/plugin-vue-jsx");
const AutoImport = require("unplugin-auto-import/vite");
const libCss = require("vite-plugin-libcss");
const { createSvgIconsPlugin } = require("vite-plugin-svg-icons");
const { viteCommonjs } = require('@originjs/vite-plugin-commonjs');

let plugins = [vue(), vueJsx(), libCss(), viteCommonjs()];

const autoImportOutDir = path.resolve(__dirname, "../types/auto-imports.d.ts");

function _createAutoImport() {
  return AutoImport({
    imports: [
      "vue",
      /** vue: type true */
      {
        from: "vue",
        imports: [
          "App",
          "CSSProperties"
        ],
        type: true,
      },
      "vue-router",
      /** vue-router: type false */
      {
        from: "vue-router",
        imports: [
          "isNavigationFailure",
          "createRouter",
          "createWebHashHistory",
        ],
        type: false,
      },
      /** vue-router: type true */
      {
        from: "vue-router",
        imports: [
          "Router",
          "RouteLocationRaw",
          "RouteRecordRaw",
          "RouteLocationNormalized",
          "RouteLocationNormalizedLoaded",
          "RouteMeta",
          "RouterLinkProps",
          "RouteRecordNormalized"
        ],
        type: true,
      },
      "vue-i18n",
      /** vue-i18n: type false */
      {
        from: "vue-i18n",
        imports: ["createI18n"],
        type: false,
      },
      /** vue-i18n: type true */
      {
        from: "vue-i18n",
        imports: ["I18n", "I18nOptions"],
        type: true,
      },
      "pinia",
      /** @vueuse/core, 
       *  axios, 
       *  lodash-es,
       *  @purge-icons/generated,
       *  element-plus
       *  ...
       *  type false 
       * */
      {
        'vue': [
          'TransitionGroup',
        ],
        '@vueuse/core': [
          'useClipboard',
          'useMouse',
          'useTemplateRefsList',
          'useWindowSize',
          'useDraggable',
          'useCssVar',
          'useFullscreen',
          'watchThrottled',
          'watchThrottled',
          ['useFetch', 'useMyFetch'],
        ],
        'axios': [
          ['default', 'axios'],
        ],
        "lodash-es": [
          'cloneDeep',
          'omit',
        ],
        "@purge-icons/generated": [
          ['default', 'Iconify'],
        ],
        'element-plus': [
          'ElButton',
          'ElBreadcrumb',
          'ElBreadcrumbItem',
          'ElBacktop',
          'ElDropdown',
          'ElDropdownMenu',
          'ElDropdownItem',
          'ElIcon',
          'ElInput',
          'ElLoading',
          'ElMenu',
          'ElMenuItem',
          'ElMessageBox',
          'ElMessage',
          'ElScrollbar',
          'ElSwitch',
          'ElSubMenu',
        ],
      },
      /** @vueuse/core, 
       *  ...
       *  type true 
       * */
      {
        from: "@vueuse/core",
        imports: [
          'Position',
        ],
        type: true,
      },
    ],
    dts: autoImportOutDir,
  });
}

function _createSvgIconsPlugin() {
  return createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), "src/plugins/SvgIcons/data")],
    symbolId: "icon-[dir]-[name]",
    svgoOptions: true,
  });
}

function getPluginsConfig(isAutoImport = true) {
  if (isAutoImport) plugins.push(_createAutoImport());
  plugins.push(_createSvgIconsPlugin());
  return plugins;
}

module.exports = {
  getPluginsConfig,
};
