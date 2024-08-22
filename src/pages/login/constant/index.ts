import type { FormInst, FormItemInst, FormItemRule, FormRules } from "naive-ui";
export const Rules: FormRules = {
  account: {
    required: true,
    trigger: ["blur"],
  },
};
