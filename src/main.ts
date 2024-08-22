import { createApp } from "vue";
import { setupRouter } from "@/router";
import App from "./App.vue";
import { setupStyle } from "@/plugins";
const app = createApp(App);

setupRouter(app);
setupStyle();
app.mount("#app");
