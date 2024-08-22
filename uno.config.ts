import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  rules: [["m-1", { margin: "1px" }]],
  shortcuts: {
    "sub-text-color": "c-#ccc",
  },
  theme: {},
});
