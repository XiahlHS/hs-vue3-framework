import hs from "hs-vue3";
import messages from "./config/I18n/i18n";
import router from "./config/Router/router";
import env from "./config/Env/env";

hs.bootstrapApp({
  i18n: { ...messages },
  router,
  env,
}).then(async (myApp: any) => {
  console.log(hs);
});
