import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  rules: [["m-1", { margin: "1px" }]],
  shortcuts: {
    "sub-text-color": "c-#ccc",
    "flex-center": "flex justify-center items-center",
    "fix-center":"fixed w-full h-full flex-center"
  },
  theme: {
    colors: {
      "base-bg-color": "var(--cs-color-bg-0)"
    }
  },
});
