import { createApp } from "vue";
import { setupRouter } from "@/router";
import { setupStyle } from "@/plugins";
import App from "./App.vue";

const app = createApp(App);
setupRouter(app);
setupStyle();
app.mount("#app");
