

import { createApp } from "vue";
import { setupRouter } from "@/router";
import { setupStyle } from "@/plugins";
import App from "./App.vue";
import { AppProvider } from '@/components/Application'
import { AppLoading } from '@/components/AppLoading'

const app = createApp(App);
const appProvider = createApp(AppProvider);
const appLoading = createApp(AppLoading);

setupRouter(app);
setupStyle();
//注入项目配置
appProvider.mount("#appProvider")
appLoading.mount("#appLoading")
app.mount("#app");
