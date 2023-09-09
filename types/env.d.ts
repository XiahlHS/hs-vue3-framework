/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component
}

declare module "hs-vue3" {
  import { DefineComponent } from "vue";
  import { IBootstrapApp, IAxiosInstance, IHttpRequest } from "hs-vue3/types";

  export const Layout: DefineComponent<{}, {}, any>;
  export const bootstrapApp: IBootstrapApp;
  export const $http: IAxiosInstance;
  export const $req: IHttpRequest;
  export default {
    Layout,
    bootstrapApp,
    $http,
    $req,
  };
}