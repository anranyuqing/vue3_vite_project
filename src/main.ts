

import { createApp } from "vue";
import { setupRouter } from "@/router";
import { setupStyle } from "@/plugins";
import App from "./App.vue";
import { AppLoading } from '@/components/AppLoading'
import { setupStore } from '@/store'
const app = createApp(App);
const appLoading = createApp(AppLoading);
setupStore(app)
setupRouter(app);
setupStyle();
//注入项目配置
appLoading.mount("#appLoading")
app.mount("#app").$nextTick(() => { 
    appLoading.unmount()
})
