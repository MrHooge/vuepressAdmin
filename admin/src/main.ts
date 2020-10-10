import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from "vue-i18n";

import { AppConfig } from "@/config/app";

import { loadAllPlugins } from "@/plugins";

const app: ReturnType<typeof createApp> = createApp(App);

app.config.globalProperties = AppConfig;

loadAllPlugins(app);

app
  .use(VueI18n)
  .use(store)
  .use(router)
  .mount("#app");
